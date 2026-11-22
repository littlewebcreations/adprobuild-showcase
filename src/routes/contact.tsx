import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFab } from "@/components/WhatsAppFab";
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

function Contact() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <span className="brand-eyebrow inline-block py-1 text-[11px] font-bold uppercase">
            Contact us
          </span>
          <h1 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
            Let&rsquo;s talk about <span className="text-highlight">your build.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Free, no-obligation quotes across Wrexham, Chester, Mold, Oswestry and the wider North West. WhatsApp is
            the quickest way to reach us — or send the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div>
            <p className="text-[11px] font-bold uppercase text-primary">Get in touch</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Talk to Andrew or David</h2>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-lg border-2 border-accent bg-accent/10 p-5 transition-transform hover:-translate-y-0.5"
            >
              <p className="text-[11px] font-bold uppercase text-accent">Fastest reply</p>
              <p className="mt-1 font-display text-xl">WhatsApp {contact.andrew.phone}</p>
              <p className="mt-1 text-sm text-muted-foreground">Send photos of the job — we can often quote from them.</p>
            </a>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${contact.andrew.tel}`}
                className="rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                  Andrew Lloyd
                </span>
                <span className="mt-1 block font-display text-lg">{contact.andrew.phone}</span>
              </a>
              <a
                href={`tel:${contact.david.tel}`}
                className="rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                  David Jarman
                </span>
                <span className="mt-1 block font-display text-lg">{contact.david.phone}</span>
              </a>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="mt-4 block rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="block text-[11px] font-bold uppercase text-muted-foreground">Email</span>
              <span className="mt-1 block font-semibold">{contact.email}</span>
            </a>

            <address className="mt-6 rounded-lg bg-muted/60 p-5 text-sm not-italic leading-relaxed">
              <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                Based in
              </span>
              <span className="mt-1 block font-semibold">
                A&amp;D Probuild Ltd
                <br />
                {contact.address}
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-primary underline underline-offset-4"
              >
                Open in Google Maps →
              </a>
            </address>

            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase text-primary">Areas we cover</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{serviceAreas.join(" · ")}</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl">Request a free quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this in and it opens WhatsApp with your message ready to send.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
              Prefer to browse first? Have a look at{" "}
              <Link to="/projects" className="font-semibold text-primary underline underline-offset-4">
                our recent work
              </Link>{" "}
              for examples of renovations, extensions, stonework and more.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
