(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n#leaderboard {\n  width: 40%;\n  margin: 20px 2%;\n  border-collapse: collapse ;\n}\n\n#leaderboard th,\n#leaderboard td {\n  padding: 8px;\n  border: 1px solid #ddd;\n  text-align: center;\n}\n\n#leaderboard th {\n  background-color: #f5f5f5;\n}\n\n\nh1 {\n  text-align: left;\n  margin-top: 20px;\n  margin-left: 2%;\n}\n\n\nh2 {\n  display: inline-block;\n  margin-top: 20px;\n  margin-right: 20%;\n  margin-left: 2%;\n}\n\n.button-container {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.refresh {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 5px 15px;\n  cursor: pointer;\n}\n\n/* Leaderboard styles */\n#leaderboard {\n  list-style: none;\n  padding: 0;\n}\n\n.leaderboard-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n}\n\n/* Add Your Score section */\nh3 {\n  margin-top: 20px;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\ninput[type="text"] {\n  width: 100%;\n  padding: 5px;\n  margin-right: 10px;\n  border: 1px solid #ddd;\n}\n\n.submit {\n  background-color: #28a745;\n  color: white;\n  border: none;\n  margin-top: 3%;\n  padding: 5px 15px;\n  cursor: pointer;\n}\n\n.add-score-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: -28%;\n  margin-left: 60%;\n}\n\n.add-score-container label,\n.add-score-container input[type="text"],\n.add-score-container .submit {\n  margin-bottom: 10px;\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=[{name:"Player 1",score:100},{name:"Player 2",score:20},{name:"Player 3",score:50},{name:"Player 4",score:78},{name:"Player 5",score:125},{name:"Player 6",score:77},{name:"Player 7",score:42}];document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.getElementById("leaderboard").getElementsByTagName("tbody")[0];g.forEach((e=>{const t=n.insertRow(),r=t.insertCell(0),o=t.insertCell(1);r.textContent=e.name,o.textContent=e.score}))}()}))})()})();