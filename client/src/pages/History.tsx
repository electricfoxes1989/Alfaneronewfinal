/**
 * History Page
 * The complete story of ALFA NERO - from conception to icon status.
 * Image sources: Boat International, Oceanco archives
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
import AwardsSlideshow from "@/components/AwardsSlideshow";
import ConstructionTimeline from "@/components/ConstructionTimeline";

export default function History() {
  const [visible, setVisible] = useState(false);
  const articleRef1 = useArticleFadeIn();
  const articleRef2 = useArticleFadeIn();
  const articleRef3 = useArticleFadeIn();
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="History | ALFA NERO"
        description="The complete story of ALFA NERO - from her 2007 launch as Oceanco's Y702 project to becoming one of the most awarded superyachts in history."
      
        preloadImage="/images/OLDER - ALFA NERO.jpg"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://www.youtube.com/watch?v=RcYk_tFeHdY"
        imageSrc="/images/OLDER - ALFA NERO.jpg"
        imageAlt="ALFA NERO cruising at sea"
        heightClass="h-[70vh] min-h-[500px]"
        overlayStyle="gradient"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">The Story</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            The Icon That Changed Design
          </h1>
          <p className="text-xl text-white/80 font-light">Heritage · 10 min read</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="py-24">
        <div className="article-container" ref={articleRef1}>
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`}>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-foreground mb-8">
              Launched in 2007 by Oceanco in the Netherlands, ALFA NERO was commissioned by Greek shipping magnate Theodore Angelopoulos, who had acquired the yard in 2002 and steered its ambitions toward 80-metre-plus custom builds. She was Oceanco's second-largest delivery at the time, surpassed only by Indian Empress (now H3), and shared her hull platform with sister yacht AMEVI.
            </p>

            <p>
              The brief was direct: combine design innovation with serious engineering and genuine comfort for extended Mediterranean cruising. The result, a collaboration between <Link href="/exterior-designer" className="text-foreground hover:text-red-600 transition-colors duration-300">Nuvolari Lenard</Link>, <Link href="/interior-designer" className="text-foreground hover:text-red-600 transition-colors duration-300">Alberto Pinto</Link>, and Azure Yacht Design and Naval Architecture, redefined what an 82-metre yacht could be.
            </p>
          </article>

          {/* Early Shipyard Photo - 2007 */}
          <div className="my-16">
            <ArticleImage
              src="/images/yard2.webp"
              alt="ALFA NERO at Oceanco shipyard in the Netherlands, 2007"
              caption="ALFA NERO at Oceanco's Netherlands shipyard, 2007. Photo: SuperYacht Times"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Build History</p>

            <h2>Construction & Launch</h2>
            <p>
              Construction began in 2004 at Oceanco's Alblasserdam facility in the Netherlands, where the yard had been building custom superyachts since 1987. Project Y702, as she was known internally, represented the most ambitious undertaking in the yard's history at that point, an 82-metre vessel that would push the boundaries of what was technically possible.
            </p>
            
            <p>
              The steel hull and aluminium superstructure were fabricated over 18 months, with particular attention paid to the complex stern section that would house the revolutionary infinity pool. The spindle-driven floor system alone required months of engineering refinement, as no existing solution could meet the specifications Nuvolari Lenard had envisioned.
            </p>
            
            <p>
              Sea trials took place in the North Sea in early 2007, where ALFA NERO achieved a top speed of 17.5 knots and demonstrated the stability and seakeeping that would later earn praise from experienced captains. Her twin MTU 16V 4000 M90 engines, producing 3,650 kW each, provided the power, while the hull form developed by Azure Yacht Design ensured efficiency at cruising speeds.
            </p>
            
            <p>
              ALFA NERO was delivered to her owner in spring 2007 and made her public debut at the Monaco Yacht Show that September. The industry response was immediate: within months, she had been nominated for every major superyacht award.
            </p>
          </article>
        </div>
      </section>

      {/* Construction Timeline Infographic */}
      <ConstructionTimeline />

      <section className="py-24">
        <div className="article-container" ref={articleRef2}>
          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>Design</h2>
            <p>
              Nuvolari Lenard's exterior broke with convention. In a fleet dominated by white superstructures, ALFA NERO's black hull and low-slung stern profile drew from automotive and architectural thinking rather than traditional yacht aesthetics. The minimal overhangs and clean sight lines gave her a silhouette that remains distinctive almost two decades later.
            </p>
            
            <p>
              <em>Boat International</em>'s original review noted: "The first impression you receive on stepping aboard is of wide-open decks leading into big uncrowded rooms." And in a line that still holds: "On Alfa Nero you will find no gracious oak-panelled rooms, nor any varnished teak capping rails. All is new and modern."
            </p>
            
            <p>
              The aft deck introduced what Oceanco would later term the first "statement pool" on a superyacht: a 12-metre infinity pool with a glass waterfall edge, engineered with a spindle-driven floor system allowing depth adjustment, full conversion to a helipad, or a flush dance floor. It was a technical problem no yard had solved at this scale.
            </p>
            
            <p>
              Carlo Nuvolari, reflecting on the project in <em>Superyacht Digest</em>: "ALFA NERO marked a watershed in boat architecture and started the trend of using outdoor spaces in a different way. Swimming pools on board were not unusual before ALFA NERO, but they were positioned on the upper decks, not on the lower deck. Our idea was to introduce a new way of experiencing the sea: being close to it while staying on your own boat."
            </p>
            
            <p>
              Interior designer Alberto Pinto, whose pop art-inflected interiors drew from Roy Lichtenstein as much as Art Deco, described his broader philosophy in a 2011 interview with Ivan Meade: "One characteristic aspect of my work is the complete refusal of monotony and boredom of formulaic compositions. I like to juxtapose different shapes and eras. About colours, I like strong, honest hues and do not hesitate to play with powerful contrast to give my interiors as much energy as possible." Pinto passed away in 2012. His studio, now led by his sister Linda Pinto, continues to operate from Paris.
            </p>

            {/* Action Buttons - Discover the Team */}
            <div className="article-btn-group">
              <Link href="/design/oceanco" className="article-btn">
                Discover Oceanco
                <span className="text-lg">→</span>
              </Link>
              <Link href="/exterior-designer" className="article-btn">
                Nuvolari Lenard
                <span className="text-lg">→</span>
              </Link>
              <Link href="/interior-designer" className="article-btn">
                Alberto Pinto
                <span className="text-lg">→</span>
              </Link>
            </div>
          </article>

          {/* Nuvolari Lenard Designers Photo */}
          <div className="my-16">
            <ArticleImage
              src="/images/history-nuvolari-lenard-designers.webp"
              alt="Carlo Nuvolari and Dan Lenard with ALFA NERO scale model"
              caption="Carlo Nuvolari and Dan Lenard with the ALFA NERO scale model at their Venice studio"
              className="aspect-[16/11]"
            />
          </div>

          <article className="article-prose">

            <p>
              The brief was ambitious: combine bold design with advanced engineering and exceptional onboard comfort. Create a yacht where the boundaries between inside and outside dissolve. Build the largest private pool ever installed on a vessel. Make it convertible to a helipad. And while you're at it, create a beach club that actually works, not a tender garage with some cushions, but a genuine outdoor living space connected to the sea.
            </p>

            <p>
              What emerged was a yacht that made the rest of the industry look timid.
            </p>
          </article>

          {/* 2008 Oceanco Brochure Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/history-oceanco-brochure-2008.webp"
              alt="ALFA NERO - Original Oceanco Brochure 2008"
              caption="Original Oceanco brochure, 2008"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Details</p>

            <h2>A Declaration of Intent</h2>
            <p>
              <strong>The black steel hull was a declaration of intent.</strong> In an era of white boats, ALFA NERO announced herself from miles away, <strong>unmistakable, unapologetic, impossible to ignore.</strong> The low stern and minimal overhangs created a profile that felt more like a modern sculpture than a traditional yacht. She looked fast standing still.
            </p>

            <p>
              But the exterior was merely the frame. <strong>The real innovation happened at the aft deck.</strong>
            </p>

            <p>
              <Link href="/exterior-designer" className="text-foreground hover:text-red-600 transition-colors duration-300">Carlo Nuvolari</Link> had conceived something unprecedented: a 7 x 3.5 metre infinity pool positioned at the stern, with water cascading over a glass panel into the sea below. The visual effect, pool merging with horizon, had existed at luxury resorts. <strong>No one had attempted it on a moving vessel.</strong> The engineering challenges were immense. <strong>The result was transcendent.</strong>
            </p>
          </article>

          {/* Pool Deck Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/alfa-nero-oceanco-pool.webp"
              alt="ALFA NERO pool deck with sun loungers and dining area"
              caption="The aft deck pool area | Photo: Oceanco"
              className="aspect-[16/10]"
            />
          </div>

          {/* Magazine Spread - The Big Blue */}
          <div className="my-16">
            <ArticleImage
              src="/images/magazine-spread-big-blue.webp"
              alt="ALFA NERO magazine spread - The Big Blue feature"
              caption="'The Big Blue' - Magazine feature showcasing ALFA NERO's iconic pool deck"
              className="aspect-[4/3]"
            />
          </div>

          <article className="article-prose">
            <p>
              When drained, the spindle mechanism raises the pool floor to sit flush with the deck. The space transforms, entertainment venue, event space, helipad. One area serving three distinct functions without compromise to any of them.
            </p>

            {/* Jeroen Mulder Quote */}
            <QuoteWithLogo
              quote="When required, the main-deck pool morphs into a helipad. Attention was given to the design of the heli-platform under the weight of a helicopter. By moving the platform up and down using spindles instead of levers or hydraulic cylinders, there is less chance of the platform accidentally lowering due to the weight."
              attribution="Jeroen Mulder"
              attributionTitle="Project Manager, Oceanco"
              logo="/images/logo-oceanco.webp"
              logoAlt="Oceanco"
            />
          </article>

          {/* Pool and Helipad 2007 Brochure Images */}
          <div className="my-16">
            <ArticleImage
              src="/images/history-pool-helipad-2007.webp"
              alt="ALFA NERO infinity pool and helipad transformation - 2007 Oceanco brochure"
              caption="The pool-to-helipad transformation, from the 2007 Oceanco brochure"
            />
          </div>

          <article className="article-prose">
            <p>
              Below the pool, <Link href="/exterior-designer" className="text-foreground hover:text-red-600 transition-colors duration-300">Nuvolari</Link> created what would become the template for every beach club built since. Direct water access. Tender deployment that doesn't disrupt activities above. The ability to be simultaneously operational and luxurious. Every major yard has spent the last eighteen years attempting to replicate what ALFA NERO achieved first.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>The Interior</h2>
            <p>
              The interior reflects the work of the late <Link href="/interior-designer" className="text-foreground hover:text-red-600 transition-colors duration-300">Alberto Pinto</Link>, <strong>one of the most influential interior designers</strong>, known for major commissions such as The Lanesborough in London, as well as private residences and aircraft interiors, projects where clarity of layout and confidence of scale were essential. On board ALFA NERO, this sensibility translates into spaces that feel composed and deliberate, prioritising volume, light, and proportion over decoration or short-term fashion.
            </p>

            <p>
              <strong>Pop Art references collide with Art Deco geometry.</strong> A black lacquered Pleyel grand piano, etched with white wave patterns, anchors the main salon. Works by Lichtenstein and Murakami punctuate wenge wood panels. The palette shifts between monochromatic sophistication and sudden bursts of calculated colour.
            </p>

            <p>
              <strong>It shouldn't work. It absolutely works.</strong>
            </p>
          </article>

          {/* Alberto Pinto Portrait */}
          <div className="my-16">
            <ArticleImage
              src="/images/alberto-pinto-portrait.jpg"
              alt="Alberto Pinto - Interior Designer of ALFA NERO"
              caption="Alberto Pinto (1943–2012), the legendary Parisian interior designer"
              className="aspect-[16/10] max-w-2xl mx-auto"
            />
          </div>

          {/* Fabric Detail Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/history-fabric-detail.webp"
              alt="Signature wave pattern fabric detail from ALFA NERO interiors"
              caption="The signature wave motif, a recurring element throughout ALFA NERO's interiors"
              className="aspect-[16/9]"
            />
          </div>

          {/* Historical Main Salon Image - 2007 */}
          <div className="my-16">
            <ArticleImage
              src="/images/history-main-salon-2007.webp"
              alt="ALFA NERO Main Salon with Pleyel Piano - 2007"
              caption="The main salon featuring the iconic Pleyel piano, photographed 2007"
              className="aspect-[16/10]"
            />
          </div>

          {/* Beach Club with Lichtenstein Artwork */}
          <div className="my-16">
            <ArticleImage
              src="/images/beach-club-terrace.jpg"
              alt="ALFA NERO beach club featuring Roy Lichtenstein artwork"
              caption="The beach club with Roy Lichtenstein artwork, showcasing the seamless indoor-outdoor flow"
              className="aspect-[16/9]"
            />
          </div>

        </div>
      </section>

      {/* Awards Slideshow - Full Width */}
      <AwardsSlideshow />

      {/* Continue Article Content */}
      <section className="py-24">
        <div className="article-container" ref={articleRef3}>

          {/* Second Mid-article Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/Evening.webp"
              alt="ALFA NERO at Dusk"
              caption="ALFA NERO at dusk following her 2024 refit"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Charter History</p>

            <h2>A Proven Charter Record</h2>
            <p>
              Since then, she has cruised the Mediterranean and Caribbean as <strong>one of the most sought-after charter yachts in the world.</strong> Weekly rates reflected her status. Repeat clients became the norm rather than the exception. The yacht that had redefined the industry proved equally capable of delivering experiences that justified her reputation.
            </p>

            <p className="section-label mb-4">Condition & Maintenance</p>


            <h2>The 2024 Refit</h2>
            <p>
              The 2024 refit ensured that ALFA NERO meets contemporary expectations while preserving everything that made her revolutionary. <strong>She remains, at eighteen years old, more influential than yachts launched last summer.</strong>
            </p>
          </article>

          {/* 2024 Refit Drydock Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/refit-2024-drydock.webp"
              alt="ALFA NERO in dry dock during 2024 refit"
              caption="ALFA NERO in dry dock during her comprehensive 2024 refit"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Overview</p>

            <h2>Available Now</h2>
            <p>
              Now she's for sale. <strong>The opportunity to own a genuine piece of superyacht history</strong>, maintained impeccably, refitted recently, and instantly recognisable in any anchorage on earth.
            </p>

            <p>
              Many of ALFA NERO's original innovations, from the statement aft pool to the convertible helipad, have since become standard features on new builds of her size and above. Few yachts can claim that kind of legacy. Fewer still remain as relevant today as they were on delivery.
            </p>
          </article>


          {/* Share */}
          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Home
              </Link>
              <Link href="/exterior-designer" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Exterior Designer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
