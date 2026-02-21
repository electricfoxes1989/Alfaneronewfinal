/**
 * Crew Spaces Page
 * The operational heart of ALFA NERO - crew quarters and service areas.
 * Image sources: Oceanco, YachtCharterFleet
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArticleImage } from "@/components/ImageLightbox";
import LazyVideo from "@/components/LazyVideo";
import VideoHero from "@/components/VideoHero";
import { useEffect, useState } from "react";

export default function CrewSpacesPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Crew Spaces | ALFA NERO"
        description="ALFA NERO accommodates up to 28 crew members in purpose-designed quarters that reflect the yacht's commitment to operational excellence and crew welfare."
      
        preloadImage="/images/crew-mess.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/MGBvISWajYqnFsaI.mp4"
        imageSrc="/images/CREW Area.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Operations</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Crew Spaces
          </h1>
          <p className="text-xl text-white/80 font-light">The Operational Heart · 28 Crew</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>
              Behind every seamless guest experience onboard ALFA NERO lies a meticulously organised crew operation.</strong> The yacht accommodates up to 28 crew members in purpose-designed quarters that reflect the vessel's commitment to operational excellence and crew welfare.
            </p>

            <p className="section-label mb-4">Accommodations</p>


            <h2>Captain's Cabin</h2>
            <p>
              The Captain's cabin is positioned on the bridge deck, providing immediate access to the wheelhouse and command centre. This generous suite includes a private bathroom, office space, and comfortable sleeping quarters, recognising that the captain's role demands both proximity to operations and adequate rest.
            </p>

            <p>
              The cabin's location allows the captain to respond instantly to any situation while maintaining the privacy necessary for effective command. Modern communication systems connect the cabin directly to all operational areas of the yacht.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>Officer Quarters</h2>
            <p>
              Senior officers, including the Chief Engineer, First Officer, and Chief Stewardess, occupy individual cabins with ensuite facilities. These quarters are designed to provide the comfort and privacy appropriate to their responsibilities, with dedicated workspace for administrative duties.
            </p>

            <p>
              The engineering team's quarters are strategically positioned near the engine room, enabling rapid response to technical requirements while minimising transit through guest areas.
            </p>

            <QuoteWithLogo
              quote="A yacht is only as good as her crew. ALFA NERO's crew spaces reflect the understanding that exceptional service requires exceptional working conditions."
              attribution="Superyacht Operations Manual"
            />

            <p className="section-label mb-4">Crew Facilities</p>


            <h2>Crew Mess & Galley</h2>
            <p>
              The crew mess serves as the social heart of the crew quarters, a comfortable dining and relaxation space where off-duty crew can unwind. The area is equipped with entertainment systems, comfortable seating, and a dedicated pantry for crew meals.
            </p>

            <p>
              The crew galley operates independently of the main guest galley, allowing the chef to prepare crew meals without interrupting guest service. This separation ensures both areas can function at peak efficiency during busy charter periods.
            </p>

            <p className="section-label mb-4">Crew Facilities</p>


            <h2>The Main Galley</h2>
            <p>
              ALFA NERO's main galley is a professional kitchen capable of producing restaurant-quality cuisine for up to 12 guests. Equipped with commercial-grade appliances, extensive cold storage, and dedicated preparation areas, the galley supports extended voyages without resupply.
            </p>

            <p>
              The layout facilitates smooth service flow to all dining areas, from the formal dining room to the sundeck barbecue station. A dedicated wine cellar and temperature-controlled storage ensure proper preservation of provisions.
            </p>
          </article>

          {/* Crew Pantry Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/crew-pantry.webp"
              alt="Crew pantry with espresso machine and modern appliances"
              caption="The crew pantry with professional espresso machine"
              className="aspect-[16/10]"
            />
          </div>

          {/* Galley Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/galley.webp"
              alt="ALFA NERO Professional Galley"
              caption="The professional galley equipped with commercial-grade appliances"
              className="aspect-[16/10]"
            />
          </div>

          {/* Galley Video */}
          <div className="my-16">
            <div className="aspect-video rounded-lg overflow-hidden">
              <LazyVideo
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/WRRwpukoLpheApQD.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-foreground/50 mt-4 italic">The professional galley in operation</p>
          </div>

          {/* Mid-article Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/formal-dining-room.webp"
              alt="ALFA NERO Dining Room"
              caption="The formal dining room, served by the professional galley"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Accommodations</p>

            <h2>Crew Cabins</h2>
            <p>
              Standard crew cabins are configured as twin-berth rooms with shared bathroom facilities. Each cabin includes personal storage, reading lights, and climate control, providing the privacy and comfort necessary for crew working rotating shifts.
            </p>

            <p>
              The 2024 refit included updates to crew accommodation, with refreshed soft furnishings, improved ventilation, and modernised bathroom facilities throughout the crew areas.
            </p>

            <p className="section-label mb-4">Privacy & Access</p>


            <h2>Laundry & Service Areas</h2>
            <p>
              Industrial laundry facilities handle the considerable linen requirements of a yacht this size, from guest bedding and towels to crew uniforms and table linens. The laundry operates around the clock during charter operations, with commercial washers, dryers, and pressing equipment.
            </p>

            <p>
              Additional service areas include dedicated storage for cleaning supplies, a flower preparation room, and staging areas for service to guest spaces. This infrastructure enables the seamless, invisible service that distinguishes a yacht of ALFA NERO's calibre.
            </p>

            {/* Crew Summary */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-4">Crew Accommodation Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-1">Total Crew</p>
                  <p>Up to 28</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Captain's Cabin</p>
                  <p>Bridge deck, ensuite</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Officer Cabins</p>
                  <p>Individual with ensuite</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Crew Cabins</p>
                  <p>Twin-berth configuration</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Crew Mess</p>
                  <p>Dedicated dining & lounge</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-1">Galley</p>
                  <p>Commercial-grade kitchen</p>
                </div>
              </div>
            </div>
          </article>



          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/deck-space" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Deck Space
              </Link>
              <Link href="/technical" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                Next: Technical →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
