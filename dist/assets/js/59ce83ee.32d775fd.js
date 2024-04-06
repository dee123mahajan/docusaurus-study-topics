"use strict";(self.webpackChunkStudy_React_js=self.webpackChunkStudy_React_js||[]).push([[704],{9356:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(4848),s=t(8453);const r={},c="Class and Functional Components",a={id:"react/classFunccomponents",title:"Class and Functional Components",description:"In React, components are the building blocks of a user interface. There are two primary types of components in React: class components and functional components.",source:"@site/docs/react/classFunccomponents.md",sourceDirName:"react",slug:"/react/classFunccomponents",permalink:"/docs/react/classFunccomponents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"State and Props",permalink:"/docs/react/Stateprops"},next:{title:"Code Splitting",permalink:"/docs/react/codeSplitting"}},i={},l=[{value:"Class Components",id:"class-components",level:2},{value:"Functional Components",id:"functional-components",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"class-and-functional-components",children:"Class and Functional Components"}),"\n",(0,o.jsx)(e.p,{children:"In React, components are the building blocks of a user interface. There are two primary types of components in React: class components and functional components."}),"\n",(0,o.jsx)(e.h2,{id:"class-components",children:"Class Components"}),"\n",(0,o.jsx)(e.p,{children:"Class components are ES6 classes that extend from React.Component.\r\nThey have a state and lifecycle methods.\r\nState management and side effects are typically handled within these components.\r\nClass components are ideal for complex components that require state management, lifecycle methods, or component-wide logic."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"import React, { Component } from 'react';\r\n\r\nclass Counter extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      count: 0\r\n    };\r\n  }\r\n\r\n  incrementCount = () => {\r\n    this.setState({ count: this.state.count + 1 });\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <p>Count: {this.state.count}</p>\r\n        <button onClick={this.incrementCount}>Increment</button>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default Counter;\n"})}),"\n",(0,o.jsx)(e.h2,{id:"functional-components",children:"Functional Components"}),"\n",(0,o.jsx)(e.p,{children:"Functional components are simple JavaScript functions that accept props and return React elements.\r\nThey are stateless and don't have lifecycle methods.\r\nWith the introduction of React Hooks, functional components can manage state and side effects using hooks like useState, useEffect, etc.\r\nFunctional components are preferred for simpler components or when using React Hooks for state management and side effects."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"import React, { useState } from 'react';\r\n\r\nconst Counter = () => {\r\n  const [count, setCount] = useState(0);\r\n\r\n  const incrementCount = () => {\r\n    setCount(count + 1);\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <p>Count: {count}</p>\r\n      <button onClick={incrementCount}>Increment</button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Counter;\r\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"Both class and functional components have their use cases, but with the introduction of React Hooks, functional components have become more powerful and are often preferred due to their simplicity and readability. However, class components are still relevant, especially in legacy codebases or when you need to integrate with third-party libraries that expect class components."})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);