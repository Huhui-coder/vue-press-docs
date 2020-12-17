## class 的基本使用方式

### 使用 ES5 来实现继承

方法多种多样，一般方法是使用原型链来实现。

```js
// 传统 ES5 的方法，借助 构造函数 和 原型链
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};

var p = new Point(1, 2);
p.toString(); // (1,2)
```

### 使用 ES6 来实现继承

#### 借助 class 语法

```js
// 改用 class 方式
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
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

Object.keys(Point.prototype);
// [],为空，获取不到。
Object.getOwnPropertyNames(Point.prototype);
// ["constructor","toString"]
```

```js
var Point = function(x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype);
// ["toString"], 可以获取得到。
Object.getOwnPropertyNames(Point.prototype);
// ["constructor","toString"]
```

#### constructor 方法

`constructor`方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。
`constructor`方法默认返回实例对象（即`this`），完全可以指定返回另外一个对象。

```js
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo; // false
```

并且 class 语法生成的构造函数，必须得经过 new 关键字进行调用，否则会报错，而 ES5 生成的构造函数则不会。

```js
class Foo {
  constructor() {
    return Object.create(null);
  }
}
Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```

```js
function Foo() {
  return Object.create(null);
}
Foo(); // {} 空对象
```

类的实例

生成类的实例方法是跟 ES5 的构造函数方法一样的，都是通过 new 关键字进行调用。
与 ES5 一样，实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型上（即定义在 class 上）。

```js
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var point = new Point(2, 3);

point.toString(); // (2, 3)

point.hasOwnProperty("x"); // true
point.hasOwnProperty("y"); // true
point.hasOwnProperty("toString"); // false
point.__proto__.hasOwnProperty("toString"); // true
```

与 ES5 一样，类的所有实例共享一个原型对象。

class 语法也可定义 存值函数(getter) 和 取值函数(setter)
可以对某个属性进行存值和取值的行为进行拦截。

```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return "getter";
  }
  set prop(value) {
    console.log("setter: " + value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop;
// 'getter'
```

采用 class 表达式，可以写出立即执行的 class

```js
let person = new (class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
})("张三");

person.sayName(); // "张三"
```

静态方法

不会被实例继承，只能由类来进行调用，需要在函数名前加上 static 关键字

另外的，如果在静态方法中使用到了 this 关键字，那么 this 关键字指的是这个类，而不是对应的实例方法。

```js
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log("hello");
  }
  baz() {
    console.log("world");
  }
}

Foo.bar(); // hello
```

静态方法不能被实例使用，但是可以被子类继承。

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}

class Bar extends Foo {}

Bar.classMethod(); // 'hello'
```

实例属性的新写法
一般来讲 实例属性都是在 constructor 函数中使用 this 去指定的，
但是，有一种新的写法: 既不写在 constructor 函数中，也不使用 this 去指定，而是写在 类定义的最顶层。

```js
class IncreasingCounter {
  _count = 0; // 实例属性
  get value() {
    console.log("Getting the current value!");
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

静态属性

因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上 static 关键字。

```js
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}
```

new.target 属性

怎么样保证， 用 function 关键字声明的 构造函数，必须通过 new 关键字去进行调用。
结合 我们的 new.target 属性。
new.target 属性的返回值是返回 new 命令作用于的那个构造函数。如果构造函数不是通过 new 命令或 Reflect.construct()调用的，new.target 会返回 undefined。

```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error("必须使用 new 命令生成实例");
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error("必须使用 new 命令生成实例");
  }
}

var person = new Person("张三"); // 正确
var notAPerson = Person.call(person, "张三"); // 报错
```

另外，当子类去继承父类的时候， new.target 会返回 子类。

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length, width) {
    super(length, width); // 相当于调用了 父类的 constructor 函数
  }
}

var obj = new Square(3); // 输出 false
```

## class 实现继承

可以通过 extends 关键字来实现继承

```js
class Point {}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + " " + super.toString(); // 调用父类的toString()
  }
}
```

如上所示，子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错。这是因为子类自己的 this 对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用 super 方法，子类就得不到 this 对象。

在子类方法中，可以通过 super 关键字去调用父类的方法。

在子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有 super 方法才能调用父类实例。

因为，只用调用了 super 方法之后，子类 才有自己的 this 对象，才有自己的实例。

`Object.getPrototypeOf()` 获取一个子类的父类。
