(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[2852],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5071:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,r.useState)(u),b=v[0],k=v[1],y=r.Children.toArray(e.children),x=[];if(null!=d){var E=g[d];null!=E&&E!==b&&p.some((function(e){return e.value===E}))&&k(E)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;k(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,l,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case c:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4966:function(e,t,n){"use strict";n.d(t,{r0:function(){return c},Ct:function(){return g},jL:function(){return h},Zb:function(){return d},u0:function(){return de},JO:function(){return u},Ee:function(){return y},kI:function(){return V},dl:function(){return L},HC:function(){return R},Wl:function(){return se},E1:function(){return ie},Nt:function(){return F},iA:function(){return Z},v3:function(){return z}});var r,a,o,l=n(7294),i="additionalInformation_3spC",c=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return l.createElement("p",{className:i+" "+r},t)},s=n(4996),u=function(e){var t=e.src,n=e.width,r=void 0===n?16:n,a=e.height,o=void 0===a?16:a,i=e.className;return l.createElement("span",{className:i,style:{backgroundImage:"url("+(0,s.Z)(t)+")",minWidth:r+"px",minHeight:o+"px",display:"inline-block"}})},p="card_3fnR",d=function(e){var t=e.children,n=e.iconSrc,r=e.href;return l.createElement("a",{href:(0,s.Z)(r),className:p,rel:"noreferrer"},l.createElement(u,{src:n,width:48,height:48}),l.createElement("span",null,t))},m=n(2122),f=n(9756),g=function(e){var t=e.color,n=void 0===t?"#687481":t,r=e.children,a=(0,f.Z)(e,["color","children"]);return l.createElement("span",(0,m.Z)({className:"inline-block px-2 text-14 leading-24 bg-monochrome-light-tint rounded-lg",style:{color:n}},a),r)},h=function(e){var t=e.backgroundSrc,n=e.children,r=(0,f.Z)(e,["backgroundSrc","children"]);return l.createElement("div",(0,m.Z)({className:"py-14 px-5 text-center bg-cover",style:{backgroundImage:"url("+(0,s.Z)(t)+")"}},r),n)},v=n(2879),b={color:"#a9a9a9",fontSize:"14px",marginBottom:"15px"},k={width:"400px",marginBottom:"10px"},y=function(e){var t=e.src,n=e.alt,r=(0,l.useState)(!1),a=r[0],o=r[1];return l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.createElement("img",{className:"cursor-pointer",src:(0,s.Z)(t),onClick:function(){return o(!0)},alt:n,style:k}),a&&l.createElement(v.Z,{mainSrc:(0,s.Z)(t),onCloseRequest:function(){return o(!1)},enableZoom:!1,imagePadding:48}),l.createElement("p",{style:b},n))},x=n(1839);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w,I=function(e){var t=e.title,n=e.titleId,i=N(e,["title","titleId"]);return l.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-labelledby":n},i),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("rect",{opacity:.8,width:24,height:24,rx:4,fill:"#687481"})),a||(a=l.createElement("path",{d:"M10.871 13.766l-.407.407-.982.982-1.184 1.184-1.027 1.027c-.166.165-.328.335-.498.497l-.007.007c-.167.167-.473.18-.637 0a.457.457 0 010-.636l.407-.407.982-.982 1.184-1.184 1.027-1.027c.166-.165.328-.335.498-.497l.007-.007c.167-.167.473-.18.637 0 .165.18.179.46 0 .636zm6.999-6.997l-.409.408-.976.976-1.187 1.188-1.022 1.021c-.167.168-.33.338-.5.5l-.008.008c-.167.167-.474.18-.639 0a.459.459 0 010-.639l.409-.408.976-.976 1.187-1.188 1.022-1.021c.167-.168.33-.338.5-.5l.008-.008c.167-.167.474-.18.639 0a.46.46 0 010 .639zm-7.636 4.102l-.407-.407-.982-.982L7.66 8.298 6.634 7.271c-.165-.166-.335-.328-.497-.498l-.007-.007c-.167-.167-.18-.473 0-.637a.457.457 0 01.636 0l.407.407.982.982L9.34 8.702l1.027 1.027c.165.166.335.328.497.498l.007.007c.167.167.18.473 0 .637a.457.457 0 01-.636 0zm6.997 7.001l-.408-.409-.976-.977-1.188-1.187-1.021-1.022c-.168-.168-.338-.33-.5-.5l-.008-.008c-.167-.168-.18-.475 0-.64a.459.459 0 01.639 0l.408.409.976.977 1.188 1.188 1.021 1.021c.168.168.338.33.5.501l.008.008c.167.167.18.474 0 .639a.462.462 0 01-.639 0z",fill:"#fff"})),o||(o=l.createElement("path",{d:"M6.953 13.477v4.046l-.476-.476h4.046c.25 0 .488.219.477.476a.484.484 0 01-.477.477H6.477A.483.483 0 016 17.523v-4.046c0-.25.22-.488.477-.477.259.011.476.21.476.477zM13.477 6h4.046c.258 0 .477.218.477.477v4.046c0 .25-.22.488-.477.477a.484.484 0 01-.476-.477V6.477l.476.476h-4.046c-.25 0-.488-.219-.477-.476A.485.485 0 0113.477 6zm-2.954.953H6.477l.476-.476v4.046c0 .25-.219.488-.476.477A.484.484 0 016 10.523V6.477C6 6.219 6.218 6 6.477 6h4.046c.25 0 .488.22.477.477a.485.485 0 01-.477.476zM18 13.477v4.046a.483.483 0 01-.477.477h-4.046c-.25 0-.488-.22-.477-.477a.484.484 0 01.477-.476h4.046l-.476.476v-4.046c0-.25.219-.488.476-.477.258.011.477.21.477.477z",fill:"#fff"})))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=function(e){var t=e.title,n=e.titleId,r=C(e,["title","titleId"]);return l.createElement("svg",O({width:36,height:36,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,w||(w=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.71 25.264a1.003 1.003 0 00-.001 1.415.997.997 0 001.412.002l7.073-7.073 7.07 7.07c.39.39 1.024.391 1.415.001a.997.997 0 00.002-1.412l-7.073-7.073 7.07-7.07c.39-.39.391-1.024.001-1.415a.997.997 0 00-1.412-.002l-7.073 7.073-7.07-7.07a1.003 1.003 0 00-1.414 0 .997.997 0 00-.002 1.412l7.073 7.073-7.07 7.07z"})))},P="table_EoDL",j="customScroll_2cyn",A="expandedTable_1nfl",Z=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.children,a=(0,l.useState)(!1),o=a[0],i=a[1],c=(0,l.useState)(!1),s=c[0],u=c[1],p=(0,l.useRef)(null);return(0,x.Z)(o),(0,l.useEffect)((function(){var e=p&&p.current;var t=new ResizeObserver((function(){e&&u(e.offsetHeight-e.clientHeight>0)}));return t.observe(e),function(){t.disconnect(e)}}),[p]),(0,l.useLayoutEffect)((function(){if(p.current&&null!=n&&n.length){var e=p.current.children[0];e.style.tableLayout="fixed";var t=document.createElement("colgroup");null==n||n.forEach((function(e){var n=document.createElement("col");return n.width=e,n.span=1,t.appendChild(n),n})),e.prepend(t)}}),[]),l.createElement("div",{className:P+" relative mb-4"},s&&l.createElement("button",{className:"absolute top-2 right-2 z-10","aria-label":"open expanded table button",type:"button",onClick:function(){return i(!0)}},l.createElement(I,null)),l.createElement("div",{ref:p,className:j},r),s&&l.createElement("div",{className:"fixed inset-0 z-50 transition-all duration-300 "+(o?"opacity-100":"opacity-0 invisible")},l.createElement("div",{className:"relative z-10 flex items-center justify-end h-12 pr-7 bg-monochrome-black bg-opacity-90"},l.createElement("button",{type:"button","aria-label":"close expanded table button",className:"flex items-center justify-center w-9 h-9 text-monochrome-medium-tint hover:text-monochrome-white",onClick:function(){return i(!1)}},l.createElement(S,{className:"fill-current cursor-pointer"}))),l.createElement("div",{className:"absolute inset-0 bg-monochrome-black opacity-60",onClick:function(){return i(!1)}}),l.createElement("div",{className:A+" "+j},r)))},D="listItem_qKEr",T="listItem_content_1vAz",R=function(e){var t=e.children,n=e.number;return l.createElement("div",{className:D},l.createElement("div",null,n),l.createElement("div",{className:T},t))},L=function(){return l.createElement("div",{className:"flex flex-col items-center"},l.createElement("h3",{className:"text-center"},"We are using a RealWorld app examples:"),l.createElement("div",{className:"flex gap-x-6 mb-12 text-16 leading-20"},l.createElement("div",{className:"flex justify-center items-center gap-x-3 leading-20"},l.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/spring-logo.svg"),alt:"spring-logo"}),l.createElement("span",{className:"flex flex-col"},"Backend:\xa0",l.createElement("a",{className:"leading-20",href:"https://github.com/gothinkster/spring-boot-realworld-example-app",target:"_blank",rel:"noreferrer noopener"},"Spring"))),l.createElement("div",{className:"flex justify-center items-center"},l.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/plus.svg"),alt:"plus"})),l.createElement("div",{className:"flex justify-center items-center gap-x-3"},l.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/angular-logo.svg"),alt:"angular-logo"}),l.createElement("span",{className:"flex flex-col leading-20"},"Frontend:\xa0",l.createElement("a",{className:"leading-20",href:"https://github.com/gothinkster/angular-realworld-example-app",target:"_blank",rel:"noreferrer noopener"},"Angular")))))},M=n(6010),_="wrapper_2S3f",z=function(e){var t=e.children;return l.createElement("div",{className:(0,M.Z)(_,"flex gap-x-3 py-4 px-4 mb-4","rounded-lg bg-orange-default bg-opacity-5","text-monochrome-default text-16 leading-24")},l.createElement(u,{src:"img/warning.svg",width:16,height:16,className:"mt-1 h-4 text-orange-default"}),l.createElement("div",null,t))},H="wrapper_1vbA",V=function(e){var t=e.children;return l.createElement("div",{className:(0,M.Z)(H,"flex gap-x-3 py-5 px-4 mb-4","rounded-lg bg-blue-default bg-opacity-5","text-monochrome-default text-16 leading-24")},l.createElement(u,{src:"img/info.svg",width:16,height:16,className:"mt-1 h-4 text-orange-default"}),l.createElement("div",null,t))},G=n(5035),U="tableOfContents_1zbr",J="table-of-contents__link";function B(e){var t=e.toc,n=e.isChild;return t.length?l.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:J,dangerouslySetInnerHTML:{__html:e.value},title:e.value}),l.createElement(B,{isChild:!0,toc:e.children}))}))):null}function F(e){var t=e.toc;return(0,G.Z)(J,"table-of-contents__link--active",100),l.createElement("div",{className:(0,M.Z)(U,"thin-scrollbar")},l.createElement(B,{toc:t}))}var q=n(3935),W=n(2263),X=n(5977),Y=n(6742),K=n(9105),Q=n(6397),$=n(7052),ee=n(6747),te=n(5613),ne=n(4973),re=null;function ae(e){var t=e.hit,n=e.children;return l.createElement(Y.Z,{to:t.url},n)}function oe(e){var t=e.state,n=e.onClose,r=(0,Q.Z)().generateSearchPageLink;return l.createElement(Y.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function le(e){var t,r,a=e.contextualSearch,o=e.closeDocsSidebar,i=(0,f.Z)(e,["contextualSearch","closeDocsSidebar"]),c=(0,W.default)().siteMetadata,u=(0,te.Z)(),p=null!=(t=null==(r=i.searchParameters)?void 0:r.facetFilters)?t:[],d=a?[].concat(u,p):p,g=Object.assign({},i.searchParameters,{facetFilters:d}),h=(0,s.C)().withBaseUrl,v=(0,X.k6)(),b=(0,l.useRef)(null),k=(0,l.useRef)(null),y=(0,l.useState)(!1),x=y[0],E=y[1],N=(0,l.useState)(null),w=N[0],I=N[1],O=(0,l.useCallback)((function(){return re?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(4628)]).then(n.bind(n,4628))]).then((function(e){var t=e[0].DocSearchModal;re=t}))}),[]),C=(0,l.useCallback)((function(){O().then((function(){b.current=document.createElement("div"),document.body.insertBefore(b.current,document.body.firstChild),E(!0)}))}),[O,E]),S=(0,l.useCallback)((function(){o(),E(!1),b.current.remove()}),[E]),P=(0,l.useCallback)((function(e){O().then((function(){E(!0),I(e.key)}))}),[O,E,I]),j=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;v.push(t)}}).current,A=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:h(""+t.pathname+t.hash)})}))})).current,Z=(0,l.useMemo)((function(){return function(e){return l.createElement(oe,(0,m.Z)({},e,{onClose:S}))}}),[S]),D=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",c.docusaurusVersion),e}),[c.docusaurusVersion]);(0,$.D)({isOpen:x,onOpen:C,onClose:S,onInput:P,searchButtonRef:k});var T=(0,ne.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(K.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(ee.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:C,ref:k,translations:{buttonText:T,buttonAriaLabel:T}}),x&&(0,q.createPortal)(l.createElement(re,(0,m.Z)({onClose:S,initialScrollY:window.scrollY,initialQuery:w,navigator:j,transformItems:A,hitComponent:ae,resultsFooterComponent:Z,transformSearchClient:D},i,{searchParameters:g})),b.current))}var ie=function(e){var t=e.closeDocsSidebar,n=(0,W.default)().siteConfig;return l.createElement(le,(0,m.Z)({},n.themeConfig.algolia,{closeDocsSidebar:t}))},ce=n(3424);ce.Z.initialize({startOnLoad:!0});var se=function(e){var t=e.chart;return(0,l.useEffect)((function(){ce.Z.contentLoaded()}),[]),l.createElement("div",{className:"mermaid"},t)},ue=n(7694),pe=n(4544),de=function(e){var t=e.language,n=e.children,r="string"==typeof n?n.trim():"";return l.createElement(pe.ZP,(0,m.Z)({},pe.lG,{theme:ue.Z,code:r,language:t}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:t,style:n},r.map((function(e,t){return l.createElement("div",a({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))}))}},6911:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=(n(4966),n(5071),n(8215),{id:"setup-java-autotest-agent",title:"Java Autotest Agent"}),i={unversionedId:"installation/setup-java-autotest-agent",id:"version-0.8.0/installation/setup-java-autotest-agent",isDocsHomePage:!1,title:"Setup Java Autotest Agent",description:"This page describes how to setup Autotest Agent to collect metrics for automated API and E2E tests written in Java / other JVM language.",source:"@site/versioned_docs/version-0.8.0/installation/java-autotests.mdx",sourceDirName:"installation",slug:"/installation/setup-java-autotest-agent",permalink:"/docs/0.8.0/installation/setup-java-autotest-agent",version:"0.8.0",frontMatter:{id:"setup-java-autotest-agent",title:"Java Autotest Agent"},sidebar:"version-0.8.0/docs",previous:{title:"Setup Browser Extension",permalink:"/docs/0.8.0/installation/setup-browser-extension"},next:{title:"Glossary",permalink:"/docs/0.8.0/basic-concepts/glossary"}},c=[{value:"Supported tehcnologies",id:"supported-tehcnologies",children:[{value:"Supported testing frameworks / runners",id:"supported-testing-frameworks--runners",children:[]}]},{value:"Example configuration",id:"example-configuration",children:[{value:"Maven config",id:"maven-config",children:[]},{value:"Gradle config",id:"gradle-config",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Issue - failed to locate/download Autotest Agent",id:"issue---failed-to-locatedownload-autotest-agent",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes how to setup Autotest Agent to collect metrics for automated API and E2E tests written in Java / other JVM language."),(0,o.kt)("h2",{id:"supported-tehcnologies"},"Supported tehcnologies"),(0,o.kt)("p",null,"While Drill4J provides plugins both for ",(0,o.kt)("a",{parentName:"p",href:"#maven-config"},"Maven")," and ",(0,o.kt)("a",{parentName:"p",href:"#gradle-config"},"Gradle"),", for Autotest Agent to work it has to also support both test runner and transport.\nWhy: refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic-concepts/data-collection"},"Data Collection")," section for the detailed explanation."),(0,o.kt)("h3",{id:"supported-testing-frameworks--runners"},"Supported testing frameworks / runners"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TestNG"),(0,o.kt)("li",{parentName:"ul"},"JUnit"),(0,o.kt)("li",{parentName:"ul"},"JMeter"),(0,o.kt)("li",{parentName:"ul"},"Spock"),(0,o.kt)("li",{parentName:"ul"},"Cucumber")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Support quality for future versions may vary. Good thing is it's either going to work or not.\nPlease make sure to ",(0,o.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Drill4J/drill4j/issues"},"report issue")," if you encounter problems with the listed framework/runner.")),(0,o.kt)("h2",{id:"example-configuration"},"Example configuration"),(0,o.kt)("p",null,"We provide plugins for both Maven and Gradle."),(0,o.kt)("p",null,"First step is to add ",(0,o.kt)("inlineCode",{parentName:"p"},"com.epam.drill.agent.runner")," plugin - it will download autotest agent and launch it accordingly with configuration (see bellow)"),(0,o.kt)("h3",{id:"maven-config"},"Maven config"),(0,o.kt)("p",null,"Add the following lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," configuration file in test project.\nRemember to enter the appropriate values for agentId (or groupId, if using groups), adminPort, adminHost."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>com.epam.drill.agent.runner</groupId>\n            <artifactId>maven</artifactId>\n            <version>0.3.4</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>autotest</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <drill>\n                    <version>0.22.4</version>\n                    <agentId>\x3c!--YOUR AGENT ID--\x3e</agentId>\n                    <adminHost>\x3c!--DRILL-ADMIN SERVICE HOST--\x3e</adminHost>\n                    <adminPort>\x3c!--DRILL-ADMIN SERVICE PORT--\x3e</adminPort>\n\n                    \x3c!-- <groupId>YOUR GROUP ID</groupId> --\x3e\n\n                    \x3c!-- optional logging --\x3e\n                    \x3c!-- <logLevel>TRACE</logLevel>\n                    <logFile>./drill4j-autotest-agent.log</logFile> --\x3e\n                </drill>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")),(0,o.kt)("h3",{id:"gradle-config"},"Gradle config"),(0,o.kt)("p",null,"Add the following lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," configuration file in test project.\nRemember to enter the appropriate values for agentId (or groupId, if using groups), adminPort, adminHost."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-language-groovy"},"plugins {\n    id 'java'\n    id 'com.epam.drill.agent.runner.autotest' version '0.3.4'\n}\n\ngroup 'com.epam'\nversion '1.0-SNAPSHOT'\n\nallprojects {\n\n    repositories {\n        mavenCentral()\n    }\n\n    dependencies {\n        apply plugin: 'java'\n        apply plugin: 'com.epam.drill.agent.runner.autotest'\n    }\n\n    drill {\n        version = \"0.22.4\"\n        agentId = /*YOUR AGENT ID*/\n        adminHost = /* DRILL-ADMIN SERVICE HOST */\n        adminPort = /* DRILL-ADMIN SERVICE PORT */\n        // groupId = /*YOUR GROUP ID*/\n\n        // optional logging\n        // logLevel= \"TRACE\"\n        // logFile = \"./drill4j-autotest-agent.log\"\n    }\n}\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"issue---failed-to-locatedownload-autotest-agent"},"Issue - failed to locate/download Autotest Agent"),(0,o.kt)("p",null,"Tests launch fails with error ",(0,o.kt)("inlineCode",{parentName:"p"},'"Failed to locate or download autotest agent zip file. Reason: connection refused"')),(0,o.kt)("p",null,"Most likely tests are launched in environment that is behind VPN / proxy, where ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/autotest-agent/releases"},"default repository")," is unavailable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution"),": either configure VPN/proxy to allow connection to GitHub ",(0,o.kt)("strong",{parentName:"p"},"or")," supply Autotest Agent directly:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"com.epam.drill.agent.runner")," is not lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.4"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download platform-appropriate release from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/autotest-agent/releases"},"https://github.com/Drill4J/autotest-agent/releases")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"agent-linuxX64-0.22.4.zip"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add either ",(0,o.kt)("inlineCode",{parentName:"p"},"directLocalPathToZip")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"directUrlToZip")," to the root level of the ",(0,o.kt)("inlineCode",{parentName:"p"},"drill")," section."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"When both are present ",(0,o.kt)("inlineCode",{parentName:"p"},"directLocalPathToZip")," takes precedence.")))),(0,o.kt)("p",null,"See changes to example configs below"),(0,o.kt)("h4",{id:"gradle"},"Gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-language-groovy"},"\nplugins {\n    id 'java'\n    /* Make sure com.epam.drill.agent.runner version is equal or greater than 0.3.4 */\n    id 'com.epam.drill.agent.runner.autotest' version '0.3.4'\n}\n\ngroup 'com.epam'\nversion '1.0-SNAPSHOT'\n\nallprojects {\n\n    repositories {\n        mavenCentral()\n    }\n\n    dependencies {\n        apply plugin: 'java'\n        apply plugin: 'com.epam.drill.agent.runner.autotest'\n    }\n\n    drill {\n        /* version = \"0.2.24\" */\n        /* comment out or remove \"version\" field - it wont have an effect when direct path/url is specified\n\n        /* Agent from local path - handy for a one-time launch */\n        /* both relative and absolute paths are allowed */\n        directLocalPathToZip = \"agent-mingwX64-0.22.4.zip\"\n\n        /* Direct url is a more approriate solution, if you cannot alter VPN/proxy configuration */\n        /* host file anywhere you like (e.g. local webserver, corporate artifactory) */\n        directUrlToZip=\"http://localhost:3000/agent-mingwX64-0.22.4.zip\"\n\n        /*... rest of the drill section config */\n        agentId = /*YOUR AGENT ID*/\n        adminHost = /* DRILL-ADMIN SERVICE HOST */\n        adminPort = /* DRILL-ADMIN SERVICE PORT */\n    }\n}\n")),(0,o.kt)("h4",{id:"maven"},"Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<build>\n    <plugins>\n        <plugin>\n            <groupId>com.epam.drill.agent.runner</groupId>\n            <artifactId>maven</artifactId>\n            \x3c!-- Make sure com.epam.drill.agent.runner version is equal or greater than 0.3.4 --\x3e\n            <version>0.3.4</version>\n            <configuration>\n                <drill>\n                    \x3c!--<version>0.22.4</version>--\x3e\n                    \x3c!-- comment out or remove "version" field - it wont have an effect when direct path/url is specified--\x3e\n\n                    \x3c!-- Agent from local path - handy for a one-time launch --\x3e\n                    \x3c!-- both relative and absolute paths are allowed --\x3e\n                    <directLocalPathToZip>agent-mingwX64-0.22.4.zip</directLocalPathToZip>\n\n                    \x3c!-- Direct url is a more approriate solution, if you cannot alter VPN/proxy configuration --\x3e\n                    \x3c!-- host file anywhere you like (e.g. local webserver, corporate artifactory) --\x3e\n                    <directUrlToZip>http://localhost:3000/agent-mingwX64-0.22.4.zip</directUrlToZip>\n\n                    \x3c!--... rest of the drill section config --\x3e\n                    <agentId>\x3c!--YOUR AGENT ID--\x3e</agentId>\n                    <adminHost>\x3c!--DRILL-ADMIN SERVICE HOST--\x3e</adminHost>\n                    <adminPort>\x3c!--DRILL-ADMIN SERVICE PORT--\x3e</adminPort>\n                </drill>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n')))}u.isMDXComponent=!0}}]);