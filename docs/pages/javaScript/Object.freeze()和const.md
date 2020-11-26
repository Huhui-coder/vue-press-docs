## 简析 const

### 块作用域

在*块作用域*内使用 const 声明的变量与 let 变量相似。

### 在声明时赋值

JavaScript const 变量必须在声明时赋值：

### 不是真正的常数

关键字 const 有一定的误导性。

它没有定义常量值。它定义了对值的常量引用。

因此，我们不能更改常量原始值，但我们可以更改常量对象的属性。

#### 原始值

如果我们将一个原始值赋给常量，我们就不能改变原始值：

```js
const PI = 3.141592653589793;
PI = 3.14; // 会出错
PI = PI + 10; // 也会出错
```

#### 常量对象可以更改

你可以更改常量对象(or 数组)的属性：

```js
// 你可以创建 const 对象：
const car = { type: "porsche", model: "911", color: "Black" };

// 你可以更改属性：
car.color = "White";

// 你可以添加属性：
car.owner = "Bill";
```

但是你无法重新为常量(or 数组)对象赋值：

```js
const car = { type: "porsche", model: "911", color: "Black" };
car = { type: "Volvo", model: "XC60", color: "White" }; // ERROR
```

### 重新声明

在程序中的任何位置都允许重新声明 JavaScript var 变量

在同一作用域或块中，为已有的 const 变量重新声明声明或赋值是不允许的。

在另外的作用域或块中重新声明 const 是允许的。

### 不能变量提升

```js
carName = "Volvo";    // error
const carName;
```

### 暂时性死区：

const 变量不能在声明之前使用。

## 简析 Object.freeze()

Object.freeze()接受一个对象作为参数，并返回一个相同的不可变的对象。这就意味着我们不能添加，删除或更改对象的任何属性。

### 冻结之后，对象属性不可更改

```js
var obj = {
  name: "hit",
  age: 23,
};
Object.freeze(obj);
obj.name = "huuhui";
document.write(obj.name); // hit
```

### 冻结只是浅冻结

```js
var obj = {
  name: "hit",
  age: 23,
  person: {
    person_name: "huhui",
  },
};
Object.freeze(obj);
obj.person.person_name = "hh";
document.write(obj.person.person_name); // hh
```

### 应用场景

由于 `Object.freeze()`会把对象冻结，所以比较适合展示类的场景，如果你的数据属性需要改变，可以重新替换成一个新的 `Object.freeze()`的对象。

在 vue 中进行纯大型表格数据渲染时(只有预览的功能)，在 data 选项中，将数据用 Object.freeze()进行包装。这样就能节省大量资源。

### 原理

初始化时，vue 会对 data 做 getter、setter 改造，在现代浏览器里，这个过程实际上挺快的，但仍然有优化空间。

`Object.freeze()` 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。

当你把一个普通的 JavaScript 对象传给 Vue 实例的 `data` 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter，这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

但 Vue 在遇到像 `Object.freeze()` 这样被设置为不可配置之后的对象属性时，不会为对象加上 setter getter 等数据劫持的方法。

### 如何实现深冻结

"深冻结"要完全冻结具有嵌套属性的对象，你可以编写自己的库或使用已有的库来冻结对象，如[Deepfreeze](https://github.com/substack/deep-freeze)或[immutable-js](https://github.com/immutable-js/immutable-js)

```
// 深冻结函数.
function deepFreeze(obj) {

  // 获取定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果prop是个对象，递归使用deepFreeze()函数
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}
```

### 如何实现"解冻"

事实上, 在 javascript 中, 对象冻结后, 没有办法再解冻, 只能通过克隆一个具有相同属性的新对象, 通过修改新对象的属性来达到目的.

```
var obj = {
    name: 'hit',
    age: 23
}
Object.freeze(obj)
// obj = {...obj}
//obj = Object.assign({}, obj)
// obj = JSON.parse(JSON.stringify(obj))
// 以上三种都可以达到克隆的目的
obj.name = 'huuhui'
document.write(obj.name)
```

## 两者的区别

1. Object.freeze() 和 const 变量声明不同，也不承担 const 的功能。

   const 和 Object.freeze()完全不同

- const 的行为像 let。它们唯一的区别是， const 定义了一个无法重新分配的变量。 通过 const 声明的变量是具有块级作用域的，而不是像 var 声明的变量具有函数作用域。
- Object.freeze()接受一个对象作为参数，并返回一个相同的不可变的对象。这就意味着我们不能添加，删除或更改对象的任何属性。
- const 和 Object.freeze()并不同，const 是防止变量重新分配，而 Object.freeze()是使对象具有不可变性。

## 何时使用

### const:

作用范围是块级的

在变量声明之前使用时会报引用错误

不能重新赋值

### Object.freeze():

​ 可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。

​ 想通过冻结对象，使其变成不可变对象。从而摆脱 vue 框架对数据的劫持，从而提升性能时，使用 Object.freeze().
