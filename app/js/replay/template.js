import {html} from 'lit-html';

import {CANVAS_WIDTH, CANVAS_HEIGHT} from '../geo.js';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <canvas @click="${fullscreen}" id="a" width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}"></canvas>
        <div id="canvas-ctrl">
          <button @click="${data.play}" ?disabled="${!data.loaded}" class="mdc-icon-button material-icons">${data.playing? html`stop`: html`play_arrow`}</button>
          <input id="seek" ?disabled="${!data.loaded}" @input="${data.seek}" .value="${data.position}" max="${data.max}" type="range" style="${data.seekStyle}">
          <span id="time">${data.time}</span>
          <span id="total-time">&nbsp;/ ${data.totalTime}</span>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <div id="mdc-switch-heatmap" class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.toggleShowHeatmap}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Show heatmap</label>
        <h5>Share</h5>
        <div id="mdc-switch-export" class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.toggleExportToVideo}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Export to video</label>
        ${
          data.exportToVideo
            ? html`<video id="captured-video" autoplay controls></video>`
            : ``
        }
      </div>
    </div>
  </div>
`;

let fullscreen = function() {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen()
}
