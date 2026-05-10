import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { generateEmailHtml, generatePlainTextEmail, QuoteFormData } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

const TO_EMAIL = process.env.TO_EMAIL || "quote@centrallakesremovals.co.nz";
const FROM_EMAIL = process.env.FROM_EMAIL || "Central Lakes Removals <quote@centrallakesremovals.co.nz>";

// Rate limiting adapter
// TODO (Production): Replace this in-memory store with a durable store like Redis or a database table
// In a serverless environment (like Vercel), this in-memory state will be reset frequently.
const memoryStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  // Warn if using in-memory store in production without a durable backend
  if (process.env.NODE_ENV === "production" && !process.env.KV_REST_API_URL && !process.env.DATABASE_URL) {
    console.warn("WARNING: Using in-memory rate limiter in production. Rate limits will not persist across serverless function invocations.");
  }

  const now = Date.now();
  const record = memoryStore.get(ip);

  if (!record || now > record.resetTime) {
    memoryStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT - 1, resetIn: RATE_LIMIT_WINDOW };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count, resetIn: record.resetTime - now };
}

interface ValidationError {
  field: string;
  message: string;
}

function validateFormData(data: unknown): { valid: boolean; errors: ValidationError[]; sanitized?: QuoteFormData } {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: [{ field: "form", message: "Invalid form data" }] };
  }

  const formData = data as Record<string, unknown>;

  // Required fields
  if (!formData.name || typeof formData.name !== "string" || formData.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  }

  if (!formData.phone || typeof formData.phone !== "string" || formData.phone.trim().length < 7) {
    errors.push({ field: "phone", message: "Please provide a valid phone number" });
  }

  if (!formData.email || typeof formData.email !== "string") {
    errors.push({ field: "email", message: "Please provide a valid email address" });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push({ field: "email", message: "Please provide a valid email address" });
    }
  }

  if (!formData.movingFrom || typeof formData.movingFrom !== "string" || formData.movingFrom.trim().length < 2) {
    errors.push({ field: "movingFrom", message: "Please specify where you're moving from" });
  }

  if (!formData.movingTo || typeof formData.movingTo !== "string" || formData.movingTo.trim().length < 2) {
    errors.push({ field: "movingTo", message: "Please specify where you're moving to" });
  }

  if (!formData.moveType || typeof formData.moveType !== "string") {
    errors.push({ field: "moveType", message: "Please select a move type" });
  }

  // Optional fields validation
  const sanitized: QuoteFormData = {
    name: typeof formData.name === "string" ? formData.name.trim() : "",
    phone: typeof formData.phone === "string" ? formData.phone.trim() : "",
    email: typeof formData.email === "string" ? formData.email.trim().toLowerCase() : "",
    movingFrom: typeof formData.movingFrom === "string" ? formData.movingFrom.trim() : "",
    movingTo: typeof formData.movingTo === "string" ? formData.movingTo.trim() : "",
    preferredDate: typeof formData.preferredDate === "string" ? formData.preferredDate.trim() : "",
    moveType: typeof formData.moveType === "string" ? formData.moveType.trim() : "",
    mainItems: typeof formData.mainItems === "string" ? formData.mainItems.trim() : "",
    accessNotes: typeof formData.accessNotes === "string" ? formData.accessNotes.trim() : "",
    packingHelp: formData.packingHelp === true,
    message: typeof formData.message === "string" ? formData.message.trim() : "",
  };

  return {
    valid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? sanitized : undefined,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(rateLimit.resetIn / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
          },
        }
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Honeypot check - server side
    const bodyObj = body as Record<string, unknown>;
    if (typeof bodyObj.website === "string" && bodyObj.website.length > 0) {
      // Silently pretend success to fool bots
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Russell will review your details and be in touch shortly.",
        },
        { status: 200 }
      );
    }

    // Validate form data
    const validation = validateFormData(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const formData = validation.sanitized!;

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Email service not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: formData.email,
      subject: `Quote Request from ${formData.name} - ${formData.movingFrom} to ${formData.movingTo}`,
      html: generateEmailHtml(formData),
      text: generatePlainTextEmail(formData),
    });

    if (error) {
      console.error("Resend error:", error.message || "Failed to send email");
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Russell will review your details and be in touch shortly.",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (err) {
    console.error("Quote API error:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}
