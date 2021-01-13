const BUFFER_SIZE = 24;

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
      frames.push(frame);
    }
  }

  frames = frames.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
  postMessage(frames);
}
