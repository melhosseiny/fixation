import {html} from 'lit-html';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <canvas @click="${fullscreen}" id="a" width="1280" height="720"></canvas>
        <div id="canvas-ctrl">
          <button @click="${data.play}" class="mdc-icon-button material-icons">${data.playing? html`stop`: html`play_arrow`}</button>
          <input id="seek" @input="${data.seek}" .value="${data.position}" max="${data.max}" type="range" style="${data.seekStyle}">
          <span id="time">${data.time}</span>
          <span id="total-time">&nbsp;/ ${data.totalTime}</span>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <div class="mdc-switch">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
              <input @click="${data.showHeatmap}" type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
            </div>
          </div>
        </div>
        <label for="basic-switch">Show Heatmap</label>
      </div>
    </div>
  </div>
`;

let fullscreen = function() {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen()
}
