(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60],{8014:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return r},default:function(){return p}});var t=n(2122),i=n(9756),o=(n(7294),n(3905)),l=n(5222),s={id:"java-switch-scope-event-flow",title:"Switch Scope Event Flow"},c={unversionedId:"for-development/java-agent/java-switch-scope-event-flow",id:"for-development/java-agent/java-switch-scope-event-flow",isDocsHomePage:!1,title:"Switch Scope Event Flow",description:"Description",source:"@site/docs/for-development/java-agent/java-switch-scope-event-flow.mdx",sourceDirName:"for-development/java-agent",slug:"/for-development/java-agent/java-switch-scope-event-flow",permalink:"/docs/for-development/java-agent/java-switch-scope-event-flow",version:"current",frontMatter:{id:"java-switch-scope-event-flow",title:"Switch Scope Event Flow"},sidebar:"docs",previous:{title:"Coverage Receiving Event Flow",permalink:"/docs/for-development/java-agent/java-coverage-receiving-event-flow"},next:{title:"JS Agent / Admin Backend Communication",permalink:"/docs/for-development/java-script-agent/js-agent-admin-be-communication"}},r=[{value:"Description",id:"description",children:[]},{value:"Details",id:"details",children:[{value:"Precondition",id:"precondition",children:[]},{value:"Flow",id:"flow",children:[]},{value:"Sequence Diagram",id:"sequence-diagram",children:[]}]},{value:"API",id:"api",children:[{value:"Agent Incoming Messages:",id:"agent-incoming-messages",children:[]},{value:"Agent Outgoing Messages:",id:"agent-outgoing-messages",children:[]},{value:"Admin Incoming Messages:",id:"admin-incoming-messages",children:[]}]}],d={toc:r};function p(e){var a=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only for ",(0,o.kt)("strong",{parentName:"p"},"Java")," agent!"))),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("h3",{id:"precondition"},"Precondition"),(0,o.kt)("p",null,"An Agent has established a connection with the Drill Admin."),(0,o.kt)("h3",{id:"flow"},"Flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User executes HTTP request to finish/delete scope."),(0,o.kt)("li",{parentName:"ol"},"Admin does an action ",(0,o.kt)("strong",{parentName:"li"},"SwitchActiveScope"),"."),(0,o.kt)("li",{parentName:"ol"},"Admin's plugin part finish/delete scope and sends ",(0,o.kt)("strong",{parentName:"li"},"InitActiveScope")," to the Agent's plugin part."),(0,o.kt)("li",{parentName:"ol"},"Agent's plugin part responds ",(0,o.kt)("strong",{parentName:"li"},"ScopeInitialized")," to Admin's plugin part."),(0,o.kt)("li",{parentName:"ol"},"Admin initializes new scope and recalculates build coverage.")),(0,o.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,o.kt)(l.Ee,{src:"/img/for-development/switch-scope-sequence.png",mdxType:"Image"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"agent-incoming-messages"},"Agent Incoming Messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Serializable\n@SerialName("INIT_ACTIVE_SCOPE")\ndata class InitActiveScope(val payload: InitScopePayload) : AgentAction()\n\n@Serializable\ndata class InitScopePayload(\n    val id: String,\n    val name: String,\n    val prevId: String\n)\n\n')),(0,o.kt)("h3",{id:"agent-outgoing-messages"},"Agent Outgoing Messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@SerialName("SCOPE_INITIALIZED")\n@Serializable\ndata class ScopeInitialized(\n    val id: String,\n    val name: String,\n    val prevId: String,\n    val ts: Long\n) : CoverMessage()\n')),(0,o.kt)("h3",{id:"admin-incoming-messages"},"Admin Incoming Messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n\n@SerialName("SWITCH_ACTIVE_SCOPE")\n@Serializable\ndata class SwitchActiveScope(val payload: ActiveScopeChangePayload) : Action()\n\n@Serializable\ndata class ActiveScopeChangePayload(\n    val scopeName: String,\n    val savePrevScope: Boolean = false,\n    val prevScopeEnabled: Boolean = true,\n) : JvmSerializable\n')))}p.isMDXComponent=!0}}]);