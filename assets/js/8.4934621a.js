(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{344:function(t,s,e){},405:function(t,s,e){"use strict";var o=e(344);e.n(o).a},443:function(t,s,e){"use strict";e.r(s);var o={name:"componetTemplate",props:{title:String,template:String},data:function(){return{show:!1}},computed:{tp:function(){return this.$site.base+this.template}},methods:{toggle:function(){this.show=!this.show}}},i=(e(405),e(43)),a=Object(i.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"code-box"},[e("section",{staticClass:"code-box-demo"},[t._t("demo")],2),t._v(" "),e("section",{staticClass:"code-box-meta"},[e("div",{staticClass:"code-box-title"},[t._v("\n            "+t._s(this.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"code-box-description"},[t._t("description")],2),t._v(" "),e("div",{staticClass:"code-box-actions"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],on:{click:t.toggle}},[t._v("显示代码")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],on:{click:t.toggle}},[t._v("隐藏代码")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"code-box-template"},[e("iframe",{attrs:{src:this.tp}})])])])}),[],!1,null,"7137f0f2",null);s.default=a.exports}}]);