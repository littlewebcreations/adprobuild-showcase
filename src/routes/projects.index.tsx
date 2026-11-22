import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, projects } from "@/data/projects";

const title = "Project Gallery | Building Work in Wrexham & North Wales | A&D Probuild";
const description =
  "Explore genuine photographs of Andrew and David’s housing developments, brickwork, stonework and garden transformations.";

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
  return (
    <SiteLayout>
      <section id="gallery" className="page-cont flex">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col">
          <div className="inner-cont flex flex-col">
            <p className="eyebrow">Our work</p>
            <h1 className="page-title">Project gallery</h1>
            <p className="page-desc max-w-[42rem]">
              Original project photographs from Andrew and David’s housing developments, brickwork, stonework and garden transformations.
            </p>
          </div>
          <Tabs defaultValue="All" className="inner-cont flex flex-col">
            <TabsList className="flex h-auto flex-wrap justify-start">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((c) => {
              const shown = c === "All" ? projects : projects.filter((p) => p.category === c);
              return (
                <TabsContent key={c} value={c} className="flex flex-wrap gap-[1rem]">
                  {shown.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                  {shown.length === 0 && (
                    <p className="section-desc">
                      No projects listed under {c} yet — get in touch and we&rsquo;ll talk you through recent work.
                    </p>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </SiteLayout>
  );
}
