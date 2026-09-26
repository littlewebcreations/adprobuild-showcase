import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { contact, serviceAreas } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="A&D Probuild logo" className="h-14 w-auto rounded bg-white p-1" />
            <p className="mt-4 text-sm text-secondary-foreground/70">
              Quality building work across North Wales and the North West. You dream it, we build it.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground/50">Contact</p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-secondary-foreground/80">
              A&D Probuild Ltd
              <br />
              {contact.address}
            </address>
            <div className="mt-3 space-y-1 text-sm">
              <a href={`tel:${contact.andrew.tel}`} className="block hover:underline">
                {contact.andrew.name} — {contact.andrew.phone}
              </a>
              <a href={`tel:${contact.david.tel}`} className="block hover:underline">
                {contact.david.name} — {contact.david.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="block hover:underline">
                {contact.email}
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground/50">Areas we cover</p>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">{serviceAreas.join(" · ")}</p>
            <Link to="/projects" className="mt-4 inline-block text-sm font-semibold text-primary-foreground underline underline-offset-4">
              View our project gallery
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-secondary-foreground/50">
          A&D Probuild Ltd · Registered in England and Wales · Company No. {contact.companyNumber}
        </div>
      </div>
    </footer>
  );
}
