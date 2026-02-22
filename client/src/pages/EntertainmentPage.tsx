/**
 * Entertainment Areas Page
 * Social spaces, lounges, piano, cinema - where guests gather and memories are made.
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function EntertainmentPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Entertainment Areas | ALFA NERO"
        description="Discover ALFA NERO's exceptional entertainment spaces including the main salon, sundeck lounge, Bösendorfer piano, and cinema room."
      
        preloadImage="/images/main-salon-piano.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/YndnyopubwofOxEO.mp4"
        imageSrc="/images/main-salon-lounge.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Entertainment Spaces</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            Where Memories Are Made
          </h1>
          <p className="text-xl text-white/80 font-light">Lounges · Piano · Cinema</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="section-label mb-4">Entertainment</p>

            <h2>The Main Salon</h2>
            <p>
              The main salon serves as the social heart of ALFA NERO, a space where Alberto Pinto's vision of understated luxury reaches its fullest expression. Rich sycamore panelling frames the room, while carefully curated art pieces and custom furnishings create an atmosphere of refined sophistication.
            </p>
            <p>
              Floor-to-ceiling windows flood the space with natural light during the day, while the evening transforms it into an intimate venue for cocktails and conversation. The layout accommodates both large gatherings and quiet moments, adapting effortlessly to the rhythm of yacht life.
            </p>
          </article>

          {/* Sky Lounge Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/main-salon-lounge.webp"
              alt="Sky Lounge with Art Deco armchairs and white sofas"
              caption="Sky Lounge | Design: Alberto Pinto"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Entertainment</p>

            <h2>The Bösendorfer Piano</h2>
            <p>
              At the heart of the main salon stands a Bösendorfer grand piano, one of the world's most prestigious instruments. Handcrafted in Vienna since 1828, Bösendorfer pianos are renowned for their exceptional tonal quality and craftsmanship, a fitting centrepiece for a yacht of ALFA NERO's calibre.
            </p>
            <p>
              The instrument serves both as a stunning visual element and a functional piece, available for accomplished guests or professional musicians during special occasions. Its presence speaks to the original owner's appreciation for the finer things: music, art, and the spaces that celebrate them.
            </p>

            <div className="bg-foreground/5 border-l-2 border-gold p-6 my-8">
              <p className="text-sm text-foreground/70 italic mb-2">About Bösendorfer</p>
              <p className="text-base text-foreground/80">
                Founded in 1828 by Ignaz Bösendorfer in Vienna, the company has produced instruments for composers including Franz Liszt, Johannes Brahms, and Johann Strauss II. Each piano requires up to four years to complete, with master craftsmen hand-selecting materials and voicing each instrument individually.
              </p>
            </div>
          </article>

          {/* Piano Room Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/piano-room.webp"
              alt="Bösendorfer grand piano with custom artwork in the main salon"
              caption="The Bösendorfer Grand Piano | Custom artistic finish"
              className="aspect-[16/10]"
            />
          </div>

          {/* Piano History Section - Claude AI Design */}
          <div className="my-16">
            <iframe 
              src="/piano_history.html" 
              className="w-full border-0"
              style={{ height: '500px' }}
              title="Bösendorfer Piano History"
            />
          </div>

          <article className="article-prose">

            <p className="section-label mb-4">Outdoor Living</p>


            <h2>Sundeck Entertainment</h2>
            <p>
              The sundeck offers an entirely different entertainment experience, with open-air luxury with 360-degree views. A built-in bar, comfortable seating areas, and proximity to the Jacuzzi create the perfect environment for daytime relaxation or sunset celebrations.
            </p>
            <p>
              The space is equipped with an outdoor entertainment system, allowing guests to enjoy music or films under the stars. During the 2024 refit, the sundeck soft furnishings were completely refreshed, maintaining the classic black-and-white aesthetic that has become ALFA NERO's signature.
            </p>
          </article>

          {/* Sundeck Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/sundeck-entertainment.webp"
              alt="Sundeck Entertainment Area"
              caption="Sundeck Lounge | 2024 Refit"
              className="aspect-[16/10]"
            />
          </div>

          {/* Cinema Room Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/cinema-room.webp"
              alt="Cinema room with large screen and comfortable seating"
              caption="Cinema Room | State-of-the-art entertainment at sea"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Overview</p>

            <h2>Cinema & Media</h2>
            <p>
              For quieter evenings, ALFA NERO offers dedicated cinema facilities with a curated film library and state-of-the-art audio-visual equipment. The sky lounge doubles as a screening room, its comfortable seating and blackout capabilities creating an intimate theatre experience at sea.
            </p>
            <p>
              Throughout the yacht, integrated entertainment systems allow guests to access music, films, and media from any location, whether relaxing in their cabin, dining al fresco, or lounging by the pool.
            </p>

            <p className="section-label mb-4">Entertainment</p>


            <h2>Sky Lounge</h2>
            <p>
              The sky lounge provides an elevated retreat with commanding views and a more relaxed atmosphere than the main salon. This versatile space serves equally well for morning coffee, afternoon games, or evening entertainment.
            </p>
            <p>
              With its own bar and direct access to the exterior decks, the sky lounge offers guests the flexibility to move seamlessly between indoor comfort and outdoor enjoyment throughout the day.
            </p>
          </article>

          {/* Main Lounge Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/sky-lounge.webp"
              alt="Main Lounge with Art Deco armchairs and bar area"
              caption="Main Lounge | Art Deco elegance meets contemporary comfort"
              className="aspect-[16/9]"
            />
          </div>

          {/* Sky Lounge Blue Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/sky-lounge-blue.webp"
              alt="Sky Lounge with blue and white decor and panoramic ocean views"
              caption="Sky Lounge | Panoramic views and refined comfort"
              className="aspect-[16/9]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Outdoor Living</p>

            <h2>Outdoor Dining</h2>
            <p>
              ALFA NERO offers multiple outdoor dining venues, each designed to maximise the connection between exceptional cuisine and the surrounding seascape. The aft deck provides an elegant setting for formal al fresco dining, with a table that comfortably seats all twelve guests beneath the stars.
            </p>
            <p>
              Whether hosting an intimate breakfast as the sun rises over a secluded bay or a celebratory dinner under Mediterranean skies, the outdoor dining areas transform every meal into an occasion. The crew can arrange bespoke dining experiences throughout the yacht's exterior spaces, from casual lunches on the sundeck to romantic dinners by the infinity pool.
            </p>
          </article>

          {/* Outdoor Dining Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/alfresco-dining-deck.webp"
              alt="Al fresco dining on the aft deck with ocean views"
              caption="Al Fresco Dining | Aft Deck"
              className="aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* Navigation to Related Pages */}
      <section className="py-16 border-t border-foreground/10">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/interior" className="group block p-6 border border-foreground/10 hover:border-gold/50 transition-colors">
              <p className="text-xs tracking-widest text-foreground/50 mb-2">PREVIOUS</p>
              <p className="text-lg group-hover:text-gold transition-colors">Interior Design</p>
            </a>
            <a href="/dining" className="group block p-6 border border-foreground/10 hover:border-gold/50 transition-colors text-right">
              <p className="text-xs tracking-widest text-foreground/50 mb-2">NEXT</p>
              <p className="text-lg group-hover:text-gold transition-colors">Dining</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
