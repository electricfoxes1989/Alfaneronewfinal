/**
 * Master Cabin Page
 * A private domain - the owner's suite onboard ALFA NERO.
 * Image sources: YachtCharterFleet
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import LazyVideo, { ArticleVideo } from "@/components/LazyVideo";
import { useEffect, useState } from "react";

export default function MasterCabinPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Master Cabin | ALFA NERO"
        description="The master suite onboard ALFA NERO occupies the entire forward section of the upper deck, a private residence within the vessel rivaling the most exclusive shoreside retreats."
      
        preloadImage="/images/master-cabin-bed.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/nVpGLerjSZEWCjMW.mp4"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/gqEkAOsoytgEFUIN.jpg"
        imageAlt="ALFA NERO Master Suite"
        overlayStyle="gradient"
        kenBurnsEffect={true}
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-4">Accommodation</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            A Private Domain
          </h1>
          <p className="text-xl text-white/80 font-light">The Owner's Suite</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pt-8 pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>The master suite onboard ALFA NERO occupies the entire forward section of the upper deck</strong>, creating a private residence within the vessel that rivals the most exclusive shoreside retreats.
            </p>

            <p className="section-label mb-4">Spatial Design</p>
            <h2>Layout</h2>
            <p>
              The suite extends across the full beam of the yacht, offering generous living space organised around views of the sea. The bedroom itself is positioned for morning light, with a super king-sized bed and hand-crafted furniture, and opens onto a private terrace with its own Jacuzzi pool.
            </p>

            <p>
              <strong>This arrangement allows the owner to begin each day at water level</strong>, without encountering other guests or crew. A glass-enclosed elevator connects all guest levels, gliding past illuminated crystal sculptures and a leather mosaic-lined stairwell.
            </p>

            <p>
              A substantial walk-in wardrobe with dressing table accommodates extended voyages, while a private office provides a working environment for owners who cannot entirely disconnect from their responsibilities ashore. His and hers bathrooms feature stunning marble and cherrywood finishes.
            </p>
          </article>

          {/* Main Master Cabin Image */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/eNJnPZWeGRATLlPP.webp"
              alt="ALFA NERO Master Cabin with panoramic ocean views"
              caption="The master cabin with full-beam layout and panoramic ocean views"
              className="aspect-[16/9]"
            />
          </div>

          {/* Private Office Video */}
          <ArticleVideo
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/nnprSJJBYUqSburK.mp4"
            caption="The private office with trading screens, library, and panoramic ocean views"
          />

          {/* Mid-article Image - Bathroom */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/UhMJImqzZcLVbArU.jpg"
              alt="ALFA NERO Master Bathroom with ocean view"
              caption="The ensuite bathroom with marble tub, cherrywood panelling, and ocean views"
              className="aspect-[16/10]"
            />
          </div>

          {/* Master Bathroom Video */}
          <ArticleVideo
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/xCGWuojSrkzOdaPw.mp4"
            caption="A glimpse into the master bathroom's refined atmosphere"
          />

          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>
            <h2>A Residence, Not a Cabin</h2>
            <p>
              <strong>Alberto Pinto approached the owner's suite not as a yacht cabin but as a private residence that happens to float.</strong> The result is a space that transcends the typical constraints of marine architecture, offering the proportions, finishes, and atmosphere of the world's finest hotels.
            </p>

            <p className="section-label mb-4">Craftsmanship</p>
            <h2>The Art of Materials</h2>
            <p>
              <strong>Every surface tells a story of careful selection.</strong> Rare zebrano wood panels create warmth without heaviness. Leather, silk, and cashmere textiles invite touch. Bronze accents catch the light filtering through oversized windows. The palette is deliberately restrained, creams, taupes, and rich browns, allowing the quality of materials to speak for themselves.
            </p>

            <p>
              The colour palette and decorative elements are unique to this cabin, distinct from the guest accommodations below. This is a space designed for a specific sensibility: someone who values both privacy and the ability to entertain with ease.
            </p>
          </article>

          {/* Walk-in Closet Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/master-cabin-closet.webp"
              alt="ALFA NERO Master Suite walk-in dressing room with custom cabinetry"
              caption="The walk-in dressing room with custom zebrano wood cabinetry and integrated lighting"
              className="aspect-[16/10]"
            />
          </div>

          {/* Master Cabin Video - Suite Overview */}
          <ArticleVideo
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BdBtiAtXNaFaeDUz.mp4"
            caption="The master suite's seamless blend of luxury and comfort"
          />

          <article className="article-prose">
            <p className="section-label mb-4">Natural Elements</p>
            <h2>Light and View</h2>
            <p>
              Full-height windows wrap the forward section, offering panoramic views of the sea ahead. The placement was deliberate: waking in the owner's suite means greeting each day with an unobstructed horizon. Automated blinds allow precise control of light and privacy, while the window positioning ensures the cabin remains bright without sacrificing intimacy.
            </p>

            <QuoteWithLogo
              quote="The owner's suite onboard ALFA NERO represents the pinnacle of residential yacht design, a space where the sea becomes a backdrop to exceptional living."
              attribution="Boat International"
            />

            <p className="section-label mb-4">Outdoor Living</p>
            <h2>The Private Deck</h2>
            <p>
              The owner's private deck is perhaps the most valuable real estate onboard ALFA NERO. Shielded from the main entertaining areas, it offers uninterrupted views and direct access to the sea via the private Jacuzzi.
            </p>

            <p>
              This Jacuzzi operates independently of the main pool, ensuring the owner's routine is never compromised by the activities of guests.
            </p>
          </article>

          {/* Second Mid-article Image - VIP Room for context */}
          <div className="my-16">
            <ArticleImage
              src="/images/vip-room.webp"
              alt="ALFA NERO VIP Suite"
              caption="One of two VIP suites, showcasing the yacht's attention to guest comfort"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Privacy & Access</p>
            <h2>Seclusion and Service</h2>
            <p>
              The suite is serviced by a dedicated entrance and can be reached by the glass-enclosed elevator that connects all decks. Crew access is designed for discretion, allowing seamless service without intrusion.
            </p>

            <p>
              Complete seclusion from the rest of the guest accommodation means the master suite functions as a yacht within a yacht.
            </p>

            {/* Master Suite Summary */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4">Master Suite Features</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Location</p>
                  <p>Full forward, upper deck</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Bed</p>
                  <p>Super king-sized</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Private Deck</p>
                  <p>With dedicated Jacuzzi</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Office</p>
                  <p>Private workspace</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Wardrobe</p>
                  <p>Walk-in with dressing table</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Bathrooms</p>
                  <p>His & Hers, marble & cherrywood</p>
                </div>
              </div>
            </div>
          </article>

          {/* Action Buttons */}
          <div className="article-btn-group">
            <Link href="/guest-accommodations" className="article-btn">
              Guest Cabins
              <span className="text-lg">→</span>
            </Link>
            <Link href="/interior-designer" className="article-btn">
              Alberto Pinto
              <span className="text-lg">→</span>
            </Link>
            
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/wellness" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Wellness Areas
              </Link>
              <Link href="/deck-space" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Deck Space →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
