/**
 * About Broker Page
 * ALFA NERO acquisition enquiries
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArticleImage } from "@/components/ImageLightbox";
import { useEffect, useState } from "react";

export default function BrokerPage() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Acquisition | ALFA NERO"
        description="ALFA NERO is available for acquisition. Contact your broker representative for viewing arrangements and further information."
      
        preloadImage="/images/alfa-nero-stern-aerial.webp"
      />
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container max-w-4xl">
          <div className={`${visible ? 'fade-up visible' : 'fade-up'}`}>
            <p className="text-subtle mb-4">Acquisition</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Available for Acquisition
            </h1>
            <p className="text-xl text-foreground/70 font-light">Contact your broker representative for more information</p>
            <div className="flex items-center gap-4 text-sm text-foreground/60 mt-6">
              <span>82 Metres</span>
              <span className="w-1 h-1 rounded-full bg-foreground/40"></span>
              <span>Oceanco</span>
              <span className="w-1 h-1 rounded-full bg-foreground/40"></span>
              <span>Available for Acquisition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-6xl">
          <div className={`${visible ? 'scale-reveal visible' : 'scale-reveal'}`} style={{ transitionDelay: '0.2s' }}>
            <ArticleImage
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp"
              alt="ALFA NERO Profile"
              caption="ALFA NERO — 82m Oceanco superyacht, available for acquisition"
              className="aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="article-container">
          <article className={`article-prose ${visible ? 'fade-up visible' : 'fade-up'}`} style={{ transitionDelay: '0.3s' }}>
            <p className="article-lead">
              <strong>
              The acquisition of a superyacht of ALFA NERO's calibre requires more than transactional expertise — it demands an understanding of both the vessel's significance and the expectations of discerning clients.</strong>
            </p>

            <p className="section-label mb-4">Details</p>


            <h2>A Vessel of Distinction</h2>
            <p>
              ALFA NERO represents a rare opportunity to acquire one of the most recognised superyachts in the world. Built by Oceanco in 2007 and comprehensively refitted in 2024, she combines the design vision of Nuvolari Lenard with the interior artistry of Alberto Pinto — a collaboration that produced a vessel of enduring significance.
            </p>

            <p>
              At 82 metres, ALFA NERO accommodates 12 guests across 6 staterooms (plus a staff suite), supported by a crew of 28. Her pioneering infinity pool, seven international design awards, and distinctive black hull have made her an icon of modern superyacht design.
            </p>

            <p className="section-label mb-4">Acquisition</p>


            <h2>The Acquisition Process</h2>
            <p>
              The yacht is presented in operational condition, with full crew available to demonstrate her capabilities. Viewing appointments can be arranged at various Mediterranean locations, subject to the vessel's schedule.
            </p>

            <p>
              The acquisition process encompasses all aspects of the transaction, including arranging viewings, providing comprehensive documentation, facilitating surveys, and managing negotiations with the confidentiality that transactions of this nature require.
            </p>

            <p className="section-label mb-4">Privacy & Access</p>


            <h2>Services</h2>
            <p>
              Beyond the immediate transaction, prospective owners may wish to consider:
            </p>

            <ul className="text-lg leading-relaxed text-foreground/80 mb-6 list-none pl-0">
              <li className="mb-3">• Flag state registration and compliance</li>
              <li className="mb-3">• Crew recruitment and management</li>
              <li className="mb-3">• Operational budgeting and cost analysis</li>
              <li className="mb-3">• Refit planning and project management</li>
              <li className="mb-3">• Charter management opportunities</li>
              <li className="mb-3">• Insurance and legal considerations</li>
            </ul>

            <p>
              This comprehensive approach ensures that new owners are fully prepared for the responsibilities and pleasures of ALFA NERO ownership.
            </p>

            <p className="section-label mb-4">Confidentiality</p>


            <h2>Confidentiality</h2>
            <p>
              All enquiries are handled with complete discretion. Financial discussions, ownership structures, and transaction details remain strictly confidential. Non-disclosure agreements are available upon request for serious buyers requiring additional assurance.
            </p>

            <p>
              Whether you are an experienced yacht owner seeking to upgrade, a first-time buyer entering the superyacht market, or a representative acting on behalf of a principal, please contact your broker representative for more information.
            </p>
          </article>



          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-start items-center">
              <Link href="/technical" className="link-elegant text-foreground hover:text-red-600 transition-colors duration-300 text-sm uppercase tracking-[0.15em]">
                ← Technical Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
