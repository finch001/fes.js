(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{307:function(t,e,a){t.exports=a.p+"assets/img/framework.d8268235.jpg"},321:function(t,e,a){"use strict";var n=a(1),l=a(30).find,r=a(93),s=a(18),i=!0,o=s("find");"find"in[]&&Array(1).find((function(){i=!1})),n({target:"Array",proto:!0,forced:i||!o},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},341:function(t,e,a){},402:function(t,e,a){"use strict";var n=a(341);a.n(n).a},436:function(t,e,a){"use strict";a.r(e);a(321),a(112);var n=a(307),l=a.n(n),r=a(0),s={data:function(){return{data:[{name:"张晓刚",age:24,date:new Date(2016,9,10),adr:"北京市海淀区西二旗",status:1},{name:"李晓红",age:26,date:new Date(2016,9,11),adr:"北京市海淀区西二旗",status:2,_selected:!0},{name:"隔壁老王",age:22,date:new Date(2016,9,12),adr:"北京市海淀区西二旗",status:3},{name:"我爸是李刚",age:19,date:new Date(2016,9,13),adr:"北京市海淀区西二旗",status:4}],status:[{value:1,text:"黄铜"},{value:2,text:"白银"},{value:3,text:"黄金"},{value:4,text:"铂金"}],action:[{text:"编辑",func:function(t){console.log(this),console.log(t)}},{text:"删除",func:function(t){console.log(this),console.log(t)}}],component:function(t,e){return new r.a({data:function(){return{zoomOption:{src:l.a,minWidth:200,maxWidth:500}}},render:function(t){return t("Wb-button",{props:{type:"primary"},directives:[{name:"zoom",value:this.zoomOption}]},["点击查看图片"])}})},component1:function(t,e){return new r.a({data:function(){return{trData:t,tdData:e}},render:function(t){return t("Wb-button",{props:{type:"primary"}},[this.tdData])}})},treeDate:[{sid:"1",scenario_name:"js",children:[{sid:"1.1",scenario_name:"nj"},{sid:"1.2",scenario_name:"sz",children:[{sid:"1.2.1",scenario_name:"wj"},{sid:"1.2.2",scenario_name:"cs"}]}]},{sid:"2",scenario_name:"yn",children:[{sid:"2.1",scenario_name:"wj"},{sid:"2.2",scenario_name:"cs"}]},{sid:"3",scenario_name:"fj"}],editNameConfig:{change:this.changeName},editAdrConfig:{type:"select",list:[{value:"1",label:"北京市海淀区西一旗"},{value:"2",label:"深圳市南山区"},{value:"3",label:"深圳市罗湖区"}],validate:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return console.log(e),!0},change:this.changeAddr},cols:[{prop:"name",name:"姓名",index:-1,show:!0},{prop:"age",name:"年龄",show:!0},{prop:"date",name:"日期",show:!0},{prop:"adr",name:"地址",show:!0},{prop:"status",name:"状态",show:!0}]}},methods:{canSelectRow:function(t,e){return 0==e},formatDate:function(t){return t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()},fixWarnStyle:function(t){if(t<3)return"error"},getSelectedTr:function(){console.log(this.$refs.table.getSelected())},sysout:function(){console.log(arguments)},trClick:function(t){console.log(t)},toggle:function(){this.lastShift?(this.cols.unshift(this.lastShift),this.lastShift=null):this.lastShift=this.cols.shift()},changeName:function(t,e,a,n){this.$set(n,"name",e)},changeAddr:function(t,e,a,n){var l=this.editAdrConfig.list.find((function(t){return t.value===e}));this.$set(n,"adr",l&&l.label)}}},i=(a(402),a(43)),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-表格"}},[t._v("#")]),t._v(" Table 表格")]),t._v(" "),a("p",[t._v("选项卡切换组件。")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("主要用于展示大量结构化数据。"),a("br"),t._v("\n支持行排序、列过滤器、自定义列样式、自定义行样式、自定义单元样式、列操作、列内容为组件、树形数据、聚合表头、等复杂功能。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/table/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("表格的最简单用法。name表示列名，prop对应数据对象的属性")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"过滤器filter",template:"ui/templates/table/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期",filter:t.formatDate}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"状态",filter:t.status}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("过滤器 filter 可以是 Function 或者 Array ")]),t._v(" "),a("p",[t._v("当 filter 是 Function 时，用函数执行结果替换td显示的原始内容。")]),t._v(" "),a("p",[t._v("当 filter 是 Array 时，用初始值匹配数组中的value, 找出对应的text替换显示。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"自定义样式",template:"ui/templates/table/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{staticClass:"table3",attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期",align:"left",width:"200px"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名",align:"right"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄",classes:"error",align:"center"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址",align:"center"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"状态",classes:t.fixWarnStyle,align:"center"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("当渲染 tbody 时，给 tr 添加上row_$index样式，当渲染 tr 时，给 td 添加上col_$index样式。自定义row_$index和col_$index则可以给对应的列和行添加样式")]),t._v(" "),a("p",[t._v("给Column设置 classes 属性能给 td 添加个性化样式, classes可以配置为 String 或者 Function。当是Function时，返回结果应该是一个class")]),t._v(" "),a("p",[t._v("给Column设置 align 属性能控制当前列文字朝向")]),t._v(" "),a("p",[t._v("给Column设置 width 属性能控制当前列宽度")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"排序",template:"ui/templates/table/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄",sort:""}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级",sort:""}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("给Column设置sort属性，则当前列支持排序，排序按照大小排序")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"自定义操作",template:"ui/templates/table/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{name:"操作",action:t.action}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("给Column设置action属性，则当前列显示功能按钮")]),t._v(" "),a("p",[t._v("函数的this指向当前作用域，参数为(trData, event)")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"列自定义",template:"ui/templates/table/6.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{name:"查看图片",component:t.component}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("给Column设置component属性，则会用子组件替换td的内容")]),t._v(" "),a("p",[t._v("函数的this指向当前作用域，参数为(trData, tdData, event)")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"可编辑表格",template:"ui/templates/table/7.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"name",editable:t.editNameConfig,name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄",sort:""}}),t._v(" "),a("Column",{attrs:{prop:"adr",editable:t.editAdrConfig,name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("支持配置单元格可编辑,通过为Column配置editable来控制列是否可编辑，可用配置：")]),t._v(" "),a("p",[t._v("type: 'input',    说明： 单元格编辑组件类型，仅支持input，select")]),t._v(" "),a("p",[t._v("multiple: false,  说明： 仅type为select时有效，提供多选")]),t._v(" "),a("p",[t._v("multipleLimit: 1, 说明： 多选限制")]),t._v(" "),a("p",[t._v("confirm: true,    说明： 是否提示修改，默认显示")]),t._v(" "),a("p",[t._v("validate: () => {return true}, 说明： 触发change前校验，默认不校验")]),t._v(" "),a("p",[t._v("change: () => {} 说明： change 确认修改触发change回调")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"行可选择",template:"ui/templates/table/8.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{ref:"table",attrs:{data:t.data},on:{"on-select":t.sysout,"on-select-all":t.sysout}},[a("Column",{attrs:{type:"selection",disabled:t.canSelectRow}}),t._v(" "),a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("通过在组件实例上调用getSelected能拿到选中的行。")]),t._v(" "),a("p",[t._v("给列设置disabled，可以控制此行是否可以被选中")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"展开更多",template:"ui/templates/table/9.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Row",[a("Cell",{attrs:{span:"12"}},[a("span",[t._v(t._s(e.name))])]),t._v(" "),a("Cell",{attrs:{span:"12"}},[a("span",[t._v(t._s(e.age))])])],1)]}}])}),t._v(" "),a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("当页面放不下一行数据时，采用展开显示详情的方式")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"数据详情",template:"ui/templates/table/10.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[a("Column",{attrs:{prop:"date",name:"日期","detail-component":t.component1}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名","detail-component":t.component1}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄","detail-component":t.component1}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("针对每个数据单元格，可以展开更多")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"聚合表头",template:"ui/templates/table/11.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data,border:""}},[a("Column",{attrs:{name:"总览"}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}})],1),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("当时聚合表头时，建议设置table为border，带边框样式")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"树状表格",template:"ui/templates/table/12.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Tree-table",{attrs:{data:t.treeDate}},[a("Column",{attrs:{prop:"sid",name:"Col-a"}}),t._v(" "),a("Column",{attrs:{prop:"scenario_name",name:"Col-b"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("TreeTable继承于Table，多了tree的特性，需要传入树状结构数据")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"动态列",template:"ui/templates/table/13.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:t.data}},[t._l(t.cols,(function(t){return["name"===t.prop||"age"===t.prop?a("Column",{key:t.prop,attrs:{index:t.index,prop:t.prop,name:t.name}}):a("Column",{key:t.prop,attrs:{prop:t.prop,name:t.name}})]}))],2),t._v(" "),a("Wb-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:t.toggle}},[t._v("切换姓名列")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("可以通过给column配置index属性控制列相对位置")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"无数据提示",template:"ui/templates/table/14.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-table",{attrs:{data:[],"no-data-text":"暂无数据"}},[a("Column",{attrs:{prop:"date",name:"日期"}}),t._v(" "),a("Column",{attrs:{prop:"name",name:"姓名"}}),t._v(" "),a("Column",{attrs:{prop:"age",name:"年龄"}}),t._v(" "),a("Column",{attrs:{prop:"adr",name:"地址"}}),t._v(" "),a("Column",{attrs:{prop:"status",name:"等级"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置noDataText，则当表格无数据时给于提示")])]},proxy:!0}])})],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"table-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-functions"}},[t._v("#")]),t._v(" Table Functions")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"table-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-props"}},[t._v("#")]),t._v(" Table Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据源")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("border")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否有外边框和内边框")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("trClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过function(trData，index)设置行样式，返回内容会作为行的class")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("noDataText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置无数据时的提示，未空则不提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")])])])]),t._v(" "),a("h3",{attrs:{id:"table-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-events"}},[t._v("#")]),t._v(" Table Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-th-click")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击列头部时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(col, colIndex, event)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-tr-click")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击一行时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(trData, index, event)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-td-click")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击td时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(trData, tdData, index, event)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-expand-hide")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更多关闭时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(trData, index, event)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-expand-show")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更多开展时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(trData, index, event)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-select")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("勾选或者取消勾选一行时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(trData, index, selected)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-select-all")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("勾选或者取消勾选全选按钮时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中数据  [trData, trData]")])])])]),t._v(" "),a("h3",{attrs:{id:"column-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-props"}},[t._v("#")]),t._v(" Column Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列的唯一标识，对应着数据源对象的属性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列的顺序索引，动态改变列时，所有列从左向右依次递增显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("align")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('列文字对齐方向，可选值有"left"、"center"、"right"')]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("center")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('列的宽度，传入"200px"或者"10%"')]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("classes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制TD的样式，当是function时，入参是td的原始值，返回结果必须是string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String|Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sort")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列是否可以排序")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("filter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列的过滤器，把原始值转换成展示需要的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array|Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("action")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置按钮列，当前列只显示按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array|Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("component")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置子组件列, 参数为trData, tdData")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("detailComponent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置单元格详情，参数为trData, tdData")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("列类型，可选值有expand、selection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置列禁止被选中，只有列的type是selection时有效")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("editable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置编辑列")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);