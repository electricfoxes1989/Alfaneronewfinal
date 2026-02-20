/**
 * Full Tour Page - Video tour of ALFA NERO
 * Features embedded YouTube video with contact section and navigation links
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function FullTourPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/DJI_20250911101923_0042_D.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container text-center z-10 max-w-4xl px-4">
          <p 
            className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Experience
          </p>
          <h1 
            className="text-white mb-3 leading-none"
            style={{ 
              fontFamily: "'Cantata One', serif",
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            Full Video Tour
          </h1>
          <p 
            className="text-white/70 text-sm md:text-base"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            82 Metres · Oceanco · 2007/2024
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl px-4">
          {/* Video Embed */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl mb-12">
            <iframe
              src="https://www.youtube.com/embed/eXXwZUQ4et0?rel=0&modestbranding=1"
              title="ALFA NERO Full Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Video Description */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              Step Onboard ALFA NERO
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Experience the full tour of this iconic 82-metre Oceanco superyacht. From the revolutionary infinity pool to the exquisite Alberto Pinto interiors, discover why ALFA NERO remains one of the most celebrated vessels ever built.
            </p>
          </div>

          {/* Explore Links */}
          <div className="border-t border-foreground/10 pt-16">
            <h3 
              className="text-center text-xs tracking-[0.3em] uppercase text-foreground/50 mb-10"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Continue Exploring
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/master-cabin" className="group block p-6 border border-foreground/10 hover:border-[#C41E3A]/50 transition-all duration-300 hover:bg-foreground/5">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>Accommodation</p>
                <h4 className="text-lg mb-2 group-hover:text-[#C41E3A] transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>Master Cabin</h4>
                <p className="text-sm text-foreground/60">The owner's private retreat</p>
              </Link>

              <Link href="/deck-space" className="group block p-6 border border-foreground/10 hover:border-[#C41E3A]/50 transition-all duration-300 hover:bg-foreground/5">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>Exterior</p>
                <h4 className="text-lg mb-2 group-hover:text-[#C41E3A] transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>Deck Spaces</h4>
                <p className="text-sm text-foreground/60">Infinity pool & outdoor living</p>
              </Link>

              <Link href="/wellness" className="group block p-6 border border-foreground/10 hover:border-[#C41E3A]/50 transition-all duration-300 hover:bg-foreground/5">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>Lifestyle</p>
                <h4 className="text-lg mb-2 group-hover:text-[#C41E3A] transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>Wellness</h4>
                <p className="text-sm text-foreground/60">Spa, gym & relaxation</p>
              </Link>

              <Link href="/gallery" className="group block p-6 border border-foreground/10 hover:border-[#C41E3A]/50 transition-all duration-300 hover:bg-foreground/5">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>Media</p>
                <h4 className="text-lg mb-2 group-hover:text-[#C41E3A] transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>Gallery</h4>
                <p className="text-sm text-foreground/60">Full photo collection</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-black text-white">
        <div className="container max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cantata One', serif" }}>82m</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Length</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cantata One', serif" }}>12</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Guests</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cantata One', serif" }}>6</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Cabins</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cantata One', serif" }}>2024</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Refit</p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
