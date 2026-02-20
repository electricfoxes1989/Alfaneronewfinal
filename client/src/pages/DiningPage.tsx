/**
 * Dining Page
 * Formal and private dining experiences onboard ALFA NERO.
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function DiningPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Dining | ALFA NERO"
        description="Experience exceptional dining onboard ALFA NERO. From formal dinners for 12 guests to intimate private dining and al fresco meals under the stars."
      
        preloadImage="/images/formal-dining-table.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/XgTBiTSqQrcDPZMv.mp4"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/yRXvvqhLwFjYfegC.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Culinary Excellence</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            The Art of Dining
          </h1>
          <p className="text-xl text-white/80 font-light">Formal · Private · Al Fresco</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>
              Dining onboard ALFA NERO transcends mere sustenance. It becomes an experience.</strong> Whether hosting a formal dinner for twelve in the main dining room, sharing an intimate meal in the private dining area, or enjoying al fresco cuisine under Mediterranean stars, every setting has been designed by Alberto Pinto to elevate the culinary moment.
            </p>

            <p className="section-label mb-4">Technical Systems</p>


            <h2>Formal Dining Room</h2>
            <p>
              The formal dining room stands as a testament to Alberto Pinto's mastery of elegant entertaining. Accommodating up to 12 guests, the space features a custom-designed dining table surrounded by chairs upholstered in the finest materials. Museum-quality lighting creates an atmosphere of refined sophistication, while floor-to-ceiling windows frame ever-changing seascapes.
            </p>
            <p>
              Every detail has been considered—from the placement of the service areas to the acoustic properties of the room. The result is a space where conversation flows as freely as the wine, and where memorable dinners become the highlight of any voyage.
            </p>
          </article>

          {/* Formal Dining Images */}
          <div className="my-16">
            <ArticleImage
              src="/images/AA_1955-Edit.webp"
              alt="Formal Dining Room with panoramic ocean views"
              caption="Formal Dining Room | Panoramic Ocean Views"
              className="aspect-[16/10]"
            />
          </div>

          <div className="my-16">
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/wunpTDYOTuuXRgjS.webp"
              alt="Formal Dining Room with custom table for 12 guests"
              caption="Formal Dining Room | Design: Alberto Pinto"
              className="aspect-[16/10]"
            />
          </div>

          <div className="my-16">
            <ArticleImage
              src="/images/formal-dining-room.webp"
              alt="Formal Dining Room set for dinner with ocean views"
              caption="Formal Dining | Table set for twelve guests"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Dining</p>

            <h2>Private Dining</h2>
            <p>
              For more intimate occasions, the private dining area offers a secluded alternative to the main dining room. Perfect for business discussions, romantic dinners, or small family gatherings, this space provides the same level of refinement in a more personal setting.
            </p>
            <p>
              The room's design creates a sense of exclusivity while maintaining visual connection to the sea. Soft lighting, carefully selected artwork, and comfortable seating ensure that every meal here feels like a special occasion.
            </p>

            <div className="bg-foreground/5 border-l-2 border-gold p-6 my-8">
              <p className="text-sm text-foreground/70 italic mb-2">Culinary Excellence</p>
              <p className="text-base text-foreground/80">
                ALFA NERO's galley is equipped to the highest professional standards, capable of preparing cuisine ranging from Mediterranean classics to international fine dining. The yacht's experienced chef works with guests to create personalised menus, sourcing the finest local ingredients at each port of call.
              </p>
            </div>
          </article>

          {/* Private Dining Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/private-dining.webp"
              alt="Private Dining Area"
              caption="Private Dining | Intimate Entertaining"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Outdoor Living</p>

            <h2>Al Fresco Dining</h2>
            <p>
              The exterior dining areas offer an entirely different experience: the pleasure of fine dining combined with the beauty of the open sea. Multiple al fresco dining options are available throughout the yacht, from the formal exterior dining area on the main deck to casual seating on the sundeck.
            </p>
            <p>
              As the sun sets and the stars emerge, these outdoor spaces transform into magical settings for evening meals. The gentle sea breeze, the sound of water against the hull, and the vast canopy of stars overhead create an atmosphere impossible to replicate on land.
            </p>

            <p className="section-label mb-4">Privacy & Access</p>


            <h2>Service & Hospitality</h2>
            <p>
              ALFA NERO's crew are trained to deliver service at the highest level, anticipating needs before they arise. Whether organising a themed dinner party, arranging for local delicacies to be delivered by tender, or simply ensuring that every glass remains full, the attention to detail is unwavering.
            </p>
            <p>
              The yacht's wine cellar maintains a carefully curated selection of vintages, while the bar is stocked with premium spirits and champagnes. Every element of the dining experience has been considered to ensure that meals onboard ALFA NERO remain among the most memorable of any guest's life.
            </p>
          </article>

          {/* Exterior Dining Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/exterior-dining.webp"
              alt="Exterior Dining Area"
              caption="Al Fresco Dining | Main Deck"
              className="aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* Navigation to Related Pages */}
      <section className="py-16 border-t border-foreground/10">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/entertainment" className="group block p-6 border border-foreground/10 hover:border-gold/50 transition-colors">
              <p className="text-xs tracking-widest text-foreground/50 mb-2">PREVIOUS</p>
              <p className="text-lg group-hover:text-gold transition-colors">Entertainment</p>
            </a>
            <a href="/wellness" className="group block p-6 border border-foreground/10 hover:border-gold/50 transition-colors text-right">
              <p className="text-xs tracking-widest text-foreground/50 mb-2">NEXT</p>
              <p className="text-lg group-hover:text-gold transition-colors">Wellness Areas</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
