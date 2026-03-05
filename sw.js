const CACHE_NAME = 'dta-v4';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './css/modules.css',
  './js/content.js',
  './js/quiz.js',
  './js/calculator.js',
  './js/app.js',
  './manifest.json',
  './icons/icon.svg'
];

// Install — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network-first for HTML, cache-first for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // HTML pages: try network first, fall back to cache
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Other assets: cache first, fall back to network (and update cache)
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
