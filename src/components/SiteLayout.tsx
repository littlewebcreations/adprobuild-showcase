import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div id="page" className="hfeed site flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div id="content" className="site-content flex grow">
        <div className="ast-container flex w-full">
          <div id="primary" className="content-area primary flex w-full">
            <main id="main" className="site-main flex w-full">
              <article className="page ast-article-single flex w-full">
                <div className="entry-content clear flex w-full flex-col">{children}</div>
              </article>
            </main>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
