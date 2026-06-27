import { Link, createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnathan Hyde" },
      {
        name: "description",
        content:
          "Senior engineer building secure Multi-Tenant ERP and AI-native SaaS platforms for healthcare, finance, insurance, manufacturing, and education.",
      },
      {
        property: "og:title",
        content: "Johnathan Hyde — Multi-Tenant ERP & AI-native SaaS Architecture",
      },
      {
        property: "og:description",
        content:
          "Secure Multi-Tenant ERP and AI-native SaaS for regulated, operationally complex industries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const credibility = [
  { k: "16+", v: "Years engineering" },
  { k: "10", v: "Projects" },
  { k: "Multi-Tenant", v: "ERP / AI SaaS depth", muted: true },
  { k: ".NET · TS · Py", v: "Polyglot stack", muted: true },
];

const pillars = [
  {
    n: "01",
    t: "Manufacturing ERP / MES",
    d: "Shop-floor orchestration, scheduling, traceability, and paperless operations engineers actually use.",
  },
  {
    n: "02",
    t: "Finance & Accounting AI",
    d: "Close automation, reconciliation, revenue recognition, and SOC-grade audit-ready accounting workflows.",
  },
  {
    n: "03",
    t: "Healthcare Automation",
    d: "HIPAA-aware care flows, EHR-adjacent integrations, virtual care, and BAA-ready patient communication.",
  },
  {
    n: "04",
    t: "Insurance Platforms",
    d: "Policy admin, claims automation, underwriting AI, bordereaux — ISO 27001 / SOC 2 posture in mind.",
  },
];

function Index() {
  const featured = projects.slice(0, 6);
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="relative">
        <Nav />
        <Hero />
      </div>

      {/* Credibility strip */}
      <section className="border-y border-border bg-surface/50" data-reveal="fade">
        <div className="container-prose stagger grid grid-cols-2 md:grid-cols-4">
          {credibility.map((c) => (
            <div
              key={c.v}
              className="border-border px-4 py-6 odd:border-r [&:nth-child(-n+2)]:border-b md:border-r md:px-6 md:py-8 md:[&:nth-child(-n+2)]:border-b-0 md:last:border-r-0"
            >
              <div
                className={`font-display text-2xl md:text-3xl ${c.muted ? "text-foreground/95" : "text-gradient"}`}
              >
                {c.k}
              </div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {c.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I build */}
      <section className="container-prose relative py-20 md:py-36">
        <div aria-hidden className="orb orb-a opacity-25" />
        <div className="grid md:grid-cols-12 gap-12 relative">
          <div className="md:col-span-4" data-reveal="up">
            <div className="eyebrow">What I build</div>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-balance">
              Premium platforms for regulated, operationally complex industries.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I work where business logic gets real — where approvals must be defensible, where
              reporting must reconcile, and where the system of record cannot lie.
            </p>
          </div>
          <div className="stagger grid gap-4 sm:grid-cols-2 md:col-span-8">
            {pillars.map((p) => (
              <article
                key={p.n}
                className="glass luxury-card rounded-lg p-5 transition-transform hover:-translate-y-1 sm:p-7"
              >
                <div className="font-mono text-xs text-accent-gold">{p.n}</div>
                <h3 className="mt-3 text-xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-prose pb-24 md:pb-36">
        <div
          className="mb-10 flex flex-col items-start gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
          data-reveal="up"
        >
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Reference platforms</h2>
          </div>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border relative overflow-hidden" data-reveal="fade">
        <div aria-hidden className="orb orb-b opacity-30" />
        <div className="container-prose relative py-20 text-center md:py-32">
          <div className="eyebrow">Let's talk</div>
          <h2 className="mt-4 text-[2.35rem] leading-[1.05] text-balance sm:text-4xl md:text-6xl">
            Have a system that needs <span className="italic text-gradient">a steady hand?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            I take on a small number of senior engagements each year.
          </p>
          <div className="mx-auto mt-10 grid max-w-[22rem] grid-cols-2 justify-center gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            <Link
              to="/contact"
              className="luxury-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_46px_-24px_oklch(0.74_0.08_82/0.70)] transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-7 sm:py-3.5"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in Touch →</span>
            </Link>
            <Link
              to="/projects"
              className="luxury-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-3 py-3 text-sm transition-colors hover:border-accent-gold hover:text-accent-gold sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="sm:hidden">Projects</span>
              <span className="hidden sm:inline">View Projects</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
