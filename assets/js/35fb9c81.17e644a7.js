(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[8526],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,v=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"overview",title:"Agents Overview"},l={unversionedId:"agents/overview",id:"version-0.9.0/agents/overview",isDocsHomePage:!1,title:"Agents",description:"\u041a\u0440\u0430\u0442\u043a\u043e \u043e \u0442\u043e\u043c, \u0437\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d java agent",source:"@site/versioned_docs/version-0.9.0/agents/overview.mdx",sourceDirName:"agents",slug:"/agents/overview",permalink:"/docs/agents/overview",version:"0.9.0",frontMatter:{id:"overview",title:"Agents Overview"}},u=[{value:"Download",id:"download",children:[]},{value:"Running",id:"running",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041a\u0440\u0430\u0442\u043a\u043e \u043e \u0442\u043e\u043c, \u0437\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d java agent"),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0421 github releases"),(0,i.kt)("li",{parentName:"ol"},"\u0421 Gradle/Maven \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 downloadAppAgent")),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("p",null,"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0427\u0435\u0440\u0435\u0437 -agentpath"),(0,i.kt)("li",{parentName:"ol"},"\u0427\u0435\u0440\u0435\u0437 Gradle/Maven \u043f\u043b\u0430\u0433\u0438\u043d")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0427\u0435\u0440\u0435\u0437 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,i.kt)("li",{parentName:"ol"},"\u0427\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u043f\u0435\u0440\u0442\u0438 \u0444\u0430\u0439\u043b"),(0,i.kt)("li",{parentName:"ol"},"\u0427\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"\u041a\u0430\u043a\u0438\u0435 \u0435\u0441\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))}p.isMDXComponent=!0}}]);