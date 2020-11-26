## let 特点

ES6 新增了 `let` 命令，用来声明变量。它的用法类似于 `var`，但是所声明的变量，只在 `let` 命令所在的代码块内有效。

- 无变量提升
- 暂时性死区
- 不允许重复声明
- 块作用域

## const 特点

`const` 声明一个只读的常量。一旦声明，常量的值就不能改变。
除了拥有 `let` 的特点，还有两个独属于 `const` 的特点。

- 声明时就必须要赋值
- 声明的常量(简单数据类型)不可更改

## let 和 const 与 var 之间的不同

由于 使用 `var` 声明的变量，是属于全局变量，是挂载到 `window` 对象上的，而 使用 `let` 或 `const` 是不会的。

```js
var a = 1;
window.a; // 1
let b = 1;
window.b; // undefined
const c = 1;
window.c; //  undefined
```

在 `for` 循环中的差别，使用 `var` 声明的是全局变量， 而 使用 `let` 声明的是 局部变量，是拥有块级作用域的。
```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```



## 疑惑

为何 `const` 表示声明一个常量，但当你将一个对象使用 `const` 声明后，还是可以改变这个对象呢？

`const` 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const` 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

## 如何“冰冻”一个对象

哪怕你是使用`const` 去声明一个变量(引用类型的变量)，但其实，对象的结构啊，内部的属性啥的都是可以更改的，并不是真正的"常量"。
而 使用 `Object.freeze()` 可以达到“冰冻”一个对象的目的。

```js
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(obj[key]);
    }
  });
};
```

## js 所有的声明变量的方法

- var
- function
- let
- const
- import
- class
