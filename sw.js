// Service Worker para evitar que el navegador sirva versiones cacheadas.
// Siempre va a la red. Si la red falla, devuelve un 504 simple.

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names.map(function (name) {
            return caches.delete(name);
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url;
  try {
    url = new URL(req.url);
  } catch (err) {
    return;
  }

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req, { cache: "no-store" }).catch(function () {
      return new Response("", { status: 504, statusText: "Offline" });
    })
  );
});

self.addEventListener("message", function (event) {
  if (event.data === "skip-waiting") {
    self.skipWaiting();
  }
});
