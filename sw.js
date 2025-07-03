self.addEventListener("install", e => {
  console.log("Service Worker installed");
  e.waitUntil(
    caches.open("classic-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./main.js",
        "./assets/logo.png"
        // Add more assets here
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
