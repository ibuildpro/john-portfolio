import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Johnathan Hyde" },
      {
        name: "description",
        content:
          "Architecture, backend, frontend, data, cloud, identity, APIs and AI — capabilities sharpened across sixteen years of enterprise delivery.",
      },
      { property: "og:title", content: "Skills — Johnathan Hyde" },
      {
        property: "og:description",
        content: "Capabilities across architecture, data, cloud, identity, and AI.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const groups = [
  {
    n: "01",
    title: "Architecture",
    lead: "How systems hold up when the business grows around them.",
    items: [
      "Full-stack design",
      "SaaS & multi-tenant",
      "ERP architecture",
      "Domain modelling",
      "Workflow systems",
      "Source-of-truth reporting",
    ],
  },
  {
    n: "02",
    title: "Backend",
    lead: "Service layers that are boring to operate and clear to extend.",
    items: [
      "C# · ASP.NET Core",
      "Node.js · TypeScript",
      "Python · FastAPI",
      "Golang",
      "REST APIs · Swagger",
      "Background workers",
      "Domain events",
    ],
  },
  {
    n: "03",
    title: "Frontend",
    lead: "Interfaces that respect the work being done in them.",
    items: [
      "React · Next.js",
      "Angular",
      "TypeScript",
      "Design systems",
      "Accessibility",
      "Operational UI",
    ],
  },
  {
    n: "04",
    title: "Data",
    lead: "Models, queries, and reports the business can defend.",
    items: [
      "PostgreSQL · SQL Server · MySQL",
      "Database design",
      "Entity Framework · Prisma · TypeORM",
      "Reconciliation & reporting",
      "Supabase",
    ],
  },
  {
    n: "05",
    title: "Cloud & Delivery",
    lead: "Pipelines and infrastructure with sane defaults.",
    items: [
      "Microsoft Azure",
      "AWS",
      "Docker · Kubernetes",
      "Terraform",
      "Jenkins · Git",
      "Release engineering",
    ],
  },
  {
    n: "06",
    title: "Identity & APIs",
    lead: "Permissions that mirror real responsibility.",
    items: [
      "Microsoft Entra ID",
      "Role-based access",
      "API integration",
      "Webhook design",
      "OAuth flows",
    ],
  },
  {
    n: "07",
    title: "Applied AI",
    lead: "AI as a feature — reviewable, traceable, and bounded.",
    items: ["AI/ML", "OpenAI API", "LLM", "RAG", "LangChain", "Hugging Face", "Human-in-the-loop"],
  },
];

function Skills() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Skills"
        title="Capabilities, not just keywords."
        lead="Tools matter less than judgement about when to use them. These are the surfaces I work across most days — depth sharpened by years of running real systems in production."
      />

      <section className="container-prose stagger pb-32 space-y-px bg-border">
        {groups.map((g) => (
          <div
            key={g.title}
            className="luxury-card bg-background grid md:grid-cols-12 gap-8 p-8 md:p-12"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-[11px] text-copper tracking-[0.2em]">{g.n}</div>
              <h2 className="mt-3 text-2xl md:text-3xl">{g.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
                {g.lead}
              </p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 content-center">
              {g.items.map((it) => (
                <div key={it} className="flex items-baseline gap-3 border-b border-border py-2">
                  <span className="h-1 w-1 rounded-full bg-copper" />
                  <span className="text-foreground/90">{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
