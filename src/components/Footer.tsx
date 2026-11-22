import { Link } from "@tanstack/react-router";
import logo from "@/assets/website-logo.png.asset.json";
import { contact, serviceAreas } from "@/data/projects";

export function Footer() {
  return (
    <footer className="ast-custom-footer bg-secondary text-secondary-foreground">
      <div className="section-cont mx-auto flex w-full max-w-[75rem] flex-col">
        <div className="inner-cont flex flex-wrap">
          <div className="card-cont flex grow basis-[16rem] flex-col">
            <img src={logo.url} alt="A&D Probuild logo" className="h-auto w-[11rem] rounded bg-paper p-[0.75rem]" />
            <p className="card-desc">
              Quality building work across North Wales and the North West. You dream it, we build it.
            </p>
          </div>
          <div className="card-cont flex grow basis-[16rem] flex-col">
            <p className="eyebrow">Contact</p>
            <address className="card-desc not-italic">
              A&D Probuild Ltd
              <br />
              {contact.address}
            </address>
            <div className="card-desc flex flex-col">
              <a href={`tel:${contact.andrew.tel}`} className="hover:underline">
                {contact.andrew.name} — {contact.andrew.phone}
              </a>
              <a href={`tel:${contact.david.tel}`} className="hover:underline">
                {contact.david.name} — {contact.david.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="card-cont flex grow basis-[16rem] flex-col">
            <p className="eyebrow">Areas we cover</p>
            <p className="card-desc">{serviceAreas.join(" · ")}</p>
            <Link to="/projects" className="card-desc underline underline-offset-4">
              View our project gallery
            </Link>
          </div>
        </div>
        <div className="inner-cont flex border-t border-secondary-foreground/10">
          <p className="card-desc">
            A&D Probuild Ltd · Registered in England and Wales · Company No. {contact.companyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
