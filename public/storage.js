const IMAGE_TYPE = 'image/webm';
const IMAGE_QUALITY = 0.8;

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

let load = 0;
const canvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

onmessage = function(e) {
  load++;
  postMessage(load);
  let document = e.data;

  canvas.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(document.pxls), CANVAS_WIDTH, CANVAS_HEIGHT), 0, 0);

  delete document.pxls;
  canvas.convertToBlob({type: IMAGE_TYPE, quality: IMAGE_QUALITY}).then(function(blob) {
    let reader = new FileReader();
    reader.addEventListener('loadend', function() {
      document.img = reader.result;
      caches.open('gaze').then((cache) => {
        cache.put('/gaze/' + document.id, new Response(JSON.stringify(document)));

        load--;
        postMessage(load);
      })
    });
    reader.readAsDataURL(blob);
  });
}
