import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { contact, projects, projectImages, services, serviceAreas } from "@/data/projects";

const title = "Builders in Wrexham | Extensions, Renovations & Stonework | A&D Probuild";
const description =
  "A&D Probuild Ltd — trusted builders in Rhosllanerchrugog, Wrexham. Extensions, renovations, loft & garage conversions, driveways, stonework, rendering across North Wales.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: projectImages.hero },
      { name: "twitter:image", content: projectImages.hero },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "A&D Probuild Ltd",
          description,
          telephone: contact.andrew.tel,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "38 Maes Y Ficerdy",
            addressLocality: "Rhosllanerchrugog",
            addressRegion: "Wrexham",
            postalCode: "LL14 2EJ",
            addressCountry: "GB",
          },
          geo: { "@type": "GeoCoordinates", latitude: 53.0125, longitude: -3.0503 },
          areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
          knowsAbout: services.map((s) => s.name),
        }),
      },
    ],
  }),
});

const wrap = "mx-auto flex w-full max-w-[75rem] flex-col";

function Home() {
  return (
    <SiteLayout>
      <section id="hero" className="hero-cont brand-hero relative flex overflow-hidden bg-secondary text-secondary-foreground">
        <img
          src={projectImages.hero}
          alt="Homes with brickwork, blockwork and stonework completed by Andrew and David"
          width={1344}
          height={768}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className={`${wrap} relative`}>
          <div className="inner-cont flex max-w-[44rem] flex-col">
            <span className="eyebrow brand-eyebrow">Builders in Wrexham &amp; North Wales</span>
            <h1 className="hero-title reveal">
              A&amp;D Probuild
              <br />
              <span className="text-highlight">Built on reputation.</span>
            </h1>
            <p className="hero-desc">
              Renovations, extensions, loft and garage conversions, stonework and driveways — built properly by Andrew
              and David from our base in Rhosllanerchrugog.
            </p>
            <div className="hero-buttons flex flex-wrap gap-[0.75rem]">
              <Button asChild variant="whatsapp" className="primary-button h-auto">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Message us on WhatsApp
                </a>
              </Button>
              <a href="#contact" className="secondary-button">Get a free quote</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-cont brand-services flex">
        <div className={wrap}>
          <div className="inner-cont flex flex-col">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Nine trades, one standard</h2>
          </div>
          <div className="inner-cont flex flex-wrap">
            {services.map((s, i) => (
              <div key={s.name} className="card-cont service-item flex grow basis-[18rem] flex-col rounded-lg border transition-transform hover:-translate-y-1">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="card-title">{s.name}</h3>
                <p className="card-desc">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-cont flex bg-muted/50">
        <div className={wrap}>
          <div className="inner-cont flex flex-wrap items-end justify-between">
            <div className="flex flex-col">
              <p className="eyebrow">Recent builds</p>
              <h2 className="section-title">Straight from site</h2>
            </div>
            <div className="section-buttons flex">
              <Link to="/projects" className="primary-button">View the full gallery</Link>
            </div>
          </div>
          <div className="inner-cont flex flex-wrap">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="review" className="section-cont flex">
        <div className="mx-auto flex w-full max-w-[50rem] flex-col text-center">
          <div className="inner-cont flex flex-col">
            <p className="eyebrow">Google review</p>
            <blockquote className="inner-title brand-review inner-cont">
              “Excellent service from a very professional pair of tradesmen. Happy to recommend and I will be using them in
              the future.”
            </blockquote>
            <p className="section-desc">— Dave Johnson</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-cont flex bg-secondary text-secondary-foreground">
        <div className="mx-auto flex w-full max-w-[75rem] flex-wrap">
          <div className="inner-cont flex grow basis-[22rem] flex-col">
            <p className="eyebrow">Get in touch</p>
            <h2 className="cta-title">Let&rsquo;s talk about your build</h2>
            <p className="cta-desc">
              Free, no-obligation quotes across Wrexham, Chester, Mold, Oswestry and the wider North West. Message us on
              WhatsApp for the quickest reply, or send the form and we&rsquo;ll get straight back to you.
            </p>
            <div className="cta-buttons flex flex-wrap gap-[0.75rem]">
              <Button asChild variant="whatsapp" className="primary-button h-auto">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp {contact.andrew.phone}
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-[0.75rem]">
              <a href={`tel:${contact.andrew.tel}`} className="card-cont flex grow basis-[10rem] flex-col rounded-md border border-secondary-foreground/15">
                <span className="eyebrow">Andrew</span>
                <span className="card-desc">{contact.andrew.phone}</span>
              </a>
              <a href={`tel:${contact.david.tel}`} className="card-cont flex grow basis-[10rem] flex-col rounded-md border border-secondary-foreground/15">
                <span className="eyebrow">David</span>
                <span className="card-desc">{contact.david.phone}</span>
              </a>
            </div>
            <address className="card-desc not-italic">
              A&D Probuild Ltd
              <br />
              {contact.address}
            </address>
          </div>
          <div className="inner-cont flex grow basis-[22rem] flex-col rounded-lg bg-background text-foreground">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
