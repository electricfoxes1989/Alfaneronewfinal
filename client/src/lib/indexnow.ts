/**
 * IndexNow Protocol Implementation
 * 
 * Notifies search engines (Bing, Yandex, etc.) immediately when pages are updated.
 * This accelerates indexing compared to waiting for crawlers to discover changes.
 * 
 * Usage: Call submitToIndexNow() after content updates or on initial page load.
 */

const INDEXNOW_KEY = "alfanero2026indexnow"; // Static key for verification
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

/**
 * Submit URLs to IndexNow for immediate indexing
 * @param urls - Array of full URLs to submit (e.g., ['https://alfaneroyacht.com/', 'https://alfaneroyacht.com/gallery'])
 */
export async function submitToIndexNow(urls: string[]): Promise<void> {
  if (urls.length === 0) return;

  const host = new URL(urls[0]).host;
  const keyLocation = `https://${host}/${INDEXNOW_KEY}.txt`;

  const payload: IndexNowSubmission = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: urls,
  };

  // Submit to all IndexNow endpoints (Bing, Yandex, etc.)
  const submissions = INDEXNOW_ENDPOINTS.map(async (endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(`✓ IndexNow submitted to ${endpoint}`);
      } else {
        console.warn(`IndexNow submission failed to ${endpoint}:`, response.status);
      }
    } catch (error) {
      console.error(`IndexNow error for ${endpoint}:`, error);
    }
  });

  await Promise.allSettled(submissions);
}

/**
 * Submit all main yacht pages for indexing
 * Call this on initial site load or after major updates
 */
export async function submitAllPages(): Promise<void> {
  const baseUrl = window.location.origin;
  
  const pages = [
    "/",
    "/gallery",
    "/history",
    "/technical",
    "/broker",
    "/full-tour",
    "/exterior-designer",
    "/interior-designer",
    "/oceanco",
    "/master-cabin",
    "/guest-accommodations",
    "/wellness",
    "/deck-space",
    "/entertainment",
    "/dining",
    "/water-toys",
    "/crew-spaces",
  ];

  const urls = pages.map(page => `${baseUrl}${page}`);
  await submitToIndexNow(urls);
}

/**
 * Submit a single page for indexing
 * @param path - Page path (e.g., '/gallery')
 */
export async function submitPage(path: string): Promise<void> {
  const url = `${window.location.origin}${path}`;
  await submitToIndexNow([url]);
}
