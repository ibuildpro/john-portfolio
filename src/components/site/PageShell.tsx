import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main className="pt-[72px] md:pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="container-prose pb-14 pt-10 md:pb-24 md:pt-20" data-reveal="up">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="mt-4 text-[2.55rem] leading-[1.05] text-balance sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      )}
      <div className="hairline mt-12" />
    </section>
  );
}
