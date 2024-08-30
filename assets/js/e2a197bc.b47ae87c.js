(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[6392],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1865:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),l={id:"deploy-drill4j-services",title:"Deploy Drill4J Services"},a={unversionedId:"installation/deploy-drill4j-services",id:"installation/deploy-drill4j-services",isDocsHomePage:!1,title:"Deploy Drill4J services",description:"Drill4J provides docker images for all of its base components",source:"@site/docs/installation/drill4j-services.mdx",sourceDirName:"installation",slug:"/installation/deploy-drill4j-services",permalink:"/docs/next/installation/deploy-drill4j-services",version:"current",frontMatter:{id:"deploy-drill4j-services",title:"Deploy Drill4J Services"}},s=[{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Kubernetes / Helm",id:"kubernetes--helm",children:[]},{value:"Manual services deployment",id:"manual-services-deployment",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Drill4J provides docker images for all of its base components "),(0,i.kt)("p",null,"It is somewhat straightforward to run Drill4J services in ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," or ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")),(0,i.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the following ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to run basic Drill4J services"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"}," version: '3'\n\n services:\n\n   admin-ui:\n     image: drill4j/admin-ui-root-config:${FRONT_VERSION}\n     ports:\n       - 8091:8080\n     environment:\n       WAIT_HOSTS: drill-admin:8090\n       UI_PLUGINS_URLS: 'test2code#https://cdn.jsdelivr.net/npm/@drill4j/test2code-ui@${TEST2CODE_UI_VERSION}/dist/Drill4J-test-to-code.js'\n     networks:\n       - drill4j-dev-network\n     depends_on:\n       drill-admin:\n         condition: service_healthy\n\n   drill-admin:\n     image: drill4j/admin:${BACK_VERSION}\n     environment:\n       - DRILL_DB_PORT=5432\n       - DRILL_AGENTS_SOCKET_TIMEOUT=6000\n       - DRILL_DB_HOST=${POSTGRES_HOST}\n       - DRILL_DB_NAME=${POSTGRES_DB}\n       - DRILL_DB_USER_NAME=${POSTGRES_USER}\n       - DRILL_DB_PASSWORD=${POSTGRES_PASSWORD}\n       - DRILL_DB_MAX_POOL_SIZE=${DRILL_DB_MAX_POOL_SIZE}\n       - LOG_LEVEL=info\n     healthcheck:\n       test: [ \"CMD\", \"curl\", \"http://localhost:8090\" ]\n       interval: 1s\n       timeout: 3s\n       retries: 30\n     ports:\n       - 8090:8090\n       - 8453:8453\n     networks:\n       - drill4j-dev-network\n     depends_on:\n       postgres:\n         condition: service_healthy\n\n   postgres:\n     image: postgres:14.1\n     ports:\n       - '5432:5432'\n     environment:\n       POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}\n       POSTGRES_USER: ${POSTGRES_USER}\n       POSTGRES_DB: ${POSTGRES_DB}\n     volumes:\n       - drill-data-pg:/var/lib/postgresql/data\n     healthcheck:\n       test: ['CMD-SHELL', 'pg_isready -U postgres']\n       interval: 10s\n       timeout: 5s\n       retries: 5\n     networks:\n       - drill4j-dev-network\n\n volumes:\n   drill-data-pg:\n\n networks:\n   drill4j-dev-network:\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the following ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file next to it"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," # Drill4J Admin Backend\n BACK_VERSION=0.8.3\n POSTGRES_HOST=postgres\n POSTGRES_DB=postgres\n POSTGRES_USER=postgres\n POSTGRES_PASSWORD=mysecretpassword\n DRILL_DB_MAX_POOL_SIZE=10\n\n # Drill4J Admin Panel UI\n FRONT_VERSION=0.1.0-150\n TEST2CODE_UI_VERSION=0.1.0-136\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open command line and run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")))),(0,i.kt)("h2",{id:"kubernetes--helm"},"Kubernetes / Helm"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"TODO - add example charts"))),(0,i.kt)("h2",{id:"manual-services-deployment"},"Manual services deployment"),(0,i.kt)("p",null,"One can run Drill4J services without Docker / Kubernetes, yet it is cumbersome and would require to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"provide correct env - Java 8, PostgreSQL, Node.js 16 (may vary depending on exact setup)."),(0,i.kt)("li",{parentName:"ul"},"manually deploy and configure all services")),(0,i.kt)("p",null,"So it's best to use Docker images provided by Drill4J out-of-the-box"))}p.isMDXComponent=!0}}]);