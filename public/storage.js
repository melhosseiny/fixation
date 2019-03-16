let id = 0;

onmessage = function(e) {
  let document = e.data;

  let canvas = new OffscreenCanvas(1280,720);
  let context = canvas.getContext('2d');
  context.putImageData(new ImageData(new Uint8ClampedArray(document.pxls), 1280, 720),0,0);
  delete document.pxls;
  canvas.convertToBlob({type: "image/webp", quality: 0.5}).then(function(blob) {
    let reader = new FileReader();
    reader.addEventListener("loadend", function() {
      document.img = reader.result;
      caches.open('gaze').then((cache) => {
        const options = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        cache.put('/gaze/' + id, new Response(JSON.stringify(document)));
        id = id + 1;
      })
    });
    reader.readAsDataURL(blob);
  });
}
