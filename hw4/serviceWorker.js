const CACHE_NAME = "cache-1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./interaction.js",
  "./manifest.json",
  "./images/lightblue.jpg",
  "./images/lightgold.jpg",
  "./images/icon.png"
];

// Installs 
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Activate 
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetches
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (cachedResponse) {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request);
      })
  );
});