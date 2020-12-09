## 实现继承
### 使用ES5来实现
方法多种多样，一般方法是使用原型链来实现。
### 使用ES6

#### 借助 class 语法
```js
// 传统 ES5 的方法，借助 构造函数 和 原型链
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

```js
// 改用 class 方式
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
像上面直接在 class 中直接添加方法，实际上就是往类的`prototype`属性上添加方法。
除此之外，使用 class 语法声明的方法时不可枚举的。
```js
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype)
// [],为空，获取不到。
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

```js
var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype)
// ["toString"], 可以获取得到。
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```
#### constructor 方法
`constructor`方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。
`constructor`方法默认返回实例对象（即`this`），完全可以指定返回另外一个对象。




静态方法

实例属性的新写法

静态属性

私有方法和私有属性

new.target 属性

