const CACHE_NAME = 'devtools-conglomerate-v1';
const STATIC_CACHE = 'devtools-static-v1';
const DYNAMIC_CACHE = 'devtools-dynamic-v1';
// Files to cache immediately
const STATIC_ASSETS = [
    '/',
    '/dashboard.html',
    '/index.html',
    '/all-apis.html',
    '/docs.html',
    '/community.html',
    '/blog.html',
    '/about.html',
    '/legal.html',
    '/manifest.json',
    'https://cdn.tailwindcss.com',
    '/assets/DevTools Conglomerate Tech Logo 1.png',
    '/assets/DevTools Conglomerate Tech Logo 3.png',
    '/assets/Innovative Tech Logo with Geometric Abstract Shapes.png',
    '/assets/Modern Tech Logo with Deep Blue and Violet Colors.png',
    '/assets/Sleek Tech Logo with Circuit-Inspired Design.png'
];
// Install event - cache static assets
self.addEventListener('install', (event)=>{
    console.log('Service Worker: Installing...');
    event.waitUntil(caches.open(STATIC_CACHE).then((cache)=>{
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
    }).catch((error)=>{
        console.error('Service Worker: Failed to cache static assets', error);
    }));
    self.skipWaiting();
});
// Activate event - clean up old caches
self.addEventListener('activate', (event)=>{
    console.log('Service Worker: Activating...');
    event.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(cacheNames.map((cacheName)=>{
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                console.log('Service Worker: Deleting old cache:', cacheName);
                return caches.delete(cacheName);
            }
        }));
    }));
    self.clients.claim();
});
// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event)=>{
    // Only handle GET requests
    if (event.request.method !== 'GET') return;
    // Skip cross-origin requests (like Tailwind CDN)
    if (!event.request.url.startsWith(self.location.origin) && !event.request.url.startsWith('https://cdn.tailwindcss.com')) return;
    event.respondWith(caches.match(event.request).then((cachedResponse)=>{
        // Return cached version if available
        if (cachedResponse) return cachedResponse;
        // Otherwise, fetch from network
        return fetch(event.request).then((response)=>{
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') return response;
            // Clone the response
            const responseToCache = response.clone();
            // Cache the fetched response
            caches.open(DYNAMIC_CACHE).then((cache)=>{
                cache.put(event.request, responseToCache);
            });
            return response;
        }).catch((error)=>{
            console.log('Service Worker: Fetch failed, returning offline page', error);
            // Return a basic offline page for navigation requests
            if (event.request.destination === 'document') return caches.match('/dashboard.html');
        });
    }));
});
// Background sync for when connection is restored
self.addEventListener('sync', (event)=>{
    console.log('Service Worker: Background sync triggered');
    if (event.tag === 'background-sync') event.waitUntil(doBackgroundSync());
});
function doBackgroundSync() {
    // Implement any background sync logic here
    console.log('Service Worker: Performing background sync');
    return Promise.resolve();
}
// Push notifications (placeholder for future implementation)
self.addEventListener('push', (event)=>{
    console.log('Service Worker: Push received');
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/assets/DevTools Conglomerate Tech Logo 1.png',
            badge: '/assets/DevTools Conglomerate Tech Logo 1.png',
            vibrate: [
                100,
                50,
                100
            ],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
        };
        event.waitUntil(self.registration.showNotification(data.title, options));
    }
});
// Notification click handler
self.addEventListener('notificationclick', (event)=>{
    console.log('Service Worker: Notification clicked');
    event.notification.close();
    event.waitUntil(clients.openWindow('/dashboard.html'));
});

//# sourceMappingURL=sw.js.map
