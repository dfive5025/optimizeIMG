if(!self.define){let e={};const n=(n,t)=>(n=n.startsWith(location.origin)?n:new URL(n+".js",t).href,e[n]||new Promise((e=>{if("document"in self){const t=document.createElement("link");t.rel="preload",t.as="script",t.href=n,t.onload=()=>{const t=document.createElement("script");t.src=n,t.onload=e,document.head.appendChild(t)},document.head.appendChild(t)}else self.nextDefineUri=n,importScripts(n),e()})).then((()=>{let t=e[n];if(!t)throw new Error(`Module ${n} didn’t register its module`);return t})));self.define=(t,r)=>{const i=self.nextDefineUri||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const s=e=>n(e,i),a={module:{uri:i},exports:o,require:s};e[i]=Promise.resolve().then((()=>Promise.all(t.map((e=>a[e]||s(e)))))).then((e=>(r(...e),o)))}}define(["require"],(function(e){var n,t;(n=self,t="wasm_bindgen_worker_init",new Promise((e=>{n.addEventListener("message",(function r({data:i}){null!=i&&i.type===t&&(n.removeEventListener("message",r),e(i))}))}))).then((async n=>{const t=await e("./squoosh_oxipng-6f351771");await t.default(n.module,n.memory),postMessage({type:"wasm_bindgen_worker_ready"}),t.wbg_rayon_start_worker(n.receiver)}))}));
