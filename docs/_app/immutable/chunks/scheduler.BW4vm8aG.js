function b(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function v(t){t.forEach(j)}function E(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const o of n)o(void 0);return b}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t){let n;return y(t,e=>n=e)(),n}function P(t,n,e){t.$$.on_destroy.push(y(n,e))}function U(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)i[u]=n.dirty[u]|r[u];return i}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,i){if(r){const f=m(n,e,o,i);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t){return t&&E(t.destroy)?t.destroy:b}let l;function _(t){l=t}function x(){if(!l)throw new Error("Function called outside component initialization");return l}function K(t){x().$$.on_mount.push(t)}function L(t){x().$$.after_update.push(t)}const a=[],p=[];let s=[];const g=[],k=Promise.resolve();let h=!1;function O(){h||(h=!0,k.then(z))}function N(){return O(),k}function q(t){s.push(t)}const d=new Set;let c=0;function z(){if(c!==0)return;const t=l;do{try{for(;c<a.length;){const n=a[c];c++,_(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;g.length;)g.pop()();h=!1,d.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function Q(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{F as A,J as B,L as a,p as b,P as c,S as d,B as e,z as f,q as g,Q as h,E as i,l as j,_ as k,j as l,a as m,b as n,K as o,O as p,U as q,v as r,A as s,N as t,w as u,D as v,G as w,C as x,I as y,H as z};
