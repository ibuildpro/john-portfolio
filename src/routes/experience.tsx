import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Johnathan Hyde" },
      { name: "description", content: "Sixteen years of senior engineering across enterprise AI SaaS, ERP, data, and operations platforms." },
      { property: "og:title", content: "Experience — Johnathan Hyde" },
      { property: "og:description", content: "A career in business-critical software." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

const roles = [
  {
    period: "Oct 2025 — Present",
    role: "Independent Software Engineer",
    company: "Self-employed",
    summary: "Designing and shipping enterprise AI SaaS products and custom ERP platforms for founders and operations teams who need software they can stake the business on.",
    points: [
      "Architect tenant-aware ERP and AI SaaS with approval workflows, billing, reporting, and full audit trails.",
      "Build secure application layers in C#, ASP.NET Core, TypeScript, Node.js, PostgreSQL, and Supabase.",
      "Ship AI-enabled features — document processing, retrieval, operational routing — using Python and the OpenAI API.",
      "Apply tenant isolation, source-of-truth reporting, and permissions modeled on real business responsibility.",
    ],
    stack: ["C#", "ASP.NET Core", "Azure", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "OpenAI"],
  },
  {
    period: "Jun 2023 — Sep 2025",
    role: "Senior Business Systems & Data Engineer",
    company: "Nsight Health",
    summary: "Led a cross-functional delivery team modernizing the application portfolio for operations-heavy teams across the healthcare business.",
    points: [
      "Set technical direction for architecture, database design, API boundaries, and deployment practice across a growing portfolio.",
      "Guided implementation in .NET, ASP.NET Core, React, Angular, SQL Server, and Azure with maintainable business logic at the core.",
      "Partnered with operations and product to turn approvals, reporting, billing, and exception handling into dependable software behavior.",
      "Raised code quality, traceability, and reporting trust across the engineering org.",
    ],
    stack: [".NET", "ASP.NET Core", "TypeScript", "React", "Angular", "SQL Server", "Azure"],
  },
  {
    period: "Jun 2021 — May 2023",
    role: "Staff Software Engineer",
    company: "Starkflow",
    summary: "Designed operational data models, reporting layers, and workflow services for finance, customer operations, and planning teams.",
    points: [
      "Replaced fragmented spreadsheets and manual handoffs with maintainable system logic and usable reporting.",
      "Improved data consistency through SQL-based reconciliation, database design, and traceable business rules.",
      "Connected CRM, customer lifecycle, payment, and reporting platforms through REST APIs and structured workflows.",
      "Worked directly with business leaders to translate operational intent into system behavior.",
    ],
    stack: ["SQL", "REST APIs", "Node.js", "TypeScript", "C#"],
  },
  {
    period: "Sep 2014 — Apr 2021",
    role: "Software Engineer",
    company: "MMC Global",
    summary: "Built database-driven internal applications, workflow tools, reporting modules, and API services for operations and finance teams.",
    points: [
      "Designed application and data layers in C#, .NET, Entity Framework, and SQL Server.",
      "Built user-facing functionality in JavaScript, TypeScript, Angular, and React for internal users and customers.",
      "Maintained and enhanced existing systems — improving access control, performance, data quality, and supportability.",
    ],
    stack: ["C#", ".NET", "Entity Framework", "SQL Server", "Angular", "React"],
  },
  {
    period: "Feb 2010 — Aug 2014",
    role: "Software Developer",
    company: "Vega Applications Development",
    summary: "Built and supported business applications, internal tools, and reporting workflows used in day-to-day operations.",
    points: [
      "Developed .NET application features, SQL queries, stored procedures, and data-access components for core business processes.",
      "Assisted with integration, production issue resolution, testing, and release support across legacy and newer systems.",
      "Established a foundation in enterprise delivery, relational data design, and maintainable code.",
    ],
    stack: [".NET", "SQL", "Stored Procedures"],
  },
];

function Experience() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Experience"
        title="Sixteen years across business-critical systems."
        lead="A career spent in the layer between business intent and software that actually runs the work — from enterprise AI SaaS today, back through ERP, operations, finance, and data engineering."
      />

      <section className="container-prose pb-32">
        <ol className="relative space-y-20">
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(16rem-1px)]" />
          {roles.map((r, i) => (
            <li key={r.role + r.period} className="relative grid md:grid-cols-[16rem_1fr] gap-8 md:gap-12">
              <div className="md:text-right md:pr-12">
                <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center md:left-[calc(16rem-8px)]">
                  <span className="h-2 w-2 rounded-full bg-copper ring-4 ring-background" />
                </span>
                <div className="pl-8 md:pl-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
                    {String(i + 1).padStart(2, "0")} · {r.period}
                  </div>
                  <div className="mt-3 font-display text-lg text-foreground/90">{r.company}</div>
                </div>
              </div>

              <div className="pl-8 md:pl-0">
                <h2 className="text-2xl md:text-3xl">{r.role}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{r.summary}</p>

                <ul className="mt-6 space-y-3 text-sm text-foreground/85 leading-relaxed">
                  {r.points.map((p) => (
                    <li key={p} className="relative pl-5">
                      <span className="absolute left-0 top-[10px] h-px w-3 bg-copper" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
