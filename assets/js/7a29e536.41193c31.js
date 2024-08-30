(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[7004],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4078:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={id:"api-tests",title:"API Tests"},o={unversionedId:"tests-integration/api-tests",id:"version-0.9.0/tests-integration/api-tests",isDocsHomePage:!1,title:"API Tests",description:"This page walks you through Drill4J integration for Java-based API tests. It will enable you to use such features as Per Test Coverage and Test Recommendations",source:"@site/versioned_docs/version-0.9.0/tests-integration/api-tests.mdx",sourceDirName:"tests-integration",slug:"/tests-integration/api-tests",permalink:"/docs/tests-integration/api-tests",version:"0.9.0",frontMatter:{id:"api-tests",title:"API Tests"},sidebar:"version-0.9.0/docs",previous:{title:"Local Deployment",permalink:"/docs/getting-started/local-deployment"},next:{title:"Application Agent",permalink:"/docs/agents/java-agent"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configure Drill4J Plugin",id:"configure-drill4j-plugin",children:[{value:"Gradle",id:"gradle",children:[]},{value:"Maven",id:"maven",children:[]}]},{value:"Launch Tests",id:"launch-tests",children:[]},{value:"Disabling test agent for specific task",id:"disabling-test-agent-for-specific-task",children:[{value:"Gradle",id:"gradle-1",children:[]},{value:"Maven",id:"maven-1",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page walks you through Drill4J integration for Java-based API tests. It will enable you to use such features as ",(0,i.kt)("em",{parentName:"p"},"Per Test Coverage")," and ",(0,i.kt)("em",{parentName:"p"},"Test Recommendations")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This page assumes you have Application Agent configured for application under test. For instructions see:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/local-deployment"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/agents/java-agent"},"Application Agent reference")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"API tests launched with either Maven or Gradle"))),(0,i.kt)("h2",{id:"configure-drill4j-plugin"},"Configure Drill4J Plugin"),(0,i.kt)("h3",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Add Drill4J CI/CD plugin to your Gradle build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("com.epam.drill.integration.cicd") version "0.1.0"\n}\n')),(0,i.kt)("p",null,"Add general properties to your Gradle build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'drill {\n    # example: "http://localhost:8090/api"\n    drillApiUrl = \n\n    # example: my-app\n    groupId =\n\n    # Secure way: set DRILL_API_KEY env variable value\n    # Unsecure way: paste the API key value here\n    drillApiKey = "your-drill-api-key-here"\n\n    enableTestAgent {\n        version = "0.23.0"\n    }\n}\n')),(0,i.kt)("h3",{id:"maven"},"Maven"),(0,i.kt)("p",null,"Add Drill4J CI/CD plugin to your Maven build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin>\n    <groupId>com.epam.drill.integration</groupId>\n    <artifactId>drill-maven-plugin</artifactId>\n    <version>0.1.0</version>\n    <configuration>\n        \x3c!-- example: my-app --\x3e\n        <groupId> ... </groupId>\n\n        \x3c!-- example: "http://localhost:8090/api" --\x3e\n        <drillApiUrl> ... </drillApiUrl>\n        \n        \x3c!--  Secure way: set DRILL_API_KEY env variable value --\x3e\n        \x3c!--  Unsecure way: paste the API key value here --\x3e\n        <drillApiKey>your-drill-api-key-here</drillApiKey>\n        \n        <testAgent>\n            <version>0.23.0</version>\n        </testAgent>\n\n    </configuration>\n    <executions>\n        <execution>\n            <goals>\n                <goal>enableTestAgent</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n')),(0,i.kt)("h2",{id:"launch-tests"},"Launch Tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch your tests with Gradle/Maven (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn test"),")."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"When running tests in your IDE, double-check that it's picking up the correct configuration file with the Drill4J test agent added (that will be ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," for Gradle, ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," for Maven)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To confirm test agent is working check tests log. There should be Drill4J ASCII logo followed by test agent version:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-log"},'Task :test is modified by Drill\n  ____    ____                 _       _          _  _                _\n |  _"\\U |  _"\\ u     ___     |"|     |"|        | ||"|            U |"| u\n/| | | |\\| |_) |/    |_"_|  U | | u U | | u      | || |_          _ \\| |/\nU| |_| |\\|  _ <       | |    \\| |/__ \\| |/__     |__   _|        | |_| |_,-.\n |____/ u|_| \\_\\    U/| |\\u   |_____| |_____|      /|_|\\          \\___/-(_/\n  |||_   //   \\\\_.-,_|___|_,-.//  \\\\  //  \\\\      u_|||_u          _//       \n (__)_) (__)  (__)\\_)-\' \'-(_/(_")("_)(_")("_)     (__)__)         (__)  \n Autotest Agent (v0.23.0)\n')))),(0,i.kt)("p",null,"That\u2019s it! Open the Metabase UI and confirm that the new test information is coming through. You should see the Test Launches on the Build Summary dashboard."),(0,i.kt)("h2",{id:"disabling-test-agent-for-specific-task"},"Disabling test agent for specific task"),(0,i.kt)("h3",{id:"gradle-1"},"Gradle"),(0,i.kt)("p",null,"If you want to disable Drill4J for specific test task you can set the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"test {\n    // general properties of your test task\n    // ...\n    \n    drill {\n        testAgent {\n            enabled = false\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"maven-1"},"Maven"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 UNDER CONSTRUCTION. TO BE COMPLETED SOON \ud83d\udea7")))}p.isMDXComponent=!0}}]);