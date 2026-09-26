import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { categories, projects } from "@/data/projects";

const title = "Project Gallery | Building Work in Wrexham & North Wales | A&D Probuild";
const description =
  "Browse completed extensions, renovations, loft and garage conversions, stonework, driveways and rendering by A&D Probuild across Wrexham, Chester and North Wales.";

export const Route = createFileRoute("/projects/")({
  component: Gallery,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function Gallery() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Our work</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">Project gallery</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A selection of builds completed across Wrexham, Chester, Mold, Oswestry and the wider North West — from stone
          walls and driveways to full house renovations.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                active === c
                  ? "rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        {shown.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            No projects listed under {active} yet — get in touch and we&rsquo;ll talk you through recent work.
          </p>
        )}
      </section>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
