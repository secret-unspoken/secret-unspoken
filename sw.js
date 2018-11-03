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
    "url": "webpack-runtime-5eb76dc184087af08053.js"
  },
  {
    "url": "app.0e6959748660db1696a1.css"
  },
  {
    "url": "app-b91a3b08a2f1fa52ab6f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-584a79213f4fe43d1582.js"
  },
  {
    "url": "index.html",
    "revision": "365cbb6067f72715a9551d7f959b24c8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6bc64c74654df78d3c81e7ba4e2929ef"
  },
  {
    "url": "3.671d6172d371ee450f7c.css"
  },
  {
    "url": "component---src-pages-index-js.0e9ee22e4590440327cd.css"
  },
  {
    "url": "0-f3a8bb1b42d86c630ef7.js"
  },
  {
    "url": "component---src-pages-index-js-676c43ca2f1d92af609a.js"
  },
  {
    "url": "1-6408989addd69db43c35.js"
  },
  {
    "url": "3-6e139bd25f238e5bcffb.js"
  },
  {
    "url": "2-13424c0bc24ec73ecf7b.js"
  },
  {
    "url": "static/d/300/path---index-6a9-7uKlX8UxBKN3T4E1K4fEazjdY.json",
    "revision": "7f673c73fbb79e13e0f0d295cdd45b32"
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