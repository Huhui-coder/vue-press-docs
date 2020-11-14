## 简述让一个元素在窗口中消失以及垂直水平居中的方法，还有Flex布局的理解。

能使元素消失的方法有两种，分别是`display: none` 和 `visibility: hidden`以及`opacity: 0`
扩展到`vue`框架的`v-if` 和 `v-show` 之间的区别: 
`v-if` 背后的原理就是用`display:none`实现的，是真正将DOM元素去掉了。
而 `v-show` 背后的原理便是`visibility: hidden`,仅仅是将DOM元素隐藏掉了。
搭配回流和重绘来讲解。如果是要频繁显示或隐藏的元素，推荐使用`v-show`.

### 前言-什么是回流重绘

浏览器使用流式布局模型 (Flow Based Layout)。
浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。
有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但**table**及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要**避免使用table布局**的原因之一。

**回流必将引起重绘，而重绘不一定会引起回流**

### 回流
> 当Render Tree 中部分或全部元素的尺寸,结构，或某些属性发生改变时，浏览器重新渲染部分或者全部文档的过程叫做回流。
下面的内容会导致回流

- 页面首次渲染
- 浏览器窗口发生改变
- 元素的尺寸或位置发生改变
- 元素内容变化(文字数量或图片大小等等)
- 元素字体大小发生变化
- 添加或者删除可见的DOM元素
- 一些常用的且会导致回流的属性或方法
   - clientWidth, clientHeight, clientTop, clientLeft
   - offsetWidth、offsetHeight、offsetTop、offsetLeft
   - scrollWidth、scrollHeight、scrollTop、scrollLeft
   - scrollIntoView()、scrollIntoViewIfNeeded()
   - getComputedStyle() 获取的是一个DOM元素实时的经过变化的css style 的集合对象， 可通过 getPropertyValue(props)获取到具体属性的值
   - getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。返回的值有left, top, right, bottom, x, y, width, 和 height这几个以像素为单位的只读属性用于描述整个边框。除了width 和 height 以外的属性是相对于视图窗口的左上角来计算的。
   - scrollTo()
### 重绘
> 当页面中元素样式的改变并不影响它在文档流中的位置时（例如: color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。


简单来说，就是不改变元素的位置，但是会改变元素的呈现形式，那么这个多半就是要重绘了。
#### 回流和重绘对比
**回流比重绘的代价更高**

有时候只是回流一个简单的元素，它的父元素以及任何跟随它的元素都会产生回流。

#### 如何避免回流和重绘

##### CSS

避免使用table布局。
尽可能在DOM树的最末端改变class。
避免设置多层内联样式。
将动画效果应用到position属性为absolute或fixed的元素上。
避免使用CSS表达式（例如: calc()）。

##### JavaScript

避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### 垂直水平居中的办法

详情见本目录下的 14种方式实现水平垂直布局.html

#### 总结: 

##### 水平居中较为简单, 共提供了7种方法,

一般情况下 text-align:center,marin:0 auto; 足矣

① text-align:center;
② margin:0 auto;
③ width:fit-content;
④ flex
⑥ transform 【一般用于不需要具体的宽度，高度直接使用百分比】
⑦ ⑧ 两种不同的绝对定位方法 第一种: left: 50% margin-left: -0.5宽度 第一种: left:0;right:0;margin:0 auto;

##### 垂直居中, 共提供了7种方法.

① 单行文本, line-height 等于height
② 行内块级元素, 使用 display: inline-block, vertical-align: middle; 加上伪元素辅助实现
③ vertical-align
④ flex
⑥ transform 【一般用于不需要具体的宽度，高度直接使用百分比】
⑦ ⑧ 两种不同的绝对定位方法 第一种: top: 50% margin-left: -0.5高度 第一种: left:0;right:0;margin:auto 0;


## 如何使用css3 进行自适应和响应式布局
自适应是一套模板适应所有终端，但每种设备上看到的版式是一样的，俗称宽度自适应。
- 使用 `flexlib` 淘宝自适应解决方案。其原理就是设置默认的根字体 root font-size 的大小，然后 监听 浏览器的缩放时间，再根据浏览的视口宽高动态的去改变 root font-size。页面中的css 单位都用rem 来设置，从而达到自适应的效果。
缺点： 1.会有不能整除的情况，会有小数点出现，所以这个方案产生的结果并不是很精确。
2.由于是监听的浏览器缩放( window.addEventListener('resize', setRemUnit))事件，是属于触发频率比较高的时间，在正式使用时还要注意使用防抖，节流。以此来节省性能。

- 使用 vw css 单位, flex 布局方法来实现自适应。
不用写额外的js 代码。简单好用。

响应式布局是一套模板适应所有终端，但每种设备看到的版式可以是不一样的。
```js
@media (orientation:portrait) and (max-width:460px) {
.video .innerBox .news a.more {
display: none;
}
.video .innerBox .news span {
display: none;
}
.video .innerBox .news {
width: 100%;
}
.video .innerBox .news ul {
width: 100%;
text-align: center;
}
}
```


## 绘制三角形，圆形和菱形

绘制三角形
```css
// 使用 border 来实现，width设置为0, 一边的border 为有颜色，三边的border 为 透明色。三角形。
div {
    width: 0;
    height: 0;
    border: 40px solid;
    border-color: transparent transparent red;
}
```
绘制圆形
```css
// 使用 border-radius: 50%; 来实现。圆形。
.circle {
	border-radius: 50%;
	width: 200px;
	height: 200px; 
	/* 宽度和高度需要相等 */
}
```
绘制菱形
```css
// 使用两个元素来实现，大体思路就是给父元素设置宽高，并且`overflow: hidden`,再旋转45度、
// 子元素宽度设置跟父元素一样的，往反方向旋转45度。
.picture{
    width: 100px;
    height: 100px;
    overflow: hidden;
    transform: rotate(45deg);
}
img {
    width: 100%;
    transform: rotate(-45deg);
}
```