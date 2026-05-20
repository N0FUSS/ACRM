"use client";

import { useState, useRef } from "react";
import { businessConfig } from "@/lib/business-config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  urgency: string;
  preferredDate: string;
  moveType: string;
  mainItems: string;
  accessNotes: string;
  packingHelp: boolean;
  message: string;
  // Honeypot
  website?: string;
}

interface FormError {
  field: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    movingFrom: "",
    movingTo: "",
    urgency: "",
    preferredDate: "",
    moveType: "",
    mainItems: "",
    accessNotes: "",
    packingHelp: false,
    message: "",
    website: "",
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FormError[]>([]);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear field error when user starts typing
    setFieldErrors((prev) => prev.filter((err) => err.field !== name));
    setSubmitError(null);
  };

  const validateStep1 = (): boolean => {
    const errors: FormError[] = [];
    if (!formData.name.trim()) errors.push({ field: "name", message: "Name is required" });
    if (!formData.phone.trim()) errors.push({ field: "phone", message: "Phone is required" });
    if (!formData.movingFrom.trim()) errors.push({ field: "movingFrom", message: "Moving from is required" });
    if (!formData.movingTo.trim()) errors.push({ field: "movingTo", message: "Moving to is required" });
    setFieldErrors(errors);
    return errors.length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if honeypot field is filled, it's a bot
    if (formData.website && formData.website.length > 0) {
      // Silently pretend success to fool bots
      setSubmitted(true);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setFieldErrors([]);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setSubmitError(
            data.retryAfter
              ? `Too many requests. Please wait ${Math.ceil(data.retryAfter / 60)} minutes before trying again.`
              : "You're submitting too quickly. Please wait a moment and try again."
          );
        } else if (response.status === 400 && data.errors) {
          setFieldErrors(data.errors);
          setSubmitError("Please correct the errors below.");
        } else if (response.status === 503) {
          setSubmitError(
            `Email service is temporarily unavailable. Please call Russell directly at ${businessConfig.phoneDisplay}.`
          );
        } else {
          setSubmitError(data.error || "Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Unable to connect. Please check your internet connection and try again, or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string): string | undefined => {
    return fieldErrors.find((err) => err.field === fieldName)?.message;
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--brass-glow)] flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading text-[var(--text-primary)]">
          Thank you for your enquiry
        </h3>
        <p className="text-[var(--text-secondary)]">
          Russell will review your details and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Global Error */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{submitError}</p>
        </div>
      )}

      {/* Progress indicator */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 1 ? "bg-[var(--brass-primary)] text-[var(--bg-primary)]" : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
          }`}>1</div>
          <span className="text-sm text-[var(--text-secondary)] hidden sm:inline">Your details</span>
        </div>
        <div className="flex-1 h-px bg-[var(--border-medium)]" />
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 2 ? "bg-[var(--brass-primary)] text-[var(--bg-primary)]" : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
          }`}>2</div>
          <span className="text-sm text-[var(--text-secondary)] hidden sm:inline">Move details</span>
        </div>
      </div>

      {/* ===== STEP 1: Essential details ===== */}
      {step === 1 && (
        <div className="space-y-6">
          <p className="text-sm text-[var(--text-muted)]">
            Takes about 60 seconds. No pressure, no obligation.
          </p>

          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className={getFieldError("name") ? "border-red-500" : ""}
            />
            {getFieldError("name") && (
              <p className="mt-1 text-sm text-red-600">{getFieldError("name")}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
              className={getFieldError("phone") ? "border-red-500" : ""}
            />
            {getFieldError("phone") && (
              <p className="mt-1 text-sm text-red-600">{getFieldError("phone")}</p>
            )}
          </div>

          {/* Moving From & To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="movingFrom">Moving from</label>
              <input
                type="text"
                id="movingFrom"
                name="movingFrom"
                value={formData.movingFrom}
                onChange={handleChange}
                required
                placeholder="Suburb, city or town"
                className={getFieldError("movingFrom") ? "border-red-500" : ""}
              />
              {getFieldError("movingFrom") && (
                <p className="mt-1 text-sm text-red-600">{getFieldError("movingFrom")}</p>
              )}
            </div>
            <div>
              <label htmlFor="movingTo">Moving to</label>
              <input
                type="text"
                id="movingTo"
                name="movingTo"
                value={formData.movingTo}
                onChange={handleChange}
                required
                placeholder="Suburb, city or town"
                className={getFieldError("movingTo") ? "border-red-500" : ""}
              />
              {getFieldError("movingTo") && (
                <p className="mt-1 text-sm text-red-600">{getFieldError("movingTo")}</p>
              )}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label htmlFor="urgency">How urgent is this move?</label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              required
              className={getFieldError("urgency") ? "border-red-500" : ""}
            >
              <option value="">Select urgency</option>
              <option value="emergency">Emergency — within 72 hours</option>
              <option value="urgent">Urgent — 4 to 10 days</option>
              <option value="standard">Standard — 11+ days (most common)</option>
            </select>
            <p className="mt-2 text-xs text-[var(--text-muted)]">We regularly handle all three. This helps Russell plan the right response.</p>
          </div>

          {/* Continue button */}
          <button
            type="button"
            onClick={handleContinue}
            className="btn-primary w-full"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ===== STEP 2: Move details ===== */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Back link */}
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to step 1
          </button>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
              className={getFieldError("email") ? "border-red-500" : ""}
            />
            {getFieldError("email") && (
              <p className="mt-1 text-sm text-red-600">{getFieldError("email")}</p>
            )}
          </div>

          {/* Preferred Date & Move Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate">Preferred moving date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="moveType">Type of move</label>
              <select
                id="moveType"
                name="moveType"
                value={formData.moveType}
                onChange={handleChange}
                required
                className={getFieldError("moveType") ? "border-red-500" : ""}
              >
                <option value="">Select move type</option>
                <option value="house">House moving</option>
                <option value="furniture">Furniture moving</option>
                <option value="long-distance">Long distance</option>
                <option value="other">Other</option>
              </select>
              {getFieldError("moveType") && (
                <p className="mt-1 text-sm text-red-600">{getFieldError("moveType")}</p>
              )}
            </div>
          </div>

          {/* Main Items */}
          <div>
            <label htmlFor="mainItems">Main items to move</label>
            <textarea
              id="mainItems"
              name="mainItems"
              value={formData.mainItems}
              onChange={handleChange}
              rows={3}
              placeholder="e.g., 3 bedroom house, large fridge, queen bed, dining table..."
            />
          </div>

          {/* Access Notes */}
          <div>
            <label htmlFor="accessNotes">Access notes</label>
            <textarea
              id="accessNotes"
              name="accessNotes"
              value={formData.accessNotes}
              onChange={handleChange}
              rows={2}
              placeholder="e.g., narrow driveway, stairs, lift access, restricted hours..."
            />
          </div>

          {/* Packing Help */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="packingHelp"
              name="packingHelp"
              checked={formData.packingHelp}
              onChange={handleChange}
              className="w-5 h-5 rounded border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--brass-primary)] focus:ring-[var(--brass-primary)]"
            />
            <label htmlFor="packingHelp" className="text-[var(--text-secondary)] cursor-pointer">
              I may need packing help or materials
            </label>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message">Additional message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Anything else we should know about your move..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Request a Quote"
            )}
          </button>

          {/* Reassurance */}
          <p className="text-center text-sm text-[var(--text-muted)]">
            No pressure. No generic estimate. Just a careful look at what your move actually needs.
          </p>
        </div>
      )}
    </form>
  );
}
