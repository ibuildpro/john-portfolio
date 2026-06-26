import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-prose py-14 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <img
            src="/logo.png"
            alt="Johnathan Hyde"
            width={2400}
            height={600}
            className="h-14 w-auto max-w-[280px] object-contain"
          />
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Building AI-native ERP and SaaS for healthcare, finance, insurance, manufacturing, and
            education.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Work with me</div>
          <Link
            to="/contact"
            className="block text-foreground hover:text-accent-gold transition-colors"
          >
            Start a project →
          </Link>
          <Link
            to="/projects"
            className="block mt-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View case studies
          </Link>
          <a
            href="https://github.com/ibuildpro"
            target="_blank"
            rel="noreferrer"
            className="block mt-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            github.com/ibuildpro ↗
          </a>
        </div>
        <div className="text-sm md:text-right">
          <div className="eyebrow mb-3 md:justify-end">Based in</div>
          <p className="text-muted-foreground">Bainbridge, Indiana · United States</p>
          <p className="text-muted-foreground mt-2">Working remotely across US time zones.</p>
          <p className="text-muted-foreground mt-4 text-xs">
            © {new Date().getFullYear()} Johnathan Hyde
          </p>
        </div>
      </div>
    </footer>
  );
}
