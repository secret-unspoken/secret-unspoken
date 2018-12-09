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
    "url": "webpack-runtime-2e5e2d58e9703a1f62dd.js"
  },
  {
    "url": "app.d3d7153b0405077a99e9.css"
  },
  {
    "url": "app-aa9cf655a8cfd04646ec.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-584a79213f4fe43d1582.js"
  },
  {
    "url": "index.html",
    "revision": "8e294f03f412bed83cf4c8bcea1ea6c5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "54a27f7cfa5dfae8c434d8c6c7e58946"
  },
  {
    "url": "1.f49cde35435c2d4b2d9d.css"
  },
  {
    "url": "component---src-pages-index-js.d139e0a2df1e71205c2d.css"
  },
  {
    "url": "0-e996242b3a346b071b0b.js"
  },
  {
    "url": "component---src-pages-index-js-c29f6e0109553cde3677.js"
  },
  {
    "url": "2-aa3fa053b66e01688f20.js"
  },
  {
    "url": "1-f6d5c575c7fb7edbf947.js"
  },
  {
    "url": "3-66f2b86983885963d88b.js"
  },
  {
    "url": "static/d/539/path---index-6a9-pcpLkp9fbH5YaF6Zdwqd0nLJVKA.json",
    "revision": "03e816ed93df8952a493e4e49f2db8ac"
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