import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
    topic?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (payload.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const topic = (payload.topic ?? "").trim();
  const allowedTopics = new Set([
    "saas",
    "mobile",
    "game",
    "web",
    "digital",
    "product",
    "other",
  ]);
  const topicLabel = allowedTopics.has(topic) ? topic : "";

  if (!name || !EMAIL_RE.test(email) || message.length < 3) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_EMAIL || "hello@gwolfinteractive.com";
  const from =
    process.env.CONTACT_FROM || "G-Wolf Interactive <noreply@gwolfinteractive.com>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: topicLabel
        ? `Yeni iletişim formu [${topicLabel}]: ${name}`
        : `Yeni iletişim formu: ${name}`,
      text: `Ad: ${name}\nE-posta: ${email}\nKonu: ${topicLabel || "—"}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
