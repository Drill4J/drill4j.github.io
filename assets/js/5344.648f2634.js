(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[5344],{5344:function(e,t,l){"use strict";l.r(t),l.d(t,{diagram:function(){return p}});var n=l(41),o=l(2271),a=l(7058),i=l(2561),s=l(6647),r=l(3125);l(7856),l(7484),l(8211),l(1089),l(1898),l(7967);const d=e=>i.e.sanitizeText(e,(0,i.g)());let c={dividerMargin:10,padding:5,textHeight:10,curve:void 0};function g(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){c={...c,...e}},draw:function(e,t,l,n){i.l.info("Drawing class - ",t);const b=(0,i.g)().flowchart??(0,i.g)().class,p=(0,i.g)().securityLevel;i.l.info("config:",b);const u=(null==b?void 0:b.nodeSpacing)??50,f=(null==b?void 0:b.rankSpacing)??50,y=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:u,ranksep:f,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getClasses(),v=n.db.getRelations(),w=n.db.getNotes();let x;i.l.info(v),function(e,t,l,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.forEach((function(l){var o,a;const s=e[l];let r="";s.cssClasses.length>0&&(r=r+" "+s.cssClasses.join(" "));const c="",g="",b=s.label??s.id,p={labelStyle:c,shape:"class_box",labelText:d(b),classData:s,rx:0,ry:0,class:r,style:g,id:s.id,domId:s.domId,tooltip:n.db.getTooltip(s.id)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(o=(0,i.g)().flowchart)?void 0:o.padding)??(null==(a=(0,i.g)().class)?void 0:a.padding)};t.setNode(s.id,p),i.l.info("setNode",p)}))}(h,y,0,n),function(e,t){const l=(0,i.g)().flowchart;let n=0;e.forEach((function(e){var a;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:g(e.relation.type1),arrowTypeEnd:g(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.o)(null==l?void 0:l.curve,o.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,r.n)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(a=(0,i.g)().flowchart)?void 0:a.htmlLabels)??(0,i.g)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(v,y),function(e,t,l,n){i.l.info(e),e.forEach((function(e,a){var s,g;const b=e,p="",u="",f=b.text,y={labelStyle:p,shape:"note",labelText:d(f),noteData:b,rx:0,ry:0,class:"",style:u,id:b.id,domId:b.id,tooltip:"",type:"note",padding:(null==(s=(0,i.g)().flowchart)?void 0:s.padding)??(null==(g=(0,i.g)().class)?void 0:g.padding)};if(t.setNode(b.id,y),i.l.info("setNode",y),!b.class||!(b.class in n))return;const h=l+a,v={id:`edgeNote${h}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.o)(c.curve,o.c_6)};t.setEdge(b.id,b.class,v,h)}))}(w,y,v.length+1,h),"sandbox"===p&&(x=(0,o.Ys)("#i"+t));const k="sandbox"===p?(0,o.Ys)(x.nodes()[0].contentDocument.body):(0,o.Ys)("body"),m=k.select(`[id="${t}"]`),T=k.select("#"+t+" g");if((0,s.r)(T,y,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),r.u.insertTitle(m,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,n.db.getDiagramTitle()),(0,r.s)(y,m,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===p?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},p={parser:n.p,db:n.d,renderer:b,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);