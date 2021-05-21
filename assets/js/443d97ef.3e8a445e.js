(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51],{1850:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=n(5222),s={id:"microservices",title:"Microservices"},l={unversionedId:"installation/microservices",id:"installation/microservices",isDocsHomePage:!1,title:"Microservices",description:"How it works",source:"@site/docs/installation/microservices.mdx",sourceDirName:"installation",slug:"/installation/microservices",permalink:"/docs/installation/microservices",version:"current",frontMatter:{id:"microservices",title:"Microservices"},sidebar:"docs",previous:{title:"Java Agent",permalink:"/docs/installation/java-agent"},next:{title:"Autotest Agent",permalink:"/docs/installation/autotest-agent"}},c=[{value:"How it works",id:"how-it-works",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"We introduced such a concept as a ",(0,r.kt)("strong",{parentName:"p"},"service group"),".\nA service group is an agent set of microservice applications.\nTo combine agents into a service group, you need to add only one more parameter to start the agent - ",(0,r.kt)("strong",{parentName:"p"},"groupId"),"."),(0,r.kt)("p",null,"After that, your application looks like a monolith for testing with Drill4J and you need to use ",(0,r.kt)("strong",{parentName:"p"},"groupId")," instead\nof ",(0,r.kt)("strong",{parentName:"p"},"agentId")," for autotests ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/autotest-agent"},"here"),"."),(0,r.kt)(a.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,r.kt)("p",null,"Chrome browser extension detects service groups automatically.")),(0,r.kt)("p",null,"Docker-compose file for your application may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"version: '2'\n\nservices:\n\n  some-non-jvm-service:\n    image: repo/some-non-jvm-service:3.1.0\n    ports:\n      - 8082:8082\n\n  some-jvm-service-one:\n    image: repo/some-jvm-service-two:0.1.0\n    ports:\n      - 8080:8080\n    volumes:\n      - ./distr:/data\n    environment:\n      - JAVA_OPTS=-agentpath:/data/libdrill_agent.so=drillInstallationDir=/data,adminAddress=host.docker.internal:8090,agentId=service-one,groupId=app,buildVersion=0.1.0,logLevel=INFO\n\n  some-jvm-service-two:\n    image: repo/some-jvm-service-one:0.2.1\n    ports:\n      - 8081:8081\n    volumes:\n      - ./distr:/data\n    environment:\n      - JAVA_OPTS=-agentpath:/data/libdrill_agent.so=drillInstallationDir=/data,adminAddress=host.docker.internal:8090,agentId=service-two,groupId=app,buildVersion=0.2.1,logLevel=INFO\n\n")),(0,r.kt)("p",null,"After launching the application you can see your Microservice app in Drill Admin:"),(0,r.kt)(a.Ee,{src:"img/installation/services-drill-admin.png",mdxType:"Image"}))}d.isMDXComponent=!0}}]);