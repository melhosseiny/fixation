(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{14:function(e,t,n){"use strict";function a(e={}){let t=0;return Object.freeze({put:function(e){caches.open("gaze").then(n=>{n.put("/gaze/"+t,new Response(e)),t+=1})},get:async function(e,t){const n=await caches.open("gaze"),a=await n.match(new Request("/gaze/"+e));a?a.json().then(e=>t(e)):t(void 0)},clear:async function(e,t){caches.delete(e).then(e=>t(e))},getKeys:async function(e,t){(await caches.open(e)).keys().then(e=>t(e))},usage:function(e){return navigator.storage.estimate()}})}n.d(t,"a",(function(){return a}))},71:function(e,t,n){"use strict";n.r(t),n.d(t,"Data",(function(){return d}));var a=n(14),o=n(0),s=n(28);let c=function(e){return e.f?o.a`
      <div>Name: ${e.f.name}</div>
      <div>Type: ${e.f.type}</div>
    `:o.a``},r=function(e){if(console.log("getUsage",e),e.usage){const{quota:t,usage:n,usageDetails:a}=e.usage,s=Math.round(t/1048576),c=Math.round(n/1048576),r=Math.round(n/t*100);return o.a`
      <div>Quota: ${s} Mib</div>
      <div>Usage: ${c} Mib (${r}%)</div>
    `}return o.a``};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){let t=Object(a.a)({}),n=[];let d=function(){t.clear("gaze",e=>{console.log("cache deleted",e)})},l=function(t){document.getElementById("drop").classList.remove("dragover"),console.log("file dropped",t),t.stopPropagation(),t.preventDefault();let n=t.dataTransfer.files[0];e.f=n;let a=new FileReader;a.onload=function(e){console.log("file loaded",e);const t=JSON.parse(e.target.result);d(),t.forEach((e,t)=>{caches.open("gaze").then(n=>{n.put("/gaze/"+t,new Response(JSON.stringify(e)))})})},a.onprogress=function(t){if(t.lengthComputable){const n=Math.round(t.loaded/t.total*100);console.log(n),e.progress=n,p(e)}},a.readAsText(n),p(e)},u=function(e){document.getElementById("drop").classList.add("dragover"),e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},g=function(e){document.getElementById("drop").classList.remove("dragover"),e.stopPropagation(),e.preventDefault()},p=e=>{Object(o.b)((e=>o.a`
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-8">
        <div id="drop">Import data</div>
        <progress value="${e.progress}" max="100"></progress>
        ${c(e)}
        <h2>Cache Content</h2>
        <div>Frames: ${e.max}</div>
        <div>Duration: ${e.totalTime}</div>
        <h2>Storage usage</h2>
        ${r(e)}
      </div>
      <div class="mdc-layout-grid__cell--span-4">
        <button @click="${e.exportData}" class="mdc-button mdc-button--unelevated record-button">
          <span class="mdc-button__label">Export</span>
        </button>
        <button @click="${e.deleteData}" class="mdc-button mdc-button--unelevated record-button">
          <span class="mdc-button__label">Clear</span>
        </button>
      </div>
    </div>
  </div>
`)(e),document.getElementById("view"))};i(e,{max:1e3,exportData:function(){var e,t,a,o,c;e=JSON.stringify(n),t="experiment"+s.DateTime.local().toMillis()+".json",a="text/json",o=document.createElement("a"),c=new Blob([e],{type:a}),o.href=URL.createObjectURL(c),o.download=t,o.click(),console.log(n)},deleteData:d}),p(e);return Object.freeze({connect:async function(a){p(e);const o=await t.usage();console.log("usage",o),e.usage=o,t.getKeys("gaze",a=>{e.max=a.length,p(e),console.log("max",e.max),function(a){for(let o=a;o<=e.max;o++)t.get(o,t=>{t&&(n.push(t),n.length===e.max&&(e.totalTime=s.Duration.fromMillis(n[e.max-1].timestamp-n[0].timestamp).toFormat("hh:mm:ss"),p(e),console.log("max reached")))})}(0)});let c=document.getElementById("drop");c.addEventListener("dragover",u,!1),c.addEventListener("dragleave",g,!1),c.addEventListener("drop",l,!1)},disconnect:function(){console.log("disconnect from data")}})}}}]);
//# sourceMappingURL=6.bundle.js.map