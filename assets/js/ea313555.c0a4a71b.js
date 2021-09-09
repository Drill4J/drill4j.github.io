(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[937],{6264:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=n(549),o={id:"faq",title:"FAQ"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Why do I need it?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",version:"current",frontMatter:{id:"faq",title:"FAQ"},sidebar:"docs",previous:{title:"Supported Frameworks",permalink:"/docs/supported-frameworks"}},p=[{value:"Development Installation",id:"development-installation",children:[{value:"Frontend",id:"frontend",children:[]},{value:"Backend",id:"backend",children:[]}]}],d={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Why do I need it?")," ",(0,l.kt)("br",null),"\nProbably, if your project is small and doesn't have a lot of tests, then you don't need it. BUT, if it's a legacy project with a lot of tests, the tool saves your testing time via Test gap analysis and minimizing of regression suite."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Does Drill work only with JVM?")," ",(0,l.kt)("br",null),"\nCurrently yes, but we're working on .Net agent and JavaScript agent. Python and Ruby agents are also possible in the future."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Which Java versions do you support?")," ",(0,l.kt)("br",null),"\nJava 8+"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use Microservice applications?")," ",(0,l.kt)("br",null),"\nYes, we're supporting microservice applications. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/installation/microservices"},"Microservices")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use Drill for Android applications?")," ",(0,l.kt)("br",null),"\nYes, it is possible, but it's necessary to implement an agent for android application."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Can I use .war?")," ",(0,l.kt)("br",null),"\nYes, but only monolith applications on Tomcat, Jetty, WildFly. Java 8+"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What method of collecting coverage are you using?")," ",(0,l.kt)("br",null),"\nProbes in bytecode. So, methods can be covered in the range of 0.1 - 100.\nAlso, we will add the ability to choose a method of coverage collecting. (By string and etc.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Which test types do you support?")," ",(0,l.kt)("br",null)," - ",(0,l.kt)("a",{parentName:"p",href:"/docs/installation/extension"},"Manual"),(0,l.kt)("br",null),"- ",(0,l.kt)("a",{parentName:"p",href:"/docs/installation/autotest-agent"},"Auto (API, UI)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How can I specify a backend host for a frontend container?")," ",(0,l.kt)("br",null),"\nYou need to set the ",(0,l.kt)("strong",{parentName:"p"},"UPSTREAM")," env variable for a frontend container.\nBy default, ",(0,l.kt)("strong",{parentName:"p"},"UPSTREAM")," value is ",(0,l.kt)("strong",{parentName:"p"},"drill-admin:8090")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Will information in the DB be saved, if I recreate backend container?")," ",(0,l.kt)("br",null),"\nYes, but you need to move the ",(0,l.kt)("strong",{parentName:"p"},"/work")," directory to the volume."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Where can I find API requests?")," ",(0,l.kt)("br",null),"\nSwagger is available on port ",(0,l.kt)("strong",{parentName:"p"},"8090")," of backend service. For example, if  Drill frontend and backend parts are installed locally, then swagger is available at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8090"},"http://localhost:8090")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What to do if my agent is not displayed in the Drill Admin after connection?")," ",(0,l.kt)("br",null),"\nMake sure that you use lowercase Latin letters, digits and dashes in the Agent ID parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What to do if methods\\tests in Covered Methods\\Associated tests pane are not displayed in active scope?")," ",(0,l.kt)("br",null),"\nMake sure that the test session is finished (the calculation is done after the test session is finished)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Does the action continue after closing the modal window?")," ",(0,l.kt)("br",null),"\nYes, the operation is performed in the background."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"My application has https connection. Does it suitable case for Drill?")," ",(0,l.kt)("br",null),"\nYes, Drill supports https connection. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/installation/drill-admin#https-setup"},"HTTPS Setup")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do you have prepared Postman collection with API requests?")," ",(0,l.kt)("br",null),"\nYes, you can find it ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/example-configs/tree/main/postman"},"here")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When is a method considered new or modified?")," ",(0,l.kt)("br",null),"\nYou can find rules in the table:"),(0,l.kt)(i.iA,{mdxType:"Table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Modified"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"),(0,l.kt)("th",{parentName:"tr",align:"center"},"New"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed"))))),(0,l.kt)("h2",{id:"development-installation"},"Development Installation"),(0,l.kt)("h3",{id:"frontend"},"Frontend"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/admin-ui/tree/develop/dev-guide"},"https://github.com/Drill4J/admin-ui/tree/develop/dev-guide")),(0,l.kt)("h3",{id:"backend"},"Backend"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Drill4J/Drill4J/blob/develop/README.md"},"https://github.com/Drill4J/Drill4J/blob/develop/README.md")))}c.isMDXComponent=!0}}]);