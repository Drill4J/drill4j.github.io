(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[793],{4573:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return g},default:function(){return p}});var t=n(2122),s=n(9756),i=(n(7294),n(3905)),l=n(6933),o={id:"java-coverage-receiving-event-flow",title:"Coverage Collection Event Flow"},r={unversionedId:"for-development/java-agent/java-coverage-receiving-event-flow",id:"for-development/java-agent/java-coverage-receiving-event-flow",isDocsHomePage:!1,title:"Coverage Collection Event Flow",description:"Description",source:"@site/docs/for-development/java-agent/java-coverage-receiving-event-flow.mdx",sourceDirName:"for-development/java-agent",slug:"/for-development/java-agent/java-coverage-receiving-event-flow",permalink:"/docs/for-development/java-agent/java-coverage-receiving-event-flow",version:"current",frontMatter:{id:"java-coverage-receiving-event-flow",title:"Coverage Collection Event Flow"},sidebar:"docs",previous:{title:"Launch Parameters",permalink:"/docs/configuration/launch-parameters"},next:{title:"Switch Scope Event Flow",permalink:"/docs/for-development/java-agent/java-switch-scope-event-flow"}},g=[{value:"Description",id:"description",children:[]},{value:"Details",id:"details",children:[{value:"Precondition",id:"precondition",children:[]},{value:"Flow",id:"flow",children:[]},{value:"Sequence Diagram",id:"sequence-diagram",children:[]},{value:"Exception (Step 8)",id:"exception-step-8",children:[]}]},{value:"API",id:"api",children:[{value:"Agent&#39;s Plugin Part (Incoming Messages):",id:"agents-plugin-part-incoming-messages",children:[]},{value:"Agent&#39;s Plugin Part (Outgoing Messages):",id:"agents-plugin-part-outgoing-messages",children:[]},{value:"Admin&#39;s Plugin Part (Incoming\xa0Messages from Admin):",id:"admins-plugin-part-incoming-messages-from-admin",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Agent Incoming\xa0Messages",id:"agent-incoming-messages",children:[]},{value:"Agent Outgoing Messages",id:"agent-outgoing-messages",children:[]}]}],d={toc:g};function p(e){var a=e.components,n=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only for ",(0,i.kt)("strong",{parentName:"p"},"Java")," agent!"))),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("h3",{id:"precondition"},"Precondition"),(0,i.kt)("p",null,"An Agent has established a connection with the Drill Admin and Agent has been registered."),(0,i.kt)("h3",{id:"flow"},"Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User executes HTTP request to start a session."),(0,i.kt)("li",{parentName:"ol"},"Admin does an action\xa0",(0,i.kt)("strong",{parentName:"li"},"StartNewSession"),"."),(0,i.kt)("li",{parentName:"ol"},"Admin's plugin part starts the session on its side and sends\xa0",(0,i.kt)("strong",{parentName:"li"},"StartAgentSession")," to the agent's plugin part."),(0,i.kt)("li",{parentName:"ol"},"Probes collection is started. Agent's plugin part responds\xa0",(0,i.kt)("strong",{parentName:"li"},"SessionStarted")," to admin's plugin part."),(0,i.kt)("li",{parentName:"ol"},"Agent's plugin part collect ",(0,i.kt)("strong",{parentName:"li"},"ExecClassData")," and\xa0sends ",(0,i.kt)("strong",{parentName:"li"},"\u0421overDataPart"),"\xa0in chunks max. 65535 objects every 2 seconds to the admin's plugin part.",(0,i.kt)(l.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},"Probes\xa0are sent only for the affected classes")),(0,i.kt)("li",{parentName:"ol"},"If\xa0the started session has real-time enabled:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"agent's plugin part sends ",(0,i.kt)("strong",{parentName:"li"},"SessionChanged")," to the admin's plugin part."),(0,i.kt)("li",{parentName:"ul"},"admin's plugin part recalculates coverage."))),(0,i.kt)("li",{parentName:"ol"},"User executes HTTP request to stop session."),(0,i.kt)("li",{parentName:"ol"},"Admin does an action\xa0",(0,i.kt)("strong",{parentName:"li"},"StopSession"),"."),(0,i.kt)("li",{parentName:"ol"},"Admin's plugin part sends\xa0",(0,i.kt)("strong",{parentName:"li"},"StopAgentSession")," to agent's plugin part."),(0,i.kt)("li",{parentName:"ol"},"Repetition of the 5th point and finishes collecting probes."),(0,i.kt)("li",{parentName:"ol"},"Agent's plugin part sends\xa0",(0,i.kt)("strong",{parentName:"li"},"SessionsFinished")," to admin's plugin part."),(0,i.kt)("li",{parentName:"ol"},"Admin's plugin part recalculates coverage and finishes session on its side.")),(0,i.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,i.kt)(l.Ee,{src:"/img/for-development/coverage-receiving-sequence.png",mdxType:"Image"}),(0,i.kt)("h3",{id:"exception-step-8"},"Exception (Step 8)"),(0,i.kt)("p",null,"If ",(0,i.kt)("strong",{parentName:"p"},"CancelSession")," is received instead of ",(0,i.kt)("strong",{parentName:"p"},"StopSession"),"\xa0flow is changed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Admin's plugin part cancels session on its side and sends ",(0,i.kt)("strong",{parentName:"li"},"CancelAgentSession")," to agent's plugin part."),(0,i.kt)("li",{parentName:"ol"},"Probes collection is finished. Agent's plugin part responds ",(0,i.kt)("strong",{parentName:"li"},"SessionCancelled"),"\xa0to admin's plugin part.")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"agents-plugin-part-incoming-messages"},"Agent's Plugin Part (Incoming Messages):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Serializable\n@SerialName("START_AGENT_SESSION")\ndata class StartAgentSession(val payload: StartSessionPayload) : AgentAction()\n\n@Serializable\n@SerialName("ADD_SESSION_DATA")\ndata class AddAgentSessionData(val payload: AgentSessionDataPayload) : AgentAction()\n\n@SerialName("STOP")\n@Serializable\ndata class StopAgentSession(val payload: AgentSessionPayload) : AgentAction()\n\n@SerialName("STOP_ALL")\n@Serializable\nobject StopAllAgentSessions : AgentAction()\n\n@SerialName("CANCEL")\n@Serializable\ndata class CancelAgentSession(val payload: AgentSessionPayload) : AgentAction()\n\n@SerialName("CANCEL_ALL")\n@Serializable\nobject CancelAllAgentSessions : AgentAction()\n\n@Serializable\ndata class StartSessionPayload(\n    val sessionId: String,\n    val testType: String,\n    val testName: String?,\n    val isRealtime: Boolean,\n    val isGlobal: Boolean\n)\n@Serializable\ndata class AgentSessionPayload(\n    val sessionId: String\n)\n\n@Serializable\ndata class AgentSessionDataPayload(val sessionId: String, val data: String)\n')),(0,i.kt)("h3",{id:"agents-plugin-part-outgoing-messages"},"Agent's Plugin Part (Outgoing Messages):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@SerialName("SESSION_STARTED")\n@Serializable\ndata class SessionStarted(\n    val sessionId: String,\n    val testType: String,\n    val isRealtime: Boolean = false,\n    val ts: Long\n) : CoverMessage()\n\n@SerialName("SESSION_CANCELLED")\n@Serializable\ndata class SessionCancelled(val sessionId: String, val ts: Long) : CoverMessage()\n\n@SerialName("SESSIONS_CANCELLED")\n@Serializable\ndata class SessionsCancelled(val ids: List<String>, val ts: Long) : CoverMessage()\n\n@SerialName("COVERAGE_DATA_PART")\n@Serializable\ndata class CoverDataPart(val sessionId: String, val data: List<ExecClassData>) : CoverMessage()\n\n@SerialName("SESSION_CHANGED")\n@Serializable\ndata class SessionChanged(val sessionId: String, val probeCount: Int) : CoverMessage()\n\n@SerialName("SESSION_FINISHED")\n@Serializable\ndata class SessionFinished(val sessionId: String, val ts: Long) : CoverMessage()\n\n@SerialName("SESSIONS_FINISHED")\n@Serializable\ndata class SessionsFinished(val ids: List<String>, val ts: Long) : CoverMessage()\n')),(0,i.kt)("h3",{id:"admins-plugin-part-incoming-messages-from-admin"},"Admin's Plugin Part (Incoming\xa0Messages from Admin):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n@SerialName("START")\n@Serializable\ndata class StartNewSession(val payload: StartPayload) : Action()\n\n@SerialName("CANCEL")\n@Serializable\ndata class CancelSession(val payload: SessionPayload) : Action()\n\n@SerialName("CANCEL_ALL")\n@Serializable\nobject CancelAllSessions : Action()\n\n@SerialName("STOP")\n@Serializable\ndata class StopSession(val payload: StopSessionPayload) : Action()\n\n@SerialName("STOP_ALL")\n@Serializable\nobject StopAllSessions : Action()\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"agent-incoming-messages"},"Agent Incoming\xa0Messages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  "type":"START_AGENT_SESSION",\n  "payload":{\n    "sessionId": "some-id",\n    "testType":"Manual or Auto or custom",\n    "testName":"some-name",\n    "isRealtime": "true or false",\n    "isGlobal":"true or false"\n  }\n}\n\n{\n  "type":"STOP",\n  "payload":{\n    "sessionId": "some-id"\n  }\n}\n')),(0,i.kt)("h3",{id:"agent-outgoing-messages"},"Agent Outgoing Messages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  "type":"SESSION_STARTED",\n  "sessionId":"session-id",\n  "testType":"manual or auto",\n  "isRealtime":"true or false",\n  "ts":"start time"\n}\n\n{\n  "type":"SCOPE_INITIALIZED",\n  "id":"session-id",\n  "name":"scope-name",\n  "prevId":"some-id",\n  "ts":"start time"\n}\n\n{\n  "type":"INITIALIZED",\n  "msg":"Initialized"\n}\n')))}p.isMDXComponent=!0}}]);