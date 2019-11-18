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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/bg.png",
    "revision": "2f54f6790ff403a497e19316bc137571"
  },
  {
    "url": "assets/dribbble.png",
    "revision": "055496fc3e42287e2700a935446ae0db"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "725d8cc3d45cd47f6f76cfc85746d5e8"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "365ea98008341d2896fc0dc1ae8e4efd"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-004c1451.js"
  },
  {
    "url": "build/p-42f33164.js"
  },
  {
    "url": "build/p-8cmngutz.js"
  },
  {
    "url": "build/p-affe7c09.js"
  },
  {
    "url": "build/p-b65jyrbt.entry.js"
  },
  {
    "url": "build/p-d0882b30.js"
  },
  {
    "url": "build/p-d8631f0b.js"
  },
  {
    "url": "build/p-izrtr4ad.entry.js"
  },
  {
    "url": "build/p-jgqliago.entry.js"
  },
  {
    "url": "build/p-r9ibnzz1.css"
  },
  {
    "url": "build/p-u5tmdxw6.entry.js"
  },
  {
    "url": "build/p-uh0xrktt.entry.js"
  },
  {
    "url": "build/p-vargv0pf.entry.js"
  },
  {
    "url": "build/p-xpdbzwqv.entry.js"
  },
  {
    "url": "index-org.html",
    "revision": "9d526353a2a358c183106a1720a3cc27"
  },
  {
    "url": "index.html",
    "revision": "edba196b7cd7fe9dc577678b05f7fc13"
  },
  {
    "url": "manifest.json",
    "revision": "c26a8a88da71e281e6c142e720fce7ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
