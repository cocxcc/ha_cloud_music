(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9fd72e2"],{"27da":function(t,e,n){},"31e6":function(t,e,n){"use strict";var i=n("91e7"),r=n.n(i);r.a},"4eef":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),n("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},r=[],s=(n("5ab2"),n("6d57"),n("e10e"),n("9d37")),c=(n("cc57"),n("08c1")),a=n("365c"),l=n("f904"),o=n("5362"),u=n("eb4d"),f=n("ac0d");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"Detail",components:{MmLoading:l["a"],MusicList:o["a"]},mixins:[f["a"]],data:function(){return{list:[]}},created:function(){var t=this,e=this.$route.params.id;"0"!==e?Object(a["i"])(e).then((function(e){200===e.data.code&&(t.list=Object(u["c"])(e.data.playlist.tracks),document.title="".concat(e.data.playlist.name," - mmPlayer在线音乐播放器"),t._hideLoad())})):Object(a["k"])().then((function(e){var n=e.data;200===n.code?(t.list=n.data.map((function(t){var e=t.simpleSong;return{id:t.songId,name:t.songName,singer:t.artist,album:t.album,image:"https://p4.music.126.net/xL_4lYc6XKR4dO0u-9HtxQ==/109951164032601371.jpg",duration:e.dt/1e3,url:"https://music.163.com/song/media/outer/url?id=".concat(t.songId,".mp3"),type:"cloud"}})),t._hideLoad()):t.$mmToast(n.msg)})).catch((function(e){t.$mmToast("需要登录")}))},methods:p({selectItem:function(t,e){this.selectPlay({list:this.list,index:e})}},Object(c["b"])(["selectPlay"]))},h=m,v=(n("f920"),n("5511")),g=Object(v["a"])(h,i,r,!1,null,"5fffd978",null);e["default"]=g.exports},5362:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"musicList"},[t.list.length>0?[n("div",{staticClass:"list-item list-header"},[n("span",{staticClass:"list-name"},[t._v("歌曲")]),n("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("时长")]):n("span",{staticClass:"list-album"},[t._v("专辑")])]),n("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(e){return t.listScroll(e)}}},[t._l(t.list,(function(e,i){return n("div",{key:e.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===e.id},on:{dblclick:function(n){return t.selectItem(e,i,n)}}},[n("span",{staticClass:"list-num",domProps:{textContent:t._s(i+1)}}),n("div",{staticClass:"list-name"},[n("span",[t._v(t._s(e.name))]),n("div",{staticClass:"list-menu"},[n("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(e),size:40},on:{click:function(n){return n.stopPropagation(),t.selectItem(e,i)}}})],1)]),n("span",{staticClass:"list-artist"},[t._v(t._s(e.singer))]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("\n          "+t._s(t._f("format")(e.duration%3600))+"\n          "),n("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}})],1):n("span",{staticClass:"list-album"},[t._v(t._s(e.album))])])})),t._t("listBtn")],2)]:n("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},r=[],s=(n("5ab2"),n("6d57"),n("e10e"),n("9d37")),c=(n("163d"),n("08c1")),a=n("ca00"),l=n("5af1");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"MusicList",components:{MmNoResult:l["a"]},filters:{format:a["b"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:u({},Object(c["c"])(["playing","currentMusic"])),watch:{list:function(t,e){2===this.listType&&(t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1))}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:u({listScroll:function(t){var e=t.target.scrollTop;if(this.scrollTop=e,2===this.listType&&!this.lockUp){var n=t.target,i=n.scrollHeight,r=n.offsetHeight;e+r>=i-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,e,n){n&&/list-menu-icon-del/.test(n.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,e))},getPlayIconType:function(t){var e=t.id,n=this.playing,i=this.currentMusic.id;return n&&i===e?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},Object(c["d"])({setPlaying:"SET_PLAYING"}))},d=f,p=(n("31e6"),n("5511")),m=Object(p["a"])(d,i,r,!1,null,"d5e36fa2",null);e["a"]=m.exports},"5af1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mm-no-result"},[n("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},r=[],s={name:"MmNoResult",props:{title:{type:String,default:""}}},c=s,a=(n("9673"),n("5511")),l=Object(a["a"])(c,i,r,!1,null,null,null);e["a"]=l.exports},"91e7":function(t,e,n){},9673:function(t,e,n){"use strict";var i=n("f1c5"),r=n.n(i);r.a},"9a33":function(t,e,n){"use strict";var i=n("2fd4"),r=n("69b3"),s=n("f63e"),c=n("e754"),a=n("eafa"),l=n("7108"),o=n("8714"),u=n("238a"),f=Math.min,d=[].push,p="split",m="length",h="lastIndex",v=4294967295,g=!u((function(){RegExp(v,"y")}));n("0aed")("split",2,(function(t,e,n,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[m]||2!="ab"[p](/(?:ab)*/)[m]||4!="."[p](/(.?)(.?)/)[m]||"."[p](/()()/)[m]>1||""[p](/.?/)[m]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(r,t,e);var s,c,a,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===e?v:e>>>0,g=new RegExp(t.source,u+"g");while(s=o.call(g,r)){if(c=g[h],c>f&&(l.push(r.slice(f,s.index)),s[m]>1&&s.index<r[m]&&d.apply(l,s.slice(1)),a=s[0][m],f=c,l[m]>=p))break;g[h]===s.index&&g[h]++}return f===r[m]?!a&&g.test("")||l.push(""):l.push(r.slice(f)),l[m]>p?l.slice(0,p):l}:"0"[p](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var r=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,r,i):b.call(String(r),n,i)},function(t,e){var i=u(b,t,this,e,b!==n);if(i.done)return i.value;var o=r(t),d=String(this),p=s(o,RegExp),m=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"y":"g"),y=new p(g?o:"^(?:"+o.source+")",h),O=void 0===e?v:e>>>0;if(0===O)return[];if(0===d.length)return null===l(y,d)?[d]:[];var j=0,P=0,w=[];while(P<d.length){y.lastIndex=g?P:0;var _,C=l(y,g?d:d.slice(P));if(null===C||(_=f(a(y.lastIndex+(g?0:P)),d.length))===j)P=c(d,P,m);else{if(w.push(d.slice(j,P)),w.length===O)return w;for(var x=1;x<=C.length-1;x++)if(w.push(C[x]),w.length===O)return w;P=j=_}}return w.push(d.slice(j)),w}]}))},"9e76":function(t,e,n){"use strict";var i=n("69b3"),r=n("eafa"),s=n("e754"),c=n("7108");n("0aed")("match",1,(function(t,e,n,a){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=a(n,t,this);if(e.done)return e.value;var l=i(t),o=String(this);if(!l.global)return c(l,o);var u=l.unicode;l.lastIndex=0;var f,d=[],p=0;while(null!==(f=c(l,o))){var m=String(f[0]);d[p]=m,""===m&&(l.lastIndex=s(o,r(l.lastIndex),u)),p++}return 0===p?null:d}]}))},ac0d:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("5ab2"),n("6d57"),n("e10e");var i=n("9d37"),r=n("08c1");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}c({},Object(r["c"])(["playing","currentMusic"])),c({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(r["d"])({setPlaying:"SET_PLAYING"}),{},Object(r["b"])(["selectPlay"]));var a={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}},ca00:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return a}));n("163d"),n("f548"),n("9e76"),n("9a33");function i(t,e){var n=-1,i=t.length;e||(e=new Array(i));while(++n<i)e[n]=t[n];return e}var r=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,r=e-1,s=i(t);while(++n<e){var c=n+Math.floor(Math.random()*(r-n+1)),a=s[c];s[c]=s[n],s[n]=a}return t};function s(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),n=[],i=0;i<e.length;i++){var r=decodeURIComponent(e[i]),s=/\[\d*:\d*((\.|:)\d*)*\]/g,c=r.match(s);if(c)for(var a=r.replace(s,""),l=0,o=c.length;l<o;l++){var u=c[l],f=Number(String(u.match(/\[\d*/i)).slice(1)),d=Number(String(u.match(/:\d*/i)).slice(1)),p=60*f+d;""!==a&&n.push({time:p,text:a})}}return n}function a(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(s(e),":").concat(s(n))}},f1c5:function(t,e,n){},f920:function(t,e,n){"use strict";var i=n("27da"),r=n.n(i);r.a}}]);
//# sourceMappingURL=chunk-d9fd72e2.fccb26f8.js.map