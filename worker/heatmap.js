//importScripts('bundle.js')
const DEVICE_WIDTH = 1920;
const DEVICE_HEIGHT = 1080;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const GT_BASE = [30, 15];
const GT_CONSIDER = [20, 20];

let surface = Rect({x: 0, y: 0, width: CANVAS_WIDTH, height: CANVAS_HEIGHT});
let tiles = surface.tiles().map(t => Rect(t));

function Rect(spec = {x: 0, y: 0, width: 0, height: 0}) {
  let {x, y, width, height} = spec;

  let getX = function() { return x; }
  let getY = function() { return y; }
  let getWidth = function() { return width; }
  let getHeight = function() { return height; }

  let containsPoint = function(px, py) {
    let w = width;
    let h = height;

    // At least one of the dimensions is negative
    if ((w | h) < 0) { return false; }

    // Note: if either dimension is zero, tests below must return false
    if (px < x || py < y) { return false; }
    w += x;
    h += y;
    // overflow || intersect
    return ((w < x || w > px) && (h < y || h > py));
  }

  let tiles = function(tileSize = GT_BASE) {
    let tiles = [];
    let start = {x: x, y: y};
    let shift = false;

    while (start.y < y + height) {
      let rectangle = {x: start.x, y: start.y, width: tileSize[0], height: tileSize[1]};
      tiles.push(rectangle);

      start.x = rectangle.x + rectangle.width;

      if(start.x >= x + width) {
        shift = !shift;
        start.y += tileSize[1];
        start.x = shift ? x - (tileSize[0] / 2) : 0;
      }
    }

    return tiles;
  }

  return Object.freeze({
    getX,
    getY,
    getWidth,
    getHeight,
    tiles,
    containsPoint,
  });
}

onmessage = function(e) {
  let count = e.data.count;
  let gaze = new Float32Array(e.data.gaze);

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].containsPoint(gaze[0]*CANVAS_WIDTH, gaze[1]*CANVAS_HEIGHT)) {
      count[i] += 1;
    }
  }

  postMessage(count, [count.buffer]);
}
