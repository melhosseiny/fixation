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
        <button @click="${data.exportData}" class="mdc-button mdc-button--unelevated record-button">
          <span class="mdc-button__label">Export</span>
        </button>
        <button @click="${data.deleteData}" class="mdc-button mdc-button--unelevated record-button">
          <span class="mdc-button__label">Clear</span>
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
      <div>Quota: ${quotaInMib} Mib</div>
      <div>Usage: ${usageInMib} Mib (${percentUsed}%)</div>
    `
  }
}
