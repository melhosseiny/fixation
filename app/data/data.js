import {Storage} from '../storage.js';

import {render as renderTmpl} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js';

import {MDCSnackbar} from '@material/snackbar';
import { MDCLinearProgress } from '@material/linear-progress';

const snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
let linearProgress;

export function Data(spec) {
  let storage = Storage({});
  let frames = [];

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    snackbar.labelText = 'Exporting data ...';
    snackbar.open();
  }

  let exportData = function() {
    let dataStr = '[';
    let i = 0;
    for (i=0; i < frames.length - 1; i++) {
      //console.log(frames[i],i);
      dataStr += JSON.stringify(frames[i]) + ',';
    }
    dataStr += JSON.stringify(frames[i]) + ']';
    download(dataStr, 'experiment' + DateTime.local().toMillis() + '.json', 'text/json');
  }

  let deleteData = function() {
    storage.clear("gaze", async deleted => {
      console.log("cache deleted", deleted);
      if (deleted) {
        snackbar.labelText = 'Cache cleared.';
        snackbar.open();
        spec.totalTime = '--:--:--';
        getCacheInfo();
      } else {
        snackbar.labelText = 'Failed to clear cache or not found.';
        snackbar.open();
      }
    });
  }

  let getCacheInfo = function() {
    storage.getKeys("gaze", (keys) => {
      spec.max = keys.length;
      render(spec);
      console.log("max", spec.max);
      storage.get(0, (first) => {
        if (first) {
          const tf = first.timestamp;
          storage.get(spec.max-1, (last) => {
            if (last) {
              const tl = last.timestamp;
              spec.totalTime = Duration.fromMillis(tl - tf).toFormat("hh:mm:ss");
              render(spec);
              load(0);
            }
          })
        }
      });
    });
  }

  let load = function(start) {
    frames = [];

    for (let frame=start; frame <= spec.max; frame++) {
      storage.get(frame, (v) => {
        if (v) {
          frames.push(v);
          console.log(frames.length, spec.max);
          if (frames.length === spec.max) {
            console.log("max reached");
          }
        }
      });
    }
  }

  let handleFileSelect = function(evt) {
    document.getElementById('drop').classList.remove('dragover');
    console.log("file dropped", evt);
    evt.stopPropagation();
    evt.preventDefault();

    let files = evt.dataTransfer.files; // FileList object.
    let file = files[0];
    spec.f = file;

    let reader = new FileReader();

    reader.onload = function(e) {
      console.log("file loaded", e);
      const data = JSON.parse(e.target.result);
      storage.clear("gaze", deleted => {
        if (deleted) {
          getCacheInfo();
        }
      });
      data.forEach((document, id) => {
        caches.open('gaze').then((cache) => {
          cache.put('/gaze/' + id, new Response(JSON.stringify(document)));
        })
      })
    }
    reader.onprogress = function(e) {
      if (e.lengthComputable) {
        const percentLoaded = Math.round((e.loaded / e.total) * 100);
        console.log(percentLoaded);
        spec.progress = percentLoaded;
        render(spec);
      }
    }

    reader.readAsText(file);
    render(spec);
  }

  let handleDragOver = function(evt) {
    document.getElementById('drop').classList.add('dragover');
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  let handleDragLeave = function(evt) {
    document.getElementById('drop').classList.remove('dragover');
    evt.stopPropagation();
    evt.preventDefault();
  }

  let render = data => {
    renderTmpl(template(data), document.getElementById('view'));
  }

  let init = () => {
    Object.assign(spec, {
      max: 1000,
      totalTime: '--:--:--',
      exportData,
      deleteData
    });
    render(spec);
  }

  init();

  let connect = async function(context) {
    spec.usage = await storage.usage();
    console.log("usage", spec.usage);

    render(spec);

    linearProgress = MDCLinearProgress.attachTo(document.querySelector('.mdc-linear-progress'));
    linearProgress.progress = spec.usage.usage / spec.usage.quota;

    console.log(spec.usage.usage / spec.usage.quota);

    getCacheInfo();

    // Setup the dnd listeners.
    let dropZone = document.getElementById('drop');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
  }

  let disconnect = function() {
    console.log("disconnect from data");
  }

  return Object.freeze({
    connect,
    disconnect
  });
}
