import{r as x,a as Gf,R as Wf}from"./react-vendor-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var gu={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=x,Qf=Symbol.for("react.element"),Kf=Symbol.for("react.fragment"),Jf=Object.prototype.hasOwnProperty,Yf=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xf={key:!0,ref:!0,__self:!0,__source:!0};function _u(n,e,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)Jf.call(e,s)&&!Xf.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Qf,type:n,key:i,ref:a,props:r,_owner:Yf.current}}hi.Fragment=Kf;hi.jsx=_u;hi.jsxs=_u;gu.exports=hi;var f=gu.exports,po={},kc=Gf;po.createRoot=kc.createRoot,po.hydrateRoot=kc.hydrateRoot;const Ur=({children:n,className:e="",...t})=>f.jsx("div",{className:`card ${e}`,...t,children:n}),yu=(n,e)=>{const[t,s]=x.useState(()=>{try{const i=window.localStorage.getItem(n);return i?JSON.parse(i):e}catch(i){return console.error(`Error loading localStorage key "${n}":`,i),e}});return[t,i=>{try{const a=i instanceof Function?i(t):i;s(a),window.localStorage.setItem(n,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${n}":`,a)}}]},Iu=()=>{const[n,e]=yu("itiapp-stats",{totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null}),t=x.useCallback(r=>{e(i=>{const a=i.totalAttempts+1,c=i.totalCorrect+r.correct,u=Math.round(c/(a*r.total)*100);return{totalAttempts:a,bestScore:Math.max(i.bestScore,r.percentage),averageScore:u,totalCorrect:c,lastAttemptDate:new Date().toISOString()}})},[e]),s=x.useCallback(()=>{e({totalAttempts:0,bestScore:0,averageScore:0,totalCorrect:0,lastAttemptDate:null})},[e]);return{stats:n,updateStats:t,resetStats:s}},Fs={en:{appName:"ITIApp",appSubtitle:"Bible Quiz",exit:"Exit",home:{welcomeTitle:"Old Testament Books",welcomeDescription:"Test your knowledge of the Old Testament! Choose a quiz mode below.",booksCount:"39 Books",unlimitedTime:"Unlimited Time",orderChallenge:"Order Challenge",startQuiz:"Start Quiz",yourProgress:"Your Progress",attempts:"Attempts",bestScore:"Best Score",average:"Average",footerText:"Learn the Bible one quiz at a time",selectQuizType:"Select Quiz Type",quizTypes:{order:{title:"Order the Books",description:"Arrange all 39 books in their correct biblical order",icon:"📚"},complete:{title:"Complete the Names",description:"Books shown in order - type the full name from the first letters",icon:"✏️"},covenants:{title:"Jacob's Covenants",description:"Multiple choice questions about the covenants in Genesis",icon:"📜"}},oldTestament:"Old Testament",knowledge:"Knowledge",study:"Study",studyTypes:{greekFlashCards:{title:"Greek Flashcards",description:"Study New Testament Greek vocabulary with flip cards"}}},flashcards:{title:"Greek Flashcards",tapToFlip:"Tap to flip",next:"Next",previous:"Previous",shuffle:"Shuffle",backToHome:"Back to Home",showAll:"Show All",hideAll:"Hide All",learned:"learned",knowIt:"Know it",all:"All",notLearned:"Not learned",resetProgress:"Reset Progress"},quiz:{title:"Order the Books",instruction:"Click the books in their correct biblical order",selected:"selected",undoLast:"Undo Last",resetAll:"Reset All",submitAnswer:"Submit Answer",confirmTitle:"Submit Your Answer?",confirmText:"Are you sure you want to submit? You have selected all {count} books.",goBack:"Go Back",yesSubmit:"Yes, Submit",searchPlaceholder:"Search book..."},completeQuiz:{title:"Complete the Names",instruction:"Type the full book name for each hint",progress:"{completed} of {total} completed",placeholder:"Type book name...",skip:"Skip",check:"Check",next:"Next",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"The answer was: {answer}",submitAll:"Submit Quiz",confirmTitle:"Submit Your Answers?",confirmText:"You have completed {completed} of {total} books. Submit now?",hint:"Hint: {hint}"},multipleChoice:{title:"Jacob's Covenants",instruction:"Select the correct answer for each question",question:"Question {current} of {total}",selectAnswer:"Select your answer",next:"Next",finish:"Finish",correct:"Correct!",incorrect:"Incorrect",correctAnswerWas:"The correct answer was:",reference:"Reference:",yourAnswer:"Your answer:",skipped:"Skipped"},results:{title:"Quiz Complete!",noResults:"No results available",goHome:"Go Home",outOf:"{correct} out of {total} correct",correct:"Correct",incorrect:"Incorrect",yourAnswers:"Your Answers",yourAnswer:"Your answer:",correctAnswer:"Correct:",home:"Home",tryAgain:"Try Again"},scores:{perfect:"Perfect Score!",excellent:"Excellent!",great:"Great Job!",good:"Good Work!",notBad:"Not Bad!",keepPracticing:"Keep Practicing!",tryAgain:"Try Again!"},language:{select:"Language",en:"English",es:"Spanish"},books:{Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Kings","2 Kings":"2 Kings","1 Chronicles":"1 Chronicles","2 Chronicles":"2 Chronicles",Ezra:"Ezra",Nehemiah:"Nehemiah",Esther:"Esther",Job:"Job",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi"}},es:{appName:"ITIApp",appSubtitle:"Quiz Bíblico",exit:"Salir",home:{welcomeTitle:"Libros del Antiguo Testamento",welcomeDescription:"¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.",booksCount:"39 Libros",unlimitedTime:"Tiempo Ilimitado",orderChallenge:"Desafío de Orden",startQuiz:"Comenzar Quiz",yourProgress:"Tu Progreso",attempts:"Intentos",bestScore:"Mejor Puntaje",average:"Promedio",footerText:"Aprende la Biblia un quiz a la vez",selectQuizType:"Selecciona el Tipo de Quiz",quizTypes:{order:{title:"Ordenar los Libros",description:"Ordena los 39 libros en su orden bíblico correcto",icon:"📚"},complete:{title:"Completar los Nombres",description:"Libros en orden - escribe el nombre completo desde las primeras letras",icon:"✏️"},covenants:{title:"Pactos de Jacob",description:"Preguntas de opción múltiple sobre los pactos en Génesis",icon:"📜"}},oldTestament:"Antiguo Testamento",knowledge:"Conocimiento",study:"Estudio",studyTypes:{greekFlashCards:{title:"Tarjetas de Griego",description:"Estudia vocabulario griego del Nuevo Testamento con tarjetas"}}},flashcards:{title:"Tarjetas de Griego",tapToFlip:"Toca para voltear",next:"Siguiente",previous:"Anterior",shuffle:"Mezclar",backToHome:"Volver al Inicio",showAll:"Mostrar Todo",hideAll:"Ocultar Todo",learned:"aprendidas",knowIt:"La sé",all:"Todas",notLearned:"No aprendidas",resetProgress:"Reiniciar Progreso"},quiz:{title:"Ordena los Libros",instruction:"Haz clic en los libros en su orden bíblico correcto",selected:"seleccionados",undoLast:"Deshacer",resetAll:"Reiniciar",submitAnswer:"Enviar Respuesta",confirmTitle:"¿Enviar tu Respuesta?",confirmText:"¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.",goBack:"Volver",yesSubmit:"Sí, Enviar",searchPlaceholder:"Buscar libro..."},completeQuiz:{title:"Completar los Nombres",instruction:"Escribe el nombre completo del libro para cada pista",progress:"{completed} de {total} completados",placeholder:"Escribe el nombre...",skip:"Saltar",check:"Verificar",next:"Siguiente",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswer:"La respuesta era: {answer}",submitAll:"Enviar Quiz",confirmTitle:"¿Enviar tus Respuestas?",confirmText:"Has completado {completed} de {total} libros. ¿Enviar ahora?",hint:"Pista: {hint}"},multipleChoice:{title:"Pactos de Jacob",instruction:"Selecciona la respuesta correcta para cada pregunta",question:"Pregunta {current} de {total}",selectAnswer:"Selecciona tu respuesta",next:"Siguiente",finish:"Finalizar",correct:"¡Correcto!",incorrect:"Incorrecto",correctAnswerWas:"La respuesta correcta era:",reference:"Referencia:",yourAnswer:"Tu respuesta:",skipped:"Omitida"},results:{title:"¡Quiz Completado!",noResults:"No hay resultados disponibles",goHome:"Ir al Inicio",outOf:"{correct} de {total} correctos",correct:"Correctos",incorrect:"Incorrectos",yourAnswers:"Tus Respuestas",yourAnswer:"Tu respuesta:",correctAnswer:"Correcto:",home:"Inicio",tryAgain:"Intentar de Nuevo"},scores:{perfect:"¡Puntaje Perfecto!",excellent:"¡Excelente!",great:"¡Muy Bien!",good:"¡Buen Trabajo!",notBad:"¡Nada Mal!",keepPracticing:"¡Sigue Practicando!",tryAgain:"¡Inténtalo de Nuevo!"},language:{select:"Idioma",en:"Inglés",es:"Español"},books:{Genesis:"Génesis",Exodus:"Éxodo",Leviticus:"Levítico",Numbers:"Números",Deuteronomy:"Deuteronomio",Joshua:"Josué",Judges:"Jueces",Ruth:"Rut","1 Samuel":"1 Samuel","2 Samuel":"2 Samuel","1 Kings":"1 Reyes","2 Kings":"2 Reyes","1 Chronicles":"1 Crónicas","2 Chronicles":"2 Crónicas",Ezra:"Esdras",Nehemiah:"Nehemías",Esther:"Ester",Job:"Job",Psalms:"Salmos",Proverbs:"Proverbios",Ecclesiastes:"Eclesiastés","Song of Solomon":"Cantares",Isaiah:"Isaías",Jeremiah:"Jeremías",Lamentations:"Lamentaciones",Ezekiel:"Ezequiel",Daniel:"Daniel",Hosea:"Oseas",Joel:"Joel",Amos:"Amós",Obadiah:"Abdías",Jonah:"Jonás",Micah:"Miqueas",Nahum:"Nahúm",Habakkuk:"Habacuc",Zephaniah:"Sofonías",Haggai:"Hageo",Zechariah:"Zacarías",Malachi:"Malaquías"}}},Zf=()=>{};var Nc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},em=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),s.push(t[m],t[g],t[E],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):em(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||g==null)throw new tm;const E=i<<2|c>>4;if(s.push(E),d!==64){const S=c<<4&240|d>>2;if(s.push(S),g!==64){const P=d<<6&192|g;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nm=function(n){const e=Eu(n);return vu.encodeByteArray(e,!0)},qr=function(n){return nm(n).replace(/\./g,"")},Tu=function(n){try{return vu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rm=()=>sm().__FIREBASE_DEFAULTS__,im=()=>{if(typeof process>"u"||typeof Nc>"u")return;const n=Nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},om=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tu(n[1]);return e&&JSON.parse(e)},di=()=>{try{return Zf()||rm()||im()||om()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wu=n=>{var e,t;return(t=(e=di())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},am=n=>{const e=wu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Au=()=>{var n;return(n=di())==null?void 0:n.config},bu=n=>{var e;return(e=di())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Su(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function lm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qr(JSON.stringify(t)),qr(JSON.stringify(a)),""].join(".")}const Ds={};function um(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ds))Ds[e]?n.emulator.push(e):n.prod.push(e);return n}function hm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let xc=!1;function Cu(n,e){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||Ds[n]===e||Ds[n]||xc)return;Ds[n]=e;function t(E){return`__firebase__banner__${E}`}const s="__firebase__banner",i=um().prod.length>0;function a(){const E=document.getElementById(s);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,S){E.setAttribute("width","24"),E.setAttribute("id",S),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{xc=!0,a()},E}function m(E,S){E.setAttribute("id",S),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=hm(s),S=t("text"),P=document.getElementById(S)||document.createElement("span"),V=t("learnmore"),D=document.getElementById(V)||document.createElement("a"),L=t("preprendIcon"),F=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const U=E.element;c(U),m(D,V);const z=d();u(F,L),U.append(F,P,D,z),document.body.appendChild(U)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function fm(){var e;const n=(e=di())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _m(){return!fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Ru(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="FirebaseError";class st extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ym,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Im(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new st(r,c,s)}}function Im(n,e){return n.replace(Em,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Em=/\{\$([^}]+)}/g;function vm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Dc(i)&&Dc(a)){if(!Bt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Dc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Rs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Tm(n,e){const t=new wm(n,e);return t.subscribe.bind(t)}class wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Am(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Xi),r.error===void 0&&(r.error=Xi),r.complete===void 0&&(r.complete=Xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Am(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xi(){}/**
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
 */const bm=1e3,Sm=2,Cm=4*60*60*1e3,Rm=.5;function Vc(n,e=bm,t=Sm){const s=e*Math.pow(t,n),r=Math.round(Rm*s*(Math.random()-.5)*2);return Math.min(Cm,s+r)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Pm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nm(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:km(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function km(n){return n===an?void 0:n}function Nm(n){return n.instantiationMode==="EAGER"}/**
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
 */class xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Dm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Vm=ee.INFO,Om={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Lm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Om[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=Vm,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Mm=(n,e)=>e.some(t=>n instanceof t);let Oc,Lc;function jm(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fm(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,go=new WeakMap,ku=new WeakMap,Zi=new WeakMap,$o=new WeakMap;function Um(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(jt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Pu.set(t,n)}).catch(()=>{}),$o.set(e,n),e}function qm(n){if(go.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});go.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ku.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zm(n){_o=n(_o)}function Bm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eo(this),e,...t);return ku.set(s,e.sort?e.sort():[e]),jt(s)}:Fm().includes(n)?function(...e){return n.apply(eo(this),e),jt(Pu.get(this))}:function(...e){return jt(n.apply(eo(this),e))}}function $m(n){return typeof n=="function"?Bm(n):(n instanceof IDBTransaction&&qm(n),Mm(n,jm())?new Proxy(n,_o):n)}function jt(n){if(n instanceof IDBRequest)return Um(n);if(Zi.has(n))return Zi.get(n);const e=$m(n);return e!==n&&(Zi.set(n,e),$o.set(e,n)),e}const eo=n=>$o.get(n);function Nu(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=jt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(jt(a.result),u.oldVersion,u.newVersion,jt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Gm=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],to=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Wm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gm.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&u.done]))[0]};return to.set(e,i),i}zm(n=>({...n,get:(e,t,s)=>Mc(e,t)||n.get(e,t,s),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
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
 */class Hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Qm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",jc="0.14.8";/**
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
 */const vt=new fi("@firebase/app"),Km="@firebase/app-compat",Jm="@firebase/analytics-compat",Ym="@firebase/analytics",Xm="@firebase/app-check-compat",Zm="@firebase/app-check",ep="@firebase/auth",tp="@firebase/auth-compat",np="@firebase/database",sp="@firebase/data-connect",rp="@firebase/database-compat",ip="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",cp="@firebase/installations-compat",lp="@firebase/messaging",up="@firebase/messaging-compat",hp="@firebase/performance",dp="@firebase/performance-compat",fp="@firebase/remote-config",mp="@firebase/remote-config-compat",pp="@firebase/storage",gp="@firebase/storage-compat",_p="@firebase/firestore",yp="@firebase/ai",Ip="@firebase/firestore-compat",Ep="firebase",vp="12.9.0";/**
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
 */const Io="[DEFAULT]",Tp={[yo]:"fire-core",[Km]:"fire-core-compat",[Ym]:"fire-analytics",[Jm]:"fire-analytics-compat",[Zm]:"fire-app-check",[Xm]:"fire-app-check-compat",[ep]:"fire-auth",[tp]:"fire-auth-compat",[np]:"fire-rtdb",[sp]:"fire-data-connect",[rp]:"fire-rtdb-compat",[ip]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[cp]:"fire-iid-compat",[lp]:"fire-fcm",[up]:"fire-fcm-compat",[hp]:"fire-perf",[dp]:"fire-perf-compat",[fp]:"fire-rc",[mp]:"fire-rc-compat",[pp]:"fire-gcs",[gp]:"fire-gcs-compat",[_p]:"fire-fst",[Ip]:"fire-fst-compat",[yp]:"fire-vertex","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
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
 */const zr=new Map,wp=new Map,Eo=new Map;function Fc(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ft(n){const e=n.name;if(Eo.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of zr.values())Fc(t,n);for(const t of wp.values())Fc(t,n);return!0}function In(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new yn("app","Firebase",Ap);/**
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
 */class bp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=vp;function xu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Io,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ft.create("bad-app-name",{appName:String(r)});if(t||(t=Au()),!t)throw Ft.create("no-options");const i=zr.get(r);if(i){if(Bt(t,i.options)&&Bt(s,i.config))return i;throw Ft.create("duplicate-app",{appName:r})}const a=new xm(r);for(const u of Eo.values())a.addComponent(u);const c=new bp(t,s,a);return zr.set(r,c),c}function Go(n=Io){const e=zr.get(n);if(!e&&n===Io&&Au())return xu();if(!e)throw Ft.create("no-app",{appName:n});return e}function Ke(n,e,t){let s=Tp[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}ft(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sp="firebase-heartbeat-database",Cp=1,Us="firebase-heartbeat-store";let no=null;function Du(){return no||(no=Nu(Sp,Cp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Us)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),no}async function Rp(n){try{const t=(await Du()).transaction(Us),s=await t.objectStore(Us).get(Vu(n));return await t.done,s}catch(e){if(e instanceof st)vt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function Uc(n,e){try{const s=(await Du()).transaction(Us,"readwrite");await s.objectStore(Us).put(e,Vu(n)),await s.done}catch(t){if(t instanceof st)vt.warn(t.message);else{const s=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(s.message)}}}function Vu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pp=1024,kp=30;class Np{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>kp){const a=Vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:s,unsentEntries:r}=xp(this._heartbeatsCache.heartbeats),i=qr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function qc(){return new Date().toISOString().substring(0,10)}function xp(n,e=Pp){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),zc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),zc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Dp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Uc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Uc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zc(n){return qr(JSON.stringify({version:2,heartbeats:n})).length}function Vp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Op(n){ft(new nt("platform-logger",e=>new Hm(e),"PRIVATE")),ft(new nt("heartbeat",e=>new Np(e),"PRIVATE")),Ke(yo,jc,n),Ke(yo,jc,"esm2020"),Ke("fire-js","")}Op("");var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ut,Ou;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(w,v,A){for(var y=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)y[ce-2]=arguments[ce];return _.prototype[v].apply(w,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,_,I){I||(I=0);const w=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)w[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;v<16;++v)w[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],v=T.g[2];let A=T.g[3],y;y=_+(A^I&(v^A))+w[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=A+(v^_&(I^v))+w[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(I^A&(_^I))+w[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=I+(_^v&(A^_))+w[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(A^I&(v^A))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=A+(v^_&(I^v))+w[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(I^A&(_^I))+w[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=I+(_^v&(A^_))+w[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(A^I&(v^A))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=A+(v^_&(I^v))+w[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(I^A&(_^I))+w[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=I+(_^v&(A^_))+w[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(A^I&(v^A))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=A+(v^_&(I^v))+w[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(I^A&(_^I))+w[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=I+(_^v&(A^_))+w[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^A&(I^v))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=A+(I^v&(_^I))+w[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(A^_))+w[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=I+(A^_&(v^A))+w[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(I^v))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=A+(I^v&(_^I))+w[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(A^_))+w[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=I+(A^_&(v^A))+w[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(I^v))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=A+(I^v&(_^I))+w[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(A^_))+w[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=I+(A^_&(v^A))+w[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(I^v))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=A+(I^v&(_^I))+w[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(A^_))+w[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=I+(A^_&(v^A))+w[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^A)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=A+(_^I^v)+w[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^I)+w[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=I+(v^A^_)+w[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^A)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=A+(_^I^v)+w[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^I)+w[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=I+(v^A^_)+w[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^A)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=A+(_^I^v)+w[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^I)+w[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=I+(v^A^_)+w[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^A)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=A+(_^I^v)+w[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^I)+w[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=I+(v^A^_)+w[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~A))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=A+(I^(_|~v))+w[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~I))+w[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=I+(A^(v|~_))+w[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~A))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=A+(I^(_|~v))+w[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~I))+w[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=I+(A^(v|~_))+w[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~A))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=A+(I^(_|~v))+w[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~I))+w[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=I+(A^(v|~_))+w[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~A))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=A+(I^(_|~v))+w[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~I))+w[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=I+(A^(v|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}s.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,w=this.C;let v=this.h,A=0;for(;A<_;){if(v==0)for(;A<=I;)r(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(w[v++]=T.charCodeAt(A++),v==this.blockSize){r(this,w),v=0;break}}else for(;A<_;)if(w[v++]=T[A++],v==this.blockSize){r(this,w),v=0;break}}this.h=v,this.o+=_},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let w=0;w<32;w+=8)T[_++]=this.g[I]>>>w&255;return T};function i(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function a(T,_){this.h=_;const I=[];let w=!0;for(let v=T.length-1;v>=0;v--){const A=T[v]|0;w&&A==_||(I[v]=A,w=!1)}this.g=I}var c={};function u(T){return-128<=T&&T<128?i(T,function(_){return new a([_|0],_<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return D(d(-T));const _=[];let I=1;for(let w=0;T>=I;w++)_[w]=T/I|0,I*=4294967296;return new a(_,0)}function m(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(m(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=d(Math.pow(_,8));let w=g;for(let A=0;A<T.length;A+=8){var v=Math.min(8,T.length-A);const y=parseInt(T.substring(A,A+v),_);v<8?(v=d(Math.pow(_,v)),w=w.j(v).add(d(y))):(w=w.j(I),w=w.add(d(y)))}return w}var g=u(0),E=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const w=this.i(I);T+=(w>=0?w:4294967296+w)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(V(this))return"-"+D(this).toString(T);const _=d(Math.pow(T,6));var I=this;let w="";for(;;){const v=z(I,_).g;I=L(I,v.j(_));let A=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=v,P(I))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=L(this,T),V(T)?-1:P(T)?0:1};function D(T){const _=T.g.length,I=[];for(let w=0;w<_;w++)I[w]=~T.g[w];return new a(I,~T.h).add(E)}n.abs=function(){return V(this)?D(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let w=0;for(let v=0;v<=_;v++){let A=w+(this.i(v)&65535)+(T.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);w=y>>>16,A&=65535,y&=65535,I[v]=y<<16|A}return new a(I,I[I.length-1]&-2147483648?-1:0)};function L(T,_){return T.add(D(_))}n.j=function(T){if(P(this)||P(T))return g;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<T.g.length;v++){const A=this.i(w)>>>16,y=this.i(w)&65535,ce=T.i(v)>>>16,Ve=T.i(v)&65535;I[2*w+2*v]+=y*Ve,F(I,2*w+2*v),I[2*w+2*v+1]+=A*Ve,F(I,2*w+2*v+1),I[2*w+2*v+1]+=y*ce,F(I,2*w+2*v+1),I[2*w+2*v+2]+=A*ce,F(I,2*w+2*v+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new a(I,0)};function F(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function U(T,_){this.g=T,this.h=_}function z(T,_){if(P(_))throw Error("division by zero");if(P(T))return new U(g,g);if(V(T))return _=z(D(T),_),new U(D(_.g),D(_.h));if(V(_))return _=z(T,D(_)),new U(D(_.g),_.h);if(T.g.length>30){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var I=E,w=_;w.l(T)<=0;)I=M(I),w=M(w);var v=G(I,1),A=G(w,1);for(w=G(w,2),I=G(I,2);!P(w);){var y=A.add(w);y.l(T)<=0&&(v=v.add(I),A=y),w=G(w,1),I=G(I,1)}return _=L(T,v.j(_)),new U(v,_)}for(v=g;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(I),y=A.j(_);V(y)||y.l(T)>0;)I-=w,A=d(I),y=A.j(_);P(A)&&(A=E),v=v.add(A),T=L(T,y)}return new U(v,T)}n.B=function(T){return z(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)&T.i(w);return new a(I,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)|T.i(w);return new a(I,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)^T.i(w);return new a(I,this.h^T.h)};function M(T){const _=T.g.length+1,I=[];for(let w=0;w<_;w++)I[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(I,T.h)}function G(T,_){const I=_>>5;_%=32;const w=T.g.length-I,v=[];for(let A=0;A<w;A++)v[A]=_>0?T.i(A+I)>>>_|T.i(A+I+1)<<32-_:T.i(A+I);return new a(v,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ou=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ut=a}).apply(typeof Bc<"u"?Bc:typeof self<"u"?self:typeof window<"u"?window:{});var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lu,Ps,Mu,kr,vo,ju,Fu,Uu;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof wr=="object"&&wr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var h=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function m(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,b,C){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return l.prototype[b].apply(p,O)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function P(o,l){for(let p=1;p<arguments.length;p++){const b=arguments[p];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const C=b.length||0;o.length=h+C;for(let O=0;O<C;O++)o[h+O]=b[O]}else o.push(b)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(o){a.setTimeout(()=>{throw o},0)}function L(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,h){const p=U.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var U=new V(()=>new z,o=>o.reset());class z{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let M,G=!1,T=new F,_=()=>{const o=Promise.resolve(void 0);M=()=>{o.then(I)}};function I(){for(var o;o=L();){try{o.h.call(o.g)}catch(h){D(h)}var l=U;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}G=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function ce(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(ce,v),ce.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ce.Z.h.call(this)},ce.prototype.h=function(){ce.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ve="closure_listenable_"+(Math.random()*1e6|0),K=0;function he(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++K,this.da=this.fa=!1}function W(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ie(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function Be(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function rt(o){const l={};for(const h in o)l[h]=o[h];return l}const Ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zt(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<Ye.length;C++)h=Ye[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Rn(o){this.src=o,this.g={},this.h=0}Rn.prototype.add=function(o,l,h,p,b){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const O=Se(o,l,p,b);return O>-1?(l=o[O],h||(l.fa=!1)):(l=new he(l,this.src,C,!!p,b),l.fa=h,o.push(l)),l};function is(o,l){const h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),C;(C=b>=0)&&Array.prototype.splice.call(p,b,1),C&&(W(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Se(o,l,h,p){for(let b=0;b<o.length;++b){const C=o[b];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==p)return b}return-1}var os="closure_lm_"+(Math.random()*1e6|0),Pn={};function ir(o,l,h,p,b){if(Array.isArray(l)){for(let C=0;C<l.length;C++)ir(o,l[C],h,p,b);return null}return h=lr(h),o&&o[Ve]?o.J(l,h,c(p)?!!p.capture:!1,b):or(o,l,h,!1,p,b)}function or(o,l,h,p,b,C){if(!l)throw Error("Invalid event type");const O=c(b)?!!b.capture:!!b;let Z=en(o);if(Z||(o[os]=Z=new Rn(o)),h=Z.add(l,h,p,O,C),h.proxy)return h;if(p=Oi(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)A||(b=O),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(cr(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Oi(){function o(h){return l.call(o.src,o.listener,h)}const l=Li;return o}function ar(o,l,h,p,b){if(Array.isArray(l))for(var C=0;C<l.length;C++)ar(o,l[C],h,p,b);else p=c(p)?!!p.capture:!!p,h=lr(h),o&&o[Ve]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],h=Se(l,h,p,b),h>-1&&(W(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=en(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Se(l,h,p,b)),(h=o>-1?l[o]:null)&&as(h))}function as(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ve])is(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(cr(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=en(l))?(is(h,o),h.h==0&&(h.src=null,l[os]=null)):W(o)}}}function cr(o){return o in Pn?Pn[o]:Pn[o]="on"+o}function Li(o,l){if(o.da)o=!0;else{l=new ce(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&as(o),o=h.call(p,l)}return o}function en(o){return o=o[os],o instanceof Rn?o:null}var cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function lr(o){return typeof o=="function"?o:(o[cs]||(o[cs]=function(l){return o.handleEvent(l)}),o[cs])}function Ie(){w.call(this),this.i=new Rn(this),this.M=this,this.G=null}g(Ie,w),Ie.prototype[Ve]=!0,Ie.prototype.removeEventListener=function(o,l,h,p){ar(this,o,l,h,p)};function Pe(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var b=l;l=new v(p,o),Zt(l,b)}b=!0;let C,O;if(h)for(O=h.length-1;O>=0;O--)C=l.g=h[O],b=kn(C,p,!0,l)&&b;if(C=l.g=o,b=kn(C,p,!0,l)&&b,b=kn(C,p,!1,l)&&b,h)for(O=0;O<h.length;O++)C=l.g=h[O],b=kn(C,p,!1,l)&&b}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)W(h[p]);delete o.g[l],o.h--}}this.G=null},Ie.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ie.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function kn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let C=0;C<l.length;++C){const O=l[C];if(O&&!O.da&&O.capture==h){const Z=O.listener,Te=O.ha||O.src;O.fa&&is(o.i,O),b=Z.call(Te,p)!==!1&&b}}return b&&!p.defaultPrevented}function ur(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function hr(o){o.g=ur(()=>{o.g=null,o.i&&(o.i=!1,hr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Mi extends w{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:hr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(o){w.call(this),this.h=o,this.g={}}g(St,w);var ls=[];function us(o){ie(o.g,function(l,h){this.g.hasOwnProperty(h)&&as(l)},o),o.g={}}St.prototype.N=function(){St.Z.N.call(this),us(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var R=a.JSON.stringify,B=a.JSON.parse,X=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function le(){}function se(){}var ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fe(){v.call(this,"d")}g(Fe,v);function hs(){v.call(this,"c")}g(hs,v);var tn={},qa=null;function dr(){return qa=qa||new Ie}tn.Ia="serverreachability";function za(o){v.call(this,tn.Ia,o)}g(za,v);function ds(o){const l=dr();Pe(l,new za(l))}tn.STAT_EVENT="statevent";function Ba(o,l){v.call(this,tn.STAT_EVENT,o),this.stat=l}g(Ba,v);function Ue(o){const l=dr();Pe(l,new Ba(l,o))}tn.Ja="timingevent";function $a(o,l){v.call(this,tn.Ja,o),this.size=l}g($a,v);function fs(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function wf(o,l,h,p,b,C){o.info(function(){if(o.g)if(C){var O="",Z=C.split("&");for(let ue=0;ue<Z.length;ue++){var Te=Z[ue].split("=");if(Te.length>1){const Ce=Te[0];Te=Te[1];const ot=Ce.split("_");O=ot.length>=2&&ot[1]=="type"?O+(Ce+"="+Te+"&"):O+(Ce+"=redacted&")}}}else O=null;else O=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+O})}function Af(o,l,h,p,b,C,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+C+" "+O})}function Nn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Sf(o,h)+(p?" "+p:"")})}function bf(o,l){o.info(function(){return"TIMEOUT: "+l})}ms.prototype.info=function(){};function Sf(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let O=1;O<p.length;O++)p[O]=""}}}}return R(C)}catch{return l}}var fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ga={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function ji(){}g(ji,le),ji.prototype.g=function(){return new XMLHttpRequest},Wa=new ji;function ps(o){return encodeURIComponent(String(o))}function Cf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Ct(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new St(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var Qa={},Fi={};function Ui(o,l,h){o.M=1,o.A=pr(it(l)),o.u=h,o.R=!0,Ka(o,null)}function Ka(o,l){o.F=Date.now(),mr(o),o.B=it(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),cc(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Ha,o.g=Sc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Mi(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(ls[0]=b.toString()),b=ls);for(let C=0;C<b.length;C++){const O=ir(h,b[C],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.J?rt(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ds(),wf(o.i,o.v,o.B,o.l,o.S,o.u)}Ct.prototype.ba=function(o){o=o.target;const l=this.O;l&&kt(o)==3?l.j():this.Y(o)},Ct.prototype.Y=function(o){try{if(o==this.g)e:{const Z=kt(this.g),Te=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||pc(this.g)))){this.K||Z!=4||Te==7||(Te==8||ue<=0?ds(3):ds(2)),qi(this);var l=this.g.ca();this.X=l;var h=Rf(this);if(this.o=l==200,Af(this.i,this.v,this.B,this.l,this.S,Z,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var C=p;break t}}C=null}if(o=C)Nn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zi(this,o);else{this.o=!1,this.m=3,Ue(12),nn(this),gs(this);break e}}if(this.R){o=!0;let Ce;for(;!this.K&&this.C<h.length;)if(Ce=Pf(this,h),Ce==Fi){Z==4&&(this.m=4,Ue(14),o=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==Qa){this.m=4,Ue(15),Nn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Nn(this.i,this.l,Ce,null),zi(this,Ce);if(Ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||h.length!=0||this.h.h||(this.m=1,Ue(16),o=!1),this.o=this.o&&o,!o)Nn(this.i,this.l,h,"[Invalid Chunked Response]"),nn(this),gs(this);else if(h.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Ji(O),O.P=!0,Ue(11))}}else Nn(this.i,this.l,h,null),zi(this,h);Z==4&&nn(this),this.o&&!this.K&&(Z==4?Tc(this.j,this):(this.o=!1,mr(this)))}else Bf(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),nn(this),gs(this)}}}catch{}finally{}};function Rf(o){if(!Ja(o))return o.g.la();const l=pc(o.g);if(l==="")return"";let h="";const p=l.length,b=kt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return nn(o),gs(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(l[C],{stream:!(b&&C==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Ja(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Pf(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Fi:(h=Number(l.substring(h,p)),isNaN(h)?Qa:(p+=1,p+h>l.length?Fi:(l=l.slice(p,p+h),o.C=p+h,l)))}Ct.prototype.cancel=function(){this.K=!0,nn(this)};function mr(o){o.T=Date.now()+o.H,Ya(o,o.H)}function Ya(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fs(d(o.aa,o),l)}function qi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ct.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(bf(this.i,this.B),this.M!=2&&(ds(),Ue(17)),nn(this),this.m=2,gs(this)):Ya(this,this.T-o)};function gs(o){o.j.I==0||o.K||Tc(o.j,o)}function nn(o){qi(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,us(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function zi(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Bi(h.h,o))){if(!o.L&&Bi(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Er(h),yr(h);else break e;Ki(h),Ue(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=fs(d(h.Va,h),6e3));ec(h.h)<=1&&h.ta&&(h.ta=void 0)}else rn(h,11)}else if((o.L||h.g==o)&&Er(h),!y(l))for(b=h.Ba.g.parse(l),l=0;l<b.length;l++){let ue=b[l];const Ce=ue[0];if(!(Ce<=h.K))if(h.K=Ce,ue=ue[1],h.I==2)if(ue[0]=="c"){h.M=ue[1],h.ba=ue[2];const ot=ue[3];ot!=null&&(h.ka=ot,h.j.info("VER="+h.ka));const on=ue[4];on!=null&&(h.za=on,h.j.info("SVER="+h.za));const Nt=ue[5];Nt!=null&&typeof Nt=="number"&&Nt>0&&(p=1.5*Nt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const xt=o.g;if(xt){const Tr=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var C=p.h;C.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&($i(C,C.h),C.h=null))}if(p.G){const Yi=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(p.wa=Yi,de(p.J,p.G,Yi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var O=o;if(p.na=bc(p,p.L?p.ba:null,p.W),O.L){tc(p.h,O);var Z=O,Te=p.O;Te&&(Z.H=Te),Z.D&&(qi(Z),mr(Z)),p.g=O}else Ec(p);h.i.length>0&&Ir(h)}else ue[0]!="stop"&&ue[0]!="close"||rn(h,7);else h.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?rn(h,7):Qi(h):ue[0]!="noop"&&h.l&&h.l.qa(ue),h.A=0)}}ds(4)}catch{}}var kf=class{constructor(o,l){this.g=o,this.map=l}};function Xa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Za(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ec(o){return o.h?1:o.g?o.g.size:0}function Bi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function $i(o,l){o.g?o.g.add(l):o.h=l}function tc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Xa.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return S(o.i)}var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nf(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let b,C=null;p>=0?(b=o[h].substring(0,p),C=o[h].substring(p+1)):b=o[h],l(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Rt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Rt?(this.l=o.l,_s(this,o.j),this.o=o.o,this.g=o.g,ys(this,o.u),this.h=o.h,Gi(this,lc(o.i)),this.m=o.m):o&&(l=String(o).match(sc))?(this.l=!1,_s(this,l[1]||"",!0),this.o=Is(l[2]||""),this.g=Is(l[3]||"",!0),ys(this,l[4]),this.h=Is(l[5]||"",!0),Gi(this,l[6]||"",!0),this.m=Is(l[7]||"")):(this.l=!1,this.i=new vs(null,this.l))}Rt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Es(l,rc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Es(l,rc,!0),"@"),o.push(ps(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Es(h,h.charAt(0)=="/"?Vf:Df,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Es(h,Lf)),o.join("")},Rt.prototype.resolve=function(o){const l=it(this);let h=!!o.j;h?_s(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)ys(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=l.h.lastIndexOf("/");b!=-1&&(p=l.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const C=[];for(let O=0;O<b.length;){const Z=b[O++];Z=="."?p&&O==b.length&&C.push(""):Z==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&O==b.length&&C.push("")):(C.push(Z),p=!0)}p=C.join("/")}else p=b}return h?l.h=p:h=o.i.toString()!=="",h?Gi(l,lc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function it(o){return new Rt(o)}function _s(o,l,h){o.j=h?Is(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ys(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Gi(o,l,h){l instanceof vs?(o.i=l,Mf(o.i,o.l)):(h||(l=Es(l,Of)),o.i=new vs(l,o.l))}function de(o,l,h){o.i.set(l,h)}function pr(o){return de(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Is(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,xf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rc=/[#\/\?@]/g,Df=/[#\?:]/g,Vf=/[#\?]/g,Of=/[#\?@]/g,Lf=/#/g;function vs(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function sn(o){o.g||(o.g=new Map,o.h=0,o.i&&Nf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=vs.prototype,n.add=function(o,l){sn(this),this.i=null,o=xn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function ic(o,l){sn(o),l=xn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function oc(o,l){return sn(o),l=xn(o,l),o.g.has(l)}n.forEach=function(o,l){sn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)};function ac(o,l){sn(o);let h=[];if(typeof l=="string")oc(o,l)&&(h=h.concat(o.g.get(xn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return sn(this),this.i=null,o=xn(this,o),oc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=ac(this,o),o.length>0?String(o[0]):l):l};function cc(o,l,h){ic(o,l),h.length>0&&(o.i=null,o.g.set(xn(o,l),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const b=ps(h);h=ac(this,h);for(let C=0;C<h.length;C++){let O=b;h[C]!==""&&(O+="="+ps(h[C])),o.push(O)}}return this.i=o.join("&")};function lc(o){const l=new vs;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function xn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Mf(o,l){l&&!o.j&&(sn(o),o.i=null,o.g.forEach(function(h,p){const b=p.toLowerCase();p!=b&&(ic(this,p),cc(this,b,h))},o)),o.j=l}function jf(o,l){const h=new ms;if(a.Image){const p=new Image;p.onload=m(Pt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Pt,h,"TestLoadImage: error",!1,l,p),p.onabort=m(Pt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Pt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Ff(o,l){const h=new ms,p=new AbortController,b=setTimeout(()=>{p.abort(),Pt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?Pt(h,"TestPingServer: ok",!0,l):Pt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Pt(h,"TestPingServer: error",!1,l)})}function Pt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Uf(){this.g=new X}function Wi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Wi,le),Wi.prototype.g=function(){return new gr(this.i,this.h)};function gr(o,l){Ie.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gr,Ie),n=gr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,ws(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;uc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function uc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Ts(this):ws(this),this.readyState==3&&uc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ts(this))},n.Na=function(o){this.g&&(this.response=o,Ts(this))},n.ga=function(){this.g&&Ts(this)};function Ts(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ws(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ws(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hc(o){let l="";return ie(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Hi(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=hc(h),typeof o=="string"?h!=null&&ps(h):de(o,l,h))}function _e(o){Ie.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(_e,Ie);var qf=/^https?$/i,zf=["POST","PUT"];n=_e.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){dc(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(zf,l,void 0)>=0)||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of h)this.g.setRequestHeader(C,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){dc(this,C)}};function dc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,fc(o),_r(o)}function fc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),_e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mc(this):this.Xa())},n.Xa=function(){mc(this)};function mc(o){if(o.h&&typeof i<"u"){if(o.v&&kt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),kt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=C===0){let O=String(o.D).match(sc)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),p=!qf.test(O?O.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var b=kt(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",fc(o)}}finally{_r(o)}}}}function _r(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Pe(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return kt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),B(l)}};function pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bf(o){const l={};o=(o.g&&kt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=Cf(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[b]||[];l[b]=C,C.push(h)}Be(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function gc(o){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,o),this.Za=As("retryDelaySeedMs",1e4,o),this.Ta=As("forwardChannelMaxRetries",2,o),this.va=As("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Xa(o&&o.concurrentRequestLimit),this.Ba=new Uf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=gc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Ue(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=bc(this,null,this.W),Ir(this)};function Qi(o){if(_c(o),o.I==3){var l=o.V++,h=it(o.J);if(de(h,"SID",o.M),de(h,"RID",l),de(h,"TYPE","terminate"),bs(o,h),l=new Ct(o,o.j,l),l.M=2,l.A=pr(it(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Sc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),mr(l)}Ac(o)}function yr(o){o.g&&(Ji(o),o.g.cancel(),o.g=null)}function _c(o){yr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Er(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ir(o){if(!Za(o.h)&&!o.m){o.m=!0;var l=o.Ea;M||_(),G||(M(),G=!0),T.add(l,o),o.D=0}}function $f(o,l){return ec(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fs(d(o.Ea,o,l),wc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Ct(this,this.j,o);let C=this.o;if(this.U&&(C?(C=rt(C),Zt(C,this.U)):C=this.U),this.u!==null||this.R||(b.J=C,C=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ic(this,b,l),h=it(this.J),de(h,"RID",o),de(h,"CVER",22),this.G&&de(h,"X-HTTP-Session-Id",this.G),bs(this,h),C&&(this.R?l="headers="+ps(hc(C))+"&"+l:this.u&&Hi(h,this.u,C)),$i(this.h,b),this.Ra&&de(h,"TYPE","init"),this.S?(de(h,"$req",l),de(h,"SID","null"),b.U=!0,Ui(b,h,null)):Ui(b,h,l),this.I=2}}else this.I==3&&(o?yc(this,o):this.i.length==0||Za(this.h)||yc(this))};function yc(o,l){var h;l?h=l.l:h=o.V++;const p=it(o.J);de(p,"SID",o.M),de(p,"RID",h),de(p,"AID",o.K),bs(o,p),o.u&&o.o&&Hi(p,o.u,o.o),h=new Ct(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Ic(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),$i(o.h,h),Ui(h,p,l)}function bs(o,l){o.H&&ie(o.H,function(h,p){de(l,p,h)}),o.l&&ie({},function(h,p){de(l,p,h)})}function Ic(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let Z=-1;for(;;){const Te=["count="+h];Z==-1?h>0?(Z=b[0].g,Te.push("ofs="+Z)):Z=0:Te.push("ofs="+Z);let ue=!0;for(let Ce=0;Ce<h;Ce++){var C=b[Ce].g;const ot=b[Ce].map;if(C-=Z,C<0)Z=Math.max(0,b[Ce].g-100),ue=!1;else try{C="req"+C+"_"||"";try{var O=ot instanceof Map?ot:Object.entries(ot);for(const[on,Nt]of O){let xt=Nt;c(Nt)&&(xt=R(Nt)),Te.push(C+on+"="+encodeURIComponent(xt))}}catch(on){throw Te.push(C+"type="+encodeURIComponent("_badmap")),on}}catch{p&&p(ot)}}if(ue){O=Te.join("&");break e}}O=void 0}return o=o.i.splice(0,h),l.G=o,O}function Ec(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;M||_(),G||(M(),G=!0),T.add(l,o),o.A=0}}function Ki(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fs(d(o.Da,o),wc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,vc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fs(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),yr(this),vc(this))};function Ji(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function vc(o){o.g=new Ct(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=it(o.na);de(l,"RID","rpc"),de(l,"SID",o.M),de(l,"AID",o.K),de(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&de(l,"TO",o.ia),de(l,"TYPE","xmlhttp"),bs(o,l),o.u&&o.o&&Hi(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=pr(it(l)),h.u=null,h.R=!0,Ka(h,o)}n.Va=function(){this.C!=null&&(this.C=null,yr(this),Ki(this),Ue(19))};function Er(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Tc(o,l){var h=null;if(o.g==l){Er(o),Ji(o),o.g=null;var p=2}else if(Bi(o.h,l))h=l.G,tc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var b=o.D;p=dr(),Pe(p,new $a(p,h)),Ir(o)}else Ec(o);else if(b=l.m,b==3||b==0&&l.X>0||!(p==1&&$f(o,l)||p==2&&Ki(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),b){case 1:rn(o,5);break;case 4:rn(o,10);break;case 3:rn(o,6);break;default:rn(o,2)}}}function wc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function rn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const b=!p;p=new Rt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_s(p,"https"),pr(p),b?jf(p.toString(),h):Ff(p.toString(),h)}else Ue(2);o.I=0,o.l&&o.l.pa(l),Ac(o),_c(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Ac(o){if(o.I=0,o.ja=[],o.l){const l=nc(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ja,l),P(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function bc(o,l,h){var p=h instanceof Rt?it(h):new Rt(h);if(p.g!="")l&&(p.g=l+"."+p.g),ys(p,p.u);else{var b=a.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const C=new Rt(null);p&&_s(C,p),l&&(C.g=l),b&&ys(C,b),h&&(C.h=h),p=C}return h=o.G,l=o.wa,h&&l&&de(p,h,l),de(p,"VER",o.ka),bs(o,p),p}function Sc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new _e(new Wi({ab:h})):new _e(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}n=Cc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vr(){}vr.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){Ie.call(this),this.g=new gc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Dn(this)}g($e,Ie),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Qi(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=R(o),o=h);l.i.push(new kf(l.Ya++,o)),l.I==3&&Ir(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,$e.Z.N.call(this)};function Rc(o){Fe.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(Rc,Fe);function Pc(){hs.call(this),this.status=1}g(Pc,hs);function Dn(o){this.g=o}g(Dn,Cc),Dn.prototype.ra=function(){Pe(this.g,"a")},Dn.prototype.qa=function(o){Pe(this.g,new Rc(o))},Dn.prototype.pa=function(o){Pe(this.g,new Pc)},Dn.prototype.oa=function(){Pe(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Uu=function(){return new vr},Fu=function(){return dr()},ju=tn,vo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,kr=fr,Ga.COMPLETE="complete",Mu=Ga,se.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,Ps=se,_e.prototype.listenOnce=_e.prototype.K,_e.prototype.getLastError=_e.prototype.Ha,_e.prototype.getLastErrorCode=_e.prototype.ya,_e.prototype.getStatus=_e.prototype.ca,_e.prototype.getResponseJson=_e.prototype.La,_e.prototype.getResponseText=_e.prototype.la,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Fa,Lu=_e}).apply(typeof wr<"u"?wr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Zn="12.9.0";function Lp(n){Zn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dn=new fi("@firebase/firestore");function Vn(){return dn.logLevel}function j(n,...e){if(dn.logLevel<=ee.DEBUG){const t=e.map(Wo);dn.debug(`Firestore (${Zn}): ${n}`,...t)}}function Tt(n,...e){if(dn.logLevel<=ee.ERROR){const t=e.map(Wo);dn.error(`Firestore (${Zn}): ${n}`,...t)}}function fn(n,...e){if(dn.logLevel<=ee.WARN){const t=e.map(Wo);dn.warn(`Firestore (${Zn}): ${n}`,...t)}}function Wo(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,qu(n,s,t)}function qu(n,e,t){let s=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Tt(s),new Error(s)}function oe(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||qu(e,r,s)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class jp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Fp{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Et,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string",31837,{l:s}),new zu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class Up{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class qp{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Up(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $c{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $c(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $c(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Bp(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function te(n,e){return n<e?-1:n>e?1:0}function To(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return so(r)===so(i)?te(r,i):so(r)?1:-1}return te(n.length,e.length)}const $p=55296,Gp=57343;function so(n){const e=n.charCodeAt(0);return e>=$p&&e<=Gp}function Gn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="__name__";class at{constructor(e,t,s){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=at.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return te(e.length,t.length)}static compareSegments(e,t){const s=at.isNumericId(e),r=at.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?at.extractNumericId(e).compare(at.extractNumericId(t)):To(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ut.fromString(e.substring(4,e.length-2))}}class fe extends at{construct(e,t,s){return new fe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const Wp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends at{construct(e,t,s){return new Ne(e,t,s)}static isValidIdentifier(e){return Wp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gc}static keyField(){return new Ne([Gc])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(fe.fromString(e))}static fromName(e){return new $(fe.fromString(e).popFirst(5))}static empty(){return new $(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n,e,t){if(!t)throw new q(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hp(n,e,t,s){if(e===!0&&s===!0)throw new q(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wc(n){if(!$.isDocumentKey(n))throw new q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hc(n){if($.isDocumentKey(n))throw new q(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $u(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function $t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function Js(n,e){if(!$u(n))throw new q(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new q(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=-62135596800,Kc=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Kc);return new me(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qc)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kc}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Js(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:ve("string",me._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new me(0,0))}static max(){return new J(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qs=-1;function Qp(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new me(t+1,0):new me(t,s));return new Gt(r,$.empty(),e)}function Kp(n){return new Gt(n.readTime,n.key,qs)}class Gt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Gt(J.min(),$.empty(),qs)}static max(){return new Gt(J.max(),$.empty(),qs)}}function Jp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Yp)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,s)=>{t(e)})}static reject(e){return new k((t,s)=>{s(e)})}static waitFor(e){return new k((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next(r=>r?k.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new k((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===i&&s(a)},m=>r(m))}})}static doWhile(e,t){return new k((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Zp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Ko=-1;function pi(n){return n==null}function Br(n){return n===0&&1/n==-1/0}function eg(n){return typeof n=="number"&&Number.isInteger(n)&&!Br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="";function tg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=ng(n.get(t),e);return Jc(e)}function ng(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Gu:t+="";break;default:t+=i}}return t}function Jc(n){return n+Gu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ar(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ar(this.root,e,this.comparator,!0)}}class Ar{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ke(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new be(Ne.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hu("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const sg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=sg.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="server_timestamp",Ku="__type__",Ju="__previous_value__",Yu="__local_write_time__";function Jo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ku])==null?void 0:s.stringValue)===Qu}function gi(n){const e=n.mapValue.fields[Ju];return Jo(e)?gi(e):e}function zs(n){const e=Wt(n.mapValue.fields[Yu].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,s,r,i,a,c,u,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const $r="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||$r}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===$r}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function ig(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="__type__",og="__max__",br={mapValue:{}},Zu="__vector__",Gr="value";function Qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jo(n)?4:cg(n)?9007199254740991:ag(n)?10:11:Q(28295,{value:n})}function mt(n,e){if(n===e)return!0;const t=Qt(n);if(t!==Qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Wt(r.timestampValue),c=Wt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ht(r.bytesValue).isEqual(Ht(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ye(r.doubleValue),c=ye(i.doubleValue);return a===c?Br(a)===Br(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Gn(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Yc(a)!==Yc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!mt(a[u],c[u])))return!1;return!0}(n,e);default:return Q(52216,{left:n})}}function $s(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function Wn(n,e){if(n===e)return 0;const t=Qt(n),s=Qt(e);if(t!==s)return te(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ye(i.integerValue||i.doubleValue),u=ye(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Zc(n.timestampValue,e.timestampValue);case 4:return Zc(zs(n),zs(e));case 5:return To(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Ht(i),u=Ht(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=te(c[d],u[d]);if(m!==0)return m}return te(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=te(ye(i.latitude),ye(a.latitude));return c!==0?c:te(ye(i.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return el(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,S,P,V;const c=i.fields||{},u=a.fields||{},d=(E=c[Gr])==null?void 0:E.arrayValue,m=(S=u[Gr])==null?void 0:S.arrayValue,g=te(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return g!==0?g:el(d,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===br.mapValue&&a===br.mapValue)return 0;if(i===br.mapValue)return 1;if(a===br.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const E=To(u[g],m[g]);if(E!==0)return E;const S=Wn(c[u[g]],d[m[g]]);if(S!==0)return S}return te(u.length,m.length)}(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function Zc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Wt(n),s=Wt(e),r=te(t.seconds,s.seconds);return r!==0?r:te(t.nanos,s.nanos)}function el(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Wn(t[r],s[r]);if(i)return i}return te(t.length,s.length)}function Hn(n){return wo(n)}function wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Wt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=wo(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${wo(t.fields[a])}`;return r+"}"}(n.mapValue):Q(61005,{value:n})}function Nr(n){switch(Qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(n);return e?16+Nr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Nr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return En(s.fields,(i,a)=>{r+=i.length+Nr(a)}),r}(n.mapValue);default:throw Q(13486,{value:n})}}function Ao(n){return!!n&&"integerValue"in n}function Yo(n){return!!n&&"arrayValue"in n}function tl(n){return!!n&&"nullValue"in n}function nl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xr(n){return!!n&&"mapValue"in n}function ag(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Xu])==null?void 0:s.stringValue)===Zu}function Vs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vs(n.arrayValue.values[t]);return e}return{...n}}function cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===og}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(t)}setAll(e){let t=Ne.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Vs(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];xr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){En(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new He(Vs(this.value))}}function eh(n){const e=[];return En(n.fields,(t,s)=>{const r=new Ne([t]);if(xr(s)){const i=eh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,J.min(),J.min(),J.min(),He.empty(),0)}static newFoundDocument(e,t,s,r){return new Me(e,1,t,J.min(),s,r,0)}static newNoDocument(e,t){return new Me(e,2,t,J.min(),J.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,J.min(),J.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wr{constructor(e,t){this.position=e,this.inclusive=t}}function sl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(a.referenceValue),t.key):s=Wn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function lg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class th{}class we extends th{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new hg(e,t,s):t==="array-contains"?new mg(e,s):t==="in"?new pg(e,s):t==="not-in"?new gg(e,s):t==="array-contains-any"?new _g(e,s):new we(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new dg(e,s):new fg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wn(t,this.value)):t!==null&&Qt(this.value)===Qt(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends th{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return nh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nh(n){return n.op==="and"}function sh(n){return ug(n)&&nh(n)}function ug(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function bo(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(sh(n))return n.filters.map(e=>bo(e)).join(",");{const e=n.filters.map(t=>bo(t)).join(",");return`${n.op}(${e})`}}function rh(n,e){return n instanceof we?function(s,r){return r instanceof we&&s.op===r.op&&s.field.isEqual(r.field)&&mt(s.value,r.value)}(n,e):n instanceof pt?function(s,r){return r instanceof pt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&rh(a,r.filters[c]),!0):!1}(n,e):void Q(19439)}function ih(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(ih).join(" ,")+"}"}(n):"Filter"}class hg extends we{constructor(e,t,s){super(e,t,s),this.key=$.fromName(s.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class dg extends we{constructor(e,t){super(e,"in",t),this.keys=oh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fg extends we{constructor(e,t){super(e,"not-in",t),this.keys=oh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>$.fromName(s.referenceValue))}class mg extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yo(t)&&$s(t.arrayValue,this.value)}}class pg extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$s(this.value.arrayValue,t)}}class gg extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$s(this.value.arrayValue,t)}}class _g extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$s(this.value.arrayValue,s))}}/**
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
 */class yg{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function il(n,e=null,t=[],s=[],r=null,i=null,a=null){return new yg(n,e,t,s,r,i,a)}function Xo(n){const e=Y(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>bo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Hn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Hn(s)).join(",")),e.Te=t}return e.Te}function Zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function So(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ig(n,e,t,s,r,i,a,c){return new _i(n,e,t,s,r,i,a,c)}function ea(n){return new _i(n)}function ol(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eg(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function vg(n){return n.collectionGroup!==null}function Os(n){const e=Y(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new be(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Hr(i,s))}),t.has(Ne.keyField().canonicalString())||e.Ie.push(new Hr(Ne.keyField(),s))}return e.Ie}function ct(n){const e=Y(n);return e.Ee||(e.Ee=Tg(e,Os(n))),e.Ee}function Tg(n,e){if(n.limitType==="F")return il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Hr(r.field,i)});const t=n.endAt?new Wr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Wr(n.startAt.position,n.startAt.inclusive):null;return il(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Co(n,e,t){return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return Zo(ct(n),ct(e))&&n.limitType===e.limitType}function ah(n){return`${Xo(ct(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>ih(r)).join(", ")}]`),pi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Hn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Hn(r)).join(",")),`Target(${s})`}(ct(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):$.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Os(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d<=0:d<0}(s.startAt,Os(s),r)||s.endAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d>=0:d>0}(s.endAt,Os(s),r))}(n,e)}function wg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ch(n){return(e,t)=>{let s=!1;for(const r of Os(n)){const i=Ag(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ag(n,e,t){const s=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Wn(u,d):Q(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new pe($.comparator);function wt(){return bg}const lh=new pe($.comparator);function ks(...n){let e=lh;for(const t of n)e=e.insert(t.key,t);return e}function uh(n){let e=lh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cn(){return Ls()}function hh(){return Ls()}function Ls(){return new vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sg=new pe($.comparator),Cg=new be($.comparator);function ne(...n){let e=Cg;for(const t of n)e=e.add(t);return e}const Rg=new be(te);function Pg(){return Rg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function dh(n){return{integerValue:""+n}}function kg(n,e){return eg(e)?dh(e):ta(n,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function Ng(n,e,t){return n instanceof Qr?function(r,i){const a={fields:{[Ku]:{stringValue:Qu},[Yu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jo(i)&&(i=gi(i)),i&&(a.fields[Ju]=i),{mapValue:a}}(t,e):n instanceof Gs?mh(n,e):n instanceof Ws?ph(n,e):function(r,i){const a=fh(r,i),c=al(a)+al(r.Ae);return Ao(a)&&Ao(r.Ae)?dh(c):ta(r.serializer,c)}(n,e)}function xg(n,e,t){return n instanceof Gs?mh(n,e):n instanceof Ws?ph(n,e):t}function fh(n,e){return n instanceof Kr?function(s){return Ao(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Qr extends Ei{}class Gs extends Ei{constructor(e){super(),this.elements=e}}function mh(n,e){const t=gh(e);for(const s of n.elements)t.some(r=>mt(r,s))||t.push(s);return{arrayValue:{values:t}}}class Ws extends Ei{constructor(e){super(),this.elements=e}}function ph(n,e){let t=gh(e);for(const s of n.elements)t=t.filter(r=>!mt(r,s));return{arrayValue:{values:t}}}class Kr extends Ei{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function al(n){return ye(n.integerValue||n.doubleValue)}function gh(n){return Yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Dg(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Gs&&r instanceof Gs||s instanceof Ws&&r instanceof Ws?Gn(s.elements,r.elements,mt):s instanceof Kr&&r instanceof Kr?mt(s.Ae,r.Ae):s instanceof Qr&&r instanceof Qr}(n.transform,e.transform)}class Vg{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vi{}function _h(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new na(n.key,lt.none()):new Ys(n.key,n.data,lt.none());{const t=n.data,s=He.empty();let r=new be(Ne.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Tn(n.key,s,new Xe(r.toArray()),lt.none())}}function Og(n,e,t){n instanceof Ys?function(r,i,a){const c=r.value.clone(),u=ll(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Tn?function(r,i,a){if(!Dr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ll(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(yh(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ms(n,e,t,s){return n instanceof Ys?function(i,a,c,u){if(!Dr(i.precondition,a))return c;const d=i.value.clone(),m=ul(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof Tn?function(i,a,c,u){if(!Dr(i.precondition,a))return c;const d=ul(i.fieldTransforms,u,a),m=a.data;return m.setAll(yh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(i,a,c){return Dr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Lg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=fh(s.transform,r||null);i!=null&&(t===null&&(t=He.empty()),t.set(s.field,i))}return t||null}function cl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Gn(s,r,(i,a)=>Dg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ys extends vi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tn extends vi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ll(n,e,t){const s=new Map;oe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,xg(a,c,t[r]))}return s}function ul(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,Ng(i,a,e))}return s}class na extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mg extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Og(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=hh();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=_h(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Gn(this.mutations,e.mutations,(t,s)=>cl(t,s))&&Gn(this.baseMutations,e.baseMutations,(t,s)=>cl(t,s))}}class sa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){oe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return Sg}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new sa(e,t,s,r)}}/**
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
 */class Fg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ug{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,re;function qg(n){switch(n){case N.OK:return Q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function Ih(n){if(n===void 0)return Tt("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ee.OK:return N.OK;case Ee.CANCELLED:return N.CANCELLED;case Ee.UNKNOWN:return N.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return N.INTERNAL;case Ee.UNAVAILABLE:return N.UNAVAILABLE;case Ee.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ee.NOT_FOUND:return N.NOT_FOUND;case Ee.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ee.ABORTED:return N.ABORTED;case Ee.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ee.DATA_LOSS:return N.DATA_LOSS;default:return Q(39323,{code:n})}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Bg=new Ut([4294967295,4294967295],0);function hl(n){const e=zg().encode(n),t=new Ou;return t.update(e),new Uint8Array(t.digest())}function dl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ut([t,s],0),new Ut([r,i],0)]}class ra{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(s<0)throw new Ns(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ut.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Ut.fromNumber(s)));return r.compare(Bg)===1&&(r=new Ut([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hl(e),[s,r]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ra(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=hl(e),[s,r]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ti(J.min(),r,new pe(te),wt(),ne())}}class Xs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xs(s,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Eh{constructor(e,t){this.targetId=e,this.Ce=t}}class vh{constructor(e,t,s=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class fl{constructor(){this.ve=0,this.Fe=ml(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),s=ne();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:Q(38017,{changeType:i})}}),new Xs(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=ml()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class $g{constructor(e){this.Ge=e,this.ze=new Map,this.je=wt(),this.He=Sr(),this.Je=Sr(),this.Ze=new pe(te)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(So(i))if(s===0){const a=new $(i.path);this.et(t,a,Me.newNoDocument(a,J.min()))}else oe(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Ht(s).toUint8Array()}catch(u){if(u instanceof Hu)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ra(a,r,i)}catch(u){return fn(u instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&So(c.target)){const u=new $(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Me.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let s=ne();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const r=new Ti(e,t,this.Ze,this.je,s);return this.je=wt(),this.He=Sr(),this.Je=Sr(),this.Ze=new pe(te),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new fl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new be(te),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new be(te),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Sr(){return new pe($.comparator)}function ml(){return new pe($.comparator)}const Gg={asc:"ASCENDING",desc:"DESCENDING"},Wg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hg={and:"AND",or:"OR"};class Qg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ro(n,e){return n.useProto3Json||pi(e)?e:{value:e}}function Jr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Th(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Kg(n,e){return Jr(n,e.toTimestamp())}function ut(n){return oe(!!n,49232),J.fromTimestamp(function(t){const s=Wt(t);return new me(s.seconds,s.nanos)}(n))}function ia(n,e){return Po(n,e).canonicalString()}function Po(n,e){const t=function(r){return new fe(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function wh(n){const e=fe.fromString(n);return oe(Rh(e),10190,{key:e.toString()}),e}function ko(n,e){return ia(n.databaseId,e.path)}function ro(n,e){const t=wh(e);if(t.get(1)!==n.databaseId.projectId)throw new q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(bh(t))}function Ah(n,e){return ia(n.databaseId,e)}function Jg(n){const e=wh(n);return e.length===4?fe.emptyPath():bh(e)}function No(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bh(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pl(n,e,t){return{name:ko(n,e),fields:t.value.mapValue.fields}}function Yg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(oe(m===void 0||typeof m=="string",58123),De.fromBase64String(m||"")):(oe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),De.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?N.UNKNOWN:Ih(d.code);return new q(m,d.message||"")}(a);t=new vh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ro(n,s.document.name),i=ut(s.document.updateTime),a=s.document.createTime?ut(s.document.createTime):J.min(),c=new He({mapValue:{fields:s.document.fields}}),u=Me.newFoundDocument(r,i,a,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new Vr(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ro(n,s.document),i=s.readTime?ut(s.readTime):J.min(),a=Me.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Vr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ro(n,s.document),i=s.removedTargetIds||[];t=new Vr([],i,r,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new Ug(r,i),c=s.targetId;t=new Eh(c,a)}}return t}function Xg(n,e){let t;if(e instanceof Ys)t={update:pl(n,e.key,e.value)};else if(e instanceof na)t={delete:ko(n,e.key)};else if(e instanceof Tn)t={update:pl(n,e.key,e.data),updateMask:a_(e.fieldMask)};else{if(!(e instanceof Mg))return Q(16599,{dt:e.type});t={verify:ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Kr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Q(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Kg(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(n,e.precondition)),t}function Zg(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?ut(r.updateTime):ut(i);return a.isEqual(J.min())&&(a=ut(i)),new Vg(a,r.transformResults||[])}(t,e))):[]}function e_(n,e){return{documents:[Ah(n,e.path)]}}function t_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ah(n,r);const i=function(d){if(d.length!==0)return Ch(pt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:Ln(E.field),direction:r_(E.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ro(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function n_(n){let e=Jg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){oe(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const E=Sh(g);return E instanceof pt&&sh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(P){return new Hr(Mn(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,pi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,S=g.values||[];return new Wr(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,S=g.values||[];return new Wr(S,E)}(t.endAt)),Ig(e,r,a,i,c,"F",u,d)}function s_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Mn(t.unaryFilter.field);return we.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Mn(t.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mn(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(n):n.fieldFilter!==void 0?function(t){return we.create(Mn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(s=>Sh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(t.compositeFilter.op))}(n):Q(30097,{filter:n})}function r_(n){return Gg[n]}function i_(n){return Wg[n]}function o_(n){return Hg[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Ne.fromServerFormat(n.fieldPath)}function Ch(n){return n instanceof we?function(t){if(t.op==="=="){if(nl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(tl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(tl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:i_(t.op),value:t.value}}}(n):n instanceof pt?function(t){const s=t.getFilters().map(r=>Ch(r));return s.length===1?s[0]:{compositeFilter:{op:o_(t.op),filters:s}}}(n):Q(54877,{filter:n})}function a_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ph(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,r,i=J.min(),a=J.min(),c=De.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.yt=e}}function l_(n){const e=n_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Co(e,e.limit,"L"):e}/**
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
 */class u_{constructor(){this.Sn=new h_}addToCollectionParentIndex(e,t){return this.Sn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Gt.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class h_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new be(fe.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new be(fe.comparator)).toArray()}}/**
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
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kh=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(kh,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l="LruGarbageCollector",d_=1048576;function yl([n,e],[t,s]){const r=te(n,t);return r===0?te(e,s):r}class f_{constructor(e){this.Pr=e,this.buffer=new be(yl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class m_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){j(_l,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?j(_l,"Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.Ar(3e5)})}}class p_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return k.resolve(mi.ce);const s=new f_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(gl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,c=Date.now(),this.removeTargets(e,s,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(d=Date.now(),Vn()<=ee.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g})))}}function g_(n,e){return new p_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.changes=new vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class y_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Ms(s.mutation,r,Xe.empty(),me.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ne()){const r=cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=ks();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=cn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ne()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=wt();const a=Ls(),c=function(){return Ls()}();return t.forEach((u,d)=>{const m=s.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof Tn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Ms(m.mutation,d,m.mutation.getFieldMask(),me.now())):a.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>c.set(d,new y_(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const s=Ls();let r=new pe((a,c)=>a-c),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||Xe.empty();m=c.applyToLocalView(d,m),s.set(u,m);const g=(r.get(c.batchId)||ne()).add(u);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=hh();m.forEach(E=>{if(!i.has(E)){const S=_h(t.get(E),s.get(E));S!==null&&g.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return Eg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(cn());let c=qs,u=i;return a.next(d=>k.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(E=>{u=u.insert(m,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ne())).next(m=>({batchId:c,changes:uh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(s=>{let r=ks();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ks();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const d=function(g,E){return new _i(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(m=>{m.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Me.newInvalidDocument(m)))});let c=ks();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Ms(m.mutation,d,Xe.empty(),me.now()),Ii(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:ut(r.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:l_(r.bundledQuery),readTime:ut(r.readTime)}}(t)),k.resolve()}}/**
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
 */class v_{constructor(){this.overlays=new pe($.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cn();return k.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=cn(),i=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new pe((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=i.get(d.largestBatchId);m===null&&(m=cn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=cn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=r)););return k.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Fg(t,s));let i=this.Lr.get(t);i===void 0&&(i=ne(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class T_{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.kr=new be(Re.Kr),this.qr=new be(Re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Re(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Re(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new $(new fe([])),s=new Re(t,e),r=new Re(t,e+1),i=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new $(new fe([])),s=new Re(t,e),r=new Re(t,e+1);let i=ne();return this.qr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Re(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Re{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return $.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new be(Re.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jg(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Jr=this.Jr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ko:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Re(t,0),r=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new be(te);return t.forEach(r=>{const i=new Re(r,0),a=new Re(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),k.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const a=new Re(new $(i),0);let c=new be(te);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Hr)),!0)},a),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){oe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return k.forEach(t.mutations,r=>{const i=new Re(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new Re(t,0),r=this.Jr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.ti=e,this.docs=function(){return new pe($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let s=wt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Me.newInvalidDocument(r))}),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=wt();const a=t.path,c=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Jp(Kp(m),s)<=0||(r.has(m.key)||Ii(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){Q(9500)}ni(e,t){return k.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new b_(this)}getSize(e){return k.resolve(this.size)}}class b_ extends __{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.persistence=e,this.ri=new vn(t=>Xo(t),Zo),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new oa,this.targetCount=0,this.oi=Qn._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),k.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t){this._i={},this.overlays={},this.ai=new mi(0),this.ui=!1,this.ui=!0,this.ci=new T_,this.referenceDelegate=e(this),this.li=new S_(this),this.indexManager=new u_,this.remoteDocumentCache=function(r){return new A_(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new c_(t),this.Pi=new E_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new v_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new w_(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){j("MemoryPersistence","Starting transaction:",e);const r=new C_(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ii(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class C_ extends Xp{constructor(e){super(),this.currentSequenceNumber=e}}class aa{constructor(e){this.persistence=e,this.Ri=new oa,this.Ai=null}static Vi(e){return new aa(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,s=>{const r=$.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,J.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yr{constructor(e,t){this.persistence=e,this.fi=new vn(s=>tg(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=g_(this,t)}static Vi(e,t){return new Yr(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?k.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,J.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nr(e.data.value)),t}wr(e,t,s){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=ne(),r=ne();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ca(e,t.fromCache,s,r)}}/**
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
 */class R_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class P_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _m()?8:Zp(je())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new R_;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Vn()<=ee.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Vn()<=ee.DEBUG&&j("QueryEngine","Query:",On(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Vn()<=ee.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):k.resolve())}gs(e,t){if(ol(t))return k.resolve(null);let s=ct(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Co(t,null,"F"),s=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=ne(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.bs(t,c);return this.Ss(t,d,a,u.readTime)?this.gs(e,Co(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,s,r){return ol(t)||r.isEqual(J.min())?k.resolve(null):this.fs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,s,r)?k.resolve(null):(Vn()<=ee.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),On(t)),this.Ds(e,a,t,Qp(r,qs)).next(c=>c))})}bs(e,t){let s=new be(ch(e));return t.forEach((r,i)=>{Ii(e,i)&&(s=s.add(i))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Vn()<=ee.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",On(t)),this.fs.getDocumentsMatchingQuery(e,t,Gt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="LocalStore",k_=3e8;class N_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new pe(te),this.Fs=new vn(i=>Xo(i),Zo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function x_(n,e,t,s){return new N_(n,e,t,s)}async function xh(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let u=ne();for(const d of r){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:c}))})})}function D_(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const g=d.batch,E=g.keys();let S=k.resolve();return E.forEach(P=>{S=S.next(()=>m.getEntry(u,P)).next(V=>{const D=d.docVersions.get(P);oe(D!==null,48541),V.version.compareTo(D)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=ne();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Dh(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function V_(n,e){const t=Y(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach((m,g)=>{const E=r.get(g);if(!E)return;c.push(t.li.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,m.addedDocuments,g)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(De.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,s)),r=r.insert(g,S),function(V,D,L){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=k_?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(E,S,m)&&c.push(t.li.updateTargetData(i,S))});let u=wt(),d=ne();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(O_(i,a,e.documentUpdates).next(m=>{u=m.Bs,d=m.Ls})),!s.isEqual(J.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(m)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=r,i))}function O_(n,e,t){let s=ne(),r=ne();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=wt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):j(la,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:r}})}function L_(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ko),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function M_(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new Mt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function xo(n,e,t){const s=Y(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!ts(a))throw a;j(la,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Il(n,e,t){const s=Y(n);let r=J.min(),i=ne();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const g=Y(u),E=g.Fs.get(m);return E!==void 0?k.resolve(g.vs.get(E)):g.li.getTargetData(d,m)}(s,a,ct(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:J.min(),t?i:ne())).next(c=>(j_(s,wg(e),c),{documents:c,ks:i})))}function j_(n,e,t){let s=n.Ms.get(e)||J.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class El{constructor(){this.activeTargetIds=Pg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F_{constructor(){this.vo=new El,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new El,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class U_{Mo(e){}shutdown(){}}/**
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
 */const vl="ConnectivityMonitor";class Tl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(vl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){j(vl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const io="RestConnection",q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class z_{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===$r?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Do(),c=this.Qo(e,t.toUriEncodedString());j(io,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(c),m=Yn(d);return this.zo(e,c,u,s,m).then(g=>(j(io,`Received RPC '${e}' ${a}: `,g),g),g=>{throw fn(io,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g})}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=q_[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection",Ss=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class jn extends z_{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!jn.c_){const e=Fu();Ss(e,ju.STAT_EVENT,t=>{t.stat===vo.PROXY?j(Oe,"STAT_EVENT: detected buffering proxy"):t.stat===vo.NOPROXY&&j(Oe,"STAT_EVENT: detected no buffering proxy")}),jn.c_=!0}}zo(e,t,s,r,i){const a=Do();return new Promise((c,u)=>{const d=new Lu;d.setWithCredentials(!0),d.listenOnce(Mu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case kr.NO_ERROR:const g=d.getResponseJson();j(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case kr.TIMEOUT:j(Oe,`RPC '${e}' ${a} timed out`),u(new q(N.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const E=d.getStatus();if(j(Oe,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const V=function(L){const F=L.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(F)>=0?F:N.UNKNOWN}(P.status);u(new q(V,P.message))}else u(new q(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new q(N.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{j(Oe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(r);j(Oe,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,s,15)})}T_(e,t,s){const r=Do(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=i.join("");j(Oe,`Creating RPC '${e}' stream ${r}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let g=!1,E=!1;const S=new B_({Ho:P=>{E?j(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(g||(j(Oe,`Opening RPC '${e}' stream ${r} transport.`),m.open(),g=!0),j(Oe,`RPC '${e}' stream ${r} sending:`,P),m.send(P))},Jo:()=>m.close()});return Ss(m,Ps.EventType.OPEN,()=>{E||(j(Oe,`RPC '${e}' stream ${r} transport opened.`),S.i_())}),Ss(m,Ps.EventType.CLOSE,()=>{E||(E=!0,j(Oe,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(m))}),Ss(m,Ps.EventType.ERROR,P=>{E||(E=!0,fn(Oe,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),S.o_(new q(N.UNAVAILABLE,"The operation could not be completed")))}),Ss(m,Ps.EventType.MESSAGE,P=>{var V;if(!E){const D=P.data[0];oe(!!D,16349);const L=D,F=(L==null?void 0:L.error)||((V=L[0])==null?void 0:V.error);if(F){j(Oe,`RPC '${e}' stream ${r} received error:`,F);const U=F.status;let z=function(T){const _=Ee[T];if(_!==void 0)return Ih(_)}(U),M=F.message;U==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=N.INTERNAL,M="Unknown error status: "+U+" with message "+F.message),E=!0,S.o_(new q(z,M)),m.close()}else j(Oe,`RPC '${e}' stream ${r} received:`,D),S.__(D)}}),jn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Uu()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){return new jn(n)}function oo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){return new Qg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.c_=!1;class Vh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="PersistentStream";class Oh{constructor(e,t,s,r,i,a,c,u){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Tt(t.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new q(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return j(wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(j(wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G_ extends Oh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Yg(this.serializer,e),s=function(i){if(!("targetChange"in i))return J.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?ut(a.readTime):J.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=No(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=So(u)?{documents:e_(i,u)}:{query:t_(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Th(i,a.resumeToken);const d=Ro(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(J.min())>0){c.readTime=Jr(i,a.snapshotVersion.toTimestamp());const d=Ro(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const s=s_(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=No(this.serializer),t.removeTarget=e,this.K_(t)}}class W_ extends Oh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Zg(e.writeResults,e.commitTime),s=ut(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=No(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Xg(this.serializer,s))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{}class Q_ extends H_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Po(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(N.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Po(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function K_(n,e,t,s){return new Q_(n,e,t,s)}class J_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tt(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="RemoteStore";class Y_{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{s.enqueueAndForget(async()=>{wn(this)&&(j(mn,"Restarting streams for network reachability change."),await async function(u){const d=Y(u);d.Ea.add(4),await Zs(d),d.Va.set("Unknown"),d.Ea.delete(4),await Ai(d)}(this))})}),this.Va=new J_(s,r)}}async function Ai(n){if(wn(n))for(const e of n.Ra)await e(!0)}async function Zs(n){for(const e of n.Ra)await e(!1)}function Lh(n,e){const t=Y(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fa(t)?da(t):ns(t).O_()&&ha(t,e))}function ua(n,e){const t=Y(n),s=ns(t);t.Ia.delete(e),s.O_()&&Mh(t,e),t.Ia.size===0&&(s.O_()?s.L_():wn(t)&&t.Va.set("Unknown"))}function ha(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).Z_(e)}function Mh(n,e){n.da.$e(e),ns(n).X_(e)}function da(n){n.da=new $g({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.Va.ua()}function fa(n){return wn(n)&&!ns(n).x_()&&n.Ia.size>0}function wn(n){return Y(n).Ea.size===0}function jh(n){n.da=void 0}async function X_(n){n.Va.set("Online")}async function Z_(n){n.Ia.forEach((e,t)=>{ha(n,e)})}async function ey(n,e){jh(n),fa(n)?(n.Va.ha(e),da(n)):n.Va.set("Unknown")}async function ty(n,e,t){if(n.Va.set("Online"),e instanceof vh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.da.removeTarget(c))}(n,e)}catch(s){j(mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xr(n,s)}else if(e instanceof Vr?n.da.Xe(e):e instanceof Eh?n.da.st(e):n.da.tt(e),!t.isEqual(J.min()))try{const s=await Dh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),Mh(i,u);const g=new Mt(m.target,u,d,m.sequenceNumber);ha(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){j(mn,"Failed to raise snapshot:",s),await Xr(n,s)}}async function Xr(n,e,t){if(!ts(e))throw e;n.Ea.add(1),await Zs(n),n.Va.set("Offline"),t||(t=()=>Dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(mn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ai(n)})}function Fh(n,e){return e().catch(t=>Xr(n,t,e))}async function bi(n){const e=Y(n),t=Kt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ko;for(;ny(e);)try{const r=await L_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,sy(e,r)}catch(r){await Xr(e,r)}Uh(e)&&qh(e)}function ny(n){return wn(n)&&n.Ta.length<10}function sy(n,e){n.Ta.push(e);const t=Kt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Uh(n){return wn(n)&&!Kt(n).x_()&&n.Ta.length>0}function qh(n){Kt(n).start()}async function ry(n){Kt(n).ra()}async function iy(n){const e=Kt(n);for(const t of n.Ta)e.ea(t.mutations)}async function oy(n,e,t){const s=n.Ta.shift(),r=sa.from(s,e,t);await Fh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await bi(n)}async function ay(n,e){e&&Kt(n).Y_&&await async function(s,r){if(function(a){return qg(a)&&a!==N.ABORTED}(r.code)){const i=s.Ta.shift();Kt(s).B_(),await Fh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await bi(s)}}(n,e),Uh(n)&&qh(n)}async function Al(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),j(mn,"RemoteStore received new credentials");const s=wn(t);t.Ea.add(3),await Zs(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ai(t)}async function cy(n,e){const t=Y(n);e?(t.Ea.delete(2),await Ai(t)):e||(t.Ea.add(2),await Zs(t),t.Va.set("Unknown"))}function ns(n){return n.ma||(n.ma=function(t,s,r){const i=Y(t);return i.sa(),new G_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:X_.bind(null,n),Yo:Z_.bind(null,n),t_:ey.bind(null,n),J_:ty.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),fa(n)?da(n):n.Va.set("Unknown")):(await n.ma.stop(),jh(n))})),n.ma}function Kt(n){return n.fa||(n.fa=function(t,s,r){const i=Y(t);return i.sa(),new W_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ry.bind(null,n),t_:ay.bind(null,n),ta:iy.bind(null,n),na:oy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await bi(n)):(await n.fa.stop(),n.Ta.length>0&&(j(mn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ma(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,e){if(Tt("AsyncQueue",`${e}: ${n}`),ts(n))return new q(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||$.comparator(t.key,s.key):(t,s)=>$.comparator(t.key,s.key),this.keyedMap=ks(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class bl{constructor(){this.ga=new pe($.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Kn{constructor(e,t,s,r,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Kn(e,t,Fn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class uy{constructor(){this.queries=Sl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Y(t),i=r.queries;r.queries=Sl(),i.forEach((a,c)=>{for(const u of c.ba)u.onError(s)})})(this,new q(N.ABORTED,"Firestore shutting down"))}}function Sl(){return new vn(n=>ah(n),yi)}async function zh(n,e){const t=Y(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new ly,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=pa(a,`Initialization of query '${On(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ga(t)}async function Bh(n,e){const t=Y(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function hy(n,e){const t=Y(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.ba)c.Fa(r)&&(s=!0);a.wa=r}}s&&ga(t)}function dy(n,e,t){const s=Y(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function ga(n){n.Ca.forEach(e=>{e.next()})}var Vo,Cl;(Cl=Vo||(Vo={})).Ma="default",Cl.Cache="cache";class $h{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Kn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.key=e}}class Wh{constructor(e){this.key=e}}class fy{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=ch(e),this.tu=new Fn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new bl,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((m,g)=>{const E=r.get(m),S=Ii(this.query,g)?g:null,P=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;E&&S?E.data.isEqual(S.data)?P!==V&&(s.track({type:3,doc:S}),D=!0):this.su(E,S)||(s.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(c=!0)):!E&&S?(s.track({type:0,doc:S}),D=!0):E&&!S&&(s.track({type:1,doc:E}),D=!0,(u||d)&&(c=!0)),D&&(S?(a=a.add(S),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,g)=>function(S,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:D})}};return V(S)-V(P)}(m.type,g.type)||this.eu(m.doc,g.doc)),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],u=this.Ya.size===0&&this.current&&!r?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new Kn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new bl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Wh(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Gh(s))}),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _a="SyncEngine";class my{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class py{constructor(e){this.key=e,this.hu=!1}}class gy{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new vn(c=>ah(c),yi),this.Iu=new Map,this.Eu=new Set,this.Ru=new pe($.comparator),this.Au=new Map,this.Vu=new oa,this.du={},this.mu=new Map,this.fu=Qn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _y(n,e,t=!0){const s=Xh(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Hh(s,e,t,!0),r}async function yy(n,e){const t=Xh(n);await Hh(t,e,!0,!1)}async function Hh(n,e,t,s){const r=await M_(n.localStore,ct(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await Iy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Lh(n.remoteStore,r),c}async function Iy(n,e,t,s,r){n.pu=(g,E,S)=>async function(V,D,L,F){let U=D.view.ru(L);U.Ss&&(U=await Il(V.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,U)));const z=F&&F.targetChanges.get(D.targetId),M=F&&F.targetMismatches.get(D.targetId)!=null,G=D.view.applyChanges(U,V.isPrimaryClient,z,M);return Pl(V,D.targetId,G.au),G.snapshot}(n,g,E,S);const i=await Il(n.localStore,e,!0),a=new fy(e,i.ks),c=a.ru(i.documents),u=Xs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,u);Pl(n,t,d.au);const m=new my(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Ey(n,e,t){const s=Y(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(a=>!yi(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await xo(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&ua(s.remoteStore,r.targetId),Oo(s,r.targetId)}).catch(es)):(Oo(s,r.targetId),await xo(s.localStore,r.targetId,!0))}async function vy(n,e){const t=Y(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ua(t.remoteStore,s.targetId))}async function Ty(n,e,t){const s=Py(n);try{const r=await function(a,c){const u=Y(a),d=me.now(),m=c.reduce((S,P)=>S.add(P.key),ne());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=wt(),V=ne();return u.xs.getEntries(S,m).next(D=>{P=D,P.forEach((L,F)=>{F.isValidDocument()||(V=V.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(D=>{g=D;const L=[];for(const F of c){const U=Lg(F,g.get(F.key).overlayedDocument);U!=null&&L.push(new Tn(F.key,U,eh(U.value.mapValue),lt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,L,c)}).next(D=>{E=D;const L=D.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(S,D.batchId,L)})}).then(()=>({batchId:E.batchId,changes:uh(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let d=a.du[a.currentUser.toKey()];d||(d=new pe(te)),d=d.insert(c,u),a.du[a.currentUser.toKey()]=d}(s,r.batchId,t),await er(s,r.changes),await bi(s.remoteStore)}catch(r){const i=pa(r,"Failed to persist write");t.reject(i)}}async function Qh(n,e){const t=Y(n);try{const s=await V_(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Au.get(i);a&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?oe(a.hu,14607):r.removedDocuments.size>0&&(oe(a.hu,42227),a.hu=!1))}),await er(t,s,e)}catch(s){await es(s)}}function Rl(n,e,t){const s=Y(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=Y(a);u.onlineState=c;let d=!1;u.queries.forEach((m,g)=>{for(const E of g.ba)E.va(c)&&(d=!0)}),d&&ga(u)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wy(n,e,t){const s=Y(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new pe($.comparator);a=a.insert(i,Me.newNoDocument(i,J.min()));const c=ne().add(i),u=new Ti(J.min(),new Map,new pe(te),a,c);await Qh(s,u),s.Ru=s.Ru.remove(i),s.Au.delete(e),ya(s)}else await xo(s.localStore,e,!1).then(()=>Oo(s,e,t)).catch(es)}async function Ay(n,e){const t=Y(n),s=e.batch.batchId;try{const r=await D_(t.localStore,e);Jh(t,s,null),Kh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await er(t,r)}catch(r){await es(r)}}async function by(n,e,t){const s=Y(n);try{const r=await function(a,c){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(oe(g!==null,37113),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(s.localStore,e);Jh(s,e,t),Kh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await er(s,r)}catch(r){await es(r)}}function Kh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Jh(n,e,t){const s=Y(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Oo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||Yh(n,s)})}function Yh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(ua(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),ya(n))}function Pl(n,e,t){for(const s of t)s instanceof Gh?(n.Vu.addReference(s.key,e),Sy(n,s)):s instanceof Wh?(j(_a,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Yh(n,s.key)):Q(19791,{wu:s})}function Sy(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(j(_a,"New document in limbo: "+t),n.Eu.add(s),ya(n))}function ya(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new $(fe.fromString(e)),s=n.fu.next();n.Au.set(s,new py(t)),n.Ru=n.Ru.insert(t,s),Lh(n.remoteStore,new Mt(ct(ea(t.path)),s,"TargetPurposeLimboResolution",mi.ce))}}async function er(n,e,t){const s=Y(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((c,u)=>{a.push(s.pu(u,e,t).then(d=>{var m;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){r.push(d);const g=ca.Es(u.targetId,d);i.push(g)}}))}),await Promise.all(a),s.Pu.J_(r),await async function(u,d){const m=Y(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,E=>k.forEach(E.Ts,S=>m.persistence.referenceDelegate.addReference(g,E.targetId,S)).next(()=>k.forEach(E.Is,S=>m.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))}catch(g){if(!ts(g))throw g;j(la,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const S=m.vs.get(E),P=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(P);m.vs=m.vs.insert(E,V)}}}(s.localStore,i))}async function Cy(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){j(_a,"User change. New user:",e.toKey());const s=await xh(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new q(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await er(t,s.Ns)}}function Ry(n,e){const t=Y(n),s=t.Au.get(e);if(s&&s.hu)return ne().add(s.key);{let r=ne();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Xh(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ry.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wy.bind(null,e),e.Pu.J_=hy.bind(null,e.eventManager),e.Pu.yu=dy.bind(null,e.eventManager),e}function Py(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ay.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=by.bind(null,e),e}class Zr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return x_(this.persistence,new P_,e.initialUser,this.serializer)}Cu(e){return new Nh(aa.Vi,this.serializer)}Du(e){return new F_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zr.provider={build:()=>new Zr};class ky extends Zr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){oe(this.persistence.referenceDelegate instanceof Yr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new m_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new Nh(s=>Yr.Vi(s,t),this.serializer)}}class Lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cy.bind(null,this.syncEngine),await cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uy}()}createDatastore(e){const t=wi(e.databaseInfo.databaseId),s=$_(e.databaseInfo);return K_(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Y_(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rl(this.syncEngine,t,0),function(){return Tl.v()?new Tl:new U_}())}createSyncEngine(e,t){return function(r,i,a,c,u,d,m){const g=new gy(r,i,a,c,u,d);return m&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=Y(r);j(mn,"RemoteStore shutting down."),i.Ea.add(5),await Zs(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Lo.provider={build:()=>new Lo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class Ny{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{j(Jt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(j(Jt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=pa(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ao(n,e){n.asyncQueue.verifyOperationInProgress(),j(Jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await xh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xy(n);j(Jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Al(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Al(e.remoteStore,r)),n._onlineComponents=e}async function xy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Jt,"Using user provided OfflineComponentProvider");try{await ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===N.FAILED_PRECONDITION||r.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await ao(n,new Zr)}}else j(Jt,"Using default OfflineComponentProvider"),await ao(n,new ky(void 0));return n._offlineComponents}async function ed(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Jt,"Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(j(Jt,"Using default OnlineComponentProvider"),await kl(n,new Lo))),n._onlineComponents}function Dy(n){return ed(n).then(e=>e.syncEngine)}async function td(n){const e=await ed(n),t=e.eventManager;return t.onListen=_y.bind(null,e.syncEngine),t.onUnlisten=Ey.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vy.bind(null,e.syncEngine),t}function Vy(n,e,t={}){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Zh({next:E=>{m.Nu(),a.enqueueAndForget(()=>Bh(i,g));const S=E.docs.has(c);!S&&E.fromCache?d.reject(new q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&u&&u.source==="server"?d.reject(new q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new $h(ea(c.path),m,{includeMetadataChanges:!0,Ka:!0});return zh(i,g)}(await td(n),n.asyncQueue,e,t,s)),s.promise}function Oy(n,e,t={}){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Zh({next:E=>{m.Nu(),a.enqueueAndForget(()=>Bh(i,g)),E.fromCache&&u.source==="server"?d.reject(new q(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new $h(c,m,{includeMetadataChanges:!0,Ka:!0});return zh(i,g)}(await td(n),n.asyncQueue,e,t,s)),s.promise}function Ly(n,e){const t=new Et;return n.asyncQueue.enqueueAndForget(async()=>Ty(await Dy(n),e,t)),t.promise}/**
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
 */function nd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="ComponentProvider",Nl=new Map;function jy(n,e,t,s,r){return new rg(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,nd(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firestore.googleapis.com",xl=!0;class Dl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sd,this.ssl=xl}else this.host=e.host,this.ssl=e.ssl??xl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d_)throw new q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nd(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Si{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Mp;switch(s.type){case"firstParty":return new qp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Nl.get(t);s&&(j(My,"Removing Datastore"),Nl.delete(t),s.terminate())}(this),Promise.resolve()}}function Fy(n,e,t,s={}){var d;n=$t(n,Si);const r=Yn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Su(`https://${c}`),Cu("Firestore",!0)),i.host!==sd&&i.host!==c&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:r,emulatorOptions:s};if(!Bt(u,a)&&(n._setSettings(u),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Le.MOCK_USER;else{m=lm(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Le(E)}n._authCredentials=new jp(new zu(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Ae{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Js(t,Ae._jsonSchema))return new Ae(e,s||null,new $(fe.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:ve("string",Ae._jsonSchemaVersion),referencePath:ve("string")};class qt extends Ci{constructor(e,t,s){super(e,t,ea(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new $(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function Uy(n,e,...t){if(n=xe(n),Bu("collection","path",e),n instanceof Si){const s=fe.fromString(e,...t);return Hc(s),new qt(n,null,s)}{if(!(n instanceof Ae||n instanceof qt))throw new q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(fe.fromString(e,...t));return Hc(s),new qt(n.firestore,null,s)}}function An(n,e,...t){if(n=xe(n),arguments.length===1&&(e=Ho.newId()),Bu("doc","path",e),n instanceof Si){const s=fe.fromString(e,...t);return Wc(s),new Ae(n,null,new $(s))}{if(!(n instanceof Ae||n instanceof qt))throw new q(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(fe.fromString(e,...t));return Wc(s),new Ae(n.firestore,n instanceof qt?n.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="AsyncQueue";class Ol{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vh(this,"async_queue_retry"),this._c=()=>{const s=oo();s&&j(Vl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=oo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=oo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Et;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ts(e))throw e;j(Vl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Tt("INTERNAL UNHANDLED ERROR: ",Ll(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=ma.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&Q(47125,{Pc:Ll(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ll(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class tr extends Si{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ol,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ol(e),this._firestoreClient=void 0,await e}}}function qy(n,e){const t=typeof n=="object"?n:Go(),s=typeof n=="string"?n:$r,r=In(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=am("firestore");i&&Fy(r,...i)}return r}function Ia(n){if(n._terminated)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zy(n),n._firestoreClient}function zy(n){var s,r,i,a;const e=n._freezeSettings(),t=jy(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ny(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(De.fromBase64String(e))}catch(t){throw new q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Js(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:ve("string",Qe._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(Js(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:ve("string",ht._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class et{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Js(e,et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new et(e.vectorValues);throw new q(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}et._jsonSchemaVersion="firestore/vectorValue/1.0",et._jsonSchema={type:ve("string",et._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^__.*__$/;class $y{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ys(e,this.data,t,this.fieldTransforms)}}function od(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:n})}}class Ea{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ei(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(od(this.dataSource)&&By.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Gy{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||wi(e)}createContext(e,t,s,r=!1){return new Ea({dataSource:e,methodName:t,targetDoc:s,path:Ne.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wy(n){const e=n._freezeSettings(),t=wi(n._databaseId);return new Gy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hy(n,e,t,s,r,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);ud("Data must be an object, but it was:",a,s);const c=cd(s,a);let u,d;if(i.merge)u=new Xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const E=va(e,g,t);if(!a.contains(E))throw new q(N.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Jy(m,E)||m.push(E)}u=new Xe(m),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new $y(new He(c),u,d)}function ad(n,e){if(ld(n=xe(n)))return ud("Unsupported field value:",e,n),cd(n,e);if(n instanceof id)return function(s,r){if(!od(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let u=ad(c,r.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=xe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kg(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=me.fromDate(s);return{timestampValue:Jr(r.serializer,i)}}if(s instanceof me){const i=new me(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jr(r.serializer,i)}}if(s instanceof ht)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qe)return{bytesValue:Th(r.serializer,s._byteString)};if(s instanceof Ae){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ia(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof et)return function(a,c){const u=a instanceof et?a.toArray():a;return{mapValue:{fields:{[Xu]:{stringValue:Zu},[Gr]:{arrayValue:{values:u.map(m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return ta(c.serializer,m)})}}}}}}(s,r);if(Ph(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Qo(s)}`)}(n,e)}function cd(n,e){const t={};return Wu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,(s,r)=>{const i=ad(r,e.childContextForField(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof ht||n instanceof Qe||n instanceof Ae||n instanceof id||n instanceof et||Ph(n))}function ud(n,e,t){if(!ld(t)||!$u(t)){const s=Qo(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function va(n,e,t){if((e=xe(e))instanceof rd)return e._internalPath;if(typeof e=="string")return Ky(n,e);throw ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const Qy=new RegExp("[~\\*/\\[\\]]");function Ky(n,e,t){if(e.search(Qy)>=0)throw ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rd(...e.split("."))._internalPath}catch{throw ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ei(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new q(N.INVALID_ARGUMENT,c+n+u)}function Jy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{convertValue(e,t="none"){switch(Qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return En(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Gr].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>ye(a.doubleValue));return new et(t)}convertGeoPoint(e){return new ht(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=Wt(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=fe.fromString(e);oe(Rh(s),9688,{name:e});const r=new Bs(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(t)||Tt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class hd extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}const Ml="@firebase/firestore",jl="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(va("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Xy extends dd{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function eI(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends dd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(va("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:ve("string",hn._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class Or extends hn{data(e={}){return super.data(e)}}class Un{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new xs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Or(this._firestore,this._userDataWriter,s.key,s,new xs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new xs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new xs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:tI(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */Un._jsonSchemaVersion="firestore/querySnapshot/1.0",Un._jsonSchema={type:ve("string",Un._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){n=$t(n,Ae);const e=$t(n.firestore,tr),t=Ia(e);return Vy(t,n._key).then(s=>rI(e,n,s))}function nI(n){n=$t(n,Ci);const e=$t(n.firestore,tr),t=Ia(e),s=new hd(e);return Zy(n._query),Oy(t,n._query).then(r=>new Un(e,s,n,r))}function Ri(n,e,t){n=$t(n,Ae);const s=$t(n.firestore,tr),r=eI(n.converter,e),i=Wy(s);return md(s,[Hy(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,lt.none())])}function sI(n){return md($t(n.firestore,tr),[new na(n._key,lt.none())])}function md(n,e){const t=Ia(n);return Ly(t,e)}function rI(n,e,t){const s=t.docs.get(e._key),r=new hd(n);return new hn(n,r,e._key,s,new xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Lp(Xn),ft(new nt("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new tr(new Fp(s.getProvider("auth-internal")),new zp(a,s.getProvider("app-check-internal")),ig(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ke(Ml,jl,e),Ke(Ml,jl,"esm2020")})();var iI="firebase",oI="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(iI,oI,"app");function pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=pd,gd=new yn("auth","Firebase",pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new fi("@firebase/auth");function cI(n,...e){ti.logLevel<=ee.WARN&&ti.warn(`Auth (${Xn}): ${n}`,...e)}function Lr(n,...e){ti.logLevel<=ee.ERROR&&ti.error(`Auth (${Xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw wa(n,...e)}function tt(n,...e){return wa(n,...e)}function Ta(n,e,t){const s={...aI(),[e]:t};return new yn("auth","Firebase",s).create(e,{appName:n.name})}function zt(n){return Ta(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lI(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Je(n,"argument-error"),Ta(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return gd.create(n,...e)}function H(n,e,...t){if(!n)throw wa(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lr(e),new Error(e)}function At(n,e){n||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function uI(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||qo()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=dm()||pm()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pI=new nr(3e4,6e4);function bn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yt(n,e,t,s,r={}){return yd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ks({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return mm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(d.credentials="include"),_d.fetch()(await Id(n,n.config.apiHost,t,c),d)})}async function yd(n,e,t){n._canInitEmulator=!1;const s={...fI,...e};try{const r=new _I(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Rr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Rr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Rr(n,"user-disabled",a);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ta(n,m,d);Je(n,m)}}catch(r){if(r instanceof st)throw r;Je(n,"network-request-failed",{message:String(r)})}}async function Pi(n,e,t,s,r={}){const i=await Yt(n,e,t,s,r);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Id(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Aa(n.config,r):`${n.config.apiScheme}://${r}`;return mI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function gI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),pI.get())})}}function Rr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=tt(n,e,s);return r.customData._tokenResponse=t,r}function Ul(n){return n!==void 0&&n.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function II(n,e){return Yt(n,"GET","/v2/recaptchaConfig",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,e){return Yt(n,"POST","/v1/accounts:delete",e)}async function ni(n,e){return Yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vI(n,e=!1){const t=xe(n),s=await t.getIdToken(e),r=ba(s);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:js(co(r.auth_time)),issuedAtTime:js(co(r.iat)),expirationTime:js(co(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function co(n){return Number(n)*1e3}function ba(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Tu(t);return r?JSON.parse(r):(Lr("Failed to decode base64 JWT payload"),null)}catch(r){return Lr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ql(n){const e=ba(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof st&&TI(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function TI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function si(n){var g;const e=n.auth,t=await n.getIdToken(),s=await Hs(n,ni(e,{idToken:t}));H(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?Ed(r.providerUserInfo):[],a=bI(n.providerData,i),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function AI(n){const e=xe(n);await si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bI(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ed(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(n,e){const t=await yd(n,{},async()=>{const s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Id(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(u.credentials="include"),_d.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CI(n,e){return Yt(n,"POST","/v2/accounts:revokeToken",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=ql(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await SI(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new qn;return s&&(H(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vI(this,e)}reload(){return AI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await si(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Hs(this,EI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:S,providerData:P,stsTokenManager:V}=t;H(g&&V,e,"internal-error");const D=qn.fromJSON(this.name,V);H(typeof g=="string",e,"internal-error"),Dt(s,e.name),Dt(r,e.name),H(typeof E=="boolean",e,"internal-error"),H(typeof S=="boolean",e,"internal-error"),Dt(i,e.name),Dt(a,e.name),Dt(c,e.name),Dt(u,e.name),Dt(d,e.name),Dt(m,e.name);const L=new Ze({uid:g,auth:e,email:r,emailVerified:E,displayName:s,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:d,lastLoginAt:m});return P&&Array.isArray(P)&&(L.providerData=P.map(F=>({...F}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,s=!1){const r=new qn;r.updateFromServerResponse(t);const i=new Ze({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await si(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];H(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ed(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new qn;c.updateFromIdToken(s);const u=new Ze({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function It(n){At(n instanceof Function,"Expected a class definition");let e=zl.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zl.set(n,e),e)}/**
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
 */class vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vd.type="NONE";const Bl=vd;/**
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
 */function $l(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cd(e))return"Blackberry";if(Rd(e))return"Webos";if(wd(e))return"Safari";if((e.includes("chrome/")||Ad(e))&&!e.includes("edge/"))return"Chrome";if(Sd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Td(n=je()){return/firefox\//i.test(n)}function wd(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ad(n=je()){return/crios\//i.test(n)}function bd(n=je()){return/iemobile/i.test(n)}function Sd(n=je()){return/android/i.test(n)}function Cd(n=je()){return/blackberry/i.test(n)}function Rd(n=je()){return/webos/i.test(n)}function Sa(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function RI(n=je()){var e;return Sa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function PI(){return gm()&&document.documentMode===10}function Pd(n=je()){return Sa(n)||Sd(n)||Rd(n)||Cd(n)||/windows phone/i.test(n)||bd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e=[]){let t;switch(n){case"Browser":t=$l(je());break;case"Worker":t=`${$l(je())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${s}`}/**
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
 */class kI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function NI(n,e={}){return Yt(n,"GET","/v2/passwordPolicy",bn(n,e))}/**
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
 */const xI=6;class DI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??xI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new kI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ni(this,{idToken:e}),s=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await si(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(zt(this));const t=e?xe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NI(this),t=new DI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await CI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&cI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Sn(n){return xe(n)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OI(n){ki=n}function Nd(n){return ki.loadJS(n)}function LI(){return ki.recaptchaEnterpriseScript}function MI(){return ki.gapiScript}function jI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class FI{constructor(){this.enterprise=new UI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class UI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qI="recaptcha-enterprise",xd="NO_RECAPTCHA";class zI{constructor(e){this.type=qI,this.auth=Sn(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{II(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new yI(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function r(i,a,c){const u=window.grecaptcha;Ul(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(xd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&Ul(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=LI();u.length!==0&&(u+=c),Nd(u).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Wl(n,e,t,s=!1,r=!1){const i=new zI(n);let a;if(r)a=xd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Wl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Wl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n,e){const t=In(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Bt(i,e??{}))return r;Je(r,"already-initialized")}return t.initialize({options:e})}function $I(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function GI(n,e,t){const s=Sn(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Dd(e),{host:a,port:c}=WI(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(Bt(d,s.config.emulator)&&Bt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,Yn(a)?(Su(`${i}//${a}${u}`),Cu("Auth",!0)):HI()}function Dd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function WI(n){const e=Dd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ql(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Ql(a)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function QI(n,e){return Yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(n,e){return Pi(n,"POST","/v1/accounts:signInWithPassword",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,e))}async function YI(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Ca{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,t,"signInWithPassword",KI);case"emailLink":return JI(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,s,"signUpPassword",QI);case"emailLink":return YI(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return Pi(n,"POST","/v1/accounts:signInWithIdp",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="http://localhost";class pn extends Ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new pn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:XI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eE(n){const e=Cs(Rs(n)).link,t=e?Cs(Rs(e)).deep_link_id:null,s=Cs(Rs(n)).deep_link_id;return(s?Cs(Rs(s)).link:null)||s||t||e||n}class Ra{constructor(e){const t=Cs(Rs(e)),s=t.apiKey??null,r=t.oobCode??null,i=ZI(t.mode??null);H(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=eE(e);try{return new Ra(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ra.parseLink(t);return H(s,"argument-error"),Qs._fromEmailAndCode(e,s.code,s.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sr extends Pa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ri extends st{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ri(e,t,s,r)}}function Vd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,s):i})}async function tE(n,e,t=!1){const s=await Hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",s)}/**
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
 */async function nE(n,e,t=!1){const{auth:s}=n;if(We(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Hs(n,Vd(s,r,e,n),t);H(i.idToken,s,"internal-error");const a=ba(i.idToken);H(a,s,"internal-error");const{sub:c}=a;return H(n.uid===c,s,"user-mismatch"),Jn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(n,e,t=!1){if(We(n.app))return Promise.reject(zt(n));const s="signIn",r=await Vd(n,s,e),i=await Jn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function sE(n,e){return Od(Sn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n){const e=Sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function iE(n,e,t){return We(n.app)?Promise.reject(zt(n)):sE(xe(n),ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rE(n),s})}function oE(n,e,t,s){return xe(n).onIdTokenChanged(e,t,s)}function aE(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function cE(n,e,t,s){return xe(n).onAuthStateChanged(e,t,s)}function lE(n){return xe(n).signOut()}const ii="__sak";/**
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
 */class Ld{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=1e3,hE=10;class Md extends Ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);PI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hE):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const dE=Md;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jd.type="SESSION";const Fd=jd;/**
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
 */function fE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ni(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await fE(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=ka("",20);r.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function pE(n){dt().location.href=n}/**
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
 */function Ud(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function gE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _E(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function yE(){return Ud()?self:null}/**
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
 */const qd="firebaseLocalStorageDb",IE=1,oi="firebaseLocalStorage",zd="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xi(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function EE(){const n=indexedDB.deleteDatabase(qd);return new rr(n).toPromise()}function Fo(){const n=indexedDB.open(qd,IE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oi,{keyPath:zd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oi)?e(s):(s.close(),await EE(),e(await Fo()))})})}async function Jl(n,e,t){const s=xi(n,!0).put({[zd]:e,value:t});return new rr(s).toPromise()}async function vE(n,e){const t=xi(n,!1).get(e),s=await new rr(t).toPromise();return s===void 0?null:s.value}function Yl(n,e){const t=xi(n,!0).delete(e);return new rr(t).toPromise()}const TE=800,wE=3;class Bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(yE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await gE(),!this.activeServiceWorker)return;this.sender=new mE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_E()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await Jl(e,ii,"1"),await Yl(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>vE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xi(r,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bd.type="LOCAL";const AE=Bd;new nr(3e4,6e4);/**
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
 */function $d(n,e){return e?It(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Na extends Ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bE(n){return Od(n.auth,new Na(n),n.bypassAuthState)}function SE(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),nE(t,new Na(n),n.bypassAuthState)}async function CE(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),tE(t,new Na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bE;case"linkViaPopup":case"linkViaRedirect":return CE;case"reauthViaPopup":case"reauthViaRedirect":return SE;default:Je(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new nr(2e3,1e4);async function PE(n,e,t){if(We(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const s=Sn(n);lI(n,e,Pa);const r=$d(s,t);return new ln(s,"signInViaPopup",e,r).executeNotNull()}class ln extends Gd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RE.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="pendingRedirect",jr=new Map;class NE extends Gd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const s=await xE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xE(n,e){const t=OE(e),s=VE(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function DE(n,e){jr.set(n._key(),e)}function VE(n){return It(n._redirectPersistence)}function OE(n){return Mr(kE,n.config.apiKey,n.name)}async function LE(n,e,t=!1){if(We(n.app))return Promise.reject(zt(n));const s=Sn(n),r=$d(s,e),a=await new NE(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=10*60*1e3;class jE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Wd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ME&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n,e={}){return Yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zE=/^https?/;async function BE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UE(n);for(const t of e)try{if($E(t))return}catch{}Je(n,"unauthorized-domain")}function $E(n){const e=Mo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!zE.test(t))return!1;if(qE.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const GE=new nr(3e4,6e4);function Zl(){const n=dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WE(n){return new Promise((e,t)=>{var r,i,a;function s(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(tt(n,"network-request-failed"))},timeout:GE.get()})}if((i=(r=dt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=dt().gapi)!=null&&a.load)s();else{const c=jI("iframefcb");return dt()[c]=()=>{gapi.load?s():t(tt(n,"network-request-failed"))},Nd(`${MI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Fr=null,e})}let Fr=null;function HE(n){return Fr=Fr||WE(n),Fr}/**
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
 */const QE=new nr(5e3,15e3),KE="__/auth/iframe",JE="emulator/auth/iframe",YE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZE(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Aa(e,JE):`https://${n.config.authDomain}/${KE}`,s={apiKey:e.apiKey,appName:n.name,v:Xn},r=XE.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ks(s).slice(1)}`}async function ev(n){const e=await HE(n),t=dt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:ZE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),c=dt().setTimeout(()=>{i(a)},QE.get());function u(){dt().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const tv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nv=500,sv=600,rv="_blank",iv="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ov(n,e,t,s=nv,r=sv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...tv,width:s.toString(),height:r.toString(),top:i,left:a},d=je().toLowerCase();t&&(c=Ad(d)?rv:t),Td(d)&&(e=e||iv,u.scrollbars="yes");const m=Object.entries(u).reduce((E,[S,P])=>`${E}${S}=${P},`,"");if(RI(d)&&c!=="_self")return av(e||"",c),new eu(null);const g=window.open(e||"",c,m);H(g,n,"popup-blocked");try{g.focus()}catch{}return new eu(g)}function av(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cv="__/auth/handler",lv="emulator/auth/handler",uv=encodeURIComponent("fac");async function tu(n,e,t,s,r,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xn,eventId:r};if(e instanceof Pa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",vm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof sr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${uv}=${encodeURIComponent(u)}`:"";return`${hv(n)}?${Ks(c).slice(1)}${d}`}function hv({config:n}){return n.emulator?Aa(n,lv):`https://${n.authDomain}/${cv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="webStorageSupport";class dv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fd,this._completeRedirectFn=LE,this._overrideRedirectResult=DE}async _openPopup(e,t,s,r){var a;At((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await tu(e,t,s,Mo(),r);return ov(e,i,ka())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await tu(e,t,s,Mo(),r);return pE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(At(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ev(e),s=new jE(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lo,{type:lo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[lo];i!==void 0&&t(!!i),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pd()||wd()||Sa()}}const fv=dv;var nu="@firebase/auth",su="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gv(n){ft(new nt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kd(n)},d=new VI(s,r,i,u);return $I(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ft(new nt("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(s=>new mv(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(nu,su,pv(n)),Ke(nu,su,"esm2020")}/**
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
 */const _v=5*60,yv=bu("authIdTokenMaxAge")||_v;let ru=null;const Iv=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>yv)return;const r=t==null?void 0:t.token;ru!==r&&(ru=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ev(n=Go()){const e=In(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BI(n,{popupRedirectResolver:fv,persistence:[AE,dE,Fd]}),s=bu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Iv(i.toString());aE(t,a,()=>a(t.currentUser)),oE(t,c=>a(c))}}const r=wu("auth");return r&&GI(t,`http://${r}`),t}function vv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}OI({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",vv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gv("Browser");const Hd="@firebase/installations",xa="0.6.19";/**
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
 */const Qd=1e4,Kd=`w:${xa}`,Jd="FIS_v2",Tv="https://firebaseinstallations.googleapis.com/v1",wv=60*60*1e3,Av="installations",bv="Installations";/**
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
 */const Sv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gn=new yn(Av,bv,Sv);function Yd(n){return n instanceof st&&n.code.includes("request-failed")}/**
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
 */function Xd({projectId:n}){return`${Tv}/projects/${n}/installations`}function Zd(n){return{token:n.token,requestStatus:2,expiresIn:Rv(n.expiresIn),creationTime:Date.now()}}async function ef(n,e){const s=(await e.json()).error;return gn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function tf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Cv(n,{refreshToken:e}){const t=tf(n);return t.append("Authorization",Pv(e)),t}async function nf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Rv(n){return Number(n.replace("s","000"))}function Pv(n){return`${Jd} ${n}`}/**
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
 */async function kv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Xd(n),r=tf(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Jd,appId:n.appId,sdkVersion:Kd},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await nf(()=>fetch(s,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Zd(d.authToken)}}else throw await ef("Create Installation",u)}/**
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
 */function sf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Nv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xv=/^[cdef][\w-]{21}$/,Uo="";function Dv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Vv(n);return xv.test(t)?t:Uo}catch{return Uo}}function Vv(n){return Nv(n).substr(0,22)}/**
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
 */const rf=new Map;function of(n,e){const t=Di(n);af(t,e),Ov(t,e)}function af(n,e){const t=rf.get(n);if(t)for(const s of t)s(e)}function Ov(n,e){const t=Lv();t&&t.postMessage({key:n,fid:e}),Mv()}let un=null;function Lv(){return!un&&"BroadcastChannel"in self&&(un=new BroadcastChannel("[Firebase] FID Change"),un.onmessage=n=>{af(n.data.key,n.data.fid)}),un}function Mv(){rf.size===0&&un&&(un.close(),un=null)}/**
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
 */const jv="firebase-installations-database",Fv=1,_n="firebase-installations-store";let uo=null;function Da(){return uo||(uo=Nu(jv,Fv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_n)}}})),uo}async function ai(n,e){const t=Di(n),r=(await Da()).transaction(_n,"readwrite"),i=r.objectStore(_n),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&of(n,e.fid),e}async function cf(n){const e=Di(n),s=(await Da()).transaction(_n,"readwrite");await s.objectStore(_n).delete(e),await s.done}async function Vi(n,e){const t=Di(n),r=(await Da()).transaction(_n,"readwrite"),i=r.objectStore(_n),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&of(n,c.fid),c}/**
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
 */async function Va(n){let e;const t=await Vi(n.appConfig,s=>{const r=Uv(s),i=qv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Uo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Uv(n){const e=n||{fid:Dv(),registrationStatus:0};return lf(e)}function qv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(gn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=zv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Bv(n)}:{installationEntry:e}}async function zv(n,e){try{const t=await kv(n,e);return ai(n.appConfig,t)}catch(t){throw Yd(t)&&t.customData.serverCode===409?await cf(n.appConfig):await ai(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Bv(n){let e=await iu(n.appConfig);for(;e.registrationStatus===1;)await sf(100),e=await iu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Va(n);return s||t}return e}function iu(n){return Vi(n,e=>{if(!e)throw gn.create("installation-not-found");return lf(e)})}function lf(n){return $v(n)?{fid:n.fid,registrationStatus:0}:n}function $v(n){return n.registrationStatus===1&&n.registrationTime+Qd<Date.now()}/**
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
 */async function Gv({appConfig:n,heartbeatServiceProvider:e},t){const s=Wv(n,t),r=Cv(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Kd,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await nf(()=>fetch(s,c));if(u.ok){const d=await u.json();return Zd(d)}else throw await ef("Generate Auth Token",u)}function Wv(n,{fid:e}){return`${Xd(n)}/${e}/authTokens:generate`}/**
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
 */async function Oa(n,e=!1){let t;const s=await Vi(n.appConfig,i=>{if(!uf(i))throw gn.create("not-registered");const a=i.authToken;if(!e&&Kv(a))return i;if(a.requestStatus===1)return t=Hv(n,e),i;{if(!navigator.onLine)throw gn.create("app-offline");const c=Yv(i);return t=Qv(n,c),c}});return t?await t:s.authToken}async function Hv(n,e){let t=await ou(n.appConfig);for(;t.authToken.requestStatus===1;)await sf(100),t=await ou(n.appConfig);const s=t.authToken;return s.requestStatus===0?Oa(n,e):s}function ou(n){return Vi(n,e=>{if(!uf(e))throw gn.create("not-registered");const t=e.authToken;return Xv(t)?{...e,authToken:{requestStatus:0}}:e})}async function Qv(n,e){try{const t=await Gv(n,e),s={...e,authToken:t};return await ai(n.appConfig,s),t}catch(t){if(Yd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ai(n.appConfig,s)}throw t}}function uf(n){return n!==void 0&&n.registrationStatus===2}function Kv(n){return n.requestStatus===2&&!Jv(n)}function Jv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+wv}function Yv(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Xv(n){return n.requestStatus===1&&n.requestTime+Qd<Date.now()}/**
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
 */async function Zv(n){const e=n,{installationEntry:t,registrationPromise:s}=await Va(e);return s?s.catch(console.error):Oa(e).catch(console.error),t.fid}/**
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
 */async function eT(n,e=!1){const t=n;return await tT(t),(await Oa(t,e)).token}async function tT(n){const{registrationPromise:e}=await Va(n);e&&await e}/**
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
 */function nT(n){if(!n||!n.options)throw ho("App Configuration");if(!n.name)throw ho("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ho(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ho(n){return gn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="installations",sT="installations-internal",rT=n=>{const e=n.getProvider("app").getImmediate(),t=nT(e),s=In(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},iT=n=>{const e=n.getProvider("app").getImmediate(),t=In(e,hf).getImmediate();return{getId:()=>Zv(t),getToken:r=>eT(t,r)}};function oT(){ft(new nt(hf,rT,"PUBLIC")),ft(new nt(sT,iT,"PRIVATE"))}oT();Ke(Hd,xa);Ke(Hd,xa,"esm2020");/**
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
 */const ci="analytics",aT="firebase_id",cT="origin",lT=60*1e3,uT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",La="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new fi("@firebase/analytics");/**
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
 */const hT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new yn("analytics","Analytics",hT);/**
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
 */function dT(n){if(!n.startsWith(La)){const e=Ge.create("invalid-gtag-resource",{gtagURL:n});return qe.warn(e.message),""}return n}function df(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function fT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function mT(n,e){const t=fT("firebase-js-sdk-policy",{createScriptURL:dT}),s=document.createElement("script"),r=`${La}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function pT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function gT(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const u=(await df(t)).find(d=>d.measurementId===r);u&&await e[u.appId]}}catch(c){qe.error(c)}n("config",r,i)}async function _T(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await df(t);for(const u of a){const d=c.find(g=>g.measurementId===u),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){qe.error(i)}}function yT(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,u]=a;await _T(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await gT(n,e,t,s,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){qe.error(c)}}return r}function IT(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=yT(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function ET(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(La)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=30,TT=1e3;class wT{constructor(e={},t=TT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ff=new wT;function AT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function bT(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:AT(t)},r=uT.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function ST(n,e=ff,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Ge.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ge.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new PT;return setTimeout(async()=>{c.abort()},lT),mf({appId:s,apiKey:r,measurementId:i},a,c,e)}async function mf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=ff){var c;const{appId:i,measurementId:a}=n;try{await CT(s,e)}catch(u){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await bT(n);return r.deleteThrottleMetadata(i),u}catch(u){const d=u;if(!RT(d)){if(r.deleteThrottleMetadata(i),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw u}const m=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?Vc(t,r.intervalMillis,vT):Vc(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,g),qe.debug(`Calling attemptFetch again in ${m} millis`),mf(n,g,s,r)}}function CT(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RT(n){if(!(n instanceof st)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class PT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kT(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function NT(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(){if(zo())try{await Bo()}catch(n){return qe.warn(Ge.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return qe.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function DT(n,e,t,s,r,i,a){const c=ST(n);c.then(E=>{t[E.measurementId]=E.appId,n.options.measurementId&&E.measurementId!==n.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>qe.error(E)),e.push(c);const u=xT().then(E=>{if(E)return s.getId()}),[d,m]=await Promise.all([c,u]);ET(i)||mT(i,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[cT]="firebase",g.update=!0,m!=null&&(g[aT]=m),r("config",d.measurementId,g),d.measurementId}/**
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
 */class VT{constructor(e){this.app=e}_delete(){return delete $n[this.app.options.appId],Promise.resolve()}}let $n={},au=[];const cu={};let fo="dataLayer",OT="gtag",lu,Ma,uu=!1;function LT(){const n=[];if(qo()&&n.push("This is a browser extension environment."),Ru()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Ge.create("invalid-analytics-context",{errorInfo:e});qe.warn(t.message)}}function MT(n,e,t){LT();const s=n.options.appId;if(!s)throw Ge.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if($n[s]!=null)throw Ge.create("already-exists",{id:s});if(!uu){pT(fo);const{wrappedGtag:i,gtagCore:a}=IT($n,au,cu,fo,OT);Ma=i,lu=a,uu=!0}return $n[s]=DT(n,au,cu,e,lu,fo,t),new VT(n)}function jT(n=Go()){n=xe(n);const e=In(n,ci);return e.isInitialized()?e.getImmediate():FT(n)}function FT(n,e={}){const t=In(n,ci);if(t.isInitialized()){const r=t.getImmediate();if(Bt(e,t.getOptions()))return r;throw Ge.create("already-initialized")}return t.initialize({options:e})}async function UT(){if(qo()||!Ru()||!zo())return!1;try{return await Bo()}catch{return!1}}function qT(n,e,t){n=xe(n),NT(Ma,$n[n.app.options.appId],e,t).catch(s=>qe.error(s))}function zT(n,e,t,s){n=xe(n),kT(Ma,$n[n.app.options.appId],e,t,s).catch(r=>qe.error(r))}const hu="@firebase/analytics",du="0.10.19";function BT(){ft(new nt(ci,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return MT(s,r,t)},"PUBLIC")),ft(new nt("analytics-internal",n,"PRIVATE")),Ke(hu,du),Ke(hu,du,"esm2020");function n(e){try{const t=e.getProvider(ci).getImmediate();return{logEvent:(s,r,i)=>zT(t,s,r,i),setUserProperties:(s,r)=>qT(t,s,r)}}catch(t){throw Ge.create("interop-component-reg-failed",{reason:t})}}}BT();const pf={apiKey:"AIzaSyB95-9OWWYNxMJNud5-gs4jhJ8Pv1fTx7I",authDomain:"itistudyu.firebaseapp.com",projectId:"itistudyu",storageBucket:"itistudyu.firebasestorage.app",messagingSenderId:"1095742655103",appId:"1:1095742655103:web:00246a53f90267e99f4d4a",measurementId:"G-RQDEYL608Z"},$T=!!pf.apiKey,ja=xu(pf),Xt=qy(ja),gt=$T?Ev(ja):null;UT().then(n=>{n&&jT(ja)});const GT=60*60*1e3;function Fa(n){try{const e=localStorage.getItem(`firestore_${n}`);if(!e)return null;const{data:t,timestamp:s}=JSON.parse(e);return Date.now()-s>GT?null:t}catch{return null}}function rs(n,e){try{localStorage.setItem(`firestore_${n}`,JSON.stringify({data:e,timestamp:Date.now()}))}catch{}}async function WT(){const n=Fa("books_old-testament");if(n)return n;try{const e=await fd(An(Xt,"books","old-testament"));if(e.exists()){const t=e.data().books;return rs("books_old-testament",t),t}}catch(e){console.warn("Firestore getBooks failed, using fallback:",e.message)}return null}async function HT(){const n=Fa("all_quizzes");if(n)return n;try{const e=await nI(Uy(Xt,"quizzes")),t=[];if(e.forEach(s=>t.push({id:s.id,...s.data()})),t.length>0)return rs("all_quizzes",t),t}catch(e){console.warn("Firestore getAllQuizzes failed, using fallback:",e.message)}return null}async function fu(n){const e=Fa(`translations_${n}`);if(e)return e;try{const t=await fd(An(Xt,"translations",n));if(t.exists()){const s=t.data();return rs(`translations_${n}`,s),s}}catch(t){console.warn(`Firestore getTranslations(${n}) failed, using fallback:`,t.message)}return null}async function gf(n){await Ri(An(Xt,"books","old-testament"),{books:n}),rs("books_old-testament",n)}async function _f(n,e){await Ri(An(Xt,"quizzes",n),e),rs(`quiz_${n}`,e),localStorage.removeItem("firestore_all_quizzes")}async function QT(n,e){await Ri(An(Xt,"quizzes",n),e),localStorage.removeItem("firestore_all_quizzes")}async function KT(n){await sI(An(Xt,"quizzes",n)),localStorage.removeItem(`firestore_quiz_${n}`),localStorage.removeItem("firestore_all_quizzes")}async function li(n,e){await Ri(An(Xt,"translations",n),e),rs(`translations_${n}`,e)}const yf=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],ui={en:[{id:1,question:"What was the sign of God's covenant with Noah?",options:["A rainbow","A dove","An olive branch","A burning bush"],correctIndex:0,reference:"Genesis 9:12-17"},{id:2,question:"What did God promise Noah after the flood?",options:["That he would live forever","That he would never destroy the earth with water again","That his descendants would rule all nations","That animals would no longer exist"],correctIndex:1,reference:"Genesis 9:11"},{id:3,question:"How old was Abraham when God made the covenant of circumcision with him?",options:["75 years old","86 years old","99 years old","100 years old"],correctIndex:2,reference:"Genesis 17:1"},{id:4,question:"What was Abraham's name before God changed it?",options:["Abram","Abel","Aram","Abimelech"],correctIndex:0,reference:"Genesis 17:5"},{id:5,question:"What land did God promise to Abraham and his descendants?",options:["Egypt","Babylon","Canaan","Mesopotamia"],correctIndex:2,reference:"Genesis 17:8"},{id:6,question:"What was the physical sign of the Abrahamic covenant?",options:["A sacrifice","Circumcision","Baptism","A rainbow"],correctIndex:1,reference:"Genesis 17:10-11"},{id:7,question:"In Genesis 15, what did God use to confirm His covenant with Abraham?",options:["A written contract","A handshake","Animals cut in half with a smoking firepot and flaming torch passing between them","Seven stones"],correctIndex:2,reference:"Genesis 15:9-17"},{id:8,question:"What did God promise Abraham about his descendants?",options:["They would be few but powerful","They would be as numerous as the stars in the sky","They would all be kings","They would live in Egypt forever"],correctIndex:1,reference:"Genesis 15:5"},{id:9,question:"Where did God reaffirm His covenant with Jacob?",options:["In Egypt","In Canaan","At Bethel","At Mount Sinai"],correctIndex:2,reference:"Genesis 35:9-12"},{id:10,question:"What did Jacob see in his dream at Bethel?",options:["A burning bush","A ladder reaching to heaven with angels ascending and descending","A rainbow in the clouds","Three visitors"],correctIndex:1,reference:"Genesis 28:12"},{id:11,question:"What was Sarah's name before God changed it?",options:["Sara","Sarai","Salome","Sapphira"],correctIndex:1,reference:"Genesis 17:15"},{id:12,question:"What blessing did God promise through Abraham to all nations?",options:["Wealth and prosperity","Military victory","All peoples on earth would be blessed through him","Eternal youth"],correctIndex:2,reference:"Genesis 12:3"},{id:13,question:"At what age was a male to be circumcised according to the covenant?",options:["At birth","Eight days old","One year old","Thirteen years old"],correctIndex:1,reference:"Genesis 17:12"},{id:14,question:"Who was the first person to be circumcised as part of the covenant?",options:["Isaac","Ishmael","Abraham","Jacob"],correctIndex:2,reference:"Genesis 17:24"},{id:15,question:"What did God command Adam in the Garden of Eden regarding creation?",options:["To destroy it","To have dominion over it and subdue it","To ignore it","To worship it"],correctIndex:1,reference:"Genesis 1:28"}],es:[{id:1,question:"¿Cuál fue la señal del pacto de Dios con Noé?",options:["Un arcoíris","Una paloma","Una rama de olivo","Una zarza ardiente"],correctIndex:0,reference:"Génesis 9:12-17"},{id:2,question:"¿Qué prometió Dios a Noé después del diluvio?",options:["Que viviría para siempre","Que nunca volvería a destruir la tierra con agua","Que sus descendientes gobernarían todas las naciones","Que los animales ya no existirían"],correctIndex:1,reference:"Génesis 9:11"},{id:3,question:"¿Qué edad tenía Abraham cuando Dios hizo el pacto de la circuncisión con él?",options:["75 años","86 años","99 años","100 años"],correctIndex:2,reference:"Génesis 17:1"},{id:4,question:"¿Cuál era el nombre de Abraham antes de que Dios lo cambiara?",options:["Abram","Abel","Aram","Abimelec"],correctIndex:0,reference:"Génesis 17:5"},{id:5,question:"¿Qué tierra prometió Dios a Abraham y sus descendientes?",options:["Egipto","Babilonia","Canaán","Mesopotamia"],correctIndex:2,reference:"Génesis 17:8"},{id:6,question:"¿Cuál fue la señal física del pacto con Abraham?",options:["Un sacrificio","La circuncisión","El bautismo","Un arcoíris"],correctIndex:1,reference:"Génesis 17:10-11"},{id:7,question:"En Génesis 15, ¿qué usó Dios para confirmar Su pacto con Abraham?",options:["Un contrato escrito","Un apretón de manos","Animales partidos por la mitad con un horno humeante y una antorcha de fuego pasando entre ellos","Siete piedras"],correctIndex:2,reference:"Génesis 15:9-17"},{id:8,question:"¿Qué prometió Dios a Abraham sobre sus descendientes?",options:["Serían pocos pero poderosos","Serían tan numerosos como las estrellas del cielo","Todos serían reyes","Vivirían en Egipto para siempre"],correctIndex:1,reference:"Génesis 15:5"},{id:9,question:"¿Dónde reafirmó Dios Su pacto con Jacob?",options:["En Egipto","En Canaán","En Betel","En el Monte Sinaí"],correctIndex:2,reference:"Génesis 35:9-12"},{id:10,question:"¿Qué vio Jacob en su sueño en Betel?",options:["Una zarza ardiente","Una escalera que llegaba al cielo con ángeles subiendo y bajando","Un arcoíris en las nubes","Tres visitantes"],correctIndex:1,reference:"Génesis 28:12"},{id:11,question:"¿Cuál era el nombre de Sara antes de que Dios lo cambiara?",options:["Sara","Sarai","Salomé","Safira"],correctIndex:1,reference:"Génesis 17:15"},{id:12,question:"¿Qué bendición prometió Dios a través de Abraham a todas las naciones?",options:["Riqueza y prosperidad","Victoria militar","Todos los pueblos de la tierra serían bendecidos a través de él","Juventud eterna"],correctIndex:2,reference:"Génesis 12:3"},{id:13,question:"¿A qué edad debía ser circuncidado un varón según el pacto?",options:["Al nacer","A los ocho días","Al año","A los trece años"],correctIndex:1,reference:"Génesis 17:12"},{id:14,question:"¿Quién fue la primera persona circuncidada como parte del pacto?",options:["Isaac","Ismael","Abraham","Jacob"],correctIndex:2,reference:"Génesis 17:24"},{id:15,question:"¿Qué mandó Dios a Adán en el Jardín del Edén respecto a la creación?",options:["Destruirla","Tener dominio sobre ella y sojuzgarla","Ignorarla","Adorarla"],correctIndex:1,reference:"Génesis 1:28"}]},JT=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},mu={en:[{id:1,question:"What does the Greek word 'agape' (ἀγάπη) mean?",options:["Unconditional love","Friendship","Knowledge","Hope"],correctIndex:0,reference:"1 Corinthians 13:13"},{id:2,question:"What does 'logos' (λόγος) mean in John 1:1?",options:["Light","The Word","Spirit","Life"],correctIndex:1,reference:"John 1:1"},{id:3,question:"What does 'charis' (χάρις) mean?",options:["Faith","Peace","Grace","Mercy"],correctIndex:2,reference:"Ephesians 2:8"},{id:4,question:"What does 'pistis' (πίστις) mean?",options:["Faith","Power","Wisdom","Patience"],correctIndex:0,reference:"Hebrews 11:1"},{id:5,question:"What does 'eirene' (εἰρήνη) mean?",options:["Joy","Truth","Glory","Peace"],correctIndex:3,reference:"John 14:27"},{id:6,question:"What does 'metanoia' (μετάνοια) mean?",options:["Baptism","Repentance","Salvation","Prayer"],correctIndex:1,reference:"Acts 2:38"},{id:7,question:"What does 'sozo' (σῴζω) mean?",options:["To judge","To preach","To save/deliver","To baptize"],correctIndex:2,reference:"Romans 10:9"},{id:8,question:"What does 'pneuma' (πνεῦμα) mean?",options:["Spirit/breath","Soul","Body","Mind"],correctIndex:0,reference:"John 3:8"},{id:9,question:"What does 'ekklesia' (ἐκκλησία) mean?",options:["Temple","Kingdom","Assembly/Church","Synagogue"],correctIndex:2,reference:"Matthew 16:18"},{id:10,question:"What does 'doxa' (δόξα) mean?",options:["Doctrine","Glory","Praise","Blessing"],correctIndex:1,reference:"John 1:14"},{id:11,question:"What does 'euangelion' (εὐαγγέλιον) mean?",options:["Prophecy","Commandment","Testimony","Good news/Gospel"],correctIndex:3,reference:"Mark 1:1"},{id:12,question:"What does 'hamartia' (ἁμαρτία) mean?",options:["Sin","Death","Curse","Darkness"],correctIndex:0,reference:"Romans 3:23"},{id:13,question:"What does 'koinonia' (κοινωνία) mean?",options:["Kingdom","Covenant","Fellowship/Communion","Ministry"],correctIndex:2,reference:"Acts 2:42"},{id:14,question:"What does 'dikaiosyne' (δικαιοσύνη) mean?",options:["Holiness","Righteousness","Obedience","Truth"],correctIndex:1,reference:"Romans 1:17"},{id:15,question:"What does 'zoe' (ζωή) mean?",options:["Life","Light","Way","Truth"],correctIndex:0,reference:"John 14:6"},{id:16,question:"What does 'parakletos' (παράκλητος) mean?",options:["Prophet","Shepherd","King","Advocate/Helper"],correctIndex:3,reference:"John 14:26"},{id:17,question:"What does 'aletheia' (ἀλήθεια) mean?",options:["Truth","Wisdom","Light","Freedom"],correctIndex:0,reference:"John 8:32"},{id:18,question:"What does 'dunamis' (δύναμις) mean?",options:["Authority","Dominion","Power/Miracle","Throne"],correctIndex:2,reference:"Acts 1:8"},{id:19,question:"What does 'eleos' (ἔλεος) mean?",options:["Mercy","Grace","Compassion","Forgiveness"],correctIndex:0,reference:"Luke 1:50"},{id:20,question:"What does 'basileia' (βασιλεία) mean?",options:["Temple","Kingdom","Covenant","Throne"],correctIndex:1,reference:"Matthew 6:33"},{id:21,question:"What does 'sophia' (σοφία) mean?",options:["Wisdom","Knowledge","Understanding","Discernment"],correctIndex:0,reference:"1 Corinthians 1:30"},{id:22,question:"What does 'kardia' (καρδία) mean?",options:["Mind","Soul","Heart","Spirit"],correctIndex:2,reference:"Matthew 22:37"},{id:23,question:"What does 'theos' (θεός) mean?",options:["God","Lord","King","Father"],correctIndex:0,reference:"John 1:1"},{id:24,question:"What does 'christos' (Χριστός) mean?",options:["Savior","Prophet","Priest","Christ/Anointed One"],correctIndex:3,reference:"Matthew 16:16"},{id:25,question:"What does 'kurios' (κύριος) mean?",options:["Lord","Master","Teacher","King"],correctIndex:0,reference:"Romans 10:9"},{id:26,question:"What does 'prophetes' (προφήτης) mean?",options:["Priest","Prophet","Scribe","Elder"],correctIndex:1,reference:"Matthew 21:11"},{id:27,question:"What does 'apostolos' (ἀπόστολος) mean?",options:["Disciple","Servant","Apostle/Messenger","Follower"],correctIndex:2,reference:"Luke 6:13"},{id:28,question:"What does 'didache' (διδαχή) mean?",options:["Teaching/Doctrine","Preaching","Scripture","Prophecy"],correctIndex:0,reference:"Acts 2:42"},{id:29,question:"What does 'marturia' (μαρτυρία) mean?",options:["Suffering","Sacrifice","Testimony/Witness","Confession"],correctIndex:2,reference:"Revelation 1:2"},{id:30,question:"What does 'elpis' (ἐλπίς) mean?",options:["Faith","Hope","Love","Joy"],correctIndex:1,reference:"Romans 5:5"},{id:31,question:"What does 'makarios' (μακάριος) mean?",options:["Holy","Righteous","Blessed/Happy","Faithful"],correctIndex:2,reference:"Matthew 5:3"},{id:32,question:"What does 'sarx' (σάρξ) mean?",options:["Flesh","Body","Blood","Bone"],correctIndex:0,reference:"John 1:14"},{id:33,question:"What does 'kosmos' (κόσμος) mean?",options:["Universe","Earth","Creation","World"],correctIndex:3,reference:"John 3:16"},{id:34,question:"What does 'ouranos' (οὐρανός) mean?",options:["Heaven","Sky","Paradise","Throne"],correctIndex:0,reference:"Matthew 6:9"},{id:35,question:"What does 'thanatos' (θάνατος) mean?",options:["Judgment","Death","Destruction","Curse"],correctIndex:1,reference:"Romans 6:23"},{id:36,question:"What does 'anastasis' (ἀνάστασις) mean?",options:["Ascension","Salvation","Resurrection","Redemption"],correctIndex:2,reference:"John 11:25"},{id:37,question:"What does 'baptizo' (βαπτίζω) mean?",options:["To wash","To cleanse","To sprinkle","To baptize/immerse"],correctIndex:3,reference:"Matthew 28:19"},{id:38,question:"What does 'proseuchomai' (προσεύχομαι) mean?",options:["To pray","To worship","To praise","To fast"],correctIndex:0,reference:"Matthew 6:6"},{id:39,question:"What does 'ethnos' (ἔθνος) mean?",options:["People","Nation/Gentile","Tribe","Family"],correctIndex:1,reference:"Matthew 28:19"},{id:40,question:"What does 'diatheke' (διαθήκη) mean?",options:["Promise","Law","Covenant/Testament","Blessing"],correctIndex:2,reference:"Hebrews 8:6"}],es:[{id:1,question:"¿Qué significa la palabra griega 'agape' (ἀγάπη)?",options:["Amor incondicional","Amistad","Conocimiento","Esperanza"],correctIndex:0,reference:"1 Corintios 13:13"},{id:2,question:"¿Qué significa 'logos' (λόγος) en Juan 1:1?",options:["Luz","El Verbo/La Palabra","Espíritu","Vida"],correctIndex:1,reference:"Juan 1:1"},{id:3,question:"¿Qué significa 'charis' (χάρις)?",options:["Fe","Paz","Gracia","Misericordia"],correctIndex:2,reference:"Efesios 2:8"},{id:4,question:"¿Qué significa 'pistis' (πίστις)?",options:["Fe","Poder","Sabiduría","Paciencia"],correctIndex:0,reference:"Hebreos 11:1"},{id:5,question:"¿Qué significa 'eirene' (εἰρήνη)?",options:["Gozo","Verdad","Gloria","Paz"],correctIndex:3,reference:"Juan 14:27"},{id:6,question:"¿Qué significa 'metanoia' (μετάνοια)?",options:["Bautismo","Arrepentimiento","Salvación","Oración"],correctIndex:1,reference:"Hechos 2:38"},{id:7,question:"¿Qué significa 'sozo' (σῴζω)?",options:["Juzgar","Predicar","Salvar/Liberar","Bautizar"],correctIndex:2,reference:"Romanos 10:9"},{id:8,question:"¿Qué significa 'pneuma' (πνεῦμα)?",options:["Espíritu/Aliento","Alma","Cuerpo","Mente"],correctIndex:0,reference:"Juan 3:8"},{id:9,question:"¿Qué significa 'ekklesia' (ἐκκλησία)?",options:["Templo","Reino","Asamblea/Iglesia","Sinagoga"],correctIndex:2,reference:"Mateo 16:18"},{id:10,question:"¿Qué significa 'doxa' (δόξα)?",options:["Doctrina","Gloria","Alabanza","Bendición"],correctIndex:1,reference:"Juan 1:14"},{id:11,question:"¿Qué significa 'euangelion' (εὐαγγέλιον)?",options:["Profecía","Mandamiento","Testimonio","Buenas nuevas/Evangelio"],correctIndex:3,reference:"Marcos 1:1"},{id:12,question:"¿Qué significa 'hamartia' (ἁμαρτία)?",options:["Pecado","Muerte","Maldición","Oscuridad"],correctIndex:0,reference:"Romanos 3:23"},{id:13,question:"¿Qué significa 'koinonia' (κοινωνία)?",options:["Reino","Pacto","Comunión/Fraternidad","Ministerio"],correctIndex:2,reference:"Hechos 2:42"},{id:14,question:"¿Qué significa 'dikaiosyne' (δικαιοσύνη)?",options:["Santidad","Justicia","Obediencia","Verdad"],correctIndex:1,reference:"Romanos 1:17"},{id:15,question:"¿Qué significa 'zoe' (ζωή)?",options:["Vida","Luz","Camino","Verdad"],correctIndex:0,reference:"Juan 14:6"},{id:16,question:"¿Qué significa 'parakletos' (παράκλητος)?",options:["Profeta","Pastor","Rey","Abogado/Consolador"],correctIndex:3,reference:"Juan 14:26"},{id:17,question:"¿Qué significa 'aletheia' (ἀλήθεια)?",options:["Verdad","Sabiduría","Luz","Libertad"],correctIndex:0,reference:"Juan 8:32"},{id:18,question:"¿Qué significa 'dunamis' (δύναμις)?",options:["Autoridad","Dominio","Poder/Milagro","Trono"],correctIndex:2,reference:"Hechos 1:8"},{id:19,question:"¿Qué significa 'eleos' (ἔλεος)?",options:["Misericordia","Gracia","Compasión","Perdón"],correctIndex:0,reference:"Lucas 1:50"},{id:20,question:"¿Qué significa 'basileia' (βασιλεία)?",options:["Templo","Reino","Pacto","Trono"],correctIndex:1,reference:"Mateo 6:33"},{id:21,question:"¿Qué significa 'sophia' (σοφία)?",options:["Sabiduría","Conocimiento","Entendimiento","Discernimiento"],correctIndex:0,reference:"1 Corintios 1:30"},{id:22,question:"¿Qué significa 'kardia' (καρδία)?",options:["Mente","Alma","Corazón","Espíritu"],correctIndex:2,reference:"Mateo 22:37"},{id:23,question:"¿Qué significa 'theos' (θεός)?",options:["Dios","Señor","Rey","Padre"],correctIndex:0,reference:"Juan 1:1"},{id:24,question:"¿Qué significa 'christos' (Χριστός)?",options:["Salvador","Profeta","Sacerdote","Cristo/Ungido"],correctIndex:3,reference:"Mateo 16:16"},{id:25,question:"¿Qué significa 'kurios' (κύριος)?",options:["Señor","Maestro","Profesor","Rey"],correctIndex:0,reference:"Romanos 10:9"},{id:26,question:"¿Qué significa 'prophetes' (προφήτης)?",options:["Sacerdote","Profeta","Escriba","Anciano"],correctIndex:1,reference:"Mateo 21:11"},{id:27,question:"¿Qué significa 'apostolos' (ἀπόστολος)?",options:["Discípulo","Siervo","Apóstol/Mensajero","Seguidor"],correctIndex:2,reference:"Lucas 6:13"},{id:28,question:"¿Qué significa 'didache' (διδαχή)?",options:["Enseñanza/Doctrina","Predicación","Escritura","Profecía"],correctIndex:0,reference:"Hechos 2:42"},{id:29,question:"¿Qué significa 'marturia' (μαρτυρία)?",options:["Sufrimiento","Sacrificio","Testimonio","Confesión"],correctIndex:2,reference:"Apocalipsis 1:2"},{id:30,question:"¿Qué significa 'elpis' (ἐλπίς)?",options:["Fe","Esperanza","Amor","Gozo"],correctIndex:1,reference:"Romanos 5:5"},{id:31,question:"¿Qué significa 'makarios' (μακάριος)?",options:["Santo","Justo","Bienaventurado/Feliz","Fiel"],correctIndex:2,reference:"Mateo 5:3"},{id:32,question:"¿Qué significa 'sarx' (σάρξ)?",options:["Carne","Cuerpo","Sangre","Hueso"],correctIndex:0,reference:"Juan 1:14"},{id:33,question:"¿Qué significa 'kosmos' (κόσμος)?",options:["Universo","Tierra","Creación","Mundo"],correctIndex:3,reference:"Juan 3:16"},{id:34,question:"¿Qué significa 'ouranos' (οὐρανός)?",options:["Cielo","Firmamento","Paraíso","Trono"],correctIndex:0,reference:"Mateo 6:9"},{id:35,question:"¿Qué significa 'thanatos' (θάνατος)?",options:["Juicio","Muerte","Destrucción","Maldición"],correctIndex:1,reference:"Romanos 6:23"},{id:36,question:"¿Qué significa 'anastasis' (ἀνάστασις)?",options:["Ascensión","Salvación","Resurrección","Redención"],correctIndex:2,reference:"Juan 11:25"},{id:37,question:"¿Qué significa 'baptizo' (βαπτίζω)?",options:["Lavar","Limpiar","Rociar","Bautizar/Sumergir"],correctIndex:3,reference:"Mateo 28:19"},{id:38,question:"¿Qué significa 'proseuchomai' (προσεύχομαι)?",options:["Orar","Adorar","Alabar","Ayunar"],correctIndex:0,reference:"Mateo 6:6"},{id:39,question:"¿Qué significa 'ethnos' (ἔθνος)?",options:["Pueblo","Nación/Gentil","Tribu","Familia"],correctIndex:1,reference:"Mateo 28:19"},{id:40,question:"¿Qué significa 'diatheke' (διαθήκη)?",options:["Promesa","Ley","Pacto/Testamento","Bendición"],correctIndex:2,reference:"Hebreos 8:6"}]},If=x.createContext(null),YT=[{id:"genesis-covenants",title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ui.en,es:ui.es},{id:"greek-vocabulary",title:{en:"Greek Vocabulary",es:"Vocabulario Griego"},description:{en:"Learn key Greek words from the New Testament",es:"Aprende palabras clave en griego del Nuevo Testamento"},icon:"αβ",category:"knowledge",en:mu.en,es:mu.es}],XT=({children:n})=>{const[e,t]=x.useState(yf),[s,r]=x.useState(YT),[i,a]=x.useState(Fs),[c,u]=x.useState(!0),[d,m]=x.useState(null),g=x.useCallback(async()=>{u(!0),m(null);try{const[P,V,D,L]=await Promise.all([WT(),HT(),fu("en"),fu("es")]);P&&t(P),V&&V.length>0&&r(V),(D||L)&&a(F=>({...F,...D?{en:D}:{},...L?{es:L}:{}}))}catch(P){console.warn("Failed to load Firestore data, using fallbacks:",P.message),m(P.message)}finally{u(!1)}},[]);x.useEffect(()=>{g()},[g]);const E=x.useCallback(()=>(Object.keys(localStorage).forEach(P=>{P.startsWith("firestore_")&&localStorage.removeItem(P)}),g()),[g]),S={books:e,quizzes:s,translations:i,loading:c,error:d,refreshData:E,setBooks:t,setQuizzes:r,setTranslations:a};return f.jsx(If.Provider,{value:S,children:n})},bt=()=>{const n=x.useContext(If);if(!n)throw new Error("useData must be used within a DataProvider");return n},Ef=x.createContext(null),ZT=()=>{var t;const n=localStorage.getItem("language");if(n&&Fs[n])return n;const e=(t=navigator.language)==null?void 0:t.split("-")[0];return e&&Fs[e]?e:"en"},ew=({children:n})=>{const{translations:e}=bt(),[t,s]=x.useState(ZT);x.useEffect(()=>{document.documentElement.lang=t},[t]);const r=x.useCallback(m=>{e[m]&&(s(m),localStorage.setItem("language",m))},[e]),i=x.useCallback((m,g={})=>{const E=m.split(".");let S=e[t];for(const P of E)if(S&&typeof S=="object"&&P in S)S=S[P];else{S=e.en;for(const V of E)if(S&&typeof S=="object"&&V in S)S=S[V];else return m;break}return typeof S=="string"&&Object.keys(g).length>0?S.replace(/\{(\w+)\}/g,(P,V)=>g[V]!==void 0?g[V]:P):S||m},[t,e]),a=x.useCallback(m=>{var g,E;return((E=(g=e[t])==null?void 0:g.books)==null?void 0:E[m])||m},[t,e]),c=x.useCallback(m=>{var E;const g=((E=e[t])==null?void 0:E.scores)||e.en.scores;return m===100?g.perfect:m>=90?g.excellent:m>=80?g.great:m>=70?g.good:m>=60?g.notBad:m>=50?g.keepPracticing:g.tryAgain},[t,e]),u=x.useMemo(()=>Object.keys(e),[e]),d=x.useMemo(()=>({language:t,setLanguage:r,t:i,translateBook:a,getScoreMessage:c,availableLanguages:u}),[t,r,i,a,c,u]);return f.jsx(Ef.Provider,{value:d,children:n})},Cn=()=>{const n=x.useContext(Ef);if(!n)throw new Error("useI18n must be used within an I18nProvider");return n},tw=({onStartOrder:n,onStartComplete:e,onStartCovenants:t,onStartQuiz:s,onStartFlashCards:r,onNavigateAdmin:i})=>{const{stats:a}=Iu(),{t:c,language:u}=Cn(),{quizzes:d}=bt();return f.jsx("div",{className:"home-container",children:f.jsxs("div",{className:"home-content",children:[f.jsx("header",{className:"home-header",children:f.jsxs("div",{className:"logo-container",children:[f.jsx("div",{className:"logo",children:f.jsx("span",{className:"logo-icon",children:"📖"})}),f.jsx("h1",{className:"app-title",children:c("appName")}),f.jsx("p",{className:"app-subtitle",children:c("appSubtitle")})]})}),f.jsxs(Ur,{className:"welcome-card",children:[f.jsx("h2",{className:"welcome-title",children:c("home.welcomeTitle")}),f.jsx("p",{className:"welcome-description",children:c("home.welcomeDescription")}),f.jsxs("div",{className:"quiz-info",children:[f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"📚"}),f.jsx("span",{className:"info-text",children:c("home.booksCount")})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-icon",children:"⏱️"}),f.jsx("span",{className:"info-text",children:c("home.unlimitedTime")})]})]}),f.jsx("h3",{className:"quiz-type-title",children:c("home.selectQuizType")}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.oldTestament")}),f.jsxs("div",{className:"quiz-types",children:[f.jsxs("button",{className:"quiz-type-card",onClick:n,children:[f.jsx("span",{className:"quiz-type-icon",children:c("home.quizTypes.order.icon")}),f.jsx("span",{className:"quiz-type-name",children:c("home.quizTypes.order.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.quizTypes.order.description")})]}),f.jsxs("button",{className:"quiz-type-card",onClick:e,children:[f.jsx("span",{className:"quiz-type-icon",children:c("home.quizTypes.complete.icon")}),f.jsx("span",{className:"quiz-type-name",children:c("home.quizTypes.complete.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.quizTypes.complete.description")})]})]})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.knowledge")}),f.jsx("div",{className:"quiz-types",children:d.map(m=>{var g,E,S,P;return f.jsxs("button",{className:"quiz-type-card",onClick:()=>{m.id==="genesis-covenants"?t():s&&s(m.id)},children:[f.jsx("span",{className:"quiz-type-icon",children:m.icon||"📝"}),f.jsx("span",{className:"quiz-type-name",children:((g=m.title)==null?void 0:g[u])||((E=m.title)==null?void 0:E.en)||m.id}),f.jsx("span",{className:"quiz-type-desc",children:((S=m.description)==null?void 0:S[u])||((P=m.description)==null?void 0:P.en)||""})]},m.id)})})]}),f.jsxs("div",{className:"quiz-category",children:[f.jsx("h4",{className:"quiz-category-title",children:c("home.study")}),f.jsx("div",{className:"quiz-types",children:f.jsxs("button",{className:"quiz-type-card",onClick:()=>r==null?void 0:r("greek-vocabulary"),children:[f.jsx("span",{className:"quiz-type-icon",children:"🃏"}),f.jsx("span",{className:"quiz-type-name",children:c("home.studyTypes.greekFlashCards.title")}),f.jsx("span",{className:"quiz-type-desc",children:c("home.studyTypes.greekFlashCards.description")})]})})]})]}),a.totalAttempts>0&&f.jsxs(Ur,{className:"stats-card",children:[f.jsx("h3",{className:"stats-title",children:c("home.yourProgress")}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-value",children:a.totalAttempts}),f.jsx("div",{className:"stat-label",children:c("home.attempts")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[a.bestScore,"%"]}),f.jsx("div",{className:"stat-label",children:c("home.bestScore")})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-value",children:[a.averageScore,"%"]}),f.jsx("div",{className:"stat-label",children:c("home.average")})]})]})]}),f.jsxs("footer",{className:"home-footer",children:[f.jsx("p",{className:"footer-text",children:c("home.footerText")}),f.jsx("button",{className:"admin-link",onClick:i,onContextMenu:m=>{m.preventDefault(),i==null||i()},children:"⚙"})]})]})})},nw=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e},sw=n=>n>=90?"#27AE60":n>=70?"#50C878":n>=50?"#F39C12":"#E74C3C",vf=x.createContext(),rw=({children:n})=>{const{books:e}=bt(),[t,s]=x.useState([]),[r,i]=x.useState([]),[a,c]=x.useState(!1),u=x.useCallback(()=>{s(nw([...e])),i([]),c(!0)},[e]),d=x.useCallback(L=>{i(F=>[...F,L])},[]),m=x.useCallback(()=>{i(L=>L.slice(0,-1))},[]),g=x.useCallback(L=>{i(F=>F.filter(U=>U!==L))},[]),E=x.useCallback(()=>{i([])},[]),S=x.useCallback(()=>{let L=0;r.forEach((z,M)=>{e[M]===z&&L++});const F=e.length,U=Math.round(L/F*100);return{correct:L,total:F,percentage:U,selections:r}},[r,e]),P=x.useCallback(L=>r.includes(L),[r]),V=x.useCallback(L=>{const F=r.indexOf(L);return F===-1?null:F+1},[r]),D={shuffledBooks:t,selectedBooks:r,isInitialized:a,initializeQuiz:u,selectBook:d,deselectBook:g,undoLastSelection:m,resetSelections:E,calculateScore:S,isBookSelected:P,getSelectionIndex:V};return f.jsx(vf.Provider,{value:D,children:n})},iw=()=>{const n=x.useContext(vf);if(!n)throw new Error("useQuiz must be used within QuizProvider");return n},ow=({book:n,displayName:e,isSelected:t,isCorrectlyPlaced:s,isLastPlaced:r,selectionIndex:i,onClick:a,onDeselect:c})=>{const u=["book-card",t?"book-card-selected":"",s?"book-card-correct":"",r?"book-card-just-placed":""].filter(Boolean).join(" "),d=()=>{t&&c?c():t||a()};return f.jsx("button",{className:u,onClick:d,"aria-pressed":t,children:f.jsxs("div",{className:"book-card-content",children:[f.jsx("span",{className:"book-name",children:e||n}),t&&f.jsx("div",{className:`selection-badge ${s?"selection-badge-correct":""}`,children:i})]})})},Ua=({progress:n=0,color:e="#4A90E2"})=>{const t=Math.min(100,Math.max(0,n));return f.jsx("div",{className:"progress-bar-container",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${t}%`,backgroundColor:e}})})},ae=({onClick:n,variant:e="primary",size:t="medium",disabled:s=!1,className:r="",children:i,...a})=>{const c=`button button-${e} button-${t} ${r}`;return f.jsx("button",{className:c,onClick:n,disabled:s,...a,children:i})},aw=({onComplete:n,onHome:e})=>{const{shuffledBooks:t,selectedBooks:s,isInitialized:r,initializeQuiz:i,selectBook:a,deselectBook:c,undoLastSelection:u,resetSelections:d,calculateScore:m,isBookSelected:g,getSelectionIndex:E}=iw(),{books:S}=bt(),{t:P,translateBook:V}=Cn(),[D,L]=x.useState(!1),[F,U]=x.useState(null),[z,M]=x.useState(!1),[G,T]=x.useState(""),_=x.useRef(null);x.useEffect(()=>{r||i()},[r,i]),x.useEffect(()=>{if(!z)return;const W=ie=>{_.current&&!_.current.contains(ie.target)&&M(!1)};return document.addEventListener("pointerdown",W),()=>document.removeEventListener("pointerdown",W)},[z]);const I=x.useCallback(W=>{g(W)||(a(W),U(W),T(""),setTimeout(()=>U(null),600))},[g,a]),w=x.useCallback(()=>{u(),U(null),M(!1)},[u]),v=x.useCallback(()=>{d(),U(null),M(!1)},[d]),A=()=>{s.length===t.length&&(L(!0),M(!1))},y=()=>{const W=m();n(W)},ce=()=>{L(!1)},Ve=x.useMemo(()=>{const W=t.filter(rt=>!s.includes(rt)),ie=G.trim().toLowerCase(),Be=ie?W.filter(rt=>{const Ye=V(rt).toLowerCase(),Zt=rt.toLowerCase();return Ye.includes(ie)||Zt.includes(ie)}):W;return[...s,...Be]},[t,s,G,V]),K=t.length>0?s.length/t.length*100:0,he=s.length===t.length;return f.jsxs("div",{className:"quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",P("exit")]}),f.jsxs("header",{className:"quiz-header",children:[f.jsx("h1",{className:"quiz-title",children:P("quiz.title")}),f.jsx("p",{className:"quiz-instruction",children:P("quiz.instruction")})]}),f.jsxs("div",{className:"quiz-progress",children:[f.jsx(Ua,{progress:K}),f.jsxs("div",{className:"progress-text",children:[s.length," / ",t.length," ",P("quiz.selected")]})]}),f.jsxs("div",{className:"quiz-search",children:[f.jsx("input",{className:"quiz-search-input",type:"text",value:G,onChange:W=>T(W.target.value),placeholder:P("quiz.searchPlaceholder")}),G&&f.jsx("button",{className:"quiz-search-clear",onClick:()=>T(""),"aria-label":"Clear",children:"×"})]}),f.jsx("div",{className:"quiz-content",children:f.jsx("div",{className:"books-grid",children:Ve.map(W=>{const ie=E(W),Be=ie!==null&&S[ie-1]===W;return f.jsx(ow,{book:W,displayName:V(W),isSelected:g(W),isCorrectlyPlaced:Be,isLastPlaced:F===W,selectionIndex:ie,onClick:()=>I(W),onDeselect:()=>c(W)},W)})})}),f.jsxs("div",{className:"quiz-actions quiz-actions-desktop",children:[f.jsx(ae,{onClick:w,variant:"secondary",disabled:s.length===0,className:"action-button",children:P("quiz.undoLast")}),f.jsx(ae,{onClick:v,variant:"secondary",disabled:s.length===0,className:"action-button",children:P("quiz.resetAll")}),f.jsx(ae,{onClick:A,variant:"primary",disabled:!he,className:"action-button submit-button",children:P("quiz.submitAnswer")})]}),f.jsxs("div",{className:"quiz-fab-wrapper",ref:_,children:[z&&f.jsxs("div",{className:"quiz-fab-menu",children:[f.jsx("button",{className:"quiz-fab-menu-item quiz-fab-menu-submit",onClick:A,disabled:!he,children:P("quiz.submitAnswer")}),f.jsx("button",{className:"quiz-fab-menu-item",onClick:w,disabled:s.length===0,children:P("quiz.undoLast")}),f.jsx("button",{className:"quiz-fab-menu-item",onClick:v,disabled:s.length===0,children:P("quiz.resetAll")})]}),f.jsx("button",{className:`quiz-fab ${z?"quiz-fab-open":""}`,onClick:()=>M(W=>!W),"aria-label":"Actions",children:f.jsx("span",{className:"quiz-fab-icon",children:z?"×":"…"})})]}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:ce,children:f.jsxs("div",{className:"confirmation-modal",onClick:W=>W.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:P("quiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:P("quiz.confirmText",{count:t.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(ae,{onClick:ce,variant:"secondary",children:P("quiz.goBack")}),f.jsx(ae,{onClick:y,variant:"primary",children:P("quiz.yesSubmit")})]})]})})]})},cw=(n,e)=>{const t=e||n;if(/^\d/.test(t)){const s=t.split(" ");if(s.length>1)return`${s[0]} ${s[1].charAt(0)}...`}return t.length<=4?`${t.charAt(0)}...`:`${t.substring(0,2)}...`},mo=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim(),lw=({onComplete:n,onHome:e})=>{const{t,translateBook:s,language:r}=Cn(),{books:i}=bt(),[a,c]=x.useState(0),[u,d]=x.useState(""),[m,g]=x.useState(Array(i.length).fill(null)),[E,S]=x.useState(!1),[P,V]=x.useState(null),[D,L]=x.useState(!1),F=x.useRef(null),U=i[a],z=s(U),M=cw(U,z);x.useEffect(()=>{F.current&&!E&&F.current.focus()},[a,E]);const G=()=>{setTimeout(()=>{var K;(K=F.current)==null||K.scrollIntoView({behavior:"smooth",block:"center"})},300)},T=()=>{const K=mo(u),he=mo(z),W=mo(U),ie=K===he||K===W;V(ie),S(!0);const Be=[...m];Be[a]={input:u,correct:ie,correctAnswer:z},g(Be)},_=()=>{a<i.length-1?(c(a+1),d(""),S(!1),V(null)):v()},I=()=>{const K=[...m];K[a]={input:"",correct:!1,correctAnswer:z,skipped:!0},g(K),a<i.length-1?(c(a+1),d(""),S(!1),V(null)):v()},w=K=>{K.key==="Enter"&&(E?_():u.trim()&&T())},v=()=>{L(!0)},A=()=>{const K=m.filter(ie=>ie==null?void 0:ie.correct).length,he=i.length,W=Math.round(K/he*100);n({correct:K,total:he,percentage:W,selections:m.map((ie,Be)=>(ie==null?void 0:ie.input)||""),answers:m,quizType:"complete"})},y=()=>{L(!1)},ce=m.filter(K=>K!==null).length,Ve=ce/i.length*100;return f.jsxs("div",{className:"complete-quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",t("exit")]}),f.jsxs("header",{className:"complete-quiz-header",children:[f.jsx("h1",{className:"complete-quiz-title",children:t("completeQuiz.title")}),f.jsx("p",{className:"complete-quiz-instruction",children:t("completeQuiz.instruction")})]}),f.jsxs("div",{className:"complete-quiz-progress",children:[f.jsx(Ua,{progress:Ve}),f.jsx("div",{className:"progress-text",children:t("completeQuiz.progress",{completed:ce,total:i.length})})]}),f.jsxs("div",{className:"complete-quiz-content",children:[f.jsx("div",{className:"book-number",children:a+1}),f.jsxs("div",{className:"hint-card",children:[f.jsx("div",{className:"hint-text",children:M}),f.jsx("div",{className:"hint-label",children:t("completeQuiz.hint",{hint:`${z.length} ${r==="es"?"letras":"letters"}`})})]}),E?f.jsxs("div",{className:`result-section ${P?"correct":"incorrect"}`,children:[f.jsx("div",{className:"result-icon",children:P?"✓":"✗"}),f.jsx("div",{className:"result-message",children:t(P?"completeQuiz.correct":"completeQuiz.incorrect")}),!P&&f.jsx("div",{className:"correct-answer",children:t("completeQuiz.correctAnswer",{answer:z})}),f.jsx(ae,{onClick:_,variant:"primary",className:"next-button",children:a<i.length-1?t("completeQuiz.next"):t("completeQuiz.submitAll")})]}):f.jsxs("div",{className:"input-section",children:[f.jsx("input",{ref:F,type:"text",className:"book-input",value:u,onChange:K=>d(K.target.value),onKeyPress:w,onFocus:G,placeholder:t("completeQuiz.placeholder"),autoComplete:"off",autoCapitalize:"words"}),f.jsxs("div",{className:"input-actions",children:[f.jsx(ae,{onClick:I,variant:"secondary",className:"skip-button",children:t("completeQuiz.skip")}),f.jsx(ae,{onClick:T,variant:"primary",disabled:!u.trim(),className:"check-button",children:t("completeQuiz.check")})]})]})]}),f.jsx("div",{className:"books-overview",children:i.map((K,he)=>{const W=m[he];let ie="pending";return W?ie=W.correct?"correct":"incorrect":he===a&&(ie="current"),f.jsx("div",{className:`book-dot ${ie}`,title:`${he+1}. ${s(i[he])}`},he)})}),D&&f.jsx("div",{className:"confirmation-overlay",onClick:y,children:f.jsxs("div",{className:"confirmation-modal",onClick:K=>K.stopPropagation(),children:[f.jsx("h2",{className:"confirmation-title",children:t("completeQuiz.confirmTitle")}),f.jsx("p",{className:"confirmation-text",children:t("completeQuiz.confirmText",{completed:ce,total:i.length})}),f.jsxs("div",{className:"confirmation-actions",children:[f.jsx(ae,{onClick:y,variant:"secondary",children:t("quiz.goBack")}),f.jsx(ae,{onClick:A,variant:"primary",children:t("quiz.yesSubmit")})]})]})})]})},uw=({onComplete:n,onHome:e,quizId:t="genesis-covenants"})=>{const{t:s,language:r}=Cn(),{quizzes:i}=bt(),[a,c]=x.useState([]),[u,d]=x.useState(0),[m,g]=x.useState(null),[E,S]=x.useState(!1),[P,V]=x.useState([]);x.useEffect(()=>{const _=i.find(w=>w.id===t)||i[0];if(!_)return;const I=_[r]||_.en||[];c(JT(I)),V([]),d(0),g(null),S(!1)},[r,t,i]);const D=a[u],L=a.length>0?(u+1)/a.length*100:0,F=T=>{E||g(T)},U=()=>{if(m===null)return;const T=m===D.correctIndex,_=[...P];_[u]={questionId:D.id,selectedIndex:m,correctIndex:D.correctIndex,correct:T},V(_),S(!0)},z=()=>{u<a.length-1?(d(u+1),g(null),S(!1)):M()},M=()=>{const T=P.filter(w=>w==null?void 0:w.correct).length,_=a.length,I=Math.round(T/_*100);n({correct:T,total:_,percentage:I,answers:P,questions:a,quizType:"covenants"})};if(!D)return f.jsx("div",{className:"mc-quiz-container",children:f.jsx("div",{className:"mc-loading",children:"Loading..."})});const G=m===D.correctIndex;return f.jsxs("div",{className:"mc-quiz-container",children:[f.jsxs("button",{className:"quiz-exit-btn",onClick:e,children:[f.jsx("span",{className:"quiz-exit-btn-arrow",children:"←"})," ",s("exit")]}),f.jsxs("header",{className:"mc-quiz-header",children:[f.jsx("h1",{className:"mc-quiz-title",children:s("multipleChoice.title")}),f.jsx("p",{className:"mc-quiz-instruction",children:s("multipleChoice.instruction")})]}),f.jsxs("div",{className:"mc-quiz-progress",children:[f.jsx(Ua,{progress:L}),f.jsx("div",{className:"mc-progress-text",children:s("multipleChoice.question",{current:u+1,total:a.length})})]}),f.jsxs("div",{className:"mc-quiz-content",children:[f.jsxs("div",{className:"mc-question-card",children:[f.jsx("div",{className:"mc-question-text",children:D.question}),f.jsx("div",{className:"mc-options",children:D.options.map((T,_)=>{let I="mc-option";return E?_===D.correctIndex?I+=" correct":_===m&&!G&&(I+=" incorrect"):_===m&&(I+=" selected"),f.jsxs("button",{className:I,onClick:()=>F(_),disabled:E,children:[f.jsx("span",{className:"mc-option-letter",children:String.fromCharCode(65+_)}),f.jsx("span",{className:"mc-option-text",children:T}),E&&_===D.correctIndex&&f.jsx("span",{className:"mc-option-icon correct",children:"✓"}),E&&_===m&&!G&&f.jsx("span",{className:"mc-option-icon incorrect",children:"✗"})]},_)})}),E&&f.jsxs("div",{className:`mc-result ${G?"correct":"incorrect"}`,children:[f.jsx("div",{className:"mc-result-message",children:s(G?"multipleChoice.correct":"multipleChoice.incorrect")}),!G&&f.jsxs("div",{className:"mc-correct-answer",children:[s("multipleChoice.correctAnswerWas")," ",D.options[D.correctIndex]]}),f.jsxs("div",{className:"mc-reference",children:[s("multipleChoice.reference")," ",D.reference]})]})]}),f.jsx("div",{className:"mc-quiz-actions",children:E?f.jsx(ae,{onClick:z,variant:"primary",className:"mc-action-button",children:u<a.length-1?s("multipleChoice.next"):s("multipleChoice.finish")}):f.jsx(ae,{onClick:U,variant:"primary",disabled:m===null,className:"mc-action-button",children:s("completeQuiz.check")})})]}),f.jsx("div",{className:"mc-dots-overview",children:a.map((T,_)=>{const I=P[_];let w="pending";return I?w=I.correct?"correct":"incorrect":_===u&&(w="current"),f.jsx("div",{className:`mc-dot ${w}`},_)})})]})},Pr=6;function hw(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function dw(n){const e=n.match(/\(([^)]*[\u0370-\u03FF\u1F00-\u1FFF][^)]*)\)/),t=n.match(/'([a-zA-Z]+)'/);return{greek:e?e[1]:"",transliteration:t?t[1]:""}}const fw=({quizId:n="greek-vocabulary",onHome:e})=>{const{quizzes:t}=bt(),{t:s,language:r}=Cn(),[i,a]=x.useState(0),[c,u]=x.useState(new Set),[d,m]=x.useState(0),[g,E]=yu("itiapp-flashcard-progress",[]),[S,P]=x.useState("all"),V=x.useMemo(()=>{const v=t.find(y=>y.id===n);if(!v)return[];const A=v[r]||v.en||[];return hw(A)},[t,n,r,d]),D=x.useMemo(()=>S==="notLearned"?V.filter(v=>!g.includes(v.id)):V,[V,S,g]),L=Math.ceil(D.length/Pr),F=D.slice(i*Pr,i*Pr+Pr),U=x.useCallback(v=>{a(v),u(new Set)},[]),z=x.useCallback(v=>{u(A=>{const y=new Set(A);return y.has(v)?y.delete(v):y.add(v),y})},[]),M=F.length>0&&c.size===F.length,G=x.useCallback(()=>{u(M?new Set:new Set(F.map((v,A)=>A)))},[M,F]),T=x.useCallback(()=>{m(v=>v+1),a(0),u(new Set)},[]),_=x.useCallback((v,A)=>{A.stopPropagation(),E(y=>y.includes(v)?y:[...y,v])},[E]),I=x.useCallback(()=>{E([])},[E]),w=x.useCallback(v=>{P(v),a(0),u(new Set)},[]);return V.length?f.jsx("div",{className:"flashcards-container",children:f.jsxs("div",{className:"flashcards-content",children:[f.jsx("div",{className:"flashcards-header",children:f.jsx("h1",{className:"flashcards-title",children:s("flashcards.title")})}),f.jsxs("div",{className:"flashcards-progress-bar",children:[f.jsxs("div",{className:"flashcards-progress-text",children:[g.length," / ",V.length," ",s("flashcards.learned")]}),f.jsx("div",{className:"flashcards-progress-track",children:f.jsx("div",{className:"flashcards-progress-fill",style:{width:`${g.length/V.length*100}%`}})})]}),f.jsxs("div",{className:"flashcards-filter",children:[f.jsx("button",{className:`flashcards-filter-btn ${S==="all"?"active":""}`,onClick:()=>w("all"),children:s("flashcards.all")}),f.jsx("button",{className:`flashcards-filter-btn ${S==="notLearned"?"active":""}`,onClick:()=>w("notLearned"),children:s("flashcards.notLearned")})]}),D.length===0?f.jsxs("p",{style:{color:"white",textAlign:"center",padding:"2rem 0"},children:[s("flashcards.all")," ",s("flashcards.learned"),"!"]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"flashcards-grid",children:F.map((v,A)=>{const{greek:y,transliteration:ce}=dw(v.question),Ve=v.options[v.correctIndex],K=c.has(A),he=g.includes(v.id);return f.jsx("div",{className:"flashcard-scene",onClick:()=>z(A),children:f.jsxs("div",{className:`flashcard ${K?"is-flipped":""}`,children:[f.jsxs("div",{className:"flashcard-face flashcard-front",children:[he&&f.jsx("span",{className:"flashcard-known-badge",children:"✓"}),f.jsx("div",{className:"flashcard-greek",children:y}),f.jsx("div",{className:"flashcard-transliteration",children:ce})]}),f.jsxs("div",{className:"flashcard-face flashcard-back",children:[f.jsx("div",{className:"flashcard-meaning",children:Ve}),f.jsx("div",{className:"flashcard-reference",children:v.reference}),!he&&f.jsx("button",{className:"flashcard-know-btn",onClick:W=>_(v.id,W),children:s("flashcards.knowIt")})]})]})},`${i}-${A}`)})}),f.jsxs("div",{className:"flashcards-nav",children:[f.jsx("button",{className:"flashcard-nav-btn",onClick:()=>U(i-1),disabled:i===0,"aria-label":s("flashcards.previous"),children:"←"}),f.jsxs("span",{className:"flashcard-nav-indicator",children:[i+1," / ",L]}),f.jsx("button",{className:"flashcard-nav-btn",onClick:()=>U(i+1),disabled:i>=L-1,"aria-label":s("flashcards.next"),children:"→"})]})]}),f.jsxs("div",{className:"flashcards-actions",children:[f.jsx("button",{className:"flashcard-action-btn",onClick:G,children:s(M?"flashcards.hideAll":"flashcards.showAll")}),f.jsx("button",{className:"flashcard-action-btn",onClick:T,children:s("flashcards.shuffle")}),g.length>0&&f.jsx("button",{className:"flashcard-action-btn",onClick:I,children:s("flashcards.resetProgress")}),f.jsx("button",{className:"flashcard-action-btn",onClick:e,children:s("flashcards.backToHome")})]})]})}):f.jsx("div",{className:"flashcards-container",children:f.jsxs("div",{className:"flashcards-content",children:[f.jsx("p",{style:{color:"white",textAlign:"center"},children:"No cards available."}),f.jsx("div",{className:"flashcards-actions",children:f.jsx("button",{className:"flashcard-action-btn",onClick:e,children:s("flashcards.backToHome")})})]})})},mw=({score:n,onRetry:e,onHome:t})=>{const{updateStats:s}=Iu(),{t:r,translateBook:i,getScoreMessage:a}=Cn(),{books:c}=bt();if(x.useEffect(()=>{n&&s(n)},[n,s]),!n)return f.jsxs("div",{className:"results-container",children:[f.jsx("p",{children:r("results.noResults")}),f.jsx(ae,{onClick:t,children:r("results.goHome")})]});const{correct:u,total:d,percentage:m,selections:g,answers:E,questions:S,quizType:P}=n,V=a(m),D=sw(m),L=P==="complete",F=P==="covenants";return f.jsx("div",{className:"results-container",children:f.jsxs("div",{className:"results-content",children:[f.jsx("header",{className:"results-header",children:f.jsx("h1",{className:"results-title",children:r("results.title")})}),f.jsxs(Ur,{className:"score-card",children:[f.jsxs("div",{className:"score-display",style:{borderColor:D},children:[f.jsxs("div",{className:"score-percentage",style:{color:D},children:[m,"%"]}),f.jsx("div",{className:"score-message",style:{color:D},children:V}),f.jsx("div",{className:"score-details",children:r("results.outOf",{correct:u,total:d})})]}),f.jsxs("div",{className:"score-breakdown",children:[f.jsxs("div",{className:"breakdown-item correct",children:[f.jsx("span",{className:"breakdown-icon",children:"✓"}),f.jsxs("span",{className:"breakdown-text",children:[u," ",r("results.correct")]})]}),f.jsxs("div",{className:"breakdown-item incorrect",children:[f.jsx("span",{className:"breakdown-icon",children:"✗"}),f.jsxs("span",{className:"breakdown-text",children:[d-u," ",r("results.incorrect")]})]})]})]}),f.jsxs(Ur,{className:"details-card",children:[f.jsx("h2",{className:"details-title",children:r("results.yourAnswers")}),f.jsx("div",{className:"answers-list",children:F?E==null?void 0:E.map((U,z)=>{var I,w;const M=S==null?void 0:S[z],G=U==null?void 0:U.correct,T=((I=M==null?void 0:M.options)==null?void 0:I[U==null?void 0:U.selectedIndex])||r("multipleChoice.skipped"),_=(w=M==null?void 0:M.options)==null?void 0:w[M==null?void 0:M.correctIndex];return f.jsxs("div",{className:`answer-item ${G?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsx("div",{className:"answer-question",children:M==null?void 0:M.question}),f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:T})]}),!G&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:_})]}),f.jsx("div",{className:"answer-reference",children:M==null?void 0:M.reference})]}),f.jsx("div",{className:"answer-status",children:G?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)}):L?E==null?void 0:E.map((U,z)=>{const M=c[z],G=U==null?void 0:U.correct,T=(U==null?void 0:U.input)||"-";return f.jsxs("div",{className:`answer-item ${G?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:T})]}),!G&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(M)})]})]}),f.jsx("div",{className:"answer-status",children:G?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)}):g==null?void 0:g.map((U,z)=>{const M=c[z],G=U===M;return f.jsxs("div",{className:`answer-item ${G?"correct":"incorrect"}`,children:[f.jsx("div",{className:"answer-position",children:z+1}),f.jsxs("div",{className:"answer-content",children:[f.jsxs("div",{className:"answer-your-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.yourAnswer")}),f.jsx("span",{className:"answer-book",children:i(U)})]}),!G&&f.jsxs("div",{className:"answer-correct-choice",children:[f.jsx("span",{className:"answer-label",children:r("results.correctAnswer")}),f.jsx("span",{className:"answer-book",children:i(M)})]})]}),f.jsx("div",{className:"answer-status",children:G?f.jsx("span",{className:"status-icon correct",children:"✓"}):f.jsx("span",{className:"status-icon incorrect",children:"✗"})})]},z)})})]}),f.jsxs("div",{className:"results-actions",children:[f.jsx(ae,{onClick:t,variant:"secondary",size:"large",children:r("results.home")}),f.jsx(ae,{onClick:e,variant:"primary",size:"large",children:r("results.tryAgain")})]})]})})},Tf=x.createContext(null),pw=new _t,gw=({children:n})=>{const[e,t]=x.useState(null),[s,r]=x.useState(!!gt);x.useEffect(()=>gt?cE(gt,d=>{t(d),r(!1)}):void 0,[]);const i=(u,d)=>{if(!gt)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return iE(gt,u,d)},a=()=>{if(!gt)throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env vars.");return PE(gt,pw)},c=()=>gt?lE(gt):Promise.resolve();return f.jsx(Tf.Provider,{value:{user:e,loading:s,signInWithEmail:i,signInWithGoogle:a,signOut:c},children:n})},_w=()=>{const n=x.useContext(Tf);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n};async function yw(){const n={books:!1,quizzes:!1,translations:!1};try{await gf(yf),n.books=!0}catch(e){console.error("Failed to seed books:",e)}try{await _f("genesis-covenants",{title:{en:"Jacob's Covenants",es:"Pactos de Jacob"},description:{en:"Multiple choice questions about the covenants in Genesis",es:"Preguntas de opcion multiple sobre los pactos en Genesis"},icon:"📜",category:"knowledge",en:ui.en,es:ui.es}),n.quizzes=!0}catch(e){console.error("Failed to seed quizzes:",e)}try{await li("en",Fs.en),await li("es",Fs.es),n.translations=!0}catch(e){console.error("Failed to seed translations:",e)}return n}const Iw=({onBack:n})=>{var St,ls,us;const{books:e,quizzes:t,translations:s,refreshData:r}=bt(),{user:i,loading:a,signInWithEmail:c,signInWithGoogle:u,signOut:d}=_w(),[m,g]=x.useState(""),[E,S]=x.useState(""),[P,V]=x.useState(""),[D,L]=x.useState("books"),[F,U]=x.useState(""),[z,M]=x.useState(!1),[G,T]=x.useState([]),[_,I]=x.useState(""),[w,v]=x.useState(null),[A,y]=x.useState(null),[ce,Ve]=x.useState(!1),[K,he]=x.useState({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),[W,ie]=x.useState("en"),[Be,rt]=x.useState({}),[Ye,Zt]=x.useState("");x.useEffect(()=>{T([...e])},[e]),x.useEffect(()=>{s[W]&&rt(JSON.parse(JSON.stringify(s[W])))},[W,s]);const Rn=async R=>{R.preventDefault(),V("");try{await c(m,E)}catch(B){V(B.code==="auth/invalid-credential"?"Invalid email or password":B.message)}},is=async()=>{V("");try{await u()}catch(R){R.code!=="auth/popup-closed-by-user"&&V(R.message)}},Se=R=>{U(R),setTimeout(()=>U(""),3e3)},os=async()=>{M(!0);try{await gf(G),await r(),Se("Books saved successfully!")}catch(R){Se("Error saving books: "+R.message)}M(!1)},Pn=()=>{_.trim()&&!G.includes(_.trim())&&(T([...G,_.trim()]),I(""))},ir=R=>{T(G.filter((B,X)=>X!==R))},or=(R,B)=>{const X=[...G],le=R+B;le<0||le>=X.length||([X[R],X[le]]=[X[le],X[R]],T(X))},Oi=R=>{const B=t.find(X=>X.id===R);B&&(v(R),y(JSON.parse(JSON.stringify(B))))},ar=async()=>{if(!(!A||!w)){M(!0);try{const{id:R,...B}=A;await _f(w,B),await r(),Se("Quiz saved successfully!")}catch(R){Se("Error saving quiz: "+R.message)}M(!1)}},as=async()=>{if(K.id.trim()){M(!0);try{const R={title:{en:K.titleEn,es:K.titleEs},description:{en:K.descEn,es:K.descEs},icon:K.icon||"📝",category:K.category,en:[],es:[]};await QT(K.id.trim(),R),await r(),Ve(!1),he({id:"",titleEn:"",titleEs:"",descEn:"",descEs:"",icon:"",category:"knowledge"}),Se("Quiz created successfully!")}catch(R){Se("Error creating quiz: "+R.message)}M(!1)}},cr=async R=>{if(window.confirm(`Delete quiz "${R}"?`)){M(!0);try{await KT(R),await r(),w===R&&(v(null),y(null)),Se("Quiz deleted!")}catch(B){Se("Error deleting quiz: "+B.message)}M(!1)}},Li=R=>{var X;if(!A)return;const B={id:(((X=A[R])==null?void 0:X.length)||0)+1,question:"",options:["","","",""],correctIndex:0,reference:""};y({...A,[R]:[...A[R]||[],B]})},en=(R,B,X,le)=>{const se={...A};se[R]=[...se[R]],se[R][B]={...se[R][B],[X]:le},y(se)},cs=(R,B,X,le)=>{const se={...A};se[R]=[...se[R]];const ge={...se[R][B]};ge.options=[...ge.options],ge.options[X]=le,se[R][B]=ge,y(se)},lr=(R,B)=>{const X={...A};X[R]=X[R].filter((le,se)=>se!==B),y(X)},Ie=(R,B="")=>{const X={};for(const le of Object.keys(R)){const se=B?`${B}.${le}`:le;typeof R[le]=="object"&&R[le]!==null&&!Array.isArray(R[le])?Object.assign(X,Ie(R[le],se)):X[se]=R[le]}return X},Pe=R=>{const B={};for(const[X,le]of Object.entries(R)){const se=X.split(".");let ge=B;for(let Fe=0;Fe<se.length-1;Fe++)se[Fe]in ge||(ge[se[Fe]]={}),ge=ge[se[Fe]];ge[se[se.length-1]]=le}return B},kn=async()=>{M(!0);try{await li(W,Be),await r(),Se(`Translations (${W}) saved!`)}catch(R){Se("Error saving translations: "+R.message)}M(!1)},ur=(R,B)=>{const X=Ie(Be);X[R]=B,rt(Pe(X))},hr=async()=>{if(!(!Ye.trim()||s[Ye.trim()])){M(!0);try{const R=JSON.parse(JSON.stringify(s.en||{}));await li(Ye.trim(),R),await r(),ie(Ye.trim()),Zt(""),Se(`Language "${Ye.trim()}" added!`)}catch(R){Se("Error adding language: "+R.message)}M(!1)}},Mi=async()=>{if(window.confirm("This will upload all current hardcoded data to Firestore. Continue?")){M(!0);try{const R=await yw();await r(),Se(`Seed complete - Books: ${R.books?"OK":"FAIL"}, Quizzes: ${R.quizzes?"OK":"FAIL"}, Translations: ${R.translations?"OK":"FAIL"}`)}catch(R){Se("Seed error: "+R.message)}M(!1)}};return a?f.jsx("div",{className:"admin-container",children:f.jsx("div",{className:"admin-login",children:f.jsx("p",{children:"Loading..."})})}):i?f.jsxs("div",{className:"admin-container",children:[f.jsxs("header",{className:"admin-header",children:[f.jsx("h1",{children:"Admin Panel"}),f.jsxs("div",{className:"admin-header-actions",children:[f.jsx("span",{className:"admin-user-info",children:i.email}),f.jsx(ae,{onClick:Mi,variant:"secondary",disabled:z,children:"Seed Data"}),f.jsx(ae,{onClick:()=>d(),variant:"secondary",children:"Sign Out"}),f.jsx(ae,{onClick:n,variant:"secondary",children:"Back to App"})]})]}),F&&f.jsx("div",{className:"admin-status-bar",children:F}),f.jsx("nav",{className:"admin-tabs",children:["books","quizzes","translations"].map(R=>f.jsx("button",{className:`admin-tab ${D===R?"active":""}`,onClick:()=>L(R),children:R.charAt(0).toUpperCase()+R.slice(1)},R))}),f.jsxs("div",{className:"admin-content",children:[D==="books"&&f.jsxs("div",{className:"admin-section",children:[f.jsxs("h2",{children:["Old Testament Books (",G.length,")"]}),f.jsx("div",{className:"admin-books-list",children:G.map((R,B)=>f.jsxs("div",{className:"admin-book-item",children:[f.jsx("span",{className:"admin-book-number",children:B+1}),f.jsx("span",{className:"admin-book-name",children:R}),f.jsxs("div",{className:"admin-book-actions",children:[f.jsx("button",{onClick:()=>or(B,-1),disabled:B===0,children:"↑"}),f.jsx("button",{onClick:()=>or(B,1),disabled:B===G.length-1,children:"↓"}),f.jsx("button",{onClick:()=>ir(B),className:"admin-delete-btn",children:"✕"})]})]},B))}),f.jsxs("div",{className:"admin-add-row",children:[f.jsx("input",{type:"text",value:_,onChange:R=>I(R.target.value),placeholder:"New book name",className:"admin-input",onKeyDown:R=>R.key==="Enter"&&Pn()}),f.jsx(ae,{onClick:Pn,variant:"secondary",children:"Add"})]}),f.jsx(ae,{onClick:os,variant:"primary",disabled:z,children:z?"Saving...":"Save Books"})]}),D==="quizzes"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Quizzes"}),f.jsx("div",{className:"admin-quiz-list",children:t.map(R=>{var B,X;return f.jsxs("div",{className:"admin-quiz-item",children:[f.jsxs("button",{className:`admin-quiz-select ${w===R.id?"active":""}`,onClick:()=>Oi(R.id),children:[f.jsx("span",{children:R.icon||"📝"}),f.jsx("span",{children:((B=R.title)==null?void 0:B.en)||R.id}),f.jsxs("span",{className:"admin-quiz-count",children:[((X=R.en)==null?void 0:X.length)||0," Q"]})]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>cr(R.id),children:"✕"})]},R.id)})}),f.jsx(ae,{onClick:()=>Ve(!ce),variant:"secondary",children:ce?"Cancel":"+ New Quiz"}),ce&&f.jsxs("div",{className:"admin-new-quiz-form",children:[f.jsx("input",{className:"admin-input",placeholder:"Quiz ID (e.g., exodus-plagues)",value:K.id,onChange:R=>he({...K,id:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (English)",value:K.titleEn,onChange:R=>he({...K,titleEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Title (Spanish)",value:K.titleEs,onChange:R=>he({...K,titleEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (English)",value:K.descEn,onChange:R=>he({...K,descEn:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Description (Spanish)",value:K.descEs,onChange:R=>he({...K,descEs:R.target.value})}),f.jsx("input",{className:"admin-input",placeholder:"Icon emoji",value:K.icon,onChange:R=>he({...K,icon:R.target.value})}),f.jsx(ae,{onClick:as,variant:"primary",disabled:z,children:"Create Quiz"})]}),A&&w&&f.jsxs("div",{className:"admin-quiz-editor",children:[f.jsxs("h3",{children:["Editing: ",((St=A.title)==null?void 0:St.en)||w]}),f.jsxs("div",{className:"admin-quiz-meta",children:[f.jsxs("label",{children:["Title (EN):",f.jsx("input",{className:"admin-input",value:((ls=A.title)==null?void 0:ls.en)||"",onChange:R=>y({...A,title:{...A.title,en:R.target.value}})})]}),f.jsxs("label",{children:["Title (ES):",f.jsx("input",{className:"admin-input",value:((us=A.title)==null?void 0:us.es)||"",onChange:R=>y({...A,title:{...A.title,es:R.target.value}})})]}),f.jsxs("label",{children:["Icon:",f.jsx("input",{className:"admin-input",value:A.icon||"",onChange:R=>y({...A,icon:R.target.value})})]})]}),["en","es"].map(R=>{var B,X;return f.jsxs("div",{className:"admin-questions-section",children:[f.jsxs("h4",{children:["Questions (",R.toUpperCase(),") - ",((B=A[R])==null?void 0:B.length)||0]}),(X=A[R])==null?void 0:X.map((le,se)=>f.jsxs("div",{className:"admin-question-card",children:[f.jsxs("div",{className:"admin-question-header",children:[f.jsxs("span",{children:["Q",se+1]}),f.jsx("button",{className:"admin-delete-btn",onClick:()=>lr(R,se),children:"✕"})]}),f.jsx("textarea",{className:"admin-textarea",value:le.question,onChange:ge=>en(R,se,"question",ge.target.value),placeholder:"Question text"}),le.options.map((ge,Fe)=>f.jsxs("div",{className:"admin-option-row",children:[f.jsx("input",{type:"radio",name:`correct-${R}-${se}`,checked:le.correctIndex===Fe,onChange:()=>en(R,se,"correctIndex",Fe)}),f.jsx("input",{className:"admin-input",value:ge,onChange:hs=>cs(R,se,Fe,hs.target.value),placeholder:`Option ${String.fromCharCode(65+Fe)}`})]},Fe)),f.jsx("input",{className:"admin-input",value:le.reference||"",onChange:ge=>en(R,se,"reference",ge.target.value),placeholder:"Reference (e.g., Genesis 9:12)"})]},se)),f.jsxs(ae,{onClick:()=>Li(R),variant:"secondary",children:["+ Add Question (",R.toUpperCase(),")"]})]},R)}),f.jsx(ae,{onClick:ar,variant:"primary",disabled:z,children:z?"Saving...":"Save Quiz"})]})]}),D==="translations"&&f.jsxs("div",{className:"admin-section",children:[f.jsx("h2",{children:"Translations"}),f.jsx("div",{className:"admin-lang-selector",children:Object.keys(s).map(R=>f.jsx("button",{className:`admin-tab ${W===R?"active":""}`,onClick:()=>ie(R),children:R.toUpperCase()},R))}),f.jsxs("div",{className:"admin-add-lang",children:[f.jsx("input",{className:"admin-input",value:Ye,onChange:R=>Zt(R.target.value),placeholder:"New language code (e.g., fr)"}),f.jsx(ae,{onClick:hr,variant:"secondary",disabled:z,children:"Add Language"})]}),f.jsx("div",{className:"admin-translations-editor",children:Object.entries(Ie(Be)).map(([R,B])=>f.jsxs("div",{className:"admin-translation-row",children:[f.jsx("label",{className:"admin-translation-key",children:R}),typeof B=="string"&&B.length>60?f.jsx("textarea",{className:"admin-textarea",value:B,onChange:X=>ur(R,X.target.value)}):f.jsx("input",{className:"admin-input",value:typeof B=="string"?B:JSON.stringify(B),onChange:X=>ur(R,X.target.value)})]},R))}),f.jsx(ae,{onClick:kn,variant:"primary",disabled:z,children:z?"Saving...":`Save Translations (${W.toUpperCase()})`})]})]})]}):f.jsx("div",{className:"admin-container",children:f.jsxs("div",{className:"admin-login",children:[f.jsx("h2",{children:"Admin Access"}),f.jsxs("form",{onSubmit:Rn,children:[f.jsx("input",{type:"email",value:m,onChange:R=>g(R.target.value),placeholder:"Email",className:"admin-input",autoFocus:!0}),f.jsx("input",{type:"password",value:E,onChange:R=>S(R.target.value),placeholder:"Password",className:"admin-input"}),f.jsx(ae,{type:"submit",variant:"primary",children:"Sign In"})]}),f.jsx("div",{className:"admin-divider",children:f.jsx("span",{children:"or"})}),f.jsxs("button",{className:"admin-google-btn",onClick:is,children:[f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),f.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),f.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),f.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),P&&f.jsx("p",{className:"admin-status error",children:P}),f.jsx(ae,{onClick:n,variant:"secondary",className:"admin-back-btn",children:"Back"})]})})},Ew=()=>{const{language:n,setLanguage:e,t}=Cn();return f.jsxs("div",{className:"language-selector",children:[f.jsx("button",{className:`lang-button ${n==="en"?"active":""}`,onClick:()=>e("en"),title:t("language.en"),"aria-label":t("language.en"),children:"EN"}),f.jsx("button",{className:`lang-button ${n==="es"?"active":""}`,onClick:()=>e("es"),title:t("language.es"),"aria-label":t("language.es"),children:"ES"})]})};function vw(){const[n,e]=x.useState("home"),[t,s]=x.useState(null),[r,i]=x.useState("order"),[a,c]=x.useState("genesis-covenants"),u=()=>{i("order"),e("quiz"),s(null)},d=()=>{i("complete"),e("completeQuiz"),s(null)},m=()=>{i("covenants"),c("genesis-covenants"),e("covenantsQuiz"),s(null)},g=L=>{i("covenants"),c(L),e("covenantsQuiz"),s(null)},E=L=>{s({...L,quizType:L.quizType||r}),e("results")},S=()=>{e("home"),s(null)},P=L=>{c(L),e("flashcards")},V=()=>{e("admin")},D=()=>{r==="complete"?d():r==="covenants"?g(a):u()};return f.jsx(gw,{children:f.jsx(XT,{children:f.jsx(ew,{children:f.jsx(rw,{children:f.jsxs("div",{className:"app",children:[f.jsx("div",{className:"app-language-selector",children:f.jsx(Ew,{})}),n==="home"&&f.jsx(tw,{onStartOrder:u,onStartComplete:d,onStartCovenants:m,onStartQuiz:g,onStartFlashCards:P,onNavigateAdmin:V}),n==="quiz"&&f.jsx(aw,{onComplete:E,onHome:S}),n==="completeQuiz"&&f.jsx(lw,{onComplete:E,onHome:S}),n==="covenantsQuiz"&&f.jsx(uw,{onComplete:E,onHome:S,quizId:a}),n==="results"&&f.jsx(mw,{score:t,onRetry:D,onHome:S}),n==="flashcards"&&f.jsx(fw,{quizId:a,onHome:S}),n==="admin"&&f.jsx(Iw,{onBack:S})]})})})})})}const Tw="modulepreload",ww=function(n){return"/ITIApp/"+n},pu={},Aw=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=ww(u),u in pu)return;pu[u]=!0;const d=u.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Tw,d||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((E,S)=>{g.addEventListener("load",E),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return r.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function bw(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:a}=n;let c,u;const d=async(g=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(c=await Aw(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/ITIApp/sw.js",{scope:"/ITIApp/",type:"classic"})).catch(g=>{a==null||a(g)}),!c)return;c.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),c.addEventListener("installed",g=>{g.isUpdate||s==null||s()}),c.register({immediate:e}).then(g=>{i?i("/ITIApp/sw.js",g):r==null||r(g)}).catch(g=>{a==null||a(g)})}}return u=m(),d}const Sw=bw({onNeedRefresh(){confirm("New content available. Reload?")&&Sw(!0)},onOfflineReady(){console.log("App ready to work offline")}});po.createRoot(document.getElementById("root")).render(f.jsx(Wf.StrictMode,{children:f.jsx(vw,{})}));
