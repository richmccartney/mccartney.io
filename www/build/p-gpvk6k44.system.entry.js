var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{u(n.next(t))}catch(e){a(e)}}function s(t){try{u(n["throw"](t))}catch(e){a(e)}}function u(t){t.done?r(t.value):i(t.value).then(o,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(s){o=[6,s];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-68c26e7b.system.js","./p-c88a966d.system.js"],(function(t){"use strict";var e,r,n,i,a;return{setters:[function(t){e=t.r;r=t.h;n=t.g;i=t.c},function(t){a=t.A}],execute:function(){var o=t("app_root",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("div",null,r("header",null,r("stencil-route-link",{url:"/"},r("img",{src:"/assets/logo.svg",alt:"RM Logo"})),r("a",{href:"mailto:richard@mccartney.io?subject=Hello%20Richard",class:"contact"},"Contact me")),r("main",null,r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},r("stencil-route",{url:"/",component:"app-home",exact:true})))))};Object.defineProperty(t,"style",{get:function(){return"header{color:var(--color-dark-blue);height:calc(5 * var(--base-spacing));padding:0 var(--column-margin);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid var(--color-off-white)}header img{display:block}.contact{font-size:calc(.75 * var(--base-font-size));color:var(--color-dark-blue);border:1.5px solid var(--color-grey);border-radius:28.5px;text-decoration:none;text-transform:uppercase;padding:calc(.75 * var(--base-font-size)) calc(2 * var(--base-spacing));letter-spacing:.98px}main{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 var(--column-margin);margin:0 auto;width:100%;max-width:var(--max-width)}"},enumerable:true,configurable:true});return t}());var s="/";var u="./";var c=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");var l=function(t,e){var r=[];var n=0;var i=0;var a="";var o=e&&e.delimiter||s;var l=e&&e.delimiters||u;var v=false;var p;while((p=c.exec(t))!==null){var d=p[0];var y=p[1];var g=p.index;a+=t.slice(i,g);i=g+d.length;if(y){a+=y[1];v=true;continue}var m="";var b=t[i];var w=p[2];var O=p[3];var x=p[4];var T=p[5];if(!v&&a.length){var P=a.length-1;if(l.indexOf(a[P])>-1){m=a[P];a=a.slice(0,P)}}if(a){r.push(a);a="";v=false}var k=m!==""&&b!==undefined&&b!==m;var _=T==="+"||T==="*";var E=T==="?"||T==="*";var A=m||o;var j=O||x;r.push({name:w||n++,prefix:m,delimiter:A,optional:E,repeat:_,partial:k,pattern:j?h(j):"[^"+f(A)+"]+?"})}if(a||i<t.length){r.push(a+t.substr(i))}return r};var f=function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")};var h=function(t){return t.replace(/([=!:$/()])/g,"\\$1")};var v=function(t){return t&&t.sensitive?"":"i"};var p=function(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r){for(var n=0;n<r.length;n++){e.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null})}}return t};var d=function(t,e,r){var n=[];for(var i=0;i<t.length;i++){n.push(m(t[i],e,r).source)}return new RegExp("(?:"+n.join("|")+")",v(r))};var y=function(t,e,r){return g(l(t,r),e,r)};var g=function(t,e,r){r=r||{};var n=r.strict;var i=r.end!==false;var a=f(r.delimiter||s);var o=r.delimiters||u;var c=[].concat(r.endsWith||[]).map(f).concat("$").join("|");var l="";var h=false;for(var p=0;p<t.length;p++){var d=t[p];if(typeof d==="string"){l+=f(d);h=p===t.length-1&&o.indexOf(d[d.length-1])>-1}else{var y=f(d.prefix||"");var g=d.repeat?"(?:"+d.pattern+")(?:"+y+"(?:"+d.pattern+"))*":d.pattern;if(e)e.push(d);if(d.optional){if(d.partial){l+=y+"("+g+")?"}else{l+="(?:"+y+"("+g+"))?"}}else{l+=y+"("+g+")"}}}if(i){if(!n)l+="(?:"+a+")?";l+=c==="$"?"$":"(?="+c+")"}else{if(!n)l+="(?:"+a+"(?="+c+"))?";if(!h)l+="(?="+a+"|"+c+")"}return new RegExp("^"+l,v(r))};var m=function(t,e,r){if(t instanceof RegExp){return p(t,e)}if(Array.isArray(t)){return d(t,e,r)}return y(t,e,r)};var b=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};var w=function(t,e){return b(t,e)?t.substr(e.length):t};var O=function(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t};var x=function(t){return t.charAt(0)==="/"?t:"/"+t};var T=function(t){return t.charAt(0)==="/"?t.substr(1):t};var P=function(t){var e=t||"/";var r="";var n="";var i=e.indexOf("#");if(i!==-1){n=e.substr(i);e=e.substr(0,i)}var a=e.indexOf("?");if(a!==-1){r=e.substr(a);e=e.substr(0,a)}return{pathname:e,search:r==="?"?"":r,hash:n==="#"?"":n,query:{},key:""}};var k=function(t){var e=t.pathname,r=t.search,n=t.hash;var i=e||"/";if(r&&r!=="?"){i+=r.charAt(0)==="?"?r:"?"+r}if(n&&n!=="#"){i+=n.charAt(0)==="#"?n:"#"+n}return i};var _=function(t){if(!t){return{}}return(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((function(t,e){var r=e.split("="),n=r[0],i=r[1];t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"";return t}),{})};var E=function(t){return t.charAt(0)==="/"};var A=function(t){return Math.random().toString(36).substr(2,t)};var j=function(t,e){for(var r=e,n=r+1,i=t.length;n<i;r+=1,n+=1){t[r]=t[n]}t.pop()};var L=function(t,e){if(e===void 0){e=""}var r=e&&e.split("/")||[];var n;var i=0;var a=t&&t.split("/")||[];var o=t&&E(t);var s=e&&E(e);var u=o||s;if(t&&E(t)){r=a}else if(a.length){r.pop();r=r.concat(a)}if(!r.length){return"/"}if(r.length){var c=r[r.length-1];n=c==="."||c===".."||c===""}else{n=false}for(var l=r.length;l>=0;l--){var f=r[l];if(f==="."){j(r,l)}else if(f===".."){j(r,l);i++}else if(i){j(r,l);i--}}if(!u){for(;i--;i){r.unshift("..")}}if(u&&r[0]!==""&&(!r[0]||!E(r[0]))){r.unshift("")}var h=r.join("/");if(n&&h.substr(-1)!=="/"){h+="/"}return h};var S=function(t,e){if(t===e){return true}if(t==null||e==null){return false}if(Array.isArray(t)){return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return S(t,e[r])}))}var r=typeof t;var n=typeof e;if(r!==n){return false}if(r==="object"){var i=t.valueOf();var a=e.valueOf();if(i!==t||a!==e){return S(i,a)}var o=Object.keys(t);var s=Object.keys(e);if(o.length!==s.length){return false}return o.every((function(r){return S(t[r],e[r])}))}return false};var R=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&S(t.state,e.state)};var U=function(t,e,r,n){var i;if(typeof t==="string"){i=P(t);if(e!==undefined){i.state=e}}else{i=Object.assign({pathname:""},t);if(i.search&&i.search.charAt(0)!=="?"){i.search="?"+i.search}if(i.hash&&i.hash.charAt(0)!=="#"){i.hash="#"+i.hash}if(e!==undefined&&i.state===undefined){i.state=e}}try{i.pathname=decodeURI(i.pathname)}catch(a){if(a instanceof URIError){throw new URIError('Pathname "'+i.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw a}}i.key=r;if(n){if(!i.pathname){i.pathname=n.pathname}else if(i.pathname.charAt(0)!=="/"){i.pathname=L(i.pathname,n.pathname)}}else{if(!i.pathname){i.pathname="/"}}i.query=_(i.search||"");return i};var C=0;var I={};var M=1e4;var H=function(t,e){var r=""+e.end+e.strict;var n=I[r]||(I[r]={});var i=JSON.stringify(t);if(n[i]){return n[i]}var a=[];var o=m(t,a,e);var s={re:o,keys:a};if(C<M){n[i]=s;C+=1}return s};var V=function(t,e){if(e===void 0){e={}}if(typeof e==="string"){e={path:e}}var r=e.path,n=r===void 0?"/":r,i=e.exact,a=i===void 0?false:i,o=e.strict,s=o===void 0?false:o;var u=H(n,{end:a,strict:s}),c=u.re,l=u.keys;var f=c.exec(t);if(!f){return null}var h=f[0],v=f.slice(1);var p=t===h;if(a&&!p){return null}return{path:n,url:n==="/"&&h===""?"/":h,isExact:p,params:l.reduce((function(t,e,r){t[e.name]=v[r];return t}),{})}};var q=function(t,e){if(t==null&&e==null){return true}if(e==null){return false}return t&&e&&t.path===e.path&&t.url===e.url&&S(t.params,e.params)};var D=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=V(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!q(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return t}());a.injectProps(D,["location","history","historyType","routeViewsUpdated"]);var N=function(t,e,r){return r(t.confirm(e))};var $=function(t){return t.metaKey||t.altKey||t.ctrlKey||t.shiftKey};var Y=function(t){var e=t.navigator.userAgent;if((e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1){return false}return t.history&&"pushState"in t.history};var B=function(t){return t.userAgent.indexOf("Trident")===-1};var W=function(t){return t.userAgent.indexOf("Firefox")===-1};var K=function(t,e){return e.state===undefined&&t.userAgent.indexOf("CriOS")===-1};var F=function(t,e){var r=t[e];var n="__storage_test__";try{r.setItem(n,n);r.removeItem(n);return true}catch(i){return i instanceof DOMException&&(i.code===22||i.code===1014||i.name==="QuotaExceededError"||i.name==="NS_ERROR_DOM_QUOTA_REACHED")&&r.length!==0}};var J=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var X=t("stencil_route_link",function(){function t(t){e(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=V(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if($(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(J(this.url,this.root))};t.prototype.render=function(){var t;var e={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){e.class[this.anchorClass]=true}if(this.custom==="a"){e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return r(this.custom,Object.assign({},e),r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());a.injectProps(X,["history","location","root"]);var z=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var Q=function(t,e,r){return V(t,{path:e,exact:r,strict:true})};var G=function(t){return t.tagName==="STENCIL-ROUTE"};var Z=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=z();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(G).map((function(r,n){var i=Q(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());a.injectProps(Z,["location","routeViewsUpdated"]);var tt=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var et=function(){var t;var e=[];var r=function(e){tt(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var a=typeof t==="function"?t(e,r):t;if(typeof a==="string"){if(typeof n==="function"){n(a,i)}else{tt(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(a!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var a=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:a}};var rt=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(F(t,"sessionStorage")){var i=[];r.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var a=function(t){return r.has(t)};var o=function(e){n(e,[t.scrollX,t.scrollY])};if(F(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:a,capture:o}};var nt="popstate";var it="hashchange";var at=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var a=t.navigator;var o=Y(t);var s=!B(a);var u=rt(t);var c=e.forceRefresh!=null?e.forceRefresh:false;var l=e.getUserConfirmation!=null?e.getUserConfirmation:N;var f=e.keyLength!=null?e.keyLength:6;var h=e.basename?O(x(e.basename)):"";var v=function(){try{return t.history.state||{}}catch(e){return{}}};var p=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,a=i.search,o=i.hash;var s=n+a+o;tt(!h||b(s,h),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+h+'".');if(h){s=w(s,h)}return U(s,r,e||A(f))};var d=et();var y=function(t){u.capture($.location.key);Object.assign($,t);$.location.scrollPosition=u.get($.location.key);$.length=n.length;d.notifyListeners($.location,$.action)};var g=function(t){if(!K(a,t)){T(p(t.state))}};var m=function(){T(p(v()))};var T=function(t){if(r){r=false;y()}else{var e="POP";d.confirmTransitionTo(t,e,l,(function(r){if(r){y({action:e,location:t})}else{P(t)}}))}};var P=function(t){var e=$.location;var n=E.indexOf(e.key);var i=E.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;I(a)}};var _=p(v());var E=[_.key];var j=0;var L=false;var S=function(t){return h+k(t)};var R=function(t,e){tt(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var a=U(t,e,A(f),$.location);d.confirmTransitionTo(a,r,l,(function(t){if(!t){return}var e=S(a);var s=a.key,u=a.state;if(o){n.pushState({key:s,state:u},"",e);if(c){i.href=e}else{var l=E.indexOf($.location.key);var f=E.slice(0,l===-1?0:l+1);f.push(a.key);E=f;y({action:r,location:a})}}else{tt(u===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var C=function(t,e){tt(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var a=U(t,e,A(f),$.location);d.confirmTransitionTo(a,r,l,(function(t){if(!t){return}var e=S(a);var s=a.key,u=a.state;if(o){n.replaceState({key:s,state:u},"",e);if(c){i.replace(e)}else{var l=E.indexOf($.location.key);if(l!==-1){E[l]=a.key}y({action:r,location:a})}}else{tt(u===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var I=function(t){n.go(t)};var M=function(){return I(-1)};var H=function(){return I(1)};var V=function(e){j+=e;if(j===1){t.addEventListener(nt,g);if(s){t.addEventListener(it,m)}}else if(j===0){t.removeEventListener(nt,g);if(s){t.removeEventListener(it,m)}}};var q=function(t){if(t===void 0){t=""}var e=d.setPrompt(t);if(!L){V(1);L=true}return function(){if(L){L=false;V(-1)}return e()}};var D=function(t){var e=d.appendListener(t);V(1);return function(){V(-1);e()}};var $={length:n.length,action:"POP",location:_,createHref:S,push:R,replace:C,go:I,goBack:M,goForward:H,block:q,listen:D,win:t};return $};var ot="hashchange";var st={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+T(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:T,decodePath:x},slash:{encodePath:x,decodePath:x}};var ut=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var a=false;var o=t.location;var s=t.history;var u=W(t.navigator);var c=e.keyLength!=null?e.keyLength:6;var l=e.getUserConfirmation,f=l===void 0?N:l,h=e.hashType,v=h===void 0?"slash":h;var p=e.basename?O(x(e.basename)):"";var d=st[v],y=d.encodePath,g=d.decodePath;var m=function(){var t=o.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var T=function(t){return o.hash=t};var P=function(t){var e=o.href.indexOf("#");o.replace(o.href.slice(0,e>=0?e:0)+"#"+t)};var _=function(){var t=g(m());tt(!p||b(t,p),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+p+'".');if(p){t=w(t,p)}return U(t,undefined,A(c))};var E=et();var j=function(t){Object.assign(z,t);z.length=s.length;E.notifyListeners(z.location,z.action)};var L=function(){var t=m();var e=y(t);if(t!==e){P(e)}else{var i=_();var a=z.location;if(!r&&R(a,i)){return}if(n===k(i)){return}n=null;S(i)}};var S=function(t){if(r){r=false;j()}else{var e="POP";E.confirmTransitionTo(t,e,f,(function(r){if(r){j({action:e,location:t})}else{C(t)}}))}};var C=function(t){var e=z.location;var n=V.lastIndexOf(k(e));var i=V.lastIndexOf(k(t));if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;Y(a)}};var I=m();var M=y(I);if(I!==M){P(M)}var H=_();var V=[k(H)];var q=function(t){return"#"+y(p+k(t))};var D=function(t,e){tt(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=U(t,undefined,A(c),z.location);E.confirmTransitionTo(i,r,f,(function(t){if(!t){return}var e=k(i);var a=y(p+e);var o=m()!==a;if(o){n=e;T(a);var s=V.lastIndexOf(k(z.location));var u=V.slice(0,s===-1?0:s+1);u.push(e);V=u;j({action:r,location:i})}else{tt(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");j()}}))};var $=function(t,e){tt(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=U(t,undefined,A(c),z.location);E.confirmTransitionTo(i,r,f,(function(t){if(!t){return}var e=k(i);var a=y(p+e);var o=m()!==a;if(o){n=e;P(a)}var s=V.indexOf(k(z.location));if(s!==-1){V[s]=e}j({action:r,location:i})}))};var Y=function(t){tt(u,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var B=function(){return Y(-1)};var K=function(){return Y(1)};var F=function(t,e){i+=e;if(i===1){t.addEventListener(ot,L)}else if(i===0){t.removeEventListener(ot,L)}};var J=function(e){if(e===void 0){e=""}var r=E.setPrompt(e);if(!a){F(t,1);a=true}return function(){if(a){a=false;F(t,-1)}return r()}};var X=function(e){var r=E.appendListener(e);F(t,1);return function(){F(t,-1);r()}};var z={length:s.length,action:"POP",location:H,createHref:q,push:D,replace:$,go:Y,goBack:B,goForward:K,block:J,listen:X,win:t};return z};var ct=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var lt={browser:at,hash:ut};var ft=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=lt[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=ct(e,t.root);t.location=e}));this.location=ct(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(a.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}}));