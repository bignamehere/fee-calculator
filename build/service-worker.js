"use strict";var precacheConfig=[["/fee-calculator/index.html","bef729886e3960ab6381a07f938b61d2"],["/fee-calculator/static/css/main.c0837ee0.css","6b16e322805a6275becb7b68a1e88539"],["/fee-calculator/static/js/main.7f848be9.js","1f1c64e83913762575b19f2c16fcc84a"],["/fee-calculator/static/media/angle-arrow-down-hover.53c1cd25.png","53c1cd25fff1a79ed90714e3715cd54c"],["/fee-calculator/static/media/angle-arrow-down-hover.a3ee995e.svg","a3ee995ea9d6a796976456b54af5d8ab"],["/fee-calculator/static/media/angle-arrow-down.c3c72a6e.svg","c3c72a6ee199232be52daa761c4a7582"],["/fee-calculator/static/media/arrow-down.134ee96f.svg","134ee96f77fb18c6d879bf962912a085"],["/fee-calculator/static/media/correct8.944de30f.svg","944de30f0d6c95c2aa544f8b9cac8f27"],["/fee-calculator/static/media/dash.c97ba61e.svg","c97ba61e12aef34cc29c1ab7dca59a5b"],["/fee-calculator/static/media/error.8773ca7e.svg","8773ca7e457bfc1b3de3d87df927edda"],["/fee-calculator/static/media/external-link-alt-hover.0a737479.png","0a7374799901bcfdb245108cc51c7516"],["/fee-calculator/static/media/external-link-alt-hover.48f4f10f.svg","48f4f10f8b2bc89625a53b23578f8711"],["/fee-calculator/static/media/external-link-alt.18b41ab2.svg","18b41ab22f64fda9a9c1da6ca3bd8773"],["/fee-calculator/static/media/external-link-hover.f09ec858.svg","f09ec8586b4d786847e5229617754e17"],["/fee-calculator/static/media/external-link.bdcbd439.svg","bdcbd439a464ff3037dad45b44af345c"],["/fee-calculator/static/media/info.f6fcba34.svg","f6fcba349ae758f6bfe3ccbf521ef8c4"],["/fee-calculator/static/media/merriweather-bold-webfont.3a8907c9.ttf","3a8907c945b4ea384ad0b99150847706"],["/fee-calculator/static/media/merriweather-bold-webfont.65d5dea5.eot","65d5dea57619d14d4e012b3a25550207"],["/fee-calculator/static/media/merriweather-bold-webfont.6d33d169.woff2","6d33d1693d8c3e674020a003b03d5aef"],["/fee-calculator/static/media/merriweather-bold-webfont.b6b7444f.woff","b6b7444ffb6c03617a6a3c337965ce78"],["/fee-calculator/static/media/merriweather-italic-webfont.5568fe0d.woff","5568fe0d4ab09cd47227a2baade5fac2"],["/fee-calculator/static/media/merriweather-italic-webfont.5b09f197.eot","5b09f19714acef0663643ff49294a777"],["/fee-calculator/static/media/merriweather-italic-webfont.9830783a.woff2","9830783aaa859c742823f3fefd60b867"],["/fee-calculator/static/media/merriweather-italic-webfont.ad5dd583.ttf","ad5dd583afab8f453645b057029586bf"],["/fee-calculator/static/media/merriweather-light-webfont.726e8a5e.ttf","726e8a5e407de4813fba4998cf946761"],["/fee-calculator/static/media/merriweather-light-webfont.8e9df39c.woff2","8e9df39cafa62b65262a85908e33ec66"],["/fee-calculator/static/media/merriweather-light-webfont.c370c7b6.woff","c370c7b61d28a26a1c8107def5d57b7d"],["/fee-calculator/static/media/merriweather-light-webfont.f423e689.eot","f423e689e0bdaa0f7b0587785f334e56"],["/fee-calculator/static/media/merriweather-regular-webfont.18fb7572.woff2","18fb7572812a600eeb86ecbdeb3c3064"],["/fee-calculator/static/media/merriweather-regular-webfont.479fc84c.ttf","479fc84c654874d031d50f8e878f2139"],["/fee-calculator/static/media/merriweather-regular-webfont.8af54a98.woff","8af54a984d2993508bf270e9204d1860"],["/fee-calculator/static/media/merriweather-regular-webfont.a1e02af0.eot","a1e02af03345e22ea9f0c3c56cf1b932"],["/fee-calculator/static/media/sourcesanspro-bold-webfont.74f174d0.woff","74f174d071369e0df8566c8a3013e001"],["/fee-calculator/static/media/sourcesanspro-bold-webfont.86937a00.ttf","86937a00b9e6bd153ddb2d25a296896d"],["/fee-calculator/static/media/sourcesanspro-bold-webfont.cc7343dc.eot","cc7343dca32ce1c4de62e430c449b216"],["/fee-calculator/static/media/sourcesanspro-bold-webfont.db089244.woff2","db08924457dfce83611a4392af58de04"],["/fee-calculator/static/media/sourcesanspro-italic-webfont.1c766c2a.woff","1c766c2ac93653f97310ac420ef6aa84"],["/fee-calculator/static/media/sourcesanspro-italic-webfont.95366d5c.eot","95366d5c901f8de3fbc6aef7421e0da7"],["/fee-calculator/static/media/sourcesanspro-italic-webfont.ab48e5ed.woff2","ab48e5edfe4dc666d1aeba338fc078b8"],["/fee-calculator/static/media/sourcesanspro-italic-webfont.c5a1649c.ttf","c5a1649c9d410b426fca73e29c4f20a5"],["/fee-calculator/static/media/sourcesanspro-light-webfont.36b24548.eot","36b2454850951a572647d682c969937f"],["/fee-calculator/static/media/sourcesanspro-light-webfont.3920c044.woff","3920c044810625353fedd3e074553422"],["/fee-calculator/static/media/sourcesanspro-light-webfont.5110c10b.ttf","5110c10b6fcf515fc776cd1b62aab226"],["/fee-calculator/static/media/sourcesanspro-light-webfont.91533bcf.woff2","91533bcffe7d49099b98dea3e7093217"],["/fee-calculator/static/media/sourcesanspro-regular-webfont.01c34960.ttf","01c34960c01c24ac996e1348d25c54eb"],["/fee-calculator/static/media/sourcesanspro-regular-webfont.699e5f09.woff2","699e5f09daf577ae815ddc7b920f8e24"],["/fee-calculator/static/media/sourcesanspro-regular-webfont.d2e3cf3e.woff","d2e3cf3e91620fa02db78122b43b856f"],["/fee-calculator/static/media/sourcesanspro-regular-webfont.d8ab7c53.eot","d8ab7c53981c7d8247c52e2caab2721a"],["/fee-calculator/static/media/success.2eb47a3f.svg","2eb47a3ff8f1770a58340b17f745b977"],["/fee-calculator/static/media/warning.4ba1d198.svg","4ba1d198d9487ee97e4cf851ed2de1f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/fee-calculator/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});