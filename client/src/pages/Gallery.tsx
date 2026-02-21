/**
 * Gallery Page - Full image gallery with lightbox feature
 * Showcases all yacht photography with category filters and full-screen viewing
 */
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import LazyImage from "@/components/LazyImage";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: "exterior" | "interior" | "wellness" | "aerial" | "technical";
}

const galleryImages: GalleryImage[] = [
  // Exterior
  { src: "/images/exterior-profile.webp", alt: "Front Profile", category: "exterior" },
  { src: "/images/exterior-early-evening.webp", alt: "Stern Night View", category: "exterior" },
  { src: "/images/aft-deck-pool.webp", alt: "Aft Deck Pool", category: "exterior" },
  { src: "/images/Evening.webp", alt: "Evening Shot", category: "exterior" },
  { src: "/images/exterior-early-evening.webp", alt: "Early Evening", category: "exterior" },
  { src: "/images/aft.webp", alt: "Aft View", category: "exterior" },
  { src: "/images/Aft deck - side.webp", alt: "Aft Deck Side", category: "exterior" },
  { src: "/images/Heli.webp", alt: "Helipad", category: "exterior" },
  
  // Aerial
  { src: "/images/DJI_20250911101923_0042_D.webp", alt: "Aerial View", category: "aerial" },
  { src: "/images/DJI_20250911072413_0014_D.webp", alt: "Aerial Overhead", category: "aerial" },
  { src: "/images/DJI_20250911072413_0014_D.webp", alt: "Drone Shot", category: "aerial" },
  { src: "/images/DJI_20250911101923_0042_D.webp", alt: "Aerial Perspective", category: "aerial" },
  { src: "/images/A N 30.webp", alt: "From Above", category: "aerial" },
  { src: "/images/alfa-nero-aerial-ocean.webp", alt: "Aerial Detail", category: "aerial" },
  
  // Interior
  { src: "/images/formal-dining-room.webp", alt: "Dining Area", category: "interior" },
  { src: "/images/spiral-staircase.webp", alt: "Elevator Lobby", category: "interior" },
  { src: "/images/master-office.webp", alt: "Owner's Office", category: "interior" },
  { src: "/images/LOUNGE.webp", alt: "Main Lounge", category: "interior" },
  { src: "/images/private-dining.webp", alt: "Private Dining", category: "interior" },
  { src: "/images/main-master-cabin.webp", alt: "Master Cabin", category: "interior" },
  { src: "/images/guest-room.webp", alt: "Guest Room", category: "interior" },
  { src: "/images/vip-room.webp", alt: "Guest Accommodation", category: "interior" },
  { src: "/images/CREW Area.webp", alt: "Crew Area", category: "technical" },
  { src: "/images/guest-corridor-gallery.webp", alt: "Interior Detail", category: "interior" },
  { src: "/images/AA_0585-Enhanced-NR-Edit.webp", alt: "Interior Enhanced", category: "interior" },
  { src: "/images/AA_1885-Edit.webp", alt: "Interior View", category: "interior" },
  { src: "/images/AA_2178-Edit-3.webp", alt: "Interior Space", category: "interior" },
  { src: "/images/AA_2388-EditA.webp", alt: "Al Fresco Dining", category: "interior" },
  { src: "/images/AA_2575-Edit-2.webp", alt: "Sky Lounge", category: "interior" },
  { src: "/images/ALFA NERO N&J (Clean)_2072.webp", alt: "Interior Modern", category: "interior" },
  { src: "/images/main-salon-lounge.webp", alt: "Main Salon", category: "interior" },
  { src: "/images/sky-lounge.webp", alt: "Sky Lounge TV", category: "interior" },
  { src: "/images/private-dining.webp", alt: "Dining Room Panoramic", category: "interior" },
  { src: "/images/guest-room.webp", alt: "Guest Cabin Coral", category: "interior" },
  
  // Technical & Crew
  { src: "/images/engine-room.webp", alt: "Engine Room", category: "technical" },
  { src: "/images/engine-room-2.webp", alt: "Engine Room Detail", category: "technical" },
  { src: "/images/galley.webp", alt: "Galley", category: "technical" },
  { src: "/images/crew-pantry.webp", alt: "Crew Pantry", category: "technical" },
  { src: "/images/technical-deck-plans.webp", alt: "Technical Deck Plans", category: "technical" },
  
  // Wellness
  { src: "/images/aft-deck-pool.webp", alt: "Aft Deck Pool", category: "wellness" },
  { src: "/images/pool-deck-evening.webp", alt: "Infinity Pool Sunset", category: "wellness" },
  { src: "/images/sundeck-entertainment.webp", alt: "Sundeck Dining", category: "wellness" },
  { src: "/images/beach-club-sea-terrace.webp", alt: "Beach Club with Jetski", category: "wellness" },
  { src: "/images/aft-deck-terrace.webp", alt: "Aft Deck Terrace", category: "wellness" },
  { src: "/images/sundeck-gym-jacuzzi.webp", alt: "Jacuzzi", category: "wellness" },
  { src: "/images/Spa.webp", alt: "Spa", category: "wellness" },
  { src: "/images/Spa.webp", alt: "Sauna", category: "wellness" },
];

