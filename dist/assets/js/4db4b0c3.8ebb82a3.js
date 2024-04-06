"use strict";(self.webpackChunkStudy_React_js=self.webpackChunkStudy_React_js||[]).push([[565],{6876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const a={sidebar_position:5},r="Timers",o={id:"Javascript/Timers",title:"Timers",description:"In JavaScript, setTimeout, setInterval, and setImmediate are all functions used to execute code asynchronously, but they have different behaviors and use cases.",source:"@site/docs/Javascript/Timers.md",sourceDirName:"Javascript",slug:"/Javascript/Timers",permalink:"/docs/Javascript/Timers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/docs/Javascript/ArrowRegular"},next:{title:"Hoisting",permalink:"/docs/Javascript/hoisting"}},c={},l=[{value:"setTimeout",id:"settimeout",level:3},{value:"setInterval",id:"setinterval",level:3},{value:"setImmediate",id:"setimmediate",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timers",children:"Timers"}),"\n",(0,s.jsx)(t.p,{children:"In JavaScript, setTimeout, setInterval, and setImmediate are all functions used to execute code asynchronously, but they have different behaviors and use cases."}),"\n",(0,s.jsx)(t.h3,{id:"settimeout",children:"setTimeout"}),"\n",(0,s.jsx)(t.p,{children:"setTimeout schedules a function to run once after a specified delay in milliseconds.\r\nIt takes two parameters: a function to execute and the delay (in milliseconds) before executing the function."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"setTimeout(() => {\r\n    console.log('This message will appear after 1000 milliseconds');\r\n}, 1000);\r\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setinterval",children:"setInterval"}),"\n",(0,s.jsx)(t.p,{children:"setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.\r\nIt also takes two parameters: a function to execute and the time interval (in milliseconds) between each execution."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"let count = 0;\r\nconst intervalId = setInterval(() => {\r\n    console.log('Count:', count);\r\n    count++;\r\n    if (count === 5) {\r\n        clearInterval(intervalId); // Stops the interval after 5 iterations\r\n    }\r\n}, 1000);\r\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setimmediate",children:"setImmediate"}),"\n",(0,s.jsx)(t.p,{children:"setImmediate executes a specified function after the current event loop cycle, allowing any I/O operations in the queue to be processed before executing the callback.\r\nIt is only available in some environments (e.g., Node.js), and its behavior can vary across implementations."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"setImmediate(() => {\r\n    console.log('This message will appear after the current event loop cycle');\r\n});\r\n\r\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);