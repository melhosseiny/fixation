const IMAGE_TYPE = "image/webp";
const IMAGE_QUALITY = 0.8;

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

const USER_CANVAS_WIDTH = 640;
const USER_CANVAS_HEIGHT = 480;

let load = 0;
const canvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
const canvas2 = new OffscreenCanvas(USER_CANVAS_WIDTH, USER_CANVAS_HEIGHT);

onmessage = function(e) {
  load++;
  postMessage(load);
  let document = e.data;

  canvas.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(document.pxls), CANVAS_WIDTH, CANVAS_HEIGHT), 0, 0);
  canvas2.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(document.pxls2), USER_CANVAS_WIDTH, USER_CANVAS_HEIGHT), 0, 0);

  delete document.pxls;
  delete document.pxls2;

  canvas.convertToBlob({type: IMAGE_TYPE, quality: IMAGE_QUALITY}).then(function(blob) {
    let reader = new FileReader();
    reader.addEventListener('loadend', function() {
      canvas2.convertToBlob({type: IMAGE_TYPE, quality: IMAGE_QUALITY}).then(function(blob2) {
        let reader2 = new FileReader();
        reader2.addEventListener('loadend', function() {
          const documentStr = JSON.stringify(document);
          // avoid JSON.Stringifying large object
          const responseStr = reader.result
            ? documentStr.substring(0,documentStr.length-1) + ',"img":"'+reader.result + '","user_img":"'+reader2.result+'"}'
            : documentStr;
          caches.open('gaze').then((cache) => {
            cache.put('/gaze/' + document.id, new Response(responseStr)).catch(function() {});

            load--;
            postMessage(load);
          });
        });
        reader2.readAsDataURL(blob2);
      })
    });
    reader.readAsDataURL(blob);
  })
}
