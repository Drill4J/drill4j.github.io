(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(100),c=a(98),i=a(97);t.a=function(){var e=Object(i.useThemeConfig)().navbar.items;return l.a.createElement("header",{className:"sticky top-0 z-50 bg-monochrome-white shadow"},l.a.createElement("nav",{className:"flex flex-col gap-y-4 items-center xs:flex-row justify-between py-5 container"},l.a.createElement(c.a,{to:Object(r.a)("/")},l.a.createElement("img",{src:Object(r.a)("img/drill4j-logo.svg"),alt:"drill-logo"})),l.a.createElement("section",{className:"md:flex items-center"},l.a.createElement("ul",{className:"md:flex gap-x-6 items-center"},e.map((function(t,a){var n=t.to,i=void 0===n?"":n,o=t.label,s=void 0===o?"":o;return l.a.createElement("li",null,l.a.createElement(c.a,{className:e.length!==a+1?"hidden md:block gray-link":"button-primary md:ml-5",to:Object(r.a)(i)},s))}))))))}},105:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(98),c=a(97),i=[{bg:"bg-git-hub",link:"https://github.com/Drill4J"},{bg:"bg-telegram",link:"https://t.me/drill4j"},{bg:"bg-twiter",link:"https://twitter.com/"},{bg:"bg-youtube",link:"https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"}];t.a=function(){var e=Object(c.useThemeConfig)().footer.links;return l.a.createElement("footer",{className:"bg-monochrome-light-tint"},l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"grid py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-footer",style:{gap:"106px"}},l.a.createElement("a",{href:"https://github.com/Drill4J",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:"img/drill4j-logo-grayscale.svg",alt:"drill4j github"})),e.map((function(e){var t=e.title,a=void 0===t?"":t,n=e.items;return l.a.createElement("div",{className:"space-y-3"},l.a.createElement("h5",null,a),l.a.createElement("ul",null,n.map((function(e){var t=e.label,a=e.href;return l.a.createElement("li",{className:"mb-2"},l.a.createElement(r.a,{className:"gray-link",to:a},t))}))))}))),l.a.createElement("section",{className:"flex flex-col gap-y-4 py-5 border-t border-monochrome-medium-tint sm:flex-row justify-between"},l.a.createElement("span",{className:"flex flex-col gap-y-2 items-center gap-x-2 text-16 leading-24 text-monochrome-default sm:flex-row"},"Sponsored by",l.a.createElement(r.a,{to:"https://www.epam-group.ru/"},l.a.createElement("img",{src:"img/epam-logo.svg",alt:"Epam"})),"Licensed under Apache v2.0"),l.a.createElement("ul",{className:"flex justify-center gap-x-4 items-center"},i.map((function(e){var t=e.bg,a=e.link;return l.a.createElement("li",{className:t+" w-6 h-6 cursor-pointer"},l.a.createElement(r.a,{to:a}))}))))))}},116:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(103);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(101),c=a(21),i=a(24),o=a(103),s=a(3),m=a(7),u=a(99),d=a(97),b=a(106);var f=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},h="desktop",g="mobile";var p=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?h:g}var a=Object(n.useState)(t),l=a[0],r=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){r(t())}}),[]),l},v=a(10),E=function(){return{scrollX:v.a.canUseDOM?window.pageXOffset:0,scrollY:v.a.canUseDOM?window.pageYOffset:0}},j=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(E()),l=a[0],r=a[1],c=function(){var t=E();r(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",c,e),function(){return window.removeEventListener("scroll",c,e)}}),t),l},O=a(98),k=a(111),w=a(120),N=a(64),y=a.n(N),C=function(e){var t=Object(c.default)().isClient,a=Object(w.a)().isDarkTheme,n=e.sources,r=e.className,i=e.alt,o=void 0===i?"":i,d=Object(m.a)(e,["sources","className","alt"]),b=t?a?["dark"]:["light"]:["light","dark"];return l.a.createElement(l.a.Fragment,null,b.map((function(e){return l.a.createElement("img",Object(s.a)({key:e,src:n[e],alt:o,className:Object(u.a)(y.a.themedImage,y.a["themedImage--"+e],r)},d))})))},x=a(100),_=function(e){var t=Object(c.default)().isClient,a=Object(d.useThemeConfig)().navbar,n=a.title,r=a.logo,i=void 0===r?{src:""}:r,o=e.imageClassName,u=e.titleClassName,b=Object(m.a)(e,["imageClassName","titleClassName"]),f=Object(x.a)(i.href||"/"),h=i.target?{target:i.target}:Object(k.a)(f)?{}:{rel:"noopener noreferrer",target:"_blank"},g={light:Object(x.a)(i.src),dark:Object(x.a)(i.srcDark||i.src)};return l.a.createElement(O.a,Object(s.a)({to:f},b,h),i.src&&l.a.createElement(C,{key:t,className:o,sources:g,alt:i.alt||n||"Logo"}),null!=n&&l.a.createElement("strong",{className:u},n))},M=function(e){return l.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},S=function(e){var t=e.width,a=void 0===t?30:t,n=e.height,r=void 0===n?30:n,c=e.className,i=Object(m.a)(e,["width","height","className"]);return l.a.createElement("svg",Object(s.a)({"aria-label":"Menu",className:c,width:a,height:r,viewBox:"0 0 30 30",role:"img",focusable:"false"},i),l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},I=a(65),L=a.n(I);var P=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function T(e){var t,a,r,c=e.item,i=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(m.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,h=c.label,g=P(c,d),p=(a=g,r=Object(n.useRef)(a),Object(n.useEffect)((function(){r.current=a}),[a]),r.current),v=Object(n.useState)((function(){return!!o&&(!g&&c.collapsed)})),E=v[0],j=v[1],O=Object(n.useRef)(null),k=Object(n.useState)(void 0),w=k[0],N=k[1],y=function(e){var t;void 0===e&&(e=!0),N(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){g&&!p&&E&&j(!1)}),[g,p,E]);var C=Object(n.useCallback)((function(e){e.preventDefault(),w||y(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[w]);return 0===f.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":E}),key:h},l.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&g},t[L.a.menuLinkText]=!o,t)),onClick:o?C:void 0,href:o?"#!":void 0},b),h),l.a.createElement("ul",{className:"menu__list",ref:O,style:{height:w},onTransitionEnd:function(){E||y(!1)}},f.map((function(e){return l.a.createElement(H,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:d})}))))}function D(e){var t=e.item,a=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(m.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,i=t.label,o=P(t,n);return l.a.createElement("li",{className:"menu__list-item",key:i},l.a.createElement(O.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":o}),to:c},Object(k.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},r),i))}function H(e){switch(e.item.type){case"category":return l.a.createElement(T,e);case"link":default:return l.a.createElement(D,e)}}var W=function(e){var t,a,r=e.path,c=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,m=e.isHidden,g=Object(n.useState)(!1),v=g[0],E=g[1],O=Object(d.useThemeConfig)(),k=O.navbar.hideOnScroll,w=O.hideableSidebar,N=Object(b.a)().isAnnouncementBarClosed,y=j().scrollY;f(v);var C=p();return Object(n.useEffect)((function(){C===h&&E(!1)}),[C]),l.a.createElement("div",{className:Object(u.a)(L.a.sidebar,(t={},t[L.a.sidebarWithHideableNavbar]=k,t[L.a.sidebarHidden]=m,t))},k&&l.a.createElement(_,{tabIndex:-1,className:L.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",L.a.menu,(a={"menu--show":v},a[L.a.menuWithAnnouncementBar]=!N&&0===y,a))},l.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!v)}},v?l.a.createElement("span",{className:Object(u.a)(L.a.sidebarMenuIcon,L.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(S,{className:L.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(H,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:o,activePath:r})})))),w&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",L.a.collapseSidebarButton),onClick:s},l.a.createElement(M,{className:L.a.collapseSidebarButtonIcon})))},U=a(112),z=a(116),B=a(113),J=a(70),R=a.n(J);function A(e){var t,a,i,s,m=e.currentDocRoute,b=e.versionMetadata,f=e.children,h=Object(c.default)(),g=h.siteConfig,p=h.isClient,v=b.pluginId,E=b.permalinkToSidebar,j=b.docsSidebars,O=b.version,k=E[m.path],w=j[k],N=Object(n.useState)(!1),y=N[0],C=N[1],x=Object(n.useState)(!1),_=x[0],S=x[1],I=Object(n.useCallback)((function(){_&&S(!1),C(!y)}),[_]);return l.a.createElement(o.a,{key:p,searchMetadatas:{version:O,tag:Object(d.docVersionSearchTag)(v,O)}},l.a.createElement("div",{className:R.a.docPage},w&&l.a.createElement("div",{className:Object(u.a)(R.a.docSidebarContainer,(t={},t[R.a.docSidebarContainerHidden]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(R.a.docSidebarContainer)&&y&&S(!0)},role:"complementary"},l.a.createElement(W,{key:k,sidebar:w,path:m.path,sidebarCollapsible:null===(a=null===(i=g.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===a||a,onCollapse:I,isHidden:_}),_&&l.a.createElement("div",{className:R.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:I,onClick:I},l.a.createElement(M,null))),l.a.createElement("main",{className:R.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",R.a.docItemWrapper,(s={},s[R.a.docItemWrapperEnhanced]=y,s))},l.a.createElement(r.a,{components:U.a},f)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,r=t.find((function(e){return Object(B.matchPath)(n.pathname,e)}));return r?l.a.createElement(A,{currentDocRoute:r,versionMetadata:a},Object(i.a)(t)):l.a.createElement(z.default,e)}}}]);