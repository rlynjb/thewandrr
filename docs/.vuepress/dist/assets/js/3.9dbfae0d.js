(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(t,e,s){"use strict";var n={props:["hrefLink","target","iconName","size"]},o=s(45),r=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-btn",{attrs:{icon:"",href:this.hrefLink,target:this.target}},[e("v-icon",{attrs:{size:this.size}},[this._v("\n    "+this._s(this.iconName)+"\n  ")])],1)}),[],!1,null,null,null);e.a=r.exports},308:function(t,e,s){"use strict";var n={data:function(){return{drawer:!1}},methods:{gotoSection:function(t){this.$router.currentRoute.hash!==t&&this.$router.push({path:t})}}},o=s(45),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"justify-space-between"},[s("v-col",[s("v-toolbar-title",[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"logo",attrs:{src:"/logo.png"}})])])],1),t._v(" "),s("v-col",{staticClass:"d-flex align-content-center justify-end"},[s("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}})],1)],1)],1)],1),t._v(" "),s("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",[s("v-list-item",[s("v-btn",{staticClass:"ml-3",attrs:{text:"",color:"primary"},on:{click:function(e){return t.gotoSection("#codebits")}}},[t._v("\n          codebits\n        ")])],1),t._v(" "),s("v-list-item",[s("v-btn",{staticClass:"ml-3",attrs:{text:"",color:"primary"},on:{click:function(e){return t.gotoSection("#socialLinks")}}},[t._v("\n          social links\n        ")])],1),t._v(" "),s("v-list-item",[s("v-btn",{staticClass:"ml-3",attrs:{text:"",color:"primary"},on:{click:function(e){return t.gotoSection("#projects")}}},[t._v("\n          projects\n        ")])],1),t._v(" "),s("v-list-item",[s("v-btn",{staticClass:"ml-3",attrs:{text:"",color:"primary"},on:{click:function(e){return t.gotoSection("#contact")}}},[t._v("\n          contact\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=r.exports},309:function(t,e,s){"use strict";var n={components:{btnIcon:s(307).a},data:function(){return{}}},o=s(45),r=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"col-12 text-center pa-12"},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),this._v(" "),e("h2",{staticClass:"mt-12"},[this._v("Get Intouch")]),this._v(" "),e("div",{staticClass:"mt-6"},[e("btn-icon",{staticClass:"mr-6",attrs:{hrefLink:"https://www.linkedin.com/in/rlynpro/",target:"_blank",iconName:"fab fa-linkedin-in",size:"30"}}),this._v(" "),e("btn-icon",{attrs:{hrefLink:"https://docs.google.com/document/d/1VN9dtP5_oyVELBfDxY7qXaFLu4iSs4yOEK8vqjDoFG8/edit?usp=sharing",target:"_blank",iconName:"far fa-file",size:"30"}})],1)])],1),this._v(" "),e("v-row",{staticClass:"pt-12"},[e("v-col",{staticClass:"col-12"},[e("i",{staticClass:"far fa-copyright"}),this._v(" Copyright 2021 - Wandrr\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=r.exports},314:function(t,e,s){"use strict";s(311);var n={props:{imgs:{required:!1,type:Array,default:function(){return[]}},model:{required:!1,type:Number,default:function(){return 0}},cover:{required:!1,type:String,default:function(){return""}}},data:function(){return{modelLocal:JSON.parse(this.model)}},watch:{model:function(t){this.modelLocal=JSON.parse(t)}},methods:{resetCarousel:function(){this.modelLocal=0}}},o=s(45),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-carousel",{attrs:{"show-arrows":!!t.imgs.length,"hide-delimiters":!t.imgs.length,"hide-delimiters":""},model:{value:t.modelLocal,callback:function(e){t.modelLocal=e},expression:"modelLocal"}},[""!=t.cover?s("v-carousel-item",[s("img",{attrs:{src:"/"+t.cover}})]):t._e(),t._v(" "),t._l(t.imgs,(function(e,n){return s("v-carousel-item",[s("h4",[t._v(t._s(e[Object.keys(e)[0]]))]),t._v(" "),s("img",{attrs:{src:"/"+Object.keys(e)[0]}})])}))],2)}),[],!1,null,null,null);e.a=r.exports},452:function(t,e,s){},453:function(t,e,s){},454:function(t,e,s){},461:function(t,e,s){var n={"./af":317,"./af.js":317,"./ar":318,"./ar-dz":319,"./ar-dz.js":319,"./ar-kw":320,"./ar-kw.js":320,"./ar-ly":321,"./ar-ly.js":321,"./ar-ma":322,"./ar-ma.js":322,"./ar-sa":323,"./ar-sa.js":323,"./ar-tn":324,"./ar-tn.js":324,"./ar.js":318,"./az":325,"./az.js":325,"./be":326,"./be.js":326,"./bg":327,"./bg.js":327,"./bm":328,"./bm.js":328,"./bn":329,"./bn-bd":330,"./bn-bd.js":330,"./bn.js":329,"./bo":331,"./bo.js":331,"./br":332,"./br.js":332,"./bs":333,"./bs.js":333,"./ca":334,"./ca.js":334,"./cs":335,"./cs.js":335,"./cv":336,"./cv.js":336,"./cy":337,"./cy.js":337,"./da":338,"./da.js":338,"./de":339,"./de-at":340,"./de-at.js":340,"./de-ch":341,"./de-ch.js":341,"./de.js":339,"./dv":342,"./dv.js":342,"./el":343,"./el.js":343,"./en-au":344,"./en-au.js":344,"./en-ca":345,"./en-ca.js":345,"./en-gb":346,"./en-gb.js":346,"./en-ie":347,"./en-ie.js":347,"./en-il":348,"./en-il.js":348,"./en-in":349,"./en-in.js":349,"./en-nz":350,"./en-nz.js":350,"./en-sg":351,"./en-sg.js":351,"./eo":352,"./eo.js":352,"./es":353,"./es-do":354,"./es-do.js":354,"./es-mx":355,"./es-mx.js":355,"./es-us":356,"./es-us.js":356,"./es.js":353,"./et":357,"./et.js":357,"./eu":358,"./eu.js":358,"./fa":359,"./fa.js":359,"./fi":360,"./fi.js":360,"./fil":361,"./fil.js":361,"./fo":362,"./fo.js":362,"./fr":363,"./fr-ca":364,"./fr-ca.js":364,"./fr-ch":365,"./fr-ch.js":365,"./fr.js":363,"./fy":366,"./fy.js":366,"./ga":367,"./ga.js":367,"./gd":368,"./gd.js":368,"./gl":369,"./gl.js":369,"./gom-deva":370,"./gom-deva.js":370,"./gom-latn":371,"./gom-latn.js":371,"./gu":372,"./gu.js":372,"./he":373,"./he.js":373,"./hi":374,"./hi.js":374,"./hr":375,"./hr.js":375,"./hu":376,"./hu.js":376,"./hy-am":377,"./hy-am.js":377,"./id":378,"./id.js":378,"./is":379,"./is.js":379,"./it":380,"./it-ch":381,"./it-ch.js":381,"./it.js":380,"./ja":382,"./ja.js":382,"./jv":383,"./jv.js":383,"./ka":384,"./ka.js":384,"./kk":385,"./kk.js":385,"./km":386,"./km.js":386,"./kn":387,"./kn.js":387,"./ko":388,"./ko.js":388,"./ku":389,"./ku.js":389,"./ky":390,"./ky.js":390,"./lb":391,"./lb.js":391,"./lo":392,"./lo.js":392,"./lt":393,"./lt.js":393,"./lv":394,"./lv.js":394,"./me":395,"./me.js":395,"./mi":396,"./mi.js":396,"./mk":397,"./mk.js":397,"./ml":398,"./ml.js":398,"./mn":399,"./mn.js":399,"./mr":400,"./mr.js":400,"./ms":401,"./ms-my":402,"./ms-my.js":402,"./ms.js":401,"./mt":403,"./mt.js":403,"./my":404,"./my.js":404,"./nb":405,"./nb.js":405,"./ne":406,"./ne.js":406,"./nl":407,"./nl-be":408,"./nl-be.js":408,"./nl.js":407,"./nn":409,"./nn.js":409,"./oc-lnc":410,"./oc-lnc.js":410,"./pa-in":411,"./pa-in.js":411,"./pl":412,"./pl.js":412,"./pt":413,"./pt-br":414,"./pt-br.js":414,"./pt.js":413,"./ro":415,"./ro.js":415,"./ru":416,"./ru.js":416,"./sd":417,"./sd.js":417,"./se":418,"./se.js":418,"./si":419,"./si.js":419,"./sk":420,"./sk.js":420,"./sl":421,"./sl.js":421,"./sq":422,"./sq.js":422,"./sr":423,"./sr-cyrl":424,"./sr-cyrl.js":424,"./sr.js":423,"./ss":425,"./ss.js":425,"./sv":426,"./sv.js":426,"./sw":427,"./sw.js":427,"./ta":428,"./ta.js":428,"./te":429,"./te.js":429,"./tet":430,"./tet.js":430,"./tg":431,"./tg.js":431,"./th":432,"./th.js":432,"./tk":433,"./tk.js":433,"./tl-ph":434,"./tl-ph.js":434,"./tlh":435,"./tlh.js":435,"./tr":436,"./tr.js":436,"./tzl":437,"./tzl.js":437,"./tzm":438,"./tzm-latn":439,"./tzm-latn.js":439,"./tzm.js":438,"./ug-cn":440,"./ug-cn.js":440,"./uk":441,"./uk.js":441,"./ur":442,"./ur.js":442,"./uz":443,"./uz-latn":444,"./uz-latn.js":444,"./uz.js":443,"./vi":445,"./vi.js":445,"./x-pseudo":446,"./x-pseudo.js":446,"./yo":447,"./yo.js":447,"./zh-cn":448,"./zh-cn.js":448,"./zh-hk":449,"./zh-hk.js":449,"./zh-mo":450,"./zh-mo.js":450,"./zh-tw":451,"./zh-tw.js":451};function o(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=461},462:function(t,e,s){"use strict";s(452)},464:function(t,e,s){"use strict";s(453)},465:function(t,e,s){"use strict";s(454)},467:function(t,e,s){"use strict";s.r(e);var n=s(43),o=(s(46),s(64),s(63),s(456),s(11),s(15),s(19),s(308)),r=s(309),a=s(307),i=s(455),c=(s(315),s(166),s(167),s(316),s(306)),l=s.n(c),u={props:{category:{required:!0,type:String,default:function(){return""}}},data:function(){return{}},methods:{formatDate:function(t){return l()(t).format("MMMM Do YYYY")},gotoPost:function(t){this.$router.push({path:t.path})},getPostsByCategory:function(t){var e=this;return this.$site.pages.filter((function(e){return e.regularPath.includes(t)})).filter((function(t){return e.getPostDateFromUrl(t.path)})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{date:e.getPostDateFromUrl(t.path)})})).sort((function(t,s){var n=e.getPostDateFromUrl(t.path),o=e.getPostDateFromUrl(s.path);return new Date(o)-new Date(n)}))},getPostDateFromUrl:function(t){var e=/(\d\d\d\d-\d\d-\d\d)/g.exec(t);return e&&e[0]},openDialogPost:function(t){this.$emit("onSelectedPost",t)}}},m=(s(462),s(45)),f=Object(m.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex",staticStyle:{"overflow-y":"auto"}},t._l(t.getPostsByCategory(t.category),(function(e){return s("div",{staticClass:"col post-thumb-wrapper"},[s("div",{staticClass:"post-thumb"},[s("img",{attrs:{src:"/"+e.frontmatter.img},on:{click:function(s){return t.openDialogPost(e)}}}),t._v(" "),s("div",{on:{click:function(s){return t.gotoPost(e)}}},[s("h4",[t._v(t._s(e.frontmatter.title))]),t._v(" "),s("h5",{staticClass:"font-weight-medium grey--text lighten-5"},[t._v("\n          "+t._s(t.formatDate(e.date))+"\n        ")])])])])})),0)}),[],!1,null,"941f942a",null).exports,h=(s(311),s(463),{props:{postAmount:{required:!1,type:Number,default:function(){return 1}}},methods:{formatDate:function(t){return l()(t).format("MMMM Do YYYY")},getPostDateFromUrl:function(t){var e=/(\d\d\d\d-\d\d-\d\d)/g.exec(t);return e&&e[0]},gotoPost:function(t){this.$router.push({path:t.path})},getLatestPost:function(){var t=this;return this.$site.pages.filter((function(e){return t.getPostDateFromUrl(e.path)})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{date:t.getPostDateFromUrl(e.path)})})).sort((function(e,s){var n=t.getPostDateFromUrl(e.path),o=t.getPostDateFromUrl(s.path);return new Date(o)-new Date(n)})).splice(0,this.postAmount)},openDialogPost:function(t){this.$emit("onSelectedPost",t)}}}),d=(s(464),Object(m.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticClass:"font-weight-medium"},[t._v("latest codebits")]),t._v(" "),s("div",{staticClass:"d-flex",staticStyle:{"overflow-y":"auto"}},t._l(t.getLatestPost(),(function(e,n){return s("div",{staticClass:"post-thumb-wrapper col-3"},[s("img",{attrs:{src:"/"+e.frontmatter.img},on:{click:function(s){return t.openDialogPost(e)}}}),t._v(" "),s("div",{on:{click:function(s){return t.gotoPost(e)}}},[s("h4",[t._v(t._s(e.frontmatter.title))]),t._v(" "),s("h5",{staticClass:"font-weight-medium grey--text lighten-5"},[t._v("\n          "+t._s(t.formatDate(e.date))+"\n        ")])])])})),0)])}),[],!1,null,"13f69170",null).exports),v=s(314),p={props:{color:{requred:!0,type:String,default:function(){return"black"}},comingsoon:{required:!1,type:Boolean,default:function(){return!1}},img:{required:!1,type:String,default:function(){return""}}}},j=Object(m.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{class:"pa-16 text-center "+this.color},[this.comingsoon?e("h3",[this._v("Coming Soon")]):this._e(),this._v(" "),e("img",{attrs:{src:"/"+this.img}})])}),[],!1,null,null,null).exports,g={components:{headerTheme:o.a,footerTheme:r.a,btnIcon:a.a,postsByCategory:f,postsByLatest:d,imageCarousel:v.a,projectTile:j},data:function(){return{dialog:!1,imgIndex:0,selectedPost:null}},methods:{onSelectedPost:function(t){var e=this;this.dialog=!0,this.selectedPost=t,this.$nextTick((function(){e.$refs.imageCarousel.resetCarousel()}))},getCategoriesByParent:function(t){var e=this.$site.pages.map((function(t){var e=/codebits\/(.*)\//g.exec(t.regularPath);if(e)return e[1]})).filter((function(t){return t}));return Object(n.a)(new Set(e))}}},b=(s(465),Object(m.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"theme-container"},[s("header-theme"),t._v(" "),s("v-main",[s("v-container",{staticClass:"pt-16 pb-16",attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"latestPost",attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[s("posts-by-latest",{attrs:{postAmount:2},on:{onSelectedPost:t.onSelectedPost}})],1),t._v(" "),s("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[s("h2",[t._v("Hello, I'm Reina")]),t._v(" "),s("p",[t._v("\n            I'm a Software Engineer with a focus on Front-End Development.\n            I created this site to share knowledge and continue progress in my career.\n          ")]),t._v(" "),s("v-chip",[t._v("#JS")]),t._v(" "),s("v-chip",[t._v("#CSS")]),t._v(" "),s("v-chip",[t._v("#HTML5")]),t._v(" "),s("v-chip",[t._v("#Vue")])],1)],1)],1),t._v(" "),s("v-container",{staticClass:"deep-purple darken-4 pt-12 pb-12 postsWrapper",attrs:{fluid:""}},[s("v-row",{attrs:{id:"codebits"}},[s("v-col",{staticClass:"pb-12",attrs:{cols:"12"}},[s("h2",{staticClass:"font-weight-medium"},[t._v("javascript")]),t._v(" "),s("posts-by-category",{attrs:{category:"javascript"},on:{onSelectedPost:t.onSelectedPost}})],1),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("h2",{staticClass:"font-weight-medium"},[t._v("e-commerce")]),t._v(" "),s("posts-by-category",{attrs:{category:"ecommerce"},on:{onSelectedPost:t.onSelectedPost}})],1)],1)],1),t._v(" "),s("v-container",{staticClass:"pt-16 pb-16 justify-center",attrs:{fluid:"",id:"socialLinks"}},[s("v-row",{staticClass:"text-center"},[s("v-col",{staticClass:"social-thumb"},[s("btn-icon",{attrs:{hrefLink:"https://instagram.com/codepurpl",target:"_blank",iconName:"fab fa-instagram",size:"36"}}),t._v(" "),s("btn-icon",{attrs:{hrefLink:"https://facebook.com/ecompurpl",target:"_blank",iconName:"fab fa-facebook-f",size:"36"}}),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("Where I post my codebits")])],1),t._v(" "),s("v-col",{staticClass:"social-thumb"},[s("btn-icon",{attrs:{hrefLink:"https://leetcode.com/rlynjb/",target:"_blank",iconName:"fas fa-code",size:"36"}}),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("Where I practice coding")])],1),t._v(" "),s("v-col",{staticClass:"social-thumb"},[s("btn-icon",{attrs:{hrefLink:"https://rlynjb.medium.com/",target:"_blank",iconName:"fab fa-medium-m",size:"36"}}),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("Where I elaborate on details")])],1),t._v(" "),s("v-col",{staticClass:"social-thumb"},[s("btn-icon",{attrs:{hrefLink:"https://github.com/rlynjb",target:"_blank",iconName:"fab fa-github",size:"36"}}),t._v(" "),s("btn-icon",{attrs:{hrefLink:"https://codepen.io/rlynjb",target:"_blank",iconName:"fab fa-codepen",size:"36"}}),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("Where I store my code")])],1),t._v(" "),s("v-col",{staticClass:"social-thumb"},[s("btn-icon",{attrs:{hrefLink:"https://www.youtube.com/channel/UCHktUhVF2ZR5JkVunt_OLGw",target:"_blank",iconName:"fab fa-youtube",size:"36"}}),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("Where I vlog")])],1)],1)],1),t._v(" "),s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{id:"projects"}},[s("project-tile",{attrs:{color:"deep-purple lighten-1",comingsoon:!0,img:"purpl_template_builder.png"}}),t._v(" "),s("project-tile",{attrs:{color:"deep-purple darken-1",comingsoon:!0,img:"themepj.png"}}),t._v(" "),s("project-tile",{attrs:{color:"deep-purple lighten-1",comingsoon:!0,img:"ecompurpl_affiliate_store.png"}})],1)],1)],1),t._v(" "),s("footer-theme",{attrs:{id:"contact"}}),t._v(" "),s("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedPost?s("div",[s("image-carousel",{ref:"imageCarousel",attrs:{imgs:t.selectedPost.frontmatter.imgs,cover:t.selectedPost.frontmatter.img,model:t.imgIndex}})],1):t._e()])],1)}),[],!1,null,null,null));e.default=b.exports}}]);