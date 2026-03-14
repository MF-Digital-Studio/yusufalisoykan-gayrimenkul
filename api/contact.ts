import { Resend } from "resend";

const MIN_SUBMIT_MS = 3000;
const MAX_NAME_LENGTH = 120;
const MAX_PHONE_LENGTH = 40;
const MAX_SUBJECT_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 5000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  return /^\+?[0-9()\-\s.]{7,20}$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeDebugEmail(value?: string): string {
  if (!value) return "undefined";

  const [localPart, domain] = value.split("@");
  if (!localPart || !domain) return value;

  if (localPart.length <= 2) {
    return `${localPart[0] ?? "*"}*@${domain}`;
  }

  return `${localPart.slice(0, 2)}***@${domain}`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("CONTACT API CONFIG ERROR", {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(fromEmail),
      hasToEmail: Boolean(toEmail),
    });

    return res.status(500).json({
      success: false,
      error: "Server is not configured for email sending.",
    });
  }

  let body = req.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (err) {
      console.error("CONTACT API INVALID JSON", err);
      return res.status(400).json({
        success: false,
        error: "Invalid JSON payload.",
      });
    }
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const website = typeof body?.website === "string" ? body.website.trim() : "";
  const formStartedAt = Number(body?.formStartedAt);

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "Please fill in all required fields.",
    });
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    phone.length > MAX_PHONE_LENGTH ||
    subject.length > MAX_SUBJECT_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return res.status(400).json({
      success: false,
      error: "One or more fields exceed allowed length.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid email address.",
    });
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid phone number.",
    });
  }

  if (website) {
    console.warn("CONTACT API HONEYPOT TRIGGERED", {
      website,
    });

    return res.status(400).json({
      success: false,
      error: "Spam detection triggered.",
    });
  }

  if (!Number.isFinite(formStartedAt) || Date.now() - formStartedAt < MIN_SUBMIT_MS) {
    return res.status(429).json({
      success: false,
      error: "Please wait a few seconds before submitting.",
    });
  }

  const resend = new Resend(apiKey);

  try {
    const mailSubject = `Yeni İletişim Formu - ${subject} (${name})`;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    console.log("CONTACT API SEND ATTEMPT", {
      fromEmail: safeDebugEmail(fromEmail),
      toEmail: safeDebugEmail(toEmail),
      replyTo: safeDebugEmail(email),
      subject: mailSubject,
    });

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: mailSubject,
      replyTo: email,
      text: `Yeni iletişim formu mesajı

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}
Konu: ${subject}

Mesaj:
${message}`,
      html: `
    <div style="margin:0;padding:0;background-color:#f6f4ef;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="background:#ffffff;border:1px solid #e8e2d8;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);">
          
          <div style="padding:28px 32px;background:#111111;color:#d4ad6a;">
            <div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:0.85;">
              İletişim Formu
            </div>
            <h2 style="margin:10px 0 0;font-size:28px;line-height:1.2;font-weight:700;color:#d4ad6a;">
              Yeni Mesaj
            </h2>
          </div>

          <div style="padding:32px;">
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4b4b4b;">
              Web sitesindeki iletişim formu üzerinden yeni bir mesaj gönderildi.
            </p>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 16px;">
                  <div style="padding:16px 18px;border:1px solid #ece7de;border-radius:12px;background:#faf8f4;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#9a7a45;margin-bottom:6px;">
                      Ad Soyad
                    </div>
                    <div style="font-size:15px;color:#1f1f1f;">${safeName}</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 16px;">
                  <div style="padding:16px 18px;border:1px solid #ece7de;border-radius:12px;background:#faf8f4;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#9a7a45;margin-bottom:6px;">
                      E-posta
                    </div>
                    <div style="font-size:15px;color:#1f1f1f;">${safeEmail}</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 16px;">
                  <div style="padding:16px 18px;border:1px solid #ece7de;border-radius:12px;background:#faf8f4;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#9a7a45;margin-bottom:6px;">
                      Telefon
                    </div>
                    <div style="font-size:15px;color:#1f1f1f;">${safePhone}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 16px;">
                  <div style="padding:16px 18px;border:1px solid #ece7de;border-radius:12px;background:#faf8f4;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#9a7a45;margin-bottom:6px;">
                      Konu
                    </div>
                    <div style="font-size:15px;color:#1f1f1f;">${safeSubject}</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div style="padding:18px;border:1px solid #ece7de;border-radius:12px;background:#faf8f4;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#9a7a45;margin-bottom:10px;">
                      Mesaj
                    </div>
                    <div style="font-size:15px;line-height:1.8;color:#1f1f1f;">
                      ${safeMessage}
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div style="padding:18px 32px;border-top:1px solid #eee7dc;background:#fcfbf8;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:#7a7a7a;">
              Bu mesaj web sitesindeki iletişim formu üzerinden otomatik olarak iletildi.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
    });

    console.log("CONTACT API RESEND RESULT", JSON.stringify(result, null, 2));

    if (result?.error) {
      console.error("CONTACT API RESEND ERROR", JSON.stringify(result.error, null, 2));

      return res.status(502).json({
        success: false,
        error: result.error.message || "Email provider rejected the request.",
        provider: "resend",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      id: result?.data?.id ?? null,
    });
  } catch (err: any) {
    console.error("CONTACT API CATCH ERROR", {
      message: err?.message,
      name: err?.name,
      statusCode: err?.statusCode,
      stack: err?.stack,
      raw: err,
    });

    return res.status(500).json({
      success: false,
      error: err?.message || "Unexpected server error while sending email.",
      provider: "resend",
    });
  }
}


