(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a00b1128"],{"574b":function(e,t,s){"use strict";s("9311")},9311:function(e,t,s){},bb51:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("br"),r("img",{attrs:{alt:"logo",src:s("cf05"),width:"200"}}),r("div",{staticClass:"hello"},[r("br"),r("br"),r("br"),r("strong",[e._v("Welcome to Uptimedog")]),e._m(0),r("br"),r("small",[r("b-icon",{attrs:{pack:"fas",icon:"broadcast-tower",size:"is-small"}}),r("strong",{class:{"has-text-info":"OK"==e.api_server_status,"has-text-danger":"OK"!=e.api_server_status}},[e._v(" API Server is "+e._s(e.api_server_status))]),r("br"),e._v(" Made with "),e._m(1),e._v(" by "),r("a",{attrs:{href:"https://github.com/clivern",target:"_blank",rel:"noopener"}},[e._v("Clivern")]),r("br")],1)])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" If you have any suggestions, bug reports, or annoyances "),s("br"),e._v("please report them to our "),s("a",{attrs:{href:"https://github.com/uptimedog/Uptimedog/issues",target:"_blank",rel:"noopener"}},[e._v("issue tracker")]),e._v(". ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon has-text-danger"},[s("i",{staticClass:"fas fa-heart"})])}],i={name:"home",data:function(){return{api_server_status:"DOWN",loader:{isFullPage:!0,ref:null}}},methods:{loading:function(){this.loader.ref=this.$buefy.loading.open({container:this.loader.isFullPage?null:this.$refs.element.$el})}},mounted:function(){var e=this;this.$emit("refresh-state"),this.loading(),this.$store.dispatch("api_server/fetchApiServerReadiness").then((function(){e.api_server_status=e.$store.getters["api_server/getApiServerReadiness"].status,e.loader.ref.close()}),(function(t){e.$buefy.toast.open({message:t,type:"is-danger is-light"}),e.loader.ref.close()}))}},n=i,o=(s("574b"),s("2877")),l=Object(o["a"])(n,r,a,!1,null,"7ff85535",null);t["default"]=l.exports},cf05:function(e,t,s){e.exports=s.p+"img/logo.fe047bd0.png"}}]);
//# sourceMappingURL=chunk-a00b1128.ab01bd18.js.map