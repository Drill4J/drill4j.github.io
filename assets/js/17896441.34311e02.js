(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[918],{5657:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var a=n(7294),l={sm:640,md:768,lg:1024,xl:1280,"2xl":1536,laptop:1440},r=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1];return(0,a.useEffect)((function(){function t(){window.innerWidth>=l[e]?r(!0):r(!1)}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),n}},4525:function(e,t,n){"use strict";n.r(t);var a=n(7294),l=n(9105),r=n(6700),c=n(2263),o=n(4996),m=n(6010),i=n(549),s=n(5657);t.default=function(e){var t=(0,c.default)().siteConfig.url,n=e.content,u=n.metadata,d=n.frontMatter,p=d.image,E=d.keywords,g=d.hide_title,f=d.hide_table_of_contents,h=u.description,w=u.title,b=u.permalink,k=(0,s.G)("lg"),v=(0,s.G)("laptop"),_=(0,r.pe)(w),y=(0,o.Z)(p,{absolute:!0});return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("title",null,_),a.createElement("meta",{property:"og:title",content:_}),h&&a.createElement("meta",{name:"description",content:h}),h&&a.createElement("meta",{property:"og:description",content:h}),E&&E.length&&a.createElement("meta",{name:"keywords",content:E.join(",")}),p&&a.createElement("meta",{property:"og:image",content:y}),p&&a.createElement("meta",{name:"twitter:image",content:y}),p&&a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),b&&a.createElement("meta",{property:"og:url",content:t+b}),b&&a.createElement("link",{rel:"canonical",href:t+b})),a.createElement("main",{className:"grid grid-cols-12 gap-x-5 mb-22 bg-monochrome-white"},a.createElement("article",{className:(0,m.Z)("col-span-12 lg:col-start-2 lg:col-span-8",{"lg:col-span-12 pr-16":v}),style:{maxWidth:"100%"}},!g&&a.createElement("header",null,a.createElement("h1",{className:"mt-8 mb-4 text-32 leading-48 text-monochrome-default"},w)),a.createElement("div",{className:"markdown"},a.createElement(n,null))),!f&&n.toc&&k&&!v&&a.createElement("aside",{className:"col-span-3"},a.createElement(i.Nt,{toc:n.toc}))),!f&&n.toc&&k&&v&&a.createElement("aside",null,a.createElement(i.Nt,{toc:n.toc})))}}}]);