var index=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){function e(n,i){try{var a=t[n](i),o=a.value,s=o instanceof function(t){this.wrapped=t};Promise.resolve(s?o.wrapped:o).then(function(t){s?e("next",t):r(a.done?"return":"normal",t)},function(t){e("throw",t)})}catch(t){r("throw",t)}}function r(t,r){switch(t){case"return":n.resolve({value:r,done:!0});break;case"throw":n.reject(r);break;default:n.resolve({value:r,done:!1})}(n=n.next)?e(n.key,n.arg):i=null}var n,i;this._invoke=function(t,r){return new Promise(function(a,o){var s={key:t,arg:r,resolve:a,reject:o,next:null};i?i=i.next=s:(n=i=s,e(t,r))})},"function"!=typeof t.return&&(this.return=void 0)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],s(r),s(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(g),r=1;r<e.length;r++)e=(t=s(e,r).join("")).match(g);return t}}function u(e){return Array.isArray(e)?e.sort():"object"===t(e)?u(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)};document.head||document.getElementsByTagName("head")[0];var l=document.head||document.getElementsByTagName("head")[0];!function(){for(var t,e=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=r.length,i=window.console=window.console||{};n--;)i[t=r[n]]||(i[t]=e)}();var f=window.jQuery,h=/^(\S+)\s*(.*)$/,d=(function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.el=e,this.$el=f(e),this.data=n,this.attachListeners()}i(t,[{key:"attachListeners",value:function(){var t=this,e=this,r=this.listeners,n=function(n){var i=n.trim(),a=!1,o=t[r[n]],s=n.match(h);s&&(i=s[1],a=s[2]);var c=function(t,r){o.call(this,t,e,r)};a?t.$el.on(i,a,c):t.$el.on(i,c)};for(var i in r)n(i)}},{key:"detachListeners",value:function(){this.$el.off()}},{key:"destroy",value:function(){this.detachListeners();for(var t in this)this[t]=null}},{key:"child",value:function(t){var e=this.$el.find(t);return e.length?e.eq(0):null}},{key:"listeners",get:function(){return{}}}])}(),Object.getOwnPropertySymbols),p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,m=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,n,i=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var o in r)p.call(r,o)&&(i[o]=r[o]);if(d){n=d(r);for(var s=0;s<n.length;s++)v.call(r,n[s])&&(i[n[s]]=r[n[s]])}}return i},g=new RegExp("%[a-f0-9]{2}","gi"),k=new RegExp("(%[a-f0-9]{2})+","gi"),y=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+t(e)+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=k.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=c(r[0]);n!==r[0]&&(e[r[0]]=n)}r=k.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),a=0;a<i.length;a++){var o=i[a];t=t.replace(new RegExp(o,"g"),e[o])}return t}(e)}},b=function(e,r){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(r=m({arrayFormat:"none"},r)),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),a=e.length>0?e.join("="):void 0;a=void 0===a?null:y(a),n(y(r),a,i)}),Object.keys(i).sort().reduce(function(e,r){var n=i[r];return Boolean(n)&&"object"===t(n)&&!Array.isArray(n)?e[r]=u(n):e[r]=n,e},Object.create(null))):i},w=(function(){function t(){r(this,t),this.username=""}i(t,[{key:"setUsername",value:function(t){this.username=t}},{key:"getRecentUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+this.username+"&limit=2&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}},{key:"getUserInfoUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user="+this.username+"&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}}])}(),window.jQuery),j=/^(\S+)\s*(.*)$/,T=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.el=e,this.$el=w(e),this.data=n,this.attachListeners()}return i(t,[{key:"attachListeners",value:function(){var t=this,e=this,r=this.listeners,n=function(n){var i=n.trim(),a=!1,o=t[r[n]],s=n.match(j);s&&(i=s[1],a=s[2]);var c=function(t,r){o.call(this,t,e,r)};a?t.$el.on(i,a,c):t.$el.on(i,c)};for(var i in r)n(i)}},{key:"detachListeners",value:function(){this.$el.off()}},{key:"destroy",value:function(){this.detachListeners();for(var t in this)this[t]=null}},{key:"child",value:function(t){var e=this.$el.find(t);return e.length?e.eq(0):null}},{key:"listeners",get:function(){return{}}}]),t}(),U=function(t,e){var r=new Image;r.src=t,r.complete?e():r.onload=function(){e()}},_=function(t,e,r){var n=new Notification(t,{body:e,icon:r});n.addEventListener("click",function(){window.focus(),n.close()}),setTimeout(function(){n.close()},7e3)},O=function(t,e){for(var r="",n=t.length-1;n>=0;n--)r&&t[n].size!==e||(r=t[n]["#text"]);return r},S=function(){function t(){r(this,t),this.username=""}return i(t,[{key:"setUsername",value:function(t){this.username=t}},{key:"getRecentUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+this.username+"&limit=2&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}},{key:"getUserInfoUrl",value:function(){return"https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user="+this.username+"&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json"}}]),t}(),E=new S,x=(function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$trackWrap=n.trackWrap&&$(n.trackWrap),i.$userWrap=n.userWrap&&$(n.userWrap),i.lastTracktimestamp=0,i.lastNowPlayingKey="",i.lastTrackData={},i.$statesWrap=n.statesWrap&&$(n.statesWrap),i.$window=$(window),i.userInfo={},i.activeError=!1,i.notificationsEnabled=i.getNotificationsSetting(),i.run(),i}a(e,T),i(e,[{key:"run",value:function(){var t=this,e=this.getUsername();e&&(E.setUsername(e),this.checkRecentTrack(),this.$userWrap&&this.getUserInfo(function(){t.showUserInfo()})),this.notificationsEnabled&&"granted"!==Notification.permission&&(this.notificationsEnabled=!1,Notification.requestPermission().then(function(e){"granted"===e&&(t.notificationsEnabled=!0)})),this.$window.on("focus",function(){t.showUserInfo()})}},{key:"showUserInfo",value:function(){this.userInfo&&this.$userWrap.trigger("update",this.userInfo)}},{key:"setUserInfo",value:function(t,e,r,n){return this.userInfo={username:t,name:e||t,link:r,avatarUrl:n}}},{key:"getUserInfo",value:function(t){var e=this;$.getJSON(E.getUserInfoUrl()).done(function(r){e.setUserInfo(r.user.name,r.user.realname,r.user.url,O(r.user.image,"large")),U(e.userInfo.avatarUrl,function(){t()})}).fail(function(){setTimeout(function(){e.getUserInfo()},2e3)})}},{key:"getUsername",value:function(){return b(location.search).u}},{key:"getNotificationsSetting",value:function(){return!b(location.search).disableNotifications}},{key:"triggerUpdate",value:function(t){var e=this;this.lastTrackData!==t&&(this.lastTrackData=t,t.coverUrl||(t.coverUrl="/images/generic-cover.jpg"),U(t.coverUrl,function(){e.updateTile(t),e.pushNotification(t)}))}},{key:"updateTile",value:function(t){this.$trackWrap&&this.$trackWrap.trigger("update",t)}},{key:"pushNotification",value:function(t){this.notificationsEnabled&&document.hidden&&_(t.title,"by "+t.artist,t.coverUrl)}},{key:"checkRecentTrack",value:function(){var t=this;$.getJSON(E.getRecentUrl()).done(function(e){if(!(e.recenttracks&&e.recenttracks.track&&e.recenttracks.track.length))return console.error("Bad format. Tracks not found."),void(t.activeLoading||(t.$statesWrap.trigger("setState",["error","Tracks not found"]),t.activeError=!0));var r=e.recenttracks.track[0];if(r.date){if(!(r.date.uts>t.lastTracktimestamp))return;t.lastTracktimestamp=r.date.uts}else{if(r.url===t.lastNowPlayingKey)return;t.lastNowPlayingKey=r.url,t.lastTracktimestamp=e.recenttracks.track[1].date.uts}t.activeError&&(t.activeError=!1,t.$statesWrap.trigger("setState",["error",null])),t.triggerUpdate({title:r.name,artist:r.artist["#text"],album:r.album["#text"],coverUrl:O(r.image,"extralarge"),link:r.url})}).always(function(){setTimeout(function(){t.checkRecentTrack()},2e3)})}}])}(),window.jQuery);(function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.supportsSVG=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),i.supportsSVG&&i.injectSprite(),i}a(e,T),i(e,[{key:"injectSprite",value:function(){var t=this;x.get(this.data.url,function(e,r){"success"==r?x(document.body).prepend(e):t.injectSprite()},"text")}}])})(),function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$note={loading:i.$el.find(".states-loading .states-note"),error:i.$el.find(".states-error .states-note")},i.countActive={},i.$el.on("setState",function(t,e,r){i.setState(e,r)}),i}a(e,T),i(e,[{key:"setState",value:function(t,e){this.countActive[t]||(this.countActive[t]=0),e?(this.countActive[t]++,this.$el.addClass("view-"+t),this.$note[t].text(e)):(this.countActive[t]--,this.countActive[t]<=0&&(this.countActive[t]=0,this.$el.removeClass("view-"+t)))}}])}(),function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$lastTrack=null,i.$trackTemplate=i.$el.find(".track"),i.$trackTemplate.detach(),i.$el.on("update",function(t,e){i.update(e)}),i}a(e,T),i(e,[{key:"update",value:function(t){var e=this.$trackTemplate.clone();e.find(".track-title").text(t.title).prop("href",t.link),e.find(".track-artist").text(t.artist),e.find(".track-album").text(t.album),e.find(".track-cover").css("background-image",'url("'+t.coverUrl+'")'),e.find(".track-background").css("background-image",'url("'+t.coverUrl+'")'),this.$el.append(e),this.$lastTrack&&(this.$lastTrack.removeClass("is-active"),document.hidden?this.$lastTrack.remove():this.$lastTrack.on("transitionend",function(t){$(t.target).remove()})),this.$lastTrack=e}}])}(),function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$avatar=i.$el.find(".user-avatar"),i.$name=i.$el.find(".user-name"),i.timer=null,i.$el.on("update",function(t,e){i.update(e)}),i}a(e,T),i(e,[{key:"update",value:function(t){var e=this;this.$avatar.css("background-image",'url("'+t.avatarUrl+'")'),this.$name.text(t.name).prop("href",t.link),this.$el.hasClass("is-active")&&clearTimeout(this.timer),this.show(),this.timer=setTimeout(function(){e.hide()},6e3)}},{key:"show",value:function(){this.$el.addClass("is-active")}},{key:"hide",value:function(){this.$el.removeClass("is-active")}}])}();!function(){for(var t,e=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=r.length,i=window.console=window.console||{};n--;)i[t=r[n]]||(i[t]=e)}();var I=new S,N=function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$trackWrap=n.trackWrap&&$(n.trackWrap),i.$userWrap=n.userWrap&&$(n.userWrap),i.lastTracktimestamp=0,i.lastNowPlayingKey="",i.lastTrackData={},i.$statesWrap=n.statesWrap&&$(n.statesWrap),i.$window=$(window),i.userInfo={},i.activeError=!1,i.notificationsEnabled=i.getNotificationsSetting(),i.run(),i}return a(e,T),i(e,[{key:"run",value:function(){var t=this,e=this.getUsername();e&&(I.setUsername(e),this.checkRecentTrack(),this.$userWrap&&this.getUserInfo(function(){t.showUserInfo()})),this.notificationsEnabled&&"granted"!==Notification.permission&&(this.notificationsEnabled=!1,Notification.requestPermission().then(function(e){"granted"===e&&(t.notificationsEnabled=!0)})),this.$window.on("focus",function(){t.showUserInfo()})}},{key:"showUserInfo",value:function(){this.userInfo&&this.$userWrap.trigger("update",this.userInfo)}},{key:"setUserInfo",value:function(t,e,r,n){return this.userInfo={username:t,name:e||t,link:r,avatarUrl:n}}},{key:"getUserInfo",value:function(t){var e=this;$.getJSON(I.getUserInfoUrl()).done(function(r){e.setUserInfo(r.user.name,r.user.realname,r.user.url,O(r.user.image,"large")),U(e.userInfo.avatarUrl,function(){t()})}).fail(function(){setTimeout(function(){e.getUserInfo()},2e3)})}},{key:"getUsername",value:function(){return b(location.search).u}},{key:"getNotificationsSetting",value:function(){return!b(location.search).disableNotifications}},{key:"triggerUpdate",value:function(t){var e=this;this.lastTrackData!==t&&(this.lastTrackData=t,t.coverUrl||(t.coverUrl="/images/generic-cover.jpg"),U(t.coverUrl,function(){e.updateTile(t),e.pushNotification(t)}))}},{key:"updateTile",value:function(t){this.$trackWrap&&this.$trackWrap.trigger("update",t)}},{key:"pushNotification",value:function(t){this.notificationsEnabled&&document.hidden&&_(t.title,"by "+t.artist,t.coverUrl)}},{key:"checkRecentTrack",value:function(){var t=this;$.getJSON(I.getRecentUrl()).done(function(e){if(!(e.recenttracks&&e.recenttracks.track&&e.recenttracks.track.length))return console.error("Bad format. Tracks not found."),void(t.activeLoading||(t.$statesWrap.trigger("setState",["error","Tracks not found"]),t.activeError=!0));var r=e.recenttracks.track[0];if(r.date){if(!(r.date.uts>t.lastTracktimestamp))return;t.lastTracktimestamp=r.date.uts}else{if(r.url===t.lastNowPlayingKey)return;t.lastNowPlayingKey=r.url,t.lastTracktimestamp=e.recenttracks.track[1].date.uts}t.activeError&&(t.activeError=!1,t.$statesWrap.trigger("setState",["error",null])),t.triggerUpdate({title:r.name,artist:r.artist["#text"],album:r.album["#text"],coverUrl:O(r.image,"extralarge"),link:r.url})}).always(function(){setTimeout(function(){t.checkRecentTrack()},2e3)})}}]),e}(),W=window.jQuery,P=function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.supportsSVG=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),i.supportsSVG&&i.injectSprite(),i}return a(e,T),i(e,[{key:"injectSprite",value:function(){var t=this;W.get(this.data.url,function(e,r){"success"==r?W(document.body).prepend(e):t.injectSprite()},"text")}}]),e}(),C=function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$note={loading:i.$el.find(".states-loading .states-note"),error:i.$el.find(".states-error .states-note")},i.countActive={},i.$el.on("setState",function(t,e,r){i.setState(e,r)}),i}return a(e,T),i(e,[{key:"setState",value:function(t,e){this.countActive[t]||(this.countActive[t]=0),e?(this.countActive[t]++,this.$el.addClass("view-"+t),this.$note[t].text(e)):(this.countActive[t]--,this.countActive[t]<=0&&(this.countActive[t]=0,this.$el.removeClass("view-"+t)))}}]),e}(),R=function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$lastTrack=null,i.$trackTemplate=i.$el.find(".track"),i.$trackTemplate.detach(),i.$el.on("update",function(t,e){i.update(e)}),i}return a(e,T),i(e,[{key:"update",value:function(t){var e=this.$trackTemplate.clone();e.find(".track-title").text(t.title).prop("href",t.link),e.find(".track-artist").text(t.artist),e.find(".track-album").text(t.album),e.find(".track-cover").css("background-image",'url("'+t.coverUrl+'")'),e.find(".track-background").css("background-image",'url("'+t.coverUrl+'")'),this.$el.append(e),this.$lastTrack&&(this.$lastTrack.removeClass("is-active"),document.hidden?this.$lastTrack.remove():this.$lastTrack.on("transitionend",function(t){$(t.target).remove()})),this.$lastTrack=e}}]),e}(),A=function(t){function e(t,n){var i;return r(this,e),i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),i.$avatar=i.$el.find(".user-avatar"),i.$name=i.$el.find(".user-name"),i.timer=null,i.$el.on("update",function(t,e){i.update(e)}),i}return a(e,T),i(e,[{key:"update",value:function(t){var e=this;this.$avatar.css("background-image",'url("'+t.avatarUrl+'")'),this.$name.text(t.name).prop("href",t.link),this.$el.hasClass("is-active")&&clearTimeout(this.timer),this.show(),this.timer=setTimeout(function(){e.hide()},6e3)}},{key:"show",value:function(){this.$el.addClass("is-active")}},{key:"hide",value:function(){this.$el.removeClass("is-active")}}]),e}();!function(e,r,n){var i=window.jQuery;i?r(i):e?function(e,r,n){var i=document.createElement("script");if(i.addEventListener("load",r),i.addEventListener("error",n),i.type="text/javascript","string"==typeof e)i.src=e,i.async=!0;else if("object"==t(e))for(var a in e)if(e.hasOwnProperty(a)){var o=e[a];"content"==a?i.appendChild(document.createTextNode(o)):i[a]=o}l.appendChild(i)}(e,function(){r(window.jQuery)},n):n()}("/node_modules/jquery/dist/jquery.min.js",function(t){!function(t){var e=[],r=function(r){if(r.name in t){var n=new(0,t[r.name])("string"==typeof r.place?document.querySelector(r.place):r.place,r.data||{});e.push(n)}};initComponents.map(r),initComponents={push:r}}({checker:N,shapes:P,states:C,track:R,user:A})},function(){console.log("jQuery dependency is missing. This page might not work correctly. Please try again later.")});return{}}();