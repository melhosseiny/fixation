import {html} from 'lit-html';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-4">
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <video id="player" playsinline autoplay loop muted></video>
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        ${getRecordButton(data)}
        ${data.elapsed}
        <h5>System Health</h5>
        <canvas id="load" width="30" height="30"></canvas>
      </div>
    </div>
  </div>
`;

let getRecordButton = function(data) {
  //console.log("inspect", data.recording)
  if (!data.recording) {
    return html`
      <button @click="${data.toggleRecord}" ?disabled="${!data.connected}" class="mdc-button mdc-button--unelevated record-button">
        <div class="mdc-button__ripple"></div>
        <i class="material-icons mdc-button__icon" aria-hidden="true">fiber_manual_record</i>
        <span class="mdc-button__label">Record</span>
      </button>`
  } else {
    return html`
      <button @click="${data.toggleRecord}" class="mdc-button mdc-button--unelevated">
        <div class="mdc-button__ripple"></div>
        <i class="material-icons mdc-button__icon" aria-hidden="true">stop</i>
        <span class="mdc-button__label">Stop</span>
      </button>
    `
  }
}

let fullscreen = function() {
  const context = document.getElementById('a').getContext('2d');
  context.canvas.webkitRequestFullScreen()
}
