grid(网格布局)
分为 容器 和 项目
## 容器上的所有属性
- display
- grid-template-columns (表示网格轨道(Grid Track) 大小)
- grid-template-rows (表示网格轨道(Grid Track) 大小)
- gird-template-areas (通过引用 grid-area 属性指定的 网格区域(Grid Area) 名称来定义网格模板)
- grid-template (用于定义 grid-template-rows ，grid-template-columns ，grid-template-areas 简写属性。)
- grid-column-gap (设置列/行之间间距的宽度。)
- grid-row-gap (设置列/行之间间距的宽度。)
- grid-gap (上面两个属性的简写)
- justify-items (每个网格项在其对应网格中的位置)
- align-items (每个网格项在其对应网格中的位置)
- place-items (是以上两个属性的缩写)
- justify-content (是整个项目在整个容器中的位置)
- align-content (是整个项目在整个容器中的位置)
- place-content (是以上两个属性的缩写)
- grid-auto-colums (指定任何自动生成的网格轨道(grid tracks)（又名隐式网格轨道）的大小)
- grid-auto-rows (指定任何自动生成的网格轨道(grid tracks)（又名隐式网格轨道）的大小)
- grid-auto-flow (如果你有一些没有明确放置在网格上的网格项(grid items)，自动放置算法 会自动放置这些网格项。该属性控制自动布局算法如何工作。)
- grid (在一个声明中设置所有以下属性的简写： grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, 和 grid-auto-flow 。（注意：您只能在单个网格声明中指定显式或隐式网格属性）。)

## 项目上的所有属性
- grid-column-start (通过引用特定网格线(grid lines) 来确定 网格项(grid item) 在网格内的位置。)
- grid-column-end (通过引用特定网格线(grid lines) 来确定 网格项(grid item) 在网格内的位置。)
- grid-row-start (通过引用特定网格线(grid lines) 来确定 网格项(grid item) 在网格内的位置。)
- grid-row-end  (通过引用特定网格线(grid lines) 来确定 网格项(grid item) 在网格内的位置。)
- grid-column (是grid-column-start 和 grid-column-end 的缩写)
- grid-row (是grid-row-start 和 grid-row-end 的缩写)
- grid-area (为网格项提供一个名称，以便可以 被使用网格容器 grid-template-areas 属性创建的模板进行引用)
- justify-self (此值适用于单个网格项内的内容。)
- align-self (此值适用于单个网格项内的内容。)
- place-self (是place-self 是设置 align-self 和 justify-self 的简写形式。)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
    </div>
</body>
</html>
```

```css
.container{
    background-color: #f7f7f7;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
.item {
    text-align: center;
    line-height: 100px;
    color: #fff;
}
.item:nth-child(2n+1){
    background-color: red;
}

.item:nth-child(2n){
    background-color: black;
}

.item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 4;
}
.item:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;
}
.item:nth-child(4) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
}
.item:nth-child(9) {
    grid-column: 2 / 4;
}
```
![grid](https://tva1.sinaimg.cn/large/0081Kckwly1gkkexp1u56j31hb0f93yx.jpg)

## 参考文献
[五分钟学会grid](https://www.html.cn/archives/8506)

[grid完全图解](https://www.html.cn/archives/8510)

