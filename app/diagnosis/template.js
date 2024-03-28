import {html} from 'lit-html';

import {CANVAS_WIDTH, CANVAS_HEIGHT} from '../geo.js';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <canvas @click="${fullscreen}" id="a" width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}"></canvas>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <button @click="${data.setMode}" id="basic-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch" aria-checked="false">
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
        <label for="basic-switch">Detect fixations</label>
        <h5>Timeline</h5>
        <canvas id="gaze-x" width="100" height="30"></canvas>
        <canvas id="gaze-y" width="100" height="30"></canvas>
        <h5>Calibration</h5>
        <button @click="${data.calibrate}" class="mdc-button mdc-button--unelevated">
          <div class="mdc-button__ripple"></div>
          <i class="material-icons mdc-button__icon" aria-hidden="true">adjust</i>
          <span class="mdc-button__label">Inspect calibration</span>
        </button>
      </div>
    </div>
  </div>
`;

let fullscreen = function() {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen()
}
