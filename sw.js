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
    "url": "webpack-runtime-a4a25277a484e5df7c35.js"
  },
  {
    "url": "app.f44a7c9e2350b19f463b.css"
  },
  {
    "url": "app-f6592237d6f6c3fa3772.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-98eab2c0852c273f2bbc.js"
  },
  {
    "url": "index.html",
    "revision": "e2b55b536245e2a85e78c37a3083eed7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a2c4a75811bcb9f5911d77962456ae59"
  },
  {
    "url": "component---src-pages-index-js.b0833db23b05b36a1d6a.css"
  },
  {
    "url": "component---src-pages-index-js-cf2e3fa51e2f57d4b283.js"
  },
  {
    "url": "2-40a92321ef7adaacd6ea.js"
  },
  {
    "url": "1-cc7726ff47c0ad8c9ae2.js"
  },
  {
    "url": "0-f3574fd19959b61d461f.js"
  },
  {
    "url": "static/d/319/path---index-6a9-NMXpeK6720SEImJ2Ul9waQbkR8Q.json",
    "revision": "2dda8fa1d7362b9994c463f31e1a34bf"
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