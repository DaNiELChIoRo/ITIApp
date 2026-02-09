import{r as M,a as wh,R as Ih}from"./react-vendor-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Pc={exports:{}},cr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=M,bh=Symbol.for("react.element"),Sh=Symbol.for("react.fragment"),Ch=Object.prototype.hasOwnProperty,Rh=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ph={key:!0,ref:!0,__self:!0,__source:!0};function Nc(n,e,t){var s,r={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)Ch.call(e,s)&&!Ph.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:bh,type:n,key:o,ref:a,props:r,_owner:Rh.current}}cr.Fragment=Sh;cr.jsx=Nc;cr.jsxs=Nc;Pc.exports=cr;var m=Pc.exports,ii={},ua=wh;ii.createRoot=ua.createRoot,ii.hydrateRoot=ua.hydrateRoot;const qs=({children:n,className:e="",...t})=>m.jsx("div",{className:`card ${e}`,...t,children:n}),Nh=(n,e)=>{const[t,s]=M.useState(()=>{try{const o=window.localStorage.getItem(n);return o?JSON.parse(o):e}catch(o){return console.error(`Error loading localStorage key "${n}":`,o),e}});return[t,o=>{try{const a=o instanceof Function?o(t):o;s(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},xc=()=>{const[n,e]=Nh("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=M.useCallback(r=>{e(o=>{const a=o.totalAttempts+1,l=o.totalCorrect+r.correct,h=Math.round(l/(a*r.total)*100);return{totalAttempts:a,bestScore:Math.max(o.bestScore,r.percentage),averageScore:h,totalCorrect:l,lastAttemptDate:new Date().toISOString()}})},[e]),s=M.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:s}},Zn={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit"},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar"},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},xh=()=>{};var ha={};/**
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
 */const Vc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Vh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],l=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,l=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,p=o>>2,g=(o&3)<<4|l>>4;let T=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(T=64)),s.push(t[p],t[g],t[T],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||l==null||d==null||g==null)throw new kh;const T=o<<2|l>>4;if(s.push(T),d!==64){const S=l<<4&240|d>>2;if(s.push(S),g!==64){const x=d<<6&192|g;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dh=function(n){const e=Vc(n);return kc.encodeByteArray(e,!0)},$s=function(n){return Dh(n).replace(/\./g,"")},Oh=function(n){try{return kc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lh=()=>Mh().__FIREBASE_DEFAULTS__,jh=()=>{if(typeof process>"u"||typeof ha>"u")return;const n=ha.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Oh(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return xh()||Lh()||jh()||Fh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zh=n=>{var e,t;return(t=(e=Ri())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Bh=n=>{const e=zh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Dc=()=>{var n;return(n=Ri())==null?void 0:n.config};/**
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
 */class Uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Pi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $h(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$s(JSON.stringify(t)),$s(JSON.stringify(a)),""].join(".")}const Kn={};function Gh(){const n={prod:[],emulator:[]};for(const e of Object.keys(Kn))Kn[e]?n.emulator.push(e):n.prod.push(e);return n}function Qh(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let da=!1;function Hh(n,e){if(typeof window>"u"||typeof document>"u"||!Pi(window.location.host)||Kn[n]===e||Kn[n]||da)return;Kn[n]=e;function t(T){return`__firebase__banner__${T}`}const s="__firebase__banner",o=Gh().prod.length>0;function a(){const T=document.getElementById(s);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{da=!0,a()},T}function p(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function g(){const T=Qh(s),S=t("text"),x=document.getElementById(S)||document.createElement("span"),k=t("learnmore"),V=document.getElementById(k)||document.createElement("a"),z=t("preprendIcon"),$=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const j=T.element;l(j),p(V,k);const J=d();h($,z),j.append($,x,V,J),document.body.appendChild(j)}o?(x.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Kh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wh(){var e;const n=(e=Ri())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jh(){return!Wh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ni(){try{return typeof indexedDB=="object"}catch{return!1}}function xi(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function Mc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Yh="FirebaseError";class At extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Yh,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Xh(o,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new At(r,l,s)}}function Xh(n,e){return n.replace(Zh,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zh=/\{\$([^}]+)}/g;function es(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(fa(o)&&fa(a)){if(!es(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function fa(n){return n!==null&&typeof n=="object"}/**
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
 */const ed=1e3,td=2,nd=4*60*60*1e3,sd=.5;function ma(n,e=ed,t=td){const s=e*Math.pow(t,n),r=Math.round(sd*s*(Math.random()-.5)*2);return Math.min(nd,s+r)}/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class rd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Uh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(od(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:id(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function id(n){return n===Vt?void 0:n}function od(n){return n.instantiationMode==="EAGER"}/**
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
 */class ad{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const cd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ld=ne.INFO,ud={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},hd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ud[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vi{constructor(e){this.name=e,this._logLevel=ld,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const dd=(n,e)=>e.some(t=>n instanceof t);let pa,ga;function fd(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function md(){return ga||(ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lc=new WeakMap,oi=new WeakMap,jc=new WeakMap,Qr=new WeakMap,ki=new WeakMap;function pd(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ht(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Lc.set(t,n)}).catch(()=>{}),ki.set(e,n),e}function gd(n){if(oi.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});oi.set(n,e)}let ai={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yd(n){ai=n(ai)}function _d(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Hr(this),e,...t);return jc.set(s,e.sort?e.sort():[e]),ht(s)}:md().includes(n)?function(...e){return n.apply(Hr(this),e),ht(Lc.get(this))}:function(...e){return ht(n.apply(Hr(this),e))}}function Ed(n){return typeof n=="function"?_d(n):(n instanceof IDBTransaction&&gd(n),dd(n,fd())?new Proxy(n,ai):n)}function ht(n){if(n instanceof IDBRequest)return pd(n);if(Qr.has(n))return Qr.get(n);const e=Ed(n);return e!==n&&(Qr.set(n,e),ki.set(e,n)),e}const Hr=n=>ki.get(n);function Fc(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),l=ht(a);return s&&a.addEventListener("upgradeneeded",h=>{s(ht(a.result),h.oldVersion,h.newVersion,ht(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const vd=["get","getKey","getAll","getAllKeys","count"],Td=["put","add","delete","clear"],Kr=new Map;function ya(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kr.get(e))return Kr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Td.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vd.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&h.done]))[0]};return Kr.set(e,o),o}yd(n=>({...n,get:(e,t,s)=>ya(e,t)||n.get(e,t,s),has:(e,t)=>!!ya(e,t)||n.has(e,t)}));/**
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
 */class wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Id(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Id(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ci="@firebase/app",_a="0.14.8";/**
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
 */const tt=new Vi("@firebase/app"),Ad="@firebase/app-compat",bd="@firebase/analytics-compat",Sd="@firebase/analytics",Cd="@firebase/app-check-compat",Rd="@firebase/app-check",Pd="@firebase/auth",Nd="@firebase/auth-compat",xd="@firebase/database",Vd="@firebase/data-connect",kd="@firebase/database-compat",Dd="@firebase/functions",Od="@firebase/functions-compat",Md="@firebase/installations",Ld="@firebase/installations-compat",jd="@firebase/messaging",Fd="@firebase/messaging-compat",zd="@firebase/performance",Bd="@firebase/performance-compat",Ud="@firebase/remote-config",qd="@firebase/remote-config-compat",$d="@firebase/storage",Gd="@firebase/storage-compat",Qd="@firebase/firestore",Hd="@firebase/ai",Kd="@firebase/firestore-compat",Wd="firebase",Jd="12.9.0";/**
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
 */const li="[DEFAULT]",Yd={[ci]:"fire-core",[Ad]:"fire-core-compat",[Sd]:"fire-analytics",[bd]:"fire-analytics-compat",[Rd]:"fire-app-check",[Cd]:"fire-app-check-compat",[Pd]:"fire-auth",[Nd]:"fire-auth-compat",[xd]:"fire-rtdb",[Vd]:"fire-data-connect",[kd]:"fire-rtdb-compat",[Dd]:"fire-fn",[Od]:"fire-fn-compat",[Md]:"fire-iid",[Ld]:"fire-iid-compat",[jd]:"fire-fcm",[Fd]:"fire-fcm-compat",[zd]:"fire-perf",[Bd]:"fire-perf-compat",[Ud]:"fire-rc",[qd]:"fire-rc-compat",[$d]:"fire-gcs",[Gd]:"fire-gcs-compat",[Qd]:"fire-fst",[Kd]:"fire-fst-compat",[Hd]:"fire-vertex","fire-js":"fire-js",[Wd]:"fire-js-all"};/**
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
 */const Gs=new Map,Xd=new Map,ui=new Map;function Ea(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gt(n){const e=n.name;if(ui.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,n);for(const t of Gs.values())Ea(t,n);for(const t of Xd.values())Ea(t,n);return!0}function cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ef={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new lr("app","Firebase",ef);/**
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
 */class tf{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const nf=Jd;function zc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:li,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw dt.create("bad-app-name",{appName:String(r)});if(t||(t=Dc()),!t)throw dt.create("no-options");const o=Gs.get(r);if(o){if(es(t,o.options)&&es(s,o.config))return o;throw dt.create("duplicate-app",{appName:r})}const a=new ad(r);for(const h of ui.values())a.addComponent(h);const l=new tf(t,s,a);return Gs.set(r,l),l}function Bc(n=li){const e=Gs.get(n);if(!e&&n===li&&Dc())return zc();if(!e)throw dt.create("no-app",{appName:n});return e}function Qe(n,e,t){let s=Yd[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}gt(new et(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sf="firebase-heartbeat-database",rf=1,ts="firebase-heartbeat-store";let Wr=null;function Uc(){return Wr||(Wr=Fc(sf,rf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),Wr}async function of(n){try{const t=(await Uc()).transaction(ts),s=await t.objectStore(ts).get(qc(n));return await t.done,s}catch(e){if(e instanceof At)tt.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function va(n,e){try{const s=(await Uc()).transaction(ts,"readwrite");await s.objectStore(ts).put(e,qc(n)),await s.done}catch(t){if(t instanceof At)tt.warn(t.message);else{const s=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(s.message)}}}function qc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const af=1024,cf=30;class lf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ta();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>cf){const a=df(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ta(),{heartbeatsToSend:s,unsentEntries:r}=uf(this._heartbeatsCache.heartbeats),o=$s(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return tt.warn(t),""}}}function Ta(){return new Date().toISOString().substring(0,10)}function uf(n,e=af){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),wa(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),wa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ni()?xi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await of(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wa(n){return $s(JSON.stringify({version:2,heartbeats:n})).length}function df(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ff(n){gt(new et("platform-logger",e=>new wd(e),"PRIVATE")),gt(new et("heartbeat",e=>new lf(e),"PRIVATE")),Qe(ci,_a,n),Qe(ci,_a,"esm2020"),Qe("fire-js","")}ff("");var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ft,$c;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.F=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(I,w,A){for(var E=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)E[Z-2]=arguments[Z];return y.prototype[w].apply(I,E)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,y,_){_||(_=0);const I=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)I[w]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(w=0;w<16;++w)I[w]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],w=v.g[2];let A=v.g[3],E;E=y+(A^_&(w^A))+I[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(w^y&(_^w))+I[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=w+(_^A&(y^_))+I[2]+606105819&4294967295,w=A+(E<<17&4294967295|E>>>15),E=_+(y^w&(A^y))+I[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(A^_&(w^A))+I[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(w^y&(_^w))+I[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=w+(_^A&(y^_))+I[6]+2821735955&4294967295,w=A+(E<<17&4294967295|E>>>15),E=_+(y^w&(A^y))+I[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(A^_&(w^A))+I[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(w^y&(_^w))+I[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=w+(_^A&(y^_))+I[10]+4294925233&4294967295,w=A+(E<<17&4294967295|E>>>15),E=_+(y^w&(A^y))+I[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(A^_&(w^A))+I[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(w^y&(_^w))+I[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=w+(_^A&(y^_))+I[14]+2792965006&4294967295,w=A+(E<<17&4294967295|E>>>15),E=_+(y^w&(A^y))+I[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(w^A&(_^w))+I[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^w&(y^_))+I[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(A^y))+I[11]+643717713&4294967295,w=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(w^A))+I[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^A&(_^w))+I[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^w&(y^_))+I[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(A^y))+I[15]+3634488961&4294967295,w=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(w^A))+I[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^A&(_^w))+I[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^w&(y^_))+I[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(A^y))+I[3]+4107603335&4294967295,w=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(w^A))+I[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^A&(_^w))+I[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^w&(y^_))+I[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(A^y))+I[7]+1735328473&4294967295,w=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(w^A))+I[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(_^w^A)+I[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^w)+I[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=w+(A^y^_)+I[11]+1839030562&4294967295,w=A+(E<<16&4294967295|E>>>16),E=_+(w^A^y)+I[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^A)+I[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^w)+I[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=w+(A^y^_)+I[7]+4139469664&4294967295,w=A+(E<<16&4294967295|E>>>16),E=_+(w^A^y)+I[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^A)+I[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^w)+I[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=w+(A^y^_)+I[3]+3572445317&4294967295,w=A+(E<<16&4294967295|E>>>16),E=_+(w^A^y)+I[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^A)+I[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^w)+I[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=w+(A^y^_)+I[15]+530742520&4294967295,w=A+(E<<16&4294967295|E>>>16),E=_+(w^A^y)+I[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(w^(_|~A))+I[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~w))+I[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=w+(y^(A|~_))+I[14]+2878612391&4294967295,w=A+(E<<15&4294967295|E>>>17),E=_+(A^(w|~y))+I[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~A))+I[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~w))+I[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=w+(y^(A|~_))+I[10]+4293915773&4294967295,w=A+(E<<15&4294967295|E>>>17),E=_+(A^(w|~y))+I[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~A))+I[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~w))+I[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=w+(y^(A|~_))+I[6]+2734768916&4294967295,w=A+(E<<15&4294967295|E>>>17),E=_+(A^(w|~y))+I[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~A))+I[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~w))+I[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=w+(y^(A|~_))+I[2]+718787259&4294967295,w=A+(E<<15&4294967295|E>>>17),E=_+(A^(w|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+A&4294967295}s.prototype.v=function(v,y){y===void 0&&(y=v.length);const _=y-this.blockSize,I=this.C;let w=this.h,A=0;for(;A<y;){if(w==0)for(;A<=_;)r(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<y;)if(I[w++]=v.charCodeAt(A++),w==this.blockSize){r(this,I),w=0;break}}else for(;A<y;)if(I[w++]=v[A++],w==this.blockSize){r(this,I),w=0;break}}this.h=w,this.o+=y},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)v[y++]=this.g[_]>>>I&255;return v};function o(v,y){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function a(v,y){this.h=y;const _=[];let I=!0;for(let w=v.length-1;w>=0;w--){const A=v[w]|0;I&&A==y||(_[w]=A,I=!1)}this.g=_}var l={};function h(v){return-128<=v&&v<128?o(v,function(y){return new a([y|0],y<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return V(d(-v));const y=[];let _=1;for(let I=0;v>=_;I++)y[I]=v/_|0,_*=4294967296;return new a(y,0)}function p(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return V(p(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(y,8));let I=g;for(let A=0;A<v.length;A+=8){var w=Math.min(8,v.length-A);const E=parseInt(v.substring(A,A+w),y);w<8?(w=d(Math.pow(y,w)),I=I.j(w).add(d(E))):(I=I.j(_),I=I.add(d(E)))}return I}var g=h(0),T=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();let v=0,y=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(k(this))return"-"+V(this).toString(v);const y=d(Math.pow(v,6));var _=this;let I="";for(;;){const w=J(_,y).g;_=z(_,w.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=w,x(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=z(this,v),k(v)?-1:x(v)?0:1};function V(v){const y=v.g.length,_=[];for(let I=0;I<y;I++)_[I]=~v.g[I];return new a(_,~v.h).add(T)}n.abs=function(){return k(this)?V(this):this},n.add=function(v){const y=Math.max(this.g.length,v.g.length),_=[];let I=0;for(let w=0;w<=y;w++){let A=I+(this.i(w)&65535)+(v.i(w)&65535),E=(A>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);I=E>>>16,A&=65535,E&=65535,_[w]=E<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(v,y){return v.add(V(y))}n.j=function(v){if(x(this)||x(v))return g;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(this.l(S)<0&&v.l(S)<0)return d(this.m()*v.m());const y=this.g.length+v.g.length,_=[];for(var I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let w=0;w<v.g.length;w++){const A=this.i(I)>>>16,E=this.i(I)&65535,Z=v.i(w)>>>16,ae=v.i(w)&65535;_[2*I+2*w]+=E*ae,$(_,2*I+2*w),_[2*I+2*w+1]+=A*ae,$(_,2*I+2*w+1),_[2*I+2*w+1]+=E*Z,$(_,2*I+2*w+1),_[2*I+2*w+2]+=A*Z,$(_,2*I+2*w+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new a(_,0)};function $(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function j(v,y){this.g=v,this.h=y}function J(v,y){if(x(y))throw Error("division by zero");if(x(v))return new j(g,g);if(k(v))return y=J(V(v),y),new j(V(y.g),V(y.h));if(k(y))return y=J(v,V(y)),new j(V(y.g),y.h);if(v.g.length>30){if(k(v)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=y;I.l(v)<=0;)_=D(_),I=D(I);var w=B(_,1),A=B(I,1);for(I=B(I,2),_=B(_,2);!x(I);){var E=A.add(I);E.l(v)<=0&&(w=w.add(_),A=E),I=B(I,1),_=B(_,1)}return y=z(v,w.j(y)),new j(w,y)}for(w=g;v.l(y)>=0;){for(_=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),E=A.j(y);k(E)||E.l(v)>0;)_-=I,A=d(_),E=A.j(y);x(A)&&(A=T),w=w.add(A),v=z(v,E)}return new j(w,v)}n.B=function(v){return J(this,v).h},n.and=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)&v.i(I);return new a(_,this.h&v.h)},n.or=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)|v.i(I);return new a(_,this.h|v.h)},n.xor=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)^v.i(I);return new a(_,this.h^v.h)};function D(v){const y=v.g.length+1,_=[];for(let I=0;I<y;I++)_[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(_,v.h)}function B(v,y){const _=y>>5;y%=32;const I=v.g.length-_,w=[];for(let A=0;A<I;A++)w[A]=y>0?v.i(A+_)>>>y|v.i(A+_+1)<<32-y:v.i(A+_);return new a(w,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,$c=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,ft=a}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gc,$n,Qc,Ls,hi,Hc,Kc,Wc;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vs=="object"&&Vs];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,c){if(c)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in u))break e;u=u[b]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function p(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function g(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,b,R){for(var O=Array(arguments.length-2),W=2;W<arguments.length;W++)O[W-2]=arguments[W];return c.prototype[b].apply(f,O)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function x(i,c){for(let f=1;f<arguments.length;f++){const b=arguments[f];var u=typeof b;if(u=u!="object"?u:b?Array.isArray(b)?"array":u:"null",u=="array"||u=="object"&&typeof b.length=="number"){u=i.length||0;const R=b.length||0;i.length=u+R;for(let O=0;O<R;O++)i[u+O]=b[O]}else i.push(b)}}class k{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(i){a.setTimeout(()=>{throw i},0)}function z(){var i=v;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,u){const f=j.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var j=new k(()=>new J,i=>i.reset());class J{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let D,B=!1,v=new $,y=()=>{const i=Promise.resolve(void 0);D=()=>{i.then(_)}};function _(){for(var i;i=z();){try{i.h.call(i.g)}catch(u){V(u)}var c=j;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}B=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function E(i){return/^[\s\xa0]*$/.test(i)}function Z(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(Z,w),Z.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ae="closure_listenable_"+(Math.random()*1e6|0),ze=0;function Ie(i,c,u,f,b){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=b,this.key=++ze,this.da=this.fa=!1}function he(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ht(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function ps(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function gs(i){const c={};for(const u in i)c[u]=i[u];return c}const En="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ys(i,c){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)i[u]=f[u];for(let R=0;R<En.length;R++)u=En[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function Kt(i){this.src=i,this.g={},this.h=0}Kt.prototype.add=function(i,c,u,f,b){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const O=Tn(i,c,f,b);return O>-1?(c=i[O],u||(c.fa=!1)):(c=new Ie(c,this.src,R,!!f,b),c.fa=u,i.push(c)),c};function vn(i,c){const u=c.type;if(u in i.g){var f=i.g[u],b=Array.prototype.indexOf.call(f,c,void 0),R;(R=b>=0)&&Array.prototype.splice.call(f,b,1),R&&(he(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Tn(i,c,u,f){for(let b=0;b<i.length;++b){const R=i[b];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return b}return-1}var wn="closure_lm_"+(Math.random()*1e6|0),St={};function _s(i,c,u,f,b){if(Array.isArray(c)){for(let R=0;R<c.length;R++)_s(i,c[R],u,f,b);return null}return u=Cn(u),i&&i[ae]?i.J(c,u,l(f)?!!f.capture:!1,b):Cr(i,c,u,!1,f,b)}function Cr(i,c,u,f,b,R){if(!c)throw Error("Invalid event type");const O=l(b)?!!b.capture:!!b;let W=Sn(i);if(W||(i[wn]=W=new Kt(i)),u=W.add(c,u,f,O,R),u.proxy)return u;if(f=In(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)A||(b=O),b===void 0&&(b=!1),i.addEventListener(c.toString(),f,b);else if(i.attachEvent)i.attachEvent(bn(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function In(){function i(u){return c.call(i.src,i.listener,u)}const c=Rr;return i}function Es(i,c,u,f,b){if(Array.isArray(c))for(var R=0;R<c.length;R++)Es(i,c[R],u,f,b);else f=l(f)?!!f.capture:!!f,u=Cn(u),i&&i[ae]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],u=Tn(c,u,f,b),u>-1&&(he(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=Sn(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Tn(c,u,f,b)),(u=i>-1?c[i]:null)&&An(u))}function An(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[ae])vn(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(bn(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Sn(c))?(vn(u,i),u.h==0&&(u.src=null,c[wn]=null)):he(i)}}}function bn(i){return i in St?St[i]:St[i]="on"+i}function Rr(i,c){if(i.da)i=!0;else{c=new Z(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&An(i),i=u.call(f,c)}return i}function Sn(i){return i=i[wn],i instanceof Kt?i:null}var Wt="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cn(i){return typeof i=="function"?i:(i[Wt]||(i[Wt]=function(c){return i.handleEvent(c)}),i[Wt])}function _e(){I.call(this),this.i=new Kt(this),this.M=this,this.G=null}g(_e,I),_e.prototype[ae]=!0,_e.prototype.removeEventListener=function(i,c,u,f){Es(this,i,c,u,f)};function C(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var b=c;c=new w(f,i),ys(c,b)}b=!0;let R,O;if(u)for(O=u.length-1;O>=0;O--)R=c.g=u[O],b=U(R,f,!0,c)&&b;if(R=c.g=i,b=U(R,f,!0,c)&&b,b=U(R,f,!1,c)&&b,u)for(O=0;O<u.length;O++)R=c.g=u[O],b=U(R,f,!1,c)&&b}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)he(u[f]);delete i.g[c],i.h--}}this.G=null},_e.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},_e.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function U(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let R=0;R<c.length;++R){const O=c[R];if(O&&!O.da&&O.capture==u){const W=O.listener,Ee=O.ha||O.src;O.fa&&vn(i.i,O),b=W.call(Ee,f)!==!1&&b}}return b&&!f.defaultPrevented}function K(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function re(i){i.g=K(()=>{i.g=null,i.i&&(i.i=!1,re(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class ee extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:re(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(i){I.call(this),this.h=i,this.g={}}g(fe,I);var De=[];function vs(i){Ht(i.g,function(c,u){this.g.hasOwnProperty(u)&&An(c)},i),i.g={}}fe.prototype.N=function(){fe.Z.N.call(this),vs(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=a.JSON.stringify,Xu=a.JSON.parse,Zu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Eo(){}function vo(){}var Rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nr(){w.call(this,"d")}g(Nr,w);function xr(){w.call(this,"c")}g(xr,w);var Ct={},To=null;function Ts(){return To=To||new _e}Ct.Ia="serverreachability";function wo(i){w.call(this,Ct.Ia,i)}g(wo,w);function Pn(i){const c=Ts();C(c,new wo(c))}Ct.STAT_EVENT="statevent";function Io(i,c){w.call(this,Ct.STAT_EVENT,i),this.stat=c}g(Io,w);function Ve(i){const c=Ts();C(c,new Io(c,i))}Ct.Ja="timingevent";function Ao(i,c){w.call(this,Ct.Ja,i),this.size=c}g(Ao,w);function Nn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function xn(){this.g=!0}xn.prototype.ua=function(){this.g=!1};function eh(i,c,u,f,b,R){i.info(function(){if(i.g)if(R){var O="",W=R.split("&");for(let ie=0;ie<W.length;ie++){var Ee=W[ie].split("=");if(Ee.length>1){const Ae=Ee[0];Ee=Ee[1];const $e=Ae.split("_");O=$e.length>=2&&$e[1]=="type"?O+(Ae+"="+Ee+"&"):O+(Ae+"=redacted&")}}}else O=null;else O=R;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+u+`
`+O})}function th(i,c,u,f,b,R,O){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+u+`
`+R+" "+O})}function Jt(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+sh(i,u)+(f?" "+f:"")})}function nh(i,c){i.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function sh(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var u=R[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let O=1;O<f.length;O++)f[O]=""}}}}return Pr(R)}catch{return c}}var ws={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},So;function Vr(){}g(Vr,Eo),Vr.prototype.g=function(){return new XMLHttpRequest},So=new Vr;function Vn(i){return encodeURIComponent(String(i))}function rh(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function rt(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Co}function Co(){this.i=null,this.g="",this.h=!1}var Ro={},kr={};function Dr(i,c,u){i.M=1,i.A=As(qe(c)),i.u=u,i.R=!0,Po(i,null)}function Po(i,c){i.F=Date.now(),Is(i),i.B=qe(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Uo(u.i,"t",f),i.C=0,u=i.j.L,i.h=new Co,i.g=oa(i.j,u?c:null,!i.u),i.P>0&&(i.O=new ee(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var b="readystatechange";Array.isArray(b)||(b&&(De[0]=b.toString()),b=De);for(let R=0;R<b.length;R++){const O=_s(u,b[R],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=i.J?gs(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Pn(),eh(i.i,i.v,i.B,i.l,i.S,i.u)}rt.prototype.ba=function(i){i=i.target;const c=this.O;c&&at(i)==3?c.j():this.Y(i)},rt.prototype.Y=function(i){try{if(i==this.g)e:{const W=at(this.g),Ee=this.g.ya(),ie=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Wo(this.g)))){this.K||W!=4||Ee==7||(Ee==8||ie<=0?Pn(3):Pn(2)),Or(this);var c=this.g.ca();this.X=c;var u=ih(this);if(this.o=c==200,th(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(f)){var R=f;break t}}R=null}if(i=R)Jt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mr(this,i);else{this.o=!1,this.m=3,Ve(12),Rt(this),kn(this);break e}}if(this.R){i=!0;let Ae;for(;!this.K&&this.C<u.length;)if(Ae=oh(this,u),Ae==kr){W==4&&(this.m=4,Ve(14),i=!1),Jt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==Ro){this.m=4,Ve(15),Jt(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Jt(this.i,this.l,Ae,null),Mr(this,Ae);if(No(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||u.length!=0||this.h.h||(this.m=1,Ve(16),i=!1),this.o=this.o&&i,!i)Jt(this.i,this.l,u,"[Invalid Chunked Response]"),Rt(this),kn(this);else if(u.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),$r(O),O.P=!0,Ve(11))}}else Jt(this.i,this.l,u,null),Mr(this,u);W==4&&Rt(this),this.o&&!this.K&&(W==4?na(this.j,this):(this.o=!1,Is(this)))}else vh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Ve(12)):(this.m=0,Ve(13)),Rt(this),kn(this)}}}catch{}finally{}};function ih(i){if(!No(i))return i.g.la();const c=Wo(i.g);if(c==="")return"";let u="";const f=c.length,b=at(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Rt(i),kn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,u+=i.h.i.decode(c[R],{stream:!(b&&R==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function No(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function oh(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?kr:(u=Number(c.substring(u,f)),isNaN(u)?Ro:(f+=1,f+u>c.length?kr:(c=c.slice(f,f+u),i.C=f+u,c)))}rt.prototype.cancel=function(){this.K=!0,Rt(this)};function Is(i){i.T=Date.now()+i.H,xo(i,i.H)}function xo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Nn(d(i.aa,i),c)}function Or(i){i.D&&(a.clearTimeout(i.D),i.D=null)}rt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(nh(this.i,this.B),this.M!=2&&(Pn(),Ve(17)),Rt(this),this.m=2,kn(this)):xo(this,this.T-i)};function kn(i){i.j.I==0||i.K||na(i.j,i)}function Rt(i){Or(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,vs(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Mr(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Lr(u.h,i))){if(!i.L&&Lr(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Ps(u),Cs(u);else break e;qr(u),Ve(18)}}else u.xa=b[1],0<u.xa-u.K&&b[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Nn(d(u.Va,u),6e3));Do(u.h)<=1&&u.ta&&(u.ta=void 0)}else Nt(u,11)}else if((i.L||u.g==i)&&Ps(u),!E(c))for(b=u.Ba.g.parse(c),c=0;c<b.length;c++){let ie=b[c];const Ae=ie[0];if(!(Ae<=u.K))if(u.K=Ae,ie=ie[1],u.I==2)if(ie[0]=="c"){u.M=ie[1],u.ba=ie[2];const $e=ie[3];$e!=null&&(u.ka=$e,u.j.info("VER="+u.ka));const xt=ie[4];xt!=null&&(u.za=xt,u.j.info("SVER="+u.za));const ct=ie[5];ct!=null&&typeof ct=="number"&&ct>0&&(f=1.5*ct,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const lt=i.g;if(lt){const xs=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var R=f.h;R.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(jr(R,R.h),R.h=null))}if(f.G){const Gr=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Gr&&(f.wa=Gr,ce(f.J,f.G,Gr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var O=i;if(f.na=ia(f,f.L?f.ba:null,f.W),O.L){Oo(f.h,O);var W=O,Ee=f.O;Ee&&(W.H=Ee),W.D&&(Or(W),Is(W)),f.g=O}else ea(f);u.i.length>0&&Rs(u)}else ie[0]!="stop"&&ie[0]!="close"||Nt(u,7);else u.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Nt(u,7):Ur(u):ie[0]!="noop"&&u.l&&u.l.qa(ie),u.A=0)}}Pn(4)}catch{}}var ah=class{constructor(i,c){this.g=i,this.map=c}};function Vo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Do(i){return i.h?1:i.g?i.g.size:0}function Lr(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function jr(i,c){i.g?i.g.add(c):i.h=c}function Oo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Vo.prototype.cancel=function(){if(this.i=Mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Mo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return S(i.i)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let b,R=null;f>=0?(b=i[u].substring(0,f),R=i[u].substring(f+1)):b=i[u],c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function it(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof it?(this.l=i.l,Dn(this,i.j),this.o=i.o,this.g=i.g,On(this,i.u),this.h=i.h,Fr(this,qo(i.i)),this.m=i.m):i&&(c=String(i).match(Lo))?(this.l=!1,Dn(this,c[1]||"",!0),this.o=Mn(c[2]||""),this.g=Mn(c[3]||"",!0),On(this,c[4]),this.h=Mn(c[5]||"",!0),Fr(this,c[6]||"",!0),this.m=Mn(c[7]||"")):(this.l=!1,this.i=new jn(null,this.l))}it.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Ln(c,jo,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Ln(c,jo,!0),"@"),i.push(Vn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Ln(u,u.charAt(0)=="/"?hh:uh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Ln(u,fh)),i.join("")},it.prototype.resolve=function(i){const c=qe(this);let u=!!i.j;u?Dn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)On(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=c.h.lastIndexOf("/");b!=-1&&(f=c.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const R=[];for(let O=0;O<b.length;){const W=b[O++];W=="."?f&&O==b.length&&R.push(""):W==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&O==b.length&&R.push("")):(R.push(W),f=!0)}f=R.join("/")}else f=b}return u?c.h=f:u=i.i.toString()!=="",u?Fr(c,qo(i.i)):u=!!i.m,u&&(c.m=i.m),c};function qe(i){return new it(i)}function Dn(i,c,u){i.j=u?Mn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function On(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Fr(i,c,u){c instanceof jn?(i.i=c,mh(i.i,i.l)):(u||(c=Ln(c,dh)),i.i=new jn(c,i.l))}function ce(i,c,u){i.i.set(c,u)}function As(i){return ce(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Mn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ln(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,lh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var jo=/[#\/\?@]/g,uh=/[#\?:]/g,hh=/[#\?]/g,dh=/[#\?@]/g,fh=/#/g;function jn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Pt(i){i.g||(i.g=new Map,i.h=0,i.i&&ch(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=jn.prototype,n.add=function(i,c){Pt(this),this.i=null,i=Yt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Fo(i,c){Pt(i),c=Yt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function zo(i,c){return Pt(i),c=Yt(i,c),i.g.has(c)}n.forEach=function(i,c){Pt(this),this.g.forEach(function(u,f){u.forEach(function(b){i.call(c,b,f,this)},this)},this)};function Bo(i,c){Pt(i);let u=[];if(typeof c=="string")zo(i,c)&&(u=u.concat(i.g.get(Yt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Pt(this),this.i=null,i=Yt(this,i),zo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Bo(this,i),i.length>0?String(i[0]):c):c};function Uo(i,c,u){Fo(i,c),u.length>0&&(i.i=null,i.g.set(Yt(i,c),S(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const b=Vn(u);u=Bo(this,u);for(let R=0;R<u.length;R++){let O=b;u[R]!==""&&(O+="="+Vn(u[R])),i.push(O)}}return this.i=i.join("&")};function qo(i){const c=new jn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Yt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function mh(i,c){c&&!i.j&&(Pt(i),i.i=null,i.g.forEach(function(u,f){const b=f.toLowerCase();f!=b&&(Fo(this,f),Uo(this,b,u))},i)),i.j=c}function ph(i,c){const u=new xn;if(a.Image){const f=new Image;f.onload=p(ot,u,"TestLoadImage: loaded",!0,c,f),f.onerror=p(ot,u,"TestLoadImage: error",!1,c,f),f.onabort=p(ot,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(ot,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function gh(i,c){const u=new xn,f=new AbortController,b=setTimeout(()=>{f.abort(),ot(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(b),R.ok?ot(u,"TestPingServer: ok",!0,c):ot(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),ot(u,"TestPingServer: error",!1,c)})}function ot(i,c,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function yh(){this.g=new Zu}function zr(i){this.i=i.Sb||null,this.h=i.ab||!1}g(zr,Eo),zr.prototype.g=function(){return new bs(this.i,this.h)};function bs(i,c){_e.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(bs,_e),n=bs.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,zn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$o(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function $o(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Fn(this):zn(this),this.readyState==3&&$o(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Fn(this))},n.Na=function(i){this.g&&(this.response=i,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,zn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function zn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Go(i){let c="";return Ht(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Br(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Go(u),typeof i=="string"?u!=null&&Vn(u):ce(i,c,u))}function me(i){_e.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(me,_e);var _h=/^https?$/i,Eh=["POST","PUT"];n=me.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():So.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Qo(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),b=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Eh,c,void 0)>=0)||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of u)this.g.setRequestHeader(R,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){Qo(this,R)}};function Qo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ho(i),Ss(i)}function Ho(i){i.A||(i.A=!0,C(i,"complete"),C(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,C(this,"complete"),C(this,"abort"),Ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ko(this):this.Xa())},n.Xa=function(){Ko(this)};function Ko(i){if(i.h&&typeof o<"u"){if(i.v&&at(i)==4)setTimeout(i.Ca.bind(i),0);else if(C(i,"readystatechange"),at(i)==4){i.h=!1;try{const R=i.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=R===0){let O=String(i.D).match(Lo)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),f=!_h.test(O?O.toLowerCase():"")}u=f}if(u)C(i,"complete"),C(i,"success");else{i.o=6;try{var b=at(i)>2?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.ca()+"]",Ho(i)}}finally{Ss(i)}}}}function Ss(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||C(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function at(i){return i.g?i.g.readyState:0}n.ca=function(){try{return at(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Xu(c)}};function Wo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function vh(i){const c={};i=(i.g&&at(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(E(i[f]))continue;var u=rh(i[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[b]||[];c[b]=R,R.push(u)}ps(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Jo(i){this.za=0,this.i=[],this.j=new xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bn("baseRetryDelayMs",5e3,i),this.Za=Bn("retryDelaySeedMs",1e4,i),this.Ta=Bn("forwardChannelMaxRetries",2,i),this.va=Bn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Vo(i&&i.concurrentRequestLimit),this.Ba=new yh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Jo.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){Ve(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=ia(this,null,this.W),Rs(this)};function Ur(i){if(Yo(i),i.I==3){var c=i.V++,u=qe(i.J);if(ce(u,"SID",i.M),ce(u,"RID",c),ce(u,"TYPE","terminate"),Un(i,u),c=new rt(i,i.j,c),c.M=2,c.A=As(qe(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=oa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Is(c)}ra(i)}function Cs(i){i.g&&($r(i),i.g.cancel(),i.g=null)}function Yo(i){Cs(i),i.v&&(a.clearTimeout(i.v),i.v=null),Ps(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Rs(i){if(!ko(i.h)&&!i.m){i.m=!0;var c=i.Ea;D||y(),B||(D(),B=!0),v.add(c,i),i.D=0}}function Th(i,c){return Do(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Nn(d(i.Ea,i,c),sa(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const b=new rt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=gs(R),ys(R,this.U)):R=this.U),this.u!==null||this.R||(b.J=R,R=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Zo(this,b,c),u=qe(this.J),ce(u,"RID",i),ce(u,"CVER",22),this.G&&ce(u,"X-HTTP-Session-Id",this.G),Un(this,u),R&&(this.R?c="headers="+Vn(Go(R))+"&"+c:this.u&&Br(u,this.u,R)),jr(this.h,b),this.Ra&&ce(u,"TYPE","init"),this.S?(ce(u,"$req",c),ce(u,"SID","null"),b.U=!0,Dr(b,u,null)):Dr(b,u,c),this.I=2}}else this.I==3&&(i?Xo(this,i):this.i.length==0||ko(this.h)||Xo(this))};function Xo(i,c){var u;c?u=c.l:u=i.V++;const f=qe(i.J);ce(f,"SID",i.M),ce(f,"RID",u),ce(f,"AID",i.K),Un(i,f),i.u&&i.o&&Br(f,i.u,i.o),u=new rt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Zo(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),jr(i.h,u),Dr(u,f,c)}function Un(i,c){i.H&&Ht(i.H,function(u,f){ce(c,f,u)}),i.l&&Ht({},function(u,f){ce(c,f,u)})}function Zo(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var b=i.i;let W=-1;for(;;){const Ee=["count="+u];W==-1?u>0?(W=b[0].g,Ee.push("ofs="+W)):W=0:Ee.push("ofs="+W);let ie=!0;for(let Ae=0;Ae<u;Ae++){var R=b[Ae].g;const $e=b[Ae].map;if(R-=W,R<0)W=Math.max(0,b[Ae].g-100),ie=!1;else try{R="req"+R+"_"||"";try{var O=$e instanceof Map?$e:Object.entries($e);for(const[xt,ct]of O){let lt=ct;l(ct)&&(lt=Pr(ct)),Ee.push(R+xt+"="+encodeURIComponent(lt))}}catch(xt){throw Ee.push(R+"type="+encodeURIComponent("_badmap")),xt}}catch{f&&f($e)}}if(ie){O=Ee.join("&");break e}}O=void 0}return i=i.i.splice(0,u),c.G=i,O}function ea(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;D||y(),B||(D(),B=!0),v.add(c,i),i.A=0}}function qr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Nn(d(i.Da,i),sa(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ta(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Nn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ve(10),Cs(this),ta(this))};function $r(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ta(i){i.g=new rt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=qe(i.na);ce(c,"RID","rpc"),ce(c,"SID",i.M),ce(c,"AID",i.K),ce(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&ce(c,"TO",i.ia),ce(c,"TYPE","xmlhttp"),Un(i,c),i.u&&i.o&&Br(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=As(qe(c)),u.u=null,u.R=!0,Po(u,i)}n.Va=function(){this.C!=null&&(this.C=null,Cs(this),qr(this),Ve(19))};function Ps(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function na(i,c){var u=null;if(i.g==c){Ps(i),$r(i),i.g=null;var f=2}else if(Lr(i.h,c))u=c.G,Oo(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var b=i.D;f=Ts(),C(f,new Ao(f,u)),Rs(i)}else ea(i);else if(b=c.m,b==3||b==0&&c.X>0||!(f==1&&Th(i,c)||f==2&&qr(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),b){case 1:Nt(i,5);break;case 4:Nt(i,10);break;case 3:Nt(i,6);break;default:Nt(i,2)}}}function sa(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function Nt(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const b=!f;f=new it(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Dn(f,"https"),As(f),b?ph(f.toString(),u):gh(f.toString(),u)}else Ve(2);i.I=0,i.l&&i.l.pa(c),ra(i),Yo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function ra(i){if(i.I=0,i.ja=[],i.l){const c=Mo(i.h);(c.length!=0||i.i.length!=0)&&(x(i.ja,c),x(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function ia(i,c,u){var f=u instanceof it?qe(u):new it(u);if(f.g!="")c&&(f.g=c+"."+f.g),On(f,f.u);else{var b=a.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const R=new it(null);f&&Dn(R,f),c&&(R.g=c),b&&On(R,b),u&&(R.h=u),f=R}return u=i.G,c=i.wa,u&&c&&ce(f,u,c),ce(f,"VER",i.ka),Un(i,f),f}function oa(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new me(new zr({ab:u})):new me(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ns(){}Ns.prototype.g=function(i,c){return new Me(i,c)};function Me(i,c){_e.call(this),this.g=new Jo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!E(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Xt(this)}g(Me,_e),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Ur(this.g)},Me.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Pr(i),i=u);c.i.push(new ah(c.Ya++,i)),c.I==3&&Rs(c)},Me.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,Me.Z.N.call(this)};function ca(i){Nr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(ca,Nr);function la(){xr.call(this),this.status=1}g(la,xr);function Xt(i){this.g=i}g(Xt,aa),Xt.prototype.ra=function(){C(this.g,"a")},Xt.prototype.qa=function(i){C(this.g,new ca(i))},Xt.prototype.pa=function(i){C(this.g,new la)},Xt.prototype.oa=function(){C(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Wc=function(){return new Ns},Kc=function(){return Ts()},Hc=Ct,hi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,Ls=ws,bo.COMPLETE="complete",Qc=bo,vo.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",_e.prototype.listen=_e.prototype.J,$n=vo,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,Gc=me}).apply(typeof Vs<"u"?Vs:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
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
 */let fn="12.9.0";function mf(n){fn=n}/**
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
 */const Mt=new Vi("@firebase/firestore");function Zt(){return Mt.logLevel}function L(n,...e){if(Mt.logLevel<=ne.DEBUG){const t=e.map(Di);Mt.debug(`Firestore (${fn}): ${n}`,...t)}}function nt(n,...e){if(Mt.logLevel<=ne.ERROR){const t=e.map(Di);Mt.error(`Firestore (${fn}): ${n}`,...t)}}function Lt(n,...e){if(Mt.logLevel<=ne.WARN){const t=e.map(Di);Mt.warn(`Firestore (${fn}): ${n}`,...t)}}function Di(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Jc(n,s,t)}function Jc(n,e,t){let s=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw nt(s),new Error(s)}function se(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Jc(e,r,s)}function H(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Yc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class gf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yf{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ze,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},l=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ze)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string",31837,{l:s}),new Yc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class _f{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ef{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new _f(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Aa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const s=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Aa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Aa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Oi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Tf(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function Y(n,e){return n<e?-1:n>e?1:0}function di(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Jr(r)===Jr(o)?Y(r,o):Jr(r)?1:-1}return Y(n.length,e.length)}const wf=55296,If=57343;function Jr(n){const e=n.charCodeAt(0);return e>=wf&&e<=If}function cn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const ba="__name__";class Ge{constructor(e,t,s){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&G(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=Ge.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return Y(e.length,t.length)}static compareSegments(e,t){const s=Ge.isNumericId(e),r=Ge.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ge.extractNumericId(e).compare(Ge.extractNumericId(t)):di(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ft.fromString(e.substring(4,e.length-2))}}class le extends Ge{construct(e,t,s){return new le(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Af=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends Ge{construct(e,t,s){return new Ce(e,t,s)}static isValidIdentifier(e){return Af.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ba}static keyField(){return new Ce([ba])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(o(),r++)}if(o(),a)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(le.fromString(e))}static fromName(e){return new q(le.fromString(e).popFirst(5))}static empty(){return new q(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new le(e.slice()))}}/**
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
 */function Xc(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bf(n,e,t,s){if(e===!0&&s===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sa(n){if(!q.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ca(n){if(q.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Mi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mi(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ye(n,e){const t={typeString:n};return e&&(t.value=e),t}function ls(n,e){if(!Zc(n))throw new F(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new F(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ra=-62135596800,Pa=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Pa);return new ue(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ra)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pa}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ls(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ra;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:ye("string",ue._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ue(0,0))}static max(){return new Q(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ns=-1;function Sf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new ue(t+1,0):new ue(t,s));return new _t(r,q.empty(),e)}function Cf(n){return new _t(n.readTime,n.key,ns)}class _t{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _t(Q.min(),q.empty(),ns)}static max(){return new _t(Q.max(),q.empty(),ns)}}function Rf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Pf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mn(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Pf)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,s)=>{t(e)})}static reject(e){return new P((t,s)=>{s(e)})}static waitFor(e){return new P((t,s)=>{let r=0,o=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++o,a&&o===r&&t()},h=>s(h))}),a=!0,o===r&&t()})}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next(r=>r?P.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,o)=>{s.push(t.call(this,r,o))}),this.waitFor(s)}static mapArray(e,t){return new P((s,r)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++l,l===o&&s(a)},p=>r(p))}})}static doWhile(e,t){return new P((s,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):s()};o()})}}function xf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ur{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ur.ce=-1;/**
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
 */const Li=-1;function hr(n){return n==null}function Qs(n){return n===0&&1/n==-1/0}function Vf(n){return typeof n=="number"&&Number.isInteger(n)&&!Qs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const el="";function kf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Na(e)),e=Df(n.get(t),e);return Na(e)}function Df(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case el:t+="";break;default:t+=o}}return t}function Na(n){return n+el+""}/**
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
 */function xa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=o??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new Se(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(e){return new Va(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class Va{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Be([])}unionWith(e){let t=new we(Ce.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new nl("Invalid base64 string: "+o):o}}(e);return new Re(t)}static fromUint8Array(e){const t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Of=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=Of.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vt(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */const sl="server_timestamp",rl="__type__",il="__previous_value__",ol="__local_write_time__";function ji(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[rl])==null?void 0:s.stringValue)===sl}function dr(n){const e=n.mapValue.fields[il];return ji(e)?dr(e):e}function ss(n){const e=Et(n.mapValue.fields[ol].timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class Mf{constructor(e,t,s,r,o,a,l,h,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=g}}const Hs="(default)";class rs{constructor(e,t){this.projectId=e,this.database=t||Hs}static empty(){return new rs("","")}get isDefaultDatabase(){return this.database===Hs}isEqual(e){return e instanceof rs&&e.projectId===this.projectId&&e.database===this.database}}function Lf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rs(n.options.projectId,e)}/**
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
 */const al="__type__",jf="__max__",Ds={mapValue:{}},cl="__vector__",Ks="value";function Tt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ji(n)?4:zf(n)?9007199254740991:Ff(n)?10:11:G(28295,{value:n})}function Ye(n,e){if(n===e)return!0;const t=Tt(n);if(t!==Tt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ss(n).isEqual(ss(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Et(r.timestampValue),l=Et(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return vt(r.bytesValue).isEqual(vt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return pe(r.geoPointValue.latitude)===pe(o.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return pe(r.integerValue)===pe(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=pe(r.doubleValue),l=pe(o.doubleValue);return a===l?Qs(a)===Qs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return cn(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},l=o.mapValue.fields||{};if(xa(a)!==xa(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ye(a[h],l[h])))return!1;return!0}(n,e);default:return G(52216,{left:n})}}function is(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Tt(n),s=Tt(e);if(t!==s)return Y(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=pe(o.integerValue||o.doubleValue),h=pe(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return ka(n.timestampValue,e.timestampValue);case 4:return ka(ss(n),ss(e));case 5:return di(n.stringValue,e.stringValue);case 6:return function(o,a){const l=vt(o),h=vt(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=Y(l[d],h[d]);if(p!==0)return p}return Y(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=Y(pe(o.latitude),pe(a.latitude));return l!==0?l:Y(pe(o.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Da(n.arrayValue,e.arrayValue);case 10:return function(o,a){var T,S,x,k;const l=o.fields||{},h=a.fields||{},d=(T=l[Ks])==null?void 0:T.arrayValue,p=(S=h[Ks])==null?void 0:S.arrayValue,g=Y(((x=d==null?void 0:d.values)==null?void 0:x.length)||0,((k=p==null?void 0:p.values)==null?void 0:k.length)||0);return g!==0?g:Da(d,p)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Ds.mapValue&&a===Ds.mapValue)return 0;if(o===Ds.mapValue)return 1;if(a===Ds.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let g=0;g<h.length&&g<p.length;++g){const T=di(h[g],p[g]);if(T!==0)return T;const S=ln(l[h[g]],d[p[g]]);if(S!==0)return S}return Y(h.length,p.length)}(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function ka(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Et(n),s=Et(e),r=Y(t.seconds,s.seconds);return r!==0?r:Y(t.nanos,s.nanos)}function Da(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=ln(t[r],s[r]);if(o)return o}return Y(t.length,s.length)}function un(n){return fi(n)}function fi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Et(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=fi(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${fi(t.fields[a])}`;return r+"}"}(n.mapValue):G(61005,{value:n})}function js(n){switch(Tt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dr(n);return e?16+js(e):16;case 5:return 2*n.stringValue.length;case 6:return vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,o)=>r+js(o),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Bt(s.fields,(o,a)=>{r+=o.length+js(a)}),r}(n.mapValue);default:throw G(13486,{value:n})}}function mi(n){return!!n&&"integerValue"in n}function Fi(n){return!!n&&"arrayValue"in n}function Oa(n){return!!n&&"nullValue"in n}function Ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fs(n){return!!n&&"mapValue"in n}function Ff(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[al])==null?void 0:s.stringValue)===cl}function Wn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Wn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(n.arrayValue.values[t]);return e}return{...n}}function zf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jf}/**
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
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=Ce.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Wn(a):r.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Fs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Bt(t,(r,o)=>e[r]=o);for(const r of s)delete e[r]}clone(){return new je(Wn(this.value))}}function ll(n){const e=[];return Bt(n.fields,(t,s)=>{const r=new Ce([t]);if(Fs(s)){const o=ll(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new Be(e)}/**
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
 */class xe{constructor(e,t,s,r,o,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,Q.min(),Q.min(),Q.min(),je.empty(),0)}static newFoundDocument(e,t,s,r){return new xe(e,1,t,Q.min(),s,r,0)}static newNoDocument(e,t){return new xe(e,2,t,Q.min(),Q.min(),je.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,Q.min(),Q.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ws{constructor(e,t){this.position=e,this.inclusive=t}}function La(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=q.comparator(q.fromName(a.referenceValue),t.key):s=ln(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function ja(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Js{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ul{}class ve extends ul{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qf(e,t,s):t==="array-contains"?new Qf(e,s):t==="in"?new Hf(e,s):t==="not-in"?new Kf(e,s):t==="array-contains-any"?new Wf(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new $f(e,s):new Gf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ln(t,this.value)):t!==null&&Tt(this.value)===Tt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends ul{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xe(e,t)}matches(e){return hl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hl(n){return n.op==="and"}function dl(n){return Uf(n)&&hl(n)}function Uf(n){for(const e of n.filters)if(e instanceof Xe)return!1;return!0}function pi(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+un(n.value);if(dl(n))return n.filters.map(e=>pi(e)).join(",");{const e=n.filters.map(t=>pi(t)).join(",");return`${n.op}(${e})`}}function fl(n,e){return n instanceof ve?function(s,r){return r instanceof ve&&s.op===r.op&&s.field.isEqual(r.field)&&Ye(s.value,r.value)}(n,e):n instanceof Xe?function(s,r){return r instanceof Xe&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((o,a,l)=>o&&fl(a,r.filters[l]),!0):!1}(n,e):void G(19439)}function ml(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(n):n instanceof Xe?function(t){return t.op.toString()+" {"+t.getFilters().map(ml).join(" ,")+"}"}(n):"Filter"}class qf extends ve{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class $f extends ve{constructor(e,t){super(e,"in",t),this.keys=pl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gf extends ve{constructor(e,t){super(e,"not-in",t),this.keys=pl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pl(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>q.fromName(s.referenceValue))}class Qf extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fi(t)&&is(t.arrayValue,this.value)}}class Hf extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&is(this.value.arrayValue,t)}}class Kf extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!is(this.value.arrayValue,t)}}class Wf extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>is(this.value.arrayValue,s))}}/**
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
 */class Jf{constructor(e,t=null,s=[],r=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Fa(n,e=null,t=[],s=[],r=null,o=null,a=null){return new Jf(n,e,t,s,r,o,a)}function zi(n){const e=H(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>pi(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),hr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>un(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>un(s)).join(",")),e.Te=t}return e.Te}function Bi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ja(n.startAt,e.startAt)&&ja(n.endAt,e.endAt)}function gi(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class fr{constructor(e,t=null,s=[],r=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Yf(n,e,t,s,r,o,a,l){return new fr(n,e,t,s,r,o,a,l)}function Ui(n){return new fr(n)}function za(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xf(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zf(n){return n.collectionGroup!==null}function Jn(n){const e=H(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new we(Ce.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Js(o,s))}),t.has(Ce.keyField().canonicalString())||e.Ie.push(new Js(Ce.keyField(),s))}return e.Ie}function He(n){const e=H(n);return e.Ee||(e.Ee=em(e,Jn(n))),e.Ee}function em(n,e){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new Js(r.field,o)});const t=n.endAt?new Ws(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ws(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function yi(n,e,t){return new fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mr(n,e){return Bi(He(n),He(e))&&n.limitType===e.limitType}function gl(n){return`${zi(He(n))}|lt:${n.limitType}`}function en(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>ml(r)).join(", ")}]`),hr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>un(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>un(r)).join(",")),`Target(${s})`}(He(n))}; limitType=${n.limitType})`}function pr(n,e){return e.isFoundDocument()&&function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):q.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,e)&&function(s,r){for(const o of Jn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,l,h){const d=La(a,l,h);return a.inclusive?d<=0:d<0}(s.startAt,Jn(s),r)||s.endAt&&!function(a,l,h){const d=La(a,l,h);return a.inclusive?d>=0:d>0}(s.endAt,Jn(s),r))}(n,e)}function tm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(e,t)=>{let s=!1;for(const r of Jn(n)){const o=nm(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function nm(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?ln(h,d):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
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
 */class Ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,s)=>{for(const[r,o]of s)e(r,o)})}isEmpty(){return tl(this.inner)}size(){return this.innerSize}}/**
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
 */const sm=new de(q.comparator);function st(){return sm}const _l=new de(q.comparator);function Gn(...n){let e=_l;for(const t of n)e=e.insert(t.key,t);return e}function El(n){let e=_l;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function kt(){return Yn()}function vl(){return Yn()}function Yn(){return new Ut(n=>n.toString(),(n,e)=>n.isEqual(e))}const rm=new de(q.comparator),im=new we(q.comparator);function X(...n){let e=im;for(const t of n)e=e.add(t);return e}const om=new we(Y);function am(){return om}/**
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
 */function qi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function Tl(n){return{integerValue:""+n}}function cm(n,e){return Vf(e)?Tl(e):qi(n,e)}/**
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
 */class gr{constructor(){this._=void 0}}function lm(n,e,t){return n instanceof Ys?function(r,o){const a={fields:{[rl]:{stringValue:sl},[ol]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&ji(o)&&(o=dr(o)),o&&(a.fields[il]=o),{mapValue:a}}(t,e):n instanceof os?Il(n,e):n instanceof as?Al(n,e):function(r,o){const a=wl(r,o),l=Ba(a)+Ba(r.Ae);return mi(a)&&mi(r.Ae)?Tl(l):qi(r.serializer,l)}(n,e)}function um(n,e,t){return n instanceof os?Il(n,e):n instanceof as?Al(n,e):t}function wl(n,e){return n instanceof Xs?function(s){return mi(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class Ys extends gr{}class os extends gr{constructor(e){super(),this.elements=e}}function Il(n,e){const t=bl(e);for(const s of n.elements)t.some(r=>Ye(r,s))||t.push(s);return{arrayValue:{values:t}}}class as extends gr{constructor(e){super(),this.elements=e}}function Al(n,e){let t=bl(e);for(const s of n.elements)t=t.filter(r=>!Ye(r,s));return{arrayValue:{values:t}}}class Xs extends gr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ba(n){return pe(n.integerValue||n.doubleValue)}function bl(n){return Fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hm(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof os&&r instanceof os||s instanceof as&&r instanceof as?cn(s.elements,r.elements,Ye):s instanceof Xs&&r instanceof Xs?Ye(s.Ae,r.Ae):s instanceof Ys&&r instanceof Ys}(n.transform,e.transform)}class dm{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yr{}function Sl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $i(n.key,Ke.none()):new us(n.key,n.data,Ke.none());{const t=n.data,s=je.empty();let r=new we(Ce.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new qt(n.key,s,new Be(r.toArray()),Ke.none())}}function fm(n,e,t){n instanceof us?function(r,o,a){const l=r.value.clone(),h=qa(r.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(r,o,a){if(!zs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const l=qa(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Cl(r)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Xn(n,e,t,s){return n instanceof us?function(o,a,l,h){if(!zs(o.precondition,a))return l;const d=o.value.clone(),p=$a(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof qt?function(o,a,l,h){if(!zs(o.precondition,a))return l;const d=$a(o.fieldTransforms,h,a),p=a.data;return p.setAll(Cl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(o,a,l){return zs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function mm(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=wl(s.transform,r||null);o!=null&&(t===null&&(t=je.empty()),t.set(s.field,o))}return t||null}function Ua(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&cn(s,r,(o,a)=>hm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class us extends yr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qt extends yr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function qa(n,e,t){const s=new Map;se(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,l=e.data.field(o.field);s.set(o.field,um(a,l,t[r]))}return s}function $a(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,lm(o,a,e))}return s}class $i extends yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pm extends yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gm{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&fm(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Xn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Xn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=vl();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(r.key)?null:l;const h=Sl(a,l);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&cn(this.mutations,e.mutations,(t,s)=>Ua(t,s))&&cn(this.baseMutations,e.baseMutations,(t,s)=>Ua(t,s))}}class Gi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){se(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return rm}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Gi(e,t,s,r)}}/**
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
 */class ym{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _m{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ge,te;function Em(n){switch(n){case N.OK:return G(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function Rl(n){if(n===void 0)return nt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ge.OK:return N.OK;case ge.CANCELLED:return N.CANCELLED;case ge.UNKNOWN:return N.UNKNOWN;case ge.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ge.INTERNAL:return N.INTERNAL;case ge.UNAVAILABLE:return N.UNAVAILABLE;case ge.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ge.NOT_FOUND:return N.NOT_FOUND;case ge.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ge.ABORTED:return N.ABORTED;case ge.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ge.DATA_LOSS:return N.DATA_LOSS;default:return G(39323,{code:n})}}(te=ge||(ge={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vm(){return new TextEncoder}/**
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
 */const Tm=new ft([4294967295,4294967295],0);function Ga(n){const e=vm().encode(n),t=new $c;return t.update(e),new Uint8Array(t.digest())}function Qa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ft([t,s],0),new ft([r,o],0)]}class Qi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Qn(`Invalid padding: ${t}`);if(s<0)throw new Qn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Qn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Qn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ft.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(ft.fromNumber(s)));return r.compare(Tm)===1&&(r=new ft([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ga(e),[s,r]=Qa(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Qi(o,r,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Ga(e),[s,r]=Qa(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _r{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new _r(Q.min(),r,new de(Y),st(),X())}}class hs{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hs(s,t,X(),X(),X())}}/**
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
 */class Bs{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Pl{constructor(e,t){this.targetId=e,this.Ce=t}}class Nl{constructor(e,t,s=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ha{constructor(){this.ve=0,this.Fe=Ka(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),s=X();return this.Fe.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:G(38017,{changeType:o})}}),new hs(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Ka()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wm{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.He=Os(),this.Je=Os(),this.Ze=new de(Y)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(gi(o))if(s===0){const a=new q(o.path);this.et(t,a,xe.newNoDocument(a,Q.min()))}else se(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,l;try{a=vt(s).toUint8Array()}catch(h){if(h instanceof nl)return Lt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Qi(a,r,o)}catch(h){return Lt(h instanceof Qn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&gi(l.target)){const h=new q(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,xe.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}});let s=X();this.Je.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const r=new _r(e,t,this.Ze,this.je,s);return this.je=st(),this.He=Os(),this.Je=Os(),this.Ze=new de(Y),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ha,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new we(Y),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new we(Y),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ha),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Os(){return new de(q.comparator)}function Ka(){return new de(q.comparator)}const Im={asc:"ASCENDING",desc:"DESCENDING"},Am={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bm={and:"AND",or:"OR"};class Sm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _i(n,e){return n.useProto3Json||hr(e)?e:{value:e}}function Zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cm(n,e){return Zs(n,e.toTimestamp())}function We(n){return se(!!n,49232),Q.fromTimestamp(function(t){const s=Et(t);return new ue(s.seconds,s.nanos)}(n))}function Hi(n,e){return Ei(n,e).canonicalString()}function Ei(n,e){const t=function(r){return new le(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vl(n){const e=le.fromString(n);return se(Ll(e),10190,{key:e.toString()}),e}function vi(n,e){return Hi(n.databaseId,e.path)}function Yr(n,e){const t=Vl(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Dl(t))}function kl(n,e){return Hi(n.databaseId,e)}function Rm(n){const e=Vl(n);return e.length===4?le.emptyPath():Dl(e)}function Ti(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dl(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wa(n,e,t){return{name:vi(n,e),fields:t.value.mapValue.fields}}function Pm(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(se(p===void 0||typeof p=="string",58123),Re.fromBase64String(p||"")):(se(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Re.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?N.UNKNOWN:Rl(d.code);return new F(p,d.message||"")}(a);t=new Nl(s,r,o,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Yr(n,s.document.name),o=We(s.document.updateTime),a=s.document.createTime?We(s.document.createTime):Q.min(),l=new je({mapValue:{fields:s.document.fields}}),h=xe.newFoundDocument(r,o,a,l),d=s.targetIds||[],p=s.removedTargetIds||[];t=new Bs(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Yr(n,s.document),o=s.readTime?We(s.readTime):Q.min(),a=xe.newNoDocument(r,o),l=s.removedTargetIds||[];t=new Bs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Yr(n,s.document),o=s.removedTargetIds||[];t=new Bs([],o,r,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new _m(r,o),l=s.targetId;t=new Pl(l,a)}}return t}function Nm(n,e){let t;if(e instanceof us)t={update:Wa(n,e.key,e.value)};else if(e instanceof $i)t={delete:vi(n,e.key)};else if(e instanceof qt)t={update:Wa(n,e.key,e.data),updateMask:Fm(e.fieldMask)};else{if(!(e instanceof pm))return G(16599,{dt:e.type});t={verify:vi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,a){const l=a.transform;if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof os)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof as)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:Cm(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G(27497)}(n,e.precondition)),t}function xm(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map(t=>function(r,o){let a=r.updateTime?We(r.updateTime):We(o);return a.isEqual(Q.min())&&(a=We(o)),new dm(a,r.transformResults||[])}(t,e))):[]}function Vm(n,e){return{documents:[kl(n,e.path)]}}function km(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=kl(n,r);const o=function(d){if(d.length!==0)return Ml(Xe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:tn(T.field),direction:Mm(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=_i(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function Dm(n){let e=Rm(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){se(s===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(g){const T=Ol(g);return T instanceof Xe&&dl(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(T=>function(x){return new Js(nn(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(g){let T;return T=typeof g=="object"?g.value:g,hr(T)?null:T}(t.limit));let h=null;t.startAt&&(h=function(g){const T=!!g.before,S=g.values||[];return new Ws(S,T)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const T=!g.before,S=g.values||[];return new Ws(S,T)}(t.endAt)),Yf(e,r,a,o,l,"F",h,d)}function Om(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ol(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=nn(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=nn(t.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=nn(t.unaryFilter.field);return ve.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(nn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xe.create(t.compositeFilter.filters.map(s=>Ol(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function Mm(n){return Im[n]}function Lm(n){return Am[n]}function jm(n){return bm[n]}function tn(n){return{fieldPath:n.canonicalString()}}function nn(n){return Ce.fromServerFormat(n.fieldPath)}function Ml(n){return n instanceof ve?function(t){if(t.op==="=="){if(Ma(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NAN"}};if(Oa(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ma(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NOT_NAN"}};if(Oa(t.value))return{unaryFilter:{field:tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(t.field),op:Lm(t.op),value:t.value}}}(n):n instanceof Xe?function(t){const s=t.getFilters().map(r=>Ml(r));return s.length===1?s[0]:{compositeFilter:{op:jm(t.op),filters:s}}}(n):G(54877,{filter:n})}function Fm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ll(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function jl(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class ut{constructor(e,t,s,r,o=Q.min(),a=Q.min(),l=Re.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zm{constructor(e){this.yt=e}}function Bm(n){const e=Dm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yi(e,e.limit,"L"):e}/**
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
 */class Um{constructor(){this.Sn=new qm}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(_t.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class qm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new we(le.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new we(le.comparator)).toArray()}}/**
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
 */const Ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fl=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Fl,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class hn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new hn(0)}static ar(){return new hn(-1)}}/**
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
 */const Ya="LruGarbageCollector",$m=1048576;function Xa([n,e],[t,s]){const r=Y(n,t);return r===0?Y(e,s):r}class Gm{constructor(e){this.Pr=e,this.buffer=new we(Xa),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xa(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Qm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(Ya,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?L(Ya,"Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Ar(3e5)})}}class Hm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ur.ce);const s=new Gm(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ja)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ja):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,l=Date.now(),this.removeTargets(e,s,t))).next(g=>(o=g,h=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(d=Date.now(),Zt()<=ne.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:g})))}}function Km(n,e){return new Hm(n,e)}/**
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
 */class Wm{constructor(){this.changes=new Ut(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ym{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Xn(s.mutation,r,Be.empty(),ue.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,X()).next(()=>s))}getLocalViewOfDocuments(e,t,s=X()){const r=kt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(o=>{let a=Gn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=kt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,X()))}populateOverlays(e,t,s){const r=[];return s.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,r){let o=st();const a=Yn(),l=function(){return Yn()}();return t.forEach((h,d)=>{const p=s.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof qt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Xn(p.mutation,d,p.mutation.getFieldMask(),ue.now())):a.set(d.key,Be.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new Jm(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const s=Yn();let r=new de((a,l)=>a-l),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=s.get(h)||Be.empty();p=l.applyToLocalView(d,p),s.set(h,p);const g=(r.get(l.batchId)||X()).add(h);r=r.insert(l.batchId,g)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,g=vl();p.forEach(T=>{if(!o.has(T)){const S=Sl(t.get(T),s.get(T));S!==null&&g.set(T,S),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return Xf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):P.resolve(kt());let l=ns,h=o;return a.next(d=>P.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{h=h.insert(p,T)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,X())).next(p=>({batchId:l,changes:El(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(s=>{let r=Gn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Gn();return this.indexManager.getCollectionParents(e,o).next(l=>P.forEach(l,h=>{const d=function(g,T){return new fr(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(p=>{p.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,xe.newInvalidDocument(p)))});let l=Gn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Xn(p.mutation,d,Be.empty(),ue.now()),pr(t,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class Xm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:We(r.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:Bm(r.bundledQuery),readTime:We(r.readTime)}}(t)),P.resolve()}}/**
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
 */class Zm{constructor(){this.overlays=new de(q.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=kt();return P.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&s.set(r,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,o)=>{this.bt(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=kt(),o=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new de((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let p=o.get(d.largestBatchId);p===null&&(p=kt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=kt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=r)););return P.resolve(l)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new ym(t,s));let o=this.Lr.get(t);o===void 0&&(o=X(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
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
 */class ep{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Ki{constructor(){this.kr=new we(be.Kr),this.qr=new we(be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new be(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new be(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new q(new le([])),s=new be(t,e),r=new be(t,e+1),o=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new q(new le([])),s=new be(t,e),r=new be(t,e+1);let o=X();return this.qr.forEachInRange([s,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new be(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return q.comparator(e.key,t.key)||Y(e.Hr,t.Hr)}static Ur(e,t){return Y(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class tp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new we(be.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gm(o,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Jr=this.Jr.add(new be(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Li:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new be(t,0),r=new be(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([s,r],a=>{const l=this.Zr(a.Hr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new we(Y);return t.forEach(r=>{const o=new be(r,0),a=new be(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],l=>{s=s.add(l.Hr)})}),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;q.isDocumentKey(o)||(o=o.child(""));const a=new be(new q(o),0);let l=new we(Y);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(l=l.add(h.Hr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){se(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,r=>{const o=new be(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new be(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class np{constructor(e){this.ti=e,this.docs=function(){return new de(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let s=st();return t.forEach(r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():xe.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=st();const a=t.path,l=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Rf(Cf(p),s)<=0||(r.has(p.key)||pr(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,s,r){G(9500)}ni(e,t){return P.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new sp(this)}getSize(e){return P.resolve(this.size)}}class sp extends Wm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class rp{constructor(e){this.persistence=e,this.ri=new Ut(t=>zi(t),Bi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new Ki,this.targetCount=0,this.oi=hn._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new hn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),P.waitFor(o).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class zl{constructor(e,t){this._i={},this.overlays={},this.ai=new ur(0),this.ui=!1,this.ui=!0,this.ci=new ep,this.referenceDelegate=e(this),this.li=new rp(this),this.indexManager=new Um,this.remoteDocumentCache=function(r){return new np(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new zm(t),this.Pi=new Xm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new tp(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const r=new ip(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(o=>this.referenceDelegate.Ii(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ei(e,t){return P.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class ip extends Nf{constructor(e){super(),this.currentSequenceNumber=e}}class Wi{constructor(e){this.persistence=e,this.Ri=new Ki,this.Ai=null}static Vi(e){return new Wi(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.di.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,s=>{const r=q.fromPath(s);return this.mi(e,r).next(o=>{o||t.removeEntry(r,Q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class er{constructor(e,t){this.persistence=e,this.fi=new Ut(s=>kf(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Km(this,t)}static Vi(e,t){return new er(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(o=>o?P.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(l=>{l||(s++,o.removeEntry(a,Q.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=js(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ji{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=X(),r=X();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Ji(e,t.fromCache,s,r)}}/**
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
 */class op{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ap{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Jh()?8:xf(Kh())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,r,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new op;return this.ys(e,t,a).next(l=>{if(o.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>o.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Zt()<=ne.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",en(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Zt()<=ne.DEBUG&&L("QueryEngine","Query:",en(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Zt()<=ne.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",en(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):P.resolve())}gs(e,t){if(za(t))return P.resolve(null);let s=He(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=yi(t,null,"F"),s=He(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=X(...o);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(h=>{const d=this.bs(t,l);return this.Ss(t,d,a,h.readTime)?this.gs(e,yi(t,null,"F")):this.Ds(e,d,t,h)}))})))}ps(e,t,s,r){return za(t)||r.isEqual(Q.min())?P.resolve(null):this.fs.getDocuments(e,s).next(o=>{const a=this.bs(t,o);return this.Ss(t,a,s,r)?P.resolve(null):(Zt()<=ne.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),en(t)),this.Ds(e,a,t,Sf(r,ns)).next(l=>l))})}bs(e,t){let s=new we(yl(e));return t.forEach((r,o)=>{pr(e,o)&&(s=s.add(o))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return Zt()<=ne.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",en(t)),this.fs.getDocumentsMatchingQuery(e,t,_t.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Yi="LocalStore",cp=3e8;class lp{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new de(Y),this.Fs=new Ut(o=>zi(o),Bi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ym(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function up(n,e,t,s){return new lp(n,e,t,s)}async function Bl(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],l=[];let h=X();for(const d of r){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(s,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function hp(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const g=d.batch,T=g.keys();let S=P.resolve();return T.forEach(x=>{S=S.next(()=>p.getEntry(h,x)).next(k=>{const V=d.docVersions.get(x);se(V!==null,48541),k.version.compareTo(V)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,g))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let h=X();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Ul(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function dp(n,e){const t=H(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach((p,g)=>{const T=r.get(g);if(!T)return;l.push(t.li.removeMatchingKeys(o,p.removedDocuments,g).next(()=>t.li.addMatchingKeys(o,p.addedDocuments,g)));let S=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Re.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,s)),r=r.insert(g,S),function(k,V,z){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cp?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(T,S,p)&&l.push(t.li.updateTargetData(o,S))});let h=st(),d=X();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(fp(o,a,e.documentUpdates).next(p=>{h=p.Bs,d=p.Ls})),!s.isEqual(Q.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next(g=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s));l.push(p)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.vs=r,o))}function fp(n,e,t){let s=X(),r=X();return t.forEach(o=>s=s.add(o)),e.getEntries(n,s).next(o=>{let a=st();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(Q.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):L(Yi,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:r}})}function mp(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Li),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function pp(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(o=>o?(r=o,P.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new ut(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function wi(n,e,t){const s=H(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!pn(a))throw a;L(Yi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Za(n,e,t){const s=H(n);let r=Q.min(),o=X();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const g=H(h),T=g.Fs.get(p);return T!==void 0?P.resolve(g.vs.get(T)):g.li.getTargetData(d,p)}(s,a,He(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:Q.min(),t?o:X())).next(l=>(gp(s,tm(e),l),{documents:l,ks:o})))}function gp(n,e,t){let s=n.Ms.get(e)||Q.min();t.forEach((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.Ms.set(e,s)}class ec{constructor(){this.activeTargetIds=am()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yp{constructor(){this.vo=new ec,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ec,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _p{Mo(e){}shutdown(){}}/**
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
 */const tc="ConnectivityMonitor";class nc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(tc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(tc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ms=null;function Ii(){return Ms===null?Ms=function(){return 268435456+Math.round(2147483648*Math.random())}():Ms++,"0x"+Ms.toString(16)}/**
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
 */const Xr="RestConnection",Ep={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vp{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Hs?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=Ii(),l=this.Qo(e,t.toUriEncodedString());L(Xr,`Sending RPC '${e}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,r,o);const{host:d}=new URL(l),p=Pi(d);return this.zo(e,l,h,s,p).then(g=>(L(Xr,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Lt(Xr,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",s),g})}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}Qo(e,t){const s=Ep[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class Tp{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Pe="WebChannelConnection",qn=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class sn extends vp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!sn.c_){const e=Kc();qn(e,Hc.STAT_EVENT,t=>{t.stat===hi.PROXY?L(Pe,"STAT_EVENT: detected buffering proxy"):t.stat===hi.NOPROXY&&L(Pe,"STAT_EVENT: detected no buffering proxy")}),sn.c_=!0}}zo(e,t,s,r,o){const a=Ii();return new Promise((l,h)=>{const d=new Gc;d.setWithCredentials(!0),d.listenOnce(Qc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ls.NO_ERROR:const g=d.getResponseJson();L(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ls.TIMEOUT:L(Pe,`RPC '${e}' ${a} timed out`),h(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const T=d.getStatus();if(L(Pe,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const k=function(z){const $=z.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf($)>=0?$:N.UNKNOWN}(x.status);h(new F(k,x.message))}else h(new F(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new F(N.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(Pe,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);L(Pe,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,s,15)})}T_(e,t,s){const r=Ii(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const d=o.join("");L(Pe,`Creating RPC '${e}' stream ${r}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let g=!1,T=!1;const S=new Tp({Ho:x=>{T?L(Pe,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(g||(L(Pe,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),L(Pe,`RPC '${e}' stream ${r} sending:`,x),p.send(x))},Jo:()=>p.close()});return qn(p,$n.EventType.OPEN,()=>{T||(L(Pe,`RPC '${e}' stream ${r} transport opened.`),S.i_())}),qn(p,$n.EventType.CLOSE,()=>{T||(T=!0,L(Pe,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(p))}),qn(p,$n.EventType.ERROR,x=>{T||(T=!0,Lt(Pe,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),S.o_(new F(N.UNAVAILABLE,"The operation could not be completed")))}),qn(p,$n.EventType.MESSAGE,x=>{var k;if(!T){const V=x.data[0];se(!!V,16349);const z=V,$=(z==null?void 0:z.error)||((k=z[0])==null?void 0:k.error);if($){L(Pe,`RPC '${e}' stream ${r} received error:`,$);const j=$.status;let J=function(v){const y=ge[v];if(y!==void 0)return Rl(y)}(j),D=$.message;j==="NOT_FOUND"&&D.includes("database")&&D.includes("does not exist")&&D.includes(this.databaseId.database)&&Lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=N.INTERNAL,D="Unknown error status: "+j+" with message "+$.message),T=!0,S.o_(new F(J,D)),p.close()}else L(Pe,`RPC '${e}' stream ${r} received:`,V),S.__(V)}}),sn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Wc()}}/**
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
 */function wp(n){return new sn(n)}function Zr(){return typeof document<"u"?document:null}/**
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
 */function Er(n){return new Sm(n,!0)}/**
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
 */sn.c_=!1;class ql{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const sc="PersistentStream";class $l{constructor(e,t,s,r,o,a,l,h){this.Ci=e,this.b_=s,this.S_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ql(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new F(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(sc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(L(sc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ip extends $l{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Pm(this.serializer,e),s=function(o){if(!("targetChange"in o))return Q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?We(a.readTime):Q.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Ti(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=gi(h)?{documents:Vm(o,h)}:{query:km(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xl(o,a.resumeToken);const d=_i(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=Zs(o,a.snapshotVersion.toTimestamp());const d=_i(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const s=Om(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Ti(this.serializer),t.removeTarget=e,this.K_(t)}}class Ap extends $l{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=xm(e.writeResults,e.commitTime),s=We(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ti(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Nm(this.serializer,s))};this.K_(t)}}/**
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
 */class bp{}class Sp extends bp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Ei(t,s),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(N.UNKNOWN,o.toString())})}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ei(t,s),r,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Cp(n,e,t,s){return new Sp(n,e,t,s)}class Rp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const jt="RemoteStore";class Pp{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{s.enqueueAndForget(async()=>{$t(this)&&(L(jt,"Restarting streams for network reachability change."),await async function(h){const d=H(h);d.Ea.add(4),await ds(d),d.Va.set("Unknown"),d.Ea.delete(4),await vr(d)}(this))})}),this.Va=new Rp(s,r)}}async function vr(n){if($t(n))for(const e of n.Ra)await e(!0)}async function ds(n){for(const e of n.Ra)await e(!1)}function Gl(n,e){const t=H(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),to(t)?eo(t):gn(t).O_()&&Zi(t,e))}function Xi(n,e){const t=H(n),s=gn(t);t.Ia.delete(e),s.O_()&&Ql(t,e),t.Ia.size===0&&(s.O_()?s.L_():$t(t)&&t.Va.set("Unknown"))}function Zi(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(n).Z_(e)}function Ql(n,e){n.da.$e(e),gn(n).X_(e)}function eo(n){n.da=new wm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.Va.ua()}function to(n){return $t(n)&&!gn(n).x_()&&n.Ia.size>0}function $t(n){return H(n).Ea.size===0}function Hl(n){n.da=void 0}async function Np(n){n.Va.set("Online")}async function xp(n){n.Ia.forEach((e,t)=>{Zi(n,e)})}async function Vp(n,e){Hl(n),to(n)?(n.Va.ha(e),eo(n)):n.Va.set("Unknown")}async function kp(n,e,t){if(n.Va.set("Online"),e instanceof Nl&&e.state===2&&e.cause)try{await async function(r,o){const a=o.cause;for(const l of o.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.da.removeTarget(l))}(n,e)}catch(s){L(jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tr(n,s)}else if(e instanceof Bs?n.da.Xe(e):e instanceof Pl?n.da.st(e):n.da.tt(e),!t.isEqual(Q.min()))try{const s=await Ul(n.localStore);t.compareTo(s)>=0&&await function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(Re.EMPTY_BYTE_STRING,p.snapshotVersion)),Ql(o,h);const g=new ut(p.target,h,d,p.sequenceNumber);Zi(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){L(jt,"Failed to raise snapshot:",s),await tr(n,s)}}async function tr(n,e,t){if(!pn(e))throw e;n.Ea.add(1),await ds(n),n.Va.set("Offline"),t||(t=()=>Ul(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(jt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await vr(n)})}function Kl(n,e){return e().catch(t=>tr(n,t,e))}async function Tr(n){const e=H(n),t=wt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Li;for(;Dp(e);)try{const r=await mp(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Op(e,r)}catch(r){await tr(e,r)}Wl(e)&&Jl(e)}function Dp(n){return $t(n)&&n.Ta.length<10}function Op(n,e){n.Ta.push(e);const t=wt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Wl(n){return $t(n)&&!wt(n).x_()&&n.Ta.length>0}function Jl(n){wt(n).start()}async function Mp(n){wt(n).ra()}async function Lp(n){const e=wt(n);for(const t of n.Ta)e.ea(t.mutations)}async function jp(n,e,t){const s=n.Ta.shift(),r=Gi.from(s,e,t);await Kl(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Tr(n)}async function Fp(n,e){e&&wt(n).Y_&&await async function(s,r){if(function(a){return Em(a)&&a!==N.ABORTED}(r.code)){const o=s.Ta.shift();wt(s).B_(),await Kl(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Tr(s)}}(n,e),Wl(n)&&Jl(n)}async function rc(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),L(jt,"RemoteStore received new credentials");const s=$t(t);t.Ea.add(3),await ds(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await vr(t)}async function zp(n,e){const t=H(n);e?(t.Ea.delete(2),await vr(t)):e||(t.Ea.add(2),await ds(t),t.Va.set("Unknown"))}function gn(n){return n.ma||(n.ma=function(t,s,r){const o=H(t);return o.sa(),new Ip(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Zo:Np.bind(null,n),Yo:xp.bind(null,n),t_:Vp.bind(null,n),J_:kp.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),to(n)?eo(n):n.Va.set("Unknown")):(await n.ma.stop(),Hl(n))})),n.ma}function wt(n){return n.fa||(n.fa=function(t,s,r){const o=H(t);return o.sa(),new Ap(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Mp.bind(null,n),t_:Fp.bind(null,n),ta:Lp.bind(null,n),na:jp.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Tr(n)):(await n.fa.stop(),n.Ta.length>0&&(L(jt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class no{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,l=new no(e,t,a,r,o);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function so(n,e){if(nt("AsyncQueue",`${e}: ${n}`),pn(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class rn{static emptySet(e){return new rn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=Gn(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ic{constructor(){this.ga=new de(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class dn{constructor(e,t,s,r,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new dn(e,t,rn.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Bp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Up{constructor(){this.queries=oc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=H(t),o=r.queries;r.queries=oc(),o.forEach((a,l)=>{for(const h of l.ba)h.onError(s)})})(this,new F(N.ABORTED,"Firestore shutting down"))}}function oc(){return new Ut(n=>gl(n),mr)}async function Yl(n,e){const t=H(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Sa()&&e.Da()&&(s=2):(o=new Bp,s=e.Da()?0:1);try{switch(s){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=so(a,`Initialization of query '${en(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&ro(t)}async function Xl(n,e){const t=H(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.ba.indexOf(e);a>=0&&(o.ba.splice(a,1),o.ba.length===0?r=e.Da()?0:1:!o.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qp(n,e){const t=H(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const l of a.ba)l.Fa(r)&&(s=!0);a.wa=r}}s&&ro(t)}function $p(n,e,t){const s=H(n),r=s.queries.get(e);if(r)for(const o of r.ba)o.onError(t);s.queries.delete(e)}function ro(n){n.Ca.forEach(e=>{e.next()})}var Ai,ac;(ac=Ai||(Ai={})).Ma="default",ac.Cache="cache";class Zl{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new dn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ai.Cache}}/**
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
 */class eu{constructor(e){this.key=e}}class tu{constructor(e){this.key=e}}class Gp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=yl(e),this.tu=new rn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new ic,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,g)=>{const T=r.get(p),S=pr(this.query,g)?g:null,x=!!T&&this.mutatedKeys.has(T.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;T&&S?T.data.isEqual(S.data)?x!==k&&(s.track({type:3,doc:S}),V=!0):this.su(T,S)||(s.track({type:2,doc:S}),V=!0,(h&&this.eu(S,h)>0||d&&this.eu(S,d)<0)&&(l=!0)):!T&&S?(s.track({type:0,doc:S}),V=!0):T&&!S&&(s.track({type:1,doc:T}),V=!0,(h||d)&&(l=!0)),V&&(S?(a=a.add(S),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),s.track({type:1,doc:p})}return{tu:a,iu:s,Ss:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,g)=>function(S,x){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:V})}};return k(S)-k(x)}(p.type,g.type)||this.eu(p.doc,g.doc)),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],h=this.Ya.size===0&&this.current&&!r?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new dn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ic,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new tu(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new eu(s))}),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return dn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const io="SyncEngine";class Qp{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Hp{constructor(e){this.key=e,this.hu=!1}}class Kp{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ut(l=>gl(l),mr),this.Iu=new Map,this.Eu=new Set,this.Ru=new de(q.comparator),this.Au=new Map,this.Vu=new Ki,this.du={},this.mu=new Map,this.fu=hn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Wp(n,e,t=!0){const s=au(n);let r;const o=s.Tu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await nu(s,e,t,!0),r}async function Jp(n,e){const t=au(n);await nu(t,e,!0,!1)}async function nu(n,e,t,s){const r=await pp(n.localStore,He(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return s&&(l=await Yp(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Gl(n.remoteStore,r),l}async function Yp(n,e,t,s,r){n.pu=(g,T,S)=>async function(k,V,z,$){let j=V.view.ru(z);j.Ss&&(j=await Za(k.localStore,V.query,!1).then(({documents:v})=>V.view.ru(v,j)));const J=$&&$.targetChanges.get(V.targetId),D=$&&$.targetMismatches.get(V.targetId)!=null,B=V.view.applyChanges(j,k.isPrimaryClient,J,D);return lc(k,V.targetId,B.au),B.snapshot}(n,g,T,S);const o=await Za(n.localStore,e,!0),a=new Gp(e,o.ks),l=a.ru(o.documents),h=hs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(l,n.isPrimaryClient,h);lc(n,t,d.au);const p=new Qp(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Xp(n,e,t){const s=H(n),r=s.Tu.get(e),o=s.Iu.get(r.targetId);if(o.length>1)return s.Iu.set(r.targetId,o.filter(a=>!mr(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await wi(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Xi(s.remoteStore,r.targetId),bi(s,r.targetId)}).catch(mn)):(bi(s,r.targetId),await wi(s.localStore,r.targetId,!0))}async function Zp(n,e){const t=H(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xi(t.remoteStore,s.targetId))}async function eg(n,e,t){const s=ag(n);try{const r=await function(a,l){const h=H(a),d=ue.now(),p=l.reduce((S,x)=>S.add(x.key),X());let g,T;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=st(),k=X();return h.xs.getEntries(S,p).next(V=>{x=V,x.forEach((z,$)=>{$.isValidDocument()||(k=k.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,x)).next(V=>{g=V;const z=[];for(const $ of l){const j=mm($,g.get($.key).overlayedDocument);j!=null&&z.push(new qt($.key,j,ll(j.value.mapValue),Ke.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,z,l)}).next(V=>{T=V;const z=V.applyToLocalDocumentSet(g,k);return h.documentOverlayCache.saveOverlays(S,V.batchId,z)})}).then(()=>({batchId:T.batchId,changes:El(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,h){let d=a.du[a.currentUser.toKey()];d||(d=new de(Y)),d=d.insert(l,h),a.du[a.currentUser.toKey()]=d}(s,r.batchId,t),await fs(s,r.changes),await Tr(s.remoteStore)}catch(r){const o=so(r,"Failed to persist write");t.reject(o)}}async function su(n,e){const t=H(n);try{const s=await dp(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.Au.get(o);a&&(se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?se(a.hu,14607):r.removedDocuments.size>0&&(se(a.hu,42227),a.hu=!1))}),await fs(t,s,e)}catch(s){await mn(s)}}function cc(n,e,t){const s=H(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const h=H(a);h.onlineState=l;let d=!1;h.queries.forEach((p,g)=>{for(const T of g.ba)T.va(l)&&(d=!0)}),d&&ro(h)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tg(n,e,t){const s=H(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),o=r&&r.key;if(o){let a=new de(q.comparator);a=a.insert(o,xe.newNoDocument(o,Q.min()));const l=X().add(o),h=new _r(Q.min(),new Map,new de(Y),a,l);await su(s,h),s.Ru=s.Ru.remove(o),s.Au.delete(e),oo(s)}else await wi(s.localStore,e,!1).then(()=>bi(s,e,t)).catch(mn)}async function ng(n,e){const t=H(n),s=e.batch.batchId;try{const r=await hp(t.localStore,e);iu(t,s,null),ru(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await fs(t,r)}catch(r){await mn(r)}}async function sg(n,e,t){const s=H(n);try{const r=await function(a,l){const h=H(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(g=>(se(g!==null,37113),p=g.keys(),h.mutationQueue.removeMutationBatch(d,g))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(s.localStore,e);iu(s,e,t),ru(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await fs(s,r)}catch(r){await mn(r)}}function ru(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function iu(n,e,t){const s=H(n);let r=s.du[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function bi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||ou(n,s)})}function ou(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Xi(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),oo(n))}function lc(n,e,t){for(const s of t)s instanceof eu?(n.Vu.addReference(s.key,e),rg(n,s)):s instanceof tu?(L(io,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||ou(n,s.key)):G(19791,{wu:s})}function rg(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(L(io,"New document in limbo: "+t),n.Eu.add(s),oo(n))}function oo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(le.fromString(e)),s=n.fu.next();n.Au.set(s,new Hp(t)),n.Ru=n.Ru.insert(t,s),Gl(n.remoteStore,new ut(He(Ui(t.path)),s,"TargetPurposeLimboResolution",ur.ce))}}async function fs(n,e,t){const s=H(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((l,h)=>{a.push(s.pu(h,e,t).then(d=>{var p;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;s.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){r.push(d);const g=Ji.Es(h.targetId,d);o.push(g)}}))}),await Promise.all(a),s.Pu.J_(r),await async function(h,d){const p=H(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>P.forEach(d,T=>P.forEach(T.Ts,S=>p.persistence.referenceDelegate.addReference(g,T.targetId,S)).next(()=>P.forEach(T.Is,S=>p.persistence.referenceDelegate.removeReference(g,T.targetId,S)))))}catch(g){if(!pn(g))throw g;L(Yi,"Failed to update sequence numbers: "+g)}for(const g of d){const T=g.targetId;if(!g.fromCache){const S=p.vs.get(T),x=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(x);p.vs=p.vs.insert(T,k)}}}(s.localStore,o))}async function ig(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){L(io,"User change. New user:",e.toKey());const s=await Bl(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new F(N.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fs(t,s.Ns)}}function og(n,e){const t=H(n),s=t.Au.get(e);if(s&&s.hu)return X().add(s.key);{let r=X();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function au(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=su.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=og.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tg.bind(null,e),e.Pu.J_=qp.bind(null,e.eventManager),e.Pu.yu=$p.bind(null,e.eventManager),e}function ag(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ng.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sg.bind(null,e),e}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Er(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return up(this.persistence,new ap,e.initialUser,this.serializer)}Cu(e){return new zl(Wi.Vi,this.serializer)}Du(e){return new yp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class cg extends nr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){se(this.persistence.referenceDelegate instanceof er,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Qm(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new zl(s=>er.Vi(s,t),this.serializer)}}class Si{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ig.bind(null,this.syncEngine),await zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Up}()}createDatastore(e){const t=Er(e.databaseInfo.databaseId),s=wp(e.databaseInfo);return Cp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,o,a,l){return new Pp(s,r,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>cc(this.syncEngine,t,0),function(){return nc.v()?new nc:new _p}())}createSyncEngine(e,t){return function(r,o,a,l,h,d,p){const g=new Kp(r,o,a,l,h,d);return p&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=H(r);L(jt,"RemoteStore shutting down."),o.Ea.add(5),await ds(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Si.provider={build:()=>new Si};/**
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
 */class cu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const It="FirestoreClient";class lg{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=Oi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{L(It,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(L(It,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=so(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ei(n,e){n.asyncQueue.verifyOperationInProgress(),L(It,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Bl(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function uc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ug(n);L(It,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>rc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>rc(e.remoteStore,r)),n._onlineComponents=e}async function ug(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(It,"Using user provided OfflineComponentProvider");try{await ei(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===N.FAILED_PRECONDITION||r.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await ei(n,new nr)}}else L(It,"Using default OfflineComponentProvider"),await ei(n,new cg(void 0));return n._offlineComponents}async function lu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(It,"Using user provided OnlineComponentProvider"),await uc(n,n._uninitializedComponentsProvider._online)):(L(It,"Using default OnlineComponentProvider"),await uc(n,new Si))),n._onlineComponents}function hg(n){return lu(n).then(e=>e.syncEngine)}async function uu(n){const e=await lu(n),t=e.eventManager;return t.onListen=Wp.bind(null,e.syncEngine),t.onUnlisten=Xp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zp.bind(null,e.syncEngine),t}function dg(n,e,t={}){const s=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new cu({next:T=>{p.Nu(),a.enqueueAndForget(()=>Xl(o,g));const S=T.docs.has(l);!S&&T.fromCache?d.reject(new F(N.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&h&&h.source==="server"?d.reject(new F(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new Zl(Ui(l.path),p,{includeMetadataChanges:!0,Ka:!0});return Yl(o,g)}(await uu(n),n.asyncQueue,e,t,s)),s.promise}function fg(n,e,t={}){const s=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new cu({next:T=>{p.Nu(),a.enqueueAndForget(()=>Xl(o,g)),T.fromCache&&h.source==="server"?d.reject(new F(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new Zl(l,p,{includeMetadataChanges:!0,Ka:!0});return Yl(o,g)}(await uu(n),n.asyncQueue,e,t,s)),s.promise}function mg(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>eg(await hg(n),e,t)),t.promise}/**
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
 */function hu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const pg="ComponentProvider",hc=new Map;function gg(n,e,t,s,r){return new Mf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,hu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const du="firestore.googleapis.com",dc=!0;class fc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=du,this.ssl=dc}else this.host=e.host,this.ssl=e.ssl??dc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$m)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hu(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pf;switch(s.type){case"firstParty":return new Ef(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=hc.get(t);s&&(L(pg,"Removing Datastore"),hc.delete(t),s.terminate())}(this),Promise.resolve()}}function yg(n,e,t,s={}){var d;n=yt(n,wr);const r=Pi(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(qh(`https://${l}`),Hh("Firestore",!0)),o.host!==du&&o.host!==l&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:r,emulatorOptions:s};if(!es(h,a)&&(n._setSettings(h),s.mockUserToken)){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Ne.MOCK_USER;else{p=$h(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ne(T)}n._authCredentials=new gf(new Yc(p,g))}}/**
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
 */class Ir{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class Te{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}toJSON(){return{type:Te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ls(t,Te._jsonSchema))return new Te(e,s||null,new q(le.fromString(t.referencePath)))}}Te._jsonSchemaVersion="firestore/documentReference/1.0",Te._jsonSchema={type:ye("string",Te._jsonSchemaVersion),referencePath:ye("string")};class mt extends Ir{constructor(e,t,s){super(e,t,Ui(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new q(e))}withConverter(e){return new mt(this.firestore,e,this._path)}}function _g(n,e,...t){if(n=pt(n),Xc("collection","path",e),n instanceof wr){const s=le.fromString(e,...t);return Ca(s),new mt(n,null,s)}{if(!(n instanceof Te||n instanceof mt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return Ca(s),new mt(n.firestore,null,s)}}function Gt(n,e,...t){if(n=pt(n),arguments.length===1&&(e=Oi.newId()),Xc("doc","path",e),n instanceof wr){const s=le.fromString(e,...t);return Sa(s),new Te(n,null,new q(s))}{if(!(n instanceof Te||n instanceof mt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return Sa(s),new Te(n.firestore,n instanceof mt?n.converter:null,new q(s))}}/**
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
 */const mc="AsyncQueue";class pc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ql(this,"async_queue_retry"),this._c=()=>{const s=Zr();s&&L(mc,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ze;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!pn(e))throw e;L(mc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,nt("INTERNAL UNHANDLED ERROR: ",gc(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=no.createAndSchedule(this,e,t,s,o=>this.hc(o));return this.tc.push(r),r}uc(){this.nc&&G(47125,{Pc:gc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ms extends wr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new pc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pc(e),this._firestoreClient=void 0,await e}}}function Eg(n,e){const t=typeof n=="object"?n:Bc(),s=typeof n=="string"?n:Hs,r=cs(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Bh("firestore");o&&yg(r,...o)}return r}function ao(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vg(n),n._firestoreClient}function vg(n){var s,r,o,a;const e=n._freezeSettings(),t=gg(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new lg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(Re.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ls(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:ye("string",Fe._jsonSchemaVersion),bytes:ye("string")};/**
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
 */class fu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mu{constructor(e){this._methodName=e}}/**
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
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(ls(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:ye("string",Je._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
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
 */class Ue{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ls(e,Ue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ue(e.vectorValues);throw new F(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:ye("string",Ue._jsonSchemaVersion),vectorValues:ye("object")};/**
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
 */const Tg=/^__.*__$/;class wg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new us(e,this.data,t,this.fieldTransforms)}}function pu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class co{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new co({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return sr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(pu(this.dataSource)&&Tg.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Ig{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Er(e)}createContext(e,t,s,r=!1){return new co({dataSource:e,methodName:t,targetDoc:s,path:Ce.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ag(n){const e=n._freezeSettings(),t=Er(n._databaseId);return new Ig(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bg(n,e,t,s,r,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,e,t,r);Eu("Data must be an object, but it was:",a,s);const l=yu(s,a);let h,d;if(o.merge)h=new Be(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const T=lo(e,g,t);if(!a.contains(T))throw new F(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Rg(p,T)||p.push(T)}h=new Be(p),d=a.fieldTransforms.filter(g=>h.covers(g.field))}else h=null,d=a.fieldTransforms;return new wg(new je(l),h,d)}function gu(n,e){if(_u(n=pt(n)))return Eu("Unsupported field value:",e,n),yu(n,e);if(n instanceof mu)return function(s,r){if(!pu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const o=[];let a=0;for(const l of s){let h=gu(l,r.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(s,r){if((s=pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cm(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ue.fromDate(s);return{timestampValue:Zs(r.serializer,o)}}if(s instanceof ue){const o=new ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zs(r.serializer,o)}}if(s instanceof Je)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fe)return{bytesValue:xl(r.serializer,s._byteString)};if(s instanceof Te){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Hi(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ue)return function(a,l){const h=a instanceof Ue?a.toArray():a;return{mapValue:{fields:{[al]:{stringValue:cl},[Ks]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return qi(l.serializer,p)})}}}}}}(s,r);if(jl(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Mi(s)}`)}(n,e)}function yu(n,e){const t={};return tl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,(s,r)=>{const o=gu(r,e.childContextForField(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function _u(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Je||n instanceof Fe||n instanceof Te||n instanceof mu||n instanceof Ue||jl(n))}function Eu(n,e,t){if(!_u(t)||!Zc(t)){const s=Mi(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function lo(n,e,t){if((e=pt(e))instanceof fu)return e._internalPath;if(typeof e=="string")return Cg(n,e);throw sr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sg=new RegExp("[~\\*/\\[\\]]");function Cg(n,e,t){if(e.search(Sg)>=0)throw sr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fu(...e.split("."))._internalPath}catch{throw sr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sr(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new F(N.INVALID_ARGUMENT,l+n+h)}function Rg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Pg{convertValue(e,t="none"){switch(Tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Bt(e,(r,o)=>{s[r]=this.convertValue(o,t)}),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[Ks].arrayValue)==null?void 0:r.values)==null?void 0:o.map(a=>pe(a.doubleValue));return new Ue(t)}convertGeoPoint(e){return new Je(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=dr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ss(e));default:return null}}convertTimestamp(e){const t=Et(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=le.fromString(e);se(Ll(s),9688,{name:e});const r=new rs(s.get(1),s.get(3)),o=new q(s.popFirst(5));return r.isEqual(t)||nt(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class vu extends Pg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}const yc="@firebase/firestore",_c="4.11.0";/**
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
 */class Tu{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ng(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(lo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ng extends Tu{data(){return super.data()}}/**
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
 */function xg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Vg(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Hn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends Tu{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(lo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ot._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ot._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ot._jsonSchema={type:ye("string",Ot._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class Us extends Ot{data(e={}){return super.data(e)}}class on{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Hn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Us(this._firestore,this._userDataWriter,s.key,s,new Hn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const h=new Us(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Hn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Us(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Hn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:kg(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=on._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Oi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
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
 */on._jsonSchemaVersion="firestore/querySnapshot/1.0",on._jsonSchema={type:ye("string",on._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};/**
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
 */function wu(n){n=yt(n,Te);const e=yt(n.firestore,ms),t=ao(e);return dg(t,n._key).then(s=>Mg(e,n,s))}function Dg(n){n=yt(n,Ir);const e=yt(n.firestore,ms),t=ao(e),s=new vu(e);return xg(n._query),fg(t,n._query).then(r=>new on(e,s,n,r))}function Ar(n,e,t){n=yt(n,Te);const s=yt(n.firestore,ms),r=Vg(n.converter,e),o=Ag(s);return Iu(s,[bg(o,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Ke.none())])}function Og(n){return Iu(yt(n.firestore,ms),[new $i(n._key,Ke.none())])}function Iu(n,e){const t=ao(n);return mg(t,e)}function Mg(n,e,t){const s=t.docs.get(e._key),r=new vu(n);return new Ot(n,r,e._key,s,new Hn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){mf(nf),gt(new et("firestore",(s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new ms(new yf(s.getProvider("auth-internal")),new vf(a,s.getProvider("app-check-internal")),Lf(a,r),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Qe(yc,_c,e),Qe(yc,_c,"esm2020")})();var Lg="firebase",jg="12.9.0";/**
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
 */Qe(Lg,jg,"app");const Au="@firebase/installations",uo="0.6.19";/**
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
 */const bu=1e4,Su=`w:${uo}`,Cu="FIS_v2",Fg="https://firebaseinstallations.googleapis.com/v1",zg=60*60*1e3,Bg="installations",Ug="Installations";/**
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
 */const qg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new lr(Bg,Ug,qg);function Ru(n){return n instanceof At&&n.code.includes("request-failed")}/**
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
 */function Pu({projectId:n}){return`${Fg}/projects/${n}/installations`}function Nu(n){return{token:n.token,requestStatus:2,expiresIn:Gg(n.expiresIn),creationTime:Date.now()}}async function xu(n,e){const s=(await e.json()).error;return Ft.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Vu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function $g(n,{refreshToken:e}){const t=Vu(n);return t.append("Authorization",Qg(e)),t}async function ku(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Gg(n){return Number(n.replace("s","000"))}function Qg(n){return`${Cu} ${n}`}/**
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
 */async function Hg({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Pu(n),r=Vu(n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Cu,appId:n.appId,sdkVersion:Su},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await ku(()=>fetch(s,l));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Nu(d.authToken)}}else throw await xu("Create Installation",h)}/**
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
 */function Du(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Kg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Wg=/^[cdef][\w-]{21}$/,Ci="";function Jg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Yg(n);return Wg.test(t)?t:Ci}catch{return Ci}}function Yg(n){return Kg(n).substr(0,22)}/**
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
 */function br(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ou=new Map;function Mu(n,e){const t=br(n);Lu(t,e),Xg(t,e)}function Lu(n,e){const t=Ou.get(n);if(t)for(const s of t)s(e)}function Xg(n,e){const t=Zg();t&&t.postMessage({key:n,fid:e}),ey()}let Dt=null;function Zg(){return!Dt&&"BroadcastChannel"in self&&(Dt=new BroadcastChannel("[Firebase] FID Change"),Dt.onmessage=n=>{Lu(n.data.key,n.data.fid)}),Dt}function ey(){Ou.size===0&&Dt&&(Dt.close(),Dt=null)}/**
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
 */const ty="firebase-installations-database",ny=1,zt="firebase-installations-store";let ti=null;function ho(){return ti||(ti=Fc(ty,ny,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(zt)}}})),ti}async function rr(n,e){const t=br(n),r=(await ho()).transaction(zt,"readwrite"),o=r.objectStore(zt),a=await o.get(t);return await o.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Mu(n,e.fid),e}async function ju(n){const e=br(n),s=(await ho()).transaction(zt,"readwrite");await s.objectStore(zt).delete(e),await s.done}async function Sr(n,e){const t=br(n),r=(await ho()).transaction(zt,"readwrite"),o=r.objectStore(zt),a=await o.get(t),l=e(a);return l===void 0?await o.delete(t):await o.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&Mu(n,l.fid),l}/**
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
 */async function fo(n){let e;const t=await Sr(n.appConfig,s=>{const r=sy(s),o=ry(n,r);return e=o.registrationPromise,o.installationEntry});return t.fid===Ci?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function sy(n){const e=n||{fid:Jg(),registrationStatus:0};return Fu(e)}function ry(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=iy(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oy(n)}:{installationEntry:e}}async function iy(n,e){try{const t=await Hg(n,e);return rr(n.appConfig,t)}catch(t){throw Ru(t)&&t.customData.serverCode===409?await ju(n.appConfig):await rr(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function oy(n){let e=await Ec(n.appConfig);for(;e.registrationStatus===1;)await Du(100),e=await Ec(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await fo(n);return s||t}return e}function Ec(n){return Sr(n,e=>{if(!e)throw Ft.create("installation-not-found");return Fu(e)})}function Fu(n){return ay(n)?{fid:n.fid,registrationStatus:0}:n}function ay(n){return n.registrationStatus===1&&n.registrationTime+bu<Date.now()}/**
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
 */async function cy({appConfig:n,heartbeatServiceProvider:e},t){const s=ly(n,t),r=$g(n,t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Su,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await ku(()=>fetch(s,l));if(h.ok){const d=await h.json();return Nu(d)}else throw await xu("Generate Auth Token",h)}function ly(n,{fid:e}){return`${Pu(n)}/${e}/authTokens:generate`}/**
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
 */async function mo(n,e=!1){let t;const s=await Sr(n.appConfig,o=>{if(!zu(o))throw Ft.create("not-registered");const a=o.authToken;if(!e&&dy(a))return o;if(a.requestStatus===1)return t=uy(n,e),o;{if(!navigator.onLine)throw Ft.create("app-offline");const l=my(o);return t=hy(n,l),l}});return t?await t:s.authToken}async function uy(n,e){let t=await vc(n.appConfig);for(;t.authToken.requestStatus===1;)await Du(100),t=await vc(n.appConfig);const s=t.authToken;return s.requestStatus===0?mo(n,e):s}function vc(n){return Sr(n,e=>{if(!zu(e))throw Ft.create("not-registered");const t=e.authToken;return py(t)?{...e,authToken:{requestStatus:0}}:e})}async function hy(n,e){try{const t=await cy(n,e),s={...e,authToken:t};return await rr(n.appConfig,s),t}catch(t){if(Ru(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ju(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await rr(n.appConfig,s)}throw t}}function zu(n){return n!==void 0&&n.registrationStatus===2}function dy(n){return n.requestStatus===2&&!fy(n)}function fy(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+zg}function my(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function py(n){return n.requestStatus===1&&n.requestTime+bu<Date.now()}/**
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
 */async function gy(n){const e=n,{installationEntry:t,registrationPromise:s}=await fo(e);return s?s.catch(console.error):mo(e).catch(console.error),t.fid}/**
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
 */async function yy(n,e=!1){const t=n;return await _y(t),(await mo(t,e)).token}async function _y(n){const{registrationPromise:e}=await fo(n);e&&await e}/**
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
 */function Ey(n){if(!n||!n.options)throw ni("App Configuration");if(!n.name)throw ni("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ni(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ni(n){return Ft.create("missing-app-config-values",{valueName:n})}/**
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
 */const Bu="installations",vy="installations-internal",Ty=n=>{const e=n.getProvider("app").getImmediate(),t=Ey(e),s=cs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wy=n=>{const e=n.getProvider("app").getImmediate(),t=cs(e,Bu).getImmediate();return{getId:()=>gy(t),getToken:r=>yy(t,r)}};function Iy(){gt(new et(Bu,Ty,"PUBLIC")),gt(new et(vy,wy,"PRIVATE"))}Iy();Qe(Au,uo);Qe(Au,uo,"esm2020");/**
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
 */const ir="analytics",Ay="firebase_id",by="origin",Sy=60*1e3,Cy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",po="https://www.googletagmanager.com/gtag/js";/**
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
 */const ke=new Vi("@firebase/analytics");/**
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
 */const Ry={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new lr("analytics","Analytics",Ry);/**
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
 */function Py(n){if(!n.startsWith(po)){const e=Le.create("invalid-gtag-resource",{gtagURL:n});return ke.warn(e.message),""}return n}function Uu(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ny(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function xy(n,e){const t=Ny("firebase-js-sdk-policy",{createScriptURL:Py}),s=document.createElement("script"),r=`${po}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Vy(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ky(n,e,t,s,r,o){const a=s[r];try{if(a)await e[a];else{const h=(await Uu(t)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(l){ke.error(l)}n("config",r,o)}async function Dy(n,e,t,s,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await Uu(t);for(const h of a){const d=l.find(g=>g.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",s,r||{})}catch(o){ke.error(o)}}function Oy(n,e,t,s){async function r(o,...a){try{if(o==="event"){const[l,h]=a;await Dy(n,e,t,l,h)}else if(o==="config"){const[l,h]=a;await ky(n,e,t,s,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){ke.error(l)}}return r}function My(n,e,t,s,r){let o=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Oy(o,n,e,t),{gtagCore:o,wrappedGtag:window[r]}}function Ly(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(po)&&t.src.includes(n))return t;return null}/**
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
 */const jy=30,Fy=1e3;class zy{constructor(e={},t=Fy){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qu=new zy;function By(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Uy(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:By(t)},r=Cy.replace("{app-id}",e),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function qy(n,e=qu,t){const{appId:s,apiKey:r,measurementId:o}=n.options;if(!s)throw Le.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:s};throw Le.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Qy;return setTimeout(async()=>{l.abort()},Sy),$u({appId:s,apiKey:r,measurementId:o},a,l,e)}async function $u(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=qu){var l;const{appId:o,measurementId:a}=n;try{await $y(s,e)}catch(h){if(a)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await Uy(n);return r.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!Gy(d)){if(r.deleteThrottleMetadata(o),a)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const p=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?ma(t,r.intervalMillis,jy):ma(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return r.setThrottleMetadata(o,g),ke.debug(`Calling attemptFetch again in ${p} millis`),$u(n,g,s,r)}}function $y(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(o),s(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Gy(n){if(!(n instanceof At)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qy{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hy(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const o=await e,a={...s,send_to:o};n("event",t,a)}}async function Ky(n,e,t,s){if(s&&s.global){const r={};for(const o of Object.keys(t))r[`user_properties.${o}`]=t[o];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function Wy(){if(Ni())try{await xi()}catch(n){return ke.warn(Le.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ke.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jy(n,e,t,s,r,o,a){const l=qy(n);l.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>ke.error(T)),e.push(l);const h=Wy().then(T=>{if(T)return s.getId()}),[d,p]=await Promise.all([l,h]);Ly(o)||xy(o,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[by]="firebase",g.update=!0,p!=null&&(g[Ay]=p),r("config",d.measurementId,g),d.measurementId}/**
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
 */class Yy{constructor(e){this.app=e}_delete(){return delete an[this.app.options.appId],Promise.resolve()}}let an={},Tc=[];const wc={};let si="dataLayer",Xy="gtag",Ic,go,Ac=!1;function Zy(){const n=[];if(Oc()&&n.push("This is a browser extension environment."),Mc()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Le.create("invalid-analytics-context",{errorInfo:e});ke.warn(t.message)}}function e_(n,e,t){Zy();const s=n.options.appId;if(!s)throw Le.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(an[s]!=null)throw Le.create("already-exists",{id:s});if(!Ac){Vy(si);const{wrappedGtag:o,gtagCore:a}=My(an,Tc,wc,si,Xy);go=o,Ic=a,Ac=!0}return an[s]=Jy(n,Tc,wc,e,Ic,si,t),new Yy(n)}function t_(n=Bc()){n=pt(n);const e=cs(n,ir);return e.isInitialized()?e.getImmediate():n_(n)}function n_(n,e={}){const t=cs(n,ir);if(t.isInitialized()){const r=t.getImmediate();if(es(e,t.getOptions()))return r;throw Le.create("already-initialized")}return t.initialize({options:e})}async function s_(){if(Oc()||!Mc()||!Ni())return!1;try{return await xi()}catch{return!1}}function r_(n,e,t){n=pt(n),Ky(go,an[n.app.options.appId],e,t).catch(s=>ke.error(s))}function i_(n,e,t,s){n=pt(n),Hy(go,an[n.app.options.appId],e,t,s).catch(r=>ke.error(r))}const bc="@firebase/analytics",Sc="0.10.19";function o_(){gt(new et(ir,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return e_(s,r,t)},"PUBLIC")),gt(new et("analytics-internal",n,"PRIVATE")),Qe(bc,Sc),Qe(bc,Sc,"esm2020");function n(e){try{const t=e.getProvider(ir).getImmediate();return{logEvent:(s,r,o)=>i_(t,s,r,o),setUserProperties:(s,r)=>r_(t,s,r)}}catch(t){throw Le.create("interop-component-reg-failed",{reason:t})}}}o_();const a_={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},Gu=zc(a_),bt=Eg(Gu);s_().then(n=>{n&&t_(Gu)});const c_=60*60*1e3;function yo(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:s}=JSON.parse(e);return Date.now()-s>c_?null:t}catch{return null}}function yn(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function l_(){const n=yo("books_old-testament");if(n)return n;try{const e=await wu(Gt(bt,"books","old-testament"));if(e.exists()){const t=e.data().books;return yn("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function u_(){const n=yo("all_quizzes");if(n)return n;try{const e=await Dg(_g(bt,"quizzes")),t=[];if(e.forEach(s=>t.push({id:s.id,...s.data()})),t.length>0)return yn("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function Cc(n){const e=yo(`translations_${n}`);if(e)return e;try{const t=await wu(Gt(bt,"translations",n));if(t.exists()){const s=t.data();return yn(`translations_${n}`,s),s}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function Qu(n){await Ar(Gt(bt,"books","old-testament"),{books:n}),yn("books_old-testament",n)}async function Hu(n,e){await Ar(Gt(bt,"quizzes",n),e),yn(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function h_(n,e){await Ar(Gt(bt,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function d_(n){await Og(Gt(bt,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function or(n,e){await Ar(Gt(bt,"translations",n),e),yn(`translations_${n}`,e)}const Ku=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],ar={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},f_=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},Wu=M.createContext(null),m_=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ar.en,es:ar.es}],p_=({children:n})=>{const[e,t]=M.useState(Ku),[s,r]=M.useState(m_),[o,a]=M.useState(Zn),[l,h]=M.useState(!0),[d,p]=M.useState(null),g=M.useCallback(async()=>{h(!0),p(null);try{const[x,k,V,z]=await Promise.all([l_(),u_(),Cc("en"),Cc("es")]);x&&t(x),k&&k.length>0&&r(k),(V||z)&&a($=>({...$,...V?{en:V}:{},...z?{es:z}:{}}))}catch(x){console.warn("Failed to load Firestore data, using fallbacks:",x.message),p(x.message)}finally{h(!1)}},[]);M.useEffect(()=>{g()},[g]);const T=M.useCallback(()=>(Object.keys(localStorage).forEach(x=>{x.startsWith("firestore_")&&localStorage.removeItem(x)}),g()),[g]),S={books:e,quizzes:s,translations:o,loading:l,error:d,refreshData:T,setBooks:t,setQuizzes:r,setTranslations:a};return m.jsx(Wu.Provider,{value:S,children:n})},Qt=()=>{const n=M.useContext(Wu);if(!n)throw new Error("useData must be used within a DataProvider");return n},Ju=M.createContext(null),g_=()=>{var t;const n=localStorage.getItem("language");if(n&&Zn[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&Zn[e]?e:"en"},y_=({children:n})=>{const{translations:e}=Qt(),[t,s]=M.useState(g_);M.useEffect(()=>{document.documentElement.lang=t},[t]);const r=M.useCallback(p=>{e[p]&&(s(p),localStorage.setItem("language",p))},[e]),o=M.useCallback((p,g={})=>{const T=p.split(".");let S=e[t];for(const x of T)if(S&&typeof S=="object"&&x in S)S=S[x];else{S=e.en;for(const k of T)if(S&&typeof S=="object"&&k in S)S=S[k];else return p;break}return typeof S=="string"&&Object.keys(g).length>0?S.replace(/\{(\w+)\}/g,(x,k)=>g[k]!==void 0?g[k]:x):S||p},[t,e]),a=M.useCallback(p=>{var g,T;return((T=(g=e[t])==null?void 0:g.books)==null?void 0:T[p])||p},[t,e]),l=M.useCallback(p=>{var T;const g=((T=e[t])==null?void 0:T.scores)||e.en.scores;return p===100?g.perfect:p>=90?g.excellent:p>=80?g.great:p>=70?g.good:p>=60?g.notBad:p>=50?g.keepPracticing:g.tryAgain},[t,e]),h=M.useMemo(()=>Object.keys(e),[e]),d=M.useMemo(()=>({language:t,setLanguage:r,t:o,translateBook:a,getScoreMessage:l,availableLanguages:h}),[t,r,o,a,l,h]);return m.jsx(Ju.Provider,{value:d,children:n})},_n=()=>{const n=M.useContext(Ju);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},__=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:s,onNavigateAdmin:r})=>{const{stats:o}=xc(),{t:a,language:l}=_n(),{quizzes:h}=Qt();return m.jsx("div",{className:"home-container",children:m.jsxs("div",{className:"home-content",children:[m.jsx("header",{className:"home-header",children:m.jsxs("div",{className:"logo-container",children:[m.jsx("div",{className:"logo",children:m.jsx("span",{className:"logo-icon",children:"📖"})}),m.jsx("h1",{className:"app-title",children:a("appName")}),m.jsx("p",{className:"app-subtitle",children:a("appSubtitle")})]})}),m.jsxs(qs,{className:"welcome-card",children:[m.jsx("h2",{className:"welcome-title",children:a("home.welcomeTitle")}),m.jsx("p",{className:"welcome-description",children:a("home.welcomeDescription")}),m.jsxs("div",{className:"quiz-info",children:[m.jsxs("div",{className:"info-item",children:[m.jsx("span",{className:"info-icon",children:"📚"}),m.jsx("span",{className:"info-text",children:a("home.booksCount")})]}),m.jsxs("div",{className:"info-item",children:[m.jsx("span",{className:"info-icon",children:"⏱️"}),m.jsx("span",{className:"info-text",children:a("home.unlimitedTime")})]})]}),m.jsx("h3",{className:"quiz-type-title",children:a("home.selectQuizType")}),m.jsxs("div",{className:"quiz-category",children:[m.jsx("h4",{className:"quiz-category-title",children:a("home.oldTestament")}),m.jsxs("div",{className:"quiz-types",children:[m.jsxs("button",{className:"quiz-type-card",onClick:n,children:[m.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.order.icon")}),m.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.order.title")}),m.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.order.description")})]}),m.jsxs("button",{className:"quiz-type-card",onClick:e,children:[m.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.complete.icon")}),m.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.complete.title")}),m.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.complete.description")})]})]})]}),m.jsxs("div",{className:"quiz-category",children:[m.jsx("h4",{className:"quiz-category-title",children:a("home.knowledge")}),m.jsx("div",{className:"quiz-types",children:h.map(d=>{var p,g,T,S;return m.jsxs("button",{className:"quiz-type-card",onClick:()=>{d.id==="genesis-covenants"?t():s&&s(d.id)},children:[m.jsx("span",{className:"quiz-type-icon",children:d.icon||"📝"}),m.jsx("span",{className:"quiz-type-name",children:((p=d.title)==null?void 0:p[l])||((g=d.title)==null?void 0:g.en)||d.id}),m.jsx("span",{className:"quiz-type-desc",children:((T=d.description)==null?void 0:T[l])||((S=d.description)==null?void 0:S.en)||""})]},d.id)})})]})]}),o.totalAttempts>0&&m.jsxs(qs,{className:"stats-card",children:[m.jsx("h3",{className:"stats-title",children:a("home.yourProgress")}),m.jsxs("div",{className:"stats-grid",children:[m.jsxs("div",{className:"stat-item",children:[m.jsx("div",{className:"stat-value",children:o.totalAttempts}),m.jsx("div",{className:"stat-label",children:a("home.attempts")})]}),m.jsxs("div",{className:"stat-item",children:[m.jsxs("div",{className:"stat-value",children:[o.bestScore,"%"]}),m.jsx("div",{className:"stat-label",children:a("home.bestScore")})]}),m.jsxs("div",{className:"stat-item",children:[m.jsxs("div",{className:"stat-value",children:[o.averageScore,"%"]}),m.jsx("div",{className:"stat-label",children:a("home.average")})]})]})]}),m.jsxs("footer",{className:"home-footer",children:[m.jsx("p",{className:"footer-text",children:a("home.footerText")}),m.jsx("button",{className:"admin-link",onClick:r,onContextMenu:d=>{d.preventDefault(),r==null||r()},children:"⚙"})]})]})})},E_=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},v_=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",Yu=M.createContext(),T_=({children:n})=>{const{books:e}=Qt(),[t,s]=M.useState([]),[r,o]=M.useState([]),[a,l]=M.useState(!1),h=M.useCallback(()=>{s(E_([...e])),o([]),l(!0)},[e]),d=M.useCallback(V=>{o(z=>[...z,V])},[]),p=M.useCallback(()=>{o(V=>V.slice(0,-1))},[]),g=M.useCallback(()=>{o([])},[]),T=M.useCallback(()=>{let V=0;r.forEach((j,J)=>{e[J]===j&&V++});const z=e.length,$=Math.round(V/z*100);return{correct:V,total:z,percentage:$,selections:r}},[r,e]),S=M.useCallback(V=>r.includes(V),[r]),x=M.useCallback(V=>{const z=r.indexOf(V);return z===-1?null:z+1},[r]),k={shuffledBooks:t,selectedBooks:r,isInitialized:a,initializeQuiz:h,selectBook:d,undoLastSelection:p,resetSelections:g,calculateScore:T,isBookSelected:S,getSelectionIndex:x};return m.jsx(Yu.Provider,{value:k,children:n})},w_=()=>{const n=M.useContext(Yu);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},I_=({book:n,displayName:e,isSelected:t,selectionIndex:s,onClick:r})=>m.jsx("div",{className:`book-card ${t?"book-card-selected":""}`,onClick:r,role:"button",tabIndex:t?-1:0,onKeyPress:o=>{(o.key==="Enter"||o.key===" ")&&r()},"aria-pressed":t,children:m.jsxs("div",{className:"book-card-content",children:[m.jsx("span",{className:"book-name",children:e||n}),t&&m.jsx("div",{className:"selection-badge",children:s})]})}),_o=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return m.jsx("div",{className:"progress-bar-container",children:m.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},oe=({onClick:n,variant:e="primary",size:t="medium",disabled:s=!1,className:r="",children:o,...a})=>{const l=`button button-${e} button-${t} ${r}`;return m.jsx("button",{className:l,onClick:n,disabled:s,...a,children:o})},A_=({onComplete:n})=>{const{shuffledBooks:e,selectedBooks:t,isInitialized:s,initializeQuiz:r,selectBook:o,undoLastSelection:a,resetSelections:l,calculateScore:h,isBookSelected:d,getSelectionIndex:p}=w_(),{t:g,translateBook:T}=_n(),[S,x]=M.useState(!1);M.useEffect(()=>{s||r()},[s,r]);const k=D=>{d(D)||o(D)},V=()=>{t.length===e.length&&x(!0)},z=()=>{const D=h();n(D)},$=()=>{x(!1)},j=e.length>0?t.length/e.length*100:0,J=t.length===e.length;return m.jsxs("div",{className:"quiz-container",children:[m.jsxs("header",{className:"quiz-header",children:[m.jsx("h1",{className:"quiz-title",children:g("quiz.title")}),m.jsx("p",{className:"quiz-instruction",children:g("quiz.instruction")})]}),m.jsxs("div",{className:"quiz-progress",children:[m.jsx(_o,{progress:j}),m.jsxs("div",{className:"progress-text",children:[t.length," / ",e.length," ",g("quiz.selected")]})]}),m.jsx("div",{className:"quiz-content",children:m.jsx("div",{className:"books-grid",children:e.map((D,B)=>m.jsx(I_,{book:D,displayName:T(D),isSelected:d(D),selectionIndex:p(D),onClick:()=>k(D)},`${D}-${B}`))})}),m.jsxs("div",{className:"quiz-actions",children:[m.jsx(oe,{onClick:a,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.undoLast")}),m.jsx(oe,{onClick:l,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.resetAll")}),m.jsx(oe,{onClick:V,variant:"primary",disabled:!J,className:"action-button submit-button",children:g("quiz.submitAnswer")})]}),S&&m.jsx("div",{className:"confirmation-overlay",onClick:$,children:m.jsxs("div",{className:"confirmation-modal",onClick:D=>D.stopPropagation(),children:[m.jsx("h2",{className:"confirmation-title",children:g("quiz.confirmTitle")}),m.jsx("p",{className:"confirmation-text",children:g("quiz.confirmText",{count:e.length})}),m.jsxs("div",{className:"confirmation-actions",children:[m.jsx(oe,{onClick:$,variant:"secondary",children:g("quiz.goBack")}),m.jsx(oe,{onClick:z,variant:"primary",children:g("quiz.yesSubmit")})]})]})})]})},b_=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const s=t.split(" ");if(s.length>1)return`${s[0]} ${s[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},ri=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),S_=({onComplete:n})=>{const{t:e,translateBook:t,language:s}=_n(),{books:r}=Qt(),[o,a]=M.useState(0),[l,h]=M.useState(""),[d,p]=M.useState(Array(r.length).fill(null)),[g,T]=M.useState(!1),[S,x]=M.useState(null),[k,V]=M.useState(!1),z=M.useRef(null),$=r[o],j=t($),J=b_($,j);M.useEffect(()=>{z.current&&!g&&z.current.focus()},[o,g]);const D=()=>{const Z=ri(l),ae=ri(j),ze=ri($),Ie=Z===ae||Z===ze;x(Ie),T(!0);const he=[...d];he[o]={input:l,correct:Ie,correctAnswer:j},p(he)},B=()=>{o<r.length-1?(a(o+1),h(""),T(!1),x(null)):_()},v=()=>{const Z=[...d];Z[o]={input:"",correct:!1,correctAnswer:j,skipped:!0},p(Z),o<r.length-1?(a(o+1),h(""),T(!1),x(null)):_()},y=Z=>{Z.key==="Enter"&&(g?B():l.trim()&&D())},_=()=>{V(!0)},I=()=>{const Z=d.filter(Ie=>Ie==null?void 0:Ie.correct).length,ae=r.length,ze=Math.round(Z/ae*100);n({correct:Z,total:ae,percentage:ze,selections:d.map((Ie,he)=>(Ie==null?void 0:Ie.input)||""),answers:d,quizType:"complete"})},w=()=>{V(!1)},A=d.filter(Z=>Z!==null).length,E=A/r.length*100;return m.jsxs("div",{className:"complete-quiz-container",children:[m.jsxs("header",{className:"complete-quiz-header",children:[m.jsx("h1",{className:"complete-quiz-title",children:e("completeQuiz.title")}),m.jsx("p",{className:"complete-quiz-instruction",children:e("completeQuiz.instruction")})]}),m.jsxs("div",{className:"complete-quiz-progress",children:[m.jsx(_o,{progress:E}),m.jsx("div",{className:"progress-text",children:e("completeQuiz.progress",{completed:A,total:r.length})})]}),m.jsxs("div",{className:"complete-quiz-content",children:[m.jsx("div",{className:"book-number",children:o+1}),m.jsxs("div",{className:"hint-card",children:[m.jsx("div",{className:"hint-text",children:J}),m.jsx("div",{className:"hint-label",children:e("completeQuiz.hint",{hint:`${j.length} ${s==="es"?"letras":"letters"}`})})]}),g?m.jsxs("div",{className:`result-section ${S?"correct":"incorrect"}`,children:[m.jsx("div",{className:"result-icon",children:S?"✓":"✗"}),m.jsx("div",{className:"result-message",children:e(S?"completeQuiz.correct":"completeQuiz.incorrect")}),!S&&m.jsx("div",{className:"correct-answer",children:e("completeQuiz.correctAnswer",{answer:j})}),m.jsx(oe,{onClick:B,variant:"primary",className:"next-button",children:o<r.length-1?e("completeQuiz.next"):e("completeQuiz.submitAll")})]}):m.jsxs("div",{className:"input-section",children:[m.jsx("input",{ref:z,type:"text",className:"book-input",value:l,onChange:Z=>h(Z.target.value),onKeyPress:y,placeholder:e("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),m.jsxs("div",{className:"input-actions",children:[m.jsx(oe,{onClick:v,variant:"secondary",className:"skip-button",children:e("completeQuiz.skip")}),m.jsx(oe,{onClick:D,variant:"primary",disabled:!l.trim(),className:"check-button",children:e("completeQuiz.check")})]})]})]}),m.jsx("div",{className:"books-overview",children:r.map((Z,ae)=>{const ze=d[ae];let Ie="pending";return ze?Ie=ze.correct?"correct":"incorrect":ae===o&&(Ie="current"),m.jsx("div",{className:`book-dot ${Ie}`,title:`${ae+1}. ${t(r[ae])}`},ae)})}),k&&m.jsx("div",{className:"confirmation-overlay",onClick:w,children:m.jsxs("div",{className:"confirmation-modal",onClick:Z=>Z.stopPropagation(),children:[m.jsx("h2",{className:"confirmation-title",children:e("completeQuiz.confirmTitle")}),m.jsx("p",{className:"confirmation-text",children:e("completeQuiz.confirmText",{completed:A,total:r.length})}),m.jsxs("div",{className:"confirmation-actions",children:[m.jsx(oe,{onClick:w,variant:"secondary",children:e("quiz.goBack")}),m.jsx(oe,{onClick:I,variant:"primary",children:e("quiz.yesSubmit")})]})]})})]})},C_=({onComplete:n,quizId:e="genesis-covenants"})=>{const{t,language:s}=_n(),{quizzes:r}=Qt(),[o,a]=M.useState([]),[l,h]=M.useState(0),[d,p]=M.useState(null),[g,T]=M.useState(!1),[S,x]=M.useState([]);M.useEffect(()=>{const v=r.find(_=>_.id===e)||r[0];if(!v)return;const y=v[s]||v.en||[];a(f_(y)),x([]),h(0),p(null),T(!1)},[s,e,r]);const k=o[l],V=o.length>0?(l+1)/o.length*100:0,z=B=>{g||p(B)},$=()=>{if(d===null)return;const B=d===k.correctIndex,v=[...S];v[l]={questionId:k.id,selectedIndex:d,correctIndex:k.correctIndex,correct:B},x(v),T(!0)},j=()=>{l<o.length-1?(h(l+1),p(null),T(!1)):J()},J=()=>{const B=S.filter(_=>_==null?void 0:_.correct).length,v=o.length,y=Math.round(B/v*100);n({correct:B,total:v,percentage:y,answers:S,questions:o,quizType:"covenants"})};if(!k)return m.jsx("div",{className:"mc-quiz-container",children:m.jsx("div",{className:"mc-loading",children:"Loading..."})});const D=d===k.correctIndex;return m.jsxs("div",{className:"mc-quiz-container",children:[m.jsxs("header",{className:"mc-quiz-header",children:[m.jsx("h1",{className:"mc-quiz-title",children:t("multipleChoice.title")}),m.jsx("p",{className:"mc-quiz-instruction",children:t("multipleChoice.instruction")})]}),m.jsxs("div",{className:"mc-quiz-progress",children:[m.jsx(_o,{progress:V}),m.jsx("div",{className:"mc-progress-text",children:t("multipleChoice.question",{current:l+1,total:o.length})})]}),m.jsxs("div",{className:"mc-quiz-content",children:[m.jsxs("div",{className:"mc-question-card",children:[m.jsx("div",{className:"mc-question-text",children:k.question}),m.jsx("div",{className:"mc-options",children:k.options.map((B,v)=>{let y="mc-option";return g?v===k.correctIndex?y+=" correct":v===d&&!D&&(y+=" incorrect"):v===d&&(y+=" selected"),m.jsxs("button",{className:y,onClick:()=>z(v),disabled:g,children:[m.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+v)}),m.jsx("span",{className:"mc-option-text",children:B}),g&&v===k.correctIndex&&m.jsx("span",{className:"mc-option-icon correct",children:"✓"}),g&&v===d&&!D&&m.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},v)})}),g&&m.jsxs("div",{className:`mc-result ${D?"correct":"incorrect"}`,children:[m.jsx("div",{className:"mc-result-message",children:t(D?"multipleChoice.correct":"multipleChoice.incorrect")}),!D&&m.jsxs("div",{className:"mc-correct-answer",children:[t("multipleChoice.correctAnswerWas")," ",k.options[k.correctIndex]]}),m.jsxs("div",{className:"mc-reference",children:[t("multipleChoice.reference")," ",k.reference]})]})]}),m.jsx("div",{className:"mc-quiz-actions",children:g?m.jsx(oe,{onClick:j,variant:"primary",className:"mc-action-button",children:l<o.length-1?t("multipleChoice.next"):t("multipleChoice.finish")}):m.jsx(oe,{onClick:$,variant:"primary",disabled:d===null,className:"mc-action-button",children:t("completeQuiz.check")})})]}),m.jsx("div",{className:"mc-dots-overview",children:o.map((B,v)=>{const y=S[v];let _="pending";return y?_=y.correct?"correct":"incorrect":v===l&&(_="current"),m.jsx("div",{className:`mc-dot ${_}`},v)})})]})},R_=({score:n,onRetry:e,onHome:t})=>{const{updateStats:s}=xc(),{t:r,translateBook:o,getScoreMessage:a}=_n(),{books:l}=Qt();if(M.useEffect(()=>{n&&s(n)},[n,s]),!n)return m.jsxs("div",{className:"results-container",children:[m.jsx("p",{children:r("results.noResults")}),m.jsx(oe,{onClick:t,children:r("results.goHome")})]});const{correct:h,total:d,percentage:p,selections:g,answers:T,questions:S,quizType:x}=n,k=a(p),V=v_(p),z=x==="complete",$=x==="covenants";return m.jsx("div",{className:"results-container",children:m.jsxs("div",{className:"results-content",children:[m.jsx("header",{className:"results-header",children:m.jsx("h1",{className:"results-title",children:r("results.title")})}),m.jsxs(qs,{className:"score-card",children:[m.jsxs("div",{className:"score-display",style:{borderColor:V},children:[m.jsxs("div",{className:"score-percentage",style:{color:V},children:[p,"%"]}),m.jsx("div",{className:"score-message",style:{color:V},children:k}),m.jsx("div",{className:"score-details",children:r("results.outOf",{correct:h,total:d})})]}),m.jsxs("div",{className:"score-breakdown",children:[m.jsxs("div",{className:"breakdown-item correct",children:[m.jsx("span",{className:"breakdown-icon",children:"✓"}),m.jsxs("span",{className:"breakdown-text",children:[h," ",r("results.correct")]})]}),m.jsxs("div",{className:"breakdown-item incorrect",children:[m.jsx("span",{className:"breakdown-icon",children:"✗"}),m.jsxs("span",{className:"breakdown-text",children:[d-h," ",r("results.incorrect")]})]})]})]}),m.jsxs(qs,{className:"details-card",children:[m.jsx("h2",{className:"details-title",children:r("results.yourAnswers")}),m.jsx("div",{className:"answers-list",children:$?T==null?void 0:T.map((j,J)=>{var _,I;const D=S==null?void 0:S[J],B=j==null?void 0:j.correct,v=((_=D==null?void 0:D.options)==null?void 0:_[j==null?void 0:j.selectedIndex])||r("multipleChoice.skipped"),y=(I=D==null?void 0:D.options)==null?void 0:I[D==null?void 0:D.correctIndex];return m.jsxs("div",{className:`answer-item ${B?"correct":"incorrect"}`,children:[m.jsx("div",{className:"answer-position",children:J+1}),m.jsxs("div",{className:"answer-content",children:[m.jsx("div",{className:"answer-question",children:D==null?void 0:D.question}),m.jsxs("div",{className:"answer-your-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),m.jsx("span",{className:"answer-book",children:v})]}),!B&&m.jsxs("div",{className:"answer-correct-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),m.jsx("span",{className:"answer-book",children:y})]}),m.jsx("div",{className:"answer-reference",children:D==null?void 0:D.reference})]}),m.jsx("div",{className:"answer-status",children:B?m.jsx("span",{className:"status-icon correct",children:"✓"}):m.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},J)}):z?T==null?void 0:T.map((j,J)=>{const D=l[J],B=j==null?void 0:j.correct,v=(j==null?void 0:j.input)||"-";return m.jsxs("div",{className:`answer-item ${B?"correct":"incorrect"}`,children:[m.jsx("div",{className:"answer-position",children:J+1}),m.jsxs("div",{className:"answer-content",children:[m.jsxs("div",{className:"answer-your-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),m.jsx("span",{className:"answer-book",children:v})]}),!B&&m.jsxs("div",{className:"answer-correct-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),m.jsx("span",{className:"answer-book",children:o(D)})]})]}),m.jsx("div",{className:"answer-status",children:B?m.jsx("span",{className:"status-icon correct",children:"✓"}):m.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},J)}):g==null?void 0:g.map((j,J)=>{const D=l[J],B=j===D;return m.jsxs("div",{className:`answer-item ${B?"correct":"incorrect"}`,children:[m.jsx("div",{className:"answer-position",children:J+1}),m.jsxs("div",{className:"answer-content",children:[m.jsxs("div",{className:"answer-your-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),m.jsx("span",{className:"answer-book",children:o(j)})]}),!B&&m.jsxs("div",{className:"answer-correct-choice",children:[m.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),m.jsx("span",{className:"answer-book",children:o(D)})]})]}),m.jsx("div",{className:"answer-status",children:B?m.jsx("span",{className:"status-icon correct",children:"✓"}):m.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},J)})})]}),m.jsxs("div",{className:"results-actions",children:[m.jsx(oe,{onClick:t,variant:"secondary",size:"large",children:r("results.home")}),m.jsx(oe,{onClick:e,variant:"primary",size:"large",children:r("results.tryAgain")})]})]})})};async function P_(){const n={books:!1,quizzes:!1,translations:!1};try{await Qu(Ku),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await Hu("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ar.en,es:ar.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await or("en",Zn.en),await or("es",Zn.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const N_="admin123",x_=({onBack:n})=>{var Wt,Cn,_e;const{books:e,quizzes:t,translations:s,refreshData:r}=Qt(),[o,a]=M.useState(!1),[l,h]=M.useState(""),[d,p]=M.useState("books"),[g,T]=M.useState(""),[S,x]=M.useState(!1),[k,V]=M.useState([]),[z,$]=M.useState(""),[j,J]=M.useState(null),[D,B]=M.useState(null),[v,y]=M.useState(!1),[_,I]=M.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[w,A]=M.useState("en"),[E,Z]=M.useState({}),[ae,ze]=M.useState("");M.useEffect(()=>{V([...e])},[e]),M.useEffect(()=>{s[w]&&Z(JSON.parse(JSON.stringify(s[w])))},[w,s]);const Ie=C=>{C.preventDefault(),l===N_?(a(!0),T("")):T("Invalid password")},he=C=>{T(C),setTimeout(()=>T(""),3e3)},Ht=async()=>{x(!0);try{await Qu(k),await r(),he("Books saved successfully!")}catch(C){he("Error saving books: "+C.message)}x(!1)},ps=()=>{z.trim()&&!k.includes(z.trim())&&(V([...k,z.trim()]),$(""))},gs=C=>{V(k.filter((U,K)=>K!==C))},En=(C,U)=>{const K=[...k],re=C+U;re<0||re>=K.length||([K[C],K[re]]=[K[re],K[C]],V(K))},ys=C=>{const U=t.find(K=>K.id===C);U&&(J(C),B(JSON.parse(JSON.stringify(U))))},Kt=async()=>{if(!(!D||!j)){x(!0);try{const{id:C,...U}=D;await Hu(j,U),await r(),he("Quiz saved successfully!")}catch(C){he("Error saving quiz: "+C.message)}x(!1)}},vn=async()=>{if(_.id.trim()){x(!0);try{const C={title:{en:_.titleEn,es:_.titleEs},description:{en:_.descEn,es:_.descEs},icon:_.icon||"📝",category:_.category,en:[],es:[]};await h_(_.id.trim(),C),await r(),y(!1),I({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),he("Quiz created successfully!")}catch(C){he("Error creating quiz: "+C.message)}x(!1)}},Tn=async C=>{if(window.confirm(`Delete quiz "${C}"?`)){x(!0);try{await d_(C),await r(),j===C&&(J(null),B(null)),he("Quiz deleted!")}catch(U){he("Error deleting quiz: "+U.message)}x(!1)}},wn=C=>{var K;if(!D)return;const U={id:(((K=D[C])==null?void 0:K.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};B({...D,[C]:[...D[C]||[],U]})},St=(C,U,K,re)=>{const ee={...D};ee[C]=[...ee[C]],ee[C][U]={...ee[C][U],[K]:re},B(ee)},_s=(C,U,K,re)=>{const ee={...D};ee[C]=[...ee[C]];const fe={...ee[C][U]};fe.options=[...fe.options],fe.options[K]=re,ee[C][U]=fe,B(ee)},Cr=(C,U)=>{const K={...D};K[C]=K[C].filter((re,ee)=>ee!==U),B(K)},In=(C,U="")=>{const K={};for(const re of Object.keys(C)){const ee=U?`${U}.${re}`:re;typeof C[re]=="object"&&C[re]!==null&&!Array.isArray(C[re])?Object.assign(K,In(C[re],ee)):K[ee]=C[re]}return K},Es=C=>{const U={};for(const[K,re]of Object.entries(C)){const ee=K.split(".");let fe=U;for(let De=0;De<ee.length-1;De++)ee[De]in fe||(fe[ee[De]]={}),fe=fe[ee[De]];fe[ee[ee.length-1]]=re}return U},An=async()=>{x(!0);try{await or(w,E),await r(),he(`Translations (${w}) saved!`)}catch(C){he("Error saving translations: "+C.message)}x(!1)},bn=(C,U)=>{const K=In(E);K[C]=U,Z(Es(K))},Rr=async()=>{if(!(!ae.trim()||s[ae.trim()])){x(!0);try{const C=JSON.parse(JSON.stringify(s.en||{}));await or(ae.trim(),C),await r(),A(ae.trim()),ze(""),he(`Language "${ae.trim()}" added!`)}catch(C){he("Error adding language: "+C.message)}x(!1)}},Sn=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){x(!0);try{const C=await P_();await r(),he(`Seed complete - Books: ${C.books?"OK":"FAIL"}, Quizzes: ${C.quizzes?"OK":"FAIL"}, Translations: ${C.translations?"OK":"FAIL"}`)}catch(C){he("Seed error: "+C.message)}x(!1)}};return o?m.jsxs("div",{className:"admin-container",children:[m.jsxs("header",{className:"admin-header",children:[m.jsx("h1",{children:"Admin Panel"}),m.jsxs("div",{className:"admin-header-actions",children:[m.jsx(oe,{onClick:Sn,variant:"secondary",disabled:S,children:"Seed Data"}),m.jsx(oe,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),g&&m.jsx("div",{className:"admin-status-bar",children:g}),m.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(C=>m.jsx("button",{className:`admin-tab ${d===C?"active":""}`,onClick:()=>p(C),children:C.charAt(0).toUpperCase()+C.slice(1)},C))}),m.jsxs("div",{className:"admin-content",children:[d==="books"&&m.jsxs("div",{className:"admin-section",children:[m.jsxs("h2",{children:["Old Testament Books (",k.length,")"]}),m.jsx("div",{className:"admin-books-list",children:k.map((C,U)=>m.jsxs("div",{className:"admin-book-item",children:[m.jsx("span",{className:"admin-book-number",children:U+1}),m.jsx("span",{className:"admin-book-name",children:C}),m.jsxs("div",{className:"admin-book-actions",children:[m.jsx("button",{onClick:()=>En(U,-1),disabled:U===0,children:"↑"}),m.jsx("button",{onClick:()=>En(U,1),disabled:U===k.length-1,children:"↓"}),m.jsx("button",{onClick:()=>gs(U),className:"admin-delete-btn",children:"✕"})]})]},U))}),m.jsxs("div",{className:"admin-add-row",children:[m.jsx("input",{type:"text",value:z,onChange:C=>$(C.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:C=>C.key==="Enter"&&ps()}),m.jsx(oe,{onClick:ps,variant:"secondary",children:"Add"})]}),m.jsx(oe,{onClick:Ht,variant:"primary",disabled:S,children:S?"Saving...":"Save Books"})]}),d==="quizzes"&&m.jsxs("div",{className:"admin-section",children:[m.jsx("h2",{children:"Quizzes"}),m.jsx("div",{className:"admin-quiz-list",children:t.map(C=>{var U,K;return m.jsxs("div",{className:"admin-quiz-item",children:[m.jsxs("button",{className:`admin-quiz-select ${j===C.id?"active":""}`,onClick:()=>ys(C.id),children:[m.jsx("span",{children:C.icon||"📝"}),m.jsx("span",{children:((U=C.title)==null?void 0:U.en)||C.id}),m.jsxs("span",{className:"admin-quiz-count",children:[((K=C.en)==null?void 0:K.length)||0," Q"]})]}),m.jsx("button",{className:"admin-delete-btn",onClick:()=>Tn(C.id),children:"✕"})]},C.id)})}),m.jsx(oe,{onClick:()=>y(!v),variant:"secondary",children:v?"Cancel":"+ New Quiz"}),v&&m.jsxs("div",{className:"admin-new-quiz-form",children:[m.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:_.id,onChange:C=>I({..._,id:C.target.value})}),m.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:_.titleEn,onChange:C=>I({..._,titleEn:C.target.value})}),m.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:_.titleEs,onChange:C=>I({..._,titleEs:C.target.value})}),m.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:_.descEn,onChange:C=>I({..._,descEn:C.target.value})}),m.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:_.descEs,onChange:C=>I({..._,descEs:C.target.value})}),m.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:_.icon,onChange:C=>I({..._,icon:C.target.value})}),m.jsx(oe,{onClick:vn,variant:"primary",disabled:S,children:"Create Quiz"})]}),D&&j&&m.jsxs("div",{className:"admin-quiz-editor",children:[m.jsxs("h3",{children:["Editing: ",((Wt=D.title)==null?void 0:Wt.en)||j]}),m.jsxs("div",{className:"admin-quiz-meta",children:[m.jsxs("label",{children:["Title (EN):",m.jsx("input",{className:"admin-input",value:((Cn=D.title)==null?void 0:Cn.en)||"",onChange:C=>B({...D,title:{...D.title,en:C.target.value}})})]}),m.jsxs("label",{children:["Title (ES):",m.jsx("input",{className:"admin-input",value:((_e=D.title)==null?void 0:_e.es)||"",onChange:C=>B({...D,title:{...D.title,es:C.target.value}})})]}),m.jsxs("label",{children:["Icon:",m.jsx("input",{className:"admin-input",value:D.icon||"",onChange:C=>B({...D,icon:C.target.value})})]})]}),["en","es"].map(C=>{var U,K;return m.jsxs("div",{className:"admin-questions-section",children:[m.jsxs("h4",{children:["Questions (",C.toUpperCase(),") - ",((U=D[C])==null?void 0:U.length)||0]}),(K=D[C])==null?void 0:K.map((re,ee)=>m.jsxs("div",{className:"admin-question-card",children:[m.jsxs("div",{className:"admin-question-header",children:[m.jsxs("span",{children:["Q",ee+1]}),m.jsx("button",{className:"admin-delete-btn",onClick:()=>Cr(C,ee),children:"✕"})]}),m.jsx("textarea",{className:"admin-textarea",value:re.question,onChange:fe=>St(C,ee,"question",fe.target.value),placeholder:"Question text"}),re.options.map((fe,De)=>m.jsxs("div",{className:"admin-option-row",children:[m.jsx("input",{type:"radio",name:`correct-${C}-${ee}`,checked:re.correctIndex===De,onChange:()=>St(C,ee,"correctIndex",De)}),m.jsx("input",{className:"admin-input",value:fe,onChange:vs=>_s(C,ee,De,vs.target.value),placeholder:`Option ${String.fromCharCode(65+De)}`})]},De)),m.jsx("input",{className:"admin-input",value:re.reference||"",onChange:fe=>St(C,ee,"reference",fe.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},ee)),m.jsxs(oe,{onClick:()=>wn(C),variant:"secondary",children:["+ Add Question (",C.toUpperCase(),")"]})]},C)}),m.jsx(oe,{onClick:Kt,variant:"primary",disabled:S,children:S?"Saving...":"Save Quiz"})]})]}),d==="translations"&&m.jsxs("div",{className:"admin-section",children:[m.jsx("h2",{children:"Translations"}),m.jsx("div",{className:"admin-lang-selector",children:Object.keys(s).map(C=>m.jsx("button",{className:`admin-tab ${w===C?"active":""}`,onClick:()=>A(C),children:C.toUpperCase()},C))}),m.jsxs("div",{className:"admin-add-lang",children:[m.jsx("input",{className:"admin-input",value:ae,onChange:C=>ze(C.target.value),placeholder:"New language code (e.g., fr)"}),m.jsx(oe,{onClick:Rr,variant:"secondary",disabled:S,children:"Add Language"})]}),m.jsx("div",{className:"admin-translations-editor",children:Object.entries(In(E)).map(([C,U])=>m.jsxs("div",{className:"admin-translation-row",children:[m.jsx("label",{className:"admin-translation-key",children:C}),typeof U=="string"&&U.length>60?m.jsx("textarea",{className:"admin-textarea",value:U,onChange:K=>bn(C,K.target.value)}):m.jsx("input",{className:"admin-input",value:typeof U=="string"?U:JSON.stringify(U),onChange:K=>bn(C,K.target.value)})]},C))}),m.jsx(oe,{onClick:An,variant:"primary",disabled:S,children:S?"Saving...":`Save Translations (${w.toUpperCase()})`})]})]})]}):m.jsx("div",{className:"admin-container",children:m.jsxs("div",{className:"admin-login",children:[m.jsx("h2",{children:"Admin Access"}),m.jsxs("form",{onSubmit:Ie,children:[m.jsx("input",{type:"password",value:l,onChange:C=>h(C.target.value),placeholder:"Enter password",className:"admin-input",autoFocus:!0}),m.jsx(oe,{type:"submit",variant:"primary",children:"Login"})]}),g&&m.jsx("p",{className:"admin-status error",children:g}),m.jsx(oe,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})},V_=()=>{const{language:n,setLanguage:e,t}=_n();return m.jsxs("div",{className:"language-selector",children:[m.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),m.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})};function k_(){const[n,e]=M.useState("home"),[t,s]=M.useState(null),[r,o]=M.useState("order"),[a,l]=M.useState("genesis-covenants"),h=()=>{o("order"),e("quiz"),s(null)},d=()=>{o("complete"),e("completeQuiz"),s(null)},p=()=>{o("covenants"),l("genesis-covenants"),e("covenantsQuiz"),s(null)},g=V=>{o("covenants"),l(V),e("covenantsQuiz"),s(null)},T=V=>{s({...V,quizType:V.quizType||r}),e("results")},S=()=>{e("home"),s(null)},x=()=>{e("admin")},k=()=>{r==="complete"?d():r==="covenants"?g(a):h()};return m.jsx(p_,{children:m.jsx(y_,{children:m.jsx(T_,{children:m.jsxs("div",{className:"app",children:[m.jsx("div",{className:"app-language-selector",children:m.jsx(V_,{})}),n==="home"&&m.jsx(__,{onStartOrder:h,onStartComplete:d,onStartCovenants:p,onStartQuiz:g,onNavigateAdmin:x}),n==="quiz"&&m.jsx(A_,{onComplete:T}),n==="completeQuiz"&&m.jsx(S_,{onComplete:T}),n==="covenantsQuiz"&&m.jsx(C_,{onComplete:T,quizId:a}),n==="results"&&m.jsx(R_,{score:t,onRetry:k,onHome:S}),n==="admin"&&m.jsx(x_,{onBack:S})]})})})})}const D_="modulepreload",O_=function(n){return"/ITIApp/"+n},Rc={},M_=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(h=>{if(h=O_(h),h in Rc)return;Rc[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":D_,d||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((T,S)=>{g.addEventListener("load",T),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};function L_(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:r,onRegisteredSW:o,onRegisterError:a}=n;let l,h;const d=async(g=!0)=>{await h};async function p(){if("serviceWorker"in navigator){if(l=await M_(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(g=>{a==null||a(g)}),!l)return;l.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),l.addEventListener("installed",g=>{g.isUpdate||s==null||s()}),l.register({immediate:e}).then(g=>{o?o("/ITIApp/sw.js",g):r==null||r(g)}).catch(g=>{a==null||a(g)})}}return h=p(),d}const j_=L_({onNeedRefresh(){confirm("New content available. Reload?")&&j_(!0)},onOfflineReady(){console.log("App ready to work offline")}});ii.createRoot(document.getElementById("root")).render(m.jsx(Ih.StrictMode,{children:m.jsx(k_,{})}));
