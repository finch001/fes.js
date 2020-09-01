(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{330:function(t,e,a){},389:function(t,e,a){"use strict";var l=a(330);a.n(l).a},420:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{disabled:!1,list:[{content:"序号一",key:1},{content:"序号二",key:2},{content:"序号三",key:3}]}},ready:function(){},methods:{dragready:function(t){var e=t.e,a=t.item,l=t.index;console.log(e,a,l)},dragend:function(t){var e=t.e,a=t.item,l=t.index;console.log(e,a,l)}}},s=(a(389),a(43)),n=Object(s.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"draggable-拖拽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draggable-拖拽"}},[t._v("#")]),t._v(" Draggable 拖拽")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("拖拽改变列表数据时使用, 处理数据顺序问题")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"24"}},[a("componetTemplate",{attrs:{title:"按钮类型",template:"ui/templates/draggable/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Draggable",{staticClass:"category-draggable",on:{"on-sort-ready":t.dragready,"on-sort-end":t.dragend},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.item;e.index;return[a("p",[t._v(t._s(l.content))])]}}]),model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("通过设置差槽作用域获取子项item（默认子项名称），index（默认子项id名称），可以通过es2015的解构方式改变名称，")]),t._v(" "),a("p",[t._v("可以通过重写ui-draggable-current-item类来自定义拖拽时子项样式")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"draggable-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draggable-props"}},[t._v("#")]),t._v(" Draggable props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否阻止拖拽事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("list")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据列表，必填")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h3",{attrs:{id:"draggable-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draggable-events"}},[t._v("#")]),t._v(" Draggable Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-sort-ready")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖拽开始时发生，可以在这通过控制dragDisabled阻止事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("共三个参数：依次为鼠标事件对象、当前拖拽节点、当前拖拽节点下标")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-sort-end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖拽结束时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("共三个参数：依次为鼠标事件对象、当前拖拽节点、当前拖拽节点下标")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);