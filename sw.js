/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-be5c55f86443eedf3529.js"
  },
  {
    "url": "app.d3d7153b0405077a99e9.css"
  },
  {
    "url": "app-3d0fb8c32eaa4d641230.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-584a79213f4fe43d1582.js"
  },
  {
    "url": "index.html",
    "revision": "7e0fb4aac302669ff4e60a0043a0ea35"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "787e43ff2aa0e451a2c02a7e231b719e"
  },
  {
    "url": "1.f843af9f10078fb1c1b8.css"
  },
  {
    "url": "component---src-pages-index-js.3969214c3ed9ffb8aeb9.css"
  },
  {
    "url": "0-4c4c22e1729bbbb145b6.js"
  },
  {
    "url": "component---src-pages-index-js-64c1ff76df00f488adee.js"
  },
  {
    "url": "2-204bcdd9c5eb54e0e162.js"
  },
  {
    "url": "1-3657377915551aa64fe0.js"
  },
  {
    "url": "3-f52c5e14e246db35d4e6.js"
  },
  {
    "url": "static/d/979/path---index-6a9-gYXlAcdr0A9xHBNuAF5SfgEYeQ.json",
    "revision": "7d005cd1315aaafd757553e2a8410996"
  },
  {
    "url": "component---src-pages-404-js-4666923cad8beef23b2a.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});