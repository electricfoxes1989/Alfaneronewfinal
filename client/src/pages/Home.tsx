/**
 * ALFA NERO - Homepage
 * Design inspired by Hotel Bella Grande luxury aesthetic
 * Refined, editorial, sophisticated - no hard selling
 * 
 * Features:
 * - Video hero with drone footage (falls back to Ken Burns on mobile)
 * - Parallax scrolling on large images
 * - Staggered entrance animations
 * - Smooth flow between sections
 * - Respects prefers-reduced-motion
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TimeBasedVideoHero from "@/components/TimeBasedVideoHero";
import YachtSchema from "@/components/YachtSchema";


import LazyVideo from "@/components/LazyVideo";
import { useEffect, useState, useRef, useCallback } from "react";
import { trackButtonClick, trackLinkClick, trackDesignerClick, trackSectionInteraction } from "@/lib/analytics";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const poolVideoRef = useRef<HTMLDivElement>(null);

  // Handle full-screen for pool video
  const handlePoolFullscreen = useCallback(() => {
    const container = poolVideoRef.current;
    if (!container) return;
    
    const video = container.querySelector('video');
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        // iOS Safari
        (video as any).webkitEnterFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      }
    }
  }, []);
  
  useEffect(() => {
    // Intersection Observer for fade animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <YachtSchema />
      <SEOHead 
        title="ALFA NERO | 81m Oceanco Superyacht For Sale"
        description="ALFA NERO is an 81-metre Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, interiors by Alberto Pinto. Built 2007, refitted 2024."
        preloadImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp"
      />
      <Navigation />

      {/* Hero Section - Time-based video that changes based on user's local time */}
      <TimeBasedVideoHero
        videos={{
          // Currently using same video for all times - replace with different videos when available
          // dawn: { src: "/videos/alfa-nero-dawn.mp4", poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp" },
          day: { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/yhLbPaEAtdicwmVc.mp4", poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp" },
          // sunset: { src: "/videos/alfa-nero-sunset.mp4", poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp" },
          // night: { src: "/videos/alfa-nero-night.mp4", poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp" },
        }}
        fallbackImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp"
        fallbackImageSrcset="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/MvOHZGFGQjAkJHjh.webp 480w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/LnfYFWyXwKbasrKp.webp 960w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp 1920w"
        fallbackImageSizes="100vw"
        imageAlt="ALFA NERO 81m Oceanco Superyacht"
        overlayStyle="gradient"
        kenBurnsEffect={true}
        parallaxEffect={true}
        parallaxIntensity={0.25}
      >
        <div className="container text-center max-w-7xl px-4 -mt-24 md:-mt-32">
          <div className="overflow-hidden">
            <h1 
              className="mb-2 leading-[0.85] text-white text-center mx-auto"
              style={{ 
                fontFamily: "'Cantata One', serif",
                fontSize: 'clamp(3rem, 12vw, 10rem)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'none'
              }}
            >
              ALFA NERO
              <span className="sr-only"> | 81m Oceanco Superyacht For Sale</span>
            </h1>
          </div>
          <div 
            className="mb-16 text-white font-light uppercase max-w-4xl mx-auto opacity-100"
            style={{ 
              fontFamily: "'Jost', sans-serif",
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            <p className="tracking-[0.2em] leading-relaxed text-white" style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.8rem)', color: '#ffffff' }}>
              BUILT BY <Link href="/oceanco" className="hover:text-red-400 transition-colors" onClick={() => trackDesignerClick('Oceanco')}>OCEANCO</Link>&nbsp;&nbsp;·&nbsp;&nbsp;DESIGNED BY <Link href="/exterior-designer" className="hover:text-red-400 transition-colors" onClick={() => trackDesignerClick('Nuvolari Lenard')}>NUVOLARI LENARD</Link>&nbsp;&nbsp;·&nbsp;&nbsp;INTERIOR BY <Link href="/interior-designer" className="hover:text-red-400 transition-colors" onClick={() => trackDesignerClick('Alberto Pinto')}>ALBERTO PINTO</Link>
            </p>
            <p className="tracking-[0.2em] mt-1 text-white" style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.8rem)', color: '#ffffff' }}>
              YEAR 2007&nbsp;&nbsp;·&nbsp;&nbsp;REFIT 2024
            </p>
          </div>
          <div>
            <Link href="/master-cabin">
              <button 
                className="btn-luxury-outline text-base px-12 py-4"
                onClick={() => trackButtonClick('Discover', '/master-cabin')}
              >
                Discover
              </button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator with bouncing arrow - positioned at very bottom */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="animate-bounce">
            <svg 
              className="w-5 h-5 text-white/50" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </TimeBasedVideoHero>

      {/* An Oceanco Icon - Video Section with scroll animation */}
      <section className="section-padding" data-animate id="about">
        <div className={`container max-w-7xl ${visibleSections.has('about') ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className={`lg:col-span-5 ${visibleSections.has('about') ? 'slide-left visible' : 'slide-left'}`}>
              <p className="section-label mb-4">The Vessel</p>
              <h2 className="text-foreground mb-8" style={{ fontFamily: "'Cantata One', serif" }}>An Oceanco Icon</h2>
              <p className="text-lg leading-relaxed mb-6 font-light">
                A multi-award-winning 82-metre superyacht built by Oceanco and originally commissioned by Greek shipping magnate Theodore Angelopoulos, ALFA NERO remains a benchmark in her class almost two decades after launch. Comprehensively refitted in 2024, she is presented today in strong technical and operational condition.
              </p>
              <p className="text-base leading-relaxed text-foreground/60 font-light">
                Winner of seven major industry awards including Best Interior Design and Best Exterior Styling at the World Superyacht Awards, ALFA NERO offers proven charter capability, and a layout suited to both private ownership and commercial use. She represents a rare opportunity to acquire a vessel of genuine pedigree at her strongest point since delivery.
              </p>
              <div className="mt-10">
                <Link href="/history" className="link-elegant text-foreground hover:text-red-600 uppercase text-xs tracking-[0.2em] transition-colors duration-300">
                  Explore The Yacht
                </Link>
              </div>
            </div>
            <div className={`lg:col-span-7 ${visibleSections.has('about') ? 'slide-right visible' : 'slide-right'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="image-frame overflow-hidden rounded-sm">
  <LazyVideo
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/FEhBZRqIoMCAPrMv.mp4"
                  poster="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/tdiSoERkjbuufbfY.webp"
                  posterAlt="ALFA NERO stern deck with water toys"
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Grid - Editorial Style with stagger - BLACK SECTION */}
      <section className="section-padding bg-[#0a0a0a] text-white" data-animate id="highlights">
        <div className="container max-w-7xl">
          <div className={`grid md:grid-cols-3 gap-8 lg:gap-16 stagger-children ${visibleSections.has('highlights') ? 'visible' : ''}`}>
            {/* Master Cabin Card */}
            <div className="block">
              <div className="image-frame aspect-[3/4] mb-8 overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/eNJnPZWeGRATLlPP.webp" 
                  srcSet="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/TpIlOOFqRZWKqYjC.webp 480w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/lKOYgjLgvGpANyub.webp 960w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/urzFiYPfYZgNPzER.webp 1920w"
                  sizes="(max-width: 640px) 480px, (max-width: 1024px) 960px, 1920px"
                  alt="ALFA NERO master cabin by Alberto Pinto with panoramic ocean views" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-3 font-bold" style={{ fontFamily: "'Jost', sans-serif" }}>Interior</p>
              <h4 className="mb-4 text-white font-cantata">Master Cabin</h4>
              <p className="text-white/70 leading-relaxed font-light text-sm mb-6">
                The owner's suite designed by Alberto Pinto, featuring a private office, walk-in closet, and panoramic ocean views.
              </p>
              <Link 
                href="/master-cabin" 
                className="inline-block border border-white text-white text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                onClick={() => trackSectionInteraction('Master Cabin', 'explore')}
              >
                Explore
              </Link>
            </div>

            {/* Guest Accommodations Card */}
            <div className="block">
              <div className="image-frame aspect-[3/4] mb-8 overflow-hidden">
                <img 
                  src="/images/guest-vip-suite.webp" 
                  alt="ALFA NERO guest stateroom with Alberto Pinto interior design" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-3 font-bold" style={{ fontFamily: "'Jost', sans-serif" }}>Accommodations</p>
              <h4 className="mb-4 text-white font-cantata">Guest Cabins</h4>
              <p className="text-white/70 leading-relaxed font-light text-sm mb-6">
                Six individually designed guest staterooms across three decks, each a private sanctuary created by Alberto Pinto. A glass-enclosed elevator connects all guest levels.
              </p>
              <Link 
                href="/guest-accommodations" 
                className="inline-block border border-white text-white text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                onClick={() => trackSectionInteraction('Guest Cabins', 'explore')}
              >
                Explore
              </Link>
            </div>

            {/* Wellness Card */}
            <div className="block">
              <div className="image-frame aspect-[3/4] mb-8 overflow-hidden">
                <img 
                  src="/images/Spa.webp" 
                  alt="ALFA NERO wellness spa and beach club at sea level" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-3 font-bold" style={{ fontFamily: "'Jost', sans-serif" }}>Lifestyle</p>
              <h4 className="mb-4 text-white font-cantata">Wellness & Amenities</h4>
              <p className="text-white/70 leading-relaxed font-light text-sm mb-6">
                Complete spa with sauna, massage room, and gym with panoramic views. Beach club, tenders, and extensive toy collection.
              </p>
              <Link 
                href="/wellness" 
                className="inline-block border border-white text-white text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                onClick={() => trackSectionInteraction('Wellness & Amenities', 'explore')}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pool to Helipad Feature - Video Above, Text on White Below */}
      <section data-animate id="pool-helipad">
        {/* Video Section */}
        <div className="relative">
          <div ref={poolVideoRef} className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8] relative overflow-hidden">
            <LazyVideo
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/hiCbFoBlCNcIHhCI.mp4"
              poster="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/cMjDvuvncDCVqukW.webp"
              posterAlt="ALFA NERO infinity pool with sun loungers and Maltese flag"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            
            {/* Full-screen button */}
            <button
              onClick={handlePoolFullscreen}
              className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
              aria-label="View full screen"
            >
              <svg 
                className="w-5 h-5 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" 
                />
              </svg>
            </button>
          </div>
          {/* Decorative bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        {/* Text Section on White Background */}
        <div className="bg-white py-16 md:py-20 -mt-12 relative z-10">
          <div className="container max-w-4xl">
            <div className={`text-center ${visibleSections.has('pool-helipad') ? 'fade-up visible' : 'fade-up'}`}>
              <p 
                className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Engineering Marvel
              </p>
              <h2 
                className="text-foreground mb-6"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Pool to Helipad in Minutes
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                The pool floor rises via a precision spindle mechanism to create a certified helipad in under 90 seconds. The first convertible pool-to-helipad system in superyacht history, it was engineered with a spindle drive rather than hydraulics specifically so the platform cannot lower under load.
              </p>
              <div className="mt-8 flex justify-center gap-8 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-light text-foreground" style={{ fontFamily: "'Cantata One', serif" }}>90</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground/50">Seconds</p>
                </div>
                <div className="w-px bg-foreground/20" />
                <div>
                  <p className="text-2xl md:text-3xl font-light text-foreground" style={{ fontFamily: "'Cantata One', serif" }}>First</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground/50">Of Its Kind</p>
                </div>
                <div className="w-px bg-foreground/20" />
                <div>
                  <p className="text-2xl md:text-3xl font-light text-foreground" style={{ fontFamily: "'Cantata One', serif" }}>Helipad</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground/50">On Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs with Yacht Drawing - Scroll Animation */}
      <section className="py-24 md:py-32 bg-white overflow-hidden" data-animate id="specs">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Specifications</p>
            <h2 className="text-foreground" style={{ fontFamily: "'Cantata One', serif" }}>Technical Excellence</h2>
          </div>
          
          {/* Yacht Drawing with Animated Specs - No Overlapping Layout */}
          <div className="mx-auto max-w-5xl">
            {/* Top row - above the yacht */}
            <div className={`flex justify-between items-end mb-6 px-4 transition-all duration-700 ${visibleSections.has('specs') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <div className="text-left">
                <p className="text-base md:text-2xl font-light">12 Guests</p>
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">6 Staterooms</p>
              </div>
              <div className="text-right">
                <p className="text-base md:text-2xl font-light">20 kts</p>
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Max Speed</p>
              </div>
            </div>
            
            {/* Middle row - yacht image with side specs */}
            <div className="flex items-center gap-2 md:gap-8">
              {/* Left specs */}
              <div className={`flex flex-col gap-8 md:gap-12 min-w-[60px] md:min-w-[100px] transition-all duration-700 delay-200 ${visibleSections.has('specs') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="text-left">
                  <p className="text-sm md:text-2xl font-light">14.20m</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Beam</p>
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-2xl font-light">3.90m</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Draft</p>
                </div>
              </div>
              
              {/* Yacht drawing - centered */}
              <div className="flex-1">
                {/* Side profile for desktop */}
                <img 
                  src="/images/alfa-nero-line-drawing.webp" 
                  alt="ALFA NERO 82m Oceanco superyacht technical line drawing with specifications" 
                  className="hidden md:block w-full h-auto"
                />
                {/* 3D perspective drawing for mobile */}
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/YoxdiNMevOMQgkXZ.webp" 
                  srcSet="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/QRvqEeChXxkFDgmR.webp 256w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/EvCHUxOoIhWYmUDw.webp 512w, https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/YoxdiNMevOMQgkXZ.webp 1024w"
                  sizes="(max-width: 768px) 100vw, 0px"
                  alt="ALFA NERO superyacht 3D rendering showing hull and superstructure design" 
                  className="md:hidden w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              {/* Right specs */}
              <div className={`flex flex-col gap-8 md:gap-12 min-w-[60px] md:min-w-[100px] transition-all duration-700 delay-400 ${visibleSections.has('specs') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="text-right">
                  <p className="text-sm md:text-2xl font-light">2,159 GT</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Gross Tonnage</p>
                </div>
                <div className="text-right">
                  <p className="text-sm md:text-2xl font-light">5,500nm</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Range</p>
                </div>
              </div>
            </div>
            
            {/* Bottom row - below the yacht */}
            <div className={`text-center mt-6 transition-all duration-700 delay-100 ${visibleSections.has('specs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 justify-center mb-1">
                <div className="w-16 md:w-24 h-px bg-black/30"></div>
                <span className="text-base md:text-3xl font-light">81.27m</span>
                <div className="w-16 md:w-24 h-px bg-black/30"></div>
              </div>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-bold">Length Overall</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/technical" 
              className="btn-luxury"
              onClick={() => trackButtonClick('Full Specifications', '/technical')}
            >
              Full Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* Outdoor & Adventure Feature Section */}
      <section className="py-24 md:py-32 bg-background overflow-hidden" data-animate id="outdoor-feature">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Life On Deck</p>
            <h2 className="text-foreground" style={{ fontFamily: "'Cantata One', serif" }}>
              Outdoor & Adventure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Outdoor Living Card */}
            <div className={`${visibleSections.has('outdoor-feature') ? 'fade-up visible' : 'fade-up'}`}>
              <Link 
                href="/outdoor-living" 
                className="group block"
                onClick={() => trackSectionInteraction('Outdoor Living', 'explore')}
              >
                <div className="image-frame aspect-[4/3] overflow-hidden relative mb-6">
                  <img 
                    src="/images/alfresco-dining-deck.webp" 
                    alt="ALFA NERO outdoor living deck with al fresco dining area" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-red-600 transition-colors">Outdoor Living</h3>
                <p className="text-foreground/60 leading-relaxed mb-4">
                  Multiple al fresco dining areas, sun decks, and the iconic infinity pool create endless possibilities for entertaining under the Mediterranean sun.
                </p>
                <span className="inline-block border border-foreground text-foreground text-xs uppercase tracking-[0.15em] px-6 py-3 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  Explore
                </span>
              </Link>
            </div>
            
            {/* Water Toys Card */}
            <div className={`${visibleSections.has('outdoor-feature') ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.2s' }}>
              <Link 
                href="/water-toys" 
                className="group block"
                onClick={() => trackSectionInteraction('Water Toys & Tenders', 'explore')}
              >
                <div className="image-frame aspect-[4/3] overflow-hidden relative mb-6">
                  <img 
                    src="/images/toys-tenders-deck.webp" 
                    alt="ALFA NERO water toys garage with jet skis and tender storage" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-red-600 transition-colors">Water Toys & Tenders</h3>
                <p className="text-foreground/60 leading-relaxed mb-4">
                  From jet skis to diving equipment, ALFA NERO's extensive collection ensures every water adventure is within reach from her fully-equipped garage.
                </p>
                <span className="inline-block border border-foreground text-foreground text-xs uppercase tracking-[0.15em] px-6 py-3 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  Explore
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
}
