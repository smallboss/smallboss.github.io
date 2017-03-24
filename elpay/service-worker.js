/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["basic.html","582111a48a6aa92cad959fce64cab8b2"],["images/bg_cat.jpg","98f77fac6a7a94f1c38345008b0ba3c6"],["images/cannes-collection.jpg","afeadcae0ad03f43307636586d0cf039"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/icons/3mob-big.png","952b7f047989a07ced3c27046de17c72"],["images/icons/arrow-back.png","0f752940a9bbcb4b97c62e9a8d6ca445"],["images/icons/back.png","581997b3a7358447455c6cb815827480"],["images/icons/clean-sum.png","d4b90c4d4a25a5bcc89a791e40ff6b95"],["images/icons/exit.png","928038bb13ffd50fa356009140278305"],["images/icons/intertelecom-big.png","9fe63f12c3e6bc26b65307368ac9c314"],["images/icons/kyivstar-big.png","0caae2241d0991cca1dcb16790d08718"],["images/icons/lifecell-big.png","f044eeb739e1976a856a49e4f5f47c02"],["images/icons/print.png","08adeb840b1dec1e5d855362062146d2"],["images/icons/show-more.png","22cdc542b4c127b419bedd8b177f25ad"],["images/icons/status-error.png","f4b6f799cac7c348b250ac3671b632cd"],["images/icons/status-ok.png","d0fa93900a81bb29f9e579ce3a45ca7c"],["images/icons/status-wait-arrow.png","9959caa931db0239d6ee4d52ec0e2a99"],["images/icons/status-wait-inner.png","943f5313db9f2c7507eb0162d141cca0"],["images/icons/status-wait.png","049f2c8ca94f4a0ee9d0c1dafeb1eaa0"],["images/icons/telegram.png","603b7c7d4a764f3d63e72946fc6d0910"],["images/icons/vadafone-big.png","6fa0d2d31a6a7221cee6d3d5762cf1c5"],["images/icons/viber.png","29ff010366866e80a8b5d92bc2a88ad8"],["images/logo.png","c1ee31335294d2bd20c2552006518d4e"],["images/manhattan-collection.jpg","c93f572367aafb3f7d3044d184e48f7a"],["images/news.png","f1276b2fc97784246940aa18aedc3b63"],["images/phil-image.jpg","c5d92fe26f6401e556ace5809e3ca321"],["images/touch/android-chrome-192x192.png","50bfd83d9d899b4bb27c25bf358134d3"],["images/touch/android-chrome-512x512.png","a3fbebd312d67fee139ed1e00cb89bcb"],["images/touch/apple-touch-icon.png","08f55c682ed8f7ff3c21e9fc68929eeb"],["images/touch/browserconfig.xml","e4e40b0c82d228add33b5bcfe276a859"],["images/touch/favicon-16x16.png","c20c4f3c1c68bcf8e92e9e5825cff59a"],["images/touch/favicon-32x32.png","b72c32385fa50c8a7219e61910cf7835"],["images/touch/favicon.ico","730f74a2c5ac75473a2ecf9f91f89593"],["images/touch/manifest.json","c8e3b78f511f57bf0242db20616f37f5"],["images/touch/mstile-150x150.png","9c7f09ab8a4b9663425adad255838f0d"],["images/touch/safari-pinned-tab.svg","31a0b2aa73472999b151162783c919cf"],["images/verona-collection.jpg","269e2fdd755e65596045299f10f2eae7"],["index.html","f81e5fdc838e4e59531385e3d83b5f51"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/main.min.js","9d129e5a5aa10c7de4097815e8494997"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/main.css","2b2e6938449b41f49398b1394fc68a97"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




