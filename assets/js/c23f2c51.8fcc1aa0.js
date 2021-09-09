(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[479],{9418:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),l=t(549),i={id:"autotest-agent",title:"Autotest Agent"},s={unversionedId:"installation/autotest-agent",id:"installation/autotest-agent",isDocsHomePage:!1,title:"Autotest Agent",description:"To use Drill Test2Code plugin with autotests (RESTful API and Selenium-based UI *)",source:"@site/docs/installation/autotest-agent.mdx",sourceDirName:"installation",slug:"/installation/autotest-agent",permalink:"/docs/installation/autotest-agent",version:"current",frontMatter:{id:"autotest-agent",title:"Autotest Agent"},sidebar:"docs",previous:{title:"Microservices",permalink:"/docs/installation/microservices"},next:{title:"Chrome Browser Extension",permalink:"/docs/installation/extension"}},p=[{value:"Gradle",id:"gradle",children:[]},{value:"Maven",id:"maven",children:[]},{value:"Notes",id:"notes",children:[]}],u={toc:p};function d(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use Drill ",(0,o.kt)("strong",{parentName:"p"},"Test2Code plugin")," with autotests (RESTful API and Selenium-based UI ",(0,o.kt)("a",{parentName:"p",href:"#notes"},"*"),")\nadd a special autotest agent to your test automation framework."),(0,o.kt)("p",null,"Supported test runners: ",(0,o.kt)("br",null)),(0,o.kt)("p",null," \u25cf   ",(0,o.kt)("strong",{parentName:"p"},"junit4")," ",(0,o.kt)("br",null),"\n\u25cf   ",(0,o.kt)("strong",{parentName:"p"},"junit5")," ",(0,o.kt)("br",null),"\n\u25cf   ",(0,o.kt)("strong",{parentName:"p"},"testNG")," ",(0,o.kt)("br",null),"\n\u25cf   ",(0,o.kt)("strong",{parentName:"p"},"cucumber")," ",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"Add the following lines to your project ",(0,o.kt)("strong",{parentName:"p"},"settings.gradle"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'pluginManagement {\n    repositories {\n        maven { url "https://drill4j.jfrog.io/artifactory/drill" }\n    }\n}\n')),(0,o.kt)("p",null,"Add the following lines to your project ",(0,o.kt)("strong",{parentName:"p"},"build.gradle"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"plugins {\n    id 'java'\n    id 'com.epam.drill.agent.runner.autotest' version '0.2.3'\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'drill {\n    version = "0.16.2"\n    adminHost = "localhost"\n    agentId = "ExampleAgentId"\n    adminPort = 8090\n}\n')),(0,o.kt)("h2",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Add the following lines to your project ",(0,o.kt)("strong",{parentName:"p"},"POM"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<pluginRepositories>\n    <pluginRepository>\n        <id>drill</id>\n        <url>https://drill4j.jfrog.io/artifactory/drill</url>\n    </pluginRepository>\n</pluginRepositories>\n<build>\n    <plugins>\n        <plugin>\n            <groupId>com.epam.drill.agent.runner</groupId>\n            <artifactId>maven</artifactId>\n            <version>0.2.3</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>autotest</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <drill>\n                    <version>0.16.2</version>\n                    <agentId>ExampleAgentId</agentId>\n                    <adminHost>localhost</adminHost>\n                    <adminPort>8090</adminPort>\n                </drill>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Surefire")," plugin add args to the main properties block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<properties>\n    <extraArgs>${argLine}</extraArgs> // expose to surfire if needed\n</properties>\n")),(0,o.kt)("p",null,"and add to ",(0,o.kt)("strong",{parentName:"p"},"Surefire")," plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<argLine>-Dfile.encoding=UTF-8 ${extraArgs}</argLine>\n")),(0,o.kt)("p",null,"or set Drill ",(0,o.kt)("strong",{parentName:"p"},"profile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<profile>\n    <id>drill</id>\n    <activation>\n        <activeByDefault>false</activeByDefault>\n        <property>\n            <name>env</name>\n            <value>dev</value>\n        </property>\n    </activation>\n    <pluginRepositories>\n        <pluginRepository>\n            <id>drill</id>\n            <url>https://drill4j.jfrog.io/artifactory/drill</url>\n        </pluginRepository>\n    </pluginRepositories>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.epam.drill.agent.runner</groupId>\n                <artifactId>maven</artifactId>\n                <version>0.2.3</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>autotest</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <drill>\n                        <version>0.16.2</version>\n                        <agentId>ExampleAgentId</agentId>\n                        <adminHost>localhost</adminHost>\n                        <adminPort>8090</adminPort>\n                        <logLevel>TRACE</logLevel>\n                        <logFile>drillLog.log</logFile>\n                    </drill>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n    <properties>\n        <extraArgs>${argLine}</extraArgs> // expose to surfire if needed\n    </properties>\n</profile>\n")),(0,o.kt)("p",null,"run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"-P drill\n")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)(l.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,o.kt)("p",null,"If you use the ",(0,o.kt)("strong",{parentName:"p"},"remote")," setup for UI autotests run (Selenium GRID, SELENOID and etc.), you need to deploy proxy service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"browser-proxy:\n    image: drill4j/browser-proxy:0.2.0\n    ports:\n      - 7777:7777\n")),(0,o.kt)("p",null,"and add additional param ",(0,o.kt)("strong",{parentName:"p"},"browserProxyAddress")," to autotests agent config:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gradle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'drill {\n    additionalParams = ["browserProxyAddress" : "proxyHost:7777"]\n    version = "0.16.2"\n    adminHost = "localhost"\n    agentId = "ExampleAgentId"\n    adminPort = 8090\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Maven")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<configuration>\n    <drill>\n        <additionalParams>\n            <browserProxyAddress>proxyHost:7777</browserProxyAddress>\n        </additionalParams>\n        <version>0.16.2</version>\n        <agentId>ExampleAgentId</agentId>\n        <adminHost>localhost</adminHost>\n        <adminPort>8090</adminPort>\n    </drill>\n</configuration>\n"))))}d.isMDXComponent=!0}}]);