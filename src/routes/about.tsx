import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Johnathan Hyde" },
      {
        name: "description",
        content:
          "Senior software engineer with 16 years building multi-tenant ERP, AI SaaS, and business-critical systems.",
      },
      { property: "og:title", content: "About - Johnathan Hyde" },
      {
        property: "og:description",
        content: "The engineer behind secure multi-tenant ERP and AI SaaS systems.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    t: "Ownership",
    d: "I take problems end-to-end: discovery, design, delivery, and the quiet years of maintenance after.",
  },
  {
    t: "Clarity",
    d: "Boring, readable systems beat clever ones. The next engineer is always part of the design.",
  },
  {
    t: "Trust",
    d: "Reports must reconcile. Audits must hold. Permissions must reflect real responsibility.",
  },
  {
    t: "Calm",
    d: "I don't manufacture urgency. I make systems steady enough that nobody has to.",
  },
];

const record = [
  ["Focus", "Multi-tenant ERP and AI SaaS"],
  ["Depth", "Architecture, delivery, maintenance"],
  ["Standard", "Auditability, permissions, reporting"],
  ["Base", "Bainbridge, Indiana - US"],
] as const;

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="An engineer for systems that hold weight."
        lead="I'm Johnathan Hyde - a senior software engineer in Bainbridge, Indiana. For 16 years I've designed, built, and shepherded the kind of enterprise software that quietly runs companies: multi-tenant ERP, AI SaaS, operations platforms, reporting layers, and the integrations that make them all behave."
      />

      <section className="container-prose grid gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-sm border border-border-strong bg-surface-elevated p-7 shadow-[var(--shadow-elegant)]">
              <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-[0.05]" />
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-40 w-40 border-b border-l border-accent-gold/20"
              />

              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-gold">
                  Senior Engineering Record
                </div>
                <div className="mt-8 flex items-end gap-4 border-b border-border pb-7">
                  <div className="font-display text-7xl leading-none text-gradient">16</div>
                  <div className="pb-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Years building systems that hold
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {record.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[6rem_1fr] gap-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold/75">
                        {label}
                      </div>
                      <div className="text-sm leading-6 text-foreground/82">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Johnathan Hyde - Multi-Tenant ERP / SaaS Architecture
            </div>
          </div>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-foreground/85 lg:col-span-7">
          <p>
            My work lives in the layer between business intent and dependable software. Approvals
            that route correctly. Numbers that tie back to source. Workflows that survive their
            first contact with a real operations team. It is not glamorous, and that is precisely
            why it matters.
          </p>
          <p>
            I've led delivery teams, designed multi-tenant architectures, and taken AI features from
            prototype to production in regulated environments. I'm comfortable in C# and ASP.NET
            Core, TypeScript and Node, Python and FastAPI, PostgreSQL and SQL Server. But the stack
            is not the point.{" "}
            <span className="text-foreground">Accountable software is the point.</span>
          </p>
          <p>
            I work best with teams who care about long-term ownership: founders building their first
            serious platform, operations leaders replacing a brittle spreadsheet empire, and
            engineering orgs that need a steady senior hand on something load-bearing.
          </p>

          <div className="hairline my-12" />

          <div>
            <div className="eyebrow">Operating principles</div>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="bg-background p-6">
                  <h3 className="font-display text-xl">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hairline my-12" />

          <div>
            <div className="eyebrow">Education</div>
            <p className="mt-4 text-foreground">
              M.S., Computer Information Systems - Indiana Wesleyan University
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
