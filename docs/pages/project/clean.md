# 代码整洁之道

## 优化逻辑判断

### if 多条件判断

对于 if 判断，多个判断语句。
诸如下面的情况：

```js
if (value === 'duck' || value === 'dog' || value === 'cat') {
  // ...
}
```

可以用这种方法进行优化。

```js
const options = ['duck', 'dog', 'cat'];
if (options.includes(value)) {
  // ...
}
```

### 提前退出机制

```js
function handleEvent(event) {
  if (event) {
    const target = event.target;
    if (target) {
      // Your awesome piece of code that uses target
    }
  }
}
```

来我们检查下对象 event 是否为真，以及属性 target 是否可用。问题是上面代码我们已经用了两个 if 语句。

让我们看看如何在这里实现 “提前退出”。

```js
function handleEvent(event) {
  if (!event || !event.target) {
    return;
  }
  // Your awesome piece of code that uses target
}
```

在这里用 “提前退出”，你可以检查是否 event 和 event.target 同时非假 。很明显，我们确信这一事件 event.target 非假。因为如果这个语句为假，程序就不会执行其他代码。

### 多条件分支判断

当某一业务增加需求时，需要多加一种判断类型，你首先想到的是否为 继续加一层 `else if`，如果是这样的话，那么很容易造成判断嵌套过多，极不好优化。可以考虑上述的 策略模式， 使用 `Object` 对象的独特 `key:value`数据特点来做优化。

```js
// 示例代码
// 最初可能的代码
const getScondes = (number, split) => {
  if (split === 'ss') {
    return number;
  } else if (split === 'mm') {
    return number * 60;
  } else if (split === 'hh') {
    return number * 60 * 60;
  }
};

console.log(getScondes(1, 'hh'));
```

我们尝试用上述所提及的策略模式进行优化。

```js
// 示例代码
const splitMap = {
  ss: function(number) {
    return number;
  },
  mm: function(number) {
    return number * 60;
  },
  hh: function(number) {
    return number * 60 * 60;
  },
};

const getSeconds = function(number, split) {
  return splitMap[split](number);
};

console.log(getSeconds(1, 'hh'));
```

### 使用 ES6 数组类

- Array.every // 判断是否所有项都满足条件
- Array.some // 判断是否有某一项满足条件
- Array.find // 判断是否有一项满足条件，如果有返回它，如果没有返回 `undefined`
- Array.slice // 返回一个新的数组对象，并且是浅拷贝
- Array.findIndex // 找到符合条件的第一个元素的索引
- Array.reduce // 累加器
- Array.splice // 删除、替换或者添加新的元素来修改原数组
