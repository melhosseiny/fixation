import {DEVICE_WIDTH, DEVICE_HEIGHT} from './geo.js';

export const DISPERSION_THRESHOLD = 50; // pixels
export const DURATION_THRESHOLD = 150; // ms
export const INIT_FIXATION_WINDOW = 10; // ~0.15 * 70Hz

export const REPLAY_FPS = 12;

export function GazePoint(spec = {x: 0, y: 0, t: 0}) {
  let {x,y,t} = spec

  let getX = function() { return x; }
  let getY = function() { return y; }
  let getTimestamp = function() { return t; }

  return Object.freeze({
    getX,
    getY,
    getTimestamp
  })
}

export function Fixation(spec = {x: 0, y: 0, t: 0, d: 0}) {
  let {x,y,t,d} = spec;

  let getX = function() { return x; }
  let getY = function() { return y; }
  let getTimestamp = function() { return t; }
  let getDuration = function() { return d; }

  let getFixation = function() {
    return {x: x, y: y};
  }

  return Object.freeze({
    getX,
    getY,
    getTimestamp,
    getDuration,
    getFixation
  })
}

export function GazeWindow(spec = {points: []}) {
  let {points} = spec;

  let dispersion = function() {
    let pointsX = points.map(p => p.getX() * DEVICE_WIDTH);
    let pointsY = points.map(p => p.getY() * DEVICE_HEIGHT);

    return (Math.max(...pointsX) - Math.min(...pointsX)) + (Math.max(...pointsY) - Math.min(...pointsY));
  }

  let centroid = function() {
    let pointsX = points.map(p => p.getX());
    let pointsY = points.map(p => p.getY());

    return Fixation({
      x: +(pointsX.reduce((a,b) => a+b) / pointsX.length).toFixed(6),
      y: +(pointsY.reduce((a,b) => a+b) / pointsY.length).toFixed(6),
      t: +(points[0].getTimestamp()).toFixed(6),
      d: +(points[points.length-1].getTimestamp() - points[0].getTimestamp()).toFixed(6)
    })
  }

  let detector = function() {
    if (dispersion() > DISPERSION_THRESHOLD) {
      return centroid();
    }
    return false;
  }

  return Object.freeze({
    detector
  })
}
