(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[8934],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,v=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(v,c(c({ref:t},s),{},{components:r})):n.createElement(v,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5455:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return l},default:function(){return s}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),c={id:"basics-javascript",title:"JavaScript Implementation"},o={unversionedId:"basic-concepts/basics-javascript",id:"version-0.8.0/basic-concepts/basics-javascript",isDocsHomePage:!1,title:"Drill4J JavaScript Implementation",description:"Principle",source:"@site/versioned_docs/version-0.8.0/basic-concepts/basics-javascript.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/basics-javascript",permalink:"/docs/0.8.0/basic-concepts/basics-javascript",version:"0.8.0",frontMatter:{id:"basics-javascript",title:"JavaScript Implementation"}},l=[{value:"Principle",id:"principle",children:[]},{value:"Caveats",id:"caveats",children:[]}],p={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"principle"},"Principle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Js parser",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Source code"),(0,i.kt)("li",{parentName:"ul"},"Bundled code"),(0,i.kt)("li",{parentName:"ul"},"Sourcemaps"))),(0,i.kt)("li",{parentName:"ul"},"Java Script Agent",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"manual tests"),(0,i.kt)("li",{parentName:"ul"},"automated tests"),(0,i.kt)("li",{parentName:"ul"},"javascript-agent component")))),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class - for JavaScript it refers to ",(0,i.kt)("em",{parentName:"li"},"the source file"),"."),(0,i.kt)("li",{parentName:"ul"},"Package - is just the path to the source file in project tree."),(0,i.kt)("li",{parentName:"ul"},"Methods - is either just a function (or actual method, it does not really matter for coverage)")))}s.isMDXComponent=!0}}]);