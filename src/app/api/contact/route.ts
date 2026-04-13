import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "contact@pixologie.agency";
const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Pixologie <onboarding@resend.dev>";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing RESEND_API_KEY. Add it in Vercel project env (or .env.local) to enable email.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const honeypot = typeof data.website === "string" ? data.website : "";
  if (honeypot.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = typeof data.name === "string" ? data.name.trim().slice(0, 200) : "";
  const email = typeof data.email === "string" ? data.email.trim().slice(0, 320) : "";
  const company =
    typeof data.company === "string" ? data.company.trim().slice(0, 200) : "";
  const message =
    typeof data.message === "string" ? data.message.trim().slice(0, 8000) : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <hr />
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `[Pixologie] ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? "Failed to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
