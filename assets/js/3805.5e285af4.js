(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[3805],{3805:function(e,t,n){"use strict";n.d(t,{Z:function(){return xe}});var r=n(7294),a=n(6010),l=n(4973),o=n(5977),c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(6700),m=n(944),d="announcementBar_3WsW",f="announcementBarClose_38nx",v="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";var g=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,o=t.closeAnnouncementBar,c=(0,u.LU)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,g=c.textColor,b=c.isCloseable;return!i||b&&n?null:r.createElement("div",{className:d,style:{backgroundColor:s,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(v,(e={},e[h]=b,e)),dangerouslySetInnerHTML:{__html:i}}),b?r.createElement("button",{type:"button",className:f,onClick:o,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(2122),p=n(9756),E=n(3935),k=n(2263),C=n(4996),Z=n(6742),w=n(9105),y=n(6397),N=n(7052),_=n(6747),I=n(5613),A=null;function L(e){var t=e.hit,n=e.children;return r.createElement(Z.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,a=(0,y.Z)().generateSearchPageLink;return r.createElement(Z.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function B(e){var t,a,c=e.contextualSearch,i=(0,p.Z)(e,["contextualSearch"]),s=(0,k.default)().siteMetadata,u=(0,I.Z)(),m=null!=(t=null==(a=i.searchParameters)?void 0:a.facetFilters)?t:[],d=c?[].concat(u,m):m,f=Object.assign({},i.searchParameters,{facetFilters:d}),v=(0,C.C)().withBaseUrl,h=(0,o.k6)(),g=(0,r.useRef)(null),Z=(0,r.useRef)(null),y=(0,r.useState)(!1),B=y[0],D=y[1],T=(0,r.useState)(null),x=T[0],M=T[1],U=(0,r.useCallback)((function(){return A?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,5256))]).then((function(e){var t=e[0].DocSearchModal;A=t}))}),[]),P=(0,r.useCallback)((function(){U().then((function(){g.current=document.createElement("div"),document.body.insertBefore(g.current,document.body.firstChild),D(!0)}))}),[U,D]),R=(0,r.useCallback)((function(){D(!1),g.current.remove()}),[D]),V=(0,r.useCallback)((function(e){U().then((function(){D(!0),M(e.key)}))}),[U,D,M]),O=(0,r.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,H=(0,r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:v(""+t.pathname+t.hash)})}))})).current,W=(0,r.useMemo)((function(){return function(e){return r.createElement(S,(0,b.Z)({},e,{onClose:R}))}}),[R]),j=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);(0,N.D)({isOpen:B,onOpen:P,onClose:R,onInput:V,searchButtonRef:Z});var z=(0,l.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(w.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement(_.a,{onTouchStart:U,onFocus:U,onMouseOver:U,onClick:P,ref:Z,translations:{buttonText:z,buttonAriaLabel:z}}),B&&(0,E.createPortal)(r.createElement(A,(0,b.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:x,navigator:O,transformItems:H,hitComponent:L,resultsFooterComponent:W,transformSearchClient:j},i,{searchParameters:f})),g.current))}var D=function(){var e=(0,k.default)().siteConfig;return r.createElement(B,e.themeConfig.algolia)},T={toggle:"toggle_71bT"},x=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(T.toggle,T.dark),style:n},t)},M=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(T.toggle,T.light),style:n},t)},U=(0,r.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,r.useState)(l),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function P(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,k.default)().isClient;return r.createElement(U,(0,b.Z)({disabled:!c,icons:{checked:r.createElement(x,{icon:n,style:a}),unchecked:r.createElement(M,{icon:l,style:o})}},e))}var R=n(5350),V=n(412),O=function(){return{scrollX:V.Z.canUseDOM?window.pageXOffset:0,scrollY:V.Z.canUseDOM?window.pageYOffset:0}},H=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(O()),a=function(){var t=O();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)},W=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return H((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)l(!0);else{if(c.current)return c.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?l(!1):r+i<o&&l(!0)}}),[s,c]),(0,r.useEffect)((function(){e&&l(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},j=n(1839),z="desktop",F="mobile";var G=function(){var e=V.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?z:F}var n=(0,r.useState)(t),a=n[0],l=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),a},Y=n(5525),q=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,l=void 0===a?20:a,o=(0,p.Z)(e,["width","height"]);return r.createElement("svg",(0,b.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:l},o),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function Q(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,l=(0,p.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=(0,k.default)().i18n,c=o.currentLocale,i=o.locales,s=o.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(c);return r.createElement(Y.Z,(0,b.Z)({},l,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(q,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}var J="searchWrapper_3rmH";function K(e){return e.mobile?null:r.createElement("div",{className:J},r.createElement(D,null))}var X={default:function(){return Y.Z},localeDropdown:function(){return Q},search:function(){return K},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function $(e){var t=e.type,n=(0,p.Z)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=X[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var ee={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},te=function(e){var t=(0,k.default)().isClient,n=(0,R.Z)().isDarkTheme,l=e.sources,o=e.className,c=e.alt,i=void 0===c?"":c,s=(0,p.Z)(e,["sources","className","alt"]),u=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,u.map((function(e){return r.createElement("img",(0,b.Z)({key:e,src:l[e],alt:i,className:(0,a.Z)(ee.themedImage,ee["themedImage--"+e],o)},s))})))},ne=function(e){var t=(0,k.default)().isClient,n=(0,u.LU)().navbar,a=n.title,l=n.logo,o=void 0===l?{src:""}:l,c=e.imageClassName,i=e.titleClassName,s=(0,p.Z)(e,["imageClassName","titleClassName"]),m=(0,C.Z)(o.href||"/"),d={light:(0,C.Z)(o.src),dark:(0,C.Z)(o.srcDark||o.src)};return r.createElement(Z.Z,(0,b.Z)({to:m},s,o.target&&{target:o.target}),o.src&&r.createElement(te,{key:t,className:c,sources:d,alt:o.alt||a||"Logo"}),null!=a&&r.createElement("strong",{className:i},a))},re=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,l=void 0===a?30:a,o=e.className,c=(0,p.Z)(e,["width","height","className"]);return r.createElement("svg",(0,b.Z)({"aria-label":"Menu",className:o,width:n,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},c),r.createElement("title",null,"Menu"),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},ae="displayOnlyInLargeViewport_GrZ2",le="navbarHideable_2qcr",oe="navbarHidden_3yey",ce="right";var ie=function(){var e,t=(0,u.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,c=n.style,i=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,R.Z)(),v=f.isDarkTheme,h=f.setLightTheme,g=f.setDarkTheme,p=W(o),E=p.navbarRef,k=p.isNavbarVisible;(0,j.Z)(m);var C=(0,r.useCallback)((function(){d(!0)}),[d]),Z=(0,r.useCallback)((function(){d(!1)}),[d]),w=(0,r.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),y=G();(0,r.useEffect)((function(){y===z&&d(!1)}),[y]);var N=l.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:ce)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:ce)}))}}(l),I=_.leftItems,A=_.rightItems;return r.createElement("nav",{ref:E,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===c,"navbar--primary":"primary"===c,"navbar-sidebar--show":m},e[le]=o,e[oe]=o&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:C,onKeyDown:C},r.createElement(re,null)),r.createElement(ne,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),I.map((function(e,t){return r.createElement($,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return r.createElement($,(0,b.Z)({},e,{key:t}))})),!i&&r.createElement(P,{className:ae,checked:v,onChange:w}),!N&&r.createElement(D,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(ne,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:Z}),!i&&m&&r.createElement(P,{checked:v,onChange:w})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement($,(0,b.Z)({mobile:!0},e,{onClick:Z,key:t}))})))))))},se=n(2220),ue=(0,u.WA)("theme"),me="light",de="dark",fe=function(e){return e===de?de:me},ve=function(e){(0,u.WA)("theme").set(fe(e))},he=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return V.Z.canUseDOM?fe(document.documentElement.getAttribute("data-theme")):fe(e)}(t)),o=l[0],c=l[1],i=(0,r.useCallback)((function(){c(me),ve(me)}),[]),s=(0,r.useCallback)((function(){c(de),ve(de)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",fe(o))}),[o]),(0,r.useEffect)((function(){if(!n)try{var e=ue.get();null!==e&&c(fe(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?de:me)}))}),[]),{isDarkTheme:o===de,setLightTheme:i,setDarkTheme:s}},ge=n(2924);var be=function(e){var t=he(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(ge.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)};function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ee(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var ke="docusaurus.tab.",Ce=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=Ee((0,u._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(ke))t[a.substring(ke.length)]=(0,u.WA)(a).get()}n(t)}catch(l){console.error(l)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},Ze=(0,u.WA)("docusaurus.announcement.dismiss"),we=(0,u.WA)("docusaurus.announcement.id"),ye=function(){var e=(0,u.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],l=(0,r.useCallback)((function(){Ze.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=we.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;we.set(t),r&&Ze.set("false"),(r||"false"===Ze.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:l}},Ne=n(9443);var _e=function(e){var t=Ce(),n=t.tabGroupChoices,a=t.setTabGroupChoices,l=ye(),o=l.isAnnouncementBarClosed,c=l.closeAnnouncementBar;return r.createElement(Ne.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:c}},e.children)};function Ie(e){var t=e.children;return r.createElement(be,null,r.createElement(_e,null,r.createElement(u.L5,null,t)))}function Ae(e){var t=e.locale,n=e.version,a=e.tag,l=t;return r.createElement(w.Z,null,l&&r.createElement("meta",{name:"docsearch:language",content:l}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function Le(e){var t=e.title,n=e.description,a=e.keywords,l=e.image,o=(0,u.LU)().image,c=(0,u.pe)(t),i=(0,C.Z)(l||o,{absolute:!0});return r.createElement(w.Z,null,t&&r.createElement("title",null,c),t&&r.createElement("meta",{property:"og:title",content:c}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),i&&r.createElement("meta",{property:"og:image",content:i}),i&&r.createElement("meta",{name:"twitter:image",content:i}),i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}function Se(){var e=(0,k.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,u.l5)();return r.createElement(w.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Be(e){var t=e.permalink,n=(0,k.default)().siteConfig.url,a=function(){var e=(0,k.default)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,C.Z)(t)}(),l=t?""+n+t:a;return r.createElement(w.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function De(e){var t=(0,k.default)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig.metadatas,o=t.i18n,c=o.currentLocale,i=o.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,C.Z)(a),g=(0,u.pe)(s),p=c,E=i[c].direction;return r.createElement(r.Fragment,null,r.createElement(w.Z,null,r.createElement("html",{lang:p,dir:E}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,g),r.createElement("meta",{property:"og:title",content:g})),r.createElement(Le,{description:m,keywords:f,image:d}),r.createElement(Be,null),r.createElement(Se,null),r.createElement(Ae,(0,b.Z)({tag:u.HX,locale:c},v)),r.createElement(w.Z,null,l.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var Te=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var xe=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return Te(),r.createElement(Ie,null,r.createElement(De,e),r.createElement(s,null),r.createElement(g,null),r.createElement(ie,null),r.createElement("div",{className:(0,a.Z)(u.kM.wrapper.main,l,o)},t),!n&&r.createElement(se.Z,null))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(6700);function m(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,v=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=(0,i.Z)(o),g=(0,i.Z)(t),b=(0,i.Z)(s,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,r.Z)({},s?{href:f?b:s}:Object.assign({isNavLink:!0,activeClassName:d,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),v),u)}function d(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,["items","position","className"]),u=(0,l.useRef)(null),d=(0,l.useRef)(null),f=(0,l.useState)(!1),v=f[0],h=f[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var g=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":v})},l.createElement(m,(0,r.Z)({className:g(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,a.Z)(e,["className"]);return l.createElement("li",{key:t},l.createElement(m,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:g(o,!0)},c)))})))):l.createElement(m,(0,r.Z)({className:g(i)},s))}function f(e){var t,n,c,i=e.items,d=e.className,f=(e.position,(0,a.Z)(e,["items","className","position"])),v=(0,l.useRef)(null),h=(0,s.TH)().pathname,g=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=g[0],p=g[1],E=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(m,(0,r.Z)({className:E(d)},f)));var k=null!=(t=v.current)&&t.scrollHeight?(null==(n=v.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(m,(0,r.Z)({role:"button",className:E(d,!0)},f,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(c=f.children)?c:f.label),l.createElement("ul",{className:"menu__list",ref:v,style:{height:b?void 0:k}},i.map((function(e,t){var n=e.className,o=(0,a.Z)(e,["className"]);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(m,(0,r.Z)({activeClassName:"menu__link--active",className:E(n)},o,{onClick:f.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),o=n?f:d;return l.createElement(o,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(6700);function u(e){var t,n,u=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,c.useActiveDocContext)(f),g=h.activeVersion,b=h.activeDoc,p=(0,s.J)(f).preferredVersion,E=(0,c.useLatestVersion)(f),k=null!=(t=null!=g?g:p)?t:E,C=k.docs.find((function(e){return e.id===u}));if(!C){var Z=k.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+u+" in version "+k.name+".\nAvailable docIds=\n- "+Z)}return l.createElement(o.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(n={},n[m]=b&&b.sidebar===C.sidebar,n)),label:null!=d?d:C.id,to:C.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n,u=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),g=(0,c.useActiveDocContext)(m),b=(0,c.useVersions)(m),p=(0,c.useLatestVersion)(m),E=(0,i.J)(m),k=E.preferredVersion,C=E.savePreferredVersionName;var Z=null!=(t=null!=(n=g.activeVersion)?n:k)?t:p,w=u?"Versions":Z.label,y=u?void 0:s(Z).path;return l.createElement(o.Z,(0,r.Z)({},h,{mobile:u,label:w,to:y,items:function(){var e=b.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){C(e.name)}}})),t=[].concat(f,e,v);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.useActiveVersion)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.useLatestVersion)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,r.Z)({},m,{label:g,to:b}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);