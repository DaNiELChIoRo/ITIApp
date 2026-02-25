import{r as N,a as Gf,R as Qf}from"./react-vendor-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var yu={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=N,Jf=Symbol.for("react.element"),Yf=Symbol.for("react.fragment"),Xf=Object.prototype.hasOwnProperty,Zf=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,em={key:!0,ref:!0,__self:!0,__source:!0};function Iu(n,e,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)Xf.call(e,s)&&!em.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Jf,type:n,key:i,ref:a,props:r,_owner:Zf.current}}hi.Fragment=Yf;hi.jsx=Iu;hi.jsxs=Iu;yu.exports=hi;var f=yu.exports,po={},kc=Gf;po.createRoot=kc.createRoot,po.hydrateRoot=kc.hydrateRoot;const qr=({children:n,className:e="",...t})=>f.jsx("div",{className:`card ${e}`,...t,children:n}),Eu=(n,e)=>{const[t,s]=N.useState(()=>{try{const i=window.localStorage.getItem(n);return i?JSON.parse(i):e}catch(i){return console.error(`Error loading localStorage key "${n}":`,i),e}});return[t,i=>{try{const a=i instanceof Function?i(t):i;s(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},wu=()=>{const[n,e]=Eu("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=N.useCallback(r=>{e(i=>{const a=i.totalAttempts+1,c=i.totalCorrect+r.correct,u=Math.round(c/(a*r.total)*100);return{totalAttempts:a,bestScore:Math.max(i.bestScore,r.percentage),averageScore:u,totalCorrect:c,lastAttemptDate:new Date().toISOString()}})},[e]),s=N.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:s}},Fs={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",exit:"Exit",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge",study:"Study",studyTypes:{greekFlashCards:{title:"Greek Flashcards",description:"Study New Testament Greek vocabulary with flip cards"},hebrewFlashCards:{title:"Hebrew Flashcards",description:"Study Old Testament Hebrew vocabulary with flip cards"}}},flashcards:{title:"Flashcards",tapToFlip:"Tap to flip",next:"Next",previous:"Previous",shuffle:"Shuffle",backToHome:"Back to Home",showAll:"Show All",hideAll:"Hide All",learned:"learned",knowIt:"Know it",all:"All",notLearned:"Not learned",resetProgress:"Reset Progress"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit",searchPlaceholder:"Search book..."},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",exit:"Salir",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento",study:"Estudio",studyTypes:{greekFlashCards:{title:"Tarjetas de Griego",description:"Estudia vocabulario griego del Nuevo Testamento con tarjetas"},hebrewFlashCards:{title:"Tarjetas de Hebreo",description:"Estudia vocabulario hebreo del Antiguo Testamento con tarjetas"}}},flashcards:{title:"Tarjetas",tapToFlip:"Toca para voltear",next:"Siguiente",previous:"Anterior",shuffle:"Mezclar",backToHome:"Volver al Inicio",showAll:"Mostrar Todo",hideAll:"Ocultar Todo",learned:"aprendidas",knowIt:"La sé",all:"Todas",notLearned:"No aprendidas",resetProgress:"Reiniciar Progreso"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar",searchPlaceholder:"Buscar libro..."},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},tm=()=>{};var xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},nm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),s.push(t[m],t[g],t[E],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||g==null)throw new sm;const E=i<<2|c>>4;if(s.push(E),d!==64){const S=c<<4&240|d>>2;if(s.push(S),g!==64){const R=d<<6&192|g;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rm=function(n){const e=vu(n);return Tu.encodeByteArray(e,!0)},Ur=function(n){return rm(n).replace(/\./g,"")},bu=function(n){try{return Tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const om=()=>im().__FIREBASE_DEFAULTS__,am=()=>{if(typeof process>"u"||typeof xc>"u")return;const n=xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bu(n[1]);return e&&JSON.parse(e)},di=()=>{try{return tm()||om()||am()||cm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Au=n=>{var e,t;return(t=(e=di())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},lm=n=>{const e=Au(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Su=()=>{var n;return(n=di())==null?void 0:n.config},Cu=n=>{var e;return(e=di())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ur(JSON.stringify(t)),Ur(JSON.stringify(a)),""].join(".")}const Ds={};function dm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ds))Ds[e]?n.emulator.push(e):n.prod.push(e);return n}function fm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function Ru(n,e){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||Ds[n]===e||Ds[n]||Nc)return;Ds[n]=e;function t(E){return`__firebase__banner__${E}`}const s="__firebase__banner",i=dm().prod.length>0;function a(){const E=document.getElementById(s);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,S){E.setAttribute("width","24"),E.setAttribute("id",S),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Nc=!0,a()},E}function m(E,S){E.setAttribute("id",S),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=fm(s),S=t("text"),R=document.getElementById(S)||document.createElement("span"),V=t("learnmore"),D=document.getElementById(V)||document.createElement("a"),L=t("preprendIcon"),F=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const q=E.element;c(q),m(D,V);const z=d();u(F,L),q.append(F,R,D,z),document.body.appendChild(q)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function pm(){var e;const n=(e=di())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ym(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Im(){return!pm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function ku(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="FirebaseError";class st extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Em,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?wm(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new st(r,c,s)}}function wm(n,e){return n.replace(vm,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vm=/\{\$([^}]+)}/g;function Tm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Dc(i)&&Dc(a)){if(!Bt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Dc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ps(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function bm(n,e){const t=new Am(n,e);return t.subscribe.bind(t)}class Am{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Sm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Xi),r.error===void 0&&(r.error=Xi),r.complete===void 0&&(r.complete=Xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xi(){}/**
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
 */const Cm=1e3,Pm=2,Rm=4*60*60*1e3,km=.5;function Vc(n,e=Cm,t=Pm){const s=e*Math.pow(t,n),r=Math.round(km*s*(Math.random()-.5)*2);return Math.min(Rm,s+r)}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const an="[DEFAULT]";/**
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
 */class xm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new um;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dm(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nm(n){return n===an?void 0:n}function Dm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Om={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Lm=te.INFO,Mm={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},jm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Mm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=Lm,this._logHandler=jm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Om[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Fm=(n,e)=>e.some(t=>n instanceof t);let Oc,Lc;function qm(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xu=new WeakMap,go=new WeakMap,Nu=new WeakMap,Zi=new WeakMap,Ho=new WeakMap;function zm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(jt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xu.set(t,n)}).catch(()=>{}),Ho.set(e,n),e}function Bm(n){if(go.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});go.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hm(n){_o=n(_o)}function $m(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eo(this),e,...t);return Nu.set(s,e.sort?e.sort():[e]),jt(s)}:Um().includes(n)?function(...e){return n.apply(eo(this),e),jt(xu.get(this))}:function(...e){return jt(n.apply(eo(this),e))}}function Wm(n){return typeof n=="function"?$m(n):(n instanceof IDBTransaction&&Bm(n),Fm(n,qm())?new Proxy(n,_o):n)}function jt(n){if(n instanceof IDBRequest)return zm(n);if(Zi.has(n))return Zi.get(n);const e=Wm(n);return e!==n&&(Zi.set(n,e),Ho.set(e,n)),e}const eo=n=>Ho.get(n);function Du(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=jt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(jt(a.result),u.oldVersion,u.newVersion,jt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Gm=["get","getKey","getAll","getAllKeys","count"],Qm=["put","add","delete","clear"],to=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Qm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gm.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&u.done]))[0]};return to.set(e,i),i}Hm(n=>({...n,get:(e,t,s)=>Mc(e,t)||n.get(e,t,s),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
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
 */class Km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Jm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",jc="0.14.8";/**
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
 */const wt=new fi("@firebase/app"),Ym="@firebase/app-compat",Xm="@firebase/analytics-compat",Zm="@firebase/analytics",ep="@firebase/app-check-compat",tp="@firebase/app-check",np="@firebase/auth",sp="@firebase/auth-compat",rp="@firebase/database",ip="@firebase/data-connect",op="@firebase/database-compat",ap="@firebase/functions",cp="@firebase/functions-compat",lp="@firebase/installations",up="@firebase/installations-compat",hp="@firebase/messaging",dp="@firebase/messaging-compat",fp="@firebase/performance",mp="@firebase/performance-compat",pp="@firebase/remote-config",gp="@firebase/remote-config-compat",_p="@firebase/storage",yp="@firebase/storage-compat",Ip="@firebase/firestore",Ep="@firebase/ai",wp="@firebase/firestore-compat",vp="firebase",Tp="12.9.0";/**
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
 */const Io="[DEFAULT]",bp={[yo]:"fire-core",[Ym]:"fire-core-compat",[Zm]:"fire-analytics",[Xm]:"fire-analytics-compat",[tp]:"fire-app-check",[ep]:"fire-app-check-compat",[np]:"fire-auth",[sp]:"fire-auth-compat",[rp]:"fire-rtdb",[ip]:"fire-data-connect",[op]:"fire-rtdb-compat",[ap]:"fire-fn",[cp]:"fire-fn-compat",[lp]:"fire-iid",[up]:"fire-iid-compat",[hp]:"fire-fcm",[dp]:"fire-fcm-compat",[fp]:"fire-perf",[mp]:"fire-perf-compat",[pp]:"fire-rc",[gp]:"fire-rc-compat",[_p]:"fire-gcs",[yp]:"fire-gcs-compat",[Ip]:"fire-fst",[wp]:"fire-fst-compat",[Ep]:"fire-vertex","fire-js":"fire-js",[vp]:"fire-js-all"};/**
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
 */const zr=new Map,Ap=new Map,Eo=new Map;function Fc(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ft(n){const e=n.name;if(Eo.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of zr.values())Fc(t,n);for(const t of Ap.values())Fc(t,n);return!0}function In(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new yn("app","Firebase",Sp);/**
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
 */class Cp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=Tp;function Vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Io,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ft.create("bad-app-name",{appName:String(r)});if(t||(t=Su()),!t)throw Ft.create("no-options");const i=zr.get(r);if(i){if(Bt(t,i.options)&&Bt(s,i.config))return i;throw Ft.create("duplicate-app",{appName:r})}const a=new Vm(r);for(const u of Eo.values())a.addComponent(u);const c=new Cp(t,s,a);return zr.set(r,c),c}function $o(n=Io){const e=zr.get(n);if(!e&&n===Io&&Su())return Vu();if(!e)throw Ft.create("no-app",{appName:n});return e}function Ke(n,e,t){let s=bp[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(a.join(" "));return}ft(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Pp="firebase-heartbeat-database",Rp=1,qs="firebase-heartbeat-store";let no=null;function Ou(){return no||(no=Du(Pp,Rp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),no}async function kp(n){try{const t=(await Ou()).transaction(qs),s=await t.objectStore(qs).get(Lu(n));return await t.done,s}catch(e){if(e instanceof st)wt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(t.message)}}}async function qc(n,e){try{const s=(await Ou()).transaction(qs,"readwrite");await s.objectStore(qs).put(e,Lu(n)),await s.done}catch(t){if(t instanceof st)wt.warn(t.message);else{const s=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wt.warn(s.message)}}}function Lu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xp=1024,Np=30;class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Op(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Np){const a=Lp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uc(),{heartbeatsToSend:s,unsentEntries:r}=Vp(this._heartbeatsCache.heartbeats),i=Ur(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wt.warn(t),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function Vp(n,e=xp){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),zc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),zc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zc(n){return Ur(JSON.stringify({version:2,heartbeats:n})).length}function Lp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Mp(n){ft(new nt("platform-logger",e=>new Km(e),"PRIVATE")),ft(new nt("heartbeat",e=>new Dp(e),"PRIVATE")),Ke(yo,jc,n),Ke(yo,jc,"esm2020"),Ke("fire-js","")}Mp("");var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,Mu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.F=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(v,T,b){for(var y=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)y[ee-2]=arguments[ee];return _.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,_,I){I||(I=0);const v=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)v[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;T<16;++T)v[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],T=w.g[2];let b=w.g[3],y;y=_+(b^I&(T^b))+v[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+v[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+v[2]+606105819&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+v[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+v[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+v[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+v[6]+2821735955&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+v[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+v[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+v[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+v[10]+4294925233&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+v[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+v[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+v[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+v[14]+2792965006&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+v[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^b&(I^T))+v[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+v[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+v[11]+643717713&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+v[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+v[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+v[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+v[15]+3634488961&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+v[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+v[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+v[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+v[3]+4107603335&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+v[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+v[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+v[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+v[7]+1735328473&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+v[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^b)+v[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+v[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+v[11]+1839030562&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+v[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+v[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+v[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+v[7]+4139469664&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+v[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+v[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+v[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+v[3]+3572445317&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+v[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+v[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+v[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+v[15]+530742520&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+v[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~b))+v[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+v[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+v[14]+2878612391&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+v[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+v[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+v[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+v[10]+4293915773&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+v[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+v[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+v[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+v[6]+2734768916&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+v[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+v[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+v[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+v[2]+718787259&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+b&4294967295}s.prototype.v=function(w,_){_===void 0&&(_=w.length);const I=_-this.blockSize,v=this.C;let T=this.h,b=0;for(;b<_;){if(T==0)for(;b<=I;)r(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(v[T++]=w.charCodeAt(b++),T==this.blockSize){r(this,v),T=0;break}}else for(;b<_;)if(v[T++]=w[b++],T==this.blockSize){r(this,v),T=0;break}}this.h=T,this.o+=_},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,I=0;I<4;++I)for(let v=0;v<32;v+=8)w[_++]=this.g[I]>>>v&255;return w};function i(w,_){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function a(w,_){this.h=_;const I=[];let v=!0;for(let T=w.length-1;T>=0;T--){const b=w[T]|0;v&&b==_||(I[T]=b,v=!1)}this.g=I}var c={};function u(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return D(d(-w));const _=[];let I=1;for(let v=0;w>=I;v++)_[v]=w/I|0,I*=4294967296;return new a(_,0)}function m(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(m(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=d(Math.pow(_,8));let v=g;for(let b=0;b<w.length;b+=8){var T=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+T),_);T<8?(T=d(Math.pow(_,T)),v=v.j(T).add(d(y))):(v=v.j(I),v=v.add(d(y)))}return v}var g=u(0),E=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();let w=0,_=1;for(let I=0;I<this.g.length;I++){const v=this.i(I);w+=(v>=0?v:4294967296+v)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(V(this))return"-"+D(this).toString(w);const _=d(Math.pow(w,6));var I=this;let v="";for(;;){const T=z(I,_).g;I=L(I,T.j(_));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=T,R(I))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=L(this,w),V(w)?-1:R(w)?0:1};function D(w){const _=w.g.length,I=[];for(let v=0;v<_;v++)I[v]=~w.g[v];return new a(I,~w.h).add(E)}n.abs=function(){return V(this)?D(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),I=[];let v=0;for(let T=0;T<=_;T++){let b=v+(this.i(T)&65535)+(w.i(T)&65535),y=(b>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);v=y>>>16,b&=65535,y&=65535,I[T]=y<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function L(w,_){return w.add(D(_))}n.j=function(w){if(R(this)||R(w))return g;if(V(this))return V(w)?D(this).j(D(w)):D(D(this).j(w));if(V(w))return D(this.j(D(w)));if(this.l(S)<0&&w.l(S)<0)return d(this.m()*w.m());const _=this.g.length+w.g.length,I=[];for(var v=0;v<2*_;v++)I[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<w.g.length;T++){const b=this.i(v)>>>16,y=this.i(v)&65535,ee=w.i(T)>>>16,he=w.i(T)&65535;I[2*v+2*T]+=y*he,F(I,2*v+2*T),I[2*v+2*T+1]+=b*he,F(I,2*v+2*T+1),I[2*v+2*T+1]+=y*ee,F(I,2*v+2*T+1),I[2*v+2*T+2]+=b*ee,F(I,2*v+2*T+2)}for(w=0;w<_;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=_;w<2*_;w++)I[w]=0;return new a(I,0)};function F(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function q(w,_){this.g=w,this.h=_}function z(w,_){if(R(_))throw Error("division by zero");if(R(w))return new q(g,g);if(V(w))return _=z(D(w),_),new q(D(_.g),D(_.h));if(V(_))return _=z(w,D(_)),new q(D(_.g),_.h);if(w.g.length>30){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var I=E,v=_;v.l(w)<=0;)I=j(I),v=j(v);var T=$(I,1),b=$(v,1);for(v=$(v,2),I=$(I,2);!R(v);){var y=b.add(v);y.l(w)<=0&&(T=T.add(I),b=y),v=$(v,1),I=$(I,1)}return _=L(w,T.j(_)),new q(T,_)}for(T=g;w.l(_)>=0;){for(I=Math.max(1,Math.floor(w.m()/_.m())),v=Math.ceil(Math.log(I)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=d(I),y=b.j(_);V(y)||y.l(w)>0;)I-=v,b=d(I),y=b.j(_);R(b)&&(b=E),T=T.add(b),w=L(w,y)}return new q(T,w)}n.B=function(w){return z(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)&w.i(v);return new a(I,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)|w.i(v);return new a(I,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)^w.i(v);return new a(I,this.h^w.h)};function j(w){const _=w.g.length+1,I=[];for(let v=0;v<_;v++)I[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(I,w.h)}function $(w,_){const I=_>>5;_%=32;const v=w.g.length-I,T=[];for(let b=0;b<v;b++)T[b]=_>0?w.i(b+I)>>>_|w.i(b+I+1)<<32-_:w.i(b+I);return new a(T,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Mu=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,qt=a}).apply(typeof Bc<"u"?Bc:typeof self<"u"?self:typeof window<"u"?window:{});var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ju,Rs,Fu,kr,wo,qu,Uu,zu;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tr=="object"&&Tr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var h=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function m(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,A,C){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return l.prototype[A].apply(p,O)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function R(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const C=A.length||0;o.length=h+C;for(let O=0;O<C;O++)o[h+O]=A[O]}else o.push(A)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(o){a.setTimeout(()=>{throw o},0)}function L(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,h){const p=q.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var q=new V(()=>new z,o=>o.reset());class z{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let j,$=!1,w=new F,_=()=>{const o=Promise.resolve(void 0);j=()=>{o.then(I)}};function I(){for(var o;o=L();){try{o.h.call(o.g)}catch(h){D(h)}var l=q;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}$=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function ee(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(ee,T),ee.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var he="closure_listenable_"+(Math.random()*1e6|0),K=0;function de(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++K,this.da=this.fa=!1}function W(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function re(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function Fe(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function rt(o){const l={};for(const h in o)l[h]=o[h];return l}const Ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zt(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let C=0;C<Ye.length;C++)h=Ye[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Pn(o){this.src=o,this.g={},this.h=0}Pn.prototype.add=function(o,l,h,p,A){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const O=Ce(o,l,p,A);return O>-1?(l=o[O],h||(l.fa=!1)):(l=new de(l,this.src,C,!!p,A),l.fa=h,o.push(l)),l};function is(o,l){const h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),C;(C=A>=0)&&Array.prototype.splice.call(p,A,1),C&&(W(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ce(o,l,h,p){for(let A=0;A<o.length;++A){const C=o[A];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==p)return A}return-1}var os="closure_lm_"+(Math.random()*1e6|0),Rn={};function ir(o,l,h,p,A){if(Array.isArray(l)){for(let C=0;C<l.length;C++)ir(o,l[C],h,p,A);return null}return h=lr(h),o&&o[he]?o.J(l,h,c(p)?!!p.capture:!1,A):or(o,l,h,!1,p,A)}function or(o,l,h,p,A,C){if(!l)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let Z=en(o);if(Z||(o[os]=Z=new Pn(o)),h=Z.add(l,h,p,O,C),h.proxy)return h;if(p=Oi(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)b||(A=O),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(cr(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Oi(){function o(h){return l.call(o.src,o.listener,h)}const l=Li;return o}function ar(o,l,h,p,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)ar(o,l[C],h,p,A);else p=c(p)?!!p.capture:!!p,h=lr(h),o&&o[he]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],h=Ce(l,h,p,A),h>-1&&(W(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=en(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ce(l,h,p,A)),(h=o>-1?l[o]:null)&&as(h))}function as(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[he])is(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(cr(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=en(l))?(is(h,o),h.h==0&&(h.src=null,l[os]=null)):W(o)}}}function cr(o){return o in Rn?Rn[o]:Rn[o]="on"+o}function Li(o,l){if(o.da)o=!0;else{l=new ee(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&as(o),o=h.call(p,l)}return o}function en(o){return o=o[os],o instanceof Pn?o:null}var cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function lr(o){return typeof o=="function"?o:(o[cs]||(o[cs]=function(l){return o.handleEvent(l)}),o[cs])}function Ee(){v.call(this),this.i=new Pn(this),this.M=this,this.G=null}g(Ee,v),Ee.prototype[he]=!0,Ee.prototype.removeEventListener=function(o,l,h,p){ar(this,o,l,h,p)};function ke(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var A=l;l=new T(p,o),Zt(l,A)}A=!0;let C,O;if(h)for(O=h.length-1;O>=0;O--)C=l.g=h[O],A=kn(C,p,!0,l)&&A;if(C=l.g=o,A=kn(C,p,!0,l)&&A,A=kn(C,p,!1,l)&&A,h)for(O=0;O<h.length;O++)C=l.g=h[O],A=kn(C,p,!1,l)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)W(h[p]);delete o.g[l],o.h--}}this.G=null},Ee.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ee.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function kn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let C=0;C<l.length;++C){const O=l[C];if(O&&!O.da&&O.capture==h){const Z=O.listener,Te=O.ha||O.src;O.fa&&is(o.i,O),A=Z.call(Te,p)!==!1&&A}}return A&&!p.defaultPrevented}function ur(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function hr(o){o.g=ur(()=>{o.g=null,o.i&&(o.i=!1,hr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Mi extends v{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:hr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(o){v.call(this),this.h=o,this.g={}}g(St,v);var ls=[];function us(o){re(o.g,function(l,h){this.g.hasOwnProperty(h)&&as(l)},o),o.g={}}St.prototype.N=function(){St.Z.N.call(this),us(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var P=a.JSON.stringify,B=a.JSON.parse,X=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function le(){}function ie(){}var _e={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qe(){T.call(this,"d")}g(qe,T);function hs(){T.call(this,"c")}g(hs,T);var tn={},Ua=null;function dr(){return Ua=Ua||new Ee}tn.Ia="serverreachability";function za(o){T.call(this,tn.Ia,o)}g(za,T);function ds(o){const l=dr();ke(l,new za(l))}tn.STAT_EVENT="statevent";function Ba(o,l){T.call(this,tn.STAT_EVENT,o),this.stat=l}g(Ba,T);function Ue(o){const l=dr();ke(l,new Ba(l,o))}tn.Ja="timingevent";function Ha(o,l){T.call(this,tn.Ja,o),this.size=l}g(Ha,T);function fs(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function Af(o,l,h,p,A,C){o.info(function(){if(o.g)if(C){var O="",Z=C.split("&");for(let ue=0;ue<Z.length;ue++){var Te=Z[ue].split("=");if(Te.length>1){const Pe=Te[0];Te=Te[1];const ot=Pe.split("_");O=ot.length>=2&&ot[1]=="type"?O+(Pe+"="+Te+"&"):O+(Pe+"=redacted&")}}}else O=null;else O=C;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+O})}function Sf(o,l,h,p,A,C,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+C+" "+O})}function xn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Pf(o,h)+(p?" "+p:"")})}function Cf(o,l){o.info(function(){return"TIMEOUT: "+l})}ms.prototype.info=function(){};function Pf(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<p.length;O++)p[O]=""}}}}return P(C)}catch{return l}}var fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function ji(){}g(ji,le),ji.prototype.g=function(){return new XMLHttpRequest},Wa=new ji;function ps(o){return encodeURIComponent(String(o))}function Rf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Ct(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new St(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ga}function Ga(){this.i=null,this.g="",this.h=!1}var Qa={},Fi={};function qi(o,l,h){o.M=1,o.A=pr(it(l)),o.u=h,o.R=!0,Ka(o,null)}function Ka(o,l){o.F=Date.now(),mr(o),o.B=it(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),cc(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Ga,o.g=Sc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Mi(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(ls[0]=A.toString()),A=ls);for(let C=0;C<A.length;C++){const O=ir(h,A[C],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.J?rt(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ds(),Af(o.i,o.v,o.B,o.l,o.S,o.u)}Ct.prototype.ba=function(o){o=o.target;const l=this.O;l&&kt(o)==3?l.j():this.Y(o)},Ct.prototype.Y=function(o){try{if(o==this.g)e:{const Z=kt(this.g),Te=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||pc(this.g)))){this.K||Z!=4||Te==7||(Te==8||ue<=0?ds(3):ds(2)),Ui(this);var l=this.g.ca();this.X=l;var h=kf(this);if(this.o=l==200,Sf(this.i,this.v,this.B,this.l,this.S,Z,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var C=p;break t}}C=null}if(o=C)xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zi(this,o);else{this.o=!1,this.m=3,Ue(12),nn(this),gs(this);break e}}if(this.R){o=!0;let Pe;for(;!this.K&&this.C<h.length;)if(Pe=xf(this,h),Pe==Fi){Z==4&&(this.m=4,Ue(14),o=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==Qa){this.m=4,Ue(15),xn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else xn(this.i,this.l,Pe,null),zi(this,Pe);if(Ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||h.length!=0||this.h.h||(this.m=1,Ue(16),o=!1),this.o=this.o&&o,!o)xn(this.i,this.l,h,"[Invalid Chunked Response]"),nn(this),gs(this);else if(h.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Ji(O),O.P=!0,Ue(11))}}else xn(this.i,this.l,h,null),zi(this,h);Z==4&&nn(this),this.o&&!this.K&&(Z==4?vc(this.j,this):(this.o=!1,mr(this)))}else $f(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),nn(this),gs(this)}}}catch{}finally{}};function kf(o){if(!Ja(o))return o.g.la();const l=pc(o.g);if(l==="")return"";let h="";const p=l.length,A=kt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return nn(o),gs(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(l[C],{stream:!(A&&C==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Ja(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function xf(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Fi:(h=Number(l.substring(h,p)),isNaN(h)?Qa:(p+=1,p+h>l.length?Fi:(l=l.slice(p,p+h),o.C=p+h,l)))}Ct.prototype.cancel=function(){this.K=!0,nn(this)};function mr(o){o.T=Date.now()+o.H,Ya(o,o.H)}function Ya(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fs(d(o.aa,o),l)}function Ui(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ct.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Cf(this.i,this.B),this.M!=2&&(ds(),Ue(17)),nn(this),this.m=2,gs(this)):Ya(this,this.T-o)};function gs(o){o.j.I==0||o.K||vc(o.j,o)}function nn(o){Ui(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,us(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function zi(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Bi(h.h,o))){if(!o.L&&Bi(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Er(h),yr(h);else break e;Ki(h),Ue(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=fs(d(h.Va,h),6e3));ec(h.h)<=1&&h.ta&&(h.ta=void 0)}else rn(h,11)}else if((o.L||h.g==o)&&Er(h),!y(l))for(A=h.Ba.g.parse(l),l=0;l<A.length;l++){let ue=A[l];const Pe=ue[0];if(!(Pe<=h.K))if(h.K=Pe,ue=ue[1],h.I==2)if(ue[0]=="c"){h.M=ue[1],h.ba=ue[2];const ot=ue[3];ot!=null&&(h.ka=ot,h.j.info("VER="+h.ka));const on=ue[4];on!=null&&(h.za=on,h.j.info("SVER="+h.za));const xt=ue[5];xt!=null&&typeof xt=="number"&&xt>0&&(p=1.5*xt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Nt=o.g;if(Nt){const vr=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var C=p.h;C.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Hi(C,C.h),C.h=null))}if(p.G){const Yi=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(p.wa=Yi,fe(p.J,p.G,Yi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var O=o;if(p.na=Ac(p,p.L?p.ba:null,p.W),O.L){tc(p.h,O);var Z=O,Te=p.O;Te&&(Z.H=Te),Z.D&&(Ui(Z),mr(Z)),p.g=O}else Ec(p);h.i.length>0&&Ir(h)}else ue[0]!="stop"&&ue[0]!="close"||rn(h,7);else h.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?rn(h,7):Qi(h):ue[0]!="noop"&&h.l&&h.l.qa(ue),h.A=0)}}ds(4)}catch{}}var Nf=class{constructor(o,l){this.g=o,this.map=l}};function Xa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Za(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ec(o){return o.h?1:o.g?o.g.size:0}function Bi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Hi(o,l){o.g?o.g.add(l):o.h=l}function tc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Xa.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return S(o.i)}var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Df(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let A,C=null;p>=0?(A=o[h].substring(0,p),C=o[h].substring(p+1)):A=o[h],l(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Pt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Pt?(this.l=o.l,_s(this,o.j),this.o=o.o,this.g=o.g,ys(this,o.u),this.h=o.h,$i(this,lc(o.i)),this.m=o.m):o&&(l=String(o).match(sc))?(this.l=!1,_s(this,l[1]||"",!0),this.o=Is(l[2]||""),this.g=Is(l[3]||"",!0),ys(this,l[4]),this.h=Is(l[5]||"",!0),$i(this,l[6]||"",!0),this.m=Is(l[7]||"")):(this.l=!1,this.i=new ws(null,this.l))}Pt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Es(l,rc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Es(l,rc,!0),"@"),o.push(ps(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Es(h,h.charAt(0)=="/"?Lf:Of,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Es(h,jf)),o.join("")},Pt.prototype.resolve=function(o){const l=it(this);let h=!!o.j;h?_s(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)ys(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let O=0;O<A.length;){const Z=A[O++];Z=="."?p&&O==A.length&&C.push(""):Z==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&O==A.length&&C.push("")):(C.push(Z),p=!0)}p=C.join("/")}else p=A}return h?l.h=p:h=o.i.toString()!=="",h?$i(l,lc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function it(o){return new Pt(o)}function _s(o,l,h){o.j=h?Is(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ys(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function $i(o,l,h){l instanceof ws?(o.i=l,Ff(o.i,o.l)):(h||(l=Es(l,Mf)),o.i=new ws(l,o.l))}function fe(o,l,h){o.i.set(l,h)}function pr(o){return fe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Is(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Vf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rc=/[#\/\?@]/g,Of=/[#\?:]/g,Lf=/[#\?]/g,Mf=/[#\?@]/g,jf=/#/g;function ws(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function sn(o){o.g||(o.g=new Map,o.h=0,o.i&&Df(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=ws.prototype,n.add=function(o,l){sn(this),this.i=null,o=Nn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function ic(o,l){sn(o),l=Nn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function oc(o,l){return sn(o),l=Nn(o,l),o.g.has(l)}n.forEach=function(o,l){sn(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)};function ac(o,l){sn(o);let h=[];if(typeof l=="string")oc(o,l)&&(h=h.concat(o.g.get(Nn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return sn(this),this.i=null,o=Nn(this,o),oc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=ac(this,o),o.length>0?String(o[0]):l):l};function cc(o,l,h){ic(o,l),h.length>0&&(o.i=null,o.g.set(Nn(o,l),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const A=ps(h);h=ac(this,h);for(let C=0;C<h.length;C++){let O=A;h[C]!==""&&(O+="="+ps(h[C])),o.push(O)}}return this.i=o.join("&")};function lc(o){const l=new ws;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Nn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Ff(o,l){l&&!o.j&&(sn(o),o.i=null,o.g.forEach(function(h,p){const A=p.toLowerCase();p!=A&&(ic(this,p),cc(this,A,h))},o)),o.j=l}function qf(o,l){const h=new ms;if(a.Image){const p=new Image;p.onload=m(Rt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Rt,h,"TestLoadImage: error",!1,l,p),p.onabort=m(Rt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Rt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Uf(o,l){const h=new ms,p=new AbortController,A=setTimeout(()=>{p.abort(),Rt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(A),C.ok?Rt(h,"TestPingServer: ok",!0,l):Rt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Rt(h,"TestPingServer: error",!1,l)})}function Rt(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function zf(){this.g=new X}function Wi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Wi,le),Wi.prototype.g=function(){return new gr(this.i,this.h)};function gr(o,l){Ee.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gr,Ee),n=gr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;uc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function uc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?vs(this):Ts(this),this.readyState==3&&uc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,vs(this))},n.Na=function(o){this.g&&(this.response=o,vs(this))},n.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ts(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hc(o){let l="";return re(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Gi(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=hc(h),typeof o=="string"?h!=null&&ps(h):fe(o,l,h))}function ye(o){Ee.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ye,Ee);var Bf=/^https?$/i,Hf=["POST","PUT"];n=ye.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){dc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Hf,l,void 0)>=0)||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of h)this.g.setRequestHeader(C,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){dc(this,C)}};function dc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,fc(o),_r(o)}function fc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),ye.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mc(this):this.Xa())},n.Xa=function(){mc(this)};function mc(o){if(o.h&&typeof i<"u"){if(o.v&&kt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),kt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=C===0){let O=String(o.D).match(sc)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),p=!Bf.test(O?O.toLowerCase():"")}h=p}if(h)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var A=kt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",fc(o)}}finally{_r(o)}}}}function _r(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return kt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),B(l)}};function pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(o){const l={};o=(o.g&&kt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=Rf(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[A]||[];l[A]=C,C.push(h)}Fe(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function gc(o){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bs("baseRetryDelayMs",5e3,o),this.Za=bs("retryDelaySeedMs",1e4,o),this.Ta=bs("forwardChannelMaxRetries",2,o),this.va=bs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Xa(o&&o.concurrentRequestLimit),this.Ba=new zf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=gc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Ue(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Ac(this,null,this.W),Ir(this)};function Qi(o){if(_c(o),o.I==3){var l=o.V++,h=it(o.J);if(fe(h,"SID",o.M),fe(h,"RID",l),fe(h,"TYPE","terminate"),As(o,h),l=new Ct(o,o.j,l),l.M=2,l.A=pr(it(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Sc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),mr(l)}bc(o)}function yr(o){o.g&&(Ji(o),o.g.cancel(),o.g=null)}function _c(o){yr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Er(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ir(o){if(!Za(o.h)&&!o.m){o.m=!0;var l=o.Ea;j||_(),$||(j(),$=!0),w.add(l,o),o.D=0}}function Wf(o,l){return ec(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fs(d(o.Ea,o,l),Tc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Ct(this,this.j,o);let C=this.o;if(this.U&&(C?(C=rt(C),Zt(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ic(this,A,l),h=it(this.J),fe(h,"RID",o),fe(h,"CVER",22),this.G&&fe(h,"X-HTTP-Session-Id",this.G),As(this,h),C&&(this.R?l="headers="+ps(hc(C))+"&"+l:this.u&&Gi(h,this.u,C)),Hi(this.h,A),this.Ra&&fe(h,"TYPE","init"),this.S?(fe(h,"$req",l),fe(h,"SID","null"),A.U=!0,qi(A,h,null)):qi(A,h,l),this.I=2}}else this.I==3&&(o?yc(this,o):this.i.length==0||Za(this.h)||yc(this))};function yc(o,l){var h;l?h=l.l:h=o.V++;const p=it(o.J);fe(p,"SID",o.M),fe(p,"RID",h),fe(p,"AID",o.K),As(o,p),o.u&&o.o&&Gi(p,o.u,o.o),h=new Ct(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Ic(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Hi(o.h,h),qi(h,p,l)}function As(o,l){o.H&&re(o.H,function(h,p){fe(l,p,h)}),o.l&&re({},function(h,p){fe(l,p,h)})}function Ic(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var A=o.i;let Z=-1;for(;;){const Te=["count="+h];Z==-1?h>0?(Z=A[0].g,Te.push("ofs="+Z)):Z=0:Te.push("ofs="+Z);let ue=!0;for(let Pe=0;Pe<h;Pe++){var C=A[Pe].g;const ot=A[Pe].map;if(C-=Z,C<0)Z=Math.max(0,A[Pe].g-100),ue=!1;else try{C="req"+C+"_"||"";try{var O=ot instanceof Map?ot:Object.entries(ot);for(const[on,xt]of O){let Nt=xt;c(xt)&&(Nt=P(xt)),Te.push(C+on+"="+encodeURIComponent(Nt))}}catch(on){throw Te.push(C+"type="+encodeURIComponent("_badmap")),on}}catch{p&&p(ot)}}if(ue){O=Te.join("&");break e}}O=void 0}return o=o.i.splice(0,h),l.G=o,O}function Ec(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;j||_(),$||(j(),$=!0),w.add(l,o),o.A=0}}function Ki(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fs(d(o.Da,o),Tc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,wc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fs(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),yr(this),wc(this))};function Ji(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function wc(o){o.g=new Ct(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=it(o.na);fe(l,"RID","rpc"),fe(l,"SID",o.M),fe(l,"AID",o.K),fe(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&fe(l,"TO",o.ia),fe(l,"TYPE","xmlhttp"),As(o,l),o.u&&o.o&&Gi(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=pr(it(l)),h.u=null,h.R=!0,Ka(h,o)}n.Va=function(){this.C!=null&&(this.C=null,yr(this),Ki(this),Ue(19))};function Er(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function vc(o,l){var h=null;if(o.g==l){Er(o),Ji(o),o.g=null;var p=2}else if(Bi(o.h,l))h=l.G,tc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=dr(),ke(p,new Ha(p,h)),Ir(o)}else Ec(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Wf(o,l)||p==2&&Ki(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),A){case 1:rn(o,5);break;case 4:rn(o,10);break;case 3:rn(o,6);break;default:rn(o,2)}}}function Tc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function rn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const A=!p;p=new Pt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_s(p,"https"),pr(p),A?qf(p.toString(),h):Uf(p.toString(),h)}else Ue(2);o.I=0,o.l&&o.l.pa(l),bc(o),_c(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function bc(o){if(o.I=0,o.ja=[],o.l){const l=nc(o.h);(l.length!=0||o.i.length!=0)&&(R(o.ja,l),R(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Ac(o,l,h){var p=h instanceof Pt?it(h):new Pt(h);if(p.g!="")l&&(p.g=l+"."+p.g),ys(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const C=new Pt(null);p&&_s(C,p),l&&(C.g=l),A&&ys(C,A),h&&(C.h=h),p=C}return h=o.G,l=o.wa,h&&l&&fe(p,h,l),fe(p,"VER",o.ka),As(o,p),p}function Sc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ye(new Wi({ab:h})):new ye(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}n=Cc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wr(){}wr.prototype.g=function(o,l){return new He(o,l)};function He(o,l){Ee.call(this),this.g=new gc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Dn(this)}g(He,Ee),He.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){Qi(this.g)},He.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=P(o),o=h);l.i.push(new Nf(l.Ya++,o)),l.I==3&&Ir(l)},He.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,He.Z.N.call(this)};function Pc(o){qe.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(Pc,qe);function Rc(){hs.call(this),this.status=1}g(Rc,hs);function Dn(o){this.g=o}g(Dn,Cc),Dn.prototype.ra=function(){ke(this.g,"a")},Dn.prototype.qa=function(o){ke(this.g,new Pc(o))},Dn.prototype.pa=function(o){ke(this.g,new Rc)},Dn.prototype.oa=function(){ke(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,zu=function(){return new wr},Uu=function(){return dr()},qu=tn,wo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,kr=fr,$a.COMPLETE="complete",Fu=$a,ie.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,Rs=ie,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,ju=ye}).apply(typeof Tr<"u"?Tr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="12.9.0";function jp(n){Zn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dn=new fi("@firebase/firestore");function Vn(){return dn.logLevel}function M(n,...e){if(dn.logLevel<=te.DEBUG){const t=e.map(Wo);dn.debug(`Firestore (${Zn}): ${n}`,...t)}}function vt(n,...e){if(dn.logLevel<=te.ERROR){const t=e.map(Wo);dn.error(`Firestore (${Zn}): ${n}`,...t)}}function fn(n,...e){if(dn.logLevel<=te.WARN){const t=e.map(Wo);dn.warn(`Firestore (${Zn}): ${n}`,...t)}}function Wo(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Bu(n,s,t)}function Bu(n,e,t){let s=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw vt(s),new Error(s)}function ae(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Bu(e,r,s)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class qp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Up{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ae(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Et,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string",31837,{l:s}),new Hu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class zp{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Bp{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new zp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ae(this.o===void 0,3512);const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ae(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=$p(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ne(n,e){return n<e?-1:n>e?1:0}function vo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return so(r)===so(i)?ne(r,i):so(r)?1:-1}return ne(n.length,e.length)}const Wp=55296,Gp=57343;function so(n){const e=n.charCodeAt(0);return e>=Wp&&e<=Gp}function $n(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="__name__";class at{constructor(e,t,s){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=at.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ne(e.length,t.length)}static compareSegments(e,t){const s=at.isNumericId(e),r=at.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?at.extractNumericId(e).compare(at.extractNumericId(t)):vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}}class me extends at{construct(e,t,s){return new me(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new me(t)}static emptyPath(){return new me([])}}const Qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends at{construct(e,t,s){return new Ne(e,t,s)}static isValidIdentifier(e){return Qp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$c}static keyField(){return new Ne([$c])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new U(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new U(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(me.fromString(e))}static fromName(e){return new H(me.fromString(e).popFirst(5))}static empty(){return new H(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e,t){if(!t)throw new U(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kp(n,e,t,s){if(e===!0&&s===!0)throw new U(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wc(n){if(!H.isDocumentKey(n))throw new U(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gc(n){if(H.isDocumentKey(n))throw new U(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function Ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new U(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function Js(n,e){if(!Wu(n))throw new U(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new U(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=-62135596800,Kc=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Kc);return new pe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qc)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kc}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Js(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:ve("string",pe._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new pe(0,0))}static max(){return new J(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Us=-1;function Jp(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new pe(t+1,0):new pe(t,s));return new $t(r,H.empty(),e)}function Yp(n){return new $t(n.readTime,n.key,Us)}class $t{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new $t(J.min(),H.empty(),Us)}static max(){return new $t(J.max(),H.empty(),Us)}}function Xp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Zp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,s)=>{t(e)})}static reject(e){return new k((t,s)=>{s(e)})}static waitFor(e){return new k((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next(r=>r?k.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new k((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===i&&s(a)},m=>r(m))}})}static doWhile(e,t){return new k((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function tg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=-1;function pi(n){return n==null}function Br(n){return n===0&&1/n==-1/0}function ng(n){return typeof n=="number"&&Number.isInteger(n)&&!Br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="";function sg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=rg(n.get(t),e);return Jc(e)}function rg(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Gu:t+="";break;default:t+=i}}return t}function Jc(n){return n+Gu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new br(this.root,e,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new br(this.root,e,this.comparator,!0)}}class br{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??xe.RED,this.left=r??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new xe(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new Se(Ne.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $n(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Ku extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ku("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const ig=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(n){if(ae(!!n,39018),typeof n=="string"){let e=0;const t=ig.exec(n);if(ae(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="server_timestamp",Yu="__type__",Xu="__previous_value__",Zu="__local_write_time__";function Jo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yu])==null?void 0:s.stringValue)===Ju}function gi(n){const e=n.mapValue.fields[Xu];return Jo(e)?gi(e):e}function zs(n){const e=Wt(n.mapValue.fields[Zu].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,s,r,i,a,c,u,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const Hr="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||Hr}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===Hr}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function ag(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new U(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="__type__",cg="__max__",Ar={mapValue:{}},th="__vector__",$r="value";function Qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jo(n)?4:ug(n)?9007199254740991:lg(n)?10:11:Q(28295,{value:n})}function mt(n,e){if(n===e)return!0;const t=Qt(n);if(t!==Qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Wt(r.timestampValue),c=Wt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Gt(r.bytesValue).isEqual(Gt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ie(r.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(r.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ie(r.integerValue)===Ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Ie(r.doubleValue),c=Ie(i.doubleValue);return a===c?Br(a)===Br(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return $n(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Yc(a)!==Yc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!mt(a[u],c[u])))return!1;return!0}(n,e);default:return Q(52216,{left:n})}}function Hs(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function Wn(n,e){if(n===e)return 0;const t=Qt(n),s=Qt(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ie(i.integerValue||i.doubleValue),u=Ie(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Zc(n.timestampValue,e.timestampValue);case 4:return Zc(zs(n),zs(e));case 5:return vo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Gt(i),u=Gt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=ne(c[d],u[d]);if(m!==0)return m}return ne(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ne(Ie(i.latitude),Ie(a.latitude));return c!==0?c:ne(Ie(i.longitude),Ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return el(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,S,R,V;const c=i.fields||{},u=a.fields||{},d=(E=c[$r])==null?void 0:E.arrayValue,m=(S=u[$r])==null?void 0:S.arrayValue,g=ne(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return g!==0?g:el(d,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ar.mapValue&&a===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(a===Ar.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const E=vo(u[g],m[g]);if(E!==0)return E;const S=Wn(c[u[g]],d[m[g]]);if(S!==0)return S}return ne(u.length,m.length)}(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function Zc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=Wt(n),s=Wt(e),r=ne(t.seconds,s.seconds);return r!==0?r:ne(t.nanos,s.nanos)}function el(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Wn(t[r],s[r]);if(i)return i}return ne(t.length,s.length)}function Gn(n){return To(n)}function To(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Wt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=To(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${To(t.fields[a])}`;return r+"}"}(n.mapValue):Q(61005,{value:n})}function xr(n){switch(Qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(n);return e?16+xr(e):16;case 5:return 2*n.stringValue.length;case 6:return Gt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+xr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return En(s.fields,(i,a)=>{r+=i.length+xr(a)}),r}(n.mapValue);default:throw Q(13486,{value:n})}}function bo(n){return!!n&&"integerValue"in n}function Yo(n){return!!n&&"arrayValue"in n}function tl(n){return!!n&&"nullValue"in n}function nl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nr(n){return!!n&&"mapValue"in n}function lg(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[eh])==null?void 0:s.stringValue)===th}function Vs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vs(n.arrayValue.values[t]);return e}return{...n}}function ug(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(t)}setAll(e){let t=Ne.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Vs(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Nr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Nr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){En(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ge(Vs(this.value))}}function nh(n){const e=[];return En(n.fields,(t,s)=>{const r=new Ne([t]);if(Nr(s)){const i=nh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,J.min(),J.min(),J.min(),Ge.empty(),0)}static newFoundDocument(e,t,s,r){return new Me(e,1,t,J.min(),s,r,0)}static newNoDocument(e,t){return new Me(e,2,t,J.min(),J.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,J.min(),J.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wr{constructor(e,t){this.position=e,this.inclusive=t}}function sl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(a.referenceValue),t.key):s=Wn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gr{constructor(e,t="asc"){this.field=e,this.dir=t}}function hg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sh{}class be extends sh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new fg(e,t,s):t==="array-contains"?new gg(e,s):t==="in"?new _g(e,s):t==="not-in"?new yg(e,s):t==="array-contains-any"?new Ig(e,s):new be(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new mg(e,s):new pg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wn(t,this.value)):t!==null&&Qt(this.value)===Qt(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends sh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return rh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rh(n){return n.op==="and"}function ih(n){return dg(n)&&rh(n)}function dg(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function Ao(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+Gn(n.value);if(ih(n))return n.filters.map(e=>Ao(e)).join(",");{const e=n.filters.map(t=>Ao(t)).join(",");return`${n.op}(${e})`}}function oh(n,e){return n instanceof be?function(s,r){return r instanceof be&&s.op===r.op&&s.field.isEqual(r.field)&&mt(s.value,r.value)}(n,e):n instanceof pt?function(s,r){return r instanceof pt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&oh(a,r.filters[c]),!0):!1}(n,e):void Q(19439)}function ah(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${Gn(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(ah).join(" ,")+"}"}(n):"Filter"}class fg extends be{constructor(e,t,s){super(e,t,s),this.key=H.fromName(s.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class mg extends be{constructor(e,t){super(e,"in",t),this.keys=ch("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pg extends be{constructor(e,t){super(e,"not-in",t),this.keys=ch("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ch(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>H.fromName(s.referenceValue))}class gg extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yo(t)&&Hs(t.arrayValue,this.value)}}class _g extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hs(this.value.arrayValue,t)}}class yg extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hs(this.value.arrayValue,t)}}class Ig extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Hs(this.value.arrayValue,s))}}/**
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
 */class Eg{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function il(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Eg(n,e,t,s,r,i,a)}function Xo(n){const e=Y(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ao(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Gn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Gn(s)).join(",")),e.Te=t}return e.Te}function Zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!oh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function So(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wg(n,e,t,s,r,i,a,c){return new _i(n,e,t,s,r,i,a,c)}function ea(n){return new _i(n)}function ol(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vg(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Tg(n){return n.collectionGroup!==null}function Os(n){const e=Y(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Se(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Gr(i,s))}),t.has(Ne.keyField().canonicalString())||e.Ie.push(new Gr(Ne.keyField(),s))}return e.Ie}function ct(n){const e=Y(n);return e.Ee||(e.Ee=bg(e,Os(n))),e.Ee}function bg(n,e){if(n.limitType==="F")return il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Gr(r.field,i)});const t=n.endAt?new Wr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Wr(n.startAt.position,n.startAt.inclusive):null;return il(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Co(n,e,t){return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return Zo(ct(n),ct(e))&&n.limitType===e.limitType}function lh(n){return`${Xo(ct(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>ah(r)).join(", ")}]`),pi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Gn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Gn(r)).join(",")),`Target(${s})`}(ct(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):H.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Os(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d<=0:d<0}(s.startAt,Os(s),r)||s.endAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d>=0:d>0}(s.endAt,Os(s),r))}(n,e)}function Ag(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uh(n){return(e,t)=>{let s=!1;for(const r of Os(n)){const i=Sg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Sg(n,e,t){const s=n.field.isKeyField()?H.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Wn(u,d):Q(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Qu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new ge(H.comparator);function Tt(){return Cg}const hh=new ge(H.comparator);function ks(...n){let e=hh;for(const t of n)e=e.insert(t.key,t);return e}function dh(n){let e=hh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cn(){return Ls()}function fh(){return Ls()}function Ls(){return new wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Pg=new ge(H.comparator),Rg=new Se(H.comparator);function se(...n){let e=Rg;for(const t of n)e=e.add(t);return e}const kg=new Se(ne);function xg(){return kg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function mh(n){return{integerValue:""+n}}function Ng(n,e){return ng(e)?mh(e):ta(n,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function Dg(n,e,t){return n instanceof Qr?function(r,i){const a={fields:{[Yu]:{stringValue:Ju},[Zu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jo(i)&&(i=gi(i)),i&&(a.fields[Xu]=i),{mapValue:a}}(t,e):n instanceof $s?gh(n,e):n instanceof Ws?_h(n,e):function(r,i){const a=ph(r,i),c=al(a)+al(r.Ae);return bo(a)&&bo(r.Ae)?mh(c):ta(r.serializer,c)}(n,e)}function Vg(n,e,t){return n instanceof $s?gh(n,e):n instanceof Ws?_h(n,e):t}function ph(n,e){return n instanceof Kr?function(s){return bo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Qr extends Ei{}class $s extends Ei{constructor(e){super(),this.elements=e}}function gh(n,e){const t=yh(e);for(const s of n.elements)t.some(r=>mt(r,s))||t.push(s);return{arrayValue:{values:t}}}class Ws extends Ei{constructor(e){super(),this.elements=e}}function _h(n,e){let t=yh(e);for(const s of n.elements)t=t.filter(r=>!mt(r,s));return{arrayValue:{values:t}}}class Kr extends Ei{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function al(n){return Ie(n.integerValue||n.doubleValue)}function yh(n){return Yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Og(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof $s&&r instanceof $s||s instanceof Ws&&r instanceof Ws?$n(s.elements,r.elements,mt):s instanceof Kr&&r instanceof Kr?mt(s.Ae,r.Ae):s instanceof Qr&&r instanceof Qr}(n.transform,e.transform)}class Lg{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Ih(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new na(n.key,lt.none()):new Ys(n.key,n.data,lt.none());{const t=n.data,s=Ge.empty();let r=new Se(Ne.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new vn(n.key,s,new Xe(r.toArray()),lt.none())}}function Mg(n,e,t){n instanceof Ys?function(r,i,a){const c=r.value.clone(),u=ll(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof vn?function(r,i,a){if(!Dr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ll(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Eh(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ms(n,e,t,s){return n instanceof Ys?function(i,a,c,u){if(!Dr(i.precondition,a))return c;const d=i.value.clone(),m=ul(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof vn?function(i,a,c,u){if(!Dr(i.precondition,a))return c;const d=ul(i.fieldTransforms,u,a),m=a.data;return m.setAll(Eh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(i,a,c){return Dr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function jg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=ph(s.transform,r||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(s.field,i))}return t||null}function cl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&$n(s,r,(i,a)=>Og(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ys extends wi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vn extends wi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ll(n,e,t){const s=new Map;ae(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,Vg(a,c,t[r]))}return s}function ul(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,Dg(i,a,e))}return s}class na extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fg extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Mg(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=fh();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=Ih(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&$n(this.mutations,e.mutations,(t,s)=>cl(t,s))&&$n(this.baseMutations,e.baseMutations,(t,s)=>cl(t,s))}}class sa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ae(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return Pg}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new sa(e,t,s,r)}}/**
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
 */class Ug{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,oe;function Bg(n){switch(n){case x.OK:return Q(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function wh(n){if(n===void 0)return vt("GRPC error has no .code"),x.UNKNOWN;switch(n){case we.OK:return x.OK;case we.CANCELLED:return x.CANCELLED;case we.UNKNOWN:return x.UNKNOWN;case we.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case we.INTERNAL:return x.INTERNAL;case we.UNAVAILABLE:return x.UNAVAILABLE;case we.UNAUTHENTICATED:return x.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case we.NOT_FOUND:return x.NOT_FOUND;case we.ALREADY_EXISTS:return x.ALREADY_EXISTS;case we.PERMISSION_DENIED:return x.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case we.ABORTED:return x.ABORTED;case we.OUT_OF_RANGE:return x.OUT_OF_RANGE;case we.UNIMPLEMENTED:return x.UNIMPLEMENTED;case we.DATA_LOSS:return x.DATA_LOSS;default:return Q(39323,{code:n})}}(oe=we||(we={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hg(){return new TextEncoder}/**
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
 */const $g=new qt([4294967295,4294967295],0);function hl(n){const e=Hg().encode(n),t=new Mu;return t.update(e),new Uint8Array(t.digest())}function dl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qt([t,s],0),new qt([r,i],0)]}class ra{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xs(`Invalid padding: ${t}`);if(s<0)throw new xs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=qt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(qt.fromNumber(s)));return r.compare($g)===1&&(r=new qt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hl(e),[s,r]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ra(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=hl(e),[s,r]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vi(J.min(),r,new ge(ne),Tt(),se())}}class Xs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xs(s,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class vh{constructor(e,t){this.targetId=e,this.Ce=t}}class Th{constructor(e,t,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class fl{constructor(){this.ve=0,this.Fe=ml(),this.Me=Ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),s=se();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:Q(38017,{changeType:i})}}),new Xs(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=ml()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Wg{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tt(),this.He=Sr(),this.Je=Sr(),this.Ze=new ge(ne)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(So(i))if(s===0){const a=new H(i.path);this.et(t,a,Me.newNoDocument(a,J.min()))}else ae(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Gt(s).toUint8Array()}catch(u){if(u instanceof Ku)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ra(a,r,i)}catch(u){return fn(u instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&So(c.target)){const u=new H(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Me.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let s=se();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const r=new vi(e,t,this.Ze,this.je,s);return this.je=Tt(),this.He=Sr(),this.Je=Sr(),this.Ze=new ge(ne),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new fl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Se(ne),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Se(ne),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Sr(){return new ge(H.comparator)}function ml(){return new ge(H.comparator)}const Gg={asc:"ASCENDING",desc:"DESCENDING"},Qg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kg={and:"AND",or:"OR"};class Jg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Po(n,e){return n.useProto3Json||pi(e)?e:{value:e}}function Jr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Yg(n,e){return Jr(n,e.toTimestamp())}function ut(n){return ae(!!n,49232),J.fromTimestamp(function(t){const s=Wt(t);return new pe(s.seconds,s.nanos)}(n))}function ia(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(r){return new me(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ah(n){const e=me.fromString(n);return ae(kh(e),10190,{key:e.toString()}),e}function ko(n,e){return ia(n.databaseId,e.path)}function ro(n,e){const t=Ah(e);if(t.get(1)!==n.databaseId.projectId)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Ch(t))}function Sh(n,e){return ia(n.databaseId,e)}function Xg(n){const e=Ah(n);return e.length===4?me.emptyPath():Ch(e)}function xo(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return ae(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pl(n,e,t){return{name:ko(n,e),fields:t.value.mapValue.fields}}function Zg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(ae(m===void 0||typeof m=="string",58123),Ve.fromBase64String(m||"")):(ae(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ve.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?x.UNKNOWN:wh(d.code);return new U(m,d.message||"")}(a);t=new Th(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ro(n,s.document.name),i=ut(s.document.updateTime),a=s.document.createTime?ut(s.document.createTime):J.min(),c=new Ge({mapValue:{fields:s.document.fields}}),u=Me.newFoundDocument(r,i,a,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new Vr(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ro(n,s.document),i=s.readTime?ut(s.readTime):J.min(),a=Me.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Vr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ro(n,s.document),i=s.removedTargetIds||[];t=new Vr([],i,r,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new zg(r,i),c=s.targetId;t=new vh(c,a)}}return t}function e_(n,e){let t;if(e instanceof Ys)t={update:pl(n,e.key,e.value)};else if(e instanceof na)t={delete:ko(n,e.key)};else if(e instanceof vn)t={update:pl(n,e.key,e.data),updateMask:l_(e.fieldMask)};else{if(!(e instanceof Fg))return Q(16599,{dt:e.type});t={verify:ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $s)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Kr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Q(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Yg(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(n,e.precondition)),t}function t_(n,e){return n&&n.length>0?(ae(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?ut(r.updateTime):ut(i);return a.isEqual(J.min())&&(a=ut(i)),new Lg(a,r.transformResults||[])}(t,e))):[]}function n_(n,e){return{documents:[Sh(n,e.path)]}}function s_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sh(n,r);const i=function(d){if(d.length!==0)return Rh(pt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:Ln(E.field),direction:o_(E.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Po(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function r_(n){let e=Xg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ae(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const E=Ph(g);return E instanceof pt&&ih(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(R){return new Gr(Mn(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,pi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,S=g.values||[];return new Wr(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,S=g.values||[];return new Wr(S,E)}(t.endAt)),wg(e,r,a,i,c,"F",u,d)}function i_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ph(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Mn(t.unaryFilter.field);return be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Mn(t.unaryFilter.field);return be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mn(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mn(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(n):n.fieldFilter!==void 0?function(t){return be.create(Mn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(s=>Ph(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(t.compositeFilter.op))}(n):Q(30097,{filter:n})}function o_(n){return Gg[n]}function a_(n){return Qg[n]}function c_(n){return Kg[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Ne.fromServerFormat(n.fieldPath)}function Rh(n){return n instanceof be?function(t){if(t.op==="=="){if(nl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(tl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(tl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:a_(t.op),value:t.value}}}(n):n instanceof pt?function(t){const s=t.getFilters().map(r=>Rh(r));return s.length===1?s[0]:{compositeFilter:{op:c_(t.op),filters:s}}}(n):Q(54877,{filter:n})}function l_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function xh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,r,i=J.min(),a=J.min(),c=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.yt=e}}function h_(n){const e=r_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Co(e,e.limit,"L"):e}/**
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
 */class d_{constructor(){this.Sn=new f_}addToCollectionParentIndex(e,t){return this.Sn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve($t.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class f_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Se(me.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Se(me.comparator)).toArray()}}/**
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
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nh=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(Nh,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qn(0)}static ar(){return new Qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="LruGarbageCollector",m_=1048576;function yl([n,e],[t,s]){const r=ne(n,t);return r===0?ne(e,s):r}class p_{constructor(e){this.Pr=e,this.buffer=new Se(yl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class g_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(_l,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?M(_l,"Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.Ar(3e5)})}}class __{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return k.resolve(mi.ce);const s=new p_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(gl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,c=Date.now(),this.removeTargets(e,s,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(d=Date.now(),Vn()<=te.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g})))}}function y_(n,e){return new __(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class E_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Ms(s.mutation,r,Xe.empty(),pe.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,t,s=se()){const r=cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=ks();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=cn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,se()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=Tt();const a=Ls(),c=function(){return Ls()}();return t.forEach((u,d)=>{const m=s.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof vn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Ms(m.mutation,d,m.mutation.getFieldMask(),pe.now())):a.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>c.set(d,new E_(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const s=Ls();let r=new ge((a,c)=>a-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||Xe.empty();m=c.applyToLocalView(d,m),s.set(u,m);const g=(r.get(c.batchId)||se()).add(u);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=fh();m.forEach(E=>{if(!i.has(E)){const S=Ih(t.get(E),s.get(E));S!==null&&g.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return vg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(cn());let c=Us,u=i;return a.next(d=>k.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(E=>{u=u.insert(m,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(m=>({batchId:c,changes:dh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(s=>{let r=ks();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ks();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const d=function(g,E){return new _i(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(m=>{m.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Me.newInvalidDocument(m)))});let c=ks();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Ms(m.mutation,d,Xe.empty(),pe.now()),Ii(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:ut(r.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:h_(r.bundledQuery),readTime:ut(r.readTime)}}(t)),k.resolve()}}/**
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
 */class T_{constructor(){this.overlays=new ge(H.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cn();return k.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=cn(),i=t.length+1,a=new H(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ge((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=i.get(d.largestBatchId);m===null&&(m=cn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=cn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=r)););return k.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Ug(t,s));let i=this.Lr.get(t);i===void 0&&(i=se(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class b_{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.kr=new Se(Re.Kr),this.qr=new Se(Re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Re(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Re(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new H(new me([])),s=new Re(t,e),r=new Re(t,e+1),i=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new H(new me([])),s=new Re(t,e),r=new Re(t,e+1);let i=se();return this.qr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Re(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Re{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return H.comparator(e.key,t.key)||ne(e.Hr,t.Hr)}static Ur(e,t){return ne(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Se(Re.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qg(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Jr=this.Jr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ko:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Re(t,0),r=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Se(ne);return t.forEach(r=>{const i=new Re(r,0),a=new Re(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),k.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const a=new Re(new H(i),0);let c=new Se(ne);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Hr)),!0)},a),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ae(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return k.forEach(t.mutations,r=>{const i=new Re(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new Re(t,0),r=this.Jr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.ti=e,this.docs=function(){return new ge(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let s=Tt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Me.newInvalidDocument(r))}),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Tt();const a=t.path,c=new H(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Xp(Yp(m),s)<=0||(r.has(m.key)||Ii(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){Q(9500)}ni(e,t){return k.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new C_(this)}getSize(e){return k.resolve(this.size)}}class C_ extends I_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.persistence=e,this.ri=new wn(t=>Xo(t),Zo),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new oa,this.targetCount=0,this.oi=Qn._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),k.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this._i={},this.overlays={},this.ai=new mi(0),this.ui=!1,this.ui=!0,this.ci=new b_,this.referenceDelegate=e(this),this.li=new P_(this),this.indexManager=new d_,this.remoteDocumentCache=function(r){return new S_(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new u_(t),this.Pi=new v_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new T_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new A_(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new R_(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ii(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class R_ extends eg{constructor(e){super(),this.currentSequenceNumber=e}}class aa{constructor(e){this.persistence=e,this.Ri=new oa,this.Ai=null}static Vi(e){return new aa(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,s=>{const r=H.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,J.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yr{constructor(e,t){this.persistence=e,this.fi=new wn(s=>sg(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=y_(this,t)}static Vi(e,t){return new Yr(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?k.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,J.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xr(e.data.value)),t}wr(e,t,s){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=se(),r=se();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ca(e,t.fromCache,s,r)}}/**
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
 */class k_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class x_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Im()?8:tg(je())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new k_;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Vn()<=te.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Vn()<=te.DEBUG&&M("QueryEngine","Query:",On(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Vn()<=te.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):k.resolve())}gs(e,t){if(ol(t))return k.resolve(null);let s=ct(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Co(t,null,"F"),s=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=se(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.bs(t,c);return this.Ss(t,d,a,u.readTime)?this.gs(e,Co(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,s,r){return ol(t)||r.isEqual(J.min())?k.resolve(null):this.fs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,s,r)?k.resolve(null):(Vn()<=te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),On(t)),this.Ds(e,a,t,Jp(r,Us)).next(c=>c))})}bs(e,t){let s=new Se(uh(e));return t.forEach((r,i)=>{Ii(e,i)&&(s=s.add(i))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Vn()<=te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",On(t)),this.fs.getDocumentsMatchingQuery(e,t,$t.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="LocalStore",N_=3e8;class D_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ge(ne),this.Fs=new wn(i=>Xo(i),Zo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function V_(n,e,t,s){return new D_(n,e,t,s)}async function Vh(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let u=se();for(const d of r){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:c}))})})}function O_(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const g=d.batch,E=g.keys();let S=k.resolve();return E.forEach(R=>{S=S.next(()=>m.getEntry(u,R)).next(V=>{const D=d.docVersions.get(R);ae(D!==null,48541),V.version.compareTo(D)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=se();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Oh(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function L_(n,e){const t=Y(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach((m,g)=>{const E=r.get(g);if(!E)return;c.push(t.li.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,m.addedDocuments,g)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ve.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,s)),r=r.insert(g,S),function(V,D,L){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=N_?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(E,S,m)&&c.push(t.li.updateTargetData(i,S))});let u=Tt(),d=se();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(M_(i,a,e.documentUpdates).next(m=>{u=m.Bs,d=m.Ls})),!s.isEqual(J.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(m)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=r,i))}function M_(n,e,t){let s=se(),r=se();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Tt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):M(la,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:r}})}function j_(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ko),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function F_(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new Mt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function No(n,e,t){const s=Y(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!ts(a))throw a;M(la,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Il(n,e,t){const s=Y(n);let r=J.min(),i=se();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const g=Y(u),E=g.Fs.get(m);return E!==void 0?k.resolve(g.vs.get(E)):g.li.getTargetData(d,m)}(s,a,ct(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:J.min(),t?i:se())).next(c=>(q_(s,Ag(e),c),{documents:c,ks:i})))}function q_(n,e,t){let s=n.Ms.get(e)||J.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class El{constructor(){this.activeTargetIds=xg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U_{constructor(){this.vo=new El,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new El,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z_{Mo(e){}shutdown(){}}/**
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
 */const wl="ConnectivityMonitor";class vl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(wl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(wl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cr=null;function Do(){return Cr===null?Cr=function(){return 268435456+Math.round(2147483648*Math.random())}():Cr++,"0x"+Cr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="RestConnection",B_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class H_{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Hr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Do(),c=this.Qo(e,t.toUriEncodedString());M(io,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(c),m=Yn(d);return this.zo(e,c,u,s,m).then(g=>(M(io,`Received RPC '${e}' ${a}: `,g),g),g=>{throw fn(io,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g})}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=B_[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection",Ss=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class jn extends H_{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!jn.c_){const e=Uu();Ss(e,qu.STAT_EVENT,t=>{t.stat===wo.PROXY?M(Oe,"STAT_EVENT: detected buffering proxy"):t.stat===wo.NOPROXY&&M(Oe,"STAT_EVENT: detected no buffering proxy")}),jn.c_=!0}}zo(e,t,s,r,i){const a=Do();return new Promise((c,u)=>{const d=new ju;d.setWithCredentials(!0),d.listenOnce(Fu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case kr.NO_ERROR:const g=d.getResponseJson();M(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case kr.TIMEOUT:M(Oe,`RPC '${e}' ${a} timed out`),u(new U(x.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const E=d.getStatus();if(M(Oe,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const V=function(L){const F=L.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(F)>=0?F:x.UNKNOWN}(R.status);u(new U(V,R.message))}else u(new U(x.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new U(x.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Oe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(r);M(Oe,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,s,15)})}T_(e,t,s){const r=Do(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=i.join("");M(Oe,`Creating RPC '${e}' stream ${r}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let g=!1,E=!1;const S=new $_({Ho:R=>{E?M(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(g||(M(Oe,`Opening RPC '${e}' stream ${r} transport.`),m.open(),g=!0),M(Oe,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Jo:()=>m.close()});return Ss(m,Rs.EventType.OPEN,()=>{E||(M(Oe,`RPC '${e}' stream ${r} transport opened.`),S.i_())}),Ss(m,Rs.EventType.CLOSE,()=>{E||(E=!0,M(Oe,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(m))}),Ss(m,Rs.EventType.ERROR,R=>{E||(E=!0,fn(Oe,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),S.o_(new U(x.UNAVAILABLE,"The operation could not be completed")))}),Ss(m,Rs.EventType.MESSAGE,R=>{var V;if(!E){const D=R.data[0];ae(!!D,16349);const L=D,F=(L==null?void 0:L.error)||((V=L[0])==null?void 0:V.error);if(F){M(Oe,`RPC '${e}' stream ${r} received error:`,F);const q=F.status;let z=function(w){const _=we[w];if(_!==void 0)return wh(_)}(q),j=F.message;q==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=x.INTERNAL,j="Unknown error status: "+q+" with message "+F.message),E=!0,S.o_(new U(z,j)),m.close()}else M(Oe,`RPC '${e}' stream ${r} received:`,D),S.__(D)}}),jn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zu()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){return new jn(n)}function oo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){return new Jg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.c_=!1;class Lh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="PersistentStream";class Mh{constructor(e,t,s,r,i,a,c,u){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(vt(t.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new U(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(Tl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(M(Tl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G_ extends Mh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Zg(this.serializer,e),s=function(i){if(!("targetChange"in i))return J.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?ut(a.readTime):J.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=xo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=So(u)?{documents:n_(i,u)}:{query:s_(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=bh(i,a.resumeToken);const d=Po(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(J.min())>0){c.readTime=Jr(i,a.snapshotVersion.toTimestamp());const d=Po(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const s=i_(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=xo(this.serializer),t.removeTarget=e,this.K_(t)}}class Q_ extends Mh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=t_(e.writeResults,e.commitTime),s=ut(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=xo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>e_(this.serializer,s))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{}class J_ extends K_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ro(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(x.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Ro(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(x.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Y_(n,e,t,s){return new J_(n,e,t,s)}class X_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="RemoteStore";class Z_{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{s.enqueueAndForget(async()=>{Tn(this)&&(M(mn,"Restarting streams for network reachability change."),await async function(u){const d=Y(u);d.Ea.add(4),await Zs(d),d.Va.set("Unknown"),d.Ea.delete(4),await bi(d)}(this))})}),this.Va=new X_(s,r)}}async function bi(n){if(Tn(n))for(const e of n.Ra)await e(!0)}async function Zs(n){for(const e of n.Ra)await e(!1)}function jh(n,e){const t=Y(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fa(t)?da(t):ns(t).O_()&&ha(t,e))}function ua(n,e){const t=Y(n),s=ns(t);t.Ia.delete(e),s.O_()&&Fh(t,e),t.Ia.size===0&&(s.O_()?s.L_():Tn(t)&&t.Va.set("Unknown"))}function ha(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).Z_(e)}function Fh(n,e){n.da.$e(e),ns(n).X_(e)}function da(n){n.da=new Wg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.Va.ua()}function fa(n){return Tn(n)&&!ns(n).x_()&&n.Ia.size>0}function Tn(n){return Y(n).Ea.size===0}function qh(n){n.da=void 0}async function ey(n){n.Va.set("Online")}async function ty(n){n.Ia.forEach((e,t)=>{ha(n,e)})}async function ny(n,e){qh(n),fa(n)?(n.Va.ha(e),da(n)):n.Va.set("Unknown")}async function sy(n,e,t){if(n.Va.set("Online"),e instanceof Th&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.da.removeTarget(c))}(n,e)}catch(s){M(mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xr(n,s)}else if(e instanceof Vr?n.da.Xe(e):e instanceof vh?n.da.st(e):n.da.tt(e),!t.isEqual(J.min()))try{const s=await Oh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Ve.EMPTY_BYTE_STRING,m.snapshotVersion)),Fh(i,u);const g=new Mt(m.target,u,d,m.sequenceNumber);ha(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){M(mn,"Failed to raise snapshot:",s),await Xr(n,s)}}async function Xr(n,e,t){if(!ts(e))throw e;n.Ea.add(1),await Zs(n),n.Va.set("Offline"),t||(t=()=>Oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(mn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await bi(n)})}function Uh(n,e){return e().catch(t=>Xr(n,t,e))}async function Ai(n){const e=Y(n),t=Kt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ko;for(;ry(e);)try{const r=await j_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,iy(e,r)}catch(r){await Xr(e,r)}zh(e)&&Bh(e)}function ry(n){return Tn(n)&&n.Ta.length<10}function iy(n,e){n.Ta.push(e);const t=Kt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function zh(n){return Tn(n)&&!Kt(n).x_()&&n.Ta.length>0}function Bh(n){Kt(n).start()}async function oy(n){Kt(n).ra()}async function ay(n){const e=Kt(n);for(const t of n.Ta)e.ea(t.mutations)}async function cy(n,e,t){const s=n.Ta.shift(),r=sa.from(s,e,t);await Uh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Ai(n)}async function ly(n,e){e&&Kt(n).Y_&&await async function(s,r){if(function(a){return Bg(a)&&a!==x.ABORTED}(r.code)){const i=s.Ta.shift();Kt(s).B_(),await Uh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ai(s)}}(n,e),zh(n)&&Bh(n)}async function bl(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),M(mn,"RemoteStore received new credentials");const s=Tn(t);t.Ea.add(3),await Zs(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await bi(t)}async function uy(n,e){const t=Y(n);e?(t.Ea.delete(2),await bi(t)):e||(t.Ea.add(2),await Zs(t),t.Va.set("Unknown"))}function ns(n){return n.ma||(n.ma=function(t,s,r){const i=Y(t);return i.sa(),new G_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:ey.bind(null,n),Yo:ty.bind(null,n),t_:ny.bind(null,n),J_:sy.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),fa(n)?da(n):n.Va.set("Unknown")):(await n.ma.stop(),qh(n))})),n.ma}function Kt(n){return n.fa||(n.fa=function(t,s,r){const i=Y(t);return i.sa(),new Q_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:oy.bind(null,n),t_:ly.bind(null,n),ta:ay.bind(null,n),na:cy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Ai(n)):(await n.fa.stop(),n.Ta.length>0&&(M(mn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ma(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,e){if(vt("AsyncQueue",`${e}: ${n}`),ts(n))return new U(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||H.comparator(t.key,s.key):(t,s)=>H.comparator(t.key,s.key),this.keyedMap=ks(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Fn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.ga=new ge(H.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Kn{constructor(e,t,s,r,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Kn(e,t,Fn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class dy{constructor(){this.queries=Sl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Y(t),i=r.queries;r.queries=Sl(),i.forEach((a,c)=>{for(const u of c.ba)u.onError(s)})})(this,new U(x.ABORTED,"Firestore shutting down"))}}function Sl(){return new wn(n=>lh(n),yi)}async function Hh(n,e){const t=Y(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new hy,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=pa(a,`Initialization of query '${On(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ga(t)}async function $h(n,e){const t=Y(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function fy(n,e){const t=Y(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.ba)c.Fa(r)&&(s=!0);a.wa=r}}s&&ga(t)}function my(n,e,t){const s=Y(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function ga(n){n.Ca.forEach(e=>{e.next()})}var Vo,Cl;(Cl=Vo||(Vo={})).Ma="default",Cl.Cache="cache";class Wh{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Kn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.key=e}}class Qh{constructor(e){this.key=e}}class py{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=uh(e),this.tu=new Fn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Al,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((m,g)=>{const E=r.get(m),S=Ii(this.query,g)?g:null,R=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;E&&S?E.data.isEqual(S.data)?R!==V&&(s.track({type:3,doc:S}),D=!0):this.su(E,S)||(s.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(c=!0)):!E&&S?(s.track({type:0,doc:S}),D=!0):E&&!S&&(s.track({type:1,doc:E}),D=!0,(u||d)&&(c=!0)),D&&(S?(a=a.add(S),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,g)=>function(S,R){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:D})}};return V(S)-V(R)}(m.type,g.type)||this.eu(m.doc,g.doc)),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],u=this.Ya.size===0&&this.current&&!r?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new Kn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Al,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Qh(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Gh(s))}),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _a="SyncEngine";class gy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class _y{constructor(e){this.key=e,this.hu=!1}}class yy{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new wn(c=>lh(c),yi),this.Iu=new Map,this.Eu=new Set,this.Ru=new ge(H.comparator),this.Au=new Map,this.Vu=new oa,this.du={},this.mu=new Map,this.fu=Qn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Iy(n,e,t=!0){const s=ed(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Kh(s,e,t,!0),r}async function Ey(n,e){const t=ed(n);await Kh(t,e,!0,!1)}async function Kh(n,e,t,s){const r=await F_(n.localStore,ct(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await wy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&jh(n.remoteStore,r),c}async function wy(n,e,t,s,r){n.pu=(g,E,S)=>async function(V,D,L,F){let q=D.view.ru(L);q.Ss&&(q=await Il(V.localStore,D.query,!1).then(({documents:w})=>D.view.ru(w,q)));const z=F&&F.targetChanges.get(D.targetId),j=F&&F.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(q,V.isPrimaryClient,z,j);return Rl(V,D.targetId,$.au),$.snapshot}(n,g,E,S);const i=await Il(n.localStore,e,!0),a=new py(e,i.ks),c=a.ru(i.documents),u=Xs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,u);Rl(n,t,d.au);const m=new gy(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function vy(n,e,t){const s=Y(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(a=>!yi(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await No(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&ua(s.remoteStore,r.targetId),Oo(s,r.targetId)}).catch(es)):(Oo(s,r.targetId),await No(s.localStore,r.targetId,!0))}async function Ty(n,e){const t=Y(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ua(t.remoteStore,s.targetId))}async function by(n,e,t){const s=xy(n);try{const r=await function(a,c){const u=Y(a),d=pe.now(),m=c.reduce((S,R)=>S.add(R.key),se());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Tt(),V=se();return u.xs.getEntries(S,m).next(D=>{R=D,R.forEach((L,F)=>{F.isValidDocument()||(V=V.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(D=>{g=D;const L=[];for(const F of c){const q=jg(F,g.get(F.key).overlayedDocument);q!=null&&L.push(new vn(F.key,q,nh(q.value.mapValue),lt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,L,c)}).next(D=>{E=D;const L=D.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(S,D.batchId,L)})}).then(()=>({batchId:E.batchId,changes:dh(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let d=a.du[a.currentUser.toKey()];d||(d=new ge(ne)),d=d.insert(c,u),a.du[a.currentUser.toKey()]=d}(s,r.batchId,t),await er(s,r.changes),await Ai(s.remoteStore)}catch(r){const i=pa(r,"Failed to persist write");t.reject(i)}}async function Jh(n,e){const t=Y(n);try{const s=await L_(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Au.get(i);a&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?ae(a.hu,14607):r.removedDocuments.size>0&&(ae(a.hu,42227),a.hu=!1))}),await er(t,s,e)}catch(s){await es(s)}}function Pl(n,e,t){const s=Y(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=Y(a);u.onlineState=c;let d=!1;u.queries.forEach((m,g)=>{for(const E of g.ba)E.va(c)&&(d=!0)}),d&&ga(u)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ay(n,e,t){const s=Y(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new ge(H.comparator);a=a.insert(i,Me.newNoDocument(i,J.min()));const c=se().add(i),u=new vi(J.min(),new Map,new ge(ne),a,c);await Jh(s,u),s.Ru=s.Ru.remove(i),s.Au.delete(e),ya(s)}else await No(s.localStore,e,!1).then(()=>Oo(s,e,t)).catch(es)}async function Sy(n,e){const t=Y(n),s=e.batch.batchId;try{const r=await O_(t.localStore,e);Xh(t,s,null),Yh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await er(t,r)}catch(r){await es(r)}}async function Cy(n,e,t){const s=Y(n);try{const r=await function(a,c){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(ae(g!==null,37113),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(s.localStore,e);Xh(s,e,t),Yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await er(s,r)}catch(r){await es(r)}}function Yh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Xh(n,e,t){const s=Y(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Oo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||Zh(n,s)})}function Zh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(ua(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),ya(n))}function Rl(n,e,t){for(const s of t)s instanceof Gh?(n.Vu.addReference(s.key,e),Py(n,s)):s instanceof Qh?(M(_a,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Zh(n,s.key)):Q(19791,{wu:s})}function Py(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(_a,"New document in limbo: "+t),n.Eu.add(s),ya(n))}function ya(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new H(me.fromString(e)),s=n.fu.next();n.Au.set(s,new _y(t)),n.Ru=n.Ru.insert(t,s),jh(n.remoteStore,new Mt(ct(ea(t.path)),s,"TargetPurposeLimboResolution",mi.ce))}}async function er(n,e,t){const s=Y(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((c,u)=>{a.push(s.pu(u,e,t).then(d=>{var m;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){r.push(d);const g=ca.Es(u.targetId,d);i.push(g)}}))}),await Promise.all(a),s.Pu.J_(r),await async function(u,d){const m=Y(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,E=>k.forEach(E.Ts,S=>m.persistence.referenceDelegate.addReference(g,E.targetId,S)).next(()=>k.forEach(E.Is,S=>m.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))}catch(g){if(!ts(g))throw g;M(la,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const S=m.vs.get(E),R=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(E,V)}}}(s.localStore,i))}async function Ry(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){M(_a,"User change. New user:",e.toKey());const s=await Vh(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new U(x.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await er(t,s.Ns)}}function ky(n,e){const t=Y(n),s=t.Au.get(e);if(s&&s.hu)return se().add(s.key);{let r=se();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function ed(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ky.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ay.bind(null,e),e.Pu.J_=fy.bind(null,e.eventManager),e.Pu.yu=my.bind(null,e.eventManager),e}function xy(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cy.bind(null,e),e}class Zr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return V_(this.persistence,new x_,e.initialUser,this.serializer)}Cu(e){return new Dh(aa.Vi,this.serializer)}Du(e){return new U_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zr.provider={build:()=>new Zr};class Ny extends Zr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ae(this.persistence.referenceDelegate instanceof Yr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new g_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new Dh(s=>Yr.Vi(s,t),this.serializer)}}class Lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ry.bind(null,this.syncEngine),await uy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dy}()}createDatastore(e){const t=Ti(e.databaseInfo.databaseId),s=W_(e.databaseInfo);return Y_(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Z_(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Pl(this.syncEngine,t,0),function(){return vl.v()?new vl:new z_}())}createSyncEngine(e,t){return function(r,i,a,c,u,d,m){const g=new yy(r,i,a,c,u,d);return m&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=Y(r);M(mn,"RemoteStore shutting down."),i.Ea.add(5),await Zs(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Lo.provider={build:()=>new Lo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class td{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class Dy{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=Go.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{M(Jt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(M(Jt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=pa(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ao(n,e){n.asyncQueue.verifyOperationInProgress(),M(Jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Vh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Vy(n);M(Jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>bl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>bl(e.remoteStore,r)),n._onlineComponents=e}async function Vy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Jt,"Using user provided OfflineComponentProvider");try{await ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===x.FAILED_PRECONDITION||r.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await ao(n,new Zr)}}else M(Jt,"Using default OfflineComponentProvider"),await ao(n,new Ny(void 0));return n._offlineComponents}async function nd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Jt,"Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(M(Jt,"Using default OnlineComponentProvider"),await kl(n,new Lo))),n._onlineComponents}function Oy(n){return nd(n).then(e=>e.syncEngine)}async function sd(n){const e=await nd(n),t=e.eventManager;return t.onListen=Iy.bind(null,e.syncEngine),t.onUnlisten=vy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ey.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ty.bind(null,e.syncEngine),t}function Ly(n,e,t={}){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new td({next:E=>{m.Nu(),a.enqueueAndForget(()=>$h(i,g));const S=E.docs.has(c);!S&&E.fromCache?d.reject(new U(x.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&u&&u.source==="server"?d.reject(new U(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Wh(ea(c.path),m,{includeMetadataChanges:!0,Ka:!0});return Hh(i,g)}(await sd(n),n.asyncQueue,e,t,s)),s.promise}function My(n,e,t={}){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new td({next:E=>{m.Nu(),a.enqueueAndForget(()=>$h(i,g)),E.fromCache&&u.source==="server"?d.reject(new U(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Wh(c,m,{includeMetadataChanges:!0,Ka:!0});return Hh(i,g)}(await sd(n),n.asyncQueue,e,t,s)),s.promise}function jy(n,e){const t=new Et;return n.asyncQueue.enqueueAndForget(async()=>by(await Oy(n),e,t)),t.promise}/**
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
 */function rd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="ComponentProvider",xl=new Map;function qy(n,e,t,s,r){return new og(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,rd(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="firestore.googleapis.com",Nl=!0;class Dl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=id,this.ssl=Nl}else this.host=e.host,this.ssl=e.ssl??Nl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<m_)throw new U(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rd(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Si{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Fp;switch(s.type){case"firstParty":return new Bp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=xl.get(t);s&&(M(Fy,"Removing Datastore"),xl.delete(t),s.terminate())}(this),Promise.resolve()}}function Uy(n,e,t,s={}){var d;n=Ht(n,Si);const r=Yn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Pu(`https://${c}`),Ru("Firestore",!0)),i.host!==id&&i.host!==c&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:r,emulatorOptions:s};if(!Bt(u,a)&&(n._setSettings(u),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Le.MOCK_USER;else{m=hm(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new U(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Le(E)}n._authCredentials=new qp(new Hu(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Ae{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Js(t,Ae._jsonSchema))return new Ae(e,s||null,new H(me.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:ve("string",Ae._jsonSchemaVersion),referencePath:ve("string")};class Ut extends Ci{constructor(e,t,s){super(e,t,ea(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new H(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function zy(n,e,...t){if(n=De(n),$u("collection","path",e),n instanceof Si){const s=me.fromString(e,...t);return Gc(s),new Ut(n,null,s)}{if(!(n instanceof Ae||n instanceof Ut))throw new U(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(me.fromString(e,...t));return Gc(s),new Ut(n.firestore,null,s)}}function bn(n,e,...t){if(n=De(n),arguments.length===1&&(e=Go.newId()),$u("doc","path",e),n instanceof Si){const s=me.fromString(e,...t);return Wc(s),new Ae(n,null,new H(s))}{if(!(n instanceof Ae||n instanceof Ut))throw new U(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(me.fromString(e,...t));return Wc(s),new Ae(n.firestore,n instanceof Ut?n.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="AsyncQueue";class Ol{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lh(this,"async_queue_retry"),this._c=()=>{const s=oo();s&&M(Vl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=oo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=oo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Et;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ts(e))throw e;M(Vl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,vt("INTERNAL UNHANDLED ERROR: ",Ll(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=ma.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&Q(47125,{Pc:Ll(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ll(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class tr extends Si{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ol,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ol(e),this._firestoreClient=void 0,await e}}}function By(n,e){const t=typeof n=="object"?n:$o(),s=typeof n=="string"?n:Hr,r=In(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=lm("firestore");i&&Uy(r,...i)}return r}function Ia(n){if(n._terminated)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hy(n),n._firestoreClient}function Hy(n){var s,r,i,a;const e=n._freezeSettings(),t=qy(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Dy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(Ve.fromBase64String(e))}catch(t){throw new U(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Js(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:ve("string",Qe._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(Js(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:ve("string",ht._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class et{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Js(e,et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new et(e.vectorValues);throw new U(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}et._jsonSchemaVersion="firestore/vectorValue/1.0",et._jsonSchema={type:ve("string",et._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=/^__.*__$/;class Wy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ys(e,this.data,t,this.fieldTransforms)}}function cd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:n})}}class Ea{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ei(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(cd(this.dataSource)&&$y.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Gy{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ti(e)}createContext(e,t,s,r=!1){return new Ea({dataSource:e,methodName:t,targetDoc:s,path:Ne.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qy(n){const e=n._freezeSettings(),t=Ti(n._databaseId);return new Gy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ky(n,e,t,s,r,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);dd("Data must be an object, but it was:",a,s);const c=ud(s,a);let u,d;if(i.merge)u=new Xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const E=wa(e,g,t);if(!a.contains(E))throw new U(x.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Xy(m,E)||m.push(E)}u=new Xe(m),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new Wy(new Ge(c),u,d)}function ld(n,e){if(hd(n=De(n)))return dd("Unsupported field value:",e,n),ud(n,e);if(n instanceof ad)return function(s,r){if(!cd(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let u=ld(c,r.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ng(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=pe.fromDate(s);return{timestampValue:Jr(r.serializer,i)}}if(s instanceof pe){const i=new pe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jr(r.serializer,i)}}if(s instanceof ht)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qe)return{bytesValue:bh(r.serializer,s._byteString)};if(s instanceof Ae){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ia(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof et)return function(a,c){const u=a instanceof et?a.toArray():a;return{mapValue:{fields:{[eh]:{stringValue:th},[$r]:{arrayValue:{values:u.map(m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return ta(c.serializer,m)})}}}}}}(s,r);if(xh(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Qo(s)}`)}(n,e)}function ud(n,e){const t={};return Qu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,(s,r)=>{const i=ld(r,e.childContextForField(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function hd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof ht||n instanceof Qe||n instanceof Ae||n instanceof ad||n instanceof et||xh(n))}function dd(n,e,t){if(!hd(t)||!Wu(t)){const s=Qo(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function wa(n,e,t){if((e=De(e))instanceof od)return e._internalPath;if(typeof e=="string")return Yy(n,e);throw ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const Jy=new RegExp("[~\\*/\\[\\]]");function Yy(n,e,t){if(e.search(Jy)>=0)throw ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new od(...e.split("."))._internalPath}catch{throw ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ei(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new U(x.INVALID_ARGUMENT,c+n+u)}function Xy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{convertValue(e,t="none"){switch(Qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return En(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[$r].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>Ie(a.doubleValue));return new et(t)}convertGeoPoint(e){return new ht(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=Wt(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=me.fromString(e);ae(kh(s),9688,{name:e});const r=new Bs(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(t)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class fd extends Zy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}const Ml="@firebase/firestore",jl="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(wa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eI extends md{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function nI(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends md{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(wa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:ve("string",hn._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class Or extends hn{data(e={}){return super.data(e)}}class qn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ns(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Or(this._firestore,this._userDataWriter,s.key,s,new Ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ns(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ns(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:sI(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Go.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */qn._jsonSchemaVersion="firestore/querySnapshot/1.0",qn._jsonSchema={type:ve("string",qn._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){n=Ht(n,Ae);const e=Ht(n.firestore,tr),t=Ia(e);return Ly(t,n._key).then(s=>oI(e,n,s))}function rI(n){n=Ht(n,Ci);const e=Ht(n.firestore,tr),t=Ia(e),s=new fd(e);return tI(n._query),My(t,n._query).then(r=>new qn(e,s,n,r))}function Pi(n,e,t){n=Ht(n,Ae);const s=Ht(n.firestore,tr),r=nI(n.converter,e),i=Qy(s);return gd(s,[Ky(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,lt.none())])}function iI(n){return gd(Ht(n.firestore,tr),[new na(n._key,lt.none())])}function gd(n,e){const t=Ia(n);return jy(t,e)}function oI(n,e,t){const s=t.docs.get(e._key),r=new fd(n);return new hn(n,r,e._key,s,new Ns(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){jp(Xn),ft(new nt("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new tr(new Up(s.getProvider("auth-internal")),new Hp(a,s.getProvider("app-check-internal")),ag(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ke(Ml,jl,e),Ke(Ml,jl,"esm2020")})();var aI="firebase",cI="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(aI,cI,"app");function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lI=_d,yd=new yn("auth","Firebase",_d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new fi("@firebase/auth");function uI(n,...e){ti.logLevel<=te.WARN&&ti.warn(`Auth (${Xn}): ${n}`,...e)}function Lr(n,...e){ti.logLevel<=te.ERROR&&ti.error(`Auth (${Xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw Ta(n,...e)}function tt(n,...e){return Ta(n,...e)}function va(n,e,t){const s={...lI(),[e]:t};return new yn("auth","Firebase",s).create(e,{appName:n.name})}function zt(n){return va(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hI(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Je(n,"argument-error"),va(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return yd.create(n,...e)}function G(n,e,...t){if(!n)throw Ta(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lr(e),new Error(e)}function bt(n,e){n||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function dI(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dI()||Uo()||"connection"in navigator)?navigator.onLine:!0}function mI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,bt(t>e,"Short delay should be less than long delay!"),this.isMobile=mm()||_m()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e){bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_I=new nr(3e4,6e4);function An(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yt(n,e,t,s,r={}){return Ed(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ks({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return gm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(d.credentials="include"),Id.fetch()(await wd(n,n.config.apiHost,t,c),d)})}async function Ed(n,e,t){n._canInitEmulator=!1;const s={...pI,...e};try{const r=new II(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Pr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Pr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Pr(n,"user-disabled",a);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw va(n,m,d);Je(n,m)}}catch(r){if(r instanceof st)throw r;Je(n,"network-request-failed",{message:String(r)})}}async function Ri(n,e,t,s,r={}){const i=await Yt(n,e,t,s,r);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function wd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?ba(n.config,r):`${n.config.apiScheme}://${r}`;return gI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function yI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class II{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),_I.get())})}}function Pr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=tt(n,e,s);return r.customData._tokenResponse=t,r}function ql(n){return n!==void 0&&n.enterprise!==void 0}class EI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wI(n,e){return Yt(n,"GET","/v2/recaptchaConfig",An(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(n,e){return Yt(n,"POST","/v1/accounts:delete",e)}async function ni(n,e){return Yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(n,e=!1){const t=De(n),s=await t.getIdToken(e),r=Aa(s);G(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:js(co(r.auth_time)),issuedAtTime:js(co(r.iat)),expirationTime:js(co(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function co(n){return Number(n)*1e3}function Aa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=bu(t);return r?JSON.parse(r):(Lr("Failed to decode base64 JWT payload"),null)}catch(r){return Lr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ul(n){const e=Aa(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof st&&bI(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function bI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function si(n){var g;const e=n.auth,t=await n.getIdToken(),s=await Gs(n,ni(e,{idToken:t}));G(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?vd(r.providerUserInfo):[],a=CI(n.providerData,i),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function SI(n){const e=De(n);await si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CI(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function vd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(n,e){const t=await Ed(n,{},async()=>{const s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await wd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(u.credentials="include"),Id.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function RI(n,e){return Yt(n,"POST","/v2/accounts:revokeToken",An(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await PI(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Un;return s&&(G(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new AI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TI(this,e)}reload(){return SI(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await si(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Gs(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:S,providerData:R,stsTokenManager:V}=t;G(g&&V,e,"internal-error");const D=Un.fromJSON(this.name,V);G(typeof g=="string",e,"internal-error"),Dt(s,e.name),Dt(r,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Dt(i,e.name),Dt(a,e.name),Dt(c,e.name),Dt(u,e.name),Dt(d,e.name),Dt(m,e.name);const L=new Ze({uid:g,auth:e,email:r,emailVerified:E,displayName:s,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:d,lastLoginAt:m});return R&&Array.isArray(R)&&(L.providerData=R.map(F=>({...F}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,s=!1){const r=new Un;r.updateFromServerResponse(t);const i=new Ze({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await si(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];G(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?vd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Un;c.updateFromIdToken(s);const u=new Ze({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function It(n){bt(n instanceof Function,"Expected a class definition");let e=zl.get(n);return e?(bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zl.set(n,e),e)}/**
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
 */class Td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Td.type="NONE";const Bl=Td;/**
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
 */function Mr(n,e,t){return`firebase:${n}:${e}:${t}`}class zn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ni(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new zn(It(Bl),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||It(Bl);const a=Mr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const E=await ni(e,{idToken:m}).catch(()=>{});if(!E)break;g=await Ze._fromGetAccountInfoResponse(e,E,m)}else g=Ze._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zn(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new zn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rd(e))return"Blackberry";if(kd(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||Sd(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bd(n=je()){return/firefox\//i.test(n)}function Ad(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sd(n=je()){return/crios\//i.test(n)}function Cd(n=je()){return/iemobile/i.test(n)}function Pd(n=je()){return/android/i.test(n)}function Rd(n=je()){return/blackberry/i.test(n)}function kd(n=je()){return/webos/i.test(n)}function Sa(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kI(n=je()){var e;return Sa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function xI(){return ym()&&document.documentMode===10}function xd(n=je()){return Sa(n)||Pd(n)||kd(n)||Rd(n)||/windows phone/i.test(n)||Cd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e=[]){let t;switch(n){case"Browser":t=Hl(je());break;case"Worker":t=`${Hl(je())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${s}`}/**
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
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function DI(n,e={}){return Yt(n,"GET","/v2/passwordPolicy",An(n,e))}/**
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
 */const VI=6;class OI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??VI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ni(this,{idToken:e}),s=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await si(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(zt(this));const t=e?De(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),t=new OI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await RI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&uI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Sn(n){return De(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=bm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(n){ki=n}function Dd(n){return ki.loadJS(n)}function jI(){return ki.recaptchaEnterpriseScript}function FI(){return ki.gapiScript}function qI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class UI{constructor(){this.enterprise=new zI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const BI="recaptcha-enterprise",Vd="NO_RECAPTCHA";class HI{constructor(e){this.type=BI,this.auth=Sn(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{wI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new EI(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function r(i,a,c){const u=window.grecaptcha;ql(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Vd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&ql(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jI();u.length!==0&&(u+=c),Dd(u).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Wl(n,e,t,s=!1,r=!1){const i=new HI(n);let a;if(r)a=Vd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Gl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Wl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Wl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n,e){const t=In(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Bt(i,e??{}))return r;Je(r,"already-initialized")}return t.initialize({options:e})}function WI(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function GI(n,e,t){const s=Sn(n);G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Od(e),{host:a,port:c}=QI(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){G(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),G(Bt(d,s.config.emulator)&&Bt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,Yn(a)?(Pu(`${i}//${a}${u}`),Ru("Auth",!0)):KI()}function Od(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QI(n){const e=Od(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ql(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Ql(a)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function KI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function JI(n,e){return Yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(n,e){return Ri(n,"POST","/v1/accounts:signInWithPassword",An(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",An(n,e))}async function ZI(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",An(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Ca{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gl(e,t,"signInWithPassword",YI);case"emailLink":return XI(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gl(e,s,"signUpPassword",JI);case"emailLink":return ZI(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return Ri(n,"POST","/v1/accounts:signInWithIdp",An(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="http://localhost";class pn extends Ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new pn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:eE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nE(n){const e=Cs(Ps(n)).link,t=e?Cs(Ps(e)).deep_link_id:null,s=Cs(Ps(n)).deep_link_id;return(s?Cs(Ps(s)).link:null)||s||t||e||n}class Pa{constructor(e){const t=Cs(Ps(e)),s=t.apiKey??null,r=t.oobCode??null,i=tE(t.mode??null);G(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=nE(e);try{return new Pa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Pa.parseLink(t);return G(s,"argument-error"),Qs._fromEmailAndCode(e,s.code,s.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sr extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends sr{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _t.credential(t,s)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends sr{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends sr{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Lt.credential(t,s)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ze._fromIdTokenResponse(e,s,r),a=Kl(s);return new Jn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Kl(s);return new Jn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends st{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ri(e,t,s,r)}}function Ld(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,s):i})}async function sE(n,e,t=!1){const s=await Gs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",s)}/**
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
 */async function rE(n,e,t=!1){const{auth:s}=n;if(We(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Gs(n,Ld(s,r,e,n),t);G(i.idToken,s,"internal-error");const a=Aa(i.idToken);G(a,s,"internal-error");const{sub:c}=a;return G(n.uid===c,s,"user-mismatch"),Jn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(n,e,t=!1){if(We(n.app))return Promise.reject(zt(n));const s="signIn",r=await Ld(n,s,e),i=await Jn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function iE(n,e){return Md(Sn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(n){const e=Sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function aE(n,e,t){return We(n.app)?Promise.reject(zt(n)):iE(De(n),ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&oE(n),s})}function cE(n,e,t,s){return De(n).onIdTokenChanged(e,t,s)}function lE(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function uE(n,e,t,s){return De(n).onAuthStateChanged(e,t,s)}function hE(n){return De(n).signOut()}const ii="__sak";/**
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
 */class jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=1e3,fE=10;class Fd extends jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);xI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fE):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fd.type="LOCAL";const mE=Fd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qd.type="SESSION";const Ud=qd;/**
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
 */function pE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new xi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await pE(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=ka("",20);r.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function _E(n){dt().location.href=n}/**
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
 */function zd(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function yE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function EE(){return zd()?self:null}/**
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
 */const Bd="firebaseLocalStorageDb",wE=1,oi="firebaseLocalStorage",Hd="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function vE(){const n=indexedDB.deleteDatabase(Bd);return new rr(n).toPromise()}function Fo(){const n=indexedDB.open(Bd,wE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oi,{keyPath:Hd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oi)?e(s):(s.close(),await vE(),e(await Fo()))})})}async function Jl(n,e,t){const s=Ni(n,!0).put({[Hd]:e,value:t});return new rr(s).toPromise()}async function TE(n,e){const t=Ni(n,!1).get(e),s=await new rr(t).toPromise();return s===void 0?null:s.value}function Yl(n,e){const t=Ni(n,!0).delete(e);return new rr(t).toPromise()}const bE=800,AE=3;class $d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xi._getInstance(EE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await yE(),!this.activeServiceWorker)return;this.sender=new gE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await Jl(e,ii,"1"),await Yl(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>TE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ni(r,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$d.type="LOCAL";const SE=$d;new nr(3e4,6e4);/**
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
 */function Wd(n,e){return e?It(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xa extends Ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CE(n){return Md(n.auth,new xa(n),n.bypassAuthState)}function PE(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),rE(t,new xa(n),n.bypassAuthState)}async function RE(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),sE(t,new xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return PE;default:Je(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new nr(2e3,1e4);async function xE(n,e,t){if(We(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const s=Sn(n);hI(n,e,Ra);const r=Wd(s,t);return new ln(s,"signInViaPopup",e,r).executeNotNull()}class ln extends Gd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="pendingRedirect",jr=new Map;class DE extends Gd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const s=await VE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VE(n,e){const t=ME(e),s=LE(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function OE(n,e){jr.set(n._key(),e)}function LE(n){return It(n._redirectPersistence)}function ME(n){return Mr(NE,n.config.apiKey,n.name)}async function jE(n,e,t=!1){if(We(n.app))return Promise.reject(zt(n));const s=Sn(n),r=Wd(s,e),a=await new DE(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=10*60*1e3;class qE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Qd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(n,e={}){return Yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HE=/^https?/;async function $E(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zE(n);for(const t of e)try{if(WE(t))return}catch{}Je(n,"unauthorized-domain")}function WE(n){const e=Mo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!HE.test(t))return!1;if(BE.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const GE=new nr(3e4,6e4);function Zl(){const n=dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function QE(n){return new Promise((e,t)=>{var r,i,a;function s(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(tt(n,"network-request-failed"))},timeout:GE.get()})}if((i=(r=dt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=dt().gapi)!=null&&a.load)s();else{const c=qI("iframefcb");return dt()[c]=()=>{gapi.load?s():t(tt(n,"network-request-failed"))},Dd(`${FI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Fr=null,e})}let Fr=null;function KE(n){return Fr=Fr||QE(n),Fr}/**
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
 */const JE=new nr(5e3,15e3),YE="__/auth/iframe",XE="emulator/auth/iframe",ZE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ew=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tw(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ba(e,XE):`https://${n.config.authDomain}/${YE}`,s={apiKey:e.apiKey,appName:n.name,v:Xn},r=ew.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ks(s).slice(1)}`}async function nw(n){const e=await KE(n),t=dt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:tw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),c=dt().setTimeout(()=>{i(a)},JE.get());function u(){dt().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const sw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rw=500,iw=600,ow="_blank",aw="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cw(n,e,t,s=rw,r=iw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...sw,width:s.toString(),height:r.toString(),top:i,left:a},d=je().toLowerCase();t&&(c=Sd(d)?ow:t),bd(d)&&(e=e||aw,u.scrollbars="yes");const m=Object.entries(u).reduce((E,[S,R])=>`${E}${S}=${R},`,"");if(kI(d)&&c!=="_self")return lw(e||"",c),new eu(null);const g=window.open(e||"",c,m);G(g,n,"popup-blocked");try{g.focus()}catch{}return new eu(g)}function lw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const uw="__/auth/handler",hw="emulator/auth/handler",dw=encodeURIComponent("fac");async function tu(n,e,t,s,r,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xn,eventId:r};if(e instanceof Ra){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Tm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof sr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${dw}=${encodeURIComponent(u)}`:"";return`${fw(n)}?${Ks(c).slice(1)}${d}`}function fw({config:n}){return n.emulator?ba(n,hw):`https://${n.authDomain}/${uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="webStorageSupport";class mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ud,this._completeRedirectFn=jE,this._overrideRedirectResult=OE}async _openPopup(e,t,s,r){var a;bt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await tu(e,t,s,Mo(),r);return cw(e,i,ka())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await tu(e,t,s,Mo(),r);return _E(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(bt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nw(e),s=new qE(e);return t.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lo,{type:lo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[lo];i!==void 0&&t(!!i),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$E(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xd()||Ad()||Sa()}}const pw=mw;var nu="@firebase/auth",su="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yw(n){ft(new nt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nd(n)},d=new LI(s,r,i,u);return WI(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ft(new nt("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(s=>new gw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(nu,su,_w(n)),Ke(nu,su,"esm2020")}/**
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
 */const Iw=5*60,Ew=Cu("authIdTokenMaxAge")||Iw;let ru=null;const ww=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Ew)return;const r=t==null?void 0:t.token;ru!==r&&(ru=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function vw(n=$o()){const e=In(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$I(n,{popupRedirectResolver:pw,persistence:[SE,mE,Ud]}),s=Cu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=ww(i.toString());lE(t,a,()=>a(t.currentUser)),cE(t,c=>a(c))}}const r=Au("auth");return r&&GI(t,`http://${r}`),t}function Tw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}MI({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Tw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yw("Browser");const Kd="@firebase/installations",Na="0.6.19";/**
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
 */const Jd=1e4,Yd=`w:${Na}`,Xd="FIS_v2",bw="https://firebaseinstallations.googleapis.com/v1",Aw=60*60*1e3,Sw="installations",Cw="Installations";/**
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
 */const Pw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gn=new yn(Sw,Cw,Pw);function Zd(n){return n instanceof st&&n.code.includes("request-failed")}/**
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
 */function ef({projectId:n}){return`${bw}/projects/${n}/installations`}function tf(n){return{token:n.token,requestStatus:2,expiresIn:kw(n.expiresIn),creationTime:Date.now()}}async function nf(n,e){const s=(await e.json()).error;return gn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Rw(n,{refreshToken:e}){const t=sf(n);return t.append("Authorization",xw(e)),t}async function rf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function kw(n){return Number(n.replace("s","000"))}function xw(n){return`${Xd} ${n}`}/**
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
 */async function Nw({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=ef(n),r=sf(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Xd,appId:n.appId,sdkVersion:Yd},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await rf(()=>fetch(s,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:tf(d.authToken)}}else throw await nf("Create Installation",u)}/**
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
 */function of(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Dw(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vw=/^[cdef][\w-]{21}$/,qo="";function Ow(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Lw(n);return Vw.test(t)?t:qo}catch{return qo}}function Lw(n){return Dw(n).substr(0,22)}/**
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
 */function Di(n){return`${n.appName}!${n.appId}`}/**
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
 */const af=new Map;function cf(n,e){const t=Di(n);lf(t,e),Mw(t,e)}function lf(n,e){const t=af.get(n);if(t)for(const s of t)s(e)}function Mw(n,e){const t=jw();t&&t.postMessage({key:n,fid:e}),Fw()}let un=null;function jw(){return!un&&"BroadcastChannel"in self&&(un=new BroadcastChannel("[Firebase] FID Change"),un.onmessage=n=>{lf(n.data.key,n.data.fid)}),un}function Fw(){af.size===0&&un&&(un.close(),un=null)}/**
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
 */const qw="firebase-installations-database",Uw=1,_n="firebase-installations-store";let uo=null;function Da(){return uo||(uo=Du(qw,Uw,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_n)}}})),uo}async function ai(n,e){const t=Di(n),r=(await Da()).transaction(_n,"readwrite"),i=r.objectStore(_n),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&cf(n,e.fid),e}async function uf(n){const e=Di(n),s=(await Da()).transaction(_n,"readwrite");await s.objectStore(_n).delete(e),await s.done}async function Vi(n,e){const t=Di(n),r=(await Da()).transaction(_n,"readwrite"),i=r.objectStore(_n),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&cf(n,c.fid),c}/**
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
 */async function Va(n){let e;const t=await Vi(n.appConfig,s=>{const r=zw(s),i=Bw(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===qo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function zw(n){const e=n||{fid:Ow(),registrationStatus:0};return hf(e)}function Bw(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(gn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Hw(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$w(n)}:{installationEntry:e}}async function Hw(n,e){try{const t=await Nw(n,e);return ai(n.appConfig,t)}catch(t){throw Zd(t)&&t.customData.serverCode===409?await uf(n.appConfig):await ai(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function $w(n){let e=await iu(n.appConfig);for(;e.registrationStatus===1;)await of(100),e=await iu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Va(n);return s||t}return e}function iu(n){return Vi(n,e=>{if(!e)throw gn.create("installation-not-found");return hf(e)})}function hf(n){return Ww(n)?{fid:n.fid,registrationStatus:0}:n}function Ww(n){return n.registrationStatus===1&&n.registrationTime+Jd<Date.now()}/**
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
 */async function Gw({appConfig:n,heartbeatServiceProvider:e},t){const s=Qw(n,t),r=Rw(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Yd,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await rf(()=>fetch(s,c));if(u.ok){const d=await u.json();return tf(d)}else throw await nf("Generate Auth Token",u)}function Qw(n,{fid:e}){return`${ef(n)}/${e}/authTokens:generate`}/**
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
 */async function Oa(n,e=!1){let t;const s=await Vi(n.appConfig,i=>{if(!df(i))throw gn.create("not-registered");const a=i.authToken;if(!e&&Yw(a))return i;if(a.requestStatus===1)return t=Kw(n,e),i;{if(!navigator.onLine)throw gn.create("app-offline");const c=Zw(i);return t=Jw(n,c),c}});return t?await t:s.authToken}async function Kw(n,e){let t=await ou(n.appConfig);for(;t.authToken.requestStatus===1;)await of(100),t=await ou(n.appConfig);const s=t.authToken;return s.requestStatus===0?Oa(n,e):s}function ou(n){return Vi(n,e=>{if(!df(e))throw gn.create("not-registered");const t=e.authToken;return ev(t)?{...e,authToken:{requestStatus:0}}:e})}async function Jw(n,e){try{const t=await Gw(n,e),s={...e,authToken:t};return await ai(n.appConfig,s),t}catch(t){if(Zd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await uf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ai(n.appConfig,s)}throw t}}function df(n){return n!==void 0&&n.registrationStatus===2}function Yw(n){return n.requestStatus===2&&!Xw(n)}function Xw(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Aw}function Zw(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function ev(n){return n.requestStatus===1&&n.requestTime+Jd<Date.now()}/**
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
 */async function tv(n){const e=n,{installationEntry:t,registrationPromise:s}=await Va(e);return s?s.catch(console.error):Oa(e).catch(console.error),t.fid}/**
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
 */async function nv(n,e=!1){const t=n;return await sv(t),(await Oa(t,e)).token}async function sv(n){const{registrationPromise:e}=await Va(n);e&&await e}/**
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
 */function rv(n){if(!n||!n.options)throw ho("App Configuration");if(!n.name)throw ho("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ho(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ho(n){return gn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="installations",iv="installations-internal",ov=n=>{const e=n.getProvider("app").getImmediate(),t=rv(e),s=In(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},av=n=>{const e=n.getProvider("app").getImmediate(),t=In(e,ff).getImmediate();return{getId:()=>tv(t),getToken:r=>nv(t,r)}};function cv(){ft(new nt(ff,ov,"PUBLIC")),ft(new nt(iv,av,"PRIVATE"))}cv();Ke(Kd,Na);Ke(Kd,Na,"esm2020");/**
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
 */const ci="analytics",lv="firebase_id",uv="origin",hv=60*1e3,dv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",La="https://www.googletagmanager.com/gtag/js";/**
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
 */const ze=new fi("@firebase/analytics");/**
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
 */const fv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new yn("analytics","Analytics",fv);/**
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
 */function mv(n){if(!n.startsWith(La)){const e=$e.create("invalid-gtag-resource",{gtagURL:n});return ze.warn(e.message),""}return n}function mf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function pv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function gv(n,e){const t=pv("firebase-js-sdk-policy",{createScriptURL:mv}),s=document.createElement("script"),r=`${La}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function _v(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function yv(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const u=(await mf(t)).find(d=>d.measurementId===r);u&&await e[u.appId]}}catch(c){ze.error(c)}n("config",r,i)}async function Iv(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await mf(t);for(const u of a){const d=c.find(g=>g.measurementId===u),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){ze.error(i)}}function Ev(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,u]=a;await Iv(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await yv(n,e,t,s,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){ze.error(c)}}return r}function wv(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Ev(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function vv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(La)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=30,bv=1e3;class Av{constructor(e={},t=bv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pf=new Av;function Sv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Cv(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:Sv(t)},r=dv.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function Pv(n,e=pf,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw $e.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw $e.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new xv;return setTimeout(async()=>{c.abort()},hv),gf({appId:s,apiKey:r,measurementId:i},a,c,e)}async function gf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=pf){var c;const{appId:i,measurementId:a}=n;try{await Rv(s,e)}catch(u){if(a)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await Cv(n);return r.deleteThrottleMetadata(i),u}catch(u){const d=u;if(!kv(d)){if(r.deleteThrottleMetadata(i),a)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw u}const m=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?Vc(t,r.intervalMillis,Tv):Vc(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,g),ze.debug(`Calling attemptFetch again in ${m} millis`),gf(n,g,s,r)}}function Rv(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s($e.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function kv(n){if(!(n instanceof st)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class xv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Nv(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function Dv(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(){if(zo())try{await Bo()}catch(n){return ze.warn($e.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ze.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ov(n,e,t,s,r,i,a){const c=Pv(n);c.then(E=>{t[E.measurementId]=E.appId,n.options.measurementId&&E.measurementId!==n.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>ze.error(E)),e.push(c);const u=Vv().then(E=>{if(E)return s.getId()}),[d,m]=await Promise.all([c,u]);vv(i)||gv(i,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[uv]="firebase",g.update=!0,m!=null&&(g[lv]=m),r("config",d.measurementId,g),d.measurementId}/**
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
 */class Lv{constructor(e){this.app=e}_delete(){return delete Hn[this.app.options.appId],Promise.resolve()}}let Hn={},au=[];const cu={};let fo="dataLayer",Mv="gtag",lu,Ma,uu=!1;function jv(){const n=[];if(Uo()&&n.push("This is a browser extension environment."),ku()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=$e.create("invalid-analytics-context",{errorInfo:e});ze.warn(t.message)}}function Fv(n,e,t){jv();const s=n.options.appId;if(!s)throw $e.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(Hn[s]!=null)throw $e.create("already-exists",{id:s});if(!uu){_v(fo);const{wrappedGtag:i,gtagCore:a}=wv(Hn,au,cu,fo,Mv);Ma=i,lu=a,uu=!0}return Hn[s]=Ov(n,au,cu,e,lu,fo,t),new Lv(n)}function qv(n=$o()){n=De(n);const e=In(n,ci);return e.isInitialized()?e.getImmediate():Uv(n)}function Uv(n,e={}){const t=In(n,ci);if(t.isInitialized()){const r=t.getImmediate();if(Bt(e,t.getOptions()))return r;throw $e.create("already-initialized")}return t.initialize({options:e})}async function zv(){if(Uo()||!ku()||!zo())return!1;try{return await Bo()}catch{return!1}}function Bv(n,e,t){n=De(n),Dv(Ma,Hn[n.app.options.appId],e,t).catch(s=>ze.error(s))}function Hv(n,e,t,s){n=De(n),Nv(Ma,Hn[n.app.options.appId],e,t,s).catch(r=>ze.error(r))}const hu="@firebase/analytics",du="0.10.19";function $v(){ft(new nt(ci,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Fv(s,r,t)},"PUBLIC")),ft(new nt("analytics-internal",n,"PRIVATE")),Ke(hu,du),Ke(hu,du,"esm2020");function n(e){try{const t=e.getProvider(ci).getImmediate();return{logEvent:(s,r,i)=>Hv(t,s,r,i),setUserProperties:(s,r)=>Bv(t,s,r)}}catch(t){throw $e.create("interop-component-reg-failed",{reason:t})}}}$v();const _f={apiKey:"AIzaSyB95-9OWWYNxMJNud5-gs4jhJ8Pv1fTx7I",authDomain:"itistudyu.firebaseapp.com",projectId:"itistudyu",storageBucket:"itistudyu.firebasestorage.app",messagingSenderId:"1095742655103",appId:"1:1095742655103:web:00246a53f90267e99f4d4a",measurementId:"G-RQDEYL608Z"},Wv=!!_f.apiKey,ja=Vu(_f),Xt=By(ja),gt=Wv?vw(ja):null;zv().then(n=>{n&&qv(ja)});const Gv=60*60*1e3;function Fa(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:s}=JSON.parse(e);return Date.now()-s>Gv?null:t}catch{return null}}function rs(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function Qv(){const n=Fa("books_old-testament");if(n)return n;try{const e=await pd(bn(Xt,"books","old-testament"));if(e.exists()){const t=e.data().books;return rs("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function Kv(){const n=Fa("all_quizzes");if(n)return n;try{const e=await rI(zy(Xt,"quizzes")),t=[];if(e.forEach(s=>t.push({id:s.id,...s.data()})),t.length>0)return rs("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function fu(n){const e=Fa(`translations_${n}`);if(e)return e;try{const t=await pd(bn(Xt,"translations",n));if(t.exists()){const s=t.data();return rs(`translations_${n}`,s),s}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function yf(n){await Pi(bn(Xt,"books","old-testament"),{books:n}),rs("books_old-testament",n)}async function If(n,e){await Pi(bn(Xt,"quizzes",n),e),rs(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function Jv(n,e){await Pi(bn(Xt,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function Yv(n){await iI(bn(Xt,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function li(n,e){await Pi(bn(Xt,"translations",n),e),rs(`translations_${n}`,e)}const Ef=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],ui={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},Xv=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},mu={en:[{id:1,question:"What does the Greek word 'agape' (ἀγάπη) mean?",options:["Unconditional love","Friendship","Knowledge","Hope"],correctIndex:0,reference:"1 Corinthians 13:13"},{id:2,question:"What does 'logos' (λόγος) mean in John 1:1?",options:["Light","The Word","Spirit","Life"],correctIndex:1,reference:"John 1:1"},{id:3,question:"What does 'charis' (χάρις) mean?",options:["Faith","Peace","Grace","Mercy"],correctIndex:2,reference:"Ephesians 2:8"},{id:4,question:"What does 'pistis' (πίστις) mean?",options:["Faith","Power","Wisdom","Patience"],correctIndex:0,reference:"Hebrews 11:1"},{id:5,question:"What does 'eirene' (εἰρήνη) mean?",options:["Joy","Truth","Glory","Peace"],correctIndex:3,reference:"John 14:27"},{id:6,question:"What does 'metanoia' (μετάνοια) mean?",options:["Baptism","Repentance","Salvation","Prayer"],correctIndex:1,reference:"Acts 2:38"},{id:7,question:"What does 'sozo' (σῴζω) mean?",options:["To judge","To preach","To save/deliver","To baptize"],correctIndex:2,reference:"Romans 10:9"},{id:8,question:"What does 'pneuma' (πνεῦμα) mean?",options:["Spirit/breath","Soul","Body","Mind"],correctIndex:0,reference:"John 3:8"},{id:9,question:"What does 'ekklesia' (ἐκκλησία) mean?",options:["Temple","Kingdom","Assembly/Church","Synagogue"],correctIndex:2,reference:"Matthew 16:18"},{id:10,question:"What does 'doxa' (δόξα) mean?",options:["Doctrine","Glory","Praise","Blessing"],correctIndex:1,reference:"John 1:14"},{id:11,question:"What does 'euangelion' (εὐαγγέλιον) mean?",options:["Prophecy","Commandment","Testimony","Good news/Gospel"],correctIndex:3,reference:"Mark 1:1"},{id:12,question:"What does 'hamartia' (ἁμαρτία) mean?",options:["Sin","Death","Curse","Darkness"],correctIndex:0,reference:"Romans 3:23"},{id:13,question:"What does 'koinonia' (κοινωνία) mean?",options:["Kingdom","Covenant","Fellowship/Communion","Ministry"],correctIndex:2,reference:"Acts 2:42"},{id:14,question:"What does 'dikaiosyne' (δικαιοσύνη) mean?",options:["Holiness","Righteousness","Obedience","Truth"],correctIndex:1,reference:"Romans 1:17"},{id:15,question:"What does 'zoe' (ζωή) mean?",options:["Life","Light","Way","Truth"],correctIndex:0,reference:"John 14:6"},{id:16,question:"What does 'parakletos' (παράκλητος) mean?",options:["Prophet","Shepherd","King","Advocate/Helper"],correctIndex:3,reference:"John 14:26"},{id:17,question:"What does 'aletheia' (ἀλήθεια) mean?",options:["Truth","Wisdom","Light","Freedom"],correctIndex:0,reference:"John 8:32"},{id:18,question:"What does 'dunamis' (δύναμις) mean?",options:["Authority","Dominion","Power/Miracle","Throne"],correctIndex:2,reference:"Acts 1:8"},{id:19,question:"What does 'eleos' (ἔλεος) mean?",options:["Mercy","Grace","Compassion","Forgiveness"],correctIndex:0,reference:"Luke 1:50"},{id:20,question:"What does 'basileia' (βασιλεία) mean?",options:["Temple","Kingdom","Covenant","Throne"],correctIndex:1,reference:"Matthew 6:33"},{id:21,question:"What does 'sophia' (σοφία) mean?",options:["Wisdom","Knowledge","Understanding","Discernment"],correctIndex:0,reference:"1 Corinthians 1:30"},{id:22,question:"What does 'kardia' (καρδία) mean?",options:["Mind","Soul","Heart","Spirit"],correctIndex:2,reference:"Matthew 22:37"},{id:23,question:"What does 'theos' (θεός) mean?",options:["God","Lord","King","Father"],correctIndex:0,reference:"John 1:1"},{id:24,question:"What does 'christos' (Χριστός) mean?",options:["Savior","Prophet","Priest","Christ/Anointed One"],correctIndex:3,reference:"Matthew 16:16"},{id:25,question:"What does 'kurios' (κύριος) mean?",options:["Lord","Master","Teacher","King"],correctIndex:0,reference:"Romans 10:9"},{id:26,question:"What does 'prophetes' (προφήτης) mean?",options:["Priest","Prophet","Scribe","Elder"],correctIndex:1,reference:"Matthew 21:11"},{id:27,question:"What does 'apostolos' (ἀπόστολος) mean?",options:["Disciple","Servant","Apostle/Messenger","Follower"],correctIndex:2,reference:"Luke 6:13"},{id:28,question:"What does 'didache' (διδαχή) mean?",options:["Teaching/Doctrine","Preaching","Scripture","Prophecy"],correctIndex:0,reference:"Acts 2:42"},{id:29,question:"What does 'marturia' (μαρτυρία) mean?",options:["Suffering","Sacrifice","Testimony/Witness","Confession"],correctIndex:2,reference:"Revelation 1:2"},{id:30,question:"What does 'elpis' (ἐλπίς) mean?",options:["Faith","Hope","Love","Joy"],correctIndex:1,reference:"Romans 5:5"},{id:31,question:"What does 'makarios' (μακάριος) mean?",options:["Holy","Righteous","Blessed/Happy","Faithful"],correctIndex:2,reference:"Matthew 5:3"},{id:32,question:"What does 'sarx' (σάρξ) mean?",options:["Flesh","Body","Blood","Bone"],correctIndex:0,reference:"John 1:14"},{id:33,question:"What does 'kosmos' (κόσμος) mean?",options:["Universe","Earth","Creation","World"],correctIndex:3,reference:"John 3:16"},{id:34,question:"What does 'ouranos' (οὐρανός) mean?",options:["Heaven","Sky","Paradise","Throne"],correctIndex:0,reference:"Matthew 6:9"},{id:35,question:"What does 'thanatos' (θάνατος) mean?",options:["Judgment","Death","Destruction","Curse"],correctIndex:1,reference:"Romans 6:23"},{id:36,question:"What does 'anastasis' (ἀνάστασις) mean?",options:["Ascension","Salvation","Resurrection","Redemption"],correctIndex:2,reference:"John 11:25"},{id:37,question:"What does 'baptizo' (βαπτίζω) mean?",options:["To wash","To cleanse","To sprinkle","To baptize/immerse"],correctIndex:3,reference:"Matthew 28:19"},{id:38,question:"What does 'proseuchomai' (προσεύχομαι) mean?",options:["To pray","To worship","To praise","To fast"],correctIndex:0,reference:"Matthew 6:6"},{id:39,question:"What does 'ethnos' (ἔθνος) mean?",options:["People","Nation/Gentile","Tribe","Family"],correctIndex:1,reference:"Matthew 28:19"},{id:40,question:"What does 'diatheke' (διαθήκη) mean?",options:["Promise","Law","Covenant/Testament","Blessing"],correctIndex:2,reference:"Hebrews 8:6"}],es:[{id:1,question:"¿Qué significa la palabra griega 'agape' (ἀγάπη)?",options:["Amor incondicional","Amistad","Conocimiento","Esperanza"],correctIndex:0,reference:"1 Corintios 13:13"},{id:2,question:"¿Qué significa 'logos' (λόγος) en Juan 1:1?",options:["Luz","El Verbo/La Palabra","Espíritu","Vida"],correctIndex:1,reference:"Juan 1:1"},{id:3,question:"¿Qué significa 'charis' (χάρις)?",options:["Fe","Paz","Gracia","Misericordia"],correctIndex:2,reference:"Efesios 2:8"},{id:4,question:"¿Qué significa 'pistis' (πίστις)?",options:["Fe","Poder","Sabiduría","Paciencia"],correctIndex:0,reference:"Hebreos 11:1"},{id:5,question:"¿Qué significa 'eirene' (εἰρήνη)?",options:["Gozo","Verdad","Gloria","Paz"],correctIndex:3,reference:"Juan 14:27"},{id:6,question:"¿Qué significa 'metanoia' (μετάνοια)?",options:["Bautismo","Arrepentimiento","Salvación","Oración"],correctIndex:1,reference:"Hechos 2:38"},{id:7,question:"¿Qué significa 'sozo' (σῴζω)?",options:["Juzgar","Predicar","Salvar/Liberar","Bautizar"],correctIndex:2,reference:"Romanos 10:9"},{id:8,question:"¿Qué significa 'pneuma' (πνεῦμα)?",options:["Espíritu/Aliento","Alma","Cuerpo","Mente"],correctIndex:0,reference:"Juan 3:8"},{id:9,question:"¿Qué significa 'ekklesia' (ἐκκλησία)?",options:["Templo","Reino","Asamblea/Iglesia","Sinagoga"],correctIndex:2,reference:"Mateo 16:18"},{id:10,question:"¿Qué significa 'doxa' (δόξα)?",options:["Doctrina","Gloria","Alabanza","Bendición"],correctIndex:1,reference:"Juan 1:14"},{id:11,question:"¿Qué significa 'euangelion' (εὐαγγέλιον)?",options:["Profecía","Mandamiento","Testimonio","Buenas nuevas/Evangelio"],correctIndex:3,reference:"Marcos 1:1"},{id:12,question:"¿Qué significa 'hamartia' (ἁμαρτία)?",options:["Pecado","Muerte","Maldición","Oscuridad"],correctIndex:0,reference:"Romanos 3:23"},{id:13,question:"¿Qué significa 'koinonia' (κοινωνία)?",options:["Reino","Pacto","Comunión/Fraternidad","Ministerio"],correctIndex:2,reference:"Hechos 2:42"},{id:14,question:"¿Qué significa 'dikaiosyne' (δικαιοσύνη)?",options:["Santidad","Justicia","Obediencia","Verdad"],correctIndex:1,reference:"Romanos 1:17"},{id:15,question:"¿Qué significa 'zoe' (ζωή)?",options:["Vida","Luz","Camino","Verdad"],correctIndex:0,reference:"Juan 14:6"},{id:16,question:"¿Qué significa 'parakletos' (παράκλητος)?",options:["Profeta","Pastor","Rey","Abogado/Consolador"],correctIndex:3,reference:"Juan 14:26"},{id:17,question:"¿Qué significa 'aletheia' (ἀλήθεια)?",options:["Verdad","Sabiduría","Luz","Libertad"],correctIndex:0,reference:"Juan 8:32"},{id:18,question:"¿Qué significa 'dunamis' (δύναμις)?",options:["Autoridad","Dominio","Poder/Milagro","Trono"],correctIndex:2,reference:"Hechos 1:8"},{id:19,question:"¿Qué significa 'eleos' (ἔλεος)?",options:["Misericordia","Gracia","Compasión","Perdón"],correctIndex:0,reference:"Lucas 1:50"},{id:20,question:"¿Qué significa 'basileia' (βασιλεία)?",options:["Templo","Reino","Pacto","Trono"],correctIndex:1,reference:"Mateo 6:33"},{id:21,question:"¿Qué significa 'sophia' (σοφία)?",options:["Sabiduría","Conocimiento","Entendimiento","Discernimiento"],correctIndex:0,reference:"1 Corintios 1:30"},{id:22,question:"¿Qué significa 'kardia' (καρδία)?",options:["Mente","Alma","Corazón","Espíritu"],correctIndex:2,reference:"Mateo 22:37"},{id:23,question:"¿Qué significa 'theos' (θεός)?",options:["Dios","Señor","Rey","Padre"],correctIndex:0,reference:"Juan 1:1"},{id:24,question:"¿Qué significa 'christos' (Χριστός)?",options:["Salvador","Profeta","Sacerdote","Cristo/Ungido"],correctIndex:3,reference:"Mateo 16:16"},{id:25,question:"¿Qué significa 'kurios' (κύριος)?",options:["Señor","Maestro","Profesor","Rey"],correctIndex:0,reference:"Romanos 10:9"},{id:26,question:"¿Qué significa 'prophetes' (προφήτης)?",options:["Sacerdote","Profeta","Escriba","Anciano"],correctIndex:1,reference:"Mateo 21:11"},{id:27,question:"¿Qué significa 'apostolos' (ἀπόστολος)?",options:["Discípulo","Siervo","Apóstol/Mensajero","Seguidor"],correctIndex:2,reference:"Lucas 6:13"},{id:28,question:"¿Qué significa 'didache' (διδαχή)?",options:["Enseñanza/Doctrina","Predicación","Escritura","Profecía"],correctIndex:0,reference:"Hechos 2:42"},{id:29,question:"¿Qué significa 'marturia' (μαρτυρία)?",options:["Sufrimiento","Sacrificio","Testimonio","Confesión"],correctIndex:2,reference:"Apocalipsis 1:2"},{id:30,question:"¿Qué significa 'elpis' (ἐλπίς)?",options:["Fe","Esperanza","Amor","Gozo"],correctIndex:1,reference:"Romanos 5:5"},{id:31,question:"¿Qué significa 'makarios' (μακάριος)?",options:["Santo","Justo","Bienaventurado/Feliz","Fiel"],correctIndex:2,reference:"Mateo 5:3"},{id:32,question:"¿Qué significa 'sarx' (σάρξ)?",options:["Carne","Cuerpo","Sangre","Hueso"],correctIndex:0,reference:"Juan 1:14"},{id:33,question:"¿Qué significa 'kosmos' (κόσμος)?",options:["Universo","Tierra","Creación","Mundo"],correctIndex:3,reference:"Juan 3:16"},{id:34,question:"¿Qué significa 'ouranos' (οὐρανός)?",options:["Cielo","Firmamento","Paraíso","Trono"],correctIndex:0,reference:"Mateo 6:9"},{id:35,question:"¿Qué significa 'thanatos' (θάνατος)?",options:["Juicio","Muerte","Destrucción","Maldición"],correctIndex:1,reference:"Romanos 6:23"},{id:36,question:"¿Qué significa 'anastasis' (ἀνάστασις)?",options:["Ascensión","Salvación","Resurrección","Redención"],correctIndex:2,reference:"Juan 11:25"},{id:37,question:"¿Qué significa 'baptizo' (βαπτίζω)?",options:["Lavar","Limpiar","Rociar","Bautizar/Sumergir"],correctIndex:3,reference:"Mateo 28:19"},{id:38,question:"¿Qué significa 'proseuchomai' (προσεύχομαι)?",options:["Orar","Adorar","Alabar","Ayunar"],correctIndex:0,reference:"Mateo 6:6"},{id:39,question:"¿Qué significa 'ethnos' (ἔθνος)?",options:["Pueblo","Nación/Gentil","Tribu","Familia"],correctIndex:1,reference:"Mateo 28:19"},{id:40,question:"¿Qué significa 'diatheke' (διαθήκη)?",options:["Promesa","Ley","Pacto/Testamento","Bendición"],correctIndex:2,reference:"Hebreos 8:6"}]},pu={en:[{id:1,question:"What does the Hebrew word 'shalom' (שָׁלוֹם) mean?",options:["Peace","Joy","Love","Hope"],correctIndex:0,reference:"Numbers 6:26"},{id:2,question:"What does the Hebrew word 'ahavah' (אַהֲבָה) mean?",options:["Faith","Love","Grace","Mercy"],correctIndex:1,reference:"Deuteronomy 6:5"},{id:3,question:"What does the Hebrew word 'emunah' (אֱמוּנָה) mean?",options:["Hope","Wisdom","Faithfulness","Truth"],correctIndex:2,reference:"Habakkuk 2:4"},{id:4,question:"What does the Hebrew word 'chesed' (חֶסֶד) mean?",options:["Power","Justice","Holiness","Lovingkindness"],correctIndex:3,reference:"Psalm 136:1"},{id:5,question:"What does the Hebrew word 'ruach' (רוּחַ) mean?",options:["Spirit/Breath/Wind","Soul","Mind","Body"],correctIndex:0,reference:"Genesis 1:2"},{id:6,question:"What does the Hebrew word 'nefesh' (נֶפֶשׁ) mean?",options:["Heart","Soul/Living Being","Spirit","Flesh"],correctIndex:1,reference:"Genesis 2:7"},{id:7,question:"What does the Hebrew word 'torah' (תּוֹרָה) mean?",options:["Covenant","Prophecy","Law/Instruction","Wisdom"],correctIndex:2,reference:"Psalm 119:1"},{id:8,question:"What does the Hebrew word 'tsedaqah' (צְדָקָה) mean?",options:["Holiness","Mercy","Obedience","Righteousness"],correctIndex:3,reference:"Genesis 15:6"},{id:9,question:"What does 'Elohim' (אֱלֹהִים) refer to?",options:["God","Lord","Father","King"],correctIndex:0,reference:"Genesis 1:1"},{id:10,question:"What does 'YHWH' (יהוה) represent?",options:["Almighty","The personal name of God/LORD","Most High","Creator"],correctIndex:1,reference:"Exodus 3:14"},{id:11,question:"What does the Hebrew word 'kadosh' (קָדוֹשׁ) mean?",options:["Holy","Glorious","Faithful","Mighty"],correctIndex:0,reference:"Isaiah 6:3"},{id:12,question:"What does the Hebrew word 'berith' (בְּרִית) mean?",options:["Promise","Blessing","Covenant","Law"],correctIndex:2,reference:"Genesis 15:18"},{id:13,question:"What does the Hebrew word 'malakh' (מַלְאָךְ) mean?",options:["King","Prophet","Priest","Angel/Messenger"],correctIndex:3,reference:"Genesis 16:7"},{id:14,question:"What does the Hebrew word 'dabar' (דָּבָר) mean?",options:["Word/Matter","Thought","Deed","Command"],correctIndex:0,reference:"Isaiah 55:11"},{id:15,question:"What does the Hebrew word 'mishpat' (מִשְׁפָּט) mean?",options:["Mercy","Justice/Judgment","Peace","Truth"],correctIndex:1,reference:"Micah 6:8"},{id:16,question:"What does the Hebrew word 'teshuvah' (תְּשׁוּבָה) mean?",options:["Praise","Blessing","Repentance/Return","Prayer"],correctIndex:2,reference:"Joel 2:12"},{id:17,question:"What does the Hebrew word 'tehillah' (תְּהִלָּה) mean?",options:["Prayer","Sacrifice","Offering","Praise"],correctIndex:3,reference:"Psalm 22:3"},{id:18,question:"What does the Hebrew word 'shabbat' (שַׁבָּת) mean?",options:["Sabbath/Rest","Festival","Offering","Atonement"],correctIndex:0,reference:"Exodus 20:8"},{id:19,question:"What does the Hebrew word 'emet' (אֱמֶת) mean?",options:["Light","Truth","Life","Wisdom"],correctIndex:1,reference:"Psalm 31:5"},{id:20,question:"What does the Hebrew word 'mashiach' (מָשִׁיחַ) mean?",options:["Savior","Prophet","Messiah/Anointed One","Servant"],correctIndex:2,reference:"Daniel 9:25"},{id:21,question:"What does the Hebrew word 'nabi' (נָבִיא) mean?",options:["Priest","Scribe","Elder","Prophet"],correctIndex:3,reference:"Amos 3:7"},{id:22,question:"What does the Hebrew word 'cohen' (כֹּהֵן) mean?",options:["Priest","King","Prophet","Judge"],correctIndex:0,reference:"Exodus 19:6"},{id:23,question:"What does the Hebrew word 'melekh' (מֶלֶךְ) mean?",options:["Lord","King","Master","Ruler"],correctIndex:1,reference:"1 Samuel 8:5"},{id:24,question:"What does the Hebrew word 'ebed' (עֶבֶד) mean?",options:["Son","Brother","Servant/Slave","Shepherd"],correctIndex:2,reference:"Isaiah 53:11"},{id:25,question:"What does the Hebrew word 'yeshuah' (יְשׁוּעָה) mean?",options:["Blessing","Redemption","Deliverance","Salvation"],correctIndex:3,reference:"Psalm 118:14"},{id:26,question:"What does the Hebrew word 'adonai' (אֲדֹנָי) mean?",options:["Lord/Master","God","Father","King"],correctIndex:0,reference:"Psalm 8:1"},{id:27,question:"What does 'hallelujah' (הַלְלוּיָהּ) mean?",options:["Glory to God","Praise the LORD","Blessed is God","God is holy"],correctIndex:1,reference:"Psalm 150:6"},{id:28,question:"What does the Hebrew word 'shema' (שְׁמַע) mean?",options:["Praise","Bow","Hear/Listen","Obey"],correctIndex:2,reference:"Deuteronomy 6:4"},{id:29,question:"What does the Hebrew word 'eretz' (אֶרֶץ) mean?",options:["Sea","Sky","Mountain","Land/Earth"],correctIndex:3,reference:"Genesis 1:1"},{id:30,question:"What does the Hebrew word 'shamayim' (שָׁמַיִם) mean?",options:["Heaven/Sky","Light","Waters","Stars"],correctIndex:0,reference:"Genesis 1:1"},{id:31,question:"What does the Hebrew word 'adam' (אָדָם) mean?",options:["Father","Man/Humankind","Child","Elder"],correctIndex:1,reference:"Genesis 1:27"},{id:32,question:"What does the Hebrew word 'olam' (עוֹלָם) mean?",options:["Nation","Age","Eternity/Forever","Kingdom"],correctIndex:2,reference:"Psalm 90:2"},{id:33,question:"What does the Hebrew word 'chai' (חַי) mean?",options:["Light","Fire","Water","Life/Living"],correctIndex:3,reference:"Deuteronomy 30:19"},{id:34,question:"What does the Hebrew word 'rachamim' (רַחֲמִים) mean?",options:["Compassion/Mercy","Strength","Glory","Patience"],correctIndex:0,reference:"Psalm 103:4"},{id:35,question:"What does the Hebrew word 'tov' (טוֹב) mean?",options:["Pure","Good","Perfect","Right"],correctIndex:1,reference:"Genesis 1:31"},{id:36,question:"What does the Hebrew word 'bara' (בָּרָא) mean?",options:["To bless","To rule","To create","To speak"],correctIndex:2,reference:"Genesis 1:1"},{id:37,question:"What does the Hebrew word 'bereshit' (בְּרֵאשִׁית) mean?",options:["And God said","The heavens","In the beginning","The earth was"],correctIndex:3,reference:"Genesis 1:1"},{id:38,question:"What does the Hebrew word 'am' (עַם) mean?",options:["People/Nation","Land","King","Tribe"],correctIndex:0,reference:"Exodus 19:5"},{id:39,question:"What does the Hebrew word 'kippurim' (כִּפֻּרִים) mean?",options:["Sacrifice","Atonement","Offering","Purification"],correctIndex:1,reference:"Leviticus 23:27"},{id:40,question:"What does the Hebrew word 'nephilim' (נְפִילִים) mean?",options:["Mighty warriors","Ancient rulers","Evil spirits","Fallen ones/Giants"],correctIndex:3,reference:"Genesis 6:4"}],es:[{id:1,question:"¿Qué significa la palabra hebrea 'shalom' (שָׁלוֹם)?",options:["Paz","Gozo","Amor","Esperanza"],correctIndex:0,reference:"Números 6:26"},{id:2,question:"¿Qué significa la palabra hebrea 'ahavah' (אַהֲבָה)?",options:["Fe","Amor","Gracia","Misericordia"],correctIndex:1,reference:"Deuteronomio 6:5"},{id:3,question:"¿Qué significa la palabra hebrea 'emunah' (אֱמוּנָה)?",options:["Esperanza","Sabiduría","Fidelidad","Verdad"],correctIndex:2,reference:"Habacuc 2:4"},{id:4,question:"¿Qué significa la palabra hebrea 'chesed' (חֶסֶד)?",options:["Poder","Justicia","Santidad","Amor leal/Misericordia"],correctIndex:3,reference:"Salmos 136:1"},{id:5,question:"¿Qué significa la palabra hebrea 'ruach' (רוּחַ)?",options:["Espíritu/Aliento/Viento","Alma","Mente","Cuerpo"],correctIndex:0,reference:"Génesis 1:2"},{id:6,question:"¿Qué significa la palabra hebrea 'nefesh' (נֶפֶשׁ)?",options:["Corazón","Alma/Ser viviente","Espíritu","Carne"],correctIndex:1,reference:"Génesis 2:7"},{id:7,question:"¿Qué significa la palabra hebrea 'torah' (תּוֹרָה)?",options:["Pacto","Profecía","Ley/Instrucción","Sabiduría"],correctIndex:2,reference:"Salmos 119:1"},{id:8,question:"¿Qué significa la palabra hebrea 'tsedaqah' (צְדָקָה)?",options:["Santidad","Misericordia","Obediencia","Justicia/Rectitud"],correctIndex:3,reference:"Génesis 15:6"},{id:9,question:"¿A qué se refiere 'Elohim' (אֱלֹהִים)?",options:["Dios","Señor","Padre","Rey"],correctIndex:0,reference:"Génesis 1:1"},{id:10,question:"¿Qué representa 'YHWH' (יהוה)?",options:["Todopoderoso","El nombre personal de Dios/SEÑOR","Altísimo","Creador"],correctIndex:1,reference:"Éxodo 3:14"},{id:11,question:"¿Qué significa la palabra hebrea 'kadosh' (קָדוֹשׁ)?",options:["Santo","Glorioso","Fiel","Poderoso"],correctIndex:0,reference:"Isaías 6:3"},{id:12,question:"¿Qué significa la palabra hebrea 'berith' (בְּרִית)?",options:["Promesa","Bendición","Pacto","Ley"],correctIndex:2,reference:"Génesis 15:18"},{id:13,question:"¿Qué significa la palabra hebrea 'malakh' (מַלְאָךְ)?",options:["Rey","Profeta","Sacerdote","Ángel/Mensajero"],correctIndex:3,reference:"Génesis 16:7"},{id:14,question:"¿Qué significa la palabra hebrea 'dabar' (דָּבָר)?",options:["Palabra/Asunto","Pensamiento","Obra","Mandato"],correctIndex:0,reference:"Isaías 55:11"},{id:15,question:"¿Qué significa la palabra hebrea 'mishpat' (מִשְׁפָּט)?",options:["Misericordia","Justicia/Juicio","Paz","Verdad"],correctIndex:1,reference:"Miqueas 6:8"},{id:16,question:"¿Qué significa la palabra hebrea 'teshuvah' (תְּשׁוּבָה)?",options:["Alabanza","Bendición","Arrepentimiento/Retorno","Oración"],correctIndex:2,reference:"Joel 2:12"},{id:17,question:"¿Qué significa la palabra hebrea 'tehillah' (תְּהִלָּה)?",options:["Oración","Sacrificio","Ofrenda","Alabanza"],correctIndex:3,reference:"Salmos 22:3"},{id:18,question:"¿Qué significa la palabra hebrea 'shabbat' (שַׁבָּת)?",options:["Sábado/Descanso","Festival","Ofrenda","Expiación"],correctIndex:0,reference:"Éxodo 20:8"},{id:19,question:"¿Qué significa la palabra hebrea 'emet' (אֱמֶת)?",options:["Luz","Verdad","Vida","Sabiduría"],correctIndex:1,reference:"Salmos 31:5"},{id:20,question:"¿Qué significa la palabra hebrea 'mashiach' (מָשִׁיחַ)?",options:["Salvador","Profeta","Mesías/Ungido","Siervo"],correctIndex:2,reference:"Daniel 9:25"},{id:21,question:"¿Qué significa la palabra hebrea 'nabi' (נָבִיא)?",options:["Sacerdote","Escriba","Anciano","Profeta"],correctIndex:3,reference:"Amós 3:7"},{id:22,question:"¿Qué significa la palabra hebrea 'cohen' (כֹּהֵן)?",options:["Sacerdote","Rey","Profeta","Juez"],correctIndex:0,reference:"Éxodo 19:6"},{id:23,question:"¿Qué significa la palabra hebrea 'melekh' (מֶלֶךְ)?",options:["Señor","Rey","Amo","Gobernante"],correctIndex:1,reference:"1 Samuel 8:5"},{id:24,question:"¿Qué significa la palabra hebrea 'ebed' (עֶבֶד)?",options:["Hijo","Hermano","Siervo/Esclavo","Pastor"],correctIndex:2,reference:"Isaías 53:11"},{id:25,question:"¿Qué significa la palabra hebrea 'yeshuah' (יְשׁוּעָה)?",options:["Bendición","Redención","Liberación","Salvación"],correctIndex:3,reference:"Salmos 118:14"},{id:26,question:"¿Qué significa la palabra hebrea 'adonai' (אֲדֹנָי)?",options:["Señor/Amo","Dios","Padre","Rey"],correctIndex:0,reference:"Salmos 8:1"},{id:27,question:"¿Qué significa 'hallelujah' (הַלְלוּיָהּ)?",options:["Gloria a Dios","Alabad al SEÑOR","Bendito sea Dios","Dios es santo"],correctIndex:1,reference:"Salmos 150:6"},{id:28,question:"¿Qué significa la palabra hebrea 'shema' (שְׁמַע)?",options:["Alabad","Inclinaos","Oíd/Escucha","Obedeced"],correctIndex:2,reference:"Deuteronomio 6:4"},{id:29,question:"¿Qué significa la palabra hebrea 'eretz' (אֶרֶץ)?",options:["Mar","Cielo","Montaña","Tierra/País"],correctIndex:3,reference:"Génesis 1:1"},{id:30,question:"¿Qué significa la palabra hebrea 'shamayim' (שָׁמַיִם)?",options:["Cielos","Luz","Aguas","Estrellas"],correctIndex:0,reference:"Génesis 1:1"},{id:31,question:"¿Qué significa la palabra hebrea 'adam' (אָדָם)?",options:["Padre","Hombre/Humanidad","Hijo","Anciano"],correctIndex:1,reference:"Génesis 1:27"},{id:32,question:"¿Qué significa la palabra hebrea 'olam' (עוֹלָם)?",options:["Nación","Era","Eternidad/Para siempre","Reino"],correctIndex:2,reference:"Salmos 90:2"},{id:33,question:"¿Qué significa la palabra hebrea 'chai' (חַי)?",options:["Luz","Fuego","Agua","Vida/Viviente"],correctIndex:3,reference:"Deuteronomio 30:19"},{id:34,question:"¿Qué significa la palabra hebrea 'rachamim' (רַחֲמִים)?",options:["Compasión/Misericordia","Fortaleza","Gloria","Paciencia"],correctIndex:0,reference:"Salmos 103:4"},{id:35,question:"¿Qué significa la palabra hebrea 'tov' (טוֹב)?",options:["Puro","Bueno","Perfecto","Recto"],correctIndex:1,reference:"Génesis 1:31"},{id:36,question:"¿Qué significa la palabra hebrea 'bara' (בָּרָא)?",options:["Bendecir","Gobernar","Crear","Hablar"],correctIndex:2,reference:"Génesis 1:1"},{id:37,question:"¿Qué significa la palabra hebrea 'bereshit' (בְּרֵאשִׁית)?",options:["Y dijo Dios","Los cielos","La tierra era","En el principio"],correctIndex:3,reference:"Génesis 1:1"},{id:38,question:"¿Qué significa la palabra hebrea 'am' (עַם)?",options:["Pueblo/Nación","Tierra","Rey","Tribu"],correctIndex:0,reference:"Éxodo 19:5"},{id:39,question:"¿Qué significa la palabra hebrea 'kippurim' (כִּפֻּרִים)?",options:["Sacrificio","Expiación","Ofrenda","Purificación"],correctIndex:1,reference:"Levítico 23:27"},{id:40,question:"¿Qué significa la palabra hebrea 'nephilim' (נְפִילִים)?",options:["Guerreros poderosos","Gobernantes antiguos","Espíritus malignos","Caídos/Gigantes"],correctIndex:3,reference:"Génesis 6:4"}]},gu={en:[{id:1,question:"How many books are in the Old Testament?",options:["27","39","46","66"],correctIndex:1,reference:"Bible Structure"},{id:2,question:"What are the five divisions of the Old Testament?",options:["Law, History, Poetry, Major Prophets, Minor Prophets","Law, Gospels, Poetry, Prophets, Wisdom","Pentateuch, Letters, Psalms, Prophets, History","Torah, Writings, Prophets, Gospels, Acts"],correctIndex:0,reference:"Bible Structure"},{id:3,question:"How many books make up the Pentateuch (Law)?",options:["3","4","5","7"],correctIndex:2,reference:"Genesis, Exodus, Leviticus, Numbers, Deuteronomy"},{id:4,question:"How many Historical books are in the Old Testament?",options:["10","12","14","16"],correctIndex:1,reference:"Joshua through Esther (12 books)"},{id:5,question:"How many Poetic (Wisdom) books are in the Old Testament?",options:["3","4","5","7"],correctIndex:2,reference:"Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon"},{id:6,question:"Which of the following is NOT a Major Prophet?",options:["Isaiah","Jeremiah","Hosea","Ezekiel"],correctIndex:2,reference:"Hosea is a Minor Prophet"},{id:7,question:"How many books are classified as Major Prophets?",options:["4","5","6","7"],correctIndex:1,reference:"Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel"},{id:8,question:"How many Minor Prophets are there?",options:["10","11","12","14"],correctIndex:2,reference:"Hosea through Malachi (12 books)"},{id:9,question:"What is the first book of the Old Testament?",options:["Exodus","Genesis","Psalms","Job"],correctIndex:1,reference:"Genesis 1:1"},{id:10,question:"What is the last book of the Old Testament?",options:["Zechariah","Revelation","Malachi","Daniel"],correctIndex:2,reference:"Malachi"},{id:11,question:"Which Old Testament book has the most chapters?",options:["Isaiah","Genesis","Psalms","Jeremiah"],correctIndex:2,reference:"Psalms has 150 chapters"},{id:12,question:"How many chapters are in the Old Testament?",options:["729","829","929","1,029"],correctIndex:2,reference:"929 chapters total"},{id:13,question:"Which is the shortest book in the Old Testament?",options:["Obadiah","Jonah","Nahum","Haggai"],correctIndex:0,reference:"Obadiah has 1 chapter with 21 verses"},{id:14,question:"Which book is known as the book of praise and worship?",options:["Proverbs","Ecclesiastes","Psalms","Song of Solomon"],correctIndex:2,reference:"Psalms"},{id:15,question:"Who is traditionally credited with writing the Pentateuch?",options:["Abraham","Moses","David","Samuel"],correctIndex:1,reference:"Mosaic authorship tradition"},{id:16,question:"Which Minor Prophet was swallowed by a great fish?",options:["Amos","Micah","Jonah","Joel"],correctIndex:2,reference:"Jonah 1:17"},{id:17,question:"Which book contains the famous verse 'The Lord is my shepherd'?",options:["Proverbs","Isaiah","Psalms","Ecclesiastes"],correctIndex:2,reference:"Psalm 23:1"},{id:18,question:"Lamentations is traditionally attributed to which prophet?",options:["Isaiah","Ezekiel","Daniel","Jeremiah"],correctIndex:3,reference:"Jeremiah is the traditional author of Lamentations"},{id:19,question:"Which of these is NOT a Poetic/Wisdom book?",options:["Job","Proverbs","Ruth","Ecclesiastes"],correctIndex:2,reference:"Ruth is a Historical book"},{id:20,question:"What is the longest book of the Old Testament by number of chapters?",options:["Psalms (150 chapters)","Isaiah (66 chapters)","Genesis (50 chapters)","Jeremiah (52 chapters)"],correctIndex:0,reference:"Psalms has 150 chapters"}],es:[{id:1,question:"¿Cuántos libros tiene el Antiguo Testamento?",options:["27","39","46","66"],correctIndex:1,reference:"Estructura de la Biblia"},{id:2,question:"¿Cuáles son las cinco divisiones del Antiguo Testamento?",options:["Ley, Historia, Poesía, Profetas Mayores, Profetas Menores","Ley, Evangelios, Poesía, Profetas, Sabiduría","Pentateuco, Cartas, Salmos, Profetas, Historia","Torá, Escritos, Profetas, Evangelios, Hechos"],correctIndex:0,reference:"Estructura de la Biblia"},{id:3,question:"¿Cuántos libros componen el Pentateuco (Ley)?",options:["3","4","5","7"],correctIndex:2,reference:"Génesis, Éxodo, Levítico, Números, Deuteronomio"},{id:4,question:"¿Cuántos libros Históricos hay en el Antiguo Testamento?",options:["10","12","14","16"],correctIndex:1,reference:"Josué hasta Ester (12 libros)"},{id:5,question:"¿Cuántos libros Poéticos (de Sabiduría) hay en el Antiguo Testamento?",options:["3","4","5","7"],correctIndex:2,reference:"Job, Salmos, Proverbios, Eclesiastés, Cantar de los Cantares"},{id:6,question:"¿Cuál de los siguientes NO es un Profeta Mayor?",options:["Isaías","Jeremías","Oseas","Ezequiel"],correctIndex:2,reference:"Oseas es un Profeta Menor"},{id:7,question:"¿Cuántos libros se clasifican como Profetas Mayores?",options:["4","5","6","7"],correctIndex:1,reference:"Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel"},{id:8,question:"¿Cuántos Profetas Menores hay?",options:["10","11","12","14"],correctIndex:2,reference:"Oseas hasta Malaquías (12 libros)"},{id:9,question:"¿Cuál es el primer libro del Antiguo Testamento?",options:["Éxodo","Génesis","Salmos","Job"],correctIndex:1,reference:"Génesis 1:1"},{id:10,question:"¿Cuál es el último libro del Antiguo Testamento?",options:["Zacarías","Apocalipsis","Malaquías","Daniel"],correctIndex:2,reference:"Malaquías"},{id:11,question:"¿Qué libro del Antiguo Testamento tiene más capítulos?",options:["Isaías","Génesis","Salmos","Jeremías"],correctIndex:2,reference:"Salmos tiene 150 capítulos"},{id:12,question:"¿Cuántos capítulos tiene el Antiguo Testamento?",options:["729","829","929","1,029"],correctIndex:2,reference:"929 capítulos en total"},{id:13,question:"¿Cuál es el libro más corto del Antiguo Testamento?",options:["Abdías","Jonás","Nahúm","Hageo"],correctIndex:0,reference:"Abdías tiene 1 capítulo con 21 versículos"},{id:14,question:"¿Qué libro es conocido como el libro de alabanza y adoración?",options:["Proverbios","Eclesiastés","Salmos","Cantar de los Cantares"],correctIndex:2,reference:"Salmos"},{id:15,question:"¿A quién se le atribuye tradicionalmente la escritura del Pentateuco?",options:["Abraham","Moisés","David","Samuel"],correctIndex:1,reference:"Tradición de autoría mosaica"},{id:16,question:"¿Qué Profeta Menor fue tragado por un gran pez?",options:["Amós","Miqueas","Jonás","Joel"],correctIndex:2,reference:"Jonás 1:17"},{id:17,question:"¿Qué libro contiene el famoso versículo 'El Señor es mi pastor'?",options:["Proverbios","Isaías","Salmos","Eclesiastés"],correctIndex:2,reference:"Salmo 23:1"},{id:18,question:"¿A qué profeta se le atribuye tradicionalmente Lamentaciones?",options:["Isaías","Ezequiel","Daniel","Jeremías"],correctIndex:3,reference:"Jeremías es el autor tradicional de Lamentaciones"},{id:19,question:"¿Cuál de estos NO es un libro Poético/de Sabiduría?",options:["Job","Proverbios","Rut","Eclesiastés"],correctIndex:2,reference:"Rut es un libro Histórico"},{id:20,question:"¿Cuál es el libro más largo del Antiguo Testamento por número de capítulos?",options:["Salmos (150 capítulos)","Isaías (66 capítulos)","Génesis (50 capítulos)","Jeremías (52 capítulos)"],correctIndex:0,reference:"Salmos tiene 150 capítulos"}]},wf=N.createContext(null),Zv=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ui.en,es:ui.es},{id:"greek-vocabulary",title:{en:"Greek Vocabulary",es:"Vocabulario Griego"},description:{en:"Learn key Greek words from the New Testament",es:"Aprende palabras clave en griego del Nuevo Testamento"},icon:"αβ",category:"knowledge",en:mu.en,es:mu.es},{id:"hebrew-vocabulary",title:{en:"Hebrew Vocabulary",es:"Vocabulario Hebreo"},description:{en:"Learn key Hebrew words from the Old Testament",es:"Aprende palabras clave en hebreo del Antiguo Testamento"},icon:"אב",category:"knowledge",en:pu.en,es:pu.es},{id:"old-testament-facts",title:{en:"Old Testament Facts",es:"Datos del Antiguo Testamento"},description:{en:"Questions about the structure and key facts of the Old Testament",es:"Preguntas sobre la estructura y datos clave del Antiguo Testamento"},icon:"📖",category:"knowledge",en:gu.en,es:gu.es}],eT=({children:n})=>{const[e,t]=N.useState(Ef),[s,r]=N.useState(Zv),[i,a]=N.useState(Fs),[c,u]=N.useState(!0),[d,m]=N.useState(null),g=N.useCallback(async()=>{u(!0),m(null);try{const[R,V,D,L]=await Promise.all([Qv(),Kv(),fu("en"),fu("es")]);R&&t(R),V&&V.length>0&&r(V),(D||L)&&a(F=>({...F,...D?{en:D}:{},...L?{es:L}:{}}))}catch(R){console.warn("Failed to load Firestore data, using fallbacks:",R.message),m(R.message)}finally{u(!1)}},[]);N.useEffect(()=>{g()},[g]);const E=N.useCallback(()=>(Object.keys(localStorage).forEach(R=>{R.startsWith("firestore_")&&localStorage.removeItem(R)}),g()),[g]),S={books:e,quizzes:s,translations:i,loading:c,error:d,refreshData:E,setBooks:t,setQuizzes:r,setTranslations:a};return f.jsx(wf.Provider,{value:S,children:n})},At=()=>{const n=N.useContext(wf);if(!n)throw new Error("useData must be used within a DataProvider");return n},vf=N.createContext(null),tT=()=>{var t;const n=localStorage.getItem("language");if(n&&Fs[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&Fs[e]?e:"en"},nT=({children:n})=>{const{translations:e}=At(),[t,s]=N.useState(tT);N.useEffect(()=>{document.documentElement.lang=t},[t]);const r=N.useCallback(m=>{e[m]&&(s(m),localStorage.setItem("language",m))},[e]),i=N.useCallback((m,g={})=>{const E=m.split(".");let S=e[t];for(const R of E)if(S&&typeof S=="object"&&R in S)S=S[R];else{S=e.en;for(const V of E)if(S&&typeof S=="object"&&V in S)S=S[V];else return m;break}return typeof S=="string"&&Object.keys(g).length>0?S.replace(/\{(\w+)\}/g,(R,V)=>g[V]!==void 0?g[V]:R):S||m},[t,e]),a=N.useCallback(m=>{var g,E;return((E=(g=e[t])==null?void 0:g.books)==null?void 0:E[m])||m},[t,e]),c=N.useCallback(m=>{var E;const g=((E=e[t])==null?void 0:E.scores)||e.en.scores;return m===100?g.perfect:m>=90?g.excellent:m>=80?g.great:m>=70?g.good:m>=60?g.notBad:m>=50?g.keepPracticing:g.tryAgain},[t,e]),u=N.useMemo(()=>Object.keys(e),[e]),d=N.useMemo(()=>({language:t,setLanguage:r,t:i,translateBook:a,getScoreMessage:c,availableLanguages:u}),[t,r,i,a,c,u]);return f.jsx(vf.Provider,{value:d,children:n})},Cn=()=>{const n=N.useContext(vf);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},sT=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:s,onStartFlashCards:r,onNavigateAdmin:i})=>{const{stats:a}=wu(),{t:c,language:u}=Cn(),{quizzes:d}=At();return f.jsx("div",{className:"home-container",children:f.jsxs("div",{className:"home-content",children:[f.jsx("header",{className:"home-header",children:f.jsxs("div",{className:"logo-container",children:[f.jsx("div",{className:"logo",children:f.jsx("span",{className:"logo-icon",children:"📖"})}),f.jsx("h1",{className:"app-title",children:c("appName")}),f.jsx("p",{className:"app-subtitle",children:c("appSubtitle")})]})}),f.jsxs(qr,{className:"welcome-card",children:[f.jsx("h2",{className:"welcome-title",children:c("home.welcomeTitle")}),f.jsx("p",{className:"welcome-description",children:c("home.welcomeDescription")}),f.jsxs("div",{className:"quiz-info",children:[f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"📚"}),f.jsx("span",{className:"info-text",children:c("home.booksCount")})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"⏱️"}),f.jsx("span",{className:"info-text",children:c("home.unlimitedTime")})]})]}),f.jsx("h3",{className:"quiz-type-title",children:c("home.selectQuizType")}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.oldTestament")}),f.jsxs("div",{className:"quiz-types",children:[f.jsxs("button",{className:"quiz-type-card",onClick:n,children:[f.jsx("span",{className:"quiz-type-icon",children:c("home.quizTypes.order.icon")}),f.jsx("span",{className:"quiz-type-name",children:c("home.quizTypes.order.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.quizTypes.order.description")})]}),f.jsxs("button",{className:"quiz-type-card",onClick:e,children:[f.jsx("span",{className:"quiz-type-icon",children:c("home.quizTypes.complete.icon")}),f.jsx("span",{className:"quiz-type-name",children:c("home.quizTypes.complete.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.quizTypes.complete.description")})]})]})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.knowledge")}),f.jsx("div",{className:"quiz-types",children:d.map(m=>{var g,E,S,R;return f.jsxs("button",{className:"quiz-type-card",onClick:()=>{m.id==="genesis-covenants"?t():s&&s(m.id)},children:[f.jsx("span",{className:"quiz-type-icon",children:m.icon||"📝"}),f.jsx("span",{className:"quiz-type-name",children:((g=m.title)==null?void 0:g[u])||((E=m.title)==null?void 0:E.en)||m.id}),f.jsx("span",{className:"quiz-type-desc",children:((S=m.description)==null?void 0:S[u])||((R=m.description)==null?void 0:R.en)||""})]},m.id)})})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.study")}),f.jsxs("div",{className:"quiz-types",children:[f.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("greek-vocabulary"),children:[f.jsx("span",{className:"quiz-type-icon",children:"🃏"}),f.jsx("span",{className:"quiz-type-name",children:c("home.studyTypes.greekFlashCards.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.studyTypes.greekFlashCards.description")})]}),f.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("hebrew-vocabulary"),children:[f.jsx("span",{className:"quiz-type-icon",children:"🃏"}),f.jsx("span",{className:"quiz-type-name",children:c("home.studyTypes.hebrewFlashCards.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.studyTypes.hebrewFlashCards.description")})]})]})]})]}),a.totalAttempts>0&&f.jsxs(qr,{className:"stats-card",children:[f.jsx("h3",{className:"stats-title",children:c("home.yourProgress")}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-value",children:a.totalAttempts}),f.jsx("div",{className:"stat-label",children:c("home.attempts")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[a.bestScore,"%"]}),f.jsx("div",{className:"stat-label",children:c("home.bestScore")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[a.averageScore,"%"]}),f.jsx("div",{className:"stat-label",children:c("home.average")})]})]})]}),f.jsxs("footer",{className:"home-footer",children:[f.jsx("p",{className:"footer-text",children:c("home.footerText")}),f.jsx("button",{className:"admin-link",onClick:i,onContextMenu:m=>{m.preventDefault(),i==null||i()},children:"⚙"})]})]})})},rT=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},iT=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",Tf=N.createContext(),oT=({children:n})=>{const{books:e}=At(),[t,s]=N.useState([]),[r,i]=N.useState([]),[a,c]=N.useState(!1),u=N.useCallback(()=>{s(rT([...e])),i([]),c(!0)},[e]),d=N.useCallback(L=>{i(F=>[...F,L])},[]),m=N.useCallback(()=>{i(L=>L.slice(0,-1))},[]),g=N.useCallback(L=>{i(F=>F.filter(q=>q!==L))},[]),E=N.useCallback(()=>{i([])},[]),S=N.useCallback(()=>{let L=0;r.forEach((z,j)=>{e[j]===z&&L++});const F=e.length,q=Math.round(L/F*100);return{correct:L,total:F,percentage:q,selections:r}},[r,e]),R=N.useCallback(L=>r.includes(L),[r]),V=N.useCallback(L=>{const F=r.indexOf(L);return F===-1?null:F+1},[r]),D={shuffledBooks:t,selectedBooks:r,isInitialized:a,initializeQuiz:u,selectBook:d,deselectBook:g,undoLastSelection:m,resetSelections:E,calculateScore:S,isBookSelected:R,getSelectionIndex:V};return f.jsx(Tf.Provider,{value:D,children:n})},aT=()=>{const n=N.useContext(Tf);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},cT=({book:n,displayName:e,isSelected:t,isCorrectlyPlaced:s,isLastPlaced:r,selectionIndex:i,onClick:a,onDeselect:c})=>{const u=["book-card",t?"book-card-selected":"",s?"book-card-correct":"",r?"book-card-just-placed":""].filter(Boolean).join(" "),d=()=>{t&&c?c():t||a()};return f.jsx("button",{className:u,onClick:d,"aria-pressed":t,children:f.jsxs("div",{className:"book-card-content",children:[f.jsx("span",{className:"book-name",children:e||n}),t&&f.jsx("div",{className:`selection-badge ${s?"selection-badge-correct":""}`,children:i})]})})},qa=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return f.jsx("div",{className:"progress-bar-container",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},ce=({onClick:n,variant:e="primary",size:t="medium",disabled:s=!1,className:r="",children:i,...a})=>{const c=`button button-${e} button-${t} ${r}`;return f.jsx("button",{className:c,onClick:n,disabled:s,...a,children:i})},lT=({onComplete:n,onHome:e})=>{const{shuffledBooks:t,selectedBooks:s,isInitialized:r,initializeQuiz:i,selectBook:a,deselectBook:c,undoLastSelection:u,resetSelections:d,calculateScore:m,isBookSelected:g,getSelectionIndex:E}=aT(),{books:S}=At(),{t:R,translateBook:V}=Cn(),[D,L]=N.useState(!1),[F,q]=N.useState(null),[z,j]=N.useState(!1),[$,w]=N.useState(""),_=N.useRef(null);N.useEffect(()=>{r||i()},[r,i]),N.useEffect(()=>{if(!z)return;const W=re=>{_.current&&!_.current.contains(re.target)&&j(!1)};return document.addEventListener("pointerdown",W),()=>document.removeEventListener("pointerdown",W)},[z]);const I=N.useCallback(W=>{g(W)||(a(W),q(W),w(""),setTimeout(()=>q(null),600))},[g,a]),v=N.useCallback(()=>{u(),q(null),j(!1)},[u]),T=N.useCallback(()=>{d(),q(null),j(!1)},[d]),b=()=>{s.length===t.length&&(L(!0),j(!1))},y=()=>{const W=m();n(W)},ee=()=>{L(!1)},he=N.useMemo(()=>{const W=t.filter(rt=>!s.includes(rt)),re=$.trim().toLowerCase(),Fe=re?W.filter(rt=>{const Ye=V(rt).toLowerCase(),Zt=rt.toLowerCase();return Ye.includes(re)||Zt.includes(re)}):W;return[...s,...Fe]},[t,s,$,V]),K=t.length>0?s.length/t.length*100:0,de=s.length===t.length;return f.jsxs("div",{className:"quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",R("exit")]}),f.jsxs("header",{className:"quiz-header",children:[f.jsx("h1",{className:"quiz-title",children:R("quiz.title")}),f.jsx("p",{className:"quiz-instruction",children:R("quiz.instruction")})]}),f.jsxs("div",{className:"quiz-progress",children:[f.jsx(qa,{progress:K}),f.jsxs("div",{className:"progress-text",children:[s.length," / ",t.length," ",R("quiz.selected")]})]}),f.jsxs("div",{className:"quiz-search",children:[f.jsx("input",{className:"quiz-search-input",type:"text",value:$,onChange:W=>w(W.target.value),placeholder:R("quiz.searchPlaceholder")}),$&&f.jsx("button",{className:"quiz-search-clear",onClick:()=>w(""),"aria-label":"Clear",children:"×"})]}),f.jsx("div",{className:"quiz-content",children:f.jsx("div",{className:"books-grid",children:he.map(W=>{const re=E(W),Fe=re!==null&&S[re-1]===W;return f.jsx(cT,{book:W,displayName:V(W),isSelected:g(W),isCorrectlyPlaced:Fe,isLastPlaced:F===W,selectionIndex:re,onClick:()=>I(W),onDeselect:()=>c(W)},W)})})}),f.jsxs("div",{className:"quiz-actions quiz-actions-desktop",children:[f.jsx(ce,{onClick:v,variant:"secondary",disabled:s.length===0,className:"action-button",children:R("quiz.undoLast")}),f.jsx(ce,{onClick:T,variant:"secondary",disabled:s.length===0,className:"action-button",children:R("quiz.resetAll")}),f.jsx(ce,{onClick:b,variant:"primary",disabled:!de,className:"action-button submit-button",children:R("quiz.submitAnswer")})]}),f.jsxs("div",{className:"quiz-fab-wrapper",ref:_,children:[z&&f.jsxs("div",{className:"quiz-fab-menu",children:[f.jsx("button",{className:"quiz-fab-menu-item quiz-fab-menu-submit",onClick:b,disabled:!de,children:R("quiz.submitAnswer")}),f.jsx("button",{className:"quiz-fab-menu-item",onClick:v,disabled:s.length===0,children:R("quiz.undoLast")}),f.jsx("button",{className:"quiz-fab-menu-item",onClick:T,disabled:s.length===0,children:R("quiz.resetAll")})]}),f.jsx("button",{className:`quiz-fab ${z?"quiz-fab-open":""}`,onClick:()=>j(W=>!W),"aria-label":"Actions",children:f.jsx("span",{className:"quiz-fab-icon",children:z?"×":"…"})})]}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:ee,children:f.jsxs("div",{className:"confirmation-modal",onClick:W=>W.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:R("quiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:R("quiz.confirmText",{count:t.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(ce,{onClick:ee,variant:"secondary",children:R("quiz.goBack")}),f.jsx(ce,{onClick:y,variant:"primary",children:R("quiz.yesSubmit")})]})]})})]})},uT=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const s=t.split(" ");if(s.length>1)return`${s[0]} ${s[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},mo=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),hT=({onComplete:n,onHome:e})=>{const{t,translateBook:s,language:r}=Cn(),{books:i}=At(),[a,c]=N.useState(0),[u,d]=N.useState(""),[m,g]=N.useState(Array(i.length).fill(null)),[E,S]=N.useState(!1),[R,V]=N.useState(null),[D,L]=N.useState(!1),F=N.useRef(null),q=i[a],z=s(q),j=uT(q,z);N.useEffect(()=>{F.current&&!E&&F.current.focus()},[a,E]);const $=()=>{setTimeout(()=>{var K;(K=F.current)==null||K.scrollIntoView({behavior:"smooth",block:"center"})},300)},w=()=>{const K=mo(u),de=mo(z),W=mo(q),re=K===de||K===W;V(re),S(!0);const Fe=[...m];Fe[a]={input:u,correct:re,correctAnswer:z},g(Fe)},_=()=>{a<i.length-1?(c(a+1),d(""),S(!1),V(null)):T()},I=()=>{const K=[...m];K[a]={input:"",correct:!1,correctAnswer:z,skipped:!0},g(K),a<i.length-1?(c(a+1),d(""),S(!1),V(null)):T()},v=K=>{K.key==="Enter"&&(E?_():u.trim()&&w())},T=()=>{L(!0)},b=()=>{const K=m.filter(re=>re==null?void 0:re.correct).length,de=i.length,W=Math.round(K/de*100);n({correct:K,total:de,percentage:W,selections:m.map((re,Fe)=>(re==null?void 0:re.input)||""),answers:m,quizType:"complete"})},y=()=>{L(!1)},ee=m.filter(K=>K!==null).length,he=ee/i.length*100;return f.jsxs("div",{className:"complete-quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",t("exit")]}),f.jsxs("header",{className:"complete-quiz-header",children:[f.jsx("h1",{className:"complete-quiz-title",children:t("completeQuiz.title")}),f.jsx("p",{className:"complete-quiz-instruction",children:t("completeQuiz.instruction")})]}),f.jsxs("div",{className:"complete-quiz-progress",children:[f.jsx(qa,{progress:he}),f.jsx("div",{className:"progress-text",children:t("completeQuiz.progress",{completed:ee,total:i.length})})]}),f.jsxs("div",{className:"complete-quiz-content",children:[f.jsx("div",{className:"book-number",children:a+1}),f.jsxs("div",{className:"hint-card",children:[f.jsx("div",{className:"hint-text",children:j}),f.jsx("div",{className:"hint-label",children:t("completeQuiz.hint",{hint:`${z.length} ${r==="es"?"letras":"letters"}`})})]}),E?f.jsxs("div",{className:`result-section ${R?"correct":"incorrect"}`,children:[f.jsx("div",{className:"result-icon",children:R?"✓":"✗"}),f.jsx("div",{className:"result-message",children:t(R?"completeQuiz.correct":"completeQuiz.incorrect")}),!R&&f.jsx("div",{className:"correct-answer",children:t("completeQuiz.correctAnswer",{answer:z})}),f.jsx(ce,{onClick:_,variant:"primary",className:"next-button",children:a<i.length-1?t("completeQuiz.next"):t("completeQuiz.submitAll")})]}):f.jsxs("div",{className:"input-section",children:[f.jsx("input",{ref:F,type:"text",className:"book-input",value:u,onChange:K=>d(K.target.value),onKeyPress:v,onFocus:$,placeholder:t("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),f.jsxs("div",{className:"input-actions",children:[f.jsx(ce,{onClick:I,variant:"secondary",className:"skip-button",children:t("completeQuiz.skip")}),f.jsx(ce,{onClick:w,variant:"primary",disabled:!u.trim(),className:"check-button",children:t("completeQuiz.check")})]})]})]}),f.jsx("div",{className:"books-overview",children:i.map((K,de)=>{const W=m[de];let re="pending";return W?re=W.correct?"correct":"incorrect":de===a&&(re="current"),f.jsx("div",{className:`book-dot ${re}`,title:`${de+1}. ${s(i[de])}`},de)})}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:y,children:f.jsxs("div",{className:"confirmation-modal",onClick:K=>K.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:t("completeQuiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:t("completeQuiz.confirmText",{completed:ee,total:i.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(ce,{onClick:y,variant:"secondary",children:t("quiz.goBack")}),f.jsx(ce,{onClick:b,variant:"primary",children:t("quiz.yesSubmit")})]})]})})]})},dT=({onComplete:n,onHome:e,quizId:t="genesis-covenants"})=>{const{t:s,language:r}=Cn(),{quizzes:i}=At(),[a,c]=N.useState([]),[u,d]=N.useState(0),[m,g]=N.useState(null),[E,S]=N.useState(!1),[R,V]=N.useState([]);N.useEffect(()=>{const _=i.find(v=>v.id===t)||i[0];if(!_)return;const I=_[r]||_.en||[];c(Xv(I)),V([]),d(0),g(null),S(!1)},[r,t,i]);const D=a[u],L=a.length>0?(u+1)/a.length*100:0,F=w=>{E||g(w)},q=()=>{if(m===null)return;const w=m===D.correctIndex,_=[...R];_[u]={questionId:D.id,selectedIndex:m,correctIndex:D.correctIndex,correct:w},V(_),S(!0)},z=()=>{u<a.length-1?(d(u+1),g(null),S(!1)):j()},j=()=>{const w=R.filter(v=>v==null?void 0:v.correct).length,_=a.length,I=Math.round(w/_*100);n({correct:w,total:_,percentage:I,answers:R,questions:a,quizType:"covenants"})};if(!D)return f.jsx("div",{className:"mc-quiz-container",children:f.jsx("div",{className:"mc-loading",children:"Loading..."})});const $=m===D.correctIndex;return f.jsxs("div",{className:"mc-quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",s("exit")]}),f.jsxs("header",{className:"mc-quiz-header",children:[f.jsx("h1",{className:"mc-quiz-title",children:s("multipleChoice.title")}),f.jsx("p",{className:"mc-quiz-instruction",children:s("multipleChoice.instruction")})]}),f.jsxs("div",{className:"mc-quiz-progress",children:[f.jsx(qa,{progress:L}),f.jsx("div",{className:"mc-progress-text",children:s("multipleChoice.question",{current:u+1,total:a.length})})]}),f.jsxs("div",{className:"mc-quiz-content",children:[f.jsxs("div",{className:"mc-question-card",children:[f.jsx("div",{className:"mc-question-text",children:D.question}),f.jsx("div",{className:"mc-options",children:D.options.map((w,_)=>{let I="mc-option";return E?_===D.correctIndex?I+=" correct":_===m&&!$&&(I+=" incorrect"):_===m&&(I+=" selected"),f.jsxs("button",{className:I,onClick:()=>F(_),disabled:E,children:[f.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+_)}),f.jsx("span",{className:"mc-option-text",children:w}),E&&_===D.correctIndex&&f.jsx("span",{className:"mc-option-icon correct",children:"✓"}),E&&_===m&&!$&&f.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},_)})}),E&&f.jsxs("div",{className:`mc-result ${$?"correct":"incorrect"}`,children:[f.jsx("div",{className:"mc-result-message",children:s($?"multipleChoice.correct":"multipleChoice.incorrect")}),!$&&f.jsxs("div",{className:"mc-correct-answer",children:[s("multipleChoice.correctAnswerWas")," ",D.options[D.correctIndex]]}),f.jsxs("div",{className:"mc-reference",children:[s("multipleChoice.reference")," ",D.reference]})]})]}),f.jsx("div",{className:"mc-quiz-actions",children:E?f.jsx(ce,{onClick:z,variant:"primary",className:"mc-action-button",children:u<a.length-1?s("multipleChoice.next"):s("multipleChoice.finish")}):f.jsx(ce,{onClick:q,variant:"primary",disabled:m===null,className:"mc-action-button",children:s("completeQuiz.check")})})]}),f.jsx("div",{className:"mc-dots-overview",children:a.map((w,_)=>{const I=R[_];let v="pending";return I?v=I.correct?"correct":"incorrect":_===u&&(v="current"),f.jsx("div",{className:`mc-dot ${v}`},_)})})]})},Rr=6;function fT(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function mT(n){const e=n.match(/\(([^)]*[\u0370-\u03FF\u1F00-\u1FFF\u05B0-\u05EA][^)]*)\)/),t=n.match(/'([a-zA-Z]+)'/);return{script:e?e[1]:"",transliteration:t?t[1]:""}}const pT=({quizId:n="greek-vocabulary",onHome:e})=>{const{quizzes:t}=At(),{t:s,language:r}=Cn(),[i,a]=N.useState(0),[c,u]=N.useState(new Set),[d,m]=N.useState(0),[g,E]=Eu(`itiapp-flashcard-progress-${n}`,[]),[S,R]=N.useState("all"),V=N.useMemo(()=>t.find(y=>y.id===n),[t,n]),D=N.useMemo(()=>{var y,ee;return((y=V==null?void 0:V.title)==null?void 0:y[r])||((ee=V==null?void 0:V.title)==null?void 0:ee.en)||s("flashcards.title")},[V,r,s]),L=N.useMemo(()=>{if(!V)return[];const y=V[r]||V.en||[];return fT(y)},[V,r,d]),F=N.useMemo(()=>S==="notLearned"?L.filter(y=>!g.includes(y.id)):L,[L,S,g]),q=Math.ceil(F.length/Rr),z=F.slice(i*Rr,i*Rr+Rr),j=N.useCallback(y=>{a(y),u(new Set)},[]),$=N.useCallback(y=>{u(ee=>{const he=new Set(ee);return he.has(y)?he.delete(y):he.add(y),he})},[]),w=z.length>0&&c.size===z.length,_=N.useCallback(()=>{u(w?new Set:new Set(z.map((y,ee)=>ee)))},[w,z]),I=N.useCallback(()=>{m(y=>y+1),a(0),u(new Set)},[]),v=N.useCallback((y,ee)=>{ee.stopPropagation(),E(he=>he.includes(y)?he:[...he,y])},[E]),T=N.useCallback(()=>{E([])},[E]),b=N.useCallback(y=>{R(y),a(0),u(new Set)},[]);return L.length?f.jsx("div",{className:"flashcards-container",children:f.jsxs("div",{className:"flashcards-content",children:[f.jsxs("div",{className:"flashcards-header",children:[f.jsx("button",{className:"flashcard-back-btn",onClick:e,"aria-label":s("flashcards.backToHome"),children:"←"}),f.jsx("h1",{className:"flashcards-title",children:D})]}),f.jsxs("div",{className:"flashcards-progress-bar",children:[f.jsxs("div",{className:"flashcards-progress-text",children:[g.length," / ",L.length," ",s("flashcards.learned")]}),f.jsx("div",{className:"flashcards-progress-track",children:f.jsx("div",{className:"flashcards-progress-fill",style:{width:`${g.length/L.length*100}%`}})})]}),f.jsxs("div",{className:"flashcards-filter",children:[f.jsx("button",{className:`flashcards-filter-btn ${S==="all"?"active":""}`,onClick:()=>b("all"),children:s("flashcards.all")}),f.jsx("button",{className:`flashcards-filter-btn ${S==="notLearned"?"active":""}`,onClick:()=>b("notLearned"),children:s("flashcards.notLearned")})]}),F.length===0?f.jsxs("p",{style:{color:"white",textAlign:"center",padding:"2rem 0"},children:[s("flashcards.all")," ",s("flashcards.learned"),"!"]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"flashcards-grid",children:z.map((y,ee)=>{const{script:he,transliteration:K}=mT(y.question),de=y.options[y.correctIndex],W=c.has(ee),re=g.includes(y.id);return f.jsx("div",{className:"flashcard-scene",onClick:()=>$(ee),children:f.jsxs("div",{className:`flashcard ${W?"is-flipped":""}`,children:[f.jsxs("div",{className:"flashcard-face flashcard-front",children:[re&&f.jsx("span",{className:"flashcard-known-badge",children:"✓"}),f.jsx("div",{className:"flashcard-greek",children:he}),f.jsx("div",{className:"flashcard-transliteration",children:K})]}),f.jsxs("div",{className:"flashcard-face flashcard-back",children:[f.jsx("div",{className:"flashcard-meaning",children:de}),f.jsx("div",{className:"flashcard-reference",children:y.reference}),!re&&f.jsx("button",{className:"flashcard-know-btn",onClick:Fe=>v(y.id,Fe),children:s("flashcards.knowIt")})]})]})},`${i}-${ee}`)})}),f.jsxs("div",{className:"flashcards-nav",children:[f.jsx("button",{className:"flashcard-nav-btn",onClick:()=>j(i-1),disabled:i===0,"aria-label":s("flashcards.previous"),children:"←"}),f.jsxs("span",{className:"flashcard-nav-indicator",children:[i+1," / ",q]}),f.jsx("button",{className:"flashcard-nav-btn",onClick:()=>j(i+1),disabled:i>=q-1,"aria-label":s("flashcards.next"),children:"→"})]})]}),f.jsxs("div",{className:"flashcards-actions",children:[f.jsx("button",{className:"flashcard-action-btn",onClick:_,children:s(w?"flashcards.hideAll":"flashcards.showAll")}),f.jsx("button",{className:"flashcard-action-btn",onClick:I,children:s("flashcards.shuffle")}),g.length>0&&f.jsx("button",{className:"flashcard-action-btn",onClick:T,children:s("flashcards.resetProgress")}),f.jsx("button",{className:"flashcard-action-btn",onClick:e,children:s("flashcards.backToHome")})]})]})}):f.jsx("div",{className:"flashcards-container",children:f.jsxs("div",{className:"flashcards-content",children:[f.jsxs("div",{className:"flashcards-header",children:[f.jsx("button",{className:"flashcard-back-btn",onClick:e,"aria-label":s("flashcards.backToHome"),children:"←"}),f.jsx("h1",{className:"flashcards-title",children:D})]}),f.jsx("p",{style:{color:"white",textAlign:"center"},children:"No cards available."})]})})},gT=({score:n,onRetry:e,onHome:t})=>{const{updateStats:s}=wu(),{t:r,translateBook:i,getScoreMessage:a}=Cn(),{books:c}=At();if(N.useEffect(()=>{n&&s(n)},[n,s]),!n)return f.jsxs("div",{className:"results-container",children:[f.jsx("p",{children:r("results.noResults")}),f.jsx(ce,{onClick:t,children:r("results.goHome")})]});const{correct:u,total:d,percentage:m,selections:g,answers:E,questions:S,quizType:R}=n,V=a(m),D=iT(m),L=R==="complete",F=R==="covenants";return f.jsx("div",{className:"results-container",children:f.jsxs("div",{className:"results-content",children:[f.jsx("header",{className:"results-header",children:f.jsx("h1",{className:"results-title",children:r("results.title")})}),f.jsxs(qr,{className:"score-card",children:[f.jsxs("div",{className:"score-display",style:{borderColor:D},children:[f.jsxs("div",{className:"score-percentage",style:{color:D},children:[m,"%"]}),f.jsx("div",{className:"score-message",style:{color:D},children:V}),f.jsx("div",{className:"score-details",children:r("results.outOf",{correct:u,total:d})})]}),f.jsxs("div",{className:"score-breakdown",children:[f.jsxs("div",{className:"breakdown-item correct",children:[f.jsx("span",{className:"breakdown-icon",children:"✓"}),f.jsxs("span",{className:"breakdown-text",children:[u," ",r("results.correct")]})]}),f.jsxs("div",{className:"breakdown-item incorrect",children:[f.jsx("span",{className:"breakdown-icon",children:"✗"}),f.jsxs("span",{className:"breakdown-text",children:[d-u," ",r("results.incorrect")]})]})]})]}),f.jsxs(qr,{className:"details-card",children:[f.jsx("h2",{className:"details-title",children:r("results.yourAnswers")}),f.jsx("div",{className:"answers-list",children:F?E==null?void 0:E.map((q,z)=>{var I,v;const j=S==null?void 0:S[z],$=q==null?void 0:q.correct,w=((I=j==null?void 0:j.options)==null?void 0:I[q==null?void 0:q.selectedIndex])||r("multipleChoice.skipped"),_=(v=j==null?void 0:j.options)==null?void 0:v[j==null?void 0:j.correctIndex];return f.jsxs("div",{className:`answer-item ${$?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsx("div",{className:"answer-question",children:j==null?void 0:j.question}),f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:w})]}),!$&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:_})]}),f.jsx("div",{className:"answer-reference",children:j==null?void 0:j.reference})]}),f.jsx("div",{className:"answer-status",children:$?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)}):L?E==null?void 0:E.map((q,z)=>{const j=c[z],$=q==null?void 0:q.correct,w=(q==null?void 0:q.input)||"-";return f.jsxs("div",{className:`answer-item ${$?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:w})]}),!$&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(j)})]})]}),f.jsx("div",{className:"answer-status",children:$?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)}):g==null?void 0:g.map((q,z)=>{const j=c[z],$=q===j;return f.jsxs("div",{className:`answer-item ${$?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:i(q)})]}),!$&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(j)})]})]}),f.jsx("div",{className:"answer-status",children:$?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)})})]}),f.jsxs("div",{className:"results-actions",children:[f.jsx(ce,{onClick:t,variant:"secondary",size:"large",children:r("results.home")}),f.jsx(ce,{onClick:e,variant:"primary",size:"large",children:r("results.tryAgain")})]})]})})},bf=N.createContext(null),_T=new _t,yT=({children:n})=>{const[e,t]=N.useState(null),[s,r]=N.useState(!!gt);N.useEffect(()=>gt?uE(gt,d=>{t(d),r(!1)}):void 0,[]);const i=(u,d)=>{if(!gt)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return aE(gt,u,d)},a=()=>{if(!gt)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return xE(gt,_T)},c=()=>gt?hE(gt):Promise.resolve();return f.jsx(bf.Provider,{value:{user:e,loading:s,signInWithEmail:i,signInWithGoogle:a,signOut:c},children:n})},IT=()=>{const n=N.useContext(bf);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n};async function ET(){const n={books:!1,quizzes:!1,translations:!1};try{await yf(Ef),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await If("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ui.en,es:ui.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await li("en",Fs.en),await li("es",Fs.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const wT=({onBack:n})=>{var St,ls,us;const{books:e,quizzes:t,translations:s,refreshData:r}=At(),{user:i,loading:a,signInWithEmail:c,signInWithGoogle:u,signOut:d}=IT(),[m,g]=N.useState(""),[E,S]=N.useState(""),[R,V]=N.useState(""),[D,L]=N.useState("books"),[F,q]=N.useState(""),[z,j]=N.useState(!1),[$,w]=N.useState([]),[_,I]=N.useState(""),[v,T]=N.useState(null),[b,y]=N.useState(null),[ee,he]=N.useState(!1),[K,de]=N.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[W,re]=N.useState("en"),[Fe,rt]=N.useState({}),[Ye,Zt]=N.useState("");N.useEffect(()=>{w([...e])},[e]),N.useEffect(()=>{s[W]&&rt(JSON.parse(JSON.stringify(s[W])))},[W,s]);const Pn=async P=>{P.preventDefault(),V("");try{await c(m,E)}catch(B){V(B.code==="auth/invalid-credential"?"Invalid email or password":B.message)}},is=async()=>{V("");try{await u()}catch(P){P.code!=="auth/popup-closed-by-user"&&V(P.message)}},Ce=P=>{q(P),setTimeout(()=>q(""),3e3)},os=async()=>{j(!0);try{await yf($),await r(),Ce("Books saved successfully!")}catch(P){Ce("Error saving books: "+P.message)}j(!1)},Rn=()=>{_.trim()&&!$.includes(_.trim())&&(w([...$,_.trim()]),I(""))},ir=P=>{w($.filter((B,X)=>X!==P))},or=(P,B)=>{const X=[...$],le=P+B;le<0||le>=X.length||([X[P],X[le]]=[X[le],X[P]],w(X))},Oi=P=>{const B=t.find(X=>X.id===P);B&&(T(P),y(JSON.parse(JSON.stringify(B))))},ar=async()=>{if(!(!b||!v)){j(!0);try{const{id:P,...B}=b;await If(v,B),await r(),Ce("Quiz saved successfully!")}catch(P){Ce("Error saving quiz: "+P.message)}j(!1)}},as=async()=>{if(K.id.trim()){j(!0);try{const P={title:{en:K.titleEn,es:K.titleEs},description:{en:K.descEn,es:K.descEs},icon:K.icon||"📝",category:K.category,en:[],es:[]};await Jv(K.id.trim(),P),await r(),he(!1),de({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),Ce("Quiz created successfully!")}catch(P){Ce("Error creating quiz: "+P.message)}j(!1)}},cr=async P=>{if(window.confirm(`Delete quiz "${P}"?`)){j(!0);try{await Yv(P),await r(),v===P&&(T(null),y(null)),Ce("Quiz deleted!")}catch(B){Ce("Error deleting quiz: "+B.message)}j(!1)}},Li=P=>{var X;if(!b)return;const B={id:(((X=b[P])==null?void 0:X.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};y({...b,[P]:[...b[P]||[],B]})},en=(P,B,X,le)=>{const ie={...b};ie[P]=[...ie[P]],ie[P][B]={...ie[P][B],[X]:le},y(ie)},cs=(P,B,X,le)=>{const ie={...b};ie[P]=[...ie[P]];const _e={...ie[P][B]};_e.options=[..._e.options],_e.options[X]=le,ie[P][B]=_e,y(ie)},lr=(P,B)=>{const X={...b};X[P]=X[P].filter((le,ie)=>ie!==B),y(X)},Ee=(P,B="")=>{const X={};for(const le of Object.keys(P)){const ie=B?`${B}.${le}`:le;typeof P[le]=="object"&&P[le]!==null&&!Array.isArray(P[le])?Object.assign(X,Ee(P[le],ie)):X[ie]=P[le]}return X},ke=P=>{const B={};for(const[X,le]of Object.entries(P)){const ie=X.split(".");let _e=B;for(let qe=0;qe<ie.length-1;qe++)ie[qe]in _e||(_e[ie[qe]]={}),_e=_e[ie[qe]];_e[ie[ie.length-1]]=le}return B},kn=async()=>{j(!0);try{await li(W,Fe),await r(),Ce(`Translations (${W}) saved!`)}catch(P){Ce("Error saving translations: "+P.message)}j(!1)},ur=(P,B)=>{const X=Ee(Fe);X[P]=B,rt(ke(X))},hr=async()=>{if(!(!Ye.trim()||s[Ye.trim()])){j(!0);try{const P=JSON.parse(JSON.stringify(s.en||{}));await li(Ye.trim(),P),await r(),re(Ye.trim()),Zt(""),Ce(`Language "${Ye.trim()}" added!`)}catch(P){Ce("Error adding language: "+P.message)}j(!1)}},Mi=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){j(!0);try{const P=await ET();await r(),Ce(`Seed complete - Books: ${P.books?"OK":"FAIL"}, Quizzes: ${P.quizzes?"OK":"FAIL"}, Translations: ${P.translations?"OK":"FAIL"}`)}catch(P){Ce("Seed error: "+P.message)}j(!1)}};return a?f.jsx("div",{className:"admin-container",children:f.jsx("div",{className:"admin-login",children:f.jsx("p",{children:"Loading..."})})}):i?f.jsxs("div",{className:"admin-container",children:[f.jsxs("header",{className:"admin-header",children:[f.jsx("h1",{children:"Admin Panel"}),f.jsxs("div",{className:"admin-header-actions",children:[f.jsx("span",{className:"admin-user-info",children:i.email}),f.jsx(ce,{onClick:Mi,variant:"secondary",disabled:z,children:"Seed Data"}),f.jsx(ce,{onClick:()=>d(),variant:"secondary",children:"Sign Out"}),f.jsx(ce,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),F&&f.jsx("div",{className:"admin-status-bar",children:F}),f.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(P=>f.jsx("button",{className:`admin-tab ${D===P?"active":""}`,onClick:()=>L(P),children:P.charAt(0).toUpperCase()+P.slice(1)},P))}),f.jsxs("div",{className:"admin-content",children:[D==="books"&&f.jsxs("div",{className:"admin-section",children:[f.jsxs("h2",{children:["Old Testament Books (",$.length,")"]}),f.jsx("div",{className:"admin-books-list",children:$.map((P,B)=>f.jsxs("div",{className:"admin-book-item",children:[f.jsx("span",{className:"admin-book-number",children:B+1}),f.jsx("span",{className:"admin-book-name",children:P}),f.jsxs("div",{className:"admin-book-actions",children:[f.jsx("button",{onClick:()=>or(B,-1),disabled:B===0,children:"↑"}),f.jsx("button",{onClick:()=>or(B,1),disabled:B===$.length-1,children:"↓"}),f.jsx("button",{onClick:()=>ir(B),className:"admin-delete-btn",children:"✕"})]})]},B))}),f.jsxs("div",{className:"admin-add-row",children:[f.jsx("input",{type:"text",value:_,onChange:P=>I(P.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:P=>P.key==="Enter"&&Rn()}),f.jsx(ce,{onClick:Rn,variant:"secondary",children:"Add"})]}),f.jsx(ce,{onClick:os,variant:"primary",disabled:z,children:z?"Saving...":"Save Books"})]}),D==="quizzes"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Quizzes"}),f.jsx("div",{className:"admin-quiz-list",children:t.map(P=>{var B,X;return f.jsxs("div",{className:"admin-quiz-item",children:[f.jsxs("button",{className:`admin-quiz-select ${v===P.id?"active":""}`,onClick:()=>Oi(P.id),children:[f.jsx("span",{children:P.icon||"📝"}),f.jsx("span",{children:((B=P.title)==null?void 0:B.en)||P.id}),f.jsxs("span",{className:"admin-quiz-count",children:[((X=P.en)==null?void 0:X.length)||0," Q"]})]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>cr(P.id),children:"✕"})]},P.id)})}),f.jsx(ce,{onClick:()=>he(!ee),variant:"secondary",children:ee?"Cancel":"+ New Quiz"}),ee&&f.jsxs("div",{className:"admin-new-quiz-form",children:[f.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:K.id,onChange:P=>de({...K,id:P.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:K.titleEn,onChange:P=>de({...K,titleEn:P.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:K.titleEs,onChange:P=>de({...K,titleEs:P.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:K.descEn,onChange:P=>de({...K,descEn:P.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:K.descEs,onChange:P=>de({...K,descEs:P.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:K.icon,onChange:P=>de({...K,icon:P.target.value})}),f.jsx(ce,{onClick:as,variant:"primary",disabled:z,children:"Create Quiz"})]}),b&&v&&f.jsxs("div",{className:"admin-quiz-editor",children:[f.jsxs("h3",{children:["Editing: ",((St=b.title)==null?void 0:St.en)||v]}),f.jsxs("div",{className:"admin-quiz-meta",children:[f.jsxs("label",{children:["Title (EN):",f.jsx("input",{className:"admin-input",value:((ls=b.title)==null?void 0:ls.en)||"",onChange:P=>y({...b,title:{...b.title,en:P.target.value}})})]}),f.jsxs("label",{children:["Title (ES):",f.jsx("input",{className:"admin-input",value:((us=b.title)==null?void 0:us.es)||"",onChange:P=>y({...b,title:{...b.title,es:P.target.value}})})]}),f.jsxs("label",{children:["Icon:",f.jsx("input",{className:"admin-input",value:b.icon||"",onChange:P=>y({...b,icon:P.target.value})})]})]}),["en","es"].map(P=>{var B,X;return f.jsxs("div",{className:"admin-questions-section",children:[f.jsxs("h4",{children:["Questions (",P.toUpperCase(),") - ",((B=b[P])==null?void 0:B.length)||0]}),(X=b[P])==null?void 0:X.map((le,ie)=>f.jsxs("div",{className:"admin-question-card",children:[f.jsxs("div",{className:"admin-question-header",children:[f.jsxs("span",{children:["Q",ie+1]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>lr(P,ie),children:"✕"})]}),f.jsx("textarea",{className:"admin-textarea",value:le.question,onChange:_e=>en(P,ie,"question",_e.target.value),placeholder:"Question text"}),le.options.map((_e,qe)=>f.jsxs("div",{className:"admin-option-row",children:[f.jsx("input",{type:"radio",name:`correct-${P}-${ie}`,checked:le.correctIndex===qe,onChange:()=>en(P,ie,"correctIndex",qe)}),f.jsx("input",{className:"admin-input",value:_e,onChange:hs=>cs(P,ie,qe,hs.target.value),placeholder:`Option ${String.fromCharCode(65+qe)}`})]},qe)),f.jsx("input",{className:"admin-input",value:le.reference||"",onChange:_e=>en(P,ie,"reference",_e.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},ie)),f.jsxs(ce,{onClick:()=>Li(P),variant:"secondary",children:["+ Add Question (",P.toUpperCase(),")"]})]},P)}),f.jsx(ce,{onClick:ar,variant:"primary",disabled:z,children:z?"Saving...":"Save Quiz"})]})]}),D==="translations"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Translations"}),f.jsx("div",{className:"admin-lang-selector",children:Object.keys(s).map(P=>f.jsx("button",{className:`admin-tab ${W===P?"active":""}`,onClick:()=>re(P),children:P.toUpperCase()},P))}),f.jsxs("div",{className:"admin-add-lang",children:[f.jsx("input",{className:"admin-input",value:Ye,onChange:P=>Zt(P.target.value),placeholder:"New language code (e.g., fr)"}),f.jsx(ce,{onClick:hr,variant:"secondary",disabled:z,children:"Add Language"})]}),f.jsx("div",{className:"admin-translations-editor",children:Object.entries(Ee(Fe)).map(([P,B])=>f.jsxs("div",{className:"admin-translation-row",children:[f.jsx("label",{className:"admin-translation-key",children:P}),typeof B=="string"&&B.length>60?f.jsx("textarea",{className:"admin-textarea",value:B,onChange:X=>ur(P,X.target.value)}):f.jsx("input",{className:"admin-input",value:typeof B=="string"?B:JSON.stringify(B),onChange:X=>ur(P,X.target.value)})]},P))}),f.jsx(ce,{onClick:kn,variant:"primary",disabled:z,children:z?"Saving...":`Save Translations (${W.toUpperCase()})`})]})]})]}):f.jsx("div",{className:"admin-container",children:f.jsxs("div",{className:"admin-login",children:[f.jsx("h2",{children:"Admin Access"}),f.jsxs("form",{onSubmit:Pn,children:[f.jsx("input",{type:"email",value:m,onChange:P=>g(P.target.value),placeholder:"Email",className:"admin-input",autoFocus:!0}),f.jsx("input",{type:"password",value:E,onChange:P=>S(P.target.value),placeholder:"Password",className:"admin-input"}),f.jsx(ce,{type:"submit",variant:"primary",children:"Sign In"})]}),f.jsx("div",{className:"admin-divider",children:f.jsx("span",{children:"or"})}),f.jsxs("button",{className:"admin-google-btn",onClick:is,children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),f.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),f.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),f.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),R&&f.jsx("p",{className:"admin-status error",children:R}),f.jsx(ce,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})},vT=()=>{const{language:n,setLanguage:e,t}=Cn();return f.jsxs("div",{className:"language-selector",children:[f.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),f.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})};function TT(){const[n,e]=N.useState("home"),[t,s]=N.useState(null),[r,i]=N.useState("order"),[a,c]=N.useState("genesis-covenants"),u=()=>{i("order"),e("quiz"),s(null)},d=()=>{i("complete"),e("completeQuiz"),s(null)},m=()=>{i("covenants"),c("genesis-covenants"),e("covenantsQuiz"),s(null)},g=L=>{i("covenants"),c(L),e("covenantsQuiz"),s(null)},E=L=>{s({...L,quizType:L.quizType||r}),e("results")},S=()=>{e("home"),s(null)},R=L=>{c(L),e("flashcards")},V=()=>{e("admin")},D=()=>{r==="complete"?d():r==="covenants"?g(a):u()};return f.jsx(yT,{children:f.jsx(eT,{children:f.jsx(nT,{children:f.jsx(oT,{children:f.jsxs("div",{className:"app",children:[f.jsx("div",{className:"app-language-selector",children:f.jsx(vT,{})}),n==="home"&&f.jsx(sT,{onStartOrder:u,onStartComplete:d,onStartCovenants:m,onStartQuiz:g,onStartFlashCards:R,onNavigateAdmin:V}),n==="quiz"&&f.jsx(lT,{onComplete:E,onHome:S}),n==="completeQuiz"&&f.jsx(hT,{onComplete:E,onHome:S}),n==="covenantsQuiz"&&f.jsx(dT,{onComplete:E,onHome:S,quizId:a}),n==="results"&&f.jsx(gT,{score:t,onRetry:D,onHome:S}),n==="flashcards"&&f.jsx(pT,{quizId:a,onHome:S}),n==="admin"&&f.jsx(wT,{onBack:S})]})})})})})}const bT="modulepreload",AT=function(n){return"/ITIApp/"+n},_u={},ST=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=AT(u),u in _u)return;_u[u]=!0;const d=u.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":bT,d||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((E,S)=>{g.addEventListener("load",E),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return r.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function CT(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:a}=n;let c,u;const d=async(g=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(c=await ST(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(g=>{a==null||a(g)}),!c)return;c.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),c.addEventListener("installed",g=>{g.isUpdate||s==null||s()}),c.register({immediate:e}).then(g=>{i?i("/ITIApp/sw.js",g):r==null||r(g)}).catch(g=>{a==null||a(g)})}}return u=m(),d}const PT=CT({onNeedRefresh(){confirm("New content available. Reload?")&&PT(!0)},onOfflineReady(){console.log("App ready to work offline")}});po.createRoot(document.getElementById("root")).render(f.jsx(Qf.StrictMode,{children:f.jsx(TT,{})}));
