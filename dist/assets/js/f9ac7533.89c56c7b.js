"use strict";(self.webpackChunkStudy_React_js=self.webpackChunkStudy_React_js||[]).push([[242],{8948:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=i(4848),a=i(8453);const o={},r="Reconcilation , Diffing Algorithm, Virtual DOM",c={id:"react/Reconcillation",title:"Reconcilation , Diffing Algorithm, Virtual DOM",description:"Virtual DOM:",source:"@site/docs/react/Reconcillation.md",sourceDirName:"react",slug:"/react/Reconcillation",permalink:"/docs/react/Reconcillation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Life cycle methods in React.js",permalink:"/docs/react/Lifecycle"},next:{title:"State and Props",permalink:"/docs/react/Stateprops"}},l={},s=[{value:"Virtual DOM:",id:"virtual-dom",level:3},{value:"Reconciliation:",id:"reconciliation",level:3},{value:"Diffing Algorithm:",id:"diffing-algorithm",level:3}];function h(e){const t={h1:"h1",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reconcilation--diffing-algorithm-virtual-dom",children:"Reconcilation , Diffing Algorithm, Virtual DOM"}),"\n",(0,n.jsx)(t.h3,{id:"virtual-dom",children:"Virtual DOM:"}),"\n",(0,n.jsx)(t.p,{children:"Think of the Virtual DOM as a lightweight copy of the actual DOM (Document Object Model) of your web page or application.\r\nIt's like a blueprint or a sketch that represents what the actual DOM looks like.\r\nUnlike the real DOM, which directly interacts with the browser, the Virtual DOM exists in memory and can be manipulated more efficiently."}),"\n",(0,n.jsx)(t.h3,{id:"reconciliation",children:"Reconciliation:"}),"\n",(0,n.jsx)(t.p,{children:"When you make changes to your web page or application (like updating some data or adding/removing elements), those changes need to be reflected in the DOM.\r\nReconciliation is the process of figuring out what has changed in the Virtual DOM compared to the actual DOM, and then efficiently updating the real DOM to match the Virtual DOM.\r\nIt's like comparing a before-and-after picture to see what's different and then making those changes in the actual room."}),"\n",(0,n.jsx)(t.h3,{id:"diffing-algorithm",children:"Diffing Algorithm:"}),"\n",(0,n.jsx)(t.p,{children:"Diffing is the heart of reconciliation. It's the process of comparing the old Virtual DOM with the new Virtual DOM to see what exactly has changed.\r\nInstead of blindly updating the entire DOM every time something changes, the diffing algorithm finds the minimum number of operations needed to update the real DOM efficiently."}),"\n",(0,n.jsx)(t.p,{children:"It's like if you rearranged the furniture in a room, instead of taking out everything and putting it back in, you'd only move the items that have changed places.\r\nIn simpler terms, think of the Virtual DOM as a plan for your web page, reconciliation as the process of making sure the actual page matches the plan, and the diffing algorithm as the method for figuring out what needs to change and how to do it efficiently, like rearranging furniture without redoing the whole room. This approach helps make web applications faster and more responsive."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(6540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);