import { Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero/johnathan-profile.jpg";

const proofPoints = [
  { label: "Architecture", value: "Multi-Tenant ERP and SaaS platforms" },
  { label: "Isolation", value: "Tenant-aware data, roles, and permissions" },
  { label: "Standard", value: "Auditable systems built to scale safely" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate min-h-svh w-full overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.075_0.006_70)_0%,oklch(0.12_0.008_75)_48%,oklch(0.18_0.014_78)_100%)]" />
        <div aria-hidden="true" className="hero-portrait-frame">
          <img src={heroPortrait} alt="" className="hero-portrait-image" />
        </div>
        <div
          aria-hidden="true"
          className="hero-architect absolute top-[18svh] right-[-18vw] h-[58svh] w-[82vw] rounded-[2px] border border-accent-gold/10 bg-[linear-gradient(135deg,oklch(0.22_0.012_76/0.14),transparent_62%)] opacity-45 [mask-image:linear-gradient(90deg,transparent_0%,black_38%,black_82%,transparent_100%)] sm:right-[-14vw] md:top-[12svh] md:right-[-6vw] md:h-[70svh] md:w-[56vw] lg:right-[2vw] lg:w-[45vw]"
        >
          <div className="absolute inset-8 border border-border-strong/35" />
          <div className="hero-line absolute inset-x-14 top-[18%] h-px bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />
          <div className="hero-line absolute inset-x-14 top-[39%] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent [animation-delay:650ms]" />
          <div className="hero-line absolute inset-x-14 top-[60%] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent [animation-delay:1150ms]" />
          <div className="hero-line-vertical absolute inset-y-14 left-[28%] w-px bg-gradient-to-b from-transparent via-accent-gold/35 to-transparent [animation-delay:350ms]" />
          <div className="hero-line-vertical absolute inset-y-14 left-[58%] w-px bg-gradient-to-b from-transparent via-border-strong to-transparent [animation-delay:950ms]" />
          <div className="hero-node absolute left-[12%] top-[13%] h-2 w-2 rounded-full bg-accent-gold" />
          <div className="hero-node absolute left-[41%] top-[34%] h-2 w-2 rounded-full bg-accent-gold/70 [animation-delay:900ms]" />
          <div className="hero-node absolute left-[72%] top-[55%] h-2 w-2 rounded-full bg-accent-gold/60 [animation-delay:1650ms]" />
          <div className="hero-line absolute right-[14%] bottom-[16%] h-px w-28 bg-accent-gold/50 [animation-delay:1500ms]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.075_0.006_70/0.99)_0%,oklch(0.075_0.006_70/0.88)_36%,oklch(0.075_0.006_70/0.36)_62%,oklch(0.075_0.006_70/0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_34%,oklch(0.76_0.075_82/0.18)_0%,transparent_42%),radial-gradient(ellipse_at_18%_70%,oklch(0.62_0.04_210/0.13)_0%,transparent_48%)]" />
        <div className="absolute inset-0 grid-lines opacity-[0.025]" />
        <div className="absolute top-28 bottom-20 left-[52%] hidden w-px bg-gradient-to-b from-transparent via-accent-gold/35 to-transparent lg:block" />
        <div className="absolute right-[10%] bottom-[14%] hidden h-px w-64 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-prose relative flex min-h-svh flex-col justify-start pb-12 pt-36 md:justify-center md:pb-16 md:pt-36">
        <div className="max-w-[48rem] reveal">
          <div className="flex items-center gap-3 eyebrow text-[0.62rem] tracking-[0.14em] text-accent-gold sm:text-[0.72rem] sm:tracking-[0.18em]">
            <span className="inline-block h-px w-8 shrink-0 bg-accent-gold sm:w-10" />
            <span className="sm:hidden">Senior Engineer</span>
            <span className="hidden sm:inline">
              Senior Engineer for Multi-Tenant ERP, SaaS, and AI-native systems
            </span>
          </div>

          <h1 className="mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.02] text-balance sm:mt-6 sm:text-6xl md:text-7xl lg:text-[4.45rem]">
            Software is a <span className="text-gradient">building</span> people work inside every
            day.
          </h1>

          <p className="mt-5 max-w-[39rem] text-[0.98rem] leading-7 text-foreground/75 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            I design and build the rooms, locks, wiring, and foundations behind secure multi-tenant
            platforms, so growing businesses can operate with clarity, control, and confidence.
          </p>

          <div className="mt-8 grid max-w-[22rem] grid-cols-2 items-center gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap">
            <Link
              to="/projects"
              className="luxury-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_46px_-24px_oklch(0.74_0.08_82/0.70)] transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="sm:hidden">Projects</span>
              <span className="hidden sm:inline">View Projects</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                -&gt;
              </span>
            </Link>
            <Link
              to="/contact"
              className="luxury-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-background/35 px-3 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:border-accent-gold hover:text-accent-gold sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in Touch</span>
            </Link>
          </div>

          <div className="stagger mt-11 hidden max-w-[46rem] gap-5 border-t border-border/70 pt-5 sm:grid sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.label}>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-gold/80">
                  {item.label}
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/72">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          Available for select engagements - 2026
        </div>
      </div>
    </section>
  );
}
