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
        <button @click="${data.toggleShowHeatmap}" id="heatmap-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch" aria-checked="false">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__shadow">
                <div class="mdc-elevation-overlay"></div>
              </div>
              <div class="mdc-switch__ripple"></div>
              <div class="mdc-switch__icons">
                <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                  <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                </svg>
                <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                  <path d="M20 13H4v-2h16v2z" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <label for="heatmap-switch">Show heatmap</label>
        <h5>Share</h5>
        <button @click="${data.toggleExportToVideo}" id="export-switch" class="mdc-switch mdc-switch--disabled" type="button" role="switch" aria-checked="false">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__shadow">
                <div class="mdc-elevation-overlay"></div>
              </div>
              <div class="mdc-switch__ripple"></div>
              <div class="mdc-switch__icons">
                <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                  <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                </svg>
                <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                  <path d="M20 13H4v-2h16v2z" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <label for="export-switch">Export to video</label>
        ${
          data.exportToVideo
            ? html`<video id="captured-video" autoplay controls></video>`
            : ``
        }
        <h5>Buffer Health</h5>
        <canvas id="buffer" width="30" height="30"></canvas>
      </div>
    </div>
  </div>
`;

let fullscreen = function() {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen()
}
