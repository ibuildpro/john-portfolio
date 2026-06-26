import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/site/BlogCard";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs - Johnathan Hyde" },
      {
        name: "description",
        content:
          "Professional essays on multi-tenant architecture, AI automation, ERP, business systems, and sixteen years of senior engineering practice.",
      },
      { property: "og:title", content: "Blogs - Johnathan Hyde" },
      {
        property: "og:description",
        content:
          "A senior engineering content hub for business architecture, technology strategy, and durable software systems.",
      },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsIndexPage,
});

const ALL = "All";

function BlogsIndexPage() {
  const [category, setCategory] = useState(ALL);
  const featured = blogPosts[0];

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    [],
  );

  const filteredPosts = useMemo(
    () => blogPosts.filter((post) => category === ALL || post.category === category),
    [category],
  );

  const gridPosts = filteredPosts.filter((post) => post.slug !== featured.slug);

  return (
    <PageShell>
      <section className="container-prose relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <div aria-hidden="true" className="orb orb-a opacity-20" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="eyebrow">Blogs</div>
            <h1 className="mt-4 max-w-4xl font-display text-[2.2rem] leading-[1.02] text-balance sm:text-5xl md:text-6xl">
              Serious notes on business architecture, technology, and systems that last.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A curated set of essays shaped by sixteen years of building multi-tenant ERP,
              AI-native SaaS, workflow platforms, reporting layers, and operational software that
              has to stay trustworthy after launch.
            </p>
          </div>

          <aside className="glass rounded-lg p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-gold">
              Editorial Position
            </div>
            <div className="mt-5 grid grid-cols-3 gap-px bg-border">
              {[
                ["07", "Essays"],
                ["16", "Years"],
                ["04", "Domains"],
              ].map(([value, label]) => (
                <div key={label} className="bg-background p-4">
                  <div className="font-display text-3xl text-gradient">{value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-foreground/72">
              The writing here is intentionally practical: less prediction theater, more operating
              judgment from systems that need tenant isolation, auditability, and long-term care.
            </p>
          </aside>
        </div>
        <div className="hairline mt-14" />
      </section>

      <section className="container-prose pb-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">Featured article</div>
            <h2 className="mt-3 text-3xl md:text-4xl">A considered starting point</h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Brand thinking / architecture / delivery
          </div>
        </div>
        <BlogCard post={featured} featured />
      </section>

      <section className="container-prose pb-24 md:pb-32">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow">Perspective library</div>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Seven essays with a senior engineering lens.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter blog posts by category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-md border px-3.5 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                  category === item
                    ? "border-accent-gold/50 bg-accent-gold/15 text-accent-gold"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {gridPosts.length > 0 ? (
          <div key={category} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="border border-border py-16 text-center text-sm text-muted-foreground">
            The featured essay is the only article in this category right now.
          </div>
        )}
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <div aria-hidden="true" className="orb orb-b opacity-25" />
        <div className="container-prose relative py-20 text-center md:py-28">
          <div className="eyebrow">Next conversation</div>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[2.35rem] leading-[1.05] text-balance sm:text-4xl md:text-6xl">
            Let's build something meaningful, durable, and worth trusting.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            If your platform needs multi-tenant architecture, operational clarity, or a steadier
            senior hand, the best next step is a focused conversation.
          </p>
          <div className="mx-auto mt-10 grid max-w-[22rem] grid-cols-2 justify-center gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_46px_-24px_oklch(0.74_0.08_82/0.70)] transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3.5"
            >
              Start a Project
            </Link>
            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong px-3 py-3 text-sm transition-colors hover:border-accent-gold hover:text-accent-gold sm:px-6 sm:py-3.5"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
