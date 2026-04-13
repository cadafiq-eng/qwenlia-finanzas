const CACHE_NAME = 'qwenlia-v1';
const ASSETS = [
  '/qwenlia/',
  '/qwenlia/index.html',
  '/qwenlia/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});