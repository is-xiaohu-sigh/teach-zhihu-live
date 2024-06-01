import{_ as ve,$ as me,i as ne,c as O,z as ge,e as G,r as C,P as Y,w as V,a0 as H,Y as pe,a1 as he,a2 as ye,a3 as re,g as we,o as be,d as Ee,p as Pe,B as _e,f as Re,u as Te,a4 as Oe,a5 as Ce,a6 as Le}from"./vue-vendor-qW6qXIUx.js";import{_ as Ae,s as Se,a as xe}from"./locale-vendor-WwzBVegS.js";import{C as Ie}from"./comp-vendor-PgTZbLUQ.js";function Rt(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();if(typeof window<"u"){let e=function(){var n=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol  aria-hidden="true" class="iconify iconify--logos" viewBox="0 0 256 257" id="icon-vite"><defs><linearGradient id="icon-vite_a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF" /><stop offset="100%" stop-color="#BD34FE" /></linearGradient><linearGradient id="icon-vite_b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83" /><stop offset="8.333%" stop-color="#FFDD35" /><stop offset="100%" stop-color="#FFA800" /></linearGradient></defs><path fill="url(#icon-vite_a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" /><path fill="url(#icon-vite_b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" /></symbol><symbol  aria-hidden="true" class="iconify iconify--logos" viewBox="0 0 256 198" id="icon-vue"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" /><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" /><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" /></symbol>',n.insertBefore(t,n.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const Be=[{path:"/",component:()=>Ae(()=>import("./home-sWAs4RHR.js"),__vite__mapDeps([0,1,2,3,4]))}],De=ve({history:me("/teach-zhihu-live/"),routes:Be}),Fe={},J=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),oe=()=>Fe,I=e=>e,Me=Object.prototype.toString,$e=e=>Me.call(e),Ne=e=>$e(e)==="[object Object]",W=e=>Array.isArray(e),F=e=>e!==null&&typeof e=="object",X=e=>e instanceof Function,M=e=>e==null,k=typeof window>"u",ae=()=>{var e;return k||M((e=window.document)===null||e===void 0?void 0:e.visibilityState)?!0:window.document.visibilityState==="visible"},je=()=>{var e,n;return(e=!k&&((n=window.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},Q=()=>new Promise(()=>{}),ee=function(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;const o=n.replace(/\[(\d+)\]/g,".$1").split(".");let r=e;for(const i of o)if(r=Object(r)[i],r===void 0)return t;return r},x=e=>pe(e)?e.value:e,We=e=>F(e)?Object.assign(W(e)?[]:{},e):e,N=new Map,Ke=e=>M(e)?void 0:N.get(e),Ge=(e,n,t)=>{const o=N.get(e);o!=null&&o.timer&&clearTimeout(o.timer);const r=setTimeout(()=>N.delete(e),n);N.set(e,{...t,timer:r})};function ie(e,n,t){let o,r,i,s,a,u,l=0,f=!1,c=!1,g=!0;const d=!n&&n!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,F(t)&&(f=!!t.leading,c="maxWait"in t,i=c?Math.max(+t.maxWait||0,n):i,g="trailing"in t?!!t.trailing:g);function w(v){const L=o,S=r;return o=r=void 0,l=v,s=e.apply(S,L),s}function m(v,L){return d?(window.cancelAnimationFrame(a),window.requestAnimationFrame(v)):setTimeout(v,L)}function E(v){if(d)return window.cancelAnimationFrame(v);clearTimeout(v)}function p(v){return l=v,a=m(P,n),f?w(v):s}function b(v){const L=v-u,S=v-l,B=n-L;return c?Math.min(B,i-S):B}function h(v){const L=v-u,S=v-l;return u===void 0||L>=n||L<0||c&&S>=i}function P(){const v=Date.now();if(h(v))return _(v);a=m(P,b(v))}function _(v){return a=void 0,g&&o?w(v):(o=r=void 0,s)}function A(){a!==void 0&&E(a),l=0,o=u=r=a=void 0}function y(){return a===void 0?s:_(Date.now())}function T(){return a!==void 0}function R(){const v=Date.now(),L=h(v);for(var S=arguments.length,B=new Array(S),$=0;$<S;$++)B[$]=arguments[$];if(o=B,r=this,u=v,L){if(a===void 0)return p(u);if(c)return a=m(P,n),w(u)}return a===void 0&&(a=m(P,n)),s}return R.cancel=A,R.flush=y,R.pending=T,R}function se(e,n){for(const t in n)if(n[t]!==void 0){if(!F(n[t])||!F(e[t])||!(t in e)){e[t]=n[t];continue}(Ne(n[t])||W(n[t]))&&se(e[t],n[t])}}function te(e){const n=Object.assign({},e);for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];if(!o.length)return n;for(const i of o)se(n,i);return n}function Ve(e,n,t){let o=!0,r=!0;if(typeof e!="function")throw new TypeError("Expected a function");return F(t)&&(o="leading"in t?!!t.leading:o,r="trailing"in t?!!t.trailing:r),ie(e,n,{leading:o,trailing:r,maxWait:n})}var He=I((e,n)=>{let{debounceInterval:t,debounceOptions:o,manual:r}=n;const i=C(!1),s=C(),a=O(()=>o),u=O(()=>x(t)),l=C(e.context.runAsync);return r||(i.value=!0),Y(f=>{M(u.value)||(s.value=ie(c=>c(),u.value,a.value),e.context.runAsync=function(){for(var c=arguments.length,g=new Array(c),d=0;d<c;d++)g[d]=arguments[d];return new Promise((w,m)=>{i.value?(i.value=!1,l.value(...g).then(w).catch(m)):s.value(()=>{l.value(...g).then(w).catch(m)})})},f(()=>{var c;(c=s.value)===null||c===void 0||c.cancel(),e.context.runAsync=l.value}))}),{onCancel(){var f;(f=s.value)===null||f===void 0||f.cancel()}}}),Qe=I((e,n)=>{let{errorRetryCount:t=0,errorRetryInterval:o=0}=n;const r=C(),i=C(0),s=O(()=>x(t)),a=O(()=>x(o));let u=!1;const l=()=>{i.value=0},f=O(()=>{if(a.value)return a.value;const d=1e3,w=1,m=9,E=Math.floor(Math.random()*2**Math.min(i.value,m)+w);return d*E}),c=()=>{let d;const w=s.value===-1,m=i.value<s.value;return(w||m)&&(w||(i.value+=1),d=setTimeout(()=>{u=!0,e.context.refresh()},f.value)),()=>d&&clearTimeout(d)},g=()=>{r.value&&r.value()};return{onBefore(){u||l(),u=!1,g()},onSuccess(){l()},onError(){r.value=c()},onCancel(){l(),g()}}}),ze=I((e,n)=>{let{ready:t=C(!0),manual:o,defaultParams:r=[]}=n;return V(t,i=>{!o&&i&&e.context.run(...r)},{flush:"sync"}),{onBefore(){if(!(X(t)?t():t.value))return e.loading.value=!1,{isBreak:!0}}}}),Ue=I((e,n)=>{let{refreshDeps:t,refreshDepsAction:o,manual:r}=n;if(t===void 0||W(t)&&t.length===0)return{};const i=W(t)?t:[t];return V(i,()=>{o?o():!r&&e.context.refresh()}),{}}),Ze=I((e,n)=>{let{throttleInterval:t,throttleOptions:o}=n;const r=C(),i=O(()=>x(t)),s=O(()=>o),a=C(e.context.runAsync);return Y(u=>{if(M(t))return{};r.value=Ve(l=>l(),i.value,s.value),e.context.runAsync=function(){for(var l=arguments.length,f=new Array(l),c=0;c<l;c++)f[c]=arguments[c];return new Promise((g,d)=>{r.value(()=>{a.value(...f).then(g).catch(d)})})},u(()=>{var l;(l=r.value)===null||l===void 0||l.cancel(),e.context.runAsync=a.value})}),{onCancel(){var u;(u=r.value)===null||u===void 0||u.cancel()}}});const Ye=(e,n)=>t=>{Object.keys(t).forEach(o=>{e[o].value=t[o]}),n.forEach(o=>o(e))},Je=(e,n)=>()=>{let t=n;for(let o=e.length;o-- >0;)t=e[o](t);return t()},Xe=(e,n,t)=>{var o,r;const{initialData:i,onSuccess:s,onError:a,onBefore:u,onAfter:l}=n,f=C((o=t==null?void 0:t.loading)!==null&&o!==void 0?o:!1),c=H((r=t==null?void 0:t.data)!==null&&r!==void 0?r:i),g=H(t==null?void 0:t.error),d=C(t==null?void 0:t.params),w=C([]),m=H("pending"),E={},p=Ye({status:m,loading:f,data:c,error:g,params:d},[]),b=function(P){for(var _=arguments.length,A=new Array(_>1?_-1:0),y=1;y<_;y++)A[y-1]=arguments[y];if(P==="onQuery"){const T=w.value.map(R=>R.onQuery).filter(Boolean);return{servicePromise:Je(T,A[0])()}}else{const T=w.value.map(R=>{var v;return(v=R[P])===null||v===void 0?void 0:v.call(R,...A)});return Object.assign({},...T)}},h=C(0);return E.runAsync=async function(){for(var P=arguments.length,_=new Array(P),A=0;A<P;A++)_[A]=arguments[A];p({loading:!0,params:_,status:"pending"}),h.value+=1;const y=h.value,{isBreak:T,breakResult:R=Q()}=b("onBefore",_);if(T)return p({status:"settled"}),R;u==null||u(_);try{const v=()=>new Promise(B=>B(e(...d.value)));let{servicePromise:L}=b("onQuery",v);L||(L=v());const S=await L;return y!==h.value?Q():(p({data:S,loading:!1,error:void 0,status:"settled"}),b("onSuccess",S,_),s==null||s(S,_),y===h.value&&b("onAfter",_,S,void 0),l==null||l(_),S)}catch(v){if(y!==h.value)return Q();throw p({loading:!1,error:v,status:"settled"}),b("onError",v,_),a==null||a(v,_),y===h.value&&b("onAfter",_,void 0,v),l==null||l(_),v}},E.run=function(){E.runAsync(...arguments).catch(P=>{a||console.error(P)})},E.cancel=()=>{h.value+=1,p({loading:!1}),b("onCancel")},E.refresh=()=>{E.run(...d.value||[])},E.refreshAsync=()=>E.runAsync(...d.value||[]),E.mutate=P=>{const _=X(P)?P(c.value):P,A=We(_);p({data:A}),b("onMutate",A)},{status:m,loading:f,data:c,error:g,params:d,plugins:w,context:E}};function ke(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const o=ne(J,{}),r={...oe(),...o,...n},{manual:i=!1,defaultParams:s=[]}=r,a=Xe(e,r);if(a.plugins.value=t.map(u=>u(a,r)),!i){const u=a.params.value||s;a.context.run(...u)}return G(()=>{a.context.cancel()}),{loading:a.loading,data:a.data,error:a.error,params:a.params,cancel:a.context.cancel,refresh:a.context.refresh,refreshAsync:a.context.refreshAsync,mutate:a.context.mutate,run:a.context.run,runAsync:a.context.runAsync}}const j=new Map,qe=(e,n)=>{j.set(e,n),n.then(t=>(j.delete(e),t)).catch(()=>{j.delete(e)})},et=e=>j.get(e),D=new Map,tt=(e,n)=>{D.has(e)&&D.get(e).forEach(t=>t(n))},nt=(e,n)=>(D.has(e)?D.get(e).push(n):D.set(e,[n]),()=>{const t=D.get(e).indexOf(n);D.get(e).splice(t,1)});var rt=I((e,n)=>{let{cacheKey:t,cacheTime:o=6e5,staleTime:r=0,getCache:i,setCache:s}=n;if(!t)return{};const a=X(t)?t:()=>t,u=C(()=>{});let l;const f=p=>i?i(p):Ke(p),c=(p,b,h)=>{s?s(p,h):Ge(p,b,h),tt(p,h.data)},g=p=>r===-1||p+r>new Date().getTime(),d=(p,b)=>Object.prototype.hasOwnProperty.call(p,b),w=p=>{const b=a(p);return nt(b,h=>{e.data.value=h})},m=a(),E=f(m);return E&&d(E,"data")&&(e.data.value=E.data,e.params.value=E.params),m&&(u.value=w()),G(()=>{u.value()}),{onBefore(p){const b=a(p),h=f(b);if(!h||!d(h,"data"))return{};if(g(h.time))return e.data.value=h.data,e.loading.value=!1,{isBreak:!0,breakResult:h.data};e.data.value=h.data},onQuery(p){const b=e.params.value,h=a(b);let P=et(h);return P&&P!==l?()=>P:(P=p(),l=P,qe(h,P),()=>P)},onSuccess(p,b){const h=a(b);h&&(u.value(),c(h,o,{data:p,params:b,time:new Date().getTime()}),u.value=w(b))},onMutate(p){const b=a(e.params.value);b&&(u.value(),c(b,o,{data:p,params:e.params.value,time:new Date().getTime()}),u.value=w(e.params.value))}}});function ot(e){let n,t;class o extends Promise{constructor(i){super(i),this.cancel=()=>{t(),clearTimeout(n)}}}return new o(r=>{t=r,n=setTimeout(t,e)})}function z(){return new Date().getTime()}var at=I((e,n)=>{let{loadingDelay:t=0,loadingKeep:o=0}=n;const r=C(()=>{}),i=O(()=>x(t)),s=O(()=>x(o));let a=0,u={};const l=()=>{let f;return i.value&&(f=setTimeout(()=>{e.status.value==="pending"&&(e.loading.value=!0)},i.value)),()=>f&&clearTimeout(f)};return{onBefore(){e.loading.value=!i.value,r.value(),r.value=l(),a=z()},onQuery(f){if(!s.value)return()=>f();u=ot(s.value+i.value);const c=async()=>{try{const d=await f();return z()-a<=i.value&&u.cancel(),Promise.resolve(d)}catch(d){return z()-a<=i.value&&u.cancel(),Promise.reject(d)}},g=Promise.allSettled([c(),u]).then(d=>{const w=d[0];return w.status==="fulfilled"?w.value:Promise.reject(w.reason)});return()=>g},onCancel(){r.value()},onAfter(){r.value()}}}),U;const ue=new Set,le=new Set,ce=new Set,K=(e,n)=>{let t;switch(e){case"FOCUS_LISTENER":t=ue;break;case"RECONNECT_LISTENER":t=ce;break;case"VISIBLE_LISTENER":t=le;break}if(!t.has(n))return t.add(n),()=>{t.delete(n)}},Z=e=>{e.forEach(n=>{n()})};!k&&(U=window)!==null&&U!==void 0&&U.addEventListener&&(window.addEventListener("visibilitychange",()=>{ae()&&Z(le)},!1),window.addEventListener("focus",()=>Z(ue),!1),window.addEventListener("online",()=>Z(ce),!1));var it=I((e,n)=>{let{pollingInterval:t,pollingWhenHidden:o=!1,pollingWhenOffline:r=!1,errorRetryCount:i=0}=n;const s=C(),a=C(!1),u=O(()=>x(t)),l=O(()=>x(i)),f=[],c=m=>{m&&f.push(m)},g=()=>(o||ae())&&(r||je()),d=m=>{if(e.error.value&&l.value!==0)return;let E;if(!M(u.value)&&u.value>=0)if(g())E=setTimeout(m,u.value);else{a.value=!0;return}return()=>E&&clearTimeout(E)},w=()=>{a.value&&g()&&(e.context.refresh(),a.value=!1)};return V(u,()=>{s.value&&(s.value(),s.value=d(()=>e.context.refresh()))}),o||c(K("VISIBLE_LISTENER",w)),r||c(K("RECONNECT_LISTENER",w)),G(()=>{f.forEach(m=>m())}),{onBefore(){var m;(m=s.value)===null||m===void 0||m.call(s)},onCancel(){var m;(m=s.value)===null||m===void 0||m.call(s)},onAfter(){s.value=d(()=>e.context.refresh())}}});const st=(e,n)=>{let t=!1;return function(){t||(t=!0,e(...arguments),setTimeout(()=>{t=!1},n))}};var ut=I((e,n)=>{let{refreshOnWindowFocus:t=!1,refocusTimespan:o=5e3}=n;const r=O(()=>x(t)),i=O(()=>x(o)),s=[],a=l=>{l&&s.push(l)},u=()=>{s.forEach(l=>l())};return Y(()=>{if(u(),r.value){const l=st(e.context.refresh,i.value);a(K("VISIBLE_LISTENER",l)),a(K("FOCUS_LISTENER",l))}}),G(()=>{u()}),{}});function lt(e,n,t){return ke(e,n,[...t||[],at,Qe,He,it,Ze,ut,Ue,ze,rt])}function Lt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t={currentKey:"current",pageSizeKey:"pageSize",totalKey:"total",totalPageKey:"totalPage"},o=ne(J,{}),{pagination:r,...i}=n,{currentKey:s,pageSizeKey:a,totalKey:u,totalPageKey:l}=te(t,oe().pagination||{},o.pagination||{},r||{}),f=te({defaultParams:[{[s]:1,[a]:10}]},i),{data:c,params:g,run:d,...w}=lt(e,f),m=y=>{const[T,...R]=g.value||[],L=[{...T,...y},...R];d(...L)},E=y=>{m({[s]:y})},p=y=>{m({[a]:y})},b=(y,T)=>{m({[s]:y,[a]:T})},h=O(()=>ee(c.value,u,0)),P=O({get:()=>{var y,T,R;return(y=(T=g.value)===null||T===void 0||(R=T[0])===null||R===void 0?void 0:R[s])!==null&&y!==void 0?y:f.defaultParams[0][s]},set:y=>{E(y)}}),_=O({get:()=>{var y,T,R;return(y=(T=g.value)===null||T===void 0||(R=T[0])===null||R===void 0?void 0:R[a])!==null&&y!==void 0?y:f.defaultParams[0][a]},set:y=>{p(y)}}),A=O(()=>ee(c.value,l,Math.ceil(h.value/_.value)));return{data:c,params:g,current:P,pageSize:_,total:h,totalPage:A,run:d,changeCurrent:E,changePageSize:p,changePagination:b,...w}}var ct=e=>{ge(J,e)};function ft(e){return he()?(ye(e),!0):!1}function fe(e){return typeof e=="function"?e():re(e)}const dt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const vt=Object.prototype.toString,mt=e=>vt.call(e)==="[object Object]",gt=()=>{};function pt(e){var n;const t=fe(e);return(n=t==null?void 0:t.$el)!=null?n:t}const de=dt?window:void 0;function ht(...e){let n,t,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,r]=e,n=de):[n,t,o,r]=e,!n)return gt;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],s=()=>{i.forEach(f=>f()),i.length=0},a=(f,c,g,d)=>(f.addEventListener(c,g,d),()=>f.removeEventListener(c,g,d)),u=V(()=>[pt(n),fe(r)],([f,c])=>{if(s(),!f)return;const g=mt(c)?{...c}:c;i.push(...t.flatMap(d=>o.map(w=>a(f,d,w,g))))},{immediate:!0,flush:"post"}),l=()=>{u(),s()};return ft(l),l}function yt(){const e=C(!1);return we()&&be(()=>{e.value=!0}),e}function wt(e){const n=yt();return O(()=>(n.value,!!e()))}function bt(e={}){const{window:n=de}=e,t=n==null?void 0:n.navigator,o=wt(()=>t&&"language"in t),r=C(t==null?void 0:t.language);return ht(n,"languagechange",()=>{t&&(r.value=t.language)}),{isSupported:o,language:r}}const Et=Ee({__name:"App",setup(e){var t;const{language:n}=bt();return Se(((t=n.value)==null?void 0:t.split("-")[0])||""),ct({cacheTime:1e3*60*10,loadingDelay:0,loadingKeep:100,pollingWhenHidden:!0,pollingWhenOffline:!0,manual:!0}),(o,r)=>{const i=Ie;return Re(),Pe(i,null,{default:_e(()=>[Te(re(Oe))]),_:1})}}});function Pt(e){return{all:e=e||new Map,on:function(n,t){var o=e.get(n);o?o.push(t):e.set(n,[t])},off:function(n,t){var o=e.get(n);o&&(t?o.splice(o.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var o=e.get(n);o&&o.slice().map(function(r){r(t)}),(o=e.get("*"))&&o.slice().map(function(r){r(n,t)})}}}const _t=Pt(),q=Ce(Et);q.provide("emitter",_t);q.use(Le()).use(De).use(xe());q.mount("#app");export{Rt as __vite_legacy_guard,Lt as a,lt as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/home-sWAs4RHR.js","assets/vue-vendor-qW6qXIUx.js","assets/comp-vendor-PgTZbLUQ.js","assets/locale-vendor-WwzBVegS.js","assets/home-f6ydUtlo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}