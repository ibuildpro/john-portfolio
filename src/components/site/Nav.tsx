import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border-strong shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-background/70 via-background/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex h-[72px] items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center" aria-label="Johnathan Hyde Home">
          <img
            src="/logo-icon.svg"
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
            className="h-11 w-11 sm:hidden"
          />
          <img
            src="/logo-wordmark.svg"
            alt=""
            aria-hidden="true"
            width={1180}
            height={260}
            className="hidden h-14 w-auto max-w-[260px] sm:block"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-px after:bg-copper",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-copper px-4 py-2.5 text-xs font-mono tracking-widest uppercase text-copper-foreground font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_oklch(0.7_0.11_55/0.6)]"
        >
          Get in touch <span aria-hidden>→</span>
        </Link>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-strong text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden max-h-[calc(100svh-72px)] overflow-y-auto border-t border-border bg-background/96 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <nav className="container-prose flex flex-col py-4" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/45 py-3.5 text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground last:border-b-0 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
