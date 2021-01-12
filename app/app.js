import {html, render} from 'lit-html';
import {installRouter} from 'pwa-helpers/router.js';

import {DEVICE_WIDTH, DEVICE_HEIGHT} from './geo.js';

import {MDCRipple} from '@material/ripple/index';
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCSwitch} from '@material/switch';
import {MDCSnackbar} from '@material/snackbar';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

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

const loadPage = async function(page) {
  switch(page) {
    case 'diagnosis':
      const {Diagnosis} = await import('./diagnosis/diagnosis.js');
      let diagnosis = Diagnosis({});
      active = diagnosis;
      let modeControl = new MDCSwitch(document.querySelector('.mdc-switch'));
      diagnosis.connect(document.getElementById('a').getContext('2d'));
      break;
    case 'record':
      const {Record} = await import('./record/record.js');
      let record = Record({});
      active = record;
      record.connect();

      const player = document.getElementById('player');
      const user = document.getElementById('user');

      navigator.mediaDevices.getDisplayMedia({
        video: {
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
          resize: 'none',
          cursor: 'never'
        }
      }).then((stream) => {
        player.srcObject = stream;
      }).catch((err) => {
        snackbar.labelText = 'You must share your screen to record.';
        snackbar.open();
        console.log("Screen media:", err);
      });

      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 640,
          height: 480
        }
      }).then((stream) => {
        user.srcObject = stream;
      }).catch((err) => {
        snackbar.labelText = 'User cam not available.';
        snackbar.open();
        console.log("User media:", err);
      });
      break;
    case 'replay':
      const {Replay} = await import('./replay/replay.js');
      let replay = Replay({});
      active = replay;
      let heatmapControl = new MDCSwitch(document.querySelector('#mdc-switch-heatmap'));
      let exportControl = new MDCSwitch(document.querySelector('#mdc-switch-export'));
      replay.connect(document.getElementById('a').getContext('2d'));
      break;
    case 'data':
      const {Data} = await import('./data/data.js');
      let data = Data({});
      active = data;
      data.connect();
      break;
    default:
      const {Lost} = await import('./lost/lost.js');
      page = 'view404';
      let lost = Lost({});
  }
}

installRouter((location) => handleNavigation(location));
