import {Algorithm} from './algorithm.js'

export const RAW_DATA_COLOR = 'rgba(200,0,0,0.85)';
export const FIXATION_COLOR = 'rgba(255,255,255,0.85)';
export const SACCADE_COLOR = 'rgba(255,255,255,0.85)';
export const CLEAR_COLOR = 'rgb(0,0,0)';

export const LOW_LOAD_COLOR = 'rgba(0, 200, 0, 0.85)';
export const MEDIUM_LOAD_COLOR = 'rgba(200, 200, 0, 0.85)';
export const HIGH_LOAD_COLOR = 'rgba(200, 0, 0, 0.85)';

export const DIFFERENT_COLORS = [];
export const HEATMAP_COLORS = [];

function hsv2hsl(hue,sat,val) {
  return [
    hue,
    sat*val/((hue=(2-sat)*val)<1?hue:2-hue),
    hue/2
  ]
}

for (var i = 0; i < 10; i++) {
  var h = (i * 0.618033988749895) % 1.0;
  var s = 0.5;
  var v = Math.sqrt(1.0 - ((i * 0.618033988749895) % 0.5));
  var a = 0.5;

  var hsl = hsv2hsl(h,s,v);

  DIFFERENT_COLORS.push('hsla(' + Math.round(hsl[0]*255) + ',' + Math.round(hsl[1]*100) + '%,' + Math.round(hsl[2]*100) + '%,' + a + ')');
}

for (let h = 0; h < 210; h++) {
  HEATMAP_COLORS.push('hsla(' + (209 - h) + ', 50%, 50%,'+ 0.5 +')');
}

export function Color(spec = {}) {
  let algorithm = Algorithm({});

  let heat = function(rel) {
    let d = algorithm.limit(0, rel, 1)
    if (rel === 0) return 'rgba(0,0,0,0)';
    return HEATMAP_COLORS[Math.round((d * (HEATMAP_COLORS.length - 1)))];
  }

  return Object.freeze({
    heat
  });
}
