(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[5072],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1266:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"setup-java-agent",title:"Java Agent"},l={unversionedId:"installation/setup-java-agent",id:"version-0.8.0/installation/setup-java-agent",isDocsHomePage:!1,title:"Java Agent Configuration",description:"Drill4J Java Agent is using JVMTI interface",source:"@site/versioned_docs/version-0.8.0/installation/java-agent.mdx",sourceDirName:"installation",slug:"/installation/setup-java-agent",permalink:"/docs/0.8.0/installation/setup-java-agent",version:"0.8.0",frontMatter:{id:"setup-java-agent",title:"Java Agent"},sidebar:"version-0.8.0/docs",previous:{title:"Deploy Drill4J services",permalink:"/docs/0.8.0/installation/deploy-drill4j-services"},next:{title:"Setup Browser Extension",permalink:"/docs/0.8.0/installation/setup-browser-extension"}},s=[{value:"Download",id:"download",children:[]},{value:"Start the agent",id:"start-the-agent",children:[]},{value:"Delivery options",id:"delivery-options",children:[{value:"Manual",id:"manual",children:[]},{value:"Docker Shared Volume",id:"docker-shared-volume",children:[]},{value:"Kubernetes Init Container",id:"kubernetes-init-container",children:[]}]},{value:"Purpose",id:"purpose",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Drill4J Java Agent is using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jvmti/"},"JVMTI")," interface\nto analyze and instrument ",(0,o.kt)("em",{parentName:"p"},"Application Under Test"),"(",(0,o.kt)("em",{parentName:"p"},"AUT"),") in runtime."),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Java Agent has two parts two it - JVM in ",(0,o.kt)("inlineCode",{parentName:"p"},".jar")," and native in either ",(0,o.kt)("inlineCode",{parentName:"p"},".dll")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".so")," depending on the platform. "),(0,o.kt)("p",null,"Pick the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/java-agent/releases"},"platform appropriate release")," depending on where ",(0,o.kt)("em",{parentName:"p"},"Application Under Test")," runs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Currently Linux and Windows are supported "),(0,o.kt)("li",{parentName:"ul"},"There are caveats to Alpine support")),(0,o.kt)("h2",{id:"start-the-agent"},"Start the agent"),(0,o.kt)("p",null,"You have to provide the following string to ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," command running your ",(0,o.kt)("em",{parentName:"p"},"Application Under Test"),":"),(0,o.kt)("p",null,"You can either directly bake it into ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," launch like that"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'java -agentpath:/data/agent/libdrill_agent.so=drillInstallationDir=/data/agent,adminAddress=wss://drill-admin:8090,agentId=my-app-backend,groupId=my-app-under-test,buildVersion=0.1.0,logLevel=INFO,packagePrefixes=io/spring -jar my-app.jar\n# .so is for linux, swap for .dll if running under Windows\n# ! IMPORTANT ! make sure to change value of packagePrefixes=io/spring to your application package prefix\n#               separated by "/" instead of "."\n#               example: your app consists of my.org.project.moon.user, my.org.project.moon.orders, my.org.project.moon.logic\n#                        set package prefixes to my/org/project/moon\n')),(0,o.kt)("p",null,"But more elegant and handier way is to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/envvars002.html"},"JAVA_TOOL_OPTIONS")," env variable which is picked up by Java automatically"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'JAVA_TOOL_OPTIONS=-agentpath:/data/agent/libdrill_agent.so=drillInstallationDir=/data/agent,adminAddress=wss://drill-admin:8090,agentId=my-app-backend,groupId=my-app-under-test,buildVersion=0.1.0,logLevel=INFO,packagePrefixes=io/spring"\n')),(0,o.kt)("p",null,"Using JAVA_TOOL_OPTIONS option also allows to add Drill4J Java Agent to any Java app running inside Docker container ",(0,o.kt)("strong",{parentName:"p"},"without alterting the image"),".",(0,o.kt)("br",null),"\nThis enables you to easily integrate Drill4J into ",(0,o.kt)("strong",{parentName:"p"},"any testing environment seamlessly")," - no need to rebuild the image, no need to deploy separate env to collect metrics"),(0,o.kt)("h2",{id:"delivery-options"},"Delivery options"),(0,o.kt)("h3",{id:"manual"},"Manual"),(0,o.kt)("p",null,"You can simply download Drill4J Java Agent from its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/java-agent/releases"},"github releases page")," and place them next to ",(0,o.kt)("em",{parentName:"p"},"App Under Test")," ",(0,o.kt)("inlineCode",{parentName:"p"},"jar")),(0,o.kt)("h3",{id:"docker-shared-volume"},"Docker Shared Volume"),(0,o.kt)("p",null,"When running under Docker it can be handier to use our small image, that runs a script to download these files into shared volume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  \n  # The sole function of this container is to download agent files\n  # according to version specified in AGENT_VERSION env variable\n  # and place them into volume named agent-files\n  agent-files:\n    image: drill4j/java-agent:latest\n    environment:\n      - AGENT_VERSION=${AGENT_VERSION} \n    volumes:\n      - agent-files:/data\n\nvolumes:\n  # you can attach this volume to your Application Under Test for ease of access to agent files\n  agent-files:\n")),(0,o.kt)("h3",{id:"kubernetes-init-container"},"Kubernetes Init Container"),(0,o.kt)("p",null,"When running in Kubernetes consider using ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init containers"),"\nto download agent files ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/java-agent/releases"},"from github")," and make them available for pod running ",(0,o.kt)("em",{parentName:"p"},"App Under Test")),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Drill4J Java Agent is responsible for multiple tasks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Analyze application's packages, classes, methods and send ",(0,o.kt)("em",{parentName:"li"},"metadata")," (not the actual code) to Drill4J Admin Backend"),(0,o.kt)("li",{parentName:"ol"},"Instrument ",(0,o.kt)("em",{parentName:"li"},"AUT")," code to enable code execution tracking (in other words, code coverage)"),(0,o.kt)("li",{parentName:"ol"},"Analyze incoming requests to extract tests context (supplied, for example, by either Drill4J Java Agent or Browser Extension) ")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic-concepts/data-collection"},"Data Colletion")," for a comprehensive in-depth summary"))}c.isMDXComponent=!0}}]);