(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[1321],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(g,i(i({ref:t},u),{},{components:n})):l.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9321:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(2911),o={id:"releases",title:"Releases"},s={unversionedId:"releases",id:"version-0.9.0/releases",isDocsHomePage:!1,title:"Releases",description:"This page provides the latest versions of all Drill4J components related to the 0.9.x release. Below, you'll find the release notes in reverse chronological order, along with changelogs and information on breaking changes.",source:"@site/versioned_docs/version-0.9.0/releases.mdx",sourceDirName:".",slug:"/releases",permalink:"/docs/releases",version:"0.9.0",frontMatter:{id:"releases",title:"Releases"},sidebar:"version-0.9.0/docs",previous:{title:"WildFly integration",permalink:"/docs/guides/wildfly"},next:{title:"Application Agent",permalink:"/docs/agents/java-agent"}},p=[{value:"Current versions",id:"current-versions",children:[]},{value:"Releases",id:"releases",children:[{value:"Minor Release 4",id:"minor-release-4",children:[]},{value:"Minor Release 3",id:"minor-release-3",children:[]},{value:"Minor Release 2",id:"minor-release-2",children:[]},{value:"Minor Release 1",id:"minor-release-1",children:[]},{value:"Release 0.9.0",id:"release-090",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page provides the latest versions of all Drill4J components related to the 0.9.x release. Below, you'll find the release notes in reverse chronological order, along with changelogs and information on breaking changes."),(0,r.kt)("h2",{id:"current-versions"},"Current versions"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Component"),(0,r.kt)("th",null,"Version"),(0,r.kt)("th",null,"Links"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/agents/java-agent"},"Application Agent")),(0,r.kt)("td",null,i.Hl),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://github.com/Drill4J/java-agent/releases/tag/v"+i.Hl}," Release "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/agents/test-agent"},"Test Agent")),(0,r.kt)("td",null,i._2),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://github.com/Drill4J/autotest-agent/releases/tag/v"+i._2}," Release "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/cicd-integration/cicd-integration-plugin"},"CI/CD Integration Plugin (Maven/Gradle)")),(0,r.kt)("td",null,i.ns),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://central.sonatype.com/artifact/com.epam.drill.integration.cicd/com.epam.drill.integration.cicd.gradle.plugin/versions"},"Gradle Plugin"),(0,r.kt)("br",null),(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://central.sonatype.com/artifact/com.epam.drill.integration/drill-maven-plugin"},"Maven Plugin"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/drill-services/drill-backend"},"Drill4J Backend")),(0,r.kt)("td",null,i.lv),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://github.com/Drill4J/admin/pkgs/container/admin/versions"},"Github Container Registry"),(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/drill-services/drill-ui"},"Drill4J UI")),(0,r.kt)("td",null,i.ui),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://github.com/Drill4J/drill4j-ui/pkgs/container/drill4j-ui/versions"},"Github Container Registry"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/getting-started/metabase"},"Metabase dashboards")),(0,r.kt)("td",null,i.mR),(0,r.kt)("td",null,(0,r.kt)("a",{style:{fontSize:"14px"},href:"https://github.com/Drill4J/drill-metabase-dashboards/releases/tag/"+i.mR},"Release"))))),(0,r.kt)("h2",{id:"releases"},"Releases"),(0,r.kt)("h3",{id:"minor-release-4"},"Minor Release 4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New Versions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Agent ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/java-agent/releases/tag/v0.9.4"},"0.9.4")),(0,r.kt)("li",{parentName:"ul"},"Test Agent ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/autotest-agent/releases/tag/v0.23.3"},"0.23.3")),(0,r.kt)("li",{parentName:"ul"},"CI/CD Integration Plguin 0.1.6 (",(0,r.kt)("a",{parentName:"li",href:"https://central.sonatype.com/artifact/com.epam.drill.integration/drill-maven-plugin"},"Maven"),", ",(0,r.kt)("a",{parentName:"li",href:"https://central.sonatype.com/artifact/com.epam.drill.integration.cicd/com.epam.drill.integration.cicd.gradle.plugin/versions"},"Gradle"),")"),(0,r.kt)("li",{parentName:"ul"},"Drill4J Backend ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/admin/pkgs/container/admin/298908511?tag=0.9.3"},"0.9.3")),(0,r.kt)("li",{parentName:"ul"},"Metabase Dashboards ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/drill-metabase-dashboards/releases/tag/v20"},"v20"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PostgreSQL is updated to version 17")),(0,r.kt)("h3",{id:"minor-release-3"},"Minor Release 3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New Versions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Agent 0.9.3"),(0,r.kt)("li",{parentName:"ul"},"CI/CD Integration Plguin 0.1.3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changelog"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Application Agent - fixed Java 21 support issue associated with outdated ASM library"),(0,r.kt)("li",{parentName:"ol"},"CI/CD Integration Plugin - allow setting GH_USER_TOKEN to increase download limits (affects Testing Agent and Application agent).\nRefer to corresponding docs page for more information ",(0,r.kt)("a",{parentName:"li",href:"https://drill4j.github.io/docs/cicd-integration/cicd-integration-plugin"},"https://drill4j.github.io/docs/cicd-integration/cicd-integration-plugin"))),(0,r.kt)("h3",{id:"minor-release-2"},"Minor Release 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New Versions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin Backend 0.9.1"),(0,r.kt)("li",{parentName:"ul"},"Application Agent 0.9.2"),(0,r.kt)("li",{parentName:"ul"},"Test Agent 0.23.2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breaking Changes:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Application Agent: The ",(0,r.kt)("inlineCode",{parentName:"li"},"classScanDelay")," parameter has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"scanClassDelay"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changelog:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Application Agent & Test Agent"),": Fixed issues related to unit test support."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Test Agent"),": Resolved a bug affecting Selenium 4 support."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Admin Backend"),": Updated DB schema for storing test results. Users can expect migrations to run automatically without any manual intervention."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Documentation"),": See updates below.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New Documentation")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"WildFly Integration Guide ",(0,r.kt)("a",{parentName:"li",href:"https://drill4j.github.io/docs/guides/wildfly"},"https://drill4j.github.io/docs/guides/wildfly")),(0,r.kt)("li",{parentName:"ol"},"Tomcat Integration Guide ",(0,r.kt)("a",{parentName:"li",href:"https://drill4j.github.io/docs/guides/tomcat"},"https://drill4j.github.io/docs/guides/tomcat")),(0,r.kt)("li",{parentName:"ol"},"Github Integration Guide\n",(0,r.kt)("a",{parentName:"li",href:"https://drill4j.github.io/docs/cicd-integration/github"},"https://drill4j.github.io/docs/cicd-integration/github"),"   ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: The GitHub integration guide assumes Drill4J core services are deployed, configured, and ready to accept data. Complementary documentation is currently being written."))))),(0,r.kt)("h3",{id:"minor-release-1"},"Minor Release 1"),(0,r.kt)("p",null,"Bugfix release"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New component versions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Agent: 0.9.1"),(0,r.kt)("li",{parentName:"ul"},"Test Agent: 0.23.1"),(0,r.kt)("li",{parentName:"ul"},"CI/CD Integration Plugin: 0.1.1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changelist")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Breaking Change"),": Renamed agent parameters from ",(0,r.kt)("inlineCode",{parentName:"p"},"drillApiUrl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"drillApiKey")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"apiUrl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fixed Issue: NPE crash when ",(0,r.kt)("inlineCode",{parentName:"p"},"-agentpath:<path-to-agent>")," lacks ",(0,r.kt)("inlineCode",{parentName:"p"},"<options>"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Realworld Demo - updated to work on Linux (addressed ",(0,r.kt)("inlineCode",{parentName:"p"},'unknown host "host.docker.internal"')," error) and use new parameter names (Pull fresh version for latest fixes)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Updated Documentation: Reflects parameter name changes and newly released versions. "))),(0,r.kt)("p",null,"As there are breaking changes associated with this release, make sure to update your configuration files accordingly."),(0,r.kt)("h3",{id:"release-090"},"Release 0.9.0"),(0,r.kt)("p",null,"Drill4J version 0.9.0 is out! \ud83d\ude80"),(0,r.kt)("p",null,"The release and documentation are still a work in progress, and breaking changes may occur. We'll be making updates and fixing bugs in the coming weeks.\nYou can let us know if you run into any problems using GitHub Issues (see the link below)."),(0,r.kt)("p",null,"\u2757 We're dropping support for older versions (0.8.0-alpha and prior). Please consider using latest releases \u2757"),(0,r.kt)("p",null,"Links:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Release 0.9.0 documentation\n",(0,r.kt)("a",{parentName:"li",href:"https://drill4j.github.io/docs/what-is-drill4j"},"https://drill4j.github.io/docs/what-is-drill4j")),(0,r.kt)("li",{parentName:"ol"},"Demo\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/realworld-demo"},"https://github.com/Drill4J/realworld-demo")),(0,r.kt)("li",{parentName:"ol"},"Issues tracker\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Drill4J/drill4j/issues"},"https://github.com/Drill4J/drill4j/issues"))))}d.isMDXComponent=!0},2911:function(e){"use strict";e.exports=JSON.parse('{"Hl":"0.9.4","_2":"0.23.3","ns":"0.1.6","lv":"0.9.3","ui":"0.1.1","mR":"v20"}')}}]);