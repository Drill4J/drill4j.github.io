(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[6392],{1865:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var i=t(2122),l=t(9756),r=(t(7294),t(3905)),o={id:"deploy-drill4j-services",title:"Deploy Drill4J Services"},a={unversionedId:"installation/deploy-drill4j-services",id:"installation/deploy-drill4j-services",isDocsHomePage:!1,title:"Deploy Drill4J services",description:"Drill4J provides docker images for all of its base components",source:"@site/docs/installation/drill4j-services.mdx",sourceDirName:"installation",slug:"/installation/deploy-drill4j-services",permalink:"/docs/installation/deploy-drill4j-services",version:"current",frontMatter:{id:"deploy-drill4j-services",title:"Deploy Drill4J Services"},sidebar:"docs",previous:{title:"Steps to setup Drill4J",permalink:"/docs/installation/setup"},next:{title:"Java Agent Configuration",permalink:"/docs/installation/setup-java-agent"}},s=[{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Kubernetes / Helm",id:"kubernetes--helm",children:[]},{value:"Manual services deployment",id:"manual-services-deployment",children:[]}],d={toc:s};function p(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Drill4J provides docker images for all of its base components "),(0,r.kt)("p",null,"It is somewhat straightforward to run Drill4J services in ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," or ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to run basic Drill4J services"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," version: '3'\n\n services:\n\n   admin-ui:\n     image: drill4j/admin-ui-root-config:${FRONT_VERSION}\n     ports:\n       - 8091:8080\n     environment:\n       WAIT_HOSTS: drill-admin:8090\n       UI_PLUGINS_URLS: 'test2code#https://cdn.jsdelivr.net/npm/@drill4j/test2code-ui@${TEST2CODE_UI_VERSION}/dist/Drill4J-test-to-code.js'\n     networks:\n       - drill4j-dev-network\n     depends_on:\n       drill-admin:\n         condition: service_healthy\n\n   drill-admin:\n     image: drill4j/admin:${BACK_VERSION}\n     environment:\n       - DRILL_DB_PORT=5432\n       - DRILL_AGENTS_SOCKET_TIMEOUT=6000\n       - DRILL_DB_HOST=${POSTGRES_HOST}\n       - DRILL_DB_NAME=${POSTGRES_DB}\n       - DRILL_DB_USER_NAME=${POSTGRES_USER}\n       - DRILL_DB_PASSWORD=${POSTGRES_PASSWORD}\n       - DRILL_DB_MAX_POOL_SIZE=${DRILL_DB_MAX_POOL_SIZE}\n       - LOG_LEVEL=info\n     healthcheck:\n       test: [ \"CMD\", \"curl\", \"http://localhost:8090\" ]\n       interval: 1s\n       timeout: 3s\n       retries: 30\n     ports:\n       - 8090:8090\n       - 8453:8453\n     networks:\n       - drill4j-dev-network\n     depends_on:\n       postgres:\n         condition: service_healthy\n\n   postgres:\n     image: postgres:14.1\n     ports:\n       - '5432:5432'\n     environment:\n       POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}\n       POSTGRES_USER: ${POSTGRES_USER}\n       POSTGRES_DB: ${POSTGRES_DB}\n     volumes:\n       - drill-data-pg:/var/lib/postgresql/data\n     healthcheck:\n       test: ['CMD-SHELL', 'pg_isready -U postgres']\n       interval: 10s\n       timeout: 5s\n       retries: 5\n     networks:\n       - drill4j-dev-network\n\n volumes:\n   drill-data-pg:\n\n networks:\n   drill4j-dev-network:\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the following ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file next to it"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," # Drill4J Admin Backend\n BACK_VERSION=0.8.3\n POSTGRES_HOST=postgres\n POSTGRES_DB=postgres\n POSTGRES_USER=postgres\n POSTGRES_PASSWORD=mysecretpassword\n DRILL_DB_MAX_POOL_SIZE=10\n\n # Drill4J Admin Panel UI\n FRONT_VERSION=0.1.0-150\n TEST2CODE_UI_VERSION=0.1.0-136\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open command line and run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")))),(0,r.kt)("h2",{id:"kubernetes--helm"},"Kubernetes / Helm"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"TODO - add example charts"))),(0,r.kt)("h2",{id:"manual-services-deployment"},"Manual services deployment"),(0,r.kt)("p",null,"One can run Drill4J services without Docker / Kubernetes, yet it is cumbersome and would require to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"provide correct env - Java 8, PostgreSQL, Node.js 16 (may vary depending on exact setup)."),(0,r.kt)("li",{parentName:"ul"},"manually deploy and configure all services")),(0,r.kt)("p",null,"So it's best to use Docker images provided by Drill4J out-of-the-box"))}p.isMDXComponent=!0}}]);