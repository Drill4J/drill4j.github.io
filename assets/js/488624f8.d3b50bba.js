(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[8039],{705:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var l=n(2122),i=n(9756),r=(n(7294),n(3905)),a=n(549),o=n(6742),s={id:"chrome-extention",title:"Chrome Browser Extension"},m={unversionedId:"drill4net/chrome-extention",id:"drill4net/chrome-extention",isDocsHomePage:!1,title:"Chrome Browser Extension",description:"Installation",source:"@site/docs/drill4net/chrome-extension.mdx",sourceDirName:"drill4net",slug:"/drill4net/chrome-extention",permalink:"/docs/drill4net/chrome-extention",version:"current",frontMatter:{id:"chrome-extention",title:"Chrome Browser Extension"},sidebar:"docs",previous:{title:"Drill4Net Scanner Parameters",permalink:"/docs/drill4net/drill4net-scanner-parameters"},next:{title:"Known Issues",permalink:"/docs/drill4net/known-issues"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Perform Agent One Time Setup",id:"perform-agent-one-time-setup",children:[]},{value:"Connect to Drill4J Admin",id:"connect-to-drill4j-admin",children:[]},{value:"Run Manual Tests",id:"run-manual-tests",children:[]},{value:"Observe Test Outputs in Drill4J Admin",id:"observe-test-outputs-in-drill4j-admin",children:[]},{value:"Usage Overview",id:"usage-overview",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest Chrome Extension release ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/browser-extension/releases"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Extract ",(0,r.kt)("strong",{parentName:"li"},"build")," folder."),(0,r.kt)("li",{parentName:"ol"},"Go to Chrome ellipsis menu (three-dot menu at the top right corner) and go to ",(0,r.kt)("em",{parentName:"li"},"More Tools")," -> ",(0,r.kt)("em",{parentName:"li"},"Extensions"),"."),(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("em",{parentName:"li"},"Developer Mode")," in the top-right corner of the screen."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"Load unpacked")," button and navigate to build folder and select it.")),(0,r.kt)("h2",{id:"perform-agent-one-time-setup"},"Perform Agent One Time Setup"),(0,r.kt)("p",null,"Perform an ",(0,r.kt)(o.Z,{to:"/docs/drill4net/one-time-setup",target:"_blank",mdxType:"Link"},"agent one time setup")," before you continue with this guide."),(0,r.kt)(a.kI,{mdxType:"Info"},"NOTE ",(0,r.kt)("br",null),"If you are going to perform ",(0,r.kt)("b",null,"only manual")," tests you can safely ignore any steps from one time setup that are related to ",(0,r.kt)("i",null,"Drill4J Injector"),". In the case of manual tests there is no need to process ",(0,r.kt)("i",null,"assembly with tests"),", which is the responsibility of ",(0,r.kt)("i",null,"Drill4Net Injector"),"."),(0,r.kt)("h2",{id:"connect-to-drill4j-admin"},"Connect to Drill4J Admin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("em",{parentName:"li"},"Drill4J Browser Extension")," while in the browser tab of the application under test."),(0,r.kt)("li",{parentName:"ol"},"Enter Drill4J Admin backend address and click ",(0,r.kt)("em",{parentName:"li"},"Connect"),". For example: ",(0,r.kt)("em",{parentName:"li"},"http://localhost:8090"),".",(0,r.kt)(a.Ee,{src:"/img/drill4net/extension-to-drill4j-admin.png",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Open Widget"),". By default, the widget opens at the bottom of the screen, but you can move it up by pressing\n",(0,r.kt)("em",{parentName:"li"},"Fix to the top")," button on the right.")),(0,r.kt)("h2",{id:"run-manual-tests"},"Run Manual Tests"),(0,r.kt)("p",null,"Now you can use browser extention to run your own manual tests. You can run as many tests as you need.\nHere is an example how to run one test."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the test name and click ",(0,r.kt)("em",{parentName:"li"},"Start Test"),".",(0,r.kt)(a.Ee,{src:"/img/drill4net/start-manual-test.png",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Perform manual testing."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Finish"),". Select whether test ",(0,r.kt)("em",{parentName:"li"},"Passed")," or ",(0,r.kt)("em",{parentName:"li"},"Failed")," and click ",(0,r.kt)("em",{parentName:"li"},"Finish")," once again.",(0,r.kt)(a.Ee,{src:"/img/drill4net/finish-manual-test.png",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"You should see scope code coverage and test duration. Click ",(0,r.kt)("em",{parentName:"li"},"Done"),".",(0,r.kt)(a.Ee,{src:"/img/drill4net/manual-test-finished.png",mdxType:"Image"}))),(0,r.kt)("h2",{id:"observe-test-outputs-in-drill4j-admin"},"Observe Test Outputs in Drill4J Admin"),(0,r.kt)("p",null,"Output of the manual tests you run using browser extension can be accessed using Drill4J Admin."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to Drill4J Admin UI and select your agent."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Test2Code")," and then click ",(0,r.kt)("em",{parentName:"li"},"Finish Scope")," to add your scope coverage to the build.",(0,r.kt)(a.Ee,{src:"/img/drill4net/manual-tests-test2code.png",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Now you can observe coverage per each class or method. Test outputs are also displayed in ",(0,r.kt)("em",{parentName:"li"},"Build Tests"),".")),(0,r.kt)("h2",{id:"usage-overview"},"Usage Overview"),(0,r.kt)("p",null,"The following gif image shows how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to Drill4J Admin"),(0,r.kt)("li",{parentName:"ul"},"Run Manual Tests"),(0,r.kt)("li",{parentName:"ul"},"Observe Test Outputs in Drill4J Admin")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to explore browser extension usage"),(0,r.kt)(a.Ee,{src:"/img/drill4net/browser-extension-manual-test.gif",mdxType:"Image"})))}p.isMDXComponent=!0}}]);