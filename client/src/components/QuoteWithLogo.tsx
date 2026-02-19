/**
 * QuoteWithLogo - A reusable component for displaying quotes with a red line on the left
 * Used across the ALFA NERO website for editorial-style quotes
 */

interface QuoteWithLogoProps {
  quote: string;
  attribution: string;
  attributionTitle?: string;
  logo?: string;
  logoAlt?: string;
  className?: string;
}

export default function QuoteWithLogo({
  quote,
  attribution,
  attributionTitle,
  className = "",
}: QuoteWithLogoProps) {
  return (
    <div className={`my-12 ${className}`}>
      {/* Quote content with red line on left */}
      <blockquote className="border-l-2 border-red-600 pl-6">
        <p className="text-xl italic text-foreground font-semibold leading-relaxed">
          "{quote}"
        </p>
        <footer className="mt-4 not-italic">
          <span className="text-sm text-red-600 font-medium">{attribution}</span>
          {attributionTitle && (
            <span className="text-sm text-foreground/60 block">{attributionTitle}</span>
          )}
        </footer>
      </blockquote>
    </div>
  );
}
