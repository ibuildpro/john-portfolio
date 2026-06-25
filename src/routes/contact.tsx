import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { sendContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in Touch — Johnathan Hyde" },
      {
        name: "description",
        content:
          "Start a conversation about your AI-native ERP or SaaS engagement. Secure contact form — no email address exposed.",
      },
      { property: "og:title", content: "Get in Touch — Johnathan Hyde" },
      { property: "og:description", content: "Start a conversation about your engagement." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const PROJECT_TYPES = [
  "Custom ERP",
  "AI-native SaaS",
  "Healthcare / HIPAA",
  "Finance / Accounting AI",
  "Insurance / Claims",
  "Manufacturing / MES",
  "Education / SIS",
  "Other",
];

const BUDGETS = [
  "< $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k – $500k",
  "$500k+",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  website: string; // honeypot
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGETS[0],
  message: "",
  website: "",
};

function Contact() {
  const send = useServerFn(sendContact);
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "draft" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const startedAt = useMemo(() => Date.now(), []);

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    setMailtoHref(null);
    try {
      const result = await send({ data: { ...form, startedAt } });
      if (result.ok) {
        setStatus("sent");
        setForm(initial);
        return;
      }

      if (result.delivery === "mailto") {
        setStatus("draft");
        setError(result.message);
        setMailtoHref(result.mailtoHref);
        setForm(initial);
        window.location.href = result.mailtoHref;
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in Touch"
        title="Start a conversation."
        lead="Tell me what you're building, what's at stake, and where the system needs to hold. I read every message personally."
      />

      <section className="container-prose pb-32 grid lg:grid-cols-12 gap-10">
        <form
          onSubmit={submit}
          className="lg:col-span-7 glass rounded-2xl p-8 md:p-10 space-y-6"
          noValidate
        >
          {/* Honeypot — invisible to humans, irresistible to bots */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={update("website")}
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" required>
              <input
                required
                value={form.name}
                onChange={update("name")}
                className="input"
                placeholder="Jane Doe"
                maxLength={120}
              />
            </Field>
            <Field label="Email" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                className="input"
                placeholder="jane@company.com"
                maxLength={200}
              />
            </Field>
          </div>

          <Field label="Company">
            <input
              value={form.company}
              onChange={update("company")}
              className="input"
              placeholder="Acme Inc. (optional)"
              maxLength={160}
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Project type" required>
              <select
                required
                value={form.projectType}
                onChange={update("projectType")}
                className="input"
              >
                {PROJECT_TYPES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>
            <Field label="Budget" required>
              <select required value={form.budget} onChange={update("budget")} className="input">
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="What are you building?" required>
            <textarea
              required
              value={form.message}
              onChange={update("message")}
              rows={7}
              className="input resize-y"
              placeholder="A few sentences about your project, timeline, and what success looks like."
              maxLength={4000}
            />
          </Field>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              Submissions are sent privately through a server-side email relay.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_46px_-24px_oklch(0.74_0.08_82/0.70)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
            </button>
          </div>

          {status === "sent" && (
            <div
              role="status"
              className="rounded-md border border-accent-emerald/40 bg-accent-emerald/10 px-4 py-3 text-sm text-foreground"
            >
              Thank you — your message is on its way. I'll reply within one business day.
            </div>
          )}
          {status === "draft" && (
            <div
              role="status"
              className="rounded-md border border-accent-gold/40 bg-accent-gold/10 px-4 py-3 text-sm text-foreground"
            >
              {error ?? "Your email app should open with a prefilled draft."}
              {mailtoHref && (
                <a
                  href={mailtoHref}
                  className="ml-2 text-accent-gold underline-offset-4 hover:underline"
                >
                  Open email draft
                </a>
              )}
            </div>
          )}
          {status === "error" && (
            <div
              role="alert"
              className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
            >
              {error ?? "Something went wrong. Please try again."}
            </div>
          )}
        </form>

        <aside className="lg:col-span-5 space-y-5">
          <div className="glass rounded-xl p-7">
            <div className="eyebrow">What happens next</div>
            <ol className="mt-4 space-y-4 text-sm text-foreground/85">
              <li>
                <span className="font-mono text-accent-gold mr-2">01</span>I read your message
                personally within one business day.
              </li>
              <li>
                <span className="font-mono text-accent-gold mr-2">02</span>If there's a fit, we book
                a 30-minute scoping call.
              </li>
              <li>
                <span className="font-mono text-accent-gold mr-2">03</span>You receive a tailored
                engagement proposal — fixed scope, clear deliverables.
              </li>
            </ol>
          </div>

          <div className="glass rounded-xl p-7">
            <div className="eyebrow">Best fit for</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>Healthcare SaaS</li>
              <li>Finance / Accounting AI</li>
              <li>Insurance platforms</li>
              <li>Manufacturing ERP</li>
              <li>Education ERP</li>
              <li>Regulated workflows</li>
            </ul>
          </div>

          <div className="glass rounded-xl p-7">
            <div className="eyebrow">Based in</div>
            <div className="mt-3 font-display text-xl">Bainbridge, Indiana · US</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Working remotely across US time zones.
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {label}
        {required && <span className="text-accent-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}
