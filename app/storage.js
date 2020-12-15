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
    const response = await cache.match('/gaze/' + id, {
      ignoreMethod: true,
      ignoreVary: true
    });

    if (response) {
      response.json().then((value) => callback(value));
    } else {
      callback(undefined);
    }
  }

  let clear = async function(cacheName, callback) {
    caches.delete(cacheName).then((deleted) => callback(deleted));
  }

  let getKeys = async function(cacheName, callback) {
    const cache = await caches.open(cacheName);
    cache.keys().then((keys) => callback(keys));
  }

  let usage = function(callback) {
    return navigator.storage.estimate();
  }

  return Object.freeze({
    put,
    get,
    clear,
    getKeys,
    usage
  })
}
