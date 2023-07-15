import{S as Ze,i as et,s as tt,w as at,R as st,a as w,k as n,q as V,y as Ge,N as lt,h as a,c as D,l as c,m as i,r as O,z as He,n as r,b as C,E as e,A as Je,F as j,g as te,f as ot,T as rt,d as pe,K as nt,B as Ke,G as Se,D as Re,u as ct,v as it}from"../chunks/index.ecd3f872.js";import{i as ft,C as Qe,p as qe,c as ut,e as pt}from"../chunks/store.ced03d2a.js";import"../chunks/dexie-export-import.04a54359.js";import{d as De}from"../chunks/BaseRepo.b0f9c191.js";import{S as dt}from"../chunks/save.02a1bd69.js";import{a as xe}from"../chunks/Confirm.eda23a4f.js";import{C as ht}from"../chunks/CreateUpdateModal.431ead9f.js";import{C as mt}from"../chunks/CategoryIcon.3bb2426d.js";function _t(){De.tables.forEach(function(u){u.clear()})}const We={exportDB:async function(){const u=await De.export(),l=URL.createObjectURL(u),o=document.createElement("a");o.href=l,o.download=`accountancy-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(o)},importDB:async function(u){_t(),await De.import(u)}};function Me(u,l,o){const d=u.slice();return d[10]=l[o],d}function vt(u){let l,o,d,I,k,_,p,h,b,y,S,m,s,f;return{c(){l=n("div"),o=n("span"),d=V("Desktop"),I=w(),k=n("div"),_=n("div"),p=n("label"),h=n("input"),b=V(`\r
                Save imported files locally`),y=w(),S=n("button"),m=V("Open app folder"),this.h()},l(v){l=c(v,"DIV",{class:!0});var P=i(l);o=c(P,"SPAN",{class:!0});var A=i(o);d=O(A,"Desktop"),A.forEach(a),I=D(P),k=c(P,"DIV",{});var $=i(k);_=c($,"DIV",{class:!0});var q=i(_);p=c(q,"LABEL",{class:!0});var z=i(p);h=c(z,"INPUT",{type:!0}),b=O(z,`\r
                Save imported files locally`),z.forEach(a),q.forEach(a),y=D($),S=c($,"BUTTON",{class:!0});var U=i(S);m=O(U,"Open app folder"),U.forEach(a),$.forEach(a),P.forEach(a),this.h()},h(){r(o,"class","has-text-grey-lighter"),r(h,"type","checkbox"),r(p,"class","checkbox"),r(_,"class","field"),r(S,"class","button"),r(l,"class","box")},m(v,P){C(v,l,P),e(l,o),e(o,d),e(l,I),e(l,k),e(k,_),e(_,p),e(p,h),h.checked=u[1].saveImportedFiles,e(p,b),e(k,y),e(k,S),e(S,m),s||(f=[j(h,"change",u[5]),j(S,"click",dt.openAppDataDir)],s=!0)},p(v,P){P&2&&(h.checked=v[1].saveImportedFiles)},d(v){v&&a(l),s=!1,Se(f)}}}function je(u){let l,o,d,I,k,_,p,h,b,y;function S(){return u[7](u[10])}function m(){return u[8](u[10])}return{c(){l=n("div"),o=n("button"),d=n("span"),I=n("i"),k=w(),_=n("button"),p=n("span"),h=n("i"),this.h()},l(s){l=c(s,"DIV",{class:!0});var f=i(l);o=c(f,"BUTTON",{class:!0});var v=i(o);d=c(v,"SPAN",{class:!0});var P=i(d);I=c(P,"I",{class:!0}),i(I).forEach(a),P.forEach(a),v.forEach(a),k=D(f),_=c(f,"BUTTON",{class:!0});var A=i(_);p=c(A,"SPAN",{class:!0});var $=i(p);h=c($,"I",{class:!0}),i(h).forEach(a),$.forEach(a),A.forEach(a),f.forEach(a),this.h()},h(){r(I,"class","fa-solid fa-pen"),r(d,"class","icon is-small"),r(o,"class","button is-outlined is-small"),r(h,"class","fa-solid fa-trash"),r(p,"class","icon is-small"),r(_,"class","button is-outlined is-small is-danger"),r(l,"class","ml-auto")},m(s,f){C(s,l,f),e(l,o),e(o,d),e(d,I),e(l,k),e(l,_),e(_,p),e(p,h),b||(y=[j(o,"click",S),j(_,"click",m)],b=!0)},p(s,f){u=s},d(s){s&&a(l),b=!1,Se(y)}}}function ze(u){let l,o,d,I,k=u[10].name+"",_,p,h,b,y,S;d=new mt({props:{categoryId:u[10].id}});let m=u[10].id&&je(u);return{c(){l=n("a"),o=n("span"),Ge(d.$$.fragment),I=w(),_=V(k),p=w(),m&&m.c(),h=w(),this.h()},l(s){l=c(s,"A",{class:!0});var f=i(l);o=c(f,"SPAN",{class:!0});var v=i(o);He(d.$$.fragment,v),v.forEach(a),I=D(f),_=O(f,k),p=D(f),m&&m.l(f),h=D(f),f.forEach(a),this.h()},h(){r(o,"class","panel-icon"),r(l,"class","panel-block")},m(s,f){C(s,l,f),e(l,o),Je(d,o,null),e(l,I),e(l,_),e(l,p),m&&m.m(l,null),e(l,h),b=!0,y||(S=j(l,"click",Et),y=!0)},p(s,f){const v={};f&4&&(v.categoryId=s[10].id),d.$set(v),(!b||f&4)&&k!==(k=s[10].name+"")&&ct(_,k),s[10].id?m?m.p(s,f):(m=je(s),m.c(),m.m(l,h)):m&&(m.d(1),m=null)},i(s){b||(te(d.$$.fragment,s),b=!0)},o(s){pe(d.$$.fragment,s),b=!1},d(s){s&&a(l),Ke(d),m&&m.d(),y=!1,S()}}}function bt(u){let l,o,d,I,k=ft(),_,p,h,b,y,S,m,s,f,v,P,A,$,q,z,U,de,he,x,K,me,_e,F,Q,Y,ve,Z,be,ae,B,M,W,Ee,ge,G,X,ee,ke,se,L,Ie,le,ye,Ne,R=k&&vt(u),H=u[2],E=[];for(let t=0;t<H.length;t+=1)E[t]=ze(Me(u,H,t));const Xe=t=>pe(E[t],1,1,()=>{E[t]=null});function Ye(t){u[9](t)}let Pe={name:"Category",repo:Qe,form:[[{prop:"color",type:"color",class:"is-one-quarter"},{prop:"name"}]]};return u[0]!==void 0&&(Pe.modal=u[0]),L=new ht({props:Pe}),at.push(()=>st(L,"modal",Ye)),{c(){l=w(),o=n("h1"),d=V("Parameters"),I=w(),R&&R.c(),_=w(),p=n("div"),h=n("div"),b=n("div"),y=n("span"),S=V("Import"),m=w(),s=n("div"),f=n("label"),v=n("input"),P=w(),A=n("span"),$=n("span"),q=n("i"),z=w(),U=n("span"),de=V("Choose a file…"),he=w(),x=n("div"),K=n("span"),me=V("Export"),_e=w(),F=n("button"),Q=n("span"),Y=n("i"),ve=w(),Z=n("span"),be=V("Export"),ae=w(),B=n("div"),M=n("div"),W=n("span"),Ee=V("Categories"),ge=w(),G=n("button"),X=n("span"),ee=n("i"),ke=w();for(let t=0;t<E.length;t+=1)E[t].c();se=w(),Ge(L.$$.fragment),this.h()},l(t){lt("svelte-14px3fs",document.head).forEach(a),l=D(t),o=c(t,"H1",{class:!0});var T=i(o);d=O(T,"Parameters"),T.forEach(a),I=D(t),R&&R.l(t),_=D(t),p=c(t,"DIV",{class:!0});var N=i(p);h=c(N,"DIV",{class:!0});var J=i(h);b=c(J,"DIV",{class:!0});var oe=i(b);y=c(oe,"SPAN",{class:!0});var Ae=i(y);S=O(Ae,"Import"),Ae.forEach(a),m=D(oe),s=c(oe,"DIV",{class:!0});var $e=i(s);f=c($e,"LABEL",{class:!0});var re=i(f);v=c(re,"INPUT",{class:!0,type:!0,name:!0,accept:!0}),P=D(re),A=c(re,"SPAN",{class:!0});var ne=i(A);$=c(ne,"SPAN",{class:!0});var Ce=i($);q=c(Ce,"I",{class:!0}),i(q).forEach(a),Ce.forEach(a),z=D(ne),U=c(ne,"SPAN",{class:!0});var Be=i(U);de=O(Be,"Choose a file…"),Be.forEach(a),ne.forEach(a),re.forEach(a),$e.forEach(a),oe.forEach(a),he=D(J),x=c(J,"DIV",{class:!0});var ce=i(x);K=c(ce,"SPAN",{class:!0});var Te=i(K);me=O(Te,"Export"),Te.forEach(a),_e=D(ce),F=c(ce,"BUTTON",{class:!0});var ie=i(F);Q=c(ie,"SPAN",{class:!0});var Ve=i(Q);Y=c(Ve,"I",{class:!0}),i(Y).forEach(a),Ve.forEach(a),ve=D(ie),Z=c(ie,"SPAN",{});var Oe=i(Z);be=O(Oe,"Export"),Oe.forEach(a),ie.forEach(a),ce.forEach(a),J.forEach(a),N.forEach(a),ae=D(t),B=c(t,"DIV",{class:!0});var fe=i(B);M=c(fe,"DIV",{class:!0});var ue=i(M);W=c(ue,"SPAN",{class:!0});var Ue=i(W);Ee=O(Ue,"Categories"),Ue.forEach(a),ge=D(ue),G=c(ue,"BUTTON",{class:!0});var Fe=i(G);X=c(Fe,"SPAN",{class:!0});var Le=i(X);ee=c(Le,"I",{class:!0}),i(ee).forEach(a),Le.forEach(a),Fe.forEach(a),ue.forEach(a),ke=D(fe);for(let we=0;we<E.length;we+=1)E[we].l(fe);fe.forEach(a),se=D(t),He(L.$$.fragment,t),this.h()},h(){document.title="MePloutos - Parameters",r(o,"class","title"),r(y,"class","has-text-grey-lighter"),r(v,"class","file-input"),r(v,"type","file"),r(v,"name","resume"),r(v,"accept","application/JSON"),r(q,"class","fa fa-file-import"),r($,"class","file-icon"),r(U,"class","file-label"),r(A,"class","file-cta is-fullwidth"),r(f,"class","file-label is-fullwidth"),r(s,"class","file"),r(b,"class","column"),r(K,"class","has-text-grey-lighter"),r(Y,"class","fa-solid fa-file-export"),r(Q,"class","icon"),r(F,"class","button is-fullwidth"),r(x,"class","column"),r(h,"class","columns"),r(p,"class","box"),r(W,"class","has-text-grey-lighter"),r(ee,"class","fa-solid fa-plus"),r(X,"class","icon is-small"),r(G,"class","button is-small is-light"),r(M,"class","panel-block flex-container pb-0"),r(B,"class","panel has-background-white")},m(t,g){C(t,l,g),C(t,o,g),e(o,d),C(t,I,g),R&&R.m(t,g),C(t,_,g),C(t,p,g),e(p,h),e(h,b),e(b,y),e(y,S),e(b,m),e(b,s),e(s,f),e(f,v),e(f,P),e(f,A),e(A,$),e($,q),e(A,z),e(A,U),e(U,de),e(h,he),e(h,x),e(x,K),e(K,me),e(x,_e),e(x,F),e(F,Q),e(Q,Y),e(F,ve),e(F,Z),e(Z,be),C(t,ae,g),C(t,B,g),e(B,M),e(M,W),e(W,Ee),e(M,ge),e(M,G),e(G,X),e(X,ee),e(B,ke);for(let T=0;T<E.length;T+=1)E[T]&&E[T].m(B,null);C(t,se,g),Je(L,t,g),le=!0,ye||(Ne=[j(v,"change",u[4]),j(F,"click",We.exportDB),j(G,"click",u[6])],ye=!0)},p(t,[g]){if(k&&R.p(t,g),g&13){H=t[2];let N;for(N=0;N<H.length;N+=1){const J=Me(t,H,N);E[N]?(E[N].p(J,g),te(E[N],1)):(E[N]=ze(J),E[N].c(),te(E[N],1),E[N].m(B,null))}for(it(),N=H.length;N<E.length;N+=1)Xe(N);ot()}const T={};!Ie&&g&1&&(Ie=!0,T.modal=t[0],rt(()=>Ie=!1)),L.$set(T)},i(t){if(!le){for(let g=0;g<H.length;g+=1)te(E[g]);te(L.$$.fragment,t),le=!0}},o(t){E=E.filter(Boolean);for(let g=0;g<E.length;g+=1)pe(E[g]);pe(L.$$.fragment,t),le=!1},d(t){t&&a(l),t&&a(o),t&&a(I),R&&R.d(t),t&&a(_),t&&a(p),t&&a(ae),t&&a(B),nt(E,t),t&&a(se),Ke(L,t),ye=!1,Se(Ne)}}}const Et=()=>{};function gt(u,l,o){let d,I;Re(u,qe,s=>o(1,d=s)),Re(u,ut,s=>o(2,I=s));function k(s){xe.show(`Are you sure you want to delete '${s.name}' ?`,"Delete category","is-danger").then(f=>{f&&Qe.remove(s.id)})}function _(s){xe.show("Importing from a file will clear all current data, are you sure ?","Import a save","is-warning").then(f=>{f&&We.importDB(s.target.files[0])})}let p=null;function h(){d.saveImportedFiles=this.checked,qe.set(d)}const b=()=>p.show(new pt),y=s=>p.show(s),S=s=>k(s);function m(s){p=s,o(0,p)}return[p,d,I,k,_,h,b,y,S,m]}class At extends Ze{constructor(l){super(),et(this,l,gt,bt,tt,{})}}export{At as component};