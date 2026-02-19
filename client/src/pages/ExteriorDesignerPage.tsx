/**
 * Exterior Designer Page - Nuvolari Lenard
 * The Venetians who redrew the rules.
 * Image sources: Nuvolari Lenard official website, Boat International
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

export default function ExteriorDesignerPage() {
  const [visible, setVisible] = useState(false);
  const articleRef = useArticleFadeIn();
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Nuvolari Lenard - Exterior Designer | ALFA NERO"
        description="Discover the Venice-based studio Nuvolari Lenard, whose revolutionary exterior design for ALFA NERO earned the World Superyacht Award for Best Exterior Styling."
      
        preloadImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BTqGMsMvmZiraLev.jpg"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/tceNeIAqyfTOOFPe.mp4"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/PrmThWsILbHvPYxQ.jpg"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Design & Build</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            The Studio Behind the Silhouette
          </h1>
          <p className="text-xl text-white/80 font-light">Nuvolari Lenard · Exterior Design</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container" ref={articleRef}>
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <h2>A Studio Built on Water</h2>
            <p className="article-lead">
              <strong>Venice survives because its founders understood water.</strong> Fifteen hundred years ago, refugees from the mainland drove wooden pilings into a lagoon and built a civilisation on top, and every building, every bridge, every stone landing where gondolas still tie up exists in permanent negotiation with the sea.
            </p>

            <p>
              Carlo Nuvolari grew up with this understanding embedded in his consciousness, born into a family whose name echoes through Italian automotive and maritime history (Tazio Nuvolari, the legendary racing driver, was a relative), and after training as an architect he turned his attention to yacht design, partnering with Dan Lenard in 1998 to establish a studio in Venice itself, near the Arsenale where the Venetian Republic once constructed the fleets that dominated Mediterranean trade for centuries.
            </p>
          </article>

          {/* Founders Portrait */}
          <div className="my-16">
            <ArticleImage
              src="/images/nuvolari-lenard-founders.webp"
              alt="Carlo Nuvolari and Dan Lenard at their Venice studio"
              caption="Carlo Nuvolari and Dan Lenard, founders of Nuvolari Lenard"
              className="aspect-[3/2]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Challenge</p>

            <h2>A Different Kind of Question</h2>
            <p>
              From the beginning, Nuvolari Lenard approached yacht design with a question that most of their contemporaries never thought to ask: what is this vessel actually for? Not what does a yacht look like, but what does the owner actually want to do onboard – how do they want to live, what experiences matter to them, and how can architecture and engineering serve those desires rather than constraining them?
            </p>

            <p>
              The answers they discovered rarely aligned with conventional yacht design, because owners wanted outdoor living in climates that rewarded it, connection to the water rather than isolation from it, and spaces that could transform from formal to casual, from private to social, from operational to leisurely – yachts that felt less like boats and more like floating estates with the sea as their garden.
            </p>
          </article>

          {/* Mid-article Image - The Pool */}
          <div className="my-16">
            <ArticleImage
              src="/images/aft-deck-pool.webp"
              alt="ALFA NERO's revolutionary infinity pool"
              caption="The revolutionary infinity pool, first of its kind on a superyacht"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Details</p>

            <h2>ALFA NERO – The Fullest Expression</h2>
            <p>
              ALFA NERO became the purest expression of this philosophy. The owner's brief aligned seamlessly with Nuvolari Lenard's conviction about what a superyacht could be. The black hull was chosen not merely for its drama, though dramatic it certainly is, but to provide the visual weight needed to anchor the revolutionary stern. The low profile was no stylistic affectation; it was a functional imperative, drawing every living space closer to the sea.
            </p>

            <p>
              Carlo Nuvolari conceived the beach club as an actual outdoor room rather than a service area with aspirations, positioned the infinity pool where it could achieve maximum visual impact – cantilevered over the stern with water flowing over glass into the sea below – and designed deck arrangements that flowed rather than segmented, creating outdoor spaces that invited sustained use rather than merely permitting brief visits between air-conditioned rooms. Nuvolari Lenard also developed the interior spatial layout and functional planning, with Alberto Pinto creating the decorative scheme and artistic direction that would bring these spaces to life.
            </p>

            <QuoteWithLogo
              quote="Begin with how the owner wants to live, then design the yacht that enables it, treating convention as useful reference rather than binding constraint."
              attribution="Nuvolari Lenard Studio Philosophy"
              logo="/images/logo-nuvolari-lenard.webp"
              logoAlt="Nuvolari Lenard"
            />
          </article>

          {/* Second Mid-article Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/exterior-profile.webp"
              alt="ALFA NERO dramatic bow profile"
              caption="The dramatic bow profile showcasing Nuvolari Lenard's bold design vision"
              className="aspect-[16/10]"
            />
          </div>

          {/* Third Mid-article Image */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/hUUZWPzwYIysCvGF.jpg"
              alt="ALFA NERO exterior detail"
              caption="The dramatic profile that redefined superyacht aesthetics"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Legacy</p>

            <h2>After ALFA NERO</h2>
            <p>
              In the years since her launch, Nuvolari Lenard has designed over 120 superyachts – including the Lürssen AHPO, the Lürssen NORD, and the Oceanco BRAVO EUGENIA – with an approach that remains entirely consistent: begin with how the owner wants to live, then design the yacht that enables it, treating convention as useful reference rather than binding constraint.
            </p>

            <p>
              Carlo Nuvolari continues to lead the exterior design practice while Dan Lenard focuses on naval architecture and interior concepts, and together they have built a firm that proves Italian design sensibility and engineering rigour are not opposing values but complementary strengths.
            </p>

            <QuoteWithLogo
              quote="ALFA NERO launched their international reputation and she remains their most influential project – the yacht that proved superyacht design could be revolutionary rather than merely evolutionary."
              attribution="Boat International"
            />

            <p className="section-label mb-4">Legacy</p>


            <h2>A Venetian Legacy</h2>
            <p>
              Every beach club built since owes her a debt, and every infinity pool afloat exists because Nuvolari Lenard demonstrated, in a Venetian tradition stretching back fifteen centuries, that building beautifully on water is not impossible but inevitable.
            </p>

            <p>
              Their headquarters remain in Venice, where a team continues to work on projects ranging from 25 to 185 metres, always guided by the principle that design must resist the appearance of age.
            </p>

            {/* Studio Info Box */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4"><a href="https://www.nuvolari-lenard.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">Nuvolari Lenard</a></h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Founded</p>
                  <p>1998, Venice</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Founders</p>
                  <p>Carlo Nuvolari & Dan Lenard</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Projects Completed</p>
                  <p>Over 120 superyachts</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Notable Projects</p>
                  <p>AHPO, NORD, BRAVO EUGENIA, Black Pearl</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Size Range</p>
                  <p>25m to 185m</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Website</p>
                  <a href="https://www.nuvolari-lenard.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-red-600 transition-colors duration-300">nuvolari-lenard.com</a>
                </div>
              </div>
            </div>
          </article>

          {/* Share */}
          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/history" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← History
              </Link>
              <Link href="/interior-designer" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Interior Designer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
