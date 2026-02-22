/**
 * LuxurySlideshow Component
 * An elegant, designed slideshow/carousel for luxury yacht imagery
 * Features smooth transitions, navigation dots, and optional captions
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
}

interface LuxurySlideshowProps {
  slides: Slide[];
  /** Auto-advance interval in milliseconds (0 to disable) */
  autoPlayInterval?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show navigation dots */
  showDots?: boolean;
  /** Show captions */
  showCaptions?: boolean;
  /** Aspect ratio class */
  aspectRatio?: string;
  /** Custom height class */
  heightClass?: string;
  /** Enable Ken Burns effect on images */
  kenBurnsEffect?: boolean;
  /** Transition duration in milliseconds */
  transitionDuration?: number;
}

export default function LuxurySlideshow({
  slides,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  showCaptions = true,
  aspectRatio = "aspect-[16/9]",
  heightClass,
  kenBurnsEffect = false,
  transitionDuration = 700,
}: LuxurySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, transitionDuration]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentIndex, slides.length, goToSlide]);

  const goToPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentIndex, slides.length, goToSlide]);

  // Auto-advance
  useEffect(() => {
    if (autoPlayInterval <= 0 || isPaused || slides.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, isPaused, goToNext, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  if (slides.length === 0) return null;

  return (
    <div 
      className={`relative overflow-hidden group ${heightClass || aspectRatio}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover ${
                kenBurnsEffect && index === currentIndex ? "animate-ken-burns" : ""
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay for Captions */}
      {showCaptions && slides[currentIndex]?.caption && (
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
      )}

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Caption */}
      {showCaptions && slides[currentIndex]?.caption && (
        <div className="absolute bottom-8 left-8 right-8 z-30 text-white">
          <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-2">
            {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
          <h3 className="text-xl md:text-2xl font-light mb-1" style={{ fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            {slides[currentIndex].caption}
          </h3>
          {slides[currentIndex].subcaption && (
            <p className="text-sm text-white/70 font-light">
              {slides[currentIndex].subcaption}
            </p>
          )}
        </div>
      )}

      {/* Navigation Dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold w-6"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar (optional - appears on hover) */}
      {autoPlayInterval > 0 && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div 
            className="h-full bg-gold transition-all ease-linear"
            style={{
              width: isPaused ? `${((currentIndex + 1) / slides.length) * 100}%` : "0%",
              animation: isPaused ? "none" : `progress ${autoPlayInterval}ms linear infinite`,
            }}
          />
        </div>
      )}

      {/* Frame Border - Luxury Touch */}
      <div className="absolute inset-0 border border-white/10 pointer-events-none z-40" />
    </div>
  );
}

// Compact variant for smaller spaces
export function CompactSlideshow({
  slides,
}: {
  slides: Slide[];
}) {
  return (
    <LuxurySlideshow
      slides={slides}
      showArrows={false}
      showCaptions={false}
      showDots={true}
      autoPlayInterval={4000}
      aspectRatio="aspect-[4/3]"
    />
  );
}
