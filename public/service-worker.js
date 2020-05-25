// import {CacheableResponsePlugin} from 'workbox-cacheable-response';
// import {CacheFirst} from 'workbox-strategies';
// import {ExpirationPlugin} from 'workbox-expiration';
// import {registerRoute} from 'workbox-routing';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({ debug: true });


if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`, workbox);
} else {
	console.log(`Boo! Workbox didn't load 😬`);
}


workbox.routing.registerRoute(
	'https://somespeed.com/wp-json/wp/v2/taxonomies',
	new workbox.strategies.CacheFirst({
		cacheName: 'wp-json',
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	}),
);


workbox.routing.registerRoute(
	({url, request}) => {
		console.log({url, request})
		return false
	},
	new workbox.strategies.CacheFirst({
		cacheName: 'wp-json',
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
			}),
		],
	}),
);
