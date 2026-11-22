import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex grow basis-[18rem] flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="card-cont flex flex-col border-t border-brand-red">
        <span className="eyebrow">{project.category}</span>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.location}</p>
      </div>
    </Link>
  );
}
