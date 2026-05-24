const CACHE_NAME = 'optiwork-attendance-v20260522-eastern-epoch';
const ASSETS = ['./', './index.html', './style.css?v=20260522-eastern-epoch', './script.js?v=20260522-eastern-epoch', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => fetch(event.request).catch(() => cached)));
});
