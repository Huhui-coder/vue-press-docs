## 对于`flex`布局的理解

- flex-direction: 决定主轴的方向。
- flex-wrap: 定义如何换行。
- flex-flow: 是 flex-direction 和 flex-wrap 的缩写形式， 默认值分别是 row, no-wrap。
- justify-content: 定义主轴上的对齐方式。
- align-items: 定义 交叉轴上的对齐方式。
- align-content: 定义多根轴线的定义方式。

- order: 定义项目的排列顺序
- flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink: 定义项目的缩小比例,默认为1,即空间不足，项目将缩小，值为0时，不缩小。
- flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间，将覆盖项目定义的width值。
- flex: 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
- align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。

传统的布局方案: `display`, `position`, `float`
但是这种方案对于一些特殊布局是难以实现的。比如说:垂直居中。

任何一个容器都可以设置为`flex`布局,`display: flex`;行内元素也可以使用`flex`布局`display: inline-flex`.
**设置为flex布局后，子元素的float、clear、vertical-align属性将失效**
基本概念: 采用flex布局的元素，称为flex容器，它的所有子元素自动成为容器元素，称为flex项目。
![flex布局](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

主轴(main axis), 交叉轴(cross aixs)
主轴开始的位置(main start), 主轴结束的位置(main end)
交叉轴开始的位置(cross start), 交叉轴结束的位置(cross end)
单个项目占据主轴空间叫做(main size), 占据的交叉轴空间叫做(cross size)

## 容器上的属性

- flex-direction: 决定主轴的方向
- flex-wrap: 定义如何换行
- flex-flow: 是 flex-direction 和 flex-wrap 的缩写形式， 默认值分别是 row, no-wrap.
- justify-content: 定义主轴上的对齐方式
- align-items: 定义 交叉轴上的对齐方式
- align-content: 定义多根轴线的定义方式
``` css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
**flex-direction: 决定主轴的方向(即项目排列的方向)**

- row（默认值）: 主轴为水平方向，起点在左端。
- row-reverse: 主轴为水平方向，起点在右端。
- column: 主轴为垂直方向，起点在上沿。
- column-reverse: 主轴为垂直方向，起点在下沿。

``` css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
**flex-wrap: 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。**

- nowrap（默认值): 不换行。所有的项目平分容器所占空间。
- wrap: 换行，第一行在上,所有的项目按照本来的尺寸占据容器的空间。
- wrap-reverse: 换行，第一行在下,所有的项目按照本来的尺寸占据容器的空间。

``` css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
**flex-flow是`flex-direction` 和 `flex-wrap` 形式的简写形式，默认是row nowrap.**

``` css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
**justify-content: 定义了项目在主轴上的对齐方式。**

- flex-start（默认值: 左对齐
- flex-end: 右对齐
- center: 居中
- space-between: 两端对齐，项目之间的间隔都相等。
- space-around: 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

``` css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
**align-items: 项目在交叉轴上如何对齐。**

- stretch（默认值）: 如果项目未设置高度或设为auto，将占满整个容器的高度。
- flex-start: 交叉轴的起点对齐。
- flex-end: 交叉轴的终点对齐。
- center: 交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。

``` css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
**align-content: 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。**

- stretch（默认值: 轴线占满整个交叉轴。
- flex-start: 与交叉轴的起点对齐。
- flex-end: 与交叉轴的终点对齐。
- center: 与交叉轴的中点对齐。
- space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

## 项目上的属性

- order: 定义项目的排列顺序
- flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink: 定义项目的缩小比例,默认为1,即空间不足，项目将缩小，值为0时，不缩小。
- flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间，将覆盖项目定义的width值。
- flex: 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
- align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

``` css
.item {
  order: <integer>;
}
```
**order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。**

``` css
.item {
   flex-grow: <number>; /* default 0 */
}
```
**flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。**

如果一个容器中只有一个项目拥有`flex-grow`属性，不管为多少，这个项目都将占据所有的剩余空间。
如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

``` css
.item {
   flex-shrink: <number>; /* default 1 */
}
```
**flex-shrink: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。值为0时，不缩小。**

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。

``` css
.item {
   flex-basis: <length> | auto; /* default auto */
}
```
**flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间（main size）。**

浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
这个属性会覆盖你本来定义的width属性值。

``` css
.item {
   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
**flex是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。**

flex: 0 1 aut0; => flex-grow: 0;[如果存在剩余空间，也不放大。] flex-shrink: 1;[为1，即如果空间不足，该项目将缩小] flex-basis:auto; [表示项目原本的大小]

``` css
.item {
   align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
**align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。**

默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
