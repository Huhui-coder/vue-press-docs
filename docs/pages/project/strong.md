# 什么是代码的健壮性

为了避免出现各种各样的 bug，例如(对象引用报错，xx.map is not a function)。
也为了使代码更容易扩展，后续加需求不需要对之前的代码进行大范围改动。

简单来讲就是，让代码在面对未知的接口请求返回和各种边界问题上，表现良好。且更利于扩展，方便阅读。那么你的代码就具备了健壮性这一特点。

既然代码更具备健壮性可以为我们带来那么多的好处，那我们需要如何去提高代码的健壮性呢？实际上，这是有迹可循的，且跟我共同探险。

## 异常处理

错误是编程过程的一部分。编写程序的过程难免会出现一些错误，通过这些产生的错误，我们可以学会如何避免遇到这样的情况，以及如何在下次做的更好。
在 `JavaScript` 中，当代码语句紧密耦合并产生错误时，继续使用剩余的代码语句是没有意义的。相反，我们试图尽可能优雅地从错误中恢复过来。 `JavaScript` 解释器在出现此类错误时检查异常处理代码，如果没有异常处理程序，程序将返回导致错误的任何函数。
对调用堆栈上的每个函数重复此操作，直到找到异常处理程序或到达顶层函数，从而导致程序以错误终止，导致程序的崩溃。

### 同步代码的异常处理

一般来说，有两种处理方式：

- 抛出异常，如果在运行时发生的问题无法得到有意义的处理，最好抛出它

```js
function openFile(fileName) {
  if (!exists(fileName)) {
    throw new Error('找不到文件 ' + fileName);
  } // ...
}
```

- 捕获异常，抛出的异常在运行时更有意义的地方被捕获和处理

```js
try {
  openFile('../test.js');
} catch (e) {
  // 优雅地处理抛出的期望
}
```

#### Error 对象

在上面我们了解到对于错误的处理流程，是先抛出后捕获。

抛出是通过 `throw` 语句来进行的，但是，我们不能简单的 `throw 'Something is wrong'` 这不符合规范。
我们可以抛出一个 `Error`类型的对象。

`Error` 类型用于表示一般异常。这种类型的异常最常用于实现用户定义的异常。它有两个内置属性可供使用。

`message` — 作为参数传递给 `Error` 构造函数的内容。例如，`new Error('This is an error message')`。您可以通过 `message` 属性访问消息。

```js

const myError = new Error('Error!!!')
​
console.log(myError.message) // Error!!!
```

`stack` — 该属性返回导致错误的文件的历史记录（调用堆栈）。堆栈顶部还包括 `message` ，后面是实际堆栈，从最新/隔离的错误点开始，到最外部负责的文件。

```js
Error: Error!!!
    at <anonymous>:1:1
```

注意：`new Error('...')` 在抛出之前不会执行任何操作，即 `throw new Error('error msg')`   将在 `JavaScript` 中创建一个 `Error` 实例，并停止脚本的执行，除非您对 `Error` 错误执行某些操作，例如捕获它。

#### try-catch-finally

而捕获异常最简单的处理方式就是使用 `try-catch-finally`语句。

```js
try {
  // 要运行的代码
} catch (e) {
  // 发生异常时要运行的代码
} finally {
  // 无论发生异常都始终执行的代码
}
```

其中 `finally` 语句是可选的。

在 `try` 子句中，我们添加了可能产生异常的代码。如果发生异常，则执行 `catch` 子句。
有时，无论代码是否产生异常，都需要执行代码，这时我们可以使用可选块 `finally` 。
即使 `try` 或 `catch` 子句执行 `return` 语句， `finally` 块也将执行。例如，以下函数返回 `Execute finally`，因为 `finally` 子句是最后执行的内容。

```js
function foo() {
  try {
    return true;
  } finally {
    console.log('Execute finally');
  }
}
```

我们在无法事先检查代码正确性的地方使用 `try-catch`。

```js
const user = '{"name": "D.O", "age": 18}';
try {
  // 代码运行
  JSON.parse(params); // 在出现错误的情况下，其余的代码将永远无法运行
  console.log(params);
} catch (err) {
  // 在异常情况下运行的代码
  console.log(err.message); // params is not defined
}
```

如上所示，在执行代码之前，不可能检查 `JSON.parse` 以获得 `stringify` 对象或字符串。

注意：可以捕获程序产生的异常和运行时异常，但无法捕获 `JavaScript` 语法错误。

`try-catch-finally` 只能捕获同步错误。如果我们尝试将其用于异步代码，那么在异步代码完成其执行之前，`try-catch-finally` 可能已经执行了。

### 异步代码的异常处理

#### Promise 的异常处理

使用 `Promises` 的 `then` 或者 `catch` ，我们可以通过将错误处理程序传递给 `then` 方法或使用 `catch` 子句来处理错误。

```js
promise.then(onFulfilled, onRejected);
```

也可以使用 `.catch(onRejected)` 而不是 `.then(null, onRejected)` 添加错误处理程序，其工作方式相同。
让我们看一个 `.catch` 拒绝 `Promise` 的例子。