type Category = "all" | "exterior" | "interior" | "wellness" | "aerial" | "technical";

const IMAGES_PER_PAGE = 12;

export default function Gallery() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + IMAGES_PER_PAGE, filteredImages.length));
  };
  
  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    
    if (e.key === "Escape") {
      setLightboxOpen(false);
    } else if (e.key === "ArrowRight") {
      setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxOpen, filteredImages.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "exterior", label: "Exterior" },
    { key: "interior", label: "Interior" },
    { key: "wellness", label: "Wellness" },
    { key: "aerial", label: "Aerial" },
    { key: "technical", label: "Technical & Crew" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* BreadcrumbList Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://alfaneroyacht.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Gallery",
                "item": "https://alfaneroyacht.com/gallery"
              }
            ]
          })
        }}
      />

      <Navigation />

      <div className="container mt-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Gallery" }
        ]} />
      </div>

      {/* VideoObject Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "ALFA NERO - 82m Oceanco Superyacht Video Tour",
            "description": "Exclusive video presentation of ALFA NERO, an iconic 82-metre Oceanco superyacht featuring award-winning design by Nuvolari Lenard and interiors by Alberto Pinto. Built 2007, comprehensively refitted 2024.",
            "thumbnailUrl": "/images/exterior-profile.webp",
            "uploadDate": "2025-01-15",
            "contentUrl": "https://www.youtube.com/watch?v=eXXwZUQ4et0",
            "embedUrl": "https://www.youtube.com/embed/eXXwZUQ4et0",
            "duration": "PT3M45S",
            "publisher": {
              "@type": "Organization",
              "name": "ALFA NERO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://alfaneroyacht.com/favicon.ico"
              }
            }
          })
        }}
      />
      <Navigation />

      {/* Video Hero */}
      <VideoHero
        videoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/AxszHozEWwtxrMdP.mp4"
        imageSrc="/images/exterior-profile.webp"
      >
        <div className="container text-center max-w-4xl px-4">
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Photography</p>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-light leading-none mb-3 text-white"
            style={{ fontFamily: "'Cantata One', serif" }}
          >
            Gallery
          </h1>
          <p className="text-xl text-white/80 font-light">Professional photography showcasing ALFA NERO's design excellence</p>
        </div>
      </VideoHero>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 sticky top-20 lg:top-24 bg-background/95 backdrop-blur-md z-30">
        <div className="container">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 md:px-6 py-2 text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-foreground/60 hover:text-foreground border border-border/50 hover:border-foreground/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="text-xs text-foreground/40 ml-4 whitespace-nowrap">
              {filteredImages.length} images
            </span>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding" data-animate id="gallery">
        <div className={`container max-w-7xl ${visibleSections.has('gallery') ? 'fade-up visible' : 'fade-up'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {visibleImages.map((image, index) => (
              <div 
                key={`${image.src}-${index}`}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <LazyImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    size={32} 
                    strokeWidth={1}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-light">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="px-8 py-3 border border-foreground/30 text-foreground/70 hover:text-foreground hover:border-foreground/60 transition-all duration-300 text-sm uppercase tracking-[0.15em]"
              >
                Load More ({filteredImages.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-black/5" data-animate id="video">
        <div className={`container max-w-5xl ${visibleSections.has('video') ? 'fade-up visible' : 'fade-up'}`}>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: "'Cantata One', serif" }}
            >
              Video Tour
            </h3>
            <p className="text-foreground/60 font-light">Discover ALFA NERO through this exclusive video presentation</p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eXXwZUQ4et0?si=rXzilvO2rQQ7ZGnr"
              title="ALFA NERO Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" data-animate id="cta">
        <div className={`article-container text-center ${visibleSections.has('cta') ? 'fade-up visible' : 'fade-up'}`}>
          <h3 className="mb-6">Experience ALFA NERO</h3>
          <p className="text-lg text-foreground/60 mb-10 font-light">
            Contact your broker representative to arrange a private viewing of this extraordinary vessel.
          </p>
        </div>
      </section>



      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white/50 text-sm tracking-wider">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Main Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider text-center">
            <p>{filteredImages[currentImageIndex].alt}</p>
            <p className="text-white/40 text-xs mt-1 uppercase tracking-[0.2em]">
              {filteredImages[currentImageIndex].category}
            </p>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto pb-2 scrollbar-hide">
            {filteredImages.map((image, index) => (
              <button
                key={`thumb-${index}`}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                className={`flex-shrink-0 w-16 h-12 overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? "ring-2 ring-white opacity-100" 
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
