import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/website-logo.png.asset.json";
import { contact } from "@/data/projects";

const navLink = "text-foreground/80 transition-colors hover:text-foreground";

export function Header() {
  return (
    <header id="masthead" className="site-header sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div id="ast-desktop-header">
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar">
            <div className="site-primary-header-wrap ast-builder-grid-row-container ast-container mx-auto flex w-full max-w-[75rem]">
              <div className="ast-builder-grid-row default-container flex w-full flex-wrap items-center justify-between">
                <div className="site-header-primary-section-left site-header-section ast-flex flex items-center">
                  <div className="site-branding ast-site-identity">
                    <Link to="/">
                      <img src={logo.url} alt="A&D Probuild logo" className="h-auto w-[6rem] sm:w-[8rem]" />
                    </Link>
                  </div>
                </div>
                <div className="site-header-primary-section-center site-header-section ast-flex flex items-center">
                  <nav className="ast-builder-menu-1 ast-builder-menu default-container flex flex-wrap items-center" aria-label="Main menu">
                    <Link to="/" className={navLink}>Home</Link>
                    <Link to="/projects" className={navLink}>Our Work</Link>
                    <Link to="/about" className={navLink}>About</Link>
                    <Link to="/contact" className={navLink}>Contact</Link>
                  </nav>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex flex items-center">
                  <div className="section-buttons flex flex-wrap">
                    <Button asChild variant="whatsapp" className="primary-button h-auto">
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
