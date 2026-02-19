import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop component - scrolls to top of page on route change
 * This fixes the issue where pages load from the bottom when navigating
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
