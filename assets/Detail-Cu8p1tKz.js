import{a as p,j as t}from"./vendor-react-C-ttznok.js";import{a as n}from"./vendor-react-redux-CIXo0FcY.js";import{s as m,F as c}from"./index-wqI_84p2.js";import{q as i}from"./vendor-styled-components-DtRqYlq8.js";import{b as d}from"./vendor-react-router-05TLMbg_.js";import"./vendor-cookie-CqkleIqs.js";import"./vendor-use-sync-external-store-D1xwoNX4.js";import"./vendor-react-dom-QWvRwFjS.js";import"./vendor-scheduler-CoSDG3-6.js";import"./vendor-@reduxjs-BMUoi9AQ.js";import"./vendor-redux-BXkGT1VS.js";import"./vendor-immer-CV3RTzms.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-reselect-Cg9BXdu5.js";import"./vendor-react-is-BpnmhmOb.js";import"./vendor-@emotion-CnilPTPJ.js";import"./vendor-hoist-non-react-statics-CYwSohCl.js";const l=i.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${e=>e.flipped?"rotateY(180deg)":"rotateY(0deg)"};
`,x=i.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`,f=i.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;function b({front:e,back:r}){const[o,s]=p.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{flipped:o,children:[t.jsx(x,{src:e}),t.jsx(f,{src:r})]}),t.jsx("button",{onClick:()=>s(a=>!a),children:"뒤집기"})]})}function S(){const{pokemonId:e}=d(),r=n(m(Number(e)));return t.jsxs("div",{className:"bg-white flex flex-col justify-center items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black",children:[t.jsxs("div",{className:"text-[28px] mb-[10px]",children:[r.name,t.jsx(c,{pokemonId:Number(e)})]}),t.jsx("div",{className:"whitespace-pre-wrap text-center",children:r.description}),t.jsx(b,{front:r.front,back:r.back})]})}export{S as default};
