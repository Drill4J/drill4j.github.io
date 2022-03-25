(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[542],{7272:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var l,a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=n(549),s={id:"install-demo",title:"Java+JS demo example"},p={type:"mdx",permalink:"/install-demo",source:"@site/src/pages/install-demo.mdx"},d=[{value:"Step 1. Clone the example repository:",id:"step-1-clone-the-example-repository",children:[]},{value:"Step 2. Start Drill4J Admin",id:"step-2-start-drill4j-admin",children:[]},{value:"Step 3. Deploy additional builds",id:"step-3-deploy-additional-builds",children:[]},{value:"For manual testing use Chrome Extension",id:"for-manual-testing-use-chrome-extension",children:[]}],u=(l="Info",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"mb-12"},(0,r.kt)(i.v3,{mdxType:"Warning"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that at the moment:")," ",(0,r.kt)("br",null),"\n\u2013 This demo works only for Windows 10. ",(0,r.kt)("br",null),"\n\u2013 Frontend JavaScript coverage collection for automated tests works only when running headful Chrome."))),(0,r.kt)(i.dl,{mdxType:"JavaPlusJsHeader"}),(0,r.kt)("h2",{id:"step-1-clone-the-example-repository"},"Step 1. Clone the example repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/Drill4J/realworld-java-and-js-coverage\n")),(0,r.kt)("h2",{id:"step-2-start-drill4j-admin"},"Step 2. Start Drill4J Admin"),(0,r.kt)(i.HC,{number:"2.1.",mdxType:"ListItem"},"Start docker containers using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./demo-up.sh\n")),(0,r.kt)(i.HC,{number:"2.2.",mdxType:"ListItem"},(0,r.kt)("p",null,"After the installation go to Drill4J Admin: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8091"},"http://localhost:8091"))),(0,r.kt)(i.HC,{number:"2.3.",mdxType:"ListItem"},(0,r.kt)("p",null,"Press \u201cContinue as a Guest\u201d and ",(0,r.kt)("strong",{parentName:"p"},"register agents")," (both Java and Node.js)")),(0,r.kt)(i.Ee,{src:"/img/java-plus-js-agents-table.png",mdxType:"Image"}),(0,r.kt)(i.HC,{number:"2.4.",mdxType:"ListItem"},(0,r.kt)("p",null,"Go through the first two steps of the registration wizard and make sure that Test2Code plugin is ",(0,r.kt)("strong",{parentName:"p"},"enabled")," at Step 3"),(0,r.kt)(u,{mdxType:"Info"},(0,r.kt)("p",null,"There is no need to specify any parameters during the registration, just click through steps leaving everything as-is."))),(0,r.kt)(i.HC,{number:"2.5.",mdxType:"ListItem"},(0,r.kt)("p",null,"Open sample application at: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"))),(0,r.kt)(i.HC,{number:"2.6.",mdxType:"ListItem"},(0,r.kt)("p",null,"To collect coverage run tests:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew clean :build1:test\n")),(0,r.kt)("p",null,"Tests will be started in a few seconds. Please wait untill the testing process finish. ",(0,r.kt)("br",null),"\nSee the testing results on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8091/service-group-full-page/realworld-app/test2code"},"Test2Code plugin\u2019s page")," and ",(0,r.kt)("strong",{parentName:"p"},"finish active scope")," ",(0,r.kt)("br",null),"\nto add collected coverage to your build."),(0,r.kt)("h2",{id:"step-3-deploy-additional-builds"},"Step 3. Deploy additional builds"),(0,r.kt)("p",null,"You have to deploy additional builds to discover Drill4J features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tests to run;"),(0,r.kt)("li",{parentName:"ul"},"Risks Management;"),(0,r.kt)("li",{parentName:"ul"},"Time Savings;"),(0,r.kt)("li",{parentName:"ul"},"Baseline builds.")),(0,r.kt)(i.HC,{number:"3.1.",mdxType:"ListItem"},(0,r.kt)("p",null,"Deploy the ",(0,r.kt)("strong",{parentName:"p"},"2nd build")," of Realworld example app:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./demo-deploy-build2.sh\n")),(0,r.kt)(i.r0,{mdxType:"AdditionalInformation"},(0,r.kt)("p",null,"Wait for build notification to appear (click the icon in the top-right corner).")),(0,r.kt)("p",null,"Now you are able to see the list of ",(0,r.kt)("strong",{parentName:"p"},"Risks")," (uncovered new and modified methods) ",(0,r.kt)("br",null),"\nand suggested ",(0,r.kt)("strong",{parentName:"p"},"Tests to Run")),(0,r.kt)(i.HC,{number:"3.2.",mdxType:"ListItem"},(0,r.kt)("p",null,"To collect coverage for the 2nd build run tests:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew clean :build2:test2run\n")),(0,r.kt)(i.HC,{number:"3.3.",mdxType:"ListItem"},(0,r.kt)("p",null,"Deploy the ",(0,r.kt)("strong",{parentName:"p"},"3rd build")," (optional):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./demo-deploy-build3.sh\n")),(0,r.kt)(i.HC,{number:"3.4.",mdxType:"ListItem"},(0,r.kt)("p",null,"To collect coverage for the 3rd build run tests:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew clean :build3:test2run\n")),(0,r.kt)("p",null,"Below you can find a command to ",(0,r.kt)("strong",{parentName:"p"},"remove")," RealWorld demo example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./demo-down.sh\n")),(0,r.kt)("h2",{id:"for-manual-testing-use-chrome-extension"},"For manual testing use Chrome Extension"),(0,r.kt)("p",null,"Install the latest version of ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/extension"},"Chrome Extension")))}k.isMDXComponent=!0}}]);