import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/website-logo.png.asset.json";
import { contact } from "@/data/projects";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="A&D Probuild logo" className="h-auto w-24 shrink-0 sm:w-36" />
          <span className="hidden text-[11px] font-medium uppercase text-muted-foreground lg:block">
            You dream it, we build it
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-xs font-semibold sm:gap-5 sm:text-sm">
          <Link to="/" className="hidden text-foreground/80 transition-colors hover:text-foreground sm:block">
            Home
          </Link>
          <Link to="/projects" className="text-foreground/80 transition-colors hover:text-foreground">
            Our Work
          </Link>
          <Link to="/about" className="hidden text-foreground/80 transition-colors hover:text-foreground sm:block">
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Button asChild variant="whatsapp" className="h-auto"><a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-3 py-2 text-xs font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            WhatsApp us
          </a></Button>
        </nav>
      </div>
    </header>
  );
}
