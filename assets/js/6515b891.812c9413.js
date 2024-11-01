(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[4188],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8819:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return c}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),l={},i={unversionedId:"advanced/challenges",id:"version-0.8.0/advanced/challenges",isDocsHomePage:!1,title:"challenges",description:"Overall factors",source:"@site/versioned_docs/version-0.8.0/advanced/challenges.mdx",sourceDirName:"advanced",slug:"/advanced/challenges",permalink:"/docs/0.8.0/advanced/challenges",version:"0.8.0",frontMatter:{}},o=[{value:"Overall factors",id:"overall-factors",children:[{value:"Languages and Runtimes",id:"languages-and-runtimes",children:[]},{value:"Testing Frameworks / Test runners",id:"testing-frameworks--test-runners",children:[]},{value:"Transports",id:"transports",children:[]},{value:"Case 1: API tests over HTTP for a single backend service",id:"case-1-api-tests-over-http-for-a-single-backend-service",children:[]},{value:"Case 2: Manual tests performed in web UI",id:"case-2-manual-tests-performed-in-web-ui",children:[]},{value:"Case 3: Automated UI tests",id:"case-3-automated-ui-tests",children:[]},{value:"Challenges",id:"challenges",children:[]}]}],u={toc:o};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overall-factors"},"Overall factors"),(0,s.kt)("h3",{id:"languages-and-runtimes"},"Languages and Runtimes"),(0,s.kt)("p",null,"Support new JVM language"),(0,s.kt)("p",null,"Suppot new frontend framework in JavaScript/Typescript"),(0,s.kt)("h3",{id:"testing-frameworks--test-runners"},"Testing Frameworks / Test runners"),(0,s.kt)("p",null,"Automated API tests (e.g. written in Java with JUnit, TestNg; or in JavaScript with Mocha, Jest, Jasmine)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"hook into lifecycle events before/after, beforeEach/after each"),(0,s.kt)("li",{parentName:"ul"},"learn how to extract test context - name, parameters, status, duration")),(0,s.kt)("p",null,"Selenium tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Inject Test ID to requests headers coming from each browser tab")),(0,s.kt)("p",null,"Cypress tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"hook into lifecycle events"),(0,s.kt)("li",{parentName:"ul"},"learn to extract context"),(0,s.kt)("li",{parentName:"ul"},"inject Test ID into HTTP requests")),(0,s.kt)("p",null,"Manual tests in Chrome"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"allow user to specify test context"),(0,s.kt)("li",{parentName:"ul"},"inject headers to requests coming from browser tabs")),(0,s.kt)("p",null,"POSTMAN support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"hook into lifecycle events"),(0,s.kt)("li",{parentName:"ul"},"learn to extract context"),(0,s.kt)("li",{parentName:"ul"},"inject Test ID into HTTP requests")),(0,s.kt)("h3",{id:"transports"},"Transports"),(0,s.kt)("p",null,"HTTP clients support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"inject Test ID into requests"),(0,s.kt)("li",{parentName:"ul"},"headers"),(0,s.kt)("li",{parentName:"ul"},"query params")),(0,s.kt)("p",null,"Non-HTTP clients support (e.g. message bus and message queue systems like Kafka, RabbitMQ, etc)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"inject ?somehow? Test ID into messages")),(0,s.kt)("h3",{id:"case-1-api-tests-over-http-for-a-single-backend-service"},"Case 1: API tests over HTTP for a single backend service"),(0,s.kt)("h3",{id:"case-2-manual-tests-performed-in-web-ui"},"Case 2: Manual tests performed in web UI"),(0,s.kt)("h3",{id:"case-3-automated-ui-tests"},"Case 3: Automated UI tests"),(0,s.kt)("h3",{id:"challenges"},"Challenges"),(0,s.kt)("h4",{id:"test-context-propagation-in-asynchronous"},"Test context propagation in asynchronous"),(0,s.kt)("h4",{id:"test-context-propagation-in-microservices"},"Test context propagation in microservices"),(0,s.kt)("p",null,"the points of integration diagram\nwhy plugin architecture\nwhat is test2code plugin\ntest context propagation\nby autotest agent\nby agent\nwhat agent is doing"),(0,s.kt)("p",null,'Drill4J "Pyramid"'),(0,s.kt)("p",null,"agent\nautotest agent\nruntime"),(0,s.kt)("p",null,"setup drill4j\nrun through tests as usual\nfind gaps\nmake increment\nsee risks, get test recommendations\nexecute\nassess quality gate"))}c.isMDXComponent=!0}}]);