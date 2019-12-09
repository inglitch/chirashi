!function(){"use strict";function p(e,a){for(var n=arguments,t=[],i=[],r=arguments.length;2<r--;)t.push(n[r]);for(;t.length;){var p=t.pop();if(p&&p.pop)for(r=p.length;r--;)t.push(p[r]);else null!=p&&!0!==p&&!1!==p&&i.push(p)}return"function"==typeof e?e(a||{},i):{nodeName:e,attributes:a||{},children:i,key:a&&a.key}}var e={title:"チラシ",all:"すべて",other:"その他",area:["川中周辺","和泉中央周辺","光明池周辺","クロスモール周辺","堺インター周辺","津久野周辺","五條・橋本"],type:["スーパー","ドラッグストア","ホームセンター","家電量販店"],api:[{type:"jsonp",url:"https://asp.shufoo.net/api/shopDetailXML.php?shopId={id}&responseFormat=json&usedfor=shufoo.asp.chirashilist&referer=www.shufoo.net&callback=?",url_:"https://asp.shufoo.net/api/shopDetailXML.php?un={un}&shopId={id}&responseFormat=json&usedfor=shufoo.asp.chirashilist&referer=www.shufoo.net&callback=?"},{type:"iframe",url:"https://widgets.tokubai.co.jp/{id}/leaflet_widget"},{type:"urls"}],shop:[{area:0,type:0,api:0,name:"スーパーセンターオークワ/和泉納花店",un:"okuwa",id:174654},{area:0,type:0,api:1,name:"マツゲン/光明池店",id:3702},{area:0,type:0,api:1,name:"スーパーサンエー/光明台店",id:10952},{area:0,type:1,api:0,name:"ウエルシア/和泉納花店",un:"welciayakkyoku",id:299378},{area:0,type:1,api:1,name:"スギドラッグ/和泉和田店",id:124840},{area:1,type:0,api:0,name:"コープ和泉中央",un:"izumicoop",id:315684},{area:1,type:0,api:0,name:"イズミヤ/和泉中央店",un:"izumiya",id:136342},{area:1,type:0,api:0,name:"万代/和泉万町店",un:"mandai",id:6176},{area:1,type:0,api:0,name:"万代/和泉中央店",un:"mandai",id:2457},{area:1,type:0,api:1,name:"ディオ/和泉店",id:5820},{area:1,type:0,api:1,name:"サンディ/和泉観音寺店",id:7016},{area:1,type:1,api:1,name:"ココカラファイン/コープ和泉中央店",id:17946},{area:1,type:1,api:1,name:"ココカラファイン/和泉万町店",id:115560},{area:1,type:1,api:0,name:"ウエルシア/和泉浦田店",un:"welciayakkyoku",id:317534},{area:1,type:2,api:0,name:"コーナン/和泉中央店",un:"kohnan",id:1310},{area:1,type:2,api:0,name:"スーパービバホーム/和泉中央店",un:"lixilviva",id:266604},{area:1,type:3,api:0,name:"ジョーシン/和泉中央店",un:"",id:318041},{area:1,type:3,api:0,name:"ヤマダ電機/和泉中央本店",un:"",id:180794},{area:1,type:3,api:0,name:"ケーズデンキ/岸和田和泉インター店",un:"",id:163060},{area:1,type:3,api:0,name:"エディオン/ららぽーと和泉店",un:"",id:246888},{area:1,type:-1,api:0,name:"MEGAドン・キホーテ/和泉中央店",un:"donki",id:829750},{area:2,type:0,api:0,name:"ダイエー/光明池店",un:"Daiei",id:76},{area:2,type:0,api:1,name:"マツゲン/コムボックス光明池店",id:3697},{area:2,type:0,api:2,name:"サンプラザ/光明池店",urls:["https://www.tagshops.jp/files/sunplaza/sp/01/front/front.jpg","https://www.tagshops.jp/files/sunplaza/sp/01/back/back.jpg"]},{area:2,type:0,api:1,name:"KOHYO/光明池店",id:20996},{area:2,type:0,api:0,name:"ライフ/城山台店",un:"lifecorposaka",id:118412},{area:2,type:1,api:0,name:"ウエルシア/COMBOX光明池店",un:"welciayakkyoku",id:299379},{area:2,type:1,api:0,name:"ウエルシア/和泉光明池駅前店",un:"welciayakkyoku",id:822185},{area:2,type:3,api:0,name:"ジョーシン/光明池店",un:"",id:11213},{area:2,type:3,api:0,name:"エディオン/ダイエー光明池店",un:"",id:309861},{area:3,type:0,api:0,name:"万代/御池台店",un:"mandai",id:2448},{area:3,type:0,api:0,name:"イズミヤ/デイリーカナート原山台店",un:"izumiya",id:136347},{area:3,type:0,api:1,name:"サンディ/泉北原山台店",id:7054},{area:3,type:1,api:0,name:"ドラッグコスモス/原山台店",un:"",id:824039},{area:3,type:1,api:0,name:"ウエルシア/堺原山台店",un:"welciayakkyoku",id:299377},{area:3,type:2,api:0,name:"ケーヨーデイツー/泉北原山台店",un:"keiyo",id:116703},{area:3,type:-1,api:0,name:"ドン・キホーテ/クロスモール堺店",un:"donki",id:288681},{area:4,type:0,api:1,name:"ラ・ムー/堺インター店",id:170428},{area:4,type:2,api:0,name:"DCMダイキ/堺インター店",un:"daiki",id:3334},{area:4,type:2,api:0,name:"コーナン/泉北2号小代店",un:"kohnan",id:118715},{area:4,type:3,api:0,name:"ジョーシン/堺インター店",un:"",id:134097},{area:4,type:3,api:0,name:"ヤマダ電機/泉北堺インター店",un:"",id:834748},{area:4,type:3,api:0,name:"エディオン/堺インター店",un:"",id:3802},{area:5,type:0,api:0,name:"イトーヨーカドー/津久野店",un:"IY",id:386},{area:5,type:0,api:1,name:"デイリーカナート/向ヶ丘店",id:42671},{area:5,type:0,api:1,name:"サンディ/津久野店",id:17407},{area:5,type:0,api:1,name:"マツゲン/北条店",id:3704},{area:5,type:0,api:0,name:"万代/上野芝店",un:"mandai",id:303964},{area:5,type:0,api:0,name:"西友/上野芝店",un:"seiyu",id:17083},{area:5,type:0,api:0,name:"ダイエー/おおとり店",un:"Daiei",id:79},{area:5,type:0,api:0,name:"ライフ/石津店",un:"lifecorposaka",id:118507},{area:5,type:0,api:1,name:"業務スーパー/鳳店",id:120737},{area:5,type:1,api:0,name:"マザーピア/津久野店",un:"",id:11194},{area:5,type:1,api:0,name:"ウエルシア/堺上野芝店",un:"welciayakkyoku",id:299388},{area:5,type:2,api:0,name:"コーナン/堺店",un:"kohnan",id:104411},{area:5,type:2,api:0,name:"ロイヤルホームセンター/堺店",un:"royalhc",id:163025},{area:5,type:3,api:0,name:"ジョーシン/鳳店",un:"",id:170091},{area:5,type:3,api:0,name:"エディオン/堺石津店",un:"",id:107389},{area:5,type:3,api:0,name:"ヤマダ電機/西友上野芝店",un:"",id:823737},{area:5,type:-1,api:1,name:"ジャパン/堺浜寺店",id:33381},{area:6,type:0,api:2,name:"エーコープ近畿/ハートフル五條店",urls:["https://www.acoop-kinki.co.jp/shop/pdf/east.pdf?1010939035"]},{area:6,type:0,api:0,name:"イオン/五條店",un:"jusco",id:1814},{area:6,type:0,api:0,name:"スーパーセンターオークワ/橋本店",un:"okuwa",id:174661},{area:6,type:0,api:0,name:"オークワ/オーストリート橋本彩の台店",un:"okuwa",id:174736},{area:6,type:0,api:1,name:"マツゲン/橋本林間店",id:22079},{area:6,type:0,api:1,name:"マツゲン/橋本店",id:3712},{area:6,type:0,api:2,name:"プロマートワールド/橋本店",urls:["http://www.n-gr.jp/chirashi/"]},{area:6,type:1,api:0,name:"ドラッグコスモス/五條今井店",un:"",id:290869},{area:6,type:1,api:0,name:"ジップドラッグ/五條店",un:"",id:210696},{area:6,type:1,api:0,name:"ジップドラッグ/東洋隅田店",un:"",id:210714},{area:6,type:1,api:0,name:"ウエルシア/橋本彩の台店",un:"welciayakkyoku",id:299457},{area:6,type:2,api:1,name:"ジュンテンドー/五條店",id:19498},{area:6,type:2,api:2,name:"コメリ/五條野原店",urls:["https://www.komeri.com/contents/dc/circular/1208.html"]},{area:6,type:2,api:0,name:"ホームストック/五條二見店",un:"kohnan",id:1436},{area:6,type:2,api:0,name:"ケーヨーデイツー/橋本彩の台店",un:"keiyo",id:116711},{area:6,type:3,api:0,name:"ヤマダ電機/テックランド和歌山橋本店",un:"",id:180672},{area:6,type:3,api:0,name:"ケーズデンキ/橋本店",un:"",id:266065},{area:6,type:-1,api:2,name:"山賊村",urls:["https://page.line.me/czn7501y"]}]};function u(l,c){return new Promise(function(a,n){var t,e,i,r,p,u,o;(c=c||{}).load=function(e){a(e)},c.error=function(e){n(e)},t=l,i=(e=(e=c)||{}).callbackName||"_"+Math.random().toString(16).slice(-12),r=e.load,p=e.error,u=document.documentElement,o=document.createElement("script"),"function"==typeof r&&(window[i]=r,o.onerror=o.onload=function(e){u.removeChild(o),delete window[i],"error"===e.type&&"function"==typeof p&&p(t)},o.src=t.replace(/=\?/,"="+i),u.appendChild(o))})}function o(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}var l=function(e,a){return e.replace(/{[^}]*}/g,function(e){return a[e.slice(1,-1)]||e})},a={append:function(){return document.body.appendChild(this.iframeElement())},iframeElement:function(){var e=document.createElement("iframe");return e.width=e.height=1,e.src=this.src(),e},src:function(){return"data:text/html;charset=utf-8,"+encodeURIComponent("<!DOCTYPE html><head><title></title><script>console.log(window.parent)<\/script></head>")}},i=function(e){var a=e.api,n=(e.type,e.value);return 0===a?(n||{}).error?p("p",null,(n||{}).error):p("ul",null,[].concat((((n||{}).shop||{}).chirashis||{}).chirashi).map(function(e){var a=e.title,n=e.iconUrl,t=e.pdfUrl,i=e.imgUrl,r=e.flashUrl;return p("li",null,p("a",{href:i||r||t,target:"_blank"},p("img",{src:n}),p("span",null,a)))})):1===a?p("iframe",{src:n}):2===a?p("ul",null,n.map(function(e){return p("li",null,p("a",{href:e,target:"_blank"},e))})):""};e.title&&{append:function(e,a){return(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(this.linkElement(e,a))},linkElement:function(e,a){var n=document.createElement("link");return n.rel="apple-touch-icon",n.href=this.dataURL(e,a),n},dataURL:function(e,a){var t,n,i=1<(a=a||{}).size?0|a.size:256,r=document.createElement("canvas"),p=r.getContext("2d");if(r.width=r.height=i,p.font=a.font,t=/(\d+)px/.exec(p.font)[1],{up:(n=(e=(e+"").split("\n").map(function(e){return{text:e,width:p.measureText(e).width}})).reduce(function(e,a){return(e.width||0)<a.width?a:e},{})).width<i,down:i<n.width,both:!0}[a.scale])for(t=i/e.length|0;t--&&(p.font=p.font.replace(/\d+px/,t+"px"),!(p.measureText(n.text).width<i)););return p.fillStyle=a.bgcolor||"#fff",p.fillRect(0,0,i,i),p.fillStyle=a.color||"#000",p.textAlign="center",p.textBaseline="middle",e.forEach(function(e,a,n){p.fillText(e.text,i/2,(a-(n.length-1)/2)*t+i/2)}),r.toDataURL()}}.append(e.title,{scale:"both"}),function C(e,a,n,t){var i,r=[].map,p=t&&t.children[0]||null,u=p&&function E(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:r.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:E(e)})}}(p),o=[],v=!0,l=y(e),c=function j(t,i,r){for(var e in r)"function"==typeof r[e]?function(e,n){r[e]=function(e){var a=n(e);return"function"==typeof a&&(a=a(m(t,l),r)),a&&a!==(i=m(t,l))&&!a.then&&s(l=f(t,y(i,a),l)),a}}(e,r[e]):j(t.concat(e),i[e]=y(i[e]),r[e]=y(r[e]));return r}([],l,y(a));return s(),c;function k(e){return"function"==typeof e?k(e(l,c)):null!=e?e:""}function d(){i=!i;var e=k(n);for(t&&!i&&(p=function h(e,a,n,t,i){if(t!==n)if(null==n||n.nodeName!==t.nodeName){var r=b(t,i);e.insertBefore(r,a||null),null!=n&&x(e,a,n),a=r}else if(null==n.nodeName)a.nodeValue=t;else{N(a,n.attributes,t.attributes,i=i||"svg"===t.nodeName);for(var p={},u={},o=[],l=n.children,c=t.children,d=0;d<l.length;d++){o[d]=a.childNodes[d];var s=g(l[d]);null!=s&&(p[s]=[o[d],l[d]])}for(var d=0,y=0;y<c.length;){var s=g(l[d]),f=g(c[y]=k(c[y]));if(u[s])d++;else if(null==f||f!==g(l[d+1]))if(null==f||v)null==s&&(h(a,o[d],l[d],c[y],i),y++),d++;else{var m=p[f]||[];s===f?(h(a,m[0],m[1],c[y],i),d++):m[0]?h(a,a.insertBefore(m[0],o[d]||null),m[1],c[y],i):h(a,o[d],null,c[y],i),u[f]=c[y],y++}else null==s&&x(a,o[d],l[d]),d++}for(;d<l.length;)null==g(l[d])&&x(a,o[d],l[d]),d++;for(var d in p)u[d]||x(a,p[d][0],p[d][1])}return a}(t,p,u,u=e)),v=!1;o.length;)o.pop()()}function s(){i||(i=!0,setTimeout(d))}function y(e,a){var n={};for(var t in e)n[t]=e[t];for(var t in a)n[t]=a[t];return n}function f(e,a,n){var t={};return e.length?(t[e[0]]=1<e.length?f(e.slice(1),a,n[e[0]]):a,y(n,t)):a}function m(e,a){for(var n=0;n<e.length;)a=a[e[n++]];return a}function g(e){return e?e.key:null}function h(e){return e.currentTarget.events[e.type](e)}function w(e,a,n,t,i){if("key"!==a)if("style"===a)if("string"==typeof n)e.style.cssText=n;else for(var r in"string"==typeof t&&(t=e.style.cssText=""),y(t,n)){var p=null==n||null==n[r]?"":n[r];"-"===r[0]?e.style.setProperty(r,p):e.style[r]=p}else"o"===a[0]&&"n"===a[1]?(a=a.slice(2),e.events?t=t||e.events[a]:e.events={},(e.events[a]=n)?t||e.addEventListener(a,h):e.removeEventListener(a,h)):a in e&&"list"!==a&&"type"!==a&&"draggable"!==a&&"spellcheck"!==a&&"translate"!==a&&!i?e[a]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(a,n),null!=n&&!1!==n||e.removeAttribute(a)}function b(e,a){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(a=a||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),t=e.attributes;if(t){t.oncreate&&o.push(function(){t.oncreate(n)});for(var i=0;i<e.children.length;i++)n.appendChild(b(e.children[i]=k(e.children[i]),a));for(var r in t)w(n,r,t[r],null,a)}return n}function N(e,a,n,t){for(var i in y(a,n))n[i]!==("value"===i||"checked"===i?e[i]:a[i])&&w(e,i,n[i],a[i],t);var r=v?n.oncreate:n.onupdate;r&&o.push(function(){r(e,a)})}function x(e,a,n){function t(){e.removeChild(function i(e,a){var n=a.attributes;if(n){for(var t=0;t<a.children.length;t++)i(e.childNodes[t],a.children[t]);n.ondestroy&&n.ondestroy(e)}return e}(a,n))}var i=n.attributes&&n.attributes.onremove;i?i(a,t):t()}}({data:e,data_:{}},{current:function(e){return{current:e}},area:function(e){return{area:e}},type:function(e){return{type:e}},data_:{get:function(e){e.area,e.type;var n=e.api,t=e.api_,i=(e.name,o(e,["area","type","api","api_","name"]));return function(e,a){a[t.type]&&a[t.type](Object.assign({},i,t,{api:n}))}},iframe:function(e){var a,n=e.api,t=e.i,i=e.type,r=e.url,p=o(e,["api","i","type","url"]);return(a={})[t]={api:n,type:i,value:l(r,p)},a},jsonp:function(e){var t=e.api,i=e.i,r=e.type,a=e.url,p=o(e,["api","i","type","url"]);return function(e,n){u(l(a,p),{callbackName:"JSONCallbackJscript2IdShufoo0"+Date.now()}).then(function(e){var a;return n.set(((a={})[i]={api:t,type:r,value:e},a))})}},urls:function(e){var a,n=e.api,t=e.i,i=e.type,r=e.urls;return(a={})[t]={api:n,type:i,value:[].concat(r)},a},set:function(e){return e}}},function(n,t){return a.append(),document.title=[n.data.title,(n.data.shop[n.current]||{}).name||""].filter(function(e){return e}).join(" > "),p("div",{"data-current":n.current},p("nav",null,p("ul",{"class":"area"},p("li",null,p("input",{id:"area",name:"area",type:"radio",onclick:function(){return t.area(void 0)},checked:isNaN(n.area)}),p("label",{"for":"area"},n.data.all)),n.data.area.map(function(e,a){return p("li",null,p("input",{id:"area"+a,name:"area",type:"radio",onclick:function(){return t.area(a)},checked:n.area===a}),p("label",{"for":"area"+a},e))})),p("ul",{"class":"type"},p("li",null,p("input",{id:"type",name:"type",type:"radio",onclick:function(){return t.type(void 0)},checked:isNaN(n.type)}),p("label",{"for":"type","data-length":isNaN(n.area)?n.data.shop.length:n.data.shop.filter(function(e){return n.area===e.area}).length},n.data.all)),n.data.type.map(function(e,a){return p("li",null,p("input",{id:"type"+a,name:"type",type:"radio",onclick:function(){return t.type(a)},checked:n.type===a}),p("label",{"for":"type"+a,"data-length":isNaN(n.area)?n.data.shop.filter(function(e){return e.type===a}).length:n.data.shop.filter(function(e){return n.area===e.area&&e.type===a}).length},e))}),p("li",null,p("input",{id:"type-1",name:"type",type:"radio",onclick:function(){return t.type(-1)},checked:-1===n.type}),p("label",{"for":"type-1","data-length":isNaN(n.area)?n.data.shop.filter(function(e){return-1===e.type}).length:n.data.shop.filter(function(e){return n.area===e.area&&-1===e.type}).length},n.data.other))),p("ul",{"class":"shop"},n.data.shop.map(function(e,a){return(isNaN(n.area)||n.area===e.area)&&(isNaN(n.type)||n.type===e.type)&&p("li",null,p("button",{type:"button",onclick:function(){return t.current(a),t.data_.get(Object.assign({},e,{i:a,api_:n.data.api[e.api]}))},disabled:n.current===a,"data-area":e.area,"data-type":e.type},e.name))}))),p("main",null,p("h1",null,p("button",{onclick:function(){return t.current(void 0)}},"<"),(n.data.shop[n.current]||{}).name||""),!isNaN(n.current)&&p(i,n.data_[n.current]||{})))},document.body)}();
//# sourceMappingURL=index.js.map
