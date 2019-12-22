import {Storage} from '../storage.js';

import {render} from 'lit-html';
import {DateTime, Duration} from 'luxon';

import {template} from './template.js'

export function Data(spec) {
  let storage = Storage({});
  let frames = [];

  const data = {
    max: 1000,
    exportData: exportData,
    deleteData: deleteData
  }

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
    });
  }

  let load = function(start) {
    for (let frame=start; frame <= data.max; frame++) {
      storage.get(frame, (v) => {
        if (v) {
          frames.push(v);
          //console.log(frames.length);
          if (frames.length === data.max) {
            data.totalTime = Duration.fromMillis((frames[data.max-1].timestamp - frames[0].timestamp)).toFormat("hh:mm:ss");
            render(template(data), document.getElementById("view"));
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
    data.f = file;

    let reader = new FileReader();

    reader.onload = function(e) {
      console.log("file loaded", e);
      const data = JSON.parse(e.target.result);
      deleteData();
      data.forEach((document, id) => {
        caches.open('gaze').then((cache) => {
          const options = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          cache.put('/gaze/' + id, new Response(JSON.stringify(document)));
        })
      })
    }
    reader.onprogress = function(e) {
      if (e.lengthComputable) {
        const percentLoaded = Math.round((e.loaded / e.total) * 100);
        console.log(percentLoaded);
        data.progress = percentLoaded;
        render(template(data), document.getElementById("view"));
      }
    }

    reader.readAsText(file);
    render(template(data), document.getElementById("view"));
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

  let connect = async function(context) {
    render(template(data), document.getElementById("view"));
    const usage = await storage.usage();
    console.log("usage", usage);
    data.usage = usage;
    storage.getKeys("gaze", (keys) => {
      data.max = keys.length;
      render(template(data), document.getElementById("view"));
      console.log("max", data.max);
      load(0);
    });

    // Setup the dnd listeners.
    let dropZone = document.getElementById('drop');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
  }

  let disconnect = function() {
    //socket.disconnect();
    console.log("disconnect from data");
  }

  return Object.freeze({
    connect,
    disconnect
  });
}
