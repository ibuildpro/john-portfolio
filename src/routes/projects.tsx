import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import projects from "@/data/projects.json";
import { ProjectCard, type Project } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Reference platforms across ERP, AI & SaaS" },
      {
        name: "description",
        content:
          "Reference platforms across manufacturing ERP, finance AI, healthcare automation, insurance, and education — built with compliance and auditability in mind.",
      },
      {
        property: "og:title",
        content: "Projects — Reference platforms across ERP, AI & SaaS",
      },
      {
        property: "og:description",
        content: "Selected reference platforms across regulated, operationally complex industries.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const ALL = "All";

const CATEGORIES = [
  ALL,
  "Manufacturing ERP",
  "Finance & Accounting AI",
  "Healthcare Automation",
  "Insurance Platforms",
  "Education ERP",
];

function ProjectsPage() {
  const list = projects as Project[];
  const [cat, setCat] = useState<string>(ALL);
  const [tag, setTag] = useState<string | null>(null);
  const [open, setOpen] = useState<Project | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    list.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [list]);

  const filtered = useMemo(
    () => list.filter((p) => (cat === ALL || p.category === cat) && (!tag || p.tags.includes(tag))),
    [list, cat, tag],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="Reference platforms across complex industries."
        lead="A selection of AI-native ERP and SaaS systems shaped by the same instinct: leave behind software a regulated team can defend."
      />

      <section className="container-prose pb-32">
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`px-3.5 py-2 rounded-md text-xs font-mono uppercase tracking-widest border transition-all ${
                  cat === c
                    ? "bg-accent-gold/15 border-accent-gold/50 text-accent-gold"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-border-strong"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setTag(null)}
              className={`px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase tracking-widest border transition-colors ${
                !tag
                  ? "border-accent-gold/50 text-accent-gold"
                  : "border-border/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              All capabilities
            </button>

            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(tag === t ? null : t)}
                className={`px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase tracking-widest border transition-colors ${
                  tag === t
                    ? "border-accent-gold/50 text-accent-gold"
                    : "border-border/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div key={`${cat}-${tag}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={setOpen} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground text-sm">
            No projects match the current filters.
          </div>
        )}
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.name} details`}
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center bg-background/80 backdrop-blur-md p-4 reveal"
          onClick={() => setOpen(null)}
        >
          <div
            className="glass relative max-w-2xl w-full rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground"
            >
              ×
            </button>

            <div className="eyebrow">{open.category}</div>
            <h3 className="mt-2 font-display text-3xl">{open.name}</h3>

            <p className="mt-5 text-muted-foreground leading-relaxed">{open.full}</p>

            {open.compliance.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-1.5">
                {open.compliance.map((c) => (
                  <span key={c} className="badge">
                    {c}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={open.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Visit website ↗
              </a>

              <div className="flex flex-wrap gap-1">
                {open.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
