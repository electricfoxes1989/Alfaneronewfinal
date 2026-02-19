import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as React from "react";
import { createPortal } from "react-dom";

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  children?: React.ReactNode;
}

interface LightboxContextType {
  openLightbox: (images: LightboxImage[], startIndex: number) => void;
  registerImage: (id: string, image: LightboxImage) => void;
  unregisterImage: (id: string) => void;
}

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

const LightboxContext = React.createContext<LightboxContextType | null>(null);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [images, setImages] = React.useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const registeredImages = React.useRef<Map<string, LightboxImage>>(new Map());

  const openLightbox = React.useCallback((imgs: LightboxImage[], startIndex: number) => {
    setImages(imgs);
    setCurrentIndex(startIndex);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = React.useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const registerImage = React.useCallback((id: string, image: LightboxImage) => {
    registeredImages.current.set(id, image);
  }, []);

  const unregisterImage = React.useCallback((id: string) => {
    registeredImages.current.delete(id);
  }, []);

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, goToPrevious, goToNext]);

  const currentImage = images[currentIndex];

  return (
    <LightboxContext.Provider value={{ openLightbox, registerImage, unregisterImage }}>
      {children}
      {isOpen && currentImage && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeLightbox}
          />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] animate-in zoom-in-95 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />

            {/* Caption and counter */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              {currentImage.caption && (
                <p className="text-white/80 text-sm md:text-base font-light tracking-wide mb-2">
                  {currentImage.caption}
                </p>
              )}
              {images.length > 1 && (
                <p className="text-white/50 text-xs tracking-widest uppercase">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = React.useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}

/**
 * ArticleImage - A clickable image component that opens in a lightbox
 * Use this component for all article/page images that should be expandable
 */
export function ArticleImage({
  src,
  alt,
  caption,
  className,
  children,
}: ImageLightboxProps) {
  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden">
        {children || (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto"
            loading="lazy"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-foreground/60 italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * ArticleImageGallery - A group of images that can be navigated in the lightbox
 */
interface ArticleImageGalleryProps {
  images: LightboxImage[];
  className?: string;
}

export function ArticleImageGallery({ images, className }: ArticleImageGalleryProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {images.map((image, index) => (
        <figure key={index} className="group">
          <div className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <figcaption className="mt-3 text-sm text-foreground/60 italic text-center">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default ArticleImage;
