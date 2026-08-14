import{r as A,a as hp,u as Zo,R as Vu,b as yt,B as fp,c as pp}from"./react-vendor-C-40Ag1o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var Ou={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=A,gp=Symbol.for("react.element"),yp=Symbol.for("react.fragment"),wp=Object.prototype.hasOwnProperty,_p=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function Mu(n,e,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)wp.call(e,s)&&!vp.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:gp,type:n,key:i,ref:a,props:r,_owner:_p.current}}Ei.Fragment=yp;Ei.jsx=Mu;Ei.jsxs=Mu;Ou.exports=Ei;var c=Ou.exports,Ao={},Wc=hp;Ao.createRoot=Wc.createRoot,Ao.hydrateRoot=Wc.hydrateRoot;const Ip=()=>{};var Gc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},bp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],d=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;d||(S=64,a||(y=64)),s.push(t[p],t[m],t[y],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const m=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||m==null)throw new Ep;const y=i<<2|l>>4;if(s.push(y),h!==64){const S=l<<4&240|h>>2;if(s.push(S),m!==64){const x=h<<6&192|m;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tp=function(n){const e=Lu(n);return qu.encodeByteArray(e,!0)},Zr=function(n){return Tp(n).replace(/\./g,"")},zu=function(n){try{return qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=()=>Ap().__FIREBASE_DEFAULTS__,xp=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zu(n[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Ip()||Sp()||xp()||Cp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fu=n=>{var e,t;return(t=(e=Ti())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},kp=n=>{const e=Fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Uu=()=>{var n;return(n=Ti())==null?void 0:n.config},Bu=n=>{var e;return(e=Ti())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zr(JSON.stringify(t)),Zr(JSON.stringify(a)),""].join(".")}const Js={};function Rp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?n.emulator.push(e):n.prod.push(e);return n}function Dp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hc=!1;function Gu(n,e){if(typeof window>"u"||typeof document>"u"||!gs(window.location.host)||Js[n]===e||Js[n]||Hc)return;Js[n]=e;function t(y){return`__firebase__banner__${y}`}const s="__firebase__banner",i=Rp().prod.length>0;function a(){const y=document.getElementById(s);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function d(y,S){y.setAttribute("width","24"),y.setAttribute("id",S),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Hc=!0,a()},y}function p(y,S){y.setAttribute("id",S),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=Dp(s),S=t("text"),x=document.getElementById(S)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),V=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const z=y.element;l(z),p(R,P);const F=h();d(V,O),z.append(V,x,R,F),document.body.appendChild(z)}i?(x.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Vp(){var e;const n=(e=Ti())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Op(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ea(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lp(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qp(){return!Vp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ta(){try{return typeof indexedDB=="object"}catch{return!1}}function na(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Hu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="FirebaseError";class dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zp,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Fp(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new dt(r,l,s)}}function Fp(n,e){return n.replace(Up,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Up=/\{\$([^}]+)}/g;function Bp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if($c(i)&&$c(a)){if(!on(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function $c(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ws(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Gs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wp(n,e){const t=new Gp(n,e);return t.subscribe.bind(t)}class Gp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hp(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=co),r.error===void 0&&(r.error=co),r.complete===void 0&&(r.complete=co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=1e3,Qp=2,Kp=4*60*60*1e3,Jp=.5;function Qc(n,e=$p,t=Qp){const s=e*Math.pow(t,n),r=Math.round(Jp*s*(Math.random()-.5)*2);return Math.min(Kp,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Np;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zp(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xp(n){return n===Tn?void 0:n}function Zp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const tm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},nm=ce.INFO,sm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},rm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=sm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ai{constructor(e){this.name=e,this._logLevel=nm,this._logHandler=rm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const im=(n,e)=>e.some(t=>n instanceof t);let Kc,Jc;function om(){return Kc||(Kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function am(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,So=new WeakMap,Qu=new WeakMap,lo=new WeakMap,sa=new WeakMap;function cm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Zt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$u.set(t,n)}).catch(()=>{}),sa.set(e,n),e}function lm(n){if(So.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});So.set(n,e)}let xo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return So.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function um(n){xo=n(xo)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(uo(this),e,...t);return Qu.set(s,e.sort?e.sort():[e]),Zt(s)}:am().includes(n)?function(...e){return n.apply(uo(this),e),Zt($u.get(this))}:function(...e){return Zt(n.apply(uo(this),e))}}function hm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&lm(n),im(n,om())?new Proxy(n,xo):n)}function Zt(n){if(n instanceof IDBRequest)return cm(n);if(lo.has(n))return lo.get(n);const e=hm(n);return e!==n&&(lo.set(n,e),sa.set(e,n)),e}const uo=n=>sa.get(n);function Ku(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=Zt(a);return s&&a.addEventListener("upgradeneeded",d=>{s(Zt(a.result),d.oldVersion,d.newVersion,Zt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fm=["get","getKey","getAll","getAllKeys","count"],pm=["put","add","delete","clear"],ho=new Map;function Yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=pm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||fm.includes(t)))return;const i=async function(a,...l){const d=this.transaction(a,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&d.done]))[0]};return ho.set(e,i),i}um(n=>({...n,get:(e,t,s)=>Yc(e,t)||n.get(e,t,s),has:(e,t)=>!!Yc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function gm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Co="@firebase/app",Xc="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Ai("@firebase/app"),ym="@firebase/app-compat",wm="@firebase/analytics-compat",_m="@firebase/analytics",vm="@firebase/app-check-compat",Im="@firebase/app-check",bm="@firebase/auth",Em="@firebase/auth-compat",Tm="@firebase/database",Am="@firebase/data-connect",Sm="@firebase/database-compat",xm="@firebase/functions",Cm="@firebase/functions-compat",km="@firebase/installations",Nm="@firebase/installations-compat",Pm="@firebase/messaging",Rm="@firebase/messaging-compat",Dm="@firebase/performance",jm="@firebase/performance-compat",Vm="@firebase/remote-config",Om="@firebase/remote-config-compat",Mm="@firebase/storage",Lm="@firebase/storage-compat",qm="@firebase/firestore",zm="@firebase/ai",Fm="@firebase/firestore-compat",Um="firebase",Bm="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="[DEFAULT]",Wm={[Co]:"fire-core",[ym]:"fire-core-compat",[_m]:"fire-analytics",[wm]:"fire-analytics-compat",[Im]:"fire-app-check",[vm]:"fire-app-check-compat",[bm]:"fire-auth",[Em]:"fire-auth-compat",[Tm]:"fire-rtdb",[Am]:"fire-data-connect",[Sm]:"fire-rtdb-compat",[xm]:"fire-fn",[Cm]:"fire-fn-compat",[km]:"fire-iid",[Nm]:"fire-iid-compat",[Pm]:"fire-fcm",[Rm]:"fire-fcm-compat",[Dm]:"fire-perf",[jm]:"fire-perf-compat",[Vm]:"fire-rc",[Om]:"fire-rc-compat",[Mm]:"fire-gcs",[Lm]:"fire-gcs-compat",[qm]:"fire-fst",[Fm]:"fire-fst-compat",[zm]:"fire-vertex","fire-js":"fire-js",[Um]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map,Gm=new Map,No=new Map;function Zc(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(No.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,n);for(const t of ei.values())Zc(t,n);for(const t of Gm.values())Zc(t,n);return!0}function On(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Vn("app","Firebase",Hm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=Bm;function Ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ko,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw en.create("bad-app-name",{appName:String(r)});if(t||(t=Uu()),!t)throw en.create("no-options");const i=ei.get(r);if(i){if(on(t,i.options)&&on(s,i.config))return i;throw en.create("duplicate-app",{appName:r})}const a=new em(r);for(const d of No.values())a.addComponent(d);const l=new $m(t,s,a);return ei.set(r,l),l}function ra(n=ko){const e=ei.get(n);if(!e&&n===ko&&Uu())return Ju();if(!e)throw en.create("no-app",{appName:n});return e}function st(n,e,t){let s=Wm[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}Tt(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebase-heartbeat-database",Km=1,nr="firebase-heartbeat-store";let fo=null;function Yu(){return fo||(fo=Ku(Qm,Km,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),fo}async function Jm(n){try{const t=(await Yu()).transaction(nr),s=await t.objectStore(nr).get(Xu(n));return await t.done,s}catch(e){if(e instanceof dt)Dt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function el(n,e){try{const s=(await Yu()).transaction(nr,"readwrite");await s.objectStore(nr).put(e,Xu(n)),await s.done}catch(t){if(t instanceof dt)Dt.warn(t.message);else{const s=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(s.message)}}}function Xu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=1024,Xm=30;class Zm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Xm){const a=ng(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:s,unsentEntries:r}=eg(this._heartbeatsCache.heartbeats),i=Zr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function tl(){return new Date().toISOString().substring(0,10)}function eg(n,e=Ym){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),nl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),nl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ta()?na().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nl(n){return Zr(JSON.stringify({version:2,heartbeats:n})).length}function ng(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){Tt(new ut("platform-logger",e=>new mm(e),"PRIVATE")),Tt(new ut("heartbeat",e=>new Zm(e),"PRIVATE")),st(Co,Xc,n),st(Co,Xc,"esm2020"),st("fire-js","")}sg("");function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rg=Zu,ed=new Vn("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Ai("@firebase/auth");function ig(n,...e){ti.logLevel<=ce.WARN&&ti.warn(`Auth (${ys}): ${n}`,...e)}function Br(n,...e){ti.logLevel<=ce.ERROR&&ti.error(`Auth (${ys}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw oa(n,...e)}function ct(n,...e){return oa(n,...e)}function ia(n,e,t){const s={...rg(),[e]:t};return new Vn("auth","Firebase",s).create(e,{appName:n.name})}function tn(n){return ia(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function og(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&rt(n,"argument-error"),ia(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ed.create(n,...e)}function Y(n,e,...t){if(!n)throw oa(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Br(e),new Error(e)}function jt(n,e){n||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ag(){return sl()==="http:"||sl()==="https:"}function sl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ag()||ea()||"connection"in navigator)?navigator.onLine:!0}function lg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=jp()||Mp()}get(){return cg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hg=new pr(3e4,6e4);function Mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pn(n,e,t,s,r={}){return nd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=fr({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:d,...i};return Op()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&gs(n.emulatorConfig.host)&&(h.credentials="include"),td.fetch()(await sd(n,n.config.apiHost,t,l),h)})}async function nd(n,e,t){n._canInitEmulator=!1;const s={...ug,...e};try{const r=new pg(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw jr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw jr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw jr(n,"user-disabled",a);const p=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ia(n,p,h);rt(n,p)}}catch(r){if(r instanceof dt)throw r;rt(n,"network-request-failed",{message:String(r)})}}async function Si(n,e,t,s,r={}){const i=await pn(n,e,t,s,r);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function sd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?aa(n.config,r):`${n.config.apiScheme}://${r}`;return dg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function fg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ct(this.auth,"network-request-failed")),hg.get())})}}function jr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=ct(n,e,s);return r.customData._tokenResponse=t,r}function rl(n){return n!==void 0&&n.enterprise!==void 0}class mg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gg(n,e){return pn(n,"GET","/v2/recaptchaConfig",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function ni(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wg(n,e=!1){const t=ze(n),s=await t.getIdToken(e),r=ca(s);Y(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ys(po(r.auth_time)),issuedAtTime:Ys(po(r.iat)),expirationTime:Ys(po(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function po(n){return Number(n)*1e3}function ca(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const r=zu(t);return r?JSON.parse(r):(Br("Failed to decode base64 JWT payload"),null)}catch(r){return Br("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function il(n){const e=ca(n);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dt&&_g(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function _g({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n){var m;const e=n.auth,t=await n.getIdToken(),s=await sr(n,ni(e,{idToken:t}));Y(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(m=r.providerUserInfo)!=null&&m.length?rd(r.providerUserInfo):[],a=bg(n.providerData,i),l=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?d:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ro(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Ig(n){const e=ze(n);await si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bg(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function rd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(n,e){const t=await nd(n,{},async()=>{const s=fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await sd(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return n.emulatorConfig&&gs(n.emulatorConfig.host)&&(d.credentials="include"),td.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tg(n,e){return pn(n,"POST","/v2/accounts:revokeToken",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Eg(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new ns;return s&&(Y(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,e){Y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ro(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wg(this,e)}reload(){return Ig(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await si(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await sr(this,yg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:x,stsTokenManager:P}=t;Y(m&&P,e,"internal-error");const R=ns.fromJSON(this.name,P);Y(typeof m=="string",e,"internal-error"),Qt(s,e.name),Qt(r,e.name),Y(typeof y=="boolean",e,"internal-error"),Y(typeof S=="boolean",e,"internal-error"),Qt(i,e.name),Qt(a,e.name),Qt(l,e.name),Qt(d,e.name),Qt(h,e.name),Qt(p,e.name);const O=new ot({uid:m,auth:e,email:r,emailVerified:y,displayName:s,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:R,createdAt:h,lastLoginAt:p});return x&&Array.isArray(x)&&(O.providerData=x.map(V=>({...V}))),d&&(O._redirectEventId=d),O}static async _fromIdTokenResponse(e,t,s=!1){const r=new ns;r.updateFromServerResponse(t);const i=new ot({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await si(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];Y(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?rd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new ns;l.updateFromIdToken(s);const d=new ot({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ro(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map;function Pt(n){jt(n instanceof Function,"Expected a class definition");let e=ol.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ol.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}id.type="NONE";const al=id;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n,e,t){return`firebase:${n}:${e}:${t}`}class ss{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ni(this.auth,{idToken:e}).catch(()=>{});return t?ot._fromGetAccountInfoResponse(this.auth,t,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ss(Pt(al),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||Pt(al);const a=Wr(s,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const y=await ni(e,{idToken:p}).catch(()=>{});if(!y)break;m=await ot._fromGetAccountInfoResponse(e,y,p)}else m=ot._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const d=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new ss(i,e,s):(i=d[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new ss(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dd(e))return"Blackberry";if(hd(e))return"Webos";if(ad(e))return"Safari";if((e.includes("chrome/")||cd(e))&&!e.includes("edge/"))return"Chrome";if(ud(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function od(n=Ge()){return/firefox\//i.test(n)}function ad(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cd(n=Ge()){return/crios\//i.test(n)}function ld(n=Ge()){return/iemobile/i.test(n)}function ud(n=Ge()){return/android/i.test(n)}function dd(n=Ge()){return/blackberry/i.test(n)}function hd(n=Ge()){return/webos/i.test(n)}function la(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ag(n=Ge()){var e;return la(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Sg(){return Lp()&&document.documentMode===10}function fd(n=Ge()){return la(n)||ud(n)||hd(n)||dd(n)||/windows phone/i.test(n)||ld(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,e=[]){let t;switch(n){case"Browser":t=cl(Ge());break;case"Worker":t=`${cl(Ge())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ys}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const d=e(i);a(d)}catch(d){l(d)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e={}){return pn(n,"GET","/v2/passwordPolicy",Mn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=6;class Ng{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ni(this,{idToken:e}),s=await ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await si(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(tn(this));const t=e?ze(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cg(this),t=new Ng(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tg(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,s,r);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ig(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ln(n){return ze(n)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wp(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rg(n){xi=n}function md(n){return xi.loadJS(n)}function Dg(){return xi.recaptchaEnterpriseScript}function jg(){return xi.gapiScript}function Vg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Og{constructor(){this.enterprise=new Mg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Mg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Lg="recaptcha-enterprise",gd="NO_RECAPTCHA";class qg{constructor(e){this.type=Lg,this.auth=Ln(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{gg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new mg(d);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(d=>{l(d)})})}function r(i,a,l){const d=window.grecaptcha;rl(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(gd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Og().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&rl(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Dg();d.length!==0&&(d+=l),md(d).then(()=>{r(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function ul(n,e,t,s=!1,r=!1){const i=new qg(n);let a;if(r)a=gd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function dl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ul(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ul(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n,e){const t=On(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(on(i,e??{}))return r;rt(r,"already-initialized")}return t.initialize({options:e})}function Fg(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ug(n,e,t){const s=Ln(n);Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=yd(e),{host:a,port:l}=Bg(e),d=l===null?"":`:${l}`,h={url:`${i}//${a}${d}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){Y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Y(on(h,s.config.emulator)&&on(p,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=p,s.settings.appVerificationDisabledForTesting=!0,gs(a)?(Wu(`${i}//${a}${d}`),Gu("Auth",!0)):Wg()}function yd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Bg(n){const e=yd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:hl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:hl(a)}}}function hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function Gg(n,e){return pn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e){return Si(n,"POST","/v1/accounts:signInWithPassword",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e){return Si(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}async function Qg(n,e){return Si(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ua{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new rr(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new rr(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,t,"signInWithPassword",Hg);case"emailLink":return $g(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,s,"signUpPassword",Gg);case"emailLink":return Qg(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(n,e){return Si(n,"POST","/v1/accounts:signInWithIdp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="http://localhost";class kn extends ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new kn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,rs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rs(e,t)}buildRequest(){const e={requestUri:Kg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yg(n){const e=Ws(Gs(n)).link,t=e?Ws(Gs(e)).deep_link_id:null,s=Ws(Gs(n)).deep_link_id;return(s?Ws(Gs(s)).link:null)||s||t||e||n}class da{constructor(e){const t=Ws(Gs(e)),s=t.apiKey??null,r=t.oobCode??null,i=Jg(t.mode??null);Y(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Yg(e);try{return new da(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,t){return rr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=da.parseLink(t);return Y(s,"argument-error"),rr._fromEmailAndCode(e,s.code,s.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends ha{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends mr{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return kt.credential(t,s)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends mr{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends mr{constructor(){super("twitter.com")}static credential(e,t){return kn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Yt.credential(t,s)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await ot._fromIdTokenResponse(e,s,r),a=fl(s);return new us({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=fl(s);return new us({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function fl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends dt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ri(e,t,s,r)}}function wd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,s):i})}async function Xg(n,e,t=!1){const s=await sr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return us._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(n,e,t=!1){const{auth:s}=n;if(et(s.app))return Promise.reject(tn(s));const r="reauthenticate";try{const i=await sr(n,wd(s,r,e,n),t);Y(i.idToken,s,"internal-error");const a=ca(i.idToken);Y(a,s,"internal-error");const{sub:l}=a;return Y(n.uid===l,s,"user-mismatch"),us._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(n,e,t=!1){if(et(n.app))return Promise.reject(tn(n));const s="signIn",r=await wd(n,s,e),i=await us._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function ey(n,e){return _d(Ln(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(n){const e=Ln(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ny(n,e,t){return et(n.app)?Promise.reject(tn(n)):ey(ze(n),ws.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ty(n),s})}function sy(n,e,t,s){return ze(n).onIdTokenChanged(e,t,s)}function ry(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function iy(n,e,t,s){return ze(n).onAuthStateChanged(e,t,s)}function oy(n){return ze(n).signOut()}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1e3,cy=10;class Id extends vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Sg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cy):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Id.type="LOCAL";const ly=Id;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bd.type="SESSION";const Ed=bd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ci(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async h=>h(t.origin,i)),d=await uy(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ci.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,d)=>{const h=fa("",20);r.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(p),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function hy(n){_t().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function fy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function py(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function my(){return Td()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="firebaseLocalStorageDb",gy=1,oi="firebaseLocalStorage",Sd="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function yy(){const n=indexedDB.deleteDatabase(Ad);return new gr(n).toPromise()}function Do(){const n=indexedDB.open(Ad,gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oi,{keyPath:Sd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oi)?e(s):(s.close(),await yy(),e(await Do()))})})}async function pl(n,e,t){const s=ki(n,!0).put({[Sd]:e,value:t});return new gr(s).toPromise()}async function wy(n,e){const t=ki(n,!1).get(e),s=await new gr(t).toPromise();return s===void 0?null:s.value}function ml(n,e){const t=ki(n,!0).delete(e);return new gr(t).toPromise()}const _y=800,vy=3;class xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Do(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>vy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ci._getInstance(my()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await fy(),!this.activeServiceWorker)return;this.sender=new dy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||py()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Do();return await pl(e,ii,"1"),await ml(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>wy(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ki(r,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xd.type="LOCAL";const Iy=xd;new pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n,e){return e?Pt(e):(Y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function by(n){return _d(n.auth,new pa(n),n.bypassAuthState)}function Ey(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Zg(t,new pa(n),n.bypassAuthState)}async function Ty(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Xg(t,new pa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return by;case"linkViaPopup":case"linkViaRedirect":return Ty;case"reauthViaPopup":case"reauthViaRedirect":return Ey;default:rt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new pr(2e3,1e4);async function Sy(n,e,t){if(et(n.app))return Promise.reject(ct(n,"operation-not-supported-in-this-environment"));const s=Ln(n);og(n,e,ha);const r=Cd(s,t);return new An(s,"signInViaPopup",e,r).executeNotNull()}class An extends kd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ay.get())};e()}}An.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="pendingRedirect",Gr=new Map;class Cy extends kd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const s=await ky(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ky(n,e){const t=Ry(e),s=Py(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Ny(n,e){Gr.set(n._key(),e)}function Py(n){return Pt(n._redirectPersistence)}function Ry(n){return Wr(xy,n.config.apiKey,n.name)}async function Dy(n,e,t=!1){if(et(n.app))return Promise.reject(tn(n));const s=Ln(n),r=Cd(s,e),a=await new Cy(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=10*60*1e3;class Vy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Oy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Nd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(gl(e))}saveEventToCache(e){this.cachedEventUids.add(gl(e)),this.lastProcessedEventTime=Date.now()}}function gl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Oy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qy=/^https?/;async function zy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await My(n);for(const t of e)try{if(Fy(t))return}catch{}rt(n,"unauthorized-domain")}function Fy(n){const e=Po(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!qy.test(t))return!1;if(Ly.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new pr(3e4,6e4);function yl(){const n=_t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function By(n){return new Promise((e,t)=>{var r,i,a;function s(){yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yl(),t(ct(n,"network-request-failed"))},timeout:Uy.get()})}if((i=(r=_t().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=_t().gapi)!=null&&a.load)s();else{const l=Vg("iframefcb");return _t()[l]=()=>{gapi.load?s():t(ct(n,"network-request-failed"))},md(`${jg()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Hr=null,e})}let Hr=null;function Wy(n){return Hr=Hr||By(n),Hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new pr(5e3,15e3),Hy="__/auth/iframe",$y="emulator/auth/iframe",Qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ky=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jy(n){const e=n.config;Y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?aa(e,$y):`https://${n.config.authDomain}/${Hy}`,s={apiKey:e.apiKey,appName:n.name,v:ys},r=Ky.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${fr(s).slice(1)}`}async function Yy(n){const e=await Wy(n),t=_t().gapi;return Y(t,n,"internal-error"),e.open({where:document.body,url:Jy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=ct(n,"network-request-failed"),l=_t().setTimeout(()=>{i(a)},Gy.get());function d(){_t().clearTimeout(l),r(s)}s.ping(d).then(d,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zy=500,ew=600,tw="_blank",nw="http://localhost";class wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sw(n,e,t,s=Zy,r=ew){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Xy,width:s.toString(),height:r.toString(),top:i,left:a},h=Ge().toLowerCase();t&&(l=cd(h)?tw:t),od(h)&&(e=e||nw,d.scrollbars="yes");const p=Object.entries(d).reduce((y,[S,x])=>`${y}${S}=${x},`,"");if(Ag(h)&&l!=="_self")return rw(e||"",l),new wl(null);const m=window.open(e||"",l,p);Y(m,n,"popup-blocked");try{m.focus()}catch{}return new wl(m)}function rw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="__/auth/handler",ow="emulator/auth/handler",aw=encodeURIComponent("fac");async function _l(n,e,t,s,r,i){Y(n.config.authDomain,n,"auth-domain-config-required"),Y(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ys,eventId:r};if(e instanceof ha){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof mr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const d=await n._getAppCheckToken(),h=d?`#${aw}=${encodeURIComponent(d)}`:"";return`${cw(n)}?${fr(l).slice(1)}${h}`}function cw({config:n}){return n.emulator?aa(n,ow):`https://${n.authDomain}/${iw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="webStorageSupport";class lw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=Dy,this._overrideRedirectResult=Ny}async _openPopup(e,t,s,r){var a;jt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await _l(e,t,s,Po(),r);return sw(e,i,fa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await _l(e,t,s,Po(),r);return hy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Yy(e),s=new Vy(e);return t.register("authEvent",r=>(Y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mo,{type:mo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[mo];i!==void 0&&t(!!i),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fd()||ad()||la()}}const uw=lw;var vl="@firebase/auth",Il="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fw(n){Tt(new ut("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pd(n)},h=new Pg(s,r,i,d);return Fg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Tt(new ut("auth-internal",e=>{const t=Ln(e.getProvider("auth").getImmediate());return(s=>new dw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(vl,Il,hw(n)),st(vl,Il,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=5*60,mw=Bu("authIdTokenMaxAge")||pw;let bl=null;const gw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mw)return;const r=t==null?void 0:t.token;bl!==r&&(bl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function yw(n=ra()){const e=On(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zg(n,{popupRedirectResolver:uw,persistence:[Iy,ly,Ed]}),s=Bu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=gw(i.toString());ry(t,a,()=>a(t.currentUser)),sy(t,l=>a(l))}}const r=Fu("auth");return r&&Ug(t,`http://${r}`),t}function ww(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Rg({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=ct("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",ww().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fw("Browser");var _w="firebase",vw="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(_w,vw,"app");var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,Pd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function _(){}_.prototype=g.prototype,b.F=g.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(I,E,T){for(var v=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)v[ae-2]=arguments[ae];return g.prototype[E].apply(I,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,g,_){_||(_=0);const I=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)I[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=b.g[0],_=b.g[1],E=b.g[2];let T=b.g[3],v;v=g+(T^_&(E^T))+I[0]+3614090360&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(E^g&(_^E))+I[1]+3905402710&4294967295,T=g+(v<<12&4294967295|v>>>20),v=E+(_^T&(g^_))+I[2]+606105819&4294967295,E=T+(v<<17&4294967295|v>>>15),v=_+(g^E&(T^g))+I[3]+3250441966&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(T^_&(E^T))+I[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(E^g&(_^E))+I[5]+1200080426&4294967295,T=g+(v<<12&4294967295|v>>>20),v=E+(_^T&(g^_))+I[6]+2821735955&4294967295,E=T+(v<<17&4294967295|v>>>15),v=_+(g^E&(T^g))+I[7]+4249261313&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(T^_&(E^T))+I[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(E^g&(_^E))+I[9]+2336552879&4294967295,T=g+(v<<12&4294967295|v>>>20),v=E+(_^T&(g^_))+I[10]+4294925233&4294967295,E=T+(v<<17&4294967295|v>>>15),v=_+(g^E&(T^g))+I[11]+2304563134&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(T^_&(E^T))+I[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(E^g&(_^E))+I[13]+4254626195&4294967295,T=g+(v<<12&4294967295|v>>>20),v=E+(_^T&(g^_))+I[14]+2792965006&4294967295,E=T+(v<<17&4294967295|v>>>15),v=_+(g^E&(T^g))+I[15]+1236535329&4294967295,_=E+(v<<22&4294967295|v>>>10),v=g+(E^T&(_^E))+I[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^E&(g^_))+I[6]+3225465664&4294967295,T=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(T^g))+I[11]+643717713&4294967295,E=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(E^T))+I[0]+3921069994&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^T&(_^E))+I[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^E&(g^_))+I[10]+38016083&4294967295,T=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(T^g))+I[15]+3634488961&4294967295,E=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(E^T))+I[4]+3889429448&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^T&(_^E))+I[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^E&(g^_))+I[14]+3275163606&4294967295,T=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(T^g))+I[3]+4107603335&4294967295,E=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(E^T))+I[8]+1163531501&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(E^T&(_^E))+I[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^E&(g^_))+I[2]+4243563512&4294967295,T=g+(v<<9&4294967295|v>>>23),v=E+(g^_&(T^g))+I[7]+1735328473&4294967295,E=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(E^T))+I[12]+2368359562&4294967295,_=E+(v<<20&4294967295|v>>>12),v=g+(_^E^T)+I[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^E)+I[8]+2272392833&4294967295,T=g+(v<<11&4294967295|v>>>21),v=E+(T^g^_)+I[11]+1839030562&4294967295,E=T+(v<<16&4294967295|v>>>16),v=_+(E^T^g)+I[14]+4259657740&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^T)+I[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^E)+I[4]+1272893353&4294967295,T=g+(v<<11&4294967295|v>>>21),v=E+(T^g^_)+I[7]+4139469664&4294967295,E=T+(v<<16&4294967295|v>>>16),v=_+(E^T^g)+I[10]+3200236656&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^T)+I[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^E)+I[0]+3936430074&4294967295,T=g+(v<<11&4294967295|v>>>21),v=E+(T^g^_)+I[3]+3572445317&4294967295,E=T+(v<<16&4294967295|v>>>16),v=_+(E^T^g)+I[6]+76029189&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(_^E^T)+I[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^E)+I[12]+3873151461&4294967295,T=g+(v<<11&4294967295|v>>>21),v=E+(T^g^_)+I[15]+530742520&4294967295,E=T+(v<<16&4294967295|v>>>16),v=_+(E^T^g)+I[2]+3299628645&4294967295,_=E+(v<<23&4294967295|v>>>9),v=g+(E^(_|~T))+I[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~E))+I[7]+1126891415&4294967295,T=g+(v<<10&4294967295|v>>>22),v=E+(g^(T|~_))+I[14]+2878612391&4294967295,E=T+(v<<15&4294967295|v>>>17),v=_+(T^(E|~g))+I[5]+4237533241&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~T))+I[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~E))+I[3]+2399980690&4294967295,T=g+(v<<10&4294967295|v>>>22),v=E+(g^(T|~_))+I[10]+4293915773&4294967295,E=T+(v<<15&4294967295|v>>>17),v=_+(T^(E|~g))+I[1]+2240044497&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~T))+I[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~E))+I[15]+4264355552&4294967295,T=g+(v<<10&4294967295|v>>>22),v=E+(g^(T|~_))+I[6]+2734768916&4294967295,E=T+(v<<15&4294967295|v>>>17),v=_+(T^(E|~g))+I[13]+1309151649&4294967295,_=E+(v<<21&4294967295|v>>>11),v=g+(E^(_|~T))+I[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~E))+I[11]+3174756917&4294967295,T=g+(v<<10&4294967295|v>>>22),v=E+(g^(T|~_))+I[2]+718787259&4294967295,E=T+(v<<15&4294967295|v>>>17),v=_+(T^(E|~g))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+T&4294967295}s.prototype.v=function(b,g){g===void 0&&(g=b.length);const _=g-this.blockSize,I=this.C;let E=this.h,T=0;for(;T<g;){if(E==0)for(;T<=_;)r(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(I[E++]=b.charCodeAt(T++),E==this.blockSize){r(this,I),E=0;break}}else for(;T<g;)if(I[E++]=b[T++],E==this.blockSize){r(this,I),E=0;break}}this.h=E,this.o+=g},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)b[g++]=this.g[_]>>>I&255;return b};function i(b,g){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=g(b)}function a(b,g){this.h=g;const _=[];let I=!0;for(let E=b.length-1;E>=0;E--){const T=b[E]|0;I&&T==g||(_[E]=T,I=!1)}this.g=_}var l={};function d(b){return-128<=b&&b<128?i(b,function(g){return new a([g|0],g<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return R(h(-b));const g=[];let _=1;for(let I=0;b>=_;I++)g[I]=b/_|0,_*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return R(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(g,8));let I=m;for(let T=0;T<b.length;T+=8){var E=Math.min(8,b.length-T);const v=parseInt(b.substring(T,T+E),g);E<8?(E=h(Math.pow(g,E)),I=I.j(E).add(h(v))):(I=I.j(_),I=I.add(h(v)))}return I}var m=d(0),y=d(1),S=d(16777216);n=a.prototype,n.m=function(){if(P(this))return-R(this).m();let b=0,g=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);b+=(I>=0?I:4294967296+I)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(P(this))return"-"+R(this).toString(b);const g=h(Math.pow(b,6));var _=this;let I="";for(;;){const E=F(_,g).g;_=O(_,E.j(g));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=E,x(_))return T+I;for(;T.length<6;)T="0"+T;I=T+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=O(this,b),P(b)?-1:x(b)?0:1};function R(b){const g=b.g.length,_=[];for(let I=0;I<g;I++)_[I]=~b.g[I];return new a(_,~b.h).add(y)}n.abs=function(){return P(this)?R(this):this},n.add=function(b){const g=Math.max(this.g.length,b.g.length),_=[];let I=0;for(let E=0;E<=g;E++){let T=I+(this.i(E)&65535)+(b.i(E)&65535),v=(T>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=v>>>16,T&=65535,v&=65535,_[E]=v<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(b,g){return b.add(R(g))}n.j=function(b){if(x(this)||x(b))return m;if(P(this))return P(b)?R(this).j(R(b)):R(R(this).j(b));if(P(b))return R(this.j(R(b)));if(this.l(S)<0&&b.l(S)<0)return h(this.m()*b.m());const g=this.g.length+b.g.length,_=[];for(var I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<b.g.length;E++){const T=this.i(I)>>>16,v=this.i(I)&65535,ae=b.i(E)>>>16,me=b.i(E)&65535;_[2*I+2*E]+=v*me,V(_,2*I+2*E),_[2*I+2*E+1]+=T*me,V(_,2*I+2*E+1),_[2*I+2*E+1]+=v*ae,V(_,2*I+2*E+1),_[2*I+2*E+2]+=T*ae,V(_,2*I+2*E+2)}for(b=0;b<g;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=g;b<2*g;b++)_[b]=0;return new a(_,0)};function V(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function z(b,g){this.g=b,this.h=g}function F(b,g){if(x(g))throw Error("division by zero");if(x(b))return new z(m,m);if(P(b))return g=F(R(b),g),new z(R(g.g),R(g.h));if(P(g))return g=F(b,R(g)),new z(R(g.g),g.h);if(b.g.length>30){if(P(b)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,I=g;I.l(b)<=0;)_=L(_),I=L(I);var E=q(_,1),T=q(I,1);for(I=q(I,2),_=q(_,2);!x(I);){var v=T.add(I);v.l(b)<=0&&(E=E.add(_),T=v),I=q(I,1),_=q(_,1)}return g=O(b,E.j(g)),new z(E,g)}for(E=m;b.l(g)>=0;){for(_=Math.max(1,Math.floor(b.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),T=h(_),v=T.j(g);P(v)||v.l(b)>0;)_-=I,T=h(_),v=T.j(g);x(T)&&(T=y),E=E.add(T),b=O(b,v)}return new z(E,b)}n.B=function(b){return F(this,b).h},n.and=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)&b.i(I);return new a(_,this.h&b.h)},n.or=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)|b.i(I);return new a(_,this.h|b.h)},n.xor=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)^b.i(I);return new a(_,this.h^b.h)};function L(b){const g=b.g.length+1,_=[];for(let I=0;I<g;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(_,b.h)}function q(b,g){const _=g>>5;g%=32;const I=b.g.length-_,E=[];for(let T=0;T<I;T++)E[T]=g>0?b.i(T+_)>>>g|b.i(T+_+1)<<32-g:b.i(T+_);return new a(E,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Pd=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,nn=a}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rd,Hs,Dd,$r,jo,jd,Vd,Od;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var w=0;w<o.length-1;w++){var C=o[w];if(!(C in f))break e;f=f[C]}o=o[o.length-1],w=f[o],u=u(w),u!=w&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],w;for(w in u)Object.prototype.hasOwnProperty.call(u,w)&&f.push([w,u[w]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=d,h.apply(null,arguments)}function p(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),o.apply(this,w)}}function m(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(w,C,k){for(var U=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)U[oe-2]=arguments[oe];return u.prototype[C].apply(w,U)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const u=o.length;if(u>0){const f=Array(u);for(let w=0;w<u;w++)f[w]=o[w];return f}return[]}function x(o,u){for(let w=1;w<arguments.length;w++){const C=arguments[w];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const k=C.length||0;o.length=f+k;for(let U=0;U<k;U++)o[f+U]=C[U]}else o.push(C)}}class P{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(o){a.setTimeout(()=>{throw o},0)}function O(){var o=b;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class V{constructor(){this.h=this.g=null}add(u,f){const w=z.get();w.set(u,f),this.h?this.h.next=w:this.g=w,this.h=w}}var z=new P(()=>new F,o=>o.reset());class F{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let L,q=!1,b=new V,g=()=>{const o=Promise.resolve(void 0);L=()=>{o.then(_)}};function _(){for(var o;o=O();){try{o.h.call(o.g)}catch(f){R(f)}var u=z;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}q=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function v(o){return/^[\s\xa0]*$/.test(o)}function ae(o,u){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(ae,E),ae.prototype.init=function(o,u){const f=this.type=o.type,w=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var me="closure_listenable_"+(Math.random()*1e6|0),H=0;function se(o,u,f,w,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!w,this.ha=C,this.key=++H,this.da=this.fa=!1}function M(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $(o,u,f){for(const w in o)u.call(f,o[w],w,o)}function Z(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function J(o){const u={};for(const f in o)u[f]=o[f];return u}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(o,u){let f,w;for(let C=1;C<arguments.length;C++){w=arguments[C];for(f in w)o[f]=w[f];for(let k=0;k<re.length;k++)f=re[k],Object.prototype.hasOwnProperty.call(w,f)&&(o[f]=w[f])}}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,u,f,w,C){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const U=ge(o,u,w,C);return U>-1?(u=o[U],f||(u.fa=!1)):(u=new se(u,this.src,k,!!w,C),u.fa=f,o.push(u)),u};function Ie(o,u){const f=u.type;if(f in o.g){var w=o.g[f],C=Array.prototype.indexOf.call(w,u,void 0),k;(k=C>=0)&&Array.prototype.splice.call(w,C,1),k&&(M(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function ge(o,u,f,w){for(let C=0;C<o.length;++C){const k=o[C];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==w)return C}return-1}var Lt="closure_lm_"+(Math.random()*1e6|0),qt={};function zt(o,u,f,w,C){if(Array.isArray(u)){for(let k=0;k<u.length;k++)zt(o,u[k],f,w,C);return null}return f=W(f),o&&o[me]?o.J(u,f,l(w)?!!w.capture:!1,C):Gn(o,u,f,!1,w,C)}function Gn(o,u,f,w,C,k){if(!u)throw Error("Invalid event type");const U=l(C)?!!C.capture:!!C;let oe=ft(o);if(oe||(o[Lt]=oe=new we(o)),f=oe.add(u,f,w,U,k),f.proxy)return f;if(w=Ts(),f.proxy=w,w.src=o,w.listener=f,o.addEventListener)T||(C=U),C===void 0&&(C=!1),o.addEventListener(u.toString(),w,C);else if(o.attachEvent)o.attachEvent(Hn(u.toString()),w);else if(o.addListener&&o.removeListener)o.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ts(){function o(f){return u.call(o.src,o.listener,f)}const u=$n;return o}function Ft(o,u,f,w,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)Ft(o,u[k],f,w,C);else w=l(w)?!!w.capture:!!w,f=W(f),o&&o[me]?(o=o.i,k=String(u).toString(),k in o.g&&(u=o.g[k],f=ge(u,f,w,C),f>-1&&(M(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[k],o.h--)))):o&&(o=ft(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ge(u,f,w,C)),(f=o>-1?u[o]:null)&&gn(f))}function gn(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[me])Ie(u.i,o);else{var f=o.type,w=o.proxy;u.removeEventListener?u.removeEventListener(f,w,o.capture):u.detachEvent?u.detachEvent(Hn(f),w):u.addListener&&u.removeListener&&u.removeListener(w),(f=ft(u))?(Ie(f,o),f.h==0&&(f.src=null,u[Lt]=null)):M(o)}}}function Hn(o){return o in qt?qt[o]:qt[o]="on"+o}function $n(o,u){if(o.da)o=!0;else{u=new ae(u,this);const f=o.listener,w=o.ha||o.src;o.fa&&gn(o),o=f.call(w,u)}return o}function ft(o){return o=o[Lt],o instanceof we?o:null}var yn="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(o){return typeof o=="function"?o:(o[yn]||(o[yn]=function(u){return o.handleEvent(u)}),o[yn])}function he(){I.call(this),this.i=new we(this),this.M=this,this.G=null}m(he,I),he.prototype[me]=!0,he.prototype.removeEventListener=function(o,u,f,w){Ft(this,o,u,f,w)};function ie(o,u){var f,w=o.G;if(w)for(f=[];w;w=w.G)f.push(w);if(o=o.M,w=u.type||u,typeof u=="string")u=new E(u,o);else if(u instanceof E)u.target=u.target||o;else{var C=u;u=new E(w,o),ke(u,C)}C=!0;let k,U;if(f)for(U=f.length-1;U>=0;U--)k=u.g=f[U],C=it(k,w,!0,u)&&C;if(k=u.g=o,C=it(k,w,!0,u)&&C,C=it(k,w,!1,u)&&C,f)for(U=0;U<f.length;U++)k=u.g=f[U],C=it(k,w,!1,u)&&C}he.prototype.N=function(){if(he.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let w=0;w<f.length;w++)M(f[w]);delete o.g[u],o.h--}}this.G=null},he.prototype.J=function(o,u,f,w){return this.i.add(String(o),u,!1,f,w)},he.prototype.K=function(o,u,f,w){return this.i.add(String(o),u,!0,f,w)};function it(o,u,f,w){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let k=0;k<u.length;++k){const U=u[k];if(U&&!U.da&&U.capture==f){const oe=U.listener,Re=U.ha||U.src;U.fa&&Ie(o.i,U),C=oe.call(Re,w)!==!1&&C}}return C&&!w.defaultPrevented}function wn(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Qn(o){o.g=wn(()=>{o.g=null,o.i&&(o.i=!1,Qn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class As extends I{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(o){I.call(this),this.h=o,this.g={}}m(pt,I);var xt=[];function Ss(o){$(o.g,function(u,f){this.g.hasOwnProperty(f)&&gn(u)},o),o.g={}}pt.prototype.N=function(){pt.Z.N.call(this),Ss(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var N=a.JSON.stringify,Q=a.JSON.parse,ne=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function _e(){}function de(){}var Se={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function He(){E.call(this,"d")}m(He,E);function xs(){E.call(this,"c")}m(xs,E);var _n={},tc=null;function Er(){return tc=tc||new he}_n.Ia="serverreachability";function nc(o){E.call(this,_n.Ia,o)}m(nc,E);function Cs(o){const u=Er();ie(u,new nc(u))}_n.STAT_EVENT="statevent";function sc(o,u){E.call(this,_n.STAT_EVENT,o),this.stat=u}m(sc,E);function $e(o){const u=Er();ie(u,new sc(u,o))}_n.Ja="timingevent";function rc(o,u){E.call(this,_n.Ja,o),this.size=u}m(rc,E);function ks(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Ns(){this.g=!0}Ns.prototype.ua=function(){this.g=!1};function Wf(o,u,f,w,C,k){o.info(function(){if(o.g)if(k){var U="",oe=k.split("&");for(let ve=0;ve<oe.length;ve++){var Re=oe[ve].split("=");if(Re.length>1){const Oe=Re[0];Re=Re[1];const gt=Oe.split("_");U=gt.length>=2&&gt[1]=="type"?U+(Oe+"="+Re+"&"):U+(Oe+"=redacted&")}}}else U=null;else U=k;return"XMLHTTP REQ ("+w+") [attempt "+C+"]: "+u+`
`+f+`
`+U})}function Gf(o,u,f,w,C,k,U){o.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+C+"]: "+u+`
`+f+`
`+k+" "+U})}function Kn(o,u,f,w){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+$f(o,f)+(w?" "+w:"")})}function Hf(o,u){o.info(function(){return"TIMEOUT: "+u})}Ns.prototype.info=function(){};function $f(o,u){if(!o.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var f=k[o];if(!(f.length<2)){var w=f[1];if(Array.isArray(w)&&!(w.length<1)){var C=w[0];if(C!="noop"&&C!="stop"&&C!="close")for(let U=1;U<w.length;U++)w[U]=""}}}}return N(k)}catch{return u}}var Tr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ic={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oc;function Qi(){}m(Qi,_e),Qi.prototype.g=function(){return new XMLHttpRequest},oc=new Qi;function Ps(o){return encodeURIComponent(String(o))}function Qf(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Ut(o,u,f,w){this.j=o,this.i=u,this.l=f,this.S=w||1,this.V=new pt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var cc={},Ki={};function Ji(o,u,f){o.M=1,o.A=Sr(mt(u)),o.u=f,o.R=!0,lc(o,null)}function lc(o,u){o.F=Date.now(),Ar(o),o.B=mt(o.A);var f=o.B,w=o.S;Array.isArray(w)||(w=[String(w)]),bc(f.i,"t",w),o.C=0,f=o.j.L,o.h=new ac,o.g=zc(o.j,f?u:null,!o.u),o.P>0&&(o.O=new As(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,w=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(xt[0]=C.toString()),C=xt);for(let k=0;k<C.length;k++){const U=zt(f,C[k],w||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.J?J(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Cs(),Wf(o.i,o.v,o.B,o.l,o.S,o.u)}Ut.prototype.ba=function(o){o=o.target;const u=this.O;u&&Gt(o)==3?u.j():this.Y(o)},Ut.prototype.Y=function(o){try{if(o==this.g)e:{const oe=Gt(this.g),Re=this.g.ya(),ve=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||kc(this.g)))){this.K||oe!=4||Re==7||(Re==8||ve<=0?Cs(3):Cs(2)),Yi(this);var u=this.g.ca();this.X=u;var f=Kf(this);if(this.o=u==200,Gf(this.i,this.v,this.B,this.l,this.S,oe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var w,C=this.g;if((w=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(w)){var k=w;break t}}k=null}if(o=k)Kn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xi(this,o);else{this.o=!1,this.m=3,$e(12),vn(this),Rs(this);break e}}if(this.R){o=!0;let Oe;for(;!this.K&&this.C<f.length;)if(Oe=Jf(this,f),Oe==Ki){oe==4&&(this.m=4,$e(14),o=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==cc){this.m=4,$e(15),Kn(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Kn(this.i,this.l,Oe,null),Xi(this,Oe);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,$e(16),o=!1),this.o=this.o&&o,!o)Kn(this.i,this.l,f,"[Invalid Chunked Response]"),vn(this),Rs(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),oo(U),U.P=!0,$e(11))}}else Kn(this.i,this.l,f,null),Xi(this,f);oe==4&&vn(this),this.o&&!this.K&&(oe==4?Oc(this.j,this):(this.o=!1,Ar(this)))}else up(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),vn(this),Rs(this)}}}catch{}finally{}};function Kf(o){if(!uc(o))return o.g.la();const u=kc(o.g);if(u==="")return"";let f="";const w=u.length,C=Gt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return vn(o),Rs(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<w;k++)o.h.h=!0,f+=o.h.i.decode(u[k],{stream:!(C&&k==w-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function uc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Jf(o,u){var f=o.C,w=u.indexOf(`
`,f);return w==-1?Ki:(f=Number(u.substring(f,w)),isNaN(f)?cc:(w+=1,w+f>u.length?Ki:(u=u.slice(w,w+f),o.C=w+f,u)))}Ut.prototype.cancel=function(){this.K=!0,vn(this)};function Ar(o){o.T=Date.now()+o.H,dc(o,o.H)}function dc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ks(h(o.aa,o),u)}function Yi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ut.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Hf(this.i,this.B),this.M!=2&&(Cs(),$e(17)),vn(this),this.m=2,Rs(this)):dc(this,this.T-o)};function Rs(o){o.j.I==0||o.K||Oc(o.j,o)}function vn(o){Yi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Ss(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Xi(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Zi(f.h,o))){if(!o.L&&Zi(f.h,o)&&f.I==3){try{var w=f.Ba.g.parse(u)}catch{w=null}if(Array.isArray(w)&&w.length==3){var C=w;if(C[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Pr(f),kr(f);else break e;io(f),$e(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ks(h(f.Va,f),6e3));pc(f.h)<=1&&f.ta&&(f.ta=void 0)}else bn(f,11)}else if((o.L||f.g==o)&&Pr(f),!v(u))for(C=f.Ba.g.parse(u),u=0;u<C.length;u++){let ve=C[u];const Oe=ve[0];if(!(Oe<=f.K))if(f.K=Oe,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const gt=ve[3];gt!=null&&(f.ka=gt,f.j.info("VER="+f.ka));const En=ve[4];En!=null&&(f.za=En,f.j.info("SVER="+f.za));const Ht=ve[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(w=1.5*Ht,f.O=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const $t=o.g;if($t){const Dr=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var k=w.h;k.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(eo(k,k.h),k.h=null))}if(w.G){const ao=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(w.wa=ao,be(w.J,w.G,ao))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),w=f;var U=o;if(w.na=qc(w,w.L?w.ba:null,w.W),U.L){mc(w.h,U);var oe=U,Re=w.O;Re&&(oe.H=Re),oe.D&&(Yi(oe),Ar(oe)),w.g=U}else jc(w);f.i.length>0&&Nr(f)}else ve[0]!="stop"&&ve[0]!="close"||bn(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?bn(f,7):ro(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}Cs(4)}catch{}}var Yf=class{constructor(o,u){this.g=o,this.map=u}};function hc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pc(o){return o.h?1:o.g?o.g.size:0}function Zi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function eo(o,u){o.g?o.g.add(u):o.h=u}function mc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}hc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return S(o.i)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xf(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const w=o[f].indexOf("=");let C,k=null;w>=0?(C=o[f].substring(0,w),k=o[f].substring(w+1)):C=o[f],u(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Bt?(this.l=o.l,Ds(this,o.j),this.o=o.o,this.g=o.g,js(this,o.u),this.h=o.h,to(this,Ec(o.i)),this.m=o.m):o&&(u=String(o).match(yc))?(this.l=!1,Ds(this,u[1]||"",!0),this.o=Vs(u[2]||""),this.g=Vs(u[3]||"",!0),js(this,u[4]),this.h=Vs(u[5]||"",!0),to(this,u[6]||"",!0),this.m=Vs(u[7]||"")):(this.l=!1,this.i=new Ms(null,this.l))}Bt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Os(u,wc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Os(u,wc,!0),"@"),o.push(Ps(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Os(f,f.charAt(0)=="/"?tp:ep,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Os(f,sp)),o.join("")},Bt.prototype.resolve=function(o){const u=mt(this);let f=!!o.j;f?Ds(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var w=o.h;if(f)js(u,o.u);else if(f=!!o.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var C=u.h.lastIndexOf("/");C!=-1&&(w=u.h.slice(0,C+1)+w)}if(C=w,C==".."||C==".")w="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){w=C.lastIndexOf("/",0)==0,C=C.split("/");const k=[];for(let U=0;U<C.length;){const oe=C[U++];oe=="."?w&&U==C.length&&k.push(""):oe==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),w&&U==C.length&&k.push("")):(k.push(oe),w=!0)}w=k.join("/")}else w=C}return f?u.h=w:f=o.i.toString()!=="",f?to(u,Ec(o.i)):f=!!o.m,f&&(u.m=o.m),u};function mt(o){return new Bt(o)}function Ds(o,u,f){o.j=f?Vs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function js(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function to(o,u,f){u instanceof Ms?(o.i=u,rp(o.i,o.l)):(f||(u=Os(u,np)),o.i=new Ms(u,o.l))}function be(o,u,f){o.i.set(u,f)}function Sr(o){return be(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Vs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Os(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Zf),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Zf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wc=/[#\/\?@]/g,ep=/[#\?:]/g,tp=/[#\?]/g,np=/[#\?@]/g,sp=/#/g;function Ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&Xf(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ms.prototype,n.add=function(o,u){In(this),this.i=null,o=Jn(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function _c(o,u){In(o),u=Jn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function vc(o,u){return In(o),u=Jn(o,u),o.g.has(u)}n.forEach=function(o,u){In(this),this.g.forEach(function(f,w){f.forEach(function(C){o.call(u,C,w,this)},this)},this)};function Ic(o,u){In(o);let f=[];if(typeof u=="string")vc(o,u)&&(f=f.concat(o.g.get(Jn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return In(this),this.i=null,o=Jn(this,o),vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Ic(this,o),o.length>0?String(o[0]):u):u};function bc(o,u,f){_c(o,u),f.length>0&&(o.i=null,o.g.set(Jn(o,u),S(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let w=0;w<u.length;w++){var f=u[w];const C=Ps(f);f=Ic(this,f);for(let k=0;k<f.length;k++){let U=C;f[k]!==""&&(U+="="+Ps(f[k])),o.push(U)}}return this.i=o.join("&")};function Ec(o){const u=new Ms;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Jn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function rp(o,u){u&&!o.j&&(In(o),o.i=null,o.g.forEach(function(f,w){const C=w.toLowerCase();w!=C&&(_c(this,w),bc(this,C,f))},o)),o.j=u}function ip(o,u){const f=new Ns;if(a.Image){const w=new Image;w.onload=p(Wt,f,"TestLoadImage: loaded",!0,u,w),w.onerror=p(Wt,f,"TestLoadImage: error",!1,u,w),w.onabort=p(Wt,f,"TestLoadImage: abort",!1,u,w),w.ontimeout=p(Wt,f,"TestLoadImage: timeout",!1,u,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=o}else u(!1)}function op(o,u){const f=new Ns,w=new AbortController,C=setTimeout(()=>{w.abort(),Wt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:w.signal}).then(k=>{clearTimeout(C),k.ok?Wt(f,"TestPingServer: ok",!0,u):Wt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Wt(f,"TestPingServer: error",!1,u)})}function Wt(o,u,f,w,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),w(f)}catch{}}function ap(){this.g=new ne}function no(o){this.i=o.Sb||null,this.h=o.ab||!1}m(no,_e),no.prototype.g=function(){return new xr(this.i,this.h)};function xr(o,u){he.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(xr,he),n=xr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,qs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ls(this):qs(this),this.readyState==3&&Tc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ls(this))},n.Na=function(o){this.g&&(this.response=o,Ls(this))},n.ga=function(){this.g&&Ls(this)};function Ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,qs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function qs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let u="";return $(o,function(f,w){u+=w,u+=":",u+=f,u+=`\r
`}),u}function so(o,u,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=Ac(f),typeof o=="string"?f!=null&&Ps(f):be(o,u,f))}function xe(o){he.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(xe,he);var cp=/^https?$/i,lp=["POST","PUT"];n=xe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oc.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Sc(this,k);return}if(o=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var C in w)f.set(C,w[C]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const k of w.keys())f.set(k,w.get(k));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(lp,u,void 0)>=0)||w||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of f)this.g.setRequestHeader(k,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Sc(this,k)}};function Sc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,xc(o),Cr(o)}function xc(o){o.A||(o.A=!0,ie(o,"complete"),ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ie(this,"complete"),ie(this,"abort"),Cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),xe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Cc(this):this.Xa())},n.Xa=function(){Cc(this)};function Cc(o){if(o.h&&typeof i<"u"){if(o.v&&Gt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ie(o,"readystatechange"),Gt(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var w;if(w=k===0){let U=String(o.D).match(yc)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),w=!cp.test(U?U.toLowerCase():"")}f=w}if(f)ie(o,"complete"),ie(o,"success");else{o.o=6;try{var C=Gt(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",xc(o)}}finally{Cr(o)}}}}function Cr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||ie(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Gt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Q(u)}};function kc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function up(o){const u={};o=(o.g&&Gt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<o.length;w++){if(v(o[w]))continue;var f=Qf(o[w]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[C]||[];u[C]=k,k.push(f)}Z(u,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Nc(o){this.za=0,this.i=[],this.j=new Ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,o),this.Za=zs("retryDelaySeedMs",1e4,o),this.Ta=zs("forwardChannelMaxRetries",2,o),this.va=zs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new hc(o&&o.concurrentRequestLimit),this.Ba=new ap,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Nc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,w){$e(0),this.W=o,this.H=u||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.J=qc(this,null,this.W),Nr(this)};function ro(o){if(Pc(o),o.I==3){var u=o.V++,f=mt(o.J);if(be(f,"SID",o.M),be(f,"RID",u),be(f,"TYPE","terminate"),Fs(o,f),u=new Ut(o,o.j,u),u.M=2,u.A=Sr(mt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=zc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ar(u)}Lc(o)}function kr(o){o.g&&(oo(o),o.g.cancel(),o.g=null)}function Pc(o){kr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Pr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Nr(o){if(!fc(o.h)&&!o.m){o.m=!0;var u=o.Ea;L||g(),q||(L(),q=!0),b.add(u,o),o.D=0}}function dp(o,u){return pc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ks(h(o.Ea,o,u),Mc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new Ut(this,this.j,o);let k=this.o;if(this.U&&(k?(k=J(k),ke(k,this.U)):k=this.U),this.u!==null||this.R||(C.J=k,k=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(u+=w,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Dc(this,C,u),f=mt(this.J),be(f,"RID",o),be(f,"CVER",22),this.G&&be(f,"X-HTTP-Session-Id",this.G),Fs(this,f),k&&(this.R?u="headers="+Ps(Ac(k))+"&"+u:this.u&&so(f,this.u,k)),eo(this.h,C),this.Ra&&be(f,"TYPE","init"),this.S?(be(f,"$req",u),be(f,"SID","null"),C.U=!0,Ji(C,f,null)):Ji(C,f,u),this.I=2}}else this.I==3&&(o?Rc(this,o):this.i.length==0||fc(this.h)||Rc(this))};function Rc(o,u){var f;u?f=u.l:f=o.V++;const w=mt(o.J);be(w,"SID",o.M),be(w,"RID",f),be(w,"AID",o.K),Fs(o,w),o.u&&o.o&&so(w,o.u,o.o),f=new Ut(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Dc(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),eo(o.h,f),Ji(f,w,u)}function Fs(o,u){o.H&&$(o.H,function(f,w){be(u,w,f)}),o.l&&$({},function(f,w){be(u,w,f)})}function Dc(o,u,f){f=Math.min(o.i.length,f);const w=o.l?h(o.l.Ka,o.l,o):null;e:{var C=o.i;let oe=-1;for(;;){const Re=["count="+f];oe==-1?f>0?(oe=C[0].g,Re.push("ofs="+oe)):oe=0:Re.push("ofs="+oe);let ve=!0;for(let Oe=0;Oe<f;Oe++){var k=C[Oe].g;const gt=C[Oe].map;if(k-=oe,k<0)oe=Math.max(0,C[Oe].g-100),ve=!1;else try{k="req"+k+"_"||"";try{var U=gt instanceof Map?gt:Object.entries(gt);for(const[En,Ht]of U){let $t=Ht;l(Ht)&&($t=N(Ht)),Re.push(k+En+"="+encodeURIComponent($t))}}catch(En){throw Re.push(k+"type="+encodeURIComponent("_badmap")),En}}catch{w&&w(gt)}}if(ve){U=Re.join("&");break e}}U=void 0}return o=o.i.splice(0,f),u.G=o,U}function jc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;L||g(),q||(L(),q=!0),b.add(u,o),o.A=0}}function io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ks(h(o.Da,o),Mc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Vc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ks(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),kr(this),Vc(this))};function oo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Vc(o){o.g=new Ut(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=mt(o.na);be(u,"RID","rpc"),be(u,"SID",o.M),be(u,"AID",o.K),be(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&be(u,"TO",o.ia),be(u,"TYPE","xmlhttp"),Fs(o,u),o.u&&o.o&&so(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Sr(mt(u)),f.u=null,f.R=!0,lc(f,o)}n.Va=function(){this.C!=null&&(this.C=null,kr(this),io(this),$e(19))};function Pr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Oc(o,u){var f=null;if(o.g==u){Pr(o),oo(o),o.g=null;var w=2}else if(Zi(o.h,u))f=u.G,mc(o.h,u),w=1;else return;if(o.I!=0){if(u.o)if(w==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var C=o.D;w=Er(),ie(w,new rc(w,f)),Nr(o)}else jc(o);else if(C=u.m,C==3||C==0&&u.X>0||!(w==1&&dp(o,u)||w==2&&io(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),C){case 1:bn(o,5);break;case 4:bn(o,10);break;case 3:bn(o,6);break;default:bn(o,2)}}}function Mc(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function bn(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),w=o.Ua;const C=!w;w=new Bt(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ds(w,"https"),Sr(w),C?ip(w.toString(),f):op(w.toString(),f)}else $e(2);o.I=0,o.l&&o.l.pa(u),Lc(o),Pc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Lc(o){if(o.I=0,o.ja=[],o.l){const u=gc(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ja,u),x(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function qc(o,u,f){var w=f instanceof Bt?mt(f):new Bt(f);if(w.g!="")u&&(w.g=u+"."+w.g),js(w,w.u);else{var C=a.location;w=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const k=new Bt(null);w&&Ds(k,w),u&&(k.g=u),C&&js(k,C),f&&(k.h=f),w=k}return f=o.G,u=o.wa,f&&u&&be(w,f,u),be(w,"VER",o.ka),Fs(o,w),w}function zc(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new xe(new no({ab:f})):new xe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}n=Fc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rr(){}Rr.prototype.g=function(o,u){return new Je(o,u)};function Je(o,u){he.call(this),this.g=new Nc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!v(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Yn(this)}m(Je,he),Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){ro(this.g)},Je.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=N(o),o=f);u.i.push(new Yf(u.Ya++,o)),u.I==3&&Nr(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,ro(this.g),delete this.g,Je.Z.N.call(this)};function Uc(o){He.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(Uc,He);function Bc(){xs.call(this),this.status=1}m(Bc,xs);function Yn(o){this.g=o}m(Yn,Fc),Yn.prototype.ra=function(){ie(this.g,"a")},Yn.prototype.qa=function(o){ie(this.g,new Uc(o))},Yn.prototype.pa=function(o){ie(this.g,new Bc)},Yn.prototype.oa=function(){ie(this.g,"b")},Rr.prototype.createWebChannel=Rr.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,Od=function(){return new Rr},Vd=function(){return Er()},jd=_n,jo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,$r=Tr,ic.COMPLETE="complete",Dd=ic,de.EventType=Se,Se.OPEN="a",Se.CLOSE="b",Se.ERROR="c",Se.MESSAGE="d",he.prototype.listen=he.prototype.J,Hs=de,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,Rd=xe}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.9.0";function Iw(n){_s=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Ai("@firebase/firestore");function Xn(){return Nn.logLevel}function B(n,...e){if(Nn.logLevel<=ce.DEBUG){const t=e.map(ma);Nn.debug(`Firestore (${_s}): ${n}`,...t)}}function Vt(n,...e){if(Nn.logLevel<=ce.ERROR){const t=e.map(ma);Nn.error(`Firestore (${_s}): ${n}`,...t)}}function Pn(n,...e){if(Nn.logLevel<=ce.WARN){const t=e.map(ma);Nn.warn(`Firestore (${_s}): ${n}`,...t)}}function ma(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Md(n,s,t)}function Md(n,e,t){let s=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vt(s),new Error(s)}function pe(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Md(e,r,s)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Be.UNAUTHENTICATED))}shutdown(){}}class Ew{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tw{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let i=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const d=i;e.enqueueRetryable(async()=>{await d.promise,await r(this.currentUser)})},l=d=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string",31837,{l:s}),new Ld(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class Aw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Sw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Aw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Cw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function le(n,e){return n<e?-1:n>e?1:0}function Vo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return go(r)===go(i)?le(r,i):go(r)?1:-1}return le(n.length,e.length)}const kw=55296,Nw=57343;function go(n){const e=n.charCodeAt(0);return e>=kw&&e<=Nw}function ds(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="__name__";class wt{constructor(e,t,s){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&X(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=wt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return le(e.length,t.length)}static compareSegments(e,t){const s=wt.isNumericId(e),r=wt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?wt.extractNumericId(e).compare(wt.extractNumericId(t)):Vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class Ee extends wt{construct(e,t,s){return new Ee(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new Ee(t)}static emptyPath(){return new Ee([])}}const Pw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends wt{construct(e,t,s){return new qe(e,t,s)}static isValidIdentifier(e){return Pw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Al}static keyField(){return new qe([Al])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(t)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,e,t){if(!t)throw new G(j.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Rw(n,e,t,s){if(e===!0&&s===!0)throw new G(j.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sl(n){if(!K.isDocumentKey(n))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xl(n){if(K.isDocumentKey(n))throw new G(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ya(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function an(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ya(n);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function yr(n,e){if(!zd(n))throw new G(j.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new G(j.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=-62135596800,kl=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kl);return new Te(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cl)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kl}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yr(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Pe("string",Te._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Te(0,0))}static max(){return new ee(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=-1;function Dw(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Te(t+1,0):new Te(t,s));return new cn(r,K.empty(),e)}function jw(n){return new cn(n.readTime,n.key,ir)}class cn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new cn(ee.min(),K.empty(),ir)}static max(){return new cn(ee.max(),K.empty(),ir)}}function Vw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(n){if(n.code!==j.FAILED_PRECONDITION||n.message!==Ow)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,s)=>{t(e)})}static reject(e){return new D((t,s)=>{s(e)})}static waitFor(e){return new D((t,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&t()},d=>s(d))}),a=!0,i===r&&t()})}static or(e){let t=D.resolve(!1);for(const s of e)t=t.next(r=>r?D.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new D((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next(p=>{a[h]=p,++l,l===i&&s(a)},p=>r(p))}})}static doWhile(e,t){return new D((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Lw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Is(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ni.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=-1;function Pi(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function qw(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="";function zw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Nl(e)),e=Fw(n.get(t),e);return Nl(e)}function Fw(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Fd:t+="";break;default:t+=i}}return t}function Nl(n){return n+Fd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ud(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Le.RED,this.left=r??Le.EMPTY,this.right=i??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Le(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(e){return new Rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new at([])}unionWith(e){let t=new Ve(qe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bd("Invalid base64 string: "+i):i}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=Uw.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="server_timestamp",Gd="__type__",Hd="__previous_value__",$d="__local_write_time__";function _a(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gd])==null?void 0:s.stringValue)===Wd}function Ri(n){const e=n.mapValue.fields[Hd];return _a(e)?Ri(e):e}function or(n){const e=ln(n.mapValue.fields[$d].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,s,r,i,a,l,d,h,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const ci="(default)";class ar{constructor(e,t){this.projectId=e,this.database=t||ci}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===ci}isEqual(e){return e instanceof ar&&e.projectId===this.projectId&&e.database===this.database}}function Ww(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="__type__",Gw="__max__",Mr={mapValue:{}},Kd="__vector__",li="value";function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_a(n)?4:$w(n)?9007199254740991:Hw(n)?10:11:X(28295,{value:n})}function At(n,e){if(n===e)return!0;const t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=ln(r.timestampValue),l=ln(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return un(r.bytesValue).isEqual(un(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Ce(r.doubleValue),l=Ce(i.doubleValue);return a===l?ai(a)===ai(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return ds(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Pl(a)!==Pl(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!At(a[d],l[d])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function cr(n,e){return(n.values||[]).find(t=>At(t,e))!==void 0}function hs(n,e){if(n===e)return 0;const t=dn(n),s=dn(e);if(t!==s)return le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ce(i.integerValue||i.doubleValue),d=Ce(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,e);case 3:return Dl(n.timestampValue,e.timestampValue);case 4:return Dl(or(n),or(e));case 5:return Vo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=un(i),d=un(a);return l.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),d=a.split("/");for(let h=0;h<l.length&&h<d.length;h++){const p=le(l[h],d[h]);if(p!==0)return p}return le(l.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=le(Ce(i.latitude),Ce(a.latitude));return l!==0?l:le(Ce(i.longitude),Ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return jl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var y,S,x,P;const l=i.fields||{},d=a.fields||{},h=(y=l[li])==null?void 0:y.arrayValue,p=(S=d[li])==null?void 0:S.arrayValue,m=le(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:jl(h,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Mr.mapValue&&a===Mr.mapValue)return 0;if(i===Mr.mapValue)return 1;if(a===Mr.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),h=a.fields||{},p=Object.keys(h);d.sort(),p.sort();for(let m=0;m<d.length&&m<p.length;++m){const y=Vo(d[m],p[m]);if(y!==0)return y;const S=hs(l[d[m]],h[p[m]]);if(S!==0)return S}return le(d.length,p.length)}(n.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function Dl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=ln(n),s=ln(e),r=le(t.seconds,s.seconds);return r!==0?r:le(t.nanos,s.nanos)}function jl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=hs(t[r],s[r]);if(i)return i}return le(t.length,s.length)}function fs(n){return Oo(n)}function Oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=ln(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Oo(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Oo(t.fields[a])}`;return r+"}"}(n.mapValue):X(61005,{value:n})}function Qr(n){switch(dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ri(n);return e?16+Qr(e):16;case 5:return 2*n.stringValue.length;case 6:return un(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Qr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return qn(s.fields,(i,a)=>{r+=i.length+Qr(a)}),r}(n.mapValue);default:throw X(13486,{value:n})}}function Mo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function Vl(n){return!!n&&"nullValue"in n}function Ol(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Hw(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qd])==null?void 0:s.stringValue)===Kd}function Xs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Xs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xs(n.arrayValue.values[t]);return e}return{...n}}function $w(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Gw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(t)}setAll(e){let t=qe.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Xs(a):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Kr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){qn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new tt(Xs(this.value))}}function Jd(n){const e=[];return qn(n.fields,(t,s)=>{const r=new qe([t]);if(Kr(s)){const i=Jd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new We(e,0,ee.min(),ee.min(),ee.min(),tt.empty(),0)}static newFoundDocument(e,t,s,r){return new We(e,1,t,ee.min(),s,r,0)}static newNoDocument(e,t){return new We(e,2,t,ee.min(),ee.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,ee.min(),ee.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.position=e,this.inclusive=t}}function Ml(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(a.referenceValue),t.key):s=hs(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ll(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{}class De extends Yd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Jw(e,t,s):t==="array-contains"?new Zw(e,s):t==="in"?new e_(e,s):t==="not-in"?new t_(e,s):t==="array-contains-any"?new n_(e,s):new De(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Yw(e,s):new Xw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hs(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(hs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Yd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new St(e,t)}matches(e){return Xd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xd(n){return n.op==="and"}function Zd(n){return Kw(n)&&Xd(n)}function Kw(n){for(const e of n.filters)if(e instanceof St)return!1;return!0}function Lo(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+fs(n.value);if(Zd(n))return n.filters.map(e=>Lo(e)).join(",");{const e=n.filters.map(t=>Lo(t)).join(",");return`${n.op}(${e})`}}function eh(n,e){return n instanceof De?function(s,r){return r instanceof De&&s.op===r.op&&s.field.isEqual(r.field)&&At(s.value,r.value)}(n,e):n instanceof St?function(s,r){return r instanceof St&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,l)=>i&&eh(a,r.filters[l]),!0):!1}(n,e):void X(19439)}function th(n){return n instanceof De?function(t){return`${t.field.canonicalString()} ${t.op} ${fs(t.value)}`}(n):n instanceof St?function(t){return t.op.toString()+" {"+t.getFilters().map(th).join(" ,")+"}"}(n):"Filter"}class Jw extends De{constructor(e,t,s){super(e,t,s),this.key=K.fromName(s.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yw extends De{constructor(e,t){super(e,"in",t),this.keys=nh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xw extends De{constructor(e,t){super(e,"not-in",t),this.keys=nh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>K.fromName(s.referenceValue))}class Zw extends De{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return va(t)&&cr(t.arrayValue,this.value)}}class e_ extends De{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cr(this.value.arrayValue,t)}}class t_ extends De{constructor(e,t){super(e,"not-in",t)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cr(this.value.arrayValue,t)}}class n_ extends De{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!va(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function ql(n,e=null,t=[],s=[],r=null,i=null,a=null){return new s_(n,e,t,s,r,i,a)}function Ia(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Lo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>fs(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>fs(s)).join(",")),e.Te=t}return e.Te}function ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Qw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ll(n.startAt,e.startAt)&&Ll(n.endAt,e.endAt)}function qo(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function r_(n,e,t,s,r,i,a,l){return new Di(n,e,t,s,r,i,a,l)}function Ea(n){return new Di(n)}function zl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function i_(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function o_(n){return n.collectionGroup!==null}function Zs(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ve(qe.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new di(i,s))}),t.has(qe.keyField().canonicalString())||e.Ie.push(new di(qe.keyField(),s))}return e.Ie}function vt(n){const e=te(n);return e.Ee||(e.Ee=a_(e,Zs(n))),e.Ee}function a_(n,e){if(n.limitType==="F")return ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new di(r.field,i)});const t=n.endAt?new ui(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ui(n.startAt.position,n.startAt.inclusive):null;return ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function zo(n,e,t){return new Di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ji(n,e){return ba(vt(n),vt(e))&&n.limitType===e.limitType}function sh(n){return`${Ia(vt(n))}|lt:${n.limitType}`}function Zn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>th(r)).join(", ")}]`),Pi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>fs(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>fs(r)).join(",")),`Target(${s})`}(vt(n))}; limitType=${n.limitType})`}function Vi(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):K.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Zs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,l,d){const h=Ml(a,l,d);return a.inclusive?h<=0:h<0}(s.startAt,Zs(s),r)||s.endAt&&!function(a,l,d){const h=Ml(a,l,d);return a.inclusive?h>=0:h>0}(s.endAt,Zs(s),r))}(n,e)}function c_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rh(n){return(e,t)=>{let s=!1;for(const r of Zs(n)){const i=l_(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function l_(n,e,t){const s=n.field.isKeyField()?K.comparator(e.key,t.key):function(i,a,l){const d=a.data.field(i),h=l.data.field(i);return d!==null&&h!==null?hs(d,h):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ud(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new Ae(K.comparator);function Ot(){return u_}const ih=new Ae(K.comparator);function $s(...n){let e=ih;for(const t of n)e=e.insert(t.key,t);return e}function oh(n){let e=ih;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Sn(){return er()}function ah(){return er()}function er(){return new zn(n=>n.toString(),(n,e)=>n.isEqual(e))}const d_=new Ae(K.comparator),h_=new Ve(K.comparator);function ue(...n){let e=h_;for(const t of n)e=e.add(t);return e}const f_=new Ve(le);function p_(){return f_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function ch(n){return{integerValue:""+n}}function m_(n,e){return qw(e)?ch(e):Ta(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this._=void 0}}function g_(n,e,t){return n instanceof hi?function(r,i){const a={fields:{[Gd]:{stringValue:Wd},[$d]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&_a(i)&&(i=Ri(i)),i&&(a.fields[Hd]=i),{mapValue:a}}(t,e):n instanceof lr?uh(n,e):n instanceof ur?dh(n,e):function(r,i){const a=lh(r,i),l=Fl(a)+Fl(r.Ae);return Mo(a)&&Mo(r.Ae)?ch(l):Ta(r.serializer,l)}(n,e)}function y_(n,e,t){return n instanceof lr?uh(n,e):n instanceof ur?dh(n,e):t}function lh(n,e){return n instanceof fi?function(s){return Mo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class hi extends Oi{}class lr extends Oi{constructor(e){super(),this.elements=e}}function uh(n,e){const t=hh(e);for(const s of n.elements)t.some(r=>At(r,s))||t.push(s);return{arrayValue:{values:t}}}class ur extends Oi{constructor(e){super(),this.elements=e}}function dh(n,e){let t=hh(e);for(const s of n.elements)t=t.filter(r=>!At(r,s));return{arrayValue:{values:t}}}class fi extends Oi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Fl(n){return Ce(n.integerValue||n.doubleValue)}function hh(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function w_(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof lr&&r instanceof lr||s instanceof ur&&r instanceof ur?ds(s.elements,r.elements,At):s instanceof fi&&r instanceof fi?At(s.Ae,r.Ae):s instanceof hi&&r instanceof hi}(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class It{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mi{}function fh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Aa(n.key,It.none()):new wr(n.key,n.data,It.none());{const t=n.data,s=tt.empty();let r=new Ve(qe.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Fn(n.key,s,new at(r.toArray()),It.none())}}function v_(n,e,t){n instanceof wr?function(r,i,a){const l=r.value.clone(),d=Bl(r.fieldTransforms,i,a.transformResults);l.setAll(d),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Fn?function(r,i,a){if(!Jr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Bl(r.fieldTransforms,i,a.transformResults),d=i.data;d.setAll(ph(r)),d.setAll(l),i.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function tr(n,e,t,s){return n instanceof wr?function(i,a,l,d){if(!Jr(i.precondition,a))return l;const h=i.value.clone(),p=Wl(i.fieldTransforms,d,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof Fn?function(i,a,l,d){if(!Jr(i.precondition,a))return l;const h=Wl(i.fieldTransforms,d,a),p=a.data;return p.setAll(ph(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,s):function(i,a,l){return Jr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function I_(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=lh(s.transform,r||null);i!=null&&(t===null&&(t=tt.empty()),t.set(s.field,i))}return t||null}function Ul(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ds(s,r,(i,a)=>w_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends Mi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fn extends Mi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Bl(n,e,t){const s=new Map;pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,y_(a,l,t[r]))}return s}function Wl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,g_(i,a,e))}return s}class Aa extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b_ extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&v_(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=tr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=tr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ah();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const d=fh(a,l);d!==null&&s.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ue())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(t,s)=>Ul(t,s))&&ds(this.baseMutations,e.baseMutations,(t,s)=>Ul(t,s))}}class Sa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){pe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return d_}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Sa(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,fe;function S_(n){switch(n){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function mh(n){if(n===void 0)return Vt("GRPC error has no .code"),j.UNKNOWN;switch(n){case Ne.OK:return j.OK;case Ne.CANCELLED:return j.CANCELLED;case Ne.UNKNOWN:return j.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return j.INTERNAL;case Ne.UNAVAILABLE:return j.UNAVAILABLE;case Ne.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ne.NOT_FOUND:return j.NOT_FOUND;case Ne.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ne.ABORTED:return j.ABORTED;case Ne.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ne.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:n})}}(fe=Ne||(Ne={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new nn([4294967295,4294967295],0);function Gl(n){const e=x_().encode(n),t=new Pd;return t.update(e),new Uint8Array(t.digest())}function Hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,s],0),new nn([r,i],0)]}class xa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(s<0)throw new Qs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=nn.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(nn.fromNumber(s)));return r.compare(C_)===1&&(r=new nn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gl(e),[s,r]=Hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new xa(i,r,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Gl(e),[s,r]=Hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,_r.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Li(ee.min(),r,new Ae(le),Ot(),ue())}}class _r{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new _r(s,t,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class gh{constructor(e,t){this.targetId=e,this.Ce=t}}class yh{constructor(e,t,s=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class $l{constructor(){this.ve=0,this.Fe=Ql(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),t=ue(),s=ue();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:X(38017,{changeType:i})}}),new _r(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Ql()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class k_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ot(),this.He=Lr(),this.Je=Lr(),this.Ze=new Ae(le)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(qo(i))if(s===0){const a=new K(i.path);this.et(t,a,We.newNoDocument(a,ee.min()))}else pe(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),d=l?this.ct(l,e,a):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=un(s).toUint8Array()}catch(d){if(d instanceof Bd)return Pn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new xa(a,r,i)}catch(d){return Pn(d instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&qo(l.target)){const d=new K(l.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,We.newNoDocument(d,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let s=ue();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const r=new Li(e,t,this.Ze,this.je,s);return this.je=Ot(),this.He=Lr(),this.Je=Lr(),this.Ze=new Ae(le),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new $l,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ve(le),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ve(le),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $l),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lr(){return new Ae(K.comparator)}function Ql(){return new Ae(K.comparator)}const N_={asc:"ASCENDING",desc:"DESCENDING"},P_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fo(n,e){return n.useProto3Json||Pi(e)?e:{value:e}}function pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function j_(n,e){return pi(n,e.toTimestamp())}function bt(n){return pe(!!n,49232),ee.fromTimestamp(function(t){const s=ln(t);return new Te(s.seconds,s.nanos)}(n))}function Ca(n,e){return Uo(n,e).canonicalString()}function Uo(n,e){const t=function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _h(n){const e=Ee.fromString(n);return pe(Th(e),10190,{key:e.toString()}),e}function Bo(n,e){return Ca(n.databaseId,e.path)}function yo(n,e){const t=_h(e);if(t.get(1)!==n.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Ih(t))}function vh(n,e){return Ca(n.databaseId,e)}function V_(n){const e=_h(n);return e.length===4?Ee.emptyPath():Ih(e)}function Wo(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ih(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kl(n,e,t){return{name:Bo(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(pe(p===void 0||typeof p=="string",58123),Fe.fromBase64String(p||"")):(pe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Fe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const p=h.code===void 0?j.UNKNOWN:mh(h.code);return new G(p,h.message||"")}(a);t=new yh(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=yo(n,s.document.name),i=bt(s.document.updateTime),a=s.document.createTime?bt(s.document.createTime):ee.min(),l=new tt({mapValue:{fields:s.document.fields}}),d=We.newFoundDocument(r,i,a,l),h=s.targetIds||[],p=s.removedTargetIds||[];t=new Yr(h,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=yo(n,s.document),i=s.readTime?bt(s.readTime):ee.min(),a=We.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Yr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=yo(n,s.document),i=s.removedTargetIds||[];t=new Yr([],i,r,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new A_(r,i),l=s.targetId;t=new gh(l,a)}}return t}function M_(n,e){let t;if(e instanceof wr)t={update:Kl(n,e.key,e.value)};else if(e instanceof Aa)t={delete:Bo(n,e.key)};else if(e instanceof Fn)t={update:Kl(n,e.key,e.data),updateMask:H_(e.fieldMask)};else{if(!(e instanceof b_))return X(16599,{dt:e.type});t={verify:Bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const l=a.transform;if(l instanceof hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw X(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:j_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function L_(n,e){return n&&n.length>0?(pe(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?bt(r.updateTime):bt(i);return a.isEqual(ee.min())&&(a=bt(i)),new __(a,r.transformResults||[])}(t,e))):[]}function q_(n,e){return{documents:[vh(n,e.path)]}}function z_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vh(n,r);const i=function(h){if(h.length!==0)return Eh(St.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(p=>function(y){return{field:es(y.field),direction:B_(y.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Fo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:r}}function F_(n){let e=V_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){pe(s===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const y=bh(m);return y instanceof St&&Zd(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(y=>function(x){return new di(ts(x.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Pi(y)?null:y}(t.limit));let d=null;t.startAt&&(d=function(m){const y=!!m.before,S=m.values||[];return new ui(S,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,S=m.values||[];return new ui(S,y)}(t.endAt)),r_(e,r,a,i,l,"F",d,h)}function U_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ts(t.unaryFilter.field);return De.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=ts(t.unaryFilter.field);return De.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(t.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ts(t.unaryFilter.field);return De.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return De.create(ts(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return St.create(t.compositeFilter.filters.map(s=>bh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function B_(n){return N_[n]}function W_(n){return P_[n]}function G_(n){return R_[n]}function es(n){return{fieldPath:n.canonicalString()}}function ts(n){return qe.fromServerFormat(n.fieldPath)}function Eh(n){return n instanceof De?function(t){if(t.op==="=="){if(Ol(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NAN"}};if(Vl(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ol(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NOT_NAN"}};if(Vl(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(t.field),op:W_(t.op),value:t.value}}}(n):n instanceof St?function(t){const s=t.getFilters().map(r=>Eh(r));return s.length===1?s[0]:{compositeFilter:{op:G_(t.op),filters:s}}}(n):X(54877,{filter:n})}function H_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Th(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ah(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t,s,r,i=ee.min(),a=ee.min(),l=Fe.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.yt=e}}function Q_(n){const e=F_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Sn=new J_}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(cn.min())}updateCollectionGroup(e,t,s){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class J_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ve(Ee.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sh=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(Sh,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ps(0)}static ar(){return new ps(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="LruGarbageCollector",Y_=1048576;function Xl([n,e],[t,s]){const r=le(n,t);return r===0?le(e,s):r}class X_{constructor(e){this.Pr=e,this.buffer=new Ve(Xl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Z_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Yl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Is(t)?B(Yl,"Ignoring IndexedDB error during garbage collection: ",t):await vs(t)}await this.Ar(3e5)})}}class ev{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Ni.ce);const s=new X_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Jl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,l,d,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r))).next(m=>(s=m,l=Date.now(),this.removeTargets(e,s,t))).next(m=>(i=m,d=Date.now(),this.removeOrphanedDocuments(e,s))).next(m=>(h=Date.now(),Xn()<=ce.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(d-l)+`ms
	Removed ${m} documents in `+(h-d)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m})))}}function tv(n,e){return new ev(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.changes=new zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?D.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&tr(s.mutation,r,at.empty(),Te.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ue()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ue()){const r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=$s();return i.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ue()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,r){let i=Ot();const a=er(),l=function(){return er()}();return t.forEach((d,h)=>{const p=s.get(h.key);r.has(h.key)&&(p===void 0||p.mutation instanceof Fn)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),tr(p.mutation,h,p.mutation.getFieldMask(),Te.now())):a.set(h.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(d=>(d.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>l.set(h,new sv(p,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const s=er();let r=new Ae((a,l)=>a-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(d=>{const h=t.get(d);if(h===null)return;let p=s.get(d)||at.empty();p=l.applyToLocalView(h,p),s.set(d,p);const m=(r.get(l.batchId)||ue()).add(d);r=r.insert(l.batchId,m)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,p=d.value,m=ah();p.forEach(y=>{if(!i.has(y)){const S=fh(t.get(y),s.get(y));S!==null&&m.set(y,S),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return D.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return i_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):o_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):D.resolve(Sn());let l=ir,d=i;return a.next(h=>D.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{d=d.insert(p,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,d,h,ue())).next(p=>({batchId:l,changes:oh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(s=>{let r=$s();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,d=>{const h=function(m,y){return new Di(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(p=>{p.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((d,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,We.newInvalidDocument(p)))});let l=$s();return a.forEach((d,h)=>{const p=i.get(d);p!==void 0&&tr(p.mutation,h,at.empty(),Te.now()),Vi(t,h)&&(l=l.insert(d,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:bt(r.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:Q_(r.bundledQuery),readTime:bt(r.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.overlays=new Ae(K.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Sn();return D.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),D.resolve()}getOverlaysForCollection(e,t,s){const r=Sn(),i=t.length+1,a=new K(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>s&&r.set(d.getKey(),d)}return D.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Ae((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let p=i.get(h.largestBatchId);p===null&&(p=Sn(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Sn(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=r)););return D.resolve(l)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new T_(t,s));let i=this.Lr.get(t);i===void 0&&(i=ue(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.kr=new Ve(Me.Kr),this.qr=new Ve(Me.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Me(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Me(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new K(new Ee([])),s=new Me(t,e),r=new Me(t,e+1),i=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new Ee([])),s=new Me(t,e),r=new Me(t,e+1);let i=ue();return this.qr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Me(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Me{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||le(e.Hr,t.Hr)}static Ur(e,t){return le(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ve(Me.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new E_(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Jr=this.Jr.add(new Me(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?wa:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Me(t,0),r=new Me(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],a=>{const l=this.Zr(a.Hr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ve(le);return t.forEach(r=>{const i=new Me(r,0),a=new Me(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],l=>{s=s.add(l.Hr)})}),D.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const a=new Me(new K(i),0);let l=new Ve(le);return this.Jr.forEachWhile(d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(d.Hr)),!0)},a),D.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return D.forEach(t.mutations,r=>{const i=new Me(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new Me(t,0),r=this.Jr.firstAfterOrEqual(s);return D.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.ti=e,this.docs=function(){return new Ae(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return D.resolve(s?s.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let s=Ot();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():We.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Ot();const a=t.path,l=new K(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:p}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Vw(jw(p),s)<=0||(r.has(p.key)||Vi(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,s,r){X(9500)}ni(e,t){return D.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new uv(this)}getSize(e){return D.resolve(this.size)}}class uv extends nv{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.persistence=e,this.ri=new zn(t=>Ia(t),ba),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new ka,this.targetCount=0,this.oi=ps._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ps(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),D.waitFor(i).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return D.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),D.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return D.resolve(s)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this._i={},this.overlays={},this.ai=new Ni(0),this.ui=!1,this.ui=!0,this.ci=new av,this.referenceDelegate=e(this),this.li=new dv(this),this.indexManager=new K_,this.remoteDocumentCache=function(r){return new lv(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new $_(t),this.Pi=new iv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ov,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new cv(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){B("MemoryPersistence","Starting transaction:",e);const r=new hv(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ii(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return D.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class hv extends Mw{constructor(e){super(),this.currentSequenceNumber=e}}class Na{constructor(e){this.persistence=e,this.Ri=new ka,this.Ai=null}static Vi(e){return new Na(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),D.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,s=>{const r=K.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,ee.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class mi{constructor(e,t){this.persistence=e,this.fi=new zn(s=>zw(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=tv(this,t)}static Vi(e,t){return new mi(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return D.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?D.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(l=>{l||(s++,i.removeEntry(a,ee.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),D.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qr(e.data.value)),t}wr(e,t,s){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return D.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=ue(),r=ue();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pa(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return qp()?8:Lw(Ge())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new fv;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Xn()<=ce.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Zn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Xn()<=ce.DEBUG&&B("QueryEngine","Query:",Zn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Xn()<=ce.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Zn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):D.resolve())}gs(e,t){if(zl(t))return D.resolve(null);let s=vt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=zo(t,null,"F"),s=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=ue(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(d=>{const h=this.bs(t,l);return this.Ss(t,h,a,d.readTime)?this.gs(e,zo(t,null,"F")):this.Ds(e,h,t,d)}))})))}ps(e,t,s,r){return zl(t)||r.isEqual(ee.min())?D.resolve(null):this.fs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,s,r)?D.resolve(null):(Xn()<=ce.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zn(t)),this.Ds(e,a,t,Dw(r,ir)).next(l=>l))})}bs(e,t){let s=new Ve(rh(e));return t.forEach((r,i)=>{Vi(e,i)&&(s=s.add(i))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Xn()<=ce.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Zn(t)),this.fs.getDocumentsMatchingQuery(e,t,cn.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="LocalStore",mv=3e8;class gv{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Ae(le),this.Fs=new zn(i=>Ia(i),ba),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function yv(n,e,t,s){return new gv(n,e,t,s)}async function Ch(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let d=ue();for(const h of r){a.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}return t.localDocuments.getDocuments(s,d).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function wv(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,d,h,p){const m=h.batch,y=m.keys();let S=D.resolve();return y.forEach(x=>{S=S.next(()=>p.getEntry(d,x)).next(P=>{const R=h.docVersions.get(x);pe(R!==null,48541),P.version.compareTo(R)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(d,m))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let d=ue();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function kh(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function _v(n,e){const t=te(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach((p,m)=>{const y=r.get(m);if(!y)return;l.push(t.li.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.li.addMatchingKeys(i,p.addedDocuments,m)));let S=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Fe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,s)),r=r.insert(m,S),function(P,R,O){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=mv?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,S,p)&&l.push(t.li.updateTargetData(i,S))});let d=Ot(),h=ue();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(vv(i,a,e.documentUpdates).next(p=>{d=p.Bs,h=p.Ls})),!s.isEqual(ee.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next(m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(p)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,d,h)).next(()=>d)}).then(i=>(t.vs=r,i))}function vv(n,e,t){let s=ue(),r=ue();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Ot();return t.forEach((l,d)=>{const h=i.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(ee.min())?(e.removeEntry(l,d.readTime),a=a.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(l,d)):B(Ra,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)}),{Bs:a,Ls:r}})}function Iv(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=wa),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bv(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,D.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new Xt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function Go(n,e,t){const s=te(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Is(a))throw a;B(Ra,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Zl(n,e,t){const s=te(n);let r=ee.min(),i=ue();return s.persistence.runTransaction("Execute query","readwrite",a=>function(d,h,p){const m=te(d),y=m.Fs.get(p);return y!==void 0?D.resolve(m.vs.get(y)):m.li.getTargetData(h,p)}(s,a,vt(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,l.targetId).next(d=>{i=d})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:ee.min(),t?i:ue())).next(l=>(Ev(s,c_(e),l),{documents:l,ks:i})))}function Ev(n,e,t){let s=n.Ms.get(e)||ee.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class eu{constructor(){this.activeTargetIds=p_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tv{constructor(){this.vo=new eu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new eu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="ConnectivityMonitor";class nu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(tu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(tu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr=null;function Ho(){return qr===null?qr=function(){return 268435456+Math.round(2147483648*Math.random())}():qr++,"0x"+qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="RestConnection",Sv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===ci?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Ho(),l=this.Qo(e,t.toUriEncodedString());B(wo,`Sending RPC '${e}' ${a}:`,l,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,i);const{host:h}=new URL(l),p=gs(h);return this.zo(e,l,d,s,p).then(m=>(B(wo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Pn(wo,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",s),m})}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=Sv[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection",Us=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class is extends xv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!is.c_){const e=Vd();Us(e,jd.STAT_EVENT,t=>{t.stat===jo.PROXY?B(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===jo.NOPROXY&&B(Ue,"STAT_EVENT: detected no buffering proxy")}),is.c_=!0}}zo(e,t,s,r,i){const a=Ho();return new Promise((l,d)=>{const h=new Rd;h.setWithCredentials(!0),h.listenOnce(Dd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $r.NO_ERROR:const m=h.getResponseJson();B(Ue,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case $r.TIMEOUT:B(Ue,`RPC '${e}' ${a} timed out`),d(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const y=h.getStatus();if(B(Ue,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const P=function(O){const V=O.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(V)>=0?V:j.UNKNOWN}(x.status);d(new G(P,x.message))}else d(new G(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new G(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Ue,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);B(Ue,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",p,s,15)})}T_(e,t,s){const r=Ho(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=i.join("");B(Ue,`Creating RPC '${e}' stream ${r}: ${h}`,l);const p=a.createWebChannel(h,l);this.I_(p);let m=!1,y=!1;const S=new Cv({Ho:x=>{y?B(Ue,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(m||(B(Ue,`Opening RPC '${e}' stream ${r} transport.`),p.open(),m=!0),B(Ue,`RPC '${e}' stream ${r} sending:`,x),p.send(x))},Jo:()=>p.close()});return Us(p,Hs.EventType.OPEN,()=>{y||(B(Ue,`RPC '${e}' stream ${r} transport opened.`),S.i_())}),Us(p,Hs.EventType.CLOSE,()=>{y||(y=!0,B(Ue,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(p))}),Us(p,Hs.EventType.ERROR,x=>{y||(y=!0,Pn(Ue,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),S.o_(new G(j.UNAVAILABLE,"The operation could not be completed")))}),Us(p,Hs.EventType.MESSAGE,x=>{var P;if(!y){const R=x.data[0];pe(!!R,16349);const O=R,V=(O==null?void 0:O.error)||((P=O[0])==null?void 0:P.error);if(V){B(Ue,`RPC '${e}' stream ${r} received error:`,V);const z=V.status;let F=function(b){const g=Ne[b];if(g!==void 0)return mh(g)}(z),L=V.message;z==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Pn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=j.INTERNAL,L="Unknown error status: "+z+" with message "+V.message),y=!0,S.o_(new G(F,L)),p.close()}else B(Ue,`RPC '${e}' stream ${r} received:`,R),S.__(R)}}),is.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Od()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n){return new is(n)}function _o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){return new D_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is.c_=!1;class Nh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="PersistentStream";class Ph{constructor(e,t,s,r,i,a,l,d){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new G(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(su,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(B(su,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nv extends Ph{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=O_(this.serializer,e),s=function(i){if(!("targetChange"in i))return ee.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?bt(a.readTime):ee.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Wo(this.serializer),t.addTarget=function(i,a){let l;const d=a.target;if(l=qo(d)?{documents:q_(i,d)}:{query:z_(i,d).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=wh(i,a.resumeToken);const h=Fo(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){l.readTime=pi(i,a.snapshotVersion.toTimestamp());const h=Fo(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const s=U_(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.K_(t)}}class Pv extends Ph{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=L_(e.writeResults,e.commitTime),s=bt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Wo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>M_(this.serializer,s))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{}class Dv extends Rv{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Uo(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(j.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Uo(t,s),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(j.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function jv(n,e,t,s){return new Dv(n,e,t,s)}class Vv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vt(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="RemoteStore";class Ov{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{s.enqueueAndForget(async()=>{Un(this)&&(B(Rn,"Restarting streams for network reachability change."),await async function(d){const h=te(d);h.Ea.add(4),await vr(h),h.Va.set("Unknown"),h.Ea.delete(4),await zi(h)}(this))})}),this.Va=new Vv(s,r)}}async function zi(n){if(Un(n))for(const e of n.Ra)await e(!0)}async function vr(n){for(const e of n.Ra)await e(!1)}function Rh(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Oa(t)?Va(t):bs(t).O_()&&ja(t,e))}function Da(n,e){const t=te(n),s=bs(t);t.Ia.delete(e),s.O_()&&Dh(t,e),t.Ia.size===0&&(s.O_()?s.L_():Un(t)&&t.Va.set("Unknown"))}function ja(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bs(n).Z_(e)}function Dh(n,e){n.da.$e(e),bs(n).X_(e)}function Va(n){n.da=new k_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),bs(n).start(),n.Va.ua()}function Oa(n){return Un(n)&&!bs(n).x_()&&n.Ia.size>0}function Un(n){return te(n).Ea.size===0}function jh(n){n.da=void 0}async function Mv(n){n.Va.set("Online")}async function Lv(n){n.Ia.forEach((e,t)=>{ja(n,e)})}async function qv(n,e){jh(n),Oa(n)?(n.Va.ha(e),Va(n)):n.Va.set("Unknown")}async function zv(n,e,t){if(n.Va.set("Online"),e instanceof yh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.da.removeTarget(l))}(n,e)}catch(s){B(Rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gi(n,s)}else if(e instanceof Yr?n.da.Xe(e):e instanceof gh?n.da.st(e):n.da.tt(e),!t.isEqual(ee.min()))try{const s=await kh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const p=i.Ia.get(h);p&&i.Ia.set(h,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,h)=>{const p=i.Ia.get(d);if(!p)return;i.Ia.set(d,p.withResumeToken(Fe.EMPTY_BYTE_STRING,p.snapshotVersion)),Dh(i,d);const m=new Xt(p.target,d,h,p.sequenceNumber);ja(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){B(Rn,"Failed to raise snapshot:",s),await gi(n,s)}}async function gi(n,e,t){if(!Is(e))throw e;n.Ea.add(1),await vr(n),n.Va.set("Offline"),t||(t=()=>kh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B(Rn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zi(n)})}function Vh(n,e){return e().catch(t=>gi(n,t,e))}async function Fi(n){const e=te(n),t=hn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wa;for(;Fv(e);)try{const r=await Iv(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Uv(e,r)}catch(r){await gi(e,r)}Oh(e)&&Mh(e)}function Fv(n){return Un(n)&&n.Ta.length<10}function Uv(n,e){n.Ta.push(e);const t=hn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Oh(n){return Un(n)&&!hn(n).x_()&&n.Ta.length>0}function Mh(n){hn(n).start()}async function Bv(n){hn(n).ra()}async function Wv(n){const e=hn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Gv(n,e,t){const s=n.Ta.shift(),r=Sa.from(s,e,t);await Vh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Fi(n)}async function Hv(n,e){e&&hn(n).Y_&&await async function(s,r){if(function(a){return S_(a)&&a!==j.ABORTED}(r.code)){const i=s.Ta.shift();hn(s).B_(),await Vh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Fi(s)}}(n,e),Oh(n)&&Mh(n)}async function ru(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),B(Rn,"RemoteStore received new credentials");const s=Un(t);t.Ea.add(3),await vr(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zi(t)}async function $v(n,e){const t=te(n);e?(t.Ea.delete(2),await zi(t)):e||(t.Ea.add(2),await vr(t),t.Va.set("Unknown"))}function bs(n){return n.ma||(n.ma=function(t,s,r){const i=te(t);return i.sa(),new Nv(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:Mv.bind(null,n),Yo:Lv.bind(null,n),t_:qv.bind(null,n),J_:zv.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Oa(n)?Va(n):n.Va.set("Unknown")):(await n.ma.stop(),jh(n))})),n.ma}function hn(n){return n.fa||(n.fa=function(t,s,r){const i=te(t);return i.sa(),new Pv(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Bv.bind(null,n),t_:Hv.bind(null,n),ta:Wv.bind(null,n),na:Gv.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Fi(n)):(await n.fa.stop(),n.Ta.length>0&&(B(Rn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new Ma(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function La(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Is(n))return new G(j.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static emptySet(e){return new os(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||K.comparator(t.key,s.key):(t,s)=>K.comparator(t.key,s.key),this.keyedMap=$s(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.ga=new Ae(K.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class ms{constructor(e,t,s,r,i,a,l,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ms(e,t,os.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Kv{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=te(t),i=r.queries;r.queries=ou(),i.forEach((a,l)=>{for(const d of l.ba)d.onError(s)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function ou(){return new zn(n=>sh(n),ji)}async function Lh(n,e){const t=te(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new Qv,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=La(a,`Initialization of query '${Zn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&qa(t)}async function qh(n,e){const t=te(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Jv(n,e){const t=te(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.ba)l.Fa(r)&&(s=!0);a.wa=r}}s&&qa(t)}function Yv(n,e,t){const s=te(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function qa(n){n.Ca.forEach(e=>{e.next()})}var $o,au;(au=$o||($o={})).Ma="default",au.Cache="cache";class zh{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ms(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$o.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class Xv{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ue(),this.mutatedKeys=ue(),this.eu=rh(e),this.tu=new os(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new iu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,m)=>{const y=r.get(p),S=Vi(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let R=!1;y&&S?y.data.isEqual(S.data)?x!==P&&(s.track({type:3,doc:S}),R=!0):this.su(y,S)||(s.track({type:2,doc:S}),R=!0,(d&&this.eu(S,d)>0||h&&this.eu(S,h)<0)&&(l=!0)):!y&&S?(s.track({type:0,doc:S}),R=!0):y&&!S&&(s.track({type:1,doc:y}),R=!0,(d||h)&&(l=!0)),R&&(S?(a=a.add(S),i=P?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),s.track({type:1,doc:p})}return{tu:a,iu:s,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,m)=>function(S,x){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:R})}};return P(S)-P(x)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],d=this.Ya.size===0&&this.current&&!r?1:0,h=d!==this.Xa;return this.Xa=d,a.length!==0||h?{snapshot:new ms(this.query,e.tu,i,a,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ue(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Uh(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Fh(s))}),t}cu(e){this.Za=e.ks,this.Ya=ue();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const za="SyncEngine";class Zv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eI{constructor(e){this.key=e,this.hu=!1}}class tI{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new zn(l=>sh(l),ji),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ae(K.comparator),this.Au=new Map,this.Vu=new ka,this.du={},this.mu=new Map,this.fu=ps.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nI(n,e,t=!0){const s=Qh(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Bh(s,e,t,!0),r}async function sI(n,e){const t=Qh(n);await Bh(t,e,!0,!1)}async function Bh(n,e,t,s){const r=await bv(n.localStore,vt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await rI(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Rh(n.remoteStore,r),l}async function rI(n,e,t,s,r){n.pu=(m,y,S)=>async function(P,R,O,V){let z=R.view.ru(O);z.Ss&&(z=await Zl(P.localStore,R.query,!1).then(({documents:b})=>R.view.ru(b,z)));const F=V&&V.targetChanges.get(R.targetId),L=V&&V.targetMismatches.get(R.targetId)!=null,q=R.view.applyChanges(z,P.isPrimaryClient,F,L);return lu(P,R.targetId,q.au),q.snapshot}(n,m,y,S);const i=await Zl(n.localStore,e,!0),a=new Xv(e,i.ks),l=a.ru(i.documents),d=_r.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(l,n.isPrimaryClient,d);lu(n,t,h.au);const p=new Zv(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function iI(n,e,t){const s=te(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(a=>!ji(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Go(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Da(s.remoteStore,r.targetId),Qo(s,r.targetId)}).catch(vs)):(Qo(s,r.targetId),await Go(s.localStore,r.targetId,!0))}async function oI(n,e){const t=te(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Da(t.remoteStore,s.targetId))}async function aI(n,e,t){const s=pI(n);try{const r=await function(a,l){const d=te(a),h=Te.now(),p=l.reduce((S,x)=>S.add(x.key),ue());let m,y;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Ot(),P=ue();return d.xs.getEntries(S,p).next(R=>{x=R,x.forEach((O,V)=>{V.isValidDocument()||(P=P.add(O))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,x)).next(R=>{m=R;const O=[];for(const V of l){const z=I_(V,m.get(V.key).overlayedDocument);z!=null&&O.push(new Fn(V.key,z,Jd(z.value.mapValue),It.exists(!0)))}return d.mutationQueue.addMutationBatch(S,h,O,l)}).next(R=>{y=R;const O=R.applyToLocalDocumentSet(m,P);return d.documentOverlayCache.saveOverlays(S,R.batchId,O)})}).then(()=>({batchId:y.batchId,changes:oh(m)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,d){let h=a.du[a.currentUser.toKey()];h||(h=new Ae(le)),h=h.insert(l,d),a.du[a.currentUser.toKey()]=h}(s,r.batchId,t),await Ir(s,r.changes),await Fi(s.remoteStore)}catch(r){const i=La(r,"Failed to persist write");t.reject(i)}}async function Wh(n,e){const t=te(n);try{const s=await _v(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Au.get(i);a&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?pe(a.hu,14607):r.removedDocuments.size>0&&(pe(a.hu,42227),a.hu=!1))}),await Ir(t,s,e)}catch(s){await vs(s)}}function cu(n,e,t){const s=te(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const d=te(a);d.onlineState=l;let h=!1;d.queries.forEach((p,m)=>{for(const y of m.ba)y.va(l)&&(h=!0)}),h&&qa(d)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cI(n,e,t){const s=te(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new Ae(K.comparator);a=a.insert(i,We.newNoDocument(i,ee.min()));const l=ue().add(i),d=new Li(ee.min(),new Map,new Ae(le),a,l);await Wh(s,d),s.Ru=s.Ru.remove(i),s.Au.delete(e),Fa(s)}else await Go(s.localStore,e,!1).then(()=>Qo(s,e,t)).catch(vs)}async function lI(n,e){const t=te(n),s=e.batch.batchId;try{const r=await wv(t.localStore,e);Hh(t,s,null),Gh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ir(t,r)}catch(r){await vs(r)}}async function uI(n,e,t){const s=te(n);try{const r=await function(a,l){const d=te(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return d.mutationQueue.lookupMutationBatch(h,l).next(m=>(pe(m!==null,37113),p=m.keys(),d.mutationQueue.removeMutationBatch(h,m))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>d.localDocuments.getDocuments(h,p))})}(s.localStore,e);Hh(s,e,t),Gh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ir(s,r)}catch(r){await vs(r)}}function Gh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Hh(n,e,t){const s=te(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||$h(n,s)})}function $h(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Da(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Fa(n))}function lu(n,e,t){for(const s of t)s instanceof Fh?(n.Vu.addReference(s.key,e),dI(n,s)):s instanceof Uh?(B(za,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||$h(n,s.key)):X(19791,{wu:s})}function dI(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(B(za,"New document in limbo: "+t),n.Eu.add(s),Fa(n))}function Fa(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(Ee.fromString(e)),s=n.fu.next();n.Au.set(s,new eI(t)),n.Ru=n.Ru.insert(t,s),Rh(n.remoteStore,new Xt(vt(Ea(t.path)),s,"TargetPurposeLimboResolution",Ni.ce))}}async function Ir(n,e,t){const s=te(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((l,d)=>{a.push(s.pu(d,e,t).then(h=>{var p;if((h||t)&&s.isPrimaryClient){const m=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:p.current;s.sharedClientState.updateQueryState(d.targetId,m?"current":"not-current")}if(h){r.push(h);const m=Pa.Es(d.targetId,h);i.push(m)}}))}),await Promise.all(a),s.Pu.J_(r),await async function(d,h){const p=te(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>D.forEach(h,y=>D.forEach(y.Ts,S=>p.persistence.referenceDelegate.addReference(m,y.targetId,S)).next(()=>D.forEach(y.Is,S=>p.persistence.referenceDelegate.removeReference(m,y.targetId,S)))))}catch(m){if(!Is(m))throw m;B(Ra,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const S=p.vs.get(y),x=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(x);p.vs=p.vs.insert(y,P)}}}(s.localStore,i))}async function hI(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){B(za,"User change. New user:",e.toKey());const s=await Ch(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(d=>{d.reject(new G(j.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ir(t,s.Ns)}}function fI(n,e){const t=te(n),s=t.Au.get(e);if(s&&s.hu)return ue().add(s.key);{let r=ue();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function Qh(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cI.bind(null,e),e.Pu.J_=Jv.bind(null,e.eventManager),e.Pu.yu=Yv.bind(null,e.eventManager),e}function pI(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uI.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yv(this.persistence,new pv,e.initialUser,this.serializer)}Cu(e){return new xh(Na.Vi,this.serializer)}Du(e){return new Tv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class mI extends yi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof mi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Z_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new xh(s=>mi.Vi(s,t),this.serializer)}}class Ko{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hI.bind(null,this.syncEngine),await $v(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kv}()}createDatastore(e){const t=qi(e.databaseInfo.databaseId),s=kv(e.databaseInfo);return jv(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,l){return new Ov(s,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>cu(this.syncEngine,t,0),function(){return nu.v()?new nu:new Av}())}createSyncEngine(e,t){return function(r,i,a,l,d,h,p){const m=new tI(r,i,a,l,d,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=te(r);B(Rn,"RemoteStore shutting down."),i.Ea.add(5),await vr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ko.provider={build:()=>new Ko};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="FirestoreClient";class gI{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Be.UNAUTHENTICATED,this.clientId=ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{B(fn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(B(fn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=La(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vo(n,e){n.asyncQueue.verifyOperationInProgress(),B(fn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ch(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function uu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yI(n);B(fn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>ru(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>ru(e.remoteStore,r)),n._onlineComponents=e}async function yI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(fn,"Using user provided OfflineComponentProvider");try{await vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Pn("Error using user provided cache. Falling back to memory cache: "+t),await vo(n,new yi)}}else B(fn,"Using default OfflineComponentProvider"),await vo(n,new mI(void 0));return n._offlineComponents}async function Jh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(fn,"Using user provided OnlineComponentProvider"),await uu(n,n._uninitializedComponentsProvider._online)):(B(fn,"Using default OnlineComponentProvider"),await uu(n,new Ko))),n._onlineComponents}function wI(n){return Jh(n).then(e=>e.syncEngine)}async function Yh(n){const e=await Jh(n),t=e.eventManager;return t.onListen=nI.bind(null,e.syncEngine),t.onUnlisten=iI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oI.bind(null,e.syncEngine),t}function _I(n,e,t={}){const s=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,d,h){const p=new Kh({next:y=>{p.Nu(),a.enqueueAndForget(()=>qh(i,m));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&d&&d.source==="server"?h.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new zh(Ea(l.path),p,{includeMetadataChanges:!0,Ka:!0});return Lh(i,m)}(await Yh(n),n.asyncQueue,e,t,s)),s.promise}function vI(n,e,t={}){const s=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,d,h){const p=new Kh({next:y=>{p.Nu(),a.enqueueAndForget(()=>qh(i,m)),y.fromCache&&d.source==="server"?h.reject(new G(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new zh(l,p,{includeMetadataChanges:!0,Ka:!0});return Lh(i,m)}(await Yh(n),n.asyncQueue,e,t,s)),s.promise}function II(n,e){const t=new Rt;return n.asyncQueue.enqueueAndForget(async()=>aI(await wI(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="ComponentProvider",du=new Map;function EI(n,e,t,s,r){return new Bw(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Xh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="firestore.googleapis.com",hu=!0;class fu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zh,this.ssl=hu}else this.host=e.host,this.ssl=e.ssl??hu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Y_)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xh(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ui{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new bw;switch(s.type){case"firstParty":return new Sw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=du.get(t);s&&(B(bI,"Removing Datastore"),du.delete(t),s.terminate())}(this),Promise.resolve()}}function TI(n,e,t,s={}){var h;n=an(n,Ui);const r=gs(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(Wu(`https://${l}`),Gu("Firestore",!0)),i.host!==Zh&&i.host!==l&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:l,ssl:r,emulatorOptions:s};if(!on(d,a)&&(n._setSettings(d),s.mockUserToken)){let p,m;if(typeof s.mockUserToken=="string")p=s.mockUserToken,m=Be.MOCK_USER;else{p=Pp(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Be(y)}n._authCredentials=new Ew(new Ld(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class je{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(yr(t,je._jsonSchema))return new je(e,s||null,new K(Ee.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Pe("string",je._jsonSchemaVersion),referencePath:Pe("string")};class sn extends Bi{constructor(e,t,s){super(e,t,Ea(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new K(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function AI(n,e,...t){if(n=ze(n),qd("collection","path",e),n instanceof Ui){const s=Ee.fromString(e,...t);return xl(s),new sn(n,null,s)}{if(!(n instanceof je||n instanceof sn))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ee.fromString(e,...t));return xl(s),new sn(n.firestore,null,s)}}function Bn(n,e,...t){if(n=ze(n),arguments.length===1&&(e=ga.newId()),qd("doc","path",e),n instanceof Ui){const s=Ee.fromString(e,...t);return Sl(s),new je(n,null,new K(s))}{if(!(n instanceof je||n instanceof sn))throw new G(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ee.fromString(e,...t));return Sl(s),new je(n.firestore,n instanceof sn?n.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="AsyncQueue";class mu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nh(this,"async_queue_retry"),this._c=()=>{const s=_o();s&&B(pu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Rt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Is(e))throw e;B(pu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",gu(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ma.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&X(47125,{Pc:gu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class br extends Ui{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new mu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mu(e),this._firestoreClient=void 0,await e}}}function SI(n,e){const t=typeof n=="object"?n:ra(),s=typeof n=="string"?n:ci,r=On(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=kp("firestore");i&&TI(r,...i)}return r}function Ua(n){if(n._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xI(n),n._firestoreClient}function xI(n){var s,r,i,a;const e=n._freezeSettings(),t=EI(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new gI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nt(Fe.fromBase64String(e))}catch(t){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nt(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yr(e,nt._jsonSchema))return nt.fromBase64String(e.bytes)}}nt._jsonSchemaVersion="firestore/bytes/1.0",nt._jsonSchema={type:Pe("string",nt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(yr(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Pe("string",Et._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yr(e,lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new lt(e.vectorValues);throw new G(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lt._jsonSchemaVersion="firestore/vectorValue/1.0",lt._jsonSchema={type:Pe("string",lt._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^__.*__$/;class kI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}function nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:n})}}class Ba{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ba({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return wi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(nf(this.dataSource)&&CI.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class NI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||qi(e)}createContext(e,t,s,r=!1){return new Ba({dataSource:e,methodName:t,targetDoc:s,path:qe.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PI(n){const e=n._freezeSettings(),t=qi(n._databaseId);return new NI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function RI(n,e,t,s,r,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);af("Data must be an object, but it was:",a,s);const l=rf(s,a);let d,h;if(i.merge)d=new at(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const y=Wa(e,m,t);if(!a.contains(y))throw new G(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);VI(p,y)||p.push(y)}d=new at(p),h=a.fieldTransforms.filter(m=>d.covers(m.field))}else d=null,h=a.fieldTransforms;return new kI(new tt(l),d,h)}function sf(n,e){if(of(n=ze(n)))return af("Unsupported field value:",e,n),rf(n,e);if(n instanceof tf)return function(s,r){if(!nf(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const l of s){let d=sf(l,r.childContextForArray(a));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return m_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Te.fromDate(s);return{timestampValue:pi(r.serializer,i)}}if(s instanceof Te){const i=new Te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:pi(r.serializer,i)}}if(s instanceof Et)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof nt)return{bytesValue:wh(r.serializer,s._byteString)};if(s instanceof je){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ca(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof lt)return function(a,l){const d=a instanceof lt?a.toArray():a;return{mapValue:{fields:{[Qd]:{stringValue:Kd},[li]:{arrayValue:{values:d.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return Ta(l.serializer,p)})}}}}}}(s,r);if(Ah(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${ya(s)}`)}(n,e)}function rf(n,e){const t={};return Ud(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,(s,r)=>{const i=sf(r,e.childContextForField(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function of(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Et||n instanceof nt||n instanceof je||n instanceof tf||n instanceof lt||Ah(n))}function af(n,e,t){if(!of(t)||!zd(t)){const s=ya(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Wa(n,e,t){if((e=ze(e))instanceof ef)return e._internalPath;if(typeof e=="string")return jI(n,e);throw wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const DI=new RegExp("[~\\*/\\[\\]]");function jI(n,e,t){if(e.search(DI)>=0)throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wi(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(i||a)&&(d+=" (found",i&&(d+=` in field ${s}`),a&&(d+=` in document ${r}`),d+=")"),new G(j.INVALID_ARGUMENT,l+n+d)}function VI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return qn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[li].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>Ce(a.doubleValue));return new lt(t)}convertGeoPoint(e){return new Et(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ri(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=ln(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ee.fromString(e);pe(Th(s),9688,{name:e});const r=new ar(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(t)||Vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends OI{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}const yu="@firebase/firestore",wu="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Wa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MI extends lf{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function qI(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cn extends lf{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Wa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:Pe("string",Cn._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Xr extends Cn{data(e={}){return super.data(e)}}class as{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ks(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Xr(this._firestore,this._userDataWriter,s.key,s,new Ks(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const d=new Xr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ks(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const d=new Xr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ks(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:zI(l.type),doc:d,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=as._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ga.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:Pe("string",as._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){n=an(n,je);const e=an(n.firestore,br),t=Ua(e);return _I(t,n._key).then(s=>BI(e,n,s))}function FI(n){n=an(n,Bi);const e=an(n.firestore,br),t=Ua(e),s=new cf(e);return LI(n._query),vI(t,n._query).then(r=>new as(e,s,n,r))}function Wi(n,e,t){n=an(n,je);const s=an(n.firestore,br),r=qI(n.converter,e),i=PI(s);return df(s,[RI(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,It.none())])}function UI(n){return df(an(n.firestore,br),[new Aa(n._key,It.none())])}function df(n,e){const t=Ua(n);return II(t,e)}function BI(n,e,t){const s=t.docs.get(e._key),r=new cf(n);return new Cn(n,r,e._key,s,new Ks(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Iw(ys),Tt(new ut("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new br(new Tw(s.getProvider("auth-internal")),new xw(a,s.getProvider("app-check-internal")),Ww(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),st(yu,wu,e),st(yu,wu,"esm2020")})();const hf="@firebase/installations",Ga="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=1e4,pf=`w:${Ga}`,mf="FIS_v2",WI="https://firebaseinstallations.googleapis.com/v1",GI=60*60*1e3,HI="installations",$I="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dn=new Vn(HI,$I,QI);function gf(n){return n instanceof dt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf({projectId:n}){return`${WI}/projects/${n}/installations`}function wf(n){return{token:n.token,requestStatus:2,expiresIn:JI(n.expiresIn),creationTime:Date.now()}}async function _f(n,e){const s=(await e.json()).error;return Dn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function vf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function KI(n,{refreshToken:e}){const t=vf(n);return t.append("Authorization",YI(e)),t}async function If(n){const e=await n();return e.status>=500&&e.status<600?n():e}function JI(n){return Number(n.replace("s","000"))}function YI(n){return`${mf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=yf(n),r=vf(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&r.append("x-firebase-client",h)}const a={fid:t,authVersion:mf,appId:n.appId,sdkVersion:pf},l={method:"POST",headers:r,body:JSON.stringify(a)},d=await If(()=>fetch(s,l));if(d.ok){const h=await d.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:wf(h.authToken)}}else throw await _f("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=/^[cdef][\w-]{21}$/,Jo="";function tb(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nb(n);return eb.test(t)?t:Jo}catch{return Jo}}function nb(n){return ZI(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new Map;function Tf(n,e){const t=Gi(n);Af(t,e),sb(t,e)}function Af(n,e){const t=Ef.get(n);if(t)for(const s of t)s(e)}function sb(n,e){const t=rb();t&&t.postMessage({key:n,fid:e}),ib()}let xn=null;function rb(){return!xn&&"BroadcastChannel"in self&&(xn=new BroadcastChannel("[Firebase] FID Change"),xn.onmessage=n=>{Af(n.data.key,n.data.fid)}),xn}function ib(){Ef.size===0&&xn&&(xn.close(),xn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebase-installations-database",ab=1,jn="firebase-installations-store";let Io=null;function Ha(){return Io||(Io=Ku(ob,ab,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(jn)}}})),Io}async function _i(n,e){const t=Gi(n),r=(await Ha()).transaction(jn,"readwrite"),i=r.objectStore(jn),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Tf(n,e.fid),e}async function Sf(n){const e=Gi(n),s=(await Ha()).transaction(jn,"readwrite");await s.objectStore(jn).delete(e),await s.done}async function Hi(n,e){const t=Gi(n),r=(await Ha()).transaction(jn,"readwrite"),i=r.objectStore(jn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&Tf(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n){let e;const t=await Hi(n.appConfig,s=>{const r=cb(s),i=lb(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Jo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function cb(n){const e=n||{fid:tb(),registrationStatus:0};return xf(e)}function lb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ub(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:db(n)}:{installationEntry:e}}async function ub(n,e){try{const t=await XI(n,e);return _i(n.appConfig,t)}catch(t){throw gf(t)&&t.customData.serverCode===409?await Sf(n.appConfig):await _i(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function db(n){let e=await _u(n.appConfig);for(;e.registrationStatus===1;)await bf(100),e=await _u(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await $a(n);return s||t}return e}function _u(n){return Hi(n,e=>{if(!e)throw Dn.create("installation-not-found");return xf(e)})}function xf(n){return hb(n)?{fid:n.fid,registrationStatus:0}:n}function hb(n){return n.registrationStatus===1&&n.registrationTime+ff<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb({appConfig:n,heartbeatServiceProvider:e},t){const s=pb(n,t),r=KI(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&r.append("x-firebase-client",h)}const a={installation:{sdkVersion:pf,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},d=await If(()=>fetch(s,l));if(d.ok){const h=await d.json();return wf(h)}else throw await _f("Generate Auth Token",d)}function pb(n,{fid:e}){return`${yf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n,e=!1){let t;const s=await Hi(n.appConfig,i=>{if(!Cf(i))throw Dn.create("not-registered");const a=i.authToken;if(!e&&yb(a))return i;if(a.requestStatus===1)return t=mb(n,e),i;{if(!navigator.onLine)throw Dn.create("app-offline");const l=_b(i);return t=gb(n,l),l}});return t?await t:s.authToken}async function mb(n,e){let t=await vu(n.appConfig);for(;t.authToken.requestStatus===1;)await bf(100),t=await vu(n.appConfig);const s=t.authToken;return s.requestStatus===0?Qa(n,e):s}function vu(n){return Hi(n,e=>{if(!Cf(e))throw Dn.create("not-registered");const t=e.authToken;return vb(t)?{...e,authToken:{requestStatus:0}}:e})}async function gb(n,e){try{const t=await fb(n,e),s={...e,authToken:t};return await _i(n.appConfig,s),t}catch(t){if(gf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Sf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await _i(n.appConfig,s)}throw t}}function Cf(n){return n!==void 0&&n.registrationStatus===2}function yb(n){return n.requestStatus===2&&!wb(n)}function wb(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+GI}function _b(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function vb(n){return n.requestStatus===1&&n.requestTime+ff<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n){const e=n,{installationEntry:t,registrationPromise:s}=await $a(e);return s?s.catch(console.error):Qa(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(n,e=!1){const t=n;return await Eb(t),(await Qa(t,e)).token}async function Eb(n){const{registrationPromise:e}=await $a(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){if(!n||!n.options)throw bo("App Configuration");if(!n.name)throw bo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw bo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function bo(n){return Dn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="installations",Ab="installations-internal",Sb=n=>{const e=n.getProvider("app").getImmediate(),t=Tb(e),s=On(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xb=n=>{const e=n.getProvider("app").getImmediate(),t=On(e,kf).getImmediate();return{getId:()=>Ib(t),getToken:r=>bb(t,r)}};function Cb(){Tt(new ut(kf,Sb,"PUBLIC")),Tt(new ut(Ab,xb,"PRIVATE"))}Cb();st(hf,Ga);st(hf,Ga,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="analytics",kb="firebase_id",Nb="origin",Pb=60*1e3,Rb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ka="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Ai("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new Vn("analytics","Analytics",Db);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n){if(!n.startsWith(Ka)){const e=Xe.create("invalid-gtag-resource",{gtagURL:n});return Qe.warn(e.message),""}return n}function Nf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Vb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Ob(n,e){const t=Vb("firebase-js-sdk-policy",{createScriptURL:jb}),s=document.createElement("script"),r=`${Ka}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Mb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Lb(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const d=(await Nf(t)).find(h=>h.measurementId===r);d&&await e[d.appId]}}catch(l){Qe.error(l)}n("config",r,i)}async function qb(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await Nf(t);for(const d of a){const h=l.find(m=>m.measurementId===d),p=h&&e[h.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){Qe.error(i)}}function zb(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[l,d]=a;await qb(n,e,t,l,d)}else if(i==="config"){const[l,d]=a;await Lb(n,e,t,s,l,d)}else if(i==="consent"){const[l,d]=a;n("consent",l,d)}else if(i==="get"){const[l,d,h]=a;n("get",l,d,h)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){Qe.error(l)}}return r}function Fb(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=zb(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function Ub(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ka)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=30,Wb=1e3;class Gb{constructor(e={},t=Wb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Pf=new Gb;function Hb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function $b(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:Hb(t)},r=Rb.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const d=await i.json();(a=d.error)!=null&&a.message&&(l=d.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function Qb(n,e=Pf,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Xe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Xe.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Yb;return setTimeout(async()=>{l.abort()},Pb),Rf({appId:s,apiKey:r,measurementId:i},a,l,e)}async function Rf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=Pf){var l;const{appId:i,measurementId:a}=n;try{await Kb(s,e)}catch(d){if(a)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw d}try{const d=await $b(n);return r.deleteThrottleMetadata(i),d}catch(d){const h=d;if(!Jb(h)){if(r.deleteThrottleMetadata(i),a)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw d}const p=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?Qc(t,r.intervalMillis,Bb):Qc(t,r.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return r.setThrottleMetadata(i,m),Qe.debug(`Calling attemptFetch again in ${p} millis`),Rf(n,m,s,r)}}function Kb(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jb(n){if(!(n instanceof dt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xb(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function Zb(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(){if(ta())try{await na()}catch(n){return Qe.warn(Xe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Qe.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tE(n,e,t,s,r,i,a){const l=Qb(n);l.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Qe.error(y)),e.push(l);const d=eE().then(y=>{if(y)return s.getId()}),[h,p]=await Promise.all([l,d]);Ub(i)||Ob(i,h.measurementId),r("js",new Date);const m=(a==null?void 0:a.config)??{};return m[Nb]="firebase",m.update=!0,p!=null&&(m[kb]=p),r("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.app=e}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},Iu=[];const bu={};let Eo="dataLayer",sE="gtag",Eu,Ja,Tu=!1;function rE(){const n=[];if(ea()&&n.push("This is a browser extension environment."),Hu()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Xe.create("invalid-analytics-context",{errorInfo:e});Qe.warn(t.message)}}function iE(n,e,t){rE();const s=n.options.appId;if(!s)throw Xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(cs[s]!=null)throw Xe.create("already-exists",{id:s});if(!Tu){Mb(Eo);const{wrappedGtag:i,gtagCore:a}=Fb(cs,Iu,bu,Eo,sE);Ja=i,Eu=a,Tu=!0}return cs[s]=tE(n,Iu,bu,e,Eu,Eo,t),new nE(n)}function oE(n=ra()){n=ze(n);const e=On(n,vi);return e.isInitialized()?e.getImmediate():aE(n)}function aE(n,e={}){const t=On(n,vi);if(t.isInitialized()){const r=t.getImmediate();if(on(e,t.getOptions()))return r;throw Xe.create("already-initialized")}return t.initialize({options:e})}async function cE(){if(ea()||!Hu()||!ta())return!1;try{return await na()}catch{return!1}}function lE(n,e,t){n=ze(n),Zb(Ja,cs[n.app.options.appId],e,t).catch(s=>Qe.error(s))}function uE(n,e,t,s){n=ze(n),Xb(Ja,cs[n.app.options.appId],e,t,s).catch(r=>Qe.error(r))}const Au="@firebase/analytics",Su="0.10.19";function dE(){Tt(new ut(vi,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return iE(s,r,t)},"PUBLIC")),Tt(new ut("analytics-internal",n,"PRIVATE")),st(Au,Su),st(Au,Su,"esm2020");function n(e){try{const t=e.getProvider(vi).getImmediate();return{logEvent:(s,r,i)=>uE(t,s,r,i),setUserProperties:(s,r)=>lE(t,s,r)}}catch(t){throw Xe.create("interop-component-reg-failed",{reason:t})}}}dE();const Df={apiKey:"AIzaSyB95-9OWWYNxMJNud5-gs4jhJ8Pv1fTx7I",authDomain:"itistudyu.firebaseapp.com",projectId:"itistudyu",storageBucket:"itistudyu.firebasestorage.app",messagingSenderId:"1095742655103",appId:"1:1095742655103:web:00246a53f90267e99f4d4a",measurementId:"G-RQDEYL608Z"},hE=!!Df.apiKey,Ya=Ju(Df),mn=SI(Ya),Ct=hE?yw(Ya):null;cE().then(n=>{n&&oE(Ya)});const jf=A.createContext(null),fE=new kt,pE=({children:n})=>{const[e,t]=A.useState(null),[s,r]=A.useState(!!Ct);A.useEffect(()=>Ct?iy(Ct,h=>{t(h),r(!1)}):void 0,[]);const i=(d,h)=>{if(!Ct)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return ny(Ct,d,h)},a=()=>{if(!Ct)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return Sy(Ct,fE)},l=()=>Ct?oy(Ct):Promise.resolve();return c.jsx(jf.Provider,{value:{user:e,loading:s,signInWithEmail:i,signInWithGoogle:a,signOut:l},children:n})},mE=()=>{const n=A.useContext(jf);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},gE=60*60*1e3;function Xa(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:s}=JSON.parse(e);return Date.now()-s>gE?null:t}catch{return null}}function Es(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function yE(){const n=Xa("books_old-testament");if(n)return n;try{const e=await uf(Bn(mn,"books","old-testament"));if(e.exists()){const t=e.data().books;return Es("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function wE(){const n=Xa("all_quizzes");if(n)return n;try{const e=await FI(AI(mn,"quizzes")),t=[];if(e.forEach(s=>t.push({id:s.id,...s.data()})),t.length>0)return Es("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function xu(n){const e=Xa(`translations_${n}`);if(e)return e;try{const t=await uf(Bn(mn,"translations",n));if(t.exists()){const s=t.data();return Es(`translations_${n}`,s),s}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function Vf(n){await Wi(Bn(mn,"books","old-testament"),{books:n}),Es("books_old-testament",n)}async function Of(n,e){await Wi(Bn(mn,"quizzes",n),e),Es(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function _E(n,e){await Wi(Bn(mn,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function vE(n){await UI(Bn(mn,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function Ii(n,e){await Wi(Bn(mn,"translations",n),e),Es(`translations_${n}`,e)}const Mf=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],bi={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},IE=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},Cu={en:[{id:1,question:"What does the Greek word 'agape' (ἀγάπη) mean?",options:["Unconditional love","Friendship","Knowledge","Hope"],correctIndex:0,reference:"1 Corinthians 13:13"},{id:2,question:"What does 'logos' (λόγος) mean in John 1:1?",options:["Light","The Word","Spirit","Life"],correctIndex:1,reference:"John 1:1"},{id:3,question:"What does 'charis' (χάρις) mean?",options:["Faith","Peace","Grace","Mercy"],correctIndex:2,reference:"Ephesians 2:8"},{id:4,question:"What does 'pistis' (πίστις) mean?",options:["Faith","Power","Wisdom","Patience"],correctIndex:0,reference:"Hebrews 11:1"},{id:5,question:"What does 'eirene' (εἰρήνη) mean?",options:["Joy","Truth","Glory","Peace"],correctIndex:3,reference:"John 14:27"},{id:6,question:"What does 'metanoia' (μετάνοια) mean?",options:["Baptism","Repentance","Salvation","Prayer"],correctIndex:1,reference:"Acts 2:38"},{id:7,question:"What does 'sozo' (σῴζω) mean?",options:["To judge","To preach","To save/deliver","To baptize"],correctIndex:2,reference:"Romans 10:9"},{id:8,question:"What does 'pneuma' (πνεῦμα) mean?",options:["Spirit/breath","Soul","Body","Mind"],correctIndex:0,reference:"John 3:8"},{id:9,question:"What does 'ekklesia' (ἐκκλησία) mean?",options:["Temple","Kingdom","Assembly/Church","Synagogue"],correctIndex:2,reference:"Matthew 16:18"},{id:10,question:"What does 'doxa' (δόξα) mean?",options:["Doctrine","Glory","Praise","Blessing"],correctIndex:1,reference:"John 1:14"},{id:11,question:"What does 'euangelion' (εὐαγγέλιον) mean?",options:["Prophecy","Commandment","Testimony","Good news/Gospel"],correctIndex:3,reference:"Mark 1:1"},{id:12,question:"What does 'hamartia' (ἁμαρτία) mean?",options:["Sin","Death","Curse","Darkness"],correctIndex:0,reference:"Romans 3:23"},{id:13,question:"What does 'koinonia' (κοινωνία) mean?",options:["Kingdom","Covenant","Fellowship/Communion","Ministry"],correctIndex:2,reference:"Acts 2:42"},{id:14,question:"What does 'dikaiosyne' (δικαιοσύνη) mean?",options:["Holiness","Righteousness","Obedience","Truth"],correctIndex:1,reference:"Romans 1:17"},{id:15,question:"What does 'zoe' (ζωή) mean?",options:["Life","Light","Way","Truth"],correctIndex:0,reference:"John 14:6"},{id:16,question:"What does 'parakletos' (παράκλητος) mean?",options:["Prophet","Shepherd","King","Advocate/Helper"],correctIndex:3,reference:"John 14:26"},{id:17,question:"What does 'aletheia' (ἀλήθεια) mean?",options:["Truth","Wisdom","Light","Freedom"],correctIndex:0,reference:"John 8:32"},{id:18,question:"What does 'dunamis' (δύναμις) mean?",options:["Authority","Dominion","Power/Miracle","Throne"],correctIndex:2,reference:"Acts 1:8"},{id:19,question:"What does 'eleos' (ἔλεος) mean?",options:["Mercy","Grace","Compassion","Forgiveness"],correctIndex:0,reference:"Luke 1:50"},{id:20,question:"What does 'basileia' (βασιλεία) mean?",options:["Temple","Kingdom","Covenant","Throne"],correctIndex:1,reference:"Matthew 6:33"},{id:21,question:"What does 'sophia' (σοφία) mean?",options:["Wisdom","Knowledge","Understanding","Discernment"],correctIndex:0,reference:"1 Corinthians 1:30"},{id:22,question:"What does 'kardia' (καρδία) mean?",options:["Mind","Soul","Heart","Spirit"],correctIndex:2,reference:"Matthew 22:37"},{id:23,question:"What does 'theos' (θεός) mean?",options:["God","Lord","King","Father"],correctIndex:0,reference:"John 1:1"},{id:24,question:"What does 'christos' (Χριστός) mean?",options:["Savior","Prophet","Priest","Christ/Anointed One"],correctIndex:3,reference:"Matthew 16:16"},{id:25,question:"What does 'kurios' (κύριος) mean?",options:["Lord","Master","Teacher","King"],correctIndex:0,reference:"Romans 10:9"},{id:26,question:"What does 'prophetes' (προφήτης) mean?",options:["Priest","Prophet","Scribe","Elder"],correctIndex:1,reference:"Matthew 21:11"},{id:27,question:"What does 'apostolos' (ἀπόστολος) mean?",options:["Disciple","Servant","Apostle/Messenger","Follower"],correctIndex:2,reference:"Luke 6:13"},{id:28,question:"What does 'didache' (διδαχή) mean?",options:["Teaching/Doctrine","Preaching","Scripture","Prophecy"],correctIndex:0,reference:"Acts 2:42"},{id:29,question:"What does 'marturia' (μαρτυρία) mean?",options:["Suffering","Sacrifice","Testimony/Witness","Confession"],correctIndex:2,reference:"Revelation 1:2"},{id:30,question:"What does 'elpis' (ἐλπίς) mean?",options:["Faith","Hope","Love","Joy"],correctIndex:1,reference:"Romans 5:5"},{id:31,question:"What does 'makarios' (μακάριος) mean?",options:["Holy","Righteous","Blessed/Happy","Faithful"],correctIndex:2,reference:"Matthew 5:3"},{id:32,question:"What does 'sarx' (σάρξ) mean?",options:["Flesh","Body","Blood","Bone"],correctIndex:0,reference:"John 1:14"},{id:33,question:"What does 'kosmos' (κόσμος) mean?",options:["Universe","Earth","Creation","World"],correctIndex:3,reference:"John 3:16"},{id:34,question:"What does 'ouranos' (οὐρανός) mean?",options:["Heaven","Sky","Paradise","Throne"],correctIndex:0,reference:"Matthew 6:9"},{id:35,question:"What does 'thanatos' (θάνατος) mean?",options:["Judgment","Death","Destruction","Curse"],correctIndex:1,reference:"Romans 6:23"},{id:36,question:"What does 'anastasis' (ἀνάστασις) mean?",options:["Ascension","Salvation","Resurrection","Redemption"],correctIndex:2,reference:"John 11:25"},{id:37,question:"What does 'baptizo' (βαπτίζω) mean?",options:["To wash","To cleanse","To sprinkle","To baptize/immerse"],correctIndex:3,reference:"Matthew 28:19"},{id:38,question:"What does 'proseuchomai' (προσεύχομαι) mean?",options:["To pray","To worship","To praise","To fast"],correctIndex:0,reference:"Matthew 6:6"},{id:39,question:"What does 'ethnos' (ἔθνος) mean?",options:["People","Nation/Gentile","Tribe","Family"],correctIndex:1,reference:"Matthew 28:19"},{id:40,question:"What does 'diatheke' (διαθήκη) mean?",options:["Promise","Law","Covenant/Testament","Blessing"],correctIndex:2,reference:"Hebrews 8:6"}],es:[{id:1,question:"¿Qué significa la palabra griega 'agape' (ἀγάπη)?",options:["Amor incondicional","Amistad","Conocimiento","Esperanza"],correctIndex:0,reference:"1 Corintios 13:13"},{id:2,question:"¿Qué significa 'logos' (λόγος) en Juan 1:1?",options:["Luz","El Verbo/La Palabra","Espíritu","Vida"],correctIndex:1,reference:"Juan 1:1"},{id:3,question:"¿Qué significa 'charis' (χάρις)?",options:["Fe","Paz","Gracia","Misericordia"],correctIndex:2,reference:"Efesios 2:8"},{id:4,question:"¿Qué significa 'pistis' (πίστις)?",options:["Fe","Poder","Sabiduría","Paciencia"],correctIndex:0,reference:"Hebreos 11:1"},{id:5,question:"¿Qué significa 'eirene' (εἰρήνη)?",options:["Gozo","Verdad","Gloria","Paz"],correctIndex:3,reference:"Juan 14:27"},{id:6,question:"¿Qué significa 'metanoia' (μετάνοια)?",options:["Bautismo","Arrepentimiento","Salvación","Oración"],correctIndex:1,reference:"Hechos 2:38"},{id:7,question:"¿Qué significa 'sozo' (σῴζω)?",options:["Juzgar","Predicar","Salvar/Liberar","Bautizar"],correctIndex:2,reference:"Romanos 10:9"},{id:8,question:"¿Qué significa 'pneuma' (πνεῦμα)?",options:["Espíritu/Aliento","Alma","Cuerpo","Mente"],correctIndex:0,reference:"Juan 3:8"},{id:9,question:"¿Qué significa 'ekklesia' (ἐκκλησία)?",options:["Templo","Reino","Asamblea/Iglesia","Sinagoga"],correctIndex:2,reference:"Mateo 16:18"},{id:10,question:"¿Qué significa 'doxa' (δόξα)?",options:["Doctrina","Gloria","Alabanza","Bendición"],correctIndex:1,reference:"Juan 1:14"},{id:11,question:"¿Qué significa 'euangelion' (εὐαγγέλιον)?",options:["Profecía","Mandamiento","Testimonio","Buenas nuevas/Evangelio"],correctIndex:3,reference:"Marcos 1:1"},{id:12,question:"¿Qué significa 'hamartia' (ἁμαρτία)?",options:["Pecado","Muerte","Maldición","Oscuridad"],correctIndex:0,reference:"Romanos 3:23"},{id:13,question:"¿Qué significa 'koinonia' (κοινωνία)?",options:["Reino","Pacto","Comunión/Fraternidad","Ministerio"],correctIndex:2,reference:"Hechos 2:42"},{id:14,question:"¿Qué significa 'dikaiosyne' (δικαιοσύνη)?",options:["Santidad","Justicia","Obediencia","Verdad"],correctIndex:1,reference:"Romanos 1:17"},{id:15,question:"¿Qué significa 'zoe' (ζωή)?",options:["Vida","Luz","Camino","Verdad"],correctIndex:0,reference:"Juan 14:6"},{id:16,question:"¿Qué significa 'parakletos' (παράκλητος)?",options:["Profeta","Pastor","Rey","Abogado/Consolador"],correctIndex:3,reference:"Juan 14:26"},{id:17,question:"¿Qué significa 'aletheia' (ἀλήθεια)?",options:["Verdad","Sabiduría","Luz","Libertad"],correctIndex:0,reference:"Juan 8:32"},{id:18,question:"¿Qué significa 'dunamis' (δύναμις)?",options:["Autoridad","Dominio","Poder/Milagro","Trono"],correctIndex:2,reference:"Hechos 1:8"},{id:19,question:"¿Qué significa 'eleos' (ἔλεος)?",options:["Misericordia","Gracia","Compasión","Perdón"],correctIndex:0,reference:"Lucas 1:50"},{id:20,question:"¿Qué significa 'basileia' (βασιλεία)?",options:["Templo","Reino","Pacto","Trono"],correctIndex:1,reference:"Mateo 6:33"},{id:21,question:"¿Qué significa 'sophia' (σοφία)?",options:["Sabiduría","Conocimiento","Entendimiento","Discernimiento"],correctIndex:0,reference:"1 Corintios 1:30"},{id:22,question:"¿Qué significa 'kardia' (καρδία)?",options:["Mente","Alma","Corazón","Espíritu"],correctIndex:2,reference:"Mateo 22:37"},{id:23,question:"¿Qué significa 'theos' (θεός)?",options:["Dios","Señor","Rey","Padre"],correctIndex:0,reference:"Juan 1:1"},{id:24,question:"¿Qué significa 'christos' (Χριστός)?",options:["Salvador","Profeta","Sacerdote","Cristo/Ungido"],correctIndex:3,reference:"Mateo 16:16"},{id:25,question:"¿Qué significa 'kurios' (κύριος)?",options:["Señor","Maestro","Profesor","Rey"],correctIndex:0,reference:"Romanos 10:9"},{id:26,question:"¿Qué significa 'prophetes' (προφήτης)?",options:["Sacerdote","Profeta","Escriba","Anciano"],correctIndex:1,reference:"Mateo 21:11"},{id:27,question:"¿Qué significa 'apostolos' (ἀπόστολος)?",options:["Discípulo","Siervo","Apóstol/Mensajero","Seguidor"],correctIndex:2,reference:"Lucas 6:13"},{id:28,question:"¿Qué significa 'didache' (διδαχή)?",options:["Enseñanza/Doctrina","Predicación","Escritura","Profecía"],correctIndex:0,reference:"Hechos 2:42"},{id:29,question:"¿Qué significa 'marturia' (μαρτυρία)?",options:["Sufrimiento","Sacrificio","Testimonio","Confesión"],correctIndex:2,reference:"Apocalipsis 1:2"},{id:30,question:"¿Qué significa 'elpis' (ἐλπίς)?",options:["Fe","Esperanza","Amor","Gozo"],correctIndex:1,reference:"Romanos 5:5"},{id:31,question:"¿Qué significa 'makarios' (μακάριος)?",options:["Santo","Justo","Bienaventurado/Feliz","Fiel"],correctIndex:2,reference:"Mateo 5:3"},{id:32,question:"¿Qué significa 'sarx' (σάρξ)?",options:["Carne","Cuerpo","Sangre","Hueso"],correctIndex:0,reference:"Juan 1:14"},{id:33,question:"¿Qué significa 'kosmos' (κόσμος)?",options:["Universo","Tierra","Creación","Mundo"],correctIndex:3,reference:"Juan 3:16"},{id:34,question:"¿Qué significa 'ouranos' (οὐρανός)?",options:["Cielo","Firmamento","Paraíso","Trono"],correctIndex:0,reference:"Mateo 6:9"},{id:35,question:"¿Qué significa 'thanatos' (θάνατος)?",options:["Juicio","Muerte","Destrucción","Maldición"],correctIndex:1,reference:"Romanos 6:23"},{id:36,question:"¿Qué significa 'anastasis' (ἀνάστασις)?",options:["Ascensión","Salvación","Resurrección","Redención"],correctIndex:2,reference:"Juan 11:25"},{id:37,question:"¿Qué significa 'baptizo' (βαπτίζω)?",options:["Lavar","Limpiar","Rociar","Bautizar/Sumergir"],correctIndex:3,reference:"Mateo 28:19"},{id:38,question:"¿Qué significa 'proseuchomai' (προσεύχομαι)?",options:["Orar","Adorar","Alabar","Ayunar"],correctIndex:0,reference:"Mateo 6:6"},{id:39,question:"¿Qué significa 'ethnos' (ἔθνος)?",options:["Pueblo","Nación/Gentil","Tribu","Familia"],correctIndex:1,reference:"Mateo 28:19"},{id:40,question:"¿Qué significa 'diatheke' (διαθήκη)?",options:["Promesa","Ley","Pacto/Testamento","Bendición"],correctIndex:2,reference:"Hebreos 8:6"}]},ku={en:[{id:1,question:"What does the Hebrew word 'shalom' (שָׁלוֹם) mean?",options:["Peace","Joy","Love","Hope"],correctIndex:0,reference:"Numbers 6:26"},{id:2,question:"What does the Hebrew word 'ahavah' (אַהֲבָה) mean?",options:["Faith","Love","Grace","Mercy"],correctIndex:1,reference:"Deuteronomy 6:5"},{id:3,question:"What does the Hebrew word 'emunah' (אֱמוּנָה) mean?",options:["Hope","Wisdom","Faithfulness","Truth"],correctIndex:2,reference:"Habakkuk 2:4"},{id:4,question:"What does the Hebrew word 'chesed' (חֶסֶד) mean?",options:["Power","Justice","Holiness","Lovingkindness"],correctIndex:3,reference:"Psalm 136:1"},{id:5,question:"What does the Hebrew word 'ruach' (רוּחַ) mean?",options:["Spirit/Breath/Wind","Soul","Mind","Body"],correctIndex:0,reference:"Genesis 1:2"},{id:6,question:"What does the Hebrew word 'nefesh' (נֶפֶשׁ) mean?",options:["Heart","Soul/Living Being","Spirit","Flesh"],correctIndex:1,reference:"Genesis 2:7"},{id:7,question:"What does the Hebrew word 'torah' (תּוֹרָה) mean?",options:["Covenant","Prophecy","Law/Instruction","Wisdom"],correctIndex:2,reference:"Psalm 119:1"},{id:8,question:"What does the Hebrew word 'tsedaqah' (צְדָקָה) mean?",options:["Holiness","Mercy","Obedience","Righteousness"],correctIndex:3,reference:"Genesis 15:6"},{id:9,question:"What does 'Elohim' (אֱלֹהִים) refer to?",options:["God","Lord","Father","King"],correctIndex:0,reference:"Genesis 1:1"},{id:10,question:"What does 'YHWH' (יהוה) represent?",options:["Almighty","The personal name of God/LORD","Most High","Creator"],correctIndex:1,reference:"Exodus 3:14"},{id:11,question:"What does the Hebrew word 'kadosh' (קָדוֹשׁ) mean?",options:["Holy","Glorious","Faithful","Mighty"],correctIndex:0,reference:"Isaiah 6:3"},{id:12,question:"What does the Hebrew word 'berith' (בְּרִית) mean?",options:["Promise","Blessing","Covenant","Law"],correctIndex:2,reference:"Genesis 15:18"},{id:13,question:"What does the Hebrew word 'malakh' (מַלְאָךְ) mean?",options:["King","Prophet","Priest","Angel/Messenger"],correctIndex:3,reference:"Genesis 16:7"},{id:14,question:"What does the Hebrew word 'dabar' (דָּבָר) mean?",options:["Word/Matter","Thought","Deed","Command"],correctIndex:0,reference:"Isaiah 55:11"},{id:15,question:"What does the Hebrew word 'mishpat' (מִשְׁפָּט) mean?",options:["Mercy","Justice/Judgment","Peace","Truth"],correctIndex:1,reference:"Micah 6:8"},{id:16,question:"What does the Hebrew word 'teshuvah' (תְּשׁוּבָה) mean?",options:["Praise","Blessing","Repentance/Return","Prayer"],correctIndex:2,reference:"Joel 2:12"},{id:17,question:"What does the Hebrew word 'tehillah' (תְּהִלָּה) mean?",options:["Prayer","Sacrifice","Offering","Praise"],correctIndex:3,reference:"Psalm 22:3"},{id:18,question:"What does the Hebrew word 'shabbat' (שַׁבָּת) mean?",options:["Sabbath/Rest","Festival","Offering","Atonement"],correctIndex:0,reference:"Exodus 20:8"},{id:19,question:"What does the Hebrew word 'emet' (אֱמֶת) mean?",options:["Light","Truth","Life","Wisdom"],correctIndex:1,reference:"Psalm 31:5"},{id:20,question:"What does the Hebrew word 'mashiach' (מָשִׁיחַ) mean?",options:["Savior","Prophet","Messiah/Anointed One","Servant"],correctIndex:2,reference:"Daniel 9:25"},{id:21,question:"What does the Hebrew word 'nabi' (נָבִיא) mean?",options:["Priest","Scribe","Elder","Prophet"],correctIndex:3,reference:"Amos 3:7"},{id:22,question:"What does the Hebrew word 'cohen' (כֹּהֵן) mean?",options:["Priest","King","Prophet","Judge"],correctIndex:0,reference:"Exodus 19:6"},{id:23,question:"What does the Hebrew word 'melekh' (מֶלֶךְ) mean?",options:["Lord","King","Master","Ruler"],correctIndex:1,reference:"1 Samuel 8:5"},{id:24,question:"What does the Hebrew word 'ebed' (עֶבֶד) mean?",options:["Son","Brother","Servant/Slave","Shepherd"],correctIndex:2,reference:"Isaiah 53:11"},{id:25,question:"What does the Hebrew word 'yeshuah' (יְשׁוּעָה) mean?",options:["Blessing","Redemption","Deliverance","Salvation"],correctIndex:3,reference:"Psalm 118:14"},{id:26,question:"What does the Hebrew word 'adonai' (אֲדֹנָי) mean?",options:["Lord/Master","God","Father","King"],correctIndex:0,reference:"Psalm 8:1"},{id:27,question:"What does 'hallelujah' (הַלְלוּיָהּ) mean?",options:["Glory to God","Praise the LORD","Blessed is God","God is holy"],correctIndex:1,reference:"Psalm 150:6"},{id:28,question:"What does the Hebrew word 'shema' (שְׁמַע) mean?",options:["Praise","Bow","Hear/Listen","Obey"],correctIndex:2,reference:"Deuteronomy 6:4"},{id:29,question:"What does the Hebrew word 'eretz' (אֶרֶץ) mean?",options:["Sea","Sky","Mountain","Land/Earth"],correctIndex:3,reference:"Genesis 1:1"},{id:30,question:"What does the Hebrew word 'shamayim' (שָׁמַיִם) mean?",options:["Heaven/Sky","Light","Waters","Stars"],correctIndex:0,reference:"Genesis 1:1"},{id:31,question:"What does the Hebrew word 'adam' (אָדָם) mean?",options:["Father","Man/Humankind","Child","Elder"],correctIndex:1,reference:"Genesis 1:27"},{id:32,question:"What does the Hebrew word 'olam' (עוֹלָם) mean?",options:["Nation","Age","Eternity/Forever","Kingdom"],correctIndex:2,reference:"Psalm 90:2"},{id:33,question:"What does the Hebrew word 'chai' (חַי) mean?",options:["Light","Fire","Water","Life/Living"],correctIndex:3,reference:"Deuteronomy 30:19"},{id:34,question:"What does the Hebrew word 'rachamim' (רַחֲמִים) mean?",options:["Compassion/Mercy","Strength","Glory","Patience"],correctIndex:0,reference:"Psalm 103:4"},{id:35,question:"What does the Hebrew word 'tov' (טוֹב) mean?",options:["Pure","Good","Perfect","Right"],correctIndex:1,reference:"Genesis 1:31"},{id:36,question:"What does the Hebrew word 'bara' (בָּרָא) mean?",options:["To bless","To rule","To create","To speak"],correctIndex:2,reference:"Genesis 1:1"},{id:37,question:"What does the Hebrew word 'bereshit' (בְּרֵאשִׁית) mean?",options:["And God said","The heavens","In the beginning","The earth was"],correctIndex:3,reference:"Genesis 1:1"},{id:38,question:"What does the Hebrew word 'am' (עַם) mean?",options:["People/Nation","Land","King","Tribe"],correctIndex:0,reference:"Exodus 19:5"},{id:39,question:"What does the Hebrew word 'kippurim' (כִּפֻּרִים) mean?",options:["Sacrifice","Atonement","Offering","Purification"],correctIndex:1,reference:"Leviticus 23:27"},{id:40,question:"What does the Hebrew word 'nephilim' (נְפִילִים) mean?",options:["Mighty warriors","Ancient rulers","Evil spirits","Fallen ones/Giants"],correctIndex:3,reference:"Genesis 6:4"}],es:[{id:1,question:"¿Qué significa la palabra hebrea 'shalom' (שָׁלוֹם)?",options:["Paz","Gozo","Amor","Esperanza"],correctIndex:0,reference:"Números 6:26"},{id:2,question:"¿Qué significa la palabra hebrea 'ahavah' (אַהֲבָה)?",options:["Fe","Amor","Gracia","Misericordia"],correctIndex:1,reference:"Deuteronomio 6:5"},{id:3,question:"¿Qué significa la palabra hebrea 'emunah' (אֱמוּנָה)?",options:["Esperanza","Sabiduría","Fidelidad","Verdad"],correctIndex:2,reference:"Habacuc 2:4"},{id:4,question:"¿Qué significa la palabra hebrea 'chesed' (חֶסֶד)?",options:["Poder","Justicia","Santidad","Amor leal/Misericordia"],correctIndex:3,reference:"Salmos 136:1"},{id:5,question:"¿Qué significa la palabra hebrea 'ruach' (רוּחַ)?",options:["Espíritu/Aliento/Viento","Alma","Mente","Cuerpo"],correctIndex:0,reference:"Génesis 1:2"},{id:6,question:"¿Qué significa la palabra hebrea 'nefesh' (נֶפֶשׁ)?",options:["Corazón","Alma/Ser viviente","Espíritu","Carne"],correctIndex:1,reference:"Génesis 2:7"},{id:7,question:"¿Qué significa la palabra hebrea 'torah' (תּוֹרָה)?",options:["Pacto","Profecía","Ley/Instrucción","Sabiduría"],correctIndex:2,reference:"Salmos 119:1"},{id:8,question:"¿Qué significa la palabra hebrea 'tsedaqah' (צְדָקָה)?",options:["Santidad","Misericordia","Obediencia","Justicia/Rectitud"],correctIndex:3,reference:"Génesis 15:6"},{id:9,question:"¿A qué se refiere 'Elohim' (אֱלֹהִים)?",options:["Dios","Señor","Padre","Rey"],correctIndex:0,reference:"Génesis 1:1"},{id:10,question:"¿Qué representa 'YHWH' (יהוה)?",options:["Todopoderoso","El nombre personal de Dios/SEÑOR","Altísimo","Creador"],correctIndex:1,reference:"Éxodo 3:14"},{id:11,question:"¿Qué significa la palabra hebrea 'kadosh' (קָדוֹשׁ)?",options:["Santo","Glorioso","Fiel","Poderoso"],correctIndex:0,reference:"Isaías 6:3"},{id:12,question:"¿Qué significa la palabra hebrea 'berith' (בְּרִית)?",options:["Promesa","Bendición","Pacto","Ley"],correctIndex:2,reference:"Génesis 15:18"},{id:13,question:"¿Qué significa la palabra hebrea 'malakh' (מַלְאָךְ)?",options:["Rey","Profeta","Sacerdote","Ángel/Mensajero"],correctIndex:3,reference:"Génesis 16:7"},{id:14,question:"¿Qué significa la palabra hebrea 'dabar' (דָּבָר)?",options:["Palabra/Asunto","Pensamiento","Obra","Mandato"],correctIndex:0,reference:"Isaías 55:11"},{id:15,question:"¿Qué significa la palabra hebrea 'mishpat' (מִשְׁפָּט)?",options:["Misericordia","Justicia/Juicio","Paz","Verdad"],correctIndex:1,reference:"Miqueas 6:8"},{id:16,question:"¿Qué significa la palabra hebrea 'teshuvah' (תְּשׁוּבָה)?",options:["Alabanza","Bendición","Arrepentimiento/Retorno","Oración"],correctIndex:2,reference:"Joel 2:12"},{id:17,question:"¿Qué significa la palabra hebrea 'tehillah' (תְּהִלָּה)?",options:["Oración","Sacrificio","Ofrenda","Alabanza"],correctIndex:3,reference:"Salmos 22:3"},{id:18,question:"¿Qué significa la palabra hebrea 'shabbat' (שַׁבָּת)?",options:["Sábado/Descanso","Festival","Ofrenda","Expiación"],correctIndex:0,reference:"Éxodo 20:8"},{id:19,question:"¿Qué significa la palabra hebrea 'emet' (אֱמֶת)?",options:["Luz","Verdad","Vida","Sabiduría"],correctIndex:1,reference:"Salmos 31:5"},{id:20,question:"¿Qué significa la palabra hebrea 'mashiach' (מָשִׁיחַ)?",options:["Salvador","Profeta","Mesías/Ungido","Siervo"],correctIndex:2,reference:"Daniel 9:25"},{id:21,question:"¿Qué significa la palabra hebrea 'nabi' (נָבִיא)?",options:["Sacerdote","Escriba","Anciano","Profeta"],correctIndex:3,reference:"Amós 3:7"},{id:22,question:"¿Qué significa la palabra hebrea 'cohen' (כֹּהֵן)?",options:["Sacerdote","Rey","Profeta","Juez"],correctIndex:0,reference:"Éxodo 19:6"},{id:23,question:"¿Qué significa la palabra hebrea 'melekh' (מֶלֶךְ)?",options:["Señor","Rey","Amo","Gobernante"],correctIndex:1,reference:"1 Samuel 8:5"},{id:24,question:"¿Qué significa la palabra hebrea 'ebed' (עֶבֶד)?",options:["Hijo","Hermano","Siervo/Esclavo","Pastor"],correctIndex:2,reference:"Isaías 53:11"},{id:25,question:"¿Qué significa la palabra hebrea 'yeshuah' (יְשׁוּעָה)?",options:["Bendición","Redención","Liberación","Salvación"],correctIndex:3,reference:"Salmos 118:14"},{id:26,question:"¿Qué significa la palabra hebrea 'adonai' (אֲדֹנָי)?",options:["Señor/Amo","Dios","Padre","Rey"],correctIndex:0,reference:"Salmos 8:1"},{id:27,question:"¿Qué significa 'hallelujah' (הַלְלוּיָהּ)?",options:["Gloria a Dios","Alabad al SEÑOR","Bendito sea Dios","Dios es santo"],correctIndex:1,reference:"Salmos 150:6"},{id:28,question:"¿Qué significa la palabra hebrea 'shema' (שְׁמַע)?",options:["Alabad","Inclinaos","Oíd/Escucha","Obedeced"],correctIndex:2,reference:"Deuteronomio 6:4"},{id:29,question:"¿Qué significa la palabra hebrea 'eretz' (אֶרֶץ)?",options:["Mar","Cielo","Montaña","Tierra/País"],correctIndex:3,reference:"Génesis 1:1"},{id:30,question:"¿Qué significa la palabra hebrea 'shamayim' (שָׁמַיִם)?",options:["Cielos","Luz","Aguas","Estrellas"],correctIndex:0,reference:"Génesis 1:1"},{id:31,question:"¿Qué significa la palabra hebrea 'adam' (אָדָם)?",options:["Padre","Hombre/Humanidad","Hijo","Anciano"],correctIndex:1,reference:"Génesis 1:27"},{id:32,question:"¿Qué significa la palabra hebrea 'olam' (עוֹלָם)?",options:["Nación","Era","Eternidad/Para siempre","Reino"],correctIndex:2,reference:"Salmos 90:2"},{id:33,question:"¿Qué significa la palabra hebrea 'chai' (חַי)?",options:["Luz","Fuego","Agua","Vida/Viviente"],correctIndex:3,reference:"Deuteronomio 30:19"},{id:34,question:"¿Qué significa la palabra hebrea 'rachamim' (רַחֲמִים)?",options:["Compasión/Misericordia","Fortaleza","Gloria","Paciencia"],correctIndex:0,reference:"Salmos 103:4"},{id:35,question:"¿Qué significa la palabra hebrea 'tov' (טוֹב)?",options:["Puro","Bueno","Perfecto","Recto"],correctIndex:1,reference:"Génesis 1:31"},{id:36,question:"¿Qué significa la palabra hebrea 'bara' (בָּרָא)?",options:["Bendecir","Gobernar","Crear","Hablar"],correctIndex:2,reference:"Génesis 1:1"},{id:37,question:"¿Qué significa la palabra hebrea 'bereshit' (בְּרֵאשִׁית)?",options:["Y dijo Dios","Los cielos","La tierra era","En el principio"],correctIndex:3,reference:"Génesis 1:1"},{id:38,question:"¿Qué significa la palabra hebrea 'am' (עַם)?",options:["Pueblo/Nación","Tierra","Rey","Tribu"],correctIndex:0,reference:"Éxodo 19:5"},{id:39,question:"¿Qué significa la palabra hebrea 'kippurim' (כִּפֻּרִים)?",options:["Sacrificio","Expiación","Ofrenda","Purificación"],correctIndex:1,reference:"Levítico 23:27"},{id:40,question:"¿Qué significa la palabra hebrea 'nephilim' (נְפִילִים)?",options:["Guerreros poderosos","Gobernantes antiguos","Espíritus malignos","Caídos/Gigantes"],correctIndex:3,reference:"Génesis 6:4"}]},Nu={en:[{id:1,word:"Hallo",ipa:"[ˈhaloː]",question:"What does 'hallo' mean?",options:["Hello","Goodbye","Thank you","Please"],correctIndex:0,reference:"Greeting"},{id:2,word:"Auf Wiedersehen",ipa:"[ˌaʊf ˈviːdɐˌzeːən]",question:"What does 'auf Wiedersehen' mean?",options:["Goodbye","Good morning","Good night","See you"],correctIndex:0,reference:"Farewell"},{id:3,word:"Danke",ipa:"[ˈdaŋkə]",question:"What does 'danke' mean?",options:["Thank you","Please","Sorry","Yes"],correctIndex:0,reference:"Courtesy"},{id:4,word:"Bitte",ipa:"[ˈbɪtə]",question:"What does 'bitte' mean?",options:["Please / You're welcome","Thank you","Excuse me","No"],correctIndex:0,reference:"Courtesy"},{id:5,word:"Guten Morgen",ipa:"[ˈɡuːtən ˈmɔʁɡən]",question:"What does 'guten Morgen' mean?",options:["Good morning","Good afternoon","Good evening","Good night"],correctIndex:0,reference:"Greeting"},{id:6,word:"Gute Nacht",ipa:"[ˈɡuːtə naxt]",question:"What does 'gute Nacht' mean?",options:["Good night","Good morning","Good evening","Goodbye"],correctIndex:0,reference:"Greeting"},{id:7,word:"Ja",ipa:"[jaː]",question:"What does 'ja' mean?",options:["Yes","No","Maybe","Never"],correctIndex:0,reference:"Basic"},{id:8,word:"Nein",ipa:"[naɪn]",question:"What does 'nein' mean?",options:["No","Yes","Never","Nine"],correctIndex:0,reference:"Basic"},{id:9,word:"Entschuldigung",ipa:"[ɛntˈʃʊldɪɡʊŋ]",question:"What does 'Entschuldigung' mean?",options:["Excuse me / Sorry","Thank you","Please","Goodbye"],correctIndex:0,reference:"Courtesy"},{id:10,word:"Wasser",ipa:"[ˈvasɐ]",question:"What does 'Wasser' mean?",options:["Water","Fire","Air","Earth"],correctIndex:0,reference:"Noun"},{id:11,word:"Essen",ipa:"[ˈɛsən]",question:"What does 'Essen' mean?",options:["Food / Eating","Drinking","Sleeping","Running"],correctIndex:0,reference:"Noun/Verb"},{id:12,word:"Haus",ipa:"[haʊs]",question:"What does 'Haus' mean?",options:["House","Car","School","Street"],correctIndex:0,reference:"Noun"},{id:13,word:"Auto",ipa:"[ˈaʊtoː]",question:"What does 'Auto' mean?",options:["Car","Bus","Train","Bicycle"],correctIndex:0,reference:"Noun"},{id:14,word:"Zeit",ipa:"[tsaɪt]",question:"What does 'Zeit' mean?",options:["Time","Day","Night","Hour"],correctIndex:0,reference:"Noun"},{id:15,word:"Arbeit",ipa:"[ˈaʁbaɪt]",question:"What does 'Arbeit' mean?",options:["Work","Play","Rest","School"],correctIndex:0,reference:"Noun"},{id:16,word:"Freund",ipa:"[fʁɔɪnt]",question:"What does 'Freund' mean?",options:["Friend","Enemy","Stranger","Neighbor"],correctIndex:0,reference:"Noun"},{id:17,word:"Familie",ipa:"[faˈmiːliə]",question:"What does 'Familie' mean?",options:["Family","Friend","Group","Nation"],correctIndex:0,reference:"Noun"},{id:18,word:"Liebe",ipa:"[ˈliːbə]",question:"What does 'Liebe' mean?",options:["Love","Peace","Joy","Hope"],correctIndex:0,reference:"Noun"},{id:19,word:"Herz",ipa:"[hɛʁts]",question:"What does 'Herz' mean?",options:["Heart","Mind","Soul","Body"],correctIndex:0,reference:"Noun"},{id:20,word:"Leben",ipa:"[ˈleːbən]",question:"What does 'Leben' mean?",options:["Life","Death","Birth","Age"],correctIndex:0,reference:"Noun"},{id:21,word:"Wahrheit",ipa:"[ˈvaːʁhaɪt]",question:"What does 'Wahrheit' mean?",options:["Truth","Lie","Secret","Story"],correctIndex:0,reference:"Noun"},{id:22,word:"Friede",ipa:"[ˈfʁiːdə]",question:"What does 'Friede' mean?",options:["Peace","War","Conflict","Silence"],correctIndex:0,reference:"Noun"},{id:23,word:"Freiheit",ipa:"[ˈfʁaɪhaɪt]",question:"What does 'Freiheit' mean?",options:["Freedom","Justice","Order","Power"],correctIndex:0,reference:"Noun"},{id:24,word:"Freude",ipa:"[ˈfʁɔɪdə]",question:"What does 'Freude' mean?",options:["Joy","Sadness","Anger","Fear"],correctIndex:0,reference:"Noun"},{id:25,word:"Hoffnung",ipa:"[ˈhɔfnʊŋ]",question:"What does 'Hoffnung' mean?",options:["Hope","Fear","Doubt","Despair"],correctIndex:0,reference:"Noun"},{id:26,word:"Stärke",ipa:"[ˈʃtɛʁkə]",question:"What does 'Stärke' mean?",options:["Strength","Weakness","Speed","Wisdom"],correctIndex:0,reference:"Noun"},{id:27,word:"Weg",ipa:"[veːk]",question:"What does 'Weg' mean?",options:["Way / Path","Goal","End","Start"],correctIndex:0,reference:"Noun"},{id:28,word:"Welt",ipa:"[vɛlt]",question:"What does 'Welt' mean?",options:["World","Country","City","Village"],correctIndex:0,reference:"Noun"},{id:29,word:"Land",ipa:"[lant]",question:"What does 'Land' mean?",options:["Land / Country","Sea","Sky","Mountain"],correctIndex:0,reference:"Noun"},{id:30,word:"Stadt",ipa:"[ʃtat]",question:"What does 'Stadt' mean?",options:["City","Village","Farm","Forest"],correctIndex:0,reference:"Noun"},{id:31,word:"Sprache",ipa:"[ˈʃpʁaːxə]",question:"What does 'Sprache' mean?",options:["Language","Music","Art","Science"],correctIndex:0,reference:"Noun"},{id:32,word:"Schule",ipa:"[ˈʃuːlə]",question:"What does 'Schule' mean?",options:["School","Church","Market","Hospital"],correctIndex:0,reference:"Noun"},{id:33,word:"Buch",ipa:"[buːx]",question:"What does 'Buch' mean?",options:["Book","Pen","Paper","Letter"],correctIndex:0,reference:"Noun"},{id:34,word:"Geld",ipa:"[ɡɛlt]",question:"What does 'Geld' mean?",options:["Money","Gold","Silver","Trade"],correctIndex:0,reference:"Noun"},{id:35,word:"Kind",ipa:"[kɪnt]",question:"What does 'Kind' mean?",options:["Child","Adult","Baby","Youth"],correctIndex:0,reference:"Noun"},{id:36,word:"Mensch",ipa:"[mɛnʃ]",question:"What does 'Mensch' mean?",options:["Human being / Person","Animal","Angel","God"],correctIndex:0,reference:"Noun"},{id:37,word:"Sonne",ipa:"[ˈzɔnə]",question:"What does 'Sonne' mean?",options:["Sun","Moon","Star","Cloud"],correctIndex:0,reference:"Noun"},{id:38,word:"Natur",ipa:"[naˈtuːɐ̯]",question:"What does 'Natur' mean?",options:["Nature","Culture","Art","Science"],correctIndex:0,reference:"Noun"},{id:39,word:"Gott",ipa:"[ɡɔt]",question:"What does 'Gott' mean?",options:["God","Angel","Heaven","Spirit"],correctIndex:0,reference:"Noun"},{id:40,word:"Tschüss",ipa:"[tʃʏs]",question:"What does 'Tschüss' mean?",options:["Bye / See you","Hello","Thank you","Please"],correctIndex:0,reference:"Farewell"}],es:[{id:1,word:"Hallo",ipa:"[ˈhaloː]",question:"¿Qué significa 'hallo'?",options:["Hola","Adiós","Gracias","Por favor"],correctIndex:0,reference:"Saludo"},{id:2,word:"Auf Wiedersehen",ipa:"[ˌaʊf ˈviːdɐˌzeːən]",question:"¿Qué significa 'auf Wiedersehen'?",options:["Adiós","Buenos días","Buenas noches","Hasta luego"],correctIndex:0,reference:"Despedida"},{id:3,word:"Danke",ipa:"[ˈdaŋkə]",question:"¿Qué significa 'danke'?",options:["Gracias","Por favor","Lo siento","Sí"],correctIndex:0,reference:"Cortesía"},{id:4,word:"Bitte",ipa:"[ˈbɪtə]",question:"¿Qué significa 'bitte'?",options:["Por favor / De nada","Gracias","Perdón","No"],correctIndex:0,reference:"Cortesía"},{id:5,word:"Guten Morgen",ipa:"[ˈɡuːtən ˈmɔʁɡən]",question:"¿Qué significa 'guten Morgen'?",options:["Buenos días","Buenas tardes","Buenas noches","Hasta luego"],correctIndex:0,reference:"Saludo"},{id:6,word:"Gute Nacht",ipa:"[ˈɡuːtə naxt]",question:"¿Qué significa 'gute Nacht'?",options:["Buenas noches","Buenos días","Buenas tardes","Adiós"],correctIndex:0,reference:"Saludo"},{id:7,word:"Ja",ipa:"[jaː]",question:"¿Qué significa 'ja'?",options:["Sí","No","Quizás","Nunca"],correctIndex:0,reference:"Básico"},{id:8,word:"Nein",ipa:"[naɪn]",question:"¿Qué significa 'nein'?",options:["No","Sí","Nunca","Nueve"],correctIndex:0,reference:"Básico"},{id:9,word:"Entschuldigung",ipa:"[ɛntˈʃʊldɪɡʊŋ]",question:"¿Qué significa 'Entschuldigung'?",options:["Perdón / Disculpe","Gracias","Por favor","Adiós"],correctIndex:0,reference:"Cortesía"},{id:10,word:"Wasser",ipa:"[ˈvasɐ]",question:"¿Qué significa 'Wasser'?",options:["Agua","Fuego","Aire","Tierra"],correctIndex:0,reference:"Sustantivo"},{id:11,word:"Essen",ipa:"[ˈɛsən]",question:"¿Qué significa 'Essen'?",options:["Comida / Comer","Beber","Dormir","Correr"],correctIndex:0,reference:"Sustantivo/Verbo"},{id:12,word:"Haus",ipa:"[haʊs]",question:"¿Qué significa 'Haus'?",options:["Casa","Auto","Escuela","Calle"],correctIndex:0,reference:"Sustantivo"},{id:13,word:"Auto",ipa:"[ˈaʊtoː]",question:"¿Qué significa 'Auto'?",options:["Auto / Carro","Autobús","Tren","Bicicleta"],correctIndex:0,reference:"Sustantivo"},{id:14,word:"Zeit",ipa:"[tsaɪt]",question:"¿Qué significa 'Zeit'?",options:["Tiempo","Día","Noche","Hora"],correctIndex:0,reference:"Sustantivo"},{id:15,word:"Arbeit",ipa:"[ˈaʁbaɪt]",question:"¿Qué significa 'Arbeit'?",options:["Trabajo","Juego","Descanso","Escuela"],correctIndex:0,reference:"Sustantivo"},{id:16,word:"Freund",ipa:"[fʁɔɪnt]",question:"¿Qué significa 'Freund'?",options:["Amigo","Enemigo","Extraño","Vecino"],correctIndex:0,reference:"Sustantivo"},{id:17,word:"Familie",ipa:"[faˈmiːliə]",question:"¿Qué significa 'Familie'?",options:["Familia","Amigo","Grupo","Nación"],correctIndex:0,reference:"Sustantivo"},{id:18,word:"Liebe",ipa:"[ˈliːbə]",question:"¿Qué significa 'Liebe'?",options:["Amor","Paz","Alegría","Esperanza"],correctIndex:0,reference:"Sustantivo"},{id:19,word:"Herz",ipa:"[hɛʁts]",question:"¿Qué significa 'Herz'?",options:["Corazón","Mente","Alma","Cuerpo"],correctIndex:0,reference:"Sustantivo"},{id:20,word:"Leben",ipa:"[ˈleːbən]",question:"¿Qué significa 'Leben'?",options:["Vida","Muerte","Nacimiento","Edad"],correctIndex:0,reference:"Sustantivo"},{id:21,word:"Wahrheit",ipa:"[ˈvaːʁhaɪt]",question:"¿Qué significa 'Wahrheit'?",options:["Verdad","Mentira","Secreto","Historia"],correctIndex:0,reference:"Sustantivo"},{id:22,word:"Friede",ipa:"[ˈfʁiːdə]",question:"¿Qué significa 'Friede'?",options:["Paz","Guerra","Conflicto","Silencio"],correctIndex:0,reference:"Sustantivo"},{id:23,word:"Freiheit",ipa:"[ˈfʁaɪhaɪt]",question:"¿Qué significa 'Freiheit'?",options:["Libertad","Justicia","Orden","Poder"],correctIndex:0,reference:"Sustantivo"},{id:24,word:"Freude",ipa:"[ˈfʁɔɪdə]",question:"¿Qué significa 'Freude'?",options:["Alegría","Tristeza","Enojo","Miedo"],correctIndex:0,reference:"Sustantivo"},{id:25,word:"Hoffnung",ipa:"[ˈhɔfnʊŋ]",question:"¿Qué significa 'Hoffnung'?",options:["Esperanza","Miedo","Duda","Desesperación"],correctIndex:0,reference:"Sustantivo"},{id:26,word:"Stärke",ipa:"[ˈʃtɛʁkə]",question:"¿Qué significa 'Stärke'?",options:["Fuerza","Debilidad","Velocidad","Sabiduría"],correctIndex:0,reference:"Sustantivo"},{id:27,word:"Weg",ipa:"[veːk]",question:"¿Qué significa 'Weg'?",options:["Camino / Vía","Meta","Fin","Inicio"],correctIndex:0,reference:"Sustantivo"},{id:28,word:"Welt",ipa:"[vɛlt]",question:"¿Qué significa 'Welt'?",options:["Mundo","País","Ciudad","Pueblo"],correctIndex:0,reference:"Sustantivo"},{id:29,word:"Land",ipa:"[lant]",question:"¿Qué significa 'Land'?",options:["Tierra / País","Mar","Cielo","Montaña"],correctIndex:0,reference:"Sustantivo"},{id:30,word:"Stadt",ipa:"[ʃtat]",question:"¿Qué significa 'Stadt'?",options:["Ciudad","Pueblo","Granja","Bosque"],correctIndex:0,reference:"Sustantivo"},{id:31,word:"Sprache",ipa:"[ˈʃpʁaːxə]",question:"¿Qué significa 'Sprache'?",options:["Idioma / Lengua","Música","Arte","Ciencia"],correctIndex:0,reference:"Sustantivo"},{id:32,word:"Schule",ipa:"[ˈʃuːlə]",question:"¿Qué significa 'Schule'?",options:["Escuela","Iglesia","Mercado","Hospital"],correctIndex:0,reference:"Sustantivo"},{id:33,word:"Buch",ipa:"[buːx]",question:"¿Qué significa 'Buch'?",options:["Libro","Pluma","Papel","Carta"],correctIndex:0,reference:"Sustantivo"},{id:34,word:"Geld",ipa:"[ɡɛlt]",question:"¿Qué significa 'Geld'?",options:["Dinero","Oro","Plata","Comercio"],correctIndex:0,reference:"Sustantivo"},{id:35,word:"Kind",ipa:"[kɪnt]",question:"¿Qué significa 'Kind'?",options:["Niño","Adulto","Bebé","Joven"],correctIndex:0,reference:"Sustantivo"},{id:36,word:"Mensch",ipa:"[mɛnʃ]",question:"¿Qué significa 'Mensch'?",options:["Ser humano / Persona","Animal","Ángel","Dios"],correctIndex:0,reference:"Sustantivo"},{id:37,word:"Sonne",ipa:"[ˈzɔnə]",question:"¿Qué significa 'Sonne'?",options:["Sol","Luna","Estrella","Nube"],correctIndex:0,reference:"Sustantivo"},{id:38,word:"Natur",ipa:"[naˈtuːɐ̯]",question:"¿Qué significa 'Natur'?",options:["Naturaleza","Cultura","Arte","Ciencia"],correctIndex:0,reference:"Sustantivo"},{id:39,word:"Gott",ipa:"[ɡɔt]",question:"¿Qué significa 'Gott'?",options:["Dios","Ángel","Cielo","Espíritu"],correctIndex:0,reference:"Sustantivo"},{id:40,word:"Tschüss",ipa:"[tʃʏs]",question:"¿Qué significa 'Tschüss'?",options:["Chao / Hasta luego","Hola","Gracias","Por favor"],correctIndex:0,reference:"Despedida"}]},Pu={en:[{id:1,word:"Привет",ipa:"pri-VYET",question:"What does 'Привет' mean?",options:["Hi / Hello","Goodbye","Thank you","Please"],correctIndex:0,reference:"Greeting"},{id:2,word:"Здравствуйте",ipa:"ZDRA-stvuy-tye",question:"What does 'Здравствуйте' mean?",options:["Hello (formal)","Goodbye","Good morning","Excuse me"],correctIndex:0,reference:"Greeting"},{id:3,word:"До свидания",ipa:"da svi-DA-ni-ya",question:"What does 'До свидания' mean?",options:["Goodbye","Hello","See you later","Good night"],correctIndex:0,reference:"Farewell"},{id:4,word:"Пока",ipa:"pa-KA",question:"What does 'Пока' mean?",options:["Bye (informal)","Hello","Wait","Now"],correctIndex:0,reference:"Farewell"},{id:5,word:"Спасибо",ipa:"spa-SI-ba",question:"What does 'Спасибо' mean?",options:["Thank you","Please","Sorry","Yes"],correctIndex:0,reference:"Courtesy"},{id:6,word:"Пожалуйста",ipa:"pa-ZHA-luy-sta",question:"What does 'Пожалуйста' mean?",options:["Please / You're welcome","Thank you","Excuse me","No"],correctIndex:0,reference:"Courtesy"},{id:7,word:"Извините",ipa:"iz-vi-NI-tye",question:"What does 'Извините' mean?",options:["Excuse me / Sorry","Thank you","Please","Goodbye"],correctIndex:0,reference:"Courtesy"},{id:8,word:"Да",ipa:"da",question:"What does 'Да' mean?",options:["Yes","No","Maybe","And"],correctIndex:0,reference:"Basic"},{id:9,word:"Нет",ipa:"nyet",question:"What does 'Нет' mean?",options:["No","Yes","Not","Never"],correctIndex:0,reference:"Basic"},{id:10,word:"Доброе утро",ipa:"DOB-ra-ye U-tra",question:"What does 'Доброе утро' mean?",options:["Good morning","Good evening","Good night","Good afternoon"],correctIndex:0,reference:"Greeting"},{id:11,word:"Добрый вечер",ipa:"DOB-riy VYE-chyer",question:"What does 'Добрый вечер' mean?",options:["Good evening","Good morning","Good night","Good afternoon"],correctIndex:0,reference:"Greeting"},{id:12,word:"Спокойной ночи",ipa:"spa-KOY-nay NO-chi",question:"What does 'Спокойной ночи' mean?",options:["Good night","Good morning","Good evening","Sweet dreams"],correctIndex:0,reference:"Greeting"},{id:13,word:"Вода",ipa:"va-DA",question:"What does 'Вода' mean?",options:["Water","Fire","Air","Earth"],correctIndex:0,reference:"Noun"},{id:14,word:"Хлеб",ipa:"khlyeb",question:"What does 'Хлеб' mean?",options:["Bread","Milk","Meat","Salt"],correctIndex:0,reference:"Noun"},{id:15,word:"Дом",ipa:"dom",question:"What does 'Дом' mean?",options:["House / Home","Street","City","School"],correctIndex:0,reference:"Noun"},{id:16,word:"Семья",ipa:"syem-YA",question:"What does 'Семья' mean?",options:["Family","Friend","Neighbor","Nation"],correctIndex:0,reference:"Noun"},{id:17,word:"Друг",ipa:"druk",question:"What does 'Друг' mean?",options:["Friend","Enemy","Brother","Stranger"],correctIndex:0,reference:"Noun"},{id:18,word:"Любовь",ipa:"lyu-BOV",question:"What does 'Любовь' mean?",options:["Love","Peace","Joy","Hope"],correctIndex:0,reference:"Noun"},{id:19,word:"Жизнь",ipa:"zhizn",question:"What does 'Жизнь' mean?",options:["Life","Death","Soul","World"],correctIndex:0,reference:"Noun"},{id:20,word:"Мир",ipa:"mir",question:"What does 'Мир' mean?",options:["World / Peace","War","City","Country"],correctIndex:0,reference:"Noun"},{id:21,word:"Время",ipa:"VRY-e-mya",question:"What does 'Время' mean?",options:["Time","Day","Night","Hour"],correctIndex:0,reference:"Noun"},{id:22,word:"Работа",ipa:"ra-BO-ta",question:"What does 'Работа' mean?",options:["Work / Job","Rest","Play","School"],correctIndex:0,reference:"Noun"},{id:23,word:"Школа",ipa:"SHKO-la",question:"What does 'Школа' mean?",options:["School","Church","Market","Hospital"],correctIndex:0,reference:"Noun"},{id:24,word:"Книга",ipa:"KNI-ga",question:"What does 'Книга' mean?",options:["Book","Pen","Paper","Letter"],correctIndex:0,reference:"Noun"},{id:25,word:"Деньги",ipa:"DYEN-gi",question:"What does 'Деньги' mean?",options:["Money","Gold","Price","Bank"],correctIndex:0,reference:"Noun"},{id:26,word:"Город",ipa:"GO-rat",question:"What does 'Город' mean?",options:["City / Town","Village","Country","Street"],correctIndex:0,reference:"Noun"},{id:27,word:"Страна",ipa:"stra-NA",question:"What does 'Страна' mean?",options:["Country","City","Region","World"],correctIndex:0,reference:"Noun"},{id:28,word:"Язык",ipa:"ya-ZIK",question:"What does 'Язык' mean?",options:["Language / Tongue","Voice","Speech","Word"],correctIndex:0,reference:"Noun"},{id:29,word:"Человек",ipa:"chye-la-VYEK",question:"What does 'Человек' mean?",options:["Person / Human","Animal","Child","Adult"],correctIndex:0,reference:"Noun"},{id:30,word:"Ребёнок",ipa:"rye-BYO-nak",question:"What does 'Ребёнок' mean?",options:["Child","Baby","Youth","Adult"],correctIndex:0,reference:"Noun"},{id:31,word:"Сердце",ipa:"SYER-tse",question:"What does 'Сердце' mean?",options:["Heart","Soul","Mind","Spirit"],correctIndex:0,reference:"Noun"},{id:32,word:"Душа",ipa:"du-SHA",question:"What does 'Душа' mean?",options:["Soul","Heart","Mind","Spirit"],correctIndex:0,reference:"Noun"},{id:33,word:"Бог",ipa:"bok",question:"What does 'Бог' mean?",options:["God","Angel","Heaven","Faith"],correctIndex:0,reference:"Noun"},{id:34,word:"Вера",ipa:"VYE-ra",question:"What does 'Вера' mean?",options:["Faith / Belief","Hope","Love","Truth"],correctIndex:0,reference:"Noun"},{id:35,word:"Правда",ipa:"PRAV-da",question:"What does 'Правда' mean?",options:["Truth","Lie","Secret","Word"],correctIndex:0,reference:"Noun"},{id:36,word:"Надежда",ipa:"na-DYEZH-da",question:"What does 'Надежда' mean?",options:["Hope","Fear","Doubt","Despair"],correctIndex:0,reference:"Noun"},{id:37,word:"Свобода",ipa:"sva-BO-da",question:"What does 'Свобода' mean?",options:["Freedom","Power","Justice","Order"],correctIndex:0,reference:"Noun"},{id:38,word:"Солнце",ipa:"SON-tse",question:"What does 'Солнце' mean?",options:["Sun","Moon","Star","Cloud"],correctIndex:0,reference:"Noun"},{id:39,word:"Природа",ipa:"pri-RO-da",question:"What does 'Природа' mean?",options:["Nature","Culture","Art","Science"],correctIndex:0,reference:"Noun"},{id:40,word:"Счастье",ipa:"SHAS-tye",question:"What does 'Счастье' mean?",options:["Happiness","Sadness","Joy","Luck"],correctIndex:0,reference:"Noun"}],es:[{id:1,word:"Привет",ipa:"pri-VYET",question:"¿Qué significa 'Привет'?",options:["Hola (informal)","Adiós","Gracias","Por favor"],correctIndex:0,reference:"Saludo"},{id:2,word:"Здравствуйте",ipa:"ZDRA-stvuy-tye",question:"¿Qué significa 'Здравствуйте'?",options:["Hola (formal)","Adiós","Buenos días","Disculpe"],correctIndex:0,reference:"Saludo"},{id:3,word:"До свидания",ipa:"da svi-DA-ni-ya",question:"¿Qué significa 'До свидания'?",options:["Adiós","Hola","Hasta luego","Buenas noches"],correctIndex:0,reference:"Despedida"},{id:4,word:"Пока",ipa:"pa-KA",question:"¿Qué significa 'Пока'?",options:["Chao (informal)","Hola","Espera","Ahora"],correctIndex:0,reference:"Despedida"},{id:5,word:"Спасибо",ipa:"spa-SI-ba",question:"¿Qué significa 'Спасибо'?",options:["Gracias","Por favor","Lo siento","Sí"],correctIndex:0,reference:"Cortesía"},{id:6,word:"Пожалуйста",ipa:"pa-ZHA-luy-sta",question:"¿Qué significa 'Пожалуйста'?",options:["Por favor / De nada","Gracias","Perdón","No"],correctIndex:0,reference:"Cortesía"},{id:7,word:"Извините",ipa:"iz-vi-NI-tye",question:"¿Qué significa 'Извините'?",options:["Perdón / Disculpe","Gracias","Por favor","Adiós"],correctIndex:0,reference:"Cortesía"},{id:8,word:"Да",ipa:"da",question:"¿Qué significa 'Да'?",options:["Sí","No","Quizás","Y"],correctIndex:0,reference:"Básico"},{id:9,word:"Нет",ipa:"nyet",question:"¿Qué significa 'Нет'?",options:["No","Sí","Nunca","Nada"],correctIndex:0,reference:"Básico"},{id:10,word:"Доброе утро",ipa:"DOB-ra-ye U-tra",question:"¿Qué significa 'Доброе утро'?",options:["Buenos días","Buenas noches","Buenas tardes","Buenas noches"],correctIndex:0,reference:"Saludo"},{id:11,word:"Добрый вечер",ipa:"DOB-riy VYE-chyer",question:"¿Qué significa 'Добрый вечер'?",options:["Buenas noches","Buenos días","Buenas noches","Buenas tardes"],correctIndex:0,reference:"Saludo"},{id:12,word:"Спокойной ночи",ipa:"spa-KOY-nay NO-chi",question:"¿Qué significa 'Спокойной ночи'?",options:["Buenas noches","Buenos días","Buenas tardes","Dulces sueños"],correctIndex:0,reference:"Saludo"},{id:13,word:"Вода",ipa:"va-DA",question:"¿Qué significa 'Вода'?",options:["Agua","Fuego","Aire","Tierra"],correctIndex:0,reference:"Sustantivo"},{id:14,word:"Хлеб",ipa:"khlyeb",question:"¿Qué significa 'Хлеб'?",options:["Pan","Leche","Carne","Sal"],correctIndex:0,reference:"Sustantivo"},{id:15,word:"Дом",ipa:"dom",question:"¿Qué significa 'Дом'?",options:["Casa / Hogar","Calle","Ciudad","Escuela"],correctIndex:0,reference:"Sustantivo"},{id:16,word:"Семья",ipa:"syem-YA",question:"¿Qué significa 'Семья'?",options:["Familia","Amigo","Vecino","Nación"],correctIndex:0,reference:"Sustantivo"},{id:17,word:"Друг",ipa:"druk",question:"¿Qué significa 'Друг'?",options:["Amigo","Enemigo","Hermano","Extraño"],correctIndex:0,reference:"Sustantivo"},{id:18,word:"Любовь",ipa:"lyu-BOV",question:"¿Qué significa 'Любовь'?",options:["Amor","Paz","Alegría","Esperanza"],correctIndex:0,reference:"Sustantivo"},{id:19,word:"Жизнь",ipa:"zhizn",question:"¿Qué significa 'Жизнь'?",options:["Vida","Muerte","Alma","Mundo"],correctIndex:0,reference:"Sustantivo"},{id:20,word:"Мир",ipa:"mir",question:"¿Qué significa 'Мир'?",options:["Mundo / Paz","Guerra","Ciudad","País"],correctIndex:0,reference:"Sustantivo"},{id:21,word:"Время",ipa:"VRY-e-mya",question:"¿Qué significa 'Время'?",options:["Tiempo","Día","Noche","Hora"],correctIndex:0,reference:"Sustantivo"},{id:22,word:"Работа",ipa:"ra-BO-ta",question:"¿Qué significa 'Работа'?",options:["Trabajo","Descanso","Juego","Escuela"],correctIndex:0,reference:"Sustantivo"},{id:23,word:"Школа",ipa:"SHKO-la",question:"¿Qué significa 'Школа'?",options:["Escuela","Iglesia","Mercado","Hospital"],correctIndex:0,reference:"Sustantivo"},{id:24,word:"Книга",ipa:"KNI-ga",question:"¿Qué significa 'Книга'?",options:["Libro","Pluma","Papel","Carta"],correctIndex:0,reference:"Sustantivo"},{id:25,word:"Деньги",ipa:"DYEN-gi",question:"¿Qué significa 'Деньги'?",options:["Dinero","Oro","Precio","Banco"],correctIndex:0,reference:"Sustantivo"},{id:26,word:"Город",ipa:"GO-rat",question:"¿Qué significa 'Город'?",options:["Ciudad","Pueblo","País","Calle"],correctIndex:0,reference:"Sustantivo"},{id:27,word:"Страна",ipa:"stra-NA",question:"¿Qué significa 'Страна'?",options:["País","Ciudad","Región","Mundo"],correctIndex:0,reference:"Sustantivo"},{id:28,word:"Язык",ipa:"ya-ZIK",question:"¿Qué significa 'Язык'?",options:["Idioma / Lengua","Voz","Habla","Palabra"],correctIndex:0,reference:"Sustantivo"},{id:29,word:"Человек",ipa:"chye-la-VYEK",question:"¿Qué significa 'Человек'?",options:["Persona / Humano","Animal","Niño","Adulto"],correctIndex:0,reference:"Sustantivo"},{id:30,word:"Ребёнок",ipa:"rye-BYO-nak",question:"¿Qué significa 'Ребёнок'?",options:["Niño","Bebé","Joven","Adulto"],correctIndex:0,reference:"Sustantivo"},{id:31,word:"Сердце",ipa:"SYER-tse",question:"¿Qué significa 'Сердце'?",options:["Corazón","Alma","Mente","Espíritu"],correctIndex:0,reference:"Sustantivo"},{id:32,word:"Душа",ipa:"du-SHA",question:"¿Qué significa 'Душа'?",options:["Alma","Corazón","Mente","Espíritu"],correctIndex:0,reference:"Sustantivo"},{id:33,word:"Бог",ipa:"bok",question:"¿Qué significa 'Бог'?",options:["Dios","Ángel","Cielo","Fe"],correctIndex:0,reference:"Sustantivo"},{id:34,word:"Вера",ipa:"VYE-ra",question:"¿Qué significa 'Вера'?",options:["Fe / Creencia","Esperanza","Amor","Verdad"],correctIndex:0,reference:"Sustantivo"},{id:35,word:"Правда",ipa:"PRAV-da",question:"¿Qué significa 'Правда'?",options:["Verdad","Mentira","Secreto","Palabra"],correctIndex:0,reference:"Sustantivo"},{id:36,word:"Надежда",ipa:"na-DYEZH-da",question:"¿Qué significa 'Надежда'?",options:["Esperanza","Miedo","Duda","Desesperación"],correctIndex:0,reference:"Sustantivo"},{id:37,word:"Свобода",ipa:"sva-BO-da",question:"¿Qué significa 'Свобода'?",options:["Libertad","Poder","Justicia","Orden"],correctIndex:0,reference:"Sustantivo"},{id:38,word:"Солнце",ipa:"SON-tse",question:"¿Qué significa 'Солнце'?",options:["Sol","Luna","Estrella","Nube"],correctIndex:0,reference:"Sustantivo"},{id:39,word:"Природа",ipa:"pri-RO-da",question:"¿Qué significa 'Природа'?",options:["Naturaleza","Cultura","Arte","Ciencia"],correctIndex:0,reference:"Sustantivo"},{id:40,word:"Счастье",ipa:"SHAS-tye",question:"¿Qué significa 'Счастье'?",options:["Felicidad","Tristeza","Alegría","Suerte"],correctIndex:0,reference:"Sustantivo"}]},Ru={en:[{id:1,question:"How many books are in the Old Testament?",options:["27","39","46","66"],correctIndex:1,reference:"Bible Structure"},{id:2,question:"What are the five divisions of the Old Testament?",options:["Law, History, Poetry, Major Prophets, Minor Prophets","Law, Gospels, Poetry, Prophets, Wisdom","Pentateuch, Letters, Psalms, Prophets, History","Torah, Writings, Prophets, Gospels, Acts"],correctIndex:0,reference:"Bible Structure"},{id:3,question:"How many books make up the Pentateuch (Law)?",options:["3","4","5","7"],correctIndex:2,reference:"Genesis, Exodus, Leviticus, Numbers, Deuteronomy"},{id:4,question:"How many Historical books are in the Old Testament?",options:["10","12","14","16"],correctIndex:1,reference:"Joshua through Esther (12 books)"},{id:5,question:"How many Poetic (Wisdom) books are in the Old Testament?",options:["3","4","5","7"],correctIndex:2,reference:"Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon"},{id:6,question:"Which of the following is NOT a Major Prophet?",options:["Isaiah","Jeremiah","Hosea","Ezekiel"],correctIndex:2,reference:"Hosea is a Minor Prophet"},{id:7,question:"How many books are classified as Major Prophets?",options:["4","5","6","7"],correctIndex:1,reference:"Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel"},{id:8,question:"How many Minor Prophets are there?",options:["10","11","12","14"],correctIndex:2,reference:"Hosea through Malachi (12 books)"},{id:9,question:"What is the first book of the Old Testament?",options:["Exodus","Genesis","Psalms","Job"],correctIndex:1,reference:"Genesis 1:1"},{id:10,question:"What is the last book of the Old Testament?",options:["Zechariah","Revelation","Malachi","Daniel"],correctIndex:2,reference:"Malachi"},{id:11,question:"Which Old Testament book has the most chapters?",options:["Isaiah","Genesis","Psalms","Jeremiah"],correctIndex:2,reference:"Psalms has 150 chapters"},{id:12,question:"How many chapters are in the Old Testament?",options:["729","829","929","1,029"],correctIndex:2,reference:"929 chapters total"},{id:13,question:"Which is the shortest book in the Old Testament?",options:["Obadiah","Jonah","Nahum","Haggai"],correctIndex:0,reference:"Obadiah has 1 chapter with 21 verses"},{id:14,question:"Which book is known as the book of praise and worship?",options:["Proverbs","Ecclesiastes","Psalms","Song of Solomon"],correctIndex:2,reference:"Psalms"},{id:15,question:"Who is traditionally credited with writing the Pentateuch?",options:["Abraham","Moses","David","Samuel"],correctIndex:1,reference:"Mosaic authorship tradition"},{id:16,question:"Which Minor Prophet was swallowed by a great fish?",options:["Amos","Micah","Jonah","Joel"],correctIndex:2,reference:"Jonah 1:17"},{id:17,question:"Which book contains the famous verse 'The Lord is my shepherd'?",options:["Proverbs","Isaiah","Psalms","Ecclesiastes"],correctIndex:2,reference:"Psalm 23:1"},{id:18,question:"Lamentations is traditionally attributed to which prophet?",options:["Isaiah","Ezekiel","Daniel","Jeremiah"],correctIndex:3,reference:"Jeremiah is the traditional author of Lamentations"},{id:19,question:"Which of these is NOT a Poetic/Wisdom book?",options:["Job","Proverbs","Ruth","Ecclesiastes"],correctIndex:2,reference:"Ruth is a Historical book"},{id:20,question:"What is the longest book of the Old Testament by number of chapters?",options:["Psalms (150 chapters)","Isaiah (66 chapters)","Genesis (50 chapters)","Jeremiah (52 chapters)"],correctIndex:0,reference:"Psalms has 150 chapters"}],es:[{id:1,question:"¿Cuántos libros tiene el Antiguo Testamento?",options:["27","39","46","66"],correctIndex:1,reference:"Estructura de la Biblia"},{id:2,question:"¿Cuáles son las cinco divisiones del Antiguo Testamento?",options:["Ley, Historia, Poesía, Profetas Mayores, Profetas Menores","Ley, Evangelios, Poesía, Profetas, Sabiduría","Pentateuco, Cartas, Salmos, Profetas, Historia","Torá, Escritos, Profetas, Evangelios, Hechos"],correctIndex:0,reference:"Estructura de la Biblia"},{id:3,question:"¿Cuántos libros componen el Pentateuco (Ley)?",options:["3","4","5","7"],correctIndex:2,reference:"Génesis, Éxodo, Levítico, Números, Deuteronomio"},{id:4,question:"¿Cuántos libros Históricos hay en el Antiguo Testamento?",options:["10","12","14","16"],correctIndex:1,reference:"Josué hasta Ester (12 libros)"},{id:5,question:"¿Cuántos libros Poéticos (de Sabiduría) hay en el Antiguo Testamento?",options:["3","4","5","7"],correctIndex:2,reference:"Job, Salmos, Proverbios, Eclesiastés, Cantar de los Cantares"},{id:6,question:"¿Cuál de los siguientes NO es un Profeta Mayor?",options:["Isaías","Jeremías","Oseas","Ezequiel"],correctIndex:2,reference:"Oseas es un Profeta Menor"},{id:7,question:"¿Cuántos libros se clasifican como Profetas Mayores?",options:["4","5","6","7"],correctIndex:1,reference:"Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel"},{id:8,question:"¿Cuántos Profetas Menores hay?",options:["10","11","12","14"],correctIndex:2,reference:"Oseas hasta Malaquías (12 libros)"},{id:9,question:"¿Cuál es el primer libro del Antiguo Testamento?",options:["Éxodo","Génesis","Salmos","Job"],correctIndex:1,reference:"Génesis 1:1"},{id:10,question:"¿Cuál es el último libro del Antiguo Testamento?",options:["Zacarías","Apocalipsis","Malaquías","Daniel"],correctIndex:2,reference:"Malaquías"},{id:11,question:"¿Qué libro del Antiguo Testamento tiene más capítulos?",options:["Isaías","Génesis","Salmos","Jeremías"],correctIndex:2,reference:"Salmos tiene 150 capítulos"},{id:12,question:"¿Cuántos capítulos tiene el Antiguo Testamento?",options:["729","829","929","1,029"],correctIndex:2,reference:"929 capítulos en total"},{id:13,question:"¿Cuál es el libro más corto del Antiguo Testamento?",options:["Abdías","Jonás","Nahúm","Hageo"],correctIndex:0,reference:"Abdías tiene 1 capítulo con 21 versículos"},{id:14,question:"¿Qué libro es conocido como el libro de alabanza y adoración?",options:["Proverbios","Eclesiastés","Salmos","Cantar de los Cantares"],correctIndex:2,reference:"Salmos"},{id:15,question:"¿A quién se le atribuye tradicionalmente la escritura del Pentateuco?",options:["Abraham","Moisés","David","Samuel"],correctIndex:1,reference:"Tradición de autoría mosaica"},{id:16,question:"¿Qué Profeta Menor fue tragado por un gran pez?",options:["Amós","Miqueas","Jonás","Joel"],correctIndex:2,reference:"Jonás 1:17"},{id:17,question:"¿Qué libro contiene el famoso versículo 'El Señor es mi pastor'?",options:["Proverbios","Isaías","Salmos","Eclesiastés"],correctIndex:2,reference:"Salmo 23:1"},{id:18,question:"¿A qué profeta se le atribuye tradicionalmente Lamentaciones?",options:["Isaías","Ezequiel","Daniel","Jeremías"],correctIndex:3,reference:"Jeremías es el autor tradicional de Lamentaciones"},{id:19,question:"¿Cuál de estos NO es un libro Poético/de Sabiduría?",options:["Job","Proverbios","Rut","Eclesiastés"],correctIndex:2,reference:"Rut es un libro Histórico"},{id:20,question:"¿Cuál es el libro más largo del Antiguo Testamento por número de capítulos?",options:["Salmos (150 capítulos)","Isaías (66 capítulos)","Génesis (50 capítulos)","Jeremías (52 capítulos)"],correctIndex:0,reference:"Salmos tiene 150 capítulos"}]},dr={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",exit:"Exit",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge",study:"Study",studyTypes:{greekFlashCards:{title:"Greek Flashcards",description:"Study New Testament Greek vocabulary with flip cards"},hebrewFlashCards:{title:"Hebrew Flashcards",description:"Study Old Testament Hebrew vocabulary with flip cards"},germanFlashCards:{title:"German Flashcards",description:"Learn essential German words with IPA pronunciation"},germanyMap:{title:"Map of Germany",description:"Explore German states and cities with pronunciation cards"},speakingGame:{title:"Pronunciation Practice",description:"Say the name of German states and cities aloud — mic checks you"},russianFlashCards:{title:"Russian Flashcards",description:"Learn essential Russian words with Cyrillic script and transliteration"},russianGrammar:{title:"Russian Grammar Cases",description:"Study the 6 Russian grammatical cases with examples"},woBistDu:{title:"Wo bist du? — Rammstein",description:"Vocabulary flashcards + full lyrics from Rosenrot (2005)"},amour:{title:"Amour — Rammstein",description:"German–French vocabulary + full lyrics from Reise, Reise (2004)"},stirbNicht:{title:"Stirb nicht vor mir — Rammstein",description:"German/English duet feat. Sharleen Spiteri — Rosenrot (2005)"},kletka:{title:"Клетка — Molchat Doma",description:"Russian post-punk vocabulary + full lyrics (2018)"},toska:{title:"Тоска — Molchat Doma",description:"Russian vocabulary + lyrics about longing and loss"},volny:{title:"Волны — Molchat Doma",description:"Russian vocabulary + lyrics about waves and nature"},zimnyaya:{title:"Зимняя — Molchat Doma",description:"Russian post-punk vocabulary + full lyrics from Belaya Polosa (2023)"}},german:"German",russian:"Russian"},flashcards:{title:"Flashcards",tapToFlip:"Tap to flip",next:"Next",previous:"Previous",shuffle:"Shuffle",backToHome:"Back to Home",showAll:"Show All",hideAll:"Hide All",learned:"learned",knowIt:"Know it",all:"All",notLearned:"Not learned",resetProgress:"Reset Progress"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit",searchPlaceholder:"Search book..."},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",exit:"Salir",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento",study:"Estudio",studyTypes:{greekFlashCards:{title:"Tarjetas de Griego",description:"Estudia vocabulario griego del Nuevo Testamento con tarjetas"},hebrewFlashCards:{title:"Tarjetas de Hebreo",description:"Estudia vocabulario hebreo del Antiguo Testamento con tarjetas"},germanFlashCards:{title:"Tarjetas de Alemán",description:"Aprende palabras esenciales en alemán con pronunciación IPA"},germanyMap:{title:"Mapa de Alemania",description:"Explora estados y ciudades alemanas con tarjetas de pronunciación"},speakingGame:{title:"Práctica de pronunciación",description:"Di en voz alta el nombre de estados y ciudades — el micrófono te evalúa"},russianFlashCards:{title:"Tarjetas de Ruso",description:"Aprende palabras esenciales en ruso con escritura cirílica y transliteración"},russianGrammar:{title:"Casos Gramaticales del Ruso",description:"Estudia los 6 casos gramaticales del ruso con ejemplos"},woBistDu:{title:"Wo bist du? — Rammstein",description:"Tarjetas de vocabulario + letra completa de Rosenrot (2005)"},amour:{title:"Amour — Rammstein",description:"Vocabulario alemán-francés + letra completa de Reise, Reise (2004)"},stirbNicht:{title:"Stirb nicht vor mir — Rammstein",description:"Dúo alemán/inglés con Sharleen Spiteri — Rosenrot (2005)"},kletka:{title:"Клетка — Molchat Doma",description:"Vocabulario post-punk ruso + letra completa (2018)"},toska:{title:"Тоска — Molchat Doma",description:"Vocabulario ruso + letra sobre añoranza y pérdida"},volny:{title:"Волны — Molchat Doma",description:"Vocabulario ruso + letra sobre olas y naturaleza"},zimnyaya:{title:"Зимняя — Molchat Doma",description:"Vocabulario de post-punk ruso + letra completa de Belaya Polosa (2023)"}},german:"Alemán",russian:"Ruso"},flashcards:{title:"Tarjetas",tapToFlip:"Toca para voltear",next:"Siguiente",previous:"Anterior",shuffle:"Mezclar",backToHome:"Volver al Inicio",showAll:"Mostrar Todo",hideAll:"Ocultar Todo",learned:"aprendidas",knowIt:"La sé",all:"Todas",notLearned:"No aprendidas",resetProgress:"Reiniciar Progreso"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar",searchPlaceholder:"Buscar libro..."},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},Lf=A.createContext(null),bE=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:bi.en,es:bi.es},{id:"greek-vocabulary",title:{en:"Greek Vocabulary",es:"Vocabulario Griego"},description:{en:"Learn key Greek words from the New Testament",es:"Aprende palabras clave en griego del Nuevo Testamento"},icon:"αβ",category:"knowledge",en:Cu.en,es:Cu.es},{id:"hebrew-vocabulary",title:{en:"Hebrew Vocabulary",es:"Vocabulario Hebreo"},description:{en:"Learn key Hebrew words from the Old Testament",es:"Aprende palabras clave en hebreo del Antiguo Testamento"},icon:"אב",category:"knowledge",en:ku.en,es:ku.es},{id:"german-vocabulary",title:{en:"German Vocabulary",es:"Vocabulario Alemán"},description:{en:"Learn essential German words with pronunciation guides",es:"Aprende palabras esenciales en alemán con guías de pronunciación"},icon:"Aa",category:"knowledge",en:Nu.en,es:Nu.es},{id:"russian-vocabulary",title:{en:"Russian Vocabulary",es:"Vocabulario Ruso"},description:{en:"Learn essential Russian words with transliteration and pronunciation",es:"Aprende palabras esenciales en ruso con transliteración y pronunciación"},icon:"Яя",category:"knowledge",en:Pu.en,es:Pu.es},{id:"old-testament-facts",title:{en:"Old Testament Facts",es:"Datos del Antiguo Testamento"},description:{en:"Questions about the structure and key facts of the Old Testament",es:"Preguntas sobre la estructura y datos clave del Antiguo Testamento"},icon:"📖",category:"knowledge",en:Ru.en,es:Ru.es}],EE=({children:n})=>{const[e,t]=A.useState(Mf),[s,r]=A.useState(bE),[i,a]=A.useState(dr),[l,d]=A.useState(!0),[h,p]=A.useState(null),m=A.useCallback(async()=>{d(!0),p(null);try{const[x,P,R,O]=await Promise.all([yE(),wE(),xu("en"),xu("es")]);x&&t(x),P&&P.length>0&&r(P),(R||O)&&a(V=>({...V,...R?{en:R}:{},...O?{es:O}:{}}))}catch(x){console.warn("Failed to load Firestore data, using fallbacks:",x.message),p(x.message)}finally{d(!1)}},[]);A.useEffect(()=>{m()},[m]);const y=A.useCallback(()=>(Object.keys(localStorage).forEach(x=>{x.startsWith("firestore_")&&localStorage.removeItem(x)}),m()),[m]),S={books:e,quizzes:s,translations:i,loading:l,error:h,refreshData:y,setBooks:t,setQuizzes:r,setTranslations:a};return c.jsx(Lf.Provider,{value:S,children:n})},Mt=()=>{const n=A.useContext(Lf);if(!n)throw new Error("useData must be used within a DataProvider");return n},qf=A.createContext(null),TE=()=>{var t;const n=localStorage.getItem("language");if(n&&dr[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&dr[e]?e:"en"},AE=({children:n})=>{const{translations:e}=Mt(),[t,s]=A.useState(TE);A.useEffect(()=>{document.documentElement.lang=t},[t]);const r=A.useCallback(p=>{e[p]&&(s(p),localStorage.setItem("language",p))},[e]),i=A.useCallback((p,m={})=>{const y=p.split(".");let S=e[t];for(const x of y)if(S&&typeof S=="object"&&x in S)S=S[x];else{S=e.en;for(const P of y)if(S&&typeof S=="object"&&P in S)S=S[P];else return p;break}return typeof S=="string"&&Object.keys(m).length>0?S.replace(/\{(\w+)\}/g,(x,P)=>m[P]!==void 0?m[P]:x):S||p},[t,e]),a=A.useCallback(p=>{var m,y;return((y=(m=e[t])==null?void 0:m.books)==null?void 0:y[p])||p},[t,e]),l=A.useCallback(p=>{var y;const m=((y=e[t])==null?void 0:y.scores)||e.en.scores;return p===100?m.perfect:p>=90?m.excellent:p>=80?m.great:p>=70?m.good:p>=60?m.notBad:p>=50?m.keepPracticing:m.tryAgain},[t,e]),d=A.useMemo(()=>Object.keys(e),[e]),h=A.useMemo(()=>({language:t,setLanguage:r,t:i,translateBook:a,getScoreMessage:l,availableLanguages:d}),[t,r,i,a,l,d]);return c.jsx(qf.Provider,{value:h,children:n})},ht=()=>{const n=A.useContext(qf);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},SE=()=>{const{language:n,setLanguage:e,t}=ht();return c.jsxs("div",{className:"language-selector",children:[c.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),c.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})},hr=({children:n,className:e="",...t})=>c.jsx("div",{className:`card ${e}`,...t,children:n}),Za=(n,e)=>{const[t,s]=A.useState(()=>{try{const i=window.localStorage.getItem(n);return i?JSON.parse(i):e}catch(i){return console.error(`Error loading localStorage key "${n}":`,i),e}});return[t,i=>{try{const a=i instanceof Function?i(t):i;s(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},zf=()=>{const[n,e]=Za("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=A.useCallback(r=>{e(i=>{const a=i.totalAttempts+1,l=i.totalCorrect+r.correct,d=Math.round(l/(a*r.total)*100);return{totalAttempts:a,bestScore:Math.max(i.bestScore,r.percentage),averageScore:d,totalCorrect:l,lastAttemptDate:new Date().toISOString()}})},[e]),s=A.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:s}},xE=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:s,onStartFlashCards:r,onNavigateAdmin:i,onRussianGrammar:a,onRussianSection:l,onKletka:d,onToska:h,onVolny:p})=>{const{stats:m}=zf(),{t:y,language:S}=ht(),{quizzes:x}=Mt();return c.jsx("div",{className:"home-container",children:c.jsxs("div",{className:"home-content",children:[c.jsx("header",{className:"home-header",children:c.jsxs("div",{className:"logo-container",children:[c.jsx("div",{className:"logo",children:c.jsx("span",{className:"logo-icon",children:"📖"})}),c.jsx("h1",{className:"app-title",children:y("appName")}),c.jsx("p",{className:"app-subtitle",children:y("appSubtitle")})]})}),c.jsxs(hr,{className:"welcome-card",children:[c.jsx("h2",{className:"welcome-title",children:y("home.welcomeTitle")}),c.jsx("p",{className:"welcome-description",children:y("home.welcomeDescription")}),c.jsxs("div",{className:"quiz-info",children:[c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-icon",children:"📚"}),c.jsx("span",{className:"info-text",children:y("home.booksCount")})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-icon",children:"⏱️"}),c.jsx("span",{className:"info-text",children:y("home.unlimitedTime")})]})]}),c.jsx("h3",{className:"quiz-type-title",children:y("home.selectQuizType")}),c.jsxs("div",{className:"quiz-category",children:[c.jsx("h4",{className:"quiz-category-title",children:y("home.oldTestament")}),c.jsxs("div",{className:"quiz-types",children:[c.jsxs("button",{className:"quiz-type-card",onClick:n,children:[c.jsx("span",{className:"quiz-type-icon",children:y("home.quizTypes.order.icon")}),c.jsx("span",{className:"quiz-type-name",children:y("home.quizTypes.order.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.quizTypes.order.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:e,children:[c.jsx("span",{className:"quiz-type-icon",children:y("home.quizTypes.complete.icon")}),c.jsx("span",{className:"quiz-type-name",children:y("home.quizTypes.complete.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.quizTypes.complete.description")})]})]})]}),c.jsxs("div",{className:"quiz-category",children:[c.jsx("h4",{className:"quiz-category-title",children:y("home.knowledge")}),c.jsx("div",{className:"quiz-types",children:x.map(P=>{var R,O,V,z;return c.jsxs("button",{className:"quiz-type-card",onClick:()=>{P.id==="genesis-covenants"?t():s&&s(P.id)},children:[c.jsx("span",{className:"quiz-type-icon",children:P.icon||"📝"}),c.jsx("span",{className:"quiz-type-name",children:((R=P.title)==null?void 0:R[S])||((O=P.title)==null?void 0:O.en)||P.id}),c.jsx("span",{className:"quiz-type-desc",children:((V=P.description)==null?void 0:V[S])||((z=P.description)==null?void 0:z.en)||""})]},P.id)})})]}),c.jsxs("div",{className:"quiz-category",children:[c.jsx("h4",{className:"quiz-category-title",children:y("home.study")}),c.jsxs("div",{className:"quiz-types",children:[c.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("greek-vocabulary"),children:[c.jsx("span",{className:"quiz-type-icon",children:"🃏"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.greekFlashCards.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.greekFlashCards.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("hebrew-vocabulary"),children:[c.jsx("span",{className:"quiz-type-icon",children:"🃏"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.hebrewFlashCards.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.hebrewFlashCards.description")})]})]})]}),c.jsxs("div",{className:"quiz-category",children:[c.jsxs("h4",{className:"quiz-category-title section-category-title",onClick:()=>l==null?void 0:l(),children:[y("home.russian")," ",c.jsx("span",{className:"section-title-arrow",children:"→"})]}),c.jsxs("div",{className:"quiz-types",children:[c.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("russian-vocabulary"),children:[c.jsx("span",{className:"quiz-type-icon",children:"🇷🇺"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.russianFlashCards.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.russianFlashCards.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:()=>a==null?void 0:a(),children:[c.jsx("span",{className:"quiz-type-icon",children:"📐"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.russianGrammar.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.russianGrammar.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:()=>d==null?void 0:d(),children:[c.jsx("span",{className:"quiz-type-icon",children:"🏙️"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.kletka.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.kletka.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:()=>h==null?void 0:h(),children:[c.jsx("span",{className:"quiz-type-icon",children:"🎭"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.toska.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.toska.description")})]}),c.jsxs("button",{className:"quiz-type-card",onClick:()=>p==null?void 0:p(),children:[c.jsx("span",{className:"quiz-type-icon",children:"🌊"}),c.jsx("span",{className:"quiz-type-name",children:y("home.studyTypes.volny.title")}),c.jsx("span",{className:"quiz-type-desc",children:y("home.studyTypes.volny.description")})]})]})]})]}),m.totalAttempts>0&&c.jsxs(hr,{className:"stats-card",children:[c.jsx("h3",{className:"stats-title",children:y("home.yourProgress")}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-value",children:m.totalAttempts}),c.jsx("div",{className:"stat-label",children:y("home.attempts")})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("div",{className:"stat-value",children:[m.bestScore,"%"]}),c.jsx("div",{className:"stat-label",children:y("home.bestScore")})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("div",{className:"stat-value",children:[m.averageScore,"%"]}),c.jsx("div",{className:"stat-label",children:y("home.average")})]})]})]}),c.jsxs("footer",{className:"home-footer",children:[c.jsx("p",{className:"footer-text",children:y("home.footerText")}),c.jsx("button",{className:"admin-link",onClick:i,onContextMenu:P=>{P.preventDefault(),i==null||i()},children:"⚙"})]})]})})},CE=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},kE=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",Ff=A.createContext(),NE=({children:n})=>{const{books:e}=Mt(),[t,s]=A.useState([]),[r,i]=A.useState([]),[a,l]=A.useState(!1),d=A.useCallback(()=>{s(CE([...e])),i([]),l(!0)},[e]),h=A.useCallback(O=>{i(V=>[...V,O])},[]),p=A.useCallback(()=>{i(O=>O.slice(0,-1))},[]),m=A.useCallback(O=>{i(V=>V.filter(z=>z!==O))},[]),y=A.useCallback(()=>{i([])},[]),S=A.useCallback(()=>{let O=0;r.forEach((F,L)=>{e[L]===F&&O++});const V=e.length,z=Math.round(O/V*100);return{correct:O,total:V,percentage:z,selections:r}},[r,e]),x=A.useCallback(O=>r.includes(O),[r]),P=A.useCallback(O=>{const V=r.indexOf(O);return V===-1?null:V+1},[r]),R={shuffledBooks:t,selectedBooks:r,isInitialized:a,initializeQuiz:d,selectBook:h,deselectBook:m,undoLastSelection:p,resetSelections:y,calculateScore:S,isBookSelected:x,getSelectionIndex:P};return c.jsx(Ff.Provider,{value:R,children:n})},PE=()=>{const n=A.useContext(Ff);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},RE=({book:n,displayName:e,isSelected:t,isCorrectlyPlaced:s,isLastPlaced:r,selectionIndex:i,onClick:a,onDeselect:l})=>{const d=["book-card",t?"book-card-selected":"",s?"book-card-correct":"",r?"book-card-just-placed":""].filter(Boolean).join(" "),h=()=>{t&&l?l():t||a()};return c.jsx("button",{className:d,onClick:h,"aria-pressed":t,children:c.jsxs("div",{className:"book-card-content",children:[c.jsx("span",{className:"book-name",children:e||n}),t&&c.jsx("div",{className:`selection-badge ${s?"selection-badge-correct":""}`,children:i})]})})},ec=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return c.jsx("div",{className:"progress-bar-container",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},ye=({onClick:n,variant:e="primary",size:t="medium",disabled:s=!1,className:r="",children:i,...a})=>{const l=`button button-${e} button-${t} ${r}`;return c.jsx("button",{className:l,onClick:n,disabled:s,...a,children:i})},DE=({onComplete:n,onHome:e})=>{const{shuffledBooks:t,selectedBooks:s,isInitialized:r,initializeQuiz:i,selectBook:a,deselectBook:l,undoLastSelection:d,resetSelections:h,calculateScore:p,isBookSelected:m,getSelectionIndex:y}=PE(),{books:S}=Mt(),{t:x,translateBook:P}=ht(),[R,O]=A.useState(!1),[V,z]=A.useState(null),[F,L]=A.useState(!1),[q,b]=A.useState(""),g=A.useRef(null);A.useEffect(()=>{r||i()},[r,i]),A.useEffect(()=>{if(!F)return;const M=$=>{g.current&&!g.current.contains($.target)&&L(!1)};return document.addEventListener("pointerdown",M),()=>document.removeEventListener("pointerdown",M)},[F]);const _=A.useCallback(M=>{m(M)||(a(M),z(M),b(""),setTimeout(()=>z(null),600))},[m,a]),I=A.useCallback(()=>{d(),z(null),L(!1)},[d]),E=A.useCallback(()=>{h(),z(null),L(!1)},[h]),T=()=>{s.length===t.length&&(O(!0),L(!1))},v=()=>{const M=p();n(M)},ae=()=>{O(!1)},me=A.useMemo(()=>{const M=t.filter(J=>!s.includes(J)),$=q.trim().toLowerCase(),Z=$?M.filter(J=>{const re=P(J).toLowerCase(),ke=J.toLowerCase();return re.includes($)||ke.includes($)}):M;return[...s,...Z]},[t,s,q,P]),H=t.length>0?s.length/t.length*100:0,se=s.length===t.length;return c.jsxs("div",{className:"quiz-container",children:[c.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[c.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",x("exit")]}),c.jsxs("header",{className:"quiz-header",children:[c.jsx("h1",{className:"quiz-title",children:x("quiz.title")}),c.jsx("p",{className:"quiz-instruction",children:x("quiz.instruction")})]}),c.jsxs("div",{className:"quiz-progress",children:[c.jsx(ec,{progress:H}),c.jsxs("div",{className:"progress-text",children:[s.length," / ",t.length," ",x("quiz.selected")]})]}),c.jsxs("div",{className:"quiz-search",children:[c.jsx("input",{className:"quiz-search-input",type:"text",value:q,onChange:M=>b(M.target.value),placeholder:x("quiz.searchPlaceholder")}),q&&c.jsx("button",{className:"quiz-search-clear",onClick:()=>b(""),"aria-label":"Clear",children:"×"})]}),c.jsx("div",{className:"quiz-content",children:c.jsx("div",{className:"books-grid",children:me.map(M=>{const $=y(M),Z=$!==null&&S[$-1]===M;return c.jsx(RE,{book:M,displayName:P(M),isSelected:m(M),isCorrectlyPlaced:Z,isLastPlaced:V===M,selectionIndex:$,onClick:()=>_(M),onDeselect:()=>l(M)},M)})})}),c.jsxs("div",{className:"quiz-actions quiz-actions-desktop",children:[c.jsx(ye,{onClick:I,variant:"secondary",disabled:s.length===0,className:"action-button",children:x("quiz.undoLast")}),c.jsx(ye,{onClick:E,variant:"secondary",disabled:s.length===0,className:"action-button",children:x("quiz.resetAll")}),c.jsx(ye,{onClick:T,variant:"primary",disabled:!se,className:"action-button submit-button",children:x("quiz.submitAnswer")})]}),c.jsxs("div",{className:"quiz-fab-wrapper",ref:g,children:[F&&c.jsxs("div",{className:"quiz-fab-menu",children:[c.jsx("button",{className:"quiz-fab-menu-item quiz-fab-menu-submit",onClick:T,disabled:!se,children:x("quiz.submitAnswer")}),c.jsx("button",{className:"quiz-fab-menu-item",onClick:I,disabled:s.length===0,children:x("quiz.undoLast")}),c.jsx("button",{className:"quiz-fab-menu-item",onClick:E,disabled:s.length===0,children:x("quiz.resetAll")})]}),c.jsx("button",{className:`quiz-fab ${F?"quiz-fab-open":""}`,onClick:()=>L(M=>!M),"aria-label":"Actions",children:c.jsx("span",{className:"quiz-fab-icon",children:F?"×":"…"})})]}),R&&c.jsx("div",{className:"confirmation-overlay",onClick:ae,children:c.jsxs("div",{className:"confirmation-modal",onClick:M=>M.stopPropagation(),children:[c.jsx("h2",{className:"confirmation-title",children:x("quiz.confirmTitle")}),c.jsx("p",{className:"confirmation-text",children:x("quiz.confirmText",{count:t.length})}),c.jsxs("div",{className:"confirmation-actions",children:[c.jsx(ye,{onClick:ae,variant:"secondary",children:x("quiz.goBack")}),c.jsx(ye,{onClick:v,variant:"primary",children:x("quiz.yesSubmit")})]})]})})]})},jE=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const s=t.split(" ");if(s.length>1)return`${s[0]} ${s[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},To=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),VE=({onComplete:n,onHome:e})=>{const{t,translateBook:s,language:r}=ht(),{books:i}=Mt(),[a,l]=A.useState(0),[d,h]=A.useState(""),[p,m]=A.useState(Array(i.length).fill(null)),[y,S]=A.useState(!1),[x,P]=A.useState(null),[R,O]=A.useState(!1),V=A.useRef(null),z=i[a],F=s(z),L=jE(z,F);A.useEffect(()=>{V.current&&!y&&V.current.focus()},[a,y]);const q=()=>{setTimeout(()=>{var H;(H=V.current)==null||H.scrollIntoView({behavior:"smooth",block:"center"})},300)},b=()=>{const H=To(d),se=To(F),M=To(z),$=H===se||H===M;P($),S(!0);const Z=[...p];Z[a]={input:d,correct:$,correctAnswer:F},m(Z)},g=()=>{a<i.length-1?(l(a+1),h(""),S(!1),P(null)):E()},_=()=>{const H=[...p];H[a]={input:"",correct:!1,correctAnswer:F,skipped:!0},m(H),a<i.length-1?(l(a+1),h(""),S(!1),P(null)):E()},I=H=>{H.key==="Enter"&&(y?g():d.trim()&&b())},E=()=>{O(!0)},T=()=>{const H=p.filter($=>$==null?void 0:$.correct).length,se=i.length,M=Math.round(H/se*100);n({correct:H,total:se,percentage:M,selections:p.map(($,Z)=>($==null?void 0:$.input)||""),answers:p,quizType:"complete"})},v=()=>{O(!1)},ae=p.filter(H=>H!==null).length,me=ae/i.length*100;return c.jsxs("div",{className:"complete-quiz-container",children:[c.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[c.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",t("exit")]}),c.jsxs("header",{className:"complete-quiz-header",children:[c.jsx("h1",{className:"complete-quiz-title",children:t("completeQuiz.title")}),c.jsx("p",{className:"complete-quiz-instruction",children:t("completeQuiz.instruction")})]}),c.jsxs("div",{className:"complete-quiz-progress",children:[c.jsx(ec,{progress:me}),c.jsx("div",{className:"progress-text",children:t("completeQuiz.progress",{completed:ae,total:i.length})})]}),c.jsxs("div",{className:"complete-quiz-content",children:[c.jsx("div",{className:"book-number",children:a+1}),c.jsxs("div",{className:"hint-card",children:[c.jsx("div",{className:"hint-text",children:L}),c.jsx("div",{className:"hint-label",children:t("completeQuiz.hint",{hint:`${F.length} ${r==="es"?"letras":"letters"}`})})]}),y?c.jsxs("div",{className:`result-section ${x?"correct":"incorrect"}`,children:[c.jsx("div",{className:"result-icon",children:x?"✓":"✗"}),c.jsx("div",{className:"result-message",children:t(x?"completeQuiz.correct":"completeQuiz.incorrect")}),!x&&c.jsx("div",{className:"correct-answer",children:t("completeQuiz.correctAnswer",{answer:F})}),c.jsx(ye,{onClick:g,variant:"primary",className:"next-button",children:a<i.length-1?t("completeQuiz.next"):t("completeQuiz.submitAll")})]}):c.jsxs("div",{className:"input-section",children:[c.jsx("input",{ref:V,type:"text",className:"book-input",value:d,onChange:H=>h(H.target.value),onKeyPress:I,onFocus:q,placeholder:t("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),c.jsxs("div",{className:"input-actions",children:[c.jsx(ye,{onClick:_,variant:"secondary",className:"skip-button",children:t("completeQuiz.skip")}),c.jsx(ye,{onClick:b,variant:"primary",disabled:!d.trim(),className:"check-button",children:t("completeQuiz.check")})]})]})]}),c.jsx("div",{className:"books-overview",children:i.map((H,se)=>{const M=p[se];let $="pending";return M?$=M.correct?"correct":"incorrect":se===a&&($="current"),c.jsx("div",{className:`book-dot ${$}`,title:`${se+1}. ${s(i[se])}`},se)})}),R&&c.jsx("div",{className:"confirmation-overlay",onClick:v,children:c.jsxs("div",{className:"confirmation-modal",onClick:H=>H.stopPropagation(),children:[c.jsx("h2",{className:"confirmation-title",children:t("completeQuiz.confirmTitle")}),c.jsx("p",{className:"confirmation-text",children:t("completeQuiz.confirmText",{completed:ae,total:i.length})}),c.jsxs("div",{className:"confirmation-actions",children:[c.jsx(ye,{onClick:v,variant:"secondary",children:t("quiz.goBack")}),c.jsx(ye,{onClick:T,variant:"primary",children:t("quiz.yesSubmit")})]})]})})]})},OE=({onComplete:n,onHome:e,quizId:t="genesis-covenants"})=>{const{t:s,language:r}=ht(),{quizzes:i}=Mt(),[a,l]=A.useState([]),[d,h]=A.useState(0),[p,m]=A.useState(null),[y,S]=A.useState(!1),[x,P]=A.useState([]);A.useEffect(()=>{const g=i.find(I=>I.id===t)||i[0];if(!g)return;const _=g[r]||g.en||[];l(IE(_)),P([]),h(0),m(null),S(!1)},[r,t,i]);const R=a[d],O=a.length>0?(d+1)/a.length*100:0,V=b=>{y||m(b)},z=()=>{if(p===null)return;const b=p===R.correctIndex,g=[...x];g[d]={questionId:R.id,selectedIndex:p,correctIndex:R.correctIndex,correct:b},P(g),S(!0)},F=()=>{d<a.length-1?(h(d+1),m(null),S(!1)):L()},L=()=>{const b=x.filter(I=>I==null?void 0:I.correct).length,g=a.length,_=Math.round(b/g*100);n({correct:b,total:g,percentage:_,answers:x,questions:a,quizType:"covenants"})};if(!R)return c.jsx("div",{className:"mc-quiz-container",children:c.jsx("div",{className:"mc-loading",children:"Loading..."})});const q=p===R.correctIndex;return c.jsxs("div",{className:"mc-quiz-container",children:[c.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[c.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",s("exit")]}),c.jsxs("header",{className:"mc-quiz-header",children:[c.jsx("h1",{className:"mc-quiz-title",children:s("multipleChoice.title")}),c.jsx("p",{className:"mc-quiz-instruction",children:s("multipleChoice.instruction")})]}),c.jsxs("div",{className:"mc-quiz-progress",children:[c.jsx(ec,{progress:O}),c.jsx("div",{className:"mc-progress-text",children:s("multipleChoice.question",{current:d+1,total:a.length})})]}),c.jsxs("div",{className:"mc-quiz-content",children:[c.jsxs("div",{className:"mc-question-card",children:[c.jsx("div",{className:"mc-question-text",children:R.question}),c.jsx("div",{className:"mc-options",children:R.options.map((b,g)=>{let _="mc-option";return y?g===R.correctIndex?_+=" correct":g===p&&!q&&(_+=" incorrect"):g===p&&(_+=" selected"),c.jsxs("button",{className:_,onClick:()=>V(g),disabled:y,children:[c.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+g)}),c.jsx("span",{className:"mc-option-text",children:b}),y&&g===R.correctIndex&&c.jsx("span",{className:"mc-option-icon correct",children:"✓"}),y&&g===p&&!q&&c.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},g)})}),y&&c.jsxs("div",{className:`mc-result ${q?"correct":"incorrect"}`,children:[c.jsx("div",{className:"mc-result-message",children:s(q?"multipleChoice.correct":"multipleChoice.incorrect")}),!q&&c.jsxs("div",{className:"mc-correct-answer",children:[s("multipleChoice.correctAnswerWas")," ",R.options[R.correctIndex]]}),c.jsxs("div",{className:"mc-reference",children:[s("multipleChoice.reference")," ",R.reference]})]})]}),c.jsx("div",{className:"mc-quiz-actions",children:y?c.jsx(ye,{onClick:F,variant:"primary",className:"mc-action-button",children:d<a.length-1?s("multipleChoice.next"):s("multipleChoice.finish")}):c.jsx(ye,{onClick:z,variant:"primary",disabled:p===null,className:"mc-action-button",children:s("completeQuiz.check")})})]}),c.jsx("div",{className:"mc-dots-overview",children:a.map((b,g)=>{const _=x[g];let I="pending";return _?I=_.correct?"correct":"incorrect":g===d&&(I="current"),c.jsx("div",{className:`mc-dot ${I}`},g)})})]})};function Wn(){const n=typeof window<"u"&&"speechSynthesis"in window,[e,t]=A.useState(null),s=A.useRef(null),r=A.useCallback((a,l,d="de-DE")=>{if(!n)return;window.speechSynthesis.cancel();const h=new SpeechSynthesisUtterance(a);h.lang=d,h.rate=.85,h.pitch=1,s.current=h,h.onstart=()=>t(l),h.onend=()=>t(null),h.onerror=()=>t(null),window.speechSynthesis.speak(h)},[n]),i=A.useCallback(()=>{n&&window.speechSynthesis.cancel(),t(null)},[n]);return A.useEffect(()=>()=>{n&&window.speechSynthesis.cancel()},[n]),{supported:n,speakingId:e,speak:r,stop:i}}const zr=6;function ls(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Uf(n){const e=n.match(/\(([^)]*[Ͱ-Ͽἀ-῿ְ-ת][^)]*)\)/),t=n.match(/'([a-zA-Z]+)'/);return{script:e?e[1]:"",transliteration:t?t[1]:""}}function ME(n,e){var i;const t=((i=n.options)==null?void 0:i[n.correctIndex])??"";let s;if(n.options&&n.options.length>=4)s=[...n.options];else{const a=e.filter(l=>l.id!==n.id).map(l=>{var d;return(d=l.options)==null?void 0:d[l.correctIndex]}).filter(Boolean);s=[t,...ls(a).slice(0,3)]}const r=ls(s);return{options:r,correctIndex:r.indexOf(t)}}const Ze={IDLE:"idle",ANSWERED:"answered",DONE:"done"},LE=({allCards:n,knownIds:e,setKnownIds:t,language:s,quizId:r,t:i,onStudyMode:a})=>{const{supported:l,speakingId:d,speak:h}=Wn(),[p,m]=A.useState(()=>ls(n)),[y,S]=A.useState(0),[x,P]=A.useState(Ze.IDLE),[R,O]=A.useState(null),[V,z]=A.useState(0),[F,L]=A.useState([]),[q,b]=A.useState(!1),g=p[y],{options:_,correctIndex:I}=A.useMemo(()=>g?ME(g,n):{options:[],correctIndex:0},[g,n]),{script:E,transliteration:T}=A.useMemo(()=>g?Uf(g.question||""):{script:"",transliteration:""},[g]),v=(g==null?void 0:g.word)||E,ae=(g==null?void 0:g.ipa)||T,me=`quiz-${r}-${g==null?void 0:g.id}`,H=d===me,se=A.useCallback(we=>{x===Ze.IDLE&&(O(we),P(Ze.ANSWERED),we===I?(z(Ie=>Ie+1),t(Ie=>Ie.includes(g.id)?Ie:[...Ie,g.id])):L(Ie=>Ie.includes(g.id)?Ie:[...Ie,g.id]))},[x,I,g,t]),M=A.useCallback(()=>{y+1>=p.length?P(Ze.DONE):(S(we=>we+1),O(null),P(Ze.IDLE))},[y,p.length]);A.useEffect(()=>{if(x===Ze.ANSWERED&&R===I){const we=setTimeout(M,900);return()=>clearTimeout(we)}},[x,R,I,M]);const $=A.useCallback(()=>{const we=n.filter(Ie=>F.includes(Ie.id));m(ls(we.length?we:n)),S(0),O(null),P(Ze.IDLE),z(0),L([]),b(we.length>0)},[n,F]),Z=A.useCallback(()=>{m(ls(n)),S(0),O(null),P(Ze.IDLE),z(0),L([]),b(!1)},[n]),J=p.length,re=Math.round(V/J*100),ke=y+1>=J;if(x===Ze.DONE){const we=re>=90?3:re>=65?2:1;return c.jsxs("div",{className:"fc-quiz-done",children:[c.jsx("div",{className:"fc-quiz-done-stars",children:"⭐".repeat(we)}),c.jsx("h2",{className:"fc-quiz-done-title",children:s==="es"?"¡Quiz terminado!":"Quiz complete!"}),c.jsxs("p",{className:"fc-quiz-done-score",children:[V," / ",J," — ",re,"%"]}),c.jsx("p",{className:"fc-quiz-done-known",children:s==="es"?`${e.length} palabras marcadas como aprendidas`:`${e.length} words marked as learned`}),c.jsxs("div",{className:"fc-quiz-done-actions",children:[F.length>0&&c.jsx("button",{className:"fc-quiz-done-btn primary",onClick:$,children:s==="es"?`🔁 Repetir errores (${F.length})`:`🔁 Retry wrong (${F.length})`}),c.jsx("button",{className:"fc-quiz-done-btn",onClick:Z,children:s==="es"?"🔀 Empezar de nuevo":"🔀 Start over"}),c.jsx("button",{className:"fc-quiz-done-btn",onClick:a,children:s==="es"?"📚 Volver a tarjetas":"📚 Back to cards"})]})]})}return c.jsxs("div",{className:"fc-quiz",children:[c.jsxs("div",{className:"fc-quiz-progress",children:[c.jsxs("span",{className:"fc-quiz-progress-text",children:[y+1," / ",J,q&&c.jsx("span",{className:"fc-quiz-wrong-badge",children:s==="es"?" · solo errores":" · wrong only"})]}),c.jsxs("span",{className:"fc-quiz-score-text",children:["✓ ",V]})]}),c.jsx("div",{className:"fc-quiz-progress-track",children:c.jsx("div",{className:"fc-quiz-progress-fill",style:{width:`${(y+1)/J*100}%`}})}),c.jsxs("div",{className:"fc-quiz-card",children:[c.jsx("div",{className:"fc-quiz-word",children:v}),ae&&c.jsx("div",{className:"fc-quiz-sub",children:ae}),(g==null?void 0:g.word)&&l&&c.jsx("button",{className:`fc-quiz-speak-btn ${H?"speaking":""}`,onClick:()=>h(g.word,me),"aria-label":`Pronounce ${g.word}`,children:H?"🔊":"🔈"}),c.jsx("p",{className:"fc-quiz-prompt",children:s==="es"?"¿Cuál es el significado?":"What does this mean?"})]}),c.jsx("div",{className:"fc-quiz-options",children:_.map((we,Ie)=>{let ge="fc-quiz-option";return x===Ze.ANSWERED&&(Ie===I?ge+=" correct":Ie===R&&(ge+=" wrong")),c.jsx("button",{className:ge,onClick:()=>se(Ie),disabled:x===Ze.ANSWERED,children:we},Ie)})}),x===Ze.ANSWERED&&R!==I&&c.jsx("button",{className:"fc-quiz-next-btn",onClick:M,children:ke?s==="es"?"Ver resultados →":"See results →":s==="es"?"Siguiente →":"Next →"})]})},qE=({cards:n,allCards:e,knownIds:t,setKnownIds:s,filter:r,onFilterChange:i,page:a,onPageChange:l,shuffleKey:d,onShuffle:h,quizId:p,language:m,t:y})=>{const[S,x]=A.useState(new Set),{supported:P,speakingId:R,speak:O}=Wn(),V=Math.ceil(n.length/zr),z=n.slice(a*zr,a*zr+zr),F=A.useCallback(_=>{l(_),x(new Set)},[l]),L=A.useCallback(_=>{x(I=>{const E=new Set(I);return E.has(_)?E.delete(_):E.add(_),E})},[]),q=z.length>0&&S.size===z.length,b=A.useCallback(()=>{x(q?new Set:new Set(z.map((_,I)=>I)))},[q,z]),g=A.useCallback((_,I)=>{I.stopPropagation(),s(E=>E.includes(_)?E:[...E,_])},[s]);return A.useEffect(()=>{x(new Set)},[a,d]),n.length===0?c.jsxs("p",{style:{color:"white",textAlign:"center",padding:"2rem 0"},children:[y("flashcards.all")," ",y("flashcards.learned"),"!"]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flashcards-filter",children:[c.jsx("button",{className:`flashcards-filter-btn ${r==="all"?"active":""}`,onClick:()=>i("all"),children:y("flashcards.all")}),c.jsx("button",{className:`flashcards-filter-btn ${r==="notLearned"?"active":""}`,onClick:()=>i("notLearned"),children:y("flashcards.notLearned")})]}),c.jsx("div",{className:"flashcards-grid",children:z.map((_,I)=>{var Z;const{script:E,transliteration:T}=Uf(_.question||""),v=((Z=_.options)==null?void 0:Z[_.correctIndex])??"",ae=S.has(I),me=t.includes(_.id),H=_.word||E,se=_.ipa||T,M=`${p}-${_.id}`,$=R===M;return c.jsx("div",{className:"flashcard-scene",onClick:()=>L(I),children:c.jsxs("div",{className:`flashcard ${ae?"is-flipped":""}`,children:[c.jsxs("div",{className:"flashcard-face flashcard-front",children:[me&&c.jsx("span",{className:"flashcard-known-badge",children:"✓"}),c.jsx("div",{className:"flashcard-greek",children:H}),c.jsx("div",{className:"flashcard-transliteration",children:se}),_.word&&P&&c.jsx("button",{className:`flashcard-speaker-btn ${$?"speaking":""}`,onClick:J=>{J.stopPropagation(),O(_.word,M)},"aria-label":`Pronounce ${_.word}`,children:$?"🔊":"🔈"})]}),c.jsxs("div",{className:"flashcard-face flashcard-back",children:[c.jsx("div",{className:"flashcard-meaning",children:v}),c.jsx("div",{className:"flashcard-reference",children:_.word?"":_.reference}),!me&&c.jsx("button",{className:"flashcard-know-btn",onClick:J=>g(_.id,J),children:y("flashcards.knowIt")})]})]})},`${a}-${I}`)})}),c.jsxs("div",{className:"flashcards-nav",children:[c.jsx("button",{className:"flashcard-nav-btn",onClick:()=>F(a-1),disabled:a===0,"aria-label":y("flashcards.previous"),children:"←"}),c.jsxs("span",{className:"flashcard-nav-indicator",children:[a+1," / ",V]}),c.jsx("button",{className:"flashcard-nav-btn",onClick:()=>F(a+1),disabled:a>=V-1,"aria-label":y("flashcards.next"),children:"→"})]}),c.jsxs("div",{className:"flashcards-actions",children:[c.jsx("button",{className:"flashcard-action-btn",onClick:b,children:y(q?"flashcards.hideAll":"flashcards.showAll")}),c.jsx("button",{className:"flashcard-action-btn",onClick:h,children:y("flashcards.shuffle")}),t.length>0&&c.jsx("button",{className:"flashcard-action-btn",onClick:()=>s([]),children:y("flashcards.resetProgress")})]})]})},Bf=({quizId:n="greek-vocabulary",onHome:e})=>{const{quizzes:t}=Mt(),{t:s,language:r}=ht(),[i,a]=A.useState("study"),[l,d]=A.useState(0),[h,p]=A.useState(0),[m,y]=Za(`itiapp-flashcard-progress-${n}`,[]),[S,x]=A.useState("all"),P=A.useMemo(()=>t.find(q=>q.id===n),[t,n]),R=A.useMemo(()=>{var q,b;return((q=P==null?void 0:P.title)==null?void 0:q[r])||((b=P==null?void 0:P.title)==null?void 0:b.en)||s("flashcards.title")},[P,r,s]),O=A.useMemo(()=>{if(!P)return[];const q=P[r]||P.en||[];return ls(q)},[P,r,h]),V=A.useMemo(()=>S==="notLearned"?O.filter(q=>!m.includes(q.id)):O,[O,S,m]),z=A.useCallback(q=>{x(q),d(0)},[]),F=A.useCallback(()=>{p(q=>q+1),d(0)},[]),L=A.useCallback(q=>{a(q),d(0)},[]);return O.length?c.jsx("div",{className:"flashcards-container",children:c.jsxs("div",{className:"flashcards-content",children:[c.jsxs("div",{className:"flashcards-header",children:[c.jsx("button",{className:"flashcard-back-btn",onClick:e,"aria-label":s("flashcards.backToHome"),children:"←"}),c.jsx("h1",{className:"flashcards-title",children:R})]}),c.jsxs("div",{className:"flashcards-progress-bar",children:[c.jsxs("div",{className:"flashcards-progress-text",children:[m.length," / ",O.length," ",s("flashcards.learned")]}),c.jsx("div",{className:"flashcards-progress-track",children:c.jsx("div",{className:"flashcards-progress-fill",style:{width:`${m.length/O.length*100}%`}})})]}),c.jsxs("div",{className:"fc-mode-tabs",children:[c.jsxs("button",{className:`fc-mode-tab ${i==="study"?"active":""}`,onClick:()=>L("study"),children:["📚 ",r==="es"?"Tarjetas":"Study"]}),c.jsxs("button",{className:`fc-mode-tab ${i==="quiz"?"active":""}`,onClick:()=>L("quiz"),children:["🧠 ","Quiz"]})]}),i==="study"?c.jsx(qE,{cards:V,allCards:O,knownIds:m,setKnownIds:y,filter:S,onFilterChange:z,page:l,onPageChange:d,shuffleKey:h,onShuffle:F,quizId:n,language:r,t:s}):c.jsx(LE,{allCards:O,knownIds:m,setKnownIds:y,language:r,quizId:n,t:s,onStudyMode:()=>L("study")},h),c.jsx("div",{className:"flashcards-actions",style:{marginTop:"var(--spacing-md)"},children:c.jsx("button",{className:"flashcard-action-btn",onClick:e,children:s("flashcards.backToHome")})})]})}):c.jsx("div",{className:"flashcards-container",children:c.jsxs("div",{className:"flashcards-content",children:[c.jsxs("div",{className:"flashcards-header",children:[c.jsx("button",{className:"flashcard-back-btn",onClick:e,"aria-label":s("flashcards.backToHome"),children:"←"}),c.jsx("h1",{className:"flashcards-title",children:R})]}),c.jsx("p",{style:{color:"white",textAlign:"center"},children:"No cards available."})]})})},zE=({score:n,onRetry:e,onHome:t})=>{const{updateStats:s}=zf(),{t:r,translateBook:i,getScoreMessage:a}=ht(),{books:l}=Mt();if(A.useEffect(()=>{n&&s(n)},[n,s]),!n)return c.jsxs("div",{className:"results-container",children:[c.jsx("p",{children:r("results.noResults")}),c.jsx(ye,{onClick:t,children:r("results.goHome")})]});const{correct:d,total:h,percentage:p,selections:m,answers:y,questions:S,quizType:x}=n,P=a(p),R=kE(p),O=x==="complete",V=x==="covenants";return c.jsx("div",{className:"results-container",children:c.jsxs("div",{className:"results-content",children:[c.jsx("header",{className:"results-header",children:c.jsx("h1",{className:"results-title",children:r("results.title")})}),c.jsxs(hr,{className:"score-card",children:[c.jsxs("div",{className:"score-display",style:{borderColor:R},children:[c.jsxs("div",{className:"score-percentage",style:{color:R},children:[p,"%"]}),c.jsx("div",{className:"score-message",style:{color:R},children:P}),c.jsx("div",{className:"score-details",children:r("results.outOf",{correct:d,total:h})})]}),c.jsxs("div",{className:"score-breakdown",children:[c.jsxs("div",{className:"breakdown-item correct",children:[c.jsx("span",{className:"breakdown-icon",children:"✓"}),c.jsxs("span",{className:"breakdown-text",children:[d," ",r("results.correct")]})]}),c.jsxs("div",{className:"breakdown-item incorrect",children:[c.jsx("span",{className:"breakdown-icon",children:"✗"}),c.jsxs("span",{className:"breakdown-text",children:[h-d," ",r("results.incorrect")]})]})]})]}),c.jsxs(hr,{className:"details-card",children:[c.jsx("h2",{className:"details-title",children:r("results.yourAnswers")}),c.jsx("div",{className:"answers-list",children:V?y==null?void 0:y.map((z,F)=>{var _,I;const L=S==null?void 0:S[F],q=z==null?void 0:z.correct,b=((_=L==null?void 0:L.options)==null?void 0:_[z==null?void 0:z.selectedIndex])||r("multipleChoice.skipped"),g=(I=L==null?void 0:L.options)==null?void 0:I[L==null?void 0:L.correctIndex];return c.jsxs("div",{className:`answer-item ${q?"correct":"incorrect"}`,children:[c.jsx("div",{className:"answer-position",children:F+1}),c.jsxs("div",{className:"answer-content",children:[c.jsx("div",{className:"answer-question",children:L==null?void 0:L.question}),c.jsxs("div",{className:"answer-your-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),c.jsx("span",{className:"answer-book",children:b})]}),!q&&c.jsxs("div",{className:"answer-correct-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),c.jsx("span",{className:"answer-book",children:g})]}),c.jsx("div",{className:"answer-reference",children:L==null?void 0:L.reference})]}),c.jsx("div",{className:"answer-status",children:q?c.jsx("span",{className:"status-icon correct",children:"✓"}):c.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},F)}):O?y==null?void 0:y.map((z,F)=>{const L=l[F],q=z==null?void 0:z.correct,b=(z==null?void 0:z.input)||"-";return c.jsxs("div",{className:`answer-item ${q?"correct":"incorrect"}`,children:[c.jsx("div",{className:"answer-position",children:F+1}),c.jsxs("div",{className:"answer-content",children:[c.jsxs("div",{className:"answer-your-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),c.jsx("span",{className:"answer-book",children:b})]}),!q&&c.jsxs("div",{className:"answer-correct-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),c.jsx("span",{className:"answer-book",children:i(L)})]})]}),c.jsx("div",{className:"answer-status",children:q?c.jsx("span",{className:"status-icon correct",children:"✓"}):c.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},F)}):m==null?void 0:m.map((z,F)=>{const L=l[F],q=z===L;return c.jsxs("div",{className:`answer-item ${q?"correct":"incorrect"}`,children:[c.jsx("div",{className:"answer-position",children:F+1}),c.jsxs("div",{className:"answer-content",children:[c.jsxs("div",{className:"answer-your-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),c.jsx("span",{className:"answer-book",children:i(z)})]}),!q&&c.jsxs("div",{className:"answer-correct-choice",children:[c.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),c.jsx("span",{className:"answer-book",children:i(L)})]})]}),c.jsx("div",{className:"answer-status",children:q?c.jsx("span",{className:"status-icon correct",children:"✓"}):c.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},F)})})]}),c.jsxs("div",{className:"results-actions",children:[c.jsx(ye,{onClick:t,variant:"secondary",size:"large",children:r("results.home")}),c.jsx(ye,{onClick:e,variant:"primary",size:"large",children:r("results.tryAgain")})]})]})})};async function FE(){const n={books:!1,quizzes:!1,translations:!1};try{await Vf(Mf),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await Of("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:bi.en,es:bi.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await Ii("en",dr.en),await Ii("es",dr.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const UE=({onBack:n})=>{var pt,xt,Ss;const{books:e,quizzes:t,translations:s,refreshData:r}=Mt(),{user:i,loading:a,signInWithEmail:l,signInWithGoogle:d,signOut:h}=mE(),[p,m]=A.useState(""),[y,S]=A.useState(""),[x,P]=A.useState(""),[R,O]=A.useState("books"),[V,z]=A.useState(""),[F,L]=A.useState(!1),[q,b]=A.useState([]),[g,_]=A.useState(""),[I,E]=A.useState(null),[T,v]=A.useState(null),[ae,me]=A.useState(!1),[H,se]=A.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[M,$]=A.useState("en"),[Z,J]=A.useState({}),[re,ke]=A.useState("");A.useEffect(()=>{b([...e])},[e]),A.useEffect(()=>{s[M]&&J(JSON.parse(JSON.stringify(s[M])))},[M,s]);const we=async N=>{N.preventDefault(),P("");try{await l(p,y)}catch(Q){P(Q.code==="auth/invalid-credential"?"Invalid email or password":Q.message)}},Ie=async()=>{P("");try{await d()}catch(N){N.code!=="auth/popup-closed-by-user"&&P(N.message)}},ge=N=>{z(N),setTimeout(()=>z(""),3e3)},Lt=async()=>{L(!0);try{await Vf(q),await r(),ge("Books saved successfully!")}catch(N){ge("Error saving books: "+N.message)}L(!1)},qt=()=>{g.trim()&&!q.includes(g.trim())&&(b([...q,g.trim()]),_(""))},zt=N=>{b(q.filter((Q,ne)=>ne!==N))},Gn=(N,Q)=>{const ne=[...q],_e=N+Q;_e<0||_e>=ne.length||([ne[N],ne[_e]]=[ne[_e],ne[N]],b(ne))},Ts=N=>{const Q=t.find(ne=>ne.id===N);Q&&(E(N),v(JSON.parse(JSON.stringify(Q))))},Ft=async()=>{if(!(!T||!I)){L(!0);try{const{id:N,...Q}=T;await Of(I,Q),await r(),ge("Quiz saved successfully!")}catch(N){ge("Error saving quiz: "+N.message)}L(!1)}},gn=async()=>{if(H.id.trim()){L(!0);try{const N={title:{en:H.titleEn,es:H.titleEs},description:{en:H.descEn,es:H.descEs},icon:H.icon||"📝",category:H.category,en:[],es:[]};await _E(H.id.trim(),N),await r(),me(!1),se({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),ge("Quiz created successfully!")}catch(N){ge("Error creating quiz: "+N.message)}L(!1)}},Hn=async N=>{if(window.confirm(`Delete quiz "${N}"?`)){L(!0);try{await vE(N),await r(),I===N&&(E(null),v(null)),ge("Quiz deleted!")}catch(Q){ge("Error deleting quiz: "+Q.message)}L(!1)}},$n=N=>{var ne;if(!T)return;const Q={id:(((ne=T[N])==null?void 0:ne.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};v({...T,[N]:[...T[N]||[],Q]})},ft=(N,Q,ne,_e)=>{const de={...T};de[N]=[...de[N]],de[N][Q]={...de[N][Q],[ne]:_e},v(de)},yn=(N,Q,ne,_e)=>{const de={...T};de[N]=[...de[N]];const Se={...de[N][Q]};Se.options=[...Se.options],Se.options[ne]=_e,de[N][Q]=Se,v(de)},W=(N,Q)=>{const ne={...T};ne[N]=ne[N].filter((_e,de)=>de!==Q),v(ne)},he=(N,Q="")=>{const ne={};for(const _e of Object.keys(N)){const de=Q?`${Q}.${_e}`:_e;typeof N[_e]=="object"&&N[_e]!==null&&!Array.isArray(N[_e])?Object.assign(ne,he(N[_e],de)):ne[de]=N[_e]}return ne},ie=N=>{const Q={};for(const[ne,_e]of Object.entries(N)){const de=ne.split(".");let Se=Q;for(let He=0;He<de.length-1;He++)de[He]in Se||(Se[de[He]]={}),Se=Se[de[He]];Se[de[de.length-1]]=_e}return Q},it=async()=>{L(!0);try{await Ii(M,Z),await r(),ge(`Translations (${M}) saved!`)}catch(N){ge("Error saving translations: "+N.message)}L(!1)},wn=(N,Q)=>{const ne=he(Z);ne[N]=Q,J(ie(ne))},Qn=async()=>{if(!(!re.trim()||s[re.trim()])){L(!0);try{const N=JSON.parse(JSON.stringify(s.en||{}));await Ii(re.trim(),N),await r(),$(re.trim()),ke(""),ge(`Language "${re.trim()}" added!`)}catch(N){ge("Error adding language: "+N.message)}L(!1)}},As=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){L(!0);try{const N=await FE();await r(),ge(`Seed complete - Books: ${N.books?"OK":"FAIL"}, Quizzes: ${N.quizzes?"OK":"FAIL"}, Translations: ${N.translations?"OK":"FAIL"}`)}catch(N){ge("Seed error: "+N.message)}L(!1)}};return a?c.jsx("div",{className:"admin-container",children:c.jsx("div",{className:"admin-login",children:c.jsx("p",{children:"Loading..."})})}):i?c.jsxs("div",{className:"admin-container",children:[c.jsxs("header",{className:"admin-header",children:[c.jsx("h1",{children:"Admin Panel"}),c.jsxs("div",{className:"admin-header-actions",children:[c.jsx("span",{className:"admin-user-info",children:i.email}),c.jsx(ye,{onClick:As,variant:"secondary",disabled:F,children:"Seed Data"}),c.jsx(ye,{onClick:()=>h(),variant:"secondary",children:"Sign Out"}),c.jsx(ye,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),V&&c.jsx("div",{className:"admin-status-bar",children:V}),c.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(N=>c.jsx("button",{className:`admin-tab ${R===N?"active":""}`,onClick:()=>O(N),children:N.charAt(0).toUpperCase()+N.slice(1)},N))}),c.jsxs("div",{className:"admin-content",children:[R==="books"&&c.jsxs("div",{className:"admin-section",children:[c.jsxs("h2",{children:["Old Testament Books (",q.length,")"]}),c.jsx("div",{className:"admin-books-list",children:q.map((N,Q)=>c.jsxs("div",{className:"admin-book-item",children:[c.jsx("span",{className:"admin-book-number",children:Q+1}),c.jsx("span",{className:"admin-book-name",children:N}),c.jsxs("div",{className:"admin-book-actions",children:[c.jsx("button",{onClick:()=>Gn(Q,-1),disabled:Q===0,children:"↑"}),c.jsx("button",{onClick:()=>Gn(Q,1),disabled:Q===q.length-1,children:"↓"}),c.jsx("button",{onClick:()=>zt(Q),className:"admin-delete-btn",children:"✕"})]})]},Q))}),c.jsxs("div",{className:"admin-add-row",children:[c.jsx("input",{type:"text",value:g,onChange:N=>_(N.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:N=>N.key==="Enter"&&qt()}),c.jsx(ye,{onClick:qt,variant:"secondary",children:"Add"})]}),c.jsx(ye,{onClick:Lt,variant:"primary",disabled:F,children:F?"Saving...":"Save Books"})]}),R==="quizzes"&&c.jsxs("div",{className:"admin-section",children:[c.jsx("h2",{children:"Quizzes"}),c.jsx("div",{className:"admin-quiz-list",children:t.map(N=>{var Q,ne;return c.jsxs("div",{className:"admin-quiz-item",children:[c.jsxs("button",{className:`admin-quiz-select ${I===N.id?"active":""}`,onClick:()=>Ts(N.id),children:[c.jsx("span",{children:N.icon||"📝"}),c.jsx("span",{children:((Q=N.title)==null?void 0:Q.en)||N.id}),c.jsxs("span",{className:"admin-quiz-count",children:[((ne=N.en)==null?void 0:ne.length)||0," Q"]})]}),c.jsx("button",{className:"admin-delete-btn",onClick:()=>Hn(N.id),children:"✕"})]},N.id)})}),c.jsx(ye,{onClick:()=>me(!ae),variant:"secondary",children:ae?"Cancel":"+ New Quiz"}),ae&&c.jsxs("div",{className:"admin-new-quiz-form",children:[c.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:H.id,onChange:N=>se({...H,id:N.target.value})}),c.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:H.titleEn,onChange:N=>se({...H,titleEn:N.target.value})}),c.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:H.titleEs,onChange:N=>se({...H,titleEs:N.target.value})}),c.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:H.descEn,onChange:N=>se({...H,descEn:N.target.value})}),c.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:H.descEs,onChange:N=>se({...H,descEs:N.target.value})}),c.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:H.icon,onChange:N=>se({...H,icon:N.target.value})}),c.jsx(ye,{onClick:gn,variant:"primary",disabled:F,children:"Create Quiz"})]}),T&&I&&c.jsxs("div",{className:"admin-quiz-editor",children:[c.jsxs("h3",{children:["Editing: ",((pt=T.title)==null?void 0:pt.en)||I]}),c.jsxs("div",{className:"admin-quiz-meta",children:[c.jsxs("label",{children:["Title (EN):",c.jsx("input",{className:"admin-input",value:((xt=T.title)==null?void 0:xt.en)||"",onChange:N=>v({...T,title:{...T.title,en:N.target.value}})})]}),c.jsxs("label",{children:["Title (ES):",c.jsx("input",{className:"admin-input",value:((Ss=T.title)==null?void 0:Ss.es)||"",onChange:N=>v({...T,title:{...T.title,es:N.target.value}})})]}),c.jsxs("label",{children:["Icon:",c.jsx("input",{className:"admin-input",value:T.icon||"",onChange:N=>v({...T,icon:N.target.value})})]})]}),["en","es"].map(N=>{var Q,ne;return c.jsxs("div",{className:"admin-questions-section",children:[c.jsxs("h4",{children:["Questions (",N.toUpperCase(),") - ",((Q=T[N])==null?void 0:Q.length)||0]}),(ne=T[N])==null?void 0:ne.map((_e,de)=>c.jsxs("div",{className:"admin-question-card",children:[c.jsxs("div",{className:"admin-question-header",children:[c.jsxs("span",{children:["Q",de+1]}),c.jsx("button",{className:"admin-delete-btn",onClick:()=>W(N,de),children:"✕"})]}),c.jsx("textarea",{className:"admin-textarea",value:_e.question,onChange:Se=>ft(N,de,"question",Se.target.value),placeholder:"Question text"}),_e.options.map((Se,He)=>c.jsxs("div",{className:"admin-option-row",children:[c.jsx("input",{type:"radio",name:`correct-${N}-${de}`,checked:_e.correctIndex===He,onChange:()=>ft(N,de,"correctIndex",He)}),c.jsx("input",{className:"admin-input",value:Se,onChange:xs=>yn(N,de,He,xs.target.value),placeholder:`Option ${String.fromCharCode(65+He)}`})]},He)),c.jsx("input",{className:"admin-input",value:_e.reference||"",onChange:Se=>ft(N,de,"reference",Se.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},de)),c.jsxs(ye,{onClick:()=>$n(N),variant:"secondary",children:["+ Add Question (",N.toUpperCase(),")"]})]},N)}),c.jsx(ye,{onClick:Ft,variant:"primary",disabled:F,children:F?"Saving...":"Save Quiz"})]})]}),R==="translations"&&c.jsxs("div",{className:"admin-section",children:[c.jsx("h2",{children:"Translations"}),c.jsx("div",{className:"admin-lang-selector",children:Object.keys(s).map(N=>c.jsx("button",{className:`admin-tab ${M===N?"active":""}`,onClick:()=>$(N),children:N.toUpperCase()},N))}),c.jsxs("div",{className:"admin-add-lang",children:[c.jsx("input",{className:"admin-input",value:re,onChange:N=>ke(N.target.value),placeholder:"New language code (e.g., fr)"}),c.jsx(ye,{onClick:Qn,variant:"secondary",disabled:F,children:"Add Language"})]}),c.jsx("div",{className:"admin-translations-editor",children:Object.entries(he(Z)).map(([N,Q])=>c.jsxs("div",{className:"admin-translation-row",children:[c.jsx("label",{className:"admin-translation-key",children:N}),typeof Q=="string"&&Q.length>60?c.jsx("textarea",{className:"admin-textarea",value:Q,onChange:ne=>wn(N,ne.target.value)}):c.jsx("input",{className:"admin-input",value:typeof Q=="string"?Q:JSON.stringify(Q),onChange:ne=>wn(N,ne.target.value)})]},N))}),c.jsx(ye,{onClick:it,variant:"primary",disabled:F,children:F?"Saving...":`Save Translations (${M.toUpperCase()})`})]})]})]}):c.jsx("div",{className:"admin-container",children:c.jsxs("div",{className:"admin-login",children:[c.jsx("h2",{children:"Admin Access"}),c.jsxs("form",{onSubmit:we,children:[c.jsx("input",{type:"email",value:p,onChange:N=>m(N.target.value),placeholder:"Email",className:"admin-input",autoFocus:!0}),c.jsx("input",{type:"password",value:y,onChange:N=>S(N.target.value),placeholder:"Password",className:"admin-input"}),c.jsx(ye,{type:"submit",variant:"primary",children:"Sign In"})]}),c.jsx("div",{className:"admin-divider",children:c.jsx("span",{children:"or"})}),c.jsxs("button",{className:"admin-google-btn",onClick:Ie,children:[c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[c.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),c.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),c.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),c.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),x&&c.jsx("p",{className:"admin-status error",children:x}),c.jsx(ye,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})};function BE(){const n=Zo(),[e,t]=A.useState("home"),[s,r]=A.useState(null),[i,a]=A.useState("order"),[l,d]=A.useState("genesis-covenants"),h=()=>{a("order"),t("quiz"),r(null)},p=()=>{a("complete"),t("completeQuiz"),r(null)},m=()=>{a("covenants"),d("genesis-covenants"),t("covenantsQuiz"),r(null)},y=V=>{a("covenants"),d(V),t("covenantsQuiz"),r(null)},S=V=>{r({...V,quizType:V.quizType||i}),t("results")},x=()=>{t("home"),r(null)},P=V=>{if(V==="russian-vocabulary"){n("/russian/flashcards");return}d(V),t("flashcards")},R=()=>{t("admin")},O=()=>{i==="complete"?p():i==="covenants"?y(l):h()};return c.jsxs(NE,{children:[e==="home"&&c.jsx(xE,{onStartOrder:h,onStartComplete:p,onStartCovenants:m,onStartQuiz:y,onStartFlashCards:P,onNavigateAdmin:R,onRussianGrammar:()=>n("/russian/grammar"),onKletka:()=>n("/russian/kletka"),onToska:()=>n("/russian/toska"),onVolny:()=>n("/russian/volny"),onRussianSection:()=>n("/russian")}),e==="quiz"&&c.jsx(DE,{onComplete:S,onHome:x}),e==="completeQuiz"&&c.jsx(VE,{onComplete:S,onHome:x}),e==="covenantsQuiz"&&c.jsx(OE,{onComplete:S,onHome:x,quizId:l}),e==="results"&&c.jsx(zE,{score:s,onRetry:O,onHome:x}),e==="flashcards"&&c.jsx(Bf,{quizId:l,onHome:x}),e==="admin"&&c.jsx(UE,{onBack:x})]})}const Bs=[{id:"nominative",name:{en:"Nominative",es:"Nominativo",ru:"Именительный падеж"},question:{en:"Who? What?",es:"¿Quién? ¿Qué?"},usage:{en:"Used for the subject of the sentence — the person or thing performing the action.",es:"Se usa para el sujeto de la oración — la persona o cosa que realiza la acción."},endings:{en:"Masculine: –, -й, -ь | Feminine: -а, -я, -ь | Neuter: -о, -е",es:"Masculino: –, -й, -ь | Femenino: -а, -я, -ь | Neutro: -о, -е"},color:"#4a90d9",emoji:"👤",examples:[{ru:"Студент читает книгу.",transliteration:"Studyent chitayet knigu.",en:"The student reads a book.",es:"El estudiante lee un libro.",highlight:"Студент",note:{en:'"Студент" (student) is the subject.',es:'"Студент" (estudiante) es el sujeto.'}},{ru:"Кошка спит.",transliteration:"Koshka spit.",en:"The cat is sleeping.",es:"El gato está durmiendo.",highlight:"Кошка",note:{en:'"Кошка" (cat) is the subject.',es:'"Кошка" (gato) es el sujeto.'}},{ru:"Россия — большая страна.",transliteration:"Rossiya — bolshaya strana.",en:"Russia is a big country.",es:"Rusia es un país grande.",highlight:"Россия",note:{en:'"Россия" (Russia) is the subject.',es:'"Россия" (Rusia) es el sujeto.'}}]},{id:"genitive",name:{en:"Genitive",es:"Genitivo",ru:"Родительный падеж"},question:{en:"Whose? Of whom? Of what?",es:"¿De quién? ¿De qué?"},usage:{en:'Expresses possession, origin, absence, or quantity. Used after negation and prepositions like "у", "из", "от", "без", "до", "после".',es:'Expresa posesión, origen, ausencia o cantidad. Se usa tras negación y preposiciones como "у", "из", "от", "без", "до", "después".'},endings:{en:"Masculine: -а, -я | Feminine: -ы, -и | Neuter: -а, -я | Plural: -ов, -ей, –",es:"Masculino: -а, -я | Femenino: -ы, -и | Neutro: -а, -я | Plural: -ов, -ей, –"},color:"#e84c3d",emoji:"🔑",examples:[{ru:"Это книга студента.",transliteration:"Eto kniga studyenta.",en:"This is the student's book.",es:"Este es el libro del estudiante.",highlight:"студента",note:{en:'"студента" (of the student) shows possession.',es:'"студента" (del estudiante) indica posesión.'}},{ru:"У меня нет времени.",transliteration:"U menya nyet vryemeni.",en:"I don't have time.",es:"No tengo tiempo.",highlight:"времени",note:{en:'"времени" (of time) used after negation "нет".',es:'"времени" (de tiempo) se usa tras "нет" (no hay).'}},{ru:"Стакан воды, пожалуйста.",transliteration:"Stakan vody, pozhaluysta.",en:"A glass of water, please.",es:"Un vaso de agua, por favor.",highlight:"воды",note:{en:'"воды" (of water) expresses quantity/partitive.',es:'"воды" (de agua) expresa cantidad.'}}]},{id:"dative",name:{en:"Dative",es:"Dativo",ru:"Дательный падеж"},question:{en:"To whom? For whom?",es:"¿A quién? ¿Para quién?"},usage:{en:'Used for the indirect object — the recipient of an action. Also used with prepositions "к", "по" and to express age.',es:'Se usa para el objeto indirecto — el destinatario de una acción. También con preposiciones "к", "по" y para expresar la edad.'},endings:{en:"Masculine: -у, -ю | Feminine: -е, -и | Neuter: -у, -ю | Plural: -ам, -ям",es:"Masculino: -у, -ю | Femenino: -е, -и | Neutro: -у, -ю | Plural: -ам, -ям"},color:"#27ae60",emoji:"🎁",examples:[{ru:"Я дал книгу другу.",transliteration:"Ya dal knigu drugu.",en:"I gave the book to a friend.",es:"Le di el libro a un amigo.",highlight:"другу",note:{en:'"другу" (to a friend) is the recipient of the action.',es:'"другу" (a un amigo) es el destinatario.'}},{ru:"Мне двадцать лет.",transliteration:"Mnye dvadtsat let.",en:"I am twenty years old.",es:"Tengo veinte años.",highlight:"Мне",note:{en:'"Мне" (to me / dative of я) used to express age.',es:'"Мне" (dativo de я) se usa para expresar la edad.'}},{ru:"Позвони маме.",transliteration:"Pozvoni mame.",en:"Call mom.",es:"Llama a mamá.",highlight:"маме",note:{en:'"маме" (to mom) is the indirect object.',es:'"маме" (a mamá) es el objeto indirecto.'}}]},{id:"accusative",name:{en:"Accusative",es:"Acusativo",ru:"Винительный падеж"},question:{en:"Whom? What? (direct object)",es:"¿A quién? ¿Qué? (objeto directo)"},usage:{en:'Used for the direct object of a transitive verb — the person or thing directly receiving the action. Also with prepositions "в", "на" for direction and "через", "за".',es:'Se usa para el objeto directo de un verbo transitivo. También con preposiciones "в", "на" para dirección y "через", "за".'},endings:{en:"Masculine animate: -а, -я | Masculine inanimate: same as nominative | Feminine: -у, -ю | Neuter: same as nominative",es:"Masculino animado: -а, -я | Masculino inanimado: igual al nominativo | Femenino: -у, -ю | Neutro: igual al nominativo"},color:"#f39c12",emoji:"🎯",examples:[{ru:"Я вижу собаку.",transliteration:"Ya vizhu sobaku.",en:"I see a dog.",es:"Veo un perro.",highlight:"собаку",note:{en:'"собаку" (dog, accusative) is the direct object.',es:'"собаку" (perro, acusativo) es el objeto directo.'}},{ru:"Он читает газету.",transliteration:"On chitayet gazetu.",en:"He reads a newspaper.",es:"Él lee un periódico.",highlight:"газету",note:{en:'"газету" (newspaper) is the direct object of "читает".',es:'"газету" (periódico) es el objeto directo de "lee".'}},{ru:"Мы идём в школу.",transliteration:"My idyom v shkolu.",en:"We are going to school.",es:"Vamos a la escuela.",highlight:"школу",note:{en:'"в школу" (to school) shows direction.',es:'"в школу" (a la escuela) indica dirección.'}}]},{id:"instrumental",name:{en:"Instrumental",es:"Instrumental",ru:"Творительный падеж"},question:{en:"With whom? With what? By what means?",es:"¿Con quién? ¿Con qué? ¿Por qué medio?"},usage:{en:'Indicates the instrument or means by which an action is performed. Used with prepositions "с" (with), "за", "под", "над", "перед", "между". Also used for professions after "быть".',es:'Indica el instrumento o medio con que se realiza una acción. Se usa con "с" (con), "за", "под", "над", "перед", "между". También para profesiones tras "быть".'},endings:{en:"Masculine/Neuter: -ом, -ем | Feminine: -ой, -ей | Plural: -ами, -ями",es:"Masculino/Neutro: -ом, -ем | Femenino: -ой, -ей | Plural: -ами, -ями"},color:"#8e44ad",emoji:"🔧",examples:[{ru:"Я пишу ручкой.",transliteration:"Ya pishu ruchkoy.",en:"I write with a pen.",es:"Escribo con un bolígrafo.",highlight:"ручкой",note:{en:'"ручкой" (with a pen) — the instrument used.',es:'"ручкой" (con un bolígrafo) — el instrumento usado.'}},{ru:"Он стал врачом.",transliteration:"On stal vrachom.",en:"He became a doctor.",es:"Él se convirtió en médico.",highlight:"врачом",note:{en:'"врачом" (a doctor) — profession after "стал" (became).',es:'"врачом" (médico) — profesión tras "стал" (se convirtió).'}},{ru:"Я иду с другом.",transliteration:"Ya idu s drugom.",en:"I am going with a friend.",es:"Voy con un amigo.",highlight:"другом",note:{en:'"с другом" (with a friend) — accompaniment.',es:'"с другом" (con un amigo) — compañía.'}}]},{id:"prepositional",name:{en:"Prepositional",es:"Preposicional",ru:"Предложный падеж"},question:{en:"About whom? About what? Where?",es:"¿Acerca de quién? ¿De qué? ¿Dónde?"},usage:{en:'Always used with a preposition — most commonly "в" (in), "на" (on/at), "о/об" (about), "при" (under/during). Used for location and topics of thought or speech.',es:'Siempre se usa con preposición — principalmente "в" (en), "на" (en/sobre), "о/об" (sobre/acerca de), "при". Para ubicación y temas de pensamiento o conversación.'},endings:{en:"Masculine: -е, -и | Feminine: -е, -и | Neuter: -е, -и | Plural: -ах, -ях",es:"Masculino: -е, -и | Femenino: -е, -и | Neutro: -е, -и | Plural: -ах, -ях"},color:"#16a085",emoji:"📍",examples:[{ru:"Я живу в Москве.",transliteration:"Ya zhivu v Moskve.",en:"I live in Moscow.",es:"Vivo en Moscú.",highlight:"Москве",note:{en:'"в Москве" (in Moscow) — location.',es:'"в Москве" (en Moscú) — ubicación.'}},{ru:"Мы говорим о погоде.",transliteration:"My govorim o pogode.",en:"We are talking about the weather.",es:"Hablamos del tiempo.",highlight:"погоде",note:{en:'"о погоде" (about the weather) — topic.',es:'"о погоде" (sobre el tiempo) — tema.'}},{ru:"Книга на столе.",transliteration:"Kniga na stole.",en:"The book is on the table.",es:"El libro está sobre la mesa.",highlight:"столе",note:{en:'"на столе" (on the table) — location.',es:'"на столе" (sobre la mesa) — ubicación.'}}]}];function WE(n,e,t){const s=n.indexOf(e);return s===-1?c.jsx("span",{children:n}):c.jsxs(c.Fragment,{children:[n.slice(0,s),c.jsx("span",{className:"grammar-example-highlight",style:{color:t,borderColor:t},children:e}),n.slice(s+e.length)]})}const GE=({onHome:n})=>{const{language:e}=ht(),[t,s]=A.useState(0),r=Bs[t],i=A.useCallback(()=>s(l=>Math.min(l+1,Bs.length-1)),[]),a=A.useCallback(()=>s(l=>Math.max(l-1,0)),[]);return c.jsx("div",{className:"grammar-container",children:c.jsxs("div",{className:"grammar-content",children:[c.jsxs("div",{className:"grammar-header",children:[c.jsx("button",{className:"grammar-back-btn",onClick:n,children:"←"}),c.jsx("h1",{className:"grammar-title",children:e==="es"?"Casos Gramaticales":"Grammar Cases"})]}),c.jsx("div",{className:"grammar-intro",children:e==="es"?"El ruso tiene 6 casos gramaticales. Cada caso cambia la terminación de los sustantivos, pronombres y adjetivos según su función en la oración.":"Russian has 6 grammatical cases. Each case changes the ending of nouns, pronouns, and adjectives according to their role in the sentence."}),c.jsx("div",{className:"grammar-tabs",children:Bs.map((l,d)=>c.jsx("button",{className:`grammar-tab ${d===t?"active":""}`,style:d===t?{borderColor:l.color,color:l.color}:{},onClick:()=>s(d),children:l.name[e]||l.name.en},l.id))}),c.jsxs("div",{className:"grammar-case-card",style:{background:`linear-gradient(135deg, ${r.color}22, ${r.color}11)`},children:[c.jsxs("div",{className:"grammar-case-header",style:{background:`linear-gradient(135deg, ${r.color}cc, ${r.color}99)`},children:[c.jsx("span",{className:"grammar-case-emoji",children:r.emoji}),c.jsxs("div",{className:"grammar-case-title-group",children:[c.jsx("div",{className:"grammar-case-name",children:r.name[e]||r.name.en}),c.jsx("div",{className:"grammar-case-name-ru",children:r.name.ru}),c.jsx("div",{className:"grammar-case-question",children:r.question[e]||r.question.en})]})]}),c.jsxs("div",{className:"grammar-case-body",children:[c.jsxs("div",{className:"grammar-usage-block",children:[c.jsx("div",{className:"grammar-usage-label",children:e==="es"?"Uso":"Usage"}),c.jsx("div",{className:"grammar-usage-text",children:r.usage[e]||r.usage.en})]}),c.jsxs("div",{className:"grammar-endings-block",children:[c.jsx("div",{className:"grammar-endings-label",children:e==="es"?"Terminaciones comunes":"Common endings"}),c.jsx("div",{className:"grammar-endings-text",children:r.endings[e]||r.endings.en})]}),c.jsx("div",{className:"grammar-examples-label",children:e==="es"?"Ejemplos":"Examples"}),r.examples.map((l,d)=>c.jsxs("div",{className:"grammar-example",style:{borderColor:r.color,color:r.color},children:[c.jsx("div",{className:"grammar-example-ru",children:WE(l.ru,l.highlight,r.color)}),c.jsx("div",{className:"grammar-example-translit",children:l.transliteration}),c.jsx("div",{className:"grammar-example-translation",children:l[e]||l.en}),c.jsx("div",{className:"grammar-example-note",children:l.note[e]||l.note.en})]},d))]})]}),c.jsxs("div",{className:"grammar-nav",children:[c.jsxs("button",{className:"grammar-nav-btn",onClick:a,disabled:t===0,children:["← ",e==="es"?"Anterior":"Previous"]}),c.jsxs("span",{className:"grammar-nav-indicator",children:[t+1," / ",Bs.length]}),c.jsxs("button",{className:"grammar-nav-btn",onClick:i,disabled:t===Bs.length-1,children:[e==="es"?"Siguiente":"Next"," →"]})]}),c.jsx("div",{className:"grammar-bottom",children:c.jsx("button",{className:"grammar-home-btn",onClick:n,children:e==="es"?"Volver al inicio":"Back to Home"})})]})})},HE=()=>{const n=Zo(),{t:e,language:t}=ht(),s=[{icon:"🇷🇺",title:e("home.studyTypes.russianFlashCards.title"),desc:e("home.studyTypes.russianFlashCards.description"),path:"/russian/flashcards"},{icon:"📐",title:e("home.studyTypes.russianGrammar.title"),desc:e("home.studyTypes.russianGrammar.description"),path:"/russian/grammar"},{icon:"🏙️",title:e("home.studyTypes.kletka.title"),desc:e("home.studyTypes.kletka.description"),path:"/russian/kletka"},{icon:"🎭",title:e("home.studyTypes.toska.title"),desc:e("home.studyTypes.toska.description"),path:"/russian/toska"},{icon:"🌊",title:e("home.studyTypes.volny.title"),desc:e("home.studyTypes.volny.description"),path:"/russian/volny"},{icon:"❄️",title:e("home.studyTypes.zimnyaya.title"),desc:e("home.studyTypes.zimnyaya.description"),path:"/russian/zimnyaya"},{icon:"🃏",title:t==="es"?"Adjetivos Comunes":"Common Adjectives",desc:t==="es"?"Tarjetas de adjetivos esenciales con cirílico y transliteración":"Essential adjective cards with Cyrillic and transliteration",path:"/russian/adjectives"}];return c.jsx("div",{className:"section-landing-container",children:c.jsxs("div",{className:"section-landing-content",children:[c.jsxs("header",{className:"section-landing-header",children:[c.jsx("div",{className:"section-landing-flag",children:"🇷🇺"}),c.jsx("h1",{className:"section-landing-title",children:t==="es"?"Aprendizaje de Ruso":"Russian Learning"}),c.jsx("p",{className:"section-landing-subtitle",children:t==="es"?"Vocabulario cirílico y casos gramaticales":"Cyrillic vocabulary and grammatical cases"})]}),c.jsx(hr,{className:"section-landing-card",children:c.jsx("div",{className:"quiz-types",children:s.map(r=>c.jsxs("button",{className:"quiz-type-card",onClick:()=>n(r.path),children:[c.jsx("span",{className:"quiz-type-icon",children:r.icon}),c.jsx("span",{className:"quiz-type-name",children:r.title}),c.jsx("span",{className:"quiz-type-desc",children:r.desc})]},r.path))})}),c.jsxs("button",{className:"section-landing-back",onClick:()=>n("/"),children:["← ",t==="es"?"Volver al inicio":"Back to Home"]})]})})},Du={en:{question:"Question word",verb:"Verb",pronoun:"Pronoun",adjective:"Adjective",adverb:"Adverb",noun:"Noun",french:"French word"},es:{question:"Palabra interrogativa",verb:"Verbo",pronoun:"Pronombre",adjective:"Adjetivo",adverb:"Adverbio",noun:"Sustantivo",french:"Palabra francesa"}},Fr=6,Ye={IDLE:"idle",ANSWERED:"answered",DONE:"done"};function rn(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}const $E={question:"#ffb74d",verb:"#ef9a9a",pronoun:"#80cbc4",adjective:"#a5d6a7",adverb:"#90caf9",noun:"#ce93d8",french:"#f48fb1"};function QE(n,e){if(!n||!e.length)return n;const t=e.map(i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),s=new RegExp(`(${t.join("|")})`,"gi"),r=n.split(s);return r.length===1?n:r.map((i,a)=>e.some(l=>l.toLowerCase()===i.toLowerCase())?c.jsx("span",{className:"wbd-wrong-word",children:i},a):i)}function KE(n,e){const t=n.en,s=rn(e.filter(i=>i.id!==n.id).map(i=>i.en)).slice(0,3),r=rn([t,...s]);return{options:r,correctIndex:r.indexOf(t)}}const JE=({vocab:n,knownIds:e,setKnownIds:t,language:s,storageKey:r,onWrongUpdate:i,onGoToLyrics:a})=>{const{supported:l,speakingId:d,speak:h}=Wn(),[p,m]=A.useState(()=>rn(n)),[y,S]=A.useState(0),[x,P]=A.useState(Ye.IDLE),[R,O]=A.useState(null),[V,z]=A.useState(0),[F,L]=A.useState([]),[q,b]=A.useState(!1),g=p[y],{options:_,correctIndex:I}=A.useMemo(()=>g?KE(g,n):{options:[],correctIndex:0},[g,n]),E=`song-quiz-${r}-${g==null?void 0:g.id}`,T=d===E,v=A.useCallback(Z=>{x===Ye.IDLE&&(O(Z),P(Ye.ANSWERED),Z===I?(z(J=>J+1),t(J=>J.includes(g.id)?J:[...J,g.id])):L(J=>J.includes(g.id)?J:[...J,g.id]))},[x,I,g,t]),ae=A.useCallback(()=>{y+1>=p.length?P(Ye.DONE):(S(Z=>Z+1),O(null),P(Ye.IDLE))},[y,p.length]);A.useEffect(()=>{if(x===Ye.ANSWERED&&R===I){const Z=setTimeout(ae,900);return()=>clearTimeout(Z)}},[x,R,I,ae]),A.useEffect(()=>{x===Ye.DONE&&(i==null||i(F))},[x]);const me=A.useCallback(()=>{const Z=n.filter(J=>F.includes(J.id));m(rn(Z.length?Z:n)),S(0),O(null),P(Ye.IDLE),z(0),L([]),b(Z.length>0),i==null||i([])},[n,F,i]),H=A.useCallback(()=>{m(rn(n)),S(0),O(null),P(Ye.IDLE),z(0),L([]),b(!1),i==null||i([])},[n,i]),se=p.length,M=Math.round(V/se*100),$=y+1>=se;if(x===Ye.DONE){const Z=M>=90?3:M>=65?2:1,J=n.filter(re=>F.includes(re.id));return c.jsxs("div",{className:"wbd-quiz-done",children:[c.jsx("div",{className:"wbd-quiz-done-stars",children:"⭐".repeat(Z)}),c.jsx("h2",{className:"wbd-quiz-done-title",children:s==="es"?"¡Quiz terminado!":"Quiz complete!"}),c.jsxs("div",{className:"wbd-quiz-done-scorebox",children:[c.jsxs("div",{className:"wbd-quiz-done-scorebox-nums",children:[c.jsxs("span",{className:"wbd-quiz-done-score-correct",children:["✓ ",V]}),c.jsx("span",{className:"wbd-quiz-done-score-sep",children:"/"}),c.jsx("span",{className:"wbd-quiz-done-score-total",children:se}),c.jsxs("span",{className:"wbd-quiz-done-score-pct",children:[M,"%"]})]}),c.jsx("div",{className:"wbd-quiz-done-bar-track",children:c.jsx("div",{className:"wbd-quiz-done-bar-fill",style:{width:`${M}%`}})})]}),J.length>0?c.jsxs("div",{className:"wbd-quiz-done-wrong-section",children:[c.jsx("p",{className:"wbd-quiz-done-wrong-label",children:s==="es"?`❌ Incorrectas (${J.length})`:`❌ Wrong answers (${J.length})`}),c.jsx("ul",{className:"wbd-quiz-done-wrong-list",children:J.map(re=>c.jsxs("li",{className:"wbd-quiz-done-wrong-item",children:[c.jsx("span",{className:"wbd-quiz-done-wrong-word",children:re.word}),re.ipa&&c.jsx("span",{className:"wbd-quiz-done-wrong-ipa",children:re.ipa}),c.jsx("span",{className:"wbd-quiz-done-wrong-meaning",children:re.en})]},re.id))})]}):c.jsx("p",{className:"wbd-quiz-done-perfect",children:s==="es"?"🎉 ¡Sin errores!":"🎉 No mistakes!"}),c.jsxs("div",{className:"wbd-quiz-done-actions",children:[F.length>0&&c.jsx("button",{className:"wbd-quiz-done-btn primary",onClick:me,children:s==="es"?`🔁 Repetir errores (${F.length})`:`🔁 Retry wrong (${F.length})`}),F.length>0&&a&&c.jsx("button",{className:"wbd-quiz-done-btn lyrics-btn",onClick:a,children:s==="es"?"🎵 Ver errores en la letra":"🎵 See wrong words in Lyrics"}),c.jsx("button",{className:"wbd-quiz-done-btn",onClick:H,children:s==="es"?"🔀 Empezar de nuevo":"🔀 Start over"})]})]})}return c.jsxs("div",{className:"wbd-quiz",children:[c.jsxs("div",{className:"wbd-quiz-progress",children:[c.jsxs("span",{className:"wbd-quiz-progress-text",children:[y+1," / ",se,q&&c.jsx("span",{className:"wbd-quiz-wrong-badge",children:s==="es"?" · solo errores":" · wrong only"})]}),c.jsxs("span",{className:"wbd-quiz-score-text",children:["✓ ",V]})]}),c.jsx("div",{className:"wbd-quiz-progress-track",children:c.jsx("div",{className:"wbd-quiz-progress-fill",style:{width:`${(y+1)/se*100}%`}})}),c.jsxs("div",{className:"wbd-quiz-card",children:[c.jsx("div",{className:"wbd-quiz-word",children:g==null?void 0:g.word}),(g==null?void 0:g.ipa)&&c.jsx("div",{className:"wbd-quiz-ipa",children:g.ipa}),l&&c.jsx("button",{className:`wbd-quiz-speak-btn ${T?"speaking":""}`,onClick:()=>h(g.word,E),"aria-label":`Pronounce ${g==null?void 0:g.word}`,children:T?"🔊":"🔈"}),c.jsx("p",{className:"wbd-quiz-prompt",children:s==="es"?"¿Cuál es el significado?":"What does this mean?"})]}),c.jsx("div",{className:"wbd-quiz-options",children:_.map((Z,J)=>{let re="wbd-quiz-option";return x===Ye.ANSWERED&&(J===I?re+=" correct":J===R&&(re+=" wrong")),c.jsx("button",{className:re,onClick:()=>v(J),disabled:x===Ye.ANSWERED,children:Z},J)})}),x===Ye.ANSWERED&&R!==I&&c.jsx("button",{className:"wbd-quiz-next-btn",onClick:ae,children:$?s==="es"?"Ver resultados →":"See results →":s==="es"?"Siguiente →":"Next →"})]})},Ur=6,YE=({vocab:n,knownIds:e,setKnownIds:t,language:s})=>{const{supported:r,speakingId:i,speak:a}=Wn(),[l,d]=A.useState("meaning"),[h]=A.useState(()=>rn(n)),[p,m]=A.useState(0),[y,S]=A.useState(null),[x,P]=A.useState(new Set),[R,O]=A.useState(null),[V,z]=A.useState(0),[F,L]=A.useState(!1),[q,b]=A.useState(!1),g=Math.ceil(h.length/Ur),_=Math.floor(p/Ur),I=A.useMemo(()=>h.slice(p,p+Ur),[h,p]),E=A.useMemo(()=>rn(I),[I]),T=A.useCallback(()=>{m(0),S(null),P(new Set),O(null),L(!1),b(!1),z(0)},[]),v=A.useCallback(M=>{d(M),T()},[T]);A.useEffect(()=>{if(!F&&x.size>0&&x.size===I.length){const M=setTimeout(()=>L(!0),300);return()=>clearTimeout(M)}},[x.size,I.length,F]);const ae=A.useCallback((M,$)=>{if(x.has(M)||R)return;if(!y){S({id:M,side:$});return}if(y.side===$){S({id:M,side:$});return}const Z=$==="right"?y.id:M,J=$==="right"?M:y.id;Z===J?(P(re=>{const ke=new Set(re);return ke.add(Z),ke}),t(re=>re.includes(Z)?re:[...re,Z]),S(null)):(z(re=>re+1),O({leftId:Z,rightId:J}),S(null),setTimeout(()=>O(null),650))},[y,x,R,t]),me=()=>{const M=p+Ur;M>=h.length?b(!0):(m(M),S(null),P(new Set),O(null),L(!1))},H=M=>l==="pronunciation"?M.ipa:M.en,se=l==="pronunciation"?"🔊 IPA":"🇬🇧 EN";if(q){const M=V===0?3:V<=4?2:1;return c.jsxs("div",{className:"wbd-match-done",children:[c.jsx("div",{className:"wbd-quiz-done-stars",children:"⭐".repeat(M)}),c.jsx("h2",{className:"wbd-quiz-done-title",children:s==="es"?"¡Todo emparejado!":"All matched!"}),c.jsx("p",{className:"wbd-quiz-done-score",children:s==="es"?`${V} errores`:`${V} mistake${V!==1?"s":""}`}),c.jsx("p",{className:"wbd-quiz-done-known",children:s==="es"?`${e.length} palabras marcadas como aprendidas`:`${e.length} words marked as learned`}),c.jsx("div",{className:"wbd-quiz-done-actions",children:c.jsx("button",{className:"wbd-quiz-done-btn primary",onClick:T,children:s==="es"?"🔀 Jugar de nuevo":"🔀 Play again"})})]})}return c.jsxs("div",{className:"wbd-match",children:[c.jsxs("div",{className:"wbd-match-type-toggle",children:[c.jsxs("button",{className:`wbd-match-type-btn ${l==="meaning"?"active":""}`,onClick:()=>v("meaning"),children:["🇬🇧 ",s==="es"?"Significado":"Meaning"]}),c.jsxs("button",{className:`wbd-match-type-btn ${l==="pronunciation"?"active":""}`,onClick:()=>v("pronunciation"),children:["🔊 ",s==="es"?"Pronunciación":"Pronunciation"]})]}),c.jsxs("div",{className:"wbd-match-header",children:[c.jsx("span",{className:"wbd-match-round-info",children:s==="es"?`Ronda ${_+1} / ${g}`:`Round ${_+1} / ${g}`}),c.jsx("span",{className:"wbd-match-mistakes",children:s==="es"?`${V} errores`:`${V} mistake${V!==1?"s":""}`})]}),c.jsx("div",{className:"wbd-match-progress-track",children:c.jsx("div",{className:"wbd-match-progress-fill",style:{width:`${x.size/I.length*100}%`}})}),c.jsxs("div",{className:"wbd-match-grid",children:[c.jsxs("div",{className:"wbd-match-col",children:[c.jsx("div",{className:"wbd-match-col-label",children:"🇩🇪 DE"}),I.map(M=>{const $=x.has(M.id),Z=(y==null?void 0:y.id)===M.id&&(y==null?void 0:y.side)==="left",J=(R==null?void 0:R.leftId)===M.id,re=`match-pronun-${M.id}`,ke=i===re;return c.jsxs("button",{className:`wbd-match-item${Z?" selected":""}${$?" matched":""}${J?" wrong":""}`,onClick:()=>!$&&ae(M.id,"left"),disabled:$,children:[c.jsx("span",{className:"wbd-match-word-text",children:M.word}),l==="pronunciation"&&r&&c.jsx("span",{className:`wbd-match-speak ${ke?"speaking":""}`,role:"button","aria-label":`Pronounce ${M.word}`,onClick:we=>{we.stopPropagation(),a(M.word,re)},children:ke?"🔊":"🔈"})]},M.id)})]}),c.jsxs("div",{className:"wbd-match-col",children:[c.jsx("div",{className:"wbd-match-col-label",children:se}),E.map(M=>{const $=x.has(M.id),Z=(y==null?void 0:y.id)===M.id&&(y==null?void 0:y.side)==="right",J=(R==null?void 0:R.rightId)===M.id;return c.jsx("button",{className:`wbd-match-item${Z?" selected":""}${$?" matched":""}${J?" wrong":""}${l==="pronunciation"?" ipa":""}`,onClick:()=>!$&&ae(M.id,"right"),disabled:$,children:H(M)},M.id)})]})]}),F&&c.jsxs("div",{className:"wbd-match-round-done",children:[c.jsx("span",{className:"wbd-match-round-done-text",children:s==="es"?"✓ ¡Ronda completada!":"✓ Round complete!"}),c.jsx("button",{className:"wbd-quiz-done-btn primary",onClick:me,children:s==="es"?"Siguiente →":"Next →"})]})]})},$i=({title:n,meta:e,vocab:t,lyrics:s,storageKey:r,onHome:i,altFlag:a="🇪🇸",appleMusic:l,typeLabels:d,lyricsTabLabel:h,pronLabel:p})=>{const{language:m}=ht(),[y,S]=A.useState("vocab"),[x,P]=A.useState("all"),[R,O]=A.useState(0),[V,z]=A.useState(0),[F,L]=A.useState(new Set),[q,b]=Za(r,[]),[g,_]=A.useState(!0),[I,E]=A.useState(!1),[T,v]=A.useState([]),[ae,me]=A.useState(null),H=A.useRef(null),se=A.useRef(!1),M=A.useMemo(()=>s.some(W=>W.lines.some(he=>he.pron)),[s]),$=A.useMemo(()=>t.filter(W=>T.includes(W.id)).map(W=>W.word),[T,t]),{supported:Z,speakingId:J,speak:re}=Wn(),ke=A.useMemo(()=>rn(t),[R,t]),we=A.useMemo(()=>x==="notLearned"?ke.filter(W=>!q.includes(W.id)):x!=="all"?ke.filter(W=>W.type===x):ke,[ke,x,q]),Ie=Math.ceil(we.length/Fr),ge=we.slice(V*Fr,V*Fr+Fr),Lt=A.useCallback(W=>{z(W),L(new Set)},[]),qt=A.useCallback(W=>{L(he=>{const ie=new Set(he);return ie.has(W)?ie.delete(W):ie.add(W),ie})},[]),zt=ge.length>0&&F.size===ge.length,Gn=A.useCallback(()=>{L(zt?new Set:new Set(ge.map((W,he)=>he)))},[zt,ge]),Ts=A.useCallback((W,he)=>{he.stopPropagation(),b(ie=>ie.includes(W)?ie:[...ie,W])},[b]),Ft=A.useCallback(W=>{P(W),z(0),L(new Set)},[]),gn=A.useCallback(()=>{O(W=>W+1),z(0),L(new Set)},[]),Hn=A.useCallback(W=>{se.current=!1,clearTimeout(H.current),H.current=setTimeout(()=>{se.current=!0,me(W)},500)},[]),$n=A.useCallback(()=>{clearTimeout(H.current)},[]),ft=(d==null?void 0:d[m])??(d==null?void 0:d.en)??Du[m]??Du.en,yn=[...new Set(t.map(W=>W.type))];return c.jsx("div",{className:"wbd-container",children:c.jsxs("div",{className:"wbd-content",children:[c.jsxs("div",{className:"wbd-header",children:[c.jsx("button",{className:"wbd-back-btn",onClick:i,children:"←"}),c.jsxs("div",{className:"wbd-header-text",children:[c.jsx("h1",{className:"wbd-song-title",children:n}),c.jsx("div",{className:"wbd-song-meta",children:e}),l&&c.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:`wbd-apple-music-link${l.includes("youtube")?" youtube":""}`,children:l.includes("youtube")?"▶ YouTube Music":"♫ Apple Music"})]})]}),c.jsxs("div",{className:"wbd-tabs",children:[c.jsxs("button",{className:`wbd-tab ${y==="vocab"?"active":""}`,onClick:()=>S("vocab"),children:["🃏 ","Vocab"]}),c.jsxs("button",{className:`wbd-tab ${y==="match"?"active":""}`,onClick:()=>S("match"),children:["🔗 ",m==="es"?"Pares":"Match"]}),c.jsx("button",{className:`wbd-tab ${y==="quiz"?"active":""}`,onClick:()=>S("quiz"),children:"🧠 Quiz"}),c.jsxs("button",{className:`wbd-tab ${y==="lyrics"?"active":""}`,onClick:()=>S("lyrics"),children:["🎸 ",(h==null?void 0:h[m])??(m==="es"?"Letra":"Lyrics")]})]}),y==="vocab"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"wbd-progress",children:[c.jsxs("div",{className:"wbd-progress-text",children:[q.length," / ",t.length," ",m==="es"?"aprendidas":"learned"]}),c.jsx("div",{className:"wbd-progress-track",children:c.jsx("div",{className:"wbd-progress-fill",style:{width:`${q.length/t.length*100}%`}})})]}),c.jsxs("div",{className:"wbd-filters",children:[c.jsx("button",{className:`wbd-filter-btn ${x==="all"?"active":""}`,onClick:()=>Ft("all"),children:m==="es"?"Todas":"All"}),c.jsx("button",{className:`wbd-filter-btn ${x==="notLearned"?"active":""}`,onClick:()=>Ft("notLearned"),children:m==="es"?"No aprendidas":"Not learned"}),yn.map(W=>c.jsx("button",{className:`wbd-filter-btn ${x===W?"active":""}`,onClick:()=>Ft(W),children:ft[W]||W},W))]}),we.length===0?c.jsx("p",{style:{color:"white",textAlign:"center",padding:"2rem 0"},children:m==="es"?"¡Todas aprendidas!":"All learned!"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"wbd-grid",children:ge.map((W,he)=>{const ie=F.has(he),it=q.includes(W.id),wn=`${r}-${W.id}`,Qn=J===wn,As=$E[W.type]||"white",pt=ae===W.id&&!ie;return c.jsx("div",{className:"wbd-card-scene",onPointerDown:()=>W.songContext&&Hn(W.id),onPointerUp:$n,onPointerCancel:$n,onMouseEnter:()=>W.songContext&&!ie&&me(W.id),onMouseLeave:()=>me(null),onClick:()=>{if(se.current){se.current=!1;return}me(null),qt(he)},children:c.jsxs("div",{className:`wbd-card ${ie?"is-flipped":""}`,children:[c.jsxs("div",{className:"wbd-card-face wbd-card-front",children:[it&&c.jsx("span",{className:"wbd-known-badge",children:"✓"}),W.songContext&&c.jsx("span",{className:"wbd-hint-dot",title:"Hover / long-press to see song phrase",children:"♪"}),c.jsx("div",{className:"wbd-word",children:W.word}),c.jsx("div",{className:"wbd-ipa",children:W.ipa}),Z&&c.jsx("button",{style:{position:"absolute",bottom:28,background:"none",border:"none",cursor:"pointer",fontSize:"1.1rem"},onClick:xt=>{xt.stopPropagation(),re(W.word,wn)},"aria-label":`Pronounce ${W.word}`,children:Qn?"🔊":"🔈"}),c.jsx("div",{className:"wbd-type-badge",style:{color:As},children:ft[W.type]||W.type}),pt&&c.jsxs("div",{className:"wbd-song-hint",children:["♪ „",W.songContext,'"']})]}),c.jsxs("div",{className:"wbd-card-face wbd-card-back",children:[c.jsx("div",{className:"wbd-meaning",children:W.en}),c.jsx("div",{className:"wbd-meaning-es",children:W.es}),!it&&c.jsx("button",{className:"wbd-know-btn",onClick:xt=>Ts(W.id,xt),children:m==="es"?"La sé ✓":"Got it ✓"})]})]})},`${V}-${he}`)})}),Ie>1&&c.jsxs("div",{className:"wbd-nav",children:[c.jsxs("button",{className:"wbd-nav-btn",onClick:()=>Lt(V-1),disabled:V===0,children:["← ",m==="es"?"Ant.":"Prev"]}),c.jsxs("span",{className:"wbd-nav-indicator",children:[V+1," / ",Ie]}),c.jsxs("button",{className:"wbd-nav-btn",onClick:()=>Lt(V+1),disabled:V>=Ie-1,children:[m==="es"?"Sig.":"Next"," →"]})]})]}),c.jsxs("div",{className:"wbd-actions",children:[c.jsx("button",{className:"wbd-action-btn",onClick:Gn,children:zt?m==="es"?"Ocultar todo":"Hide all":m==="es"?"Mostrar todo":"Show all"}),c.jsx("button",{className:"wbd-action-btn",onClick:gn,children:m==="es"?"Mezclar":"Shuffle"}),q.length>0&&c.jsx("button",{className:"wbd-action-btn",onClick:()=>b([]),children:m==="es"?"Reiniciar progreso":"Reset progress"})]})]}),y==="match"&&c.jsx(YE,{vocab:t,knownIds:q,setKnownIds:b,language:m}),y==="quiz"&&c.jsx(JE,{vocab:t,knownIds:q,setKnownIds:b,language:m,storageKey:r,onWrongUpdate:v,onGoToLyrics:()=>S("lyrics")}),y==="lyrics"&&c.jsxs("div",{className:"wbd-lyrics-wrapper",children:[c.jsxs("div",{className:"wbd-lyrics-controls",children:[c.jsx("span",{className:"wbd-lyrics-info",children:e}),M&&c.jsx("button",{className:`wbd-transl-toggle ${I?"on":""}`,onClick:()=>E(W=>!W),children:I?p!=null&&p[m]?`Ocultar ${p[m]}`:m==="es"?"Ocultar pronunciación":"Hide romanization":p!=null&&p[m]?`Mostrar ${p[m]}`:m==="es"?"Mostrar pronunciación":"Show romanization"}),c.jsx("button",{className:`wbd-transl-toggle ${g?"on":""}`,onClick:()=>_(W=>!W),children:g?m==="es"?"Ocultar inglés":"Hide English":m==="es"?"Mostrar inglés":"Show English"})]}),$.length>0&&c.jsxs("div",{className:"wbd-lyrics-legend",children:[c.jsx("span",{className:"wbd-wrong-word",children:"■"}),m==="es"?" Palabras falladas en el quiz":" Words missed in quiz"]}),s.map((W,he)=>c.jsxs("div",{className:"wbd-stanza",children:[c.jsx("div",{className:"wbd-stanza-label",children:W.label[m]||W.label.en}),c.jsx("div",{className:"wbd-lines",children:W.lines.map((ie,it)=>c.jsxs("div",{className:"wbd-line",children:[ie.es&&c.jsxs("div",{className:"wbd-line-es",children:[c.jsx("span",{className:"wbd-line-flag",children:a})," ",ie.es]}),ie.de&&c.jsxs("div",{className:"wbd-line-de",children:[ie.es&&c.jsx("span",{className:"wbd-line-flag",children:"🇩🇪"})," ",QE(ie.de,$)]}),I&&ie.pron&&c.jsx("div",{className:"wbd-line-pron",children:ie.pron}),g&&ie.en&&c.jsx("div",{className:"wbd-line-en",children:ie.en})]},it))})]},he))]})]})})},XE=[{id:1,word:"клетка",ipa:"[ˈklʲetkə]",en:"cage / stairwell",es:"jaula / escalera",type:"noun"},{id:2,word:"улица",ipa:"[ˈulʲɪt͡sə]",en:"street",es:"calle",type:"noun"},{id:3,word:"дом",ipa:"[dom]",en:"house / building",es:"casa / edificio",type:"noun"},{id:4,word:"этаж",ipa:"[ɪˈtaʂ]",en:"floor / story",es:"piso / planta",type:"noun"},{id:5,word:"звонок",ipa:"[zvɐˈnok]",en:"bell / doorbell",es:"timbre / campana",type:"noun"},{id:6,word:"дверь",ipa:"[dvʲerʲ]",en:"door",es:"puerta",type:"noun"},{id:7,word:"дурак",ipa:"[dʊˈrak]",en:"fool",es:"tonto / necio",type:"noun"},{id:8,word:"лестница",ipa:"[ˈlʲesʲnʲɪt͡sə]",en:"staircase",es:"escalera",type:"noun"},{id:9,word:"записка",ipa:"[zɐˈpʲiskə]",en:"note / message",es:"nota / mensaje",type:"noun"},{id:10,word:"стенка",ipa:"[ˈsʲtʲenkə]",en:"wall",es:"pared / muro",type:"noun"},{id:11,word:"ожог",ipa:"[ɐˈʐok]",en:"burn / scorch mark",es:"quemadura",type:"noun"},{id:12,word:"побелка",ipa:"[pɐˈbʲelkə]",en:"whitewash",es:"encalado / blanqueado",type:"noun"},{id:13,word:"привет",ipa:"[prʲɪˈvʲet]",en:"hello / hi",es:"hola",type:"noun"},{id:14,word:"войти",ipa:"[vɐjˈtʲi]",en:"to enter",es:"entrar",type:"verb"},{id:15,word:"подняться",ipa:"[pɐdˈnʲat͡sə]",en:"to go up / climb",es:"subir",type:"verb"},{id:16,word:"позвонить",ipa:"[pəzvɐˈnʲitʲ]",en:"to ring / call",es:"llamar / tocar el timbre",type:"verb"},{id:17,word:"постучать",ipa:"[pəstʊˈt͡ɕatʲ]",en:"to knock",es:"golpear / tocar la puerta",type:"verb"},{id:18,word:"открыть",ipa:"[ɐtˈkrɨtʲ]",en:"to open",es:"abrir",type:"verb"},{id:19,word:"бежать",ipa:"[bʲɪˈʐatʲ]",en:"to run",es:"correr",type:"verb"},{id:20,word:"убежать",ipa:"[ʊbʲɪˈʐatʲ]",en:"to run away / flee",es:"huir / escapar",type:"verb"},{id:21,word:"позабыть",ipa:"[pəzɐˈbɨtʲ]",en:"to forget",es:"olvidar",type:"verb"},{id:22,word:"ждать",ipa:"[ʐdatʲ]",en:"to wait",es:"esperar",type:"verb"},{id:23,word:"сказать",ipa:"[skɐˈzatʲ]",en:"to say",es:"decir",type:"verb"},{id:24,word:"восьмой",ipa:"[vɐsʲˈmoj]",en:"eighth",es:"octavo",type:"adjective"},{id:25,word:"навсегда",ipa:"[nɐfsʲɪˈɡda]",en:"forever",es:"para siempre",type:"adverb"},{id:26,word:"непонятный",ipa:"[nʲɪpɐˈnʲatnɨj]",en:"incomprehensible",es:"incomprensible",type:"adjective"},{id:27,word:"позабытый",ipa:"[pəzɐˈbɨtɨj]",en:"forgotten",es:"olvidado",type:"adjective"},{id:28,word:"вниз",ipa:"[vnʲis]",en:"down / downward",es:"abajo / hacia abajo",type:"adverb"},{id:29,word:"сквозь",ipa:"[skvosʲ]",en:"through",es:"a través de",type:"adverb"},{id:30,word:"никто",ipa:"[nʲɪkˈto]",en:"nobody / no one",es:"nadie",type:"pronoun"}],ZE=[{label:{en:"Verse 1",es:"Estrofa 1"},lines:[{de:"И вот, эта улица",pron:"I vot, eta ulitsa",en:"And so, this street"},{de:"Войди в этот дом",pron:"Voydi v etot dom",en:"Enter this house"},{de:"Поднимись на восьмой этаж",pron:"Podnimis' na vos'moy etazh",en:"Go up to the eighth floor"},{de:"Позвони в звонок",pron:"Pozvoni v zvonok",en:"Ring the doorbell"},{de:"Постучи в эту дверь",pron:"Postuchi v etu dver'",en:"Knock on this door"},{de:"И тебе никто не откроет",pron:"I tebe nikto ne otkroyet",en:"And no one will open it for you"},{de:"Беги, дурак",pron:"Begi, durak",en:"Run, fool"},{de:"Беги, дурак",pron:"Begi, durak",en:"Run, fool"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Вниз по лестничной клетке, сквозь записки на стенках",pron:"Vniz po lestnichnoy kletke, skvoz' zapiski na stenkakh",en:"Down the stairwell, through notes on the walls"},{de:"Позабытые навсегда",pron:"Pozabytye navsegda",en:"Forgotten forever"},{de:"Вниз по лестничной клетке, как ожоги на побелке",pron:"Vniz po lestnichnoy kletke, kak ozhogi na pobelke",en:"Down the stairwell, like burns on the whitewash"},{de:"Непонятны как и я",pron:"Neponyatny kak i ya",en:"Incomprehensible, just like me"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"}]},{label:{en:"Verse 2",es:"Estrofa 2"},lines:[{de:"И где та улица?",pron:"I gde ta ulitsa?",en:"And where is that street?"},{de:"И где тот дом?",pron:"I gde tot dom?",en:"And where is that house?"},{de:"На каком этаже ждут нас?",pron:"Na kakom etazhe zhdut nas?",en:"On which floor do they wait for us?"},{de:"Где откроют без звонка",pron:"Gde otkroyut bez zvonka",en:"Where they'll open without ringing"},{de:"Где без стука войду",pron:"Gde bez stuka voydu",en:"Where I'll enter without knocking"},{de:"Там, где скажут привет и я не убегу",pron:"Tam, gde skazhut privet i ya ne ubegu",en:"Where they'll say hello and I won't run away"},{de:"Не убегу",pron:"Ne ubegu",en:"I won't run away"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Вниз по лестничной клетке, сквозь записки на стенках",pron:"Vniz po lestnichnoy kletke, skvoz' zapiski na stenkakh",en:"Down the stairwell, through notes on the walls"},{de:"Позабытые навсегда",pron:"Pozabytye navsegda",en:"Forgotten forever"},{de:"Вниз по лестничной клетке, как ожоги на побелке",pron:"Vniz po lestnichnoy kletke, kak ozhogi na pobelke",en:"Down the stairwell, like burns on the whitewash"},{de:"Непонятны как и я",pron:"Neponyatny kak i ya",en:"Incomprehensible, just like me"}]},{label:{en:"Outro",es:"Outro"},lines:[{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"},{de:"Вниз по лестничной клетке",pron:"Vniz po lestnichnoy kletke",en:"Down the stairwell"}]}],eT=({onHome:n})=>c.jsx($i,{title:"Клетка",meta:"Molchat Doma — s/t (2018)",vocab:XE,lyrics:ZE,storageKey:"itiapp-kletka-known",appleMusic:"https://music.youtube.com/search?q=Molchat+Doma+Kletka",onHome:n}),tT=[{id:1,word:"тоска",ipa:"[tɐˈska]",en:"longing / anguish",es:"añoranza / angustia",type:"noun"},{id:2,word:"любовь",ipa:"[lʲʊˈbofʲ]",en:"love",es:"amor",type:"noun"},{id:3,word:"окно",ipa:"[ɐkˈno]",en:"window",es:"ventana",type:"noun"},{id:4,word:"ключи",ipa:"[klʲʊˈt͡ɕi]",en:"keys",es:"llaves",type:"noun"},{id:5,word:"преграда",ipa:"[prʲɪˈɡradə]",en:"obstacle / barrier",es:"obstáculo / barrera",type:"noun"},{id:6,word:"пора",ipa:"[pɐˈra]",en:"it's time",es:"es hora",type:"noun"},{id:7,word:"знать",ipa:"[znatʲ]",en:"to know",es:"saber / conocer",type:"verb"},{id:8,word:"уходить",ipa:"[ʊxɐˈdʲitʲ]",en:"to leave / go away",es:"irse / marcharse",type:"verb"},{id:9,word:"возвращаться",ipa:"[vəzvrɐˈʂat͡sə]",en:"to return / come back",es:"volver / regresar",type:"verb"},{id:10,word:"найти",ipa:"[nɐjˈtʲi]",en:"to find",es:"encontrar",type:"verb"},{id:11,word:"заниматься",ipa:"[zənʲɪˈmat͡sə]",en:"to occupy oneself",es:"ocuparse / entretenerse",type:"verb"},{id:12,word:"улетать",ipa:"[ʊlʲɪˈtatʲ]",en:"to fly away",es:"volar / alejarse volando",type:"verb"},{id:13,word:"убегать",ipa:"[ʊbʲɪˈɡatʲ]",en:"to run away",es:"huir / escapar",type:"verb"},{id:14,word:"потерять",ipa:"[pətʲɪˈrʲatʲ]",en:"to lose",es:"perder",type:"verb"},{id:15,word:"видеть",ipa:"[ˈvʲidʲɪtʲ]",en:"to see",es:"ver",type:"verb"},{id:16,word:"уйти",ipa:"[ʊjˈtʲi]",en:"to leave / go",es:"irse / partir",type:"verb"},{id:17,word:"поджидать",ipa:"[pəd͡ʐɨˈdatʲ]",en:"to wait / lurk",es:"acechar / esperar",type:"verb"},{id:18,word:"отдать",ipa:"[ɐtˈdatʲ]",en:"to give back / hand over",es:"devolver / entregar",type:"verb"},{id:19,word:"убить",ipa:"[ʊˈbʲitʲ]",en:"to kill",es:"matar",type:"verb"},{id:20,word:"вынуждать",ipa:"[vɨnʊʐˈdatʲ]",en:"to force / compel",es:"obligar / forzar",type:"verb"},{id:21,word:"рад",ipa:"[rat]",en:"glad / happy",es:"contento / feliz",type:"adjective"},{id:22,word:"хорошо",ipa:"[xərɐˈʂo]",en:"good / well",es:"bien / bueno",type:"adverb"},{id:23,word:"лучше",ipa:"[ˈlut͡ɕɕɪ]",en:"better",es:"mejor",type:"adverb"},{id:24,word:"нужный",ipa:"[ˈnuʐnɨj]",en:"needed / necessary",es:"necesario / requerido",type:"adjective"},{id:25,word:"вновь",ipa:"[vnofʲ]",en:"again / anew",es:"de nuevo / nuevamente",type:"adverb"},{id:26,word:"себя",ipa:"[sʲɪˈbʲa]",en:"oneself / yourself",es:"uno mismo / sí mismo",type:"pronoun"},{id:27,word:"сама",ipa:"[sɐˈma]",en:"herself / itself",es:"ella misma",type:"pronoun"},{id:28,word:"почему",ipa:"[pɐt͡ɕɪˈmu]",en:"why",es:"por qué",type:"question"},{id:29,word:"когда",ipa:"[kɐɡˈda]",en:"when",es:"cuando",type:"question"},{id:30,word:"хотя",ipa:"[xɐˈtʲa]",en:"although / though",es:"aunque / a pesar de",type:"adverb"}],nT=[{label:{en:"Verse 1",es:"Estrofa 1"},lines:[{de:"Я знаю, тебе нужна моя любовь",pron:"Ya znayu, tebe nuzhna moya lyubov'",en:"I know, you need my love"},{de:"Уходи и не возвращайся вновь",pron:"Ukhodi i ne vozvrashchaysya vnov'",en:"Leave and don't come back again"},{de:"Я найду чем себя занять",pron:"Ya naydu chem sebya zanyat'",en:"I'll find something to keep myself busy"},{de:"Улетай, убегай от меня, тоска",pron:"Uletay, ubegay ot menya, toska",en:"Fly away, run away from me, longing"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Я буду рад потерять тебя",pron:"Ya budu rad poteryat' tebya",en:"I'll be glad to lose you"},{de:"Не вижу преград, хотя есть одна",pron:"Ne vizhu pregrad, khotya est' odna",en:"I see no obstacles, though there is one"},{de:"Когда ты ушла",pron:"Kogda ty ushla",en:"When you left"},{de:"Почему так хорошо, тоска?",pron:"Pochemu tak khorosho, toska?",en:"Why does it feel so good, longing?"}]},{label:{en:"Verse 2",es:"Estrofa 2"},lines:[{de:"Не поджидай у окна",pron:"Ne podzhiday u okna",en:"Don't wait by the window"},{de:"Отдай ключи, мне пора",pron:"Otday klyuchi, mne pora",en:"Give back the keys, it's time for me"},{de:"Лучше убей сама себя",pron:"Luchshe ubey sama sebya",en:"Better kill yourself"},{de:"Не вынуждай, тоска",pron:"Ne vynuzhday, toska",en:"Don't force me, longing"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Я буду рад потерять тебя",pron:"Ya budu rad poteryat' tebya",en:"I'll be glad to lose you"},{de:"Не вижу преград, хотя есть одна",pron:"Ne vizhu pregrad, khotya est' odna",en:"I see no obstacles, though there is one"},{de:"Когда ты ушла",pron:"Kogda ty ushla",en:"When you left"},{de:"Почему так хорошо?",pron:"Pochemu tak khorosho?",en:"Why does it feel so good?"},{de:"Я буду рад потерять тебя",pron:"Ya budu rad poteryat' tebya",en:"I'll be glad to lose you"},{de:"Не вижу преград, хотя есть одна",pron:"Ne vizhu pregrad, khotya est' odna",en:"I see no obstacles, though there is one"},{de:"Когда ты ушла",pron:"Kogda ty ushla",en:"When you left"},{de:"Почему так хорошо, тоска?",pron:"Pochemu tak khorosho, toska?",en:"Why does it feel so good, longing?"}]}],sT=({onHome:n})=>c.jsx($i,{title:"Тоска",meta:"Molchat Doma",vocab:tT,lyrics:nT,storageKey:"itiapp-toska-known",appleMusic:"https://music.youtube.com/search?q=Molchat+Doma+Toska",onHome:n}),rT=[{id:1,word:"волна",ipa:"[vɐlˈna]",en:"wave",es:"ola",type:"noun"},{id:2,word:"земля",ipa:"[zʲɪmˈlʲa]",en:"earth / land / ground",es:"tierra / suelo",type:"noun"},{id:3,word:"грохот",ipa:"[ˈɡroxət]",en:"rumble / roar / crash",es:"estruendo / retumbar",type:"noun"},{id:4,word:"гром",ipa:"[ɡrom]",en:"thunder",es:"trueno",type:"noun"},{id:5,word:"смерть",ipa:"[smʲertʲ]",en:"death",es:"muerte",type:"noun"},{id:6,word:"счастье",ipa:"[ˈɕːasʲtʲjɪ]",en:"happiness",es:"felicidad",type:"noun"},{id:7,word:"век",ipa:"[vʲek]",en:"century / age",es:"siglo / era",type:"noun"},{id:8,word:"быт",ipa:"[bɨt]",en:"everyday life / routine",es:"vida cotidiana / rutina",type:"noun"},{id:9,word:"картотека",ipa:"[kərtɐˈtʲekə]",en:"card index / file / record",es:"fichero / archivo",type:"noun"},{id:10,word:"путь",ipa:"[putʲ]",en:"path / way / route",es:"camino / vía",type:"noun"},{id:11,word:"природа",ipa:"[prʲɪˈrodə]",en:"nature",es:"naturaleza",type:"noun"},{id:12,word:"погода",ipa:"[pɐˈɡodə]",en:"weather",es:"clima / tiempo",type:"noun"},{id:13,word:"Бог",ipa:"[boɡ]",en:"God",es:"Dios",type:"noun"},{id:14,word:"нелепица",ipa:"[nʲɪˈlʲepʲɪt͡sə]",en:"absurdity / nonsense",es:"absurdo / disparate",type:"noun"},{id:15,word:"показать",ipa:"[pəkɐˈzatʲ]",en:"to show",es:"mostrar / enseñar",type:"verb"},{id:16,word:"плакать",ipa:"[ˈplakətʲ]",en:"to cry / weep",es:"llorar",type:"verb"},{id:17,word:"разорвать",ipa:"[rəzɐrˈvatʲ]",en:"to tear apart / rip",es:"desgarrar / romper",type:"verb"},{id:18,word:"хранить",ipa:"[xrɐˈnʲitʲ]",en:"to keep / preserve",es:"guardar / preservar",type:"verb"},{id:19,word:"пронести",ipa:"[prənʲɪˈsʲtʲi]",en:"to carry through",es:"llevar / transportar",type:"verb"},{id:20,word:"сохранить",ipa:"[səxrɐˈnʲitʲ]",en:"to save / preserve oneself",es:"salvar / conservar",type:"verb"},{id:21,word:"проложить",ipa:"[prəlɐˈʐɨtʲ]",en:"to forge / lay (a path)",es:"trazar / abrir (camino)",type:"verb"},{id:22,word:"исчезнуть",ipa:"[ɪˈɕːeznʊtʲ]",en:"to disappear / vanish",es:"desaparecer",type:"verb"},{id:23,word:"заставлять",ipa:"[zəstɐˈvlʲatʲ]",en:"to force / make s.o. do",es:"obligar / forzar",type:"verb"},{id:24,word:"петь",ipa:"[pʲetʲ]",en:"to sing",es:"cantar",type:"verb"},{id:25,word:"верить",ipa:"[ˈvʲerʲɪtʲ]",en:"to believe",es:"creer",type:"verb"},{id:26,word:"нелепый",ipa:"[nʲɪˈlʲepɨj]",en:"absurd / ridiculous",es:"absurdo / ridículo",type:"adjective"},{id:27,word:"социальный",ipa:"[sətsɨˈalʲnɨj]",en:"social",es:"social",type:"adjective"},{id:28,word:"плохой",ipa:"[plɐˈxoj]",en:"bad / poor",es:"malo / pésimo",type:"adjective"},{id:29,word:"насовсем",ipa:"[nəsɐfˈsʲem]",en:"for good / permanently",es:"para siempre / definitivamente",type:"adverb"},{id:30,word:"сейчас",ipa:"[sʲɪˈt͡ɕas]",en:"now / right now",es:"ahora / en este momento",type:"adverb"}],iT=[{label:{en:"Verse 1",es:"Estrofa 1"},lines:[{de:"И ты покажешь мне, как плачет земля",pron:"I ty pokazhesh' mne, kak plachet zemlya",en:"And you'll show me how the earth weeps"},{de:"Грохот грома разорвёт нас на части",pron:"Grokhot groma razorvyot nas na chasti",en:"The roar of thunder will tear us apart"},{de:"Там, где будет смерть — там же буду и я",pron:"Tam, gde budet smert' — tam zhe budu i ya",en:"Where there will be death — there I will be too"},{de:"Ты за мной не иди, твоё время — сейчас",pron:"Ty za mnoy ne idi, tvoyo vremya — seychas",en:"Don't follow me, your time is now"}]},{label:{en:"Verse 2",es:"Estrofa 2"},lines:[{de:"Наше счастье храня, пронеси в новый век",pron:"Nashe schast'ye khranya, pronesi v novyy vek",en:"Preserving our happiness, carry it into the new age"},{de:"Сквозь нелепицу быта, социальных проблем",pron:"Skvoz' nelepitsu byta, sotsial'nykh problem",en:"Through the absurdity of daily life and social problems"},{de:"Сохранив себя в сотнях картотек",pron:"Sokhraniv sebya v sotnyakh kartotyek",en:"Having preserved yourself in hundreds of records"},{de:"Проложи новый путь и исчезни насовсем",pron:"Prolozhi novyy put' i ischezni nasovsem",en:"Forge a new path and disappear for good"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Ты заставляешь меня петь песни про природу",pron:"Ty zastavlyayesh' menya pet' pesni pro prirodu",en:"You make me sing songs about nature"},{de:"Ты заставляешь меня верить в своего Бога",pron:"Ty zastavlyayesh' menya verit' v svoyego Boga",en:"You make me believe in your God"},{de:"На моей земле плохая погода",pron:"Na moyey zemle plokhaya pogoda",en:"The weather on my land is bad"},{de:"Ты заставляешь меня верить в своего Бога",pron:"Ty zastavlyayesh' menya verit' v svoyego Boga",en:"You make me believe in your God"},{de:"Ты заставляешь меня петь песни про природу",pron:"Ty zastavlyayesh' menya pet' pesni pro prirodu",en:"You make me sing songs about nature"},{de:"Ты заставляешь меня верить в своего Бога",pron:"Ty zastavlyayesh' menya verit' v svoyego Boga",en:"You make me believe in your God"},{de:"На моей земле плохая погода",pron:"Na moyey zemle plokhaya pogoda",en:"The weather on my land is bad"},{de:"Ты заставляешь меня верить в своего Бога",pron:"Ty zastavlyayesh' menya verit' v svoyego Boga",en:"You make me believe in your God"}]}],oT=({onHome:n})=>c.jsx($i,{title:"Волны",meta:"Molchat Doma",vocab:rT,lyrics:iT,storageKey:"itiapp-volny-known",appleMusic:"https://music.youtube.com/search?q=Molchat+Doma+Volny",onHome:n}),aT=[{id:1,word:"зима",ipa:"[zʲɪˈma]",en:"winter",es:"invierno",type:"noun"},{id:2,word:"снег",ipa:"[snʲek]",en:"snow",es:"nieve",type:"noun"},{id:3,word:"хлопья",ipa:"[ˈxlopʲjə]",en:"snowflakes / flakes",es:"copos (de nieve)",type:"noun"},{id:4,word:"луна",ipa:"[lʊˈna]",en:"moon",es:"luna",type:"noun"},{id:5,word:"холод",ipa:"[ˈxoləd]",en:"cold / coldness",es:"frío",type:"noun"},{id:6,word:"мороз",ipa:"[mɐˈros]",en:"frost",es:"escarcha / helada",type:"noun"},{id:7,word:"город",ipa:"[ˈɡorəd]",en:"city",es:"ciudad",type:"noun"},{id:8,word:"огонь",ipa:"[ɐˈɡonʲ]",en:"fire",es:"fuego",type:"noun"},{id:9,word:"ночь",ipa:"[not͡ɕ]",en:"night",es:"noche",type:"noun"},{id:10,word:"небеса",ipa:"[nʲɪbʲɪˈsa]",en:"sky / heavens",es:"cielo",type:"noun"},{id:11,word:"проспект",ipa:"[prɐˈspʲekt]",en:"avenue / boulevard",es:"avenida",type:"noun"},{id:12,word:"фонарь",ipa:"[fɐˈnarʲ]",en:"street lamp / lantern",es:"farol / farola",type:"noun"},{id:13,word:"тепло",ipa:"[tʲɪˈplo]",en:"warmth / heat",es:"calor / calidez",type:"noun"},{id:14,word:"весна",ipa:"[vʲɪˈsna]",en:"spring (season)",es:"primavera",type:"noun"},{id:15,word:"блик",ipa:"[blʲik]",en:"glare / sparkle / reflection",es:"reflejo / destello",type:"noun"},{id:16,word:"окно",ipa:"[ɐkˈno]",en:"window",es:"ventana",type:"noun"},{id:17,word:"скучать",ipa:"[skʊˈt͡ɕatʲ]",en:"to miss / to be bored",es:"extrañar / aburrirse",type:"verb"},{id:18,word:"греть",ipa:"[ɡrʲetʲ]",en:"to warm / to heat",es:"calentar",type:"verb"},{id:19,word:"замёрзнуть",ipa:"[zɐˈmʲorznutʲ]",en:"to freeze / to get frozen",es:"congelarse / helarse",type:"verb"},{id:20,word:"заметать",ipa:"[zɐmʲɪˈtatʲ]",en:"to sweep / cover with snow",es:"barrer / cubrir de nieve",type:"verb"},{id:21,word:"наступать",ipa:"[nɐstʊˈpatʲ]",en:"to arrive / set in (season)",es:"llegar / acercarse",type:"verb"},{id:22,word:"представлять",ipa:"[prʲɪdstɐˈvlʲatʲ]",en:"to imagine / picture",es:"imaginar / representar",type:"verb"},{id:23,word:"засиять",ipa:"[zɐsʲɪˈjatʲ]",en:"to start shining / gleam",es:"empezar a brillar",type:"verb"},{id:24,word:"опускать",ipa:"[ɐpʊˈskatʲ]",en:"to lower / immerse / plunge",es:"bajar / sumergir",type:"verb"},{id:25,word:"зимний",ipa:"[ˈzʲimnʲɪj]",en:"wintry / winter (adj.)",es:"invernal / de invierno",type:"adjective"},{id:26,word:"холодный",ipa:"[xɐˈlodnɨj]",en:"cold",es:"frío/a",type:"adjective"},{id:27,word:"снежный",ipa:"[ˈsnʲeʐnɨj]",en:"snowy",es:"nevoso/a",type:"adjective"},{id:28,word:"длинный",ipa:"[ˈdlʲinːɨj]",en:"long",es:"largo/a",type:"adjective"},{id:29,word:"лишь",ipa:"[lʲiʂ]",en:"only / merely",es:"solo / únicamente",type:"adverb"},{id:30,word:"жаль",ipa:"[ʐalʲ]",en:"what a pity / sadly",es:"qué lástima / es una pena",type:"phrase"},{id:31,word:"лишь зимой",ipa:"[lʲiʂ zʲɪˈmoj]",en:"only in winter",es:"solo en invierno",type:"phrase"},{id:32,word:"как в огне",ipa:"[kak v ɐˈɡnʲe]",en:"as if on fire",es:"como en llamas",type:"phrase"}],cT=[{label:{en:"Verse 1",es:"Estrofa 1"},lines:[{de:"Снег заметает хлопья в окна наши",pron:"Sneg zametayet khlopya v okna nashi",en:"Snow sweeps flakes into our windows"},{de:"Вот",pron:"Vot",en:"Here it comes"},{de:"Наступает холод, делая всё краше",pron:"Nastupayet kholod, delaya vsyo krashe",en:"The cold arrives, making everything more beautiful"},{de:"Засияет морозь на проспектах длинных,",pron:"Zasiyaet moroz' na prospektakh dlinnykh,",en:"Frost will gleam on the long avenues"},{de:"Опускает город в зимний",pron:"Opuskayet gorod v zimniy",en:"It plunges the city into winter"},{de:"Как скучаю по тебе весной!",pron:"Kak skuchayu po tebe vesnoy!",en:"How I miss you in the spring!"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Лишь зимой, той зимой",pron:"Lish' zimoy, toy zimoy",en:"Only in winter, that winter"},{de:"Так тепло мне было под луной",pron:"Tak teplo mne bylo pod lunoy",en:"I was so warm under the moon"},{de:"Город весь, как в огне",pron:"Gorod ves', kak v ogne",en:"The whole city as if on fire"},{de:"Луна есть, но, жаль, она не греет —",pron:"Luna yest', no, zhal', ona ne greyet —",en:"The moon is there, but sadly it doesn't warm you"},{de:"С ней холодней",pron:"S ney kholodney",en:"With it, it's colder"},{de:"С ней холодней",pron:"S ney kholodney",en:"With it, it's colder"}]},{label:{en:"Verse 2",es:"Estrofa 2"},lines:[{de:"Ночь",pron:"Noch'",en:"Night"},{de:"Посмотри в окно: фонари что скажут?",pron:"Posmotri v okno: fonari chto skazhut?",en:"Look out the window: what do the streetlamps say?"},{de:"Нет",pron:"Net",en:"No"},{de:"Нет, не вижу бликов снежных стразов",pron:"Net, ne vizhu blikov snezhnykh strazov",en:"No, I see no sparkle of snowy rhinestones"},{de:"Выйди из дома, направь взгляд на небеса —",pron:"Viydi iz doma, naprav' vzglyad na nebesa —",en:"Go outside, turn your gaze to the heavens"},{de:"Это не твоя зима",pron:"Eto ne tvoya zima",en:"This is not your winter"},{de:"Представляю, как замёрз с тобой",pron:"Predstavlyayu, kak zamyorz s toboy",en:"I imagine how I would freeze beside you"}]},{label:{en:"Chorus",es:"Coro"},lines:[{de:"Лишь зимой, той зимой",pron:"Lish' zimoy, toy zimoy",en:"Only in winter, that winter"},{de:"Так тепло мне было под луной",pron:"Tak teplo mne bylo pod lunoy",en:"I was so warm under the moon"},{de:"Город весь, как в огне",pron:"Gorod ves', kak v ogne",en:"The whole city as if on fire"},{de:"Луна есть, но, жаль, она не греет —",pron:"Luna yest', no, zhal', ona ne greyet —",en:"The moon is there, but sadly it doesn't warm you"},{de:"С ней холодный",pron:"S ney kholodny",en:"With it, I'm cold"},{de:"С ней холодней",pron:"S ney kholodney",en:"With it, it's colder"}]}],lT=({onHome:n})=>c.jsx($i,{title:"Зимняя",meta:"Molchat Doma — Belaya Polosa (2023)",vocab:aT,lyrics:cT,storageKey:"itiapp-zimnyaya-known",appleMusic:"https://music.apple.com/search?term=Molchat+Doma+Zimnyaya",onHome:n}),Yo=[{id:1,en:"big",es:"grande",ru:"большой",translit:"bol-SHOY",emoji:"🔴"},{id:2,en:"small",es:"pequeño",ru:"маленький",translit:"MA-len-kiy",emoji:"🔵"},{id:3,en:"tall",es:"alto",ru:"высокий",translit:"vy-SO-kiy",emoji:"🏔️"},{id:4,en:"short",es:"bajo/corto",ru:"короткий",translit:"ko-ROT-kiy",emoji:"📏"},{id:5,en:"ugly",es:"feo",ru:"некрасивый",translit:"ne-kra-SI-vy",emoji:"😤"},{id:6,en:"beautiful",es:"hermoso",ru:"красивый",translit:"kra-SI-vy",emoji:"🌸"},{id:7,en:"fast",es:"rápido",ru:"быстрый",translit:"BYS-try",emoji:"⚡"},{id:8,en:"slow",es:"lento",ru:"медленный",translit:"MED-len-ny",emoji:"🐢"},{id:9,en:"old",es:"viejo",ru:"старый",translit:"STA-ry",emoji:"👴"},{id:10,en:"young",es:"joven",ru:"молодой",translit:"mo-lo-DOY",emoji:"🧒"},{id:11,en:"hot",es:"caliente",ru:"горячий",translit:"go-RYA-chiy",emoji:"🔥"},{id:12,en:"cold",es:"frío",ru:"холодный",translit:"kho-LOD-ny",emoji:"❄️"},{id:13,en:"good",es:"bueno",ru:"хороший",translit:"kho-RO-shiy",emoji:"✅"},{id:14,en:"bad",es:"malo",ru:"плохой",translit:"plo-KHOY",emoji:"❌"},{id:15,en:"happy",es:"feliz",ru:"счастливый",translit:"schast-LI-vy",emoji:"😊"},{id:16,en:"sad",es:"triste",ru:"грустный",translit:"GRUST-ny",emoji:"😢"},{id:17,en:"strong",es:"fuerte",ru:"сильный",translit:"SIL-ny",emoji:"💪"},{id:18,en:"weak",es:"débil",ru:"слабый",translit:"SLA-by",emoji:"🍃"},{id:19,en:"new",es:"nuevo",ru:"новый",translit:"NO-vy",emoji:"✨"},{id:20,en:"long",es:"largo",ru:"длинный",translit:"DLIN-ny",emoji:"📐"},{id:21,en:"loud",es:"ruidoso",ru:"громкий",translit:"GROM-kiy",emoji:"📢"},{id:22,en:"quiet",es:"silencioso",ru:"тихий",translit:"TI-khiy",emoji:"🤫"},{id:23,en:"heavy",es:"pesado",ru:"тяжёлый",translit:"tya-ZHYO-ly",emoji:"🏋️"},{id:24,en:"light",es:"ligero",ru:"лёгкий",translit:"LYOG-kiy",emoji:"🪶"}];function Xo(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function uT(n,e){const t=n.ru,s=Xo(e.filter(i=>i.id!==n.id).map(i=>i.ru)).slice(0,3),r=Xo([t,...s]);return{options:r,correctIndex:r.indexOf(t)}}const dT=({language:n,onHome:e})=>{const[t,s]=A.useState({}),{supported:r,speakingId:i,speak:a}=Wn(),l=h=>s(p=>({...p,[h]:!p[h]})),d=(h,p)=>{h.stopPropagation(),a(p.ru,"ru-RU",`ru-adj-${p.id}`)};return c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"acp-subtitle",children:n==="es"?"Haz clic en una tarjeta para ver la traducción en ruso":"Click a card to reveal the Russian translation"}),c.jsx("div",{className:"acp-grid",children:Yo.map(h=>c.jsx("div",{className:`acp-card-wrapper ${t[h.id]?"flipped":""}`,onClick:()=>l(h.id),role:"button","aria-pressed":!!t[h.id],children:c.jsxs("div",{className:"acp-card-inner",children:[c.jsxs("div",{className:"acp-card-front",children:[c.jsx("span",{className:"acp-card-emoji",children:h.emoji}),c.jsx("span",{className:"acp-card-word",children:h.en}),c.jsx("span",{className:"acp-card-sub",children:h.es})]}),c.jsxs("div",{className:"acp-card-back",children:[c.jsx("span",{className:"acp-card-target",children:h.ru}),c.jsx("span",{className:"acp-card-translit",children:h.translit}),r&&c.jsx("button",{className:"acp-tts-btn",onClick:p=>d(p,h),"aria-label":`Pronounce ${h.ru}`,children:i===`ru-adj-${h.id}`?"🔊":"🔈"}),c.jsx("span",{className:"acp-card-hint",children:n==="es"?"Toca para girar":"Tap to flip"})]})]})},h.id))}),c.jsxs("button",{className:"acp-back-btn",onClick:e,children:["← ",n==="es"?"Volver":"Back"]})]})},hT=({language:n,onHome:e})=>{const{supported:t,speakingId:s,speak:r}=Wn(),[i]=A.useState(()=>Xo(Yo)),[a,l]=A.useState(0),[d,h]=A.useState(null),[p,m]=A.useState(0),[y,S]=A.useState(!1),x=i[a],{options:P,correctIndex:R}=A.useMemo(()=>uT(x,Yo),[x]),O=A.useCallback(L=>{d===null&&(h(L),L===R&&m(q=>q+1))},[d,R]),V=()=>{a+1>=i.length?S(!0):(l(L=>L+1),h(null))},z=()=>{l(0),h(null),m(0),S(!1)};if(y)return c.jsxs("div",{className:"acp-results",children:[c.jsxs("div",{className:"acp-results-score",children:[p,"/",i.length]}),c.jsx("p",{className:"acp-results-label",children:n==="es"?"¡Ejercicio completado!":"Exercise complete!"}),c.jsx("button",{className:"acp-results-restart",onClick:z,children:n==="es"?"Volver a intentar":"Try again"}),c.jsxs("button",{className:"acp-back-btn",onClick:e,children:["← ",n==="es"?"Volver":"Back"]})]});const F=d!==null?d===R?n==="es"?"¡Correcto! 🎉":"Correct! 🎉":`${n==="es"?"Incorrecto — la respuesta es":"Incorrect — the answer is"} ${x.ru}`:"";return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"acp-progress-row",children:[c.jsxs("span",{children:[a+1,"/",i.length]}),c.jsx("div",{className:"acp-progress-bar",children:c.jsx("div",{className:"acp-progress-fill",style:{width:`${(a+1)/i.length*100}%`}})}),c.jsxs("span",{children:[p," ✓"]})]}),c.jsxs("div",{className:"acp-quiz-card",children:[c.jsx("div",{className:"acp-quiz-emoji",children:x.emoji}),c.jsx("p",{className:"acp-quiz-prompt",children:n==="es"?"¿Cómo se dice en ruso?":"How do you say in Russian?"}),c.jsx("div",{className:"acp-quiz-word",children:x.en}),c.jsx("div",{className:"acp-quiz-es",children:x.es})]}),c.jsx("div",{className:"acp-quiz-options",children:P.map((L,q)=>{let b="acp-quiz-option";return d!==null&&(q===R?b+=" correct":q===d&&(b+=" wrong")),c.jsx("button",{className:b,onClick:()=>O(q),disabled:d!==null,children:L},q)})}),c.jsx("p",{className:`acp-quiz-feedback ${d!==null?d===R?"correct":"wrong":""}`,children:F}),d!==null&&c.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",alignItems:"center"},children:[t&&c.jsx("button",{className:"acp-tts-btn",onClick:()=>r(x.ru,"ru-RU",`ru-quiz-${x.id}`),"aria-label":`Pronounce ${x.ru}`,children:s===`ru-quiz-${x.id}`?"🔊":"🔈"}),c.jsx("button",{className:"acp-quiz-next-btn",onClick:V,children:a+1>=i.length?n==="es"?"Ver resultados":"See results":n==="es"?"Siguiente":"Next"})]}),c.jsxs("button",{className:"acp-back-btn",onClick:e,children:["← ",n==="es"?"Volver":"Back"]})]})},fT=({onHome:n})=>{const{language:e}=ht(),[t,s]=A.useState("browse");return c.jsx("div",{className:"acp-container",children:c.jsxs("div",{className:"acp-content",children:[c.jsx("header",{className:"acp-header",children:c.jsx("h1",{className:"acp-title",children:e==="es"?"🏷️ Adjetivos Comunes":"🏷️ Common Adjectives"})}),c.jsxs("div",{className:"acp-tabs",children:[c.jsx("button",{className:`acp-tab ${t==="browse"?"active":""}`,onClick:()=>s("browse"),children:e==="es"?"Tarjetas":"Cards"}),c.jsx("button",{className:`acp-tab ${t==="quiz"?"active":""}`,onClick:()=>s("quiz"),children:e==="es"?"Prueba":"Quiz"})]}),t==="browse"?c.jsx(dT,{language:e,onHome:n}):c.jsx(hT,{language:e,onHome:n},t)]})})},pT=()=>{const n=Zo(),e=()=>n("/russian");return c.jsxs(Vu,{children:[c.jsx(yt,{index:!0,element:c.jsx(HE,{})}),c.jsx(yt,{path:"flashcards",element:c.jsx(Bf,{quizId:"russian-vocabulary",onHome:e})}),c.jsx(yt,{path:"grammar",element:c.jsx(GE,{onHome:e})}),c.jsx(yt,{path:"kletka",element:c.jsx(eT,{onHome:e})}),c.jsx(yt,{path:"toska",element:c.jsx(sT,{onHome:e})}),c.jsx(yt,{path:"volny",element:c.jsx(oT,{onHome:e})}),c.jsx(yt,{path:"zimnyaya",element:c.jsx(lT,{onHome:e})}),c.jsx(yt,{path:"adjectives",element:c.jsx(fT,{onHome:e})})]})},mT=()=>c.jsx(fp,{basename:"/ITIApp",children:c.jsx(pE,{children:c.jsx(EE,{children:c.jsx(AE,{children:c.jsxs("div",{className:"app",children:[c.jsx("div",{className:"app-language-selector",children:c.jsx(SE,{})}),c.jsxs(Vu,{children:[c.jsx(yt,{path:"/russian/*",element:c.jsx(pT,{})}),c.jsx(yt,{path:"/*",element:c.jsx(BE,{})})]})]})})})})}),gT="modulepreload",yT=function(n){return"/ITIApp/"+n},ju={},wT=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(d=>{if(d=yT(d),d in ju)return;ju[d]=!0;const h=d.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":gT,h||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((y,S)=>{m.addEventListener("load",y),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function _T(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:a}=n;let l,d;const h=async(m=!0)=>{await d};async function p(){if("serviceWorker"in navigator){if(l=await wT(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(m=>{a==null||a(m)}),!l)return;l.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),l.addEventListener("installed",m=>{m.isUpdate||s==null||s()}),l.register({immediate:e}).then(m=>{i?i("/ITIApp/sw.js",m):r==null||r(m)}).catch(m=>{a==null||a(m)})}}return d=p(),h}const vT=_T({onNeedRefresh(){confirm("New content available. Reload?")&&vT(!0)},onOfflineReady(){console.log("App ready to work offline")}});Ao.createRoot(document.getElementById("root")).render(c.jsx(pp.StrictMode,{children:c.jsx(mT,{})}));
