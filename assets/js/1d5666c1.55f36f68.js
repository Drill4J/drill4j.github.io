(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[218],{1233:function(e,t,a){"use strict";var n,l=a(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}t.Z=function(e){var t=e.title,a=e.titleId,o=i(e,["title","titleId"]);return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none","aria-labelledby":a},o),t?l.createElement("title",{id:a},t):null,n||(n=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.508 0a.5.5 0 010 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-1.496a.5.5 0 111 0V12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h1.508zM15.5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0V1.713l-6.14 6.14a.502.502 0 01-.64.059l-.069-.058a.502.502 0 01-.058-.64l.058-.07L14.293 1H8.5a.5.5 0 010-1h7z",fill:"#007FFF"})))}},8095:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=a(6933),o=a(1233),d={id:"java-agent",title:"Java Agent",sidebar_label:"Java Agent"},s={unversionedId:"installation/java-agent",id:"installation/java-agent",isDocsHomePage:!1,title:"Java Agent",description:"There are two ways to deploy Java Agent:",source:"@site/docs/installation/java-agent.mdx",sourceDirName:"installation",slug:"/installation/java-agent",permalink:"/docs/installation/java-agent",version:"current",sidebar_label:"Java Agent",frontMatter:{id:"java-agent",title:"Java Agent",sidebar_label:"Java Agent"},sidebar:"docs",previous:{title:"Drill Admin",permalink:"/docs/installation/drill-admin"},next:{title:"Microservices",permalink:"/docs/installation/microservices"}},u=[{value:"Using Docker Images",id:"using-docker-images",children:[]},{value:"Using Jar",id:"using-jar",children:[]}],g={toc:u};function c(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are two ways to deploy Java Agent:"),(0,r.kt)("h2",{id:"using-docker-images"},"Using Docker Images"),(0,r.kt)("p",null,"If you use docker images of app you need to share volume with drill agent files and add JAVA parameters. Try using this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"version: '3'\n\nservices:\n  example-app:\n    image: repo/example-app:0.1.0\n    ports:\n      - 8080:8080\n    volumes:\n      - agent-files:/data    \n    environment:\n      - JAVA_TOOL_OPTIONS=\"-agentpath:/data/libdrill_agent.so=drillInstallationDir=/data,adminAddress=host.docker.internal:8090,agentId=ExampleAgentId,buildVersion=0.1.0,logLevel=INFO\"\n\n  agent-files:\n    image: drill4j/java-agent:0.7.0-28\n    volumes:\n      - agent-files:/java-agent\n\nvolumes:\n  agent-files:\n")),(0,r.kt)(i.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"agent-files")," \u2014 container with drill agent files. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"adminAddress")," \u2014 host and backend port of your drill admin. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"8090")," \u2014 default port for agent connection. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"agentId ")," \u2014 ID for drill agent of application. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#B6C7D5",mdxType:"Badge"},"buildVersion")," \u2014 build version of your application. ",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"using-jar"},"Using Jar"),(0,r.kt)("p",null,"If you use a .jar for running you can download the archive with the agent distribution for your OS:"),(0,r.kt)("a",{href:"https://github.com/Drill4J/java-agent/releases/tag/v0.7.0-28",target:"_black"},"Java Agent",(0,r.kt)(o.Z,{mdxType:"ExternalLinkIcon"})),(0,r.kt)("p",null,"and start an application with the following parameters (example for Windows):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-agentpath:distr/drill_agent.dll=drillInstallationDir=distr,adminAddress=localhost:8090,agentId=ExampleAgent,buildVersion=0.1.0,logLevel=INFO\n")),(0,r.kt)(i.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"distr")," \u2014 folder with drill agent files.  ",(0,r.kt)("br",null),"Use ",(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},".dll")," for Windows ",(0,r.kt)(i.Ct,{color:"#76A5E3",mdxType:"Badge"},".so")," for Linux and ",(0,r.kt)(i.Ct,{color:"#76A5E3",mdxType:"Badge"},".dylib")," agent file for MacOS. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{mdxType:"Badge"},"adminAdress")," \u2014 host and backend port of your drill admin.  ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"agentId")," \u2014 ID for drill agent of application. ",(0,r.kt)("br",null),(0,r.kt)(i.Ct,{color:"#BFC7D5",mdxType:"Badge"},"buildVersion")," \u2014 build version of your application. ",(0,r.kt)("br",null)))}c.isMDXComponent=!0}}]);