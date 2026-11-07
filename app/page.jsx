import SvgSprite from "@/components/SvgSprite";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectDialog from "@/components/ProjectDialog";
import SiteInteractions from "@/components/SiteInteractions";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Roadmap from "@/components/sections/Roadmap";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { structuredData } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <div className="cursor" id="cursor" aria-hidden="true">
        <span className="cursor-dot"></span>
        <span className="cursor-ring"></span>
      </div>

      <SvgSprite />
      <SiteHeader />

      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Services />
        <Roadmap />
        <Achievements />
        <Contact />
      </main>

      <SiteFooter />
      <ProjectDialog />

      <noscript>
        <style>{`
          .reveal, .card-media { opacity: 1 !important; transform: none !important; clip-path: none !important; }
          .hero-line > span { animation: none !important; transform: none !important; }
          .split-title .word > span { transform: none !important; }
        `}</style>
      </noscript>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteInteractions />
    </>
  );
}
