/**
 * Water Toys & Garage Page
 * Adventure awaits - Vanquish VQ45 chase boat, jet skis, diving gear, and the garage that houses it all.
 */

import { Link } from "wouter";
import QuoteWithLogo from "@/components/QuoteWithLogo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import VideoHero from "@/components/VideoHero";
import { ArticleImage } from "@/components/ImageLightbox";
import LazyVideo from "@/components/LazyVideo";
import { useEffect, useState } from "react";

export default function WaterToysPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Water Toys & Garage | ALFA NERO"
        description="Explore ALFA NERO's comprehensive collection of water toys including the 13.5m Vanquish VQ45 chase boat, Yamaha WaveRunners, SeaBobs, diving equipment, and the state-of-the-art garage."
      
        preloadImage="/images/toys-tenders-deck.webp"
      />
      <Navigation />
      
      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/VwBxqGckAdXvEfsL.mp4"
        imageSrc="/images/toys-tenders-deck.jpg"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Onboard Adventure</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif" }}
          >
            Adventure Awaits
          </h1>
          <p className="text-xl text-white/80 font-light">Water Toys · Tenders · Garage</p>
        </div>
      </VideoHero>

      {/* Article Content */}
      <section className="pt-16 pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>
              ALFA NERO carries one of the most comprehensive collections of water toys in her class, stored within a purpose-built garage that transforms the stern into a gateway for adventure.</strong> Whether exploring hidden coves, diving pristine reefs, or simply enjoying the thrill of speed across open water, every aquatic pursuit is catered for.
            </p>


            <h2>The Vanquish VQ45 Chase Boat</h2>
            <p>
              The centrepiece of ALFA NERO's tender fleet is the striking 13.5-metre (44'3") <strong>Vanquish VQ45 chase boat</strong> – a vessel that commands attention wherever she goes. This high-performance tender combines Dutch craftsmanship with aggressive styling, featuring a deep-V hull that delivers exceptional handling in all sea conditions.
            </p>
            <p>
              The VQ45 comfortably accommodates all twelve guests for shore excursions, restaurant transfers, or extended coastal explorations. With her powerful engines, she can keep pace with the mother yacht during repositioning or venture independently for day trips to distant anchorages. The crew maintains her in immaculate condition, ready for deployment at a moment's notice.
            </p>

            <QuoteWithLogo
              quote="The Vanquish VQ45 is not merely transport – it's an extension of the yacht experience, allowing guests to explore coastlines inaccessible to the mother ship in considerable style."
              attribution="Captain's Log"
            />
          </article>

          {/* Tender Video */}
          <div className="my-16">
            <div className="aspect-video rounded-lg overflow-hidden">
              <LazyVideo
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/maGhhjIVkOwyzGfe.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-foreground/50 mt-4 italic">The Vanquish VQ45 chase boat in action</p>
          </div>

          {/* Tender Aerial Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/tender-aerial.webp"
              alt="ALFA NERO tender aerial view"
              caption="The 13.5m Vanquish VQ45 chase boat from above"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Water Sports</p>

            <h2>Additional Tenders</h2>
            <p>
              Beyond the Vanquish, ALFA NERO carries additional jet tenders for rapid guest transfers and crew operations. These versatile craft provide flexibility for simultaneous shore excursions, ensuring guests are never waiting when adventure calls.
            </p>

            <p className="section-label mb-4">Water Sports</p>


            <h2>Personal Watercraft</h2>
            <p>
              Four Yamaha WaveRunners provide the thrill of high-speed water exploration. These powerful personal watercraft offer guests the freedom to venture independently, racing across calm bays or following the coastline at their own pace. The crew provides full instruction for those new to jet skiing, ensuring safe and confident operation.
            </p>
            <p>
              For a more immersive underwater experience, ALFA NERO carries SeaBob underwater scooters – the distinctive craft visible on the tender deck. These remarkable devices allow guests to glide effortlessly beneath the surface, exploring marine life and underwater landscapes with minimal effort and maximum exhilaration.
            </p>
          </article>

          {/* Mid-article Image */}
          <div className="my-16">
            <ArticleImage
              src="/images/toys-tenders-deck.webp"
              alt="Water toys displayed on the tender deck"
              caption="The tender deck with SeaBobs, wakeboards, and water toys"
              className="aspect-[16/10]"
            />
          </div>

          <article className="article-prose">
            <p className="section-label mb-4">Water Sports</p>

            <h2>Watersports Equipment</h2>
            <p>
              The watersports inventory extends well beyond motorised craft. Wakeboards and six sets of waterskis cater to those who prefer being towed behind the tender, with the crew experienced in providing the perfect speed and line for all ability levels. Jetboards offer an electrifying alternative for experienced riders seeking the latest in water sports technology.
            </p>
            <p>
              Inflatable towables including banana boats and donuts offer family-friendly fun, while an extensive collection of inflatable water toys – including floating islands, basketball nets, floating coolers, and children's pools – transforms any anchorage into a private water park. Stand-up paddleboards and kayaks provide quieter alternatives for exploring at a gentler pace.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>Diving & Swimming</h2>
            <p>
              For those drawn to the underwater world, comprehensive snorkelling equipment is available for all guests, with masks, fins, and wetsuits in various sizes. The yacht carries full scuba diving equipment for certified divers, with the crew able to arrange professional dive guides at most destinations.
            </p>
            <p>
              A unique feature is the <strong>jellyfish-protected sea pool</strong> – a netted swimming area that can be deployed from the stern, allowing guests to swim safely in open water without concern for marine life. This thoughtful addition ensures that swimming remains an option even in waters where jellyfish are present.
            </p>

            <p className="section-label mb-4">Overview</p>


            <h2>The Garage</h2>
            <p>
              All of this equipment is housed within ALFA NERO's purpose-built stern garage, a space engineered for both storage efficiency and rapid deployment. The stern platform lowers to water level, creating a seamless launch and recovery system for the tenders and all water toys.
            </p>
            <p>
              The garage connects directly to the beach club, meaning guests can move from relaxation to adventure in moments. When not in use, the platform raises to create additional deck space, while the garage doors close to maintain the yacht's sleek profile.
            </p>

            <QuoteWithLogo
              quote="The garage was designed not as storage but as a gateway – the threshold between the comfort of the yacht and the adventure of the sea."
              attribution="Nuvolari Lenard Design Notes"
              logo="/images/logo-nuvolari-lenard.webp"
              logoAlt="Nuvolari Lenard"
            />
          </article>

          {/* Garage Video */}
          <div className="my-16">
            <div className="aspect-video rounded-lg overflow-hidden">
              <LazyVideo
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BnpouuiZGepNkZhc.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-foreground/50 mt-4 italic">The stern garage and tender deployment system</p>
          </div>

          <article className="article-prose">
            <h2>Fishing & Beach Setups</h2>
            <p>
              For guests interested in fishing, ALFA NERO carries quality tackle suitable for both casual line fishing and more serious sport fishing expeditions. The crew can arrange specialised fishing charters at destinations renowned for game fishing, or simply set up for a relaxed afternoon of fishing from the swim platform.
            </p>
            <p>
              Beach setups represent another dimension of the water toys programme. The crew can arrange complete shore installations including gazebos, sun loungers, tables, and even barbecue equipment, transforming a secluded beach into a private extension of the yacht for the day.
            </p>

            {/* Equipment Summary */}
            <div className="bg-foreground/5 rounded-lg p-8 my-12">
              <h3 className="text-lg font-medium mb-6">Water Toys Inventory</h3>
              <div className="grid grid-cols-2 gap-6 text-sm text-foreground/70">
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Chase Boat</p>
                  <p>13.5m Vanquish VQ45</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Additional Tenders</p>
                  <p>Jet tenders for transfers</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Personal Watercraft</p>
                  <p>4× Yamaha WaveRunners</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Underwater Scooters</p>
                  <p>SeaBobs</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Tow Sports</p>
                  <p>Wakeboards, 6× waterskis, jetboards</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Inflatables</p>
                  <p>Towables, islands, basketball nets</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Paddle Sports</p>
                  <p>SUPs, kayaks</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Diving</p>
                  <p>Full snorkelling & scuba gear</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Swimming</p>
                  <p>Jellyfish-protected sea pool</p>
                </div>
                <div>
                  <p className="text-foreground/50 mb-2 font-medium">Beach Equipment</p>
                  <p>Full shore setup capability</p>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/wellness" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Wellness
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
