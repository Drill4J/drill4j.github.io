(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[503],{9745:function(e,t,a){"use strict";var n,r=a(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.Z=function(e){var t=e.title,a=e.titleId,o=i(e,["title","titleId"]);return r.createElement("svg",l({width:24,height:17,viewBox:"0 0 24 17",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,n||(n=r.createElement("path",{d:"M13.582 7.837h2.486v-2.29h-2.486v2.29zm-2.959 0h2.486v-2.29h-2.486v2.29zm-2.9 0h2.486v-2.29H7.723v2.29zm-2.9 0h2.426v-2.29H4.822v2.29zm-2.96 0h2.486v-2.29H1.863v2.29zm2.96-2.773h2.426V2.773H4.822v2.29zm2.9 0h2.486V2.773H7.723v2.29zm2.9 0h2.486V2.773h-2.486v2.29zm0-2.773h2.486V0h-2.486v2.29zM24 6.812s-1.065-1.025-3.256-.663c-.236-1.748-2.071-2.773-2.071-2.773s-1.717 2.11-.474 4.46c-.355.182-.947.423-1.835.423H.087C-.209 9.404-.209 17 7.96 17c5.86 0 10.24-2.773 12.312-7.837C23.349 9.404 24 6.813 24 6.813z"})))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8501:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return v}});var n=a(2122),r=a(9756),l=a(7294),i=a(3905),o=a(549),s=a(9745),m=a(944),d=a(6010),p="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,h=39;var g=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,i=e.groupId,o=e.className,s=(0,m.Z)(),g=s.tabGroupChoices,f=s.setTabGroupChoices,b=(0,l.useState)(n),k=b[0],v=b[1],N=l.Children.toArray(e.children),y=[];if(null!=i){var x=g[i];null!=x&&x!==k&&r.some((function(e){return e.value===x}))&&v(x)}var T=function(e){var t=e.currentTarget,a=y.indexOf(t),n=r[a].value;v(n),null!=i&&(f(i,n),setTimeout((function(){var e,a,n,r,l,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&l<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},I=function(e){var t,a;switch(e.keyCode){case h:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case c:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":a},o)},r.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:I,onFocus:T,onClick:T},a)}))),t?(0,l.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))};var f=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},b={id:"examples",title:"Usage examples"},k={unversionedId:"examples",id:"examples",isDocsHomePage:!1,title:"Usage examples",description:"Important! All imports must be at the beginning of the file.",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/docs/examples",version:"current",frontMatter:{id:"examples",title:"Usage examples"}},v=[{value:"Buttons",id:"buttons",children:[{value:"Simple buttons",id:"simple-buttons",children:[]},{value:"Button with icon",id:"button-with-icon",children:[]},{value:"Button with fixed width",id:"button-with-fixed-width",children:[]}]},{value:"Table",id:"table",children:[{value:"Automatically generated column width",id:"automatically-generated-column-width",children:[]},{value:"Fixed column width",id:"fixed-column-width",children:[]}]},{value:"Addition information",id:"addition-information",children:[]},{value:"Info",id:"info",children:[]},{value:"Warning",id:"warning",children:[]},{value:"Image",id:"image",children:[]},{value:"Card",id:"card",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Code block",id:"code-block",children:[]},{value:"Expand/collapse area",id:"expandcollapse-area",children:[]},{value:"Badge",id:"badge",children:[]}],N={toc:v};function y(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Ie,{mdxType:"NoIndex"}),(0,i.kt)(o.v3,{mdxType:"Warning"},"Important! All imports must be at the beginning of the file."),(0,i.kt)("h2",{id:"buttons"},"Buttons"),(0,i.kt)("h3",{id:"simple-buttons"},"Simple buttons"),(0,i.kt)("a",{href:"/",className:"button-primary"},"Primary"),(0,i.kt)("a",{href:"/",className:"button-secondary"},"Secondary"),(0,i.kt)("a",{href:"/",className:"button-ghost"},"Secondary Ghost"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<a href="/" className="button-primary">Primary</a>\n<a href="/" className="button-secondary">Secondary</a>\n<a href="/" className="button-ghost">Secondary Ghost</a>\n')),(0,i.kt)("h3",{id:"button-with-icon"},"Button with icon"),(0,i.kt)("a",{href:"/",className:"button-ghost"},(0,i.kt)(s.Z,{mdxType:"DockerIcon"}),"With Docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import DockerIcon from \'@static/img/docker-logo.svg\';\n\n<a href="/" className="button-ghost"><DockerIcon/>With Docker</a>\n')),(0,i.kt)("h3",{id:"button-with-fixed-width"},"Button with fixed width"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/width"},"Utility classes for setting the width of an element")),(0,i.kt)("a",{href:"/",className:"button-primary w-24"},"Primary"),(0,i.kt)("a",{href:"/",className:"button-primary",style:{width:"96px"}},"Primary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<a href="/" className="button-primary w-24">Primary</a> //preferred way\n<a href="/" className="button-primary" style={{width: \'96px\'}}>Primary</a>\n')),(0,i.kt)("h2",{id:"table"},"Table"),(0,i.kt)("h3",{id:"automatically-generated-column-width"},"Automatically generated column width"),(0,i.kt)(o.iA,{mdxType:"Table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DRILL_HTTP_HOOK_ENABLED drill.http.hook.enabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},"It can be true/false. By default = true."),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DRILL_AGENT_CONFIG_PATH"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The file stores the config file"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"},"a relative or absolute path, for example:  configFile.properties"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Table } from '@components';\n\n<Table>\n\n|                    Parameter                    |                       Description                      | Required |                         Example / Format                         |\n|:----------------------------------------------- |:------------------------------------------------------ |:-------- |:---------------------------------------------------------------- |\n| DRILL_HTTP_HOOK_ENABLED drill.http.hook.enabled | It can be true/false. By default = true.               | no       |                                                                  |\n| DRILL_AGENT_CONFIG_PATH                         | The file stores the config file                        | no       | a relative or absolute path, for example:  configFile.properties |\n\n</Table>\n")),(0,i.kt)("h3",{id:"fixed-column-width"},"Fixed column width"),(0,i.kt)(o.iA,{columns:["250px","270px","80px","250px"],mdxType:"Table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example / Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DRILL_HTTP_HOOK_ENABLED drill.http.hook.enabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},"It can be true/false. By default = true."),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DRILL_AGENT_CONFIG_PATH"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The file stores the config file"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"},"a relative or absolute path, for example:  configFile.properties"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Table } from '@components';\n\n<Table columns={['250px', '270px', '80px', '250px']}>\n\n|                    Parameter                    |                       Description                      | Required |                         Example / Format                         |\n|:----------------------------------------------- |:------------------------------------------------------ |:-------- |:---------------------------------------------------------------- |\n| DRILL_HTTP_HOOK_ENABLED drill.http.hook.enabled | It can be true/false. By default = true.               | no       |                                                                  |\n| DRILL_AGENT_CONFIG_PATH                         | The file stores the config file                        | no       | a relative or absolute path, for example:  configFile.properties |\n\n</Table>\n")),(0,i.kt)("h2",{id:"addition-information"},"Addition information"),(0,i.kt)(o.r0,{mdxType:"AdditionalInformation"},(0,i.kt)("p",null,"Pay attention that work on JavaScript agent is still in progress, but we are pleased to provide you with the opportunity to try it out.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AdditionalInformation } from '@components';\n<AdditionalInformation>\n\nPay attention that work on JavaScript agent is still in progress, but we are pleased to provide you with the opportunity to try it out.\n\n</AdditionalInformation>\n")),(0,i.kt)("h2",{id:"info"},"Info"),(0,i.kt)(o.kI,{mdxType:"Info"},"At that point, Test2Code plugin dashboard should be available in the Admin Panel. Check that methods table reflects actual packages, classes and methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Info } from '@components';\n\n<Info>\nAt that point, Test2Code plugin dashboard should be available in the Admin Panel. Check that methods table reflects actual packages, classes and methods.\n</Info>\n")),(0,i.kt)("h2",{id:"warning"},"Warning"),(0,i.kt)(o.v3,{mdxType:"Warning"},'Important! Don\'t forget to set target host "http://localhost:8080/" on the 2nd step for Node.js agent. It\u2019s necessary to collect manual coverage via extension.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Warning } from '@components';\n\n<Warning>\n    Important! Don't forget to set target host \"http://localhost:8080/\" on the 2nd step for Node.js agent. It\u2019s necessary to collect manual coverage via extension.\n</Warning>\n")),(0,i.kt)("h2",{id:"image"},"Image"),(0,i.kt)(o.Ee,{src:"/img/enabled-plugin.png",mdxType:"Image"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Image } from '@components';\n\n<Image src=\"/img/enabled-plugin.png\" />\n")),(0,i.kt)("h2",{id:"card"},"Card"),(0,i.kt)(o.Zb,{href:"/",iconSrc:"/img/javascript-logo.svg",mdxType:"Card"},"JavaScript Agent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Card } from \'@components\';\n\n<Card href="/" iconSrc="/img/javascript-logo.svg">JavaScript Agent</Card>\n')),(0,i.kt)("h2",{id:"tabs"},"Tabs"),(0,i.kt)(g,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,i.kt)(f,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(f,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(f,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),(0,i.kt)("h2",{id:"code-block"},"Code block"),(0,i.kt)("p",null,"You can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a title to the code block by adding ",(0,i.kt)("strong",{parentName:"li"},"title")," key after the language (leave a space between them)."),(0,i.kt)("li",{parentName:"ol"},"Bring emphasis to certain lines of code by specifying line ranges after the language meta string (leave a space after the language).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js",{2}',title:'"/src/components/HelloCodeTitle.js",{2}'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```jsx title="/src/components/HelloCodeTitle.js",{2}\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,i.kt)("h2",{id:"expandcollapse-area"},"Expand/collapse area"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click here to see more"),"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur ducimus, error esse facilis laudantium libero nisi quas ratione repudiandae sequi similique voluptates! Fugiat in natus odit officiis sint!20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<details>\n    <summary>Click here to see more</summary>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequatur ducimus, error esse facilis laudantium libero nisi quas ratione repudiandae sequi similique voluptates! Fugiat in natus odit officiis sint!20\n</details>\n")),(0,i.kt)("h2",{id:"badge"},"Badge"),(0,i.kt)(o.Ct,{mdxType:"Badge"},"Title"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Badge } from '@components';\n\n<Badge>Title</Badge>\n")))}y.isMDXComponent=!0}}]);