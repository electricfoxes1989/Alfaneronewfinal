/**
 * LazyVideo Component
 * Lazy loads video content using Intersection Observer for improved page performance.
 * Video only starts loading when it enters the viewport.
 * 
 * IMPORTANT: Uses video poster attribute to prevent any flash or jump.
 * The poster displays immediately while video loads, ensuring seamless transition.
 */

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  posterAlt?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  rootMargin?: string;
  threshold?: number;
}

export default function LazyVideo({
  src,
  poster,
  posterAlt = "Video poster",
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  rootMargin = "200px", // Start loading 200px before entering viewport
  threshold = 0.1,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  // Handle video loading and autoplay
  useEffect(() => {
    if (!isVisible || !videoRef.current || videoFailed) return;

    const video = videoRef.current;

    const handleError = () => {
      setVideoFailed(true);
    };

    const attemptPlay = () => {
      if (autoPlay) {
        video.play().catch(() => {
          // Autoplay was prevented - video will show poster which is fine
        });
      }
    };

    const handleCanPlay = () => {
      attemptPlay();
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Try immediate play if already ready
    if (video.readyState >= 3) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [isVisible, autoPlay, videoFailed]);

  // If video failed, show static poster image with Ken Burns
  if (videoFailed && poster) {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: `url('${poster}')` }}
          role="img"
          aria-label={posterAlt}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative bg-black ${className}`}>
      {/* Video element - renders immediately with poster to prevent flash */}
      {isVisible ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={poster || undefined}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // Before intersection, show poster as static image (no loading spinner)
        poster && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${poster}')` }}
            role="img"
            aria-label={posterAlt}
          />
        )
      )}
    </div>
  );
}

/**
 * ArticleVideo Component
 * A styled lazy-loading video for use within article content.
 * Includes optional caption support.
 */
interface ArticleVideoProps extends LazyVideoProps {
  caption?: string;
  posterAlt?: string;
}

export function ArticleVideo({
  src,
  poster,
  caption,
  className = "",
  ...props
}: ArticleVideoProps) {
  return (
    <figure className="my-12">
      <div className={`relative aspect-video overflow-hidden ${className}`}>
        <LazyVideo
          src={src}
          poster={poster}
          className="absolute inset-0 w-full h-full"
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-foreground/60 mt-4 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
