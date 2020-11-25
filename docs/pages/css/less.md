# 简介

CSS 预处理器是一种脚本语言，可扩展 CSS 并将其编译为常规 CSS 语法，以便可以通过 Web 浏览器读取。 它提供诸如变量，函数， mixins 和操作等功能，可以构建动态 CSS。

LESS 是一个 CSS 预处理器，可以为网站启用可自定义，可管理和可重用的样式表。

## css 的三大语言特性

- 层叠性
  相同选择器给设置相同的样式，此时一个样式就会覆盖另一个冲突的样式。层叠性主要解决样式冲突的问题。
- 继承性

CSS 中子标签会继承父标签的某些样式。（主要继承与文字有关的样式）

- 优先级

当同一个元素指定多个选择器，就会有优先级的产生。

选择器相同，则执行层叠性。

选择器不同，则根据选择器权重。

## less 的语言特性

### 父选择器

使用`&` 来引用父选择器

### 嵌套

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

### 变量

LESS 中声明变量的格式为“@变量名：变量值”。

使用变量 来 避免多次使用同一值，同时，也可以很方便后续的 UI 样式调整，改一处，所有用到的地方都生效。

### 操作

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

### 转义

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

### 函数

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

#### 其他函数

- color 它是一个代表颜色的字符串。
- image-size 它用于从文件检查图像的维度。
- image-width 它检查文件中图像的宽度。
- image-height 它检查图像从文件的高度。
- convert 数字从一个单位转换为另一个单位。
- data-uri 数据 uri 是统一资源标识符(URI)模式，其在网页中嵌入资源。
- default 默认函数仅在保护条件内可用且与任何其他混合程序不匹配时才返回 true。
- unit 默认函数仅在保护条件内可用且与任何其他 mixin 不匹配时才返回 true
- get-unit get-unit 函数返回其中存在参数的单位，其数字和单位。
- svg-gradient svg-gradient 是一种颜色到另一种颜色的转换。 它可以向同一元素添加许多颜色。

#### 数学函数

- ceil 它将数字向上舍入为下一个最大整数。
- floor 它将数字向下取整为下一个最小整数。
- percentage 它将浮点数转换为百分比字符串。
- round 它舍入浮点数。
- sqrt 它返回一个数字的平方根。
- abs 它提供了数字的绝对值。
- pi 它返回 pi 值。
- min 它指定一个或多个参数的最小值。
- max 它指定一个或多个参数的最大值。

### 命名空间和访问器

写好一个通用的 mixins 分组，使用一个命名空间，再使用访问器，传递变量。
从外部去封装 mixins.

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

### 变量范围

变量范围指定可用变量的位置。 变量将从本地作用域搜索，如果它们不可用，则编译器将从父作用域搜索。
有点类似 js 中的变量作用域；你用 @var 可以声明一个变量，声明变量它本身可以是一个具体的 css 数值。若你直接使用@var 声明的这个变量，那么默认使用的就是在父作用域内声明的变量的数值。
你也可以在其本地作用域中声明变量，其值将覆盖原父作用域中声明的变量的值。

```less
<style lang="less">
@fontSize: 10px;
@width: 0.5;
@var: @a;
@a:20px;
.page {
  header {
    h1 {
      color: red;
      font-size: @fontSize * 2;
      width: @var;
      overflow: hidden;
      white-space: nowrap;
    }
    h2 {
      font-size: @fontSize;
      width: @var;
      @a:30px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>

```

### 注释

less 支持单行和多行注释，其中单行的注释不会再编译之后的 css 文件中显示。

```less
/* this is 
Multi-line comments
*/

// this is Single line comment
```

### 导入

使用 @import 'xx.less'; 语句进行样式的外部导入。

### 扩展

使用:extend 可以达到扩展的目的，同时 :extend 是 less 的一个伪类。
可以在一个选择器中扩展其他选择器样式。

```less
.style:extend(.container, .img) {
  background: #bf70a5;
}
.container {
  font-style: italic;
}
.img {
  font-size: 30px;
}
```

编译成 css 之后

```css
.style {
  background: #bf70a5;
}
.container,
.style {
  font-style: italic;
}
.img,
.style {
  font-size: 30px;
}
```

### 混合

可以指定一个 css 样式规则，在其他的选择器中进行复用。

```less
.mixin() {
  &:hover {
    background: #ffc0cb;
  }
}
// 定义一个 mixins
a {
  .mixin();
}
```

### 混合参数

```less
// 可以提供参数的默认值，@arguments 表示所有的混合参数
.box-shadow(@x: 0; @y: 0; @height: 3px; @width: 3px) {
  -webkit-box-shadow: @arguments;
  -moz-box-shadow: @arguments;
  box-shadow: @arguments;
}
.myclass {
  .box-shadow(2px; 2px);
}
```

### 循环

```less
.cont(@count) when (@count > 0) {
  .cont((@count - 1));
  width: (25px * @count);
}
div {
  .cont(7);
}
```

编译 css 后输出

```css
div {
  width: 25px;
  width: 50px;
  width: 75px;
  width: 100px;
  width: 125px;
  width: 150px;
  width: 175px;
}
```

### 合并逗号

```less
.myfunc() {
  box-shadow+: 5px 5px 5px grey;
}
.class {
  .myfunc();
  box-shadow+: 0 0 5px #f78181;
}
```

编译后输出

```css
.class {
  box-shadow: 5px 5px 5px grey, 0 0 5px #f78181;
}
```
