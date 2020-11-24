# 简介

CSS 预处理器是一种脚本语言，可扩展 CSS 并将其编译为常规 CSS 语法，以便可以通过 Web 浏览器读取。 它提供诸如变量，函数， mixins 和操作等功能，可以构建动态 CSS。

LESS 是一个 CSS 预处理器，可以为网站启用可自定义，可管理和可重用的样式表。

## 语言特性

### css 的三大语言特性。

- 层叠性
  相同选择器给设置相同的样式，此时一个样式就会覆盖另一个冲突的样式。层叠性主要解决样式冲突的问题。
- 继承性

CSS 中子标签会继承父标签的某些样式。（主要继承与文字有关的样式）

- 优先级

当同一个元素指定多个选择器，就会有优先级的产生。

选择器相同，则执行层叠性。

选择器不同，则根据选择器权重。

### less 的语言特性

#### 嵌套

在 less 中，我们可以这样写，来实现一个样式的嵌套(优先级:解决样式冲突，提供一种权重计算方式，哪个规则的权重最高，就按照哪种方式来选择)。

> 继承或者\* 为 0， 元素选择器为 1， 类选择器或伪类选择器为 10，ID 选择器为 100，行内样式为 1000， !important 为无穷大。

```html
<div class="page">
  <header>
    <h1>
      使用less
    </h1>
    <h2>
      less 的语言特性
    </h2>
  </header>
</div>
```

```less
<style lang="less">
.page {
  header {
    h1 {
      color: red;
    }
    h2 {
      color: blue;
    }
  }
}
</style>
```

#### 操作

less 支持一些算术运算，例如加号(+)，减号( - )，乘法(\*)和除法(/)，它们可以对任何数字，颜色或变量进行操作。 操作节省了大量的时间，当你使用变量，让感到就像是简单的数学工作。作用有点类似于 css 中的 calc()函数。

```less
<style lang="less">
@fontSize: 10px;
.page {
  header {
    h1 {
      color: red;
      font-size: @fontSize * 2;
    }
    h2 {
      color: blue;
      font-size: @fontSize;
    }
  }
}
</style>
```

#### 转义

它动态构建选择器，并使用属性或变量值作为任意字符串。

```less
<style lang="less">
@fontSize: 10px;
.page {
  header {
    h1 {
      color: red;
      font-size: @fontSize * 2;
    }
    h2 {
      color: ~"green";
      font-size: @fontSize;
    }
  }
}
</style>
```

#### 函数

LESS 映射具有值操作的 JavaScript 代码，并使用预定义的函数来操纵样式表中的 HTML 元素。 它提供了操作颜色的几个功能，如圆函数，floor 函数，ceil 函数，百分比函数等。

```html
<div class="page">
  <header>
    <h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, amet autem?
      Quo tempora sequi dignissimos maxime ex et, nihil fuga eaque voluptatum,
      reprehenderit, vero totam aut molestiae saepe error laudantium.
    </h1>
    <h2>
      less 的语言特性
    </h2>
  </header>
</div>
```

```less
<style lang="less">
@fontSize: 10px;
@width:.5;
.page {
  header {
    h1 {
      color: red;
      font-size: @fontSize * 2;
      width: percentage(@width);
      overflow: hidden;
      white-space: nowrap;
    }
    h2 {
      color: ~"green";
      font-size: @fontSize;
    }
  }
}
</style>
```

#### 命名空间和访问器
写好一个通用的mixins分组，使用一个命名空间，再使用访问器，传递变量。
从外部去封装mixins.
```html
<div class="myclass">
  this is a params
</div>
```

```less
.class1 {
  .class2 {
    .val(@param) {
      font-size: @param;
      color: green;
    }
  }
}
.myclass {
  .class1 > .class2 > .val(20px);
}
```
