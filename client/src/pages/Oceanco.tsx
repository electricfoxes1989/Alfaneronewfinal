/**
 * Oceanco (Builder) Page
 * The Dutch who built it.
 * Image sources: Oceanco, SuperYacht Times
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArticleImage } from "@/components/ImageLightbox";
import VideoHero from "@/components/VideoHero";
import { useEffect, useState } from "react";
import { useArticleFadeIn } from "@/hooks/useFadeIn";

export default function Oceanco() {
  const [visible, setVisible] = useState(false);
  const articleRef = useArticleFadeIn();
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Oceanco - Builder | ALFA NERO"
        description="Oceanco: the Dutch shipyard behind ALFA NERO. Founded in 1987, Oceanco has delivered over 30 superyachts exceeding 80 metres, combining Dutch engineering precision with bold design vision."
      
        preloadImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/JnaEPBZmZHEIWFkA.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/tceNeIAqyfTOOFPe.mp4"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/AAjrViYKcZpakgqe.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Design & Build</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            The Dutch Who Built It
          </h1>
          <p className="text-xl text-white/80 font-light">Oceanco · Alblasserdam, Netherlands</p>
        </div>
      </VideoHero>

      {/* Content */}
      <section className="pb-24">
        <div className="article-container" ref={articleRef}>
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            
            <p className="section-label mb-4">The Builder</p>

            
            <h2>A Shipyard Built on Ambition</h2>
            <p className="article-lead">
              Oceanco was founded in 1987 in Alblasserdam, a small town in the Dutch province of South Holland where the Noord and Lek rivers meet, a location chosen because the Netherlands has been building ships for five hundred years and the infrastructure – the skilled workforce, the supplier networks, the institutional knowledge – exists nowhere else in quite the same concentration.
            </p>

            <p>
              The shipyard's ambition from the beginning was to build the largest and most complex superyachts in the world, not by competing on price but by competing on capability – taking on projects that other yards could not execute, solving engineering problems that other yards would not attempt, and delivering vessels that justified their cost through excellence rather than mere adequacy.
            </p>
          </article>

          {/* CEO Portrait */}
          <div className="my-16">
            <ArticleImage
              src="/images/oceanco-ceo-marcel-onkenhout.webp"
              alt="Marcel Onkenhout, CEO of Oceanco"
              caption="Marcel Onkenhout, CEO of Oceanco"
              className="aspect-[3/2]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Overview</p>

            <h2>The Y702 Project</h2>
            <p>
              ALFA NERO was delivered in 2007 as project Y702, the second yacht in the Y Generation programme that Theodore Angelopoulos launched after acquiring Oceanco in 2002. She was conceived not as an evolution of existing conventions but as a departure from them – the brief was clear: create a vessel that would win awards, influence the industry, and remain relevant for decades.
            </p>

            <p>
              The result exceeded expectations. ALFA NERO collected seven major awards in a single year, a sweep that validated the Y Generation approach and established Oceanco as the builder of choice for owners seeking the extraordinary.
            </p>

            <p className="section-label mb-4">Design Philosophy</p>


            <h2>Naval Architecture: Azure Yacht Design</h2>
            <p>
              The naval architecture for ALFA NERO was developed by <strong>Azure Yacht Design & Naval Architecture</strong>, the in-house engineering team at Oceanco. Azure was responsible for the structural engineering, hydrodynamic optimisation, and systems integration that made the yacht's revolutionary features possible.
            </p>

            <p>
              The collaboration between Azure's naval architects and Nuvolari Lenard's design studio was essential to realising the ambitious vision. Azure solved the complex engineering challenges: the structural reinforcement required for the infinity pool and helipad conversion, the hull form optimisation that delivers a 5,500 nautical mile range at cruising speed, and the integration of the spindle mechanism that raises the pool floor to create a certified helicopter landing area.
            </p>

            <p>
              This partnership between design vision and engineering rigour exemplifies the Oceanco approach – where bold concepts are matched by the technical capability to execute them flawlessly.
            </p>
          </article>

          {/* Oceanco Video */}
          <div className="my-16">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/pRonib70HRk"
                title="Oceanco - Building Excellence"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-sm text-foreground/60 mt-4">Oceanco: Building Excellence</p>
          </div>

          {/* Image Break */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/RVRswktGrShNsrof.jpg"
              alt="ALFA NERO Front Profile"
              caption="ALFA NERO bow profile | Source: Oceanco"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>Engineering That Enables Design</h2>
            <p>
              Oceanco's contribution to ALFA NERO was not merely construction but enablement – taking the ambitious designs of Nuvolari Lenard and Alberto Pinto and solving the engineering problems that made them possible. The infinity pool required hydraulic systems that could raise and lower a swimming pool full of water while maintaining structural integrity in sea conditions. The beach club required fold-down platforms that could withstand repeated cycling without degradation. The helicopter landing capability required structural reinforcement that did not compromise the aesthetic intent.
            </p>

            <p>
              These are not problems that can be solved by following established procedures – they require engineering creativity, the willingness to develop new solutions for new challenges, and the confidence to guarantee performance on systems that have never been built before.
            </p>

            <QuoteWithLogo
              quote="The helipad was one of the most challenging elements. We had to design a system that could transform a swimming pool into a certified helicopter landing area in minutes, while maintaining the aesthetic vision of the designers."
              attribution="Jeroen Mulder"
              attributionTitle="Project Manager, Oceanco"
              logo="/images/logo-oceanco.webp"
              logoAlt="Oceanco"
            />
          </article>

          {/* Engineering Wireframe */}
          <div className="my-16">
            <ArticleImage
              src="/images/oceanco-engineering-wireframe.webp"
              alt="ALFA NERO Engineering Wireframe - Detailed structural analysis"
              caption="ALFA NERO engineering wireframe showing the complex structural systems | Source: Oceanco"
              className="aspect-[16/9] bg-black"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Legacy</p>

            <h2>After ALFA NERO</h2>
            <p>
              In the years since ALFA NERO's launch, Oceanco has continued to build yachts that push boundaries – the 106-metre sailing yacht BLACK PEARL with her DynaRig propulsion system, the 109-metre BRAVO EUGENIA with her LIFE design for reduced environmental impact, the 127-metre KAOS with her dramatic exterior styling – each project building on the lessons learned from previous builds, including the lessons learned from Y702.
            </p>

            <p>
              The shipyard remains headquartered in Alblasserdam, where a workforce of several hundred continues to build yachts that other shipyards cannot, solving problems that other shipyards will not, and delivering vessels that justify their existence through excellence.
            </p>
          </article>

          {/* Image Break */}
          <div className="my-16">
            <ArticleImage
              src="/images/DJI_20250911072413_0014_D.webp"
              alt="ALFA NERO at Sunset"
              caption="ALFA NERO at sunset | Source: Oceanco"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">The Builder</p>

            <h2>Notable Oceanco Yachts</h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              ALFA NERO belongs to an illustrious fleet. Oceanco's portfolio includes some of the most recognised superyachts ever built:
            </p>
            <div className="bg-foreground/5 rounded-lg p-8">
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong>Black Pearl</strong> (106m, 2018) – The world's largest sailing yacht with DynaRig technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong>Bravo Eugenia</strong> (109m, 2018) – Featuring innovative LIFE design for reduced fuel consumption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong>Jubilee</strong> (110m, 2017) – One of the largest yachts built in the Netherlands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong>Seven Seas</strong> (86m, 2010) – Steven Spielberg's former yacht</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span><strong>ALFA NERO</strong> (82m, 2007) – Seven-time award winner, first superyacht infinity pool</span>
                </li>
              </ul>
            </div>

            <QuoteWithLogo
              quote="ALFA NERO didn't just win awards, she changed the conversation about what a superyacht could be."
              attribution="SuperYacht Times"
              logo="/images/logo-superyacht-times.webp"
              logoAlt="SuperYacht Times"
            />

            <p className="section-label mb-4">Condition & Maintenance</p>


            <h2>The 2024 Refit</h2>
            <p>
              In 2024, ALFA NERO underwent a comprehensive refit that refreshed her systems and updated her interiors while preserving the essential character that made her famous. The work was carried out to the same standards that governed her original construction – the same attention to detail, the same refusal to compromise, the same conviction that excellence is not optional but essential.
            </p>

            <p>
              The yacht that emerged from this refit is not merely maintained but renewed, ready for another decade of service, another generation of guests, another chapter in a story that began in a Dutch shipyard seventeen years ago.
            </p>
          </article>

          {/* Aerial Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/alfa-nero-aerial-ocean.webp"
              alt="ALFA NERO aerial view at sea with tender alongside"
              caption="The stern garage and hydraulic platform in action"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            {/* Shipyard Info Box */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4"><a href="https://www.oceancoyacht.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">Oceanco</a></h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Founded</p>
                  <p>1987, Alblasserdam</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Location</p>
                  <p>South Holland, Netherlands</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Yachts Delivered</p>
                  <p>Over 30 superyachts (80m+)</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Facility Size</p>
                  <p>60,000+ square metres</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Max Build Length</p>
                  <p>Up to 140 metres</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Naval Architecture</p>
                  <p>Azure Yacht Design</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Website</p>
                  <a href="https://www.oceancoyacht.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-red-600 transition-colors duration-300">oceancoyacht.com</a>
                </div>
              </div>
            </div>
          </article>

          {/* Share */}
          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/interior-designer" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Interior Designer
              </Link>
              <Link href="/technical" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Technical →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
