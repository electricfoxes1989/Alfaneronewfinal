import { useEffect, useRef } from "react";

/**
 * Custom hook that adds a fade-in animation to elements as they scroll into view.
 * Uses IntersectionObserver for performance. Respects prefers-reduced-motion.
 * 
 * @param options - IntersectionObserver options
 * @returns ref to attach to the container element
 */
export function useFadeIn(options?: {
  threshold?: number;
  rootMargin?: string;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Make everything visible immediately
      container.querySelectorAll(".fade-in-element").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    const selector = options?.selector ?? ".fade-in-element";
    const elements = container.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.selector]);

  return ref;
}

/**
 * Utility hook that auto-applies fade-in to all <p>, <h2>, <h3>, <blockquote>,
 * and .article-prose children within a container.
 */
export function useArticleFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Select prose elements
    const elements = container.querySelectorAll(
      ".article-prose p, .article-prose h2, .article-prose h3, .article-prose blockquote, .article-prose ul, .article-prose ol"
    );

    elements.forEach((el, index) => {
      el.classList.add("fade-in-element");
      // Stagger the delay slightly for each element
      (el as HTMLElement).style.transitionDelay = `${index * 80}ms`;

      if (prefersReducedMotion) {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }
    });

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
