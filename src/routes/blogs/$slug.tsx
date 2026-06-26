import { Link, createFileRoute } from "@tanstack/react-router";
import { BlogImage } from "@/components/site/BlogCard";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts, getBlogPost } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} - Johnathan Hyde` : "Blog - Johnathan Hyde" },
        {
          name: "description",
          content:
            post?.excerpt ??
            "Professional essays on multi-tenant architecture, AI automation, and senior engineering practice.",
        },
        { property: "og:title", content: post?.title ?? "Blog - Johnathan Hyde" },
        {
          property: "og:description",
          content:
            post?.excerpt ??
            "Professional essays on multi-tenant architecture, AI automation, and senior engineering practice.",
        },
        { property: "og:url", content: post ? `/blogs/${post.slug}` : "/blogs" },
      ],
      links: [{ rel: "canonical", href: post ? `/blogs/${post.slug}` : "/blogs" }],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <PageShell>
        <section className="container-prose py-24 text-center">
          <div className="eyebrow">Blog</div>
          <h1 className="mt-4 text-4xl md:text-6xl">Article not found.</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            The article you're looking for may have moved or been retired.
          </p>
          <Link
            to="/blogs"
            className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Back to Blogs
          </Link>
        </section>
      </PageShell>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <article>
        <header className="container-prose pb-12 pt-10 md:pb-16 md:pt-20">
          <Link
            to="/blogs"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-gold transition-colors hover:text-foreground"
          >
            &lt;- Back to Blogs
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
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

          <h1 className="mt-5 max-w-5xl font-display text-[2.65rem] leading-[1.02] text-balance sm:text-5xl md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {post.excerpt}
          </p>
        </header>

        <section className="container-prose pb-14">
          <BlogImage post={post} />
        </section>

        <section className="container-prose grid gap-12 pb-24 lg:grid-cols-[minmax(0,44rem)_1fr]">
          <div className="space-y-7 text-lg leading-8 text-foreground/84">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="lg:pl-8">
            <div className="sticky top-28 space-y-8">
              <div className="glass rounded-lg p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-gold">
                  Continue reading
                </div>
                <div className="mt-5 space-y-4">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to="/blogs/$slug"
                      params={{ slug: item.slug }}
                      className="block border-t border-border pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-accent-gold">
                        {item.title}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.category} / {item.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="border-t border-border">
          <div className="container-prose py-20 text-center">
            <div className="eyebrow">Next step</div>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-[2.35rem] leading-[1.05] text-balance sm:text-4xl md:text-5xl">
              Need this kind of thinking inside a real platform?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              I take on select senior engagements around multi-tenant architecture, ERP, AI
              workflow, and operational software that has to hold up in production.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
