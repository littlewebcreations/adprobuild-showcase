import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { contact, services, serviceAreas } from "@/data/projects";
import renovationImg from "@/assets/project-renovation.jpg";
import stoneworkImg from "@/assets/project-stonework.jpg";

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
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Header />

      {/* Intro */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <img
          src={renovationImg}
          alt="Interior of a renovated home finished by A&D Probuild"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <span className="inline-block rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em]">
            About us
          </span>
          <h1 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Two builders.
            <br />
            <span className="text-primary">One very high standard.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            A&D Probuild Ltd is run by Andrew Lloyd and David Jarman from our base in Rhosllanerchrugog, Wrexham —
            building and improving homes across North Wales and the North West.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Who we are</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">Andrew &amp; David</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                A&amp;D Probuild was set up by two tradesmen who were tired of watching jobs get passed around. When
                you call us, you speak to Andrew or David — the same people who quote your job are on site running it,
                start to finish.
              </p>
              <p>
                We take on everything from a full house renovation down to a single wall or a set of steps. Our
                stonework and brickwork is our speciality, but our real reputation is built on turning up, keeping you
                informed and leaving the place clean.
              </p>
              <p>
                Every build is quoted clearly, priced fairly and completed to building regs — with the same crew on
                your job from first dig to final coat of paint.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">The people behind A&amp;D</p>
              <div className="mt-3 grid gap-2">
                <a href={`tel:${contact.andrew.tel}`} className="font-semibold hover:underline">
                  Andrew Lloyd — {contact.andrew.phone}
                </a>
                <a href={`tel:${contact.david.tel}`} className="font-semibold hover:underline">
                  David Jarman — {contact.david.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <img
              src={stoneworkImg}
              alt="Traditional stonework built by A&D Probuild"
              className="h-64 w-full rounded-3xl object-cover md:h-80"
            />
            <blockquote className="rounded-2xl border-l-4 border-accent bg-muted/60 p-5 font-display text-lg leading-snug">
              “Excellent service from a very professional pair of tradesmen. Happy to recommend and I will be using
              them in the future.”
              <footer className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Dave Johnson — Google review
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">What we do</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">Our trades</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg leading-tight">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Where we work</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">Local to you</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              We&rsquo;re based at {contact.address} and cover:
            </p>
            <p className="mt-4 text-sm font-semibold leading-relaxed md:text-base">{serviceAreas.join(" · ")}</p>
            <address className="mt-6 text-sm not-italic leading-relaxed text-muted-foreground">
              A&amp;D Probuild Ltd
              <br />
              {contact.address}
              <br />
              Registered in England and Wales · Company No. {contact.companyNumber}
            </address>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-secondary p-8 text-secondary-foreground">
            <h3 className="font-display text-2xl tracking-tight md:text-3xl">
              Got a project in mind?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">
              Tell us what you&rsquo;re planning and we&rsquo;ll come back with a free, no-obligation quote.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-7 py-4 font-display text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                WhatsApp us
              </a>
              <Link
                to="/contact"
                className="rounded-full border-2 border-secondary-foreground px-7 py-4 font-display text-sm transition-transform hover:-translate-y-0.5"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
