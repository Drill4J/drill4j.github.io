(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[5031],{5031:function(t,e,r){"use strict";r.d(e,{a:function(){return c},b:function(){return B},c:function(){return h},d:function(){return Y},e:function(){return M},f:function(){return N},g:function(){return I},h:function(){return H},i:function(){return b},l:function(){return p},p:function(){return E},s:function(){return T},u:function(){return g}});var a=r(2561),n=r(2271),i=r(5279),s=r(3034),l=r(7049),d=r(3125);const o={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 12 20").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},c=(t,e,r,a)=>{e.forEach((e=>{o[e](t,r,a)}))};const h=(t,e,r,i)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,a.k)((0,a.g)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+l);return function(t){const e=(0,n.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=e.append("xhtml:div"),a=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return r.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+a+"</span>"),s=r,(l=t.labelStyle)&&s.attr("style",l),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,s.d)(l).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")})}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let a=[];a="string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[];for(const e of a){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},p=(t,e,r,l)=>{let d;const o=e.useHtmlLabels||(0,a.k)((0,a.g)().flowchart.htmlLabels);d=r||"node default";const c=t.insert("g").attr("class",d).attr("id",e.domId||e.id),p=c.insert("g").attr("class","label").attr("style",e.labelStyle);let g;g=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];const y=p.node();let u;u="markdown"===e.labelType?(0,i.c)(p,(0,a.b)((0,s.d)(g),(0,a.g)()),{useHtmlLabels:o,width:e.width||(0,a.g)().flowchart.wrappingWidth,classes:"markdown-node-label"}):y.appendChild(h((0,a.b)((0,s.d)(g),(0,a.g)()),e.labelStyle,!1,l));let f=u.getBBox();if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=u.children[0],e=(0,n.Ys)(u);f=t.getBoundingClientRect(),e.attr("width",f.width),e.attr("height",f.height)}const x=e.padding/2;return o?p.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):p.attr("transform","translate(0, "+-f.height/2+")"),e.centerLabel&&p.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),p.insert("rect",":first-child"),{shapeSvg:c,bbox:f,halfPadding:x,label:p}},g=(t,e)=>{const r=e.node().getBBox();t.width=r.width,t.height=r.height};function y(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function u(t,e,r,a){var n=t.x,i=t.y,s=n-a.x,l=i-a.y,d=Math.sqrt(e*e*l*l+r*r*s*s),o=Math.abs(e*r*s/d);a.x<n&&(o=-o);var c=Math.abs(e*r*l/d);return a.y<i&&(c=-c),{x:n+o,y:i+c}}function f(t,e,r,a){var n,i,s,l,d,o,c,h,p,g,y,u,f;if(n=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,p=n*r.x+s*r.y+d,g=n*a.x+s*a.y+d,!(0!==p&&0!==g&&x(p,g)||(i=a.y-r.y,l=r.x-a.x,o=a.x*r.y-r.x*a.y,c=i*t.x+l*t.y+o,h=i*e.x+l*e.y+o,0!==c&&0!==h&&x(c,h)||0==(y=n*l-i*s))))return u=Math.abs(y/2),{x:(f=s*o-l*d)<0?(f-u)/y:(f+u)/y,y:(f=i*d-n*o)<0?(f-u)/y:(f+u)/y}}function x(t,e){return t*e>0}const b=(t,e)=>{var r,a,n=t.x,i=t.y,s=e.x-n,l=e.y-i,d=t.width/2,o=t.height/2;return Math.abs(l)*d>Math.abs(s)*o?(l<0&&(o=-o),r=0===l?0:o*s/l,a=o):(s<0&&(d=-d),r=d,a=0===s?0:d*l/s),{x:n+r,y:i+a}},w={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return u(t,e,e,r)},ellipse:u,polygon:function(t,e,r){var a=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=a-t.width/2-s,o=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=f(t,r,{x:d+h.x,y:o+h.y},{x:d+p.x,y:o+p.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var a=t.x-r.x,n=t.y-r.y,i=Math.sqrt(a*a+n*n),s=e.x-r.x,l=e.y-r.y,d=Math.sqrt(s*s+l*l);return i<d?-1:i===d?0:1})),i[0]):t},rect:b},m=(t,e)=>{const{shapeSvg:r,bbox:n}=p(t,e,void 0,!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];a.l.info("Question main (Circle)");const l=y(r,i,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return a.l.warn("Intersect called"),w.polygon(e,s,t)},r};function k(t,e,r,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(a.l.debug("add top border"),s(r)):l(r),e.includes("r")?(a.l.debug("add right border"),s(n)):l(n),e.includes("b")?(a.l.debug("add bottom border"),s(r)):l(r),e.includes("l")?(a.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const L=(t,e,r)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===r&&(n=10,i=70);const s=a.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return g(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return w.rect(e,t)},a},v={rhombus:m,question:m,rect:(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=p(t,e,"node "+e.classes,!0),s=r.insert("rect",":first-child"),l=n.width+e.padding,d=n.height+e.padding;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return g(e,s),e.intersect=function(t){return w.rect(e,t)},r},labelRect:(t,e)=>{const{shapeSvg:r}=p(t,e,"label",!0);a.l.trace("Classes = ",e.classes);const n=r.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return g(e,n),e.intersect=function(t){return w.rect(e,t)},r},rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",r).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),d=i.insert("g").attr("class","label"),o=e.labelText.flat?e.labelText.flat():e.labelText;let c="";c="object"==typeof o?o[0]:o,a.l.info("Label text abc79",c,o,"object"==typeof o);const p=d.node().appendChild(h(c,e.labelStyle,!0,!0));let y={width:0,height:0};if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=p.children[0],e=(0,n.Ys)(p);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}a.l.info("Text 2",o);const u=o.slice(1,o.length);let f=p.getBBox();const x=d.node().appendChild(h(u.join?u.join("<br/>"):u,e.labelStyle,!0,!0));if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=x.children[0],e=(0,n.Ys)(x);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}const b=e.padding/2;return(0,n.Ys)(x).attr("transform","translate( "+(y.width>f.width?0:(f.width-y.width)/2)+", "+(f.height+b+5)+")"),(0,n.Ys)(p).attr("transform","translate( "+(y.width<f.width?0:-(f.width-y.width)/2)+", 0)"),y=d.node().getBBox(),d.attr("transform","translate("+-y.width/2+", "+(-y.height/2-b+3)+")"),s.attr("class","outer title-state").attr("x",-y.width/2-b).attr("y",-y.height/2-b).attr("width",y.width+e.padding).attr("height",y.height+e.padding),l.attr("class","divider").attr("x1",-y.width/2-b).attr("x2",y.width/2+b).attr("y1",-y.height/2-b+f.height+b).attr("y2",-y.height/2-b+f.height+b),g(e,s),e.intersect=function(t){return w.rect(e,t)},i},choice:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return r.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return w.circle(e,14,t)},r},circle:(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=p(t,e,void 0,!0),s=r.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("Circle main"),g(e,s),e.intersect=function(t){return a.l.info("Circle intersect",e,n.width/2+i,t),w.circle(e,n.width/2+i,t)},r},doublecircle:(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=p(t,e,void 0,!0),s=r.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("DoubleCircle main"),g(e,l),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),w.circle(e,n.width/2+i+5,t)},r},stadium:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.height+e.padding,i=a.width+n/4+e.padding,s=r.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return g(e,s),e.intersect=function(t){return w.rect(e,t)},r},hexagon:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.height+e.padding,i=n/4,s=a.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],d=y(r,s,n,l);return d.attr("style",e.style),g(e,d),e.intersect=function(t){return w.polygon(e,l,t)},r},rect_left_inv_arrow:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return y(r,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return w.polygon(e,s,t)},r},lean_right:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},lean_left:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},trapezoid:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},inv_trapezoid:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},rect_right_inv_arrow:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},cylinder:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=n/2,s=i/(2.5+n/50),l=a.height+s+e.padding,d="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,o=r.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return g(e,o),e.intersect=function(t){const r=w.rect(e,t),a=r.x-e.x;if(0!=i&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-s)){let n=s*s*(1-a*a/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),r.y+=n}return r},r},start:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),g(e,a),e.intersect=function(t){return w.circle(e,7,t)},r},end:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),n=r.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),g(e,n),e.intersect=function(t){return w.circle(e,7,t)},r},note:(t,e)=>{e.useHtmlLabels||(0,a.g)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:r,bbox:n,halfPadding:i}=p(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);const s=r.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),g(e,s),e.intersect=function(t){return w.rect(e,t)},r},subroutine:(t,e)=>{const{shapeSvg:r,bbox:a}=p(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=y(r,n,i,s);return l.attr("style",e.style),g(e,l),e.intersect=function(t){return w.polygon(e,s,t)},r},fork:L,join:L,class_box:(t,e)=>{const r=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const s=t.insert("g").attr("class",i).attr("id",e.domId||e.id),d=s.insert("rect",":first-child"),o=s.insert("line"),c=s.insert("line");let p=0,y=4;const u=s.insert("g").attr("class","label");let f=0;const x=e.classData.annotations&&e.classData.annotations[0],b=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",m=u.node().appendChild(h(b,e.labelStyle,!0,!0));let k=m.getBBox();if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=m.children[0],e=(0,n.Ys)(m);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}e.classData.annotations[0]&&(y+=k.height+4,p+=k.width);let L=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.g)().flowchart.htmlLabels?L+="&lt;"+e.classData.type+"&gt;":L+="<"+e.classData.type+">");const v=u.node().appendChild(h(L,e.labelStyle,!0,!0));(0,n.Ys)(v).attr("class","classTitle");let S=v.getBBox();if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=v.children[0],e=(0,n.Ys)(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}y+=S.height+4,S.width>p&&(p=S.width);const M=[];e.classData.members.forEach((t=>{const r=(0,l.p)(t);let i=r.displayText;(0,a.g)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=u.node().appendChild(h(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let d=s.getBBox();if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>p&&(p=d.width),y+=d.height+4,M.push(s)})),y+=8;const T=[];if(e.classData.methods.forEach((t=>{const r=(0,l.p)(t);let i=r.displayText;(0,a.g)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=u.node().appendChild(h(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let d=s.getBBox();if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>p&&(p=d.width),y+=d.height+4,T.push(s)})),y+=8,x){let t=(p-k.width)/2;(0,n.Ys)(m).attr("transform","translate( "+(-1*p/2+t)+", "+-1*y/2+")"),f=k.height+4}let B=(p-S.width)/2;return(0,n.Ys)(v).attr("transform","translate( "+(-1*p/2+B)+", "+(-1*y/2+f)+")"),f+=S.height+4,o.attr("class","divider").attr("x1",-p/2-r).attr("x2",p/2+r).attr("y1",-y/2-r+8+f).attr("y2",-y/2-r+8+f),f+=8,M.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*y/2+f+4)+")"),f+=S.height+4})),f+=8,c.attr("class","divider").attr("x1",-p/2-r).attr("x2",p/2+r).attr("y1",-y/2-r+8+f).attr("y2",-y/2-r+8+f),f+=8,T.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*y/2+f)+")"),f+=S.height+4})),d.attr("class","outer title-state").attr("x",-p/2-r).attr("y",-y/2-r).attr("width",p+e.padding).attr("height",y+e.padding),g(e,d),e.intersect=function(t){return w.rect(e,t)},s}};let S={};const M=(t,e,r)=>{let n,i;if(e.link){let s;"sandbox"===(0,a.g)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=v[e.shape](n,e,r)}else i=v[e.shape](t,e,r),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),S[e.id]=n,e.haveCallback&&S[e.id].attr("class",S[e.id].attr("class")+" clickable"),n},T=(t,e)=>{S[e.id]=t},B=()=>{S={}},E=t=>{const e=S[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r};let C={},_={};const Y=()=>{C={},_={}},N=(t,e)=>{const r=(0,a.k)((0,a.g)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:r,addSvgBackground:!0}):h(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);const l=t.insert("g").attr("class","edgeLabel"),d=l.insert("g").attr("class","label");d.node().appendChild(s);let o,c=s.getBBox();if(r){const t=s.children[0],e=(0,n.Ys)(s);c=t.getBoundingClientRect(),e.attr("width",c.width),e.attr("height",c.height)}if(d.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),C[e.id]=l,e.width=c.width,e.height=c.height,e.startLabelLeft){const r=h(e.startLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");o=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),_[e.id]||(_[e.id]={}),_[e.id].startLeft=a,P(o,e.startLabelLeft)}if(e.startLabelRight){const r=h(e.startLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");o=a.node().appendChild(r),n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),_[e.id]||(_[e.id]={}),_[e.id].startRight=a,P(o,e.startLabelRight)}if(e.endLabelLeft){const r=h(e.endLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");o=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),_[e.id]||(_[e.id]={}),_[e.id].endLeft=a,P(o,e.endLabelLeft)}if(e.endLabelRight){const r=h(e.endLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");o=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),_[e.id]||(_[e.id]={}),_[e.id].endRight=a,P(o,e.endLabelRight)}return s};function P(t,e){(0,a.g)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const H=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,C[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){const n=C[t.id];let i=t.x,s=t.y;if(r){const n=d.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",i,",",s,") to (",n.x,",",n.y,") abc78"),e.updatedPath&&(i=n.x,s=n.y)}n.attr("transform","translate("+i+", "+s+")")}if(t.startLabelLeft){const e=_[t.id].startLeft;let a=t.x,n=t.y;if(r){const e=d.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);a=e.x,n=e.y}e.attr("transform","translate("+a+", "+n+")")}if(t.startLabelRight){const e=_[t.id].startRight;let a=t.x,n=t.y;if(r){const e=d.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);a=e.x,n=e.y}e.attr("transform","translate("+a+", "+n+")")}if(t.endLabelLeft){const e=_[t.id].endLeft;let a=t.x,n=t.y;if(r){const e=d.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);a=e.x,n=e.y}e.attr("transform","translate("+a+", "+n+")")}if(t.endLabelRight){const e=_[t.id].endRight;let a=t.x,n=t.y;if(r){const e=d.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);a=e.x,n=e.y}e.attr("transform","translate("+a+", "+n+")")}},R=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],n=t[0],i=!1;return t.forEach((t=>{if(a.l.info("abc88 checking point",t,e),((t,e)=>{const r=t.x,a=t.y,n=Math.abs(e.x-r),i=Math.abs(e.y-a),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)a.l.warn("abc88 outside",t,n),n=t,i||r.push(t);else{const s=((t,e,r)=>{a.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-r.x),l=t.width/2;let d=r.x<e.x?l-s:l+s;const o=t.height/2,c=Math.abs(e.y-r.y),h=Math.abs(e.x-r.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*o){let t=r.y<e.y?e.y-o-i:i-o-e.y;d=h*t/c;const n={x:r.x<e.x?r.x+d:r.x-h+d,y:r.y<e.y?r.y+c-t:r.y-c+t};return 0===d&&(n.x=e.x,n.y=e.y),0===h&&(n.x=e.x),0===c&&(n.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${d}`,n),n}{d=r.x<e.x?e.x-l-n:n-l-e.x;let t=c*d/h,i=r.x<e.x?r.x+h-d:r.x-h+d,s=r.y<e.y?r.y+t:r.y-t;return a.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${d}`,{_x:i,_y:s}),0===d&&(i=e.x,s=e.y),0===h&&(i=e.x),0===c&&(s=e.y),{x:i,y:s}}})(e,n,t);a.l.warn("abc88 inside",t,n,s),a.l.warn("abc88 intersection",s);let l=!1;r.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),r.some((t=>t.x===s.x&&t.y===s.y))?a.l.warn("abc88 no intersect",s,r):r.push(s),i=!0}})),a.l.warn("abc88 returning points",r),r},I=function(t,e,r,i,s,l){let d=r.points,o=!1;const c=l.node(e.v);var h=l.node(e.w);a.l.info("abc88 InsertEdge: ",r),h.intersect&&c.intersect&&(d=d.slice(1,r.points.length-1),d.unshift(c.intersect(d[0])),a.l.info("Last point",d[d.length-1],h,h.intersect(d[d.length-1])),d.push(h.intersect(d[d.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",i[r.toCluster]),d=R(r.points,i[r.toCluster].node),o=!0),r.fromCluster&&(a.l.info("from cluster abc88",i[r.fromCluster]),d=R(d.reverse(),i[r.fromCluster].node).reverse(),o=!0);const p=d.filter((t=>!Number.isNaN(t.y)));let g;g=("graph"===s||"flowchart"===s)&&r.curve||n.$0Z;const y=(0,n.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(g);let u;switch(r.thickness){case"normal":u="edge-thickness-normal";break;case"thick":case"invisible":u="edge-thickness-thick";break;default:u=""}switch(r.pattern){case"solid":u+=" edge-pattern-solid";break;case"dotted":u+=" edge-pattern-dotted";break;case"dashed":u+=" edge-pattern-dashed"}const f=t.append("path").attr("d",y(p)).attr("id",r.id).attr("class"," "+u+(r.classes?" "+r.classes:"")).attr("style",r.style);let x="";switch(((0,a.g)().flowchart.arrowMarkerAbsolute||(0,a.g)().state.arrowMarkerAbsolute)&&(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,x=x.replace(/\(/g,"\\("),x=x.replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":f.attr("marker-start","url("+x+"#"+s+"-crossStart)");break;case"arrow_point":f.attr("marker-start","url("+x+"#"+s+"-pointStart)");break;case"arrow_barb":f.attr("marker-start","url("+x+"#"+s+"-barbStart)");break;case"arrow_circle":f.attr("marker-start","url("+x+"#"+s+"-circleStart)");break;case"aggregation":f.attr("marker-start","url("+x+"#"+s+"-aggregationStart)");break;case"extension":f.attr("marker-start","url("+x+"#"+s+"-extensionStart)");break;case"composition":f.attr("marker-start","url("+x+"#"+s+"-compositionStart)");break;case"dependency":f.attr("marker-start","url("+x+"#"+s+"-dependencyStart)");break;case"lollipop":f.attr("marker-start","url("+x+"#"+s+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":f.attr("marker-end","url("+x+"#"+s+"-crossEnd)");break;case"arrow_point":f.attr("marker-end","url("+x+"#"+s+"-pointEnd)");break;case"arrow_barb":f.attr("marker-end","url("+x+"#"+s+"-barbEnd)");break;case"arrow_circle":f.attr("marker-end","url("+x+"#"+s+"-circleEnd)");break;case"aggregation":f.attr("marker-end","url("+x+"#"+s+"-aggregationEnd)");break;case"extension":f.attr("marker-end","url("+x+"#"+s+"-extensionEnd)");break;case"composition":f.attr("marker-end","url("+x+"#"+s+"-compositionEnd)");break;case"dependency":f.attr("marker-end","url("+x+"#"+s+"-dependencyEnd)");break;case"lollipop":f.attr("marker-end","url("+x+"#"+s+"-lollipopEnd)")}let b={};return o&&(b.updatedPath=d),b.originalPath=r.points,b}},7049:function(t,e,r){"use strict";r.d(e,{p:function(){return l},s:function(){return g}});var a=r(2271),n=r(3125),i=r(2561);let s=0;const l=function(t){let e=t.match(/^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/),r=t.match(/^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/);return e&&!r?d(e):r?o(r):c(t)},d=function(t){let e="",r="";try{let a=t[1]?t[1].trim():"",n=t[2]?t[2].trim():"",s=t[3]?(0,i.z)(t[3].trim()):"",l=t[4]?t[4].trim():"",d=t[5]?t[5].trim():"";r=a+n+s+" "+l,e=p(d)}catch(a){r=t}return{displayText:r,cssStyle:e}},o=function(t){let e="",r="";try{let a=t[1]?t[1].trim():"",n=t[2]?t[2].trim():"",s=t[3]?(0,i.z)(t[3].trim()):"",l=t[4]?t[4].trim():"";r=a+n+"("+s+")"+(t[5]?" : "+(0,i.z)(t[5]).trim():""),e=p(l)}catch(a){r=t}return{displayText:r,cssStyle:e}},c=function(t){let e="",r="",a="",n=t.indexOf("("),s=t.indexOf(")");if(n>1&&s>n&&s<=t.length){let l="",d="",o=t.substring(0,1);o.match(/\w/)?d=t.substring(0,n).trim():(o.match(/[#+~-]/)&&(l=o),d=t.substring(1,n).trim());const c=t.substring(n+1,s);t.substring(s+1,1),r=p(t.substring(s+1,s+2)),e=l+d+"("+(0,i.z)(c.trim())+")",s<t.length&&(a=t.substring(s+2).trim(),""!==a&&(a=" : "+(0,i.z)(a),e+=a))}else e=(0,i.z)(t);return{displayText:e,cssStyle:r}},h=function(t,e,r,a){let n=l(e);const i=t.append("tspan").attr("x",a.padding).text(n.displayText);""!==n.cssStyle&&i.attr("style",n.cssStyle),r||i.attr("dy",a.textHeight)},p=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},g={drawClass:function(t,e,r,a){i.l.debug("Rendering class ",e,r);const n=e.id,s={id:n,label:e.id,width:0,height:0},l=t.append("g").attr("id",a.db.lookUpDomId(n)).attr("class","classGroup");let d;d=e.link?l.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):l.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let o=!0;e.annotations.forEach((function(t){const e=d.append("tspan").text("\xab"+t+"\xbb");o||e.attr("dy",r.textHeight),o=!1}));let c=e.id;void 0!==e.type&&""!==e.type&&(c+="<"+e.type+">");const p=d.append("tspan").text(c).attr("class","title");o||p.attr("dy",r.textHeight);const g=d.node().getBBox().height,y=l.append("line").attr("x1",0).attr("y1",r.padding+g+r.dividerMargin/2).attr("y2",r.padding+g+r.dividerMargin/2),u=l.append("text").attr("x",r.padding).attr("y",g+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");o=!0,e.members.forEach((function(t){h(u,t,o,r),o=!1}));const f=u.node().getBBox(),x=l.append("line").attr("x1",0).attr("y1",r.padding+g+r.dividerMargin+f.height).attr("y2",r.padding+g+r.dividerMargin+f.height),b=l.append("text").attr("x",r.padding).attr("y",g+2*r.dividerMargin+f.height+r.textHeight).attr("fill","white").attr("class","classText");o=!0,e.methods.forEach((function(t){h(b,t,o,r),o=!1}));const w=l.node().getBBox();var m=" ";e.cssClasses.length>0&&(m+=e.cssClasses.join(" "));const k=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*r.padding).attr("height",w.height+r.padding+.5*r.dividerMargin).attr("class",m).node().getBBox().width;return d.node().childNodes.forEach((function(t){t.setAttribute("x",(k-t.getBBox().width)/2)})),e.tooltip&&d.insert("title").text(e.tooltip),y.attr("x2",k),x.attr("x2",k),s.width=k,s.height=w.height+r.padding+.5*r.dividerMargin,s},drawEdge:function(t,e,r,l,d){const o=function(t){switch(t){case d.db.relationType.AGGREGATION:return"aggregation";case d.db.relationType.EXTENSION:return"extension";case d.db.relationType.COMPOSITION:return"composition";case d.db.relationType.DEPENDENCY:return"dependency";case d.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const c=e.points,h=(0,a.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(a.$0Z),p=t.append("path").attr("d",h(c)).attr("id","edge"+s).attr("class","relation");let g,y,u="";l.arrowMarkerAbsolute&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),1==r.relation.lineType&&p.attr("class","relation dashed-line"),10==r.relation.lineType&&p.attr("class","relation dotted-line"),"none"!==r.relation.type1&&p.attr("marker-start","url("+u+"#"+o(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&p.attr("marker-end","url("+u+"#"+o(r.relation.type2)+"End)");const f=e.points.length;let x,b,w,m,k=n.u.calcLabelPosition(e.points);if(g=k.x,y=k.y,f%2!=0&&f>1){let t=n.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),a=n.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[f-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(a)),x=t.x,b=t.y,w=a.x,m=a.y}if(void 0!==r.title){const e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",g).attr("y",y).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;const n=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-l.padding/2).attr("y",n.y-l.padding/2).attr("width",n.width+l.padding).attr("height",n.height+l.padding)}if(i.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",x).attr("y",b).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",w).attr("y",m).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}s++},drawNote:function(t,e,r,a){i.l.debug("Rendering note ",e,r);const n=e.id,s={id:n,text:e.text,width:0,height:0},l=t.append("g").attr("id",n).attr("class","classGroup");let d=l.append("text").attr("y",r.textHeight+r.padding).attr("x",0);const o=JSON.parse(`"${e.text}"`).split("\n");o.forEach((function(t){i.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)}));const c=l.node().getBBox(),h=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*r.padding).attr("height",c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin).node().getBBox().width;return d.node().childNodes.forEach((function(t){t.setAttribute("x",(h-t.getBBox().width)/2)})),s.width=h,s.height=c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin,s},parseMember:l}}}]);