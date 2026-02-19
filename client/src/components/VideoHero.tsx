/**
 * VideoHero Component
 * Full-screen hero section with autoplay video background
 * Video loads immediately - fallback image only shows if video fails to load/play
 */
import { useState, useRef, useEffect } from "react";

interface VideoHeroProps {
  /** Path to the video file (MP4 recommended) */
  videoSrc?: string;
  /** Path to WebM version for better compression (optional) */
  webmSrc?: string;
  /** Fallback image when video unavailable (only shown on error) */
  imageSrc?: string;
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
}

export default function VideoHero({
  videoSrc,
  webmSrc,
  imageSrc,
  imageAlt = "Hero background",
  children,
  heightClass = "h-screen",
  kenBurnsEffect = true,
  overlayStyle = "gradient",
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Only show fallback image if video explicitly fails
  const showFallbackImage = !videoSrc || videoFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const handleError = () => {
      setVideoFailed(true);
    };

    // Handle play promise rejection (autoplay blocked)
    const attemptPlay = () => {
      video.play().catch(() => {
        // Autoplay failed - show fallback image
        setVideoFailed(true);
      });
    };

    // Try to play when video can start
    const handleCanPlay = () => {
      attemptPlay();
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Also try immediate play in case video is already ready
    if (video.readyState >= 3) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

  // Trigger content fade-in after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Overlay classes based on style
  const overlayClasses = {
    dark: "bg-black/50",
    light: "bg-white/30",
    gradient: "bg-gradient-to-b from-black/40 via-black/20 to-black/60",
    none: "",
  };

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-black`}>
      {/* Video Background - renders immediately, no waiting for load state */}
      {videoSrc && !videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image with Ken Burns Effect - ONLY shown if no video or video failed */}
      {imageSrc && showFallbackImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            kenBurnsEffect ? "ken-burns" : ""
          }`}
          style={{ backgroundImage: `url('${imageSrc}')` }}
          role="img"
          aria-label={imageAlt}
        />
      )}

      {/* Overlay */}
      {overlayStyle !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlayStyle]}`} />
      )}

      {/* Content with fade-in animation */}
      <div 
        className={`relative z-10 w-full text-center transition-all duration-1000 ease-out ${
          contentVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
