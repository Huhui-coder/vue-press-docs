# 高级类型/内置类型工具

## Partial、Readonly、Record、Pick

以上四种的源码定义

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

## Partial

将类型定义的所有属性都修改为可选。

```ts
type Coord = Partial<Record<'x' | 'y', number>>;

// 等同于
type Coord = {
  x?: number;
  y?: number;
};
```

## Readonly

不管是从字面意思，还是定义上都很好理解：将所有属性定义为自读。

```ts
type Coord = Readonly<Record<'x' | 'y', number>>;

// 等同于
type Coord = {
  readonly x: number;
  readonly y: number;
};

// 如果进行了修改，则会报错：
const c: Coord = { x: 1, y: 1 };
c.x = 2; // Error: Cannot assign to 'x' because it is a read-only property.
```

## Record

以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。

```ts
type Coord = Record<'x' | 'y', number>;

// 等同于
type Coord = {
  x: number;
  y: number;
};
```

## Pick

从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。

```ts
type Coord = Record<'x' | 'y', number>;
type CoordX = Pick<Coord, 'x'>;

// 等用于
type CoordX = {
  x: number;
};
```