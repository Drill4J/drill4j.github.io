(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[937],{1233:function(t,e,n){"use strict";var a,r=n(7294);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}e.Z=function(t){var e=t.title,n=t.titleId,o=i(t,["title","titleId"]);return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none","aria-labelledby":n},o),e?r.createElement("title",{id:n},e):null,a||(a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.508 0a.5.5 0 010 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-1.496a.5.5 0 111 0V12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h1.508zM15.5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0V1.713l-6.14 6.14a.502.502 0 01-.64.059l-.069-.058a.502.502 0 01-.058-.64l.058-.07L14.293 1H8.5a.5.5 0 010-1h7z",fill:"#007FFF"})))}},6264:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=n(1233),o=n(5222),s={id:"faq",title:"FAQ"},p={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Does Drill work only with JVM?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/drill4j-website/docs/faq",version:"current",frontMatter:{id:"faq",title:"FAQ"},sidebar:"docs",previous:{title:"Builds Summary",permalink:"/drill4j-website/docs/api/builds-summary"}},c=[{value:"Auto Testing Scheme",id:"auto-testing-scheme",children:[]},{value:"Manual Testing Scheme",id:"manual-testing-scheme",children:[]},{value:"Development Installation",id:"development-installation",children:[{value:"Frontend",id:"frontend",children:[]},{value:"Backend",id:"backend",children:[]}]}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Does Drill work only with JVM?"),"\nCurrently yes, but we're working on .Net agent and JavaScript agent. Python and Ruby agents are also possible in the future."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Which Java versions do you support?"),"\nJava 8+"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use Microservice applications?"),"\nYes, we're supporting microservice applications. See ",(0,l.kt)("a",{href:"/docs/installation/microservices",target:"_black"},"Microservices",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use Drill for Android applications?"),"\nYes, it is possible, but it's necessary to implement an agent for android application."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use .war?"),"\nYes, but only monolith applications on Tomcat, Jetty, WildFly. Java 8+"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What method of collecting coverage are you using?"),"\nProbes in bytecode. So, methods can be covered in the range of 0.1 - 100.\nAlso, we will add the ability to choose a method of coverage collecting. (By string and etc.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Which test types do you support?"),(0,l.kt)("br",null),"  ",(0,l.kt)("a",{href:"docs/installation/extension",target:"_black"},"- Manual",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"})),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/docs/installation/autotest-agent",target:"_black"},"- Auto (API, UI)",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Why do I need it?"),"\nProbably, if your project is small and doesn't have a lot of tests, then you don't need it. BUT, if it's a legacy project with a lot of tests, the tool saves your testing time via Test gap analysis and minimizing of regression suite."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How can I specify a backend host for a frontend container?"),"\nYou need to set the ",(0,l.kt)("strong",{parentName:"p"},"UPSTREAM")," env variable for a frontend container.\nBy default, ",(0,l.kt)("strong",{parentName:"p"},"UPSTREAM")," value is ",(0,l.kt)("strong",{parentName:"p"},"drill-admin:8090")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Will information in the DB be saved, if I recreate backend container?"),"\nYes, but you need to move the ",(0,l.kt)("strong",{parentName:"p"},"/work")," directory to the volume"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Where can I find API requests?"),"\nSwagger is available on port ",(0,l.kt)("strong",{parentName:"p"},"8090")," of backend service. For example, if  Drill frontend and backend parts are installed locally, then swagger is available at ",(0,l.kt)("a",{href:"http://localhost:8090",target:"_black"},"http://localhost:8090",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"My application has https connection. Does it suitable case for Drill?"),"\nYes, Drill supports https connection. See ",(0,l.kt)("a",{href:"/docs/installation/drill-admin#https-setup",target:"_black"},"HTTPS Setup",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When is a method considered new or modified?")," ",(0,l.kt)("br",null),"\nYou can find rules in the table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Modified"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed")))),(0,l.kt)("h3",{id:"auto-testing-scheme"},"Auto Testing Scheme"),(0,l.kt)(o.Ee,{src:"/img/auto-testing-diagram.png",mdxType:"Image"}),(0,l.kt)("h3",{id:"manual-testing-scheme"},"Manual Testing Scheme"),(0,l.kt)(o.Ee,{src:"/img/manual-testing-diagram.png",mdxType:"Image"}),(0,l.kt)("h2",{id:"development-installation"},"Development Installation"),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{href:"https://github.com/Drill4J/admin-ui/tree/develop/dev-guide",target:"_black"},"https://github.com/Drill4J/admin-ui/tree/develop/dev-guide",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))),(0,l.kt)("h3",{id:"backend"},"Backend"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{href:"https://github.com/Drill4J/Drill4J/blob/develop/README.md",target:"_black"},"https://github.com/Drill4J/Drill4J/blob/develop/README.md",(0,l.kt)(i.Z,{mdxType:"ExternalLinkIcon"}))))}m.isMDXComponent=!0}}]);