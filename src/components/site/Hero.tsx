import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";

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
        <img
          src={portrait}
          alt=""
          aria-hidden="true"
          className="absolute top-[24svh] right-[-46vw] h-[74svh] w-[124vw] object-contain object-right opacity-22 grayscale-[0.28] saturate-[0.68] contrast-[1.08] mix-blend-luminosity [mask-image:linear-gradient(90deg,transparent_0%,black_40%,black_78%,transparent_100%)] sm:top-[12vh] sm:right-[-34vw] sm:h-[90svh] sm:w-[104vw] sm:opacity-30 md:top-[4vh] md:right-[-18vw] md:h-[96svh] md:w-[78vw] md:opacity-42 lg:right-[-10vw] lg:w-[66vw] xl:right-[-4vw] xl:w-[58vw]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.075_0.006_70/0.98)_0%,oklch(0.075_0.006_70/0.86)_34%,oklch(0.075_0.006_70/0.48)_62%,oklch(0.075_0.006_70/0.78)_100%)]" />
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
            <span className="sm:hidden">Multi-Tenant Systems</span>
            <span className="hidden sm:inline">
              Multi-Tenant ERP - SaaS Architecture - Enterprise Systems
            </span>
          </div>

          <h1 className="mt-5 max-w-[13ch] font-display text-[2.65rem] leading-[1.02] text-balance sm:mt-6 sm:text-6xl md:text-7xl lg:text-[4.45rem]">
            <span className="text-gradient whitespace-nowrap">Multi-Tenant</span> ERP and AI-native
            SaaS.
          </h1>

          <p className="mt-5 max-w-[39rem] text-[0.98rem] leading-7 text-foreground/75 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            I design secure, tenant-aware platforms where data isolation, role-based access,
            workflows, reporting, and compliance hold up across many customers without sacrificing
            speed or maintainability.
          </p>

          <div className="mt-8 grid max-w-[22rem] grid-cols-2 items-center gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap">
            <Link
              to="/projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_46px_-24px_oklch(0.74_0.08_82/0.70)] transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="sm:hidden">Projects</span>
              <span className="hidden sm:inline">View Projects</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                -&gt;
              </span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-background/35 px-3 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:border-accent-gold hover:text-accent-gold sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in Touch</span>
            </Link>
          </div>

          <div className="mt-11 hidden max-w-[46rem] gap-5 border-t border-border/70 pt-5 sm:grid sm:grid-cols-3">
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
