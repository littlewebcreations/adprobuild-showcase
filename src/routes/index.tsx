import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { WhatsAppFab } from "@/components/WhatsAppFab";
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

function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />

      {/* Hero */}
      <section className="brand-hero relative overflow-hidden bg-secondary text-secondary-foreground">
        <img
          src={projectImages.hero}
          alt="Homes with brickwork, blockwork and stonework completed by Andrew and David"
          width={1344}
          height={768}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <span className="brand-eyebrow inline-block py-1 text-[11px] font-bold uppercase">
            Builders in Wrexham &amp; North Wales
          </span>
          <h1 className="reveal mt-5 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            A&amp;D Probuild
            <br />
            <span className="text-highlight">Built on reputation.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Renovations, extensions, loft and garage conversions, stonework and driveways — built properly by Andrew
            and David from our base in Rhosllanerchrugog.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" className="h-auto"><a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-7 py-4 font-body text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Message us on WhatsApp
            </a></Button>
            <Button asChild variant="heroOutline" className="h-auto"><a
              href="#contact"
              className="rounded-md border-2 border-secondary-foreground px-7 py-4 font-body text-sm transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
            </a></Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="brand-services py-16 md:py-20"><div className="mx-auto max-w-6xl px-4">
        <p className="text-[11px] font-bold uppercase text-highlight">What we do</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Nine trades, one standard</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="service-item rounded-lg border p-6 transition-transform hover:-translate-y-1">
              <span className="font-display text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-2xl leading-tight">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
            </div>
          ))}
        </div></div>
      </section>

      {/* Work */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase text-primary">Recent builds</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Straight from site</h2>
            </div>
            <Link to="/projects" className="font-body text-sm text-primary underline underline-offset-4">
              View the full gallery →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <p className="text-[11px] font-bold uppercase text-accent">Google review</p>
        <blockquote className="brand-review mt-4 px-6 py-8 font-display text-2xl leading-snug md:text-4xl">
          “Excellent service from a very professional pair of tradesmen. Happy to recommend and I will be using them in
          the future.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">— Dave Johnson</p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary py-16 text-secondary-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase text-accent">Get in touch</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Let&rsquo;s talk about your build</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
              Free, no-obligation quotes across Wrexham, Chester, Mold, Oswestry and the wider North West. Message us on
              WhatsApp for the quickest reply, or send the form and we&rsquo;ll get straight back to you.
            </p>
            <Button asChild variant="whatsapp" className="h-auto"><a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-accent px-7 py-4 font-body text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              WhatsApp {contact.andrew.phone}
            </a></Button>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${contact.andrew.tel}`} className="rounded-md border border-secondary-foreground/15 p-4 text-sm font-semibold">
                <span className="block text-[11px] uppercase text-secondary-foreground/50">Andrew</span>
                {contact.andrew.phone}
              </a>
              <a href={`tel:${contact.david.tel}`} className="rounded-md border border-secondary-foreground/15 p-4 text-sm font-semibold">
                <span className="block text-[11px] uppercase text-secondary-foreground/50">David</span>
                {contact.david.phone}
              </a>
            </div>
            <address className="mt-6 text-sm not-italic leading-relaxed text-secondary-foreground/70">
              A&D Probuild Ltd
              <br />
              {contact.address}
            </address>
          </div>
          <div className="rounded-lg bg-background p-6 text-foreground">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
