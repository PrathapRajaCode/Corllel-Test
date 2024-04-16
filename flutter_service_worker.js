'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e468a69dac40f648860c5d21d47354ec",
"assets/AssetManifest.bin.json": "e196043c9ffa207347b30720f1190828",
"assets/AssetManifest.json": "ec397083593f0cbe6f7903e3902a1c81",
"assets/assets/images/3d.png": "1d0cf7510e0b6fe6ca78ae7620d1536c",
"assets/assets/images/backgroundimage.png": "afd3bf368a0aae8e41300fe9c3f68f3b",
"assets/assets/images/bg.png": "b93eec0efcd7c147c49239d1e6f8212a",
"assets/assets/images/bg1.png": "9d82318360a95efb52a8911d657c55e2",
"assets/assets/images/bigscreen1.mp4": "5dca3e0b9cbd7ed458d00e3ade4b3c6d",
"assets/assets/images/build.png": "18e56fe9c43447d74ea26f0e937c7a18",
"assets/assets/images/cgif.gif": "561b3bd41d047cb9b12cd5dbd10956b2",
"assets/assets/images/corllel.mp4": "5a363877970e97587c2c03eaa5a27c1e",
"assets/assets/images/cube.png": "a52afab5d121e7118e885f3a7a8c265f",
"assets/assets/images/d%25202.png": "a24195df2a9e46ee2a9162ef83c14303",
"assets/assets/images/d.png": "3e4e7b3078336e5c75a41914fa82626a",
"assets/assets/images/dad.png": "a7fac0b74e88bc3b5d765272bb12473a",
"assets/assets/images/DigAmenD%2520full%2520service.mp4": "89efce0bc7e5557e37681e673672087d",
"assets/assets/images/digamend.mp4": "89efce0bc7e5557e37681e673672087d",
"assets/assets/images/dive.png": "3ff6515551d58107e24608945bd42381",
"assets/assets/images/experience.png": "3c2100b2964e8848606efc699289e5ea",
"assets/assets/images/experience_mobile.png": "d2aa65b717c1fb904f1c4dee657a7935",
"assets/assets/images/explore.png": "8bf3c044ff3370da6804dd855f9f98d4",
"assets/assets/images/explore_mobile.png": "35f87ece8eacbc04c7acb8b433dedaa5",
"assets/assets/images/Facebook.png": "fd435dde58604a121a997ac706e3d315",
"assets/assets/images/girlwithstar.png": "b2cfb48a7e771c193e61ba98f4c9e29d",
"assets/assets/images/going.png": "ac9f4e2d83534330de20814a0e7d927e",
"assets/assets/images/headset.png": "a09cb742ea6fc49ba6346f3e97fd69e3",
"assets/assets/images/image3.png": "368c7ddfdbb78992a19833dc1ce2826c",
"assets/assets/images/image4.png": "acd720968ba992ddc4e52aff8064cdaf",
"assets/assets/images/image5.png": "586409b8c85cd6f2a29758b3fd02139a",
"assets/assets/images/image6.png": "fadc809cc91a6df4218eace26b28af4b",
"assets/assets/images/image7.png": "8b3281b388277b6e879148194d99424c",
"assets/assets/images/image8.png": "fa95dfd94709d7d61e1d0b9262b2f5a0",
"assets/assets/images/image9.png": "81186ab0091001f5b48e3cb049db99ca",
"assets/assets/images/immerse1.png": "66a6949e8bd8d3e957f686953871f0be",
"assets/assets/images/immerse2.png": "3fcc41c164bfe29a09b6c239a6f69f44",
"assets/assets/images/in.png": "af696ad8f65a273664b556f0bb99cc3c",
"assets/assets/images/ins.png": "594f18e057d542d4a9dc7bdbbd9bd7dd",
"assets/assets/images/insta.png": "280116196075f84293d41ef70d74762f",
"assets/assets/images/j.png": "e61327d8788688e66fde925b62b6b662",
"assets/assets/images/j1.png": "d5144137a85ca4191fbf0c6729187227",
"assets/assets/images/j10.png": "9cebed3b95a105bbca3d733394377b25",
"assets/assets/images/j2.png": "7947fecc0b77f43e77bf631c7d25fe14",
"assets/assets/images/j3.png": "c3fcf21a18507f034c44f52cc3e01840",
"assets/assets/images/j4.png": "7d30f237227836aa7fc5c5648ef02c06",
"assets/assets/images/j5.png": "89c850a0753735be975febfd0049def7",
"assets/assets/images/j6.png": "48bae2237c4f978988ab3b28e37688dd",
"assets/assets/images/j7.png": "7b76a501af9c28bcf57650e2478fb284",
"assets/assets/images/j8.png": "ec08a3648aaccbffd5fd467b11b41c8b",
"assets/assets/images/j9.png": "3df2c15a361bd4d14f20427d459eb6da",
"assets/assets/images/k1.png": "8666718715fd6c53ad7d6bad3577e5dd",
"assets/assets/images/lin.png": "3eb96b7aff56489c6bff39e018f54274",
"assets/assets/images/Linkedin.png": "f79d4f5db74aa9ffc5ce961ddd809e62",
"assets/assets/images/metaworldimage.png": "6374f52ecfee42464ad9a97a6bab1335",
"assets/assets/images/meta_bg.png": "afd3bf368a0aae8e41300fe9c3f68f3b",
"assets/assets/images/Outlines.png": "7dd6600a689b7a2c0e13d0619743a9bb",
"assets/assets/images/Outline_right.png": "eb9f69a73acbb0e3e1542a717f3731de",
"assets/assets/images/round.png": "e790239eac4bf4cb458516477e4d54ed",
"assets/assets/images/round_bg.png": "663d4805ad22aac3299909c84400ad2c",
"assets/assets/images/shadow.png": "aa8f06a0dc409c9bc81b1d16b0b69a3b",
"assets/assets/images/shortvideo1.mp4": "d5b85cc3babc9920c1379c64e4a73810",
"assets/assets/images/shortvideo2.mp4": "3a6d4a22cf55b709503189c53d29ed05",
"assets/assets/images/twi.png": "90a39742c4a2bb8b9d45866a9e19565d",
"assets/assets/images/twit.png": "8bf790a1061b00ca34bc87cdaeecc35e",
"assets/assets/images/Twitter.png": "838d1774f709c5e7eef1b430238d62bf",
"assets/assets/images/Vector.png": "a7a5ad342120044153357f7681efd1ab",
"assets/assets/images/Vector1.png": "f93f0d9890e68d85d8806dbfa8df77fd",
"assets/assets/images/Vector2.png": "8057ce456739dcccc495227857fe9dd3",
"assets/assets/images/Vector3.png": "ea6365736b1cf57b10392af61d1b2177",
"assets/assets/images/Vector4.png": "05db9f56411ee15987091f040669acf0",
"assets/assets/images/Vector5.png": "2c401b4ccc7a5cdf0ad2b931b6718211",
"assets/assets/images/Vector6.png": "36e2a372e6cb10be02396811e1b144e1",
"assets/assets/images/Vector7.png": "22703ac180930f27c1d4469286101d1a",
"assets/assets/images/Vector8.png": "925c58b20d8b0ed93d66bb4064dcf8f7",
"assets/assets/images/Vector9.png": "8bf1ab66111a49bee33829a795e2fd00",
"assets/assets/images/y.png": "e070460406e937987db84babfe1e8689",
"assets/assets/images/yt.png": "7ae37afe10a5cce74c1c4d31d4db1eee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e18f5e7bd3742df4fdc340879d58b0e1",
"assets/NOTICES": "31d8cdebbdce0b734898530ee7cdceab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "26fe23c093b8e6381c9185e4faeb0a8e",
"/": "26fe23c093b8e6381c9185e4faeb0a8e",
"main.dart.js": "b165fb7b65a92a2148797f3f43067ebc",
"manifest.json": "0f18e017c27474b9216c4629c994266a",
"version.json": "4c0a98a7ebe7a3e9275a989c10a6095a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
