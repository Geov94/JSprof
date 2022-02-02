const V1 = "v1";


self.addEventListener('install',event =>{
    event.waitUntil(precache());
});

self.addEventListener('fetch',event =>{
    const request = event.request;

    if(request.method !== "GET"){

        return;

    }

    event.respondWith(cachedResponse(request))

    event.waitUntil(updateCache(request))


})


async function precache(){
    const cache = await caches.open(V1)
    cache.addAll([ 
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/catDance.mp4',
    ]);

}


async function cachedResponse(request){
   const cache = await caches.open(V1)
   const response = await cache.match(request)
   
   return response || fetch (request)

}

async function updateCache(request){
    const cache = await caches.open(V1)
    const response = await fetch(request)
    
    return cache.put(request,response)
 
 }