# 条件类型、映射类型、类型推断、never 类型

## 条件类型

条件类型是一种条件表达式进行类型的关系检测。

## 映射类型

映射类型是一种用来遍历 interface{} 的功能类型。

利用映射类型快速创建类型

```ts
type Coord = {
  [K in 'x' | 'y']: number;
};
// 得到
// type Coord = {
//  x: number;
//  y: number;
// }
```