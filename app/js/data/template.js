import {html} from 'lit-html';

export const template = (data) => html`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <div id="drop">Import data</div>
        <progress value="${data.progress}" max="100"></progress>
        ${getFileInfo(data)}
        <h2>Cache Content</h2>
        <div>Frames: ${data.max}</div>
        <div>Duration: ${data.totalTime}</div>
        <h2>Storage usage</h2>
        ${getUsage(data)}
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <button @click="${data.exportData}" class="mdc-button mdc-button--unelevated">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Export JSON</span>
        </button>
        <button @click="${data.deleteData}" class="mdc-button mdc-button--unelevated">
          <div class="mdc-button__ripple"></div>
          <i class="material-icons mdc-button__icon" aria-hidden="true">delete</i>
          <span class="mdc-button__label">Clear Cache</span>
        </button>
      </div>
    </div>
  </div>
`;

let getFileInfo = function(data) {
  if (!data.f) {
    return html``
  } else {
    return html`
      <div>Name: ${data.f.name}</div>
      <div>Type: ${data.f.type}</div>
    `
  }
}

let getUsage = function(data) {
  console.log("getUsage", data);

  if (!data.usage) {
    return html``
  } else {
    const { quota, usage, usageDetails } = data.usage;

    const quotaInMib = Math.round(quota / (1024 * 1024));
    const usageInMib = Math.round(usage / (1024 * 1024));
    const percentUsed = Math.round(usage / quota * 100);

    return html`
      <div>Usage: ${usageInMib} Mib (${percentUsed}%)</div>
      <div role="progressbar" class="mdc-linear-progress" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
      <div>Quota: ${quotaInMib} Mib</div>
    `
  }
}
