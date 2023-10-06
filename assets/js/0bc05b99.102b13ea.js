(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[5684],{6128:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return c}});var a=n(2122),s=n(9756),r=(n(7294),n(3905)),l={},i={unversionedId:"advanced/challenges",id:"advanced/challenges",isDocsHomePage:!1,title:"challenges",description:"Overall factors",source:"@site/docs/advanced/challenges.mdx",sourceDirName:"advanced",slug:"/advanced/challenges",permalink:"/docs/advanced/challenges",version:"current",frontMatter:{}},o=[{value:"Overall factors",id:"overall-factors",children:[{value:"Languages and Runtimes",id:"languages-and-runtimes",children:[]},{value:"Testing Frameworks / Test runners",id:"testing-frameworks--test-runners",children:[]},{value:"Transports",id:"transports",children:[]},{value:"Case 1: API tests over HTTP for a single backend service",id:"case-1-api-tests-over-http-for-a-single-backend-service",children:[]},{value:"Case 2: Manual tests performed in web UI",id:"case-2-manual-tests-performed-in-web-ui",children:[]},{value:"Case 3: Automated UI tests",id:"case-3-automated-ui-tests",children:[]},{value:"Challenges",id:"challenges",children:[]}]}],u={toc:o};function c(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overall-factors"},"Overall factors"),(0,r.kt)("h3",{id:"languages-and-runtimes"},"Languages and Runtimes"),(0,r.kt)("p",null,"Support new JVM language"),(0,r.kt)("p",null,"Suppot new frontend framework in JavaScript/Typescript"),(0,r.kt)("h3",{id:"testing-frameworks--test-runners"},"Testing Frameworks / Test runners"),(0,r.kt)("p",null,"Automated API tests (e.g. written in Java with JUnit, TestNg; or in JavaScript with Mocha, Jest, Jasmine)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hook into lifecycle events before/after, beforeEach/after each"),(0,r.kt)("li",{parentName:"ul"},"learn how to extract test context - name, parameters, status, duration")),(0,r.kt)("p",null,"Selenium tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inject Test ID to requests headers coming from each browser tab")),(0,r.kt)("p",null,"Cypress tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hook into lifecycle events"),(0,r.kt)("li",{parentName:"ul"},"learn to extract context"),(0,r.kt)("li",{parentName:"ul"},"inject Test ID into HTTP requests")),(0,r.kt)("p",null,"Manual tests in Chrome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allow user to specify test context"),(0,r.kt)("li",{parentName:"ul"},"inject headers to requests coming from browser tabs")),(0,r.kt)("p",null,"POSTMAN support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hook into lifecycle events"),(0,r.kt)("li",{parentName:"ul"},"learn to extract context"),(0,r.kt)("li",{parentName:"ul"},"inject Test ID into HTTP requests")),(0,r.kt)("h3",{id:"transports"},"Transports"),(0,r.kt)("p",null,"HTTP clients support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inject Test ID into requests"),(0,r.kt)("li",{parentName:"ul"},"headers"),(0,r.kt)("li",{parentName:"ul"},"query params")),(0,r.kt)("p",null,"Non-HTTP clients support (e.g. message bus and message queue systems like Kafka, RabbitMQ, etc)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inject ?somehow? Test ID into messages")),(0,r.kt)("h3",{id:"case-1-api-tests-over-http-for-a-single-backend-service"},"Case 1: API tests over HTTP for a single backend service"),(0,r.kt)("h3",{id:"case-2-manual-tests-performed-in-web-ui"},"Case 2: Manual tests performed in web UI"),(0,r.kt)("h3",{id:"case-3-automated-ui-tests"},"Case 3: Automated UI tests"),(0,r.kt)("h3",{id:"challenges"},"Challenges"),(0,r.kt)("h4",{id:"test-context-propagation-in-asynchronous"},"Test context propagation in asynchronous"),(0,r.kt)("h4",{id:"test-context-propagation-in-microservices"},"Test context propagation in microservices"),(0,r.kt)("p",null,"the points of integration diagram\nwhy plugin architecture\nwhat is test2code plugin\ntest context propagation\nby autotest agent\nby agent\nwhat agent is doing"),(0,r.kt)("p",null,'Drill4J "Pyramid"'),(0,r.kt)("p",null,"agent\nautotest agent\nruntime"),(0,r.kt)("p",null,"setup drill4j\nrun through tests as usual\nfind gaps\nmake increment\nsee risks, get test recommendations\nexecute\nassess quality gate"))}c.isMDXComponent=!0}}]);