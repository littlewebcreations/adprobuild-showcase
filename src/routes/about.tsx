import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { contact, projectImages, services, serviceAreas } from "@/data/projects";

const title = "About A&D Probuild Ltd | Builders in Rhosllanerchrugog, Wrexham";
const description =
  "Meet Andrew Lloyd and David Jarman, the Wrexham builders behind A&D Probuild Ltd — renovations, extensions, loft and garage conversions, stonework, driveways and rendering across North Wales and the North West.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: projectImages.hero },
      { name: "twitter:image", content: projectImages.hero },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <SiteLayout>
      <section id="about" className="page-cont brand-hero relative flex overflow-hidden bg-secondary text-secondary-foreground">
        <img
          src={projectImages.hero}
          alt="Housing development with masonry completed by Andrew and David"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto flex w-full max-w-[75rem] relative flex-col">
          <div className="inner-cont flex max-w-[44rem] flex-col">
            <span className="eyebrow brand-eyebrow">About us</span>
            <h1 className="page-title reveal">
              Two builders.
              <br />
              <span className="text-highlight">One very high standard.</span>
            </h1>
            <p className="page-desc">
              A&D Probuild Ltd is run by Andrew Lloyd and David Jarman from our base in Rhosllanerchrugog, Wrexham —
              building and improving homes across North Wales and the North West.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="section-cont flex">
        <div className="mx-auto flex w-full max-w-[75rem] flex-wrap">
          <div className="inner-cont flex grow basis-[22rem] flex-col">
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Andrew &amp; David</h2>
            <p className="section-desc">
              A&amp;D Probuild was set up by two tradesmen who were tired of watching jobs get passed around. When
              you call us, you speak to Andrew or David — the same people who quote your job are on site running it,
              start to finish.
            </p>
            <p className="section-desc">
              We take on everything from a full house renovation down to a single wall or a set of steps. Our
              stonework and brickwork is our speciality, but our real reputation is built on turning up, keeping you
              informed and leaving the place clean.
            </p>
            <p className="section-desc">
              Every build is quoted clearly, priced fairly and completed to building regs — with the same crew on
              your job from first dig to final coat of paint.
            </p>
            <div className="card-cont flex flex-col rounded-lg border border-border bg-card">
              <p className="eyebrow">The people behind A&amp;D</p>
              <a href={`tel:${contact.andrew.tel}`} className="card-desc hover:underline">
                Andrew Lloyd — {contact.andrew.phone}
              </a>
              <a href={`tel:${contact.david.tel}`} className="card-desc hover:underline">
                David Jarman — {contact.david.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="card-desc hover:underline">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="inner-cont flex grow basis-[22rem] flex-col">
            <img
              src={projectImages.stonework}
              alt="Traditional stonework built by A&D Probuild"
              className="h-[16rem] w-full rounded-lg object-cover md:h-[20rem]"
            />
            <blockquote className="card-title card-cont brand-review rounded-lg bg-muted/60">
              “Excellent service from a very professional pair of tradesmen. Happy to recommend and I will be using
              them in the future.”
              <footer className="eyebrow">Dave Johnson — Google review</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="services" className="section-cont flex bg-muted/50">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col">
          <div className="inner-cont flex flex-col">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Our trades</h2>
          </div>
          <div className="inner-cont flex flex-wrap">
            {services.map((s) => (
              <div key={s.name} className="card-cont flex grow basis-[18rem] flex-col rounded-lg border border-border bg-card">
                <h3 className="card-title">{s.name}</h3>
                <p className="card-desc">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="section-cont flex">
        <div className="mx-auto flex w-full max-w-[75rem] flex-wrap">
          <div className="inner-cont flex grow basis-[22rem] flex-col">
            <p className="eyebrow">Where we work</p>
            <h2 className="section-title">Local to you</h2>
            <p className="section-desc">We&rsquo;re based at {contact.address} and cover:</p>
            <p className="section-desc">{serviceAreas.join(" · ")}</p>
            <address className="card-desc not-italic">
              A&amp;D Probuild Ltd
              <br />
              {contact.address}
              <br />
              Registered in England and Wales · Company No. {contact.companyNumber}
            </address>
          </div>
          <div id="cta" className="cta-cont flex grow basis-[22rem] flex-col justify-center rounded-lg bg-secondary text-secondary-foreground">
            <h3 className="card-title">Got a project in mind?</h3>
            <p className="cta-desc">
              Tell us what you&rsquo;re planning and we&rsquo;ll come back with a free, no-obligation quote.
            </p>
            <div className="cta-buttons flex flex-wrap gap-[0.75rem]">
              <Button asChild variant="whatsapp" className="primary-button h-auto">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp us
                </a>
              </Button>
              <Link to="/contact" className="secondary-button">Get a free quote</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
