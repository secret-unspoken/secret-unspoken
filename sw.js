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
    "url": "webpack-runtime-621ae1a32659f40ad98c.js"
  },
  {
    "url": "app.f44a7c9e2350b19f463b.css"
  },
  {
    "url": "app-ecfa4a045a61d814cf9a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-98eab2c0852c273f2bbc.js"
  },
  {
    "url": "index.html",
    "revision": "0dbdea059cc2154e3e60df6231d7f377"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "978566c4a1fdd8e32a2dfcdf111510d1"
  },
  {
    "url": "component---src-pages-index-js.3051bc17d997bfe816bf.css"
  },
  {
    "url": "component---src-pages-index-js-f79f63270a4f86b0adc2.js"
  },
  {
    "url": "2-d811ef57f82cbe1edf41.js"
  },
  {
    "url": "1-93bead36bd6abf7858b9.js"
  },
  {
    "url": "0-974672fa5502bd4e8b98.js"
  },
  {
    "url": "static/d/924/path---index-6a9-kIcs2OEVgjgBBWriH2aYZjmZPM.json",
    "revision": "672540d295bbff614610f9aa9ea5ee03"
  },
  {
    "url": "component---src-pages-404-js-5d3302a22aab972fa053.js"
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