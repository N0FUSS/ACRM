export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  preferredDate: string;
  moveType: string;
  mainItems: string;
  accessNotes: string;
  packingHelp: boolean;
  message: string;
}

export function formatMoveType(moveType: string): string {
  const types: Record<string, string> = {
    house: "House Moving",
    furniture: "Furniture Moving",
    "long-distance": "Long Distance",
    other: "Other",
  };
  return types[moveType] || moveType;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "Not specified";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateEmailHtml(data: QuoteFormData): string {
  return `
<!DOCTYPE html>
<html lang="en-NZ">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - Central Lakes Removals</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f0;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 32px 40px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #c9a962; letter-spacing: 0.5px;">
                Central Lakes Removals
              </h1>
              <p style="margin: 8px 0 0; color: #a0a0a0; font-size: 14px;">
                New Quote Request
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Customer Info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding: 20px; background-color: #faf9f7; border-radius: 6px; border-left: 4px solid #c9a962;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #666;">
                      Customer Details
                    </h2>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #333; display: inline-block; width: 80px;">Name:</strong>
                          <span style="color: #1a1a1a;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #333; display: inline-block; width: 80px;">Phone:</strong>
                          <a href="tel:${data.phone}" style="color: #c9a962; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #333; display: inline-block; width: 80px;">Email:</strong>
                          <a href="mailto:${data.email}" style="color: #c9a962; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Move Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #666;">
                      Move Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #888; font-size: 13px;">Moving From</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0 16px; border-bottom: 1px solid #eee;">
                    <span style="color: #1a1a1a; font-size: 16px; font-weight: 500;">${data.movingFrom}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 8px;">
                    <span style="color: #888; font-size: 13px;">Moving To</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0 16px; border-bottom: 1px solid #eee;">
                    <span style="color: #1a1a1a; font-size: 16px; font-weight: 500;">${data.movingTo}</span>
                  </td>
                </tr>
              </table>
              
              <!-- Quick Info Grid -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td width="50%" valign="top" style="padding-right: 12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 16px; background-color: #faf9f7; border-radius: 6px; text-align: center;">
                          <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Preferred Date</span>
                          <p style="margin: 8px 0 0; color: #1a1a1a; font-weight: 500;">${formatDate(data.preferredDate)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="50%" valign="top" style="padding-left: 12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 16px; background-color: #faf9f7; border-radius: 6px; text-align: center;">
                          <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Move Type</span>
                          <p style="margin: 8px 0 0; color: #1a1a1a; font-weight: 500;">${formatMoveType(data.moveType)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Main Items -->
              ${data.mainItems ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; background-color: #faf9f7; border-radius: 6px;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Main Items to Move</span>
                    <p style="margin: 8px 0 0; color: #1a1a1a; line-height: 1.6;">${data.mainItems}</p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Access Notes -->
              ${data.accessNotes ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; background-color: #faf9f7; border-radius: 6px;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Access Notes</span>
                    <p style="margin: 8px 0 0; color: #1a1a1a; line-height: 1.6;">${data.accessNotes}</p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Packing Help -->
              ${data.packingHelp ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #c9a96220; border-radius: 6px; border-left: 4px solid #c9a962;">
                    <span style="color: #c9a962; font-weight: 600;">✓ Packing Help Requested</span>
                    <p style="margin: 4px 0 0; color: #666; font-size: 14px;">Customer may need packing assistance or materials</p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Message -->
              ${data.message ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; background-color: #faf9f7; border-radius: 6px;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Additional Message</span>
                    <p style="margin: 8px 0 0; color: #1a1a1a; line-height: 1.6;">${data.message}</p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding: 24px 0;">
                    <a href="mailto:${data.email}?subject=Re: Your Quote Request - Central Lakes Removals" style="display: inline-block; padding: 14px 32px; background-color: #c9a962; color: #1a1a1a; text-decoration: none; font-weight: 600; border-radius: 6px;">
                      Reply to Customer
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f0; padding: 24px 40px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0; color: #888; font-size: 13px;">
                Central Lakes Removals · Wanaka, New Zealand
              </p>
              <p style="margin: 8px 0 0; color: #aaa; font-size: 12px;">
                Sent via website quote form
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
  
</body>
</html>
`;
}

export function generatePlainTextEmail(data: QuoteFormData): string {
  return `
NEW QUOTE REQUEST - Central Lakes Removals
==========================================

CUSTOMER DETAILS
----------------
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

MOVE DETAILS
------------
Moving From: ${data.movingFrom}
Moving To: ${data.movingTo}
Preferred Date: ${formatDate(data.preferredDate)}
Move Type: ${formatMoveType(data.moveType)}

${data.mainItems ? `MAIN ITEMS TO MOVE
------------------
${data.mainItems}
` : ''}
${data.accessNotes ? `ACCESS NOTES
-------------
${data.accessNotes}
` : ''}
${data.packingHelp ? `✓ PACKING HELP REQUESTED
` : ''}
${data.message ? `ADDITIONAL MESSAGE
------------------
${data.message}
` : ''}
---
Sent via central-lakes-removals.co.nz quote form
`.trim();
}
