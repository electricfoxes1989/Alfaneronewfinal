/**
 * Brochure Page - SEO-friendly digital brochure
 * Rich HTML content that Google can index, styled like a luxury brochure.
 * Includes a downloadable PDF option for offline viewing.
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LazyImage from "@/components/LazyImage";
import { useEffect, useState } from "react";
import { Download, Anchor, Waves, Wind, Users, Ruler, Gauge } from "lucide-react";

export default function BrochurePage() {
  const [visible, setVisible] = useState(false);
  const [showDownloadForm, setShowDownloadForm] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Brochure | ALFA NERO"
        description="ALFA NERO digital brochure. Explore the 81-metre Oceanco superyacht in detail: specifications, interiors by Alberto Pinto, exterior by Nuvolari Lenard, and lifestyle features."
        preloadImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp"
      />
      <Navigation />

      {/* Hero Cover */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative container max-w-5xl pb-16 md:pb-20 z-10">
          <div className={`${visible ? "fade-up visible" : "fade-up"}`}>
            <p
              className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Digital Brochure
            </p>
            <h1
              className="text-white mb-4 leading-[0.9]"
              style={{
                fontFamily: "'Cantata One', serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 400,
              }}
            >
              ALFA NERO
            </h1>
            <p
              className="text-white/70 text-base md:text-lg max-w-xl"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              81 Metres · Oceanco · Built 2007 · Refitted 2024
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <div className={`text-center ${visible ? "fade-up visible" : "fade-up"}`}>
            <p
              className="text-red-600 text-xs tracking-[0.3em] uppercase mb-6 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              An Oceanco Icon
            </p>
            <h2
              className="text-foreground mb-8"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              A Vessel Without Equal
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              ALFA NERO is a multi-award-winning 81-metre superyacht built by Oceanco
              and originally commissioned by Greek shipping magnate Theodore Angelopoulos.
              She was the first superyacht to feature a convertible infinity pool-to-helipad
              system, and her interiors by Alberto Pinto remain among the most celebrated
              in yachting history.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed">
              Winner of seven major industry awards, comprehensively refitted in 2024,
              and presented today in strong technical and operational condition, she
              represents a rare opportunity to acquire a vessel of genuine pedigree.
            </p>
          </div>
        </div>
      </section>

      {/* Key Specifications Grid */}
      <section className="py-20 md:py-24 bg-[#0a0a0a] text-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p
              className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Specifications
            </p>
            <h2 style={{ fontFamily: "'Cantata One', serif" }}>At a Glance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <div className="text-center">
              <Ruler className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>81.27m</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Length Overall</p>
            </div>
            <div className="text-center">
              <Anchor className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>14.20m</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Beam</p>
            </div>
            <div className="text-center">
              <Gauge className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>20 kts</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Max Speed</p>
            </div>
            <div className="text-center">
              <Wind className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>5,500nm</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Range</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>12</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Guests</p>
            </div>
            <div className="text-center">
              <Waves className="w-6 h-6 mx-auto mb-3 text-red-500" />
              <p className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Cantata One', serif" }}>6</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Staterooms</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light mb-1 mt-9" style={{ fontFamily: "'Cantata One', serif" }}>28</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Crew</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light mb-1 mt-9" style={{ fontFamily: "'Cantata One', serif" }}>2,159 GT</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Gross Tonnage</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/technical"
              className="inline-block border border-white/30 text-white text-xs uppercase tracking-[0.15em] px-8 py-3 hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              Full Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* Design Heritage - Two Column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p
              className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Design Heritage
            </p>
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              Three Houses, One Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Oceanco */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img
                  src="/images/oceanco-logo.webp"
                  alt="Oceanco logo"
                  className="w-full h-full object-contain p-8 bg-gray-50"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Oceanco
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Dutch shipyard renowned for engineering excellence.
                Builder of some of the world's most iconic superyachts,
                including Bravo Eugenia, Black Pearl, and Seven Seas.
              </p>
              <Link
                href="/oceanco"
                className="inline-block mt-4 text-red-600 text-xs uppercase tracking-[0.15em] hover:text-red-800 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Nuvolari Lenard */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img
                  src="/images/logo-nuvolari-lenard.webp"
                  alt="Nuvolari Lenard logo"
                  className="w-full h-full object-contain p-8 bg-gray-50"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Nuvolari Lenard
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Venice-based design studio founded by Carlo Nuvolari and Dan Lenard.
                Creators of ALFA NERO's award-winning exterior silhouette and
                revolutionary pool-to-helipad system.
              </p>
              <Link
                href="/exterior-designer"
                className="inline-block mt-4 text-red-600 text-xs uppercase tracking-[0.15em] hover:text-red-800 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Alberto Pinto */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img
                  src="/images/logo-alberto-pinto.webp"
                  alt="Alberto Pinto logo"
                  className="w-full h-full object-contain p-8 bg-gray-50"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Alberto Pinto
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Paris-based interior architect whose studio has defined luxury
                across residences, hotels, and aircraft. ALFA NERO's interiors
                won Best Interior Design at the 2008 World Superyacht Awards.
              </p>
              <Link
                href="/interior-designer"
                className="inline-block mt-4 text-red-600 text-xs uppercase tracking-[0.15em] hover:text-red-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/Evening.webp"
          alt="ALFA NERO at sunset in the Mediterranean"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Accommodation Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p
              className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Accommodation
            </p>
            <h2
              className="text-foreground mb-6"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              Life Onboard
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              ALFA NERO accommodates 12 guests across six individually designed staterooms,
              each reflecting Alberto Pinto's distinctive approach to maritime luxury.
              A crew of 28 ensures impeccable service throughout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Master Suite */}
            <Link href="/master-cabin" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/eNJnPZWeGRATLlPP.webp"
                  alt="ALFA NERO master cabin with panoramic views"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>
                Owner's Suite
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Full-beam master cabin with private terrace, twin marble bathrooms,
                walk-in wardrobe, and dedicated office. The suite opens onto a private
                terrace with its own outdoor dining area.
              </p>
            </Link>

            {/* Guest Cabins */}
            <Link href="/guest-accommodations" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src="/images/guest-vip-suite.webp"
                  alt="ALFA NERO VIP guest stateroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>
                Guest Staterooms
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Two VIP suites, one double, and two twin cabins, each individually
                designed by Alberto Pinto. A glass-enclosed elevator connects all
                guest levels for effortless movement throughout.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p
              className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Lifestyle
            </p>
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              Beyond Expectation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/deck-space" className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                <img
                  src="/images/alfresco-dining-deck.webp"
                  alt="ALFA NERO outdoor deck dining"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>
                Outdoor Living
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Multiple al fresco dining areas, sun decks, and the iconic infinity pool
                that converts to a certified helipad in under 90 seconds.
              </p>
            </Link>

            <Link href="/wellness" className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                <img
                  src="/images/Spa.webp"
                  alt="ALFA NERO spa and wellness centre"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>
                Wellness
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Full-beam gym with panoramic views, stone-clad sauna, treatment rooms,
                and a sea-level beach club with direct ocean access.
              </p>
            </Link>

            <Link href="/entertainment" className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                <img
                  src="/images/piano-room.webp"
                  alt="ALFA NERO main salon with Pleyel piano"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "'Cantata One', serif" }}>
                Entertainment
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Main salon with Pleyel grand piano, cinema system, retractable glass doors,
                and surround sound throughout the vessel.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 md:py-24 bg-[#0a0a0a] text-white">
        <div className="container max-w-4xl text-center">
          <p
            className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Recognition
          </p>
          <h2
            className="mb-12"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Seven International Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <p className="text-white/90 text-sm font-medium">Best Interior Design</p>
              <p className="text-white/40 text-xs">World Superyacht Awards 2008</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <p className="text-white/90 text-sm font-medium">Best Exterior Styling</p>
              <p className="text-white/40 text-xs">World Superyacht Awards 2008</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <p className="text-white/90 text-sm font-medium">Best Motor Yacht Over 75m</p>
              <p className="text-white/40 text-xs">ShowBoats International 2008</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <p className="text-white/90 text-sm font-medium">Most Innovative Custom Motoryacht</p>
              <p className="text-white/40 text-xs">World Yachts Trophies 2008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl text-center">
          <p
            className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Download
          </p>
          <h2
            className="text-foreground mb-6"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Take ALFA NERO With You
          </h2>
          <p className="text-foreground/60 mb-10 max-w-lg mx-auto leading-relaxed">
            Download the comprehensive PDF brochure with full specifications,
            photography, and deck plans for offline viewing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/broker"
              className="inline-flex items-center justify-center bg-red-600 text-white text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-red-700 transition-colors"
            >
              Request Information
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-foreground/30 text-foreground text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Links */}
      <section className="py-16 bg-background border-t border-foreground/10">
        <div className="container max-w-5xl">
          <h3
            className="text-center text-xs tracking-[0.3em] uppercase text-foreground/50 mb-10"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Continue Exploring
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/history"
              className="group block p-5 border border-foreground/10 hover:border-red-600/50 transition-all duration-300 text-center"
            >
              <h4
                className="text-sm mb-1 group-hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                History
              </h4>
              <p className="text-xs text-foreground/40">Provenance</p>
            </Link>
            <Link
              href="/technical"
              className="group block p-5 border border-foreground/10 hover:border-red-600/50 transition-all duration-300 text-center"
            >
              <h4
                className="text-sm mb-1 group-hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Technical
              </h4>
              <p className="text-xs text-foreground/40">Specifications</p>
            </Link>
            <Link
              href="/full-tour"
              className="group block p-5 border border-foreground/10 hover:border-red-600/50 transition-all duration-300 text-center"
            >
              <h4
                className="text-sm mb-1 group-hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Video Tour
              </h4>
              <p className="text-xs text-foreground/40">Experience</p>
            </Link>
            <Link
              href="/broker"
              className="group block p-5 border border-foreground/10 hover:border-red-600/50 transition-all duration-300 text-center"
            >
              <h4
                className="text-sm mb-1 group-hover:text-red-600 transition-colors"
                style={{ fontFamily: "'Cantata One', serif" }}
              >
                Acquisition
              </h4>
              <p className="text-xs text-foreground/40">Contact</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
