importScripts('bundle.js')

let surface = Rect({x: 0, y: 0, width: 1920, height: 1080});
let tiles = surface.tiles().map(t => Rect(t));

onmessage = function(e) {
  let count = e.data.count
  let gaze_x = new Float32Array(e.data.gaze_x)
  let gaze_y = new Float32Array(e.data.gaze_y)

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].containsPoint(gaze_x, gaze_y) {
      count[i] += 1;
    }
  }

  postMessage(count, [count.buffer])
}
