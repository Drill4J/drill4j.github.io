(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[9240],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9591:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r,i=t(2122),l=t(9756),a=(t(7294),t(3905)),o={id:"drill-admin",title:"Drill Admin"},s={unversionedId:"pre-0.8.0/installation/drill-admin",id:"version-0.8.0/pre-0.8.0/installation/drill-admin",isDocsHomePage:!1,title:"Drill Admin",description:"Using Docker-compose File",source:"@site/versioned_docs/version-0.8.0/pre-0.8.0/installation/drill-admin.mdx",sourceDirName:"pre-0.8.0/installation",slug:"/pre-0.8.0/installation/drill-admin",permalink:"/docs/0.8.0/pre-0.8.0/installation/drill-admin",version:"0.8.0",frontMatter:{id:"drill-admin",title:"Drill Admin"},sidebar:"version-0.8.0/docs",previous:{title:"0.2.0",permalink:"/docs/0.8.0/releases/release-0-2-0"},next:{title:"Java Agent",permalink:"/docs/0.8.0/pre-0.8.0/installation/java-agent"}},p=[{value:"Using Docker-compose File",id:"using-docker-compose-file",children:[]},{value:"Using Jar",id:"using-jar",children:[{value:"Drill Admin Backend",id:"drill-admin-backend",children:[]}]},{value:"Using OpenShift",id:"using-openshift",children:[]},{value:"Using Kubernetes",id:"using-kubernetes",children:[]},{value:"HTTPS Setup",id:"https-setup",children:[]}],d=(r="AdditionalInformation",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:p};function c(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-docker-compose-file"},"Using Docker-compose File"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/docker/drill-admin/docker-compose.yml"},"Docker-compose File")),(0,a.kt)("p",null,"Start Drill using the following command and wait a bit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose up -d\n")),(0,a.kt)("h2",{id:"using-jar"},"Using Jar"),(0,a.kt)("h3",{id:"drill-admin-backend"},"Drill Admin Backend"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to artifactory: ",(0,a.kt)("a",{parentName:"p",href:"https://drill4j.jfrog.io/artifactory/drill/com/epam/drill/admin-core/0.7.0/"},"https://drill4j.jfrog.io/artifactory/drill/com/epam/drill/admin-core/0.7.0"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the necessary version and download it. You need a file with the name: ",(0,a.kt)("strong",{parentName:"p"},"admin-core-'verison'-all.jar"),"."))),(0,a.kt)(d,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,a.kt)("p",null,"E.g. admin-core-0.7.0-all.jar")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," java -jar admin-core-0.7.0-all.jar\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Drill Admin Backend is on ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8090/apidocs/index.html?url=./openapi.json"},"localhost:8090"))),(0,a.kt)("h2",{id:"using-openshift"},"Using OpenShift"),(0,a.kt)("p",null,"Yo can use the following template for Drill Admin:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/openshift/drill-admin-example-openshift.yaml"},"Drill Admin Example Openshift")),(0,a.kt)("h2",{id:"using-kubernetes"},"Using Kubernetes"),(0,a.kt)("p",null,"Yo can use the following config files for Drill Admin: ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/admin-ui-deployment.yaml"},"Drill Admin UI Deployment")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/admin-ui-service.yaml"},"Drill Admin UI Service")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/drill-admin-deployment.yaml"},"Drill Admin Deployment")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/drill-admin-service.yaml"},"Drill Admin Service")," ",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"https-setup"},"HTTPS Setup"),(0,a.kt)("p",null,"If your application uses ",(0,a.kt)("strong",{parentName:"p"},"https")," for access you need to deploy additional ",(0,a.kt)("strong",{parentName:"p"},"ssl-proxy")," service\nto Drill admin setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ssl-proxy-admin:\n    image: drill4j/ssl-proxy:0.1.0\n    ports:\n      - 8443:8443\n    environment:\n      DOMAIN: drill4j.example.com\n      SSL_PORT: 8443\n      TARGET_HOST: admin-ui\n      TARGET_PORT: 8080\n")),(0,a.kt)("p",null,"For example, full docker-compose file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"version: '3'\n\nservices:\n  ssl-proxy-admin:\n    image: drill4j/ssl-proxy:0.1.0\n    ports:\n      - 8443:8443\n    environment:\n      DOMAIN: drill4j.example.com\n      SSL_PORT: 8443\n      TARGET_HOST: admin-ui\n      TARGET_PORT: 8080\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.2\n\n  drill-admin:\n    image: drill4j/admin:0.7.0\n    environment:\n      - TEST2CODE_PLUGIN_VERSION=0.7.0\n      - LOG_LEVEL=INFO\n    ports:\n      - 8090:8090\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.3\n\n  admin-ui:\n    image: drill4j/admin-ui:0.7.1\n    ports:\n      - 8091:8080\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.4\n\nnetworks:\n  drill4j:\n    driver: bridge\n    ipam:\n     config:\n       - subnet: 10.250.0.0/16\n         gateway: 10.250.0.1\n")),(0,a.kt)("p",null,"Drill Admin is available on ",(0,a.kt)("strong",{parentName:"p"},"https://drillAdminHost:8443")),(0,a.kt)(d,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,a.kt)("p",null,"Accept self signed certificate")))}c.isMDXComponent=!0}}]);