self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('my-app').then(function(cache) {
        return cache.addAll([
          'allincluding/icons/apple-touch-icon.png',
          'allincluding/icons/favicon-32x32.png',
          'allincluding/icons/favicon-16x16.png',
          'allincluding/mystyle.css',
          'index.html',
          'allincluding/index.js'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });