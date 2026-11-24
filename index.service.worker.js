// Desliga o modo offline antigo: apaga as cópias guardadas e recarrega a página com a versão nova.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
	for (const k of await caches.keys()) await caches.delete(k);
	await self.registration.unregister();
	for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
