import { Link } from "wouter";
import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BrochureDownloadModal = lazy(() => import("@/components/BrochureDownloadModal"));

export default function Footer() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Hidden listing info for search engines */}
      <div className="sr-only" aria-hidden="true">
        ALFA NERO, 82-metre Oceanco superyacht. Available for acquisition.
      </div>
      
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 
              className="text-xl mb-4 tracking-[0.08em] text-black hover:text-[#C41E3A] transition-colors cursor-pointer"
              style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif", fontWeight: 400 }}
            >
              ALFA NERO
            </h4>
            <p className="text-sm text-black/70 leading-relaxed font-light">
              82-metre Oceanco superyacht. Built 2007, comprehensively refitted 2024. Available for acquisition.
            </p>
          </div>
          
          {/* Navigate */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] mb-4 text-black/50 font-normal">Navigate</h5>
            <div className="space-y-2 text-sm">
              <Link href="/history" className="block text-black/80 hover:text-[#C41E3A] transition-colors font-light">The Yacht</Link>
              <Link href="/exterior-designer" className="block text-black/80 hover:text-[#C41E3A] transition-colors font-light">Design & Build</Link>
              <Link href="/gallery" className="block text-black/80 hover:text-[#C41E3A] transition-colors font-light">Gallery</Link>

            </div>
          </div>
          
          {/* Information */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] mb-4 text-black/50 font-normal">Information</h5>
            <p className="text-sm text-black/70 leading-relaxed font-light mb-4">
              For viewing arrangements and acquisition details, please refer to your yacht broker.
            </p>
            <Button
              onClick={() => setShowBrochureModal(true)}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
        

        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10">
          <div className="flex items-center justify-center">
            <p className="text-xs text-black/50">
              © {new Date().getFullYear()} ALFA NERO · All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Brochure Download Modal - lazy loaded */}
      {showBrochureModal && (
        <Suspense fallback={null}>
          <BrochureDownloadModal
            open={showBrochureModal}
            onOpenChange={setShowBrochureModal}
          />
        </Suspense>
      )}
    </footer>
  );
}
