const CACHE_NAME = "anush-portfolio-v1";
const APP_SHELL = [
  "/index.html",
  "/project-details.html",
  "/offline.html",
  "/manifest.json",
  "/css/style.css",
  "/js/script.js",
  "/js/project-details.js",
  "/assets/profile.jpg",
  "/assets/Anush_MN_Resume.pdf",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
];
const CACHEABLE_DOCUMENTS = new Set(["/", "/index.html", "/project-details.html"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("anush-portfolio-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

function getDocumentCacheKey(url) {
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  return new URL(pathname, self.location.origin).href;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        const response = await fetch(request);
        if (
          response.ok
          && !url.search
          && CACHEABLE_DOCUMENTS.has(url.pathname)
          && response.type === "basic"
        ) {
          await cache.put(getDocumentCacheKey(url), response.clone());
        }
        return response;
      } catch {
        const cachedPage = await cache.match(getDocumentCacheKey(url));
        return cachedPage || cache.match(new URL("/offline.html", self.location.origin));
      }
    })());
    return;
  }

  if (!APP_SHELL.includes(url.pathname) || url.search) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) return cachedResponse;

    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
