import{r as O,a as Bf,R as $f}from"./react-vendor-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var pu={exports:{}},ui={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf=O,Wf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),Kf=Object.prototype.hasOwnProperty,Qf=Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jf={key:!0,ref:!0,__self:!0,__source:!0};function gu(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Kf.call(e,r)&&!Jf.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Wf,type:n,key:i,ref:a,props:s,_owner:Qf.current}}ui.Fragment=Hf;ui.jsx=gu;ui.jsxs=gu;pu.exports=ui;var f=pu.exports,mo={},Pc=Bf;mo.createRoot=Pc.createRoot,mo.hydrateRoot=Pc.hydrateRoot;const Fs=({children:n,className:e="",...t})=>f.jsx("div",{className:`card ${e}`,...t,children:n}),Yf=(n,e)=>{const[t,r]=O.useState(()=>{try{const i=window.localStorage.getItem(n);return i?JSON.parse(i):e}catch(i){return console.error(`Error loading localStorage key "${n}":`,i),e}});return[t,i=>{try{const a=i instanceof Function?i(t):i;r(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},_u=()=>{const[n,e]=Yf("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=O.useCallback(s=>{e(i=>{const a=i.totalAttempts+1,l=i.totalCorrect+s.correct,u=Math.round(l/(a*s.total)*100);return{totalAttempts:a,bestScore:Math.max(i.bestScore,s.percentage),averageScore:u,totalCorrect:l,lastAttemptDate:new Date().toISOString()}})},[e]),r=O.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:r}},Fr={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit"},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar"},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},Xf=()=>{};var kc={};/**
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
 */const yu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let T=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(T=64)),r.push(t[p],t[g],t[T],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new em;const T=i<<2|l>>4;if(r.push(T),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tm=function(n){const e=yu(n);return Eu.encodeByteArray(e,!0)},Us=function(n){return tm(n).replace(/\./g,"")},Iu=function(n){try{return Eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rm=()=>nm().__FIREBASE_DEFAULTS__,sm=()=>{if(typeof process>"u"||typeof kc>"u")return;const n=kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},im=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Iu(n[1]);return e&&JSON.parse(e)},hi=()=>{try{return Xf()||rm()||sm()||im()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tu=n=>{var e,t;return(t=(e=hi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},om=n=>{const e=Tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},vu=()=>{var n;return(n=hi())==null?void 0:n.config},wu=n=>{var e;return(e=hi())==null?void 0:e[`_${n}`]};/**
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
 */class am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Au(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}const Dr={};function lm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dr))Dr[e]?n.emulator.push(e):n.prod.push(e);return n}function um(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function bu(n,e){if(typeof window>"u"||typeof document>"u"||!Hn(window.location.host)||Dr[n]===e||Dr[n]||Nc)return;Dr[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=lm().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Nc=!0,a()},T}function p(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function g(){const T=um(r),S=t("text"),x=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),U=t("preprendIcon"),$=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const F=T.element;l(F),p(N,D);const K=d();u($,U),F.append($,x,N,K),document.body.appendChild(F)}i?(x.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function dm(){var e;const n=(e=hi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pm(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gm(){return!dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function qo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Su(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _m="FirebaseError";class et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_m,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ym(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new et(s,l,r)}}function ym(n,e){return n.replace(Em,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Em=/\{\$([^}]+)}/g;function Im(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(xc(i)&&xc(a)){if(!jt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xc(n){return n!==null&&typeof n=="object"}/**
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
 */function Qr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Tm(n,e){const t=new vm(n,e);return t.subscribe.bind(t)}class vm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yi(){}/**
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
 */const Am=1e3,bm=2,Sm=4*60*60*1e3,Cm=.5;function Dc(n,e=Am,t=bm){const r=e*Math.pow(t,n),s=Math.round(Cm*r*(Math.random()-.5)*2);return Math.min(Sm,r+s)}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Rm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new am;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(km(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pm(n){return n===tn?void 0:n}function km(n){return n.instantiationMode==="EAGER"}/**
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
 */class Nm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const xm={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Dm=Z.INFO,Vm={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Om=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Vm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=Dm,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Lm=(n,e)=>e.some(t=>n instanceof t);let Vc,Oc;function Mm(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jm(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cu=new WeakMap,po=new WeakMap,Ru=new WeakMap,Xi=new WeakMap,Bo=new WeakMap;function Fm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Cu.set(t,n)}).catch(()=>{}),Bo.set(e,n),e}function Um(n){if(po.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});po.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ru.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zm(n){go=n(go)}function qm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zi(this),e,...t);return Ru.set(r,e.sort?e.sort():[e]),Dt(r)}:jm().includes(n)?function(...e){return n.apply(Zi(this),e),Dt(Cu.get(this))}:function(...e){return Dt(n.apply(Zi(this),e))}}function Bm(n){return typeof n=="function"?qm(n):(n instanceof IDBTransaction&&Um(n),Lm(n,Mm())?new Proxy(n,go):n)}function Dt(n){if(n instanceof IDBRequest)return Fm(n);if(Xi.has(n))return Xi.get(n);const e=Bm(n);return e!==n&&(Xi.set(n,e),Bo.set(e,n)),e}const Zi=n=>Bo.get(n);function Pu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Dt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Dt(a.result),u.oldVersion,u.newVersion,Dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const $m=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],eo=new Map;function Lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Gm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$m.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return eo.set(e,i),i}zm(n=>({...n,get:(e,t,r)=>Lc(e,t)||n.get(e,t,r),has:(e,t)=>!!Lc(e,t)||n.has(e,t)}));/**
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
 */class Wm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",Mc="0.14.8";/**
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
 */const _t=new di("@firebase/app"),Km="@firebase/app-compat",Qm="@firebase/analytics-compat",Jm="@firebase/analytics",Ym="@firebase/app-check-compat",Xm="@firebase/app-check",Zm="@firebase/auth",ep="@firebase/auth-compat",tp="@firebase/database",np="@firebase/data-connect",rp="@firebase/database-compat",sp="@firebase/functions",ip="@firebase/functions-compat",op="@firebase/installations",ap="@firebase/installations-compat",cp="@firebase/messaging",lp="@firebase/messaging-compat",up="@firebase/performance",hp="@firebase/performance-compat",dp="@firebase/remote-config",fp="@firebase/remote-config-compat",mp="@firebase/storage",pp="@firebase/storage-compat",gp="@firebase/firestore",_p="@firebase/ai",yp="@firebase/firestore-compat",Ep="firebase",Ip="12.9.0";/**
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
 */const yo="[DEFAULT]",Tp={[_o]:"fire-core",[Km]:"fire-core-compat",[Jm]:"fire-analytics",[Qm]:"fire-analytics-compat",[Xm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Zm]:"fire-auth",[ep]:"fire-auth-compat",[tp]:"fire-rtdb",[np]:"fire-data-connect",[rp]:"fire-rtdb-compat",[sp]:"fire-fn",[ip]:"fire-fn-compat",[op]:"fire-iid",[ap]:"fire-iid-compat",[cp]:"fire-fcm",[lp]:"fire-fcm-compat",[up]:"fire-perf",[hp]:"fire-perf-compat",[dp]:"fire-rc",[fp]:"fire-rc-compat",[mp]:"fire-gcs",[pp]:"fire-gcs-compat",[gp]:"fire-fst",[yp]:"fire-fst-compat",[_p]:"fire-vertex","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
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
 */const zs=new Map,vp=new Map,Eo=new Map;function jc(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(Eo.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of zs.values())jc(t,n);for(const t of vp.values())jc(t,n);return!0}function mn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
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
 */const wp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new fn("app","Firebase",wp);/**
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
 */class Ap{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kn=Ip;function ku(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:yo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=vu()),!t)throw Vt.create("no-options");const i=zs.get(s);if(i){if(jt(t,i.options)&&jt(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new Nm(s);for(const u of Eo.values())a.addComponent(u);const l=new Ap(t,r,a);return zs.set(s,l),l}function $o(n=yo){const e=zs.get(n);if(!e&&n===yo&&vu())return ku();if(!e)throw Vt.create("no-app",{appName:n});return e}function He(n,e,t){let r=Tp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}lt(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",Sp=1,Ur="firebase-heartbeat-store";let to=null;function Nu(){return to||(to=Pu(bp,Sp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),to}async function Cp(n){try{const t=(await Nu()).transaction(Ur),r=await t.objectStore(Ur).get(xu(n));return await t.done,r}catch(e){if(e instanceof et)_t.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function Fc(n,e){try{const r=(await Nu()).transaction(Ur,"readwrite");await r.objectStore(Ur).put(e,xu(n)),await r.done}catch(t){if(t instanceof et)_t.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function xu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Rp=1024,Pp=30;class kp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Pp){const a=Dp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uc(),{heartbeatsToSend:r,unsentEntries:s}=Np(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _t.warn(t),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function Np(n,e=Rp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zc(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}function Dp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Vp(n){lt(new Ze("platform-logger",e=>new Wm(e),"PRIVATE")),lt(new Ze("heartbeat",e=>new kp(e),"PRIVATE")),He(_o,Mc,n),He(_o,Mc,"esm2020"),He("fire-js","")}Vp("");var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,Du;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.F=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(w,v,A){for(var y=Array(arguments.length-2),X=2;X<arguments.length;X++)y[X-2]=arguments[X];return _.prototype[v].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,E){E||(E=0);const w=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)w[v]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(v=0;v<16;++v)w[v]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],v=I.g[2];let A=I.g[3],y;y=_+(A^E&(v^A))+w[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+w[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+w[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+w[3]+3250441966&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+w[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+w[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+w[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+w[7]+4249261313&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+w[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+w[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+w[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+w[11]+2304563134&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+w[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+w[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+w[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+w[15]+1236535329&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(v^A&(E^v))+w[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+w[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+w[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+w[0]+3921069994&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+w[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+w[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+w[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+w[4]+3889429448&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+w[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+w[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+w[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+w[8]+1163531501&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+w[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+w[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+w[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+w[12]+2368359562&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(E^v^A)+w[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+w[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+w[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+w[14]+4259657740&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+w[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+w[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+w[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+w[10]+3200236656&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+w[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+w[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+w[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+w[6]+76029189&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+w[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+w[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+w[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+w[2]+3299628645&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(v^(E|~A))+w[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+w[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+w[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+w[5]+4237533241&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+w[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+w[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+w[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+w[1]+2240044497&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+w[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+w[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+w[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+w[13]+1309151649&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+w[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+w[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+w[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const E=_-this.blockSize,w=this.C;let v=this.h,A=0;for(;A<_;){if(v==0)for(;A<=E;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(w[v++]=I.charCodeAt(A++),v==this.blockSize){s(this,w),v=0;break}}else for(;A<_;)if(w[v++]=I[A++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,E=0;E<4;++E)for(let w=0;w<32;w+=8)I[_++]=this.g[E]>>>w&255;return I};function i(I,_){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function a(I,_){this.h=_;const E=[];let w=!0;for(let v=I.length-1;v>=0;v--){const A=I[v]|0;w&&A==_||(E[v]=A,w=!1)}this.g=E}var l={};function u(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return N(d(-I));const _=[];let E=1;for(let w=0;I>=E;w++)_[w]=I/E|0,E*=4294967296;return new a(_,0)}function p(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(p(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=d(Math.pow(_,8));let w=g;for(let A=0;A<I.length;A+=8){var v=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+v),_);v<8?(v=d(Math.pow(_,v)),w=w.j(v).add(d(y))):(w=w.j(E),w=w.add(d(y)))}return w}var g=u(0),T=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let I=0,_=1;for(let E=0;E<this.g.length;E++){const w=this.i(E);I+=(w>=0?w:4294967296+w)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(D(this))return"-"+N(this).toString(I);const _=d(Math.pow(I,6));var E=this;let w="";for(;;){const v=K(E,_).g;E=U(E,v.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=v,x(E))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=U(this,I),D(I)?-1:x(I)?0:1};function N(I){const _=I.g.length,E=[];for(let w=0;w<_;w++)E[w]=~I.g[w];return new a(E,~I.h).add(T)}n.abs=function(){return D(this)?N(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),E=[];let w=0;for(let v=0;v<=_;v++){let A=w+(this.i(v)&65535)+(I.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);w=y>>>16,A&=65535,y&=65535,E[v]=y<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function U(I,_){return I.add(N(_))}n.j=function(I){if(x(this)||x(I))return g;if(D(this))return D(I)?N(this).j(N(I)):N(N(this).j(I));if(D(I))return N(this.j(N(I)));if(this.l(S)<0&&I.l(S)<0)return d(this.m()*I.m());const _=this.g.length+I.g.length,E=[];for(var w=0;w<2*_;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<I.g.length;v++){const A=this.i(w)>>>16,y=this.i(w)&65535,X=I.i(v)>>>16,ge=I.i(v)&65535;E[2*w+2*v]+=y*ge,$(E,2*w+2*v),E[2*w+2*v+1]+=A*ge,$(E,2*w+2*v+1),E[2*w+2*v+1]+=y*X,$(E,2*w+2*v+1),E[2*w+2*v+2]+=A*X,$(E,2*w+2*v+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new a(E,0)};function $(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function K(I,_){if(x(_))throw Error("division by zero");if(x(I))return new F(g,g);if(D(I))return _=K(N(I),_),new F(N(_.g),N(_.h));if(D(_))return _=K(I,N(_)),new F(N(_.g),_.h);if(I.g.length>30){if(D(I)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var E=T,w=_;w.l(I)<=0;)E=L(E),w=L(w);var v=z(E,1),A=z(w,1);for(w=z(w,2),E=z(E,2);!x(w);){var y=A.add(w);y.l(I)<=0&&(v=v.add(E),A=y),w=z(w,1),E=z(E,1)}return _=U(I,v.j(_)),new F(v,_)}for(v=g;I.l(_)>=0;){for(E=Math.max(1,Math.floor(I.m()/_.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(E),y=A.j(_);D(y)||y.l(I)>0;)E-=w,A=d(E),y=A.j(_);x(A)&&(A=T),v=v.add(A),I=U(I,y)}return new F(v,I)}n.B=function(I){return K(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)&I.i(w);return new a(E,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)|I.i(w);return new a(E,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let w=0;w<_;w++)E[w]=this.i(w)^I.i(w);return new a(E,this.h^I.h)};function L(I){const _=I.g.length+1,E=[];for(let w=0;w<_;w++)E[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(E,I.h)}function z(I,_){const E=_>>5;_%=32;const w=I.g.length-E,v=[];for(let A=0;A<w;A++)v[A]=_>0?I.i(A+E)>>>_|I.i(A+E+1)<<32-_:I.i(A+E);return new a(v,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Du=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ot=a}).apply(typeof qc<"u"?qc:typeof self<"u"?self:typeof window<"u"?window:{});var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vu,Pr,Ou,Ps,Io,Lu,Mu,ju;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ws=="object"&&ws];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in h))break e;h=h[b]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&h.push([m,c[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,b,C){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return c.prototype[b].apply(m,V)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function x(o,c){for(let m=1;m<arguments.length;m++){const b=arguments[m];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const C=b.length||0;o.length=h+C;for(let V=0;V<C;V++)o[h+V]=b[V]}else o.push(b)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(o){a.setTimeout(()=>{throw o},0)}function U(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,h){const m=F.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var F=new D(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let L,z=!1,I=new $,_=()=>{const o=Promise.resolve(void 0);L=()=>{o.then(E)}};function E(){for(var o;o=U();){try{o.h.call(o.g)}catch(h){N(h)}var c=F;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}z=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function X(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(X,v),X.prototype.init=function(o,c){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),ie=0;function de(o,c,h,m,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=b,this.key=++ie,this.da=this.fa=!1}function De(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kt(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function nr(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function rr(o){const c={};for(const h in o)c[h]=o[h];return c}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sr(o,c){let h,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(h in m)o[h]=m[h];for(let C=0;C<dt.length;C++)h=dt[C],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function wn(o){this.src=o,this.g={},this.h=0}wn.prototype.add=function(o,c,h,m,b){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const V=be(o,c,m,b);return V>-1?(c=o[V],h||(c.fa=!1)):(c=new de(c,this.src,C,!!m,b),c.fa=h,o.push(c)),c};function ir(o,c){const h=c.type;if(h in o.g){var m=o.g[h],b=Array.prototype.indexOf.call(m,c,void 0),C;(C=b>=0)&&Array.prototype.splice.call(m,b,1),C&&(De(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function be(o,c,h,m){for(let b=0;b<o.length;++b){const C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==m)return b}return-1}var or="closure_lm_"+(Math.random()*1e6|0),An={};function is(o,c,h,m,b){if(Array.isArray(c)){for(let C=0;C<c.length;C++)is(o,c[C],h,m,b);return null}return h=ls(h),o&&o[ge]?o.J(c,h,l(m)?!!m.capture:!1,b):os(o,c,h,!1,m,b)}function os(o,c,h,m,b,C){if(!c)throw Error("Invalid event type");const V=l(b)?!!b.capture:!!b;let Y=Qt(o);if(Y||(o[or]=Y=new wn(o)),h=Y.add(c,h,m,V,C),h.proxy)return h;if(m=Vi(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),m,b);else if(o.attachEvent)o.attachEvent(cs(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Vi(){function o(h){return c.call(o.src,o.listener,h)}const c=Oi;return o}function as(o,c,h,m,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)as(o,c[C],h,m,b);else m=l(m)?!!m.capture:!!m,h=ls(h),o&&o[ge]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],h=be(c,h,m,b),h>-1&&(De(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=Qt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=be(c,h,m,b)),(h=o>-1?c[o]:null)&&ar(h))}function ar(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ge])ir(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(cs(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Qt(c))?(ir(h,o),h.h==0&&(h.src=null,c[or]=null)):De(o)}}}function cs(o){return o in An?An[o]:An[o]="on"+o}function Oi(o,c){if(o.da)o=!0;else{c=new X(c,this);const h=o.listener,m=o.ha||o.src;o.fa&&ar(o),o=h.call(m,c)}return o}function Qt(o){return o=o[or],o instanceof wn?o:null}var cr="__closure_events_fn_"+(Math.random()*1e9>>>0);function ls(o){return typeof o=="function"?o:(o[cr]||(o[cr]=function(c){return o.handleEvent(c)}),o[cr])}function ye(){w.call(this),this.i=new wn(this),this.M=this,this.G=null}g(ye,w),ye.prototype[ge]=!0,ye.prototype.removeEventListener=function(o,c,h,m){as(this,o,c,h,m)};function Re(o,c){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var b=c;c=new v(m,o),sr(c,b)}b=!0;let C,V;if(h)for(V=h.length-1;V>=0;V--)C=c.g=h[V],b=bn(C,m,!0,c)&&b;if(C=c.g=o,b=bn(C,m,!0,c)&&b,b=bn(C,m,!1,c)&&b,h)for(V=0;V<h.length;V++)C=c.g=h[V],b=bn(C,m,!1,c)&&b}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let m=0;m<h.length;m++)De(h[m]);delete o.g[c],o.h--}}this.G=null},ye.prototype.J=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ye.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function bn(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let C=0;C<c.length;++C){const V=c[C];if(V&&!V.da&&V.capture==h){const Y=V.listener,Te=V.ha||V.src;V.fa&&ir(o.i,V),b=Y.call(Te,m)!==!1&&b}}return b&&!m.defaultPrevented}function us(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function hs(o){o.g=us(()=>{o.g=null,o.i&&(o.i=!1,hs(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Li extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:hs(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(o){w.call(this),this.h=o,this.g={}}g(Tt,w);var lr=[];function ur(o){Kt(o.g,function(c,h){this.g.hasOwnProperty(h)&&ar(c)},o),o.g={}}Tt.prototype.N=function(){Tt.Z.N.call(this),ur(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var R=a.JSON.stringify,q=a.JSON.parse,J=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ae(){}function ne(){}var me={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function je(){v.call(this,"d")}g(je,v);function hr(){v.call(this,"c")}g(hr,v);var Jt={},Ua=null;function ds(){return Ua=Ua||new ye}Jt.Ia="serverreachability";function za(o){v.call(this,Jt.Ia,o)}g(za,v);function dr(o){const c=ds();Re(c,new za(c))}Jt.STAT_EVENT="statevent";function qa(o,c){v.call(this,Jt.STAT_EVENT,o),this.stat=c}g(qa,v);function Fe(o){const c=ds();Re(c,new qa(c,o))}Jt.Ja="timingevent";function Ba(o,c){v.call(this,Jt.Ja,o),this.size=c}g(Ba,v);function fr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function mr(){this.g=!0}mr.prototype.ua=function(){this.g=!1};function Tf(o,c,h,m,b,C){o.info(function(){if(o.g)if(C){var V="",Y=C.split("&");for(let ce=0;ce<Y.length;ce++){var Te=Y[ce].split("=");if(Te.length>1){const Se=Te[0];Te=Te[1];const nt=Se.split("_");V=nt.length>=2&&nt[1]=="type"?V+(Se+"="+Te+"&"):V+(Se+"=redacted&")}}}else V=null;else V=C;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function vf(o,c,h,m,b,C,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+V})}function Sn(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Af(o,h)+(m?" "+m:"")})}function wf(o,c){o.info(function(){return"TIMEOUT: "+c})}mr.prototype.info=function(){};function Af(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var b=m[0];if(b!="noop"&&b!="stop"&&b!="close")for(let V=1;V<m.length;V++)m[V]=""}}}}return R(C)}catch{return c}}var fs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ga;function Mi(){}g(Mi,ae),Mi.prototype.g=function(){return new XMLHttpRequest},Ga=new Mi;function pr(o){return encodeURIComponent(String(o))}function bf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function vt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.S=m||1,this.V=new Tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var Ha={},ji={};function Fi(o,c,h){o.M=1,o.A=ps(tt(c)),o.u=h,o.R=!0,Ka(o,null)}function Ka(o,c){o.F=Date.now(),ms(o),o.B=tt(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),ac(h.i,"t",m),o.C=0,h=o.j.L,o.h=new Wa,o.g=bc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Li(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,m=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(lr[0]=b.toString()),b=lr);for(let C=0;C<b.length;C++){const V=is(h,b[C],m||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.J?rr(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),dr(),Tf(o.i,o.v,o.B,o.l,o.S,o.u)}vt.prototype.ba=function(o){o=o.target;const c=this.O;c&&bt(o)==3?c.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const Y=bt(this.g),Te=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||mc(this.g)))){this.K||Y!=4||Te==7||(Te==8||ce<=0?dr(3):dr(2)),Ui(this);var c=this.g.ca();this.X=c;var h=Sf(this);if(this.o=c==200,vf(this.i,this.v,this.B,this.l,this.S,Y,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,b=this.g;if((m=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var C=m;break t}}C=null}if(o=C)Sn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zi(this,o);else{this.o=!1,this.m=3,Fe(12),Yt(this),gr(this);break e}}if(this.R){o=!0;let Se;for(;!this.K&&this.C<h.length;)if(Se=Cf(this,h),Se==ji){Y==4&&(this.m=4,Fe(14),o=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Ha){this.m=4,Fe(15),Sn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Sn(this.i,this.l,Se,null),zi(this,Se);if(Qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||h.length!=0||this.h.h||(this.m=1,Fe(16),o=!1),this.o=this.o&&o,!o)Sn(this.i,this.l,h,"[Invalid Chunked Response]"),Yt(this),gr(this);else if(h.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Qi(V),V.P=!0,Fe(11))}}else Sn(this.i,this.l,h,null),zi(this,h);Y==4&&Yt(this),this.o&&!this.K&&(Y==4?Tc(this.j,this):(this.o=!1,ms(this)))}else zf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),Yt(this),gr(this)}}}catch{}finally{}};function Sf(o){if(!Qa(o))return o.g.la();const c=mc(o.g);if(c==="")return"";let h="";const m=c.length,b=bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Yt(o),gr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<m;C++)o.h.h=!0,h+=o.h.i.decode(c[C],{stream:!(b&&C==m-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Qa(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Cf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?ji:(h=Number(c.substring(h,m)),isNaN(h)?Ha:(m+=1,m+h>c.length?ji:(c=c.slice(m,m+h),o.C=m+h,c)))}vt.prototype.cancel=function(){this.K=!0,Yt(this)};function ms(o){o.T=Date.now()+o.H,Ja(o,o.H)}function Ja(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fr(d(o.aa,o),c)}function Ui(o){o.D&&(a.clearTimeout(o.D),o.D=null)}vt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(wf(this.i,this.B),this.M!=2&&(dr(),Fe(17)),Yt(this),this.m=2,gr(this)):Ja(this,this.T-o)};function gr(o){o.j.I==0||o.K||Tc(o.j,o)}function Yt(o){Ui(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ur(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function zi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||qi(h.h,o))){if(!o.L&&qi(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Is(h),ys(h);else break e;Ki(h),Fe(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=fr(d(h.Va,h),6e3));Za(h.h)<=1&&h.ta&&(h.ta=void 0)}else Zt(h,11)}else if((o.L||h.g==o)&&Is(h),!y(c))for(b=h.Ba.g.parse(c),c=0;c<b.length;c++){let ce=b[c];const Se=ce[0];if(!(Se<=h.K))if(h.K=Se,ce=ce[1],h.I==2)if(ce[0]=="c"){h.M=ce[1],h.ba=ce[2];const nt=ce[3];nt!=null&&(h.ka=nt,h.j.info("VER="+h.ka));const en=ce[4];en!=null&&(h.za=en,h.j.info("SVER="+h.za));const St=ce[5];St!=null&&typeof St=="number"&&St>0&&(m=1.5*St,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ct=o.g;if(Ct){const vs=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var C=m.h;C.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Bi(C,C.h),C.h=null))}if(m.G){const Ji=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Ji&&(m.wa=Ji,le(m.J,m.G,Ji))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var V=o;if(m.na=Ac(m,m.L?m.ba:null,m.W),V.L){ec(m.h,V);var Y=V,Te=m.O;Te&&(Y.H=Te),Y.D&&(Ui(Y),ms(Y)),m.g=V}else Ec(m);h.i.length>0&&Es(h)}else ce[0]!="stop"&&ce[0]!="close"||Zt(h,7);else h.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Zt(h,7):Hi(h):ce[0]!="noop"&&h.l&&h.l.qa(ce),h.A=0)}}dr(4)}catch{}}var Rf=class{constructor(o,c){this.g=o,this.map=c}};function Ya(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Za(o){return o.h?1:o.g?o.g.size:0}function qi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Bi(o,c){o.g?o.g.add(c):o.h=c}function ec(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ya.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let b,C=null;m>=0?(b=o[h].substring(0,m),C=o[h].substring(m+1)):b=o[h],c(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof wt?(this.l=o.l,_r(this,o.j),this.o=o.o,this.g=o.g,yr(this,o.u),this.h=o.h,$i(this,cc(o.i)),this.m=o.m):o&&(c=String(o).match(nc))?(this.l=!1,_r(this,c[1]||"",!0),this.o=Er(c[2]||""),this.g=Er(c[3]||"",!0),yr(this,c[4]),this.h=Er(c[5]||"",!0),$i(this,c[6]||"",!0),this.m=Er(c[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Ir(c,rc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ir(c,rc,!0),"@"),o.push(pr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ir(h,h.charAt(0)=="/"?xf:Nf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ir(h,Vf)),o.join("")},wt.prototype.resolve=function(o){const c=tt(this);let h=!!o.j;h?_r(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var m=o.h;if(h)yr(c,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var b=c.h.lastIndexOf("/");b!=-1&&(m=c.h.slice(0,b+1)+m)}if(b=m,b==".."||b==".")m="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){m=b.lastIndexOf("/",0)==0,b=b.split("/");const C=[];for(let V=0;V<b.length;){const Y=b[V++];Y=="."?m&&V==b.length&&C.push(""):Y==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&V==b.length&&C.push("")):(C.push(Y),m=!0)}m=C.join("/")}else m=b}return h?c.h=m:h=o.i.toString()!=="",h?$i(c,cc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function tt(o){return new wt(o)}function _r(o,c,h){o.j=h?Er(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function yr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function $i(o,c,h){c instanceof Tr?(o.i=c,Of(o.i,o.l)):(h||(c=Ir(c,Df)),o.i=new Tr(c,o.l))}function le(o,c,h){o.i.set(c,h)}function ps(o){return le(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Er(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ir(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,kf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function kf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rc=/[#\/\?@]/g,Nf=/[#\?:]/g,xf=/[#\?]/g,Df=/[#\?@]/g,Vf=/#/g;function Tr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Xt(o){o.g||(o.g=new Map,o.h=0,o.i&&Pf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Tr.prototype,n.add=function(o,c){Xt(this),this.i=null,o=Cn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function sc(o,c){Xt(o),c=Cn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ic(o,c){return Xt(o),c=Cn(o,c),o.g.has(c)}n.forEach=function(o,c){Xt(this),this.g.forEach(function(h,m){h.forEach(function(b){o.call(c,b,m,this)},this)},this)};function oc(o,c){Xt(o);let h=[];if(typeof c=="string")ic(o,c)&&(h=h.concat(o.g.get(Cn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Xt(this),this.i=null,o=Cn(this,o),ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=oc(this,o),o.length>0?String(o[0]):c):c};function ac(o,c,h){sc(o,c),h.length>0&&(o.i=null,o.g.set(Cn(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var h=c[m];const b=pr(h);h=oc(this,h);for(let C=0;C<h.length;C++){let V=b;h[C]!==""&&(V+="="+pr(h[C])),o.push(V)}}return this.i=o.join("&")};function cc(o){const c=new Tr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Cn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Of(o,c){c&&!o.j&&(Xt(o),o.i=null,o.g.forEach(function(h,m){const b=m.toLowerCase();m!=b&&(sc(this,m),ac(this,b,h))},o)),o.j=c}function Lf(o,c){const h=new mr;if(a.Image){const m=new Image;m.onload=p(At,h,"TestLoadImage: loaded",!0,c,m),m.onerror=p(At,h,"TestLoadImage: error",!1,c,m),m.onabort=p(At,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=p(At,h,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Mf(o,c){const h=new mr,m=new AbortController,b=setTimeout(()=>{m.abort(),At(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(b),C.ok?At(h,"TestPingServer: ok",!0,c):At(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),At(h,"TestPingServer: error",!1,c)})}function At(o,c,h,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(h)}catch{}}function jf(){this.g=new J}function Gi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Gi,ae),Gi.prototype.g=function(){return new gs(this.i,this.h)};function gs(o,c){ye.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gs,ye),n=gs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,wr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function lc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?vr(this):wr(this),this.readyState==3&&lc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,vr(this))},n.Na=function(o){this.g&&(this.response=o,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,wr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function wr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uc(o){let c="";return Kt(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Wi(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=uc(h),typeof o=="string"?h!=null&&pr(h):le(o,c,h))}function pe(o){ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,ye);var Ff=/^https?$/i,Uf=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ga.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){hc(this,C);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)h.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())h.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Uf,c,void 0)>=0)||m||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of h)this.g.setRequestHeader(C,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){hc(this,C)}};function hc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,dc(o),_s(o)}function dc(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Re(this,"complete"),Re(this,"abort"),_s(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_s(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fc(this):this.Xa())},n.Xa=function(){fc(this)};function fc(o){if(o.h&&typeof i<"u"){if(o.v&&bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Re(o,"readystatechange"),bt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=C===0){let V=String(o.D).match(nc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),m=!Ff.test(V?V.toLowerCase():"")}h=m}if(h)Re(o,"complete"),Re(o,"success");else{o.o=6;try{var b=bt(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",dc(o)}}finally{_s(o)}}}}function _s(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Re(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),q(c)}};function mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zf(o){const c={};o=(o.g&&bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var h=bf(o[m]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}nr(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function pc(o){this.za=0,this.i=[],this.j=new mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ya(o&&o.concurrentRequestLimit),this.Ba=new jf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,m){Fe(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Ac(this,null,this.W),Es(this)};function Hi(o){if(gc(o),o.I==3){var c=o.V++,h=tt(o.J);if(le(h,"SID",o.M),le(h,"RID",c),le(h,"TYPE","terminate"),br(o,h),c=new vt(o,o.j,c),c.M=2,c.A=ps(tt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=bc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ms(c)}wc(o)}function ys(o){o.g&&(Qi(o),o.g.cancel(),o.g=null)}function gc(o){ys(o),o.v&&(a.clearTimeout(o.v),o.v=null),Is(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Es(o){if(!Xa(o.h)&&!o.m){o.m=!0;var c=o.Ea;L||_(),z||(L(),z=!0),I.add(c,o),o.D=0}}function qf(o,c){return Za(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fr(d(o.Ea,o,c),vc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new vt(this,this.j,o);let C=this.o;if(this.U&&(C?(C=rr(C),sr(C,this.U)):C=this.U),this.u!==null||this.R||(b.J=C,C=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=yc(this,b,c),h=tt(this.J),le(h,"RID",o),le(h,"CVER",22),this.G&&le(h,"X-HTTP-Session-Id",this.G),br(this,h),C&&(this.R?c="headers="+pr(uc(C))+"&"+c:this.u&&Wi(h,this.u,C)),Bi(this.h,b),this.Ra&&le(h,"TYPE","init"),this.S?(le(h,"$req",c),le(h,"SID","null"),b.U=!0,Fi(b,h,null)):Fi(b,h,c),this.I=2}}else this.I==3&&(o?_c(this,o):this.i.length==0||Xa(this.h)||_c(this))};function _c(o,c){var h;c?h=c.l:h=o.V++;const m=tt(o.J);le(m,"SID",o.M),le(m,"RID",h),le(m,"AID",o.K),br(o,m),o.u&&o.o&&Wi(m,o.u,o.o),h=new vt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=yc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Bi(o.h,h),Fi(h,m,c)}function br(o,c){o.H&&Kt(o.H,function(h,m){le(c,m,h)}),o.l&&Kt({},function(h,m){le(c,m,h)})}function yc(o,c,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let Y=-1;for(;;){const Te=["count="+h];Y==-1?h>0?(Y=b[0].g,Te.push("ofs="+Y)):Y=0:Te.push("ofs="+Y);let ce=!0;for(let Se=0;Se<h;Se++){var C=b[Se].g;const nt=b[Se].map;if(C-=Y,C<0)Y=Math.max(0,b[Se].g-100),ce=!1;else try{C="req"+C+"_"||"";try{var V=nt instanceof Map?nt:Object.entries(nt);for(const[en,St]of V){let Ct=St;l(St)&&(Ct=R(St)),Te.push(C+en+"="+encodeURIComponent(Ct))}}catch(en){throw Te.push(C+"type="+encodeURIComponent("_badmap")),en}}catch{m&&m(nt)}}if(ce){V=Te.join("&");break e}}V=void 0}return o=o.i.splice(0,h),c.G=o,V}function Ec(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;L||_(),z||(L(),z=!0),I.add(c,o),o.A=0}}function Ki(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fr(d(o.Da,o),vc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ic(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),ys(this),Ic(this))};function Qi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ic(o){o.g=new vt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=tt(o.na);le(c,"RID","rpc"),le(c,"SID",o.M),le(c,"AID",o.K),le(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&le(c,"TO",o.ia),le(c,"TYPE","xmlhttp"),br(o,c),o.u&&o.o&&Wi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ps(tt(c)),h.u=null,h.R=!0,Ka(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ys(this),Ki(this),Fe(19))};function Is(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Tc(o,c){var h=null;if(o.g==c){Is(o),Qi(o),o.g=null;var m=2}else if(qi(o.h,c))h=c.G,ec(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var b=o.D;m=ds(),Re(m,new Ba(m,h)),Es(o)}else Ec(o);else if(b=c.m,b==3||b==0&&c.X>0||!(m==1&&qf(o,c)||m==2&&Ki(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Zt(o,5);break;case 4:Zt(o,10);break;case 3:Zt(o,6);break;default:Zt(o,2)}}}function vc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Zt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),m=o.Ua;const b=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_r(m,"https"),ps(m),b?Lf(m.toString(),h):Mf(m.toString(),h)}else Fe(2);o.I=0,o.l&&o.l.pa(c),wc(o),gc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function wc(o){if(o.I=0,o.ja=[],o.l){const c=tc(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ja,c),x(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Ac(o,c,h){var m=h instanceof wt?tt(h):new wt(h);if(m.g!="")c&&(m.g=c+"."+m.g),yr(m,m.u);else{var b=a.location;m=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const C=new wt(null);m&&_r(C,m),c&&(C.g=c),b&&yr(C,b),h&&(C.h=h),m=C}return h=o.G,c=o.wa,h&&c&&le(m,h,c),le(m,"VER",o.ka),br(o,m),m}function bc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new pe(new Gi({ab:h})):new pe(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sc(){}n=Sc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ts(){}Ts.prototype.g=function(o,c){return new qe(o,c)};function qe(o,c){ye.call(this),this.g=new pc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Rn(this)}g(qe,ye),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Hi(this.g)},qe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=R(o),o=h);c.i.push(new Rf(c.Ya++,o)),c.I==3&&Es(c)},qe.prototype.N=function(){this.g.l=null,delete this.j,Hi(this.g),delete this.g,qe.Z.N.call(this)};function Cc(o){je.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Cc,je);function Rc(){hr.call(this),this.status=1}g(Rc,hr);function Rn(o){this.g=o}g(Rn,Sc),Rn.prototype.ra=function(){Re(this.g,"a")},Rn.prototype.qa=function(o){Re(this.g,new Cc(o))},Rn.prototype.pa=function(o){Re(this.g,new Rc)},Rn.prototype.oa=function(){Re(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,ju=function(){return new Ts},Mu=function(){return ds()},Lu=Jt,Io={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,Ps=fs,$a.COMPLETE="complete",Ou=$a,ne.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ye.prototype.listen=ye.prototype.J,Pr=ne,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,Vu=pe}).apply(typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Qn="12.9.0";function Op(n){Qn=n}/**
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
 */const an=new di("@firebase/firestore");function kn(){return an.logLevel}function M(n,...e){if(an.logLevel<=Z.DEBUG){const t=e.map(Go);an.debug(`Firestore (${Qn}): ${n}`,...t)}}function yt(n,...e){if(an.logLevel<=Z.ERROR){const t=e.map(Go);an.error(`Firestore (${Qn}): ${n}`,...t)}}function cn(n,...e){if(an.logLevel<=Z.WARN){const t=e.map(Go);an.warn(`Firestore (${Qn}): ${n}`,...t)}}function Go(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fu(n,r,t)}function Fu(n,e,t){let r=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw yt(r),new Error(r)}function se(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Fu(e,s,r)}function Q(n,e){return n}/**
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
 */class Uu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Mp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jp{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Fp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Up{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Fp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Wo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qp(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function To(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return no(s)===no(i)?ee(s,i):no(s)?1:-1}return ee(n.length,e.length)}const Bp=55296,$p=57343;function no(n){const e=n.charCodeAt(0);return e>=Bp&&e<=$p}function zn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const $c="__name__";class rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=rt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const r=rt.isNumericId(e),s=rt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?rt.extractNumericId(e).compare(rt.extractNumericId(t)):To(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ot.fromString(e.substring(4,e.length-2))}}class ue extends rt{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const Gp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends rt{construct(e,t,r){return new ke(e,t,r)}static isValidIdentifier(e){return Gp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$c}static keyField(){return new ke([$c])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}/**
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
 */function zu(n,e,t){if(!t)throw new j(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wp(n,e,t,r){if(e===!0&&r===!0)throw new j(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gc(n){if(!B.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wc(n){if(B.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ho(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function Ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ho(n);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Jr(n,e){if(!qu(n))throw new j(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Hc=-62135596800,Kc=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Kc);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hc)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kc}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jr(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Ie("string",he._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new he(0,0))}static max(){return new H(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zr=-1;function Hp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Ut(s,B.empty(),e)}function Kp(n){return new Ut(n.readTime,n.key,zr)}class Ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ut(H.min(),B.empty(),zr)}static max(){return new Ut(H.max(),B.empty(),zr)}}function Qp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const Jp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Jn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Jp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Xp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fi.ce=-1;/**
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
 */const Ko=-1;function mi(n){return n==null}function qs(n){return n===0&&1/n==-1/0}function Zp(n){return typeof n=="number"&&Number.isInteger(n)&&!qs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bu="";function eg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qc(e)),e=tg(n.get(t),e);return Qc(e)}function tg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Bu:t+="";break;default:t+=i}}return t}function Qc(n){return n+Bu+""}/**
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
 */function Jc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $u(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yc(this.data.getIterator())}getIteratorFrom(e){return new Yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Ae(ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Gu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gu("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const ng=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=ng.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */const Wu="server_timestamp",Hu="__type__",Ku="__previous_value__",Qu="__local_write_time__";function Qo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hu])==null?void 0:r.stringValue)===Wu}function pi(n){const e=n.mapValue.fields[Ku];return Qo(e)?pi(e):e}function qr(n){const e=zt(n.mapValue.fields[Qu].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class rg{constructor(e,t,r,s,i,a,l,u,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=g}}const Bs="(default)";class Br{constructor(e,t){this.projectId=e,this.database=t||Bs}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===Bs}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}function sg(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(n.options.projectId,e)}/**
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
 */const Ju="__type__",ig="__max__",bs={mapValue:{}},Yu="__vector__",$s="value";function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:ag(n)?9007199254740991:og(n)?10:11:W(28295,{value:n})}function ut(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qr(n).isEqual(qr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=zt(s.timestampValue),l=zt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return _e(s.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return _e(s.integerValue)===_e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=_e(s.doubleValue),l=_e(i.doubleValue);return a===l?qs(a)===qs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return zn(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jc(a)!==Jc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ut(a[u],l[u])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function $r(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function qn(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=_e(i.integerValue||i.doubleValue),u=_e(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Xc(n.timestampValue,e.timestampValue);case 4:return Xc(qr(n),qr(e));case 5:return To(n.stringValue,e.stringValue);case 6:return function(i,a){const l=qt(i),u=qt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ee(l[d],u[d]);if(p!==0)return p}return ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ee(_e(i.latitude),_e(a.latitude));return l!==0?l:ee(_e(i.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var T,S,x,D;const l=i.fields||{},u=a.fields||{},d=(T=l[$s])==null?void 0:T.arrayValue,p=(S=u[$s])==null?void 0:S.arrayValue,g=ee(((x=d==null?void 0:d.values)==null?void 0:x.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return g!==0?g:Zc(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===bs.mapValue&&a===bs.mapValue)return 0;if(i===bs.mapValue)return 1;if(a===bs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const T=To(u[g],p[g]);if(T!==0)return T;const S=qn(l[u[g]],d[p[g]]);if(S!==0)return S}return ee(u.length,p.length)}(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function Xc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=zt(n),r=zt(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function Zc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qn(t[s],r[s]);if(i)return i}return ee(t.length,r.length)}function Bn(n){return vo(n)}function vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${vo(t.fields[a])}`;return s+"}"}(n.mapValue):W(61005,{value:n})}function ks(n){switch(Bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pi(n);return e?16+ks(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ks(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return pn(r.fields,(i,a)=>{s+=i.length+ks(a)}),s}(n.mapValue);default:throw W(13486,{value:n})}}function wo(n){return!!n&&"integerValue"in n}function Jo(n){return!!n&&"arrayValue"in n}function el(n){return!!n&&"nullValue"in n}function tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ns(n){return!!n&&"mapValue"in n}function og(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ju])==null?void 0:r.stringValue)===Yu}function Vr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vr(n.arrayValue.values[t]);return e}return{...n}}function ag(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ig}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(t)}setAll(e){let t=ke.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Vr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ns(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(Vr(this.value))}}function Xu(n){const e=[];return pn(n.fields,(t,r)=>{const s=new ke([t]);if(Ns(r)){const i=Xu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class Le{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,H.min(),H.min(),H.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,H.min(),H.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,H.min(),H.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gs{constructor(e,t){this.position=e,this.inclusive=t}}function nl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ws{constructor(e,t="asc"){this.field=e,this.dir=t}}function cg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zu{}class ve extends Zu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ug(e,t,r):t==="array-contains"?new fg(e,r):t==="in"?new mg(e,r):t==="not-in"?new pg(e,r):t==="array-contains-any"?new gg(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hg(e,r):new dg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Zu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return eh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eh(n){return n.op==="and"}function th(n){return lg(n)&&eh(n)}function lg(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Ao(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Bn(n.value);if(th(n))return n.filters.map(e=>Ao(e)).join(",");{const e=n.filters.map(t=>Ao(t)).join(",");return`${n.op}(${e})`}}function nh(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&ut(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&nh(a,s.filters[l]),!0):!1}(n,e):void W(19439)}function rh(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Bn(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(rh).join(" ,")+"}"}(n):"Filter"}class ug extends ve{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class hg extends ve{constructor(e,t){super(e,"in",t),this.keys=sh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dg extends ve{constructor(e,t){super(e,"not-in",t),this.keys=sh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class fg extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jo(t)&&$r(t.arrayValue,this.value)}}class mg extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class pg extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$r(this.value.arrayValue,t)}}class gg extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
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
 */class _g{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function sl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new _g(n,e,t,r,s,i,a)}function Yo(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ao(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bn(r)).join(",")),e.Te=t}return e.Te}function Xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function bo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class gi{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function yg(n,e,t,r,s,i,a,l){return new gi(n,e,t,r,s,i,a,l)}function Zo(n){return new gi(n)}function il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eg(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ig(n){return n.collectionGroup!==null}function Or(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ws(i,r))}),t.has(ke.keyField().canonicalString())||e.Ie.push(new Ws(ke.keyField(),r))}return e.Ie}function st(n){const e=Q(n);return e.Ee||(e.Ee=Tg(e,Or(n))),e.Ee}function Tg(n,e){if(n.limitType==="F")return sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ws(s.field,i)});const t=n.endAt?new Gs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gs(n.startAt.position,n.startAt.inclusive):null;return sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function So(n,e,t){return new gi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _i(n,e){return Xo(st(n),st(e))&&n.limitType===e.limitType}function ih(n){return`${Yo(st(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>rh(s)).join(", ")}]`),mi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Bn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Bn(s)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function yi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Or(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=nl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Or(r),s)||r.endAt&&!function(a,l,u){const d=nl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Or(r),s))}(n,e)}function vg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oh(n){return(e,t)=>{let r=!1;for(const s of Or(n)){const i=wg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wg(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?qn(u,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
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
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $u(this.inner)}size(){return this.innerSize}}/**
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
 */const Ag=new fe(B.comparator);function Et(){return Ag}const ah=new fe(B.comparator);function kr(...n){let e=ah;for(const t of n)e=e.insert(t.key,t);return e}function ch(n){let e=ah;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function nn(){return Lr()}function lh(){return Lr()}function Lr(){return new gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const bg=new fe(B.comparator),Sg=new Ae(B.comparator);function te(...n){let e=Sg;for(const t of n)e=e.add(t);return e}const Cg=new Ae(ee);function Rg(){return Cg}/**
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
 */function ea(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(e)?"-0":e}}function uh(n){return{integerValue:""+n}}function Pg(n,e){return Zp(e)?uh(e):ea(n,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function kg(n,e,t){return n instanceof Hs?function(s,i){const a={fields:{[Hu]:{stringValue:Wu},[Qu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qo(i)&&(i=pi(i)),i&&(a.fields[Ku]=i),{mapValue:a}}(t,e):n instanceof Gr?dh(n,e):n instanceof Wr?fh(n,e):function(s,i){const a=hh(s,i),l=ol(a)+ol(s.Ae);return wo(a)&&wo(s.Ae)?uh(l):ea(s.serializer,l)}(n,e)}function Ng(n,e,t){return n instanceof Gr?dh(n,e):n instanceof Wr?fh(n,e):t}function hh(n,e){return n instanceof Ks?function(r){return wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Hs extends Ei{}class Gr extends Ei{constructor(e){super(),this.elements=e}}function dh(n,e){const t=mh(e);for(const r of n.elements)t.some(s=>ut(s,r))||t.push(r);return{arrayValue:{values:t}}}class Wr extends Ei{constructor(e){super(),this.elements=e}}function fh(n,e){let t=mh(e);for(const r of n.elements)t=t.filter(s=>!ut(s,r));return{arrayValue:{values:t}}}class Ks extends Ei{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ol(n){return _e(n.integerValue||n.doubleValue)}function mh(n){return Jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Gr&&s instanceof Gr||r instanceof Wr&&s instanceof Wr?zn(r.elements,s.elements,ut):r instanceof Ks&&s instanceof Ks?ut(r.Ae,s.Ae):r instanceof Hs&&s instanceof Hs}(n.transform,e.transform)}class Dg{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ii{}function ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ta(n.key,it.none()):new Yr(n.key,n.data,it.none());{const t=n.data,r=Ge.empty();let s=new Ae(ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _n(n.key,r,new Qe(s.toArray()),it.none())}}function Vg(n,e,t){n instanceof Yr?function(s,i,a){const l=s.value.clone(),u=cl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof _n?function(s,i,a){if(!xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=cl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Mr(n,e,t,r){return n instanceof Yr?function(i,a,l,u){if(!xs(i.precondition,a))return l;const d=i.value.clone(),p=ll(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof _n?function(i,a,l,u){if(!xs(i.precondition,a))return l;const d=ll(i.fieldTransforms,u,a),p=a.data;return p.setAll(gh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Og(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hh(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zn(r,s,(i,a)=>xg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yr extends Ii{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends Ii{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function cl(n,e,t){const r=new Map;se(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Ng(a,l,t[s]))}return r}function ll(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,kg(i,a,e))}return r}class ta extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lg extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=ph(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&zn(this.mutations,e.mutations,(t,r)=>al(t,r))&&zn(this.baseMutations,e.baseMutations,(t,r)=>al(t,r))}}class na{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return bg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new na(e,t,r,s)}}/**
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
 */class jg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,re;function Ug(n){switch(n){case k.OK:return W(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function _h(n){if(n===void 0)return yt("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ee.OK:return k.OK;case Ee.CANCELLED:return k.CANCELLED;case Ee.UNKNOWN:return k.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return k.INTERNAL;case Ee.UNAVAILABLE:return k.UNAVAILABLE;case Ee.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ee.NOT_FOUND:return k.NOT_FOUND;case Ee.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ee.ABORTED:return k.ABORTED;case Ee.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ee.DATA_LOSS:return k.DATA_LOSS;default:return W(39323,{code:n})}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zg(){return new TextEncoder}/**
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
 */const qg=new Ot([4294967295,4294967295],0);function ul(n){const e=zg().encode(n),t=new Du;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ot([t,r],0),new Ot([s,i],0)]}class ra{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nr(`Invalid padding: ${t}`);if(r<0)throw new Nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ot.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Ot.fromNumber(r)));return s.compare(qg)===1&&(s=new Ot([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ul(e),[r,s]=hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ra(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=ul(e),[r,s]=hl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ti{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ti(H.min(),s,new fe(ee),Et(),te())}}class Xr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xr(r,t,te(),te(),te())}}/**
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
 */class Ds{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class yh{constructor(e,t){this.targetId=e,this.Ce=t}}class Eh{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class dl{constructor(){this.ve=0,this.Fe=fl(),this.Me=xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),r=te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:i})}}),new Xr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=fl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Bg{constructor(e){this.Ge=e,this.ze=new Map,this.je=Et(),this.He=Ss(),this.Je=Ss(),this.Ze=new fe(ee)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(bo(i))if(r===0){const a=new B(i.path);this.et(t,a,Le.newNoDocument(a,H.min()))}else se(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=qt(r).toUint8Array()}catch(u){if(u instanceof Gu)return cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ra(a,s,i)}catch(u){return cn(u instanceof Nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&bo(l.target)){const u=new B(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Le.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=te();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ti(e,t,this.Ze,this.je,r);return this.je=Et(),this.He=Ss(),this.Je=Ss(),this.Ze=new fe(ee),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new dl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ae(ee),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ae(ee),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ss(){return new fe(B.comparator)}function fl(){return new fe(B.comparator)}const $g={asc:"ASCENDING",desc:"DESCENDING"},Gg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wg={and:"AND",or:"OR"};class Hg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Co(n,e){return n.useProto3Json||mi(e)?e:{value:e}}function Qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ih(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Kg(n,e){return Qs(n,e.toTimestamp())}function ot(n){return se(!!n,49232),H.fromTimestamp(function(t){const r=zt(t);return new he(r.seconds,r.nanos)}(n))}function sa(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Th(n){const e=ue.fromString(n);return se(Sh(e),10190,{key:e.toString()}),e}function Po(n,e){return sa(n.databaseId,e.path)}function ro(n,e){const t=Th(e);if(t.get(1)!==n.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(wh(t))}function vh(n,e){return sa(n.databaseId,e)}function Qg(n){const e=Th(n);return e.length===4?ue.emptyPath():wh(e)}function ko(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wh(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ml(n,e,t){return{name:Po(n,e),fields:t.value.mapValue.fields}}function Jg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(se(p===void 0||typeof p=="string",58123),xe.fromBase64String(p||"")):(se(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),xe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?k.UNKNOWN:_h(d.code);return new j(p,d.message||"")}(a);t=new Eh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ro(n,r.document.name),i=ot(r.document.updateTime),a=r.document.createTime?ot(r.document.createTime):H.min(),l=new Ge({mapValue:{fields:r.document.fields}}),u=Le.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ds(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ro(n,r.document),i=r.readTime?ot(r.readTime):H.min(),a=Le.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ds([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ro(n,r.document),i=r.removedTargetIds||[];t=new Ds([],i,s,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Fg(s,i),l=r.targetId;t=new yh(l,a)}}return t}function Yg(n,e){let t;if(e instanceof Yr)t={update:ml(n,e.key,e.value)};else if(e instanceof ta)t={delete:Po(n,e.key)};else if(e instanceof _n)t={update:ml(n,e.key,e.data),updateMask:o_(e.fieldMask)};else{if(!(e instanceof Lg))return W(16599,{dt:e.type});t={verify:Po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ks)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Kg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)}(n,e.precondition)),t}function Xg(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ot(s.updateTime):ot(i);return a.isEqual(H.min())&&(a=ot(i)),new Dg(a,s.transformResults||[])}(t,e))):[]}function Zg(n,e){return{documents:[vh(n,e.path)]}}function e_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vh(n,s);const i=function(d){if(d.length!==0)return bh(ht.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:xn(T.field),direction:r_(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Co(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function t_(n){let e=Qg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){se(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const T=Ah(g);return T instanceof ht&&th(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(T=>function(x){return new Ws(Dn(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(g){let T;return T=typeof g=="object"?g.value:g,mi(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(g){const T=!!g.before,S=g.values||[];return new Gs(S,T)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const T=!g.before,S=g.values||[];return new Gs(S,T)}(t.endAt)),yg(e,s,a,i,l,"F",u,d)}function n_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ah(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dn(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dn(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dn(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>Ah(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function r_(n){return $g[n]}function s_(n){return Gg[n]}function i_(n){return Wg[n]}function xn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return ke.fromServerFormat(n.fieldPath)}function bh(n){return n instanceof ve?function(t){if(t.op==="=="){if(tl(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tl(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:s_(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>bh(s));return r.length===1?r[0]:{compositeFilter:{op:i_(t.op),filters:r}}}(n):W(54877,{filter:n})}function o_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ch(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class xt{constructor(e,t,r,s,i=H.min(),a=H.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class a_{constructor(e){this.yt=e}}function c_(n){const e=t_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?So(e,e.limit,"L"):e}/**
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
 */class l_{constructor(){this.Sn=new u_}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ut.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class u_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ae(ue.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ae(ue.comparator)).toArray()}}/**
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
 */const pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rh=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Rh,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */class $n{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new $n(0)}static ar(){return new $n(-1)}}/**
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
 */const gl="LruGarbageCollector",h_=1048576;function _l([n,e],[t,r]){const s=ee(n,t);return s===0?ee(e,r):s}class d_{constructor(e){this.Pr=e,this.buffer=new Ae(_l),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_l(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class f_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(gl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yn(t)?M(gl,"Ignoring IndexedDB error during garbage collection: ",t):await Jn(t)}await this.Ar(3e5)})}}class m_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(fi.ce);const r=new d_(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(pl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),kn()<=Z.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function p_(n,e){return new m_(n,e)}/**
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
 */class g_{constructor(){this.changes=new gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class __{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class y_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Mr(r.mutation,s,Qe.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const s=nn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=kr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Et();const a=Lr(),l=function(){return Lr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof _n)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Mr(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new __(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Lr();let s=new fe((a,l)=>a-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Qe.empty();p=l.applyToLocalView(d,p),r.set(u,p);const g=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=lh();p.forEach(T=>{if(!i.has(T)){const S=ph(t.get(T),r.get(T));S!==null&&g.set(T,S),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Eg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ig(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(nn());let l=zr,u=i;return a.next(d=>P.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,te())).next(p=>({batchId:l,changes:ch(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=kr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=kr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(g,T){return new gi(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Le.newInvalidDocument(p)))});let l=kr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Mr(p.mutation,d,Qe.empty(),he.now()),yi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class E_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ot(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:c_(s.bundledQuery),readTime:ot(s.readTime)}}(t)),P.resolve()}}/**
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
 */class I_{constructor(){this.overlays=new fe(B.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=nn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=nn(),i=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new fe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=nn(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=nn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return P.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jg(t,r));let i=this.Lr.get(t);i===void 0&&(i=te(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class T_{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ia{constructor(){this.kr=new Ae(Ce.Kr),this.qr=new Ae(Ce.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ce(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new B(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new B(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=te();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return B.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||B.comparator(e.key,t.key)}}/**
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
 */class v_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ae(Ce.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mg(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ko:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(ee);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new B(i),0);let l=new Ae(ee);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Hr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){se(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Jr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class w_{constructor(e){this.ti=e,this.docs=function(){return new fe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Et();const a=t.path,l=new B(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Qp(Kp(p),r)<=0||(s.has(p.key)||yi(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W(9500)}ni(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new A_(this)}getSize(e){return P.resolve(this.size)}}class A_ extends g_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class b_{constructor(e){this.persistence=e,this.ri=new gn(t=>Yo(t),Xo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new ia,this.targetCount=0,this.oi=$n._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class Ph{constructor(e,t){this._i={},this.overlays={},this.ai=new fi(0),this.ui=!1,this.ui=!0,this.ci=new T_,this.referenceDelegate=e(this),this.li=new b_(this),this.indexManager=new l_,this.remoteDocumentCache=function(s){return new w_(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new a_(t),this.Pi=new E_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new I_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new v_(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new S_(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class S_ extends Yp{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Ri=new ia,this.Ai=null}static Vi(e){return new oa(e)}get di(){if(this.Ai)return this.Ai;throw W(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=B.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Js{constructor(e,t){this.persistence=e,this.fi=new gn(r=>eg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=p_(this,t)}static Vi(e,t){return new Js(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ks(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class aa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=te(),s=te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new aa(e,t.fromCache,r,s)}}/**
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
 */class C_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class R_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return gm()?8:Xp(Me())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new C_;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(kn()<=Z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(kn()<=Z.DEBUG&&M("QueryEngine","Query:",Nn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(kn()<=Z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):P.resolve())}gs(e,t){if(il(t))return P.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=So(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=te(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(t,l);return this.Ss(t,d,a,u.readTime)?this.gs(e,So(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,r,s){return il(t)||s.isEqual(H.min())?P.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,r,s)?P.resolve(null):(kn()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nn(t)),this.Ds(e,a,t,Hp(s,zr)).next(l=>l))})}bs(e,t){let r=new Ae(oh(e));return t.forEach((s,i)=>{yi(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return kn()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ut.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ca="LocalStore",P_=3e8;class k_{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new fe(ee),this.Fs=new gn(i=>Yo(i),Xo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function N_(n,e,t,r){return new k_(n,e,t,r)}async function kh(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=te();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function x_(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,T=g.keys();let S=P.resolve();return T.forEach(x=>{S=S.next(()=>p.getEntry(u,x)).next(D=>{const N=d.docVersions.get(x);se(N!==null,48541),D.version.compareTo(N)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Nh(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function D_(n,e){const t=Q(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((p,g)=>{const T=s.get(g);if(!T)return;l.push(t.li.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,p.addedDocuments,g)));let S=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(xe.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(D,N,U){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=P_?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(T,S,p)&&l.push(t.li.updateTargetData(i,S))});let u=Et(),d=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(V_(i,a,e.documentUpdates).next(p=>{u=p.Bs,d=p.Ls})),!r.isEqual(H.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function V_(n,e,t){let r=te(),s=te();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Et();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M(ca,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function O_(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ko),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function L_(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function No(n,e,t){const r=Q(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Yn(a))throw a;M(ca,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function yl(n,e,t){const r=Q(n);let s=H.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=Q(u),T=g.Fs.get(p);return T!==void 0?P.resolve(g.vs.get(T)):g.li.getTargetData(d,p)}(r,a,st(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:te())).next(l=>(M_(r,vg(e),l),{documents:l,ks:i})))}function M_(n,e,t){let r=n.Ms.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class El{constructor(){this.activeTargetIds=Rg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j_{constructor(){this.vo=new El,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new El,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class F_{Mo(e){}shutdown(){}}/**
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
 */const Il="ConnectivityMonitor";class Tl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Il,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(Il,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cs=null;function xo(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
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
 */const so="RestConnection",U_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class z_{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Bs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=xo(),l=this.Qo(e,t.toUriEncodedString());M(so,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),p=Hn(d);return this.zo(e,l,u,r,p).then(g=>(M(so,`Received RPC '${e}' ${a}: `,g),g),g=>{throw cn(so,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=U_[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class q_{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ve="WebChannelConnection",Sr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Vn extends z_{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vn.c_){const e=Mu();Sr(e,Lu.STAT_EVENT,t=>{t.stat===Io.PROXY?M(Ve,"STAT_EVENT: detected buffering proxy"):t.stat===Io.NOPROXY&&M(Ve,"STAT_EVENT: detected no buffering proxy")}),Vn.c_=!0}}zo(e,t,r,s,i){const a=xo();return new Promise((l,u)=>{const d=new Vu;d.setWithCredentials(!0),d.listenOnce(Ou.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ps.NO_ERROR:const g=d.getResponseJson();M(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ps.TIMEOUT:M(Ve,`RPC '${e}' ${a} timed out`),u(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const T=d.getStatus();if(M(Ve,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const D=function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(x.status);u(new j(D,x.message))}else u(new j(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new j(k.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ve,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);M(Ve,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=xo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");M(Ve,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let g=!1,T=!1;const S=new q_({Ho:x=>{T?M(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(M(Ve,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),M(Ve,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Jo:()=>p.close()});return Sr(p,Pr.EventType.OPEN,()=>{T||(M(Ve,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Sr(p,Pr.EventType.CLOSE,()=>{T||(T=!0,M(Ve,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(p))}),Sr(p,Pr.EventType.ERROR,x=>{T||(T=!0,cn(Ve,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),S.o_(new j(k.UNAVAILABLE,"The operation could not be completed")))}),Sr(p,Pr.EventType.MESSAGE,x=>{var D;if(!T){const N=x.data[0];se(!!N,16349);const U=N,$=(U==null?void 0:U.error)||((D=U[0])==null?void 0:D.error);if($){M(Ve,`RPC '${e}' stream ${s} received error:`,$);const F=$.status;let K=function(I){const _=Ee[I];if(_!==void 0)return _h(_)}(F),L=$.message;F==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&cn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),K===void 0&&(K=k.INTERNAL,L="Unknown error status: "+F+" with message "+$.message),T=!0,S.o_(new j(K,L)),p.close()}else M(Ve,`RPC '${e}' stream ${s} received:`,N),S.__(N)}}),Vn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ju()}}/**
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
 */function B_(n){return new Vn(n)}function io(){return typeof document<"u"?document:null}/**
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
 */function vi(n){return new Hg(n,!0)}/**
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
 */Vn.c_=!1;class xh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const vl="PersistentStream";class Dh{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new j(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(vl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(M(vl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $_ extends Dh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Jg(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?ot(a.readTime):H.min()}(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=ko(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=bo(u)?{documents:Zg(i,u)}:{query:e_(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ih(i,a.resumeToken);const d=Co(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Qs(i,a.snapshotVersion.toTimestamp());const d=Co(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=n_(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=ko(this.serializer),t.removeTarget=e,this.K_(t)}}class G_ extends Dh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Xg(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ko(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yg(this.serializer,r))};this.K_(t)}}/**
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
 */class W_{}class H_ extends W_{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ro(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ro(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function K_(n,e,t,r){return new H_(n,e,t,r)}class Q_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const ln="RemoteStore";class J_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{yn(this)&&(M(ln,"Restarting streams for network reachability change."),await async function(u){const d=Q(u);d.Ea.add(4),await Zr(d),d.Va.set("Unknown"),d.Ea.delete(4),await wi(d)}(this))})}),this.Va=new Q_(r,s)}}async function wi(n){if(yn(n))for(const e of n.Ra)await e(!0)}async function Zr(n){for(const e of n.Ra)await e(!1)}function Vh(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),da(t)?ha(t):Xn(t).O_()&&ua(t,e))}function la(n,e){const t=Q(n),r=Xn(t);t.Ia.delete(e),r.O_()&&Oh(t,e),t.Ia.size===0&&(r.O_()?r.L_():yn(t)&&t.Va.set("Unknown"))}function ua(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).Z_(e)}function Oh(n,e){n.da.$e(e),Xn(n).X_(e)}function ha(n){n.da=new Bg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.Va.ua()}function da(n){return yn(n)&&!Xn(n).x_()&&n.Ia.size>0}function yn(n){return Q(n).Ea.size===0}function Lh(n){n.da=void 0}async function Y_(n){n.Va.set("Online")}async function X_(n){n.Ia.forEach((e,t)=>{ua(n,e)})}async function Z_(n,e){Lh(n),da(n)?(n.Va.ha(e),ha(n)):n.Va.set("Unknown")}async function ey(n,e,t){if(n.Va.set("Online"),e instanceof Eh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){M(ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ys(n,r)}else if(e instanceof Ds?n.da.Xe(e):e instanceof yh?n.da.st(e):n.da.tt(e),!t.isEqual(H.min()))try{const r=await Nh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(xe.EMPTY_BYTE_STRING,p.snapshotVersion)),Oh(i,u);const g=new xt(p.target,u,d,p.sequenceNumber);ua(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M(ln,"Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,e,t){if(!Yn(e))throw e;n.Ea.add(1),await Zr(n),n.Va.set("Offline"),t||(t=()=>Nh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await wi(n)})}function Mh(n,e){return e().catch(t=>Ys(n,t,e))}async function Ai(n){const e=Q(n),t=$t(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ko;for(;ty(e);)try{const s=await O_(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,ny(e,s)}catch(s){await Ys(e,s)}jh(e)&&Fh(e)}function ty(n){return yn(n)&&n.Ta.length<10}function ny(n,e){n.Ta.push(e);const t=$t(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function jh(n){return yn(n)&&!$t(n).x_()&&n.Ta.length>0}function Fh(n){$t(n).start()}async function ry(n){$t(n).ra()}async function sy(n){const e=$t(n);for(const t of n.Ta)e.ea(t.mutations)}async function iy(n,e,t){const r=n.Ta.shift(),s=na.from(r,e,t);await Mh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ai(n)}async function oy(n,e){e&&$t(n).Y_&&await async function(r,s){if(function(a){return Ug(a)&&a!==k.ABORTED}(s.code)){const i=r.Ta.shift();$t(r).B_(),await Mh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ai(r)}}(n,e),jh(n)&&Fh(n)}async function wl(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),M(ln,"RemoteStore received new credentials");const r=yn(t);t.Ea.add(3),await Zr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await wi(t)}async function ay(n,e){const t=Q(n);e?(t.Ea.delete(2),await wi(t)):e||(t.Ea.add(2),await Zr(t),t.Va.set("Unknown"))}function Xn(n){return n.ma||(n.ma=function(t,r,s){const i=Q(t);return i.sa(),new $_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Y_.bind(null,n),Yo:X_.bind(null,n),t_:Z_.bind(null,n),J_:ey.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),da(n)?ha(n):n.Va.set("Unknown")):(await n.ma.stop(),Lh(n))})),n.ma}function $t(n){return n.fa||(n.fa=function(t,r,s){const i=Q(t);return i.sa(),new G_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ry.bind(null,n),t_:oy.bind(null,n),ta:sy.bind(null,n),na:iy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Ai(n)):(await n.fa.stop(),n.Ta.length>0&&(M(ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class fa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new fa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(n,e){if(yt("AsyncQueue",`${e}: ${n}`),Yn(n))return new j(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class On{static emptySet(e){return new On(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=kr(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new On;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Al{constructor(){this.ga=new fe(B.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Gn(e,t,On.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cy{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class ly{constructor(){this.queries=bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=Q(t),i=s.queries;s.queries=bl(),i.forEach((a,l)=>{for(const u of l.ba)u.onError(r)})})(this,new j(k.ABORTED,"Firestore shutting down"))}}function bl(){return new gn(n=>ih(n),_i)}async function Uh(n,e){const t=Q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new cy,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ma(a,`Initialization of query '${Nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&pa(t)}async function zh(n,e){const t=Q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uy(n,e){const t=Q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&pa(t)}function hy(n,e,t){const r=Q(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function pa(n){n.Ca.forEach(e=>{e.next()})}var Do,Sl;(Sl=Do||(Do={})).Ma="default",Sl.Cache="cache";class qh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Do.Cache}}/**
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
 */class Bh{constructor(e){this.key=e}}class $h{constructor(e){this.key=e}}class dy{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=oh(e),this.tu=new On(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Al,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const T=s.get(p),S=yi(this.query,g)?g:null,x=!!T&&this.mutatedKeys.has(T.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;T&&S?T.data.isEqual(S.data)?x!==D&&(r.track({type:3,doc:S}),N=!0):this.su(T,S)||(r.track({type:2,doc:S}),N=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!T&&S?(r.track({type:0,doc:S}),N=!0):T&&!S&&(r.track({type:1,doc:T}),N=!0,(u||d)&&(l=!0)),N&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,g)=>function(S,x){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:N})}};return D(S)-D(x)}(p.type,g.type)||this.eu(p.doc,g.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new Gn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Al,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new $h(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Bh(r))}),t}cu(e){this.Za=e.ks,this.Ya=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Gn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ga="SyncEngine";class fy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class my{constructor(e){this.key=e,this.hu=!1}}class py{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gn(l=>ih(l),_i),this.Iu=new Map,this.Eu=new Set,this.Ru=new fe(B.comparator),this.Au=new Map,this.Vu=new ia,this.du={},this.mu=new Map,this.fu=$n.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gy(n,e,t=!0){const r=Jh(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Gh(r,e,t,!0),s}async function _y(n,e){const t=Jh(n);await Gh(t,e,!0,!1)}async function Gh(n,e,t,r){const s=await L_(n.localStore,st(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await yy(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vh(n.remoteStore,s),l}async function yy(n,e,t,r,s){n.pu=(g,T,S)=>async function(D,N,U,$){let F=N.view.ru(U);F.Ss&&(F=await yl(D.localStore,N.query,!1).then(({documents:I})=>N.view.ru(I,F)));const K=$&&$.targetChanges.get(N.targetId),L=$&&$.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(F,D.isPrimaryClient,K,L);return Rl(D,N.targetId,z.au),z.snapshot}(n,g,T,S);const i=await yl(n.localStore,e,!0),a=new dy(e,i.ks),l=a.ru(i.documents),u=Xr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Rl(n,t,d.au);const p=new fy(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Ey(n,e,t){const r=Q(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!_i(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await No(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&la(r.remoteStore,s.targetId),Vo(r,s.targetId)}).catch(Jn)):(Vo(r,s.targetId),await No(r.localStore,s.targetId,!0))}async function Iy(n,e){const t=Q(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),la(t.remoteStore,r.targetId))}async function Ty(n,e,t){const r=Ry(n);try{const s=await function(a,l){const u=Q(a),d=he.now(),p=l.reduce((S,x)=>S.add(x.key),te());let g,T;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Et(),D=te();return u.xs.getEntries(S,p).next(N=>{x=N,x.forEach((U,$)=>{$.isValidDocument()||(D=D.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,x)).next(N=>{g=N;const U=[];for(const $ of l){const F=Og($,g.get($.key).overlayedDocument);F!=null&&U.push(new _n($.key,F,Xu(F.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,U,l)}).next(N=>{T=N;const U=N.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(S,N.batchId,U)})}).then(()=>({batchId:T.batchId,changes:ch(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new fe(ee)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d}(r,s.batchId,t),await es(r,s.changes),await Ai(r.remoteStore)}catch(s){const i=ma(s,"Failed to persist write");t.reject(i)}}async function Wh(n,e){const t=Q(n);try{const r=await D_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?se(a.hu,14607):s.removedDocuments.size>0&&(se(a.hu,42227),a.hu=!1))}),await es(t,r,e)}catch(r){await Jn(r)}}function Cl(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Q(a);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const T of g.ba)T.va(l)&&(d=!0)}),d&&pa(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vy(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new fe(B.comparator);a=a.insert(i,Le.newNoDocument(i,H.min()));const l=te().add(i),u=new Ti(H.min(),new Map,new fe(ee),a,l);await Wh(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),_a(r)}else await No(r.localStore,e,!1).then(()=>Vo(r,e,t)).catch(Jn)}async function wy(n,e){const t=Q(n),r=e.batch.batchId;try{const s=await x_(t.localStore,e);Kh(t,r,null),Hh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await es(t,s)}catch(s){await Jn(s)}}async function Ay(n,e,t){const r=Q(n);try{const s=await function(a,l){const u=Q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(se(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);Kh(r,e,t),Hh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await es(r,s)}catch(s){await Jn(s)}}function Hh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Kh(n,e,t){const r=Q(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Qh(n,r)})}function Qh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(la(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),_a(n))}function Rl(n,e,t){for(const r of t)r instanceof Bh?(n.Vu.addReference(r.key,e),by(n,r)):r instanceof $h?(M(ga,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Qh(n,r.key)):W(19791,{wu:r})}function by(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(M(ga,"New document in limbo: "+t),n.Eu.add(r),_a(n))}function _a(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(ue.fromString(e)),r=n.fu.next();n.Au.set(r,new my(t)),n.Ru=n.Ru.insert(t,r),Vh(n.remoteStore,new xt(st(Zo(t.path)),r,"TargetPurposeLimboResolution",fi.ce))}}async function es(n,e,t){const r=Q(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=aa.Es(u.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(u,d){const p=Q(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>P.forEach(d,T=>P.forEach(T.Ts,S=>p.persistence.referenceDelegate.addReference(g,T.targetId,S)).next(()=>P.forEach(T.Is,S=>p.persistence.referenceDelegate.removeReference(g,T.targetId,S)))))}catch(g){if(!Yn(g))throw g;M(ca,"Failed to update sequence numbers: "+g)}for(const g of d){const T=g.targetId;if(!g.fromCache){const S=p.vs.get(T),x=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(x);p.vs=p.vs.insert(T,D)}}}(r.localStore,i))}async function Sy(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){M(ga,"User change. New user:",e.toKey());const r=await kh(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new j(k.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await es(t,r.Ns)}}function Cy(n,e){const t=Q(n),r=t.Au.get(e);if(r&&r.hu)return te().add(r.key);{let s=te();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Jh(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vy.bind(null,e),e.Pu.J_=uy.bind(null,e.eventManager),e.Pu.yu=hy.bind(null,e.eventManager),e}function Ry(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ay.bind(null,e),e}class Xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return N_(this.persistence,new R_,e.initialUser,this.serializer)}Cu(e){return new Ph(oa.Vi,this.serializer)}Du(e){return new j_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xs.provider={build:()=>new Xs};class Py extends Xs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){se(this.persistence.referenceDelegate instanceof Js,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new f_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new Ph(r=>Js.Vi(r,t),this.serializer)}}class Oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sy.bind(null,this.syncEngine),await ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ly}()}createDatastore(e){const t=vi(e.databaseInfo.databaseId),r=B_(e.databaseInfo);return K_(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new J_(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Cl(this.syncEngine,t,0),function(){return Tl.v()?new Tl:new F_}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const g=new py(s,i,a,l,u,d);return p&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Q(s);M(ln,"RemoteStore shutting down."),i.Ea.add(5),await Zr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Oo.provider={build:()=>new Oo};/**
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
 */class Yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Gt="FirestoreClient";class ky{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Wo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(Gt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(Gt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ma(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oo(n,e){n.asyncQueue.verifyOperationInProgress(),M(Gt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ny(n);M(Gt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>wl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>wl(e.remoteStore,s)),n._onlineComponents=e}async function Ny(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Gt,"Using user provided OfflineComponentProvider");try{await oo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;cn("Error using user provided cache. Falling back to memory cache: "+t),await oo(n,new Xs)}}else M(Gt,"Using default OfflineComponentProvider"),await oo(n,new Py(void 0));return n._offlineComponents}async function Xh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Gt,"Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):(M(Gt,"Using default OnlineComponentProvider"),await Pl(n,new Oo))),n._onlineComponents}function xy(n){return Xh(n).then(e=>e.syncEngine)}async function Zh(n){const e=await Xh(n),t=e.eventManager;return t.onListen=gy.bind(null,e.syncEngine),t.onUnlisten=Ey.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_y.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Iy.bind(null,e.syncEngine),t}function Dy(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new Yh({next:T=>{p.Nu(),a.enqueueAndForget(()=>zh(i,g));const S=T.docs.has(l);!S&&T.fromCache?d.reject(new j(k.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&u&&u.source==="server"?d.reject(new j(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new qh(Zo(l.path),p,{includeMetadataChanges:!0,Ka:!0});return Uh(i,g)}(await Zh(n),n.asyncQueue,e,t,r)),r.promise}function Vy(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new Yh({next:T=>{p.Nu(),a.enqueueAndForget(()=>zh(i,g)),T.fromCache&&u.source==="server"?d.reject(new j(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new qh(l,p,{includeMetadataChanges:!0,Ka:!0});return Uh(i,g)}(await Zh(n),n.asyncQueue,e,t,r)),r.promise}function Oy(n,e){const t=new gt;return n.asyncQueue.enqueueAndForget(async()=>Ty(await xy(n),e,t)),t.promise}/**
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
 */function ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ly="ComponentProvider",kl=new Map;function My(n,e,t,r,s){return new rg(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ed(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const td="firestore.googleapis.com",Nl=!0;class xl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=td,this.ssl=Nl}else this.host=e.host,this.ssl=e.ssl??Nl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<h_)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ed(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lp;switch(r.type){case"firstParty":return new Up(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kl.get(t);r&&(M(Ly,"Removing Datastore"),kl.delete(t),r.terminate())}(this),Promise.resolve()}}function jy(n,e,t,r={}){var d;n=Ft(n,bi);const s=Hn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Au(`https://${l}`),bu("Firestore",!0)),i.host!==td&&i.host!==l&&cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!jt(u,a)&&(n._setSettings(u),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=Oe.MOCK_USER;else{p=cm(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new j(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Oe(T)}n._authCredentials=new Mp(new Uu(p,g))}}/**
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
 */class Si{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Si(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Jr(t,we._jsonSchema))return new we(e,r||null,new B(ue.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Ie("string",we._jsonSchemaVersion),referencePath:Ie("string")};class Lt extends Si{constructor(e,t,r){super(e,t,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new B(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function Fy(n,e,...t){if(n=Ne(n),zu("collection","path",e),n instanceof bi){const r=ue.fromString(e,...t);return Wc(r),new Lt(n,null,r)}{if(!(n instanceof we||n instanceof Lt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Wc(r),new Lt(n.firestore,null,r)}}function En(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=Wo.newId()),zu("doc","path",e),n instanceof bi){const r=ue.fromString(e,...t);return Gc(r),new we(n,null,new B(r))}{if(!(n instanceof we||n instanceof Lt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Gc(r),new we(n.firestore,n instanceof Lt?n.converter:null,new B(r))}}/**
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
 */const Dl="AsyncQueue";class Vl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xh(this,"async_queue_retry"),this._c=()=>{const r=io();r&&M(Dl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Yn(e))throw e;M(Dl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,yt("INTERNAL UNHANDLED ERROR: ",Ol(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=fa.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:Ol(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ts extends bi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function Uy(n,e){const t=typeof n=="object"?n:$o(),r=typeof n=="string"?n:Bs,s=mn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=om("firestore");i&&jy(s,...i)}return s}function ya(n){if(n._terminated)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zy(n),n._firestoreClient}function zy(n){var r,s,i,a;const e=n._freezeSettings(),t=My(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ky(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(xe.fromBase64String(e))}catch(t){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jr(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:Ie("string",We._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class nd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rd{constructor(e){this._methodName=e}}/**
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
 */class at{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:at._jsonSchemaVersion}}static fromJSON(e){if(Jr(e,at._jsonSchema))return new at(e.latitude,e.longitude)}}at._jsonSchemaVersion="firestore/geoPoint/1.0",at._jsonSchema={type:Ie("string",at._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Ye{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jr(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ye(e.vectorValues);throw new j(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Ie("string",Ye._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const qy=/^__.*__$/;class By{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yr(e,this.data,t,this.fieldTransforms)}}function sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{dataSource:n})}}class Ea{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Zs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sd(this.dataSource)&&qy.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class $y{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vi(e)}createContext(e,t,r,s=!1){return new Ea({dataSource:e,methodName:t,targetDoc:r,path:ke.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gy(n){const e=n._freezeSettings(),t=vi(n._databaseId);return new $y(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wy(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);cd("Data must be an object, but it was:",a,r);const l=od(r,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const T=Ia(e,g,t);if(!a.contains(T))throw new j(k.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Qy(p,T)||p.push(T)}u=new Qe(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new By(new Ge(l),u,d)}function id(n,e){if(ad(n=Ne(n)))return cd("Unsupported field value:",e,n),od(n,e);if(n instanceof rd)return function(r,s){if(!sd(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=id(l,s.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Pg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:Qs(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qs(s.serializer,i)}}if(r instanceof at)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Ih(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ye)return function(a,l){const u=a instanceof Ye?a.toArray():a;return{mapValue:{fields:{[Ju]:{stringValue:Yu},[$s]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return ea(l.serializer,p)})}}}}}}(r,s);if(Ch(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ho(r)}`)}(n,e)}function od(n,e){const t={};return $u(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(r,s)=>{const i=id(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ad(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof at||n instanceof We||n instanceof we||n instanceof rd||n instanceof Ye||Ch(n))}function cd(n,e,t){if(!ad(t)||!qu(t)){const r=Ho(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ia(n,e,t){if((e=Ne(e))instanceof nd)return e._internalPath;if(typeof e=="string")return Ky(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hy=new RegExp("[~\\*/\\[\\]]");function Ky(n,e,t){if(e.search(Hy)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nd(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new j(k.INVALID_ARGUMENT,l+n+u)}function Qy(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Jy{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return pn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[$s].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>_e(a.doubleValue));return new Ye(t)}convertGeoPoint(e){return new at(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qr(e));default:return null}}convertTimestamp(e){const t=zt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);se(Sh(r),9688,{name:e});const s=new Br(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class ld extends Jy{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}const Ll="@firebase/firestore",Ml="4.11.0";/**
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
 */class ud{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ia("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Yy extends ud{data(){return super.data()}}/**
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
 */function Xy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Zy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class on extends ud{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ia("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=on._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}on._jsonSchemaVersion="firestore/documentSnapshot/1.0",on._jsonSchema={type:Ie("string",on._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Vs extends on{data(e={}){return super.data(e)}}class Ln{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vs(this._firestore,this._userDataWriter,r.key,r,new xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:eE(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:Ie("string",Ln._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};/**
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
 */function hd(n){n=Ft(n,we);const e=Ft(n.firestore,ts),t=ya(e);return Dy(t,n._key).then(r=>rE(e,n,r))}function tE(n){n=Ft(n,Si);const e=Ft(n.firestore,ts),t=ya(e),r=new ld(e);return Xy(n._query),Vy(t,n._query).then(s=>new Ln(e,r,n,s))}function Ci(n,e,t){n=Ft(n,we);const r=Ft(n.firestore,ts),s=Zy(n.converter,e),i=Gy(r);return dd(r,[Wy(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,it.none())])}function nE(n){return dd(Ft(n.firestore,ts),[new ta(n._key,it.none())])}function dd(n,e){const t=ya(n);return Oy(t,e)}function rE(n,e,t){const r=t.docs.get(e._key),s=new ld(n);return new on(n,s,e._key,r,new xr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Op(Kn),lt(new Ze("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ts(new jp(r.getProvider("auth-internal")),new zp(a,r.getProvider("app-check-internal")),sg(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),He(Ll,Ml,e),He(Ll,Ml,"esm2020")})();var sE="firebase",iE="12.9.0";/**
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
 */He(sE,iE,"app");function fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oE=fd,md=new fn("auth","Firebase",fd());/**
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
 */const ei=new di("@firebase/auth");function aE(n,...e){ei.logLevel<=Z.WARN&&ei.warn(`Auth (${Kn}): ${n}`,...e)}function Os(n,...e){ei.logLevel<=Z.ERROR&&ei.error(`Auth (${Kn}): ${n}`,...e)}/**
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
 */function Ke(n,...e){throw va(n,...e)}function Xe(n,...e){return va(n,...e)}function Ta(n,e,t){const r={...oE(),[e]:t};return new fn("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return Ta(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cE(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ke(n,"argument-error"),Ta(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function va(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return md.create(n,...e)}function G(n,e,...t){if(!n)throw va(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Os(e),new Error(e)}function It(n,e){n||mt(e)}/**
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
 */function Lo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function lE(){return jl()==="http:"||jl()==="https:"}function jl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function uE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lE()||Uo()||"connection"in navigator)?navigator.onLine:!0}function hE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=hm()||mm()}get(){return uE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class pd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mE=new ns(3e4,6e4);function In(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Wt(n,e,t,r,s={}){return gd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Qr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return fm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(d.credentials="include"),pd.fetch()(await _d(n,n.config.apiHost,t,l),d)})}async function gd(n,e,t){n._canInitEmulator=!1;const r={...dE,...e};try{const s=new gE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Rs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Rs(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ta(n,p,d);Ke(n,p)}}catch(s){if(s instanceof et)throw s;Ke(n,"network-request-failed",{message:String(s)})}}async function Ri(n,e,t,r,s={}){const i=await Wt(n,e,t,r,s);return"mfaPendingCredential"in i&&Ke(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function _d(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?wa(n.config,s):`${n.config.apiScheme}://${s}`;return fE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function pE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),mE.get())})}}function Rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xe(n,e,r);return s.customData._tokenResponse=t,s}function Fl(n){return n!==void 0&&n.enterprise!==void 0}class _E{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yE(n,e){return Wt(n,"GET","/v2/recaptchaConfig",In(n,e))}/**
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
 */async function EE(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function jr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IE(n,e=!1){const t=Ne(n),r=await t.getIdToken(e),s=Aa(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jr(ao(s.auth_time)),issuedAtTime:jr(ao(s.iat)),expirationTime:jr(ao(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ao(n){return Number(n)*1e3}function Aa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iu(t);return s?JSON.parse(s):(Os("Failed to decode base64 JWT payload"),null)}catch(s){return Os("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ul(n){const e=Aa(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof et&&TE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function TE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class vE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var g;const e=n.auth,t=await n.getIdToken(),r=await Hr(n,ti(e,{idToken:t}));G(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?yd(s.providerUserInfo):[],a=AE(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function wE(n){const e=Ne(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function bE(n,e){const t=await gd(n,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await _d(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Hn(n.emulatorConfig.host)&&(u.credentials="include"),pd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function SE(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",In(n,e))}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await bE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Mn;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Rt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new vE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IE(this,e)}reload(){return wE(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Hr(this,EE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:T,isAnonymous:S,providerData:x,stsTokenManager:D}=t;G(g&&D,e,"internal-error");const N=Mn.fromJSON(this.name,D);G(typeof g=="string",e,"internal-error"),Rt(r,e.name),Rt(s,e.name),G(typeof T=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Rt(i,e.name),Rt(a,e.name),Rt(l,e.name),Rt(u,e.name),Rt(d,e.name),Rt(p,e.name);const U=new Je({uid:g,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:d,lastLoginAt:p});return x&&Array.isArray(x)&&(U.providerData=x.map($=>({...$}))),u&&(U._redirectEventId=u),U}static async _fromIdTokenResponse(e,t,r=!1){const s=new Mn;s.updateFromServerResponse(t);const i=new Je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mn;l.updateFromIdToken(r);const u=new Je({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */class Ed{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ed.type="NONE";const ql=Ed;/**
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
 */function Ls(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ls("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jn(pt(ql),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||pt(ql);const a=Ls(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const T=await ti(e,{idToken:p}).catch(()=>{});if(!T)break;g=await Je._fromGetAccountInfoResponse(e,T,p)}else g=Je._fromJSON(e,p);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new jn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new jn(i,e,r))}}/**
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
 */function Bl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Sd(e))return"Webos";if(Td(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(Ad(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Id(n=Me()){return/firefox\//i.test(n)}function Td(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(n=Me()){return/crios\//i.test(n)}function wd(n=Me()){return/iemobile/i.test(n)}function Ad(n=Me()){return/android/i.test(n)}function bd(n=Me()){return/blackberry/i.test(n)}function Sd(n=Me()){return/webos/i.test(n)}function ba(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CE(n=Me()){var e;return ba(n)&&!!((e=window.navigator)!=null&&e.standalone)}function RE(){return pm()&&document.documentMode===10}function Cd(n=Me()){return ba(n)||Ad(n)||Sd(n)||bd(n)||/windows phone/i.test(n)||wd(n)}/**
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
 */function Rd(n,e=[]){let t;switch(n){case"Browser":t=Bl(Me());break;case"Worker":t=`${Bl(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${r}`}/**
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
 */class PE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kE(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",In(n,e))}/**
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
 */const NE=6;class xE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??NE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class DE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new PE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Mt(this));const t=e?Ne(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kE(this),t=new xE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await SE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&aE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Tn(n){return Ne(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VE(n){Pi=n}function Pd(n){return Pi.loadJS(n)}function OE(){return Pi.recaptchaEnterpriseScript}function LE(){return Pi.gapiScript}function ME(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jE{constructor(){this.enterprise=new FE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const UE="recaptcha-enterprise",kd="NO_RECAPTCHA";class zE{constructor(e){this.type=UE,this.auth=Tn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{yE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new _E(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Fl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(kd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jE().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Fl(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=OE();u.length!==0&&(u+=l),Pd(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Gl(n,e,t,r=!1,s=!1){const i=new zE(n);let a;if(s)a=kd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wl(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Gl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gl(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function qE(n,e){const t=mn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(jt(i,e??{}))return s;Ke(s,"already-initialized")}return t.initialize({options:e})}function BE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $E(n,e,t){const r=Tn(n);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Nd(e),{host:a,port:l}=GE(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(jt(d,r.config.emulator)&&jt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Hn(a)?(Au(`${i}//${a}${u}`),bu("Auth",!0)):WE()}function Nd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function GE(n){const e=Nd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Hl(a)}}}function Hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function WE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Sa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function HE(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KE(n,e){return Ri(n,"POST","/v1/accounts:signInWithPassword",In(n,e))}/**
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
 */async function QE(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}async function JE(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}/**
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
 */class Kr extends Sa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Kr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Kr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,t,"signInWithPassword",KE);case"emailLink":return QE(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,r,"signUpPassword",HE);case"emailLink":return JE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fn(n,e){return Ri(n,"POST","/v1/accounts:signInWithIdp",In(n,e))}/**
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
 */const YE="http://localhost";class un extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new un(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}buildRequest(){const e={requestUri:YE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qr(t)}return e}}/**
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
 */function XE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZE(n){const e=Cr(Rr(n)).link,t=e?Cr(Rr(e)).deep_link_id:null,r=Cr(Rr(n)).deep_link_id;return(r?Cr(Rr(r)).link:null)||r||t||e||n}class Ca{constructor(e){const t=Cr(Rr(e)),r=t.apiKey??null,s=t.oobCode??null,i=XE(t.mode??null);G(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ZE(e);try{return new Ca(t)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,t){return Kr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ca.parseLink(t);return G(r,"argument-error"),Kr._fromEmailAndCode(e,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rs extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends rs{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class ft extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
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
 */class kt extends rs{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Nt extends rs{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Je._fromIdTokenResponse(e,r,s),a=Kl(r);return new Wn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kl(r);return new Wn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ri extends et{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ri(e,t,r,s)}}function xd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,r):i})}async function eI(n,e,t=!1){const r=await Hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Wn._forOperation(n,"link",r)}/**
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
 */async function tI(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const i=await Hr(n,xd(r,s,e,n),t);G(i.idToken,r,"internal-error");const a=Aa(i.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(n.uid===l,r,"user-mismatch"),Wn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function Dd(n,e,t=!1){if($e(n.app))return Promise.reject(Mt(n));const r="signIn",s=await xd(n,r,e),i=await Wn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nI(n,e){return Dd(Tn(n),e)}/**
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
 */async function rI(n){const e=Tn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function sI(n,e,t){return $e(n.app)?Promise.reject(Mt(n)):nI(Ne(n),Zn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rI(n),r})}function iI(n,e,t,r){return Ne(n).onIdTokenChanged(e,t,r)}function oI(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function aI(n,e,t,r){return Ne(n).onAuthStateChanged(e,t,r)}function cI(n){return Ne(n).signOut()}const si="__sak";/**
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
 */class Vd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lI=1e3,uI=10;class Od extends Vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);RE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Od.type="LOCAL";const hI=Od;/**
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
 */class Ld extends Vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ld.type="SESSION";const Md=Ld;/**
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
 */function dI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await dI(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
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
 */function Pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Pa("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const T=g;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(T.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ct(){return window}function mI(n){ct().location.href=n}/**
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
 */function jd(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function pI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function _I(){return jd()?self:null}/**
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
 */const Fd="firebaseLocalStorageDb",yI=1,ii="firebaseLocalStorage",Ud="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function EI(){const n=indexedDB.deleteDatabase(Fd);return new ss(n).toPromise()}function jo(){const n=indexedDB.open(Fd,yI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ii,{keyPath:Ud})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ii)?e(r):(r.close(),await EI(),e(await jo()))})})}async function Ql(n,e,t){const r=Ni(n,!0).put({[Ud]:e,value:t});return new ss(r).toPromise()}async function II(n,e){const t=Ni(n,!1).get(e),r=await new ss(t).toPromise();return r===void 0?null:r.value}function Jl(n,e){const t=Ni(n,!0).delete(e);return new ss(t).toPromise()}const TI=800,vI=3;class zd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>vI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(_I()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new fI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jo();return await Ql(e,si,"1"),await Jl(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ql(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>II(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ni(s,!1).getAll();return new ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zd.type="LOCAL";const wI=zd;new ns(3e4,6e4);/**
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
 */function qd(n,e){return e?pt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ka extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AI(n){return Dd(n.auth,new ka(n),n.bypassAuthState)}function bI(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),tI(t,new ka(n),n.bypassAuthState)}async function SI(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),eI(t,new ka(n),n.bypassAuthState)}/**
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
 */class Bd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AI;case"linkViaPopup":case"linkViaRedirect":return SI;case"reauthViaPopup":case"reauthViaRedirect":return bI;default:Ke(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CI=new ns(2e3,1e4);async function RI(n,e,t){if($e(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const r=Tn(n);cE(n,e,Ra);const s=qd(r,t);return new rn(r,"signInViaPopup",e,s).executeNotNull()}class rn extends Bd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CI.get())};e()}}rn.currentPopupAction=null;/**
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
 */const PI="pendingRedirect",Ms=new Map;class kI extends Bd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ms.get(this.auth._key());if(!e){try{const r=await NI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ms.set(this.auth._key(),e)}return this.bypassAuthState||Ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NI(n,e){const t=VI(e),r=DI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function xI(n,e){Ms.set(n._key(),e)}function DI(n){return pt(n._redirectPersistence)}function VI(n){return Ls(PI,n.config.apiKey,n.name)}async function OI(n,e,t=!1){if($e(n.app))return Promise.reject(Mt(n));const r=Tn(n),s=qd(r,e),a=await new kI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const LI=10*60*1e3;class MI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$d(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $d({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $d(n);default:return!1}}/**
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
 */async function FI(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
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
 */const UI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zI=/^https?/;async function qI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await FI(n);for(const t of e)try{if(BI(t))return}catch{}Ke(n,"unauthorized-domain")}function BI(n){const e=Lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zI.test(t))return!1;if(UI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $I=new ns(3e4,6e4);function Xl(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GI(n){return new Promise((e,t)=>{var s,i,a;function r(){Xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xl(),t(Xe(n,"network-request-failed"))},timeout:$I.get()})}if((i=(s=ct().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ct().gapi)!=null&&a.load)r();else{const l=ME("iframefcb");return ct()[l]=()=>{gapi.load?r():t(Xe(n,"network-request-failed"))},Pd(`${LE()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw js=null,e})}let js=null;function WI(n){return js=js||GI(n),js}/**
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
 */const HI=new ns(5e3,15e3),KI="__/auth/iframe",QI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XI(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wa(e,QI):`https://${n.config.authDomain}/${KI}`,r={apiKey:e.apiKey,appName:n.name,v:Kn},s=YI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Qr(r).slice(1)}`}async function ZI(n){const e=await WI(n),t=ct().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:XI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),l=ct().setTimeout(()=>{i(a)},HI.get());function u(){ct().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const eT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tT=500,nT=600,rT="_blank",sT="http://localhost";class Zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iT(n,e,t,r=tT,s=nT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...eT,width:r.toString(),height:s.toString(),top:i,left:a},d=Me().toLowerCase();t&&(l=vd(d)?rT:t),Id(d)&&(e=e||sT,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[S,x])=>`${T}${S}=${x},`,"");if(CE(d)&&l!=="_self")return oT(e||"",l),new Zl(null);const g=window.open(e||"",l,p);G(g,n,"popup-blocked");try{g.focus()}catch{}return new Zl(g)}function oT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const aT="__/auth/handler",cT="emulator/auth/handler",lT=encodeURIComponent("fac");async function eu(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kn,eventId:s};if(e instanceof Ra){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Im(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof rs){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${lT}=${encodeURIComponent(u)}`:"";return`${uT(n)}?${Qr(l).slice(1)}${d}`}function uT({config:n}){return n.emulator?wa(n,cT):`https://${n.authDomain}/${aT}`}/**
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
 */const co="webStorageSupport";class hT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Md,this._completeRedirectFn=OI,this._overrideRedirectResult=xI}async _openPopup(e,t,r,s){var a;It((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await eu(e,t,r,Lo(),s);return iT(e,i,Pa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await eu(e,t,r,Lo(),s);return mI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(It(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ZI(e),r=new MI(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(co,{type:co},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[co];i!==void 0&&t(!!i),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cd()||Td()||ba()}}const dT=hT;var tu="@firebase/auth",nu="1.12.0";/**
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
 */class fT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pT(n){lt(new Ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rd(n)},d=new DE(r,s,i,u);return BE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),lt(new Ze("auth-internal",e=>{const t=Tn(e.getProvider("auth").getImmediate());return(r=>new fT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(tu,nu,mT(n)),He(tu,nu,"esm2020")}/**
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
 */const gT=5*60,_T=wu("authIdTokenMaxAge")||gT;let ru=null;const yT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_T)return;const s=t==null?void 0:t.token;ru!==s&&(ru=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ET(n=$o()){const e=mn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qE(n,{popupRedirectResolver:dT,persistence:[wI,hI,Md]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=yT(i.toString());oI(t,a,()=>a(t.currentUser)),iI(t,l=>a(l))}}const s=Tu("auth");return s&&$E(t,`http://${s}`),t}function IT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}VE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",IT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pT("Browser");const Gd="@firebase/installations",Na="0.6.19";/**
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
 */const Wd=1e4,Hd=`w:${Na}`,Kd="FIS_v2",TT="https://firebaseinstallations.googleapis.com/v1",vT=60*60*1e3,wT="installations",AT="Installations";/**
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
 */const bT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hn=new fn(wT,AT,bT);function Qd(n){return n instanceof et&&n.code.includes("request-failed")}/**
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
 */function Jd({projectId:n}){return`${TT}/projects/${n}/installations`}function Yd(n){return{token:n.token,requestStatus:2,expiresIn:CT(n.expiresIn),creationTime:Date.now()}}async function Xd(n,e){const r=(await e.json()).error;return hn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ST(n,{refreshToken:e}){const t=Zd(n);return t.append("Authorization",RT(e)),t}async function ef(n){const e=await n();return e.status>=500&&e.status<600?n():e}function CT(n){return Number(n.replace("s","000"))}function RT(n){return`${Kd} ${n}`}/**
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
 */async function PT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Jd(n),s=Zd(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:Kd,appId:n.appId,sdkVersion:Hd},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await ef(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Yd(d.authToken)}}else throw await Xd("Create Installation",u)}/**
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
 */function tf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function kT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const NT=/^[cdef][\w-]{21}$/,Fo="";function xT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=DT(n);return NT.test(t)?t:Fo}catch{return Fo}}function DT(n){return kT(n).substr(0,22)}/**
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
 */const nf=new Map;function rf(n,e){const t=xi(n);sf(t,e),VT(t,e)}function sf(n,e){const t=nf.get(n);if(t)for(const r of t)r(e)}function VT(n,e){const t=OT();t&&t.postMessage({key:n,fid:e}),LT()}let sn=null;function OT(){return!sn&&"BroadcastChannel"in self&&(sn=new BroadcastChannel("[Firebase] FID Change"),sn.onmessage=n=>{sf(n.data.key,n.data.fid)}),sn}function LT(){nf.size===0&&sn&&(sn.close(),sn=null)}/**
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
 */const MT="firebase-installations-database",jT=1,dn="firebase-installations-store";let lo=null;function xa(){return lo||(lo=Pu(MT,jT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dn)}}})),lo}async function oi(n,e){const t=xi(n),s=(await xa()).transaction(dn,"readwrite"),i=s.objectStore(dn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&rf(n,e.fid),e}async function of(n){const e=xi(n),r=(await xa()).transaction(dn,"readwrite");await r.objectStore(dn).delete(e),await r.done}async function Di(n,e){const t=xi(n),s=(await xa()).transaction(dn,"readwrite"),i=s.objectStore(dn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&rf(n,l.fid),l}/**
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
 */async function Da(n){let e;const t=await Di(n.appConfig,r=>{const s=FT(r),i=UT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Fo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function FT(n){const e=n||{fid:xT(),registrationStatus:0};return af(e)}function UT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(hn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qT(n)}:{installationEntry:e}}async function zT(n,e){try{const t=await PT(n,e);return oi(n.appConfig,t)}catch(t){throw Qd(t)&&t.customData.serverCode===409?await of(n.appConfig):await oi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function qT(n){let e=await su(n.appConfig);for(;e.registrationStatus===1;)await tf(100),e=await su(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Da(n);return r||t}return e}function su(n){return Di(n,e=>{if(!e)throw hn.create("installation-not-found");return af(e)})}function af(n){return BT(n)?{fid:n.fid,registrationStatus:0}:n}function BT(n){return n.registrationStatus===1&&n.registrationTime+Wd<Date.now()}/**
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
 */async function $T({appConfig:n,heartbeatServiceProvider:e},t){const r=GT(n,t),s=ST(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Hd,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await ef(()=>fetch(r,l));if(u.ok){const d=await u.json();return Yd(d)}else throw await Xd("Generate Auth Token",u)}function GT(n,{fid:e}){return`${Jd(n)}/${e}/authTokens:generate`}/**
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
 */async function Va(n,e=!1){let t;const r=await Di(n.appConfig,i=>{if(!cf(i))throw hn.create("not-registered");const a=i.authToken;if(!e&&KT(a))return i;if(a.requestStatus===1)return t=WT(n,e),i;{if(!navigator.onLine)throw hn.create("app-offline");const l=JT(i);return t=HT(n,l),l}});return t?await t:r.authToken}async function WT(n,e){let t=await iu(n.appConfig);for(;t.authToken.requestStatus===1;)await tf(100),t=await iu(n.appConfig);const r=t.authToken;return r.requestStatus===0?Va(n,e):r}function iu(n){return Di(n,e=>{if(!cf(e))throw hn.create("not-registered");const t=e.authToken;return YT(t)?{...e,authToken:{requestStatus:0}}:e})}async function HT(n,e){try{const t=await $T(n,e),r={...e,authToken:t};return await oi(n.appConfig,r),t}catch(t){if(Qd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await of(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await oi(n.appConfig,r)}throw t}}function cf(n){return n!==void 0&&n.registrationStatus===2}function KT(n){return n.requestStatus===2&&!QT(n)}function QT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vT}function JT(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function YT(n){return n.requestStatus===1&&n.requestTime+Wd<Date.now()}/**
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
 */async function XT(n){const e=n,{installationEntry:t,registrationPromise:r}=await Da(e);return r?r.catch(console.error):Va(e).catch(console.error),t.fid}/**
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
 */async function ZT(n,e=!1){const t=n;return await ev(t),(await Va(t,e)).token}async function ev(n){const{registrationPromise:e}=await Da(n);e&&await e}/**
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
 */function tv(n){if(!n||!n.options)throw uo("App Configuration");if(!n.name)throw uo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw uo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function uo(n){return hn.create("missing-app-config-values",{valueName:n})}/**
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
 */const lf="installations",nv="installations-internal",rv=n=>{const e=n.getProvider("app").getImmediate(),t=tv(e),r=mn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sv=n=>{const e=n.getProvider("app").getImmediate(),t=mn(e,lf).getImmediate();return{getId:()=>XT(t),getToken:s=>ZT(t,s)}};function iv(){lt(new Ze(lf,rv,"PUBLIC")),lt(new Ze(nv,sv,"PRIVATE"))}iv();He(Gd,Na);He(Gd,Na,"esm2020");/**
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
 */const ai="analytics",ov="firebase_id",av="origin",cv=60*1e3,lv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oa="https://www.googletagmanager.com/gtag/js";/**
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
 */const uv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new fn("analytics","Analytics",uv);/**
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
 */function hv(n){if(!n.startsWith(Oa)){const e=Be.create("invalid-gtag-resource",{gtagURL:n});return Ue.warn(e.message),""}return n}function uf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function dv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function fv(n,e){const t=dv("firebase-js-sdk-policy",{createScriptURL:hv}),r=document.createElement("script"),s=`${Oa}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function mv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function pv(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await uf(t)).find(d=>d.measurementId===s);u&&await e[u.appId]}}catch(l){Ue.error(l)}n("config",s,i)}async function gv(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await uf(t);for(const u of a){const d=l.find(g=>g.measurementId===u),p=d&&e[d.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ue.error(i)}}function _v(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await gv(n,e,t,l,u)}else if(i==="config"){const[l,u]=a;await pv(n,e,t,r,l,u)}else if(i==="consent"){const[l,u]=a;n("consent",l,u)}else if(i==="get"){const[l,u,d]=a;n("get",l,u,d)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){Ue.error(l)}}return s}function yv(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=_v(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Ev(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Oa)&&t.src.includes(n))return t;return null}/**
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
 */const Iv=30,Tv=1e3;class vv{constructor(e={},t=Tv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hf=new vv;function wv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Av(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:wv(t)},s=lv.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function bv(n,e=hf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Be.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Rv;return setTimeout(async()=>{l.abort()},cv),df({appId:r,apiKey:s,measurementId:i},a,l,e)}async function df(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=hf){var l;const{appId:i,measurementId:a}=n;try{await Sv(r,e)}catch(u){if(a)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await Av(n);return s.deleteThrottleMetadata(i),u}catch(u){const d=u;if(!Cv(d)){if(s.deleteThrottleMetadata(i),a)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw u}const p=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?Dc(t,s.intervalMillis,Iv):Dc(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return s.setThrottleMetadata(i,g),Ue.debug(`Calling attemptFetch again in ${p} millis`),df(n,g,r,s)}}function Sv(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Cv(n){if(!(n instanceof et)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pv(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function kv(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function Nv(){if(zo())try{await qo()}catch(n){return Ue.warn(Be.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ue.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xv(n,e,t,r,s,i,a){const l=bv(n);l.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Ue.error(T)),e.push(l);const u=Nv().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([l,u]);Ev(i)||fv(i,d.measurementId),s("js",new Date);const g=(a==null?void 0:a.config)??{};return g[av]="firebase",g.update=!0,p!=null&&(g[ov]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class Dv{constructor(e){this.app=e}_delete(){return delete Un[this.app.options.appId],Promise.resolve()}}let Un={},ou=[];const au={};let ho="dataLayer",Vv="gtag",cu,La,lu=!1;function Ov(){const n=[];if(Uo()&&n.push("This is a browser extension environment."),Su()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Be.create("invalid-analytics-context",{errorInfo:e});Ue.warn(t.message)}}function Lv(n,e,t){Ov();const r=n.options.appId;if(!r)throw Be.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Un[r]!=null)throw Be.create("already-exists",{id:r});if(!lu){mv(ho);const{wrappedGtag:i,gtagCore:a}=yv(Un,ou,au,ho,Vv);La=i,cu=a,lu=!0}return Un[r]=xv(n,ou,au,e,cu,ho,t),new Dv(n)}function Mv(n=$o()){n=Ne(n);const e=mn(n,ai);return e.isInitialized()?e.getImmediate():jv(n)}function jv(n,e={}){const t=mn(n,ai);if(t.isInitialized()){const s=t.getImmediate();if(jt(e,t.getOptions()))return s;throw Be.create("already-initialized")}return t.initialize({options:e})}async function Fv(){if(Uo()||!Su()||!zo())return!1;try{return await qo()}catch{return!1}}function Uv(n,e,t){n=Ne(n),kv(La,Un[n.app.options.appId],e,t).catch(r=>Ue.error(r))}function zv(n,e,t,r){n=Ne(n),Pv(La,Un[n.app.options.appId],e,t,r).catch(s=>Ue.error(s))}const uu="@firebase/analytics",hu="0.10.19";function qv(){lt(new Ze(ai,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Lv(r,s,t)},"PUBLIC")),lt(new Ze("analytics-internal",n,"PRIVATE")),He(uu,hu),He(uu,hu,"esm2020");function n(e){try{const t=e.getProvider(ai).getImmediate();return{logEvent:(r,s,i)=>zv(t,r,s,i),setUserProperties:(r,s)=>Uv(t,r,s)}}catch(t){throw Be.create("interop-component-reg-failed",{reason:t})}}}qv();const ff={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},Bv=!!ff.apiKey,Ma=ku(ff),Ht=Uy(Ma),Pn=Bv?ET(Ma):null;Fv().then(n=>{n&&Mv(Ma)});const $v=60*60*1e3;function ja(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:r}=JSON.parse(e);return Date.now()-r>$v?null:t}catch{return null}}function er(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function Gv(){const n=ja("books_old-testament");if(n)return n;try{const e=await hd(En(Ht,"books","old-testament"));if(e.exists()){const t=e.data().books;return er("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function Wv(){const n=ja("all_quizzes");if(n)return n;try{const e=await tE(Fy(Ht,"quizzes")),t=[];if(e.forEach(r=>t.push({id:r.id,...r.data()})),t.length>0)return er("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function du(n){const e=ja(`translations_${n}`);if(e)return e;try{const t=await hd(En(Ht,"translations",n));if(t.exists()){const r=t.data();return er(`translations_${n}`,r),r}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function mf(n){await Ci(En(Ht,"books","old-testament"),{books:n}),er("books_old-testament",n)}async function pf(n,e){await Ci(En(Ht,"quizzes",n),e),er(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function Hv(n,e){await Ci(En(Ht,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function Kv(n){await nE(En(Ht,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function ci(n,e){await Ci(En(Ht,"translations",n),e),er(`translations_${n}`,e)}const gf=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],li={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},Qv=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},fu={en:[{id:1,question:"What does the Greek word 'agape' (ἀγάπη) mean?",options:["Unconditional love","Friendship","Knowledge","Hope"],correctIndex:0,reference:"1 Corinthians 13:13"},{id:2,question:"What does 'logos' (λόγος) mean in John 1:1?",options:["Light","The Word","Spirit","Life"],correctIndex:1,reference:"John 1:1"},{id:3,question:"What does 'charis' (χάρις) mean?",options:["Faith","Peace","Grace","Mercy"],correctIndex:2,reference:"Ephesians 2:8"},{id:4,question:"What does 'pistis' (πίστις) mean?",options:["Faith","Power","Wisdom","Patience"],correctIndex:0,reference:"Hebrews 11:1"},{id:5,question:"What does 'eirene' (εἰρήνη) mean?",options:["Joy","Truth","Glory","Peace"],correctIndex:3,reference:"John 14:27"},{id:6,question:"What does 'metanoia' (μετάνοια) mean?",options:["Baptism","Repentance","Salvation","Prayer"],correctIndex:1,reference:"Acts 2:38"},{id:7,question:"What does 'sozo' (σῴζω) mean?",options:["To judge","To preach","To save/deliver","To baptize"],correctIndex:2,reference:"Romans 10:9"},{id:8,question:"What does 'pneuma' (πνεῦμα) mean?",options:["Spirit/breath","Soul","Body","Mind"],correctIndex:0,reference:"John 3:8"},{id:9,question:"What does 'ekklesia' (ἐκκλησία) mean?",options:["Temple","Kingdom","Assembly/Church","Synagogue"],correctIndex:2,reference:"Matthew 16:18"},{id:10,question:"What does 'doxa' (δόξα) mean?",options:["Doctrine","Glory","Praise","Blessing"],correctIndex:1,reference:"John 1:14"},{id:11,question:"What does 'euangelion' (εὐαγγέλιον) mean?",options:["Prophecy","Commandment","Testimony","Good news/Gospel"],correctIndex:3,reference:"Mark 1:1"},{id:12,question:"What does 'hamartia' (ἁμαρτία) mean?",options:["Sin","Death","Curse","Darkness"],correctIndex:0,reference:"Romans 3:23"},{id:13,question:"What does 'koinonia' (κοινωνία) mean?",options:["Kingdom","Covenant","Fellowship/Communion","Ministry"],correctIndex:2,reference:"Acts 2:42"},{id:14,question:"What does 'dikaiosyne' (δικαιοσύνη) mean?",options:["Holiness","Righteousness","Obedience","Truth"],correctIndex:1,reference:"Romans 1:17"},{id:15,question:"What does 'zoe' (ζωή) mean?",options:["Life","Light","Way","Truth"],correctIndex:0,reference:"John 14:6"},{id:16,question:"What does 'parakletos' (παράκλητος) mean?",options:["Prophet","Shepherd","King","Advocate/Helper"],correctIndex:3,reference:"John 14:26"},{id:17,question:"What does 'aletheia' (ἀλήθεια) mean?",options:["Truth","Wisdom","Light","Freedom"],correctIndex:0,reference:"John 8:32"},{id:18,question:"What does 'dunamis' (δύναμις) mean?",options:["Authority","Dominion","Power/Miracle","Throne"],correctIndex:2,reference:"Acts 1:8"},{id:19,question:"What does 'eleos' (ἔλεος) mean?",options:["Mercy","Grace","Compassion","Forgiveness"],correctIndex:0,reference:"Luke 1:50"},{id:20,question:"What does 'basileia' (βασιλεία) mean?",options:["Temple","Kingdom","Covenant","Throne"],correctIndex:1,reference:"Matthew 6:33"}],es:[{id:1,question:"¿Qué significa la palabra griega 'agape' (ἀγάπη)?",options:["Amor incondicional","Amistad","Conocimiento","Esperanza"],correctIndex:0,reference:"1 Corintios 13:13"},{id:2,question:"¿Qué significa 'logos' (λόγος) en Juan 1:1?",options:["Luz","El Verbo/La Palabra","Espíritu","Vida"],correctIndex:1,reference:"Juan 1:1"},{id:3,question:"¿Qué significa 'charis' (χάρις)?",options:["Fe","Paz","Gracia","Misericordia"],correctIndex:2,reference:"Efesios 2:8"},{id:4,question:"¿Qué significa 'pistis' (πίστις)?",options:["Fe","Poder","Sabiduría","Paciencia"],correctIndex:0,reference:"Hebreos 11:1"},{id:5,question:"¿Qué significa 'eirene' (εἰρήνη)?",options:["Gozo","Verdad","Gloria","Paz"],correctIndex:3,reference:"Juan 14:27"},{id:6,question:"¿Qué significa 'metanoia' (μετάνοια)?",options:["Bautismo","Arrepentimiento","Salvación","Oración"],correctIndex:1,reference:"Hechos 2:38"},{id:7,question:"¿Qué significa 'sozo' (σῴζω)?",options:["Juzgar","Predicar","Salvar/Liberar","Bautizar"],correctIndex:2,reference:"Romanos 10:9"},{id:8,question:"¿Qué significa 'pneuma' (πνεῦμα)?",options:["Espíritu/Aliento","Alma","Cuerpo","Mente"],correctIndex:0,reference:"Juan 3:8"},{id:9,question:"¿Qué significa 'ekklesia' (ἐκκλησία)?",options:["Templo","Reino","Asamblea/Iglesia","Sinagoga"],correctIndex:2,reference:"Mateo 16:18"},{id:10,question:"¿Qué significa 'doxa' (δόξα)?",options:["Doctrina","Gloria","Alabanza","Bendición"],correctIndex:1,reference:"Juan 1:14"},{id:11,question:"¿Qué significa 'euangelion' (εὐαγγέλιον)?",options:["Profecía","Mandamiento","Testimonio","Buenas nuevas/Evangelio"],correctIndex:3,reference:"Marcos 1:1"},{id:12,question:"¿Qué significa 'hamartia' (ἁμαρτία)?",options:["Pecado","Muerte","Maldición","Oscuridad"],correctIndex:0,reference:"Romanos 3:23"},{id:13,question:"¿Qué significa 'koinonia' (κοινωνία)?",options:["Reino","Pacto","Comunión/Fraternidad","Ministerio"],correctIndex:2,reference:"Hechos 2:42"},{id:14,question:"¿Qué significa 'dikaiosyne' (δικαιοσύνη)?",options:["Santidad","Justicia","Obediencia","Verdad"],correctIndex:1,reference:"Romanos 1:17"},{id:15,question:"¿Qué significa 'zoe' (ζωή)?",options:["Vida","Luz","Camino","Verdad"],correctIndex:0,reference:"Juan 14:6"},{id:16,question:"¿Qué significa 'parakletos' (παράκλητος)?",options:["Profeta","Pastor","Rey","Abogado/Consolador"],correctIndex:3,reference:"Juan 14:26"},{id:17,question:"¿Qué significa 'aletheia' (ἀλήθεια)?",options:["Verdad","Sabiduría","Luz","Libertad"],correctIndex:0,reference:"Juan 8:32"},{id:18,question:"¿Qué significa 'dunamis' (δύναμις)?",options:["Autoridad","Dominio","Poder/Milagro","Trono"],correctIndex:2,reference:"Hechos 1:8"},{id:19,question:"¿Qué significa 'eleos' (ἔλεος)?",options:["Misericordia","Gracia","Compasión","Perdón"],correctIndex:0,reference:"Lucas 1:50"},{id:20,question:"¿Qué significa 'basileia' (βασιλεία)?",options:["Templo","Reino","Pacto","Trono"],correctIndex:1,reference:"Mateo 6:33"}]},_f=O.createContext(null),Jv=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:li.en,es:li.es},{id:"greek-vocabulary",title:{en:"Greek Vocabulary",es:"Vocabulario Griego"},description:{en:"Learn key Greek words from the New Testament",es:"Aprende palabras clave en griego del Nuevo Testamento"},icon:"αβ",category:"knowledge",en:fu.en,es:fu.es}],Yv=({children:n})=>{const[e,t]=O.useState(gf),[r,s]=O.useState(Jv),[i,a]=O.useState(Fr),[l,u]=O.useState(!0),[d,p]=O.useState(null),g=O.useCallback(async()=>{u(!0),p(null);try{const[x,D,N,U]=await Promise.all([Gv(),Wv(),du("en"),du("es")]);x&&t(x),D&&D.length>0&&s(D),(N||U)&&a($=>({...$,...N?{en:N}:{},...U?{es:U}:{}}))}catch(x){console.warn("Failed to load Firestore data, using fallbacks:",x.message),p(x.message)}finally{u(!1)}},[]);O.useEffect(()=>{g()},[g]);const T=O.useCallback(()=>(Object.keys(localStorage).forEach(x=>{x.startsWith("firestore_")&&localStorage.removeItem(x)}),g()),[g]),S={books:e,quizzes:r,translations:i,loading:l,error:d,refreshData:T,setBooks:t,setQuizzes:s,setTranslations:a};return f.jsx(_f.Provider,{value:S,children:n})},vn=()=>{const n=O.useContext(_f);if(!n)throw new Error("useData must be used within a DataProvider");return n},yf=O.createContext(null),Xv=()=>{var t;const n=localStorage.getItem("language");if(n&&Fr[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&Fr[e]?e:"en"},Zv=({children:n})=>{const{translations:e}=vn(),[t,r]=O.useState(Xv);O.useEffect(()=>{document.documentElement.lang=t},[t]);const s=O.useCallback(p=>{e[p]&&(r(p),localStorage.setItem("language",p))},[e]),i=O.useCallback((p,g={})=>{const T=p.split(".");let S=e[t];for(const x of T)if(S&&typeof S=="object"&&x in S)S=S[x];else{S=e.en;for(const D of T)if(S&&typeof S=="object"&&D in S)S=S[D];else return p;break}return typeof S=="string"&&Object.keys(g).length>0?S.replace(/\{(\w+)\}/g,(x,D)=>g[D]!==void 0?g[D]:x):S||p},[t,e]),a=O.useCallback(p=>{var g,T;return((T=(g=e[t])==null?void 0:g.books)==null?void 0:T[p])||p},[t,e]),l=O.useCallback(p=>{var T;const g=((T=e[t])==null?void 0:T.scores)||e.en.scores;return p===100?g.perfect:p>=90?g.excellent:p>=80?g.great:p>=70?g.good:p>=60?g.notBad:p>=50?g.keepPracticing:g.tryAgain},[t,e]),u=O.useMemo(()=>Object.keys(e),[e]),d=O.useMemo(()=>({language:t,setLanguage:s,t:i,translateBook:a,getScoreMessage:l,availableLanguages:u}),[t,s,i,a,l,u]);return f.jsx(yf.Provider,{value:d,children:n})},tr=()=>{const n=O.useContext(yf);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},ew=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:r,onNavigateAdmin:s})=>{const{stats:i}=_u(),{t:a,language:l}=tr(),{quizzes:u}=vn();return f.jsx("div",{className:"home-container",children:f.jsxs("div",{className:"home-content",children:[f.jsx("header",{className:"home-header",children:f.jsxs("div",{className:"logo-container",children:[f.jsx("div",{className:"logo",children:f.jsx("span",{className:"logo-icon",children:"📖"})}),f.jsx("h1",{className:"app-title",children:a("appName")}),f.jsx("p",{className:"app-subtitle",children:a("appSubtitle")})]})}),f.jsxs(Fs,{className:"welcome-card",children:[f.jsx("h2",{className:"welcome-title",children:a("home.welcomeTitle")}),f.jsx("p",{className:"welcome-description",children:a("home.welcomeDescription")}),f.jsxs("div",{className:"quiz-info",children:[f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"📚"}),f.jsx("span",{className:"info-text",children:a("home.booksCount")})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"⏱️"}),f.jsx("span",{className:"info-text",children:a("home.unlimitedTime")})]})]}),f.jsx("h3",{className:"quiz-type-title",children:a("home.selectQuizType")}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:a("home.oldTestament")}),f.jsxs("div",{className:"quiz-types",children:[f.jsxs("button",{className:"quiz-type-card",onClick:n,children:[f.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.order.icon")}),f.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.order.title")}),f.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.order.description")})]}),f.jsxs("button",{className:"quiz-type-card",onClick:e,children:[f.jsx("span",{className:"quiz-type-icon",children:a("home.quizTypes.complete.icon")}),f.jsx("span",{className:"quiz-type-name",children:a("home.quizTypes.complete.title")}),f.jsx("span",{className:"quiz-type-desc",children:a("home.quizTypes.complete.description")})]})]})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:a("home.knowledge")}),f.jsx("div",{className:"quiz-types",children:u.map(d=>{var p,g,T,S;return f.jsxs("button",{className:"quiz-type-card",onClick:()=>{d.id==="genesis-covenants"?t():r&&r(d.id)},children:[f.jsx("span",{className:"quiz-type-icon",children:d.icon||"📝"}),f.jsx("span",{className:"quiz-type-name",children:((p=d.title)==null?void 0:p[l])||((g=d.title)==null?void 0:g.en)||d.id}),f.jsx("span",{className:"quiz-type-desc",children:((T=d.description)==null?void 0:T[l])||((S=d.description)==null?void 0:S.en)||""})]},d.id)})})]})]}),i.totalAttempts>0&&f.jsxs(Fs,{className:"stats-card",children:[f.jsx("h3",{className:"stats-title",children:a("home.yourProgress")}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-value",children:i.totalAttempts}),f.jsx("div",{className:"stat-label",children:a("home.attempts")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[i.bestScore,"%"]}),f.jsx("div",{className:"stat-label",children:a("home.bestScore")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[i.averageScore,"%"]}),f.jsx("div",{className:"stat-label",children:a("home.average")})]})]})]}),f.jsxs("footer",{className:"home-footer",children:[f.jsx("p",{className:"footer-text",children:a("home.footerText")}),f.jsx("button",{className:"admin-link",onClick:s,onContextMenu:d=>{d.preventDefault(),s==null||s()},children:"⚙"})]})]})})},tw=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},nw=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",Ef=O.createContext(),rw=({children:n})=>{const{books:e}=vn(),[t,r]=O.useState([]),[s,i]=O.useState([]),[a,l]=O.useState(!1),u=O.useCallback(()=>{r(tw([...e])),i([]),l(!0)},[e]),d=O.useCallback(N=>{i(U=>[...U,N])},[]),p=O.useCallback(()=>{i(N=>N.slice(0,-1))},[]),g=O.useCallback(()=>{i([])},[]),T=O.useCallback(()=>{let N=0;s.forEach((F,K)=>{e[K]===F&&N++});const U=e.length,$=Math.round(N/U*100);return{correct:N,total:U,percentage:$,selections:s}},[s,e]),S=O.useCallback(N=>s.includes(N),[s]),x=O.useCallback(N=>{const U=s.indexOf(N);return U===-1?null:U+1},[s]),D={shuffledBooks:t,selectedBooks:s,isInitialized:a,initializeQuiz:u,selectBook:d,undoLastSelection:p,resetSelections:g,calculateScore:T,isBookSelected:S,getSelectionIndex:x};return f.jsx(Ef.Provider,{value:D,children:n})},sw=()=>{const n=O.useContext(Ef);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},iw=({book:n,displayName:e,isSelected:t,selectionIndex:r,onClick:s})=>f.jsx("div",{className:`book-card ${t?"book-card-selected":""}`,onClick:s,role:"button",tabIndex:t?-1:0,onKeyPress:i=>{(i.key==="Enter"||i.key===" ")&&s()},"aria-pressed":t,children:f.jsxs("div",{className:"book-card-content",children:[f.jsx("span",{className:"book-name",children:e||n}),t&&f.jsx("div",{className:"selection-badge",children:r})]})}),Fa=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return f.jsx("div",{className:"progress-bar-container",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},oe=({onClick:n,variant:e="primary",size:t="medium",disabled:r=!1,className:s="",children:i,...a})=>{const l=`button button-${e} button-${t} ${s}`;return f.jsx("button",{className:l,onClick:n,disabled:r,...a,children:i})},ow=({onComplete:n})=>{const{shuffledBooks:e,selectedBooks:t,isInitialized:r,initializeQuiz:s,selectBook:i,undoLastSelection:a,resetSelections:l,calculateScore:u,isBookSelected:d,getSelectionIndex:p}=sw(),{t:g,translateBook:T}=tr(),[S,x]=O.useState(!1);O.useEffect(()=>{r||s()},[r,s]);const D=L=>{d(L)||i(L)},N=()=>{t.length===e.length&&x(!0)},U=()=>{const L=u();n(L)},$=()=>{x(!1)},F=e.length>0?t.length/e.length*100:0,K=t.length===e.length;return f.jsxs("div",{className:"quiz-container",children:[f.jsxs("header",{className:"quiz-header",children:[f.jsx("h1",{className:"quiz-title",children:g("quiz.title")}),f.jsx("p",{className:"quiz-instruction",children:g("quiz.instruction")})]}),f.jsxs("div",{className:"quiz-progress",children:[f.jsx(Fa,{progress:F}),f.jsxs("div",{className:"progress-text",children:[t.length," / ",e.length," ",g("quiz.selected")]})]}),f.jsx("div",{className:"quiz-content",children:f.jsx("div",{className:"books-grid",children:e.map((L,z)=>f.jsx(iw,{book:L,displayName:T(L),isSelected:d(L),selectionIndex:p(L),onClick:()=>D(L)},`${L}-${z}`))})}),f.jsxs("div",{className:"quiz-actions",children:[f.jsx(oe,{onClick:a,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.undoLast")}),f.jsx(oe,{onClick:l,variant:"secondary",disabled:t.length===0,className:"action-button",children:g("quiz.resetAll")}),f.jsx(oe,{onClick:N,variant:"primary",disabled:!K,className:"action-button submit-button",children:g("quiz.submitAnswer")})]}),S&&f.jsx("div",{className:"confirmation-overlay",onClick:$,children:f.jsxs("div",{className:"confirmation-modal",onClick:L=>L.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:g("quiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:g("quiz.confirmText",{count:e.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(oe,{onClick:$,variant:"secondary",children:g("quiz.goBack")}),f.jsx(oe,{onClick:U,variant:"primary",children:g("quiz.yesSubmit")})]})]})})]})},aw=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const r=t.split(" ");if(r.length>1)return`${r[0]} ${r[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},fo=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),cw=({onComplete:n})=>{const{t:e,translateBook:t,language:r}=tr(),{books:s}=vn(),[i,a]=O.useState(0),[l,u]=O.useState(""),[d,p]=O.useState(Array(s.length).fill(null)),[g,T]=O.useState(!1),[S,x]=O.useState(null),[D,N]=O.useState(!1),U=O.useRef(null),$=s[i],F=t($),K=aw($,F);O.useEffect(()=>{U.current&&!g&&U.current.focus()},[i,g]);const L=()=>{const X=fo(l),ge=fo(F),ie=fo($),de=X===ge||X===ie;x(de),T(!0);const De=[...d];De[i]={input:l,correct:de,correctAnswer:F},p(De)},z=()=>{i<s.length-1?(a(i+1),u(""),T(!1),x(null)):E()},I=()=>{const X=[...d];X[i]={input:"",correct:!1,correctAnswer:F,skipped:!0},p(X),i<s.length-1?(a(i+1),u(""),T(!1),x(null)):E()},_=X=>{X.key==="Enter"&&(g?z():l.trim()&&L())},E=()=>{N(!0)},w=()=>{const X=d.filter(de=>de==null?void 0:de.correct).length,ge=s.length,ie=Math.round(X/ge*100);n({correct:X,total:ge,percentage:ie,selections:d.map((de,De)=>(de==null?void 0:de.input)||""),answers:d,quizType:"complete"})},v=()=>{N(!1)},A=d.filter(X=>X!==null).length,y=A/s.length*100;return f.jsxs("div",{className:"complete-quiz-container",children:[f.jsxs("header",{className:"complete-quiz-header",children:[f.jsx("h1",{className:"complete-quiz-title",children:e("completeQuiz.title")}),f.jsx("p",{className:"complete-quiz-instruction",children:e("completeQuiz.instruction")})]}),f.jsxs("div",{className:"complete-quiz-progress",children:[f.jsx(Fa,{progress:y}),f.jsx("div",{className:"progress-text",children:e("completeQuiz.progress",{completed:A,total:s.length})})]}),f.jsxs("div",{className:"complete-quiz-content",children:[f.jsx("div",{className:"book-number",children:i+1}),f.jsxs("div",{className:"hint-card",children:[f.jsx("div",{className:"hint-text",children:K}),f.jsx("div",{className:"hint-label",children:e("completeQuiz.hint",{hint:`${F.length} ${r==="es"?"letras":"letters"}`})})]}),g?f.jsxs("div",{className:`result-section ${S?"correct":"incorrect"}`,children:[f.jsx("div",{className:"result-icon",children:S?"✓":"✗"}),f.jsx("div",{className:"result-message",children:e(S?"completeQuiz.correct":"completeQuiz.incorrect")}),!S&&f.jsx("div",{className:"correct-answer",children:e("completeQuiz.correctAnswer",{answer:F})}),f.jsx(oe,{onClick:z,variant:"primary",className:"next-button",children:i<s.length-1?e("completeQuiz.next"):e("completeQuiz.submitAll")})]}):f.jsxs("div",{className:"input-section",children:[f.jsx("input",{ref:U,type:"text",className:"book-input",value:l,onChange:X=>u(X.target.value),onKeyPress:_,placeholder:e("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),f.jsxs("div",{className:"input-actions",children:[f.jsx(oe,{onClick:I,variant:"secondary",className:"skip-button",children:e("completeQuiz.skip")}),f.jsx(oe,{onClick:L,variant:"primary",disabled:!l.trim(),className:"check-button",children:e("completeQuiz.check")})]})]})]}),f.jsx("div",{className:"books-overview",children:s.map((X,ge)=>{const ie=d[ge];let de="pending";return ie?de=ie.correct?"correct":"incorrect":ge===i&&(de="current"),f.jsx("div",{className:`book-dot ${de}`,title:`${ge+1}. ${t(s[ge])}`},ge)})}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:v,children:f.jsxs("div",{className:"confirmation-modal",onClick:X=>X.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:e("completeQuiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:e("completeQuiz.confirmText",{completed:A,total:s.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(oe,{onClick:v,variant:"secondary",children:e("quiz.goBack")}),f.jsx(oe,{onClick:w,variant:"primary",children:e("quiz.yesSubmit")})]})]})})]})},lw=({onComplete:n,quizId:e="genesis-covenants"})=>{const{t,language:r}=tr(),{quizzes:s}=vn(),[i,a]=O.useState([]),[l,u]=O.useState(0),[d,p]=O.useState(null),[g,T]=O.useState(!1),[S,x]=O.useState([]);O.useEffect(()=>{const I=s.find(E=>E.id===e)||s[0];if(!I)return;const _=I[r]||I.en||[];a(Qv(_)),x([]),u(0),p(null),T(!1)},[r,e,s]);const D=i[l],N=i.length>0?(l+1)/i.length*100:0,U=z=>{g||p(z)},$=()=>{if(d===null)return;const z=d===D.correctIndex,I=[...S];I[l]={questionId:D.id,selectedIndex:d,correctIndex:D.correctIndex,correct:z},x(I),T(!0)},F=()=>{l<i.length-1?(u(l+1),p(null),T(!1)):K()},K=()=>{const z=S.filter(E=>E==null?void 0:E.correct).length,I=i.length,_=Math.round(z/I*100);n({correct:z,total:I,percentage:_,answers:S,questions:i,quizType:"covenants"})};if(!D)return f.jsx("div",{className:"mc-quiz-container",children:f.jsx("div",{className:"mc-loading",children:"Loading..."})});const L=d===D.correctIndex;return f.jsxs("div",{className:"mc-quiz-container",children:[f.jsxs("header",{className:"mc-quiz-header",children:[f.jsx("h1",{className:"mc-quiz-title",children:t("multipleChoice.title")}),f.jsx("p",{className:"mc-quiz-instruction",children:t("multipleChoice.instruction")})]}),f.jsxs("div",{className:"mc-quiz-progress",children:[f.jsx(Fa,{progress:N}),f.jsx("div",{className:"mc-progress-text",children:t("multipleChoice.question",{current:l+1,total:i.length})})]}),f.jsxs("div",{className:"mc-quiz-content",children:[f.jsxs("div",{className:"mc-question-card",children:[f.jsx("div",{className:"mc-question-text",children:D.question}),f.jsx("div",{className:"mc-options",children:D.options.map((z,I)=>{let _="mc-option";return g?I===D.correctIndex?_+=" correct":I===d&&!L&&(_+=" incorrect"):I===d&&(_+=" selected"),f.jsxs("button",{className:_,onClick:()=>U(I),disabled:g,children:[f.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+I)}),f.jsx("span",{className:"mc-option-text",children:z}),g&&I===D.correctIndex&&f.jsx("span",{className:"mc-option-icon correct",children:"✓"}),g&&I===d&&!L&&f.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},I)})}),g&&f.jsxs("div",{className:`mc-result ${L?"correct":"incorrect"}`,children:[f.jsx("div",{className:"mc-result-message",children:t(L?"multipleChoice.correct":"multipleChoice.incorrect")}),!L&&f.jsxs("div",{className:"mc-correct-answer",children:[t("multipleChoice.correctAnswerWas")," ",D.options[D.correctIndex]]}),f.jsxs("div",{className:"mc-reference",children:[t("multipleChoice.reference")," ",D.reference]})]})]}),f.jsx("div",{className:"mc-quiz-actions",children:g?f.jsx(oe,{onClick:F,variant:"primary",className:"mc-action-button",children:l<i.length-1?t("multipleChoice.next"):t("multipleChoice.finish")}):f.jsx(oe,{onClick:$,variant:"primary",disabled:d===null,className:"mc-action-button",children:t("completeQuiz.check")})})]}),f.jsx("div",{className:"mc-dots-overview",children:i.map((z,I)=>{const _=S[I];let E="pending";return _?E=_.correct?"correct":"incorrect":I===l&&(E="current"),f.jsx("div",{className:`mc-dot ${E}`},I)})})]})},uw=({score:n,onRetry:e,onHome:t})=>{const{updateStats:r}=_u(),{t:s,translateBook:i,getScoreMessage:a}=tr(),{books:l}=vn();if(O.useEffect(()=>{n&&r(n)},[n,r]),!n)return f.jsxs("div",{className:"results-container",children:[f.jsx("p",{children:s("results.noResults")}),f.jsx(oe,{onClick:t,children:s("results.goHome")})]});const{correct:u,total:d,percentage:p,selections:g,answers:T,questions:S,quizType:x}=n,D=a(p),N=nw(p),U=x==="complete",$=x==="covenants";return f.jsx("div",{className:"results-container",children:f.jsxs("div",{className:"results-content",children:[f.jsx("header",{className:"results-header",children:f.jsx("h1",{className:"results-title",children:s("results.title")})}),f.jsxs(Fs,{className:"score-card",children:[f.jsxs("div",{className:"score-display",style:{borderColor:N},children:[f.jsxs("div",{className:"score-percentage",style:{color:N},children:[p,"%"]}),f.jsx("div",{className:"score-message",style:{color:N},children:D}),f.jsx("div",{className:"score-details",children:s("results.outOf",{correct:u,total:d})})]}),f.jsxs("div",{className:"score-breakdown",children:[f.jsxs("div",{className:"breakdown-item correct",children:[f.jsx("span",{className:"breakdown-icon",children:"✓"}),f.jsxs("span",{className:"breakdown-text",children:[u," ",s("results.correct")]})]}),f.jsxs("div",{className:"breakdown-item incorrect",children:[f.jsx("span",{className:"breakdown-icon",children:"✗"}),f.jsxs("span",{className:"breakdown-text",children:[d-u," ",s("results.incorrect")]})]})]})]}),f.jsxs(Fs,{className:"details-card",children:[f.jsx("h2",{className:"details-title",children:s("results.yourAnswers")}),f.jsx("div",{className:"answers-list",children:$?T==null?void 0:T.map((F,K)=>{var E,w;const L=S==null?void 0:S[K],z=F==null?void 0:F.correct,I=((E=L==null?void 0:L.options)==null?void 0:E[F==null?void 0:F.selectedIndex])||s("multipleChoice.skipped"),_=(w=L==null?void 0:L.options)==null?void 0:w[L==null?void 0:L.correctIndex];return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsx("div",{className:"answer-question",children:L==null?void 0:L.question}),f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:I})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:_})]}),f.jsx("div",{className:"answer-reference",children:L==null?void 0:L.reference})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)}):U?T==null?void 0:T.map((F,K)=>{const L=l[K],z=F==null?void 0:F.correct,I=(F==null?void 0:F.input)||"-";return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:I})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(L)})]})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)}):g==null?void 0:g.map((F,K)=>{const L=l[K],z=F===L;return f.jsxs("div",{className:`answer-item ${z?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:K+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:i(F)})]}),!z&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:s("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(L)})]})]}),f.jsx("div",{className:"answer-status",children:z?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},K)})})]}),f.jsxs("div",{className:"results-actions",children:[f.jsx(oe,{onClick:t,variant:"secondary",size:"large",children:s("results.home")}),f.jsx(oe,{onClick:e,variant:"primary",size:"large",children:s("results.tryAgain")})]})]})})},If=O.createContext(null),hw=new ft,dw=({children:n})=>{const[e,t]=O.useState(null),[r,s]=O.useState(!!Pn);O.useEffect(()=>Pn?aI(Pn,d=>{t(d),s(!1)}):void 0,[]);const i=(u,d)=>sI(Pn,u,d),a=()=>RI(Pn,hw),l=()=>cI(Pn);return f.jsx(If.Provider,{value:{user:e,loading:r,signInWithEmail:i,signInWithGoogle:a,signOut:l},children:n})},fw=()=>{const n=O.useContext(If);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n};async function mw(){const n={books:!1,quizzes:!1,translations:!1};try{await mf(gf),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await pf("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:li.en,es:li.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await ci("en",Fr.en),await ci("es",Fr.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const pw=({onBack:n})=>{var Tt,lr,ur;const{books:e,quizzes:t,translations:r,refreshData:s}=vn(),{user:i,loading:a,signInWithEmail:l,signInWithGoogle:u,signOut:d}=fw(),[p,g]=O.useState(""),[T,S]=O.useState(""),[x,D]=O.useState(""),[N,U]=O.useState("books"),[$,F]=O.useState(""),[K,L]=O.useState(!1),[z,I]=O.useState([]),[_,E]=O.useState(""),[w,v]=O.useState(null),[A,y]=O.useState(null),[X,ge]=O.useState(!1),[ie,de]=O.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[De,Kt]=O.useState("en"),[nr,rr]=O.useState({}),[dt,sr]=O.useState("");O.useEffect(()=>{I([...e])},[e]),O.useEffect(()=>{r[De]&&rr(JSON.parse(JSON.stringify(r[De])))},[De,r]);const wn=async R=>{R.preventDefault(),D("");try{await l(p,T)}catch(q){D(q.code==="auth/invalid-credential"?"Invalid email or password":q.message)}},ir=async()=>{D("");try{await u()}catch(R){R.code!=="auth/popup-closed-by-user"&&D(R.message)}},be=R=>{F(R),setTimeout(()=>F(""),3e3)},or=async()=>{L(!0);try{await mf(z),await s(),be("Books saved successfully!")}catch(R){be("Error saving books: "+R.message)}L(!1)},An=()=>{_.trim()&&!z.includes(_.trim())&&(I([...z,_.trim()]),E(""))},is=R=>{I(z.filter((q,J)=>J!==R))},os=(R,q)=>{const J=[...z],ae=R+q;ae<0||ae>=J.length||([J[R],J[ae]]=[J[ae],J[R]],I(J))},Vi=R=>{const q=t.find(J=>J.id===R);q&&(v(R),y(JSON.parse(JSON.stringify(q))))},as=async()=>{if(!(!A||!w)){L(!0);try{const{id:R,...q}=A;await pf(w,q),await s(),be("Quiz saved successfully!")}catch(R){be("Error saving quiz: "+R.message)}L(!1)}},ar=async()=>{if(ie.id.trim()){L(!0);try{const R={title:{en:ie.titleEn,es:ie.titleEs},description:{en:ie.descEn,es:ie.descEs},icon:ie.icon||"📝",category:ie.category,en:[],es:[]};await Hv(ie.id.trim(),R),await s(),ge(!1),de({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),be("Quiz created successfully!")}catch(R){be("Error creating quiz: "+R.message)}L(!1)}},cs=async R=>{if(window.confirm(`Delete quiz "${R}"?`)){L(!0);try{await Kv(R),await s(),w===R&&(v(null),y(null)),be("Quiz deleted!")}catch(q){be("Error deleting quiz: "+q.message)}L(!1)}},Oi=R=>{var J;if(!A)return;const q={id:(((J=A[R])==null?void 0:J.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};y({...A,[R]:[...A[R]||[],q]})},Qt=(R,q,J,ae)=>{const ne={...A};ne[R]=[...ne[R]],ne[R][q]={...ne[R][q],[J]:ae},y(ne)},cr=(R,q,J,ae)=>{const ne={...A};ne[R]=[...ne[R]];const me={...ne[R][q]};me.options=[...me.options],me.options[J]=ae,ne[R][q]=me,y(ne)},ls=(R,q)=>{const J={...A};J[R]=J[R].filter((ae,ne)=>ne!==q),y(J)},ye=(R,q="")=>{const J={};for(const ae of Object.keys(R)){const ne=q?`${q}.${ae}`:ae;typeof R[ae]=="object"&&R[ae]!==null&&!Array.isArray(R[ae])?Object.assign(J,ye(R[ae],ne)):J[ne]=R[ae]}return J},Re=R=>{const q={};for(const[J,ae]of Object.entries(R)){const ne=J.split(".");let me=q;for(let je=0;je<ne.length-1;je++)ne[je]in me||(me[ne[je]]={}),me=me[ne[je]];me[ne[ne.length-1]]=ae}return q},bn=async()=>{L(!0);try{await ci(De,nr),await s(),be(`Translations (${De}) saved!`)}catch(R){be("Error saving translations: "+R.message)}L(!1)},us=(R,q)=>{const J=ye(nr);J[R]=q,rr(Re(J))},hs=async()=>{if(!(!dt.trim()||r[dt.trim()])){L(!0);try{const R=JSON.parse(JSON.stringify(r.en||{}));await ci(dt.trim(),R),await s(),Kt(dt.trim()),sr(""),be(`Language "${dt.trim()}" added!`)}catch(R){be("Error adding language: "+R.message)}L(!1)}},Li=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){L(!0);try{const R=await mw();await s(),be(`Seed complete - Books: ${R.books?"OK":"FAIL"}, Quizzes: ${R.quizzes?"OK":"FAIL"}, Translations: ${R.translations?"OK":"FAIL"}`)}catch(R){be("Seed error: "+R.message)}L(!1)}};return a?f.jsx("div",{className:"admin-container",children:f.jsx("div",{className:"admin-login",children:f.jsx("p",{children:"Loading..."})})}):i?f.jsxs("div",{className:"admin-container",children:[f.jsxs("header",{className:"admin-header",children:[f.jsx("h1",{children:"Admin Panel"}),f.jsxs("div",{className:"admin-header-actions",children:[f.jsx("span",{className:"admin-user-info",children:i.email}),f.jsx(oe,{onClick:Li,variant:"secondary",disabled:K,children:"Seed Data"}),f.jsx(oe,{onClick:()=>d(),variant:"secondary",children:"Sign Out"}),f.jsx(oe,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),$&&f.jsx("div",{className:"admin-status-bar",children:$}),f.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(R=>f.jsx("button",{className:`admin-tab ${N===R?"active":""}`,onClick:()=>U(R),children:R.charAt(0).toUpperCase()+R.slice(1)},R))}),f.jsxs("div",{className:"admin-content",children:[N==="books"&&f.jsxs("div",{className:"admin-section",children:[f.jsxs("h2",{children:["Old Testament Books (",z.length,")"]}),f.jsx("div",{className:"admin-books-list",children:z.map((R,q)=>f.jsxs("div",{className:"admin-book-item",children:[f.jsx("span",{className:"admin-book-number",children:q+1}),f.jsx("span",{className:"admin-book-name",children:R}),f.jsxs("div",{className:"admin-book-actions",children:[f.jsx("button",{onClick:()=>os(q,-1),disabled:q===0,children:"↑"}),f.jsx("button",{onClick:()=>os(q,1),disabled:q===z.length-1,children:"↓"}),f.jsx("button",{onClick:()=>is(q),className:"admin-delete-btn",children:"✕"})]})]},q))}),f.jsxs("div",{className:"admin-add-row",children:[f.jsx("input",{type:"text",value:_,onChange:R=>E(R.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:R=>R.key==="Enter"&&An()}),f.jsx(oe,{onClick:An,variant:"secondary",children:"Add"})]}),f.jsx(oe,{onClick:or,variant:"primary",disabled:K,children:K?"Saving...":"Save Books"})]}),N==="quizzes"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Quizzes"}),f.jsx("div",{className:"admin-quiz-list",children:t.map(R=>{var q,J;return f.jsxs("div",{className:"admin-quiz-item",children:[f.jsxs("button",{className:`admin-quiz-select ${w===R.id?"active":""}`,onClick:()=>Vi(R.id),children:[f.jsx("span",{children:R.icon||"📝"}),f.jsx("span",{children:((q=R.title)==null?void 0:q.en)||R.id}),f.jsxs("span",{className:"admin-quiz-count",children:[((J=R.en)==null?void 0:J.length)||0," Q"]})]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>cs(R.id),children:"✕"})]},R.id)})}),f.jsx(oe,{onClick:()=>ge(!X),variant:"secondary",children:X?"Cancel":"+ New Quiz"}),X&&f.jsxs("div",{className:"admin-new-quiz-form",children:[f.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:ie.id,onChange:R=>de({...ie,id:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:ie.titleEn,onChange:R=>de({...ie,titleEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:ie.titleEs,onChange:R=>de({...ie,titleEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:ie.descEn,onChange:R=>de({...ie,descEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:ie.descEs,onChange:R=>de({...ie,descEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:ie.icon,onChange:R=>de({...ie,icon:R.target.value})}),f.jsx(oe,{onClick:ar,variant:"primary",disabled:K,children:"Create Quiz"})]}),A&&w&&f.jsxs("div",{className:"admin-quiz-editor",children:[f.jsxs("h3",{children:["Editing: ",((Tt=A.title)==null?void 0:Tt.en)||w]}),f.jsxs("div",{className:"admin-quiz-meta",children:[f.jsxs("label",{children:["Title (EN):",f.jsx("input",{className:"admin-input",value:((lr=A.title)==null?void 0:lr.en)||"",onChange:R=>y({...A,title:{...A.title,en:R.target.value}})})]}),f.jsxs("label",{children:["Title (ES):",f.jsx("input",{className:"admin-input",value:((ur=A.title)==null?void 0:ur.es)||"",onChange:R=>y({...A,title:{...A.title,es:R.target.value}})})]}),f.jsxs("label",{children:["Icon:",f.jsx("input",{className:"admin-input",value:A.icon||"",onChange:R=>y({...A,icon:R.target.value})})]})]}),["en","es"].map(R=>{var q,J;return f.jsxs("div",{className:"admin-questions-section",children:[f.jsxs("h4",{children:["Questions (",R.toUpperCase(),") - ",((q=A[R])==null?void 0:q.length)||0]}),(J=A[R])==null?void 0:J.map((ae,ne)=>f.jsxs("div",{className:"admin-question-card",children:[f.jsxs("div",{className:"admin-question-header",children:[f.jsxs("span",{children:["Q",ne+1]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>ls(R,ne),children:"✕"})]}),f.jsx("textarea",{className:"admin-textarea",value:ae.question,onChange:me=>Qt(R,ne,"question",me.target.value),placeholder:"Question text"}),ae.options.map((me,je)=>f.jsxs("div",{className:"admin-option-row",children:[f.jsx("input",{type:"radio",name:`correct-${R}-${ne}`,checked:ae.correctIndex===je,onChange:()=>Qt(R,ne,"correctIndex",je)}),f.jsx("input",{className:"admin-input",value:me,onChange:hr=>cr(R,ne,je,hr.target.value),placeholder:`Option ${String.fromCharCode(65+je)}`})]},je)),f.jsx("input",{className:"admin-input",value:ae.reference||"",onChange:me=>Qt(R,ne,"reference",me.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},ne)),f.jsxs(oe,{onClick:()=>Oi(R),variant:"secondary",children:["+ Add Question (",R.toUpperCase(),")"]})]},R)}),f.jsx(oe,{onClick:as,variant:"primary",disabled:K,children:K?"Saving...":"Save Quiz"})]})]}),N==="translations"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Translations"}),f.jsx("div",{className:"admin-lang-selector",children:Object.keys(r).map(R=>f.jsx("button",{className:`admin-tab ${De===R?"active":""}`,onClick:()=>Kt(R),children:R.toUpperCase()},R))}),f.jsxs("div",{className:"admin-add-lang",children:[f.jsx("input",{className:"admin-input",value:dt,onChange:R=>sr(R.target.value),placeholder:"New language code (e.g., fr)"}),f.jsx(oe,{onClick:hs,variant:"secondary",disabled:K,children:"Add Language"})]}),f.jsx("div",{className:"admin-translations-editor",children:Object.entries(ye(nr)).map(([R,q])=>f.jsxs("div",{className:"admin-translation-row",children:[f.jsx("label",{className:"admin-translation-key",children:R}),typeof q=="string"&&q.length>60?f.jsx("textarea",{className:"admin-textarea",value:q,onChange:J=>us(R,J.target.value)}):f.jsx("input",{className:"admin-input",value:typeof q=="string"?q:JSON.stringify(q),onChange:J=>us(R,J.target.value)})]},R))}),f.jsx(oe,{onClick:bn,variant:"primary",disabled:K,children:K?"Saving...":`Save Translations (${De.toUpperCase()})`})]})]})]}):f.jsx("div",{className:"admin-container",children:f.jsxs("div",{className:"admin-login",children:[f.jsx("h2",{children:"Admin Access"}),f.jsxs("form",{onSubmit:wn,children:[f.jsx("input",{type:"email",value:p,onChange:R=>g(R.target.value),placeholder:"Email",className:"admin-input",autoFocus:!0}),f.jsx("input",{type:"password",value:T,onChange:R=>S(R.target.value),placeholder:"Password",className:"admin-input"}),f.jsx(oe,{type:"submit",variant:"primary",children:"Sign In"})]}),f.jsx("div",{className:"admin-divider",children:f.jsx("span",{children:"or"})}),f.jsxs("button",{className:"admin-google-btn",onClick:ir,children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),f.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),f.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),f.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),x&&f.jsx("p",{className:"admin-status error",children:x}),f.jsx(oe,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})},gw=()=>{const{language:n,setLanguage:e,t}=tr();return f.jsxs("div",{className:"language-selector",children:[f.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),f.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})};function _w(){const[n,e]=O.useState("home"),[t,r]=O.useState(null),[s,i]=O.useState("order"),[a,l]=O.useState("genesis-covenants"),u=()=>{i("order"),e("quiz"),r(null)},d=()=>{i("complete"),e("completeQuiz"),r(null)},p=()=>{i("covenants"),l("genesis-covenants"),e("covenantsQuiz"),r(null)},g=N=>{i("covenants"),l(N),e("covenantsQuiz"),r(null)},T=N=>{r({...N,quizType:N.quizType||s}),e("results")},S=()=>{e("home"),r(null)},x=()=>{e("admin")},D=()=>{s==="complete"?d():s==="covenants"?g(a):u()};return f.jsx(dw,{children:f.jsx(Yv,{children:f.jsx(Zv,{children:f.jsx(rw,{children:f.jsxs("div",{className:"app",children:[f.jsx("div",{className:"app-language-selector",children:f.jsx(gw,{})}),n==="home"&&f.jsx(ew,{onStartOrder:u,onStartComplete:d,onStartCovenants:p,onStartQuiz:g,onNavigateAdmin:x}),n==="quiz"&&f.jsx(ow,{onComplete:T}),n==="completeQuiz"&&f.jsx(cw,{onComplete:T}),n==="covenantsQuiz"&&f.jsx(lw,{onComplete:T,quizId:a}),n==="results"&&f.jsx(uw,{score:t,onRetry:D,onHome:S}),n==="admin"&&f.jsx(pw,{onBack:S})]})})})})})}const yw="modulepreload",Ew=function(n){return"/ITIApp/"+n},mu={},Iw=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=Ew(u),u in mu)return;mu[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":yw,d||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((T,S)=>{g.addEventListener("load",T),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function Tw(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:a}=n;let l,u;const d=async(g=!0)=>{await u};async function p(){if("serviceWorker"in navigator){if(l=await Iw(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(g=>{a==null||a(g)}),!l)return;l.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),l.addEventListener("installed",g=>{g.isUpdate||r==null||r()}),l.register({immediate:e}).then(g=>{i?i("/ITIApp/sw.js",g):s==null||s(g)}).catch(g=>{a==null||a(g)})}}return u=p(),d}const vw=Tw({onNeedRefresh(){confirm("New content available. Reload?")&&vw(!0)},onOfflineReady(){console.log("App ready to work offline")}});mo.createRoot(document.getElementById("root")).render(f.jsx($f.StrictMode,{children:f.jsx(_w,{})}));
