import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-brand-red p-5">
        <span className="text-[11px] font-bold uppercase text-primary">{project.category}</span>
        <h3 className="mt-1 font-display text-2xl leading-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
      </div>
    </Link>
  );
}
