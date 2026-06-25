type Project = {
  slug: string;
  name: string;
  url: string;
  short: string;
  full: string;
  category: string;
  tags: string[];
  compliance: string[];
  image: string;
};

const projectImages = import.meta.glob<string>("/src/assets/projects/*", {
  eager: true,
  query: "?url",
  import: "default",
});

type ProjectCardProps = {
  project: Project;
  onOpen?: (project: Project) => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const imageSrc = projectImages[`/src/assets/projects/${project.image}`];
  const previewImage = imageSrc ? (
    <img
      src={imageSrc}
      alt={`${project.name} project preview`}
      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  ) : null;

  return (
    <article className="group glass rounded-2xl p-4 border border-border/70 transition-all hover:-translate-y-1 hover:border-accent-gold/40">
      {imageSrc && onOpen && (
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="block w-full overflow-hidden rounded-xl border border-border/70 bg-muted/20"
          aria-label={`Open ${project.name} details`}
        >
          {previewImage}
        </button>
      )}

      {imageSrc && !onOpen && (
        <div className="block w-full overflow-hidden rounded-xl border border-border/70 bg-muted/20">
          {previewImage}
        </div>
      )}

      <div className="mt-4">
        <div className="eyebrow">{project.category}</div>

        <h3 className="mt-2 font-display text-xl text-foreground">{project.name}</h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>

        {project.compliance.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.compliance.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {onOpen && (
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-sm font-semibold text-accent-gold transition-colors hover:text-foreground"
            >
              View details
            </button>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Visit -&gt;
          </a>
        </div>
      </div>
    </article>
  );
}

export { ProjectCard };
export type { Project };
