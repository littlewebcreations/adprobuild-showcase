import { Button } from "@/components/ui/button";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { contact, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetail,
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title}, ${loaderData.location} | A&D Probuild`;
    const description = loaderData.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: loaderData.image },
        { name: "twitter:image", content: loaderData.image },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section id="project" className="page-cont flex">
        <div className="mx-auto flex w-full max-w-[56rem] flex-col">
          <div className="inner-cont flex flex-col">
            <div className="page-buttons flex">
              <Link to="/projects" className="primary-button">
                <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to gallery
              </Link>
            </div>
            <span className="eyebrow">{project.category}</span>
            <h1 className="page-title">{project.title}</h1>
            <p className="page-desc">
              {project.location}{project.duration ? ` · ${project.duration}` : ""}
            </p>
            <img
              src={project.image}
              alt={`${project.title} in ${project.location}`}
              width={1024}
              height={768}
              className="aspect-[4/3] max-h-[31rem] w-full rounded-lg bg-muted object-contain"
            />
            <div className="flex flex-wrap gap-[1rem]">
              {project.photos.map((photo) => (
                <img key={photo.image} src={photo.image} alt={photo.alt} loading="lazy"
                  className="aspect-[4/3] grow basis-[16rem] rounded-lg object-cover" />
              ))}
            </div>
            {project.description.map((para) => (
              <p key={para} className="inner-desc">{para}</p>
            ))}
          </div>

          <div id="scope" className="card-cont flex flex-col rounded-lg border border-border bg-card">
            <h2 className="card-title">What the job involved</h2>
            <div className="flex flex-wrap gap-[0.5rem]">
              {project.scope.map((s) => (
                <div key={s} className="flex grow basis-[14rem] items-baseline gap-[0.5rem]">
                  <i className="fa-solid fa-check text-accent" aria-hidden="true" />
                  <p className="card-desc">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-cont flex bg-secondary text-secondary-foreground">
        <div className="mx-auto flex w-full max-w-[56rem] flex-col">
          <h2 className="cta-title">Planning something similar?</h2>
          <p className="cta-desc">
            Tell us about your project and we&rsquo;ll give you an honest, no-obligation quote.
          </p>
          <div className="cta-buttons flex flex-wrap gap-[0.75rem]">
            <Button asChild variant="whatsapp" className="primary-button h-auto">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp us
              </a>
            </Button>
            <Link to="/contact" hash="quote" className="secondary-button">Send an enquiry</Link>
          </div>
        </div>
      </section>

      <section id="more-work" className="section-cont flex">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col">
          <h2 className="section-title">More of our work</h2>
          <div className="flex flex-wrap gap-[1rem]">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
