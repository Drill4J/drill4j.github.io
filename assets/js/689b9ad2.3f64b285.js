(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[6202],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8522:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c={id:"overview-limitations",title:"Limitations"},a={unversionedId:"basic-concepts/overview-limitations",id:"version-0.8.0/basic-concepts/overview-limitations",isDocsHomePage:!1,title:"Limitations",description:'Only one "active" build',source:"@site/versioned_docs/version-0.8.0/basic-concepts/limitations.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/overview-limitations",permalink:"/docs/0.8.0/basic-concepts/overview-limitations",version:"0.8.0",frontMatter:{id:"overview-limitations",title:"Limitations"}},s=[{value:"Only one &quot;active&quot; build",id:"only-one-active-build",children:[]},{value:"Builds have to be &quot;consequent&quot; for risks detection to work properly",id:"builds-have-to-be-consequent-for-risks-detection-to-work-properly",children:[]},{value:"<strong>Before</strong> deploying new <em>Build</em> metrics collected for the previous one must be <strong>saved</strong>",id:"before-deploying-new-build-metrics-collected-for-the-previous-one-must-be-saved",children:[]}],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"only-one-active-build"},'Only one "active" build'),(0,i.kt)("h2",{id:"builds-have-to-be-consequent-for-risks-detection-to-work-properly"},'Builds have to be "consequent" for risks detection to work properly'),(0,i.kt)("h2",{id:"before-deploying-new-build-metrics-collected-for-the-previous-one-must-be-saved"},(0,i.kt)("strong",{parentName:"h2"},"Before")," deploying new ",(0,i.kt)("em",{parentName:"h2"},"Build")," metrics collected for the previous one must be ",(0,i.kt)("strong",{parentName:"h2"},"saved")),(0,i.kt)("p",null,'In order to save coverage metrics you have to finish active scope\nYou have to save metrics by either makind an API call to Drill4J admin or clicking "Finish scope"'))}u.isMDXComponent=!0}}]);