import {render} from 'lit-html';

import {template} from './template.js'

export function Lost(spec) {
  render(template(), document.getElementById("view"));

  let dummy = function() {
    return;
  }

  return Object.freeze({
    dummy
  });
}
