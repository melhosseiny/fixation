import {html, render} from 'lit-html';
import {installRouter} from 'pwa-helpers/router.js';

import {MDCRipple} from '@material/ripple/index';
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCSwitch} from '@material/switch';

import {Diagnosis} from './diagnosis/diagnosis.js';
import {Record} from './record/record.js';
import {Replay} from './replay/replay.js';
import {Lost} from './lost/lost.js';
import {Data} from './data/data.js';

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('view'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const listEl = document.querySelector('.mdc-drawer .mdc-list');
listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

const template = (data) => html`
  ${data.title}
`

let toTitleCase = function(s) {
  return s[0].toUpperCase() + s.substr(1).toLowerCase();
}

let active = undefined;

let handleNavigation = function(location) {
  console.log("handle", location);
  if (active) { active.disconnect() };
  navigate(decodeURIComponent(location.pathname));
};

let navigate = function(path) {
  const page = path === '/' ? 'diagnosis' : path.slice(1);
  console.log("page", page);
  loadPage(page);
  render(template({title: "Fixation - " + toTitleCase(page)}), document.getElementsByTagName("title")[0]);
  render(template({title: toTitleCase(page)}), document.getElementsByClassName("mdc-top-app-bar__title")[0]);
}

const loadPage = function(page) {
  switch(page) {
    case 'diagnosis':
      let diagnosis = Diagnosis({});
      active = diagnosis;
      let modeControl = new MDCSwitch(document.querySelector('.mdc-switch'));
      diagnosis.connect(document.getElementById('a').getContext('2d'));
      break;
    case 'record':
      let record = Record({});
      active = record;
      record.connect();

      const player = document.getElementById('player');

      navigator.mediaDevices.getDisplayMedia({video: true})
        .then((stream) => {
          player.srcObject = stream;
        })
        .catch((err) => {
          console.log("Screen media:", err);
        });
      break;
    case 'replay':
      let replay = Replay({});
      active = replay;
      let heatmapControl = new MDCSwitch(document.querySelector('.mdc-switch'));
      replay.connect(document.getElementById('a').getContext('2d'));
      break;
    case 'data':
      let data = Data({});
      active = data;
      data.connect();
      break;
    default:
      page = 'view404';
      let lost = Lost({});
  }
}

installRouter((location) => handleNavigation(location));
