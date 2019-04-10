(function(){function p(){typeof window.sessionStorage!="undefined"&&(sessionStorage.setItem("docs-search-query",h.query),sessionStorage.setItem("docs-search-index",h.selectedIndex))}function d(e){if(e.keyCode===40)h.selectedIndex<l-1&&(h.selectedIndex+=1,p(),y()),e.preventDefault();else if(e.keyCode===38)h.selectedIndex>0&&(h.selectedIndex-=1,p(),y()),e.preventDefault();else if(e.keyCode===13){var t=u.querySelector("li.selected a");t&&(n.dispatchEvent(new Event("openSearchResult")),m(),page.openURL(t),e.preventDefault())}}function v(){if(a)return;a=!0,document.addEventListener("keydown",d),overlayController.show(m),s.style.visibility="visible",dynamics.animate(s,{opacity:1},{type:dynamics.easeInOut,friction:350,duration:250}),h.selectedIndex=0,p(),y()}function m(){if(!a)return;a=!1,document.removeEventListener("keydown",d),overlayController.hide(),dynamics.animate(s,{opacity:0},{type:dynamics.easeInOut,duration:250,complete:function(){s.style.visibility="hidden"}})}function g(e,n){if(e===c)return;if(/[0-9-\s]{12,20}/.test(e)||e.indexOf("sk_")>-1){l=0,w([]);return}c=e,t.search(e,{attributesToHighlight:"hierarchy,content",highlightPreTag:"[h]",highlightPostTag:"[/h]",hitsPerPage:10},function(e,t){if(!e){var r={},i=t.hits.filter(function(e){var t=parseURL(e.url);return r[t.pathname]=!0,!0}),s=["recipes","more recipes","next steps","next up","up next"],o=i.map(function(e){var t=Object.keys(e._highlightResult.hierarchy).sort(),n="",r="";for(var i=t.length-1;i>0;i--){var o=e._highlightResult.hierarchy[t[i]];o&&(o=o.value),o&&r!==o&&s.indexOf(o.toLowerCase())===-1&&(n.length>0&&(n=" › "+n),n=o+n,r=o)}var u=parseURL(e.url);return{title:n,url:u.pathname+(u.hash==="#content"?"":u.hash),content:e._highlightResult.content&&e._highlightResult.content.value,type:"page",declaration:""}});n||(h.selectedIndex=0,p()),w(o)}})}function y(){var e=u.querySelector("li.selected")||u.querySelector("li:first-child");if(!e)return;e.classList.remove("selected"),e=u.querySelector("li:nth-child("+(h.selectedIndex+1)+")"),e.classList.add("selected");var t=e.getBoundingClientRect(),n=t.top-12,r=t.top+t.height+12;h.selectedIndex===0?document.body.scrollTop=0:n<0?document.body.scrollTop=document.body.scrollTop+n:r>=window.innerHeight&&(document.body.scrollTop=document.body.scrollTop-(window.innerHeight-r))}function b(e){if(typeof DOMParser=="function"){var t=(new DOMParser).parseFromString(e,"text/html");e=t.documentElement.textContent}else e=$("<div/>").text(e).html();return e=e.replace(/\[h\]/g,"<em>"),e=e.replace(/\[\/h\]/g,"</em>"),e}function w(e){l=e.length;var t=document.createDocumentFragment();for(var n=0;n<e.length;n++){var r=e[n],i=document.createElement("li");n===h.selectedIndex&&i.classList.add("selected");var s=document.createElement("a");s.innerHTML=b(r.title),s.href=r.url,s.addEventListener("click",function(e){m(),page.openLink(e)}),i.appendChild(s);if(r.declaration){var a=document.createElement("div");a.classList.add("tag"),a.classList.add("method"),a.innerText=r.declaration.replace(/http.*\/v1/,"/v1"),i.appendChild(a)}if(r.type==="reference"||r.url.indexOf("/docs/api")!==-1){var a=document.createElement("div");a.classList.add("api-reference"),i.appendChild(a)}if(r.content){var f=document.createElement("p");f.innerHTML=b(r.content),i.appendChild(f)}t.appendChild(i)}u.innerHTML="",u.appendChild(t),l===0?o.style.visibility="visible":o.style.visibility=""}var e=algoliasearch("Y4PFTTJ91H","13cb82a358f97cd95f3321f14d6c3e44"),t=e.initIndex("stripe-docs"),n=document.querySelector(".search"),r=n.querySelector("input"),i=n.querySelector(".search-text"),s=document.querySelector(".search-results"),o=document.querySelector(".search-after-text--no-results"),u=s.querySelector(".results"),a=!1,f=debounce(g,100),l=0,c=null,h={query:"",selectedIndex:0};(function(){if(typeof window.sessionStorage!="undefined"){var e=sessionStorage.getItem("docs-search-query"),t=sessionStorage.getItem("docs-search-index")||0;e&&(h.query=e,h.selectedIndex=t,r.value=h.query,i.textContent=h.query,g(h.query,!0)),document.addEventListener("keyup",function(e){if(e.keyCode==191||e.keyCode==83)if(document.activeElement!=r)return r.focus(),r.select(),!1})}})(),r.addEventListener("keyup",function(){var e=r.value;h.query!==e&&(h.query=e,i.textContent=e,o.style.visibility="",p(),e.length>0?(v(),f(e)):m())}),r.addEventListener("focus",function(){var e=r.value;e.length>0&&v(),r.select()}),u.addEventListener("mousedown",function(e){var t=e.target;while(t&&t.tagName!=="LI")t=t.parentNode;if(t){var n=t.parentNode.children;n=Array.prototype.slice.call(n,this),h.selectedIndex=n.indexOf(t),p(),y()}})})();