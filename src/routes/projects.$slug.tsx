import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { WhatsAppFab } from "@/components/WhatsAppFab";
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
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Link to="/projects" className="text-sm font-semibold text-primary underline underline-offset-4">
          ← Back to gallery
        </Link>
        <span className="mt-6 block text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {project.category}
        </span>
        <h1 className="mt-2 font-display text-3xl leading-tight tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.location}{project.duration ? ` · ${project.duration}` : ""}
        </p>

        <img
          src={project.image}
          alt={`${project.title} in ${project.location}`}
          width={1024}
          height={768}
          className="mt-6 aspect-[4/3] max-h-[560px] w-full rounded-2xl bg-muted object-contain"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.photos.map((photo) => (
            <img key={photo.image} src={photo.image} alt={photo.alt} loading="lazy"
              className="aspect-[4/3] h-full w-full rounded-lg object-cover" />
          ))}
        </div>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85">
          {project.description.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-lg">What the job involved</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.scope.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-secondary p-6 text-secondary-foreground">
          <h2 className="font-display text-xl">Planning something similar?</h2>
          <p className="mt-2 text-sm text-secondary-foreground/75">
            Tell us about your project and we&rsquo;ll give you an honest, no-obligation quote.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 font-display text-sm text-accent-foreground"
            >
              WhatsApp us
            </a>
            <Link to="/" hash="contact" className="rounded-full border-2 border-secondary-foreground px-6 py-3 font-display text-sm">
              Send an enquiry
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-2xl tracking-tight">More of our work</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
