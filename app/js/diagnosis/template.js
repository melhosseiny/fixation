import {html} from 'lit-html';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <canvas @click="${fullscreen}" id="a" width="1280" height="720"></canvas>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <div class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.setMode}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Detect fixations</label>
        <h5>Timeline</h5>
        <canvas id="gaze-x" width="100" height="30"></canvas>
        <canvas id="gaze-y" width="100" height="30"></canvas>
        <h5>Calibration</h5>
        <button @click="${data.calibrate}" class="mdc-button mdc-button--unelevated">
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
