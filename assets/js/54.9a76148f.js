(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{439:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简析-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简析-const"}},[s._v("#")]),s._v(" 简析 const")]),s._v(" "),a("h3",{attrs:{id:"块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[s._v("#")]),s._v(" 块作用域")]),s._v(" "),a("p",[s._v("在"),a("em",[s._v("块作用域")]),s._v("内使用 const 声明的变量与 let 变量相似。")]),s._v(" "),a("h3",{attrs:{id:"在声明时赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在声明时赋值"}},[s._v("#")]),s._v(" 在声明时赋值")]),s._v(" "),a("p",[s._v("JavaScript const 变量必须在声明时赋值：")]),s._v(" "),a("h3",{attrs:{id:"不是真正的常数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不是真正的常数"}},[s._v("#")]),s._v(" 不是真正的常数")]),s._v(" "),a("p",[s._v("关键字 const 有一定的误导性。")]),s._v(" "),a("p",[s._v("它没有定义常量值。它定义了对值的常量引用。")]),s._v(" "),a("p",[s._v("因此，我们不能更改常量原始值，但我们可以更改常量对象的属性。")]),s._v(" "),a("h4",{attrs:{id:"原始值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始值"}},[s._v("#")]),s._v(" 原始值")]),s._v(" "),a("p",[s._v("如果我们将一个原始值赋给常量，我们就不能改变原始值：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.141592653589793")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 会出错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也会出错")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"常量对象可以更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量对象可以更改"}},[s._v("#")]),s._v(" 常量对象可以更改")]),s._v(" "),a("p",[s._v("你可以更改常量对象(or 数组)的属性：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你可以创建 const 对象：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" car "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"porsche"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"911"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Black"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你可以更改属性：")]),s._v("\ncar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"White"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你可以添加属性：")]),s._v("\ncar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("但是你无法重新为常量(or 数组)对象赋值：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" car "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"porsche"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"911"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Black"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Volvo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"XC60"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"White"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ERROR")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"重新声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新声明"}},[s._v("#")]),s._v(" 重新声明")]),s._v(" "),a("p",[s._v("在程序中的任何位置都允许重新声明 JavaScript var 变量")]),s._v(" "),a("p",[s._v("在同一作用域或块中，为已有的 const 变量重新声明声明或赋值是不允许的。")]),s._v(" "),a("p",[s._v("在另外的作用域或块中重新声明 const 是允许的。")]),s._v(" "),a("h3",{attrs:{id:"不能变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不能变量提升"}},[s._v("#")]),s._v(" 不能变量提升")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("carName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Volvo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" carName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂时性死区"}},[s._v("#")]),s._v(" 暂时性死区：")]),s._v(" "),a("p",[s._v("const 变量不能在声明之前使用。")]),s._v(" "),a("h2",{attrs:{id:"简析-object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简析-object-freeze"}},[s._v("#")]),s._v(" 简析 Object.freeze()")]),s._v(" "),a("p",[s._v("Object.freeze()接受一个对象作为参数，并返回一个相同的不可变的对象。这就意味着我们不能添加，删除或更改对象的任何属性。")]),s._v(" "),a("h3",{attrs:{id:"冻结之后-对象属性不可更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冻结之后-对象属性不可更改"}},[s._v("#")]),s._v(" 冻结之后，对象属性不可更改")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"huuhui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"冻结只是浅冻结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冻结只是浅冻结"}},[s._v("#")]),s._v(" 冻结只是浅冻结")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  person"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    person_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"huhui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("person_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("person_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("Object.freeze()")]),s._v("会把对象冻结，所以比较适合展示类的场景，如果你的数据属性需要改变，可以重新替换成一个新的 "),a("code",[s._v("Object.freeze()")]),s._v("的对象。")]),s._v(" "),a("p",[s._v("在 vue 中进行纯大型表格数据渲染时(只有预览的功能)，在 data 选项中，将数据用 Object.freeze()进行包装。这样就能节省大量资源。")]),s._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("初始化时，vue 会对 data 做 getter、setter 改造，在现代浏览器里，这个过程实际上挺快的，但仍然有优化空间。")]),s._v(" "),a("p",[a("code",[s._v("Object.freeze()")]),s._v(" 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。")]),s._v(" "),a("p",[s._v("当你把一个普通的 JavaScript 对象传给 Vue 实例的 "),a("code",[s._v("data")]),s._v(" 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter，这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。")]),s._v(" "),a("p",[s._v("但 Vue 在遇到像 "),a("code",[s._v("Object.freeze()")]),s._v(" 这样被设置为不可配置之后的对象属性时，不会为对象加上 setter getter 等数据劫持的方法。")]),s._v(" "),a("h3",{attrs:{id:"如何实现深冻结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现深冻结"}},[s._v("#")]),s._v(" 如何实现深冻结")]),s._v(" "),a("p",[s._v('"深冻结"要完全冻结具有嵌套属性的对象，你可以编写自己的库或使用已有的库来冻结对象，如'),a("a",{attrs:{href:"https://github.com/substack/deep-freeze",target:"_blank",rel:"noopener noreferrer"}},[s._v("Deepfreeze"),a("OutboundLink")],1),s._v("或"),a("a",{attrs:{href:"https://github.com/immutable-js/immutable-js",target:"_blank",rel:"noopener noreferrer"}},[s._v("immutable-js"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 深冻结函数.\nfunction deepFreeze(obj) {\n\n  // 获取定义在obj上的属性名\n  var propNames = Object.getOwnPropertyNames(obj);\n\n  // 在冻结自身之前冻结属性\n  propNames.forEach(function(name) {\n    var prop = obj[name];\n\n    // 如果prop是个对象，递归使用deepFreeze()函数\n    if (typeof prop == 'object' && prop !== null)\n      deepFreeze(prop);\n  });\n\n  // 冻结自身(no-op if already frozen)\n  return Object.freeze(obj);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"如何实现-解冻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现-解冻"}},[s._v("#")]),s._v(' 如何实现"解冻"')]),s._v(" "),a("p",[s._v("事实上, 在 javascript 中, 对象冻结后, 没有办法再解冻, 只能通过克隆一个具有相同属性的新对象, 通过修改新对象的属性来达到目的.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var obj = {\n    name: 'hit',\n    age: 23\n}\nObject.freeze(obj)\n// obj = {...obj}\n//obj = Object.assign({}, obj)\n// obj = JSON.parse(JSON.stringify(obj))\n// 以上三种都可以达到克隆的目的\nobj.name = 'huuhui'\ndocument.write(obj.name)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"两者的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者的区别"}},[s._v("#")]),s._v(" 两者的区别")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Object.freeze() 和 const 变量声明不同，也不承担 const 的功能。")]),s._v(" "),a("p",[s._v("const 和 Object.freeze()完全不同")])])]),s._v(" "),a("ul",[a("li",[s._v("const 的行为像 let。它们唯一的区别是， const 定义了一个无法重新分配的变量。 通过 const 声明的变量是具有块级作用域的，而不是像 var 声明的变量具有函数作用域。")]),s._v(" "),a("li",[s._v("Object.freeze()接受一个对象作为参数，并返回一个相同的不可变的对象。这就意味着我们不能添加，删除或更改对象的任何属性。")]),s._v(" "),a("li",[s._v("const 和 Object.freeze()并不同，const 是防止变量重新分配，而 Object.freeze()是使对象具有不可变性。")])]),s._v(" "),a("h2",{attrs:{id:"何时使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[s._v("#")]),s._v(" 何时使用")]),s._v(" "),a("h3",{attrs:{id:"const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[s._v("#")]),s._v(" const:")]),s._v(" "),a("p",[s._v("作用范围是块级的")]),s._v(" "),a("p",[s._v("在变量声明之前使用时会报引用错误")]),s._v(" "),a("p",[s._v("不能重新赋值")]),s._v(" "),a("h3",{attrs:{id:"object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-freeze"}},[s._v("#")]),s._v(" Object.freeze():")]),s._v(" "),a("p",[s._v("​ 可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。")]),s._v(" "),a("p",[s._v("​ 想通过冻结对象，使其变成不可变对象。从而摆脱 vue 框架对数据的劫持，从而提升性能时，使用 Object.freeze().")])])}),[],!1,null,null,null);t.default=e.exports}}]);