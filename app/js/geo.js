import {CLEAR_COLOR} from './color.js';
import {Color} from './color.js';
import {Algorithm} from './algorithm.js';

export const DEVICE_WIDTH = window.screen.width * window.devicePixelRatio;
export const DEVICE_HEIGHT = window.screen.height * window.devicePixelRatio;

export const CANVAS_WIDTH = DEVICE_WIDTH / 2;
export const CANVAS_HEIGHT = DEVICE_HEIGHT / 2;

let color = Color({});
let algorithm = Algorithm({});

export function Point(spec = {x: 0, y: 0}) {
  let {x, y} = spec;

  let getX = function() { return x; }
  let getY = function() { return y; }

  let render = function(context, fillStyle) {
    context.fillStyle = fillStyle;
    context.fillRect(x*context.canvas.width, y*context.canvas.height, 0.005*context.canvas.width, 0.005*context.canvas.width);
  }

  return Object.freeze({
    getX,
    getY,
    render
  });
}

export function Points(spec = {points: []}) {
  let {points} = spec;

  let render = function(context, fillStyle) {
    context.fillStyle = fillStyle;
    points.forEach(function(p) {
      p.render(context, fillStyle);
    })
  }

  let renderTimeline = function(context, axis, fillStyle) {
    context.fillStyle = fillStyle;
    points.forEach(function(p, i) {
      let dim = axis === 0? p.getX() : p.getY();
      context.fillRect((i/points.length)*context.canvas.width, (1-dim)*context.canvas.height, context.canvas.width/points.length, 1);
    })
  }

  return Object.freeze({
    render,
    renderTimeline
  });
}

export function Line(spec = {x1: 0, y1: 0, x2: 0, y2: 0}) {
  let {x1, y1, x2, y2} = spec;

  let render = function(context, strokeStyle) {
    context.strokeStyle = strokeStyle
    context.beginPath();
    context.moveTo(x1*context.canvas.width, y1*context.canvas.height);
    context.lineTo(x2*context.canvas.width, y2*context.canvas.height);
    context.stroke();
  }

  return Object.freeze({
    render
  });
}

export function Circle(spec = {x: 0, y: 0, r: 0}) {
  let {x, y, r} = spec;

  let getX = function() { return x; }
  let getY = function() { return y; }
  let getR = function() { return r; }

  let render = function(context, strokeStyle, fillStyle) {
    context.beginPath();
    context.arc(x*context.canvas.width, y*context.canvas.height, r, 0, 2 * Math.PI);
    if (fillStyle) {
      context.fillStyle = fillStyle;
      context.fill();
    }
    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.stroke();
    }
  }

  return Object.freeze({
    getX,
    getY,
    getR,
    render
  });
}

const GT_BASE = [30, 15]
const GT_CONSIDER = [20, 20]

export function Rect(spec = {x: 0, y: 0, width: 0, height: 0}) {
  let {x, y, width, height} = spec;

  let getX = function() { return x; }
  let getY = function() { return y; }
  let getWidth = function() { return width; }
  let getHeight = function() { return height; }

  let clear = function(context, fillStyle) {
    if (fillStyle) context.fillStyle = fillStyle;
    else context.fillStyle = CLEAR_COLOR;
    context.fillRect(0, 0, width, height);
  }

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

  let render = function(context, strokeStyle, fillStyle) {
    if (strokeStyle) {
      context.strokeStyle = strokeStyle;
      context.strokeRect(x, y, width, height);
    }
    if (fillStyle) {
      context.fillStyle = fillStyle;
      context.fillRect(x, y, width, height);
    }
  }

  return Object.freeze({
    getX,
    getY,
    getWidth,
    getHeight,
    clear,
    tiles,
    containsPoint,
    render
  });
}

export function Heatmap(spec = {tiles: []}) {
  let {tiles} = spec;
  let count = new Uint16Array(new ArrayBuffer(tiles.length*2));
  let countClone = new Uint16Array(new ArrayBuffer(tiles.length*2));

  let getCount = function(i) { return count[i]; }
  let setCount = function(i, c) { count[i] = c; }
  let getCountArr = function() { return count; }
  let setCountArr = function(c) { count = c; }

  let reset = function() {
    count = new Uint16Array(new ArrayBuffer(tiles.length*2));
    countClone = new Uint16Array(new ArrayBuffer(tiles.length*2));
  }

  let render = function(context) {
    let count2 = count.buffer.byteLength !== 0? count : countClone;
    let global_max = Math.max(...count2);

    if (global_max !== 0) {
      tiles.forEach(function(tile, i) {
        if (count2[i]) {
          let h = color.heat(algorithm.relative(0,count2[i],global_max));
          tile.render(context, undefined, h);
        }
      });
    }
  }

  let clone = function() {
    if (count.buffer.byteLength !== 0) {
      countClone = count.slice(0);
    };
  }

  return Object.freeze({
    getCount,
    setCount,
    getCountArr,
    setCountArr,
    reset,
    render,
    clone
  });
}

/* ANIMATION */
export function Ease(spec = {}) {
  let linear = function(t,b,e,d) {
    return (e-b)*t/d + b;
  }

  return Object.freeze({
    linear
  });
}
