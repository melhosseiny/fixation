let load = 0;

onmessage = function(e) {
  load++;
  postMessage(load);
  let document = e.data;

  let canvas = new OffscreenCanvas(1280,720);
  let context = canvas.getContext('2d');
  context.putImageData(new ImageData(new Uint8ClampedArray(document.pxls), 1280, 720),0,0);

  delete document.pxls;
  canvas.convertToBlob({type: 'image/webp', quality: 0.5}).then(function(blob) {
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
