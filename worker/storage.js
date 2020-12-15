const IMAGE_TYPE = 'image/webm';
const IMAGE_QUALITY = 0.8;

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

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
      const documentStr = JSON.stringify(document);
      // avoid JSON.Stringifying large object
      const responseStr = reader.result
        ? documentStr.substring(0,documentStr.length-1) + ',"img":"'+reader.result+'"}'
        : documentStr;
      caches.open('gaze').then((cache) => {
        cache.put('/gaze/' + document.id, new Response(responseStr)).catch(function() {});

        load--;
        postMessage(load);
      });
    });
    reader.readAsDataURL(blob);
  })
}
