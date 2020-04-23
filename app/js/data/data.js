import {Storage} from '../storage.js';

import {render as renderTmpl} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js';

import { MDCLinearProgress } from '@material/linear-progress';

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
  }

  let exportData = function() {
    download(JSON.stringify(frames), 'experiment' + DateTime.local().toMillis() + '.json', 'text/json');
    console.log(frames);
  }

  let deleteData = function() {
    storage.clear("gaze", (deleted) => {
      console.log("cache deleted", deleted);
      render(spec);
    });
  }

  let load = function(start) {
    for (let frame=start; frame <= spec.max; frame++) {
      storage.get(frame, (v) => {
        if (v) {
          frames.push(v);
          //console.log(frames.length);
          if (frames.length === spec.max) {
            spec.totalTime = Duration.fromMillis((frames[spec.max-1].timestamp - frames[0].timestamp)).toFormat("hh:mm:ss");
            render(spec);
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
      deleteData();
      data.forEach((document, id) => {
        caches.open('gaze').then((cache) => {
          /*const options = {
            headers: {
              'Content-Type': 'application/json'
            }
          }*/
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
    const usage = await storage.usage();
    console.log("usage", usage);
    spec.usage = usage;

    render(spec);

    linearProgress = MDCLinearProgress.attachTo(document.querySelector('.mdc-linear-progress'));
    linearProgress.progress = usage.usage / usage.quota;

    console.log(usage.usage / usage.quota);

    storage.getKeys("gaze", (keys) => {
      spec.max = keys.length;
      render(spec);
      console.log("max", spec.max);
      load(0);
    });

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
