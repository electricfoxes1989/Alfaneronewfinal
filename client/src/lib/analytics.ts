/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * This module provides type-safe wrappers for GA4 event tracking.
 * Events are automatically sent to GA4 for analysis in the Analytics dashboard.
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      eventName: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event (e.g., 'button_click', 'page_view')
 * @param params - Additional parameters to send with the event
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track button clicks with standardized parameters
 * @param buttonName - Name/label of the button clicked
 * @param destination - Where the button leads (URL or section)
 */
export function trackButtonClick(buttonName: string, destination?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    destination: destination || 'unknown',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track navigation link clicks
 * @param linkText - Text of the link clicked
 * @param destination - URL or page the link leads to
 */
export function trackLinkClick(linkText: string, destination: string) {
  trackEvent('link_click', {
    link_text: linkText,
    destination: destination,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track card/section interactions
 * @param sectionName - Name of the section (e.g., 'Master Cabin', 'Wellness')
 * @param action - Type of interaction (e.g., 'explore', 'view_more')
 */
export function trackSectionInteraction(sectionName: string, action: string) {
  trackEvent('section_interaction', {
    section_name: sectionName,
    action: action,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track gallery image views
 * @param imageName - Name or description of the image
 * @param category - Category of the image (e.g., 'exterior', 'interior')
 */
export function trackImageView(imageName: string, category?: string) {
  trackEvent('image_view', {
    image_name: imageName,
    category: category || 'uncategorized',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track video plays
 * @param videoTitle - Title of the video
 * @param duration - Duration of the video in seconds (optional)
 */
export function trackVideoPlay(videoTitle: string, duration?: number) {
  trackEvent('video_play', {
    video_title: videoTitle,
    duration: duration,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track designer/builder link clicks
 * @param designerName - Name of the designer/builder (e.g., 'Oceanco', 'Alberto Pinto')
 */
export function trackDesignerClick(designerName: string) {
  trackEvent('designer_click', {
    designer_name: designerName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track specification views
 * @param specType - Type of specification viewed (e.g., 'technical', 'accommodations')
 */
export function trackSpecificationView(specType: string) {
  trackEvent('specification_view', {
    spec_type: specType,
    timestamp: new Date().toISOString(),
  });
}
