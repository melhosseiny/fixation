export function Algorithm(spec = {}) {
  let relative = function(a, x, b) {
    return (x - a) / (b - a);
  }

  let limit = function(a, x, b) {
    if(x < a) return a;
    if(x > b) return b;
    return x;
  }

  let normalize = function(x, min, max) {
    if (x < min) { x = min; }
    if (x > max) { x = max; }
    return (x - min) / (max - min);
  }

  return Object.freeze({
    relative,
    limit,
    normalize
  });
}
