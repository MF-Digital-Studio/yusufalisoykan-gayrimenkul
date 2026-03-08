import { Resend } from "resend";

const MIN_SUBMIT_MS = 3000;
const MAX_NAME_LENGTH = 120;
const MAX_PHONE_LENGTH = 40;
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
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const website = typeof body?.website === "string" ? body.website.trim() : "";
  const formStartedAt = Number(body?.formStartedAt);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: "Please fill in all required fields.",
    });
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    phone.length > MAX_PHONE_LENGTH ||
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
    const subject = `Yeni İletişim Formu Mesajı - ${name}`;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    console.log("CONTACT API SEND ATTEMPT", {
      fromEmail: safeDebugEmail(fromEmail),
      toEmail: safeDebugEmail(toEmail),
      replyTo: safeDebugEmail(email),
      subject,
    });

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      replyTo: email,
      text: `Yeni iletişim formu mesajı

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone}

Mesaj:
${message}`,
      html: `
        <h2>Yeni iletişim formu mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${safeName}</p>
        <p><strong>E-posta:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${safeMessage}</p>
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