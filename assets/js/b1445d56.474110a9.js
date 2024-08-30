(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[2633],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},446:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"use-cases",title:"Use cases"},l={unversionedId:"overview/use-cases",id:"version-0.8.0/overview/use-cases",isDocsHomePage:!1,title:"Use cases",description:"We truly believe there is no project or specialist that could not benefit from Drill4J.",source:"@site/versioned_docs/version-0.8.0/overview/use-cases.mdx",sourceDirName:"overview",slug:"/overview/use-cases",permalink:"/docs/0.8.0/overview/use-cases",version:"0.8.0",frontMatter:{id:"use-cases",title:"Use cases"},sidebar:"version-0.8.0/docs",previous:{title:"Motivation",permalink:"/docs/0.8.0/overview/motivation"},next:{title:"Drill4J setup",permalink:"/docs/0.8.0/installation/setup"}},s=[{value:"Project stage",id:"project-stage",children:[]},{value:"Job function",id:"job-function",children:[]},{value:"Area of responsibility",id:"area-of-responsibility",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Testing types",id:"testing-types",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We truly believe there is no project or specialist that could not benefit from Drill4J."),(0,i.kt)("h2",{id:"project-stage"},"Project stage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fresh projects")," with little to no tests implemented yet - to grow a healthy and efficient test library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mature projects")," which are still in active development - to reduce regression testing time and find untested appliation areas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Legacy projects")," - with lots of code and lots of tests - to find unused code and remove redundant tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Projects in maintenance/KTLO")," - where only occasional patches/hotfixes are introduced - to spend less time figuring out what to test.")),(0,i.kt)("h2",{id:"job-function"},"Job function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Everyone")," - get a complete and continious metrics for each application version, for any test type, for all parts of the system. Track how changes to tests and code impact your coverage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test automation engineers")," - find and cover testing gaps with ease;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual QA engineers")," - reduce manual work, know exactly what to test;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developers")," - see which code was touched by the failed test without additional logging.")),(0,i.kt)("p",null,"As a bonus Drill4J provides a common ground for QA engineers and developers to go from, as each test now generates a comprehensive coverage report."),(0,i.kt)("h2",{id:"area-of-responsibility"},"Area of responsibility"),(0,i.kt)("p",null,"Drill4J is modular and can be installed for system as a whole, or only for the particular part. It comes in handy, if you work in multi-team or even multi-vendor projects."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Depending on your application architecture, Drill4J can be configured in any way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for monolithic service;"),(0,i.kt)("li",{parentName:"ul"},"for microservices;"),(0,i.kt)("li",{parentName:"ul"},"for WEB frontend application;"),(0,i.kt)("li",{parentName:"ul"},"for all of the above;")),(0,i.kt)("h2",{id:"testing-types"},"Testing types"),(0,i.kt)("p",null,"Drill4J allows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API tests (including implemented in Java/JVM languages or in Node with JavaScript/Typescript, or even POSTMAN);"),(0,i.kt)("li",{parentName:"ul"},"Automated UI tests (Selenium, Cypress);"),(0,i.kt)("li",{parentName:"ul"},"Unit tests;"),(0,i.kt)("li",{parentName:"ul"},"Manual tests (for Chrome/Chromium-based browsers)."),(0,i.kt)("li",{parentName:"ul"},"all of the above.")))}u.isMDXComponent=!0}}]);