```js
Promise.resolve('1')
  .then(res => {
    console.log(res); // 1
    throw new Error('go wrong'); // 抛出异常
  })
  .then(res => {
    console.log(res); // 不会被执行
  })
  .catch(err => {
    console.error(err); // 捕获并处理异常 ——> Error: go wrong
  });
```

#### async, await 的异常处理

使用 `async/await` 和 `try-catch-finally` ，处理异常是轻而易举的事。

```js
async function func() {
  try {
    await nonExistentFunction();
  } catch (err) {
    console.error(err); // ReferenceError: nonExistentFunction is not defined
  }
}
```

如果你嫌每一个 `async await` 函数都使用 `try catch` 进行包裹太麻烦了，你也可以直接这样。

```js
async function func() {
  await nonExistentFunction().catch(e => e);
}
```

因为本质上， `await` 后面接的是一个未返回结果的 `Promise`

### 处理未捕获的异常

为什么要处理未捕获的异常，如果不处理异常，会导致页面崩溃或者白屏。
在不同环境中，有不同的处理未捕获异常的方式。

> 这个一般是用来做最底层的保底捕获异常的处理

#### 浏览器环境

我们可以使用 `window.onerror()` 方法来处理未捕获的异常。每当运行时发生错误时，该方法会在 `window` 对象上触发 `error` 事件。
`onerror()` 的另一个实用做法是：当站点中的图片或视频等数据加载出错时，可以用该方法触发某些操作。例如，提供一张加载出错时的图片，或显示一条消息。

```js
<img src="logo.png" onerror="alert('Error loading picture.')" />
```

#### Node 环境

`EventEmitter` 模块派生的 `process` 对象可以订阅事件 `uncaughtException` 。

```js
process.on('uncaughtException', () => {})`
```

我们可以传递一个回调来处理异常。如果我们尝试捕获这个未捕获的异常，进程将不会终止，因此我们必须手动完成。

`uncaughtException` 仅适用于同步代码。对于异步代码，还有另一个称为 `unhandledRejection` 的事件。

```js
process.on('unhandledRejection', () => {});
```

绝不要尝试为基本 `Error` 类型实现 “捕获所有” 处理程序。这将混淆所发生的一切，并损害代码的可维护性和可扩展性。

## ES6+ 特性

### 解构赋值

### Array.isArray()

及时的对数据做类型、数值、是否存在的校验，使我们能够更安全的访问数据。

举个栗子：假如后端定义的 `data` 为 `array` 类型，那么讲道理无论什么情况下，我们都是可以使用数组类的方法的，但是，假如后端因为不存在 `data` 数据，从而返回了 `data: null`， 此种情况下，我们再去调用数组类的方法就会报错。这显然不是我们想看到的结果。

我们可以使用 `Array.isArray()` 来判断是否为 数组类型。

```js
Array.isArray(data) && data.forEach(() => {});
```

### 空值合并运算符 ??

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。

与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时。见下面的例子。

```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

### 可选链操作符 ?

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(`nullish` ) (`null` 或者 `undefined`) 的情况下不会引起错误，该表达式短路返回值是 `undefined` 。与函数调用一起使用时，如果给定的函数不存在，则返回 `undefined` 。

当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

## 代码规范

强制项目中使用代码格式、规范检测。目前前端项目中已集成。

<https://confluence.myscrm.cn/pages/viewpage.action?pageId=2128172>

## 设计模式

对于代码而言，如果用一种良好的设计模式来进行编码的话，对于代码之后的可扩展性是大有益处的。

### 单例模式

> 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

适用场景: 比如弹窗，无论点击多少次，弹窗只应该被创建一次。

```js
// 示例代码

class CreateUser {
  constructor(name) {
    this.name = name;
    this.getName();
  }
  getName() {
    return this.name;
  }
}
// 代理实现单例模式
var ProxyMode = (function() {
  var instance = null;
  return function(name) {
    if (!instance) {
      instance = new CreateUser(name);
    }
    return instance;
  };
})();
// 测试单体模式的实例
var a = new ProxyMode('aaa');
var b = new ProxyMode('bbb');

console.log(a.getName()); // aaa
console.log(b.getName()); // aaa
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a === b); //true
```

### 策略模式

> 策略模式的定义：定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。策略模式的目的就是将算法的使用算法的实现分离开来。

使用场景： 对于同一场景，不同参数有不同的处理方法。

一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类（可变），策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类 Context（不变），Context 接受客户的请求，随后将请求委托给某一个策略类。要做到这一点，说明 Context 中要维持对某个策略对象的引用。

```js
// 示例代码

/*策略类*/
const env = {
  dev: function(prefix) {
    return prefix + 'DEV';
  },
  test: function(prefix) {
    return prefix + 'TEST';
  },
  pro: function(prefix) {
    return prefix + 'PRO';
  },
};

/*环境类*/
const getEnvTag = function(context, prefix) {
  return env[context](prefix);
};
console.log(getEnvTag('dev', 'localhost://'));
```

### 代理模式

### 中介者模式

### 装饰者模式
