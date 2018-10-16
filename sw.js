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
    "url": "webpack-runtime-8cf3ec26c98f09e89950.js"
  },
  {
    "url": "app.f44a7c9e2350b19f463b.css"
  },
  {
    "url": "app-eb2b06585f864e672478.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0ce4689173b072efaca9.js"
  },
  {
    "url": "index.html",
    "revision": "06a3ec42b312bc569c554245985e812d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ff06c2de70981d0faf04f1177a62dc45"
  },
  {
    "url": "component---src-pages-index-js.8b2e5e28d9c678df111e.css"
  },
  {
    "url": "1-c12abe3b8fb1aef7ace0.js"
  },
  {
    "url": "component---src-pages-index-js-3e8e45301a19985af3fa.js"
  },
  {
    "url": "0-72aea1f581d68b21210f.js"
  },
  {
    "url": "static/d/924/path---index-6a9-kIcs2OEVgjgBBWriH2aYZjmZPM.json",
    "revision": "672540d295bbff614610f9aa9ea5ee03"
  },
  {
    "url": "component---src-pages-404-js-ba6273f0616d8847f849.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b58fcfa7628c9205cb11a1b2c3e8f99a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
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