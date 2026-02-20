/**
 * Outdoor Living Page
 * The art of living outdoors - exterior spaces, toys & tenders onboard ALFA NERO.
 * Image sources: YachtCharterFleet
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function DeckSpacePage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Outdoor Living | ALFA NERO"
        description="Explore ALFA NERO's 1,250 square metres of outdoor living space - deck areas, toys & tenders, garage, and al fresco dining designed with the same attention as the interior."
      
        preloadImage="/images/sundeck-pool-loungers.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/szTIXsQCyIWlnVKt.mp4"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kUinoERJOlDqdCMU.jpg"
        imageAlt="ALFA NERO Aft Deck"
        overlayStyle="gradient"
        kenBurnsEffect={true}
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Exterior Spaces</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Outdoor Living
          </h1>
          <p className="text-xl text-white/80 font-light">Deck Spaces · Toys & Tenders · Dining</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="py-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>
              ALFA NERO's exterior spaces were conceived as outdoor rooms, extensions of the interior that offer the same attention to proportion, flow, and comfort.</strong> With over 1,250 square metres of living space across multiple decks, the yacht provides areas for every mood and occasion.
            </p>



            <h2>The Aft Deck</h2>
            <p>
              The aft deck entertainment area centres on the iconic infinity pool, but the surrounding space is equally considered. A full wet bar, generous banquette seating, and barbecue facilities create a complete outdoor living room capable of hosting anything from intimate dinners to larger gatherings.
            </p>

            <p>
              The bleached teak deck, sun pads, and chaise longues are arranged to maximise both socialising and privacy. Guests can gather around the pool, or retreat to quieter corners without feeling separated from the action.
            </p>
          </article>

          {/* Mid-article Image - Aft Deck Terrace */}
          <div className="my-16">
            <ArticleImage
              src="/images/aft-deck-terrace.webp"
              alt="ALFA NERO Aft Deck Terrace"
              caption="The aft deck terrace with infinity pool and lounge seating"
              className="aspect-[16/10]"
            />
          </div>

          {/* Aft Deck Pool Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/aft-deck-pool.webp"
              alt="ALFA NERO Aft Deck Pool"
              caption="The infinity pool at the heart of the aft deck entertainment area"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Design Philosophy</p>

            <h2>The Infinity Pool: A Design Revolution</h2>
            <p>
              <strong>When ALFA NERO launched in 2007, her 3.7-by-11.6-metre infinity pool was the first of its kind on a superyacht.</strong> What seems almost standard today was genuinely revolutionary then, a feature that required significant engineering innovation and changed owner expectations across the industry.
            </p>

            <p>
              The pool floor rises via a precision spindle mechanism to varying depths, from full swimming depth to a shallow wading pool safe for children. When fully raised, the floor creates a flat deck surface that can serve as a full-beam entertainment space or, critically, as an emergency helipad certified for helicopter operations. The spindle system was specifically chosen to prevent accidental lowering under helicopter weight, with a rim seal system preventing water contamination during aircraft operations.
            </p>

            <p>
              A glass waterfall feature at the aft edge provides both visual drama and acoustic privacy, the sound of falling water masking conversation from the decks below. The infinity edge itself creates the illusion of water merging with the horizon—a design detail that has been copied countless times since but rarely matched.
            </p>

            <QuoteWithLogo
              quote="The infinity pool wasn't just a feature, it was a statement that changed what owners expected from their yachts. ALFA NERO proved that superyachts could offer experiences previously thought impossible at sea."
              attribution="SuperYacht Times"
              logo="/images/logo-superyacht-times.webp"
              logoAlt="SuperYacht Times"
            />

            <p>
              The pool is surrounded by sun pads, chaise longues, and a full wet bar, creating a complete outdoor living environment. Whether for morning laps, afternoon lounging, or evening aperitifs, this space remains the heart of ALFA NERO's outdoor life and her most photographed feature.
            </p>
          </article>

          <article className="article-prose">

            <h2>The Sundeck</h2>
            <p>
              The top deck offers the most elevated perspective onboard, with 180-degree views from the air-conditioned gym and direct access to the Jacuzzi pool. This deck serves as both wellness retreat and observation platform, a place to watch the sunset or spot dolphins from the highest vantage point.
            </p>
          </article>

          {/* Gym Sundeck Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/gym-sundeck.webp"
              alt="ALFA NERO Sundeck Gym with panoramic views"
              caption="The sundeck gym with 180-degree views and direct deck access"
              className="aspect-[16/9]"
            />
          </div>

          {/* Jacuzzi Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/sundeck-gym-jacuzzi.webp"
              alt="ALFA NERO Sundeck Gym and Jacuzzi"
              caption="The sundeck gym with Jacuzzi and panoramic views"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">

            <h2>Dining Al Fresco</h2>
            <p>
              ALFA NERO features three separate exterior dining areas, each offering a distinct experience. The aft deck dining with its elegant U-shaped banquette seats up to twelve guests in comfort, while the upper deck provides a more intimate setting with sweeping views.
            </p>

            <p>
              Whether breakfast on the owner's private deck, lunch by the pool, or a formal dinner under the stars, the yacht accommodates every preference. The main deck dining room features retractable glazed doors that can be fully opened, blurring the boundary between inside and out.
            </p>
          </article>

          {/* Exterior Dining Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/exterior-dining.webp"
              alt="ALFA NERO Exterior Dining"
              caption="The aft deck dining area with elegant table setting and ocean views"
              className="aspect-[16/10]"
            />
          </div>

          {/* Second Mid-article Image - Private Dining */}
          <div className="my-16">
            <ArticleImage
              src="/images/private-dining.webp"
              alt="ALFA NERO Private Dining"
              caption="Private dining space with panoramic views"
              className="aspect-[16/10]"
            />
          </div>

          {/* Al Fresco Dining with Red Umbrellas */}
          <div className="my-16">
            <ArticleImage
              src="/images/alfresco-dining-deck.webp"
              alt="ALFA NERO Al Fresco Dining with Red Umbrellas"
              caption="Al fresco dining on the upper deck with signature red umbrellas and turquoise waters"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Wellness</p>

            <h2>The Beach Club</h2>
            <p>
              At water level, the beach club provides the most direct connection to the sea. This space, with its fold-down platforms and abundant natural light, serves as the departure point for water sports and the return point for swimmers, divers, and explorers.
            </p>
          </article>

          {/* Beach Club Image */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/KLnISrvnYyNCYtvl.jpg"
              alt="ALFA NERO Beach Club with Sun Loungers"
              caption="The beach club with sun loungers and Roy Lichtenstein artwork"
              className="aspect-[16/10]"
            />
          </div>

          {/* Swim Platform Image */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/mnKkFwRRCBTRoFAp.jpg"
              alt="ALFA NERO Swim Platform with Jet Ski"
              caption="The swim platform providing direct access to water sports and the sea"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Water Sports</p>

            <h2>Toys & Tenders</h2>
            <p>
              ALFA NERO carries an impressive array of water toys and tenders, stored in the dedicated garage and on the foredeck. The collection includes a 10-metre Pascoe tender, jet skis, Seabobs, wakeboards, water skis, and inflatable toys—everything needed for adventure on the water.
            </p>

            <p>
              The garage, accessible from the beach club, provides protected storage and easy deployment. Crew can have toys in the water within minutes, ensuring guests spend more time enjoying and less time waiting.
            </p>

            <div className="mt-8">
              <Link href="/water-toys" className="inline-block border border-foreground text-foreground text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300">
                Explore Water Toys & Tenders
              </Link>
            </div>
          </article>

          {/* Toys & Tenders Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/toys-tenders-deck.webp"
              alt="ALFA NERO Toys and Tenders"
              caption="The tender, Seabobs, and wakeboards ready for deployment on the foredeck"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <QuoteWithLogo
              quote="The Nuvolari Lenard design prioritises flow between indoor and outdoor spaces, moving through ALFA NERO feels effortless."
              attribution="Power & Motoryacht"
              logo="/images/logo-nuvolari-lenard.webp"
              logoAlt="Nuvolari Lenard"
            />

            <p className="section-label mb-4">Overview</p>


            <h2>Circulation</h2>
            <p>
              The Nuvolari Lenard design prioritises flow between indoor and outdoor spaces. Sliding glass doors, sheltered walkways, and thoughtfully positioned staircases ensure that moving through ALFA NERO feels effortless, regardless of weather or occasion.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>Shade and Shelter</h2>
            <p>
              While the Mediterranean sun is part of the appeal, ALFA NERO's deck areas include provisions for shade and shelter. Retractable awnings, covered seating areas, and the positioning of superstructure elements ensure that outdoor living remains comfortable throughout the day.
            </p>
          </article>

          {/* Shaded Bar Area Image */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/XmwekSVlhjViLnLK.jpg"
              alt="Shaded Bar Area with Red Umbrellas"
              caption="Shaded bar area | Covered seating with panoramic views"
              className="aspect-[16/10]"
            />
          </div>

          {/* Third Mid-article Image - Aft Deck Pool */}
          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/GzhIhJkCGAGGvKhK.png"
              alt="ALFA NERO Aft Deck Pool and Dining Area"
              caption="The aft deck features a pool, al fresco dining for 12, and panoramic ocean views"
              className="aspect-[16/10]"
            />
          </div>

          {/* Evening Pool Deck Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/pool-deck-evening.webp"
              alt="ALFA NERO Pool Deck at Evening"
              caption="The aft deck pool illuminated at twilight with sun loungers and candlelight"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            {/* Outdoor Living Summary */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4">Outdoor Living Overview</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Total Living Space</p>
                  <p>1,250 m² / 13,455 ft²</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Guest Decks</p>
                  <p>4 levels</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Dining Areas</p>
                  <p>3 exterior locations</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Main Tender</p>
                  <p>10m Pascoe</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Aft Deck</p>
                  <p>Infinity pool, wet bar, BBQ</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Water Toys</p>
                  <p>Jet skis, Seabobs, wakeboards</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Beach Club</p>
                  <p>Water-level access</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Garage</p>
                  <p>Protected toy storage</p>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/master-cabin" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Master Cabin
              </Link>
              <Link href="/technical" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Technical Specifications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
