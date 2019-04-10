function escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function parseURL(e){var t=document.createElement("a");return t.href=e,t}function debounce(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,n||e.apply(i,s)},u=n&&!r;clearTimeout(r),r=setTimeout(o,t),u&&e.apply(i,s)}}(function(){window.$&&window.$.ajaxPrefilter&&$(function(){return $.ajaxPrefilter(function(e,t,n){var r,i;return i=$("meta[name=csrf-token]"),r=i?i.attr("content"):"",n.setRequestHeader("x-stripe-csrf-token",r)})})}).call(this),Prism.languages.bash["function"]={pattern:new RegExp(/(^|\s|;|\||&)(?:pip|easy_install|gem|npm|go|get)(?=$|\s|;|\||&)/.source+"|"+Prism.languages.bash["function"].pattern.source)},Prism.languages.insertBefore("bash","function",{stripe:/(^|\s|;|\||&)(?:stripe)(?=$|\s|;|\||&)/,url:/(https?:\/\/)?\w*\.\w{2,3}[a-zA-Z0-9:.?=\/\-_]*/,option:/\b--?[a-zA-Z]*\b/}),Prism.languages.url={parameter:/[A-Za-z0-9\[\]-_]+(?=[=])/,value:{pattern:/([=])([^=&]*)/,lookbehind:!0}},Prism.languages.iris={string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/if|and|or/,"function":/Block|Allow|Review/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*:/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i};var erbOptions={pattern:/(<%(.*)%>)/i,inside:Prism.languages.ruby,alias:"language-ruby"};Prism.languages.erb=Prism.languages.html,Prism.languages.insertBefore("erb","tag",{erb:erbOptions}),Prism.languages.objc=Prism.languages.objectivec,Prism.languages.insertBefore("objc","keyword",{builtin:Prism.languages.swift.builtin}),Prism.languages.ruby.keyword=new RegExp(Prism.languages.ruby.keyword.source+/|private/.source),Prism.languages.ruby["function"]={pattern:/(\.)[a-z0-9_]+(?=[\(\n \[,])/i,lookbehind:!0},Prism.languages.curl={curl:/\bcurl\b/,url:/https?:[a-zA-Z0-9:.?=\/\-_{}]*/,parameter:{pattern:/[A-Za-z0-9\[\]-_]+ *(?=[=])/},value:[{pattern:/([=])([A-Za-z0-9-_.]*)/,lookbehind:!0},{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/},{pattern:/(\-u )([A-Za-z0-9-_.{}]*)/,lookbehind:!0}],option:/ *-[a-zA-Z]*\b/},Prism.languages.javascript.string.inside={erb:erbOptions},Prism.languages.insertBefore("javascript","punctuation",{erb:erbOptions}),Prism.languages.insertBefore("javascript","punctuation",{symbol:{pattern:/([a-zA-Z][a-zA-Z0-9-_]*)(?: *[:])/,inside:{punctuation:/:/}},property:{pattern:/([.])[a-zA-Z-_]*/,lookbehind:!0}}),Prism.languages.insertBefore("php","package",{namespace:{pattern:/\\[A-Z][A-Za-z]+/}}),Prism.languages.insertBefore("python","comment",{parameter:{pattern:/([\(,] *(#.*)?[.\n]* *)[A-Za-z]+ *(?=[=])/,lookbehind:!0,inside:{operator:/=/}}}),Prism.languages.insertBefore("python","punctuation",{"function":{pattern:/[A-Za-z]+(?=\()/,inside:{punctuation:/[.]/}},constant:{pattern:/stripe[A-Za-z-_.]*/},variable:{pattern:/([.])[A-Za-z-_]+/,lookbehind:!0}}),Prism.languages.insertBefore("java","class-name",{constant:{pattern:/\b[A-Z][a-zA-Z-_]*(<[A-Z][a-zA-Z, ]*>)?/}}),Prism.languages.insertBefore("go","comment",{symbol:{pattern:/([\{,] *(\/\/.*)?[.\n]* *)[A-Za-z]+:/,lookbehind:!0,inside:{operator:/=/}},constant:{pattern:/&[A-Za-z. ]*(?={)/}}),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[{pattern:/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,greedy:!0},{pattern:/("|')(\\?.)*?\1/,greedy:!0}],number:/\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i}),Prism.languages.insertBefore("csharp","keyword",{"generic-method":{pattern:/[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,alias:"function",inside:{keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,greedy:!0,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},Prism.languages.markup.tag.inside["attr-value"].inside={punctuation:/[=>]/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/},function(){if(typeof self=="undefined"||!self.Prism||!self.document)return;Prism.hooks.add("complete",function(e){if(!e.code)return;var t=e.element.parentNode;if(!t.classList.contains("numbered"))return;var n=e.code.match(/\n(?!$)/g),r=n?n.length+1:1,i,s=new Array(r+1);s=s.join("<span></span>"),i=document.createElement("span"),i.className="line-numbers",i.innerHTML=s,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),t.appendChild(i)})}(),function(){function e(e){var t=[],n;for(var r=0;r<e.length;r++){var i=e[r];n?n[1]==i-1?n[1]=i:(t.push(n),n=[i,i]):n=[i,i]}return n&&t.push(n),t}function t(t,n,r){var r=r.split(",").map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),i=e(r),s=parseInt(getComputedStyle(n).lineHeight),o=t.querySelectorAll(".line-numbers span"),u;for(var a=0;a<i.length;a++){var f=i[a],l=f[0],c=f[1],h=document.createElement("div");h.className="highlighted-line",h.style.top=(l-1)*s+"px",h.style.height=(c-l+1)*s+"px",t.insertBefore(h,t.firstChild);for(var p=l;p<=c;p++)o[p-1].classList.add("highlighted")}}Prism.hooks.add("complete",function(e){var n=e.element.parentNode,r=n&&n.getAttribute("data-highlight-lines");if(!n||!r||!/pre/i.test(n.nodeName))return;t(n,e.element,r)})}();var tools=function(){var e=function(e,t){var n={};for(k in e)n[k]=e[k];for(k in t)n[k]=t[k];return n},t=function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)};return{merge:e,remove:t}}(),scroll=function(){var e=document.querySelector("#content-wrapper");return{get:function(){return e.scrollTop},set:function(t){e.scrollTop=t},el:function(){return e}}}(),faqs=function(){function e(e){var t=e.querySelectorAll("dl.collapsable dt");for(var n=0;n<t.length;n++)(function(){var e=t[n];e.addEventListener("click",function(){e.classList.toggle("expanded")})})()}return{run:e}}(),tabs=function(){function n(e){t=[];var n=e.querySelectorAll("div.tabs");for(var r=0;r<n.length;r++){var i=n[r];i.getAttribute("data-ignore")||a(i)}}function r(e){return!e||e==="server"?"lang":"lang-"+e}function i(t){return e[t]?e[t]:e[t]=$.cookie(r(t))}function s(n,s){if(n===i(s))return;e[s]=n,$.cookie(r(s),n,{expires:1825,path:"/",domain:function(){var e=window.location.hostname||"stripe.com";return e.match("stripe.com")?".stripe.com":e}()});for(var u=0;u<t.length;u++)o(t[u])}function o(e){var t=f(e.tabs,i(e.platform));if(!t)return;u(e,t)}function u(e,t,n){if(e.currentTab===t)return;n=n==null?!0:n;var r=e.el.getBoundingClientRect(),i=window.innerHeight;n=n&&r.top<i&&r.top+r.height>0&&e.animated;var s=e.currentTab;e.currentTab=t,requestAnimationFrame(function(){s&&(s.link&&s.link.classList.remove("selected"),s.el.classList.add("absolute"),dynamics.animate(s.el,{opacity:0,translateX:-300*(s.index<t.index?1:-1)},{friction:250,duration:300,animated:n,complete:function(){s!==e.currentTab&&s.el.classList.remove("selected")}})),t.link&&t.link.classList.add("selected"),t.el.classList.remove("absolute"),t.el.classList.add("selected"),dynamics.css(t.el,{opacity:0,translateX:300*(s.index<t.index?1:-1)}),dynamics.animate(t.el,{opacity:1,translateX:0},{friction:250,duration:300,animated:n,delay:50}),e.callback&&window[e.callback]&&window[e.callback](t.el.getAttribute("id"))})}function a(e){var n=e.querySelectorAll("nav a"),r=e.querySelector("nav select"),o=e.querySelectorAll(".tabs-content > pre, .tabs-content > .code, .tabs-content > .tabs-tab"),a=e.getAttribute("data-platform"),l=e.getAttribute("data-save-url"),c=e.getAttribute("data-save-url-prefix"),p=e.querySelector("nav a.selected"),d={el:e,animated:e.classList.contains("animated"),callback:e.getAttribute("data-callback"),currentTab:null,tabs:[],platform:a};for(var v=0;v<o.length;v++)(function(){var e=n[v],t=e&&e.getAttribute("data-language"),r={index:v,link:e,el:o[v],language:t};l&&(r.hash="#"+(c||"")+r.el.getAttribute("id")),d.tabs.push(r),e&&e.addEventListener("click",function(n){n.preventDefault();if(t){var i=scroll.get(),o=e.getBoundingClientRect().top;s(t,a),requestAnimationFrame(function(){var t=e.getBoundingClientRect().top;scroll.set(i+(t-o)),i=scroll.get(),t=e.getBoundingClientRect().top,scroll.set(i+(t-o))})}else l&&history.replaceState({},"",window.location.pathname+r.hash),u(d,r)})})();r&&r.addEventListener("change",function(){u(d,d.tabs[r.selectedIndex])}),t.push(d);var m=f(d.tabs,i(d.platform));r&&(m=m||d.tabs[r.selectedIndex]),p&&(m=m||h(d,p)),m=m||d.tabs[0],m&&(d.currentTab=m,m.link&&(d.tabs.map(function(e){e.link.classList.remove("selected")}),m.link.classList.add("selected")),m.el.classList.add("selected"));if(l&&window.location.hash)for(var v=0;v<d.tabs.length;v++){var g=d.tabs[v];g.hash===window.location.hash&&u(d,g)}}function f(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.language===t)return r}return null}function l(e){for(var n=0;n<t.length;n++){var r=t[n];if(r.el===e)return r}return null}function c(e,t){for(var n=0;n<e.tabs.length;n++){var r=e.tabs[n];if(r.el===t)return r}return null}function h(e,t){for(var n=0;n<e.tabs.length;n++){var r=e.tabs[n];if(r.link===t)return r}return null}var e={},t;return{select:function(e,t,n){var r=l(e);if(!r){console.error("These tabs don't exist ",e);return}var i=c(r,t);if(!i){console.error("This tab doesn't exist ",t);return}u(r,i,n)},run:n}}(),anchors=function(){function e(e){var t=e.querySelectorAll("h2, h3, h4, h5, h6");for(var n=0;n<t.length;n++){var r=t[n],i=r.getAttribute("id"),s=r.getAttribute("data-no-anchor");if(!i&&s===null){var i=r.textContent;i=i.replace(/^[^a-zA-Z]+/,""),i=i.replace(/[^a-zA-Z0-9 -]/g,""),i=i.replace(/ /g,"-"),i=i.toLowerCase(),r.setAttribute("id",i)}if(i){var o=document.createElement("a");o.classList.add("anchor"),o.setAttribute("href","#"+i),r.appendChild(o)}}}return{run:e}}(),zoomableImages=function(){function i(){if(e)return;e=document.createElement("div"),e.classList.add("fullscreen-container"),t=document.createElement("div"),t.classList.add("fullscreen-overlay"),e.appendChild(t),document.body.appendChild(e)}function s(e,t,n){var r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),s=e.parentNode.getBoundingClientRect(),o=n.getBoundingClientRect(),u=o.width/o.height,a=i.width/i.height,f=0;return translateX=o.left,translateY=o.top,u>a?(f=o.width/i.width,translateY+=(o.height/f-i.height)/2*f):(f=o.height/i.height,translateX+=(o.width/f-i.width)/2*f),translateX+=(s.left-i.left)*f,translateY+=(s.top-i.top)*f,{translateX:translateX,translateY:translateY,scaleX:f,scaleY:f}}function o(e,t,n){var r=new Image;r.addEventListener("load",function(){var e=document.createElement("canvas");e.width=this.naturalWidth,e.height=this.naturalHeight,e.getContext("2d").drawImage(this,0,0),u(e.toDataURL("image/png"),t,n)}),r.src=e}function u(o,u,f){c(),d(),i(),dynamics.css(e,{display:""});var l=document.createElement("div");l.classList.add("fullscreen-image-container"),l.addEventListener("click",function(){a()});var h=document.createElement("div");h.classList.add("fullscreen-image-wrapper");var p=document.createElement("div");p.classList.add("fullscreen-image"),p.style.backgroundImage="url("+o+")",p.addEventListener("click",function(){a()}),l.appendChild(h),h.appendChild(p),r={originalImageEl:u,imageContainerEl:l,imageWrapperEl:h,imageEl:p},dynamics.css(p,{maxWidth:f.width,maxHeight:f.height}),e.appendChild(l);var v=s(h,p,u);dynamics.css(l,v),dynamics.css(u,{visibility:"hidden"}),dynamics.animate(t,{opacity:.85},{duration:250}),dynamics.animate(l,{scale:1},n)}function a(){if(!r)return;var i=r.originalImageEl,o=r.imageContainerEl,u=r.imageWrapperEl,a=r.imageEl;l(),p();var f=s(u,a,i),c=e.getBoundingClientRect();document.body.appendChild(o),dynamics.css(o,{top:0,left:0,width:c.width,height:c.height}),dynamics.animate(r.imageEl,{scale:1},{duration:200}),dynamics.animate(o,f,tools.merge(n,{complete:function(){r||dynamics.css(e,{display:"none"}),dynamics.css(i,{visibility:""}),o.parentNode.removeChild(o)}})),dynamics.animate(t,{opacity:0},{duration:250}),r=null}function l(){clearTimeout(v),document.removeEventListener("scroll",g)}function c(){f=scroll.get(),l(),document.addEventListener("scroll",g)}function h(e){e.keyCode===27&&a()}function p(){document.removeEventListener("keyup",h)}function d(){p(),document.addEventListener("keyup",h)}function m(){dynamics.animate(r.imageWrapperEl,{translateY:0},{duration:500,friction:200,complete:function(){f=scroll.get()}})}function g(e){var t=scroll.get()-f,n=Math.abs(t)/180;dynamics.stop(r.imageWrapperEl),dynamics.css(r.imageWrapperEl,{translateY:-t/2,scale:1-n*.06}),n>1?a():(clearTimeout(v),v=setTimeout(m,50))}function y(e){var t=e.querySelectorAll("a.zoomable");for(var n=0;n<t.length;n++)(function(){var e=t[n],r=e.querySelector("img");e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("href")||originalImageEl.getAttribute("src");o(n,r,{width:parseInt(e.getAttribute("data-width")),height:parseInt(e.getAttribute("data-height"))})})})()}var e,t,n={type:dynamics.spring,frequency:150,friction:340,anticipationStrength:0,anticipationSize:0,duration:500},r={},f,v;return{run:y}}(),parseKey=function(){function e(e,t){var n={top:Math.max(e.top,t.top),left:Math.max(e.left,t.left),bottom:Math.min(e.bottom,t.bottom),right:Math.min(e.right,t.right)};return n.width=n.right-n.left,n.height=n.bottom-n.top,n.width<0||n.height<0?null:n}function t(e){var t=document.createElement("div");return t.classList.add("key-popover"),t.innerHTML='<div class="key-popover-tick"></div>'+e,document.body.appendChild(t),t}function n(n,r,i){function f(){n.style.pointerEvents="none"}function l(){n.style.pointerEvents="auto"}var s=r==="secret-key"?"secret":"publishable",o=i?"your":"a demo",u="This is "+o+" <strong>test</strong> "+s+" key.";i?(u+="<br>",i.name&&(u+='<span class="key-popover-merchant"><span class="key-popover-merchant-icon" style="background-image:url('+escapeHtml(i.icon)+');"></span>'+escapeHtml(i.name)+"</span>"),u+='<a href="https://dashboard.stripe.com/account/apikeys" target="_blank">View your other keys</a>'):u+='<br><a href="https://dashboard.stripe.com/login?redirect='+encodeURIComponent(window.location.href)+'">Sign in</a> to automatically see your own key.',n.classList.add(r);var a=!1;window.addEventListener("mousedown",f),window.addEventListener("mouseup",l),page.onPageChange(function(){window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",l)}),n.addEventListener("mouseover",function(){function h(){a=!1,n.classList.remove("enabled"),dynamics.animate(r,{scale:.8,opacity:0},{friction:200,duration:200,type:dynamics.easeIn,complete:function(){document.body.removeChild(r)}}),window.removeEventListener("mousemove",p),scroll.el().removeEventListener("scroll",h)}function p(e){var t=e.target;t&&n!=t&&r!=t&&!$.contains(n,t)&&!$.contains(r,t)&&h()}if(a)return;n.classList.add("enabled"),a=!0;var r=t(u),i=r.getBoundingClientRect(),s=n.getBoundingClientRect(),o=n.parentNode;while(o&&o.tagName.toLowerCase()!=="pre")o=o.parentNode;if(o){var f=o.getBoundingClientRect(),l=e(s,f);l&&(s=l)}r.style.top=Math.round(s.top-i.height)+"px";var c=Math.round(s.left+s.width/2-i.width/2+document.body.scrollLeft);c+i.width+10>document.body.clientWidth&&(c=document.body.clientWidth-(i.width+10)),r.style.left=c+"px",dynamics.css(r,{scale:.8}),r.style.visibility="visible",dynamics.animate(r,{scale:1,opacity:1},{type:dynamics.spring,friction:500}),window.addEventListener("mousemove",p),scroll.el().addEventListener("scroll",h)})}return function(e,t,r){Prism.hooks.add("complete",function(i){var s="";i.language==="curl"?s=".token.value":s=".token.string";var o=i.element.querySelectorAll(s);for(var u=0;u<o.length;u++){var a=o[u];a.textContent.match(e)&&n(a,t,r)}})}}(),sidebar=function(){function f(e,t){t==undefined&&(t=!0),e.removeAttribute("data-hidden"),e.classList.remove("hidden");var n=v(e);dynamics.animate(e,{opacity:1,height:n},{friction:250,duration:Math.max(150,n/3),animated:t})}function l(e){e.setAttribute("data-hidden",!0);var t=v(e);dynamics.animate(e,{opacity:0,height:0},{friction:250,duration:Math.max(150,t/3),complete:function(){e.classList.add("hidden")}})}function c(e){var t=$(i).filter(":not([data-hidden=true])"),n=t.get(0);n&&l(n),n!=e&&f(e)}function h(e){return e.classList.contains("hidden")}function v(e){var t=parseInt(e.getAttribute("data-height")),n=$(e).find("ul:not([data-hidden=true]):not([data-collapsable=false])").get();for(var r=0;r<n.length;r++)t+=parseInt(n[r].getAttribute("data-height"));return t}function m(e,t){t.setAttribute("data-trigger-id",d),p[d]=e;var n=e.getBoundingClientRect(),r=n.height,i=$(e).find("ul:not([data-hidden=true]):not([data-collapsable=false])").get();for(var s=0;s<i.length;s++){var n=i[s].getBoundingClientRect();r-=n.height}e.setAttribute("data-height",r),h(e)&&dynamics.css(e,{opacity:0,height:0}),d++}function y(){if(!a)return;var e=[],t=$(o).filter(":not([data-hidden=true]):not([data-collapsable=false])").get(),n=a.getAttribute("data-trigger-id");if(n){var r=p[parseInt(n)];r&&(tools.remove(t,r),e.push(r))}var i=$(a).closest("ul");while(i.length>0){var s=i.get(0);tools.remove(t,s),e.push(s),i=i.parent().closest("ul")}for(var u=0;u<t.length;u++)l(t[u]);for(var u=0;u<e.length;u++)f(e[u])}function b(e){return e}function S(e){var t=w[b(e)];a&&(a.classList.remove("selected"),a=null),t&&(t.classList.add("selected"),a=t),y()}var e=document.querySelector("#content-wrapper"),t=document.querySelector("#sidebar"),n=t.querySelector("nav"),r=t.querySelectorAll("h1 a.toggle-content"),i=t.querySelectorAll("nav > ul"),s=t.querySelectorAll("nav > ul ul"),o=Array.prototype.slice.call(i).concat(Array.prototype.slice.call(s)),u=t.querySelectorAll("a"),a=t.querySelector("a.selected");e.focus(),t.addEventListener("click",function(){e.focus()}),n.addEventListener("scroll",function(){n.scrollTop>=37?t.classList.add("bordered"):t.classList.remove("bordered")});var p={},d=0;for(var g=0;g<r.length;g++)(function(){var e=r[g],t=i[g];m(t,e),e.addEventListener("click",function(e){e.preventDefault(),c(t)})})();for(var g=0;g<s.length;g++)(function(){var e=s[g],t=e.parentNode.querySelector("a");m(e,t)})();var w={};for(var g=0;g<u.length;g++){var E=u[g];w[b(E.pathname)]=E}return{select:S}}(),setLoadingProgress=function(){var e=$("#loading-bar"),t=0,n;return function(r){r=Math.round(r*100)/100,(t!==0||r!==1)&&e.css({width:Math.min(1,r)*100+"%"}),r>=1||r<=0?n=setTimeout(function(){e.addClass("hidden")},150):(clearTimeout(n),e.hasClass("hidden")&&(e[0].offsetTop,e.removeClass("hidden"))),t=r}}(),links=function(){function e(e){var t=e.querySelectorAll("a");for(var n=0;n<t.length;n++){var r=t[n],i=r.getAttribute("href");r.addEventListener("click",page.openLink)}}return{run:e}}(),overlayController=function(){function s(){t.style.visibility="hidden",t.removeEventListener("transitionend",s),n.classList.remove("has-overlay")}var e=null,t=document.querySelector(".overlay"),n=document.querySelector("#content-wrapper"),r=document.querySelector("#main-header"),i=document.querySelector("#content");return t.addEventListener("click",function(){e&&e()}),{show:function(o){e=o,t.style.height=r.clientHeight+i.clientHeight+"px",t.style.visibility="visible",t.offsetTop,t.removeEventListener("transitionend",s),t.classList.add("visible"),n.classList.add("has-overlay")},hide:function(){e=null,t.addEventListener("transitionend",s),t.classList.remove("visible")}}}(),extraLines=function(){return{run:function(e){var t=e.querySelectorAll(".code");Array.prototype.forEach.call(t,function(e){var t=e.querySelector(".show-extra-lines");t&&t.addEventListener("click",function(n){n.preventDefault();var r=e.querySelector("pre code"),i=e.querySelector(".extra-lines");r.innerHTML+="\n"+i.innerHTML,Prism.highlightElement(r),t.style.display="none"})})}}}(),hooks=function(){var e=[];return{push:function(t){e.push(t)},run:function(t){for(var n=0;n<e.length;n++)e[n](t)},hooks:e}}();hooks.push(function(e){var t=e.querySelectorAll("pre code");for(var n=0;n<t.length;n++)Prism.highlightElement(t[n])}),hooks.push(tabs.run),hooks.push(zoomableImages.run),hooks.push(faqs.run),hooks.push(anchors.run),hooks.push(links.run),hooks.push(extraLines.run);var page=function(){function u(){i=setInterval(function(){s+=.1,(new Date).getTime()>o+200&&(setLoadingProgress(s),s>=.8&&clearInterval(i))},100)}function a(){clearInterval(i)}function f(e){var t;return e&&(t=document.getElementById(e.substring(1))),t?(t.scrollIntoView(),!0):!1}function c(i){for(var c=0;c<l.length;c++)l[c].abort();l=[],a(),setLoadingProgress(0),s=0,u(),o=(new Date).getTime(),$.ajax({type:"GET",url:i.href,dataType:"json",xhr:function(){var e=new window.XMLHttpRequest;return e.addEventListener("progress",function(e){e.lengthComputable&&(a(),(new Date).getTime()>o+200&&setLoadingProgress(s+(.9-s)*e.loaded/e.total))},!1),e},beforeSend:function(e){l.push(e)},complete:function(e){a();var t=l.indexOf(e);t>-1&&l.splice(t,1)},error:function(e){e.statusText!=="abort"&&window.open(i.href,"_self")},success:function(s,o,u){for(var a=0;a<r.length;a++)r[a]();r=[],s.head_css&&$(document.head).append(s.head_css),$(t).html(s.html),s.documentation_footer_js&&$(document.body).append(s.documentation_footer_js),n.textContent=s.title,f(i.hash)||scroll.set(0),hooks.run(t),t.offsetTop,setLoadingProgress(1);var l=u.getResponseHeader("X-Location");l&&history.replaceState({},"",l+document.location.hash),e=JSON.parse(JSON.stringify(document.location))}})}var e=JSON.parse(JSON.stringify(document.location)),t=document.querySelector("article#content"),n=document.querySelector("head title"),r=[],i,s,o,l=[];return window.addEventListener("popstate",function(t){document.location.pathname!=e.pathname?(sidebar.select(document.location.pathname),c(document.location)):f(document.location.hash)||scroll.set(0)}),{openLink:function(e){if(e.metaKey||e.ctrlKey)return;var t=$(e.target).closest("a").get(0);if(t.classList.contains("search-link")){var n=document.querySelector(".search input");n&&(n.focus(),n.select())}page.openURL(t)&&e.preventDefault&&e.preventDefault()},openURL:function(e){return e.pathname&&e.pathname.match(/^\/docs/)&&!e.pathname.match(/^\/docs\/api/)?(history.pushState({},"",e.href),sidebar.select(e.pathname),c(e),!0):e.pathname.match(/^\/docs\/api/)?(window.location=e,!0):!1},scrollToHash:function(){f(document.location.hash)},onPageChange:function(e){r.push(e)}}}();window.addEventListener("pageshow",function(e){e.persisted&&window.location.reload()}),hooks.run(document.querySelector("article#content")),links.run(document.querySelector("#sidebar")),page.scrollToHash();