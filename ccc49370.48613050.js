(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(100),c=t(98),m=t(97);a.a=function(){var e=Object(m.useThemeConfig)().navbar.items;return r.a.createElement("header",{className:"sticky top-0 z-50 bg-monochrome-white shadow"},r.a.createElement("nav",{className:"flex flex-col gap-y-4 items-center xs:flex-row justify-between py-5 container"},r.a.createElement(c.a,{to:Object(l.a)("/")},r.a.createElement("img",{src:Object(l.a)("img/drill4j-logo.svg"),alt:"drill-logo"})),r.a.createElement("section",{className:"md:flex items-center"},r.a.createElement("ul",{className:"md:flex gap-x-6 items-center"},e.map((function(a,t){var n=a.to,m=void 0===n?"":n,i=a.label,s=void 0===i?"":i;return r.a.createElement("li",null,r.a.createElement(c.a,{className:e.length!==t+1?"hidden md:block gray-link":"button-primary md:ml-5",to:Object(l.a)(m)},s))}))))))}},105:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(98),c=t(97),m=[{bg:"bg-git-hub",link:"https://github.com/Drill4J"},{bg:"bg-telegram",link:"https://t.me/drill4j"},{bg:"bg-twiter",link:"https://twitter.com/"},{bg:"bg-youtube",link:"https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"}];a.a=function(){var e=Object(c.useThemeConfig)().footer.links;return r.a.createElement("footer",{className:"bg-monochrome-light-tint"},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"grid py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-footer",style:{gap:"106px"}},r.a.createElement("a",{href:"https://github.com/Drill4J",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:"img/drill4j-logo-grayscale.svg",alt:"drill4j github"})),e.map((function(e){var a=e.title,t=void 0===a?"":a,n=e.items;return r.a.createElement("div",{className:"space-y-3"},r.a.createElement("h5",null,t),r.a.createElement("ul",null,n.map((function(e){var a=e.label,t=e.href;return r.a.createElement("li",{className:"mb-2"},r.a.createElement(l.a,{className:"gray-link",to:t},a))}))))}))),r.a.createElement("section",{className:"flex flex-col gap-y-4 py-5 border-t border-monochrome-medium-tint sm:flex-row justify-between"},r.a.createElement("span",{className:"flex flex-col gap-y-2 items-center gap-x-2 text-16 leading-24 text-monochrome-default sm:flex-row"},"Sponsored by",r.a.createElement(l.a,{to:"https://www.epam-group.ru/"},r.a.createElement("img",{src:"img/epam-logo.svg",alt:"Epam"})),"Licensed under Apache v2.0"),r.a.createElement("ul",{className:"flex justify-center gap-x-4 items-center"},m.map((function(e){var a=e.bg,t=e.link;return r.a.createElement("li",{className:a+" w-6 h-6 cursor-pointer"},r.a.createElement(l.a,{to:t}))}))))))}},108:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(99),c=t(98),m=t(58),i=t.n(m);function s(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},110:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(99),c=t(101),m=t(22),i=t(98),s=t(112),o=t(100),u=t(59),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,v,E=e.children,b=e.frontMatter,p=e.metadata,f=e.truncated,h=e.isBlogPostPage,N=void 0!==h&&h,_=p.date,k=p.permalink,w=p.tags,y=p.readingTime,x=b.author,j=b.title,O=b.image,I=b.keywords,C=b.author_url||b.authorURL,L=b.author_title||b.authorTitle,M=b.author_image_url||b.authorImageURL,T=Object(o.a)(O,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,I&&I.length&&r.a.createElement("meta",{name:"keywords",content:I.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:T}),O&&r.a.createElement("meta",{name:"twitter:image",content:T}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=_.substring(0,10).split("-"),n=t[0],u=d[parseInt(t[1],10)-1],v=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?j:r.a.createElement(i.a,{to:k},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:_,className:g.a.blogPostDate},u," ",v,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},M&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:M,alt:x})),r.a.createElement("div",{className:"avatar__intro"},x&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},x)),r.a.createElement("small",{className:"avatar__subtitle"},L)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:s.a},E)),(w.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:p.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,"Read More"))))))}},114:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),m=t(99),i=t(61),s=t.n(i);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(m.a)(s.a.iconEdit,a)},t),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},115:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(99);var c=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,m=!1,i=document.getElementsByClassName(e);r<i.length&&!m;){var s=i[r],o=s.href,u=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(a),s.classList.add(a),c(s),m=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},m=t(60),i=t.n(m),s="table-of-contents__link";function o(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(o,{toc:a}))}},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(103),c=t(110),m=t(98);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(108),o=t(115),u=t(114);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,m=a.metadata,g=m.title,d=m.description,v=m.nextItem,E=m.prevItem,b=m.editUrl,p=n.hide_table_of_contents;return r.a.createElement(l.a,{title:g,description:d,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:m,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,b&&r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u.a,null),"Edit this page")),(v||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:v,prevItem:E}))),!p&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{toc:a.toc})))))}}}]);