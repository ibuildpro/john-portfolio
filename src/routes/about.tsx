import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Johnathan Hyde" },
      { name: "description", content: "Senior software engineer with 16 years building business-critical systems. Calm, accountable, and obsessed with software teams can trust." },
      { property: "og:title", content: "About — Johnathan Hyde" },
      { property: "og:description", content: "The engineer behind the work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "Ownership", d: "I take problems end-to-end — discovery, design, delivery, and the quiet years of maintenance after." },
  { t: "Clarity", d: "Boring, readable systems beat clever ones. The next engineer is always part of the design." },
  { t: "Trust", d: "Reports must reconcile. Audits must hold. Permissions must reflect real responsibility." },
  { t: "Calm", d: "I don't manufacture urgency. I make systems steady enough that nobody has to." },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="An engineer for systems that hold weight."
        lead="I'm Johnathan Hyde — a senior software engineer in Bainbridge, Indiana. For sixteen years I've designed, built, and shepherded the kind of enterprise software that quietly runs companies: ERP, AI SaaS, operations platforms, reporting layers, and the integrations that make them all behave."
      />

      <section className="container-prose grid lg:grid-cols-12 gap-16 pb-24">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border-strong bg-surface-elevated shadow-[var(--shadow-elegant)]">
              <img src={portrait} alt="Johnathan Hyde" className="h-full w-full object-cover grayscale-[0.15]" />
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Johnathan Hyde — Bainbridge, IN
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-foreground/85">
          <p>
            My work lives in the layer between business intent and dependable
            software. Approvals that route correctly. Numbers that tie back to
            source. Workflows that survive their first contact with a real
            operations team. It is not glamorous — and that is precisely why
            it matters.
          </p>
          <p>
            I've led delivery teams, designed multi-tenant architectures, and
            taken AI features from prototype to production in regulated
            environments. I'm comfortable in C# and ASP.NET Core, TypeScript
            and Node, Python and FastAPI, PostgreSQL and SQL Server. But the
            stack is not the point. <span className="text-foreground">Accountable software is the point.</span>
          </p>
          <p>
            I work best with teams who care about long-term ownership —
            founders building their first serious platform, operations leaders
            replacing a brittle spreadsheet empire, and engineering orgs that
            need a steady senior hand on something load-bearing.
          </p>

          <div className="hairline my-12" />

          <div>
            <div className="eyebrow">Operating principles</div>
            <div className="mt-6 grid sm:grid-cols-2 gap-px bg-border">
              {values.map((v) => (
                <div key={v.t} className="bg-background p-6">
                  <h3 className="font-display text-xl">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hairline my-12" />

          <div>
            <div className="eyebrow">Education</div>
            <p className="mt-4 text-foreground">
              M.S., Computer Information Systems — Indiana Wesleyan University
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
