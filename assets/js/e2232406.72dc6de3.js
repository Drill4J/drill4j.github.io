(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[352],{1233:function(t,e,a){"use strict";var r,n=a(7294);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}e.Z=function(t){var e=t.title,a=t.titleId,p=i(t,["title","titleId"]);return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none","aria-labelledby":a},p),e?n.createElement("title",{id:a},e):null,r||(r=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.508 0a.5.5 0 010 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-1.496a.5.5 0 111 0V12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h1.508zM15.5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0V1.713l-6.14 6.14a.502.502 0 01-.64.059l-.069-.058a.502.502 0 01-.058-.64l.058-.07L14.293 1H8.5a.5.5 0 010-1h7z",fill:"#007FFF"})))}},1200:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},metadata:function(){return d},toc:function(){return o},default:function(){return f}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=a(6933),p=a(1233),m={id:"launch-parameters",title:"Launch Parameters"},d={unversionedId:"configuration/launch-parameters",id:"configuration/launch-parameters",isDocsHomePage:!1,title:"Launch Parameters",description:"Description",source:"@site/docs/configuration/launch-parameters.mdx",sourceDirName:"configuration",slug:"/configuration/launch-parameters",permalink:"/docs/configuration/launch-parameters",version:"current",frontMatter:{id:"launch-parameters",title:"Launch Parameters"},sidebar:"docs",previous:{title:"Chrome Browser Extension",permalink:"/docs/installation/extension"},next:{title:"Coverage Collection Event Flow",permalink:"/docs/for-development/java-agent/java-coverage-receiving-event-flow"}},o=[{value:"Description",id:"description",children:[]},{value:"Introduction - How to Pass Params",id:"introduction---how-to-pass-params",children:[]},{value:"Java Agent",id:"java-agent",children:[{value:"System Variables",id:"system-variables",children:[]},{value:"Example of How to Pass Parameters",id:"example-of-how-to-pass-parameters",children:[]}]},{value:"Autotest Agent",id:"autotest-agent",children:[]},{value:"Drill Admin",id:"drill-admin",children:[]},{value:"Test2Code Plugin",id:"test2code-plugin",children:[]}],g={toc:o};function f(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"In this section, you find the list of all params which can be used to customize Drill apps."),(0,l.kt)("h2",{id:"introduction---how-to-pass-params"},"Introduction - How to Pass Params"),(0,l.kt)(i.iA,{columns:["200px","160px","280px"],mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Additional Info"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"java args"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("code",null,"-agentpath:%DISTR%/ drill_agent.dll=drillInstallationDir=%DISTR%/, adminAddress=localhost:8090, agentId=Petclinic, buildVersion=%DRILL_BUILD%, logLevel=TRACE -jar spring-petclinic-%DRILL_BUILD%.BUILD-SNAPSHOT.jar "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"System variables"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_PLUGINS_REMOTE_ENABLED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Java System variable"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"-D","[smth.bla]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"config file"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"from maven/gradle plugin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"for autotest agents"),(0,l.kt)("td",{parentName:"tr",align:"left"}))))),(0,l.kt)("h2",{id:"java-agent"},"Java Agent"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"agentpath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The file where stores the agent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"a relative or absolute path, for example: mingwX64-0.7.0-20/drill_agent.dll")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"agentId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of agent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Petclinic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"adminAddress"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Admin API URL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost:8090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"drillInstallationDir"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The folder where stores agent files"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"a relative or absolute path, for example:  mingwX64-0.7.0-20/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"buildVersion"),(0,l.kt)("td",{parentName:"tr",align:"left"},'buildVersion of a target application if it is not set manually then it will calculate by system env JAVA_APP_JAR , for example, "/deployments/tmp/src/gs-spring-boot-docker-0.1.0.jar" \u2192 "gs-spring-boot-docker-0.1.0" otherwise it will set "unspecified"'),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0 / String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"instanceId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"generated by uuid4()"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"This parameter groups your agents in one section. It is helpful if your app is based on a microservices arch."),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"petclinic-micro")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"logLevel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Logging agent work"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"TRACE","|","DEBUG","|","INFO","|","...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"logFile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the location where the logs will be stored"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'a relative or absolute path, for example: "E:\\projects\\project\\spring-petclinic run with agent\\drill-log.log"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isTlsApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add the ability of an agent to gain incoming headers from an Https request. Process TLS only for tomcat architecture"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isAsyncApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TODO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isWebApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TODO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"webAppNames"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the list of TODO webAppNames=web1:web2:etc , use : as delimiter."),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"classScanDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"start scanning after waiting of duration in milliseconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"configPath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"implemented in # The file where stores the config file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}))))),(0,l.kt)("h3",{id:"system-variables"},"System Variables"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_HTTP_HOOK_ENABLED drill.http.hook.enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It can be true/false. By default = true."),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_AGENT_CONFIG_PATH"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The file stores the config file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"a relative or absolute path, for example:  configFile.properties"))))),(0,l.kt)("h3",{id:"example-of-how-to-pass-parameters"},"Example of How to Pass Parameters"),(0,l.kt)("p",null,"You can list params by properties file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"# config file:\ndrillInstallationDir=myVersion/\nadminAddress=localhost:8090\nagentId=Petclinic\nbuildVersion=0.1.0\nlogLevel=TRACE\n")),(0,l.kt)("p",null,"And point to the config file in java args:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"java -agentpath:%DISTR%/drill_agent.dll=configPath=%DISTR%/configFile.properties -jar spring-petclinic-0.1.0.BUILD-SNAPSHOT.jar\n")),(0,l.kt)("p",null,"Or use the system variable ",(0,l.kt)("strong",{parentName:"p"},"DRILL_AGENT_CONFIG_PATH"),"."),(0,l.kt)("h2",{id:"autotest-agent"},"Autotest Agent"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.14.6"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{href:"https://github.com/Drill4J/autotest-agent/releases",target:"_black"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Drill4J/autotest-agent/releases"},"https://github.com/Drill4J/autotest-agent/releases"),(0,l.kt)(p.Z,{mdxType:"ExternalLinkIcon"}))," \u2014 take it from here")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"adminHost"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"adminPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8080"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"agentId"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"like in Java agent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"like in Java agent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"logFile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},'file("debug.log")'),(0,l.kt)("td",{parentName:"tr",align:"left"},"create a log file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"logLevel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ERROR"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Logging agent work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"if empty it will generate by uuid4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"runtimePath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"agentPath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}))))),(0,l.kt)("p",null,"additionalParams:"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Input Example"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isRealTimeEnable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"realtime feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"browserProxyAddress"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"localhost:7777"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isManuallyControlled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"if it is true - start & stop session need to be do manually")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionForEachTest"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"if it is true - start & stop session will be for each test it affects performance!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isGlobal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Global session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rawFrameworkPlugins"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},'Separate by ";" example: cucumber-v4; cucumber-v5; junit'),(0,l.kt)("td",{parentName:"tr",align:"left"},"strategy for autotest agent if it is empty value it will set all strategies automatically"))))),(0,l.kt)("h2",{id:"drill-admin"},"Drill Admin"),(0,l.kt)(i.iA,{columns:["260px","180px","200px","80px","300px"],mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"{PLUGIN_NAME}_PLUGIN_VERSION"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"if it is an empty value then it will take the latest version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"key=TEST2CODE_PLUGIN_VERSION value=0.7.0-107")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_AGENTS_SOCKET_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"120"),(0,l.kt)("td",{parentName:"tr",align:"left"},"a timeout of agent answers in seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_DEFAULT_PACKAGES"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"when you register an agent you can set the default packages"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"org/springframework/samples/petclinic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_PLUGIN_CACHE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"a cache for messages from plugins"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_PLUGIN_CACHE_TYPE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"mapdb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"# jvm - on-heap cache mapdb - off-heap cache"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jvm/mapdb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_JWT_LIFETIME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"60d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"lifetime of JWT token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PORT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"8090"),(0,l.kt)("td",{parentName:"tr",align:"left"},"port of admin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_DEVMODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_PLUGINS_REMOTE_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the flag that disables plugin loading from artifactory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It can be true/false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DRILL_JWT_LIFETIME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"60d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"lifetime of token"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"}))))),(0,l.kt)("h2",{id:"test2code-plugin"},"Test2Code Plugin"),(0,l.kt)("p",null,"Runtime config:"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"drill.plugins.test2code.features.realtime"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the flag for disabling of the realtime feature when it uses StartSession in Active Scope"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"drill.plugins.test2code.features.realtime.cache"),(0,l.kt)("td",{parentName:"tr",align:"left"},"depends on drill.plugins.test2code.features.realtime"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"drill.plugins.test2code.send.packages"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the flag for disabling of package sending Topics: .../scopes/{scopeId}/coverage/packages/{path}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true/false"))))))}f.isMDXComponent=!0}}]);