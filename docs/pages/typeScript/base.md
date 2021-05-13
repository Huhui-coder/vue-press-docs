1. 编译上下文
   `tconfig.json` 文件，定义了 ts 语言的一些配置。

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。
    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```

使用 `tsc -p ./your path` 来进行 ts 代码的编译。

2. 声明空间
   1. 类型声明空间
      ```ts
      class Foo {}
      interface Bar {}
      type Bas = {};
      ```
      可以将 Foo, Bar, Bas 作为类型注解使用。
   ```js
   let foo: Foo;
   let bar: Bar;
   let bas: Bas;
   ```

2) 变量声明空间

   ```js
   class Foo {}
   const someVar = Foo;
   const someOtherVar = 123;
   ```

3) 模块
   1. 全局模块
   ```ts
   const foo = 123;
   ```
   你可以在全局的任何一个地方，使用这个变量。
   ```ts
   const bar = foo;
   ```


    2. 文件模块

    用 `import` 和 `export` 来构建一个文件的模块。
    ```ts
    import { foo } from './foo';

    const bar = foo;
    ```

    3. 文件模块详情
    ES6 的模板导出语法。

    // 动态查找规则
    当你使用 import * as foo from 'foo'，将会按如下顺序查找模块：

./node_modules/foo
../node_modules/foo
../../node_modules/foo
直到系统的根目录
当你使用 import \* as foo from 'something/foo'，将会按照如下顺序查找内容
./node_modules/something/foo
../node_modules/something/foo
../../node_modules/something/foo
直到系统的根目录 4. global.d.ts

在上文中，当我们讨论文件模块时，比较了全局变量与文件模块，并且我们推荐使用基于文件的模块，而不是选择污染全局命名空间。

然而，如果你的团队里有 TypeScript 初学者，你可以提供他们一个 globals.d.ts 文件，用来将一些接口或者类型放入全局命名空间里，这些定义的接口和类型能在你的所有 TypeScript 代码里使用。

4. 命名空间

5) 动态导入表达式

使用 `import` 语法导入的模块，具备被 `webpack` 的 `Code Splitting`.

TypeSctipt 的类型系统

原始类型: string、number、boolean.
数组: [].

可以将 原始类型 和 数组 结合起来。

```ts
const boolArray: boolean[];

boolArray = [true, false];
```

接口:

```ts
interface Name {
  first: string;
  scond: string;
}

let name: Name;

name = {
  first: "John",
  second: "Doe",
};
```

内联类型注解:

```ts
let name: {
  first: string;
  second: string;
};
name = {
  first: "John",
  second: "Doe",
};

// 当你需要多次使用相同的内联注解时，你可以将其重构为一个接口。
```

特殊类型:
any, null, undefined, void

- any, 可以兼容任何类型。

- null 和 undefined

```ts
let num: number;
let str: string;
// 这些类型能被赋予
num = null;
str = undefined;
```

- void
```ts
function log(message: string): void {
  console.log(message);
}
```