/**
 * Wellness Areas Page
 * Where recovery meets the horizon - spa, gym, beach club, infinity pool.
 * Image sources: YachtCharterFleet
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArticleImage } from "@/components/ImageLightbox";
import VideoHero from "@/components/VideoHero";
import { ArticleVideo } from "@/components/LazyVideo";
import { useEffect, useState } from "react";

export default function WellnessPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Wellness Areas | ALFA NERO"
        description="Discover ALFA NERO's comprehensive wellness facilities including the world's first superyacht infinity pool, spa, gym, beach club, and multiple Jacuzzi pools."
      
        preloadImage="/images/gym-panoramic.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/AxszHozEWwtxrMdP.mp4"
        imageSrc="/images/Spa.jpg"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Onboard Experience</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            Where Recovery Meets the Horizon
          </h1>
          <p className="text-xl text-white/80 font-light">Wellness · Spa · Gym · Beach Club</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pt-16 pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead" style={{fontWeight: '400'}}>
              <strong>ALFA NERO was conceived at a moment when the superyacht industry was beginning to recognise wellness as essential rather than optional.</strong> Her facilities anticipated the comprehensive spa programmes that would become standard on vessels half her age, and they remain compelling today.
            </p>

            <p className="section-label mb-4">Wellness</p>


            <h2>The Spa</h2>
            <p>
              <strong>The lower deck houses a dedicated spa area</strong> offering a full menu of treatments administered by the onboard therapist. The space is designed for both intimacy and function, a place where guests can decompress after days at anchor or recover from the pleasures of exploration.
            </p>

            <p>
              A main deck sauna provides an alternative to the lower spa, while a steam room adjacent to the upper deck gym offers post-workout relief with panoramic views.
            </p>
          </article>

          {/* Spa Video */}
          <ArticleVideo
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/aLxlnodnXDjeUxwo.mp4"
            caption="The spa treatment room with fold-down sea terrace"
          />

          {/* Spa Treatment Room Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/spa-treatment-room.webp"
              alt="ALFA NERO spa treatment room with ocean view terrace"
              caption="The spa treatment room opens directly onto the sea terrace"
              className="aspect-[16/10]"
            />
          </div>

          {/* Mid-article Image - Sauna */}
          <div className="my-16">
            <ArticleImage
              src="/images/Spa.jpg"
              alt="ALFA NERO Sauna"
              caption="The main deck sauna with natural wood finishes"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Wellness</p>

            <h2>The Gym</h2>
            <p>
              Located on the top deck, the air-conditioned gymnasium offers 180-degree views of the surrounding seascape. Equipment includes cardiovascular machines and free weights, with the crew available to assist with health and fitness assessments.
            </p>

            <p>
              The gym opens directly onto the deck, where guests can move from a workout to the adjacent Jacuzzi pool without transition. Exercise and leisure flow together here, as they should.
            </p>
          </article>

          {/* Gym Panoramic Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/gym-panoramic.webp"
              alt="ALFA NERO Gym with panoramic ocean views and Technogym equipment"
              caption="The fitness centre with 180-degree views and Technogym equipment"
              className="aspect-[16/9]"
            />
          </div>

          {/* Gym Exterior Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/gym-exterior.webp"
              alt="ALFA NERO Gym exterior view with curved glass walls and adjacent Jacuzzi"
              caption="The gym's curved glass walls open directly onto the sundeck and Jacuzzi"
              className="aspect-[16/9]"
            />
          </div>

          {/* Gym Weights Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/gym-weights.webp"
              alt="ALFA NERO Gym free weights and dumbbells"
              caption="Premium free weights for strength training"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Wellness</p>

            <h2>The Beach Club</h2>
            <p>
              The beach club at water level provides direct access to the sea. This generous space, with its fold-down platforms and abundant natural light, has become a favourite gathering point for guests seeking connection with the water.
            </p>

            <p>
              Beach setups including chairs, tables, gazebos, and beanbags can be arranged on nearby shores, extending the yacht's living space onto the coastline itself.
            </p>
          </article>

          {/* Beach Club Terrace Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/beach-club-terrace.webp"
              alt="ALFA NERO Beach Club fold-down terrace with jet ski"
              caption="The beach club's fold-down terrace offers direct sea access and water sports departure"
              className="aspect-[16/10]"
            />
          </div>

          {/* Beach Club Sea Terrace Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/beach-club-sea-terrace.webp"
              alt="ALFA NERO Beach Club with fold-down sea terrace and Roy Lichtenstein artwork"
              caption="The beach club with fold-down sea terrace and Roy Lichtenstein artwork"
              className="aspect-[16/9]"
            />
          </div>

          {/* Second Mid-article Image - Pool */}
          <div className="my-16">
            <ArticleImage
              src="/images/aft-deck-pool.webp"
              alt="ALFA NERO Infinity Pool"
              caption="The iconic infinity pool, 3.7m × 11.6m of pure innovation"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Innovation</p>

            <h2>The Infinity Pool</h2>
            <p>
              The defining feature of ALFA NERO's wellness offering is the 3.7-by-11.6-metre infinity pool on the aft deck, the first of its kind on a superyacht. The pool floor rises via a precision spindle mechanism to varying depths for safety or preference, transforming into either a full-beam entertainment space or an emergency helipad. The spindle system was specifically chosen to prevent accidental lowering under helicopter weight.
            </p>

            <p>
              A glass waterfall feature at the aft adds visual drama while maintaining the pool's status as a place for quiet reflection and exercise. Whether for morning laps or evening aperitifs, this space remains the heart of ALFA NERO's outdoor life.
            </p>

            <QuoteWithLogo
              quote="The infinity pool wasn't just a feature, it was a statement that changed what owners expected from their yachts."
              attribution="SuperYacht Times"
              logo="/images/logo-superyacht-times.webp"
              logoAlt="SuperYacht Times"
            />

            <p className="section-label mb-4">Innovation</p>


            <h2>The Jacuzzi Pools</h2>
            <p>
              In addition to the main infinity pool, ALFA NERO features Jacuzzi pools on multiple decks. The master suite includes a private Jacuzzi on its dedicated deck, while the top deck gym area offers another for guest use.
            </p>
          </article>

          {/* Third Mid-article Image - Jacuzzi */}
          <div className="my-16">
            <ArticleImage
              src="/images/sundeck-gym-jacuzzi.jpg"
              alt="ALFA NERO Jacuzzi"
              caption="One of multiple Jacuzzi pools onboard ALFA NERO"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>A Holistic Approach</h2>
            <p>
              What sets ALFA NERO apart is not any single wellness feature but the integration of all of them. The yacht was designed with wellbeing as a core principle, not an afterthought. From the flow between spaces to the quality of air and light, every element contributes to a sense of restoration.
            </p>

            <p>
              What distinguishes ALFA NERO's wellness programme is the integration of these spaces into the broader rhythm of life onboard. There is no separation between wellness and living, the two are designed to flow together, with water, light, and air connecting each experience to the next.
            </p>

            <QuoteWithLogo
              quote="The wellness facilities onboard ALFA NERO don't merely compete with land-based spas, they surpass them, offering treatments with the added dimension of being surrounded by the sea."
              attribution="Power & Motoryacht"
            />

            <p>
              This is wellness at sea as it should be: comprehensive, considered, and utterly luxurious.
            </p>

            {/* Wellness Facilities Summary */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4">Wellness Facilities</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Infinity Pool</p>
                  <p>3.7m × 11.6m, spindle-driven floor</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Jacuzzi Pools</p>
                  <p>Multiple (master deck, sundeck)</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Spa</p>
                  <p>Full treatment menu, onboard therapist</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Gym</p>
                  <p>Air-conditioned, 180° views</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Sauna & Steam</p>
                  <p>Main deck sauna, upper deck steam</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Beach Club</p>
                  <p>Water-level access, fold-down platforms</p>
                </div>
              </div>
            </div>
          </article>

          {/* Action Buttons */}
          <div className="article-btn-group">
            <Link href="/deck-space" className="article-btn">
              Outdoor Living
              <span className="text-lg">→</span>
            </Link>
            <Link href="/water-toys" className="article-btn">
              Water Toys
              <span className="text-lg">→</span>
            </Link>
            
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/interior-designer" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Interior Designer
              </Link>
              <Link href="/master-cabin" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Master Cabin →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
