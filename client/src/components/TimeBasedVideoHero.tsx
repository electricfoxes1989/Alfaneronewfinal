/**
 * TimeBasedVideoHero Component
 * Full-screen hero section with autoplay video background
 * Automatically selects video based on user's local time of day
 * Features subtle parallax scrolling effect for visual depth
 * 
 * IMPORTANT: Shows poster image while video loads for better UX.
 * Prevents blank/black screen on slow connections.
 * 
 * Time periods:
 * - Dawn: 5:00 - 8:59 (soft morning light)
 * - Day: 9:00 - 16:59 (bright daylight)
 * - Sunset: 17:00 - 20:59 (golden hour)
 * - Night: 21:00 - 4:59 (evening/night)
 */
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

interface VideoConfig {
  src: string;
  poster?: string; // Kept for API compatibility but not used
}

interface TimeBasedVideoHeroProps {
  /** Video sources for different times of day */
  videos: {
    dawn?: VideoConfig;
    day: VideoConfig;
    sunset?: VideoConfig;
    night?: VideoConfig;
  };
  /** Default fallback image shown while video loads */
  fallbackImage?: string;
  /** Responsive srcset for fallback image */
  fallbackImageSrcset?: string;
  /** Sizes attribute for responsive images */
  fallbackImageSizes?: string;
  /** Alt text for accessibility */
  imageAlt?: string;
  /** Content to overlay on the hero */
  children?: React.ReactNode;
  /** Custom height class (default: h-screen) */
  heightClass?: string;
  /** Enable Ken Burns effect on fallback image */
  kenBurnsEffect?: boolean;
  /** Gradient overlay style */
  overlayStyle?: "dark" | "light" | "gradient" | "none";
  /** Enable parallax scrolling effect */
  parallaxEffect?: boolean;
  /** Parallax intensity (0.1 = subtle, 0.5 = strong) */
  parallaxIntensity?: number;
}

type TimeOfDay = "dawn" | "day" | "sunset" | "night";

function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 9) return "dawn";
  if (hour >= 9 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "sunset";
  return "night";
}

function getTimeOfDayLabel(timeOfDay: TimeOfDay): string {
  const labels = {
    dawn: "Good Morning",
    day: "Good Day",
    sunset: "Good Evening",
    night: "Good Night"
  };
  return labels[timeOfDay];
}

export default function TimeBasedVideoHero({
  videos,
  fallbackImage,
  fallbackImageSrcset,
  fallbackImageSizes,
  imageAlt = "Hero background",
  children,
  heightClass = "h-screen",
  kenBurnsEffect = true,
  overlayStyle = "gradient",
  parallaxEffect = true,
  parallaxIntensity = 0.3,
}: TimeBasedVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(getTimeOfDay);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Get the appropriate video for current time
  const currentVideo = useMemo(() => {
    // Try to get the video for current time period, fall back to day video
    const video = videos[timeOfDay] || videos.day;
    return video;
  }, [videos, timeOfDay]);

  const videoSrc = currentVideo?.src;

  // Parallax scroll handler
  const handleScroll = useCallback(() => {
    if (!parallaxEffect || !sectionRef.current) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const scrollY = window.scrollY;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Only apply parallax when section is visible
    if (scrollY <= sectionHeight) {
      // Calculate parallax offset - background moves slower than scroll
      const offset = scrollY * parallaxIntensity;
      setParallaxOffset(offset);
    }
  }, [parallaxEffect, parallaxIntensity]);

  // Set up parallax scroll listener
  useEffect(() => {
    if (!parallaxEffect) return;

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallaxEffect, handleScroll]);

  // Update time of day every minute (in case user keeps page open)
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeOfDay = getTimeOfDay();
      if (newTimeOfDay !== timeOfDay) {
        setTimeOfDay(newTimeOfDay);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [timeOfDay]);

  // Video playback handling - attempt autoplay silently
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    // Handle play promise rejection silently (autoplay blocked)
    const attemptPlay = () => {
      video.play().catch(() => {
        // Autoplay failed - video stays on first frame, which is fine
        // No fallback image shown
      });
    };

    // Try to play when video can start
    const handleCanPlay = () => {
      attemptPlay();
    };

    video.addEventListener("canplay", handleCanPlay);

    // Also try immediate play in case video is already ready
    if (video.readyState >= 3) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc]);

  // Overlay classes based on style
  const overlayClasses = {
    dark: "bg-black/50",
    light: "bg-white/30",
    gradient: "bg-gradient-to-b from-black/40 via-black/20 to-black/60",
    none: "",
  };

  // Parallax transform style
  const parallaxStyle = parallaxEffect ? {
    transform: `translate3d(0, ${parallaxOffset}px, 0)`,
    willChange: 'transform',
  } : {};

  // Scale up background slightly to prevent gaps during parallax
  const backgroundScale = parallaxEffect ? 'scale-110' : '';

  return (
    <section 
      ref={sectionRef}
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* Parallax Container - wraps video background */}
      <div 
        className={`absolute inset-0 ${backgroundScale}`}
        style={parallaxStyle}
      >
        {/* Video Background with poster */}
        {videoSrc ? (
          <video
            ref={videoRef}
            key={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            poster={currentVideo?.poster || fallbackImage}
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : fallbackImage ? (
          <img
            src={fallbackImage}
            srcSet={fallbackImageSrcset}
            sizes={fallbackImageSizes}
            alt={imageAlt}
            className={`absolute inset-0 w-full h-full object-cover ${kenBurnsEffect ? 'ken-burns' : ''}`}
            loading="eager"
          />
        ) : null}
      </div>

      {/* Overlay - fixed position, not affected by parallax */}
      {overlayStyle !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlayStyle]}`} />
      )}

      {/* Content - fixed position, creates depth contrast with parallax background */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

// Export helper for use in other components
export { getTimeOfDay, getTimeOfDayLabel };
export type { TimeOfDay };
