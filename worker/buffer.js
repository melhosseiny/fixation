const BUFFER_SIZE = 24;

//const IMAGE_TYPE = 'image/webm';

//const CANVAS_WIDTH = 1920;
//const CANVAS_HEIGHT = 1080;

onmessage = async function(e) {
  let {start} = e.data;
  let frames = [];

  const cache = await caches.open('gaze');
  const keys =  await cache.keys();
  const max = keys.length;

  for (let id=start; id < start + BUFFER_SIZE && id < max ; id++) {
    const response = await cache.match('/gaze/' + id, {
      ignoreMethod: true,
      ignoreVary: true
    });
    const frame = await response.json();

    if (frame) {
      frame.id = id;
      //frame.preloadedImg = await createImageBitmap(new Blob([base64ToUint8ClampedArray(frame.img).buffer], {type: 'image/webm'}));
      //const div = document.createElement('div');
      //div.style['background-image'] = 'url(https://mdn.mozillademos.org/files/16793/magicwand.png';
      //frame.preloadedImg = div.attributeStyleMap.get('background-image');
      //delete frame.img;
      frames.push(frame);
    }
  }

  frames = frames.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
  postMessage(frames);
}

//function base64ToUint8ClampedArray(base64) {
//  return Uint8ClampedArray.from(atob(base64.split(',')[1]), c => c.charCodeAt(0));
//}
