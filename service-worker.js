// src/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
        //   '/path/to/your/styles.css',
          // Add more files to cache as needed
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  