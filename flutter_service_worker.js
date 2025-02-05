'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2ae7d06cec3207b2f9b34f6fe8ea6769",
"assets/AssetManifest.bin.json": "88c715dcec5c7b4a4156f7da76617f6d",
"assets/AssetManifest.json": "0d8be223df64f684a30d1c7caf8e5489",
"assets/AssetManifest.bin": "16d26eb519f4e9e3ea9a403f56480427",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "ca4fe7c030e4491c017b8aa2c50fa2ed",
"flutter_bootstrap.js": "8d89a03363ae20b9c5fe98acfaa4df6a",
"index.html": "65feea27625970d76d90c0092538940e",
"/": "65feea27625970d76d90c0092538940e",
"favicon.png": "39f3971c01d1a8dba3c03225beb2bf57",
"main.dart.js": "91b2749c074196e906ff9862b616a9cd",
"version.json": "f1fae5b1bbfb915406925ec0d2997f1f",
"icons/Icon-maskable-512.png": "125dec868ee0f49970a8a84809488b3e",
"icons/Icon-512.png": "125dec868ee0f49970a8a84809488b3e",
"icons/Icon-192.png": "674df3d34a5265ad3265f649bfe86df0",
"icons/Icon-maskable-192.png": "674df3d34a5265ad3265f649bfe86df0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/d6/a2f0781ee5a36307b3c43118d475c6b58ba880": "7db7aaa75b4dd96905a59ca8d8f9a861",
".git/objects/fc/3234f6939b47474fd5cdd676e783f38c019211": "19e30b16dd5c87d98b18e49ffc7fd9a1",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "5e153923692957fe51c0fc87c722499c",
".git/objects/48/dd3329390ae3bd304f22cb5d111efca499d0c8": "d937964df978e79ed8ae4a95330dac72",
".git/objects/f7/3e3e705908414816c1aee903bbfd796f247acf": "0cc1c2aff43de918137cf0fdda5f824f",
".git/objects/31/385076d8dc0f0e14349bc5bdb66903dd120b42": "355e4f2e49c5e70710d8007d615934fb",
".git/objects/15/2635843372dad9030c2a4eef5656913be80b51": "e2f10beda7b2e3c895a02bf500aafd9e",
".git/objects/e8/55ab1ce2bb00c6c52893a1d9cf627b8849824a": "0cf1e6954b2f07f64c5152dad82cce01",
".git/objects/78/1dc500243a515665153bc69c69c9fe41c7b6c8": "edd54be9e46b1830b14459eb058174d1",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "0f564f54b8e3c5f0de81cc72faf3102e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "c0245ee3ff96770aae8bf794a219cd27",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/77/78a9d9026d47a3c9e6653b41f51adae55681f5": "f31196ff0c174d4fe4d708970d682f05",
".git/objects/4c/3eb2103060d20532b5d997a517cf187e32b7f9": "f349db976cffdd6118fa4740bc86325f",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/c8/fa64162f6a75241b646fa4f80666c87b2c10c0": "386d5de93f390c18507c6a2e05768233",
".git/objects/22/7af463583f793ddeb2781e0ea00c2a0c14b3d5": "5fea8f7cbbee8d91b50c223bd36e0bbf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "cb7473dccaed791369235c2c23006db1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "0257c94928374c6b8a920bcb473d8764",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "60800035069f7528ebd2c61c6d5ff8bc",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "1eb16951a4305b6cdfdc988e476d34b3",
".git/objects/89/ed179b501e70688f3ca8d3e78a912ee9ba8a01": "ac7d8ce3761b551d12377b8310fc988a",
".git/objects/7d/dc6515797308c61ab68b252fb3cfc0178bf1a4": "353ae7ee54b46dddf77f12843e3cc31e",
".git/objects/e9/3fe5f4092220ec6755ac4745641062c2c82531": "465f0b1738f1555a1e54589034aee9d1",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "f13981c9fe17f67f92cbea61b381cfbd",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "a788719b0e13a87f03f282a914ec7e36",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "81c6e3665e668f7165eec379ad33e28b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "51b6c7d0419bbddbd7c4a390d9425f81",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "b1f56ff48632be0726211413fe82e856",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "804cc7a72d68e6cfd42e466d93ef62c4",
".git/objects/6f/80c55bf4502e19844aea20774fa88e56e4cbdb": "44fb624a49b50ba85d8b0bfae4831ccb",
".git/objects/6f/871fed6ae5b8b998aae5a9bebc6b8bd8e5743d": "f6e52350138fca760e65ffbe329db98c",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "957533b7b592f4a758d40faa29c6387c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "a09844beaaf5b2d3dcdeeddb5662873d",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "0affb96f3b6d2d1fc662aa5e2c4b7551",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7a679998f6e38bc17ddddeb455a2cea2",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/0d/83d590f1580056178059b75c0a07681b0ef668": "aed1816bed4eb23679d685d4c90feee8",
".git/objects/35/8a57d37eabacbaef0652109c3d0871a4fdb376": "0e0a0e88ea9a25eed3fdf23e40b70483",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "4bd2333ae8716ba8054e4f275855eb4a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/ae/4e8dd464ae4d1fb66bf5c6d6f9837960b3136d": "037da025478b40809de308ba07ba5bc0",
".git/objects/ae/1580598dde576fd26451c225a3943281f330c1": "5b28347e86c41767b2f129bd0ce1d1c5",
".git/objects/ca/d981ff4e90cedd48d2c7465706d78b3b898805": "dbc181ceed76066bd63ac2c369f0dbe3",
".git/logs/HEAD": "2a3a777b11074e37689910c14d611230",
".git/logs/refs/remotes/origin/HEAD": "4cdf6d1e51f1318ab86f023a12045156",
".git/logs/refs/remotes/origin/main": "bcd6c30821db97177562b14f47c1343e",
".git/logs/refs/heads/main": "b3fad33575965850e6a843e02d0fc39e",
".git/config": "a38d8f887780a9dca91736eee35b9356",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "98871bfc127a6b842b3a9b93dd2d996e",
".git/refs/heads/main": "1d5c5011956f49ac91ad646ed2a75594",
".git/index": "cec3cb8c8a06069e52b70531d400b426",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "cce1ce79b59c1467efee0db5a89575bd",
"manifest.json": "ce29a480c3ef60ddfb22ef7d21be9553",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
