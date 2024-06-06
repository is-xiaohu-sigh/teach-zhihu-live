/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.jwt=r():e.jwt=r()}(this,(()=>(()=>{var e={49:e=>{var r=1e3,t=60*r,n=60*t,s=24*n,a=7*s;function o(e,r,t,n){var s=r>=1.5*t;return Math.round(e/t)+" "+n+(s?"s":"")}e.exports=function(e,c){c=c||{};var i,u,d=typeof e;if("string"===d&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var c=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return c*a;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*n;case"minutes":case"minute":case"mins":case"min":case"m":return c*t;case"seconds":case"second":case"secs":case"sec":case"s":return c*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}(e);if("number"===d&&isFinite(e))return c.long?(i=e,(u=Math.abs(i))>=s?o(i,u,s,"day"):u>=n?o(i,u,n,"hour"):u>=t?o(i,u,t,"minute"):u>=r?o(i,u,r,"second"):i+" ms"):function(e){var a=Math.abs(e);return a>=s?Math.round(e/s)+"d":a>=n?Math.round(e/n)+"h":a>=t?Math.round(e/t)+"m":a>=r?Math.round(e/r)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";t.r(n),t.d(n,{sign:()=>i,verify:()=>u});var e=t(49),r=t.n(e);function s(e){return btoa(encodeURIComponent(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function a(e){let r=atob(e.replace(/-/g,"+").replace(/_/g,"/"));return decodeURIComponent(r)}function o(e){return(new TextEncoder).encode(e)}async function c(e,r){return s((t=await crypto.subtle.sign({name:"HMAC",hash:"SHA-256"},await crypto.subtle.importKey("raw",o(e),{name:"HMAC",hash:"SHA-256"},!1,["sign"]),o(r)),(new TextDecoder).decode(t)));var t}async function i(e,t,n={}){var a;const o=s(JSON.stringify({alg:"HS256",typ:"JWT",exp:(a=n.expiresIn,"string"==typeof a?Math.floor(Date.now()/1e3)+Math.floor(r()(a)/1e3):"number"==typeof a?Math.floor(Date.now()/1e3)+a:void 0)})),i=s(JSON.stringify(e)),u=`${o}.${i}`;return`${o}.${i}.${s(await c(t,u))}`}async function u(e,r){try{const[t,n,o]=e.split("."),i=`${t}.${n}`;if(s(await c(r,i))!==o)return[!1,"Signature verification failed"];const u=JSON.parse(a(t)),d=Math.floor(Date.now()/1e3);return u.exp&&d>u.exp?[!1,"Token has expired"]:[!0,null,JSON.parse(a(n))]}catch(e){return[!1,e.message]}}})(),n})()));