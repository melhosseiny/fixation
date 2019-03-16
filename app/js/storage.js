export function Storage(spec = {}) {
  let id = 0;

  let put = function(document) {
    caches.open('gaze').then((cache) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      cache.put('/gaze/' + id, new Response(document));
      id = id + 1;
    })
  }

  let get = async function(id, callback) {
    const cache = await caches.open('gaze');
    const response = await cache.match(new Request('/gaze/' + id));

    if (response) {
      response.json().then((value) => callback(value));
    } else {
      callback(undefined);
    }
  }

  let getKeys = async function(cacheName, callback) {
    const cache = await caches.open(cacheName);
    cache.keys().then((keys) => callback(keys));
  }

  return Object.freeze({
    put,
    get,
    getKeys
  })
}
