import{r as O,a as zf,R as Bf}from"./react-vendor-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var mu={exports:{}},ui={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=O,$f=Symbol.for("react.element"),Gf=Symbol.for("react.fragment"),Hf=Object.prototype.hasOwnProperty,Wf=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kf={key:!0,ref:!0,__self:!0,__source:!0};function pu(n,e,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)Hf.call(e,s)&&!Kf.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:$f,type:n,key:i,ref:a,props:r,_owner:Wf.current}}ui.Fragment=Gf;ui.jsx=pu;ui.jsxs=pu;mu.exports=ui;var f=mu.exports,mo={},Pc=zf;mo.createRoot=Pc.createRoot,mo.hydrateRoot=Pc.hydrateRoot;const Fr=({children:n,className:e="",...t})=>f.jsx("div",{className:`card ${e}`,...t,children:n}),Qf=(n,e)=>{const[t,s]=O.useState(()=>{try{const i=window.localStorage.getItem(n);return i?JSON.parse(i):e}catch(i){return console.error(`Error loading localStorage key "${n}":`,i),e}});return[t,i=>{try{const a=i instanceof Function?i(t):i;s(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},gu=()=>{const[n,e]=Qf("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=O.useCallback(r=>{e(i=>{const a=i.totalAttempts+1,l=i.totalCorrect+r.correct,u=Math.round(l/(a*r.total)*100);return{totalAttempts:a,bestScore:Math.max(i.bestScore,r.percentage),averageScore:u,totalCorrect:l,lastAttemptDate:new Date().toISOString()}})},[e]),s=O.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:s}},js={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit"},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar"},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},Jf=()=>{};var kc={};/**
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
 */const _u=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Yf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(v=64)),s.push(t[p],t[g],t[v],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||d==null||g==null)throw new Xf;const v=i<<2|l>>4;if(s.push(v),d!==64){const S=l<<4&240|d>>2;if(s.push(S),g!==64){const x=d<<6&192|g;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zf=function(n){const e=_u(n);return yu.encodeByteArray(e,!0)},Ur=function(n){return Zf(n).replace(/\./g,"")},Eu=function(n){try{return yu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function em(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tm=()=>em().__FIREBASE_DEFAULTS__,nm=()=>{if(typeof process>"u"||typeof kc>"u")return;const n=kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Eu(n[1]);return e&&JSON.parse(e)},hi=()=>{try{return Jf()||tm()||nm()||sm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Iu=n=>{var e,t;return(t=(e=hi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},rm=n=>{const e=Iu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},vu=()=>{var n;return(n=hi())==null?void 0:n.config},Tu=n=>{var e;return(e=hi())==null?void 0:e[`_${n}`]};/**
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
 */class im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function om(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ur(JSON.stringify(t)),Ur(JSON.stringify(a)),""].join(".")}const xs={};function am(){const n={prod:[],emulator:[]};for(const e of Object.keys(xs))xs[e]?n.emulator.push(e):n.prod.push(e);return n}function cm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function Au(n,e){if(typeof window>"u"||typeof document>"u"||!Hn(window.location.host)||xs[n]===e||xs[n]||Nc)return;xs[n]=e;function t(v){return`__firebase__banner__${v}`}const s="__firebase__banner",i=am().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Nc=!0,a()},v}function p(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=cm(s),S=t("text"),x=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),U=t("preprendIcon"),$=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const F=v.element;l(F),p(N,D);const K=d();u($,U),F.append($,x,N,K),document.body.appendChild(F)}i?(x.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function um(){var e;const n=(e=hi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fm(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mm(){return!um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function bu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pm="FirebaseError";class et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=pm,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?gm(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new et(r,l,s)}}function gm(n,e){return n.replace(_m,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const _m=/\{\$([^}]+)}/g;function ym(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(xc(i)&&xc(a)){if(!jt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function xc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ks(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Em(n,e){const t=new Im(n,e);return t.subscribe.bind(t)}class Im{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Yi),r.error===void 0&&(r.error=Yi),r.complete===void 0&&(r.complete=Yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yi(){}/**
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
 */const Tm=1e3,wm=2,Am=4*60*60*1e3,bm=.5;function Dc(n,e=Tm,t=wm){const s=e*Math.pow(t,n),r=Math.round(bm*s*(Math.random()-.5)*2);return Math.min(Am,s+r)}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Sm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new im;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rm(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cm(n){return n===tn?void 0:n}function Rm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const km={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Nm=Z.INFO,xm={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Dm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=xm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=Nm,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?km[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Vm=(n,e)=>e.some(t=>n instanceof t);let Vc,Oc;function Om(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lm(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,po=new WeakMap,Cu=new WeakMap,Xi=new WeakMap,qo=new WeakMap;function Mm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),qo.set(e,n),e}function jm(n){if(po.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});po.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fm(n){go=n(go)}function Um(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Zi(this),e,...t);return Cu.set(s,e.sort?e.sort():[e]),Dt(s)}:Lm().includes(n)?function(...e){return n.apply(Zi(this),e),Dt(Su.get(this))}:function(...e){return Dt(n.apply(Zi(this),e))}}function zm(n){return typeof n=="function"?Um(n):(n instanceof IDBTransaction&&jm(n),Vm(n,Om())?new Proxy(n,go):n)}function Dt(n){if(n instanceof IDBRequest)return Mm(n);if(Xi.has(n))return Xi.get(n);const e=zm(n);return e!==n&&(Xi.set(n,e),qo.set(e,n)),e}const Zi=n=>qo.get(n);function Ru(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=Dt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Dt(a.result),u.oldVersion,u.newVersion,Dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Bm=["get","getKey","getAll","getAllKeys","count"],qm=["put","add","delete","clear"],eo=new Map;function Lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=qm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&u.done]))[0]};return eo.set(e,i),i}Fm(n=>({...n,get:(e,t,s)=>Lc(e,t)||n.get(e,t,s),has:(e,t)=>!!Lc(e,t)||n.has(e,t)}));/**
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
 */class $m{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Gm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",Mc="0.14.8";/**
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
 */const _t=new di("@firebase/app"),Hm="@firebase/app-compat",Wm="@firebase/analytics-compat",Km="@firebase/analytics",Qm="@firebase/app-check-compat",Jm="@firebase/app-check",Ym="@firebase/auth",Xm="@firebase/auth-compat",Zm="@firebase/database",ep="@firebase/data-connect",tp="@firebase/database-compat",np="@firebase/functions",sp="@firebase/functions-compat",rp="@firebase/installations",ip="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",cp="@firebase/performance",lp="@firebase/performance-compat",up="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",mp="@firebase/firestore",pp="@firebase/ai",gp="@firebase/firestore-compat",_p="firebase",yp="12.9.0";/**
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
 */const yo="[DEFAULT]",Ep={[_o]:"fire-core",[Hm]:"fire-core-compat",[Km]:"fire-analytics",[Wm]:"fire-analytics-compat",[Jm]:"fire-app-check",[Qm]:"fire-app-check-compat",[Ym]:"fire-auth",[Xm]:"fire-auth-compat",[Zm]:"fire-rtdb",[ep]:"fire-data-connect",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[sp]:"fire-fn-compat",[rp]:"fire-iid",[ip]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[cp]:"fire-perf",[lp]:"fire-perf-compat",[up]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[mp]:"fire-fst",[gp]:"fire-fst-compat",[pp]:"fire-vertex","fire-js":"fire-js",[_p]:"fire-js-all"};/**
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
 */const zr=new Map,Ip=new Map,Eo=new Map;function jc(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(Eo.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of zr.values())jc(t,n);for(const t of Ip.values())jc(t,n);return!0}function mn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new fn("app","Firebase",vp);/**
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
 */class Tp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Wn=yp;function Pu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:yo,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(t||(t=vu()),!t)throw Vt.create("no-options");const i=zr.get(r);if(i){if(jt(t,i.options)&&jt(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const a=new Pm(r);for(const u of Eo.values())a.addComponent(u);const l=new Tp(t,s,a);return zr.set(r,l),l}function $o(n=yo){const e=zr.get(n);if(!e&&n===yo&&vu())return Pu();if(!e)throw Vt.create("no-app",{appName:n});return e}function We(n,e,t){let s=Ep[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}lt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wp="firebase-heartbeat-database",Ap=1,Fs="firebase-heartbeat-store";let to=null;function ku(){return to||(to=Ru(wp,Ap,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),to}async function bp(n){try{const t=(await ku()).transaction(Fs),s=await t.objectStore(Fs).get(Nu(n));return await t.done,s}catch(e){if(e instanceof et)_t.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function Fc(n,e){try{const s=(await ku()).transaction(Fs,"readwrite");await s.objectStore(Fs).put(e,Nu(n)),await s.done}catch(t){if(t instanceof et)_t.warn(t.message);else{const s=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(s.message)}}}function Nu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sp=1024,Cp=30;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Cp){const a=Np(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_t.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uc(),{heartbeatsToSend:s,unsentEntries:r}=Pp(this._heartbeatsCache.heartbeats),i=Ur(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _t.warn(t),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function Pp(n,e=Sp){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),zc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),zc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zc(n){return Ur(JSON.stringify({version:2,heartbeats:n})).length}function Np(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function xp(n){lt(new Ze("platform-logger",e=>new $m(e),"PRIVATE")),lt(new Ze("heartbeat",e=>new Rp(e),"PRIVATE")),We(_o,Mc,n),We(_o,Mc,"esm2020"),We("fire-js","")}xp("");var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,xu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.F=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(w,T,A){for(var y=Array(arguments.length-2),X=2;X<arguments.length;X++)y[X-2]=arguments[X];return _.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,_,E){E||(E=0);const w=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)w[T]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(T=0;T<16;++T)w[T]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],T=I.g[2];let A=I.g[3],y;y=_+(A^E&(T^A))+w[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+w[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+w[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+w[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+w[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+w[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+w[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+w[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+w[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+w[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+w[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+w[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+w[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+w[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+w[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+w[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(T^A&(E^T))+w[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+w[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+w[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+w[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+w[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+w[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+w[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+w[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+w[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+w[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+w[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+w[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+w[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+w[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+w[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+w[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(E^T^A)+w[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+w[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+w[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+w[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+w[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+w[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+w[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+w[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+w[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+w[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+w[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+w[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+w[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+w[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+w[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+w[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(T^(E|~A))+w[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+w[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+w[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+w[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+w[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+w[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+w[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+w[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+w[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+w[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+w[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+w[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+w[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+w[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+w[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}s.prototype.v=function(I,_){_===void 0&&(_=I.length);const E=_-this.blockSize,w=this.C;let T=this.h,A=0;for(;A<_;){if(T==0)for(;A<=E;)r(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(w[T++]=I.charCodeAt(A++),T==this.blockSize){r(this,w),T=0;break}}else for(;A<_;)if(w[T++]=I[A++],T==this.blockSize){r(this,w),T=0;break}}this.h=T,this.o+=_},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,E=0;E<4;++E)for(let w=0;w<32;w+=8)I[_++]=this.g[E]>>>w&255;return I};function i(I,_){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function a(I,_){this.h=_;const E=[];let w=!0;for(let T=I.length-1;T>=0;T--){const A=I[T]|0;w&&A==_||(E[T]=A,w=!1)}this.g=E}var l={};function u(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return N(d(-I));const _=[];let E=1;for(let w=0;I>=E;w++)_[w]=I/E|0,E*=4294967296;return new a(_,0)}function p(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(p(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=d(Math.pow(_,8));let w=g;for(let A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+T),_);T<8?(T=d(Math.pow(_,T)),w=w.j(T).add(d(y))):(w=w.j(E),w=w.add(d(y)))}return w}var g=u(0),v=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let I=0,_=1;for(let E=0;E<this.g.length;E++){const w=this.i(E);I+=(w>=0?w:4294967296+w)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(D(this))return"-"+N(this).toString(I);const _=d(Math.pow(I,6));var E=this;let w="";for(;;){const T=K(E,_).g;E=U(E,T.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=T,x(E))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=U(this,I),D(I)?-1:x(I)?0:1};function N(I){const _=I.g.length,E=[];for(let w=0;w<_;w++)E[w]=~I.g[w];return new a(E,~I.h).add(v)}n.abs=function(){return D(this)?N(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),E=[];let w=0;for(let T=0;T<=_;T++){let A=w+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=y>>>16,A&=65535,y&=65535,E[T]=y<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function U(I,_){return I.add(N(_))}n.j=function(I){if(x(this)||x(I))return g;if(D(this))return D(I)?N(this).j(N(I)):N(N(this).j(I));if(D(I))return N(this.j(N(I)));if(this.l(S)<0&&I.l(S)<0)return d(this.m()*I.m());const _=this.g.length+I.g.length,E=[];for(var w=0;w<2*_;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<I.g.length;T++){const A=this.i(w)>>>16,y=this.i(w)&65535,X=I.i(T)>>>16,ge=I.i(T)&65535;E[2*w+2*T]+=y*ge,$(E,2*w+2*T),E[2*w+2*T+1]+=A*ge,$(E,2*w+2*T+1),E[2*w+2*T+1]+=y*X,$(E,2*w+2*T+1),E[2*w+2*T+2]+=A*X,$(E,2*w+2*T+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new a(E,0)};function $(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function K(I,_){if(x(_))throw Error("division by zero");if(x(I))return new F(g,g);if(D(I))return _=K(N(I),_),new F(N(_.g),N(_.h));if(D(_))return _=K(I,N(_)),new F(N(_.g),_.h);if(I.g.length>30){if(D(I)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var E=v,w=_;w.l(I)<=0;)E=L(E),w=L(w);var T=z(E,1),A=z(w,1);for(w=z(w,2),E=z(E,2);!x(w);){var y=A.add(w);y.l(I)<=0&&(T=T.add(E),A=y),w=z(w,1),E=z(E,1)}return _=U(I,T.j(_)),new F(T,_)}for(T=g;I.l(_)>=0;){for(E=Math.max(1,Math.floor(I.m()/_.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(E),y=A.j(_);D(y)||y.l(I)>0;)E-=w,A=d(E),y=A.j(_);x(A)&&(A=v),T=T.add(A),I=U(I,y)}return new F(T,I)}n.B=function(I){return K(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)&I.i(w);return new a(E,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)|I.i(w);return new a(E,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)^I.i(w);return new a(E,this.h^I.h)};function L(I){const _=I.g.length+1,E=[];for(let w=0;w<_;w++)E[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(E,I.h)}function z(I,_){const E=_>>5;_%=32;const w=I.g.length-E,T=[];for(let A=0;A<w;A++)T[A]=_>0?I.i(A+E)>>>_|I.i(A+E+1)<<32-_:I.i(A+E);return new a(T,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,xu=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ot=a}).apply(typeof Bc<"u"?Bc:typeof self<"u"?self:typeof window<"u"?window:{});var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Du,Rs,Vu,Pr,Io,Ou,Lu,Mu;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tr=="object"&&Tr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,c){if(c)e:{var h=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in h))break e;h=h[b]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(c){var h=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&h.push([m,c[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,b,C){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return c.prototype[b].apply(m,V)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function x(o,c){for(let m=1;m<arguments.length;m++){const b=arguments[m];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const C=b.length||0;o.length=h+C;for(let V=0;V<C;V++)o[h+V]=b[V]}else o.push(b)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(o){a.setTimeout(()=>{throw o},0)}function U(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,h){const m=F.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var F=new D(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let L,z=!1,I=new $,_=()=>{const o=Promise.resolve(void 0);L=()=>{o.then(E)}};function E(){for(var o;o=U();){try{o.h.call(o.g)}catch(h){N(h)}var c=F;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}z=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function X(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(X,T),X.prototype.init=function(o,c){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),ie=0;function de(o,c,h,m,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=b,this.key=++ie,this.da=this.fa=!1}function De(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kt(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function ts(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function ns(o){const c={};for(const h in o)c[h]=o[h];return c}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ss(o,c){let h,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(h in m)o[h]=m[h];for(let C=0;C<dt.length;C++)h=dt[C],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function wn(o){this.src=o,this.g={},this.h=0}wn.prototype.add=function(o,c,h,m,b){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const V=be(o,c,m,b);return V>-1?(c=o[V],h||(c.fa=!1)):(c=new de(c,this.src,C,!!m,b),c.fa=h,o.push(c)),c};function rs(o,c){const h=c.type;if(h in o.g){var m=o.g[h],b=Array.prototype.indexOf.call(m,c,void 0),C;(C=b>=0)&&Array.prototype.splice.call(m,b,1),C&&(De(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function be(o,c,h,m){for(let b=0;b<o.length;++b){const C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==m)return b}return-1}var is="closure_lm_"+(Math.random()*1e6|0),An={};function rr(o,c,h,m,b){if(Array.isArray(c)){for(let C=0;C<c.length;C++)rr(o,c[C],h,m,b);return null}return h=cr(h),o&&o[ge]?o.J(c,h,l(m)?!!m.capture:!1,b):ir(o,c,h,!1,m,b)}function ir(o,c,h,m,b,C){if(!c)throw Error("Invalid event type");const V=l(b)?!!b.capture:!!b;let Y=Qt(o);if(Y||(o[is]=Y=new wn(o)),h=Y.add(c,h,m,V,C),h.proxy)return h;if(m=Vi(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),m,b);else if(o.attachEvent)o.attachEvent(ar(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Vi(){function o(h){return c.call(o.src,o.listener,h)}const c=Oi;return o}function or(o,c,h,m,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)or(o,c[C],h,m,b);else m=l(m)?!!m.capture:!!m,h=cr(h),o&&o[ge]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],h=be(c,h,m,b),h>-1&&(De(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=Qt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=be(c,h,m,b)),(h=o>-1?c[o]:null)&&os(h))}function os(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ge])rs(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(ar(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Qt(c))?(rs(h,o),h.h==0&&(h.src=null,c[is]=null)):De(o)}}}function ar(o){return o in An?An[o]:An[o]="on"+o}function Oi(o,c){if(o.da)o=!0;else{c=new X(c,this);const h=o.listener,m=o.ha||o.src;o.fa&&os(o),o=h.call(m,c)}return o}function Qt(o){return o=o[is],o instanceof wn?o:null}var as="__closure_events_fn_"+(Math.random()*1e9>>>0);function cr(o){return typeof o=="function"?o:(o[as]||(o[as]=function(c){return o.handleEvent(c)}),o[as])}function ye(){w.call(this),this.i=new wn(this),this.M=this,this.G=null}g(ye,w),ye.prototype[ge]=!0,ye.prototype.removeEventListener=function(o,c,h,m){or(this,o,c,h,m)};function Re(o,c){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var b=c;c=new T(m,o),ss(c,b)}b=!0;let C,V;if(h)for(V=h.length-1;V>=0;V--)C=c.g=h[V],b=bn(C,m,!0,c)&&b;if(C=c.g=o,b=bn(C,m,!0,c)&&b,b=bn(C,m,!1,c)&&b,h)for(V=0;V<h.length;V++)C=c.g=h[V],b=bn(C,m,!1,c)&&b}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let m=0;m<h.length;m++)De(h[m]);delete o.g[c],o.h--}}this.G=null},ye.prototype.J=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ye.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function bn(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let C=0;C<c.length;++C){const V=c[C];if(V&&!V.da&&V.capture==h){const Y=V.listener,ve=V.ha||V.src;V.fa&&rs(o.i,V),b=Y.call(ve,m)!==!1&&b}}return b&&!m.defaultPrevented}function lr(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ur(o){o.g=lr(()=>{o.g=null,o.i&&(o.i=!1,ur(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Li extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ur(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(o){w.call(this),this.h=o,this.g={}}g(vt,w);var cs=[];function ls(o){Kt(o.g,function(c,h){this.g.hasOwnProperty(h)&&os(c)},o),o.g={}}vt.prototype.N=function(){vt.Z.N.call(this),ls(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var R=a.JSON.stringify,B=a.JSON.parse,J=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ae(){}function ne(){}var me={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function je(){T.call(this,"d")}g(je,T);function us(){T.call(this,"c")}g(us,T);var Jt={},Ua=null;function hr(){return Ua=Ua||new ye}Jt.Ia="serverreachability";function za(o){T.call(this,Jt.Ia,o)}g(za,T);function hs(o){const c=hr();Re(c,new za(c))}Jt.STAT_EVENT="statevent";function Ba(o,c){T.call(this,Jt.STAT_EVENT,o),this.stat=c}g(Ba,T);function Fe(o){const c=hr();Re(c,new Ba(c,o))}Jt.Ja="timingevent";function qa(o,c){T.call(this,Jt.Ja,o),this.size=c}g(qa,T);function ds(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function Ef(o,c,h,m,b,C){o.info(function(){if(o.g)if(C){var V="",Y=C.split("&");for(let ce=0;ce<Y.length;ce++){var ve=Y[ce].split("=");if(ve.length>1){const Se=ve[0];ve=ve[1];const nt=Se.split("_");V=nt.length>=2&&nt[1]=="type"?V+(Se+"="+ve+"&"):V+(Se+"=redacted&")}}}else V=null;else V=C;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function If(o,c,h,m,b,C,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+V})}function Sn(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tf(o,h)+(m?" "+m:"")})}function vf(o,c){o.info(function(){return"TIMEOUT: "+c})}fs.prototype.info=function(){};function Tf(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var b=m[0];if(b!="noop"&&b!="stop"&&b!="close")for(let V=1;V<m.length;V++)m[V]=""}}}}return R(C)}catch{return c}}var dr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ga;function Mi(){}g(Mi,ae),Mi.prototype.g=function(){return new XMLHttpRequest},Ga=new Mi;function ms(o){return encodeURIComponent(String(o))}function wf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Tt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.S=m||1,this.V=new vt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var Wa={},ji={};function Fi(o,c,h){o.M=1,o.A=mr(tt(c)),o.u=h,o.R=!0,Ka(o,null)}function Ka(o,c){o.F=Date.now(),fr(o),o.B=tt(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),ac(h.i,"t",m),o.C=0,h=o.j.L,o.h=new Ha,o.g=bc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Li(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,m=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(cs[0]=b.toString()),b=cs);for(let C=0;C<b.length;C++){const V=rr(h,b[C],m||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.J?ns(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),hs(),Ef(o.i,o.v,o.B,o.l,o.S,o.u)}Tt.prototype.ba=function(o){o=o.target;const c=this.O;c&&bt(o)==3?c.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const Y=bt(this.g),ve=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||mc(this.g)))){this.K||Y!=4||ve==7||(ve==8||ce<=0?hs(3):hs(2)),Ui(this);var c=this.g.ca();this.X=c;var h=Af(this);if(this.o=c==200,If(this.i,this.v,this.B,this.l,this.S,Y,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,b=this.g;if((m=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var C=m;break t}}C=null}if(o=C)Sn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zi(this,o);else{this.o=!1,this.m=3,Fe(12),Yt(this),ps(this);break e}}if(this.R){o=!0;let Se;for(;!this.K&&this.C<h.length;)if(Se=bf(this,h),Se==ji){Y==4&&(this.m=4,Fe(14),o=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Wa){this.m=4,Fe(15),Sn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Sn(this.i,this.l,Se,null),zi(this,Se);if(Qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||h.length!=0||this.h.h||(this.m=1,Fe(16),o=!1),this.o=this.o&&o,!o)Sn(this.i,this.l,h,"[Invalid Chunked Response]"),Yt(this),ps(this);else if(h.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Qi(V),V.P=!0,Fe(11))}}else Sn(this.i,this.l,h,null),zi(this,h);Y==4&&Yt(this),this.o&&!this.K&&(Y==4?vc(this.j,this):(this.o=!1,fr(this)))}else Ff(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),Yt(this),ps(this)}}}catch{}finally{}};function Af(o){if(!Qa(o))return o.g.la();const c=mc(o.g);if(c==="")return"";let h="";const m=c.length,b=bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Yt(o),ps(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<m;C++)o.h.h=!0,h+=o.h.i.decode(c[C],{stream:!(b&&C==m-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Qa(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function bf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?ji:(h=Number(c.substring(h,m)),isNaN(h)?Wa:(m+=1,m+h>c.length?ji:(c=c.slice(m,m+h),o.C=m+h,c)))}Tt.prototype.cancel=function(){this.K=!0,Yt(this)};function fr(o){o.T=Date.now()+o.H,Ja(o,o.H)}function Ja(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ds(d(o.aa,o),c)}function Ui(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(vf(this.i,this.B),this.M!=2&&(hs(),Fe(17)),Yt(this),this.m=2,ps(this)):Ja(this,this.T-o)};function ps(o){o.j.I==0||o.K||vc(o.j,o)}function Yt(o){Ui(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ls(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function zi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Bi(h.h,o))){if(!o.L&&Bi(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Er(h),_r(h);else break e;Ki(h),Fe(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ds(d(h.Va,h),6e3));Za(h.h)<=1&&h.ta&&(h.ta=void 0)}else Zt(h,11)}else if((o.L||h.g==o)&&Er(h),!y(c))for(b=h.Ba.g.parse(c),c=0;c<b.length;c++){let ce=b[c];const Se=ce[0];if(!(Se<=h.K))if(h.K=Se,ce=ce[1],h.I==2)if(ce[0]=="c"){h.M=ce[1],h.ba=ce[2];const nt=ce[3];nt!=null&&(h.ka=nt,h.j.info("VER="+h.ka));const en=ce[4];en!=null&&(h.za=en,h.j.info("SVER="+h.za));const St=ce[5];St!=null&&typeof St=="number"&&St>0&&(m=1.5*St,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ct=o.g;if(Ct){const vr=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var C=m.h;C.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(qi(C,C.h),C.h=null))}if(m.G){const Ji=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Ji&&(m.wa=Ji,le(m.J,m.G,Ji))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var V=o;if(m.na=Ac(m,m.L?m.ba:null,m.W),V.L){ec(m.h,V);var Y=V,ve=m.O;ve&&(Y.H=ve),Y.D&&(Ui(Y),fr(Y)),m.g=V}else Ec(m);h.i.length>0&&yr(h)}else ce[0]!="stop"&&ce[0]!="close"||Zt(h,7);else h.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Zt(h,7):Wi(h):ce[0]!="noop"&&h.l&&h.l.qa(ce),h.A=0)}}hs(4)}catch{}}var Sf=class{constructor(o,c){this.g=o,this.map=c}};function Ya(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Za(o){return o.h?1:o.g?o.g.size:0}function Bi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function qi(o,c){o.g?o.g.add(c):o.h=c}function ec(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ya.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let b,C=null;m>=0?(b=o[h].substring(0,m),C=o[h].substring(m+1)):b=o[h],c(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof wt?(this.l=o.l,gs(this,o.j),this.o=o.o,this.g=o.g,_s(this,o.u),this.h=o.h,$i(this,cc(o.i)),this.m=o.m):o&&(c=String(o).match(nc))?(this.l=!1,gs(this,c[1]||"",!0),this.o=ys(c[2]||""),this.g=ys(c[3]||"",!0),_s(this,c[4]),this.h=ys(c[5]||"",!0),$i(this,c[6]||"",!0),this.m=ys(c[7]||"")):(this.l=!1,this.i=new Is(null,this.l))}wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Es(c,sc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Es(c,sc,!0),"@"),o.push(ms(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Es(h,h.charAt(0)=="/"?kf:Pf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Es(h,xf)),o.join("")},wt.prototype.resolve=function(o){const c=tt(this);let h=!!o.j;h?gs(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var m=o.h;if(h)_s(c,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var b=c.h.lastIndexOf("/");b!=-1&&(m=c.h.slice(0,b+1)+m)}if(b=m,b==".."||b==".")m="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){m=b.lastIndexOf("/",0)==0,b=b.split("/");const C=[];for(let V=0;V<b.length;){const Y=b[V++];Y=="."?m&&V==b.length&&C.push(""):Y==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&V==b.length&&C.push("")):(C.push(Y),m=!0)}m=C.join("/")}else m=b}return h?c.h=m:h=o.i.toString()!=="",h?$i(c,cc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function tt(o){return new wt(o)}function gs(o,c,h){o.j=h?ys(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function _s(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function $i(o,c,h){c instanceof Is?(o.i=c,Df(o.i,o.l)):(h||(c=Es(c,Nf)),o.i=new Is(c,o.l))}function le(o,c,h){o.i.set(c,h)}function mr(o){return le(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ys(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Rf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var sc=/[#\/\?@]/g,Pf=/[#\?:]/g,kf=/[#\?]/g,Nf=/[#\?@]/g,xf=/#/g;function Is(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Xt(o){o.g||(o.g=new Map,o.h=0,o.i&&Cf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Is.prototype,n.add=function(o,c){Xt(this),this.i=null,o=Cn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function rc(o,c){Xt(o),c=Cn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ic(o,c){return Xt(o),c=Cn(o,c),o.g.has(c)}n.forEach=function(o,c){Xt(this),this.g.forEach(function(h,m){h.forEach(function(b){o.call(c,b,m,this)},this)},this)};function oc(o,c){Xt(o);let h=[];if(typeof c=="string")ic(o,c)&&(h=h.concat(o.g.get(Cn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Xt(this),this.i=null,o=Cn(this,o),ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=oc(this,o),o.length>0?String(o[0]):c):c};function ac(o,c,h){rc(o,c),h.length>0&&(o.i=null,o.g.set(Cn(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var h=c[m];const b=ms(h);h=oc(this,h);for(let C=0;C<h.length;C++){let V=b;h[C]!==""&&(V+="="+ms(h[C])),o.push(V)}}return this.i=o.join("&")};function cc(o){const c=new Is;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Cn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Df(o,c){c&&!o.j&&(Xt(o),o.i=null,o.g.forEach(function(h,m){const b=m.toLowerCase();m!=b&&(rc(this,m),ac(this,b,h))},o)),o.j=c}function Vf(o,c){const h=new fs;if(a.Image){const m=new Image;m.onload=p(At,h,"TestLoadImage: loaded",!0,c,m),m.onerror=p(At,h,"TestLoadImage: error",!1,c,m),m.onabort=p(At,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=p(At,h,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Of(o,c){const h=new fs,m=new AbortController,b=setTimeout(()=>{m.abort(),At(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(b),C.ok?At(h,"TestPingServer: ok",!0,c):At(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),At(h,"TestPingServer: error",!1,c)})}function At(o,c,h,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(h)}catch{}}function Lf(){this.g=new J}function Gi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Gi,ae),Gi.prototype.g=function(){return new pr(this.i,this.h)};function pr(o,c){ye.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(pr,ye),n=pr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function lc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?vs(this):Ts(this),this.readyState==3&&lc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,vs(this))},n.Na=function(o){this.g&&(this.response=o,vs(this))},n.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ts(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uc(o){let c="";return Kt(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Hi(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=uc(h),typeof o=="string"?h!=null&&ms(h):le(o,c,h))}function pe(o){ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,ye);var Mf=/^https?$/i,jf=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ga.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){hc(this,C);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)h.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())h.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(jf,c,void 0)>=0)||m||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of h)this.g.setRequestHeader(C,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){hc(this,C)}};function hc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,dc(o),gr(o)}function dc(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Re(this,"complete"),Re(this,"abort"),gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gr(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fc(this):this.Xa())},n.Xa=function(){fc(this)};function fc(o){if(o.h&&typeof i<"u"){if(o.v&&bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Re(o,"readystatechange"),bt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=C===0){let V=String(o.D).match(nc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),m=!Mf.test(V?V.toLowerCase():"")}h=m}if(h)Re(o,"complete"),Re(o,"success");else{o.o=6;try{var b=bt(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",dc(o)}}finally{gr(o)}}}}function gr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Re(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),B(c)}};function mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ff(o){const c={};o=(o.g&&bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var h=wf(o[m]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}ts(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function pc(o){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ws("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ws("baseRetryDelayMs",5e3,o),this.Za=ws("retryDelaySeedMs",1e4,o),this.Ta=ws("forwardChannelMaxRetries",2,o),this.va=ws("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ya(o&&o.concurrentRequestLimit),this.Ba=new Lf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,m){Fe(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Ac(this,null,this.W),yr(this)};function Wi(o){if(gc(o),o.I==3){var c=o.V++,h=tt(o.J);if(le(h,"SID",o.M),le(h,"RID",c),le(h,"TYPE","terminate"),As(o,h),c=new Tt(o,o.j,c),c.M=2,c.A=mr(tt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=bc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),fr(c)}wc(o)}function _r(o){o.g&&(Qi(o),o.g.cancel(),o.g=null)}function gc(o){_r(o),o.v&&(a.clearTimeout(o.v),o.v=null),Er(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function yr(o){if(!Xa(o.h)&&!o.m){o.m=!0;var c=o.Ea;L||_(),z||(L(),z=!0),I.add(c,o),o.D=0}}function Uf(o,c){return Za(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ds(d(o.Ea,o,c),Tc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Tt(this,this.j,o);let C=this.o;if(this.U&&(C?(C=ns(C),ss(C,this.U)):C=this.U),this.u!==null||this.R||(b.J=C,C=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=yc(this,b,c),h=tt(this.J),le(h,"RID",o),le(h,"CVER",22),this.G&&le(h,"X-HTTP-Session-Id",this.G),As(this,h),C&&(this.R?c="headers="+ms(uc(C))+"&"+c:this.u&&Hi(h,this.u,C)),qi(this.h,b),this.Ra&&le(h,"TYPE","init"),this.S?(le(h,"$req",c),le(h,"SID","null"),b.U=!0,Fi(b,h,null)):Fi(b,h,c),this.I=2}}else this.I==3&&(o?_c(this,o):this.i.length==0||Xa(this.h)||_c(this))};function _c(o,c){var h;c?h=c.l:h=o.V++;const m=tt(o.J);le(m,"SID",o.M),le(m,"RID",h),le(m,"AID",o.K),As(o,m),o.u&&o.o&&Hi(m,o.u,o.o),h=new Tt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=yc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),qi(o.h,h),Fi(h,m,c)}function As(o,c){o.H&&Kt(o.H,function(h,m){le(c,m,h)}),o.l&&Kt({},function(h,m){le(c,m,h)})}function yc(o,c,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let Y=-1;for(;;){const ve=["count="+h];Y==-1?h>0?(Y=b[0].g,ve.push("ofs="+Y)):Y=0:ve.push("ofs="+Y);let ce=!0;for(let Se=0;Se<h;Se++){var C=b[Se].g;const nt=b[Se].map;if(C-=Y,C<0)Y=Math.max(0,b[Se].g-100),ce=!1;else try{C="req"+C+"_"||"";try{var V=nt instanceof Map?nt:Object.entries(nt);for(const[en,St]of V){let Ct=St;l(St)&&(Ct=R(St)),ve.push(C+en+"="+encodeURIComponent(Ct))}}catch(en){throw ve.push(C+"type="+encodeURIComponent("_badmap")),en}}catch{m&&m(nt)}}if(ce){V=ve.join("&");break e}}V=void 0}return o=o.i.splice(0,h),c.G=o,V}function Ec(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;L||_(),z||(L(),z=!0),I.add(c,o),o.A=0}}function Ki(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ds(d(o.Da,o),Tc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ic(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ds(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),_r(this),Ic(this))};function Qi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ic(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=tt(o.na);le(c,"RID","rpc"),le(c,"SID",o.M),le(c,"AID",o.K),le(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&le(c,"TO",o.ia),le(c,"TYPE","xmlhttp"),As(o,c),o.u&&o.o&&Hi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=mr(tt(c)),h.u=null,h.R=!0,Ka(h,o)}n.Va=function(){this.C!=null&&(this.C=null,_r(this),Ki(this),Fe(19))};function Er(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function vc(o,c){var h=null;if(o.g==c){Er(o),Qi(o),o.g=null;var m=2}else if(Bi(o.h,c))h=c.G,ec(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var b=o.D;m=hr(),Re(m,new qa(m,h)),yr(o)}else Ec(o);else if(b=c.m,b==3||b==0&&c.X>0||!(m==1&&Uf(o,c)||m==2&&Ki(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Zt(o,5);break;case 4:Zt(o,10);break;case 3:Zt(o,6);break;default:Zt(o,2)}}}function Tc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Zt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),m=o.Ua;const b=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gs(m,"https"),mr(m),b?Vf(m.toString(),h):Of(m.toString(),h)}else Fe(2);o.I=0,o.l&&o.l.pa(c),wc(o),gc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function wc(o){if(o.I=0,o.ja=[],o.l){const c=tc(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ja,c),x(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Ac(o,c,h){var m=h instanceof wt?tt(h):new wt(h);if(m.g!="")c&&(m.g=c+"."+m.g),_s(m,m.u);else{var b=a.location;m=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const C=new wt(null);m&&gs(C,m),c&&(C.g=c),b&&_s(C,b),h&&(C.h=h),m=C}return h=o.G,c=o.wa,h&&c&&le(m,h,c),le(m,"VER",o.ka),As(o,m),m}function bc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new pe(new Gi({ab:h})):new pe(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sc(){}n=Sc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ir(){}Ir.prototype.g=function(o,c){return new Be(o,c)};function Be(o,c){ye.call(this),this.g=new pc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Rn(this)}g(Be,ye),Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Wi(this.g)},Be.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=R(o),o=h);c.i.push(new Sf(c.Ya++,o)),c.I==3&&yr(c)},Be.prototype.N=function(){this.g.l=null,delete this.j,Wi(this.g),delete this.g,Be.Z.N.call(this)};function Cc(o){je.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Cc,je);function Rc(){us.call(this),this.status=1}g(Rc,us);function Rn(o){this.g=o}g(Rn,Sc),Rn.prototype.ra=function(){Re(this.g,"a")},Rn.prototype.qa=function(o){Re(this.g,new Cc(o))},Rn.prototype.pa=function(o){Re(this.g,new Rc)},Rn.prototype.oa=function(){Re(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,Mu=function(){return new Ir},Lu=function(){return hr()},Ou=Jt,Io={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Pr=dr,$a.COMPLETE="complete",Vu=$a,ne.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ye.prototype.listen=ye.prototype.J,Rs=ne,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,Du=pe}).apply(typeof Tr<"u"?Tr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let Kn="12.9.0";function Dp(n){Kn=n}/**
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
 */const an=new di("@firebase/firestore");function Pn(){return an.logLevel}function M(n,...e){if(an.logLevel<=Z.DEBUG){const t=e.map(Go);an.debug(`Firestore (${Kn}): ${n}`,...t)}}function yt(n,...e){if(an.logLevel<=Z.ERROR){const t=e.map(Go);an.error(`Firestore (${Kn}): ${n}`,...t)}}function cn(n,...e){if(an.logLevel<=Z.WARN){const t=e.map(Go);an.warn(`Firestore (${Kn}): ${n}`,...t)}}function Go(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function H(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ju(n,s,t)}function ju(n,e,t){let s=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw yt(s),new Error(s)}function re(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||ju(e,r,s)}function Q(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Op{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lp{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new Fu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Mp{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jp{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Mp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Up(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Up(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ee(n,e){return n<e?-1:n>e?1:0}function vo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return no(r)===no(i)?ee(r,i):no(r)?1:-1}return ee(n.length,e.length)}const zp=55296,Bp=57343;function no(n){const e=n.charCodeAt(0);return e>=zp&&e<=Bp}function Un(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const $c="__name__";class st{constructor(e,t,s){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&H(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=st.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const s=st.isNumericId(e),r=st.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?st.extractNumericId(e).compare(st.extractNumericId(t)):vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ot.fromString(e.substring(4,e.length-2))}}class ue extends st{construct(e,t,s){return new ue(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends st{construct(e,t,s){return new ke(e,t,s)}static isValidIdentifier(e){return qp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$c}static keyField(){return new ke([$c])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
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
 */function Uu(n,e,t){if(!t)throw new j(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $p(n,e,t,s){if(e===!0&&s===!0)throw new j(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gc(n){if(!q.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(q.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function Ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wo(n);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qs(n,e){if(!zu(n))throw new j(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wc=-62135596800,Kc=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Kc);return new he(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wc)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kc}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qs(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Ie("string",he._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new he(0,0))}static max(){return new W(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Us=-1;function Gp(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new he(t+1,0):new he(t,s));return new Ut(r,q.empty(),e)}function Hp(n){return new Ut(n.readTime,n.key,Us)}class Ut{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ut(W.min(),q.empty(),Us)}static max(){return new Ut(W.max(),q.empty(),Us)}}function Wp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const Kp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Kp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,s)=>{t(e)})}static reject(e){return new P((t,s)=>{s(e)})}static waitFor(e){return new P((t,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next(r=>r?P.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new P((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&s(a)},p=>r(p))}})}static doWhile(e,t){return new P((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Jp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fi.ce=-1;/**
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
 */const Ko=-1;function mi(n){return n==null}function Br(n){return n===0&&1/n==-1/0}function Yp(n){return typeof n=="number"&&Number.isInteger(n)&&!Br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bu="";function Xp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qc(e)),e=Zp(n.get(t),e);return Qc(e)}function Zp(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Bu:t+="";break;default:t+=i}}return t}function Qc(n){return n+Bu+""}/**
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
 */function Jc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wr(this.root,e,this.comparator,!0)}}class wr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Pe.RED,this.left=r??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Pe(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yc(this.data.getIterator())}getIteratorFrom(e){return new Yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Ae(ke.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Un(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class $u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $u("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=eg.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */const Gu="server_timestamp",Hu="__type__",Wu="__previous_value__",Ku="__local_write_time__";function Qo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hu])==null?void 0:s.stringValue)===Gu}function pi(n){const e=n.mapValue.fields[Wu];return Qo(e)?pi(e):e}function zs(n){const e=zt(n.mapValue.fields[Ku].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class tg{constructor(e,t,s,r,i,a,l,u,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=g}}const qr="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||qr}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===qr}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function ng(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
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
 */const Qu="__type__",sg="__max__",Ar={mapValue:{}},Ju="__vector__",$r="value";function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:ig(n)?9007199254740991:rg(n)?10:11:H(28295,{value:n})}function ut(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=zt(r.timestampValue),l=zt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Bt(r.bytesValue).isEqual(Bt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=_e(r.doubleValue),l=_e(i.doubleValue);return a===l?Br(a)===Br(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Un(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Jc(a)!==Jc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ut(a[u],l[u])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function qs(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function zn(n,e){if(n===e)return 0;const t=qt(n),s=qt(e);if(t!==s)return ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=_e(i.integerValue||i.doubleValue),u=_e(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Xc(n.timestampValue,e.timestampValue);case 4:return Xc(zs(n),zs(e));case 5:return vo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Bt(i),u=Bt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ee(l[d],u[d]);if(p!==0)return p}return ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ee(_e(i.latitude),_e(a.latitude));return l!==0?l:ee(_e(i.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var v,S,x,D;const l=i.fields||{},u=a.fields||{},d=(v=l[$r])==null?void 0:v.arrayValue,p=(S=u[$r])==null?void 0:S.arrayValue,g=ee(((x=d==null?void 0:d.values)==null?void 0:x.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return g!==0?g:Zc(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ar.mapValue&&a===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(a===Ar.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=vo(u[g],p[g]);if(v!==0)return v;const S=zn(l[u[g]],d[p[g]]);if(S!==0)return S}return ee(u.length,p.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Xc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=zt(n),s=zt(e),r=ee(t.seconds,s.seconds);return r!==0?r:ee(t.nanos,s.nanos)}function Zc(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=zn(t[r],s[r]);if(i)return i}return ee(t.length,s.length)}function Bn(n){return To(n)}function To(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=zt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=To(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${To(t.fields[a])}`;return r+"}"}(n.mapValue):H(61005,{value:n})}function kr(n){switch(qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pi(n);return e?16+kr(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+kr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return pn(s.fields,(i,a)=>{r+=i.length+kr(a)}),r}(n.mapValue);default:throw H(13486,{value:n})}}function wo(n){return!!n&&"integerValue"in n}function Jo(n){return!!n&&"arrayValue"in n}function el(n){return!!n&&"nullValue"in n}function tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nr(n){return!!n&&"mapValue"in n}function rg(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qu])==null?void 0:s.stringValue)===Ju}function Ds(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ds(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(n.arrayValue.values[t]);return e}return{...n}}function ig(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sg}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=ke.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Ds(a):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Nr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Nr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){pn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ge(Ds(this.value))}}function Yu(n){const e=[];return pn(n.fields,(t,s)=>{const r=new ke([t]);if(Nr(s)){const i=Yu(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Qe(e)}/**
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
 */class Le{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,W.min(),W.min(),W.min(),Ge.empty(),0)}static newFoundDocument(e,t,s,r){return new Le(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new Le(e,2,t,W.min(),W.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,W.min(),W.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gr{constructor(e,t){this.position=e,this.inclusive=t}}function nl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(a.referenceValue),t.key):s=zn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function sl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function og(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xu{}class Te extends Xu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cg(e,t,s):t==="array-contains"?new hg(e,s):t==="in"?new dg(e,s):t==="not-in"?new fg(e,s):t==="array-contains-any"?new mg(e,s):new Te(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lg(e,s):new ug(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Xu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return Zu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zu(n){return n.op==="and"}function eh(n){return ag(n)&&Zu(n)}function ag(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Ao(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+Bn(n.value);if(eh(n))return n.filters.map(e=>Ao(e)).join(",");{const e=n.filters.map(t=>Ao(t)).join(",");return`${n.op}(${e})`}}function th(n,e){return n instanceof Te?function(s,r){return r instanceof Te&&s.op===r.op&&s.field.isEqual(r.field)&&ut(s.value,r.value)}(n,e):n instanceof ht?function(s,r){return r instanceof ht&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,l)=>i&&th(a,r.filters[l]),!0):!1}(n,e):void H(19439)}function nh(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${Bn(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(nh).join(" ,")+"}"}(n):"Filter"}class cg extends Te{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class lg extends Te{constructor(e,t){super(e,"in",t),this.keys=sh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ug extends Te{constructor(e,t){super(e,"not-in",t),this.keys=sh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>q.fromName(s.referenceValue))}class hg extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jo(t)&&qs(t.arrayValue,this.value)}}class dg extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class fg extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class mg extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>qs(this.value.arrayValue,s))}}/**
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
 */class pg{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function rl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new pg(n,e,t,s,r,i,a)}function Yo(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ao(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Bn(s)).join(",")),e.Te=t}return e.Te}function Xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!og(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!th(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sl(n.startAt,e.startAt)&&sl(n.endAt,e.endAt)}function bo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class gi{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function gg(n,e,t,s,r,i,a,l){return new gi(n,e,t,s,r,i,a,l)}function Zo(n){return new gi(n)}function il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _g(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function yg(n){return n.collectionGroup!==null}function Vs(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Hr(i,s))}),t.has(ke.keyField().canonicalString())||e.Ie.push(new Hr(ke.keyField(),s))}return e.Ie}function rt(n){const e=Q(n);return e.Ee||(e.Ee=Eg(e,Vs(n))),e.Ee}function Eg(n,e){if(n.limitType==="F")return rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Hr(r.field,i)});const t=n.endAt?new Gr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Gr(n.startAt.position,n.startAt.inclusive):null;return rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function So(n,e,t){return new gi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _i(n,e){return Xo(rt(n),rt(e))&&n.limitType===e.limitType}function rh(n){return`${Yo(rt(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>nh(r)).join(", ")}]`),mi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Bn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Bn(r)).join(",")),`Target(${s})`}(rt(n))}; limitType=${n.limitType})`}function yi(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Vs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,l,u){const d=nl(a,l,u);return a.inclusive?d<=0:d<0}(s.startAt,Vs(s),r)||s.endAt&&!function(a,l,u){const d=nl(a,l,u);return a.inclusive?d>=0:d>0}(s.endAt,Vs(s),r))}(n,e)}function Ig(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ih(n){return(e,t)=>{let s=!1;for(const r of Vs(n)){const i=vg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function vg(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?zn(u,d):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return H(19790,{direction:n.dir})}}/**
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
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
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
 */const Tg=new fe(q.comparator);function Et(){return Tg}const oh=new fe(q.comparator);function Ps(...n){let e=oh;for(const t of n)e=e.insert(t.key,t);return e}function ah(n){let e=oh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function nn(){return Os()}function ch(){return Os()}function Os(){return new gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const wg=new fe(q.comparator),Ag=new Ae(q.comparator);function te(...n){let e=Ag;for(const t of n)e=e.add(t);return e}const bg=new Ae(ee);function Sg(){return bg}/**
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
 */function ea(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function lh(n){return{integerValue:""+n}}function Cg(n,e){return Yp(e)?lh(e):ea(n,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function Rg(n,e,t){return n instanceof Wr?function(r,i){const a={fields:{[Hu]:{stringValue:Gu},[Ku]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Qo(i)&&(i=pi(i)),i&&(a.fields[Wu]=i),{mapValue:a}}(t,e):n instanceof $s?hh(n,e):n instanceof Gs?dh(n,e):function(r,i){const a=uh(r,i),l=ol(a)+ol(r.Ae);return wo(a)&&wo(r.Ae)?lh(l):ea(r.serializer,l)}(n,e)}function Pg(n,e,t){return n instanceof $s?hh(n,e):n instanceof Gs?dh(n,e):t}function uh(n,e){return n instanceof Kr?function(s){return wo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Wr extends Ei{}class $s extends Ei{constructor(e){super(),this.elements=e}}function hh(n,e){const t=fh(e);for(const s of n.elements)t.some(r=>ut(r,s))||t.push(s);return{arrayValue:{values:t}}}class Gs extends Ei{constructor(e){super(),this.elements=e}}function dh(n,e){let t=fh(e);for(const s of n.elements)t=t.filter(r=>!ut(r,s));return{arrayValue:{values:t}}}class Kr extends Ei{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ol(n){return _e(n.integerValue||n.doubleValue)}function fh(n){return Jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kg(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof $s&&r instanceof $s||s instanceof Gs&&r instanceof Gs?Un(s.elements,r.elements,ut):s instanceof Kr&&r instanceof Kr?ut(s.Ae,r.Ae):s instanceof Wr&&r instanceof Wr}(n.transform,e.transform)}class Ng{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ii{}function mh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ta(n.key,it.none()):new Js(n.key,n.data,it.none());{const t=n.data,s=Ge.empty();let r=new Ae(ke.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new _n(n.key,s,new Qe(r.toArray()),it.none())}}function xg(n,e,t){n instanceof Js?function(r,i,a){const l=r.value.clone(),u=cl(r.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof _n?function(r,i,a){if(!xr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=cl(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ph(r)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ls(n,e,t,s){return n instanceof Js?function(i,a,l,u){if(!xr(i.precondition,a))return l;const d=i.value.clone(),p=ll(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof _n?function(i,a,l,u){if(!xr(i.precondition,a))return l;const d=ll(i.fieldTransforms,u,a),p=a.data;return p.setAll(ph(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(i,a,l){return xr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Dg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=uh(s.transform,r||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(s.field,i))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Un(s,r,(i,a)=>kg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Js extends Ii{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _n extends Ii{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function cl(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,Pg(a,l,t[r]))}return s}function ll(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,Rg(i,a,e))}return s}class ta extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vg extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Og{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&xg(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ls(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ls(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ch();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const u=mh(a,l);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,(t,s)=>al(t,s))&&Un(this.baseMutations,e.baseMutations,(t,s)=>al(t,s))}}class na{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){re(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return wg}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new na(e,t,s,r)}}/**
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
 */class Lg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,se;function jg(n){switch(n){case k.OK:return H(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function gh(n){if(n===void 0)return yt("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ee.OK:return k.OK;case Ee.CANCELLED:return k.CANCELLED;case Ee.UNKNOWN:return k.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return k.INTERNAL;case Ee.UNAVAILABLE:return k.UNAVAILABLE;case Ee.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ee.NOT_FOUND:return k.NOT_FOUND;case Ee.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ee.ABORTED:return k.ABORTED;case Ee.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ee.DATA_LOSS:return k.DATA_LOSS;default:return H(39323,{code:n})}}(se=Ee||(Ee={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Fg(){return new TextEncoder}/**
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
 */const Ug=new Ot([4294967295,4294967295],0);function ul(n){const e=Fg().encode(n),t=new xu;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ot([t,s],0),new Ot([r,i],0)]}class sa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ks(`Invalid padding: ${t}`);if(s<0)throw new ks(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ks(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ot.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Ot.fromNumber(s)));return r.compare(Ug)===1&&(r=new Ot([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ul(e),[s,r]=hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new sa(i,r,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=ul(e),[s,r]=hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vi(W.min(),r,new fe(ee),Et(),te())}}class Ys{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ys(s,t,te(),te(),te())}}/**
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
 */class Dr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class _h{constructor(e,t){this.targetId=e,this.Ce=t}}class yh{constructor(e,t,s=xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class dl{constructor(){this.ve=0,this.Fe=fl(),this.Me=xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),s=te();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:H(38017,{changeType:i})}}),new Ys(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=fl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class zg{constructor(e){this.Ge=e,this.ze=new Map,this.je=Et(),this.He=br(),this.Je=br(),this.Ze=new fe(ee)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(bo(i))if(s===0){const a=new q(i.path);this.et(t,a,Le.newNoDocument(a,W.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Bt(s).toUint8Array()}catch(u){if(u instanceof $u)return cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sa(a,r,i)}catch(u){return cn(u instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&bo(l.target)){const u=new q(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Le.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let s=te();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const r=new vi(e,t,this.Ze,this.je,s);return this.je=Et(),this.He=br(),this.Je=br(),this.Ze=new fe(ee),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new dl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ae(ee),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ae(ee),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function br(){return new fe(q.comparator)}function fl(){return new fe(q.comparator)}const Bg={asc:"ASCENDING",desc:"DESCENDING"},qg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$g={and:"AND",or:"OR"};class Gg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Co(n,e){return n.useProto3Json||mi(e)?e:{value:e}}function Qr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hg(n,e){return Qr(n,e.toTimestamp())}function ot(n){return re(!!n,49232),W.fromTimestamp(function(t){const s=zt(t);return new he(s.seconds,s.nanos)}(n))}function ra(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(r){return new ue(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ih(n){const e=ue.fromString(n);return re(bh(e),10190,{key:e.toString()}),e}function Po(n,e){return ra(n.databaseId,e.path)}function so(n,e){const t=Ih(e);if(t.get(1)!==n.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Th(t))}function vh(n,e){return ra(n.databaseId,e)}function Wg(n){const e=Ih(n);return e.length===4?ue.emptyPath():Th(e)}function ko(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Th(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ml(n,e,t){return{name:Po(n,e),fields:t.value.mapValue.fields}}function Kg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(re(p===void 0||typeof p=="string",58123),xe.fromBase64String(p||"")):(re(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),xe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?k.UNKNOWN:gh(d.code);return new j(p,d.message||"")}(a);t=new yh(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=so(n,s.document.name),i=ot(s.document.updateTime),a=s.document.createTime?ot(s.document.createTime):W.min(),l=new Ge({mapValue:{fields:s.document.fields}}),u=Le.newFoundDocument(r,i,a,l),d=s.targetIds||[],p=s.removedTargetIds||[];t=new Dr(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=so(n,s.document),i=s.readTime?ot(s.readTime):W.min(),a=Le.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Dr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=so(n,s.document),i=s.removedTargetIds||[];t=new Dr([],i,r,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new Mg(r,i),l=s.targetId;t=new _h(l,a)}}return t}function Qg(n,e){let t;if(e instanceof Js)t={update:ml(n,e.key,e.value)};else if(e instanceof ta)t={delete:Po(n,e.key)};else if(e instanceof _n)t={update:ml(n,e.key,e.data),updateMask:r_(e.fieldMask)};else{if(!(e instanceof Vg))return H(16599,{dt:e.type});t={verify:Po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const l=a.transform;if(l instanceof Wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $s)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Kr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw H(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Hg(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function Jg(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?ot(r.updateTime):ot(i);return a.isEqual(W.min())&&(a=ot(i)),new Ng(a,r.transformResults||[])}(t,e))):[]}function Yg(n,e){return{documents:[vh(n,e.path)]}}function Xg(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vh(n,r);const i=function(d){if(d.length!==0)return Ah(ht.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:Nn(v.field),direction:t_(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Co(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function Zg(n){let e=Wg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){re(s===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const v=wh(g);return v instanceof ht&&eh(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(x){return new Hr(xn(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,mi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,S=g.values||[];return new Gr(S,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,S=g.values||[];return new Gr(S,v)}(t.endAt)),gg(e,r,a,i,l,"F",u,d)}function e_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=xn(t.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=xn(t.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xn(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xn(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return Te.create(xn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(s=>wh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function t_(n){return Bg[n]}function n_(n){return qg[n]}function s_(n){return $g[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function xn(n){return ke.fromServerFormat(n.fieldPath)}function Ah(n){return n instanceof Te?function(t){if(t.op==="=="){if(tl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(t.field),op:n_(t.op),value:t.value}}}(n):n instanceof ht?function(t){const s=t.getFilters().map(r=>Ah(r));return s.length===1?s[0]:{compositeFilter:{op:s_(t.op),filters:s}}}(n):H(54877,{filter:n})}function r_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class xt{constructor(e,t,s,r,i=W.min(),a=W.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class i_{constructor(e){this.yt=e}}function o_(n){const e=Zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?So(e,e.limit,"L"):e}/**
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
 */class a_{constructor(){this.Sn=new c_}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ut.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class c_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ae(ue.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ae(ue.comparator)).toArray()}}/**
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
 */const pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ch=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Ch,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */class qn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qn(0)}static ar(){return new qn(-1)}}/**
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
 */const gl="LruGarbageCollector",l_=1048576;function _l([n,e],[t,s]){const r=ee(n,t);return r===0?ee(e,s):r}class u_{constructor(e){this.Pr=e,this.buffer=new Ae(_l),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_l(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class h_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(gl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jn(t)?M(gl,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.Ar(3e5)})}}class d_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return P.resolve(fi.ce);const s=new u_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(pl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,l=Date.now(),this.removeTargets(e,s,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(d=Date.now(),Pn()<=Z.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g})))}}function f_(n,e){return new d_(n,e)}/**
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
 */class m_{constructor(){this.changes=new gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class p_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class g_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Ls(s.mutation,r,Qe.empty(),he.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,t,s=te()){const r=nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=Ps();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=nn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,te()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,r){let i=Et();const a=Os(),l=function(){return Os()}();return t.forEach((u,d)=>{const p=s.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof _n)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Ls(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new p_(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const s=Os();let r=new fe((a,l)=>a-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=s.get(u)||Qe.empty();p=l.applyToLocalView(d,p),s.set(u,p);const g=(r.get(l.batchId)||te()).add(u);r=r.insert(l.batchId,g)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=ch();p.forEach(v=>{if(!i.has(v)){const S=mh(t.get(v),s.get(v));S!==null&&g.set(v,S),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return _g(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):P.resolve(nn());let l=Us,u=i;return a.next(d=>P.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,te())).next(p=>({batchId:l,changes:ah(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(s=>{let r=Ps();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(g,v){return new gi(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Le.newInvalidDocument(p)))});let l=Ps();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Ls(p.mutation,d,Qe.empty(),he.now()),yi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class __{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:ot(r.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:o_(r.bundledQuery),readTime:ot(r.readTime)}}(t)),P.resolve()}}/**
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
 */class y_{constructor(){this.overlays=new fe(q.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=nn();return P.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=nn(),i=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new fe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let p=i.get(d.largestBatchId);p===null&&(p=nn(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=nn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=r)););return P.resolve(l)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Lg(t,s));let i=this.Lr.get(t);i===void 0&&(i=te(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class E_{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ia{constructor(){this.kr=new Ae(Ce.Kr),this.qr=new Ae(Ce.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Ce(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Ce(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new q(new ue([])),s=new Ce(t,e),r=new Ce(t,e+1),i=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new q(new ue([])),s=new Ce(t,e),r=new Ce(t,e+1);let i=te();return this.qr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return q.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class I_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ae(Ce.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Og(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Jr=this.Jr.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ko:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ce(t,0),r=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],a=>{const l=this.Zr(a.Hr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ae(ee);return t.forEach(r=>{const i=new Ce(r,0),a=new Ce(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],l=>{s=s.add(l.Hr)})}),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new q(i),0);let l=new Ae(ee);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(l=l.add(u.Hr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,r=>{const i=new Ce(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new Ce(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class v_{constructor(e){this.ti=e,this.docs=function(){return new fe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let s=Et();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Le.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Et();const a=t.path,l=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wp(Hp(p),s)<=0||(r.has(p.key)||yi(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,s,r){H(9500)}ni(e,t){return P.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new T_(this)}getSize(e){return P.resolve(this.size)}}class T_ extends m_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class w_{constructor(e){this.persistence=e,this.ri=new gn(t=>Yo(t),Xo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new ia,this.targetCount=0,this.oi=qn._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class Rh{constructor(e,t){this._i={},this.overlays={},this.ai=new fi(0),this.ui=!1,this.ui=!0,this.ci=new E_,this.referenceDelegate=e(this),this.li=new w_(this),this.indexManager=new a_,this.remoteDocumentCache=function(r){return new v_(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new i_(t),this.Pi=new __(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new y_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new I_(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new A_(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ii(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class A_ extends Qp{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Ri=new ia,this.Ai=null}static Vi(e){return new oa(e)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,s=>{const r=q.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,W.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Jr{constructor(e,t){this.persistence=e,this.fi=new gn(s=>Xp(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=f_(this,t)}static Vi(e,t){return new Jr(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?P.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(l=>{l||(s++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kr(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class aa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=te(),r=te();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new aa(e,t.fromCache,s,r)}}/**
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
 */class b_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class S_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return mm()?8:Jp(Me())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new b_;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Pn()<=Z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Pn()<=Z.DEBUG&&M("QueryEngine","Query:",kn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Pn()<=Z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):P.resolve())}gs(e,t){if(il(t))return P.resolve(null);let s=rt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=So(t,null,"F"),s=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=te(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.bs(t,l);return this.Ss(t,d,a,u.readTime)?this.gs(e,So(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,s,r){return il(t)||r.isEqual(W.min())?P.resolve(null):this.fs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,s,r)?P.resolve(null):(Pn()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kn(t)),this.Ds(e,a,t,Gp(r,Us)).next(l=>l))})}bs(e,t){let s=new Ae(ih(e));return t.forEach((r,i)=>{yi(e,i)&&(s=s.add(i))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Pn()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",kn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ut.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ca="LocalStore",C_=3e8;class R_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new fe(ee),this.Fs=new gn(i=>Yo(i),Xo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function P_(n,e,t,s){return new R_(n,e,t,s)}async function Ph(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let u=te();for(const d of r){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(s,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function k_(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,v=g.keys();let S=P.resolve();return v.forEach(x=>{S=S.next(()=>p.getEntry(u,x)).next(D=>{const N=d.docVersions.get(x);re(N!==null,48541),D.version.compareTo(N)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let u=te();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function kh(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function N_(n,e){const t=Q(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach((p,g)=>{const v=r.get(g);if(!v)return;l.push(t.li.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,p.addedDocuments,g)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(xe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,s)),r=r.insert(g,S),function(D,N,U){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=C_?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(v,S,p)&&l.push(t.li.updateTargetData(i,S))});let u=Et(),d=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(x_(i,a,e.documentUpdates).next(p=>{u=p.Bs,d=p.Ls})),!s.isEqual(W.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(p)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=r,i))}function x_(n,e,t){let s=te(),r=te();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Et();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M(ca,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:r}})}function D_(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ko),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function V_(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new xt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function No(n,e,t){const s=Q(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Jn(a))throw a;M(ca,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function yl(n,e,t){const s=Q(n);let r=W.min(),i=te();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=Q(u),v=g.Fs.get(p);return v!==void 0?P.resolve(g.vs.get(v)):g.li.getTargetData(d,p)}(s,a,rt(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:W.min(),t?i:te())).next(l=>(O_(s,Ig(e),l),{documents:l,ks:i})))}function O_(n,e,t){let s=n.Ms.get(e)||W.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class El{constructor(){this.activeTargetIds=Sg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L_{constructor(){this.vo=new El,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new El,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M_{Mo(e){}shutdown(){}}/**
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
 */const Il="ConnectivityMonitor";class vl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Il,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(Il,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function xo(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
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
 */const ro="RestConnection",j_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class F_{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===qr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=xo(),l=this.Qo(e,t.toUriEncodedString());M(ro,`Sending RPC '${e}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(l),p=Hn(d);return this.zo(e,l,u,s,p).then(g=>(M(ro,`Received RPC '${e}' ${a}: `,g),g),g=>{throw cn(ro,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",s),g})}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=j_[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class U_{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ve="WebChannelConnection",bs=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class Dn extends F_{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Dn.c_){const e=Lu();bs(e,Ou.STAT_EVENT,t=>{t.stat===Io.PROXY?M(Ve,"STAT_EVENT: detected buffering proxy"):t.stat===Io.NOPROXY&&M(Ve,"STAT_EVENT: detected no buffering proxy")}),Dn.c_=!0}}zo(e,t,s,r,i){const a=xo();return new Promise((l,u)=>{const d=new Du;d.setWithCredentials(!0),d.listenOnce(Vu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Pr.NO_ERROR:const g=d.getResponseJson();M(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Pr.TIMEOUT:M(Ve,`RPC '${e}' ${a} timed out`),u(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const v=d.getStatus();if(M(Ve,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const D=function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(x.status);u(new j(D,x.message))}else u(new j(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new j(k.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ve,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);M(Ve,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,s,15)})}T_(e,t,s){const r=xo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const d=i.join("");M(Ve,`Creating RPC '${e}' stream ${r}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let g=!1,v=!1;const S=new U_({Ho:x=>{v?M(Ve,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(g||(M(Ve,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),M(Ve,`RPC '${e}' stream ${r} sending:`,x),p.send(x))},Jo:()=>p.close()});return bs(p,Rs.EventType.OPEN,()=>{v||(M(Ve,`RPC '${e}' stream ${r} transport opened.`),S.i_())}),bs(p,Rs.EventType.CLOSE,()=>{v||(v=!0,M(Ve,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(p))}),bs(p,Rs.EventType.ERROR,x=>{v||(v=!0,cn(Ve,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),S.o_(new j(k.UNAVAILABLE,"The operation could not be completed")))}),bs(p,Rs.EventType.MESSAGE,x=>{var D;if(!v){const N=x.data[0];re(!!N,16349);const U=N,$=(U==null?void 0:U.error)||((D=U[0])==null?void 0:D.error);if($){M(Ve,`RPC '${e}' stream ${r} received error:`,$);const F=$.status;let K=function(I){const _=Ee[I];if(_!==void 0)return gh(_)}(F),L=$.message;F==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&cn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),K===void 0&&(K=k.INTERNAL,L="Unknown error status: "+F+" with message "+$.message),v=!0,S.o_(new j(K,L)),p.close()}else M(Ve,`RPC '${e}' stream ${r} received:`,N),S.__(N)}}),Dn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mu()}}/**
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
 */function z_(n){return new Dn(n)}function io(){return typeof document<"u"?document:null}/**
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
 */function Ti(n){return new Gg(n,!0)}/**
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
 */Dn.c_=!1;class Nh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Tl="PersistentStream";class xh{constructor(e,t,s,r,i,a,l,u){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new j(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(Tl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(M(Tl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B_ extends xh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Kg(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ot(a.readTime):W.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=ko(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=bo(u)?{documents:Yg(i,u)}:{query:Xg(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Eh(i,a.resumeToken);const d=Co(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=Qr(i,a.snapshotVersion.toTimestamp());const d=Co(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const s=e_(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=ko(this.serializer),t.removeTarget=e,this.K_(t)}}class q_ extends xh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Jg(e.writeResults,e.commitTime),s=ot(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ko(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Qg(this.serializer,s))};this.K_(t)}}/**
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
 */class $_{}class G_ extends $_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ro(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ro(t,s),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function H_(n,e,t,s){return new G_(n,e,t,s)}class W_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ln="RemoteStore";class K_{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{s.enqueueAndForget(async()=>{yn(this)&&(M(ln,"Restarting streams for network reachability change."),await async function(u){const d=Q(u);d.Ea.add(4),await Xs(d),d.Va.set("Unknown"),d.Ea.delete(4),await wi(d)}(this))})}),this.Va=new W_(s,r)}}async function wi(n){if(yn(n))for(const e of n.Ra)await e(!0)}async function Xs(n){for(const e of n.Ra)await e(!1)}function Dh(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),da(t)?ha(t):Yn(t).O_()&&ua(t,e))}function la(n,e){const t=Q(n),s=Yn(t);t.Ia.delete(e),s.O_()&&Vh(t,e),t.Ia.size===0&&(s.O_()?s.L_():yn(t)&&t.Va.set("Unknown"))}function ua(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yn(n).Z_(e)}function Vh(n,e){n.da.$e(e),Yn(n).X_(e)}function ha(n){n.da=new zg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yn(n).start(),n.Va.ua()}function da(n){return yn(n)&&!Yn(n).x_()&&n.Ia.size>0}function yn(n){return Q(n).Ea.size===0}function Oh(n){n.da=void 0}async function Q_(n){n.Va.set("Online")}async function J_(n){n.Ia.forEach((e,t)=>{ua(n,e)})}async function Y_(n,e){Oh(n),da(n)?(n.Va.ha(e),ha(n)):n.Va.set("Unknown")}async function X_(n,e,t){if(n.Va.set("Online"),e instanceof yh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.da.removeTarget(l))}(n,e)}catch(s){M(ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yr(n,s)}else if(e instanceof Dr?n.da.Xe(e):e instanceof _h?n.da.st(e):n.da.tt(e),!t.isEqual(W.min()))try{const s=await kh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(xe.EMPTY_BYTE_STRING,p.snapshotVersion)),Vh(i,u);const g=new xt(p.target,u,d,p.sequenceNumber);ua(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){M(ln,"Failed to raise snapshot:",s),await Yr(n,s)}}async function Yr(n,e,t){if(!Jn(e))throw e;n.Ea.add(1),await Xs(n),n.Va.set("Offline"),t||(t=()=>kh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await wi(n)})}function Lh(n,e){return e().catch(t=>Yr(n,t,e))}async function Ai(n){const e=Q(n),t=$t(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ko;for(;Z_(e);)try{const r=await D_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,ey(e,r)}catch(r){await Yr(e,r)}Mh(e)&&jh(e)}function Z_(n){return yn(n)&&n.Ta.length<10}function ey(n,e){n.Ta.push(e);const t=$t(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Mh(n){return yn(n)&&!$t(n).x_()&&n.Ta.length>0}function jh(n){$t(n).start()}async function ty(n){$t(n).ra()}async function ny(n){const e=$t(n);for(const t of n.Ta)e.ea(t.mutations)}async function sy(n,e,t){const s=n.Ta.shift(),r=na.from(s,e,t);await Lh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Ai(n)}async function ry(n,e){e&&$t(n).Y_&&await async function(s,r){if(function(a){return jg(a)&&a!==k.ABORTED}(r.code)){const i=s.Ta.shift();$t(s).B_(),await Lh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ai(s)}}(n,e),Mh(n)&&jh(n)}async function wl(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),M(ln,"RemoteStore received new credentials");const s=yn(t);t.Ea.add(3),await Xs(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await wi(t)}async function iy(n,e){const t=Q(n);e?(t.Ea.delete(2),await wi(t)):e||(t.Ea.add(2),await Xs(t),t.Va.set("Unknown"))}function Yn(n){return n.ma||(n.ma=function(t,s,r){const i=Q(t);return i.sa(),new B_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:Q_.bind(null,n),Yo:J_.bind(null,n),t_:Y_.bind(null,n),J_:X_.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),da(n)?ha(n):n.Va.set("Unknown")):(await n.ma.stop(),Oh(n))})),n.ma}function $t(n){return n.fa||(n.fa=function(t,s,r){const i=Q(t);return i.sa(),new q_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ty.bind(null,n),t_:ry.bind(null,n),ta:ny.bind(null,n),na:sy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Ai(n)):(await n.fa.stop(),n.Ta.length>0&&(M(ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class fa{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new fa(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(n,e){if(yt("AsyncQueue",`${e}: ${n}`),Jn(n))return new j(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vn{static emptySet(e){return new Vn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=Ps(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Al{constructor(){this.ga=new fe(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class $n{constructor(e,t,s,r,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new $n(e,t,Vn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class oy{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class ay{constructor(){this.queries=bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Q(t),i=r.queries;r.queries=bl(),i.forEach((a,l)=>{for(const u of l.ba)u.onError(s)})})(this,new j(k.ABORTED,"Firestore shutting down"))}}function bl(){return new gn(n=>rh(n),_i)}async function Fh(n,e){const t=Q(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new oy,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=ma(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&pa(t)}async function Uh(n,e){const t=Q(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function cy(n,e){const t=Q(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.ba)l.Fa(r)&&(s=!0);a.wa=r}}s&&pa(t)}function ly(n,e,t){const s=Q(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function pa(n){n.Ca.forEach(e=>{e.next()})}var Do,Sl;(Sl=Do||(Do={})).Ma="default",Sl.Cache="cache";class zh{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Do.Cache}}/**
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
 */class Bh{constructor(e){this.key=e}}class qh{constructor(e){this.key=e}}class uy{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=ih(e),this.tu=new Vn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Al,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,g)=>{const v=r.get(p),S=yi(this.query,g)?g:null,x=!!v&&this.mutatedKeys.has(v.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;v&&S?v.data.isEqual(S.data)?x!==D&&(s.track({type:3,doc:S}),N=!0):this.su(v,S)||(s.track({type:2,doc:S}),N=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!v&&S?(s.track({type:0,doc:S}),N=!0):v&&!S&&(s.track({type:1,doc:v}),N=!0,(u||d)&&(l=!0)),N&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),s.track({type:1,doc:p})}return{tu:a,iu:s,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,g)=>function(S,x){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:N})}};return D(S)-D(x)}(p.type,g.type)||this.eu(p.doc,g.doc)),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],u=this.Ya.size===0&&this.current&&!r?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new $n(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Al,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new qh(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Bh(s))}),t}cu(e){this.Za=e.ks,this.Ya=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $n.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ga="SyncEngine";class hy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class dy{constructor(e){this.key=e,this.hu=!1}}class fy{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gn(l=>rh(l),_i),this.Iu=new Map,this.Eu=new Set,this.Ru=new fe(q.comparator),this.Au=new Map,this.Vu=new ia,this.du={},this.mu=new Map,this.fu=qn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function my(n,e,t=!0){const s=Qh(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await $h(s,e,t,!0),r}async function py(n,e){const t=Qh(n);await $h(t,e,!0,!1)}async function $h(n,e,t,s){const r=await V_(n.localStore,rt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await gy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Dh(n.remoteStore,r),l}async function gy(n,e,t,s,r){n.pu=(g,v,S)=>async function(D,N,U,$){let F=N.view.ru(U);F.Ss&&(F=await yl(D.localStore,N.query,!1).then(({documents:I})=>N.view.ru(I,F)));const K=$&&$.targetChanges.get(N.targetId),L=$&&$.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(F,D.isPrimaryClient,K,L);return Rl(D,N.targetId,z.au),z.snapshot}(n,g,v,S);const i=await yl(n.localStore,e,!0),a=new uy(e,i.ks),l=a.ru(i.documents),u=Ys.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(l,n.isPrimaryClient,u);Rl(n,t,d.au);const p=new hy(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function _y(n,e,t){const s=Q(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(a=>!_i(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await No(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&la(s.remoteStore,r.targetId),Vo(s,r.targetId)}).catch(Qn)):(Vo(s,r.targetId),await No(s.localStore,r.targetId,!0))}async function yy(n,e){const t=Q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),la(t.remoteStore,s.targetId))}async function Ey(n,e,t){const s=Sy(n);try{const r=await function(a,l){const u=Q(a),d=he.now(),p=l.reduce((S,x)=>S.add(x.key),te());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Et(),D=te();return u.xs.getEntries(S,p).next(N=>{x=N,x.forEach((U,$)=>{$.isValidDocument()||(D=D.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,x)).next(N=>{g=N;const U=[];for(const $ of l){const F=Dg($,g.get($.key).overlayedDocument);F!=null&&U.push(new _n($.key,F,Yu(F.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,U,l)}).next(N=>{v=N;const U=N.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(S,N.batchId,U)})}).then(()=>({batchId:v.batchId,changes:ah(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new fe(ee)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d}(s,r.batchId,t),await Zs(s,r.changes),await Ai(s.remoteStore)}catch(r){const i=ma(r,"Failed to persist write");t.reject(i)}}async function Gh(n,e){const t=Q(n);try{const s=await N_(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Au.get(i);a&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?re(a.hu,14607):r.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))}),await Zs(t,s,e)}catch(s){await Qn(s)}}function Cl(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=Q(a);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const v of g.ba)v.va(l)&&(d=!0)}),d&&pa(u)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Iy(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new fe(q.comparator);a=a.insert(i,Le.newNoDocument(i,W.min()));const l=te().add(i),u=new vi(W.min(),new Map,new fe(ee),a,l);await Gh(s,u),s.Ru=s.Ru.remove(i),s.Au.delete(e),_a(s)}else await No(s.localStore,e,!1).then(()=>Vo(s,e,t)).catch(Qn)}async function vy(n,e){const t=Q(n),s=e.batch.batchId;try{const r=await k_(t.localStore,e);Wh(t,s,null),Hh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Zs(t,r)}catch(r){await Qn(r)}}async function Ty(n,e,t){const s=Q(n);try{const r=await function(a,l){const u=Q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(re(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(s.localStore,e);Wh(s,e,t),Hh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Zs(s,r)}catch(r){await Qn(r)}}function Hh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Wh(n,e,t){const s=Q(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||Kh(n,s)})}function Kh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(la(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),_a(n))}function Rl(n,e,t){for(const s of t)s instanceof Bh?(n.Vu.addReference(s.key,e),wy(n,s)):s instanceof qh?(M(ga,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Kh(n,s.key)):H(19791,{wu:s})}function wy(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(ga,"New document in limbo: "+t),n.Eu.add(s),_a(n))}function _a(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(ue.fromString(e)),s=n.fu.next();n.Au.set(s,new dy(t)),n.Ru=n.Ru.insert(t,s),Dh(n.remoteStore,new xt(rt(Zo(t.path)),s,"TargetPurposeLimboResolution",fi.ce))}}async function Zs(n,e,t){const s=Q(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((l,u)=>{a.push(s.pu(u,e,t).then(d=>{var p;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){r.push(d);const g=aa.Es(u.targetId,d);i.push(g)}}))}),await Promise.all(a),s.Pu.J_(r),await async function(u,d){const p=Q(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>P.forEach(d,v=>P.forEach(v.Ts,S=>p.persistence.referenceDelegate.addReference(g,v.targetId,S)).next(()=>P.forEach(v.Is,S=>p.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))}catch(g){if(!Jn(g))throw g;M(ca,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=p.vs.get(v),x=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(x);p.vs=p.vs.insert(v,D)}}}(s.localStore,i))}async function Ay(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){M(ga,"User change. New user:",e.toKey());const s=await Ph(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new j(k.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zs(t,s.Ns)}}function by(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return te().add(s.key);{let r=te();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function Qh(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=by.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iy.bind(null,e),e.Pu.J_=cy.bind(null,e.eventManager),e.Pu.yu=ly.bind(null,e.eventManager),e}function Sy(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ty.bind(null,e),e}class Xr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return P_(this.persistence,new S_,e.initialUser,this.serializer)}Cu(e){return new Rh(oa.Vi,this.serializer)}Du(e){return new L_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xr.provider={build:()=>new Xr};class Cy extends Xr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Jr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new h_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new Rh(s=>Jr.Vi(s,t),this.serializer)}}class Oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ay.bind(null,this.syncEngine),await iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ay}()}createDatastore(e){const t=Ti(e.databaseInfo.databaseId),s=z_(e.databaseInfo);return H_(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,l){return new K_(s,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Cl(this.syncEngine,t,0),function(){return vl.v()?new vl:new M_}())}createSyncEngine(e,t){return function(r,i,a,l,u,d,p){const g=new fy(r,i,a,l,u,d);return p&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=Q(r);M(ln,"RemoteStore shutting down."),i.Ea.add(5),await Xs(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Oo.provider={build:()=>new Oo};/**
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
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Gt="FirestoreClient";class Ry{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Oe.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{M(Gt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(M(Gt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ma(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function oo(n,e){n.asyncQueue.verifyOperationInProgress(),M(Gt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ph(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Py(n);M(Gt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>wl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>wl(e.remoteStore,r)),n._onlineComponents=e}async function Py(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Gt,"Using user provided OfflineComponentProvider");try{await oo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;cn("Error using user provided cache. Falling back to memory cache: "+t),await oo(n,new Xr)}}else M(Gt,"Using default OfflineComponentProvider"),await oo(n,new Cy(void 0));return n._offlineComponents}async function Yh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Gt,"Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):(M(Gt,"Using default OnlineComponentProvider"),await Pl(n,new Oo))),n._onlineComponents}function ky(n){return Yh(n).then(e=>e.syncEngine)}async function Xh(n){const e=await Yh(n),t=e.eventManager;return t.onListen=my.bind(null,e.syncEngine),t.onUnlisten=_y.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=py.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yy.bind(null,e.syncEngine),t}function Ny(n,e,t={}){const s=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new Jh({next:v=>{p.Nu(),a.enqueueAndForget(()=>Uh(i,g));const S=v.docs.has(l);!S&&v.fromCache?d.reject(new j(k.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?d.reject(new j(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new zh(Zo(l.path),p,{includeMetadataChanges:!0,Ka:!0});return Fh(i,g)}(await Xh(n),n.asyncQueue,e,t,s)),s.promise}function xy(n,e,t={}){const s=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new Jh({next:v=>{p.Nu(),a.enqueueAndForget(()=>Uh(i,g)),v.fromCache&&u.source==="server"?d.reject(new j(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new zh(l,p,{includeMetadataChanges:!0,Ka:!0});return Fh(i,g)}(await Xh(n),n.asyncQueue,e,t,s)),s.promise}function Dy(n,e){const t=new gt;return n.asyncQueue.enqueueAndForget(async()=>Ey(await ky(n),e,t)),t.promise}/**
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
 */function Zh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Vy="ComponentProvider",kl=new Map;function Oy(n,e,t,s,r){return new tg(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Zh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const ed="firestore.googleapis.com",Nl=!0;class xl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ed,this.ssl=Nl}else this.host=e.host,this.ssl=e.ssl??Nl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ch;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<l_)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$p("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zh(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bi{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Vp;switch(s.type){case"firstParty":return new jp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=kl.get(t);s&&(M(Vy,"Removing Datastore"),kl.delete(t),s.terminate())}(this),Promise.resolve()}}function Ly(n,e,t,s={}){var d;n=Ft(n,bi);const r=Hn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(wu(`https://${l}`),Au("Firestore",!0)),i.host!==ed&&i.host!==l&&cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:s};if(!jt(u,a)&&(n._setSettings(u),s.mockUserToken)){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Oe.MOCK_USER;else{p=om(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new j(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Oe(v)}n._authCredentials=new Op(new Fu(p,g))}}/**
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
 */class Si{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Si(this.firestore,e,this._query)}}class we{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qs(t,we._jsonSchema))return new we(e,s||null,new q(ue.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Ie("string",we._jsonSchemaVersion),referencePath:Ie("string")};class Lt extends Si{constructor(e,t,s){super(e,t,Zo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new q(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function My(n,e,...t){if(n=Ne(n),Uu("collection","path",e),n instanceof bi){const s=ue.fromString(e,...t);return Hc(s),new Lt(n,null,s)}{if(!(n instanceof we||n instanceof Lt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ue.fromString(e,...t));return Hc(s),new Lt(n.firestore,null,s)}}function En(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=Ho.newId()),Uu("doc","path",e),n instanceof bi){const s=ue.fromString(e,...t);return Gc(s),new we(n,null,new q(s))}{if(!(n instanceof we||n instanceof Lt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ue.fromString(e,...t));return Gc(s),new we(n.firestore,n instanceof Lt?n.converter:null,new q(s))}}/**
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
 */const Dl="AsyncQueue";class Vl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nh(this,"async_queue_retry"),this._c=()=>{const s=io();s&&M(Dl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Jn(e))throw e;M(Dl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,yt("INTERNAL UNHANDLED ERROR: ",Ol(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=fa.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&H(47125,{Pc:Ol(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class er extends bi{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Vl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function jy(n,e){const t=typeof n=="object"?n:$o(),s=typeof n=="string"?n:qr,r=mn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rm("firestore");i&&Ly(r,...i)}return r}function ya(n){if(n._terminated)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Fy(n),n._firestoreClient}function Fy(n){var s,r,i,a;const e=n._freezeSettings(),t=Oy(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ry(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class He{constructor(e){this._byteString=e}static fromBase64String(e){try{return new He(xe.fromBase64String(e))}catch(t){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new He(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:He._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qs(e,He._jsonSchema))return He.fromBase64String(e.bytes)}}He._jsonSchemaVersion="firestore/bytes/1.0",He._jsonSchema={type:Ie("string",He._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class td{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nd{constructor(e){this._methodName=e}}/**
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
 */class at{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:at._jsonSchemaVersion}}static fromJSON(e){if(Qs(e,at._jsonSchema))return new at(e.latitude,e.longitude)}}at._jsonSchemaVersion="firestore/geoPoint/1.0",at._jsonSchema={type:Ie("string",at._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Ye{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qs(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ye(e.vectorValues);throw new j(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Ie("string",Ye._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const Uy=/^__.*__$/;class zy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Js(e,this.data,t,this.fieldTransforms)}}function sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:n})}}class Ea{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Zr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sd(this.dataSource)&&Uy.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class By{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ti(e)}createContext(e,t,s,r=!1){return new Ea({dataSource:e,methodName:t,targetDoc:s,path:ke.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qy(n){const e=n._freezeSettings(),t=Ti(n._databaseId);return new By(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $y(n,e,t,s,r,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);ad("Data must be an object, but it was:",a,s);const l=id(s,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const v=Ia(e,g,t);if(!a.contains(v))throw new j(k.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Wy(p,v)||p.push(v)}u=new Qe(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new zy(new Ge(l),u,d)}function rd(n,e){if(od(n=Ne(n)))return ad("Unsupported field value:",e,n),id(n,e);if(n instanceof nd)return function(s,r){if(!sd(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const l of s){let u=rd(l,r.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=Ne(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Cg(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=he.fromDate(s);return{timestampValue:Qr(r.serializer,i)}}if(s instanceof he){const i=new he(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qr(r.serializer,i)}}if(s instanceof at)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof He)return{bytesValue:Eh(r.serializer,s._byteString)};if(s instanceof we){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ra(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ye)return function(a,l){const u=a instanceof Ye?a.toArray():a;return{mapValue:{fields:{[Qu]:{stringValue:Ju},[$r]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return ea(l.serializer,p)})}}}}}}(s,r);if(Sh(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Wo(s)}`)}(n,e)}function id(n,e){const t={};return qu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(s,r)=>{const i=rd(r,e.childContextForField(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function od(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof at||n instanceof He||n instanceof we||n instanceof nd||n instanceof Ye||Sh(n))}function ad(n,e,t){if(!od(t)||!zu(t)){const s=Wo(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Ia(n,e,t){if((e=Ne(e))instanceof td)return e._internalPath;if(typeof e=="string")return Hy(n,e);throw Zr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Gy=new RegExp("[~\\*/\\[\\]]");function Hy(n,e,t){if(e.search(Gy)>=0)throw Zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new td(...e.split("."))._internalPath}catch{throw Zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zr(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new j(k.INVALID_ARGUMENT,l+n+u)}function Wy(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ky{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return pn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[$r].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>_e(a.doubleValue));return new Ye(t)}convertGeoPoint(e){return new at(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=zt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ue.fromString(e);re(bh(s),9688,{name:e});const r=new Bs(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(t)||yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class cd extends Ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new He(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}const Ll="@firebase/firestore",Ml="4.11.0";/**
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
 */class ld{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ia("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qy extends ld{data(){return super.data()}}/**
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
 */function Jy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Yy(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class on extends ld{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ia("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=on._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}on._jsonSchemaVersion="firestore/documentSnapshot/1.0",on._jsonSchema={type:Ie("string",on._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Vr extends on{data(e={}){return super.data(e)}}class On{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ns(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Vr(this._firestore,this._userDataWriter,s.key,s,new Ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new Vr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ns(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ns(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Xy(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=On._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */On._jsonSchemaVersion="firestore/querySnapshot/1.0",On._jsonSchema={type:Ie("string",On._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};/**
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
 */function ud(n){n=Ft(n,we);const e=Ft(n.firestore,er),t=ya(e);return Ny(t,n._key).then(s=>tE(e,n,s))}function Zy(n){n=Ft(n,Si);const e=Ft(n.firestore,er),t=ya(e),s=new cd(e);return Jy(n._query),xy(t,n._query).then(r=>new On(e,s,n,r))}function Ci(n,e,t){n=Ft(n,we);const s=Ft(n.firestore,er),r=Yy(n.converter,e),i=qy(s);return hd(s,[$y(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,it.none())])}function eE(n){return hd(Ft(n.firestore,er),[new ta(n._key,it.none())])}function hd(n,e){const t=ya(n);return Dy(t,e)}function tE(n,e,t){const s=t.docs.get(e._key),r=new cd(n);return new on(n,r,e._key,s,new Ns(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Dp(Wn),lt(new Ze("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new er(new Lp(s.getProvider("auth-internal")),new Fp(a,s.getProvider("app-check-internal")),ng(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),We(Ll,Ml,e),We(Ll,Ml,"esm2020")})();var nE="firebase",sE="12.9.0";/**
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
 */We(nE,sE,"app");function dd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rE=dd,fd=new fn("auth","Firebase",dd());/**
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
 */const ei=new di("@firebase/auth");function iE(n,...e){ei.logLevel<=Z.WARN&&ei.warn(`Auth (${Wn}): ${n}`,...e)}function Or(n,...e){ei.logLevel<=Z.ERROR&&ei.error(`Auth (${Wn}): ${n}`,...e)}/**
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
 */function Ke(n,...e){throw Ta(n,...e)}function Xe(n,...e){return Ta(n,...e)}function va(n,e,t){const s={...rE(),[e]:t};return new fn("auth","Firebase",s).create(e,{appName:n.name})}function Mt(n){return va(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oE(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ke(n,"argument-error"),va(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return fd.create(n,...e)}function G(n,e,...t){if(!n)throw Ta(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Or(e),new Error(e)}function It(n,e){n||mt(e)}/**
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
 */function Lo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function aE(){return jl()==="http:"||jl()==="https:"}function jl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function cE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aE()||Uo()||"connection"in navigator)?navigator.onLine:!0}function lE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class tr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=lm()||dm()}get(){return cE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wa(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class md{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dE=new tr(3e4,6e4);function In(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ht(n,e,t,s,r={}){return pd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=Ks({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return hm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(d.credentials="include"),md.fetch()(await gd(n,n.config.apiHost,t,l),d)})}async function pd(n,e,t){n._canInitEmulator=!1;const s={...uE,...e};try{const r=new mE(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Cr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Cr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Cr(n,"user-disabled",a);const p=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw va(n,p,d);Ke(n,p)}}catch(r){if(r instanceof et)throw r;Ke(n,"network-request-failed",{message:String(r)})}}async function Ri(n,e,t,s,r={}){const i=await Ht(n,e,t,s,r);return"mfaPendingCredential"in i&&Ke(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function gd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?wa(n.config,r):`${n.config.apiScheme}://${r}`;return hE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function fE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),dE.get())})}}function Cr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Xe(n,e,s);return r.customData._tokenResponse=t,r}function Fl(n){return n!==void 0&&n.enterprise!==void 0}class pE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gE(n,e){return Ht(n,"GET","/v2/recaptchaConfig",In(n,e))}/**
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
 */async function _E(n,e){return Ht(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return Ht(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yE(n,e=!1){const t=Ne(n),s=await t.getIdToken(e),r=Aa(s);G(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ms(ao(r.auth_time)),issuedAtTime:Ms(ao(r.iat)),expirationTime:Ms(ao(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ao(n){return Number(n)*1e3}function Aa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const r=Eu(t);return r?JSON.parse(r):(Or("Failed to decode base64 JWT payload"),null)}catch(r){return Or("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ul(n){const e=Aa(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof et&&EE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function EE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class IE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var g;const e=n.auth,t=await n.getIdToken(),s=await Hs(n,ti(e,{idToken:t}));G(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?_d(r.providerUserInfo):[],a=TE(n.providerData,i),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mo(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function vE(n){const e=Ne(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TE(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function _d(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function wE(n,e){const t=await pd(n,{},async()=>{const s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await gd(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(u.credentials="include"),md.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AE(n,e){return Ht(n,"POST","/v2/accounts:revokeToken",In(n,e))}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await wE(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Ln;return s&&(G(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Rt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new IE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yE(this,e)}reload(){return vE(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Hs(this,_E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:S,providerData:x,stsTokenManager:D}=t;G(g&&D,e,"internal-error");const N=Ln.fromJSON(this.name,D);G(typeof g=="string",e,"internal-error"),Rt(s,e.name),Rt(r,e.name),G(typeof v=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Rt(i,e.name),Rt(a,e.name),Rt(l,e.name),Rt(u,e.name),Rt(d,e.name),Rt(p,e.name);const U=new Je({uid:g,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:d,lastLoginAt:p});return x&&Array.isArray(x)&&(U.providerData=x.map($=>({...$}))),u&&(U._redirectEventId=u),U}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ln;r.updateFromServerResponse(t);const i=new Je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];G(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?_d(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ln;l.updateFromIdToken(s);const u=new Je({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const zl=new Map;function pt(n){It(n instanceof Function,"Expected a class definition");let e=zl.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zl.set(n,e),e)}/**
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
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yd.type="NONE";const Bl=yd;/**
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
 */function Lr(n,e,t){return`firebase:${n}:${e}:${t}`}class Mn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Lr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Lr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mn(pt(Bl),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||pt(Bl);const a=Lr(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const v=await ti(e,{idToken:p}).catch(()=>{});if(!v)break;g=await Je._fromGetAccountInfoResponse(e,v,p)}else g=Je._fromJSON(e,p);d!==i&&(l=g),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mn(i,e,s):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Mn(i,e,s))}}/**
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
 */function ql(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Td(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ed(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ad(e))return"Blackberry";if(bd(e))return"Webos";if(Id(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(wd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ed(n=Me()){return/firefox\//i.test(n)}function Id(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(n=Me()){return/crios\//i.test(n)}function Td(n=Me()){return/iemobile/i.test(n)}function wd(n=Me()){return/android/i.test(n)}function Ad(n=Me()){return/blackberry/i.test(n)}function bd(n=Me()){return/webos/i.test(n)}function ba(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bE(n=Me()){var e;return ba(n)&&!!((e=window.navigator)!=null&&e.standalone)}function SE(){return fm()&&document.documentMode===10}function Sd(n=Me()){return ba(n)||wd(n)||bd(n)||Ad(n)||/windows phone/i.test(n)||Td(n)}/**
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
 */function Cd(n,e=[]){let t;switch(n){case"Browser":t=ql(Me());break;case"Worker":t=`${ql(Me())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wn}/${s}`}/**
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
 */class CE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function RE(n,e={}){return Ht(n,"GET","/v2/passwordPolicy",In(n,e))}/**
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
 */const PE=6;class kE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??PE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class NE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new CE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),s=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Mt(this));const t=e?Ne(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RE(this),t=new kE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await AE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&iE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vn(n){return Ne(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Em(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xE(n){Pi=n}function Rd(n){return Pi.loadJS(n)}function DE(){return Pi.recaptchaEnterpriseScript}function VE(){return Pi.gapiScript}function OE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class LE{constructor(){this.enterprise=new ME}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ME{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jE="recaptcha-enterprise",Pd="NO_RECAPTCHA";class FE{constructor(e){this.type=jE,this.auth=vn(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{gE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new pE(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function r(i,a,l){const u=window.grecaptcha;Fl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Pd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LE().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&Fl(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DE();u.length!==0&&(u+=l),Rd(u).then(()=>{r(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Gl(n,e,t,s=!1,r=!1){const i=new FE(n);let a;if(r)a=Pd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Hl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Gl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gl(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
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
 */function UE(n,e){const t=mn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(jt(i,e??{}))return r;Ke(r,"already-initialized")}return t.initialize({options:e})}function zE(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BE(n,e,t){const s=vn(n);G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=kd(e),{host:a,port:l}=qE(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){G(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),G(jt(d,s.config.emulator)&&jt(p,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=p,s.settings.appVerificationDisabledForTesting=!0,Hn(a)?(wu(`${i}//${a}${u}`),Au("Auth",!0)):$E()}function kd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qE(n){const e=kd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Wl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Wl(a)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $E(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Sa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function GE(n,e){return Ht(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HE(n,e){return Ri(n,"POST","/v1/accounts:signInWithPassword",In(n,e))}/**
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
 */async function WE(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}async function KE(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}/**
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
 */class Ws extends Sa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ws(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,t,"signInWithPassword",HE);case"emailLink":return WE(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,s,"signUpPassword",GE);case"emailLink":return KE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(n,e){return Ri(n,"POST","/v1/accounts:signInWithIdp",In(n,e))}/**
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
 */const QE="http://localhost";class un extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new un(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,jn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:QE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
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
 */function JE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YE(n){const e=Ss(Cs(n)).link,t=e?Ss(Cs(e)).deep_link_id:null,s=Ss(Cs(n)).deep_link_id;return(s?Ss(Cs(s)).link:null)||s||t||e||n}class Ca{constructor(e){const t=Ss(Cs(e)),s=t.apiKey??null,r=t.oobCode??null,i=JE(t.mode??null);G(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=YE(e);try{return new Ca(t)}catch{return null}}}/**
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
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ca.parseLink(t);return G(s,"argument-error"),Ws._fromEmailAndCode(e,s.code,s.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nr extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends nr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class ft extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ft.credential(t,s)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
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
 */class kt extends nr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Nt extends nr{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Nt.credential(t,s)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Je._fromIdTokenResponse(e,s,r),a=Kl(s);return new Gn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Kl(s);return new Gn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class si extends et{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new si(e,t,s,r)}}function Nd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,i,e,s):i})}async function XE(n,e,t=!1){const s=await Hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gn._forOperation(n,"link",s)}/**
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
 */async function ZE(n,e,t=!1){const{auth:s}=n;if($e(s.app))return Promise.reject(Mt(s));const r="reauthenticate";try{const i=await Hs(n,Nd(s,r,e,n),t);G(i.idToken,s,"internal-error");const a=Aa(i.idToken);G(a,s,"internal-error");const{sub:l}=a;return G(n.uid===l,s,"user-mismatch"),Gn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(s,"user-mismatch"),i}}/**
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
 */async function xd(n,e,t=!1){if($e(n.app))return Promise.reject(Mt(n));const s="signIn",r=await Nd(n,s,e),i=await Gn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function eI(n,e){return xd(vn(n),e)}/**
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
 */async function tI(n){const e=vn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nI(n,e,t){return $e(n.app)?Promise.reject(Mt(n)):eI(Ne(n),Xn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tI(n),s})}function sI(n,e,t,s){return Ne(n).onIdTokenChanged(e,t,s)}function rI(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function iI(n,e,t,s){return Ne(n).onAuthStateChanged(e,t,s)}function oI(n){return Ne(n).signOut()}const ri="__sak";/**
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
 */class Dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ri,"1"),this.storage.removeItem(ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aI=1e3,cI=10;class Vd extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);SE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cI):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vd.type="LOCAL";const lI=Vd;/**
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
 */class Od extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Od.type="SESSION";const Ld=Od;/**
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
 */function uI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await uI(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
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
 */function Pa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Pa("",20);r.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ct(){return window}function dI(n){ct().location.href=n}/**
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
 */function Md(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function fI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function pI(){return Md()?self:null}/**
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
 */const jd="firebaseLocalStorageDb",gI=1,ii="firebaseLocalStorage",Fd="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function _I(){const n=indexedDB.deleteDatabase(jd);return new sr(n).toPromise()}function jo(){const n=indexedDB.open(jd,gI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ii,{keyPath:Fd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ii)?e(s):(s.close(),await _I(),e(await jo()))})})}async function Ql(n,e,t){const s=Ni(n,!0).put({[Fd]:e,value:t});return new sr(s).toPromise()}async function yI(n,e){const t=Ni(n,!1).get(e),s=await new sr(t).toPromise();return s===void 0?null:s.value}function Jl(n,e){const t=Ni(n,!0).delete(e);return new sr(t).toPromise()}const EI=800,II=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>II)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(pI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await fI(),!this.activeServiceWorker)return;this.sender=new hI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jo();return await Ql(e,ri,"1"),await Jl(e,ri),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ql(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ni(r,!1).getAll();return new sr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const vI=Ud;new tr(3e4,6e4);/**
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
 */function zd(n,e){return e?pt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ka extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TI(n){return xd(n.auth,new ka(n),n.bypassAuthState)}function wI(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),ZE(t,new ka(n),n.bypassAuthState)}async function AI(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),XE(t,new ka(n),n.bypassAuthState)}/**
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
 */class Bd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TI;case"linkViaPopup":case"linkViaRedirect":return AI;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:Ke(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bI=new tr(2e3,1e4);async function SI(n,e,t){if($e(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const s=vn(n);oE(n,e,Ra);const r=zd(s,t);return new sn(s,"signInViaPopup",e,r).executeNotNull()}class sn extends Bd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bI.get())};e()}}sn.currentPopupAction=null;/**
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
 */const CI="pendingRedirect",Mr=new Map;class RI extends Bd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const s=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(n,e){const t=xI(e),s=NI(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function kI(n,e){Mr.set(n._key(),e)}function NI(n){return pt(n._redirectPersistence)}function xI(n){return Lr(CI,n.config.apiKey,n.name)}async function DI(n,e,t=!1){if($e(n.app))return Promise.reject(Mt(n));const s=vn(n),r=zd(s,e),a=await new RI(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const VI=10*60*1e3;class OI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qd(n);default:return!1}}/**
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
 */async function MI(n,e={}){return Ht(n,"GET","/v1/projects",e)}/**
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
 */const jI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FI=/^https?/;async function UI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await MI(n);for(const t of e)try{if(zI(t))return}catch{}Ke(n,"unauthorized-domain")}function zI(n){const e=Lo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!FI.test(t))return!1;if(jI.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const BI=new tr(3e4,6e4);function Xl(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qI(n){return new Promise((e,t)=>{var r,i,a;function s(){Xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xl(),t(Xe(n,"network-request-failed"))},timeout:BI.get()})}if((i=(r=ct().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ct().gapi)!=null&&a.load)s();else{const l=OE("iframefcb");return ct()[l]=()=>{gapi.load?s():t(Xe(n,"network-request-failed"))},Rd(`${VE()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw jr=null,e})}let jr=null;function $I(n){return jr=jr||qI(n),jr}/**
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
 */const GI=new tr(5e3,15e3),HI="__/auth/iframe",WI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JI(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wa(e,WI):`https://${n.config.authDomain}/${HI}`,s={apiKey:e.apiKey,appName:n.name,v:Wn},r=QI.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ks(s).slice(1)}`}async function YI(n){const e=await $I(n),t=ct().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:JI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),l=ct().setTimeout(()=>{i(a)},GI.get());function u(){ct().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const XI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZI=500,ev=600,tv="_blank",nv="http://localhost";class Zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sv(n,e,t,s=ZI,r=ev){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...XI,width:s.toString(),height:r.toString(),top:i,left:a},d=Me().toLowerCase();t&&(l=vd(d)?tv:t),Ed(d)&&(e=e||nv,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(bE(d)&&l!=="_self")return rv(e||"",l),new Zl(null);const g=window.open(e||"",l,p);G(g,n,"popup-blocked");try{g.focus()}catch{}return new Zl(g)}function rv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const iv="__/auth/handler",ov="emulator/auth/handler",av=encodeURIComponent("fac");async function eu(n,e,t,s,r,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Wn,eventId:r};if(e instanceof Ra){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ym(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof nr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${av}=${encodeURIComponent(u)}`:"";return`${cv(n)}?${Ks(l).slice(1)}${d}`}function cv({config:n}){return n.emulator?wa(n,ov):`https://${n.authDomain}/${iv}`}/**
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
 */const co="webStorageSupport";class lv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=DI,this._overrideRedirectResult=kI}async _openPopup(e,t,s,r){var a;It((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await eu(e,t,s,Lo(),r);return sv(e,i,Pa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await eu(e,t,s,Lo(),r);return dI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(It(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await YI(e),s=new OI(e);return t.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(co,{type:co},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[co];i!==void 0&&t(!!i),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sd()||Id()||ba()}}const uv=lv;var tu="@firebase/auth",nu="1.12.0";/**
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
 */class hv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fv(n){lt(new Ze("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cd(n)},d=new NE(s,r,i,u);return zE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),lt(new Ze("auth-internal",e=>{const t=vn(e.getProvider("auth").getImmediate());return(s=>new hv(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(tu,nu,dv(n)),We(tu,nu,"esm2020")}/**
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
 */const mv=5*60,pv=Tu("authIdTokenMaxAge")||mv;let su=null;const gv=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pv)return;const r=t==null?void 0:t.token;su!==r&&(su=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _v(n=$o()){const e=mn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=UE(n,{popupRedirectResolver:uv,persistence:[vI,lI,Ld]}),s=Tu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=gv(i.toString());rI(t,a,()=>a(t.currentUser)),sI(t,l=>a(l))}}const r=Iu("auth");return r&&BE(t,`http://${r}`),t}function yv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}xE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Xe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",yv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fv("Browser");const $d="@firebase/installations",Na="0.6.19";/**
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
 */const Gd=1e4,Hd=`w:${Na}`,Wd="FIS_v2",Ev="https://firebaseinstallations.googleapis.com/v1",Iv=60*60*1e3,vv="installations",Tv="Installations";/**
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
 */const wv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hn=new fn(vv,Tv,wv);function Kd(n){return n instanceof et&&n.code.includes("request-failed")}/**
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
 */function Qd({projectId:n}){return`${Ev}/projects/${n}/installations`}function Jd(n){return{token:n.token,requestStatus:2,expiresIn:bv(n.expiresIn),creationTime:Date.now()}}async function Yd(n,e){const s=(await e.json()).error;return hn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Av(n,{refreshToken:e}){const t=Xd(n);return t.append("Authorization",Sv(e)),t}async function Zd(n){const e=await n();return e.status>=500&&e.status<600?n():e}function bv(n){return Number(n.replace("s","000"))}function Sv(n){return`${Wd} ${n}`}/**
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
 */async function Cv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Qd(n),r=Xd(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Wd,appId:n.appId,sdkVersion:Hd},l={method:"POST",headers:r,body:JSON.stringify(a)},u=await Zd(()=>fetch(s,l));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Jd(d.authToken)}}else throw await Yd("Create Installation",u)}/**
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
 */function ef(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Rv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Pv=/^[cdef][\w-]{21}$/,Fo="";function kv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Nv(n);return Pv.test(t)?t:Fo}catch{return Fo}}function Nv(n){return Rv(n).substr(0,22)}/**
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
 */function xi(n){return`${n.appName}!${n.appId}`}/**
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
 */const tf=new Map;function nf(n,e){const t=xi(n);sf(t,e),xv(t,e)}function sf(n,e){const t=tf.get(n);if(t)for(const s of t)s(e)}function xv(n,e){const t=Dv();t&&t.postMessage({key:n,fid:e}),Vv()}let rn=null;function Dv(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=n=>{sf(n.data.key,n.data.fid)}),rn}function Vv(){tf.size===0&&rn&&(rn.close(),rn=null)}/**
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
 */const Ov="firebase-installations-database",Lv=1,dn="firebase-installations-store";let lo=null;function xa(){return lo||(lo=Ru(Ov,Lv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dn)}}})),lo}async function oi(n,e){const t=xi(n),r=(await xa()).transaction(dn,"readwrite"),i=r.objectStore(dn),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&nf(n,e.fid),e}async function rf(n){const e=xi(n),s=(await xa()).transaction(dn,"readwrite");await s.objectStore(dn).delete(e),await s.done}async function Di(n,e){const t=xi(n),r=(await xa()).transaction(dn,"readwrite"),i=r.objectStore(dn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&nf(n,l.fid),l}/**
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
 */async function Da(n){let e;const t=await Di(n.appConfig,s=>{const r=Mv(s),i=jv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Fo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Mv(n){const e=n||{fid:kv(),registrationStatus:0};return of(e)}function jv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(hn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Fv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Uv(n)}:{installationEntry:e}}async function Fv(n,e){try{const t=await Cv(n,e);return oi(n.appConfig,t)}catch(t){throw Kd(t)&&t.customData.serverCode===409?await rf(n.appConfig):await oi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Uv(n){let e=await ru(n.appConfig);for(;e.registrationStatus===1;)await ef(100),e=await ru(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Da(n);return s||t}return e}function ru(n){return Di(n,e=>{if(!e)throw hn.create("installation-not-found");return of(e)})}function of(n){return zv(n)?{fid:n.fid,registrationStatus:0}:n}function zv(n){return n.registrationStatus===1&&n.registrationTime+Gd<Date.now()}/**
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
 */async function Bv({appConfig:n,heartbeatServiceProvider:e},t){const s=qv(n,t),r=Av(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Hd,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},u=await Zd(()=>fetch(s,l));if(u.ok){const d=await u.json();return Jd(d)}else throw await Yd("Generate Auth Token",u)}function qv(n,{fid:e}){return`${Qd(n)}/${e}/authTokens:generate`}/**
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
 */async function Va(n,e=!1){let t;const s=await Di(n.appConfig,i=>{if(!af(i))throw hn.create("not-registered");const a=i.authToken;if(!e&&Hv(a))return i;if(a.requestStatus===1)return t=$v(n,e),i;{if(!navigator.onLine)throw hn.create("app-offline");const l=Kv(i);return t=Gv(n,l),l}});return t?await t:s.authToken}async function $v(n,e){let t=await iu(n.appConfig);for(;t.authToken.requestStatus===1;)await ef(100),t=await iu(n.appConfig);const s=t.authToken;return s.requestStatus===0?Va(n,e):s}function iu(n){return Di(n,e=>{if(!af(e))throw hn.create("not-registered");const t=e.authToken;return Qv(t)?{...e,authToken:{requestStatus:0}}:e})}async function Gv(n,e){try{const t=await Bv(n,e),s={...e,authToken:t};return await oi(n.appConfig,s),t}catch(t){if(Kd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await rf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await oi(n.appConfig,s)}throw t}}function af(n){return n!==void 0&&n.registrationStatus===2}function Hv(n){return n.requestStatus===2&&!Wv(n)}function Wv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Iv}function Kv(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Qv(n){return n.requestStatus===1&&n.requestTime+Gd<Date.now()}/**
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
 */async function Jv(n){const e=n,{installationEntry:t,registrationPromise:s}=await Da(e);return s?s.catch(console.error):Va(e).catch(console.error),t.fid}/**
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
 */async function Yv(n,e=!1){const t=n;return await Xv(t),(await Va(t,e)).token}async function Xv(n){const{registrationPromise:e}=await Da(n);e&&await e}/**
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
 */function Zv(n){if(!n||!n.options)throw uo("App Configuration");if(!n.name)throw uo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw uo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function uo(n){return hn.create("missing-app-config-values",{valueName:n})}/**
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
 */const cf="installations",eT="installations-internal",tT=n=>{const e=n.getProvider("app").getImmediate(),t=Zv(e),s=mn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},nT=n=>{const e=n.getProvider("app").getImmediate(),t=mn(e,cf).getImmediate();return{getId:()=>Jv(t),getToken:r=>Yv(t,r)}};function sT(){lt(new Ze(cf,tT,"PUBLIC")),lt(new Ze(eT,nT,"PRIVATE"))}sT();We($d,Na);We($d,Na,"esm2020");/**
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
 */const ai="analytics",rT="firebase_id",iT="origin",oT=60*1e3,aT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ue=new di("@firebase/analytics");/**
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
 */const cT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new fn("analytics","Analytics",cT);/**
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
 */function lT(n){if(!n.startsWith(Oa)){const e=qe.create("invalid-gtag-resource",{gtagURL:n});return Ue.warn(e.message),""}return n}function lf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function uT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function hT(n,e){const t=uT("firebase-js-sdk-policy",{createScriptURL:lT}),s=document.createElement("script"),r=`${Oa}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function dT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function fT(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const u=(await lf(t)).find(d=>d.measurementId===r);u&&await e[u.appId]}}catch(l){Ue.error(l)}n("config",r,i)}async function mT(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await lf(t);for(const u of a){const d=l.find(g=>g.measurementId===u),p=d&&e[d.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){Ue.error(i)}}function pT(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[l,u]=a;await mT(n,e,t,l,u)}else if(i==="config"){const[l,u]=a;await fT(n,e,t,s,l,u)}else if(i==="consent"){const[l,u]=a;n("consent",l,u)}else if(i==="get"){const[l,u,d]=a;n("get",l,u,d)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){Ue.error(l)}}return r}function gT(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=pT(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function _T(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Oa)&&t.src.includes(n))return t;return null}/**
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
 */const yT=30,ET=1e3;class IT{constructor(e={},t=ET){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uf=new IT;function vT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function TT(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:vT(t)},r=aT.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function wT(n,e=uf,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw qe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw qe.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ST;return setTimeout(async()=>{l.abort()},oT),hf({appId:s,apiKey:r,measurementId:i},a,l,e)}async function hf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=uf){var l;const{appId:i,measurementId:a}=n;try{await AT(s,e)}catch(u){if(a)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await TT(n);return r.deleteThrottleMetadata(i),u}catch(u){const d=u;if(!bT(d)){if(r.deleteThrottleMetadata(i),a)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw u}const p=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?Dc(t,r.intervalMillis,yT):Dc(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return r.setThrottleMetadata(i,g),Ue.debug(`Calling attemptFetch again in ${p} millis`),hf(n,g,s,r)}}function AT(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bT(n){if(!(n instanceof et)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ST{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function CT(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function RT(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function PT(){if(zo())try{await Bo()}catch(n){return Ue.warn(qe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ue.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kT(n,e,t,s,r,i,a){const l=wT(n);l.then(v=>{t[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Ue.error(v)),e.push(l);const u=PT().then(v=>{if(v)return s.getId()}),[d,p]=await Promise.all([l,u]);_T(i)||hT(i,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[iT]="firebase",g.update=!0,p!=null&&(g[rT]=p),r("config",d.measurementId,g),d.measurementId}/**
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
 */class NT{constructor(e){this.app=e}_delete(){return delete Fn[this.app.options.appId],Promise.resolve()}}let Fn={},ou=[];const au={};let ho="dataLayer",xT="gtag",cu,La,lu=!1;function DT(){const n=[];if(Uo()&&n.push("This is a browser extension environment."),bu()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=qe.create("invalid-analytics-context",{errorInfo:e});Ue.warn(t.message)}}function VT(n,e,t){DT();const s=n.options.appId;if(!s)throw qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(Fn[s]!=null)throw qe.create("already-exists",{id:s});if(!lu){dT(ho);const{wrappedGtag:i,gtagCore:a}=gT(Fn,ou,au,ho,xT);La=i,cu=a,lu=!0}return Fn[s]=kT(n,ou,au,e,cu,ho,t),new NT(n)}function OT(n=$o()){n=Ne(n);const e=mn(n,ai);return e.isInitialized()?e.getImmediate():LT(n)}function LT(n,e={}){const t=mn(n,ai);if(t.isInitialized()){const r=t.getImmediate();if(jt(e,t.getOptions()))return r;throw qe.create("already-initialized")}return t.initialize({options:e})}async function MT(){if(Uo()||!bu()||!zo())return!1;try{return await Bo()}catch{return!1}}function jT(n,e,t){n=Ne(n),RT(La,Fn[n.app.options.appId],e,t).catch(s=>Ue.error(s))}function FT(n,e,t,s){n=Ne(n),CT(La,Fn[n.app.options.appId],e,t,s).catch(r=>Ue.error(r))}const uu="@firebase/analytics",hu="0.10.19";function UT(){lt(new Ze(ai,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return VT(s,r,t)},"PUBLIC")),lt(new Ze("analytics-internal",n,"PRIVATE")),We(uu,hu),We(uu,hu,"esm2020");function n(e){try{const t=e.getProvider(ai).getImmediate();return{logEvent:(s,r,i)=>FT(t,s,r,i),setUserProperties:(s,r)=>jT(t,s,r)}}catch(t){throw qe.create("interop-component-reg-failed",{reason:t})}}}UT();const zT={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},Ma=Pu(zT),Wt=jy(Ma),Rr=_v(Ma);MT().then(n=>{n&&OT(Ma)});const BT=60*60*1e3;function ja(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:s}=JSON.parse(e);return Date.now()-s>BT?null:t}catch{return null}}function Zn(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function qT(){const n=ja("books_old-testament");if(n)return n;try{const e=await ud(En(Wt,"books","old-testament"));if(e.exists()){const t=e.data().books;return Zn("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function $T(){const n=ja("all_quizzes");if(n)return n;try{const e=await Zy(My(Wt,"quizzes")),t=[];if(e.forEach(s=>t.push({id:s.id,...s.data()})),t.length>0)return Zn("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function du(n){const e=ja(`translations_${n}`);if(e)return e;try{const t=await ud(En(Wt,"translations",n));if(t.exists()){const s=t.data();return Zn(`translations_${n}`,s),s}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function df(n){await Ci(En(Wt,"books","old-testament"),{books:n}),Zn("books_old-testament",n)}async function ff(n,e){await Ci(En(Wt,"quizzes",n),e),Zn(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function GT(n,e){await Ci(En(Wt,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function HT(n){await eE(En(Wt,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function ci(n,e){await Ci(En(Wt,"translations",n),e),Zn(`translations_${n}`,e)}const mf=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],li={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},WT=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},pf=O.createContext(null),KT=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:li.en,es:li.es}],QT=({children:n})=>{const[e,t]=O.useState(mf),[s,r]=O.useState(KT),[i,a]=O.useState(js),[l,u]=O.useState(!0),[d,p]=O.useState(null),g=O.useCallback(async()=>{u(!0),p(null);try{const[x,D,N,U]=await Promise.all([qT(),$T(),du("en"),du("es")]);x&&t(x),D&&D.length>0&&r(D),(N||U)&&a($=>({...$,...N?{en:N}:{},...U?{es:U}:{}}))}catch(x){console.warn("Failed to load Firestore data, using fallbacks:",x.message),p(x.message)}finally{u(!1)}},[]);O.useEffect(()=>{g()},[g]);const v=O.useCallback(()=>(Object.keys(localStorage).forEach(x=>{x.startsWith("firestore_")&&localStorage.removeItem(x)}),g()),[g]),S={books:e,quizzes:s,translations:i,loading:l,error:d,refreshData:v,setBooks:t,setQuizzes:r,setTranslations:a};return f.jsx(pf.Provider,{value:S,children:n})},Tn=()=>{const n=O.useContext(pf);if(!n)throw new Error("useData must be used within a DataProvider");return n},gf=O.createContext(null),JT=()=>{var t;const n=localStorage.getItem("language");if(n&&js[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&js[e]?e:"en"},YT=({children:n})=>{const{translations:e}=Tn(),[t,s]=O.useState(JT);O.useEffect(()=>{document.documentElement.lang=t},[t]);const r=O.useCallback(p=>{e[p]&&(s(p),localStorage.setItem("language",p))},[e]),i=O.useCallback((p,g={})=>{const v=p.split(".");let S=e[t];for(const x of v)if(S&&typeof S=="object"&&x in S)S=S[x];else{S=e.en;for(const D of v)if(S&&typeof S=="object"&&D in S)S=S[D];else return p;break}return typeof S=="string"&&Object.keys(g).length>0?S.replace(/\{(\w+)\}/g,(x,D)=>g[D]!==void 0?g[D]:x):S||p},[t,e]),a=O.useCallback(p=>{var g,v;return((v=(g=e[t])==null?void 0:g.books)==null?void 0:v[p])||p},[t,e]),l=O.useCallback(p=>{var v;const g=((v=e[t])==null?void 0:v.scores)||e.en.scores;return p===100?g.perfect:p>=90?g.excellent:p>=80?g.great:p>=70?g.good:p>=60?g.notBad:p>=50?g.keepPracticing:g.tryAgain},[t,e]),u=O.useMemo(()=>Object.keys(e),[e]),d=O.useMemo(()=>({language:t,setLanguage:r,t:i,translateBook:a,getScoreMessage:l,availableLanguages:u}),[t,r,i,a,l,u]);return f.jsx(gf.Provider,{value:d,children:n})},es=()=>{const n=O.useContext(gf);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},XT=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:s,onNavigateAdmin:r})=>{const{stats:i}=gu(),{t:a,language:l}=es(),{quizzes:u}=Tn();return f.jsx("div",{className:"home-container",children:f.jsxs("div",{className:"home-content",children:[f.jsx("header",{className:"home-header",children:f.jsxs("div",{className:"logo-container",children:[f.jsx("div",{className:"logo",children:f.jsx("span",{className:"logo-icon",children:"📖"})}),f.jsx("h1",{className:"app-title",children:a("appName")}),f.jsx("p",{className:"app-subtitle",children:a("appSubtitle")})]})}),f.jsxs(Fr,{className:"welcome-card",children:[f.jsx("h2",{className:"welcome-title",children:a("home.welcomeTitle")}),f.jsx("p",{className:"welcome-description",children:a("home.welcomeDescription")}),f.jsxs("div",{className:"quiz-info",children:[f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"📚"}),f.jsx("span",{className:"info-text",children:a("home.booksCount")})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"⏱️"}),f.jsx("span",{className:"info-text",children:a("home.unlimitedTime")})]})]}),f.jsx("h3",{className:"quiz-type-title",children:a("home.selectQuizType")}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:a("home.oldTestament")}),f.jsxs("div",{className:"quiz-types",children:[f.jsxs("button",{className:"quiz-type-card",onClick:n,children:[f.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.order.icon")}),f.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.order.title")}),f.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.order.description")})]}),f.jsxs("button",{className:"quiz-type-card",onClick:e,children:[f.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.complete.icon")}),f.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.complete.title")}),f.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.complete.description")})]})]})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:a("home.knowledge")}),f.jsx("div",{className:"quiz-types",children:u.map(d=>{var p,g,v,S;return f.jsxs("button",{className:"quiz-type-card",onClick:()=>{d.id==="genesis-covenants"?t():s&&s(d.id)},children:[f.jsx("span",{className:"quiz-type-icon",children:d.icon||"📝"}),f.jsx("span",{className:"quiz-type-name",children:((p=d.title)==null?void 0:p[l])||((g=d.title)==null?void 0:g.en)||d.id}),f.jsx("span",{className:"quiz-type-desc",children:((v=d.description)==null?void 0:v[l])||((S=d.description)==null?void 0:S.en)||""})]},d.id)})})]})]}),i.totalAttempts>0&&f.jsxs(Fr,{className:"stats-card",children:[f.jsx("h3",{className:"stats-title",children:a("home.yourProgress")}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-value",children:i.totalAttempts}),f.jsx("div",{className:"stat-label",children:a("home.attempts")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[i.bestScore,"%"]}),f.jsx("div",{className:"stat-label",children:a("home.bestScore")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[i.averageScore,"%"]}),f.jsx("div",{className:"stat-label",children:a("home.average")})]})]})]}),f.jsxs("footer",{className:"home-footer",children:[f.jsx("p",{className:"footer-text",children:a("home.footerText")}),f.jsx("button",{className:"admin-link",onClick:r,onContextMenu:d=>{d.preventDefault(),r==null||r()},children:"⚙"})]})]})})},ZT=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},ew=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",_f=O.createContext(),tw=({children:n})=>{const{books:e}=Tn(),[t,s]=O.useState([]),[r,i]=O.useState([]),[a,l]=O.useState(!1),u=O.useCallback(()=>{s(ZT([...e])),i([]),l(!0)},[e]),d=O.useCallback(N=>{i(U=>[...U,N])},[]),p=O.useCallback(()=>{i(N=>N.slice(0,-1))},[]),g=O.useCallback(()=>{i([])},[]),v=O.useCallback(()=>{let N=0;r.forEach((F,K)=>{e[K]===F&&N++});const U=e.length,$=Math.round(N/U*100);return{correct:N,total:U,percentage:$,selections:r}},[r,e]),S=O.useCallback(N=>r.includes(N),[r]),x=O.useCallback(N=>{const U=r.indexOf(N);return U===-1?null:U+1},[r]),D={shuffledBooks:t,selectedBooks:r,isInitialized:a,initializeQuiz:u,selectBook:d,undoLastSelection:p,resetSelections:g,calculateScore:v,isBookSelected:S,getSelectionIndex:x};return f.jsx(_f.Provider,{value:D,children:n})},nw=()=>{const n=O.useContext(_f);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},sw=({book:n,displayName:e,isSelected:t,selectionIndex:s,onClick:r})=>f.jsx("div",{className:`book-card ${t?"book-card-selected":""}`,onClick:r,role:"button",tabIndex:t?-1:0,onKeyPress:i=>{(i.key==="Enter"||i.key===" ")&&r()},"aria-pressed":t,children:f.jsxs("div",{className:"book-card-content",children:[f.jsx("span",{className:"book-name",children:e||n}),t&&f.jsx("div",{className:"selection-badge",children:s})]})}),Fa=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return f.jsx("div",{className:"progress-bar-container",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},oe=({onClick:n,variant:e="primary",size:t="medium",disabled:s=!1,className:r="",children:i,...a})=>{const l=`button button-${e} button-${t} ${r}`;return f.jsx("button",{className:l,onClick:n,disabled:s,...a,children:i})},rw=({onComplete:n})=>{const{shuffledBooks:e,selectedBooks:t,isInitialized:s,initializeQuiz:r,selectBook:i,undoLastSelection:a,resetSelections:l,calculateScore:u,isBookSelected:d,getSelectionIndex:p}=nw(),{t:g,translateBook:v}=es(),[S,x]=O.useState(!1);O.useEffect(()=>{s||r()},[s,r]);const D=L=>{d(L)||i(L)},N=()=>{t.length===e.length&&x(!0)},U=()=>{const L=u();n(L)},$=()=>{x(!1)},F=e.length>0?t.length/e.length*100:0,K=t.length===e.length;return f.jsxs("div",{className:"quiz-container",children:[f.jsxs("header",{className:"quiz-header",children:[f.jsx("h1",{className:"quiz-title",children:g("quiz.title")}),f.jsx("p",{className:"quiz-instruction",children:g("quiz.instruction")})]}),f.jsxs("div",{className:"quiz-progress",children:[f.jsx(Fa,{progress:F}),f.jsxs("div",{className:"progress-text",children:[t.length," / ",e.length," ",g("quiz.selected")]})]}),f.jsx("div",{className:"quiz-content",children:f.jsx("div",{className:"books-grid",children:e.map((L,z)=>f.jsx(sw,{book:L,displayName:v(L),isSelected:d(L),selectionIndex:p(L),onClick:()=>D(L)},`${L}-${z}`))})}),f.jsxs("div",{className:"quiz-actions",children:[f.jsx(oe,{onClick:a,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.undoLast")}),f.jsx(oe,{onClick:l,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.resetAll")}),f.jsx(oe,{onClick:N,variant:"primary",disabled:!K,className:"action-button submit-button",children:g("quiz.submitAnswer")})]}),S&&f.jsx("div",{className:"confirmation-overlay",onClick:$,children:f.jsxs("div",{className:"confirmation-modal",onClick:L=>L.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:g("quiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:g("quiz.confirmText",{count:e.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(oe,{onClick:$,variant:"secondary",children:g("quiz.goBack")}),f.jsx(oe,{onClick:U,variant:"primary",children:g("quiz.yesSubmit")})]})]})})]})},iw=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const s=t.split(" ");if(s.length>1)return`${s[0]} ${s[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},fo=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),ow=({onComplete:n})=>{const{t:e,translateBook:t,language:s}=es(),{books:r}=Tn(),[i,a]=O.useState(0),[l,u]=O.useState(""),[d,p]=O.useState(Array(r.length).fill(null)),[g,v]=O.useState(!1),[S,x]=O.useState(null),[D,N]=O.useState(!1),U=O.useRef(null),$=r[i],F=t($),K=iw($,F);O.useEffect(()=>{U.current&&!g&&U.current.focus()},[i,g]);const L=()=>{const X=fo(l),ge=fo(F),ie=fo($),de=X===ge||X===ie;x(de),v(!0);const De=[...d];De[i]={input:l,correct:de,correctAnswer:F},p(De)},z=()=>{i<r.length-1?(a(i+1),u(""),v(!1),x(null)):E()},I=()=>{const X=[...d];X[i]={input:"",correct:!1,correctAnswer:F,skipped:!0},p(X),i<r.length-1?(a(i+1),u(""),v(!1),x(null)):E()},_=X=>{X.key==="Enter"&&(g?z():l.trim()&&L())},E=()=>{N(!0)},w=()=>{const X=d.filter(de=>de==null?void 0:de.correct).length,ge=r.length,ie=Math.round(X/ge*100);n({correct:X,total:ge,percentage:ie,selections:d.map((de,De)=>(de==null?void 0:de.input)||""),answers:d,quizType:"complete"})},T=()=>{N(!1)},A=d.filter(X=>X!==null).length,y=A/r.length*100;return f.jsxs("div",{className:"complete-quiz-container",children:[f.jsxs("header",{className:"complete-quiz-header",children:[f.jsx("h1",{className:"complete-quiz-title",children:e("completeQuiz.title")}),f.jsx("p",{className:"complete-quiz-instruction",children:e("completeQuiz.instruction")})]}),f.jsxs("div",{className:"complete-quiz-progress",children:[f.jsx(Fa,{progress:y}),f.jsx("div",{className:"progress-text",children:e("completeQuiz.progress",{completed:A,total:r.length})})]}),f.jsxs("div",{className:"complete-quiz-content",children:[f.jsx("div",{className:"book-number",children:i+1}),f.jsxs("div",{className:"hint-card",children:[f.jsx("div",{className:"hint-text",children:K}),f.jsx("div",{className:"hint-label",children:e("completeQuiz.hint",{hint:`${F.length} ${s==="es"?"letras":"letters"}`})})]}),g?f.jsxs("div",{className:`result-section ${S?"correct":"incorrect"}`,children:[f.jsx("div",{className:"result-icon",children:S?"✓":"✗"}),f.jsx("div",{className:"result-message",children:e(S?"completeQuiz.correct":"completeQuiz.incorrect")}),!S&&f.jsx("div",{className:"correct-answer",children:e("completeQuiz.correctAnswer",{answer:F})}),f.jsx(oe,{onClick:z,variant:"primary",className:"next-button",children:i<r.length-1?e("completeQuiz.next"):e("completeQuiz.submitAll")})]}):f.jsxs("div",{className:"input-section",children:[f.jsx("input",{ref:U,type:"text",className:"book-input",value:l,onChange:X=>u(X.target.value),onKeyPress:_,placeholder:e("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),f.jsxs("div",{className:"input-actions",children:[f.jsx(oe,{onClick:I,variant:"secondary",className:"skip-button",children:e("completeQuiz.skip")}),f.jsx(oe,{onClick:L,variant:"primary",disabled:!l.trim(),className:"check-button",children:e("completeQuiz.check")})]})]})]}),f.jsx("div",{className:"books-overview",children:r.map((X,ge)=>{const ie=d[ge];let de="pending";return ie?de=ie.correct?"correct":"incorrect":ge===i&&(de="current"),f.jsx("div",{className:`book-dot ${de}`,title:`${ge+1}. ${t(r[ge])}`},ge)})}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:T,children:f.jsxs("div",{className:"confirmation-modal",onClick:X=>X.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:e("completeQuiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:e("completeQuiz.confirmText",{completed:A,total:r.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(oe,{onClick:T,variant:"secondary",children:e("quiz.goBack")}),f.jsx(oe,{onClick:w,variant:"primary",children:e("quiz.yesSubmit")})]})]})})]})},aw=({onComplete:n,quizId:e="genesis-covenants"})=>{const{t,language:s}=es(),{quizzes:r}=Tn(),[i,a]=O.useState([]),[l,u]=O.useState(0),[d,p]=O.useState(null),[g,v]=O.useState(!1),[S,x]=O.useState([]);O.useEffect(()=>{const I=r.find(E=>E.id===e)||r[0];if(!I)return;const _=I[s]||I.en||[];a(WT(_)),x([]),u(0),p(null),v(!1)},[s,e,r]);const D=i[l],N=i.length>0?(l+1)/i.length*100:0,U=z=>{g||p(z)},$=()=>{if(d===null)return;const z=d===D.correctIndex,I=[...S];I[l]={questionId:D.id,selectedIndex:d,correctIndex:D.correctIndex,correct:z},x(I),v(!0)},F=()=>{l<i.length-1?(u(l+1),p(null),v(!1)):K()},K=()=>{const z=S.filter(E=>E==null?void 0:E.correct).length,I=i.length,_=Math.round(z/I*100);n({correct:z,total:I,percentage:_,answers:S,questions:i,quizType:"covenants"})};if(!D)return f.jsx("div",{className:"mc-quiz-container",children:f.jsx("div",{className:"mc-loading",children:"Loading..."})});const L=d===D.correctIndex;return f.jsxs("div",{className:"mc-quiz-container",children:[f.jsxs("header",{className:"mc-quiz-header",children:[f.jsx("h1",{className:"mc-quiz-title",children:t("multipleChoice.title")}),f.jsx("p",{className:"mc-quiz-instruction",children:t("multipleChoice.instruction")})]}),f.jsxs("div",{className:"mc-quiz-progress",children:[f.jsx(Fa,{progress:N}),f.jsx("div",{className:"mc-progress-text",children:t("multipleChoice.question",{current:l+1,total:i.length})})]}),f.jsxs("div",{className:"mc-quiz-content",children:[f.jsxs("div",{className:"mc-question-card",children:[f.jsx("div",{className:"mc-question-text",children:D.question}),f.jsx("div",{className:"mc-options",children:D.options.map((z,I)=>{let _="mc-option";return g?I===D.correctIndex?_+=" correct":I===d&&!L&&(_+=" incorrect"):I===d&&(_+=" selected"),f.jsxs("button",{className:_,onClick:()=>U(I),disabled:g,children:[f.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+I)}),f.jsx("span",{className:"mc-option-text",children:z}),g&&I===D.correctIndex&&f.jsx("span",{className:"mc-option-icon correct",children:"✓"}),g&&I===d&&!L&&f.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},I)})}),g&&f.jsxs("div",{className:`mc-result ${L?"correct":"incorrect"}`,children:[f.jsx("div",{className:"mc-result-message",children:t(L?"multipleChoice.correct":"multipleChoice.incorrect")}),!L&&f.jsxs("div",{className:"mc-correct-answer",children:[t("multipleChoice.correctAnswerWas")," ",D.options[D.correctIndex]]}),f.jsxs("div",{className:"mc-reference",children:[t("multipleChoice.reference")," ",D.reference]})]})]}),f.jsx("div",{className:"mc-quiz-actions",children:g?f.jsx(oe,{onClick:F,variant:"primary",className:"mc-action-button",children:l<i.length-1?t("multipleChoice.next"):t("multipleChoice.finish")}):f.jsx(oe,{onClick:$,variant:"primary",disabled:d===null,className:"mc-action-button",children:t("completeQuiz.check")})})]}),f.jsx("div",{className:"mc-dots-overview",children:i.map((z,I)=>{const _=S[I];let E="pending";return _?E=_.correct?"correct":"incorrect":I===l&&(E="current"),f.jsx("div",{className:`mc-dot ${E}`},I)})})]})},cw=({score:n,onRetry:e,onHome:t})=>{const{updateStats:s}=gu(),{t:r,translateBook:i,getScoreMessage:a}=es(),{books:l}=Tn();if(O.useEffect(()=>{n&&s(n)},[n,s]),!n)return f.jsxs("div",{className:"results-container",children:[f.jsx("p",{children:r("results.noResults")}),f.jsx(oe,{onClick:t,children:r("results.goHome")})]});const{correct:u,total:d,percentage:p,selections:g,answers:v,questions:S,quizType:x}=n,D=a(p),N=ew(p),U=x==="complete",$=x==="covenants";return f.jsx("div",{className:"results-container",children:f.jsxs("div",{className:"results-content",children:[f.jsx("header",{className:"results-header",children:f.jsx("h1",{className:"results-title",children:r("results.title")})}),f.jsxs(Fr,{className:"score-card",children:[f.jsxs("div",{className:"score-display",style:{borderColor:N},children:[f.jsxs("div",{className:"score-percentage",style:{color:N},children:[p,"%"]}),f.jsx("div",{className:"score-message",style:{color:N},children:D}),f.jsx("div",{className:"score-details",children:r("results.outOf",{correct:u,total:d})})]}),f.jsxs("div",{className:"score-breakdown",children:[f.jsxs("div",{className:"breakdown-item correct",children:[f.jsx("span",{className:"breakdown-icon",children:"✓"}),f.jsxs("span",{className:"breakdown-text",children:[u," ",r("results.correct")]})]}),f.jsxs("div",{className:"breakdown-item incorrect",children:[f.jsx("span",{className:"breakdown-icon",children:"✗"}),f.jsxs("span",{className:"breakdown-text",children:[d-u," ",r("results.incorrect")]})]})]})]}),f.jsxs(Fr,{className:"details-card",children:[f.jsx("h2",{className:"details-title",children:r("results.yourAnswers")}),f.jsx("div",{className:"answers-list",children:$?v==null?void 0:v.map((F,K)=>{var E,w;const L=S==null?void 0:S[K],z=F==null?void 0:F.correct,I=((E=L==null?void 0:L.options)==null?void 0:E[F==null?void 0:F.selectedIndex])||r("multipleChoice.skipped"),_=(w=L==null?void 0:L.options)==null?void 0:w[L==null?void 0:L.correctIndex];return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsx("div",{className:"answer-question",children:L==null?void 0:L.question}),f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:I})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:_})]}),f.jsx("div",{className:"answer-reference",children:L==null?void 0:L.reference})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)}):U?v==null?void 0:v.map((F,K)=>{const L=l[K],z=F==null?void 0:F.correct,I=(F==null?void 0:F.input)||"-";return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:I})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(L)})]})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)}):g==null?void 0:g.map((F,K)=>{const L=l[K],z=F===L;return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:i(F)})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(L)})]})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)})})]}),f.jsxs("div",{className:"results-actions",children:[f.jsx(oe,{onClick:t,variant:"secondary",size:"large",children:r("results.home")}),f.jsx(oe,{onClick:e,variant:"primary",size:"large",children:r("results.tryAgain")})]})]})})},yf=O.createContext(null),lw=new ft,uw=({children:n})=>{const[e,t]=O.useState(null),[s,r]=O.useState(!0);O.useEffect(()=>iI(Rr,d=>{t(d),r(!1)}),[]);const i=(u,d)=>nI(Rr,u,d),a=()=>SI(Rr,lw),l=()=>oI(Rr);return f.jsx(yf.Provider,{value:{user:e,loading:s,signInWithEmail:i,signInWithGoogle:a,signOut:l},children:n})},hw=()=>{const n=O.useContext(yf);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n};async function dw(){const n={books:!1,quizzes:!1,translations:!1};try{await df(mf),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await ff("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:li.en,es:li.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await ci("en",js.en),await ci("es",js.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const fw=({onBack:n})=>{var vt,cs,ls;const{books:e,quizzes:t,translations:s,refreshData:r}=Tn(),{user:i,loading:a,signInWithEmail:l,signInWithGoogle:u,signOut:d}=hw(),[p,g]=O.useState(""),[v,S]=O.useState(""),[x,D]=O.useState(""),[N,U]=O.useState("books"),[$,F]=O.useState(""),[K,L]=O.useState(!1),[z,I]=O.useState([]),[_,E]=O.useState(""),[w,T]=O.useState(null),[A,y]=O.useState(null),[X,ge]=O.useState(!1),[ie,de]=O.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[De,Kt]=O.useState("en"),[ts,ns]=O.useState({}),[dt,ss]=O.useState("");O.useEffect(()=>{I([...e])},[e]),O.useEffect(()=>{s[De]&&ns(JSON.parse(JSON.stringify(s[De])))},[De,s]);const wn=async R=>{R.preventDefault(),D("");try{await l(p,v)}catch(B){D(B.code==="auth/invalid-credential"?"Invalid email or password":B.message)}},rs=async()=>{D("");try{await u()}catch(R){R.code!=="auth/popup-closed-by-user"&&D(R.message)}},be=R=>{F(R),setTimeout(()=>F(""),3e3)},is=async()=>{L(!0);try{await df(z),await r(),be("Books saved successfully!")}catch(R){be("Error saving books: "+R.message)}L(!1)},An=()=>{_.trim()&&!z.includes(_.trim())&&(I([...z,_.trim()]),E(""))},rr=R=>{I(z.filter((B,J)=>J!==R))},ir=(R,B)=>{const J=[...z],ae=R+B;ae<0||ae>=J.length||([J[R],J[ae]]=[J[ae],J[R]],I(J))},Vi=R=>{const B=t.find(J=>J.id===R);B&&(T(R),y(JSON.parse(JSON.stringify(B))))},or=async()=>{if(!(!A||!w)){L(!0);try{const{id:R,...B}=A;await ff(w,B),await r(),be("Quiz saved successfully!")}catch(R){be("Error saving quiz: "+R.message)}L(!1)}},os=async()=>{if(ie.id.trim()){L(!0);try{const R={title:{en:ie.titleEn,es:ie.titleEs},description:{en:ie.descEn,es:ie.descEs},icon:ie.icon||"📝",category:ie.category,en:[],es:[]};await GT(ie.id.trim(),R),await r(),ge(!1),de({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),be("Quiz created successfully!")}catch(R){be("Error creating quiz: "+R.message)}L(!1)}},ar=async R=>{if(window.confirm(`Delete quiz "${R}"?`)){L(!0);try{await HT(R),await r(),w===R&&(T(null),y(null)),be("Quiz deleted!")}catch(B){be("Error deleting quiz: "+B.message)}L(!1)}},Oi=R=>{var J;if(!A)return;const B={id:(((J=A[R])==null?void 0:J.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};y({...A,[R]:[...A[R]||[],B]})},Qt=(R,B,J,ae)=>{const ne={...A};ne[R]=[...ne[R]],ne[R][B]={...ne[R][B],[J]:ae},y(ne)},as=(R,B,J,ae)=>{const ne={...A};ne[R]=[...ne[R]];const me={...ne[R][B]};me.options=[...me.options],me.options[J]=ae,ne[R][B]=me,y(ne)},cr=(R,B)=>{const J={...A};J[R]=J[R].filter((ae,ne)=>ne!==B),y(J)},ye=(R,B="")=>{const J={};for(const ae of Object.keys(R)){const ne=B?`${B}.${ae}`:ae;typeof R[ae]=="object"&&R[ae]!==null&&!Array.isArray(R[ae])?Object.assign(J,ye(R[ae],ne)):J[ne]=R[ae]}return J},Re=R=>{const B={};for(const[J,ae]of Object.entries(R)){const ne=J.split(".");let me=B;for(let je=0;je<ne.length-1;je++)ne[je]in me||(me[ne[je]]={}),me=me[ne[je]];me[ne[ne.length-1]]=ae}return B},bn=async()=>{L(!0);try{await ci(De,ts),await r(),be(`Translations (${De}) saved!`)}catch(R){be("Error saving translations: "+R.message)}L(!1)},lr=(R,B)=>{const J=ye(ts);J[R]=B,ns(Re(J))},ur=async()=>{if(!(!dt.trim()||s[dt.trim()])){L(!0);try{const R=JSON.parse(JSON.stringify(s.en||{}));await ci(dt.trim(),R),await r(),Kt(dt.trim()),ss(""),be(`Language "${dt.trim()}" added!`)}catch(R){be("Error adding language: "+R.message)}L(!1)}},Li=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){L(!0);try{const R=await dw();await r(),be(`Seed complete - Books: ${R.books?"OK":"FAIL"}, Quizzes: ${R.quizzes?"OK":"FAIL"}, Translations: ${R.translations?"OK":"FAIL"}`)}catch(R){be("Seed error: "+R.message)}L(!1)}};return a?f.jsx("div",{className:"admin-container",children:f.jsx("div",{className:"admin-login",children:f.jsx("p",{children:"Loading..."})})}):i?f.jsxs("div",{className:"admin-container",children:[f.jsxs("header",{className:"admin-header",children:[f.jsx("h1",{children:"Admin Panel"}),f.jsxs("div",{className:"admin-header-actions",children:[f.jsx("span",{className:"admin-user-info",children:i.email}),f.jsx(oe,{onClick:Li,variant:"secondary",disabled:K,children:"Seed Data"}),f.jsx(oe,{onClick:()=>d(),variant:"secondary",children:"Sign Out"}),f.jsx(oe,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),$&&f.jsx("div",{className:"admin-status-bar",children:$}),f.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(R=>f.jsx("button",{className:`admin-tab ${N===R?"active":""}`,onClick:()=>U(R),children:R.charAt(0).toUpperCase()+R.slice(1)},R))}),f.jsxs("div",{className:"admin-content",children:[N==="books"&&f.jsxs("div",{className:"admin-section",children:[f.jsxs("h2",{children:["Old Testament Books (",z.length,")"]}),f.jsx("div",{className:"admin-books-list",children:z.map((R,B)=>f.jsxs("div",{className:"admin-book-item",children:[f.jsx("span",{className:"admin-book-number",children:B+1}),f.jsx("span",{className:"admin-book-name",children:R}),f.jsxs("div",{className:"admin-book-actions",children:[f.jsx("button",{onClick:()=>ir(B,-1),disabled:B===0,children:"↑"}),f.jsx("button",{onClick:()=>ir(B,1),disabled:B===z.length-1,children:"↓"}),f.jsx("button",{onClick:()=>rr(B),className:"admin-delete-btn",children:"✕"})]})]},B))}),f.jsxs("div",{className:"admin-add-row",children:[f.jsx("input",{type:"text",value:_,onChange:R=>E(R.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:R=>R.key==="Enter"&&An()}),f.jsx(oe,{onClick:An,variant:"secondary",children:"Add"})]}),f.jsx(oe,{onClick:is,variant:"primary",disabled:K,children:K?"Saving...":"Save Books"})]}),N==="quizzes"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Quizzes"}),f.jsx("div",{className:"admin-quiz-list",children:t.map(R=>{var B,J;return f.jsxs("div",{className:"admin-quiz-item",children:[f.jsxs("button",{className:`admin-quiz-select ${w===R.id?"active":""}`,onClick:()=>Vi(R.id),children:[f.jsx("span",{children:R.icon||"📝"}),f.jsx("span",{children:((B=R.title)==null?void 0:B.en)||R.id}),f.jsxs("span",{className:"admin-quiz-count",children:[((J=R.en)==null?void 0:J.length)||0," Q"]})]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>ar(R.id),children:"✕"})]},R.id)})}),f.jsx(oe,{onClick:()=>ge(!X),variant:"secondary",children:X?"Cancel":"+ New Quiz"}),X&&f.jsxs("div",{className:"admin-new-quiz-form",children:[f.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:ie.id,onChange:R=>de({...ie,id:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:ie.titleEn,onChange:R=>de({...ie,titleEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:ie.titleEs,onChange:R=>de({...ie,titleEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:ie.descEn,onChange:R=>de({...ie,descEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:ie.descEs,onChange:R=>de({...ie,descEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:ie.icon,onChange:R=>de({...ie,icon:R.target.value})}),f.jsx(oe,{onClick:os,variant:"primary",disabled:K,children:"Create Quiz"})]}),A&&w&&f.jsxs("div",{className:"admin-quiz-editor",children:[f.jsxs("h3",{children:["Editing: ",((vt=A.title)==null?void 0:vt.en)||w]}),f.jsxs("div",{className:"admin-quiz-meta",children:[f.jsxs("label",{children:["Title (EN):",f.jsx("input",{className:"admin-input",value:((cs=A.title)==null?void 0:cs.en)||"",onChange:R=>y({...A,title:{...A.title,en:R.target.value}})})]}),f.jsxs("label",{children:["Title (ES):",f.jsx("input",{className:"admin-input",value:((ls=A.title)==null?void 0:ls.es)||"",onChange:R=>y({...A,title:{...A.title,es:R.target.value}})})]}),f.jsxs("label",{children:["Icon:",f.jsx("input",{className:"admin-input",value:A.icon||"",onChange:R=>y({...A,icon:R.target.value})})]})]}),["en","es"].map(R=>{var B,J;return f.jsxs("div",{className:"admin-questions-section",children:[f.jsxs("h4",{children:["Questions (",R.toUpperCase(),") - ",((B=A[R])==null?void 0:B.length)||0]}),(J=A[R])==null?void 0:J.map((ae,ne)=>f.jsxs("div",{className:"admin-question-card",children:[f.jsxs("div",{className:"admin-question-header",children:[f.jsxs("span",{children:["Q",ne+1]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>cr(R,ne),children:"✕"})]}),f.jsx("textarea",{className:"admin-textarea",value:ae.question,onChange:me=>Qt(R,ne,"question",me.target.value),placeholder:"Question text"}),ae.options.map((me,je)=>f.jsxs("div",{className:"admin-option-row",children:[f.jsx("input",{type:"radio",name:`correct-${R}-${ne}`,checked:ae.correctIndex===je,onChange:()=>Qt(R,ne,"correctIndex",je)}),f.jsx("input",{className:"admin-input",value:me,onChange:us=>as(R,ne,je,us.target.value),placeholder:`Option ${String.fromCharCode(65+je)}`})]},je)),f.jsx("input",{className:"admin-input",value:ae.reference||"",onChange:me=>Qt(R,ne,"reference",me.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},ne)),f.jsxs(oe,{onClick:()=>Oi(R),variant:"secondary",children:["+ Add Question (",R.toUpperCase(),")"]})]},R)}),f.jsx(oe,{onClick:or,variant:"primary",disabled:K,children:K?"Saving...":"Save Quiz"})]})]}),N==="translations"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Translations"}),f.jsx("div",{className:"admin-lang-selector",children:Object.keys(s).map(R=>f.jsx("button",{className:`admin-tab ${De===R?"active":""}`,onClick:()=>Kt(R),children:R.toUpperCase()},R))}),f.jsxs("div",{className:"admin-add-lang",children:[f.jsx("input",{className:"admin-input",value:dt,onChange:R=>ss(R.target.value),placeholder:"New language code (e.g., fr)"}),f.jsx(oe,{onClick:ur,variant:"secondary",disabled:K,children:"Add Language"})]}),f.jsx("div",{className:"admin-translations-editor",children:Object.entries(ye(ts)).map(([R,B])=>f.jsxs("div",{className:"admin-translation-row",children:[f.jsx("label",{className:"admin-translation-key",children:R}),typeof B=="string"&&B.length>60?f.jsx("textarea",{className:"admin-textarea",value:B,onChange:J=>lr(R,J.target.value)}):f.jsx("input",{className:"admin-input",value:typeof B=="string"?B:JSON.stringify(B),onChange:J=>lr(R,J.target.value)})]},R))}),f.jsx(oe,{onClick:bn,variant:"primary",disabled:K,children:K?"Saving...":`Save Translations (${De.toUpperCase()})`})]})]})]}):f.jsx("div",{className:"admin-container",children:f.jsxs("div",{className:"admin-login",children:[f.jsx("h2",{children:"Admin Access"}),f.jsxs("form",{onSubmit:wn,children:[f.jsx("input",{type:"email",value:p,onChange:R=>g(R.target.value),placeholder:"Email",className:"admin-input",autoFocus:!0}),f.jsx("input",{type:"password",value:v,onChange:R=>S(R.target.value),placeholder:"Password",className:"admin-input"}),f.jsx(oe,{type:"submit",variant:"primary",children:"Sign In"})]}),f.jsx("div",{className:"admin-divider",children:f.jsx("span",{children:"or"})}),f.jsxs("button",{className:"admin-google-btn",onClick:rs,children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),f.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),f.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),f.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),x&&f.jsx("p",{className:"admin-status error",children:x}),f.jsx(oe,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})},mw=()=>{const{language:n,setLanguage:e,t}=es();return f.jsxs("div",{className:"language-selector",children:[f.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),f.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})};function pw(){const[n,e]=O.useState("home"),[t,s]=O.useState(null),[r,i]=O.useState("order"),[a,l]=O.useState("genesis-covenants"),u=()=>{i("order"),e("quiz"),s(null)},d=()=>{i("complete"),e("completeQuiz"),s(null)},p=()=>{i("covenants"),l("genesis-covenants"),e("covenantsQuiz"),s(null)},g=N=>{i("covenants"),l(N),e("covenantsQuiz"),s(null)},v=N=>{s({...N,quizType:N.quizType||r}),e("results")},S=()=>{e("home"),s(null)},x=()=>{e("admin")},D=()=>{r==="complete"?d():r==="covenants"?g(a):u()};return f.jsx(uw,{children:f.jsx(QT,{children:f.jsx(YT,{children:f.jsx(tw,{children:f.jsxs("div",{className:"app",children:[f.jsx("div",{className:"app-language-selector",children:f.jsx(mw,{})}),n==="home"&&f.jsx(XT,{onStartOrder:u,onStartComplete:d,onStartCovenants:p,onStartQuiz:g,onNavigateAdmin:x}),n==="quiz"&&f.jsx(rw,{onComplete:v}),n==="completeQuiz"&&f.jsx(ow,{onComplete:v}),n==="covenantsQuiz"&&f.jsx(aw,{onComplete:v,quizId:a}),n==="results"&&f.jsx(cw,{score:t,onRetry:D,onHome:S}),n==="admin"&&f.jsx(fw,{onBack:S})]})})})})})}const gw="modulepreload",_w=function(n){return"/ITIApp/"+n},fu={},yw=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=_w(u),u in fu)return;fu[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":gw,d||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((v,S)=>{g.addEventListener("load",v),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function Ew(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:a}=n;let l,u;const d=async(g=!0)=>{await u};async function p(){if("serviceWorker"in navigator){if(l=await yw(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(g=>{a==null||a(g)}),!l)return;l.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),l.addEventListener("installed",g=>{g.isUpdate||s==null||s()}),l.register({immediate:e}).then(g=>{i?i("/ITIApp/sw.js",g):r==null||r(g)}).catch(g=>{a==null||a(g)})}}return u=p(),d}const Iw=Ew({onNeedRefresh(){confirm("New content available. Reload?")&&Iw(!0)},onOfflineReady(){console.log("App ready to work offline")}});mo.createRoot(document.getElementById("root")).render(f.jsx(Bf.StrictMode,{children:f.jsx(pw,{})}));
