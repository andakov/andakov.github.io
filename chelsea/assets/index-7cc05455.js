(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const st={},ar=[],gn=()=>{},Rh=()=>!1,wh=/^on[^a-z]/,aa=t=>wh.test(t),Jo=t=>t.startsWith("onUpdate:"),At=Object.assign,Qo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ch=Object.prototype.hasOwnProperty,je=(t,e)=>Ch.call(t,e),Ie=Array.isArray,or=t=>ss(t)==="[object Map]",oa=t=>ss(t)==="[object Set]",zl=t=>ss(t)==="[object Date]",ke=t=>typeof t=="function",_t=t=>typeof t=="string",Xr=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",Ef=t=>it(t)&&ke(t.then)&&ke(t.catch),Mf=Object.prototype.toString,ss=t=>Mf.call(t),Lh=t=>ss(t).slice(8,-1),Sf=t=>ss(t)==="[object Object]",el=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ph=/-(\w)/g,Rn=la(t=>t.replace(Ph,(e,n)=>n?n.toUpperCase():"")),Ih=/\B([A-Z])/g,Mr=la(t=>t.replace(Ih,"-$1").toLowerCase()),ca=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=la(t=>t?`on${ca(t)}`:""),Yr=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gl;const mo=()=>Gl||(Gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tl(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=_t(i)?Oh(i):tl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(_t(t))return t;if(it(t))return t}}const Dh=/;(?![^(]*\))/g,Nh=/:([^]+)/,Uh=/\/\*[^]*?\*\//g;function Oh(t){const e={};return t.replace(Uh,"").split(Dh).forEach(n=>{if(n){const i=n.split(Nh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function as(t){let e="";if(_t(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=as(t[n]);i&&(e+=i+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bh=Zo(Fh);function yf(t){return!!t||t===""}function kh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ua(t[i],e[i]);return n}function ua(t,e){if(t===e)return!0;let n=zl(t),i=zl(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Xr(t),i=Xr(e),n||i)return t===e;if(n=Ie(t),i=Ie(e),n||i)return n&&i?kh(t,e):!1;if(n=it(t),i=it(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ua(t[a],e[a]))return!1}}return String(t)===String(e)}function Hh(t,e){return t.findIndex(n=>ua(n,e))}const Or=t=>_t(t)?t:t==null?"":Ie(t)||it(t)&&(t.toString===Mf||!ke(t.toString))?JSON.stringify(t,bf,2):String(t),bf=(t,e)=>e&&e.__v_isRef?bf(t,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:oa(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Ie(e)&&!Sf(e)?String(e):e;let un;class Af{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zh(t){return new Af(t)}function Gh(t,e=un){e&&e.active&&e.effects.push(t)}function Vh(){return un}const nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rf=t=>(t.w&ci)>0,wf=t=>(t.n&ci)>0,Wh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ci},Xh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Rf(r)&&!wf(r)?r.delete(t):e[n++]=r,r.w&=~ci,r.n&=~ci}e.length=n}},_o=new WeakMap;let Fr=0,ci=1;const go=30;let hn;const Ci=Symbol(""),vo=Symbol("");class il{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gh(this,i)}run(){if(!this.active)return this.fn();let e=hn,n=ri;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,ri=!0,ci=1<<++Fr,Fr<=go?Wh(this):Vl(this),this.fn()}finally{Fr<=go&&Xh(this),ci=1<<--Fr,hn=this.parent,ri=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Vl(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ri=!0;const Cf=[];function Sr(){Cf.push(ri),ri=!1}function Tr(){const t=Cf.pop();ri=t===void 0?!0:t}function jt(t,e,n){if(ri&&hn){let i=_o.get(t);i||_o.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=nl()),Lf(r)}}function Lf(t,e){let n=!1;Fr<=go?wf(t)||(t.n|=ci,n=!Rf(t)):n=!t.has(hn),n&&(t.add(hn),hn.deps.push(t))}function Wn(t,e,n,i,r,s){const a=_o.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&Ie(t)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":Ie(t)?el(n)&&o.push(a.get("length")):(o.push(a.get(Ci)),or(t)&&o.push(a.get(vo)));break;case"delete":Ie(t)||(o.push(a.get(Ci)),or(t)&&o.push(a.get(vo)));break;case"set":or(t)&&o.push(a.get(Ci));break}if(o.length===1)o[0]&&xo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);xo(nl(l))}}function xo(t,e){const n=Ie(t)?t:[...t];for(const i of n)i.computed&&Wl(i);for(const i of n)i.computed||Wl(i)}function Wl(t,e){(t!==hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yh=Zo("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xr)),$h=rl(),qh=rl(!1,!0),jh=rl(!0),Xl=Kh();function Kh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ze(this);for(let s=0,a=this.length;s<a;s++)jt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr();const i=Ze(this)[e].apply(this,n);return Tr(),i}}),t}function Zh(t){const e=Ze(this);return jt(e,"has",t),e.hasOwnProperty(t)}function rl(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?hp:Of:e?Uf:Nf).get(i))return i;const a=Ie(i);if(!t){if(a&&je(Xl,r))return Reflect.get(Xl,r,s);if(r==="hasOwnProperty")return Zh}const o=Reflect.get(i,r,s);return(Xr(r)?Pf.has(r):Yh(r))||(t||jt(i,"get",r),e)?o:yt(o)?a&&el(r)?o:o.value:it(o)?t?Ff(o):ol(o):o}}const Jh=If(),Qh=If(!0);function If(t=!1){return function(n,i,r,s){let a=n[i];if(dr(a)&&yt(a)&&!yt(r))return!1;if(!t&&(!ea(r)&&!dr(r)&&(a=Ze(a),r=Ze(r)),!Ie(n)&&yt(a)&&!yt(r)))return a.value=r,!0;const o=Ie(n)&&el(i)?Number(i)<n.length:je(n,i),l=Reflect.set(n,i,r,s);return n===Ze(s)&&(o?Yr(r,a)&&Wn(n,"set",i,r):Wn(n,"add",i,r)),l}}function ep(t,e){const n=je(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Wn(t,"delete",e,void 0),i}function tp(t,e){const n=Reflect.has(t,e);return(!Xr(e)||!Pf.has(e))&&jt(t,"has",e),n}function np(t){return jt(t,"iterate",Ie(t)?"length":Ci),Reflect.ownKeys(t)}const Df={get:$h,set:Jh,deleteProperty:ep,has:tp,ownKeys:np},ip={get:jh,set(t,e){return!0},deleteProperty(t,e){return!0}},rp=At({},Df,{get:qh,set:Qh}),sl=t=>t,fa=t=>Reflect.getPrototypeOf(t);function _s(t,e,n=!1,i=!1){t=t.__v_raw;const r=Ze(t),s=Ze(e);n||(e!==s&&jt(r,"get",e),jt(r,"get",s));const{has:a}=fa(r),o=i?sl:n?cl:$r;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,i=Ze(n),r=Ze(t);return e||(t!==r&&jt(i,"has",t),jt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function vs(t,e=!1){return t=t.__v_raw,!e&&jt(Ze(t),"iterate",Ci),Reflect.get(t,"size",t)}function Yl(t){t=Ze(t);const e=Ze(this);return fa(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function $l(t,e){e=Ze(e);const n=Ze(this),{has:i,get:r}=fa(n);let s=i.call(n,t);s||(t=Ze(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?Yr(e,a)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function ql(t){const e=Ze(this),{has:n,get:i}=fa(e);let r=n.call(e,t);r||(t=Ze(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Wn(e,"delete",t,void 0),s}function jl(){const t=Ze(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function xs(t,e){return function(i,r){const s=this,a=s.__v_raw,o=Ze(a),l=e?sl:t?cl:$r;return!t&&jt(o,"iterate",Ci),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Es(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),a=or(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?sl:e?cl:$r;return!e&&jt(s,"iterate",l?vo:Ci),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function sp(){const t={get(s){return _s(this,s)},get size(){return vs(this)},has:gs,add:Yl,set:$l,delete:ql,clear:jl,forEach:xs(!1,!1)},e={get(s){return _s(this,s,!1,!0)},get size(){return vs(this)},has:gs,add:Yl,set:$l,delete:ql,clear:jl,forEach:xs(!1,!0)},n={get(s){return _s(this,s,!0)},get size(){return vs(this,!0)},has(s){return gs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xs(!0,!1)},i={get(s){return _s(this,s,!0,!0)},get size(){return vs(this,!0)},has(s){return gs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Es(s,!1,!1),n[s]=Es(s,!0,!1),e[s]=Es(s,!1,!0),i[s]=Es(s,!0,!0)}),[t,n,e,i]}const[ap,op,lp,cp]=sp();function al(t,e){const n=e?t?cp:lp:t?op:ap;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(je(n,r)&&r in i?n:i,r,s)}const up={get:al(!1,!1)},fp={get:al(!1,!0)},dp={get:al(!0,!1)},Nf=new WeakMap,Uf=new WeakMap,Of=new WeakMap,hp=new WeakMap;function pp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mp(t){return t.__v_skip||!Object.isExtensible(t)?0:pp(Lh(t))}function ol(t){return dr(t)?t:ll(t,!1,Df,up,Nf)}function _p(t){return ll(t,!1,rp,fp,Uf)}function Ff(t){return ll(t,!0,ip,dp,Of)}function ll(t,e,n,i,r){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=mp(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function lr(t){return dr(t)?lr(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function ea(t){return!!(t&&t.__v_isShallow)}function Bf(t){return lr(t)||dr(t)}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function kf(t){return Qs(t,"__v_skip",!0),t}const $r=t=>it(t)?ol(t):t,cl=t=>it(t)?Ff(t):t;function Hf(t){ri&&hn&&(t=Ze(t),Lf(t.dep||(t.dep=nl())))}function zf(t,e){t=Ze(t);const n=t.dep;n&&xo(n)}function yt(t){return!!(t&&t.__v_isRef===!0)}function St(t){return Gf(t,!1)}function gp(t){return Gf(t,!0)}function Gf(t,e){return yt(t)?t:new vp(t,e)}class vp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ze(e),this._value=n?e:$r(e)}get value(){return Hf(this),this._value}set value(e){const n=this.__v_isShallow||ea(e)||dr(e);e=n?e:Ze(e),Yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$r(e),zf(this))}}function Eo(t){return yt(t)?t.value:t}const xp={get:(t,e,n)=>Eo(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return yt(r)&&!yt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Vf(t){return lr(t)?t:new Proxy(t,xp)}class Ep{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new il(e,()=>{this._dirty||(this._dirty=!0,zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return Hf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Mp(t,e,n=!1){let i,r;const s=ke(t);return s?(i=t,r=gn):(i=t.get,r=t.set),new Ep(i,r,s||!r,n)}function si(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){da(s,e,n)}return r}function vn(t,e,n,i){if(ke(t)){const s=si(t,e,n,i);return s&&Ef(s)&&s.catch(a=>{da(a,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(vn(t[s],e,n,i));return r}function da(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){si(l,null,10,[t,a,o]);return}}Sp(t,n,r,i)}function Sp(t,e,n,i=!0){console.error(t)}let qr=!1,Mo=!1;const It=[];let bn=0;const cr=[];let kn=null,yi=0;const Wf=Promise.resolve();let ul=null;function Tp(t){const e=ul||Wf;return t?e.then(this?t.bind(this):t):e}function yp(t){let e=bn+1,n=It.length;for(;e<n;){const i=e+n>>>1;jr(It[i])<t?e=i+1:n=i}return e}function fl(t){(!It.length||!It.includes(t,qr&&t.allowRecurse?bn+1:bn))&&(t.id==null?It.push(t):It.splice(yp(t.id),0,t),Xf())}function Xf(){!qr&&!Mo&&(Mo=!0,ul=Wf.then($f))}function bp(t){const e=It.indexOf(t);e>bn&&It.splice(e,1)}function Ap(t){Ie(t)?cr.push(...t):(!kn||!kn.includes(t,t.allowRecurse?yi+1:yi))&&cr.push(t),Xf()}function Kl(t,e=qr?bn+1:0){for(;e<It.length;e++){const n=It[e];n&&n.pre&&(It.splice(e,1),e--,n())}}function Yf(t){if(cr.length){const e=[...new Set(cr)];if(cr.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,i)=>jr(n)-jr(i)),yi=0;yi<kn.length;yi++)kn[yi]();kn=null,yi=0}}const jr=t=>t.id==null?1/0:t.id,Rp=(t,e)=>{const n=jr(t)-jr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $f(t){Mo=!1,qr=!0,It.sort(Rp);const e=gn;try{for(bn=0;bn<It.length;bn++){const n=It[bn];n&&n.active!==!1&&si(n,null,14)}}finally{bn=0,It.length=0,Yf(),qr=!1,ul=null,(It.length||cr.length)&&$f()}}function wp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=i[u]||st;h&&(r=n.map(m=>_t(m)?m.trim():m)),d&&(r=n.map(Tf))}let o,l=i[o=La(e)]||i[o=La(Rn(e))];!l&&s&&(l=i[o=La(Mr(e))]),l&&vn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,vn(c,t,6,r)}}function qf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!ke(t)){const l=c=>{const u=qf(c,e,!0);u&&(o=!0,At(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(it(t)&&i.set(t,null),null):(Ie(s)?s.forEach(l=>a[l]=null):At(a,s),it(t)&&i.set(t,a),a)}function ha(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(t,e[0].toLowerCase()+e.slice(1))||je(t,Mr(e))||je(t,e))}let en=null,pa=null;function ta(t){const e=en;return en=t,pa=t&&t.type.__scopeId||null,e}function dl(t){pa=t}function hl(){pa=null}function Cp(t,e=en,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&oc(-1);const s=ta(e);let a;try{a=t(...r)}finally{ta(s),i._d&&oc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Pa(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:T,inheritAttrs:E}=t;let p,f;const b=ta(t);try{if(n.shapeFlag&4){const M=r||i;p=Tn(u.call(M,M,d,s,m,h,T)),f=l}else{const M=e;p=Tn(M.length>1?M(s,{attrs:l,slots:o,emit:c}):M(s,null)),f=e.props?l:Lp(l)}}catch(M){Gr.length=0,da(M,t,1),p=kt(Kr)}let y=p;if(f&&E!==!1){const M=Object.keys(f),{shapeFlag:R}=y;M.length&&R&7&&(a&&M.some(Jo)&&(f=Pp(f,a)),y=hr(y,f))}return n.dirs&&(y=hr(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),p=y,ta(b),p}const Lp=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},Pp=(t,e)=>{const n={};for(const i in t)(!Jo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ip(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(a[h]!==i[h]&&!ha(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Zl(i,a,c):!0:!!a;return!1}function Zl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ha(n,s))return!0}return!1}function Dp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Np=t=>t.__isSuspense;function Up(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):Ap(t)}const Ms={};function Li(t,e,n){return jf(t,e,n)}function jf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:a}=st){var o;const l=Vh()===((o=Tt)==null?void 0:o.scope)?Tt:null;let c,u=!1,d=!1;if(yt(t)?(c=()=>t.value,u=ea(t)):lr(t)?(c=()=>t,i=!0):Ie(t)?(d=!0,u=t.some(M=>lr(M)||ea(M)),c=()=>t.map(M=>{if(yt(M))return M.value;if(lr(M))return Ri(M);if(ke(M))return si(M,l,2)})):ke(t)?e?c=()=>si(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),vn(t,l,3,[m])}:c=gn,e&&i){const M=c;c=()=>Ri(M())}let h,m=M=>{h=b.onStop=()=>{si(M,l,4)}},T;if(Qr)if(m=gn,e?n&&vn(e,l,3,[c(),d?[]:void 0,m]):c(),r==="sync"){const M=Cm();T=M.__watcherHandles||(M.__watcherHandles=[])}else return gn;let E=d?new Array(t.length).fill(Ms):Ms;const p=()=>{if(b.active)if(e){const M=b.run();(i||u||(d?M.some((R,w)=>Yr(R,E[w])):Yr(M,E)))&&(h&&h(),vn(e,l,3,[M,E===Ms?void 0:d&&E[0]===Ms?[]:E,m]),E=M)}else b.run()};p.allowRecurse=!!e;let f;r==="sync"?f=p:r==="post"?f=()=>Gt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),f=()=>fl(p));const b=new il(c,f);e?n?p():E=b.run():r==="post"?Gt(b.run.bind(b),l&&l.suspense):b.run();const y=()=>{b.stop(),l&&l.scope&&Qo(l.scope.effects,b)};return T&&T.push(y),y}function Op(t,e,n){const i=this.proxy,r=_t(t)?t.includes(".")?Kf(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const a=Tt;pr(this);const o=jf(r,s.bind(i),n);return a?pr(a):Pi(),o}function Kf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ri(t,e){if(!it(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),yt(t))Ri(t.value,e);else if(Ie(t))for(let n=0;n<t.length;n++)Ri(t[n],e);else if(oa(t)||or(t))t.forEach(n=>{Ri(n,e)});else if(Sf(t))for(const n in t)Ri(t[n],e);return t}function Fp(t,e){const n=en;if(n===null)return t;const i=va(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=st]=e[s];a&&(ke(a)&&(a={mounted:a,updated:a}),a.deep&&Ri(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function _i(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Sr(),vn(l,n,8,[t.el,o,t,e]),Tr())}}function pl(t,e){return ke(t)?(()=>At({name:t.name},e,{setup:t}))():t}const js=t=>!!t.type.__asyncLoader,Zf=t=>t.type.__isKeepAlive;function Bp(t,e){Jf(t,"a",e)}function kp(t,e){Jf(t,"da",e)}function Jf(t,e,n=Tt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Zf(r.parent.vnode)&&Hp(i,e,n,r),r=r.parent}}function Hp(t,e,n,i){const r=ma(e,t,i,!0);_l(()=>{Qo(i[e],r)},n)}function ma(t,e,n=Tt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;Sr(),pr(n);const o=vn(e,n,t,a);return Pi(),Tr(),o});return i?r.unshift(s):r.push(s),s}}const Xn=t=>(e,n=Tt)=>(!Qr||t==="sp")&&ma(t,(...i)=>e(...i),n),Qf=Xn("bm"),ml=Xn("m"),zp=Xn("bu"),Gp=Xn("u"),ed=Xn("bum"),_l=Xn("um"),Vp=Xn("sp"),Wp=Xn("rtg"),Xp=Xn("rtc");function Yp(t,e=Tt){ma("ec",t,e)}const td="components",nd=Symbol.for("v-ndc");function $p(t){return _t(t)?qp(td,t,!1)||t:t||nd}function qp(t,e,n=!0,i=!1){const r=en||Tt;if(r){const s=r.type;if(t===td){const o=Am(s,!1);if(o&&(o===e||o===Rn(e)||o===ca(Rn(e))))return s}const a=Jl(r[t]||s[t],e)||Jl(r.appContext[t],e);return!a&&i?s:a}}function Jl(t,e){return t&&(t[e]||t[Rn(e)]||t[ca(Rn(e))])}function Ia(t,e,n,i){let r;const s=n&&n[i];if(Ie(t)||_t(t)){r=new Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=e(t[a],a,void 0,s&&s[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(it(t))if(t[Symbol.iterator])r=Array.from(t,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(t);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(t[c],c,o,s&&s[o])}}else r=[];return n&&(n[i]=r),r}const So=t=>t?hd(t)?va(t)||t.proxy:So(t.parent):null,Hr=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>So(t.parent),$root:t=>So(t.root),$emit:t=>t.emit,$options:t=>gl(t),$forceUpdate:t=>t.f||(t.f=()=>fl(t.update)),$nextTick:t=>t.n||(t.n=Tp.bind(t.proxy)),$watch:t=>Op.bind(t)}),Da=(t,e)=>t!==st&&!t.__isScriptSetup&&je(t,e),jp={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Da(i,e))return a[e]=1,i[e];if(r!==st&&je(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(n!==st&&je(n,e))return a[e]=4,n[e];To&&(a[e]=0)}}const u=Hr[e];let d,h;if(u)return e==="$attrs"&&jt(t,"get",e),u(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==st&&je(n,e))return a[e]=4,n[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Da(r,e)?(r[e]=n,!0):i!==st&&je(i,e)?(i[e]=n,!0):je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==st&&je(t,a)||Da(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(Hr,a)||je(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ql(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let To=!0;function Kp(t){const e=gl(t),n=t.proxy,i=t.ctx;To=!1,e.beforeCreate&&ec(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:T,activated:E,deactivated:p,beforeDestroy:f,beforeUnmount:b,destroyed:y,unmounted:M,render:R,renderTracked:w,renderTriggered:I,errorCaptured:z,serverPrefetch:A,expose:P,inheritAttrs:le,components:oe,directives:B,filters:Z}=e;if(c&&Zp(c,i,null),a)for(const V in a){const G=a[V];ke(G)&&(i[V]=G.bind(n))}if(r){const V=r.call(n,n);it(V)&&(t.data=ol(V))}if(To=!0,s)for(const V in s){const G=s[V],ce=ke(G)?G.bind(n,n):ke(G.get)?G.get.bind(n,n):gn,ae=!ke(G)&&ke(G.set)?G.set.bind(n):gn,H=Xt({get:ce,set:ae});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>H.value,set:X=>H.value=X})}if(o)for(const V in o)id(o[V],i,n,V);if(l){const V=ke(l)?l.call(n):l;Reflect.ownKeys(V).forEach(G=>{im(G,V[G])})}u&&ec(u,t,"c");function ne(V,G){Ie(G)?G.forEach(ce=>V(ce.bind(n))):G&&V(G.bind(n))}if(ne(Qf,d),ne(ml,h),ne(zp,m),ne(Gp,T),ne(Bp,E),ne(kp,p),ne(Yp,z),ne(Xp,w),ne(Wp,I),ne(ed,b),ne(_l,M),ne(Vp,A),Ie(P))if(P.length){const V=t.exposed||(t.exposed={});P.forEach(G=>{Object.defineProperty(V,G,{get:()=>n[G],set:ce=>n[G]=ce})})}else t.exposed||(t.exposed={});R&&t.render===gn&&(t.render=R),le!=null&&(t.inheritAttrs=le),oe&&(t.components=oe),B&&(t.directives=B)}function Zp(t,e,n=gn){Ie(t)&&(t=yo(t));for(const i in t){const r=t[i];let s;it(r)?"default"in r?s=zr(r.from||i,r.default,!0):s=zr(r.from||i):s=zr(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ec(t,e,n){vn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function id(t,e,n,i){const r=i.includes(".")?Kf(n,i):()=>n[i];if(_t(t)){const s=e[t];ke(s)&&Li(r,s)}else if(ke(t))Li(r,t.bind(n));else if(it(t))if(Ie(t))t.forEach(s=>id(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&Li(r,s,t)}}function gl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>na(l,c,a,!0)),na(l,e,a)),it(e)&&s.set(e,l),l}function na(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&na(t,s,n,!0),r&&r.forEach(a=>na(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Jp[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Jp={data:tc,props:nc,emits:nc,methods:Br,computed:Br,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Br,directives:Br,watch:em,provide:tc,inject:Qp};function tc(t,e){return e?t?function(){return At(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function Qp(t,e){return Br(yo(t),yo(e))}function yo(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?At(Object.create(null),t,e):e}function nc(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:At(Object.create(null),Ql(t),Ql(e??{})):e}function em(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const i in e)n[i]=Ut(t[i],e[i]);return n}function rd(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(t,e){return function(i,r=null){ke(i)||(i=At({},i)),r!=null&&!it(r)&&(r=null);const s=rd(),a=new Set;let o=!1;const l=s.app={_uid:tm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Lm,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(l,...u)):ke(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const h=kt(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,d),o=!0,l._container=c,c.__vue_app__=l,va(h.component)||h.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ia=l;try{return c()}finally{ia=null}}};return l}}let ia=null;function im(t,e){if(Tt){let n=Tt.provides;const i=Tt.parent&&Tt.parent.provides;i===n&&(n=Tt.provides=Object.create(i)),n[t]=e}}function zr(t,e,n=!1){const i=Tt||en;if(i||ia){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ia._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}function rm(t,e,n,i=!1){const r={},s={};Qs(s,_a,1),t.propsDefaults=Object.create(null),sd(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:_p(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function sm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Ze(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ha(t.emitsOptions,h))continue;const m=e[h];if(l)if(je(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const T=Rn(h);r[T]=bo(l,o,T,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{sd(t,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!je(e,d)&&((u=Mr(d))===d||!je(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=bo(l,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!je(e,d))&&(delete s[d],c=!0)}c&&Wn(t,"set","$attrs")}function sd(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;r&&je(r,u=Rn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:ha(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(n),c=o||st;for(let u=0;u<s.length;u++){const d=s[u];n[d]=bo(r,l,d,c[d],t,!je(c,d))}}return a}function bo(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(pr(r),i=c[n]=l.call(null,e),Pi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Mr(n))&&(i=!0))}return i}function ad(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!ke(t)){const u=d=>{l=!0;const[h,m]=ad(d,e,!0);At(a,h),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return it(t)&&i.set(t,ar),ar;if(Ie(s))for(let u=0;u<s.length;u++){const d=Rn(s[u]);ic(d)&&(a[d]=st)}else if(s)for(const u in s){const d=Rn(u);if(ic(d)){const h=s[u],m=a[d]=Ie(h)||ke(h)?{type:h}:At({},h);if(m){const T=ac(Boolean,m.type),E=ac(String,m.type);m[0]=T>-1,m[1]=E<0||T<E,(T>-1||je(m,"default"))&&o.push(d)}}}const c=[a,o];return it(t)&&i.set(t,c),c}function ic(t){return t[0]!=="$"}function rc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sc(t,e){return rc(t)===rc(e)}function ac(t,e){return Ie(e)?e.findIndex(n=>sc(n,t)):ke(e)&&sc(e,t)?0:-1}const od=t=>t[0]==="_"||t==="$stable",vl=t=>Ie(t)?t.map(Tn):[Tn(t)],am=(t,e,n)=>{if(e._n)return e;const i=Cp((...r)=>vl(e(...r)),n);return i._c=!1,i},ld=(t,e,n)=>{const i=t._ctx;for(const r in t){if(od(r))continue;const s=t[r];if(ke(s))e[r]=am(r,s,i);else if(s!=null){const a=vl(s);e[r]=()=>a}}},cd=(t,e)=>{const n=vl(e);t.slots.default=()=>n},om=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ze(e),Qs(e,"_",n)):ld(e,t.slots={})}else t.slots={},e&&cd(t,e);Qs(t.slots,_a,1)},lm=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=st;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(At(r,e),!n&&o===1&&delete r._):(s=!e.$stable,ld(e,r)),a=e}else e&&(cd(t,e),a={default:1});if(s)for(const o in r)!od(o)&&!(o in a)&&delete r[o]};function Ao(t,e,n,i,r=!1){if(Ie(t)){t.forEach((h,m)=>Ao(h,e&&(Ie(e)?e[m]:e),n,i,r));return}if(js(i)&&!r)return;const s=i.shapeFlag&4?va(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===st?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,je(d,c)&&(d[c]=null)):yt(c)&&(c.value=null)),ke(l))si(l,o,12,[a,u]);else{const h=_t(l),m=yt(l);if(h||m){const T=()=>{if(t.f){const E=h?je(d,l)?d[l]:u[l]:l.value;r?Ie(E)&&Qo(E,s):Ie(E)?E.includes(s)||E.push(s):h?(u[l]=[s],je(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=a,je(d,l)&&(d[l]=a)):m&&(l.value=a,t.k&&(u[t.k]=a))};a?(T.id=-1,Gt(T,n)):T()}}}const Gt=Up;function cm(t){return um(t)}function um(t,e){const n=mo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=gn,insertStaticContent:T}=t,E=(S,x,g,C=null,D=null,F=null,$=!1,j=null,re=!!x.dynamicChildren)=>{if(S===x)return;S&&!Cr(S,x)&&(C=Ce(S),X(S,D,F,!0),S=null),x.patchFlag===-2&&(re=!1,x.dynamicChildren=null);const{type:se,ref:fe,shapeFlag:v}=x;switch(se){case os:p(S,x,g,C);break;case Kr:f(S,x,g,C);break;case Ks:S==null&&b(x,g,C,$);break;case Pt:oe(S,x,g,C,D,F,$,j,re);break;default:v&1?R(S,x,g,C,D,F,$,j,re):v&6?B(S,x,g,C,D,F,$,j,re):(v&64||v&128)&&se.process(S,x,g,C,D,F,$,j,re,Be)}fe!=null&&D&&Ao(fe,S&&S.ref,F,x||S,!x)},p=(S,x,g,C)=>{if(S==null)i(x.el=o(x.children),g,C);else{const D=x.el=S.el;x.children!==S.children&&c(D,x.children)}},f=(S,x,g,C)=>{S==null?i(x.el=l(x.children||""),g,C):x.el=S.el},b=(S,x,g,C)=>{[S.el,S.anchor]=T(S.children,x,g,C,S.el,S.anchor)},y=({el:S,anchor:x},g,C)=>{let D;for(;S&&S!==x;)D=h(S),i(S,g,C),S=D;i(x,g,C)},M=({el:S,anchor:x})=>{let g;for(;S&&S!==x;)g=h(S),r(S),S=g;r(x)},R=(S,x,g,C,D,F,$,j,re)=>{$=$||x.type==="svg",S==null?w(x,g,C,D,F,$,j,re):A(S,x,D,F,$,j,re)},w=(S,x,g,C,D,F,$,j)=>{let re,se;const{type:fe,props:v,shapeFlag:_,transition:N,dirs:q}=S;if(re=S.el=a(S.type,F,v&&v.is,v),_&8?u(re,S.children):_&16&&z(S.children,re,null,C,D,F&&fe!=="foreignObject",$,j),q&&_i(S,null,C,"created"),I(re,S,S.scopeId,$,C),v){for(const ie in v)ie!=="value"&&!$s(ie)&&s(re,ie,null,v[ie],F,S.children,C,D,Te);"value"in v&&s(re,"value",null,v.value),(se=v.onVnodeBeforeMount)&&Mn(se,C,S)}q&&_i(S,null,C,"beforeMount");const te=(!D||D&&!D.pendingBranch)&&N&&!N.persisted;te&&N.beforeEnter(re),i(re,x,g),((se=v&&v.onVnodeMounted)||te||q)&&Gt(()=>{se&&Mn(se,C,S),te&&N.enter(re),q&&_i(S,null,C,"mounted")},D)},I=(S,x,g,C,D)=>{if(g&&m(S,g),C)for(let F=0;F<C.length;F++)m(S,C[F]);if(D){let F=D.subTree;if(x===F){const $=D.vnode;I(S,$,$.scopeId,$.slotScopeIds,D.parent)}}},z=(S,x,g,C,D,F,$,j,re=0)=>{for(let se=re;se<S.length;se++){const fe=S[se]=j?ei(S[se]):Tn(S[se]);E(null,fe,x,g,C,D,F,$,j)}},A=(S,x,g,C,D,F,$)=>{const j=x.el=S.el;let{patchFlag:re,dynamicChildren:se,dirs:fe}=x;re|=S.patchFlag&16;const v=S.props||st,_=x.props||st;let N;g&&gi(g,!1),(N=_.onVnodeBeforeUpdate)&&Mn(N,g,x,S),fe&&_i(x,S,g,"beforeUpdate"),g&&gi(g,!0);const q=D&&x.type!=="foreignObject";if(se?P(S.dynamicChildren,se,j,g,C,q,F):$||G(S,x,j,null,g,C,q,F,!1),re>0){if(re&16)le(j,x,v,_,g,C,D);else if(re&2&&v.class!==_.class&&s(j,"class",null,_.class,D),re&4&&s(j,"style",v.style,_.style,D),re&8){const te=x.dynamicProps;for(let ie=0;ie<te.length;ie++){const de=te[ie],ue=v[de],Y=_[de];(Y!==ue||de==="value")&&s(j,de,ue,Y,D,S.children,g,C,Te)}}re&1&&S.children!==x.children&&u(j,x.children)}else!$&&se==null&&le(j,x,v,_,g,C,D);((N=_.onVnodeUpdated)||fe)&&Gt(()=>{N&&Mn(N,g,x,S),fe&&_i(x,S,g,"updated")},C)},P=(S,x,g,C,D,F,$)=>{for(let j=0;j<x.length;j++){const re=S[j],se=x[j],fe=re.el&&(re.type===Pt||!Cr(re,se)||re.shapeFlag&70)?d(re.el):g;E(re,se,fe,null,C,D,F,$,!0)}},le=(S,x,g,C,D,F,$)=>{if(g!==C){if(g!==st)for(const j in g)!$s(j)&&!(j in C)&&s(S,j,g[j],null,$,x.children,D,F,Te);for(const j in C){if($s(j))continue;const re=C[j],se=g[j];re!==se&&j!=="value"&&s(S,j,se,re,$,x.children,D,F,Te)}"value"in C&&s(S,"value",g.value,C.value)}},oe=(S,x,g,C,D,F,$,j,re)=>{const se=x.el=S?S.el:o(""),fe=x.anchor=S?S.anchor:o("");let{patchFlag:v,dynamicChildren:_,slotScopeIds:N}=x;N&&(j=j?j.concat(N):N),S==null?(i(se,g,C),i(fe,g,C),z(x.children,g,fe,D,F,$,j,re)):v>0&&v&64&&_&&S.dynamicChildren?(P(S.dynamicChildren,_,g,D,F,$,j),(x.key!=null||D&&x===D.subTree)&&ud(S,x,!0)):G(S,x,g,fe,D,F,$,j,re)},B=(S,x,g,C,D,F,$,j,re)=>{x.slotScopeIds=j,S==null?x.shapeFlag&512?D.ctx.activate(x,g,C,$,re):Z(x,g,C,D,F,$,re):J(S,x,re)},Z=(S,x,g,C,D,F,$)=>{const j=S.component=Mm(S,C,D);if(Zf(S)&&(j.ctx.renderer=Be),Sm(j),j.asyncDep){if(D&&D.registerDep(j,ne),!S.el){const re=j.subTree=kt(Kr);f(null,re,x,g)}return}ne(j,S,x,g,D,F,$)},J=(S,x,g)=>{const C=x.component=S.component;if(Ip(S,x,g))if(C.asyncDep&&!C.asyncResolved){V(C,x,g);return}else C.next=x,bp(C.update),C.update();else x.el=S.el,C.vnode=x},ne=(S,x,g,C,D,F,$)=>{const j=()=>{if(S.isMounted){let{next:fe,bu:v,u:_,parent:N,vnode:q}=S,te=fe,ie;gi(S,!1),fe?(fe.el=q.el,V(S,fe,$)):fe=q,v&&qs(v),(ie=fe.props&&fe.props.onVnodeBeforeUpdate)&&Mn(ie,N,fe,q),gi(S,!0);const de=Pa(S),ue=S.subTree;S.subTree=de,E(ue,de,d(ue.el),Ce(ue),S,D,F),fe.el=de.el,te===null&&Dp(S,de.el),_&&Gt(_,D),(ie=fe.props&&fe.props.onVnodeUpdated)&&Gt(()=>Mn(ie,N,fe,q),D)}else{let fe;const{el:v,props:_}=x,{bm:N,m:q,parent:te}=S,ie=js(x);if(gi(S,!1),N&&qs(N),!ie&&(fe=_&&_.onVnodeBeforeMount)&&Mn(fe,te,x),gi(S,!0),v&&Le){const de=()=>{S.subTree=Pa(S),Le(v,S.subTree,S,D,null)};ie?x.type.__asyncLoader().then(()=>!S.isUnmounted&&de()):de()}else{const de=S.subTree=Pa(S);E(null,de,g,C,S,D,F),x.el=de.el}if(q&&Gt(q,D),!ie&&(fe=_&&_.onVnodeMounted)){const de=x;Gt(()=>Mn(fe,te,de),D)}(x.shapeFlag&256||te&&js(te.vnode)&&te.vnode.shapeFlag&256)&&S.a&&Gt(S.a,D),S.isMounted=!0,x=g=C=null}},re=S.effect=new il(j,()=>fl(se),S.scope),se=S.update=()=>re.run();se.id=S.uid,gi(S,!0),se()},V=(S,x,g)=>{x.component=S;const C=S.vnode.props;S.vnode=x,S.next=null,sm(S,x.props,C,g),lm(S,x.children,g),Sr(),Kl(),Tr()},G=(S,x,g,C,D,F,$,j,re=!1)=>{const se=S&&S.children,fe=S?S.shapeFlag:0,v=x.children,{patchFlag:_,shapeFlag:N}=x;if(_>0){if(_&128){ae(se,v,g,C,D,F,$,j,re);return}else if(_&256){ce(se,v,g,C,D,F,$,j,re);return}}N&8?(fe&16&&Te(se,D,F),v!==se&&u(g,v)):fe&16?N&16?ae(se,v,g,C,D,F,$,j,re):Te(se,D,F,!0):(fe&8&&u(g,""),N&16&&z(v,g,C,D,F,$,j,re))},ce=(S,x,g,C,D,F,$,j,re)=>{S=S||ar,x=x||ar;const se=S.length,fe=x.length,v=Math.min(se,fe);let _;for(_=0;_<v;_++){const N=x[_]=re?ei(x[_]):Tn(x[_]);E(S[_],N,g,null,D,F,$,j,re)}se>fe?Te(S,D,F,!0,!1,v):z(x,g,C,D,F,$,j,re,v)},ae=(S,x,g,C,D,F,$,j,re)=>{let se=0;const fe=x.length;let v=S.length-1,_=fe-1;for(;se<=v&&se<=_;){const N=S[se],q=x[se]=re?ei(x[se]):Tn(x[se]);if(Cr(N,q))E(N,q,g,null,D,F,$,j,re);else break;se++}for(;se<=v&&se<=_;){const N=S[v],q=x[_]=re?ei(x[_]):Tn(x[_]);if(Cr(N,q))E(N,q,g,null,D,F,$,j,re);else break;v--,_--}if(se>v){if(se<=_){const N=_+1,q=N<fe?x[N].el:C;for(;se<=_;)E(null,x[se]=re?ei(x[se]):Tn(x[se]),g,q,D,F,$,j,re),se++}}else if(se>_)for(;se<=v;)X(S[se],D,F,!0),se++;else{const N=se,q=se,te=new Map;for(se=q;se<=_;se++){const ve=x[se]=re?ei(x[se]):Tn(x[se]);ve.key!=null&&te.set(ve.key,se)}let ie,de=0;const ue=_-q+1;let Y=!1,we=0;const be=new Array(ue);for(se=0;se<ue;se++)be[se]=0;for(se=N;se<=v;se++){const ve=S[se];if(de>=ue){X(ve,D,F,!0);continue}let Me;if(ve.key!=null)Me=te.get(ve.key);else for(ie=q;ie<=_;ie++)if(be[ie-q]===0&&Cr(ve,x[ie])){Me=ie;break}Me===void 0?X(ve,D,F,!0):(be[Me-q]=se+1,Me>=we?we=Me:Y=!0,E(ve,x[Me],g,null,D,F,$,j,re),de++)}const Re=Y?fm(be):ar;for(ie=Re.length-1,se=ue-1;se>=0;se--){const ve=q+se,Me=x[ve],He=ve+1<fe?x[ve+1].el:C;be[se]===0?E(null,Me,g,He,D,F,$,j,re):Y&&(ie<0||se!==Re[ie]?H(Me,g,He,2):ie--)}}},H=(S,x,g,C,D=null)=>{const{el:F,type:$,transition:j,children:re,shapeFlag:se}=S;if(se&6){H(S.component.subTree,x,g,C);return}if(se&128){S.suspense.move(x,g,C);return}if(se&64){$.move(S,x,g,Be);return}if($===Pt){i(F,x,g);for(let v=0;v<re.length;v++)H(re[v],x,g,C);i(S.anchor,x,g);return}if($===Ks){y(S,x,g);return}if(C!==2&&se&1&&j)if(C===0)j.beforeEnter(F),i(F,x,g),Gt(()=>j.enter(F),D);else{const{leave:v,delayLeave:_,afterLeave:N}=j,q=()=>i(F,x,g),te=()=>{v(F,()=>{q(),N&&N()})};_?_(F,q,te):te()}else i(F,x,g)},X=(S,x,g,C=!1,D=!1)=>{const{type:F,props:$,ref:j,children:re,dynamicChildren:se,shapeFlag:fe,patchFlag:v,dirs:_}=S;if(j!=null&&Ao(j,null,g,S,!0),fe&256){x.ctx.deactivate(S);return}const N=fe&1&&_,q=!js(S);let te;if(q&&(te=$&&$.onVnodeBeforeUnmount)&&Mn(te,x,S),fe&6)ge(S.component,g,C);else{if(fe&128){S.suspense.unmount(g,C);return}N&&_i(S,null,x,"beforeUnmount"),fe&64?S.type.remove(S,x,g,D,Be,C):se&&(F!==Pt||v>0&&v&64)?Te(se,x,g,!1,!0):(F===Pt&&v&384||!D&&fe&16)&&Te(re,x,g),C&&pe(S)}(q&&(te=$&&$.onVnodeUnmounted)||N)&&Gt(()=>{te&&Mn(te,x,S),N&&_i(S,null,x,"unmounted")},g)},pe=S=>{const{type:x,el:g,anchor:C,transition:D}=S;if(x===Pt){me(g,C);return}if(x===Ks){M(S);return}const F=()=>{r(g),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(S.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:j}=D,re=()=>$(g,F);j?j(S.el,F,re):re()}else F()},me=(S,x)=>{let g;for(;S!==x;)g=h(S),r(S),S=g;r(x)},ge=(S,x,g)=>{const{bum:C,scope:D,update:F,subTree:$,um:j}=S;C&&qs(C),D.stop(),F&&(F.active=!1,X($,S,x,g)),j&&Gt(j,x),Gt(()=>{S.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Te=(S,x,g,C=!1,D=!1,F=0)=>{for(let $=F;$<S.length;$++)X(S[$],x,g,C,D)},Ce=S=>S.shapeFlag&6?Ce(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),Ae=(S,x,g)=>{S==null?x._vnode&&X(x._vnode,null,null,!0):E(x._vnode||null,S,x,null,null,null,g),Kl(),Yf(),x._vnode=S},Be={p:E,um:X,m:H,r:pe,mt:Z,mc:z,pc:G,pbc:P,n:Ce,o:t};let Qe,Le;return e&&([Qe,Le]=e(Be)),{render:Ae,hydrate:Qe,createApp:nm(Ae,Qe)}}function gi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ud(t,e,n=!1){const i=t.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ei(r[s]),o.el=a.el),n||ud(a,o)),o.type===os&&(o.el=a.el)}}function fm(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}const dm=t=>t.__isTeleport,Pt=Symbol.for("v-fgt"),os=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),Gr=[];let _n=null;function Vt(t=!1){Gr.push(_n=t?null:[])}function hm(){Gr.pop(),_n=Gr[Gr.length-1]||null}let Zr=1;function oc(t){Zr+=t}function fd(t){return t.dynamicChildren=Zr>0?_n||ar:null,hm(),Zr>0&&_n&&_n.push(t),t}function Qt(t,e,n,i,r,s){return fd(Xe(t,e,n,i,r,s,!0))}function pm(t,e,n,i,r){return fd(kt(t,e,n,i,r,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function Cr(t,e){return t.type===e.type&&t.key===e.key}const _a="__vInternal",dd=({key:t})=>t??null,Zs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||yt(t)||ke(t)?{i:en,r:t,k:e,f:!!n}:t:null);function Xe(t,e=null,n=null,i=0,r=null,s=t===Pt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dd(e),ref:e&&Zs(e),scopeId:pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return o?(xl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),Zr>0&&!a&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const kt=mm;function mm(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===nd)&&(t=Kr),Ro(t)){const o=hr(t,e,!0);return n&&xl(o,n),Zr>0&&!s&&_n&&(o.shapeFlag&6?_n[_n.indexOf(t)]=o:_n.push(o)),o.patchFlag|=-2,o}if(Rm(t)&&(t=t.__vccOpts),e){e=_m(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=as(o)),it(l)&&(Bf(l)&&!Ie(l)&&(l=At({},l)),e.style=tl(l))}const a=_t(t)?1:Np(t)?128:dm(t)?64:it(t)?4:ke(t)?2:0;return Xe(t,e,n,i,r,a,s,!0)}function _m(t){return t?Bf(t)||_a in t?At({},t):t:null}function hr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:a}=t,o=e?vm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&dd(o),ref:e&&e.ref?n&&r?Ie(r)?r.concat(Zs(e)):[r,Zs(e)]:Zs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gm(t=" ",e=0){return kt(os,null,t,e)}function ga(t,e){const n=kt(Ks,null,t);return n.staticCount=e,n}function Tn(t){return t==null||typeof t=="boolean"?kt(Kr):Ie(t)?kt(Pt,null,t.slice()):typeof t=="object"?ei(t):kt(os,null,String(t))}function ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function xl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(_a in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:en},n=32):(e=String(e),i&64?(n=16,e=[gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function vm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=as([e.class,i.class]));else if(r==="style")e.style=tl([e.style,i.style]);else if(aa(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Mn(t,e,n,i=null){vn(t,e,7,[n,i])}const xm=rd();let Em=0;function Mm(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||xm,s={uid:Em++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(i,r),emitsOptions:qf(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=wp.bind(null,s),t.ce&&t.ce(s),s}let Tt=null;const Jr=()=>Tt||en;let El,ki,lc="__VUE_INSTANCE_SETTERS__";(ki=mo()[lc])||(ki=mo()[lc]=[]),ki.push(t=>Tt=t),El=t=>{ki.length>1?ki.forEach(e=>e(t)):ki[0](t)};const pr=t=>{El(t),t.scope.on()},Pi=()=>{Tt&&Tt.scope.off(),El(null)};function hd(t){return t.vnode.shapeFlag&4}let Qr=!1;function Sm(t,e=!1){Qr=e;const{props:n,children:i}=t.vnode,r=hd(t);rm(t,n,r,e),om(t,i);const s=r?Tm(t,e):void 0;return Qr=!1,s}function Tm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kf(new Proxy(t.ctx,jp));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?bm(t):null;pr(t),Sr();const s=si(i,t,0,[t.props,r]);if(Tr(),Pi(),Ef(s)){if(s.then(Pi,Pi),e)return s.then(a=>{cc(t,a,e)}).catch(a=>{da(a,t,0)});t.asyncDep=s}else cc(t,s,e)}else pd(t,e)}function cc(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=Vf(e)),pd(t,n)}let uc;function pd(t,e,n){const i=t.type;if(!t.render){if(!e&&uc&&!i.render){const r=i.template||gl(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=At(At({isCustomElement:s,delimiters:o},a),l);i.render=uc(r,c)}}t.render=i.render||gn}pr(t),Sr(),Kp(t),Tr(),Pi()}function ym(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return jt(t,"get","$attrs"),e[n]}}))}function bm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ym(t)},slots:t.slots,emit:t.emit,expose:e}}function va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vf(kf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}}))}function Am(t,e=!0){return ke(t)?t.displayName||t.name:t.name||e&&t.__name}function Rm(t){return ke(t)&&"__vccOpts"in t}const Xt=(t,e)=>Mp(t,e,Qr);function md(t,e,n){const i=arguments.length;return i===2?it(e)&&!Ie(e)?Ro(e)?kt(t,null,[e]):kt(t,e):kt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ro(n)&&(n=[n]),kt(t,e,n))}const wm=Symbol.for("v-scx"),Cm=()=>zr(wm),Lm="3.3.4",Pm="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,fc=bi&&bi.createElement("template"),Im={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?bi.createElementNS(Pm,t):bi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>bi.createTextNode(t),createComment:t=>bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{fc.innerHTML=i?`<svg>${t}</svg>`:t;const o=fc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dm(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nm(t,e,n){const i=t.style,r=_t(n);if(n&&!r){if(e&&!_t(e))for(const s in e)n[s]==null&&wo(i,s,"");for(const s in n)wo(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const dc=/\s*!important$/;function wo(t,e,n){if(Ie(n))n.forEach(i=>wo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Um(t,e);dc.test(n)?t.setProperty(Mr(i),n.replace(dc,""),"important"):t[i]=n}}const hc=["Webkit","Moz","ms"],Na={};function Um(t,e){const n=Na[e];if(n)return n;let i=Rn(e);if(i!=="filter"&&i in t)return Na[e]=i;i=ca(i);for(let r=0;r<hc.length;r++){const s=hc[r]+i;if(s in t)return Na[e]=s}return e}const pc="http://www.w3.org/1999/xlink";function Om(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(pc,e.slice(6,e.length)):t.setAttributeNS(pc,e,n);else{const s=Bh(e);n==null||s&&!yf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Fm(t,e,n,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _d(t,e,n,i){t.addEventListener(e,n,i)}function Bm(t,e,n,i){t.removeEventListener(e,n,i)}function km(t,e,n,i,r=null){const s=t._vei||(t._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Hm(e);if(i){const c=s[e]=Vm(i,r);_d(t,o,c,l)}else a&&(Bm(t,o,a,l),s[e]=void 0)}}const mc=/(?:Once|Passive|Capture)$/;function Hm(t){let e;if(mc.test(t)){e={};let i;for(;i=t.match(mc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let Ua=0;const zm=Promise.resolve(),Gm=()=>Ua||(zm.then(()=>Ua=0),Ua=Date.now());function Vm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;vn(Wm(i,n.value),e,5,[i])};return n.value=t,n.attached=Gm(),n}function Wm(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _c=/^on[a-z]/,Xm=(t,e,n,i,r=!1,s,a,o,l)=>{e==="class"?Dm(t,i,r):e==="style"?Nm(t,n,i):aa(e)?Jo(e)||km(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ym(t,e,i,r))?Fm(t,e,i,s,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Om(t,e,i,r))};function Ym(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&_c.test(e)&&ke(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_c.test(e)&&_t(n)?!1:e in t}const gc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ie(e)?n=>qs(e,n):e},$m={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=oa(e);_d(t,"change",()=>{const s=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Tf(ra(a)):ra(a));t._assign(t.multiple?r?new Set(s):s:s[0])}),t._assign=gc(i)},mounted(t,{value:e}){vc(t,e)},beforeUpdate(t,e,n){t._assign=gc(n)},updated(t,{value:e}){vc(t,e)}};function vc(t,e){const n=t.multiple;if(!(n&&!Ie(e)&&!oa(e))){for(let i=0,r=t.options.length;i<r;i++){const s=t.options[i],a=ra(s);if(n)Ie(e)?s.selected=Hh(e,a)>-1:s.selected=e.has(a);else if(ua(ra(s),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ra(t){return"_value"in t?t._value:t.value}const qm=At({patchProp:Xm},Im);let xc;function jm(){return xc||(xc=cm(qm))}const Km=(...t)=>{const e=jm().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zm(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Zm(t){return _t(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="155",Jm=0,Ec=1,Qm=2,gd=1,e_=2,Bn=3,ui=0,Yt=1,Hn=2,ai=0,ur=1,Mc=2,Sc=3,Tc=4,t_=5,nr=100,n_=101,i_=102,yc=103,bc=104,r_=200,s_=201,a_=202,o_=203,vd=204,xd=205,l_=206,c_=207,u_=208,f_=209,d_=210,h_=0,p_=1,m_=2,Co=3,__=4,g_=5,v_=6,x_=7,Ed=0,E_=1,M_=2,oi=0,S_=1,T_=2,y_=3,b_=4,A_=5,Md=300,mr=301,_r=302,Lo=303,Po=304,xa=306,Io=1e3,pn=1001,Do=1002,Bt=1003,Ac=1004,Oa=1005,rn=1006,R_=1007,es=1008,li=1009,w_=1010,C_=1011,Sl=1012,Sd=1013,ti=1014,ni=1015,ts=1016,Td=1017,yd=1018,Ii=1020,L_=1021,mn=1023,P_=1024,I_=1025,Di=1026,gr=1027,D_=1028,bd=1029,N_=1030,Ad=1031,Rd=1033,Fa=33776,Ba=33777,ka=33778,Ha=33779,Rc=35840,wc=35841,Cc=35842,Lc=35843,U_=36196,Pc=37492,Ic=37496,Dc=37808,Nc=37809,Uc=37810,Oc=37811,Fc=37812,Bc=37813,kc=37814,Hc=37815,zc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,Yc=37821,za=36492,O_=36283,$c=36284,qc=36285,jc=36286,wd=3e3,Ni=3001,F_=3200,B_=3201,k_=0,H_=1,Ui="",Ve="srgb",wn="srgb-linear",Cd="display-p3",Ga=7680,z_=519,G_=512,V_=513,W_=514,X_=515,Y_=516,$_=517,q_=518,j_=519,Kc=35044,Zc="300 es",No=1035,Gn=2e3,sa=2001;class yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Uo=180/Math.PI;function ls(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function K_(t,e){return(t%e+e)%e}function Wa(t,e,n){return(1-n)*t+n*e}function Jc(t){return(t&t-1)===0&&t!==0}function Oo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],T=i[8],E=r[0],p=r[3],f=r[6],b=r[1],y=r[4],M=r[7],R=r[2],w=r[5],I=r[8];return s[0]=a*E+o*b+l*R,s[3]=a*p+o*y+l*w,s[6]=a*f+o*M+l*I,s[1]=c*E+u*b+d*R,s[4]=c*p+u*y+d*w,s[7]=c*f+u*M+d*I,s[2]=h*E+m*b+T*R,s[5]=h*p+m*y+T*w,s[8]=h*f+m*M+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,T=n*d+i*h+r*m;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=d*E,e[1]=(r*c-u*i)*E,e[2]=(o*i-r*a)*E,e[3]=h*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Xa.makeScale(e,n)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new We;function Ld(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ns(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Qc={};function Vr(t){t in Qc||(Qc[t]=!0,console.warn(t))}function fr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ya(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Z_=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),J_=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Q_(t){return t.convertSRGBToLinear().applyMatrix3(J_)}function eg(t){return t.applyMatrix3(Z_).convertLinearToSRGB()}const tg={[wn]:t=>t,[Ve]:t=>t.convertSRGBToLinear(),[Cd]:Q_},ng={[wn]:t=>t,[Ve]:t=>t.convertLinearToSRGB(),[Cd]:eg},an={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return wn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=tg[e],r=ng[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Hi;class Pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=ns("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ns("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fr(n[i]/255)*255):n[i]=fr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ig=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($a(r[a].image)):s.push($a(r[a]))}else s=$a(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $a(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rg=0;class $t extends yr{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=pn,r=pn,s=rn,a=es,o=mn,l=li,c=$t.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=ls(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ni?Ve:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ve?Ni:wd}set encoding(e){Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ni?Ve:Ui}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Md;$t.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],T=l[9],E=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-E)<.01&&Math.abs(T-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+E)<.1&&Math.abs(T+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(m+1)/2,R=(f+1)/2,w=(u+h)/4,I=(d+E)/4,z=(T+p)/4;return y>M&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=I/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=z/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=I/s,r=z/s),this.set(i,r,s,n),this}let b=Math.sqrt((p-T)*(p-T)+(d-E)*(d-E)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-T)/b,this.y=(d-E)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sg extends yr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ni?Ve:Ui),this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:rn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Id(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends sg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dd extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ag extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],T=s[a+2],E=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=T,e[n+3]=E;return}if(d!==E||l!==h||c!==m||u!==T){let p=1-o;const f=l*h+c*m+u*T+d*E,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,f*b);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const M=o*b;if(l=l*p+h*M,c=c*p+m*M,u=u*p+T*M,d=d*p+E*M,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],m=s[a+2],T=s[a+3];return e[n]=o*T+u*d+l*m-c*h,e[n+1]=l*T+u*h+c*d-o*m,e[n+2]=c*T+u*m+o*h-l*d,e[n+3]=u*T-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),T=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*T,this._y=c*m*d-h*u*T,this._z=c*u*T+h*m*d,this._w=c*u*d-h*m*T;break;case"YXZ":this._x=h*u*d+c*m*T,this._y=c*m*d-h*u*T,this._z=c*u*T-h*m*d,this._w=c*u*d+h*m*T;break;case"ZXY":this._x=h*u*d-c*m*T,this._y=c*m*d+h*u*T,this._z=c*u*T+h*m*d,this._w=c*u*d-h*m*T;break;case"ZYX":this._x=h*u*d-c*m*T,this._y=c*m*d+h*u*T,this._z=c*u*T-h*m*d,this._w=c*u*d+h*m*T;break;case"YZX":this._x=h*u*d+c*m*T,this._y=c*m*d+h*u*T,this._z=c*u*T-h*m*d,this._w=c*u*d-h*m*T;break;case"XZY":this._x=h*u*d-c*m*T,this._y=c*m*d-h*u*T,this._z=c*u*T+h*m*d,this._w=c*u*d+h*m*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,u=l*i+o*n-s*r,d=l*r+s*i-a*n,h=-s*n-a*i-o*r;return this.x=c*l+h*-s+u*-o-d*-a,this.y=u*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new W,eu=new cs;class us{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)In.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else r.boundingBox===null&&r.computeBoundingBox(),zi.copy(r.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ss.subVectors(this.max,Pr),Gi.subVectors(e.a,Pr),Vi.subVectors(e.b,Pr),Wi.subVectors(e.c,Pr),qn.subVectors(Vi,Gi),jn.subVectors(Wi,Vi),vi.subVectors(Gi,Wi);let n=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-vi.z,vi.y,qn.z,0,-qn.x,jn.z,0,-jn.x,vi.z,0,-vi.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-vi.y,vi.x,0];return!ja(n,Gi,Vi,Wi,Ss)||(n=[1,0,0,0,1,0,0,0,1],!ja(n,Gi,Vi,Wi,Ss))?!1:(Ts.crossVectors(qn,jn),n=[Ts.x,Ts.y,Ts.z],ja(n,Gi,Vi,Wi,Ss))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new W,new W,new W,new W,new W,new W,new W,new W],In=new W,zi=new us,Gi=new W,Vi=new W,Wi=new W,qn=new W,jn=new W,vi=new W,Pr=new W,Ss=new W,Ts=new W,xi=new W;function ja(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){xi.fromArray(t,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=n.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const og=new us,Ir=new W,Ka=new W;class Ea{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):og.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const n=Ir.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Ka)),this.expandByPoint(Ir.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new W,Za=new W,ys=new W,Kn=new W,Ja=new W,bs=new W,Qa=new W;class Nd{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Dn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,n),Dn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Za.copy(e).add(n).multiplyScalar(.5),ys.copy(n).sub(e).normalize(),Kn.copy(this.origin).sub(Za);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ys),o=Kn.dot(this.direction),l=-Kn.dot(ys),c=Kn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,T;if(u>0)if(d=a*l-o,h=a*o-l,T=s*u,d>=0)if(h>=-T)if(h<=T){const E=1/u;d*=E,h*=E,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-T?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=T?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Za).addScaledVector(ys,h),m}intersectSphere(e,n){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,n,i,r,s){Ja.subVectors(n,e),bs.subVectors(i,e),Qa.crossVectors(Ja,bs);let a=this.direction.dot(Qa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(Kn,bs));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(Kn));if(c<0||l+c>a)return null;const u=-o*Kn.dot(Qa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,m,T,E,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,m,T,E,p)}set(e,n,i,r,s,a,o,l,c,u,d,h,m,T,E,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=T,f[11]=E,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,T=o*u,E=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+T*c,n[5]=h-E*c,n[9]=-o*l,n[2]=E-h*c,n[6]=T+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,T=c*u,E=c*d;n[0]=h+E*o,n[4]=T*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-T,n[6]=E+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,T=c*u,E=c*d;n[0]=h-E*o,n[4]=-a*d,n[8]=T+m*o,n[1]=m+T*o,n[5]=a*u,n[9]=E-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,T=o*u,E=o*d;n[0]=l*u,n[4]=T*c-m,n[8]=h*c+E,n[1]=l*d,n[5]=E*c+h,n[9]=m*c-T,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,T=o*l,E=o*c;n[0]=l*u,n[4]=E-h*d,n[8]=T*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*d+T,n[10]=h-E*d}else if(e.order==="XZY"){const h=a*l,m=a*c,T=o*l,E=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+E,n[5]=a*u,n[9]=m*d-T,n[2]=T*d-m,n[6]=o*u,n[10]=E*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Zn.crossVectors(i,Zt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Zn.crossVectors(i,Zt)),Zn.normalize(),As.crossVectors(Zt,Zn),r[0]=Zn.x,r[4]=As.x,r[8]=Zt.x,r[1]=Zn.y,r[5]=As.y,r[9]=Zt.y,r[2]=Zn.z,r[6]=As.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],T=i[2],E=i[6],p=i[10],f=i[14],b=i[3],y=i[7],M=i[11],R=i[15],w=r[0],I=r[4],z=r[8],A=r[12],P=r[1],le=r[5],oe=r[9],B=r[13],Z=r[2],J=r[6],ne=r[10],V=r[14],G=r[3],ce=r[7],ae=r[11],H=r[15];return s[0]=a*w+o*P+l*Z+c*G,s[4]=a*I+o*le+l*J+c*ce,s[8]=a*z+o*oe+l*ne+c*ae,s[12]=a*A+o*B+l*V+c*H,s[1]=u*w+d*P+h*Z+m*G,s[5]=u*I+d*le+h*J+m*ce,s[9]=u*z+d*oe+h*ne+m*ae,s[13]=u*A+d*B+h*V+m*H,s[2]=T*w+E*P+p*Z+f*G,s[6]=T*I+E*le+p*J+f*ce,s[10]=T*z+E*oe+p*ne+f*ae,s[14]=T*A+E*B+p*V+f*H,s[3]=b*w+y*P+M*Z+R*G,s[7]=b*I+y*le+M*J+R*ce,s[11]=b*z+y*oe+M*ne+R*ae,s[15]=b*A+y*B+M*V+R*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],T=e[3],E=e[7],p=e[11],f=e[15];return T*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+E*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-n*l*d+n*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],T=e[12],E=e[13],p=e[14],f=e[15],b=d*p*c-E*h*c+E*l*m-o*p*m-d*l*f+o*h*f,y=T*h*c-u*p*c-T*l*m+a*p*m+u*l*f-a*h*f,M=u*E*c-T*d*c+T*o*m-a*E*m-u*o*f+a*d*f,R=T*d*l-u*E*l-T*o*h+a*E*h+u*o*p-a*d*p,w=n*b+i*y+r*M+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=b*I,e[1]=(E*h*s-d*p*s-E*r*m+i*p*m+d*r*f-i*h*f)*I,e[2]=(o*p*s-E*l*s+E*r*c-i*p*c-o*r*f+i*l*f)*I,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*I,e[4]=y*I,e[5]=(u*p*s-T*h*s+T*r*m-n*p*m-u*r*f+n*h*f)*I,e[6]=(T*l*s-a*p*s-T*r*c+n*p*c+a*r*f-n*l*f)*I,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*m+n*l*m)*I,e[8]=M*I,e[9]=(T*d*s-u*E*s-T*i*m+n*E*m+u*i*f-n*d*f)*I,e[10]=(a*E*s-T*o*s+T*i*c-n*E*c-a*i*f+n*o*f)*I,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*m-n*o*m)*I,e[12]=R*I,e[13]=(u*E*r-T*d*r+T*i*h-n*E*h-u*i*p+n*d*p)*I,e[14]=(T*o*r-a*E*r-T*i*l+n*E*l+a*i*p-n*o*p)*I,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,T=s*d,E=a*u,p=a*d,f=o*d,b=l*c,y=l*u,M=l*d,R=i.x,w=i.y,I=i.z;return r[0]=(1-(E+f))*R,r[1]=(m+M)*R,r[2]=(T-y)*R,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(h+f))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(T+y)*I,r[9]=(p-b)*I,r[10]=(1-(h+E))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const a=Xi.set(r[4],r[5],r[6]).length(),o=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,n.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Gn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,T;if(o===Gn)m=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===sa)m=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Gn){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),h=(n+e)*c,m=(i+r)*u;let T,E;if(o===Gn)T=(a+s)*d,E=-2*d;else if(o===sa)T=s*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=E,l[14]=-T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xi=new W,on=new bt,lg=new W(0,0,0),cg=new W(1,1,1),Zn=new W,As=new W,Zt=new W,tu=new bt,nu=new cs;class Ma{constructor(e=0,n=0,i=0,r=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ug=0;const iu=new W,Yi=new cs,Nn=new bt,Rs=new W,Dr=new W,fg=new W,dg=new cs,ru=new W(1,0,0),su=new W(0,1,0),au=new W(0,0,1),hg={type:"added"},ou={type:"removed"};class qt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new W,n=new Ma,i=new cs,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,n){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rs.copy(e):Rs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Dr,Rs,this.up):Nn.lookAt(Rs,Dr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ou)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(ou)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),T=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),T.length>0&&(i.nodes=T)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new W(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new W,Un=new W,eo=new W,On=new W,$i=new W,qi=new W,lu=new W,to=new W,no=new W,io=new W;let ws=!1;class fn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ln.subVectors(e,n),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ln.subVectors(r,n),Un.subVectors(i,n),eo.subVectors(e,n);const a=ln.dot(ln),o=ln.dot(Un),l=ln.dot(eo),c=Un.dot(Un),u=Un.dot(eo),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-o*u)*h,T=(a*u-o*l)*h;return s.set(1-m-T,T,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,n,i,r,s,a,o,l){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,On),l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l}static isFrontFacing(e,n,i,r){return ln.subVectors(i,n),Un.subVectors(e,n),ln.cross(Un).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),ln.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,i),qi.subVectors(s,i),to.subVectors(e,i);const l=$i.dot(to),c=qi.dot(to);if(l<=0&&c<=0)return n.copy(i);no.subVectors(e,r);const u=$i.dot(no),d=qi.dot(no);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector($i,a);io.subVectors(e,s);const m=$i.dot(io),T=qi.dot(io);if(T>=0&&m<=T)return n.copy(s);const E=m*c-l*T;if(E<=0&&c>=0&&T<=0)return o=c/(c-T),n.copy(i).addScaledVector(qi,o);const p=u*T-m*d;if(p<=0&&d-u>=0&&m-T>=0)return lu.subVectors(s,r),o=(d-u)/(d-u+(m-T)),n.copy(r).addScaledVector(lu,o);const f=1/(p+E+h);return a=E*f,o=h*f,n.copy(i).addScaledVector($i,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pg=0;class fs extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ur,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function ro(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=an.workingColorSpace){return this.r=e,this.g=n,this.b=i,an.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=an.workingColorSpace){if(e=K_(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,n=Ve){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ve){const i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return an.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Wt(Lt.r*255,0,255))*65536+Math.round(Wt(Lt.g*255,0,255))*256+Math.round(Wt(Lt.b*255,0,255))}getHexString(e=Ve){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=an.workingColorSpace){an.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=an.workingColorSpace){return an.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ve){an.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==Ve?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cn),cn.h+=e,cn.s+=n,cn.l+=i,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cn),e.getHSL(Cs);const i=Wa(cn.h,Cs.h,n),r=Wa(cn.s,Cs.s,n),s=Wa(cn.l,Cs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new nt;nt.NAMES=Od;class Tl extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new W,Ls=new et;class xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kc,this.updateRange={offset:0,count:-1},this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ls.fromBufferAttribute(this,n),Ls.applyMatrix3(e),this.setXY(n,Ls.x,Ls.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fd extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Bd extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mg=0;const nn=new bt,so=new qt,ji=new W,Jt=new us,Nr=new us,Mt=new W;class Cn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Bd:Fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Jt.min,Nr.min),Jt.expandByPoint(Mt),Mt.addVectors(Jt.max,Nr.max),Jt.expandByPoint(Mt)):(Jt.expandByPoint(Nr.min),Jt.expandByPoint(Nr.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Mt.add(ji)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<o;P++)c[P]=new W,u[P]=new W;const d=new W,h=new W,m=new W,T=new et,E=new et,p=new et,f=new W,b=new W;function y(P,le,oe){d.fromArray(r,P*3),h.fromArray(r,le*3),m.fromArray(r,oe*3),T.fromArray(a,P*2),E.fromArray(a,le*2),p.fromArray(a,oe*2),h.sub(d),m.sub(d),E.sub(T),p.sub(T);const B=1/(E.x*p.y-p.x*E.y);isFinite(B)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-E.y).multiplyScalar(B),b.copy(m).multiplyScalar(E.x).addScaledVector(h,-p.x).multiplyScalar(B),c[P].add(f),c[le].add(f),c[oe].add(f),u[P].add(b),u[le].add(b),u[oe].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let P=0,le=M.length;P<le;++P){const oe=M[P],B=oe.start,Z=oe.count;for(let J=B,ne=B+Z;J<ne;J+=3)y(i[J+0],i[J+1],i[J+2])}const R=new W,w=new W,I=new W,z=new W;function A(P){I.fromArray(s,P*3),z.copy(I);const le=c[P];R.copy(le),R.sub(I.multiplyScalar(I.dot(le))).normalize(),w.crossVectors(z,le);const B=w.dot(u[P])<0?-1:1;l[P*4]=R.x,l[P*4+1]=R.y,l[P*4+2]=R.z,l[P*4+3]=B}for(let P=0,le=M.length;P<le;++P){const oe=M[P],B=oe.start,Z=oe.count;for(let J=B,ne=B+Z;J<ne;J+=3)A(i[J+0]),A(i[J+1]),A(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const T=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,T),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,T),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(T,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,T=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*u;for(let f=0;f<u;f++)h[T++]=c[m++]}return new xn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new bt,Ei=new Nd,Ps=new Ea,uu=new W,Ki=new W,Zi=new W,Ji=new W,ao=new W,Is=new W,Ds=new et,Ns=new et,Us=new et,fu=new W,du=new W,hu=new W,Os=new W,Fs=new W;class Vn extends qt{constructor(e=new Cn,n=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ao.fromBufferAttribute(d,e),a?Is.addScaledVector(ao,u):Is.addScaledVector(ao.sub(n),u))}n.add(Is)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Ps.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ps,uu)===null||Ei.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ei)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let T=0,E=h.length;T<E;T++){const p=h[T],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,R=y;M<R;M+=3){const w=o.getX(M),I=o.getX(M+1),z=o.getX(M+2);r=Bs(this,f,e,i,c,u,d,w,I,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const T=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=T,f=E;p<f;p+=3){const b=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);r=Bs(this,a,e,i,c,u,d,b,y,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let T=0,E=h.length;T<E;T++){const p=h[T],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,R=y;M<R;M+=3){const w=M,I=M+1,z=M+2;r=Bs(this,f,e,i,c,u,d,w,I,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const T=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=T,f=E;p<f;p+=3){const b=p,y=p+1,M=p+2;r=Bs(this,a,e,i,c,u,d,b,y,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function _g(t,e,n,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ui,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fs);return c<n.near||c>n.far?null:{distance:c,point:Fs.clone(),object:t}}function Bs(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ki),t.getVertexPosition(l,Zi),t.getVertexPosition(c,Ji);const u=_g(t,e,n,i,Ki,Zi,Ji,Os);if(u){r&&(Ds.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,c),u.uv=fn.getInterpolation(Os,Ki,Zi,Ji,Ds,Ns,Us,new et)),s&&(Ds.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,l),Us.fromBufferAttribute(s,c),u.uv1=fn.getInterpolation(Os,Ki,Zi,Ji,Ds,Ns,Us,new et),u.uv2=u.uv1),a&&(fu.fromBufferAttribute(a,o),du.fromBufferAttribute(a,l),hu.fromBufferAttribute(a,c),u.normal=fn.getInterpolation(Os,Ki,Zi,Ji,fu,du,hu,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};fn.getNormal(Ki,Zi,Ji,d.normal),u.face=d}return u}class ds extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;T("z","y","x",-1,-1,i,n,e,a,s,0),T("z","y","x",1,-1,i,n,-e,a,s,1),T("x","z","y",1,1,e,i,n,r,a,2),T("x","z","y",1,-1,e,i,-n,r,a,3),T("x","y","z",1,-1,e,n,i,r,s,4),T("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(d,2));function T(E,p,f,b,y,M,R,w,I,z,A){const P=M/I,le=R/z,oe=M/2,B=R/2,Z=w/2,J=I+1,ne=z+1;let V=0,G=0;const ce=new W;for(let ae=0;ae<ne;ae++){const H=ae*le-B;for(let X=0;X<J;X++){const pe=X*P-oe;ce[E]=pe*b,ce[p]=H*y,ce[f]=Z,c.push(ce.x,ce.y,ce.z),ce[E]=0,ce[p]=0,ce[f]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(X/I),d.push(1-ae/z),V+=1}}for(let ae=0;ae<z;ae++)for(let H=0;H<I;H++){const X=h+H+J*ae,pe=h+H+J*(ae+1),me=h+(H+1)+J*(ae+1),ge=h+(H+1)+J*ae;l.push(X,pe,ge),l.push(pe,me,ge),G+=6}o.addGroup(m,G,A),m+=G,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=vr(t[n]);for(const r in i)e[r]=i[r]}return e}function gg(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kd(t){return t.getRenderTarget()===null?t.outputColorSpace:wn}const vg={clone:vr,merge:Ot};var xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Hd extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Gn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Hd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qi=-90,er=1;class Mg extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new sn(Qi,er,e,n);r.layers=this.layers,this.add(r);const s=new sn(Qi,er,e,n);s.layers=this.layers,this.add(s);const a=new sn(Qi,er,e,n);a.layers=this.layers,this.add(a);const o=new sn(Qi,er,e,n);o.layers=this.layers,this.add(o);const l=new sn(Qi,er,e,n);l.layers=this.layers,this.add(l);const c=new sn(Qi,er,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class zd extends $t{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:mr,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sg extends Oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?Ve:Ui),this.texture=new zd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ds(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ai});s.uniforms.tEquirect.value=n;const a=new Vn(r,s),o=n.minFilter;return n.minFilter===es&&(n.minFilter=rn),new Mg(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const oo=new W,Tg=new W,yg=new We;class Si{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=oo.subVectors(i,n).cross(Tg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(oo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yg.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Ea,ks=new W;class Gd{constructor(e=new Si,n=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],T=r[9],E=r[10],p=r[11],f=r[12],b=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-f).normalize(),i[1].setComponents(l+s,h+c,p+m,M+f).normalize(),i[2].setComponents(l+a,h+u,p+T,M+b).normalize(),i[3].setComponents(l-a,h-u,p-T,M-b).normalize(),i[4].setComponents(l-o,h-d,p-E,M-y).normalize(),n===Gn)i[5].setComponents(l+o,h+d,p+E,M+y).normalize();else if(n===sa)i[5].setComponents(o,d,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ks.x=r.normal.x>0?e.max.x:e.min.x,ks.y=r.normal.y>0?e.max.y:e.min.y,ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bg(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,d,h),c.onUploadCallback();let T;if(d instanceof Float32Array)T=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)T=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)T=t.SHORT;else if(d instanceof Uint32Array)T=t.UNSIGNED_INT;else if(d instanceof Int32Array)T=t.INT;else if(d instanceof Int8Array)T=t.BYTE;else if(d instanceof Uint8Array)T=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)T=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:T,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;t.bindBuffer(d,c),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class yl extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,m=[],T=[],E=[],p=[];for(let f=0;f<u;f++){const b=f*h-a;for(let y=0;y<c;y++){const M=y*d-s;T.push(M,-b,0),E.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const y=b+c*f,M=b+c*(f+1),R=b+1+c*(f+1),w=b+1+c*f;m.push(y,M,w),m.push(M,R,w)}this.setIndex(m),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$g=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Tv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:wg,alphamap_pars_fragment:Cg,alphatest_fragment:Lg,alphatest_pars_fragment:Pg,aomap_fragment:Ig,aomap_pars_fragment:Dg,begin_vertex:Ng,beginnormal_vertex:Ug,bsdfs:Og,iridescence_fragment:Fg,bumpmap_pars_fragment:Bg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Gg,color_fragment:Vg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:qg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Kg,displacementmap_vertex:Zg,emissivemap_fragment:Jg,emissivemap_pars_fragment:Qg,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:rv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:gv,envmap_vertex:av,fog_vertex:ov,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:uv,gradientmap_pars_fragment:fv,lightmap_fragment:dv,lightmap_pars_fragment:hv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:_v,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Ev,lights_phong_pars_fragment:Mv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Tv,lights_fragment_begin:yv,lights_fragment_maps:bv,lights_fragment_end:Av,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Lv,map_fragment:Pv,map_pars_fragment:Iv,map_particle_fragment:Dv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Ov,morphcolor_vertex:Fv,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:Hv,normal_fragment_begin:zv,normal_fragment_maps:Gv,normal_pars_fragment:Vv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Kv,opaque_fragment:Zv,packing:Jv,premultiplied_alpha_fragment:Qv,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:d0,specularmap_fragment:h0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:_0,transmission_fragment:g0,transmission_pars_fragment:v0,uv_pars_fragment:x0,uv_pars_vertex:E0,uv_vertex:M0,worldpos_vertex:S0,background_vert:T0,background_frag:y0,backgroundCube_vert:b0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:w0,depth_vert:C0,depth_frag:L0,distanceRGBA_vert:P0,distanceRGBA_frag:I0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:O0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:k0,meshlambert_frag:H0,meshmatcap_vert:z0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:Y0,meshphysical_vert:$0,meshphysical_frag:q0,meshtoon_vert:j0,meshtoon_frag:K0,points_vert:Z0,points_frag:J0,shadow_vert:Q0,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ot([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ot([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ot([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ot([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ot([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ot([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ot([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ot([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:Ot([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Hs={r:0,b:0,g:0};function ix(t,e,n,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function T(p,f){let b=!1,y=f.isScene===!0?f.background:null;switch(y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?E(o,l):y&&y.isColor&&(E(y,1),b=!0),t.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),b=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),b=!0;break}(t.autoClear||b)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===xa)?(u===void 0&&(u=new Vn(new ds(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:vr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Ve,(d!==y||h!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vn(new yl(2,2),new Fi({name:"BackgroundMaterial",uniforms:vr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function E(p,f){p.getRGB(Hs,kd(t)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,E(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,E(o,l)},render:T}}function rx(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(Z,J,ne,V,G){let ce=!1;if(a){const ae=E(V,ne,J);c!==ae&&(c=ae,m(c.object)),ce=f(Z,V,ne,G),ce&&b(Z,V,ne,G)}else{const ae=J.wireframe===!0;(c.geometry!==V.id||c.program!==ne.id||c.wireframe!==ae)&&(c.geometry=V.id,c.program=ne.id,c.wireframe=ae,ce=!0)}G!==null&&n.update(G,t.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,z(Z,J,ne,V),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(G).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(Z){return i.isWebGL2?t.bindVertexArray(Z):s.bindVertexArrayOES(Z)}function T(Z){return i.isWebGL2?t.deleteVertexArray(Z):s.deleteVertexArrayOES(Z)}function E(Z,J,ne){const V=ne.wireframe===!0;let G=o[Z.id];G===void 0&&(G={},o[Z.id]=G);let ce=G[J.id];ce===void 0&&(ce={},G[J.id]=ce);let ae=ce[V];return ae===void 0&&(ae=p(h()),ce[V]=ae),ae}function p(Z){const J=[],ne=[],V=[];for(let G=0;G<r;G++)J[G]=0,ne[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:V,object:Z,attributes:{},index:null}}function f(Z,J,ne,V){const G=c.attributes,ce=J.attributes;let ae=0;const H=ne.getAttributes();for(const X in H)if(H[X].location>=0){const me=G[X];let ge=ce[X];if(ge===void 0&&(X==="instanceMatrix"&&Z.instanceMatrix&&(ge=Z.instanceMatrix),X==="instanceColor"&&Z.instanceColor&&(ge=Z.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;ae++}return c.attributesNum!==ae||c.index!==V}function b(Z,J,ne,V){const G={},ce=J.attributes;let ae=0;const H=ne.getAttributes();for(const X in H)if(H[X].location>=0){let me=ce[X];me===void 0&&(X==="instanceMatrix"&&Z.instanceMatrix&&(me=Z.instanceMatrix),X==="instanceColor"&&Z.instanceColor&&(me=Z.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),G[X]=ge,ae++}c.attributes=G,c.attributesNum=ae,c.index=V}function y(){const Z=c.newAttributes;for(let J=0,ne=Z.length;J<ne;J++)Z[J]=0}function M(Z){R(Z,0)}function R(Z,J){const ne=c.newAttributes,V=c.enabledAttributes,G=c.attributeDivisors;ne[Z]=1,V[Z]===0&&(t.enableVertexAttribArray(Z),V[Z]=1),G[Z]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,J),G[Z]=J)}function w(){const Z=c.newAttributes,J=c.enabledAttributes;for(let ne=0,V=J.length;ne<V;ne++)J[ne]!==Z[ne]&&(t.disableVertexAttribArray(ne),J[ne]=0)}function I(Z,J,ne,V,G,ce,ae){ae===!0?t.vertexAttribIPointer(Z,J,ne,G,ce):t.vertexAttribPointer(Z,J,ne,V,G,ce)}function z(Z,J,ne,V){if(i.isWebGL2===!1&&(Z.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=V.attributes,ce=ne.getAttributes(),ae=J.defaultAttributeValues;for(const H in ce){const X=ce[H];if(X.location>=0){let pe=G[H];if(pe===void 0&&(H==="instanceMatrix"&&Z.instanceMatrix&&(pe=Z.instanceMatrix),H==="instanceColor"&&Z.instanceColor&&(pe=Z.instanceColor)),pe!==void 0){const me=pe.normalized,ge=pe.itemSize,Te=n.get(pe);if(Te===void 0)continue;const Ce=Te.buffer,Ae=Te.type,Be=Te.bytesPerElement,Qe=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||pe.gpuType===Sd);if(pe.isInterleavedBufferAttribute){const Le=pe.data,S=Le.stride,x=pe.offset;if(Le.isInstancedInterleavedBuffer){for(let g=0;g<X.locationSize;g++)R(X.location+g,Le.meshPerAttribute);Z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let g=0;g<X.locationSize;g++)M(X.location+g);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let g=0;g<X.locationSize;g++)I(X.location+g,ge/X.locationSize,Ae,me,S*Be,(x+ge/X.locationSize*g)*Be,Qe)}else{if(pe.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)R(X.location+Le,pe.meshPerAttribute);Z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Le=0;Le<X.locationSize;Le++)M(X.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Le=0;Le<X.locationSize;Le++)I(X.location+Le,ge/X.locationSize,Ae,me,ge*Be,ge/X.locationSize*Le*Be,Qe)}}else if(ae!==void 0){const me=ae[H];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(X.location,me);break;case 3:t.vertexAttrib3fv(X.location,me);break;case 4:t.vertexAttrib4fv(X.location,me);break;default:t.vertexAttrib1fv(X.location,me)}}}}w()}function A(){oe();for(const Z in o){const J=o[Z];for(const ne in J){const V=J[ne];for(const G in V)T(V[G].object),delete V[G];delete J[ne]}delete o[Z]}}function P(Z){if(o[Z.id]===void 0)return;const J=o[Z.id];for(const ne in J){const V=J[ne];for(const G in V)T(V[G].object),delete V[G];delete J[ne]}delete o[Z.id]}function le(Z){for(const J in o){const ne=o[J];if(ne[Z.id]===void 0)continue;const V=ne[Z.id];for(const G in V)T(V[G].object),delete V[G];delete ne[Z.id]}}function oe(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:oe,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:le,initAttributes:y,enableAttribute:M,disableUnusedAttributes:w}}function sx(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),n.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function ax(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),T=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),E=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,M=a||e.has("OES_texture_float"),R=y&&M,w=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:w}}function ox(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Si,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const T=d.clippingPlanes,E=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||T===null||T.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,y=b*4;let M=f.clippingState||null;l.value=M,M=u(T,h,y,m);for(let R=0;R!==y;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,T){const E=d!==null?d.length:0;let p=null;if(E!==0){if(p=l.value,T!==!0||p===null){const f=m+E*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,M=m;y!==E;++y,M+=4)a.copy(d[y]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function lx(t){let e=new WeakMap;function n(a,o){return o===Lo?a.mapping=mr:o===Po&&(a.mapping=_r),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Lo||o===Po)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sg(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cx extends Hd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rr=4,pu=[.125,.215,.35,.446,.526,.582],Ai=20,lo=new cx,mu=new nt;let co=null;const Ti=(1+Math.sqrt(5))/2,tr=1/Ti,_u=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ti,tr),new W(0,Ti,-tr),new W(tr,0,Ti),new W(-tr,0,Ti),new W(Ti,tr,0),new W(-Ti,tr,0)];class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){co=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ts,format:mn,colorSpace:wn,depthBuffer:!1},r=vu(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ux(s)),this._blurMaterial=fx(s,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,lo)}_sceneToCubeUV(e,n,i,r){const o=new sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(mu),u.toneMapping=oi,u.autoClear=!1;const m=new Tl({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),T=new Vn(new ds,m);let E=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,E=!0):(m.color.copy(mu),E=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;zs(r,b*y,f>2?y:0,y,y),u.setRenderTarget(r),E&&u.render(T,o),u.render(e,o)}T.geometry.dispose(),T.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,lo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(r-1)%_u.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Vn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,T=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),E=s/T,p=isFinite(s)?1+Math.floor(u*E):Ai;p>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);const f=[];let b=0;for(let I=0;I<Ai;++I){const z=I/E,A=Math.exp(-z*z/2);f.push(A),I===0?b+=A:I<p&&(b+=2*A)}for(let I=0;I<f.length;I++)f[I]=f[I]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=T,h.mipInt.value=y-i;const M=this._sizeLods[r],R=3*M*(r>y-rr?r-y+rr:0),w=4*(this._cubeSize-M);zs(n,R,w,3*M,2*M),l.setRenderTarget(n),l.render(d,lo)}}function ux(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-rr?l=pu[a-t+rr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,T=6,E=3,p=2,f=1,b=new Float32Array(E*T*m),y=new Float32Array(p*T*m),M=new Float32Array(f*T*m);for(let w=0;w<m;w++){const I=w%3*2/3-1,z=w>2?0:-1,A=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];b.set(A,E*T*w),y.set(h,p*T*w);const P=[w,w,w,w,w,w];M.set(P,f*T*w)}const R=new Cn;R.setAttribute("position",new xn(b,E)),R.setAttribute("uv",new xn(y,p)),R.setAttribute("faceIndex",new xn(M,f)),e.push(R),r>rr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vu(t,e,n){const i=new Oi(t,e,n);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fx(t,e,n){const i=new Float32Array(Ai),r=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function xu(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Eu(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lo||l===Po,u=l===mr||l===_r;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new gu(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new gu(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function hx(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function px(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const T in h.attributes)e.remove(h.attributes[T]);for(const T in h.morphAttributes){const E=h.morphAttributes[T];for(let p=0,f=E.length;p<f;p++)e.remove(E[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const T in h)e.update(h[T],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const T in m){const E=m[T];for(let p=0,f=E.length;p<f;p++)e.update(E[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,T=d.attributes.position;let E=0;if(m!==null){const b=m.array;E=m.version;for(let y=0,M=b.length;y<M;y+=3){const R=b[y+0],w=b[y+1],I=b[y+2];h.push(R,w,w,I,I,R)}}else if(T!==void 0){const b=T.array;E=T.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const R=y+0,w=y+1,I=y+2;h.push(R,w,w,I,I,R)}}else return;const p=new(Ld(h)?Bd:Fd)(h,1);p.version=E;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mx(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){t.drawElements(s,m,o,h*l),n.update(m,s,1)}function d(h,m,T){if(T===0)return;let E,p;if(r)E=t,p="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[p](s,m,o,h*l,T),n.update(m,s,T)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function _x(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gx(t,e){return t[0]-e[0]}function vx(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xx(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const T=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,E=T!==void 0?T.length:0;let p=s.get(u);if(p===void 0||p.count!==E){let J=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let A=0;y===!0&&(A=1),M===!0&&(A=2),R===!0&&(A=3);let P=u.attributes.position.count*A,le=1;P>e.maxTextureSize&&(le=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const oe=new Float32Array(P*le*4*E),B=new Dd(oe,P,le,E);B.type=ni,B.needsUpdate=!0;const Z=A*4;for(let ne=0;ne<E;ne++){const V=w[ne],G=I[ne],ce=z[ne],ae=P*le*4*ne;for(let H=0;H<V.count;H++){const X=H*Z;y===!0&&(a.fromBufferAttribute(V,H),oe[ae+X+0]=a.x,oe[ae+X+1]=a.y,oe[ae+X+2]=a.z,oe[ae+X+3]=0),M===!0&&(a.fromBufferAttribute(G,H),oe[ae+X+4]=a.x,oe[ae+X+5]=a.y,oe[ae+X+6]=a.z,oe[ae+X+7]=0),R===!0&&(a.fromBufferAttribute(ce,H),oe[ae+X+8]=a.x,oe[ae+X+9]=a.y,oe[ae+X+10]=a.z,oe[ae+X+11]=ce.itemSize===4?a.w:1)}}p={count:E,texture:B,size:new et(P,le)},s.set(u,p),u.addEventListener("dispose",J)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const b=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",b),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const T=h===void 0?0:h.length;let E=i[u.id];if(E===void 0||E.length!==T){E=[];for(let M=0;M<T;M++)E[M]=[M,0];i[u.id]=E}for(let M=0;M<T;M++){const R=E[M];R[0]=M,R[1]=h[M]}E.sort(vx);for(let M=0;M<8;M++)M<T&&E[M][1]?(o[M][0]=E[M][0],o[M][1]=E[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(gx);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const R=o[M],w=R[0],I=R[1];w!==Number.MAX_SAFE_INTEGER&&I?(p&&u.getAttribute("morphTarget"+M)!==p[w]&&u.setAttribute("morphTarget"+M,p[w]),f&&u.getAttribute("morphNormal"+M)!==f[w]&&u.setAttribute("morphNormal"+M,f[w]),r[M]=I,b+=I):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const y=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ex(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Wd=new $t,Xd=new Dd,Yd=new ag,$d=new zd,Mu=[],Su=[],Tu=new Float32Array(16),yu=new Float32Array(9),bu=new Float32Array(4);function br(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mu[r];if(s===void 0&&(s=new Float32Array(r),Mu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sa(t,e){let n=Su[e];n===void 0&&(n=new Int32Array(e),Su[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Mx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function Tx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function yx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function bx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(xt(n,i))return;bu.set(i),t.uniformMatrix2fv(this.addr,!1,bu),Et(n,i)}}function Ax(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(xt(n,i))return;yu.set(i),t.uniformMatrix3fv(this.addr,!1,yu),Et(n,i)}}function Rx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(xt(n,i))return;Tu.set(i),t.uniformMatrix4fv(this.addr,!1,Tu),Et(n,i)}}function wx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function Lx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function Px(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Ix(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Dx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function Nx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Ux(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Ox(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Wd,r)}function Fx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Yd,r)}function Bx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$d,r)}function kx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xd,r)}function Hx(t){switch(t){case 5126:return Mx;case 35664:return Sx;case 35665:return Tx;case 35666:return yx;case 35674:return bx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return wx;case 35667:case 35671:return Cx;case 35668:case 35672:return Lx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return kx}}function zx(t,e){t.uniform1fv(this.addr,e)}function Gx(t,e){const n=br(e,this.size,2);t.uniform2fv(this.addr,n)}function Vx(t,e){const n=br(e,this.size,3);t.uniform3fv(this.addr,n)}function Wx(t,e){const n=br(e,this.size,4);t.uniform4fv(this.addr,n)}function Xx(t,e){const n=br(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Yx(t,e){const n=br(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $x(t,e){const n=br(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qx(t,e){t.uniform1iv(this.addr,e)}function jx(t,e){t.uniform2iv(this.addr,e)}function Kx(t,e){t.uniform3iv(this.addr,e)}function Zx(t,e){t.uniform4iv(this.addr,e)}function Jx(t,e){t.uniform1uiv(this.addr,e)}function Qx(t,e){t.uniform2uiv(this.addr,e)}function eE(t,e){t.uniform3uiv(this.addr,e)}function tE(t,e){t.uniform4uiv(this.addr,e)}function nE(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Wd,s[a])}function iE(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Yd,s[a])}function rE(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||$d,s[a])}function sE(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Xd,s[a])}function aE(t){switch(t){case 5126:return zx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return $x;case 5124:case 35670:return qx;case 35667:case 35671:return jx;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Qx;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class oE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Hx(n.type)}}class lE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=aE(n.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Au(t,e){t.seq.push(e),t.map[e.id]=e}function uE(t,e,n){const i=t.name,r=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),a=uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Au(n,c===void 0?new oE(o,t,e):new lE(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new cE(o),Au(n,d)),n=d}}}class Js{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);uE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ru(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let fE=0;function dE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function hE(t){switch(t){case wn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function wu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dE(t.getShaderSource(e),a)}else return r}function pE(t,e){const n=hE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function mE(t,e){let n;switch(e){case S_:n="Linear";break;case T_:n="Reinhard";break;case y_:n="OptimizedCineon";break;case b_:n="ACESFilmic";break;case A_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _E(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function gE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function kr(t){return t!==""}function Cu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(t){return t.replace(xE,ME)}const EE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ME(t,e){let n=Ge[e];if(n===void 0){const i=EE.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fo(n)}const SE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(t){return t.replace(SE,TE)}function TE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iu(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function bE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mr:case _r:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function wE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=yE(n),c=bE(n),u=AE(n),d=RE(n),h=wE(n),m=n.isWebGL2?"":_E(n),T=gE(s),E=r.createProgram();let p,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(kr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(p=[Iu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[m,Iu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==oi?mE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,pE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kr).join(`
`)),a=Fo(a),a=Cu(a,n),a=Lu(a,n),o=Fo(o),o=Cu(o,n),o=Lu(o,n),a=Pu(a),o=Pu(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+p+a,M=b+f+o,R=Ru(r,r.VERTEX_SHADER,y),w=Ru(r,r.FRAGMENT_SHADER,M);if(r.attachShader(E,R),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E),t.debug.checkShaderErrors){const A=r.getProgramInfoLog(E).trim(),P=r.getShaderInfoLog(R).trim(),le=r.getShaderInfoLog(w).trim();let oe=!0,B=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,w);else{const Z=wu(r,R,"vertex"),J=wu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+Z+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||le==="")&&(B=!1);B&&(this.diagnostics={runnable:oe,programLog:A,vertexShader:{log:P,prefix:p},fragmentShader:{log:le,prefix:f}})}r.deleteShader(R),r.deleteShader(w);let I;this.getUniforms=function(){return I===void 0&&(I=new Js(r,E)),I};let z;return this.getAttributes=function(){return z===void 0&&(z=vE(r,E)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=w,this}let LE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IE(e),n.set(e,i)),i}}class IE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function DE(t,e,n,i,r,s,a){const o=new Ud,l=new PE,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return A===0?"uv":`uv${A}`}function p(A,P,le,oe,B){const Z=oe.fog,J=B.geometry,ne=A.isMeshStandardMaterial?oe.environment:null,V=(A.isMeshStandardMaterial?n:e).get(A.envMap||ne),G=V&&V.mapping===xa?V.image.height:null,ce=T[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,H=ae!==void 0?ae.length:0;let X=0;J.morphAttributes.position!==void 0&&(X=1),J.morphAttributes.normal!==void 0&&(X=2),J.morphAttributes.color!==void 0&&(X=3);let pe,me,ge,Te;if(ce){const rt=yn[ce];pe=rt.vertexShader,me=rt.fragmentShader}else pe=A.vertexShader,me=A.fragmentShader,l.update(A),ge=l.getVertexShaderID(A),Te=l.getFragmentShaderID(A);const Ce=t.getRenderTarget(),Ae=B.isInstancedMesh===!0,Be=!!A.map,Qe=!!A.matcap,Le=!!V,S=!!A.aoMap,x=!!A.lightMap,g=!!A.bumpMap,C=!!A.normalMap,D=!!A.displacementMap,F=!!A.emissiveMap,$=!!A.metalnessMap,j=!!A.roughnessMap,re=A.anisotropy>0,se=A.clearcoat>0,fe=A.iridescence>0,v=A.sheen>0,_=A.transmission>0,N=re&&!!A.anisotropyMap,q=se&&!!A.clearcoatMap,te=se&&!!A.clearcoatNormalMap,ie=se&&!!A.clearcoatRoughnessMap,de=fe&&!!A.iridescenceMap,ue=fe&&!!A.iridescenceThicknessMap,Y=v&&!!A.sheenColorMap,we=v&&!!A.sheenRoughnessMap,be=!!A.specularMap,Re=!!A.specularColorMap,ve=!!A.specularIntensityMap,Me=_&&!!A.transmissionMap,He=_&&!!A.thicknessMap,tt=!!A.gradientMap,U=!!A.alphaMap,xe=A.alphaTest>0,K=!!A.alphaHash,he=!!A.extensions,Se=!!J.attributes.uv1,Ke=!!J.attributes.uv2,ot=!!J.attributes.uv3;let ft=oi;return A.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ft=t.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:pe,fragmentShader:me,defines:A.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:wn,map:Be,matcap:Qe,envMap:Le,envMapMode:Le&&V.mapping,envMapCubeUVHeight:G,aoMap:S,lightMap:x,bumpMap:g,normalMap:C,displacementMap:h&&D,emissiveMap:F,normalMapObjectSpace:C&&A.normalMapType===H_,normalMapTangentSpace:C&&A.normalMapType===k_,metalnessMap:$,roughnessMap:j,anisotropy:re,anisotropyMap:N,clearcoat:se,clearcoatMap:q,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:fe,iridescenceMap:de,iridescenceThicknessMap:ue,sheen:v,sheenColorMap:Y,sheenRoughnessMap:we,specularMap:be,specularColorMap:Re,specularIntensityMap:ve,transmission:_,transmissionMap:Me,thicknessMap:He,gradientMap:tt,opaque:A.transparent===!1&&A.blending===ur,alphaMap:U,alphaTest:xe,alphaHash:K,combine:A.combine,mapUv:Be&&E(A.map.channel),aoMapUv:S&&E(A.aoMap.channel),lightMapUv:x&&E(A.lightMap.channel),bumpMapUv:g&&E(A.bumpMap.channel),normalMapUv:C&&E(A.normalMap.channel),displacementMapUv:D&&E(A.displacementMap.channel),emissiveMapUv:F&&E(A.emissiveMap.channel),metalnessMapUv:$&&E(A.metalnessMap.channel),roughnessMapUv:j&&E(A.roughnessMap.channel),anisotropyMapUv:N&&E(A.anisotropyMap.channel),clearcoatMapUv:q&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:te&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:we&&E(A.sheenRoughnessMap.channel),specularMapUv:be&&E(A.specularMap.channel),specularColorMapUv:Re&&E(A.specularColorMap.channel),specularIntensityMapUv:ve&&E(A.specularIntensityMap.channel),transmissionMapUv:Me&&E(A.transmissionMap.channel),thicknessMapUv:He&&E(A.thicknessMap.channel),alphaMapUv:U&&E(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(C||re),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:Ke,vertexUv3s:ot,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Be||U),fog:!!Z,useFog:A.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&le.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,useLegacyLights:t._useLegacyLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hn,flipSided:A.side===Yt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:he&&A.extensions.derivatives===!0,extensionFragDepth:he&&A.extensions.fragDepth===!0,extensionDrawBuffers:he&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function f(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const le in A.defines)P.push(le),P.push(A.defines[le]);return A.isRawShaderMaterial===!1&&(b(P,A),y(P,A),P.push(t.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function b(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function y(A,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.matcap&&o.enable(4),P.envMap&&o.enable(5),P.normalMapObjectSpace&&o.enable(6),P.normalMapTangentSpace&&o.enable(7),P.clearcoat&&o.enable(8),P.iridescence&&o.enable(9),P.alphaTest&&o.enable(10),P.vertexColors&&o.enable(11),P.vertexAlphas&&o.enable(12),P.vertexUv1s&&o.enable(13),P.vertexUv2s&&o.enable(14),P.vertexUv3s&&o.enable(15),P.vertexTangents&&o.enable(16),P.anisotropy&&o.enable(17),A.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),A.push(o.mask)}function M(A){const P=T[A.type];let le;if(P){const oe=yn[P];le=vg.clone(oe.uniforms)}else le=A.uniforms;return le}function R(A,P){let le;for(let oe=0,B=c.length;oe<B;oe++){const Z=c[oe];if(Z.cacheKey===P){le=Z,++le.usedTimes;break}}return le===void 0&&(le=new CE(t,P,A,s),c.push(le)),le}function w(A){if(--A.usedTimes===0){const P=c.indexOf(A);c[P]=c[c.length-1],c.pop(),A.destroy()}}function I(A){l.remove(A)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:z}}function NE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function UE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Du(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nu(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,T,E,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:T,renderOrder:d.renderOrder,z:E,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=T,f.renderOrder=d.renderOrder,f.z=E,f.group=p),e++,f}function o(d,h,m,T,E,p){const f=a(d,h,m,T,E,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,T,E,p){const f=a(d,h,m,T,E,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||UE),i.length>1&&i.sort(h||Du),r.length>1&&r.sort(h||Du)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function OE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Nu,t.set(i,[a])):r>=s.length?(a=new Nu,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function FE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new nt};break;case"SpotLight":n={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function BE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kE=0;function HE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zE(t,e){const n=new FE,i=BE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new bt,o=new bt;function l(u,d){let h=0,m=0,T=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let E=0,p=0,f=0,b=0,y=0,M=0,R=0,w=0,I=0,z=0;u.sort(HE);const A=d===!0?Math.PI:1;for(let le=0,oe=u.length;le<oe;le++){const B=u[le],Z=B.color,J=B.intensity,ne=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=Z.r*J*A,m+=Z.g*J*A,T+=Z.b*J*A;else if(B.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],J);else if(B.isDirectionalLight){const G=n.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const ce=B.shadow,ae=i.get(B);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.directionalShadow[E]=ae,r.directionalShadowMap[E]=V,r.directionalShadowMatrix[E]=B.shadow.matrix,M++}r.directional[E]=G,E++}else if(B.isSpotLight){const G=n.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(Z).multiplyScalar(J*A),G.distance=ne,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,r.spot[f]=G;const ce=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,ce.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[f]=ce.matrix,B.castShadow){const ae=i.get(B);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=V,w++}f++}else if(B.isRectAreaLight){const G=n.get(B);G.color.copy(Z).multiplyScalar(J),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=G,b++}else if(B.isPointLight){const G=n.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*A),G.distance=B.distance,G.decay=B.decay,B.castShadow){const ce=B.shadow,ae=i.get(B);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,ae.shadowCameraNear=ce.camera.near,ae.shadowCameraFar=ce.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=B.shadow.matrix,R++}r.point[p]=G,p++}else if(B.isHemisphereLight){const G=n.get(B);G.skyColor.copy(B.color).multiplyScalar(J*A),G.groundColor.copy(B.groundColor).multiplyScalar(J*A),r.hemi[y]=G,y++}}b>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=T;const P=r.hash;(P.directionalLength!==E||P.pointLength!==p||P.spotLength!==f||P.rectAreaLength!==b||P.hemiLength!==y||P.numDirectionalShadows!==M||P.numPointShadows!==R||P.numSpotShadows!==w||P.numSpotMaps!==I)&&(r.directional.length=E,r.spot.length=f,r.rectArea.length=b,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+I-z,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=z,P.directionalLength=E,P.pointLength=p,P.spotLength=f,P.rectAreaLength=b,P.hemiLength=y,P.numDirectionalShadows=M,P.numPointShadows=R,P.numSpotShadows=w,P.numSpotMaps=I,r.version=kE++)}function c(u,d){let h=0,m=0,T=0,E=0,p=0;const f=d.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const M=u[b];if(M.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),h++}else if(M.isSpotLight){const R=r.spot[T];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),T++}else if(M.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),E++}else if(M.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function Uu(t,e){const n=new zE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function GE(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Uu(t,e),n.set(s,[l])):a>=o.length?(l=new Uu(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VE extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $E(t,e,n){let i=new Gd;const r=new et,s=new et,a=new Rt,o=new VE({depthPacking:B_}),l=new WE,c={},u=n.maxTextureSize,d={[ui]:Yt,[Yt]:ui,[Hn]:Hn},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:XE,fragmentShader:YE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const T=new Cn;T.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vn(T,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let f=this.type;this.render=function(R,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const z=t.getRenderTarget(),A=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),le=t.state;le.setBlending(ai),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const oe=f!==Bn&&this.type===Bn,B=f===Bn&&this.type!==Bn;for(let Z=0,J=R.length;Z<J;Z++){const ne=R[Z],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const G=V.getFrameExtents();if(r.multiply(G),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||oe===!0||B===!0){const ae=this.type!==Bn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(r.x,r.y,ae),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ce=V.getViewportCount();for(let ae=0;ae<ce;ae++){const H=V.getViewport(ae);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),le.viewport(a),V.updateMatrices(ne,ae),i=V.getFrustum(),M(w,I,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&b(V,I),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(z,A,P)};function b(R,w){const I=e.update(E);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Oi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,I,h,E,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,I,m,E,null)}function y(R,w,I,z){let A=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)A=P;else if(A=I.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const le=A.uuid,oe=w.uuid;let B=c[le];B===void 0&&(B={},c[le]=B);let Z=B[oe];Z===void 0&&(Z=A.clone(),B[oe]=Z),A=Z}if(A.visible=w.visible,A.wireframe=w.wireframe,z===Bn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const le=t.properties.get(A);le.light=I}return A}function M(R,w,I,z,A){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===Bn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const oe=e.update(R),B=R.material;if(Array.isArray(B)){const Z=oe.groups;for(let J=0,ne=Z.length;J<ne;J++){const V=Z[J],G=B[V.materialIndex];if(G&&G.visible){const ce=y(R,G,z,A);t.renderBufferDirect(I,null,oe,ce,R,V)}}}else if(B.visible){const Z=y(R,B,z,A);t.renderBufferDirect(I,null,oe,Z,R,null)}}const le=R.children;for(let oe=0,B=le.length;oe<B;oe++)M(le[oe],w,I,z,A)}}function qE(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const xe=new Rt;let K=null;const he=new Rt(0,0,0,0);return{setMask:function(Se){K!==Se&&!U&&(t.colorMask(Se,Se,Se,Se),K=Se)},setLocked:function(Se){U=Se},setClear:function(Se,Ke,ot,ft,Yn){Yn===!0&&(Se*=ft,Ke*=ft,ot*=ft),xe.set(Se,Ke,ot,ft),he.equals(xe)===!1&&(t.clearColor(Se,Ke,ot,ft),he.copy(xe))},reset:function(){U=!1,K=null,he.set(-1,0,0,0)}}}function s(){let U=!1,xe=null,K=null,he=null;return{setTest:function(Se){Se?Ce(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!U&&(t.depthMask(Se),xe=Se)},setFunc:function(Se){if(K!==Se){switch(Se){case h_:t.depthFunc(t.NEVER);break;case p_:t.depthFunc(t.ALWAYS);break;case m_:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case __:t.depthFunc(t.EQUAL);break;case g_:t.depthFunc(t.GEQUAL);break;case v_:t.depthFunc(t.GREATER);break;case x_:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=Se}},setLocked:function(Se){U=Se},setClear:function(Se){he!==Se&&(t.clearDepth(Se),he=Se)},reset:function(){U=!1,xe=null,K=null,he=null}}}function a(){let U=!1,xe=null,K=null,he=null,Se=null,Ke=null,ot=null,ft=null,Yn=null;return{setTest:function(rt){U||(rt?Ce(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(rt){xe!==rt&&!U&&(t.stencilMask(rt),xe=rt)},setFunc:function(rt,En,Dt){(K!==rt||he!==En||Se!==Dt)&&(t.stencilFunc(rt,En,Dt),K=rt,he=En,Se=Dt)},setOp:function(rt,En,Dt){(Ke!==rt||ot!==En||ft!==Dt)&&(t.stencilOp(rt,En,Dt),Ke=rt,ot=En,ft=Dt)},setLocked:function(rt){U=rt},setClear:function(rt){Yn!==rt&&(t.clearStencil(rt),Yn=rt)},reset:function(){U=!1,xe=null,K=null,he=null,Se=null,Ke=null,ot=null,ft=null,Yn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let h={},m={},T=new WeakMap,E=[],p=null,f=!1,b=null,y=null,M=null,R=null,w=null,I=null,z=null,A=!1,P=null,le=null,oe=null,B=null,Z=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,V=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=V>=2);let ce=null,ae={};const H=t.getParameter(t.SCISSOR_BOX),X=t.getParameter(t.VIEWPORT),pe=new Rt().fromArray(H),me=new Rt().fromArray(X);function ge(U,xe,K,he){const Se=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(U,Ke),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<K;ot++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(xe+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ke}const Te={};Te[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(t.DEPTH_TEST),l.setFunc(Co),D(!1),F(Ec),Ce(t.CULL_FACE),g(ai);function Ce(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Ae(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Be(U,xe){return m[U]!==xe?(t.bindFramebuffer(U,xe),m[U]=xe,i&&(U===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Qe(U,xe){let K=E,he=!1;if(U)if(K=T.get(xe),K===void 0&&(K=[],T.set(xe,K)),U.isWebGLMultipleRenderTargets){const Se=U.texture;if(K.length!==Se.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,ot=Se.length;Ke<ot;Ke++)K[Ke]=t.COLOR_ATTACHMENT0+Ke;K.length=Se.length,he=!0}}else K[0]!==t.COLOR_ATTACHMENT0&&(K[0]=t.COLOR_ATTACHMENT0,he=!0);else K[0]!==t.BACK&&(K[0]=t.BACK,he=!0);he&&(n.isWebGL2?t.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Le(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const S={[nr]:t.FUNC_ADD,[n_]:t.FUNC_SUBTRACT,[i_]:t.FUNC_REVERSE_SUBTRACT};if(i)S[yc]=t.MIN,S[bc]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(S[yc]=U.MIN_EXT,S[bc]=U.MAX_EXT)}const x={[r_]:t.ZERO,[s_]:t.ONE,[a_]:t.SRC_COLOR,[vd]:t.SRC_ALPHA,[d_]:t.SRC_ALPHA_SATURATE,[u_]:t.DST_COLOR,[l_]:t.DST_ALPHA,[o_]:t.ONE_MINUS_SRC_COLOR,[xd]:t.ONE_MINUS_SRC_ALPHA,[f_]:t.ONE_MINUS_DST_COLOR,[c_]:t.ONE_MINUS_DST_ALPHA};function g(U,xe,K,he,Se,Ke,ot,ft){if(U===ai){f===!0&&(Ae(t.BLEND),f=!1);return}if(f===!1&&(Ce(t.BLEND),f=!0),U!==t_){if(U!==b||ft!==A){if((y!==nr||w!==nr)&&(t.blendEquation(t.FUNC_ADD),y=nr,w=nr),ft)switch(U){case ur:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFunc(t.ONE,t.ONE);break;case Sc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tc:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ur:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tc:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,R=null,I=null,z=null,b=U,A=ft}return}Se=Se||xe,Ke=Ke||K,ot=ot||he,(xe!==y||Se!==w)&&(t.blendEquationSeparate(S[xe],S[Se]),y=xe,w=Se),(K!==M||he!==R||Ke!==I||ot!==z)&&(t.blendFuncSeparate(x[K],x[he],x[Ke],x[ot]),M=K,R=he,I=Ke,z=ot),b=U,A=!1}function C(U,xe){U.side===Hn?Ae(t.CULL_FACE):Ce(t.CULL_FACE);let K=U.side===Yt;xe&&(K=!K),D(K),U.blending===ur&&U.transparent===!1?g(ai):g(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const he=U.stencilWrite;c.setTest(he),he&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),j(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ce(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function D(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function F(U){U!==Jm?(Ce(t.CULL_FACE),U!==le&&(U===Ec?t.cullFace(t.BACK):U===Qm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),le=U}function $(U){U!==oe&&(ne&&t.lineWidth(U),oe=U)}function j(U,xe,K){U?(Ce(t.POLYGON_OFFSET_FILL),(B!==xe||Z!==K)&&(t.polygonOffset(xe,K),B=xe,Z=K)):Ae(t.POLYGON_OFFSET_FILL)}function re(U){U?Ce(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function se(U){U===void 0&&(U=t.TEXTURE0+J-1),ce!==U&&(t.activeTexture(U),ce=U)}function fe(U,xe,K){K===void 0&&(ce===null?K=t.TEXTURE0+J-1:K=ce);let he=ae[K];he===void 0&&(he={type:void 0,texture:void 0},ae[K]=he),(he.type!==U||he.texture!==xe)&&(ce!==K&&(t.activeTexture(K),ce=K),t.bindTexture(U,xe||Te[U]),he.type=U,he.texture=xe)}function v(){const U=ae[ce];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){pe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function ve(U){me.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),me.copy(U))}function Me(U,xe){let K=d.get(xe);K===void 0&&(K=new WeakMap,d.set(xe,K));let he=K.get(U);he===void 0&&(he=t.getUniformBlockIndex(xe,U.name),K.set(U,he))}function He(U,xe){const he=d.get(xe).get(U);u.get(xe)!==he&&(t.uniformBlockBinding(xe,he,U.__bindingPointIndex),u.set(xe,he))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ce=null,ae={},m={},T=new WeakMap,E=[],p=null,f=!1,b=null,y=null,M=null,R=null,w=null,I=null,z=null,A=!1,P=null,le=null,oe=null,B=null,Z=null,pe.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Ae,bindFramebuffer:Be,drawBuffers:Qe,useProgram:Le,setBlending:g,setMaterial:C,setFlipSided:D,setCullFace:F,setLineWidth:$,setPolygonOffset:j,setScissorTest:re,activeTexture:se,bindTexture:fe,unbindTexture:v,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:we,texImage3D:be,updateUBOMapping:Me,uniformBlockBinding:He,texStorage2D:ue,texStorage3D:Y,texSubImage2D:q,texSubImage3D:te,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Re,viewport:ve,reset:tt}}function jE(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let E;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(v,_){return f?new OffscreenCanvas(v,_):ns("canvas")}function y(v,_,N,q){let te=1;if((v.width>q||v.height>q)&&(te=q/Math.max(v.width,v.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const ie=_?Oo:Math.floor,de=ie(te*v.width),ue=ie(te*v.height);E===void 0&&(E=b(de,ue));const Y=N?b(de,ue):E;return Y.width=de,Y.height=ue,Y.getContext("2d").drawImage(v,0,0,de,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+de+"x"+ue+")."),Y}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function M(v){return Jc(v.width)&&Jc(v.height)}function R(v){return o?!1:v.wrapS!==pn||v.wrapT!==pn||v.minFilter!==Bt&&v.minFilter!==rn}function w(v,_){return v.generateMipmaps&&_&&v.minFilter!==Bt&&v.minFilter!==rn}function I(v){t.generateMipmap(v)}function z(v,_,N,q,te=!1){if(o===!1)return _;if(v!==null){if(t[v]!==void 0)return t[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ie=_;return _===t.RED&&(N===t.FLOAT&&(ie=t.R32F),N===t.HALF_FLOAT&&(ie=t.R16F),N===t.UNSIGNED_BYTE&&(ie=t.R8)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(ie=t.R8UI),N===t.UNSIGNED_SHORT&&(ie=t.R16UI),N===t.UNSIGNED_INT&&(ie=t.R32UI),N===t.BYTE&&(ie=t.R8I),N===t.SHORT&&(ie=t.R16I),N===t.INT&&(ie=t.R32I)),_===t.RG&&(N===t.FLOAT&&(ie=t.RG32F),N===t.HALF_FLOAT&&(ie=t.RG16F),N===t.UNSIGNED_BYTE&&(ie=t.RG8)),_===t.RGBA&&(N===t.FLOAT&&(ie=t.RGBA32F),N===t.HALF_FLOAT&&(ie=t.RGBA16F),N===t.UNSIGNED_BYTE&&(ie=q===Ve&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)),(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function A(v,_,N){return w(v,N)===!0||v.isFramebufferTexture&&v.minFilter!==Bt&&v.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function P(v){return v===Bt||v===Ac||v===Oa?t.NEAREST:t.LINEAR}function le(v){const _=v.target;_.removeEventListener("dispose",le),B(_),_.isVideoTexture&&T.delete(_)}function oe(v){const _=v.target;_.removeEventListener("dispose",oe),J(_)}function B(v){const _=i.get(v);if(_.__webglInit===void 0)return;const N=v.source,q=p.get(N);if(q){const te=q[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&Z(v),Object.keys(q).length===0&&p.delete(N)}i.remove(v)}function Z(v){const _=i.get(v);t.deleteTexture(_.__webglTexture);const N=v.source,q=p.get(N);delete q[_.__cacheKey],a.memory.textures--}function J(v){const _=v.texture,N=i.get(v),q=i.get(_);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(N.__webglFramebuffer[te]))for(let ie=0;ie<N.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(N.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(N.__webglFramebuffer[te]);N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[te])}else{if(Array.isArray(N.__webglFramebuffer))for(let te=0;te<N.__webglFramebuffer.length;te++)t.deleteFramebuffer(N.__webglFramebuffer[te]);else t.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let te=0;te<N.__webglColorRenderbuffer.length;te++)N.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[te]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let te=0,ie=_.length;te<ie;te++){const de=i.get(_[te]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(_[te])}i.remove(_),i.remove(v)}let ne=0;function V(){ne=0}function G(){const v=ne;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),ne+=1,v}function ce(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function ae(v,_){const N=i.get(v);if(v.isVideoTexture&&se(v),v.isRenderTargetTexture===!1&&v.version>0&&N.__version!==v.version){const q=v.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(N,v,_);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function H(v,_){const N=i.get(v);if(v.version>0&&N.__version!==v.version){Be(N,v,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function X(v,_){const N=i.get(v);if(v.version>0&&N.__version!==v.version){Be(N,v,_);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function pe(v,_){const N=i.get(v);if(v.version>0&&N.__version!==v.version){Qe(N,v,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}const me={[Io]:t.REPEAT,[pn]:t.CLAMP_TO_EDGE,[Do]:t.MIRRORED_REPEAT},ge={[Bt]:t.NEAREST,[Ac]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[R_]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},Te={[G_]:t.NEVER,[j_]:t.ALWAYS,[V_]:t.LESS,[X_]:t.LEQUAL,[W_]:t.EQUAL,[q_]:t.GEQUAL,[Y_]:t.GREATER,[$_]:t.NOTEQUAL};function Ce(v,_,N){if(N?(t.texParameteri(v,t.TEXTURE_WRAP_S,me[_.wrapS]),t.texParameteri(v,t.TEXTURE_WRAP_T,me[_.wrapT]),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,me[_.wrapR]),t.texParameteri(v,t.TEXTURE_MAG_FILTER,ge[_.magFilter]),t.texParameteri(v,t.TEXTURE_MIN_FILTER,ge[_.minFilter])):(t.texParameteri(v,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(v,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(_.wrapS!==pn||_.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(v,t.TEXTURE_MAG_FILTER,P(_.magFilter)),t.texParameteri(v,t.TEXTURE_MIN_FILTER,P(_.minFilter)),_.minFilter!==Bt&&_.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(t.texParameteri(v,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(v,t.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Bt||_.minFilter!==Oa&&_.minFilter!==es||_.type===ni&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(t.texParameterf(v,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Ae(v,_){let N=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",le));const q=_.source;let te=p.get(q);te===void 0&&(te={},p.set(q,te));const ie=ce(_);if(ie!==v.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),te[ie].usedTimes++;const de=te[v.__cacheKey];de!==void 0&&(te[v.__cacheKey].usedTimes--,de.usedTimes===0&&Z(_)),v.__cacheKey=ie,v.__webglTexture=te[ie].texture}return N}function Be(v,_,N){let q=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=t.TEXTURE_3D);const te=Ae(v,_),ie=_.source;n.bindTexture(q,v.__webglTexture,t.TEXTURE0+N);const de=i.get(ie);if(ie.version!==de.__version||te===!0){n.activeTexture(t.TEXTURE0+N),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ue=R(_)&&M(_.image)===!1;let Y=y(_.image,ue,!1,u);Y=fe(_,Y);const we=M(Y)||o,be=s.convert(_.format,_.colorSpace);let Re=s.convert(_.type),ve=z(_.internalFormat,be,Re,_.colorSpace);Ce(q,_,we);let Me;const He=_.mipmaps,tt=o&&_.isVideoTexture!==!0,U=de.__version===void 0||te===!0,xe=A(_,Y,we);if(_.isDepthTexture)ve=t.DEPTH_COMPONENT,o?_.type===ni?ve=t.DEPTH_COMPONENT32F:_.type===ti?ve=t.DEPTH_COMPONENT24:_.type===Ii?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:_.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Di&&ve===t.DEPTH_COMPONENT&&_.type!==Sl&&_.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ti,Re=s.convert(_.type)),_.format===gr&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,_.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ii,Re=s.convert(_.type))),U&&(tt?n.texStorage2D(t.TEXTURE_2D,1,ve,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,ve,Y.width,Y.height,0,be,Re,null));else if(_.isDataTexture)if(He.length>0&&we){tt&&U&&n.texStorage2D(t.TEXTURE_2D,xe,ve,He[0].width,He[0].height);for(let K=0,he=He.length;K<he;K++)Me=He[K],tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,be,Re,Me.data):n.texImage2D(t.TEXTURE_2D,K,ve,Me.width,Me.height,0,be,Re,Me.data);_.generateMipmaps=!1}else tt?(U&&n.texStorage2D(t.TEXTURE_2D,xe,ve,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,be,Re,Y.data)):n.texImage2D(t.TEXTURE_2D,0,ve,Y.width,Y.height,0,be,Re,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){tt&&U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ve,He[0].width,He[0].height,Y.depth);for(let K=0,he=He.length;K<he;K++)Me=He[K],_.format!==mn?be!==null?tt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Y.depth,be,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ve,Me.width,Me.height,Y.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Y.depth,be,Re,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ve,Me.width,Me.height,Y.depth,0,be,Re,Me.data)}else{tt&&U&&n.texStorage2D(t.TEXTURE_2D,xe,ve,He[0].width,He[0].height);for(let K=0,he=He.length;K<he;K++)Me=He[K],_.format!==mn?be!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,be,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,be,Re,Me.data):n.texImage2D(t.TEXTURE_2D,K,ve,Me.width,Me.height,0,be,Re,Me.data)}else if(_.isDataArrayTexture)tt?(U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ve,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,be,Re,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,Y.width,Y.height,Y.depth,0,be,Re,Y.data);else if(_.isData3DTexture)tt?(U&&n.texStorage3D(t.TEXTURE_3D,xe,ve,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,be,Re,Y.data)):n.texImage3D(t.TEXTURE_3D,0,ve,Y.width,Y.height,Y.depth,0,be,Re,Y.data);else if(_.isFramebufferTexture){if(U)if(tt)n.texStorage2D(t.TEXTURE_2D,xe,ve,Y.width,Y.height);else{let K=Y.width,he=Y.height;for(let Se=0;Se<xe;Se++)n.texImage2D(t.TEXTURE_2D,Se,ve,K,he,0,be,Re,null),K>>=1,he>>=1}}else if(He.length>0&&we){tt&&U&&n.texStorage2D(t.TEXTURE_2D,xe,ve,He[0].width,He[0].height);for(let K=0,he=He.length;K<he;K++)Me=He[K],tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,be,Re,Me):n.texImage2D(t.TEXTURE_2D,K,ve,be,Re,Me);_.generateMipmaps=!1}else tt?(U&&n.texStorage2D(t.TEXTURE_2D,xe,ve,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Re,Y)):n.texImage2D(t.TEXTURE_2D,0,ve,be,Re,Y);w(_,we)&&I(q),de.__version=ie.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Qe(v,_,N){if(_.image.length!==6)return;const q=Ae(v,_),te=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,v.__webglTexture,t.TEXTURE0+N);const ie=i.get(te);if(te.version!==ie.__version||q===!0){n.activeTexture(t.TEXTURE0+N),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let K=0;K<6;K++)!de&&!ue?Y[K]=y(_.image[K],!1,!0,c):Y[K]=ue?_.image[K].image:_.image[K],Y[K]=fe(_,Y[K]);const we=Y[0],be=M(we)||o,Re=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Me=z(_.internalFormat,Re,ve,_.colorSpace),He=o&&_.isVideoTexture!==!0,tt=ie.__version===void 0||q===!0;let U=A(_,we,be);Ce(t.TEXTURE_CUBE_MAP,_,be);let xe;if(de){He&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Me,we.width,we.height);for(let K=0;K<6;K++){xe=Y[K].mipmaps;for(let he=0;he<xe.length;he++){const Se=xe[he];_.format!==mn?Re!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Se.width,Se.height,Re,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Se.width,Se.height,Re,ve,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Me,Se.width,Se.height,0,Re,ve,Se.data)}}}else{xe=_.mipmaps,He&&tt&&(xe.length>0&&U++,n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Me,Y[0].width,Y[0].height));for(let K=0;K<6;K++)if(ue){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Y[K].width,Y[K].height,Re,ve,Y[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Y[K].width,Y[K].height,0,Re,ve,Y[K].data);for(let he=0;he<xe.length;he++){const Ke=xe[he].image[K].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Ke.width,Ke.height,Re,ve,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Me,Ke.width,Ke.height,0,Re,ve,Ke.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ve,Y[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Re,ve,Y[K]);for(let he=0;he<xe.length;he++){const Se=xe[he];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Re,ve,Se.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Me,Re,ve,Se.image[K])}}}w(_,be)&&I(t.TEXTURE_CUBE_MAP),ie.__version=te.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Le(v,_,N,q,te,ie){const de=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),Y=z(N.internalFormat,de,ue,N.colorSpace);if(!i.get(_).__hasExternalTextures){const be=Math.max(1,_.width>>ie),Re=Math.max(1,_.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,Y,be,Re,_.depth,0,de,ue,null):n.texImage2D(te,ie,Y,be,Re,0,de,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,v),re(_)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,i.get(N).__webglTexture,0,j(_)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,i.get(N).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function S(v,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,v),_.depthBuffer&&!_.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(N||re(_)){const te=_.depthTexture;te&&te.isDepthTexture&&(te.type===ni?q=t.DEPTH_COMPONENT32F:te.type===ti&&(q=t.DEPTH_COMPONENT24));const ie=j(_);re(_)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,q,_.width,_.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,q,_.width,_.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,v)}else if(_.depthBuffer&&_.stencilBuffer){const q=j(_);N&&re(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,_.width,_.height):re(_)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,v)}else{const q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<q.length;te++){const ie=q[te],de=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),Y=z(ie.internalFormat,de,ue,ie.colorSpace),we=j(_);N&&re(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,Y,_.width,_.height):re(_)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,Y,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Y,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function x(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const q=i.get(_.depthTexture).__webglTexture,te=j(_);if(_.depthTexture.format===Di)re(_)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(_.depthTexture.format===gr)re(_)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function g(v){const _=i.get(v),N=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");x(_.__webglFramebuffer,v)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=t.createRenderbuffer(),S(_.__webglDepthbuffer[q],v,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),S(_.__webglDepthbuffer,v,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function C(v,_,N){const q=i.get(v);_!==void 0&&Le(q.__webglFramebuffer,v,v.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&g(v)}function D(v){const _=v.texture,N=i.get(v),q=i.get(_);v.addEventListener("dispose",oe),v.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=_.version,a.memory.textures++);const te=v.isWebGLCubeRenderTarget===!0,ie=v.isWebGLMultipleRenderTargets===!0,de=M(v)||o;if(te){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[ue][Y]=t.createFramebuffer()}else N.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)N.__webglFramebuffer[ue]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ue=v.texture;for(let Y=0,we=ue.length;Y<we;Y++){const be=i.get(ue[Y]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&re(v)===!1){const ue=ie?_:[_];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<ue.length;Y++){const we=ue[Y];N.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);const be=s.convert(we.format,we.colorSpace),Re=s.convert(we.type),ve=z(we.internalFormat,be,Re,we.colorSpace,v.isXRRenderTarget===!0),Me=j(v);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ve,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),v.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),S(N.__webglDepthRenderbuffer,v,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,_,de);for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Le(N.__webglFramebuffer[ue][Y],v,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y);else Le(N.__webglFramebuffer[ue],v,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);w(_,de)&&I(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ue=v.texture;for(let Y=0,we=ue.length;Y<we;Y++){const be=ue[Y],Re=i.get(be);n.bindTexture(t.TEXTURE_2D,Re.__webglTexture),Ce(t.TEXTURE_2D,be,de),Le(N.__webglFramebuffer,v,be,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),w(be,de)&&I(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?ue=v.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,q.__webglTexture),Ce(ue,_,de),o&&_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Le(N.__webglFramebuffer[Y],v,_,t.COLOR_ATTACHMENT0,ue,Y);else Le(N.__webglFramebuffer,v,_,t.COLOR_ATTACHMENT0,ue,0);w(_,de)&&I(ue),n.unbindTexture()}v.depthBuffer&&g(v)}function F(v){const _=M(v)||o,N=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0,te=N.length;q<te;q++){const ie=N[q];if(w(ie,_)){const de=v.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ie).__webglTexture;n.bindTexture(de,ue),I(de),n.unbindTexture()}}}function $(v){if(o&&v.samples>0&&re(v)===!1){const _=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],N=v.width,q=v.height;let te=t.COLOR_BUFFER_BIT;const ie=[],de=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(v),Y=v.isWebGLMultipleRenderTargets===!0;if(Y)for(let we=0;we<_.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<_.length;we++){ie.push(t.COLOR_ATTACHMENT0+we),v.depthBuffer&&ie.push(de);const be=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(be===!1&&(v.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),v.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]),be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[de]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[de])),Y){const Re=i.get(_[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let we=0;we<_.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);const be=i.get(_[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function j(v){return Math.min(d,v.samples)}function re(v){const _=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(v){const _=a.render.frame;T.get(v)!==_&&(T.set(v,_),v.update())}function fe(v,_){const N=v.colorSpace,q=v.format,te=v.type;return v.isCompressedTexture===!0||v.format===No||N!==wn&&N!==Ui&&(N===Ve?o===!1?e.has("EXT_sRGB")===!0&&q===mn?(v.format=No,v.minFilter=rn,v.generateMipmaps=!1):_=Pd.sRGBToLinear(_):(q!==mn||te!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=pe,this.rebindTextures=C,this.setupRenderTarget=D,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=g,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=re}function KE(t,e,n){const i=n.isWebGL2;function r(s,a=Ui){let o;if(s===li)return t.UNSIGNED_BYTE;if(s===Td)return t.UNSIGNED_SHORT_4_4_4_4;if(s===yd)return t.UNSIGNED_SHORT_5_5_5_1;if(s===w_)return t.BYTE;if(s===C_)return t.SHORT;if(s===Sl)return t.UNSIGNED_SHORT;if(s===Sd)return t.INT;if(s===ti)return t.UNSIGNED_INT;if(s===ni)return t.FLOAT;if(s===ts)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===L_)return t.ALPHA;if(s===mn)return t.RGBA;if(s===P_)return t.LUMINANCE;if(s===I_)return t.LUMINANCE_ALPHA;if(s===Di)return t.DEPTH_COMPONENT;if(s===gr)return t.DEPTH_STENCIL;if(s===No)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===D_)return t.RED;if(s===bd)return t.RED_INTEGER;if(s===N_)return t.RG;if(s===Ad)return t.RG_INTEGER;if(s===Rd)return t.RGBA_INTEGER;if(s===Fa||s===Ba||s===ka||s===Ha)if(a===Ve)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rc||s===wc||s===Cc||s===Lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===U_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pc||s===Ic)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Pc)return a===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ic)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dc||s===Nc||s===Uc||s===Oc||s===Fc||s===Bc||s===kc||s===Hc||s===zc||s===Gc||s===Vc||s===Wc||s===Xc||s===Yc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yc)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===za)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===za)return a===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===O_||s===$c||s===qc||s===jc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===za)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$c)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ZE extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JE={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=n.getJointPose(E,i),f=this._getHandJoint(c,E);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,T=.005;c.inputState.pinching&&h>m+T?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-T&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class QE extends $t{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Di,u!==Di&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Di&&(i=ti),i===void 0&&u===gr&&(i=Ii),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eM extends yr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,T=null;const E=n.getContextAttributes();let p=null,f=null;const b=[],y=[],M=new sn;M.layers.enable(1),M.viewport=new Rt;const R=new sn;R.layers.enable(2),R.viewport=new Rt;const w=[M,R],I=new ZE;I.layers.enable(1),I.layers.enable(2);let z=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=b[H];return X===void 0&&(X=new fo,b[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=b[H];return X===void 0&&(X=new fo,b[H]=X),X.getGripSpace()},this.getHand=function(H){let X=b[H];return X===void 0&&(X=new fo,b[H]=X),X.getHandSpace()};function P(H){const X=y.indexOf(H.inputSource);if(X===-1)return;const pe=b[X];pe!==void 0&&(pe.update(H.inputSource,H.frame,c||a),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function le(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",oe);for(let H=0;H<b.length;H++){const X=y[H];X!==null&&(y[H]=null,b[H].disconnect(X))}z=null,A=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",le),r.addEventListener("inputsourceschange",oe),E.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:m}),f=new Oi(m.framebufferWidth,m.framebufferHeight,{format:mn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let X=null,pe=null,me=null;E.depth&&(me=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=E.stencil?gr:Di,pe=E.stencil?Ii:ti);const ge={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),f=new Oi(h.textureWidth,h.textureHeight,{format:mn,type:li,depthTexture:new QE(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function oe(H){for(let X=0;X<H.removed.length;X++){const pe=H.removed[X],me=y.indexOf(pe);me>=0&&(y[me]=null,b[me].disconnect(pe))}for(let X=0;X<H.added.length;X++){const pe=H.added[X];let me=y.indexOf(pe);if(me===-1){for(let Te=0;Te<b.length;Te++)if(Te>=y.length){y.push(pe),me=Te;break}else if(y[Te]===null){y[Te]=pe,me=Te;break}if(me===-1)break}const ge=b[me];ge&&ge.connect(pe)}}const B=new W,Z=new W;function J(H,X,pe){B.setFromMatrixPosition(X.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const me=B.distanceTo(Z),ge=X.projectionMatrix.elements,Te=pe.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),Be=(ge[9]+1)/ge[5],Qe=(ge[9]-1)/ge[5],Le=(ge[8]-1)/ge[0],S=(Te[8]+1)/Te[0],x=Ce*Le,g=Ce*S,C=me/(-Le+S),D=C*-Le;X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(D),H.translateZ(C),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const F=Ce+C,$=Ae+C,j=x-D,re=g+(me-D),se=Be*Ae/$*F,fe=Qe*Ae/$*F;H.projectionMatrix.makePerspective(j,re,se,fe,F,$),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ne(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;I.near=R.near=M.near=H.near,I.far=R.far=M.far=H.far,(z!==I.near||A!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,A=I.far);const X=H.parent,pe=I.cameras;ne(I,X);for(let me=0;me<pe.length;me++)ne(pe[me],X);pe.length===2?J(I,M,R):I.projectionMatrix.copy(M.projectionMatrix),V(H,I,X)};function V(H,X,pe){pe===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const me=H.children;for(let ge=0,Te=me.length;ge<Te;ge++)me[ge].updateMatrixWorld(!0);H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Uo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let G=null;function ce(H,X){if(u=X.getViewerPose(c||a),T=X,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let me=!1;pe.length!==I.cameras.length&&(I.cameras.length=0,me=!0);for(let ge=0;ge<pe.length;ge++){const Te=pe[ge];let Ce=null;if(m!==null)Ce=m.getViewport(Te);else{const Be=d.getViewSubImage(h,Te);Ce=Be.viewport,ge===0&&(e.setRenderTargetTextures(f,Be.colorTexture,h.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(f))}let Ae=w[ge];Ae===void 0&&(Ae=new sn,Ae.layers.enable(ge),Ae.viewport=new Rt,w[ge]=Ae),Ae.matrix.fromArray(Te.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Te.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(I.matrix.copy(Ae.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),me===!0&&I.cameras.push(Ae)}}for(let pe=0;pe<b.length;pe++){const me=y[pe],ge=b[pe];me!==null&&ge!==void 0&&ge.update(me,X,c||a)}G&&G(H,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),T=null}const ae=new Vd;ae.setAnimationLoop(ce),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function tM(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,kd(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),T(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),E(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Yt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Yt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function T(p,f){f.matcap&&(p.matcap.value=f.matcap)}function E(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nM(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){const M=y.program;i.uniformBlockBinding(b,M)}function c(b,y){let M=r[b.id];M===void 0&&(T(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",p));const R=y.program;i.updateUBOMapping(b,R);const w=e.render.frame;s[b.id]!==w&&(h(b),s[b.id]=w)}function u(b){const y=d();b.__bindingPointIndex=y;const M=t.createBuffer(),R=b.__size,w=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],M=b.uniforms,R=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,I=M.length;w<I;w++){const z=M[w];if(m(z,w,R)===!0){const A=z.__offset,P=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let oe=0;oe<P.length;oe++){const B=P[oe],Z=E(B);typeof B=="number"?(z.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,A+le,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=B.elements[0],z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=B.elements[0],z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=B.elements[0]):(B.toArray(z.__data,le),le+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,A,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,y,M){const R=b.value;if(M[y]===void 0){if(typeof R=="number")M[y]=R;else{const w=Array.isArray(R)?R:[R],I=[];for(let z=0;z<w.length;z++)I.push(w[z].clone());M[y]=I}return!0}else if(typeof R=="number"){if(M[y]!==R)return M[y]=R,!0}else{const w=Array.isArray(M[y])?M[y]:[M[y]],I=Array.isArray(R)?R:[R];for(let z=0;z<w.length;z++){const A=w[z];if(A.equals(I[z])===!1)return A.copy(I[z]),!0}}return!1}function T(b){const y=b.uniforms;let M=0;const R=16;let w=0;for(let I=0,z=y.length;I<z;I++){const A=y[I],P={boundary:0,storage:0},le=Array.isArray(A.value)?A.value:[A.value];for(let oe=0,B=le.length;oe<B;oe++){const Z=le[oe],J=E(Z);P.boundary+=J.boundary,P.storage+=J.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,I>0){w=M%R;const oe=R-w;w!==0&&oe-P.boundary<0&&(M+=R-w,A.__offset=M)}M+=P.storage}return w=M%R,w>0&&(M+=R-w),b.__size=M,b.__cache={},this}function E(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function iM(){const t=ns("canvas");return t.style.display="block",t}class qd{constructor(e={}){const{canvas:n=iM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),T=new Int32Array(4);let E=null,p=null;const f=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ve,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const y=this;let M=!1,R=0,w=0,I=null,z=-1,A=null;const P=new Rt,le=new Rt;let oe=null;const B=new nt(0);let Z=0,J=n.width,ne=n.height,V=1,G=null,ce=null;const ae=new Rt(0,0,J,ne),H=new Rt(0,0,J,ne);let X=!1;const pe=new Gd;let me=!1,ge=!1,Te=null;const Ce=new bt,Ae=new et,Be=new W,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return I===null?V:1}let S=i;function x(L,k){for(let ee=0;ee<L.length;ee++){const O=L[ee],Q=n.getContext(O,k);if(Q!==null)return Q}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ml}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",he,!1),S===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),S=x(k,L),S===null)throw x(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let g,C,D,F,$,j,re,se,fe,v,_,N,q,te,ie,de,ue,Y,we,be,Re,ve,Me,He;function tt(){g=new hx(S),C=new ax(S,g,e),g.init(C),ve=new KE(S,g,C),D=new qE(S,g,C),F=new _x(S),$=new NE,j=new jE(S,g,D,$,C,ve,F),re=new lx(y),se=new dx(y),fe=new bg(S,C),Me=new rx(S,g,fe,C),v=new px(S,fe,F,Me),_=new Ex(S,v,fe,F),we=new xx(S,C,j),de=new ox($),N=new DE(y,re,se,g,C,Me,de),q=new tM(y,$),te=new OE,ie=new GE(g,C),Y=new ix(y,re,se,D,_,h,l),ue=new $E(y,_,C),He=new nM(S,F,C,D),be=new sx(S,g,F,C),Re=new mx(S,g,F,C),F.programs=N.programs,y.capabilities=C,y.extensions=g,y.properties=$,y.renderLists=te,y.shadowMap=ue,y.state=D,y.info=F}tt();const U=new eM(y,S);this.xr=U,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const L=g.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=g.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(J,ne,!1))},this.getSize=function(L){return L.set(J,ne)},this.setSize=function(L,k,ee=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=L,ne=k,n.width=Math.floor(L*V),n.height=Math.floor(k*V),ee===!0&&(n.style.width=L+"px",n.style.height=k+"px"),this.setViewport(0,0,L,k)},this.getDrawingBufferSize=function(L){return L.set(J*V,ne*V).floor()},this.setDrawingBufferSize=function(L,k,ee){J=L,ne=k,V=ee,n.width=Math.floor(L*ee),n.height=Math.floor(k*ee),this.setViewport(0,0,L,k)},this.getCurrentViewport=function(L){return L.copy(P)},this.getViewport=function(L){return L.copy(ae)},this.setViewport=function(L,k,ee,O){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,k,ee,O),D.viewport(P.copy(ae).multiplyScalar(V).floor())},this.getScissor=function(L){return L.copy(H)},this.setScissor=function(L,k,ee,O){L.isVector4?H.set(L.x,L.y,L.z,L.w):H.set(L,k,ee,O),D.scissor(le.copy(H).multiplyScalar(V).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(L){D.setScissorTest(X=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(L=!0,k=!0,ee=!0){let O=0;if(L){let Q=!1;if(I!==null){const ye=I.texture.format;Q=ye===Rd||ye===Ad||ye===bd}if(Q){const ye=I.texture.type,Pe=ye===li||ye===ti||ye===Sl||ye===Ii||ye===Td||ye===yd,Ue=Y.getClearColor(),Oe=Y.getClearAlpha(),Ye=Ue.r,Ne=Ue.g,ze=Ue.b;Pe?(m[0]=Ye,m[1]=Ne,m[2]=ze,m[3]=Oe,S.clearBufferuiv(S.COLOR,0,m)):(T[0]=Ye,T[1]=Ne,T[2]=ze,T[3]=Oe,S.clearBufferiv(S.COLOR,0,T))}else O|=S.COLOR_BUFFER_BIT}k&&(O|=S.DEPTH_BUFFER_BIT),ee&&(O|=S.STENCIL_BUFFER_BIT),S.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",he,!1),te.dispose(),ie.dispose(),$.dispose(),re.dispose(),se.dispose(),_.dispose(),Me.dispose(),He.dispose(),N.dispose(),U.dispose(),U.removeEventListener("sessionstart",rt),U.removeEventListener("sessionend",En),Te&&(Te.dispose(),Te=null),Dt.stop()};function xe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=F.autoReset,k=ue.enabled,ee=ue.autoUpdate,O=ue.needsUpdate,Q=ue.type;tt(),F.autoReset=L,ue.enabled=k,ue.autoUpdate=ee,ue.needsUpdate=O,ue.type=Q}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){const k=L.target;k.removeEventListener("dispose",Se),Ke(k)}function Ke(L){ot(L),$.remove(L)}function ot(L){const k=$.get(L).programs;k!==void 0&&(k.forEach(function(ee){N.releaseProgram(ee)}),L.isShaderMaterial&&N.releaseShaderCache(L))}this.renderBufferDirect=function(L,k,ee,O,Q,ye){k===null&&(k=Qe);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=Th(L,k,ee,O,Q);D.setMaterial(O,Pe);let Oe=ee.index,Ye=1;if(O.wireframe===!0){if(Oe=v.getWireframeAttribute(ee),Oe===void 0)return;Ye=2}const Ne=ee.drawRange,ze=ee.attributes.position;let lt=Ne.start*Ye,ut=(Ne.start+Ne.count)*Ye;ye!==null&&(lt=Math.max(lt,ye.start*Ye),ut=Math.min(ut,(ye.start+ye.count)*Ye)),Oe!==null?(lt=Math.max(lt,0),ut=Math.min(ut,Oe.count)):ze!=null&&(lt=Math.max(lt,0),ut=Math.min(ut,ze.count));const tn=ut-lt;if(tn<0||tn===1/0)return;Me.setup(Q,O,Ue,ee,Oe);let Ln,dt=be;if(Oe!==null&&(Ln=fe.get(Oe),dt=Re,dt.setIndex(Ln)),Q.isMesh)O.wireframe===!0?(D.setLineWidth(O.wireframeLinewidth*Le()),dt.setMode(S.LINES)):dt.setMode(S.TRIANGLES);else if(Q.isLine){let qe=O.linewidth;qe===void 0&&(qe=1),D.setLineWidth(qe*Le()),Q.isLineSegments?dt.setMode(S.LINES):Q.isLineLoop?dt.setMode(S.LINE_LOOP):dt.setMode(S.LINE_STRIP)}else Q.isPoints?dt.setMode(S.POINTS):Q.isSprite&&dt.setMode(S.TRIANGLES);if(Q.isInstancedMesh)dt.renderInstances(lt,tn,Q.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Aa=Math.min(ee.instanceCount,qe);dt.renderInstances(lt,tn,Aa)}else dt.render(lt,tn)},this.compile=function(L,k){function ee(O,Q,ye){O.transparent===!0&&O.side===Hn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,ms(O,Q,ye),O.side=ui,O.needsUpdate=!0,ms(O,Q,ye),O.side=Hn):ms(O,Q,ye)}p=ie.get(L),p.init(),b.push(p),L.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(y._useLegacyLights),L.traverse(function(O){const Q=O.material;if(Q)if(Array.isArray(Q))for(let ye=0;ye<Q.length;ye++){const Pe=Q[ye];ee(Pe,L,O)}else ee(Q,L,O)}),b.pop(),p=null};let ft=null;function Yn(L){ft&&ft(L)}function rt(){Dt.stop()}function En(){Dt.start()}const Dt=new Vd;Dt.setAnimationLoop(Yn),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(L){ft=L,U.setAnimationLoop(L),L===null?Dt.stop():Dt.start()},U.addEventListener("sessionstart",rt),U.addEventListener("sessionend",En),this.render=function(L,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,k,I),p=ie.get(L,b.length),p.init(),b.push(p),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),pe.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,me=de.init(this.clippingPlanes,ge),E=te.get(L,f.length),E.init(),f.push(E),Ul(L,k,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(G,ce),this.info.render.frame++,me===!0&&de.beginShadows();const ee=p.state.shadowsArray;if(ue.render(ee,L,k),me===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(E,L),p.setupLights(y._useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let Q=0,ye=O.length;Q<ye;Q++){const Pe=O[Q];Ol(E,L,Pe,Pe.viewport)}}else Ol(E,L,k);I!==null&&(j.updateMultisampleRenderTarget(I),j.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(y,L,k),Me.resetDefaultState(),z=-1,A=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?E=f[f.length-1]:E=null};function Ul(L,k,ee,O){if(L.visible===!1)return;if(L.layers.test(k.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(k);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||pe.intersectsSprite(L)){O&&Be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ce);const Pe=_.update(L),Ue=L.material;Ue.visible&&E.push(L,Pe,Ue,ee,Be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||pe.intersectsObject(L))){const Pe=_.update(L),Ue=L.material;if(O&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Be.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(L.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ue)){const Oe=Pe.groups;for(let Ye=0,Ne=Oe.length;Ye<Ne;Ye++){const ze=Oe[Ye],lt=Ue[ze.materialIndex];lt&&lt.visible&&E.push(L,Pe,lt,ee,Be.z,ze)}}else Ue.visible&&E.push(L,Pe,Ue,ee,Be.z,null)}}const ye=L.children;for(let Pe=0,Ue=ye.length;Pe<Ue;Pe++)Ul(ye[Pe],k,ee,O)}function Ol(L,k,ee,O){const Q=L.opaque,ye=L.transmissive,Pe=L.transparent;p.setupLightsView(ee),me===!0&&de.setGlobalState(y.clippingPlanes,ee),ye.length>0&&Sh(Q,ye,k,ee),O&&D.viewport(P.copy(O)),Q.length>0&&ps(Q,k,ee),ye.length>0&&ps(ye,k,ee),Pe.length>0&&ps(Pe,k,ee),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Sh(L,k,ee,O){const Q=C.isWebGL2;Te===null&&(Te=new Oi(1,1,{generateMipmaps:!0,type:g.has("EXT_color_buffer_half_float")?ts:li,minFilter:es,samples:Q?4:0})),y.getDrawingBufferSize(Ae),Q?Te.setSize(Ae.x,Ae.y):Te.setSize(Oo(Ae.x),Oo(Ae.y));const ye=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(B),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear();const Pe=y.toneMapping;y.toneMapping=oi,ps(L,ee,O),j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te);let Ue=!1;for(let Oe=0,Ye=k.length;Oe<Ye;Oe++){const Ne=k[Oe],ze=Ne.object,lt=Ne.geometry,ut=Ne.material,tn=Ne.group;if(ut.side===Hn&&ze.layers.test(O.layers)){const Ln=ut.side;ut.side=Yt,ut.needsUpdate=!0,Fl(ze,ee,O,lt,ut,tn),ut.side=Ln,ut.needsUpdate=!0,Ue=!0}}Ue===!0&&(j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te)),y.setRenderTarget(ye),y.setClearColor(B,Z),y.toneMapping=Pe}function ps(L,k,ee){const O=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,ye=L.length;Q<ye;Q++){const Pe=L[Q],Ue=Pe.object,Oe=Pe.geometry,Ye=O===null?Pe.material:O,Ne=Pe.group;Ue.layers.test(ee.layers)&&Fl(Ue,k,ee,Oe,Ye,Ne)}}function Fl(L,k,ee,O,Q,ye){L.onBeforeRender(y,k,ee,O,Q,ye),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(y,k,ee,O,L,ye),Q.transparent===!0&&Q.side===Hn&&Q.forceSinglePass===!1?(Q.side=Yt,Q.needsUpdate=!0,y.renderBufferDirect(ee,k,O,Q,L,ye),Q.side=ui,Q.needsUpdate=!0,y.renderBufferDirect(ee,k,O,Q,L,ye),Q.side=Hn):y.renderBufferDirect(ee,k,O,Q,L,ye),L.onAfterRender(y,k,ee,O,Q,ye)}function ms(L,k,ee){k.isScene!==!0&&(k=Qe);const O=$.get(L),Q=p.state.lights,ye=p.state.shadowsArray,Pe=Q.state.version,Ue=N.getParameters(L,Q.state,ye,k,ee),Oe=N.getProgramCacheKey(Ue);let Ye=O.programs;O.environment=L.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(L.isMeshStandardMaterial?se:re).get(L.envMap||O.environment),Ye===void 0&&(L.addEventListener("dispose",Se),Ye=new Map,O.programs=Ye);let Ne=Ye.get(Oe);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===Pe)return Bl(L,Ue),Ne}else Ue.uniforms=N.getUniforms(L),L.onBuild(ee,Ue,y),L.onBeforeCompile(Ue,y),Ne=N.acquireProgram(Ue,Oe),Ye.set(Oe,Ne),O.uniforms=Ue.uniforms;const ze=O.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ze.clippingPlanes=de.uniform),Bl(L,Ue),O.needsLights=bh(L),O.lightsStateVersion=Pe,O.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMap.value=Q.state.directionalShadowMap,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotShadowMap.value=Q.state.spotShadowMap,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMap.value=Q.state.pointShadowMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix);const lt=Ne.getUniforms(),ut=Js.seqWithValue(lt.seq,ze);return O.currentProgram=Ne,O.uniformsList=ut,Ne}function Bl(L,k){const ee=$.get(L);ee.outputColorSpace=k.outputColorSpace,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function Th(L,k,ee,O,Q){k.isScene!==!0&&(k=Qe),j.resetTextureUnits();const ye=k.fog,Pe=O.isMeshStandardMaterial?k.environment:null,Ue=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,Oe=(O.isMeshStandardMaterial?se:re).get(O.envMap||Pe),Ye=O.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ne=!!ee.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ze=!!ee.morphAttributes.position,lt=!!ee.morphAttributes.normal,ut=!!ee.morphAttributes.color;let tn=oi;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tn=y.toneMapping);const Ln=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,dt=Ln!==void 0?Ln.length:0,qe=$.get(O),Aa=p.state.lights;if(me===!0&&(ge===!0||L!==A)){const Kt=L===A&&O.id===z;de.setState(O,L,Kt)}let ht=!1;O.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Aa.state.version||qe.outputColorSpace!==Ue||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||qe.envMap!==Oe||O.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==de.numPlanes||qe.numIntersection!==de.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ne||qe.morphTargets!==ze||qe.morphNormals!==lt||qe.morphColors!==ut||qe.toneMapping!==tn||C.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(ht=!0):(ht=!0,qe.__version=O.version);let pi=qe.currentProgram;ht===!0&&(pi=ms(O,k,Q));let kl=!1,wr=!1,Ra=!1;const Nt=pi.getUniforms(),mi=qe.uniforms;if(D.useProgram(pi.program)&&(kl=!0,wr=!0,Ra=!0),O.id!==z&&(z=O.id,wr=!0),kl||A!==L){if(Nt.setValue(S,"projectionMatrix",L.projectionMatrix),C.logarithmicDepthBuffer&&Nt.setValue(S,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),A!==L&&(A=L,wr=!0,Ra=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Kt=Nt.map.cameraPosition;Kt!==void 0&&Kt.setValue(S,Be.setFromMatrixPosition(L.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Nt.setValue(S,"isOrthographic",L.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Q.isSkinnedMesh)&&Nt.setValue(S,"viewMatrix",L.matrixWorldInverse)}if(Q.isSkinnedMesh){Nt.setOptional(S,Q,"bindMatrix"),Nt.setOptional(S,Q,"bindMatrixInverse");const Kt=Q.skeleton;Kt&&(C.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Nt.setValue(S,"boneTexture",Kt.boneTexture,j),Nt.setValue(S,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=ee.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&C.isWebGL2===!0)&&we.update(Q,ee,pi),(wr||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,Nt.setValue(S,"receiveShadow",Q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(mi.envMap.value=Oe,mi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),wr&&(Nt.setValue(S,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&yh(mi,Ra),ye&&O.fog===!0&&q.refreshFogUniforms(mi,ye),q.refreshMaterialUniforms(mi,O,V,ne,Te),Js.upload(S,qe.uniformsList,mi,j)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Js.upload(S,qe.uniformsList,mi,j),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Nt.setValue(S,"center",Q.center),Nt.setValue(S,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(S,"normalMatrix",Q.normalMatrix),Nt.setValue(S,"modelMatrix",Q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Kt=O.uniformsGroups;for(let Ca=0,Ah=Kt.length;Ca<Ah;Ca++)if(C.isWebGL2){const Hl=Kt[Ca];He.update(Hl,pi),He.bind(Hl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function yh(L,k){L.ambientLightColor.needsUpdate=k,L.lightProbe.needsUpdate=k,L.directionalLights.needsUpdate=k,L.directionalLightShadows.needsUpdate=k,L.pointLights.needsUpdate=k,L.pointLightShadows.needsUpdate=k,L.spotLights.needsUpdate=k,L.spotLightShadows.needsUpdate=k,L.rectAreaLights.needsUpdate=k,L.hemisphereLights.needsUpdate=k}function bh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,k,ee){$.get(L.texture).__webglTexture=k,$.get(L.depthTexture).__webglTexture=ee;const O=$.get(L);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=ee===void 0,O.__autoAllocateDepthBuffer||g.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,k){const ee=$.get(L);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(L,k=0,ee=0){I=L,R=k,w=ee;let O=!0,Q=null,ye=!1,Pe=!1;if(L){const Oe=$.get(L);Oe.__useDefaultFramebuffer!==void 0?(D.bindFramebuffer(S.FRAMEBUFFER,null),O=!1):Oe.__webglFramebuffer===void 0?j.setupRenderTarget(L):Oe.__hasExternalTextures&&j.rebindTextures(L,$.get(L.texture).__webglTexture,$.get(L.depthTexture).__webglTexture);const Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const Ne=$.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?Q=Ne[k][ee]:Q=Ne[k],ye=!0):C.isWebGL2&&L.samples>0&&j.useMultisampledRTT(L)===!1?Q=$.get(L).__webglMultisampledFramebuffer:Array.isArray(Ne)?Q=Ne[ee]:Q=Ne,P.copy(L.viewport),le.copy(L.scissor),oe=L.scissorTest}else P.copy(ae).multiplyScalar(V).floor(),le.copy(H).multiplyScalar(V).floor(),oe=X;if(D.bindFramebuffer(S.FRAMEBUFFER,Q)&&C.drawBuffers&&O&&D.drawBuffers(L,Q),D.viewport(P),D.scissor(le),D.setScissorTest(oe),ye){const Oe=$.get(L.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,ee)}else if(Pe){const Oe=$.get(L.texture),Ye=k||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,Ye)}z=-1},this.readRenderTargetPixels=function(L,k,ee,O,Q,ye,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){D.bindFramebuffer(S.FRAMEBUFFER,Ue);try{const Oe=L.texture,Ye=Oe.format,Ne=Oe.type;if(Ye!==mn&&ve.convert(Ye)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ne===ts&&(g.has("EXT_color_buffer_half_float")||C.isWebGL2&&g.has("EXT_color_buffer_float"));if(Ne!==li&&ve.convert(Ne)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ni&&(C.isWebGL2||g.has("OES_texture_float")||g.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=L.width-O&&ee>=0&&ee<=L.height-Q&&S.readPixels(k,ee,O,Q,ve.convert(Ye),ve.convert(Ne),ye)}finally{const Oe=I!==null?$.get(I).__webglFramebuffer:null;D.bindFramebuffer(S.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(L,k,ee=0){const O=Math.pow(2,-ee),Q=Math.floor(k.image.width*O),ye=Math.floor(k.image.height*O);j.setTexture2D(k,0),S.copyTexSubImage2D(S.TEXTURE_2D,ee,0,0,L.x,L.y,Q,ye),D.unbindTexture()},this.copyTextureToTexture=function(L,k,ee,O=0){const Q=k.image.width,ye=k.image.height,Pe=ve.convert(ee.format),Ue=ve.convert(ee.type);j.setTexture2D(ee,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ee.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ee.unpackAlignment),k.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,O,L.x,L.y,Q,ye,Pe,Ue,k.image.data):k.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,O,L.x,L.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,O,L.x,L.y,Pe,Ue,k.image),O===0&&ee.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(L,k,ee,O,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=L.max.x-L.min.x+1,Pe=L.max.y-L.min.y+1,Ue=L.max.z-L.min.z+1,Oe=ve.convert(O.format),Ye=ve.convert(O.type);let Ne;if(O.isData3DTexture)j.setTexture3D(O,0),Ne=S.TEXTURE_3D;else if(O.isDataArrayTexture)j.setTexture2DArray(O,0),Ne=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const ze=S.getParameter(S.UNPACK_ROW_LENGTH),lt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),ut=S.getParameter(S.UNPACK_SKIP_PIXELS),tn=S.getParameter(S.UNPACK_SKIP_ROWS),Ln=S.getParameter(S.UNPACK_SKIP_IMAGES),dt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,dt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,dt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,L.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,L.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,L.min.z),ee.isDataTexture||ee.isData3DTexture?S.texSubImage3D(Ne,Q,k.x,k.y,k.z,ye,Pe,Ue,Oe,Ye,dt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Ne,Q,k.x,k.y,k.z,ye,Pe,Ue,Oe,dt.data)):S.texSubImage3D(Ne,Q,k.x,k.y,k.z,ye,Pe,Ue,Oe,Ye,dt),S.pixelStorei(S.UNPACK_ROW_LENGTH,ze),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,lt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ut),S.pixelStorei(S.UNPACK_SKIP_ROWS,tn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ln),Q===0&&O.generateMipmaps&&S.generateMipmap(Ne),D.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?j.setTextureCube(L,0):L.isData3DTexture?j.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?j.setTexture2DArray(L,0):j.setTexture2D(L,0),D.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,D.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ve?Ni:wd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?Ve:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rM extends qd{}rM.prototype.isWebGL1Renderer=!0;class sM extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class jd extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ou=new bt,Bo=new Nd,Vs=new Ea,Ws=new W;class aM extends qt{constructor(e=new Cn,n=new jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Ou.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let T=h,E=m;T<E;T++){const p=c.getX(T);Ws.fromBufferAttribute(d,p),Fu(Ws,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let T=h,E=m;T<E;T++)Ws.fromBufferAttribute(d,T),Fu(Ws,T,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fu(t,e,n,i,r,s,a){const o=Bo.distanceSqToPoint(t);if(o<n){const l=new W;Bo.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Al extends Cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new W,h=new W,m=[],T=[],E=[],p=[];for(let f=0;f<=i;f++){const b=[],y=f/i;let M=0;f===0&&a===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const w=R/n;d.x=-e*Math.cos(r+w*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+y*o),T.push(d.x,d.y,d.z),h.copy(d).normalize(),E.push(h.x,h.y,h.z),p.push(w+M,1-y),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<n;b++){const y=u[f][b+1],M=u[f][b],R=u[f+1][b],w=u[f+1][b+1];(f!==0||a>0)&&m.push(y,M,w),(f!==i-1||l<Math.PI)&&m.push(M,R,w)}this.setIndex(m),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Bu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class oM{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],T=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return T}return null}}}const lM=new oM;class Rl{constructor(e){this.manager=e!==void 0?e:lM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";class cM extends Rl{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ns("img");function l(){u(),Bu.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class uM extends Rl{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new cM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Bi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},fM={name:"ThreeScene",setup(){const t=St(null);let e,n,i,r,s;const a=()=>{e=new sn(75,window.innerWidth/window.innerHeight,.1,1e3),e.position.z=30,n=new sM;const l=new Al(1,32,32),c=new uM().load("#"),u=new Tl({map:c});r=new Vn(l,u),n.add(r);const d=new Cn,h=2500,m=new Float32Array(h*3);for(let E=0;E<h;E++){const p=Math.random()*Math.PI*2,f=Math.random()*Math.PI-Math.PI/2,b=10;m[E*3]=b*Math.cos(p)*Math.cos(f),m[E*3+1]=b*Math.sin(f),m[E*3+2]=b*Math.sin(p)*Math.cos(f)}d.setAttribute("position",new xn(m,3));const T=new jd({color:15765,size:.1,fog:!0});s=new aM(d,T),n.add(s),i=new qd,i.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(i.domElement),window.addEventListener("resize",()=>{const E=window.innerWidth,p=window.innerHeight;e.aspect=E/p,e.updateProjectionMatrix(),i.setSize(E,p)})},o=()=>{requestAnimationFrame(o),r.rotation.y+=.002,s.rotation.y+=.002,i.render(n,e)};return ml(()=>{a(),o()}),ed(()=>{t.value.removeChild(i.domElement)}),{container:t}}},dM={ref:"container"};function hM(t,e,n,i,r,s){return Vt(),Qt("div",dM,null,512)}const pM=Bi(fM,[["render",hM]]);const Kd=t=>(dl("data-v-a7b61fb4"),t=t(),hl(),t),mM=Kd(()=>Xe("h1",null,"Shop",-1)),_M={class:"container"},gM={class:"side_nav"},vM={class:"size"},xM=Kd(()=>Xe("div",{class:"title"},"Sizes",-1)),EM={class:"size_cards"},MM=["onClick"],SM=ga('<div class="type" data-v-a7b61fb4><div class="title" data-v-a7b61fb4>Kit type</div><div class="type_cards" data-v-a7b61fb4><div class="type_item" data-v-a7b61fb4><input type="radio" id="home_kit" value="Home" data-v-a7b61fb4><label for="home_kit" data-v-a7b61fb4>Home</label></div><div class="type_item" data-v-a7b61fb4><input type="radio" id="away_kit" value="Away" data-v-a7b61fb4><label for="away_kit" data-v-a7b61fb4>Away</label></div><div class="type_item" data-v-a7b61fb4><input type="radio" id="third_kit" value="Third" data-v-a7b61fb4><label for="third_kit" data-v-a7b61fb4>Third</label></div></div></div>',1),TM={class:"tab_container"},yM={class:"tabs"},bM=["onClick"],AM={class:"tab-content"},RM={class:"grid_content"},wM={class:"card"},CM=["src"],LM={class:"name"},PM={class:"price"},IM={__name:"Shop",setup(t){const e=St(null),n=St(["S","M","L","XL","XXL"]),i=St([{label:"Men",content:[{name:"Chelsea Nike Home Stadium Shirt 2023-24",price:133,type:"Home",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24-with-enzo-8-printing_ss5_p-14401551+u-arb0ihztpgjeszzspurf+v-9k9ptzjowd4algmpbikc.jpg?_hv=2"},{name:"Chelsea Nike Third Stadium Shirt 2023-24",price:99,type:"Third",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-third-stadium-shirt-2023-24-kids-with-nkunku-18-printing_ss5_p-200546042+u-dh1qze8ktfhw1dznfaaq+v-kivlc77bypkgakdbulbl.jpg?_hv=2"},{name:"Chelsea Nike Away Stadium Shirt 2023-24",price:89,type:"Away",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2023-24-with-james-24-printing_ss5_p-14402640+u-cghir0gq5bkpcoryxyzc+v-tg43ztb8zcjlb3qr2fvo.jpg?_hv=2"},{name:"Chelsea Nike Strike Training Top",price:140,type:"Home",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-white_ss5_p-13387581+pv-1+u-tcjvfu6r61mxuqwvleao+v-zccrht64xsqz7dy0elmf.jpg?_hv=2&w=900"}]},{label:"Woman",content:[]},{label:"Kids",content:"Содержимое третьей вкладки"}]),r=St([{name:"Chelsea Nike Home Stadium Shirt 2023-24",price:133,type:"Home",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2023-24-with-enzo-8-printing_ss5_p-14401551+u-arb0ihztpgjeszzspurf+v-9k9ptzjowd4algmpbikc.jpg?_hv=2"},{name:"Chelsea Nike Third Stadium Shirt 2023-24",price:99,type:"Third",player:"Enzo",size:"S",img:"https://images.footballfanatics.com/chelsea/chelsea-third-stadium-shirt-2023-24-kids-with-nkunku-18-printing_ss5_p-200546042+u-dh1qze8ktfhw1dznfaaq+v-kivlc77bypkgakdbulbl.jpg?_hv=2"},{name:"Chelsea Nike Away Stadium Shirt 2023-24",price:89,type:"Away",player:"Enzo",size:"XL",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2023-24-with-james-24-printing_ss5_p-14402640+u-cghir0gq5bkpcoryxyzc+v-tg43ztb8zcjlb3qr2fvo.jpg?_hv=2"},{name:"Chelsea Nike Strike Training Top",price:140,type:"Home",player:"Enzo",size:"L",img:"https://images.footballfanatics.com/chelsea/chelsea-nike-strike-training-top-white_ss5_p-13387581+pv-1+u-tcjvfu6r61mxuqwvleao+v-zccrht64xsqz7dy0elmf.jpg?_hv=2&w=900"}]),s=St(0),a=c=>{s.value=c},o=Xt(()=>e.value?r.value.filter(c=>c.size===e.value):r.value),l=c=>{e.value=c};return(c,u)=>(Vt(),Qt(Pt,null,[mM,Xe("div",_M,[Xe("div",gM,[Xe("div",vM,[xM,Xe("div",EM,[(Vt(!0),Qt(Pt,null,Ia(n.value,(d,h)=>(Vt(),Qt("div",{class:"size_item",key:h,onClick:m=>l(d)},Or(d),9,MM))),128))])]),SM]),Xe("div",TM,[Xe("div",yM,[(Vt(!0),Qt(Pt,null,Ia(i.value,(d,h)=>(Vt(),Qt("div",null,[Xe("div",{onClick:m=>a(h),class:as([{active:s.value===h},"tab"])},Or(d.label),11,bM)]))),256))]),Xe("div",AM,[Xe("div",RM,[(Vt(!0),Qt(Pt,null,Ia(o.value,d=>(Vt(),Qt("div",wM,[Xe("img",{src:d.img,alt:""},null,8,CM),Xe("div",LM,Or(d.name),1),Xe("div",PM,[Xe("strong",null,"$ "+Or(d.price),1)])]))),256))])])])])],64))}},DM=Bi(IM,[["__scopeId","data-v-a7b61fb4"]]),NM={name:"NotFound"};function UM(t,e,n,i,r,s){return Vt(),Qt("h1",null,"404")}const OM=Bi(NM,[["render",UM]]);const FM={name:"Home",components:{ThreeScene:pM}},BM={class:"container"},kM=ga('<div class="card" data-v-35a9bf0c><h1 data-v-35a9bf0c>History</h1><div class="news-view-body" data-v-35a9bf0c><p style="text-align:justify;" data-v-35a9bf0c>Словениядан үйдегі жеңілістен кейін (1:2) Қазақстан құрамасы Еуро-2024 іріктеуінде Дания командасына қарсы екінші ойын өткізді.</p><p style="text-align:justify;" data-v-35a9bf0c>Бірінші таймда Хойлунд дубль жасап, есеп даниялықтарды алға шығарды. Даниялық шабуылшы 21-ші және 36-шы минуттарда гол соғып, ерекшеленді.</p><p style="text-align:justify;" data-v-35a9bf0c>Екінші таймда Бақтиёр Зайнутдинов пенальтиден гол соғып, есеп айырмасын қысқартты.</p><p style="text-align:justify;" data-v-35a9bf0c>86-минутта Асхат Тағыберген өзінің алыстан бағыттаған соққысымен матчтағы есепті теңестірді. Айта кетейік, бұл команда капитанының ұлттық құрама үшін дебюттік голы болды. Араға үш минут салып, Ян Вороговскийдің айып алаңына асырған добын голға айналдырған Абат Айымбетов матчтың шешуші нүктесін қойды-3:2.</p><p style="text-align:justify;" data-v-35a9bf0c>Осылайша, Магомед Адиевтің шәкірттері ЕЧ -2024 іріктеу кезеңінің наурыз айындағы циклін аяқтады. Қазақстан құрамасы келесі матчтарын Сан – Марино мен Солтүстік Ирландияға қарсы өткізеді. Ойындар сәйкесінше 16 және 19 маусымда өтеді.</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Қазақстан – Дания – 3:2 (0:2)</strong></p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Голдар:</strong> Зайнутдинов 73 (пенальти), Тағыберген 86, Айымбетов 89 - Хойлунд 21, 36</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Ескертулер:</strong> Айымбетов 89, Шацкий 90+2, Дарабаев 90+3 - Хойлунд 90+3</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Қызыл қағаз: </strong>Айымбетов 90+6 (екінші ескерту) </p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Қазақстан:</strong> Шацкий (қ), Вороговский, Әліп, Малый (Ерланов 46), Марочкин, Габышев (Скворцов 34), Тағыберген (к), Бейсебеков (Дарабаев 83), Зайнутдинов (Исламхан 79), Оразов, Самородов (Айымбетов 78);</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Қосалқы құрам: </strong>Покатилов (қ), Шайзада (қ), Ерланов, Қайыров, Скворцов, Досмағамбетов, Исламхан, Дарабаев, Кеңесов, Прокопенко, Жұмабек, Айымбетов;</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Бас бапкер:</strong> Магомед Адиев;</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Дания:</strong> Шмейхель (қ), Мехле (Кристенсен 83), Нельссон, Кьер (к), Ба (Ларсен 65), Йенсен (Биллинг 65), Нёргор, Хейбьерг, Винд (Брэйтуэрт 87), Хойлунд, Дамсгард (Дарами 65);</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Қосалқы құрам:</strong> Роннов (қ), Хермансен (қ), Занка, Йелерт, Кристенсен, Биллинг, Дрейер, Ларсен, Хьюлманн, Брэйтуэрт, Дарами, Ингвартсен;</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Бас бапкер:</strong> Каспер Юльманн.</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>Төрешілер:</strong> Новак Симович, Никола Джорович, Милош Симович (барлығы – Сербия)</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>VAR төрешілері: </strong>Момчило Маркович, Елена Цветкович (екеуі де – Сербия).</p><p style="text-align:justify;" data-v-35a9bf0c><strong data-v-35a9bf0c>26.03.2023. «Астана Арена», Астана. 28 600 жанкүйер.</strong></p></div></div>',1),HM=[kM];function zM(t,e,n,i,r,s){return Vt(),Qt("div",BM,HM)}const GM=Bi(FM,[["render",zM],["__scopeId","data-v-35a9bf0c"]]);/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const ko=typeof window<"u",di=(t,e=!1)=>e?Symbol.for(t):Symbol(t),VM=(t,e,n)=>WM({l:t,k:e,s:n}),WM=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),gt=t=>typeof t=="number"&&isFinite(t),XM=t=>Jd(t)==="[object Date]",fi=t=>Jd(t)==="[object RegExp]",Ta=t=>Fe(t)&&Object.keys(t).length===0,wt=Object.assign;let ku;const zn=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hu(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const YM=Object.prototype.hasOwnProperty;function wl(t,e){return YM.call(t,e)}const at=Array.isArray,ct=t=>typeof t=="function",Ee=t=>typeof t=="string",$e=t=>typeof t=="boolean",Je=t=>t!==null&&typeof t=="object",Zd=Object.prototype.toString,Jd=t=>Zd.call(t),Fe=t=>{if(!Je(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},$M=t=>t==null?"":at(t)||Fe(t)&&t.toString===Zd?JSON.stringify(t,null,2):String(t);function qM(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Cl(t){let e=t;return()=>++e}function jM(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function KM(t,e,n){return{line:t,column:e,offset:n}}function Ho(t,e,n){const i={start:t,end:e};return n!=null&&(i.source=n),i}const ZM=/\{([0-9a-zA-Z]+)\}/g;function JM(t,...e){return e.length===1&&QM(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(ZM,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const Qd=Object.assign,zu=t=>typeof t=="string",QM=t=>t!==null&&typeof t=="object";function eh(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const De={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},eS={[De.EXPECTED_TOKEN]:"Expected token: '{0}'",[De.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[De.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[De.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[De.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[De.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[De.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[De.EMPTY_PLACEHOLDER]:"Empty placeholder",[De.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[De.INVALID_LINKED_FORMAT]:"Invalid linked format",[De.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[De.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[De.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[De.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[De.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[De.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Ar(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=JM((r||eS)[t]||"",...s||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function tS(t){throw t}const Fn=" ",nS="\r",Ft=`
`,iS=String.fromCharCode(8232),rS=String.fromCharCode(8233);function sS(t){const e=t;let n=0,i=1,r=1,s=0;const a=I=>e[I]===nS&&e[I+1]===Ft,o=I=>e[I]===Ft,l=I=>e[I]===rS,c=I=>e[I]===iS,u=I=>a(I)||o(I)||l(I)||c(I),d=()=>n,h=()=>i,m=()=>r,T=()=>s,E=I=>a(I)||l(I)||c(I)?Ft:e[I],p=()=>E(n),f=()=>E(n+s);function b(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function y(){return a(n+s)&&s++,s++,e[n+s]}function M(){n=0,i=1,r=1,s=0}function R(I=0){s=I}function w(){const I=n+s;for(;I!==n;)b();s=0}return{index:d,line:h,column:m,peekOffset:T,charAt:E,currentChar:p,currentPeek:f,next:b,peek:y,reset:M,resetPeek:R,skipToPeek:w}}const Jn=void 0,aS=".",Gu="'",oS="tokenizer";function lS(t,e={}){const n=e.location!==!1,i=sS(t),r=()=>i.index(),s=()=>KM(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function d(x,g,C,...D){const F=c();if(g.column+=C,g.offset+=C,u){const $=n?Ho(F.startLoc,g):null,j=Ar(x,$,{domain:oS,args:D});u(j)}}function h(x,g,C){x.endLoc=s(),x.currentType=g;const D={type:g};return n&&(D.loc=Ho(x.startLoc,x.endLoc)),C!=null&&(D.value=C),D}const m=x=>h(x,14);function T(x,g){return x.currentChar()===g?(x.next(),g):(d(De.EXPECTED_TOKEN,s(),0,g),"")}function E(x){let g="";for(;x.currentPeek()===Fn||x.currentPeek()===Ft;)g+=x.currentPeek(),x.peek();return g}function p(x){const g=E(x);return x.skipToPeek(),g}function f(x){if(x===Jn)return!1;const g=x.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function b(x){if(x===Jn)return!1;const g=x.charCodeAt(0);return g>=48&&g<=57}function y(x,g){const{currentType:C}=g;if(C!==2)return!1;E(x);const D=f(x.currentPeek());return x.resetPeek(),D}function M(x,g){const{currentType:C}=g;if(C!==2)return!1;E(x);const D=x.currentPeek()==="-"?x.peek():x.currentPeek(),F=b(D);return x.resetPeek(),F}function R(x,g){const{currentType:C}=g;if(C!==2)return!1;E(x);const D=x.currentPeek()===Gu;return x.resetPeek(),D}function w(x,g){const{currentType:C}=g;if(C!==8)return!1;E(x);const D=x.currentPeek()===".";return x.resetPeek(),D}function I(x,g){const{currentType:C}=g;if(C!==9)return!1;E(x);const D=f(x.currentPeek());return x.resetPeek(),D}function z(x,g){const{currentType:C}=g;if(!(C===8||C===12))return!1;E(x);const D=x.currentPeek()===":";return x.resetPeek(),D}function A(x,g){const{currentType:C}=g;if(C!==10)return!1;const D=()=>{const $=x.currentPeek();return $==="{"?f(x.peek()):$==="@"||$==="%"||$==="|"||$===":"||$==="."||$===Fn||!$?!1:$===Ft?(x.peek(),D()):f($)},F=D();return x.resetPeek(),F}function P(x){E(x);const g=x.currentPeek()==="|";return x.resetPeek(),g}function le(x){const g=E(x),C=x.currentPeek()==="%"&&x.peek()==="{";return x.resetPeek(),{isModulo:C,hasSpace:g.length>0}}function oe(x,g=!0){const C=(F=!1,$="",j=!1)=>{const re=x.currentPeek();return re==="{"?$==="%"?!1:F:re==="@"||!re?$==="%"?!0:F:re==="%"?(x.peek(),C(F,"%",!0)):re==="|"?$==="%"||j?!0:!($===Fn||$===Ft):re===Fn?(x.peek(),C(!0,Fn,j)):re===Ft?(x.peek(),C(!0,Ft,j)):!0},D=C();return g&&x.resetPeek(),D}function B(x,g){const C=x.currentChar();return C===Jn?Jn:g(C)?(x.next(),C):null}function Z(x){return B(x,C=>{const D=C.charCodeAt(0);return D>=97&&D<=122||D>=65&&D<=90||D>=48&&D<=57||D===95||D===36})}function J(x){return B(x,C=>{const D=C.charCodeAt(0);return D>=48&&D<=57})}function ne(x){return B(x,C=>{const D=C.charCodeAt(0);return D>=48&&D<=57||D>=65&&D<=70||D>=97&&D<=102})}function V(x){let g="",C="";for(;g=J(x);)C+=g;return C}function G(x){p(x);const g=x.currentChar();return g!=="%"&&d(De.EXPECTED_TOKEN,s(),0,g),x.next(),"%"}function ce(x){let g="";for(;;){const C=x.currentChar();if(C==="{"||C==="}"||C==="@"||C==="|"||!C)break;if(C==="%")if(oe(x))g+=C,x.next();else break;else if(C===Fn||C===Ft)if(oe(x))g+=C,x.next();else{if(P(x))break;g+=C,x.next()}else g+=C,x.next()}return g}function ae(x){p(x);let g="",C="";for(;g=Z(x);)C+=g;return x.currentChar()===Jn&&d(De.UNTERMINATED_CLOSING_BRACE,s(),0),C}function H(x){p(x);let g="";return x.currentChar()==="-"?(x.next(),g+=`-${V(x)}`):g+=V(x),x.currentChar()===Jn&&d(De.UNTERMINATED_CLOSING_BRACE,s(),0),g}function X(x){p(x),T(x,"'");let g="",C="";const D=$=>$!==Gu&&$!==Ft;for(;g=B(x,D);)g==="\\"?C+=pe(x):C+=g;const F=x.currentChar();return F===Ft||F===Jn?(d(De.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),F===Ft&&(x.next(),T(x,"'")),C):(T(x,"'"),C)}function pe(x){const g=x.currentChar();switch(g){case"\\":case"'":return x.next(),`\\${g}`;case"u":return me(x,g,4);case"U":return me(x,g,6);default:return d(De.UNKNOWN_ESCAPE_SEQUENCE,s(),0,g),""}}function me(x,g,C){T(x,g);let D="";for(let F=0;F<C;F++){const $=ne(x);if(!$){d(De.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${g}${D}${x.currentChar()}`);break}D+=$}return`\\${g}${D}`}function ge(x){p(x);let g="",C="";const D=F=>F!=="{"&&F!=="}"&&F!==Fn&&F!==Ft;for(;g=B(x,D);)C+=g;return C}function Te(x){let g="",C="";for(;g=Z(x);)C+=g;return C}function Ce(x){const g=(C=!1,D)=>{const F=x.currentChar();return F==="{"||F==="%"||F==="@"||F==="|"||F==="("||F===")"||!F||F===Fn?D:F===Ft||F===aS?(D+=F,x.next(),g(C,D)):(D+=F,x.next(),g(!0,D))};return g(!1,"")}function Ae(x){p(x);const g=T(x,"|");return p(x),g}function Be(x,g){let C=null;switch(x.currentChar()){case"{":return g.braceNest>=1&&d(De.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),x.next(),C=h(g,2,"{"),p(x),g.braceNest++,C;case"}":return g.braceNest>0&&g.currentType===2&&d(De.EMPTY_PLACEHOLDER,s(),0),x.next(),C=h(g,3,"}"),g.braceNest--,g.braceNest>0&&p(x),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),C;case"@":return g.braceNest>0&&d(De.UNTERMINATED_CLOSING_BRACE,s(),0),C=Qe(x,g)||m(g),g.braceNest=0,C;default:let F=!0,$=!0,j=!0;if(P(x))return g.braceNest>0&&d(De.UNTERMINATED_CLOSING_BRACE,s(),0),C=h(g,1,Ae(x)),g.braceNest=0,g.inLinked=!1,C;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return d(De.UNTERMINATED_CLOSING_BRACE,s(),0),g.braceNest=0,Le(x,g);if(F=y(x,g))return C=h(g,5,ae(x)),p(x),C;if($=M(x,g))return C=h(g,6,H(x)),p(x),C;if(j=R(x,g))return C=h(g,7,X(x)),p(x),C;if(!F&&!$&&!j)return C=h(g,13,ge(x)),d(De.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,C.value),p(x),C;break}return C}function Qe(x,g){const{currentType:C}=g;let D=null;const F=x.currentChar();switch((C===8||C===9||C===12||C===10)&&(F===Ft||F===Fn)&&d(De.INVALID_LINKED_FORMAT,s(),0),F){case"@":return x.next(),D=h(g,8,"@"),g.inLinked=!0,D;case".":return p(x),x.next(),h(g,9,".");case":":return p(x),x.next(),h(g,10,":");default:return P(x)?(D=h(g,1,Ae(x)),g.braceNest=0,g.inLinked=!1,D):w(x,g)||z(x,g)?(p(x),Qe(x,g)):I(x,g)?(p(x),h(g,12,Te(x))):A(x,g)?(p(x),F==="{"?Be(x,g)||D:h(g,11,Ce(x))):(C===8&&d(De.INVALID_LINKED_FORMAT,s(),0),g.braceNest=0,g.inLinked=!1,Le(x,g))}}function Le(x,g){let C={type:14};if(g.braceNest>0)return Be(x,g)||m(g);if(g.inLinked)return Qe(x,g)||m(g);switch(x.currentChar()){case"{":return Be(x,g)||m(g);case"}":return d(De.UNBALANCED_CLOSING_BRACE,s(),0),x.next(),h(g,3,"}");case"@":return Qe(x,g)||m(g);default:if(P(x))return C=h(g,1,Ae(x)),g.braceNest=0,g.inLinked=!1,C;const{isModulo:F,hasSpace:$}=le(x);if(F)return $?h(g,0,ce(x)):h(g,4,G(x));if(oe(x))return h(g,0,ce(x));break}return C}function S(){const{currentType:x,offset:g,startLoc:C,endLoc:D}=l;return l.lastType=x,l.lastOffset=g,l.lastStartLoc=C,l.lastEndLoc=D,l.offset=r(),l.startLoc=s(),i.currentChar()===Jn?h(l,14):Le(i,l)}return{nextToken:S,currentOffset:r,currentPosition:s,context:c}}const cS="parser",uS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function fS(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function dS(t={}){const e=t.location!==!1,{onError:n}=t;function i(f,b,y,M,...R){const w=f.currentPosition();if(w.offset+=M,w.column+=M,n){const I=e?Ho(y,w):null,z=Ar(b,I,{domain:cS,args:R});n(z)}}function r(f,b,y){const M={type:f};return e&&(M.start=b,M.end=b,M.loc={start:y,end:y}),M}function s(f,b,y,M){M&&(f.type=M),e&&(f.end=b,f.loc&&(f.loc.end=y))}function a(f,b){const y=f.context(),M=r(3,y.offset,y.startLoc);return M.value=b,s(M,f.currentOffset(),f.currentPosition()),M}function o(f,b){const y=f.context(),{lastOffset:M,lastStartLoc:R}=y,w=r(5,M,R);return w.index=parseInt(b,10),f.nextToken(),s(w,f.currentOffset(),f.currentPosition()),w}function l(f,b){const y=f.context(),{lastOffset:M,lastStartLoc:R}=y,w=r(4,M,R);return w.key=b,f.nextToken(),s(w,f.currentOffset(),f.currentPosition()),w}function c(f,b){const y=f.context(),{lastOffset:M,lastStartLoc:R}=y,w=r(9,M,R);return w.value=b.replace(uS,fS),f.nextToken(),s(w,f.currentOffset(),f.currentPosition()),w}function u(f){const b=f.nextToken(),y=f.context(),{lastOffset:M,lastStartLoc:R}=y,w=r(8,M,R);return b.type!==12?(i(f,De.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),w.value="",s(w,M,R),{nextConsumeToken:b,node:w}):(b.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Sn(b)),w.value=b.value||"",s(w,f.currentOffset(),f.currentPosition()),{node:w})}function d(f,b){const y=f.context(),M=r(7,y.offset,y.startLoc);return M.value=b,s(M,f.currentOffset(),f.currentPosition()),M}function h(f){const b=f.context(),y=r(6,b.offset,b.startLoc);let M=f.nextToken();if(M.type===9){const R=u(f);y.modifier=R.node,M=R.nextConsumeToken||f.nextToken()}switch(M.type!==10&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(M)),M=f.nextToken(),M.type===2&&(M=f.nextToken()),M.type){case 11:M.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(M)),y.key=d(f,M.value||"");break;case 5:M.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(M)),y.key=l(f,M.value||"");break;case 6:M.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(M)),y.key=o(f,M.value||"");break;case 7:M.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(M)),y.key=c(f,M.value||"");break;default:i(f,De.UNEXPECTED_EMPTY_LINKED_KEY,b.lastStartLoc,0);const R=f.context(),w=r(7,R.offset,R.startLoc);return w.value="",s(w,R.offset,R.startLoc),y.key=w,s(y,R.offset,R.startLoc),{nextConsumeToken:M,node:y}}return s(y,f.currentOffset(),f.currentPosition()),{node:y}}function m(f){const b=f.context(),y=b.currentType===1?f.currentOffset():b.offset,M=b.currentType===1?b.endLoc:b.startLoc,R=r(2,y,M);R.items=[];let w=null;do{const A=w||f.nextToken();switch(w=null,A.type){case 0:A.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(A)),R.items.push(a(f,A.value||""));break;case 6:A.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(A)),R.items.push(o(f,A.value||""));break;case 5:A.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(A)),R.items.push(l(f,A.value||""));break;case 7:A.value==null&&i(f,De.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Sn(A)),R.items.push(c(f,A.value||""));break;case 8:const P=h(f);R.items.push(P.node),w=P.nextConsumeToken||null;break}}while(b.currentType!==14&&b.currentType!==1);const I=b.currentType===1?b.lastOffset:f.currentOffset(),z=b.currentType===1?b.lastEndLoc:f.currentPosition();return s(R,I,z),R}function T(f,b,y,M){const R=f.context();let w=M.items.length===0;const I=r(1,b,y);I.cases=[],I.cases.push(M);do{const z=m(f);w||(w=z.items.length===0),I.cases.push(z)}while(R.currentType!==14);return w&&i(f,De.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(I,f.currentOffset(),f.currentPosition()),I}function E(f){const b=f.context(),{offset:y,startLoc:M}=b,R=m(f);return b.currentType===14?R:T(f,y,M,R)}function p(f){const b=lS(f,Qd({},t)),y=b.context(),M=r(0,y.offset,y.startLoc);return e&&M.loc&&(M.loc.source=f),M.body=E(b),t.onCacheKey&&(M.cacheKey=t.onCacheKey(f)),y.currentType!==14&&i(b,De.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,f[y.offset]||""),s(M,b.currentOffset(),b.currentPosition()),M}return{parse:p}}function Sn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function hS(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Vu(t,e){for(let n=0;n<t.length;n++)Ll(t[n],e)}function Ll(t,e){switch(t.type){case 1:Vu(t.cases,e),e.helper("plural");break;case 2:Vu(t.items,e);break;case 6:Ll(t.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function pS(t,e={}){const n=hS(t);n.helper("normalize"),t.body&&Ll(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function mS(t){const e=t.body;return e.type===2?Wu(e):e.cases.forEach(n=>Wu(n)),t}function Wu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=eh(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const _S="minifier";function ir(t){switch(t.t=t.type,t.type){case 0:const e=t;ir(e.body),e.b=e.body,delete e.body;break;case 1:const n=t,i=n.cases;for(let u=0;u<i.length;u++)ir(i[u]);n.c=i,delete n.cases;break;case 2:const r=t,s=r.items;for(let u=0;u<s.length;u++)ir(s[u]);r.i=s,delete r.items,r.static&&(r.s=r.static,delete r.static);break;case 3:case 9:case 8:case 7:const a=t;a.value&&(a.v=a.value,delete a.value);break;case 6:const o=t;ir(o.key),o.k=o.key,delete o.key,o.modifier&&(ir(o.modifier),o.m=o.modifier,delete o.modifier);break;case 5:const l=t;l.i=l.index,delete l.index;break;case 4:const c=t;c.k=c.key,delete c.key;break;default:throw Ar(De.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:_S,args:[t.type]})}delete t.type}const gS="parser";function vS(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:s}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};a&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(p,f){o.code+=p}function u(p,f=!0){const b=f?r:"";c(s?b+"  ".repeat(p):b)}function d(p=!0){const f=++o.indentLevel;p&&u(f)}function h(p=!0){const f=--o.indentLevel;p&&u(f)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:d,deindent:h,newline:m,helper:p=>`_${p}`,needIndent:()=>o.needIndent}}function xS(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),xr(t,e.key),e.modifier?(t.push(", "),xr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function ES(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(xr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function MS(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(xr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function SS(t,e){e.body?xr(t,e.body):t.push("null")}function xr(t,e){const{helper:n}=t;switch(e.type){case 0:SS(t,e);break;case 1:MS(t,e);break;case 2:ES(t,e);break;case 6:xS(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Ar(De.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:gS,args:[e.type]})}}const TS=(t,e={})=>{const n=zu(e.mode)?e.mode:"normal",i=zu(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,a=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=vS(t,{mode:n,filename:i,sourceMap:r,breakLineCode:s,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${eh(o.map(d=>`${d}: _${d}`),", ")} } = ctx`),l.newline()),l.push("return "),xr(l,t),l.deindent(a),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function yS(t,e={}){const n=Qd({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=dS(n).parse(t);return i?(s&&mS(o),r&&ir(o),{ast:o,code:""}):(pS(o,n),TS(o,n))}/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function bS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(zn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(zn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(zn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const hi=[];hi[0]={w:[0],i:[3,0],"[":[4],o:[7]};hi[1]={w:[1],".":[2],"[":[4],o:[7]};hi[2]={w:[2],i:[3,0],0:[3,0]};hi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};hi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};hi[5]={"'":[4,0],o:8,l:[5,0]};hi[6]={'"':[4,0],o:8,l:[6,0]};const AS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function RS(t){return AS.test(t)}function wS(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function CS(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function LS(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:RS(e)?wS(e):"*"+e}function PS(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,d;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,a===void 0||(a=LS(a),a===!1))return!1;h[1]()}};function m(){const T=t[n+1];if(i===5&&T==="'"||i===6&&T==='"')return n++,o="\\"+T,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&m())){if(l=CS(s),d=hi[i],c=d[l]||d.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const Xu=new Map;function IS(t,e){return Je(t)?t[e]:null}function DS(t,e){if(!Je(t))return null;let n=Xu.get(e);if(n||(n=PS(e),n&&Xu.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=r[n[s]];if(a===void 0)return null;r=a,s++}return r}const NS=t=>t,US=t=>"",OS="text",FS=t=>t.length===0?"":qM(t),BS=$M;function Yu(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function kS(t){const e=gt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(gt(t.named.count)||gt(t.named.n))?gt(t.named.count)?t.named.count:gt(t.named.n)?t.named.n:e:e}function HS(t,e){e.count||(e.count=t),e.n||(e.n=t)}function zS(t={}){const e=t.locale,n=kS(t),i=Je(t.pluralRules)&&Ee(e)&&ct(t.pluralRules[e])?t.pluralRules[e]:Yu,r=Je(t.pluralRules)&&Ee(e)&&ct(t.pluralRules[e])?Yu:void 0,s=f=>f[i(n,f.length,r)],a=t.list||[],o=f=>a[f],l=t.named||{};gt(t.pluralIndex)&&HS(n,l);const c=f=>l[f];function u(f){const b=ct(t.messages)?t.messages(f):Je(t.messages)?t.messages[f]:!1;return b||(t.parent?t.parent.message(f):US)}const d=f=>t.modifiers?t.modifiers[f]:NS,h=Fe(t.processor)&&ct(t.processor.normalize)?t.processor.normalize:FS,m=Fe(t.processor)&&ct(t.processor.interpolate)?t.processor.interpolate:BS,T=Fe(t.processor)&&Ee(t.processor.type)?t.processor.type:OS,p={list:o,named:c,plural:s,linked:(f,...b)=>{const[y,M]=b;let R="text",w="";b.length===1?Je(y)?(w=y.modifier||w,R=y.type||R):Ee(y)&&(w=y||w):b.length===2&&(Ee(y)&&(w=y||w),Ee(M)&&(R=M||R));const I=u(f)(p),z=R==="vnode"&&at(I)&&w?I[0]:I;return w?d(w)(z,R):z},message:u,type:T,interpolate:m,normalize:h,values:wt({},a,l)};return p}let is=null;function GS(t){is=t}function VS(t,e,n){is&&is.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const WS=XS("function:translate");function XS(t){return e=>is&&is.emit(t,e)}const YS={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Pl(t,e){return e.locale!=null?$u(e.locale):$u(t.locale)}let ho;function $u(t){return Ee(t)?t:ho!=null&&t.resolvedOnce?ho:ho=t()}function $S(t,e,n){return[...new Set([n,...at(e)?e:Je(e)?Object.keys(e):Ee(e)?[e]:[n]])]}function th(t,e,n){const i=Ee(n)?n:Er,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;at(a);)a=qu(s,a,e);const o=at(e)||!Fe(e)?e:e.default?e.default:null;a=Ee(o)?[o]:o,at(a)&&qu(s,a,!1),r.__localeChainCache.set(i,s)}return s}function qu(t,e,n){let i=!0;for(let r=0;r<e.length&&$e(i);r++){const s=e[r];Ee(s)&&(i=qS(t,e[r],n))}return i}function qS(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=jS(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function jS(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(at(n)||Fe(n))&&n[r]&&(i=n[r])}return i}const KS="9.5.0",ya=-1,Er="en-US",ju="",Ku=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function ZS(){return{upper:(t,e)=>e==="text"&&Ee(t)?t.toUpperCase():e==="vnode"&&Je(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ee(t)?t.toLowerCase():e==="vnode"&&Je(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ee(t)?Ku(t):e==="vnode"&&Je(t)&&"__v_isVNode"in t?Ku(t.children):t}}let nh;function Zu(t){nh=t}let ih;function JS(t){ih=t}let rh;function QS(t){rh=t}let sh=null;const Ju=t=>{sh=t},eT=()=>sh;let ah=null;const Qu=t=>{ah=t},tT=()=>ah;let ef=0;function nT(t={}){const e=ct(t.onWarn)?t.onWarn:jM,n=Ee(t.version)?t.version:KS,i=Ee(t.locale)||ct(t.locale)?t.locale:Er,r=ct(i)?Er:i,s=at(t.fallbackLocale)||Fe(t.fallbackLocale)||Ee(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Fe(t.messages)?t.messages:{[r]:{}},o=Fe(t.datetimeFormats)?t.datetimeFormats:{[r]:{}},l=Fe(t.numberFormats)?t.numberFormats:{[r]:{}},c=wt({},t.modifiers||{},ZS()),u=t.pluralRules||{},d=ct(t.missing)?t.missing:null,h=$e(t.missingWarn)||fi(t.missingWarn)?t.missingWarn:!0,m=$e(t.fallbackWarn)||fi(t.fallbackWarn)?t.fallbackWarn:!0,T=!!t.fallbackFormat,E=!!t.unresolving,p=ct(t.postTranslation)?t.postTranslation:null,f=Fe(t.processor)?t.processor:null,b=$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,M=ct(t.messageCompiler)?t.messageCompiler:nh,R=ct(t.messageResolver)?t.messageResolver:ih||IS,w=ct(t.localeFallbacker)?t.localeFallbacker:rh||$S,I=Je(t.fallbackContext)?t.fallbackContext:void 0,z=t,A=Je(z.__datetimeFormatters)?z.__datetimeFormatters:new Map,P=Je(z.__numberFormatters)?z.__numberFormatters:new Map,le=Je(z.__meta)?z.__meta:{};ef++;const oe={version:n,cid:ef,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:d,missingWarn:h,fallbackWarn:m,fallbackFormat:T,unresolving:E,postTranslation:p,processor:f,warnHtmlMessage:b,escapeParameter:y,messageCompiler:M,messageResolver:R,localeFallbacker:w,fallbackContext:I,onWarn:e,__meta:le};return oe.datetimeFormats=o,oe.numberFormats=l,oe.__datetimeFormatters=A,oe.__numberFormatters=P,__INTLIFY_PROD_DEVTOOLS__&&VS(oe,n,le),oe}function Il(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ee(o)?o:e}else return e}function Ur(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function po(t){return n=>iT(n,t)}function iT(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const i=n,r=i.c||i.cases;return t.plural(r.reduce((s,a)=>[...s,tf(t,a)],[]))}else return tf(t,n)}function tf(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const i=(e.i||e.items).reduce((r,s)=>[...r,zo(t,s)],[]);return t.normalize(i)}}function zo(t,e){const n=e.t||e.type;switch(n){case 3:const i=e;return i.v||i.value;case 9:const r=e;return r.v||r.value;case 4:const s=e;return t.interpolate(t.named(s.k||s.key));case 5:const a=e;return t.interpolate(t.list(a.i!=null?a.i:a.index));case 6:const o=e,l=o.m||o.modifier;return t.linked(zo(t,o.k||o.key),l?zo(t,l):void 0,t.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const oh=De.__EXTEND_POINT__,Xs=Cl(oh),ii={INVALID_ARGUMENT:oh,INVALID_DATE_ARGUMENT:Xs(),INVALID_ISO_DATE_ARGUMENT:Xs(),NOT_SUPPORT_NON_STRING_MESSAGE:Xs(),__EXTEND_POINT__:Xs()};function wi(t){return Ar(t,null,void 0)}const lh=t=>t;let sr=Object.create(null);const rs=t=>Je(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function ch(t,e={}){let n=!1;const i=e.onError||tS;return e.onError=r=>{n=!0,i(r)},{...yS(t,e),detectError:n}}const rT=(t,e)=>{if(!Ee(t))throw wi(ii.NOT_SUPPORT_NON_STRING_MESSAGE);{$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||lh)(t),r=sr[i];if(r)return r;const{code:s,detectError:a}=ch(t,e),o=new Function(`return ${s}`)();return a?o:sr[i]=o}};function sT(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ee(t)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||lh)(t),r=sr[i];if(r)return r;const{ast:s,detectError:a}=ch(t,{...e,location:!1,jit:!0}),o=po(s);return a?o:sr[i]=o}else{const n=t.cacheKey;if(n){const i=sr[n];return i||(sr[n]=po(t))}else return po(t)}}const nf=()=>"",dn=t=>ct(t);function rf(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=Go(...e),u=$e(c.missingWarn)?c.missingWarn:t.missingWarn,d=$e(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=$e(c.escapeParameter)?c.escapeParameter:t.escapeParameter,m=!!c.resolvedMessage,T=Ee(c.default)||$e(c.default)?$e(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",E=n||T!=="",p=Pl(t,c);h&&aT(c);let[f,b,y]=m?[l,p,o[p]||{}]:uh(t,l,p,a,d,u),M=f,R=l;if(!m&&!(Ee(M)||rs(M)||dn(M))&&E&&(M=T,R=M),!m&&(!(Ee(M)||rs(M)||dn(M))||!Ee(b)))return r?ya:l;let w=!1;const I=()=>{w=!0},z=dn(M)?M:fh(t,l,b,M,R,I);if(w)return M;const A=cT(t,b,y,c),P=zS(A),le=oT(t,z,P),oe=i?i(le,l):le;if(__INTLIFY_PROD_DEVTOOLS__){const B={timestamp:Date.now(),key:Ee(l)?l:dn(M)?M.key:"",locale:b||(dn(M)?M.locale:""),format:Ee(M)?M:dn(M)?M.source:"",message:oe};B.meta=wt({},t.__meta,eT()||{}),WS(B)}return oe}function aT(t){at(t.list)?t.list=t.list.map(e=>Ee(e)?Hu(e):e):Je(t.named)&&Object.keys(t.named).forEach(e=>{Ee(t.named[e])&&(t.named[e]=Hu(t.named[e]))})}function uh(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let d={},h,m=null;const T="translate";for(let E=0;E<u.length&&(h=u[E],d=a[h]||{},(m=l(d,e))===null&&(m=d[e]),!(Ee(m)||rs(m)||dn(m)));E++){const p=Il(t,e,h,s,T);p!==e&&(m=p)}return[m,h,d]}function fh(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(dn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,lT(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function oT(t,e,n){return e(n)}function Go(...t){const[e,n,i]=t,r={};if(!Ee(e)&&!gt(e)&&!dn(e)&&!rs(e))throw wi(ii.INVALID_ARGUMENT);const s=gt(e)?String(e):(dn(e),e);return gt(n)?r.plural=n:Ee(n)?r.default=n:Fe(n)&&!Ta(n)?r.named=n:at(n)&&(r.list=n),gt(i)?r.plural=i:Ee(i)?r.default=i:Fe(i)&&wt(r,i),[s,r]}function lT(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>VM(e,n,a)}}function cT(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:m=>{let T=a(n,m);if(T==null&&u){const[,,E]=uh(u,m,e,o,l,c);T=a(E,m)}if(Ee(T)||rs(T)){let E=!1;const f=fh(t,m,e,T,m,()=>{E=!0});return E?nf:f}else return dn(T)?T:nf}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),gt(i.plural)&&(h.pluralIndex=i.plural),h}function sf(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,d]=Vo(...e),h=$e(u.missingWarn)?u.missingWarn:t.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const m=!!u.part,T=Pl(t,u),E=a(t,r,T);if(!Ee(l)||l==="")return new Intl.DateTimeFormat(T,d).format(c);let p={},f,b=null;const y="datetime format";for(let w=0;w<E.length&&(f=E[w],p=n[f]||{},b=p[l],!Fe(b));w++)Il(t,l,f,h,y);if(!Fe(b)||!Ee(f))return i?ya:l;let M=`${f}__${l}`;Ta(d)||(M=`${M}__${JSON.stringify(d)}`);let R=o.get(M);return R||(R=new Intl.DateTimeFormat(f,wt({},b,d)),o.set(M,R)),m?R.formatToParts(c):R.format(c)}const dh=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Vo(...t){const[e,n,i,r]=t,s={};let a={},o;if(Ee(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw wi(ii.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw wi(ii.INVALID_ISO_DATE_ARGUMENT)}}else if(XM(e)){if(isNaN(e.getTime()))throw wi(ii.INVALID_DATE_ARGUMENT);o=e}else if(gt(e))o=e;else throw wi(ii.INVALID_ARGUMENT);return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{dh.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function af(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function of(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,d]=Wo(...e),h=$e(u.missingWarn)?u.missingWarn:t.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const m=!!u.part,T=Pl(t,u),E=a(t,r,T);if(!Ee(l)||l==="")return new Intl.NumberFormat(T,d).format(c);let p={},f,b=null;const y="number format";for(let w=0;w<E.length&&(f=E[w],p=n[f]||{},b=p[l],!Fe(b));w++)Il(t,l,f,h,y);if(!Fe(b)||!Ee(f))return i?ya:l;let M=`${f}__${l}`;Ta(d)||(M=`${M}__${JSON.stringify(d)}`);let R=o.get(M);return R||(R=new Intl.NumberFormat(f,wt({},b,d)),o.set(M,R)),m?R.formatToParts(c):R.format(c)}const hh=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Wo(...t){const[e,n,i,r]=t,s={};let a={};if(!gt(e))throw wi(ii.INVALID_ARGUMENT);const o=e;return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{hh.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function lf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}bS();/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const uT="9.5.0";function fT(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(zn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(zn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(zn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(zn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(zn().__INTLIFY_PROD_DEVTOOLS__=!1)}const ph=YS.__EXTEND_POINT__,Qn=Cl(ph);Qn(),Qn(),Qn(),Qn(),Qn(),Qn(),Qn(),Qn();const mh=ii.__EXTEND_POINT__,zt=Cl(mh),mt={UNEXPECTED_RETURN_TYPE:mh,INVALID_ARGUMENT:zt(),MUST_BE_CALL_SETUP_TOP:zt(),NOT_INSTALLED:zt(),NOT_AVAILABLE_IN_LEGACY_MODE:zt(),REQUIRED_VALUE:zt(),INVALID_VALUE:zt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:zt(),NOT_INSTALLED_WITH_PROVIDE:zt(),UNEXPECTED_ERROR:zt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:zt(),BRIDGE_SUPPORT_VUE_2_ONLY:zt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:zt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:zt(),__EXTEND_POINT__:zt()};function vt(t,...e){return Ar(t,null,void 0)}const Xo=di("__translateVNode"),Yo=di("__datetimeParts"),$o=di("__numberParts"),_h=di("__setPluralRules"),gh=di("__injectWithOption"),qo=di("__dispose");function jo(t){if(!Je(t))return t;for(const e in t)if(wl(t,e))if(!e.includes("."))Je(t[e])&&jo(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]in r||(r[n[a]]={}),!Je(r[n[a]])){s=!0;break}r=r[n[a]]}s||(r[n[i]]=t[e],delete t[e]),Je(r[n[i]])&&jo(r[n[i]])}return t}function ba(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Fe(n)?n:at(i)?{}:{[t]:{}};if(at(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},Wr(c,a[l])):Wr(c,a)}else Ee(o)&&Wr(JSON.parse(o),a)}),r==null&&s)for(const o in a)wl(a,o)&&jo(a[o]);return a}const Ys=t=>!Je(t)||at(t);function Wr(t,e){if(Ys(t)||Ys(e))throw vt(mt.INVALID_VALUE);for(const n in t)wl(t,n)&&(Ys(t[n])||Ys(e[n])?e[n]=t[n]:Wr(t[n],e[n]))}function vh(t){return t.type}function xh(t,e,n){let i=Je(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=ba(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(Je(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Je(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function cf(t){return kt(os,null,t,0)}const uf="__INTLIFY_META__";let ff=0;function df(t){return(e,n,i,r)=>t(n,i,Jr()||void 0,r)}const dT=()=>{const t=Jr();let e=null;return t&&(e=vh(t)[uf])?{[uf]:e}:null};function Dl(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0;let s=$e(t.inheritLocale)?t.inheritLocale:!0;const a=St(n&&s?n.locale.value:Ee(t.locale)?t.locale:Er),o=St(n&&s?n.fallbackLocale.value:Ee(t.fallbackLocale)||at(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),l=St(ba(a.value,t)),c=St(Fe(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=St(Fe(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=n?n.missingWarn:$e(t.missingWarn)||fi(t.missingWarn)?t.missingWarn:!0,h=n?n.fallbackWarn:$e(t.fallbackWarn)||fi(t.fallbackWarn)?t.fallbackWarn:!0,m=n?n.fallbackRoot:$e(t.fallbackRoot)?t.fallbackRoot:!0,T=!!t.fallbackFormat,E=ct(t.missing)?t.missing:null,p=ct(t.missing)?df(t.missing):null,f=ct(t.postTranslation)?t.postTranslation:null,b=n?n.warnHtmlMessage:$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter;const M=n?n.modifiers:Fe(t.modifiers)?t.modifiers:{};let R=t.pluralRules||n&&n.pluralRules,w;w=(()=>{r&&Qu(null);const v={version:uT,locale:a.value,fallbackLocale:o.value,messages:l.value,modifiers:M,pluralRules:R,missing:p===null?void 0:p,missingWarn:d,fallbackWarn:h,fallbackFormat:T,unresolving:!0,postTranslation:f===null?void 0:f,warnHtmlMessage:b,escapeParameter:y,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};v.datetimeFormats=c.value,v.numberFormats=u.value,v.__datetimeFormatters=Fe(w)?w.__datetimeFormatters:void 0,v.__numberFormatters=Fe(w)?w.__numberFormatters:void 0;const _=nT(v);return r&&Qu(_),_})(),Ur(w,a.value,o.value);function z(){return[a.value,o.value,l.value,c.value,u.value]}const A=Xt({get:()=>a.value,set:v=>{a.value=v,w.locale=a.value}}),P=Xt({get:()=>o.value,set:v=>{o.value=v,w.fallbackLocale=o.value,Ur(w,a.value,v)}}),le=Xt(()=>l.value),oe=Xt(()=>c.value),B=Xt(()=>u.value);function Z(){return ct(f)?f:null}function J(v){f=v,w.postTranslation=v}function ne(){return E}function V(v){v!==null&&(p=df(v)),E=v,w.missing=p}const G=(v,_,N,q,te,ie)=>{z();let de;try{__INTLIFY_PROD_DEVTOOLS__&&Ju(dT()),r||(w.fallbackContext=n?tT():void 0),de=v(w)}finally{__INTLIFY_PROD_DEVTOOLS__&&Ju(null),r||(w.fallbackContext=void 0)}if(gt(de)&&de===ya){const[ue,Y]=_();return n&&m?q(n):te(ue)}else{if(ie(de))return de;throw vt(mt.UNEXPECTED_RETURN_TYPE)}};function ce(...v){return G(_=>Reflect.apply(rf,null,[_,...v]),()=>Go(...v),"translate",_=>Reflect.apply(_.t,_,[...v]),_=>_,_=>Ee(_))}function ae(...v){const[_,N,q]=v;if(q&&!Je(q))throw vt(mt.INVALID_ARGUMENT);return ce(_,N,wt({resolvedMessage:!0},q||{}))}function H(...v){return G(_=>Reflect.apply(sf,null,[_,...v]),()=>Vo(...v),"datetime format",_=>Reflect.apply(_.d,_,[...v]),()=>ju,_=>Ee(_))}function X(...v){return G(_=>Reflect.apply(of,null,[_,...v]),()=>Wo(...v),"number format",_=>Reflect.apply(_.n,_,[...v]),()=>ju,_=>Ee(_))}function pe(v){return v.map(_=>Ee(_)||gt(_)||$e(_)?cf(String(_)):_)}const ge={normalize:pe,interpolate:v=>v,type:"vnode"};function Te(...v){return G(_=>{let N;const q=_;try{q.processor=ge,N=Reflect.apply(rf,null,[q,...v])}finally{q.processor=null}return N},()=>Go(...v),"translate",_=>_[Xo](...v),_=>[cf(_)],_=>at(_))}function Ce(...v){return G(_=>Reflect.apply(of,null,[_,...v]),()=>Wo(...v),"number format",_=>_[$o](...v),()=>[],_=>Ee(_)||at(_))}function Ae(...v){return G(_=>Reflect.apply(sf,null,[_,...v]),()=>Vo(...v),"datetime format",_=>_[Yo](...v),()=>[],_=>Ee(_)||at(_))}function Be(v){R=v,w.pluralRules=R}function Qe(v,_){if(!v)return!1;const N=Ee(_)?_:a.value,q=x(N);return w.messageResolver(q,v)!==null}function Le(v){let _=null;const N=th(w,o.value,a.value);for(let q=0;q<N.length;q++){const te=l.value[N[q]]||{},ie=w.messageResolver(te,v);if(ie!=null){_=ie;break}}return _}function S(v){const _=Le(v);return _??(n?n.tm(v)||{}:{})}function x(v){return l.value[v]||{}}function g(v,_){l.value[v]=_,w.messages=l.value}function C(v,_){l.value[v]=l.value[v]||{},Wr(_,l.value[v]),w.messages=l.value}function D(v){return c.value[v]||{}}function F(v,_){c.value[v]=_,w.datetimeFormats=c.value,af(w,v,_)}function $(v,_){c.value[v]=wt(c.value[v]||{},_),w.datetimeFormats=c.value,af(w,v,_)}function j(v){return u.value[v]||{}}function re(v,_){u.value[v]=_,w.numberFormats=u.value,lf(w,v,_)}function se(v,_){u.value[v]=wt(u.value[v]||{},_),w.numberFormats=u.value,lf(w,v,_)}ff++,n&&ko&&(Li(n.locale,v=>{s&&(a.value=v,w.locale=v,Ur(w,a.value,o.value))}),Li(n.fallbackLocale,v=>{s&&(o.value=v,w.fallbackLocale=v,Ur(w,a.value,o.value))}));const fe={id:ff,locale:A,fallbackLocale:P,get inheritLocale(){return s},set inheritLocale(v){s=v,v&&n&&(a.value=n.locale.value,o.value=n.fallbackLocale.value,Ur(w,a.value,o.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:le,get modifiers(){return M},get pluralRules(){return R||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(v){d=v,w.missingWarn=d},get fallbackWarn(){return h},set fallbackWarn(v){h=v,w.fallbackWarn=h},get fallbackRoot(){return m},set fallbackRoot(v){m=v},get fallbackFormat(){return T},set fallbackFormat(v){T=v,w.fallbackFormat=T},get warnHtmlMessage(){return b},set warnHtmlMessage(v){b=v,w.warnHtmlMessage=v},get escapeParameter(){return y},set escapeParameter(v){y=v,w.escapeParameter=v},t:ce,getLocaleMessage:x,setLocaleMessage:g,mergeLocaleMessage:C,getPostTranslationHandler:Z,setPostTranslationHandler:J,getMissingHandler:ne,setMissingHandler:V,[_h]:Be};return fe.datetimeFormats=oe,fe.numberFormats=B,fe.rt=ae,fe.te=Qe,fe.tm=S,fe.d=H,fe.n=X,fe.getDateTimeFormat=D,fe.setDateTimeFormat=F,fe.mergeDateTimeFormat=$,fe.getNumberFormat=j,fe.setNumberFormat=re,fe.mergeNumberFormat=se,fe[gh]=i,fe[Xo]=Te,fe[Yo]=Ae,fe[$o]=Ce,fe}function hT(t){const e=Ee(t.locale)?t.locale:Er,n=Ee(t.fallbackLocale)||at(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ct(t.missing)?t.missing:void 0,r=$e(t.silentTranslationWarn)||fi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=$e(t.silentFallbackWarn)||fi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=$e(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Fe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=ct(t.postTranslation)?t.postTranslation:void 0,d=Ee(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,m=$e(t.sync)?t.sync:!0;let T=t.messages;if(Fe(t.sharedMessages)){const R=t.sharedMessages;T=Object.keys(R).reduce((I,z)=>{const A=I[z]||(I[z]={});return wt(A,R[z]),I},T||{})}const{__i18n:E,__root:p,__injectWithOption:f}=t,b=t.datetimeFormats,y=t.numberFormats,M=t.flatJson;return{locale:e,fallbackLocale:n,messages:T,flatJson:M,datetimeFormats:b,numberFormats:y,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:m,__i18n:E,__root:p,__injectWithOption:f}}function Ko(t={},e){{const n=Dl(hT(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return $e(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=$e(s)?!s:s},get silentFallbackWarn(){return $e(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=$e(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[a,o,l]=s,c={};let u=null,d=null;if(!Ee(a))throw vt(mt.INVALID_ARGUMENT);const h=a;return Ee(o)?c.locale=o:at(o)?u=o:Fe(o)&&(d=o),at(l)?u=l:Fe(l)&&(d=l),Reflect.apply(n.t,n,[h,u||d||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,d=null;if(!Ee(a))throw vt(mt.INVALID_ARGUMENT);const h=a;return Ee(o)?c.locale=o:gt(o)?c.plural=o:at(o)?u=o:Fe(o)&&(d=o),Ee(l)?c.locale=l:at(l)?u=l:Fe(l)&&(d=l),Reflect.apply(n.t,n,[h,u||d||{},c])},te(s,a){return n.te(s,a)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,a){n.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){n.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,a){n.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){n.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,a){n.setNumberFormat(s,a)},mergeNumberFormat(s,a){n.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const Nl={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function pT({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Pt?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},{})}function Eh(t){return Pt}const mT=pl({name:"i18n-t",props:wt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>gt(t)||!isNaN(t)}},Nl),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||hs({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(d=>d!=="_"),a={};t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ee(t.plural)?+t.plural:t.plural);const o=pT(e,s),l=r[Xo](t.keypath,o,a),c=wt({},i),u=Ee(t.tag)||Je(t.tag)?t.tag:Eh();return md(u,c,l)}}}),hf=mT;function _T(t){return at(t)&&!Ee(t[0])}function Mh(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o={};t.locale&&(a.locale=t.locale),Ee(t.format)?a.key=t.format:Je(t.format)&&(Ee(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((h,m)=>n.includes(m)?wt({},h,{[m]:t.format[m]}):h,{}));const l=i(t.value,a,o);let c=[a.key];at(l)?c=l.map((h,m)=>{const T=r[h.type],E=T?T({[h.type]:h.value,index:m,parts:l}):[h.value];return _T(E)&&(E[0].key=`${h.type}-${m}`),E}):Ee(l)&&(c=[l]);const u=wt({},s),d=Ee(t.tag)||Je(t.tag)?t.tag:Eh();return md(d,u,c)}}const gT=pl({name:"i18n-n",props:wt({value:{type:Number,required:!0},format:{type:[String,Object]}},Nl),setup(t,e){const n=t.i18n||hs({useScope:"parent",__useComponent:!0});return Mh(t,e,hh,(...i)=>n[$o](...i))}}),pf=gT,vT=pl({name:"i18n-d",props:wt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Nl),setup(t,e){const n=t.i18n||hs({useScope:"parent",__useComponent:!0});return Mh(t,e,dh,(...i)=>n[Yo](...i))}}),mf=vT;function xT(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function ET(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw vt(mt.UNEXPECTED_ERROR);const u=xT(t,o.$),d=_f(c);return[Reflect.apply(u.t,u,[...gf(d)]),u]};return{created:(a,o)=>{const[l,c]=e(o);ko&&t.global===c&&(a.__i18nWatcher=Li(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{ko&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=_f(o);a.textContent=Reflect.apply(l.t,l,[...gf(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function _f(t){if(Ee(t))return{path:t};if(Fe(t)){if(!("path"in t))throw vt(mt.REQUIRED_VALUE,"path");return t}else throw vt(mt.INVALID_VALUE)}function gf(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ee(n)&&(a.locale=n),gt(r)&&(a.plural=r),gt(s)&&(a.plural=s),[e,o,a]}function MT(t,e,...n){const i=Fe(n[0])?n[0]:{},r=!!i.useI18nComponentName;($e(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":hf.name,"I18nT"].forEach(a=>t.component(a,hf)),[pf.name,"I18nN"].forEach(a=>t.component(a,pf)),[mf.name,"I18nD"].forEach(a=>t.component(a,mf))),t.directive("t",ET(e))}function ST(t,e,n){return{beforeCreate(){const i=Jr();if(!i)throw vt(mt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=vf(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Ko(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=vf(t,r);else{this.$i18n=Ko({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&xh(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Jr();if(!i)throw vt(mt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function vf(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[_h](e.pluralizationRules||t.pluralizationRules);const n=ba(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const TT=di("global-vue-i18n");function yT(t={},e){const n=__VUE_I18N_LEGACY_API__&&$e(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=$e(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[a,o]=bT(t,n),l=di("");function c(h){return s.get(h)||null}function u(h,m){s.set(h,m)}function d(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(m,...T){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,h),Fe(T[0])){const f=T[0];h.__composerExtend=f.__composerExtend,h.__vueI18nExtend=f.__vueI18nExtend}let E=null;!n&&i&&(E=NT(m,h.global)),__VUE_I18N_FULL_INSTALL__&&MT(m,h,...T),__VUE_I18N_LEGACY_API__&&n&&m.mixin(ST(o,o.__composer,h));const p=m.unmount;m.unmount=()=>{E&&E(),h.dispose(),p()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:d};return h}}function hs(t={}){const e=Jr();if(e==null)throw vt(mt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw vt(mt.NOT_INSTALLED);const n=AT(e),i=wT(n),r=vh(e),s=RT(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw vt(mt.NOT_AVAILABLE_IN_LEGACY_MODE);return IT(e,s,i,t)}if(s==="global")return xh(i,t,r),i;if(s==="parent"){let l=CT(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=wt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=Dl(l),a.__composerExtend&&(o[qo]=a.__composerExtend(o)),PT(a,e,o),a.__setInstance(e,o)}return o}function bT(t,e,n){const i=zh();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Ko(t)):i.run(()=>Dl(t));if(r==null)throw vt(mt.UNEXPECTED_ERROR);return[i,r]}}function AT(t){{const e=zr(t.isCE?TT:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw vt(t.isCE?mt.NOT_INSTALLED_WITH_PROVIDE:mt.UNEXPECTED_ERROR);return e}}function RT(t,e){return Ta(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function wT(t){return t.mode==="composition"?t.global:t.global.__composer}function CT(t,e,n=!1){let i=null;const r=e.root;let s=LT(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[gh]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function LT(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function PT(t,e,n){ml(()=>{},e),_l(()=>{const i=n;t.__deleteInstance(e);const r=i[qo];r&&(r(),delete i[qo])},e)}function IT(t,e,n,i={}){const r=e==="local",s=gp(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw vt(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=$e(i.inheritLocale)?i.inheritLocale:!Ee(i.locale),o=St(!r||a?n.locale.value:Ee(i.locale)?i.locale:Er),l=St(!r||a?n.fallbackLocale.value:Ee(i.fallbackLocale)||at(i.fallbackLocale)||Fe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=St(ba(o.value,i)),u=St(Fe(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),d=St(Fe(i.numberFormats)?i.numberFormats:{[o.value]:{}}),h=r?n.missingWarn:$e(i.missingWarn)||fi(i.missingWarn)?i.missingWarn:!0,m=r?n.fallbackWarn:$e(i.fallbackWarn)||fi(i.fallbackWarn)?i.fallbackWarn:!0,T=r?n.fallbackRoot:$e(i.fallbackRoot)?i.fallbackRoot:!0,E=!!i.fallbackFormat,p=ct(i.missing)?i.missing:null,f=ct(i.postTranslation)?i.postTranslation:null,b=r?n.warnHtmlMessage:$e(i.warnHtmlMessage)?i.warnHtmlMessage:!0,y=!!i.escapeParameter,M=r?n.modifiers:Fe(i.modifiers)?i.modifiers:{},R=i.pluralRules||r&&n.pluralRules;function w(){return[o.value,l.value,c.value,u.value,d.value]}const I=Xt({get:()=>s.value?s.value.locale.value:o.value,set:g=>{s.value&&(s.value.locale.value=g),o.value=g}}),z=Xt({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:g=>{s.value&&(s.value.fallbackLocale.value=g),l.value=g}}),A=Xt(()=>s.value?s.value.messages.value:c.value),P=Xt(()=>u.value),le=Xt(()=>d.value);function oe(){return s.value?s.value.getPostTranslationHandler():f}function B(g){s.value&&s.value.setPostTranslationHandler(g)}function Z(){return s.value?s.value.getMissingHandler():p}function J(g){s.value&&s.value.setMissingHandler(g)}function ne(g){return w(),g()}function V(...g){return s.value?ne(()=>Reflect.apply(s.value.t,null,[...g])):ne(()=>"")}function G(...g){return s.value?Reflect.apply(s.value.rt,null,[...g]):""}function ce(...g){return s.value?ne(()=>Reflect.apply(s.value.d,null,[...g])):ne(()=>"")}function ae(...g){return s.value?ne(()=>Reflect.apply(s.value.n,null,[...g])):ne(()=>"")}function H(g){return s.value?s.value.tm(g):{}}function X(g,C){return s.value?s.value.te(g,C):!1}function pe(g){return s.value?s.value.getLocaleMessage(g):{}}function me(g,C){s.value&&(s.value.setLocaleMessage(g,C),c.value[g]=C)}function ge(g,C){s.value&&s.value.mergeLocaleMessage(g,C)}function Te(g){return s.value?s.value.getDateTimeFormat(g):{}}function Ce(g,C){s.value&&(s.value.setDateTimeFormat(g,C),u.value[g]=C)}function Ae(g,C){s.value&&s.value.mergeDateTimeFormat(g,C)}function Be(g){return s.value?s.value.getNumberFormat(g):{}}function Qe(g,C){s.value&&(s.value.setNumberFormat(g,C),d.value[g]=C)}function Le(g,C){s.value&&s.value.mergeNumberFormat(g,C)}const S={get id(){return s.value?s.value.id:-1},locale:I,fallbackLocale:z,messages:A,datetimeFormats:P,numberFormats:le,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(g){s.value&&(s.value.inheritLocale=g)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:M},get pluralRules(){return s.value?s.value.pluralRules:R},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackWarn(){return s.value?s.value.fallbackWarn:m},set fallbackWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackRoot(){return s.value?s.value.fallbackRoot:T},set fallbackRoot(g){s.value&&(s.value.fallbackRoot=g)},get fallbackFormat(){return s.value?s.value.fallbackFormat:E},set fallbackFormat(g){s.value&&(s.value.fallbackFormat=g)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:b},set warnHtmlMessage(g){s.value&&(s.value.warnHtmlMessage=g)},get escapeParameter(){return s.value?s.value.escapeParameter:y},set escapeParameter(g){s.value&&(s.value.escapeParameter=g)},t:V,getPostTranslationHandler:oe,setPostTranslationHandler:B,getMissingHandler:Z,setMissingHandler:J,rt:G,d:ce,n:ae,tm:H,te:X,getLocaleMessage:pe,setLocaleMessage:me,mergeLocaleMessage:ge,getDateTimeFormat:Te,setDateTimeFormat:Ce,mergeDateTimeFormat:Ae,getNumberFormat:Be,setNumberFormat:Qe,mergeNumberFormat:Le};function x(g){g.locale.value=o.value,g.fallbackLocale.value=l.value,Object.keys(c.value).forEach(C=>{g.mergeLocaleMessage(C,c.value[C])}),Object.keys(u.value).forEach(C=>{g.mergeDateTimeFormat(C,u.value[C])}),Object.keys(d.value).forEach(C=>{g.mergeNumberFormat(C,d.value[C])}),g.escapeParameter=y,g.fallbackFormat=E,g.fallbackRoot=T,g.fallbackWarn=m,g.missingWarn=h,g.warnHtmlMessage=b}return Qf(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw vt(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const g=s.value=t.proxy.$i18n.__composer;e==="global"?(o.value=g.locale.value,l.value=g.fallbackLocale.value,c.value=g.messages.value,u.value=g.datetimeFormats.value,d.value=g.numberFormats.value):r&&x(g)}),S}const DT=["locale","fallbackLocale","availableLocales"],xf=["t","rt","d","n","tm","te"];function NT(t,e){const n=Object.create(null);return DT.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw vt(mt.UNEXPECTED_ERROR);const a=yt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,xf.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw vt(mt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,xf.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}fT();__INTLIFY_JIT_COMPILATION__?Zu(sT):Zu(rT);JS(DS);QS(th);if(__INTLIFY_PROD_DEVTOOLS__){const t=zn();t.__INTLIFY__=!0,GS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const UT="/assets/logo-92273f72.png";const Rr=t=>(dl("data-v-69dc9354"),t=t(),hl(),t),OT=ga('<div class="left_header" data-v-69dc9354><nav data-v-69dc9354><ul data-v-69dc9354><li data-v-69dc9354><a href="" data-v-69dc9354>Жаңалықтар</a></li><li data-v-69dc9354><a href="#/team" data-v-69dc9354>Құрама</a></li><li data-v-69dc9354><a href="" data-v-69dc9354>Магазин</a></li><li data-v-69dc9354><a href="" data-v-69dc9354>Келесі матчтар</a></li></ul></nav></div><a href="" data-v-69dc9354><img alt="Vue logo" class="logo" src="'+UT+'" data-v-69dc9354></a>',2),FT={class:"right_header"},BT=Rr(()=>Xe("li",null,[Xe("a",{href:""},"Tickets")],-1)),kT=Rr(()=>Xe("li",null,[Xe("a",{href:""},"Men's team")],-1)),HT={href:"#/shop"},zT=Rr(()=>Xe("li",null,[Xe("a",{href:"#/news"},"News")],-1)),GT=Rr(()=>Xe("option",null,"kz",-1)),VT=Rr(()=>Xe("option",null,"en",-1)),WT=[GT,VT],XT=Rr(()=>Xe("div",{class:"toggle"},[Xe("div",{id:"dark-mode",type:"checkbox"})],-1)),YT=[XT],$T={__name:"Header",setup(t,{emit:e}){const{t:n,locale:i}=hs(),r=St(!1),s=()=>{document.querySelector("body").classList.add("dark-mode"),r.value=!0,e("dark")},a=()=>{document.querySelector("body").classList.remove("dark-mode"),r.value=!1,e("light")},o=()=>{r.value||document.querySelector("body").classList.contains("dark-mode")?(console.log("body"),a()):s()},l=Xt(()=>r.value?"darkmode-toggled":"");return(c,u)=>(Vt(),Qt("header",null,[OT,Xe("div",FT,[Xe("nav",null,[Xe("ul",null,[BT,kT,Xe("li",null,[Xe("a",HT,Or(Eo(n)("shop")),1)]),zT,Xe("li",null,[Fp(Xe("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>yt(i)?i.value=d:null)},WT,512),[[$m,Eo(i)]])])])]),Xe("div",{class:as(["mode-toggle",l.value]),onClick:o},YT,2)])]))}},qT=Bi($T,[["__scopeId","data-v-69dc9354"]]);const jT={name:"Team"},KT={class:"field"},ZT=ga('<img class="jackson" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/259197.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="sterling" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/202652.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="mudryk" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/246340.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="nkunku" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/232411.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="enzo" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/247090.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="caicedo" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/256079.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="james" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/238074.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="axel" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/229942.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="silva" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/164240.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="chilwell" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/229984.png.adapt.265w.png" alt="" data-v-3cfa16f4><img class="sanchez" width="100" src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/228789.png.adapt.250w.png" alt="" data-v-3cfa16f4>',11),JT=[ZT];function QT(t,e,n,i,r,s){return Vt(),Qt("div",KT,JT)}const ey=Bi(jT,[["render",QT],["__scopeId","data-v-3cfa16f4"]]);const ty=t=>(dl("data-v-edf6b996"),t=t(),hl(),t),ny=ty(()=>Xe("div",{class:"bg"},null,-1)),iy={class:"container"},ry={__name:"App",setup(t){const{t:e,locale:n}=hs(),i={"/":GM,"/shop":DM,"/team":ey},r=St(window.location.hash);window.addEventListener("hashchange",()=>{r.value=window.location.hash});const s=Xt(()=>i[r.value.slice(1)||"/"]||OM);return Li(n,a=>{localStorage.setItem("locale",a)}),(a,o)=>(Vt(),Qt(Pt,null,[ny,kt(qT),Xe("main",null,[Xe("div",iy,[(Vt(),pm($p(s.value)))])])],64))}},sy=Bi(ry,[["__scopeId","data-v-edf6b996"]]),ay={shop:"Shop"},oy={shop:"Магазин"},ly=yT({legacy:!1,locale:localStorage.getItem("locale")??"kz",fallbackLocale:"kz",messages:{kz:oy,en:ay}});Km(sy).use(ly).mount("#app");
