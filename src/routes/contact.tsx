import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";
import { contact, serviceAreas } from "@/data/projects";

const title = "Contact A&D Probuild | Free Quotes in Wrexham & North Wales";
const description =
  "Get a free, no-obligation quote from A&D Probuild Ltd. WhatsApp, call Andrew or David on 07749 113 575 / 07359 492 283, email info@adprobuild.co.uk or send the enquiry form.";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "A&D Probuild Ltd, 38 Maes Y Ficerdy, Rhosllanerchrugog, Wrexham LL14 2EJ",
)}`;

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const card = "card-cont flex flex-col rounded-lg border border-border bg-card transition-transform hover:-translate-y-0.5";

function Contact() {
  return (
    <SiteLayout>
      <section id="intro" className="page-cont flex bg-secondary text-secondary-foreground">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col">
          <div className="inner-cont flex max-w-[44rem] flex-col">
            <span className="eyebrow brand-eyebrow">Contact us</span>
            <h1 className="page-title reveal">
              Let&rsquo;s talk about <span className="text-highlight">your build.</span>
            </h1>
            <p className="page-desc">
              Free, no-obligation quotes across Wrexham, Chester, Mold, Oswestry and the wider North West. WhatsApp is
              the quickest way to reach us — or send the form below.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-cont flex">
        <div className="mx-auto flex w-full max-w-[75rem] flex-wrap">
          <div className="inner-cont flex grow basis-[22rem] flex-col">
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title">Talk to Andrew or David</h2>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card-cont flex flex-col rounded-lg border-2 border-accent bg-accent/10 transition-transform hover:-translate-y-0.5"
            >
              <span className="eyebrow">Fastest reply</span>
              <span className="card-title">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp {contact.andrew.phone}
              </span>
              <span className="card-desc">Send photos of the job — we can often quote from them.</span>
            </a>

            <div className="flex flex-wrap gap-[1rem]">
              <a href={`tel:${contact.andrew.tel}`} className={`${card} grow basis-[12rem]`}>
                <span className="eyebrow">Andrew Lloyd</span>
                <span className="card-desc"><i className="fa-solid fa-phone" aria-hidden="true" /> {contact.andrew.phone}</span>
              </a>
              <a href={`tel:${contact.david.tel}`} className={`${card} grow basis-[12rem]`}>
                <span className="eyebrow">David Jarman</span>
                <span className="card-desc"><i className="fa-solid fa-phone" aria-hidden="true" /> {contact.david.phone}</span>
              </a>
            </div>

            <a href={`mailto:${contact.email}`} className={card}>
              <span className="eyebrow">Email</span>
              <span className="card-desc"><i className="fa-solid fa-envelope" aria-hidden="true" /> {contact.email}</span>
            </a>

            <address className="card-cont flex flex-col rounded-lg bg-muted/60 not-italic">
              <span className="eyebrow">Based in</span>
              <span className="card-desc">
                A&amp;D Probuild Ltd
                <br />
                {contact.address}
              </span>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="card-desc underline underline-offset-4">
                <i className="fa-solid fa-location-dot" aria-hidden="true" /> Open in Google Maps
              </a>
            </address>

            <div className="flex flex-col">
              <p className="eyebrow">Areas we cover</p>
              <p className="card-desc">{serviceAreas.join(" · ")}</p>
            </div>
          </div>

          <div id="quote" className="card-cont flex grow basis-[22rem] flex-col rounded-lg border border-border bg-card">
            <h2 className="card-title">Request a free quote</h2>
            <p className="card-desc">Fill this in and it opens WhatsApp with your message ready to send.</p>
            <ContactForm />
            <p className="card-desc border-t border-border">
              Prefer to browse first? Have a look at{" "}
              <Link to="/projects" className="underline underline-offset-4">
                our recent work
              </Link>{" "}
              for examples of renovations, extensions, stonework and more.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
