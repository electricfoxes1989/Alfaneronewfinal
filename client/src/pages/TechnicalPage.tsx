/**
 * Technical Specifications Page
 * The numbers behind ALFA NERO - comprehensive technical data.
 * Image sources: Oceanco
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function TechnicalPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Technical Specifications | ALFA NERO"
        description="Complete technical specifications for ALFA NERO: 82m length, 2,159 GT, twin MTU engines, 20 knot max speed, 5,500nm range, 12 guests in 6 staterooms."
      
        preloadImage="/images/oceanco-engineering-wireframe.webp"
      />

      {/* FAQ Schema Markup for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the length of ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO has a length overall (LOA) of 82 metres (267 feet), making her one of the most impressive superyachts built by Oceanco."
                }
              },
              {
                "@type": "Question",
                "name": "What is the beam and draft of ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO has a beam of 14.2 metres (46.6 feet) and a draft of 3.90 metres (12.8 feet), providing excellent stability and shallow-water access."
                }
              },
              {
                "@type": "Question",
                "name": "What engines power ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO is powered by twin MTU 16V 4000 M90 diesel engines, each producing 4,300 horsepower, delivering a maximum speed of 20 knots and a cruising speed of 16 knots."
                }
              },
              {
                "@type": "Question",
                "name": "What is the range of ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO has a transatlantic range of 5,500 nautical miles at 16 knots cruising speed, allowing for extended voyages without refuelling."
                }
              },
              {
                "@type": "Question",
                "name": "How many guests can ALFA NERO accommodate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO accommodates up to 12 guests in 6 luxurious staterooms, including a full-beam master suite, VIP cabin, and 4 guest cabins, all designed by Alberto Pinto."
                }
              },
              {
                "@type": "Question",
                "name": "How many crew members does ALFA NERO require?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO requires a professional crew of up to 28 members to ensure the highest level of service and safety for all guests aboard."
                }
              },
              {
                "@type": "Question",
                "name": "What is the gross tonnage of ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO has a gross tonnage of 2,159 GT, providing substantial interior volume for luxurious living spaces and amenities."
                }
              },
              {
                "@type": "Question",
                "name": "Who built ALFA NERO and when?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO was built by Oceanco in the Netherlands and delivered in 2007. She underwent a comprehensive refit in 2024 to maintain her exceptional condition."
                }
              },
              {
                "@type": "Question",
                "name": "Who designed the exterior and interior of ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO features exterior design by the renowned Nuvolari Lenard studio and interior design by the late Alberto Pinto, creating a harmonious blend of elegance and functionality."
                }
              },
              {
                "@type": "Question",
                "name": "What classification society certifies ALFA NERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ALFA NERO is classed by Lloyd's Register and complies with MCA (Maritime and Coastguard Agency) regulations for commercial yacht operations."
                }
              }
            ]
          })
        }}
      />

      <Navigation />
      
      {/* Video Hero with Overlay */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/dXzmjQSivUMmdSeO.mp4"
        imageSrc="/images/exterior-profile.webp"
        imageAlt="ALFA NERO Technical View"
        heightClass="h-[70vh]"
        overlayStyle="gradient"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Specifications</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            The Numbers Behind Alfa Nero
          </h1>
          <p className="text-xl text-white/80 font-light">Technical · Reference</p>
        </div>
      </VideoHero>

      {/* Specifications Content */}
      <section className="pb-24 pt-16">
        <div className="container max-w-4xl">
          <div className={`${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            
            {/* Technical Drawing */}
            <div className="mb-16">
              <img 
                src="/images/alfa-nero-technical-drawing.avif" 
                alt="ALFA NERO Technical Drawing - Side Profile"
                className="w-full h-auto"
              />
            </div>

            {/* Principal Dimensions */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Principal Dimensions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Length Overall</span>
                  <span className="font-light">82 metres / 269 feet</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Beam</span>
                  <span className="font-light">14.2 metres / 46.6 feet</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Draft</span>
                  <span className="font-light">3.90 metres / 12.8 feet</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Gross Tonnage</span>
                  <span className="font-light">2,159 GT</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10 md:col-span-2">
                  <span className="text-foreground/60">Living Space</span>
                  <span className="font-light">1,250 m² / 13,455 ft²</span>
                </div>
              </div>
            </div>

            {/* Build Details */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Build Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Builder</span>
                  <span className="font-light">Oceanco, Netherlands</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Year of Delivery</span>
                  <span className="font-light">2007</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Refit</span>
                  <span className="font-light">2024</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Project Code</span>
                  <span className="font-light">Y702</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Classification</span>
                  <span className="font-light">Lloyd's Register</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Flag</span>
                  <span className="font-light">Malta</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Hull Material</span>
                  <span className="font-light">Steel</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Superstructure</span>
                  <span className="font-light">Aluminium</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10 md:col-span-2">
                  <span className="text-foreground/60">Decks</span>
                  <span className="font-light">Teak</span>
                </div>
              </div>
            </div>

            {/* Propulsion and Performance */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Propulsion & Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Engines</span>
                  <span className="font-light">2 × MTU 16V 595 TE70</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Power</span>
                  <span className="font-light">4,680 hp per engine</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Maximum Speed</span>
                  <span className="font-light">20 knots</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Cruising Speed</span>
                  <span className="font-light">15–17 knots</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Range</span>
                  <span className="font-light">5,500 nm at 15 knots</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Fuel Capacity</span>
                  <span className="font-light">294,000 litres</span>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Accommodation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Guests</span>
                  <span className="font-light">12 in 6 staterooms (+ 1 staff suite)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Cabin Configuration</span>
                  <span className="font-light">1 Master, 2 VIP, 3 Double/Twin (+ 1 staff suite)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Crew</span>
                  <span className="font-light">Up to 28</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Guest Decks</span>
                  <span className="font-light">4</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10 md:col-span-2">
                  <span className="text-foreground/60">Elevator</span>
                  <span className="font-light">Glass-enclosed, serving all decks</span>
                </div>
              </div>
            </div>

            {/* Deck Plans */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Deck Plans</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                Original deck plans by Nuvolari Lenard showing the Y 702 M/Y layout across all four guest decks: Skylounge Deck, Upper Deck, Main Deck, and Lower Deck.
              </p>
              <ArticleImage
                src="/images/technical-deck-plans.webp"
                alt="ALFA NERO Y 702 M/Y Deck Plans by Nuvolari Lenard"
                caption="Y 702 M/Y deck plans by Nuvolari Lenard"
              />
            </div>

            {/* Design Team */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Design Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Naval Architecture</span>
                  <span className="font-light">Oceanco / Azure Naval Architects</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10">
                  <span className="text-foreground/60">Exterior Design</span>
                  <span className="font-light">Nuvolari Lenard</span>
                </div>
                <div className="flex justify-between py-3 border-b border-foreground/10 md:col-span-2">
                  <span className="text-foreground/60">Interior Design</span>
                  <span className="font-light">Alberto Pinto</span>
                </div>
              </div>
            </div>

            {/* Key Systems */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Key Systems</h2>
              <div className="bg-foreground/5 rounded-lg p-8">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Kaleidescape audio-visual system throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Full air conditioning with individual cabin controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Wi-Fi connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Cinema in upper salon with projector and surround sound</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Rolls Royce stabilisers at anchor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Bow and stern thrusters</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Control Room */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Engine Control Room</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                The engine control room serves as the nerve centre for ALFA NERO's propulsion and systems monitoring. Equipped with multiple display screens and comprehensive control panels, the engineering team can monitor all vessel systems in real-time, ensuring safe and efficient operation at all times.
              </p>
              <ArticleImage
                src="/images/AN24.webp"
                alt="ALFA NERO Engine Control Room"
                caption="Engine Control Room | Systems Monitoring Station"
              />
            </div>

            {/* Engine Room */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Engine Room</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                The engine room houses ALFA NERO's twin MTU 16V 4000 M90 diesel engines, delivering 7,200 horsepower for a maximum speed of 18.5 knots. The immaculate engineering space showcases the vessel's commitment to mechanical excellence, with comprehensive piping systems, generators, and auxiliary equipment maintained to the highest standards.
              </p>
              <ArticleImage
                src="/images/engine-room.webp"
                alt="ALFA NERO Engine Room"
                caption="Engine Room | Twin MTU 16V 4000 M90 Diesel Engines"
              />

            </div>

            {/* The Pool System */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">The Pool System</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                The signature spindle-driven pool system allows the 3.7-by-11.6-metre infinity pool to transform into a flush deck surface, serving as either a dance floor or emergency helipad. The pool floor can also be raised to a shallower depth for children. This engineering solution exemplifies ALFA NERO's approach: innovative features delivered through reliable, proven systems.
              </p>
            </div>

            {/* Tender and Toys */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Tender & Toys</h2>
              <div className="bg-foreground/5 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-foreground/50 uppercase tracking-wider mb-4">Tenders</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• 13.5m Vanquish Yachts chase tender</li>
                      <li>• Additional tenders (3 total)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm text-foreground/50 uppercase tracking-wider mb-4">Water Toys</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• 4 × Yamaha WaveRunners</li>
                      <li>• 2 × 3-seat Kawasaki Jet Skis</li>
                      <li>• 6 × Water skis</li>
                      <li>• Wakeboards</li>
                      <li>• Seabobs</li>
                      <li>• Kayaks</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-sm text-foreground/50 uppercase tracking-wider mb-4 mt-4">Additional Equipment</h3>
                    <ul className="space-y-2 text-foreground/80 grid grid-cols-2 gap-2">
                      <li>• Inflatable water toys</li>
                      <li>• Kneeboards</li>
                      <li>• Towable toys</li>
                      <li>• Full scuba diving equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Condition */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 pb-4 border-b border-border">Condition</h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                Following her 2024 refit, ALFA NERO is presented in strong technical and operational condition with documented service history. She maintains commercial capability and MCA compliance, equipped for both private ownership and charter use.
              </p>
            </div>

            {/* Hull Name */}
            <div className="mb-16">
              <ArticleImage
                src="/images/hull-name-valletta.webp"
                alt="ALFA NERO Hull Name - Valletta"
                caption="ALFA NERO · Valletta"
              />
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-start items-center">
              <Link href="/deck-space" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Deck Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
