(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[7340],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5071:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),l=n(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,g=f.setTabGroupChoices,h=(0,r.useState)(u),b=h[0],y=h[1],E=r.Children.toArray(e.children),k=[];if(null!=p){var N=v[p];null!=N&&N!==b&&m.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,n=k.indexOf(t),r=m[n].value;y(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,l,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case c:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(E.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},E.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4966:function(e,t,n){"use strict";n.d(t,{r0:function(){return c},Ct:function(){return v},jL:function(){return g},Zb:function(){return p},u0:function(){return pe},JO:function(){return u},Ee:function(){return E},kI:function(){return B},dl:function(){return M},HC:function(){return z},Wl:function(){return se},E1:function(){return oe},Nt:function(){return q},iA:function(){return _},v3:function(){return J}});var r,a,l,i=n(7294),o="additionalInformation_3spC",c=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return i.createElement("p",{className:o+" "+r},t)},s=n(4996),u=function(e){var t=e.src,n=e.width,r=void 0===n?16:n,a=e.height,l=void 0===a?16:a,o=e.className;return i.createElement("span",{className:o,style:{backgroundImage:"url("+(0,s.Z)(t)+")",minWidth:r+"px",minHeight:l+"px",display:"inline-block"}})},m="card_3fnR",p=function(e){var t=e.children,n=e.iconSrc,r=e.href;return i.createElement("a",{href:(0,s.Z)(r),className:m,rel:"noreferrer"},i.createElement(u,{src:n,width:48,height:48}),i.createElement("span",null,t))},d=n(2122),f=n(9756),v=function(e){var t=e.color,n=void 0===t?"#687481":t,r=e.children,a=(0,f.Z)(e,["color","children"]);return i.createElement("span",(0,d.Z)({className:"inline-block px-2 text-14 leading-24 bg-monochrome-light-tint rounded-lg",style:{color:n}},a),r)},g=function(e){var t=e.backgroundSrc,n=e.children,r=(0,f.Z)(e,["backgroundSrc","children"]);return i.createElement("div",(0,d.Z)({className:"py-14 px-5 text-center bg-cover",style:{backgroundImage:"url("+(0,s.Z)(t)+")"}},r),n)},h=n(2879),b={color:"#a9a9a9",fontSize:"14px",marginBottom:"15px"},y={width:"400px",marginBottom:"10px"},E=function(e){var t=e.src,n=e.alt,r=(0,i.useState)(!1),a=r[0],l=r[1];return i.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.createElement("img",{className:"cursor-pointer",src:(0,s.Z)(t),onClick:function(){return l(!0)},alt:n,style:y}),a&&i.createElement(h.Z,{mainSrc:(0,s.Z)(t),onCloseRequest:function(){return l(!1)},enableZoom:!1,imagePadding:48}),i.createElement("p",{style:b},n))},k=n(1839);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w,O=function(e){var t=e.title,n=e.titleId,o=x(e,["title","titleId"]);return i.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("rect",{opacity:.8,width:24,height:24,rx:4,fill:"#687481"})),a||(a=i.createElement("path",{d:"M10.871 13.766l-.407.407-.982.982-1.184 1.184-1.027 1.027c-.166.165-.328.335-.498.497l-.007.007c-.167.167-.473.18-.637 0a.457.457 0 010-.636l.407-.407.982-.982 1.184-1.184 1.027-1.027c.166-.165.328-.335.498-.497l.007-.007c.167-.167.473-.18.637 0 .165.18.179.46 0 .636zm6.999-6.997l-.409.408-.976.976-1.187 1.188-1.022 1.021c-.167.168-.33.338-.5.5l-.008.008c-.167.167-.474.18-.639 0a.459.459 0 010-.639l.409-.408.976-.976 1.187-1.188 1.022-1.021c.167-.168.33-.338.5-.5l.008-.008c.167-.167.474-.18.639 0a.46.46 0 010 .639zm-7.636 4.102l-.407-.407-.982-.982L7.66 8.298 6.634 7.271c-.165-.166-.335-.328-.497-.498l-.007-.007c-.167-.167-.18-.473 0-.637a.457.457 0 01.636 0l.407.407.982.982L9.34 8.702l1.027 1.027c.165.166.335.328.497.498l.007.007c.167.167.18.473 0 .637a.457.457 0 01-.636 0zm6.997 7.001l-.408-.409-.976-.977-1.188-1.187-1.021-1.022c-.168-.168-.338-.33-.5-.5l-.008-.008c-.167-.168-.18-.475 0-.64a.459.459 0 01.639 0l.408.409.976.977 1.188 1.188 1.021 1.021c.168.168.338.33.5.501l.008.008c.167.167.18.474 0 .639a.462.462 0 01-.639 0z",fill:"#fff"})),l||(l=i.createElement("path",{d:"M6.953 13.477v4.046l-.476-.476h4.046c.25 0 .488.219.477.476a.484.484 0 01-.477.477H6.477A.483.483 0 016 17.523v-4.046c0-.25.22-.488.477-.477.259.011.476.21.476.477zM13.477 6h4.046c.258 0 .477.218.477.477v4.046c0 .25-.22.488-.477.477a.484.484 0 01-.476-.477V6.477l.476.476h-4.046c-.25 0-.488-.219-.477-.476A.485.485 0 0113.477 6zm-2.954.953H6.477l.476-.476v4.046c0 .25-.219.488-.476.477A.484.484 0 016 10.523V6.477C6 6.219 6.218 6 6.477 6h4.046c.25 0 .488.22.477.477a.485.485 0 01-.477.476zM18 13.477v4.046a.483.483 0 01-.477.477h-4.046c-.25 0-.488-.22-.477-.477a.484.484 0 01.477-.476h4.046l-.476.476v-4.046c0-.25.219-.488.476-.477.258.011.477.21.477.477z",fill:"#fff"})))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=function(e){var t=e.title,n=e.titleId,r=S(e,["title","titleId"]);return i.createElement("svg",C({width:36,height:36,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,w||(w=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.71 25.264a1.003 1.003 0 00-.001 1.415.997.997 0 001.412.002l7.073-7.073 7.07 7.07c.39.39 1.024.391 1.415.001a.997.997 0 00.002-1.412l-7.073-7.073 7.07-7.07c.39-.39.391-1.024.001-1.415a.997.997 0 00-1.412-.002l-7.073 7.073-7.07-7.07a1.003 1.003 0 00-1.414 0 .997.997 0 00-.002 1.412l7.073 7.073-7.07 7.07z"})))},j="table_EoDL",P="customScroll_2cyn",D="expandedTable_1nfl",_=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.children,a=(0,i.useState)(!1),l=a[0],o=a[1],c=(0,i.useState)(!1),s=c[0],u=c[1],m=(0,i.useRef)(null);return(0,k.Z)(l),(0,i.useEffect)((function(){var e=m&&m.current;var t=new ResizeObserver((function(){e&&u(e.offsetHeight-e.clientHeight>0)}));return t.observe(e),function(){t.disconnect(e)}}),[m]),(0,i.useLayoutEffect)((function(){if(m.current&&null!=n&&n.length){var e=m.current.children[0];e.style.tableLayout="fixed";var t=document.createElement("colgroup");null==n||n.forEach((function(e){var n=document.createElement("col");return n.width=e,n.span=1,t.appendChild(n),n})),e.prepend(t)}}),[]),i.createElement("div",{className:j+" relative mb-4"},s&&i.createElement("button",{className:"absolute top-2 right-2 z-10","aria-label":"open expanded table button",type:"button",onClick:function(){return o(!0)}},i.createElement(O,null)),i.createElement("div",{ref:m,className:P},r),s&&i.createElement("div",{className:"fixed inset-0 z-50 transition-all duration-300 "+(l?"opacity-100":"opacity-0 invisible")},i.createElement("div",{className:"relative z-10 flex items-center justify-end h-12 pr-7 bg-monochrome-black bg-opacity-90"},i.createElement("button",{type:"button","aria-label":"close expanded table button",className:"flex items-center justify-center w-9 h-9 text-monochrome-medium-tint hover:text-monochrome-white",onClick:function(){return o(!1)}},i.createElement(Z,{className:"fill-current cursor-pointer"}))),i.createElement("div",{className:"absolute inset-0 bg-monochrome-black opacity-60",onClick:function(){return o(!1)}}),i.createElement("div",{className:D+" "+P},r)))},I="listItem_qKEr",T="listItem_content_1vAz",z=function(e){var t=e.children,n=e.number;return i.createElement("div",{className:I},i.createElement("div",null,n),i.createElement("div",{className:T},t))},M=function(){return i.createElement("div",{className:"flex flex-col items-center"},i.createElement("h3",{className:"text-center"},"We are using a RealWorld app examples:"),i.createElement("div",{className:"flex gap-x-6 mb-12 text-16 leading-20"},i.createElement("div",{className:"flex justify-center items-center gap-x-3 leading-20"},i.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/spring-logo.svg"),alt:"spring-logo"}),i.createElement("span",{className:"flex flex-col"},"Backend:\xa0",i.createElement("a",{className:"leading-20",href:"https://github.com/gothinkster/spring-boot-realworld-example-app",target:"_blank",rel:"noreferrer noopener"},"Spring"))),i.createElement("div",{className:"flex justify-center items-center"},i.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/plus.svg"),alt:"plus"})),i.createElement("div",{className:"flex justify-center items-center gap-x-3"},i.createElement("img",{style:{marginBottom:0},src:(0,s.Z)("img/angular-logo.svg"),alt:"angular-logo"}),i.createElement("span",{className:"flex flex-col leading-20"},"Frontend:\xa0",i.createElement("a",{className:"leading-20",href:"https://github.com/gothinkster/angular-realworld-example-app",target:"_blank",rel:"noreferrer noopener"},"Angular")))))},A=n(6010),R="wrapper_2S3f",J=function(e){var t=e.children;return i.createElement("div",{className:(0,A.Z)(R,"flex gap-x-3 py-4 px-4 mb-4","rounded-lg bg-orange-default bg-opacity-5","text-monochrome-default text-16 leading-24")},i.createElement(u,{src:"img/warning.svg",width:16,height:16,className:"mt-1 h-4 text-orange-default"}),i.createElement("div",null,t))},L="wrapper_1vbA",B=function(e){var t=e.children;return i.createElement("div",{className:(0,A.Z)(L,"flex gap-x-3 py-5 px-4 mb-4","rounded-lg bg-blue-default bg-opacity-5","text-monochrome-default text-16 leading-24")},i.createElement(u,{src:"img/info.svg",width:16,height:16,className:"mt-1 h-4 text-orange-default"}),i.createElement("div",null,t))},H=n(5035),F="tableOfContents_1zbr",U="table-of-contents__link";function V(e){var t=e.toc,n=e.isChild;return t.length?i.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:U,dangerouslySetInnerHTML:{__html:e.value},title:e.value}),i.createElement(V,{isChild:!0,toc:e.children}))}))):null}function q(e){var t=e.toc;return(0,H.Z)(U,"table-of-contents__link--active",100),i.createElement("div",{className:(0,A.Z)(F,"thin-scrollbar")},i.createElement(V,{toc:t}))}var W=n(3935),G=n(2263),X=n(5977),Y=n(6742),K=n(9105),Q=n(6397),$=n(7052),ee=n(6747),te=n(5613),ne=n(4973),re=null;function ae(e){var t=e.hit,n=e.children;return i.createElement(Y.Z,{to:t.url},n)}function le(e){var t=e.state,n=e.onClose,r=(0,Q.Z)().generateSearchPageLink;return i.createElement(Y.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function ie(e){var t,r,a=e.contextualSearch,l=e.closeDocsSidebar,o=(0,f.Z)(e,["contextualSearch","closeDocsSidebar"]),c=(0,G.default)().siteMetadata,u=(0,te.Z)(),m=null!=(t=null==(r=o.searchParameters)?void 0:r.facetFilters)?t:[],p=a?[].concat(u,m):m,v=Object.assign({},o.searchParameters,{facetFilters:p}),g=(0,s.C)().withBaseUrl,h=(0,X.k6)(),b=(0,i.useRef)(null),y=(0,i.useRef)(null),E=(0,i.useState)(!1),k=E[0],N=E[1],x=(0,i.useState)(null),w=x[0],O=x[1],C=(0,i.useCallback)((function(){return re?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(4628)]).then(n.bind(n,4628))]).then((function(e){var t=e[0].DocSearchModal;re=t}))}),[]),S=(0,i.useCallback)((function(){C().then((function(){b.current=document.createElement("div"),document.body.insertBefore(b.current,document.body.firstChild),N(!0)}))}),[C,N]),Z=(0,i.useCallback)((function(){l(),N(!1),b.current.remove()}),[N]),j=(0,i.useCallback)((function(e){C().then((function(){N(!0),O(e.key)}))}),[C,N,O]),P=(0,i.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,D=(0,i.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:g(""+t.pathname+t.hash)})}))})).current,_=(0,i.useMemo)((function(){return function(e){return i.createElement(le,(0,d.Z)({},e,{onClose:Z}))}}),[Z]),I=(0,i.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",c.docusaurusVersion),e}),[c.docusaurusVersion]);(0,$.D)({isOpen:k,onOpen:S,onClose:Z,onInput:j,searchButtonRef:y});var T=(0,ne.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return i.createElement(i.Fragment,null,i.createElement(K.Z,null,i.createElement("link",{rel:"preconnect",href:"https://"+o.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),i.createElement(ee.a,{onTouchStart:C,onFocus:C,onMouseOver:C,onClick:S,ref:y,translations:{buttonText:T,buttonAriaLabel:T}}),k&&(0,W.createPortal)(i.createElement(re,(0,d.Z)({onClose:Z,initialScrollY:window.scrollY,initialQuery:w,navigator:P,transformItems:D,hitComponent:ae,resultsFooterComponent:_,transformSearchClient:I},o,{searchParameters:v})),b.current))}var oe=function(e){var t=e.closeDocsSidebar,n=(0,G.default)().siteConfig;return i.createElement(ie,(0,d.Z)({},n.themeConfig.algolia,{closeDocsSidebar:t}))},ce=n(3424);ce.Z.initialize({startOnLoad:!0});var se=function(e){var t=e.chart;return(0,i.useEffect)((function(){ce.Z.contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)},ue=n(7694),me=n(4544),pe=function(e){var t=e.language,n=e.children,r="string"==typeof n?n.trim():"";return i.createElement(me.ZP,(0,d.Z)({},me.lG,{theme:ue.Z,code:r,language:t}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,l=e.getTokenProps;return i.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.createElement("span",l({token:e,key:t}))})))})))}))}},7:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=(n(4966),n(5071),n(8215),{id:"setup",title:"Drill4J setup"}),o={unversionedId:"installation/setup",id:"version-0.8.0/installation/setup",isDocsHomePage:!1,title:"Drill4J setup",description:"This page describes general steps required to setup Drill4J for your project.",source:"@site/versioned_docs/version-0.8.0/installation/setup.mdx",sourceDirName:"installation",slug:"/installation/setup",permalink:"/docs/0.8.0/installation/setup",version:"0.8.0",frontMatter:{id:"setup",title:"Drill4J setup"},sidebar:"version-0.8.0/docs",previous:{title:"Use cases",permalink:"/docs/0.8.0/overview/use-cases"},next:{title:"Deploy Drill4J services",permalink:"/docs/0.8.0/installation/deploy-drill4j-services"}},c=[],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"steps-to-setup-drill4j"},"Steps to setup Drill4J"),(0,l.kt)("p",null,"This page describes general steps required to setup Drill4J for your project.\nUse it as a checklist. You can find more specific instructions in further sections.",(0,l.kt)("br",null)),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before diving into setup, read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/overview/what-is-drill4j"},"Overview")," section to get a better grasp on reasons to use Drill4J"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1")," Deploy Drill4J services")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2")," Integrate Drill4J Agents with Application Under Test components. Drill4J provides agents:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For apps in Java / JVM languages"),(0,l.kt)("li",{parentName:"ul"},"For web frontend in JavaScript/TypeScript"),(0,l.kt)("li",{parentName:"ul"},"For .NET apps")),(0,l.kt)("p",{parentName:"li"},"That should provide you with ",(0,l.kt)("a",{parentName:"p",href:"/docs/basic-concepts/glossary#coverage"},(0,l.kt)("em",{parentName:"a"},"Code coverage"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/basic-concepts/glossary#risks"},(0,l.kt)("em",{parentName:"a"},"Risk"))," metrics."),(0,l.kt)("p",{parentName:"li"},"Depending on your project needs you might be satifsfied with results of even basic integration"),(0,l.kt)("p",{parentName:"li"},"In order to take advantage of ",(0,l.kt)("a",{parentName:"p",href:"/docs/basic-concepts/glossary#recommended-tests"},(0,l.kt)("em",{parentName:"a"},"Recommended tests"))," you'll have have peform additional configuration ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3")," Configure tests integration. Drill4J provides components to supporting metrics collection from:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"API test"),(0,l.kt)("li",{parentName:"ul"},"Manual tests in web"),(0,l.kt)("li",{parentName:"ul"},"E2E UI tests"),(0,l.kt)("li",{parentName:"ul"},"Unit tests")))),(0,l.kt)("p",null,"See next sections for detailed instructions"))}u.isMDXComponent=!0}}]);