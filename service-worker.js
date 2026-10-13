const CACHE_VERSION='sf-shell-v1.1.0';
const SHELL=['./','./index.html','./css/app.css','./js/app.js','./js/major.js','./manifest.webmanifest','./assets/icons/icon-192.png','./assets/icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_VERSION).then(c=>c.addAll(SHELL)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_VERSION&&k.startsWith('sf-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const req=event.request;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE_VERSION).then(c=>c.put('./index.html',copy));return r}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r&&r.status===200&&new URL(req.url).origin===location.origin){const copy=r.clone();caches.open(CACHE_VERSION).then(c=>c.put(req,copy))}return r})));
});
self.addEventListener('message',event=>{if(event.data==='SKIP_WAITING')self.skipWaiting()});
