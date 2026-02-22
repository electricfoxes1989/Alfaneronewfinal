import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Ship, 
  Bed, 
  Paintbrush,
  Image,
  Mail
} from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black text-white shadow-lg' 
          : 'bg-black/95 text-white'
      }`}
    >
      <div className="container flex items-center justify-between h-20 lg:h-24">
        <Link 
          href="/" 
          className="text-xl tracking-[0.08em] transition-colors duration-300 font-cantata hover:text-white/80"
          style={{ fontFamily: "'Cantata One', Georgia, 'Times New Roman', serif", fontWeight: 400 }}
        >
          ALFA NERO
        </Link>
        
        {/* Desktop Navigation */}
        <div 
          className="hidden lg:flex items-center gap-10 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: 400 }}
          ref={dropdownRef}
        >
          {/* Overview Dropdown - Consolidates Living Spaces + Accommodations */}
          <div className="relative">
            <button 
              className="transition-colors duration-300 flex items-center gap-1 hover:text-white/80"
              onClick={() => toggleDropdown('overview')}
            >
              Overview
              <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'overview' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'overview' && (
              <div className="absolute top-full left-0 mt-4 bg-white border border-black/10 rounded-sm py-3 min-w-[220px] shadow-lg">
                <Link href="/technical" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Technical Specifications
                </Link>
                <Link href="/deck-space" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Outdoor Living
                </Link>
                <div className="border-t border-black/10 my-2"></div>
                <p className="px-5 py-1 text-xs uppercase tracking-wider text-black/40">Accommodations</p>
                <Link href="/master-cabin" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Master Cabin
                </Link>
                <Link href="/guest-accommodations" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Guest Accommodations
                </Link>
                <Link href="/crew-spaces" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Crew Spaces
                </Link>
                <div className="border-t border-black/10 my-2"></div>
                <p className="px-5 py-1 text-xs uppercase tracking-wider text-black/40">Living Spaces</p>
                <Link href="/entertainment" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Entertainment Areas
                </Link>
                <Link href="/dining" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Dining
                </Link>
                <Link href="/wellness" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Wellness Areas
                </Link>
                <Link href="/water-toys" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Water Toys & Garage
                </Link>
              </div>
            )}
          </div>

          {/* Design & Build Dropdown - Now includes History */}
          <div className="relative">
            <button 
              className="transition-colors duration-300 flex items-center gap-1 hover:text-white/80"
              onClick={() => toggleDropdown('design')}
            >
              Design & Build
              <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'design' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'design' && (
              <div className="absolute top-full left-0 mt-4 bg-white border border-black/10 rounded-sm py-3 min-w-[220px] shadow-lg">
                <Link href="/history" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  History & Provenance
                </Link>
                <div className="border-t border-black/10 my-2"></div>
                <Link href="/exterior" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Nuvolari Lenard (Exterior)
                </Link>
                <Link href="/interior" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Alberto Pinto (Interior)
                </Link>
                <Link href="/design/oceanco" className="block px-5 py-2 hover:text-[#C41E3A] transition-colors normal-case tracking-normal text-sm text-black">
                  Oceanco (Builder)
                </Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className="text-white transition-colors duration-300 hover:text-white/80 normal-case">
            Gallery
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:text-white/80 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Navigation - Full screen overlay with WHITE background */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '80px', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="container py-8 flex flex-col gap-8 text-black pb-32">
          
          {/* Overview Section - Collapsible (consolidates Living Spaces + Accommodations) */}
          <div>
            <button 
              className="flex items-center gap-3 w-full text-left"
              onClick={() => toggleMobileAccordion('overview')}
            >
              <Ship size={16} className="text-[#C41E3A]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#C41E3A] flex-1">Overview</p>
              <ChevronDown 
                size={16} 
                className={`text-[#C41E3A] transition-transform duration-300 ${mobileAccordion === 'overview' ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className="w-8 h-[1px] bg-[#C41E3A] mt-2 mb-4 ml-7"></div>
            <div 
              className={`flex flex-col gap-3 pl-7 overflow-hidden transition-all duration-300 ${
                mobileAccordion === 'overview' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link 
                href="/technical" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Technical Specifications
              </Link>
              <Link 
                href="/deck-space" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Outdoor Living
              </Link>
              
              <p className="text-xs uppercase tracking-wider text-black/40 mt-2">Accommodations</p>
              <Link 
                href="/master-cabin" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Master Cabin
              </Link>
              <Link 
                href="/guest-accommodations" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Guest Accommodations
              </Link>
              <Link 
                href="/crew-spaces" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Crew Spaces
              </Link>
              
              <p className="text-xs uppercase tracking-wider text-black/40 mt-2">Living Spaces</p>
              <Link 
                href="/entertainment" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Entertainment Areas
              </Link>
              <Link 
                href="/dining" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Dining
              </Link>
              <Link 
                href="/wellness" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Wellness & Spa
              </Link>
              <Link 
                href="/water-toys" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Water Toys & Garage
              </Link>
            </div>
          </div>

          {/* Design & Build Section - Collapsible (now includes History) */}
          <div>
            <button 
              className="flex items-center gap-3 w-full text-left"
              onClick={() => toggleMobileAccordion('design')}
            >
              <Paintbrush size={16} className="text-[#C41E3A]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#C41E3A] flex-1">Design & Build</p>
              <ChevronDown 
                size={16} 
                className={`text-[#C41E3A] transition-transform duration-300 ${mobileAccordion === 'design' ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className="w-8 h-[1px] bg-[#C41E3A] mt-2 mb-4 ml-7"></div>
            <div 
              className={`flex flex-col gap-3 pl-7 overflow-hidden transition-all duration-300 ${
                mobileAccordion === 'design' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Link 
                href="/history" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                History & Provenance
              </Link>
              <Link 
                href="/exterior" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Nuvolari Lenard (Exterior)
              </Link>
              <Link 
                href="/interior" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Alberto Pinto (Interior)
              </Link>
              <Link 
                href="/design/oceanco" 
                className="text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Oceanco (Builder)
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-black/10">
            <div className="flex flex-col gap-4">
              <Link 
                href="/gallery" 
                className="flex items-center gap-3 text-lg hover:text-[#C41E3A] transition-colors font-light text-black" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image size={16} className="text-[#C41E3A]" />
                gallery
              </Link>

            </div>
          </div>


        </div>
      </div>
    </nav>
  );
}
