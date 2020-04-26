import {render} from 'lit-html';

import {template} from './template.js'

export function Lost(spec) {
  let init = () => {
    render(template(spec), document.getElementById("view"));
  }

  init();

  return Object.freeze({});
}
