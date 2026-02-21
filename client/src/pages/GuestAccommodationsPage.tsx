/**
 * Guest Accommodations Page
 * Six guest staterooms plus staff suite designed by Alberto Pinto
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage, ArticleImageGallery } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function GuestAccommodationsPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Guest Accommodations | ALFA NERO"
        description="Six individually designed guest staterooms across three decks onboard ALFA NERO, plus a flexible staff suite. Each cabin features Alberto Pinto's signature design with unique character and luxury finishes. Art collection includes works by Lichtenstein, Murakami, Warhol, and Chagall."
      
        preloadImage="/images/guest-cabin-twin.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BbVbBSZKUSlOpHDI.mp4"
        imageSrc="/images/guest-vip-suite.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">The Yacht</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Guest Accommodations
          </h1>
          <p className="text-xl text-white/80 font-light">Six staterooms plus staff suite, each with individual character</p>
        </div>
      </VideoHero>

      {/* Content */}
      <section className="pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            
            {/* Introduction */}
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>Designed for Individuals, Not Replicated</h2>
            <p className="article-lead">
              <strong>
              Six individually designed guest staterooms across three decks, each a private sanctuary created by Alberto Pinto.</strong> A glass-enclosed elevator connects all guest levels, gliding past illuminated crystal sculptures and a leather mosaic-lined stairwell. Every cabin features custom furnishings, en-suite bathrooms, and the meticulous attention to detail that defines ALFA NERO.
            </p>

            <p>
              The art collection includes original works by Roy Lichtenstein, Joan Miro, Takashi Murakami, Andy Warhol, Frank Stella, and Marc Chagall, displayed throughout the yacht from the VIP suites to the main salon. From coral and blue colour schemes to soft neutrals, each cabin offers its own distinct character alongside the comfort and privacy expected of a vessel in this class. An additional staff suite provides flexible accommodation for security, childcare, or visiting crew.
            </p>

            {/* Cabin Overview */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-6">Cabin Configuration (6 Guest Staterooms + 1 Staff Suite)</h3>
              <div className="space-y-4 text-foreground/80">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">Master Suite</span>
                  <span className="text-foreground/60">Upper Deck Forward • Full-beam</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">VIP Suite</span>
                  <span className="text-foreground/60">Main Deck • His & Her Bathrooms</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">VIP Suite</span>
                  <span className="text-foreground/60">Lower Deck • Spa Access & Sea Terrace</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">Double Cabin</span>
                  <span className="text-foreground/60">Lower Deck • Queen Bed</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">Twin Cabin</span>
                  <span className="text-foreground/60">Lower Deck • Convertible to Double</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium">Twin Cabin</span>
                  <span className="text-foreground/60">Lower Deck • Convertible to Double</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Staff Suite</span>
                  <span className="text-foreground/60">Flexible • Security / Nanny / Crew</span>
                </div>
              </div>
            </div>

            <p className="section-label mb-4">Accommodations</p>


            <h2>The VIP Suites</h2>
            <p>
              Two VIP suites on the main deck offer the most generous guest accommodations after the master suite. Each features a king-size bed, full en-suite bathroom with marble finishes, and the kind of wardrobe space that accommodates extended cruising rather than weekend visits. Large portholes bring natural light deep into the cabins, and the wenge wood panelling creates an atmosphere of sophisticated warmth.
            </p>

            <p>
              Pinto's attention to detail extended to elements guests might never consciously register: door handles weighted for perfect feel in the hand, drawer mechanisms engineered for silent operation, lighting systems calibrated for morning, afternoon, evening, and night, and storage solutions that accommodate actual wardrobes rather than theoretical ones.
            </p>
          </article>

          {/* Guest Room Video */}
          <div className="my-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/UzGLUcvPpOoXyXsp.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-center text-sm text-foreground/60 mt-4">Guest Cabins | Video Tour</p>
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Accommodations</p>

            <h2>The Double & Twin Cabins</h2>
            <p>
              The lower deck accommodations – one double cabin and two twin cabins – provide comfortable quarters for additional guests, staff, or children. While more compact than the VIP suites, these cabins maintain the same material quality and design attention. Each features its own en-suite bathroom, climate control, and entertainment systems.
            </p>

            <p>
              The twin cabins can be configured for children travelling with families or for staff accompanying guests, with beds that convert to provide flexibility in accommodation planning. The double cabin offers an intimate retreat with the same wenge and lacquer finishes found throughout the yacht.
            </p>

            <QuoteWithLogo
              quote="The guest cabins each received individual design treatment, sharing the same aesthetic vocabulary but expressing it differently, so that guests feel they are staying in accommodations designed specifically for them."
              attribution="Alberto Pinto Design Philosophy"
              logo="/images/logo-alberto-pinto.webp"
              logoAlt="Alberto Pinto"
            />

            <p className="section-label mb-4">Craftsmanship</p>


            <h2>Materials & Craftsmanship</h2>
            <p>
              Throughout all guest accommodations, the materials tell their own story. Dark African wenge provides visual weight and acoustic warmth, scalloped white lacquer panels create texture that catches light differently throughout the day, leathers sourced from Italian tanneries, fabrics woven specifically for the yacht, and marbles selected individually for each bathroom based on colour, veining, and how they would age over decades of use.
            </p>

            <p>
              The 2024 refit refreshed soft furnishings and updated technology throughout the guest cabins while preserving Pinto's original design intent. New mattresses, linens, and bathroom amenities ensure contemporary comfort, while the fundamental architecture and material palette remain faithful to the 2007 vision.
            </p>

            {/* Amenities Grid */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-6">Guest Cabin Amenities</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>En-suite marble bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Individual climate control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Entertainment systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Blackout blinds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Premium linens</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Personal safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Wardrobe storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  <span>USB charging</span>
                </div>
              </div>
            </div>

          </article>

          {/* Guest Cabin Gallery */}
          <div className="my-16">
            <h3 className="text-xl font-light mb-8 text-center">Guest Cabin Gallery</h3>
            <ArticleImageGallery
              images={[
                { src: "/images/guest-cabin-murakami.webp", alt: "VIP Suite with Murakami artwork", caption: "VIP Suite featuring Takashi Murakami artwork" },
                { src: "/images/guest-vip-suite.webp", alt: "VIP Suite living area", caption: "VIP Suite with coral accents and entertainment" },
                { src: "/images/vip-room.webp", alt: "VIP Suite lounge area", caption: "VIP Suite lounge with warm wood panelling" },
                { src: "/images/guest-cabin-desk.webp", alt: "Guest cabin with desk", caption: "Guest cabin with private workspace" },
                { src: "/images/guest-corridor-gallery.webp", alt: "Guest corridor art gallery", caption: "Art-lined corridor leading to guest cabins" }
              ]}
              className="grid-cols-1 md:grid-cols-2"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Privacy & Access</p>

            <h2>Privacy & Separation</h2>
            <p>
              The distribution of guest cabins across main and lower decks provides natural separation between accommodation zones. VIP guests on the main deck enjoy proximity to the yacht's primary social spaces, while lower deck cabins offer quieter retreats removed from the activity above. This vertical separation allows different guest groups to maintain their own rhythms without interference.
            </p>

            <p>
              The master suite, occupying the entire forward section of the upper deck, remains completely separate from all guest accommodations – a deliberate architectural decision that gives the owner genuine privacy rather than merely a larger cabin.
            </p>
          </article>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/master-cabin" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Master Suite
              </Link>
              <Link href="/wellness" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Wellness →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
