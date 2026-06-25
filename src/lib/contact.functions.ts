import { createServerFn } from "@tanstack/react-start";

/**
 * Contact form submission handler.
 *
 * Email provider credentials and the recipient address are read from environment
 * variables on the server, never exposed to the browser. Configure these in
 * your hosting platform's secret store. Do not commit real values.
 *
 * Preferred Resend setup:
 *   RESEND_API_KEY  Resend API key
 *   RESEND_FROM     Verified sender, e.g. "Johnathan Hyde <contact@example.com>"
 *   CONTACT_TO      Recipient address
 *
 * SMTP fallback:
 *   SMTP_HOST       e.g. "smtp.fastmail.com"
 *   SMTP_PORT       e.g. "465"
 *   SMTP_SECURE     "true" for 465/TLS, "false" for 587/STARTTLS
 *   SMTP_USER       SMTP username
 *   SMTP_PASS       SMTP password / app password
 *   SMTP_FROM       From address, e.g. "Portfolio <noreply@example.com>"
 *   CONTACT_TO      Recipient address
 *
 * Optional public fallback:
 *   CONTACT_PUBLIC_EMAIL  Public inbox used to open a mailto draft when no
 *                         email provider is configured.
 */

type ContactData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
  startedAt: number;
};

type SendContactResult =
  | { ok: true; delivery: "resend" | "smtp" }
  | {
      ok: false;
      delivery: "mailto";
      mailtoHref: string;
      message: string;
    };

const recent = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function rateLimit(key: string) {
  const now = Date.now();
  const arr = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  recent.set(key, arr);
  return arr.length <= MAX_PER_WINDOW;
}

function assertRecord(data: unknown): Record<string, unknown> {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Invalid contact submission.");
  }
  return data as Record<string, unknown>;
}

function readString(
  data: Record<string, unknown>,
  key: string,
  label: string,
  options: { required?: boolean; min?: number; max: number; email?: boolean },
) {
  const value = typeof data[key] === "string" ? data[key].trim() : "";

  if (options.required && value.length === 0) {
    throw new Error(`${label} is required.`);
  }

  if (options.min && value.length > 0 && value.length < options.min) {
    throw new Error(`${label} is too short.`);
  }

  if (value.length > options.max) {
    throw new Error(`${label} is too long.`);
  }

  if (options.email && !EMAIL_PATTERN.test(value)) {
    throw new Error("Enter a valid email address.");
  }

  return value;
}

function parseContactData(data: unknown): ContactData {
  const record = assertRecord(data);
  const startedAt = Number(record.startedAt);

  if (!Number.isInteger(startedAt) || startedAt < 0) {
    throw new Error("Invalid contact submission.");
  }

  return {
    name: readString(record, "name", "Name", { required: true, max: 120 }),
    email: readString(record, "email", "Email", { required: true, max: 200, email: true }),
    company: readString(record, "company", "Company", { max: 160 }),
    projectType: readString(record, "projectType", "Project type", { required: true, max: 80 }),
    budget: readString(record, "budget", "Budget", { required: true, max: 80 }),
    message: readString(record, "message", "Message", { required: true, min: 10, max: 4000 }),
    website: readString(record, "website", "Website", { max: 400 }),
    startedAt,
  };
}

function env(name: string) {
  const value = process.env[name]?.trim();
  return value && value.length > 0 ? value : undefined;
}

function recipientList(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function buildSubject(data: ContactData) {
  return `New inquiry - ${data.name}${data.company ? ` - ${data.company}` : ""}`;
}

function buildText(data: ContactData) {
  return [
    `Name:         ${data.name}`,
    `Email:        ${data.email}`,
    `Company:      ${data.company || "-"}`,
    `Project type: ${data.projectType}`,
    `Budget:       ${data.budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtml(data: ContactData) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "-"],
    ["Project type", data.projectType],
    ["Budget", data.budget],
  ];

  return [
    "<h2>New portfolio inquiry</h2>",
    "<table>",
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:700;">${escapeHtml(
          label,
        )}</td><td>${escapeHtml(value)}</td></tr>`,
    ),
    "</table>",
    "<h3>Message</h3>",
    `<p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>`,
  ].join("");
}

function buildMailtoHref(to: string, subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

export const sendContact = createServerFn({ method: "POST" }).handler(
  async ({ data }): Promise<SendContactResult> => {
    const form = parseContactData(data);

    if (form.website && form.website.length > 0) {
      return { ok: true, delivery: "resend" };
    }

    if (!rateLimit(form.email.toLowerCase())) {
      throw new Error("Too many submissions. Please try again later.");
    }

    const to = env("CONTACT_TO");
    const subject = buildSubject(form);
    const text = buildText(form);
    const html = buildHtml(form);

    const resendApiKey = env("RESEND_API_KEY");
    const resendFrom = env("RESEND_FROM");

    if (resendApiKey && resendFrom && to) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);
      const result = await resend.emails.send({
        from: resendFrom,
        to: recipientList(to),
        replyTo: `${form.name} <${form.email}>`,
        subject,
        text,
        html,
      });

      if (result.error) {
        console.error("[contact] Resend delivery failed", result.error);
        throw new Error(result.error.message || "Email delivery failed. Please try again.");
      }

      return { ok: true, delivery: "resend" };
    }

    const host = env("SMTP_HOST");
    const port = Number(env("SMTP_PORT") ?? "587");
    const secure = (env("SMTP_SECURE") ?? "false") === "true";
    const user = env("SMTP_USER");
    const pass = env("SMTP_PASS");
    const from = env("SMTP_FROM") ?? user;

    if (to && host && user && pass && from) {
      const nodemailer = (await import("nodemailer")).default;
      const transport = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });

      await transport.sendMail({
        from,
        to,
        replyTo: `${form.name} <${form.email}>`,
        subject,
        text,
        html,
      });

      return { ok: true, delivery: "smtp" };
    }

    const publicEmail = env("CONTACT_PUBLIC_EMAIL");

    if (publicEmail) {
      return {
        ok: false,
        delivery: "mailto",
        mailtoHref: buildMailtoHref(publicEmail, subject, text),
        message: "Email service is not configured yet, so your email app will open instead.",
      };
    }

    console.error("[contact] email delivery is not configured");
    throw new Error(
      "Contact email is not configured. Add RESEND_API_KEY, RESEND_FROM, and CONTACT_TO in your hosting secrets.",
    );
  },
);
