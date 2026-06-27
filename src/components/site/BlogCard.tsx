import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/data/blogs";

type BlogImageProps = {
  post: Pick<BlogPost, "coverImage" | "imageAlt">;
  compact?: boolean;
};

function BlogImage({ post, compact = false }: BlogImageProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-sm border border-border-strong bg-surface-elevated ${
        compact ? "aspect-[16/10]" : "aspect-[16/9]"
      }`}
    >
      <img
        src={post.coverImage}
        alt={post.imageAlt}
        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.035]"
        loading={compact ? "lazy" : "eager"}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,oklch(0.075_0.006_70/0.78)_100%)]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
    </div>
  );
}

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      id={`blog-${post.slug}`}
      className={`group glass luxury-card overflow-hidden rounded-lg transition-all hover:-translate-y-1 hover:border-accent-gold/45 ${
        featured ? "grid gap-0 lg:grid-cols-[1.08fr_0.92fr]" : ""
      }`}
      data-reveal="up"
    >
      <Link
        to="/blogs/$slug"
        params={{ slug: post.slug }}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
        aria-label={`Read ${post.title}`}
      >
        <BlogImage post={post} compact={!featured} />
      </Link>

      <div className={featured ? "p-6 sm:p-8 lg:p-10" : "p-5"}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="badge">{post.category}</span>
          <time
            dateTime={post.date}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            {post.date}
          </time>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {post.readTime}
          </span>
        </div>

        <h2
          className={`mt-5 font-display leading-tight text-foreground ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          <Link
            to="/blogs/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-accent-gold focus:outline-none focus-visible:text-accent-gold"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-border/70 pt-5">
          <Link
            to="/blogs/$slug"
            params={{ slug: post.slug }}
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold transition-colors hover:text-foreground focus:outline-none focus-visible:text-foreground"
          >
            Read article <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export { BlogCard, BlogImage };
