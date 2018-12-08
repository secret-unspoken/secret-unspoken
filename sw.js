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
    "url": "webpack-runtime-4440258a4184c06f0ae0.js"
  },
  {
    "url": "app.391bf6037fabba1fe429.css"
  },
  {
    "url": "app-b095cfe0dfdb8b2a54c9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-584a79213f4fe43d1582.js"
  },
  {
    "url": "index.html",
    "revision": "41f041d85d236598fa9c52ed6d31b4e4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "19c5783e020fad151811271f479ed4f5"
  },
  {
    "url": "2.5959980fc345e4a5359b.css"
  },
  {
    "url": "component---src-pages-index-js.6af0e92a21229a511658.css"
  },
  {
    "url": "0-8e0fa20082f66d766d0b.js"
  },
  {
    "url": "component---src-pages-index-js-b9e57b68bc8c10aab48a.js"
  },
  {
    "url": "1-f8290c34c710f309dba2.js"
  },
  {
    "url": "2-337fd056ae24075345e5.js"
  },
  {
    "url": "3-36ae4a8bc7e516f38831.js"
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