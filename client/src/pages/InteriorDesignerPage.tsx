/**
 * Interior Designer Page - Alberto Pinto
 * The Parisian who understood scale.
 * Image sources: Cabinet Alberto Pinto, Designboom, CharterWorld
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";
import { useArticleFadeIn } from "@/hooks/useFadeIn";

export default function InteriorDesignerPage() {
  const [visible, setVisible] = useState(false);
  const articleRef = useArticleFadeIn();
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Alberto Pinto - Interior Designer | ALFA NERO"
        description="Discover the legendary Parisian interior architect Alberto Pinto, whose four-decade career culminated in ALFA NERO's award-winning interior design."
      
        preloadImage="/images/main-salon-piano.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BeFpMqIwMubUrphG.mp4"
        imageSrc="/images/main-salon-lounge.webp"
        imageAlt="ALFA NERO Main Salon by Alberto Pinto"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Design & Build</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            The Parisian Who Understood Scale
          </h1>
          <p className="text-xl text-white/80 font-light">Alberto Pinto · Interior Design</p>
        </div>
      </VideoHero>

      {/* Article Header */}
      <section className="pt-16 pb-8">
        <div className="container max-w-4xl">
          <div className={`${visible ? 'fade-up visible' : 'fade-up'}`}>
            <p className="text-subtle mb-4">Design & Build</p>
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <span>Interior Design</span>
              <span className="w-1 h-1 rounded-full bg-foreground/40"></span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container" ref={articleRef}>
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="section-label mb-4">Origins</p>

            <h2>A Moroccan Beginning</h2>
            <p className="article-lead">
              <strong>Alberto Pinto was born in Casablanca in 1943.</strong> His family of Sephardic Jewish heritage had cultural references ranging across Morocco, France, and the broader Mediterranean, a childhood spent among multiple languages, multiple aesthetic traditions, and the particular cosmopolitanism that characterised North African port cities before independence.
            </p>

            <p>
              He studied at the École du Louvre in Paris, trained his eye through photography, and by the 1970s had established Cabinet Alberto Pinto in a 17th-century hôtel particulier on Place des Victoires, where a team that would eventually number sixty worked on projects ranging from corporate headquarters to royal palaces across multiple continents.
            </p>
          </article>

          {/* Alberto Pinto Portrait */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-portrait.jpg"
              alt="Alberto Pinto, Interior Designer"
              caption="Alberto Pinto (1943–2012), the legendary Parisian interior architect"
              className="aspect-[2/3] max-w-md mx-auto"
            />
          </div>

          {/* Alberto Pinto Interior - Signature Residential Style */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-interior-style.webp"
              alt="Alberto Pinto residential interior design"
              caption="A signature Alberto Pinto residential commission: French classical grandeur with layered textures and curated antiques"
              className="aspect-[16/10]"
            />
          </div>

          {/* Alberto Pinto Interior Style Context */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-interior-style.webp"
              alt="Alberto Pinto's signature interior design style"
              caption="Alberto Pinto's eclectic approach: layered textures, curated art, and bold decorative elements"
              className="aspect-[4/3]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Principles</p>

            <h2>Understanding Scale</h2>
            <p>
              Pinto understood something that many interior designers never grasp: large spaces require different thinking than small ones, and the challenge is not to fill them but to make them feel inhabited, to create intimacy within grandeur, to ensure that human beings feel comfortable rather than diminished by the architecture surrounding them.
            </p>

            <QuoteWithLogo
              quote="I pride myself on knowing how to bring together immensity and comfort. Most people are afraid of houses on a grand scale, but I've always been completely at home in them."
              attribution="Alberto Pinto, AD Magazine, October 1992"
              logo="/images/logo-alberto-pinto.webp"
              logoAlt="Alberto Pinto"
            />

            <p>
              This sensibility made him the ideal collaborator for a yacht of ALFA NERO's scale and ambition.
            </p>
          </article>

          {/* Mid-article Image - Dining */}
          <div className="my-16">
            <ArticleImage
              src="/images/formal-dining-room.webp"
              alt="ALFA NERO Formal Dining Area"
              caption="The formal dining area with panoramic sea views, signature patterned chairs and bespoke table setting"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Details</p>

            <h2>The ALFA NERO Interior</h2>
            <p>
              The interior of ALFA NERO was conceived through a collaboration between Nuvolari Lenard, who developed the spatial layout and functional planning, and Alberto Pinto, who created the decorative scheme, material palette, and artistic direction. Pinto's vision draws on pop art and Art Deco influences, incorporating a monochrome base accented by coordinated colour, modern art, and intricate textures throughout 1,250 square metres of living space.
            </p>

            <p>
              ALFA NERO's interior is home to an impressive collection of modern and contemporary art, with original works by Roy Lichtenstein, Joan Miro, Takashi Murakami, Andy Warhol, Frank Stella, and Marc Chagall. These are not merely decorative additions but integral to the yacht's identity, selected to complement Pinto's design language and positioned throughout the main salon, upper salon, guest corridors, and VIP suites. Major Lichtenstein lithographs hang from the wenge wood panels in the main salon, while vibrant Murakami works inject colour into the upper deck spaces.
            </p>

            <p>
              The main salon features a grand Pleyel piano, finished in black lacquer with an intricate white wave pattern etched across its surface. Scalloped wall panels lacquered in white create a mother-of-pearl effect, while zig-zag woodwork and bold striped flooring carry graphic motifs throughout the vessel.
            </p>
          </article>

          {/* Second Mid-article Image - Guest Room */}
          <div className="my-16">
            <ArticleImage
              src="/images/guest-room.webp"
              alt="ALFA NERO Guest Cabin"
              caption="Each guest cabin features unique colour coordination and decorative elements"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>A Unifying Vision</h2>
            <p>
              Each of the six guest cabins was conceived as a unique environment, with individually coordinated colours, materials, and decorative elements. A unifying coral theme connects the spaces: sea creatures appear on coverlets and cushions, sconces are wrapped with branches of coral, and bathroom floors are finished in mosaics of black slate and marble.
            </p>

            <p>
              A glass-enclosed elevator glides from lower to upper decks, passing tall crystal sculptures and a circular wraparound staircase lined with leather mosaic. The vertical journey through the yacht is itself a designed experience.
            </p>

            <QuoteWithLogo
              quote="The interior reflects the work of the late Alberto Pinto, one of the most influential interior designers, known for major commissions such as The Lanesborough in London, as well as private residences and aircraft interiors, projects where clarity of layout and confidence of scale were essential."
              attribution="Boat International"
            />

            <p className="section-label mb-4">Legacy</p>


            <h2>Legacy</h2>
            <p>
              Alberto Pinto passed away in 2012 at the age of 69. Alberto Pinto Interior Design, under Linda Pinto's management, strong of a team of 80 employees, rigorously perpetuates what made the Master's success, carrying forward his vision from their Paris headquarters across ongoing yacht, aviation, and residential commissions.
            </p>

            <p>
              On board ALFA NERO, this sensibility translates into spaces that feel composed and deliberate, prioritising volume, light, and proportion over decoration or short-term fashion. His work onboard ALFA NERO earned the yacht recognition for Best Interior Design at the World Superyacht Awards 2008.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>Linda Pinto</h2>
          </article>

          {/* Linda Pinto Portrait */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-collage.webp"
              alt="Linda Pinto, Chairwoman of Alberto Pinto Interior Design"
              caption="Linda Pinto, who has led Cabinet Alberto Pinto since 2012"
              className="aspect-[6/5] max-w-lg mx-auto"
            />
          </div>

          <article className="article-prose">
            <p>
              Born in Morocco, like her brother, Linda Pinto arrived in Paris at the age of seventeen. She began by managing a furniture gallery Alberto had opened, before joining his growing studio as the vital link between the designer and his clients. When the firm moved to its current headquarters in the imposing seventeenth-century Hôtel de la Victoire, in the 2ème arrondissement, she took over the running of the entire office. For nearly three decades, the siblings worked in tandem. "We were like twins," she has said.
            </p>

            <QuoteWithLogo
              quote="I had two options when he died: to close the doors or to continue. For all my colleagues, and for him, I said, 'We have to continue.' Four years later, here we are. I am the boss. Nobody has left. We thrive."
              attribution="Linda Pinto, Sotheby's"
              logo="/images/logo-alberto-pinto.webp"
              logoAlt="Alberto Pinto Interior Design"
            />

            <p>
              Under her chairmanship, the studio has not merely survived but expanded its reach. Recent commissions have included the interior of a private Boeing 747, the comprehensive renovation of The Lanesborough in London, and the public spaces and penthouse of Monaco's forty-nine-storey Tour Odéon. The firm's dedicated yacht and aviation ateliers continue to shape some of the largest private vessels and aircraft in the world.
            </p>

            <p>
              Linda's daughter, Davina Koskas, has further extended the Pinto universe by creating Pinto Paris, a brand of meticulously crafted furniture, porcelain, and accessories that draws on French savoir-faire and the traditional skills of Parisian cabinetmakers, lacquerers, and bronzers. In 2018, Linda formed Design Partners with the architect Thierry Despont, a collaboration described by Architectural Digest as "the LVMH of interior design."
            </p>
          </article>

          {/* Major Commissions Gallery */}
          <div className="my-20">
            <h3 className="text-center text-sm uppercase tracking-[0.2em] text-foreground/60 mb-10">Major Commissions Under Linda Pinto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
              <ArticleImage
                src="/images/LOUNGE.webp"
                alt="The Lanesborough Hotel, London - Interior by Alberto Pinto"
                caption="The Lanesborough, London, a comprehensive renovation restoring Regency grandeur"
                className="aspect-[16/10]"
              />
              <ArticleImage
                src="/images/sky-lounge-blue.webp"
                alt="Tour Odéon, Monaco - Interior by Alberto Pinto"
                caption="Tour Odéon, Monaco, penthouse and public spaces of the forty-nine-storey tower"
                className="aspect-[16/10]"
              />
              <ArticleImage
                src="/images/sky-lounge.webp"
                alt="Private Boeing 747 Interior by Alberto Pinto"
                caption="A private Boeing 747, the studio's aviation atelier at its most ambitious"
                className="aspect-[16/10]"
              />
              <ArticleImage
                src="/images/main-salon-lounge.webp"
                alt="Alberto Pinto residential commission, Paris"
                caption="A Parisian residential commission, layered classicism with contemporary confidence"
                className="aspect-[16/10]"
              />
            </div>
          </div>

          {/* Alberto Pinto Collage */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-collage.webp"
              alt="Alberto Pinto - Portrait, ALFA NERO leather detail, and interior lounge"
              caption="Alberto Pinto's vision: the designer, bespoke ALFA NERO leather details, and his signature interior style"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            {/* Designer Info Box */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4"><a href="https://www.pinto.fr/en" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">Alberto Pinto</a></h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Born</p>
                  <p>1943, Casablanca</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Studio</p>
                  <p>Cabinet Alberto Pinto, Paris</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Notable Projects</p>
                  <p>The Lanesborough London, royal palaces, private jets</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">ALFA NERO Award</p>
                  <p>Best Interior Design, WSA 2008</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Interior Space</p>
                  <p>Over 1,250 square metres</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Legacy</p>
                  <p>Under Linda Pinto, team of 80</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Website</p>
                  <a href="https://www.pinto.fr/en" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-red-600 transition-colors duration-300">pinto.fr</a>
                </div>
              </div>
            </div>
          </article>

          {/* Share */}
          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/exterior-designer" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Exterior Designer
              </Link>
              <Link href="/wellness" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Wellness Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
