(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[218],{8241:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var n=t(2122),i=t(9756),l=(t(7294),t(3905)),r=t(1720);var o={id:"java-agent",title:"Java Agent",sidebar_label:"Java Agent"},d={unversionedId:"installation/java-agent",id:"installation/java-agent",isDocsHomePage:!1,title:"Java Agent",description:"There are two ways to deploy Java Agent:",source:"@site/docs/installation/java-agent.mdx",sourceDirName:"installation",slug:"/installation/java-agent",permalink:"/docs/installation/java-agent",version:"current",sidebar_label:"Java Agent",frontMatter:{id:"java-agent",title:"Java Agent",sidebar_label:"Java Agent"},sidebar:"docs",previous:{title:"Drill Admin",permalink:"/docs/installation/drill-admin"},next:{title:"Microservices",permalink:"/docs/installation/microservices"}},s=[{value:"Using Docker Images",id:"using-docker-images",children:[]},{value:"Using Jar",id:"using-jar",children:[]}],g={toc:s};function p(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are two ways to deploy Java Agent:"),(0,l.kt)("h2",{id:"using-docker-images"},"Using Docker Images"),(0,l.kt)("p",null,"If you use docker images of app you need to share volume with drill agent files and add JAVA parameters. Try using this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"version: '3'\n\nservices:\n  example-app:\n    image: repo/example-app:0.1.0\n    ports:\n      - 8080:8080\n    volumes:\n      - agent-files:/data\n    environment:\n      - JAVA_TOOL_OPTIONS=\"-agentpath:/data/libdrill_agent.so=drillInstallationDir=/data,adminAddress=host.docker.internal:8090,agentId=ExampleAgentId,buildVersion=0.1.0,logLevel=INFO\"\n\n  agent-files:\n    image: drill4j/java-agent:0.7.0\n    volumes:\n      - agent-files:/java-agent\n\nvolumes:\n  agent-files:\n")),(0,l.kt)(r.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,l.kt)(r.Ct,{mdxType:"Badge"},"agent-files")," \u2014 container with drill agent files. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"adminAddress")," \u2014 host and backend port of your drill admin. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"8090")," \u2014 default port for agent connection. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"agentId ")," \u2014 ID for drill agent of application. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"buildVersion")," \u2014 build version of your application. ",(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"using-jar"},"Using Jar"),(0,l.kt)("p",null,"If you use a .jar for running you can download the archive with the agent distribution for your OS:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/java-agent/releases/tag/v0.7.0"},"Java Agent"),"\nand start an application with the following parameters (example for Windows):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-agentpath:distr/drill_agent.dll=drillInstallationDir=distr,adminAddress=localhost:8090,agentId=ExampleAgent,buildVersion=0.1.0,logLevel=INFO\n")),(0,l.kt)(r.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,l.kt)(r.Ct,{mdxType:"Badge"},"distr")," \u2014 folder with drill agent files.  ",(0,l.kt)("br",null),"Use ",(0,l.kt)(r.Ct,{mdxType:"Badge"},".dll")," for Windows ",(0,l.kt)(r.Ct,{mdxType:"Badge"},".so")," for Linux and ",(0,l.kt)(r.Ct,{mdxType:"Badge"},".dylib")," agent file for MacOS. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"adminAdress")," \u2014 host and backend port of your drill admin.  ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"agentId")," \u2014 ID for drill agent of application. ",(0,l.kt)("br",null),(0,l.kt)(r.Ct,{mdxType:"Badge"},"buildVersion")," \u2014 build version of your application. ",(0,l.kt)("br",null)))}p.isMDXComponent=!0}}]);