在编码规范这块儿需要做统一的有如下四个方面。

1. 跨平台开发时，配置统一的代码风格
2. 前端业务开发的编码规范
3. 前端代码提交前的格式检查和代码统一格式化
4. 前端代码提交的 commit 信息格式校验

[示例项目仓库](https://github.com/Huhui-coder/unite-format-example)

使用到的工具和插件:

[EditorConfig](https%3A//editorconfig.org/): 同编辑器和 IDE 之间定义和维护一致的代码风格

[ESlint](https%3A//github.com/eslint/eslint): 代码检查工具

[prettier](https%3A//prettier.io/docs/en/): 一个 Opinionated 的代码格式化工具

[husky](https%3A//prettier.io/docs/en/): 一个让配置 git hooks 变得更简单的工具

[lint-staged](https%3A//github.com/okonet/lint-staged): 只对 git 中变更的文件进行 lint 操作

[validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg): 对提交的 commit msg 进行校验


## 为跨平台和跨 IDE 开发维护一致的代码风格

不同的平台或者 IDE,对于空格的处理，tab 的处理可能是不一样的，为了代码格式的统一，需要一套规则来约束代码的风格。我们可以使用`EditorConfig` 来进行约束。

### EditorConfig 是什么

`EditorConfig` 可以帮助开发者在不同的编辑器和 IDE 之间定义和维护一致的代码风格。EditorConfig 包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码。EditorConfig 的配置文件十分易读，并且可以很好的在 VCS（Version Control System）下工作。

### EditorConfig 如何配置

在项目根目录下建立，文件名为`.editorconfig`的文件。

```shell
// 常见配置
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

[EditorConfifg- AlloyTeam 介绍](http://www.alloyteam.com/2014/12/editor-config/)

## 前端业务开发的编码规范

[html](https://juejin.cn/post/6844903843558326285)

[Airbnb React/JSX 编码规范](https://github.com/sowee121/javascript/blob/master/react/README.md)

[vue](https://cn.vuejs.org/v2/style-guide/)

## 前端代码提交前的格式检查，代码统一格式化和 commit msg 格式校验

为了提高开发效率，减少不必要的低级错误，规范代码质量，我们可以使用`ESlint`来进行约束。

为了团队的代码风格统一，减少不必要的麻烦，我们可以使用`perttier`来进行约束。

### ESLint 是什么？

`ESLint` 是一个代码检查工具，它能够被开发者灵活的配置，使其能够满足制定好的代码规范的要求，并且在编码过程中实时检测输入的代码，对于不符合代码规范的代码警告或报错。

#### 如何使用

##### 配置方法

配置注释 : 使用 JavaScript 注释将配置信息直接嵌入到文件中
配置文件 : 使用 JavaScript，JSON 或 YAML 文件指定配置信息

##### 配置文件说明

1. 文件格式

- JavaScript : 使用.eslintrc.js 并导出包含您的配置的对象。
- YAML : 使用.eslintrc.yaml 或.eslintrc.yml 定义配置结构。
- JSON : 用于.eslintrc.json 定义配置结构。
- 使用.eslintrc，可以是 JSON 或 YAML。
- package.json : eslintConfig 在你的 package.json 文件中创建一个属性并在那里定义你的配置。

2. 环境 :

> 脚本设计运行的环境。每个环境都带有一组预定义的全局变量。

```json
"env": {
  "browser": true,
  "node": true
}
```

3. 全局变量 :

> 脚本在执行期间访问的其他全局变量。

```json
"globals": {
  "React": true,
  "MtaH5": true,
  "TencentGDT": true
}
```

4. 解析器选项 :

> ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 需要 ECMAScript 5 语法。您可以覆盖该设置，以使用解析器选项启用对其他 ECMAScript 版本以及 JSX 的支持。

```json
"parserOptions": {
  "ecmaVersion": 6,
  "sourceType": "module", // 设置为`"script"`（默认）或者`"module"`您的代码位于ECMAScript模块中。
  "ecmaFeatures": { // 一个对象，指示您想要使用哪些其他语言功能
    "jsx": true, // 启用JSX
    "impliedStrict": true // 启用全局严格模式
  }
},
```

5. 插件

> 要在配置文件中配置插件，请使用 plugins 包含插件名称列表的密钥。该 eslint-plugin-前缀可以从插件名称被省略。

```json
"plugins": [
  "react",
  "eslint-plugin-react"
]
```

6. 扩展

> 扩展就是直接使用别人已经写好的 lint 规则，rules 属性中配置的规则都是基于这个规则之上配置的

```json
"extends": [
  "standard"
  "eslint:recommended",
  "plugin:react/recommended"
],
```

推荐的扩展配置：
[standardjs](https://standardjs.com/readme-zhcn.html)、[airbnb](https://lin-123.github.io/javascript/)、[eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

7. 规则 :

> ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一

- "off" 或 0 : 关闭规则
- "warn" 或 1 : 开启规则，使用警告级别的错误(不会导致程序退出)
- "error" 或 2 : 开启规则，使用错误级别的错误(当被触发的时候，程序会退出)

```json
"rules": {
  "strict": 2,
}
```

##### 如何检测

将运行命令添加到 package.json 的 scripts 脚本中，设置对 src 目录下的文件进行检查

```json
{
 ...
  "scripts": {
    "lint": "eslint ./src"
    "lintFix": "eslint ./src --fix"
  },
  ...
}
```

在控制台运行如下命令：

```
// 代码检查
npm run lint
// 代码检查并修复
npm run lintFix
```

示例配置:

```js
// 在根目录下建立 .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  // 用来处理webpack中指定别名但eslint未能识别报的错
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.base.conf.js", // 指定webpack配置文件路径
      },
    },
  },
  rules: {
    "react/state-in-constructor": 0,
    "comma-dangle": [2, "always-multiline"],
    "no-console": 0, //不禁用console
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-underscore-dangle": 0,
    "array-bracket-spacing": [2, "never"], // 指定数组的元素之间要以空格隔开(,后面)
  },
};
```

```js
// package.json
{
  "private": true,
  "scripts": {
    "start": "umi dev",
    "build": "umi build",
    "postinstall": "umi generate tmp",
    "lint": "eslint --fix",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "test": "umi-test",
    "test:coverage": "umi-test --coverage"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "validate-commit-msg"
    }
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write",
      "eslint --fix",
      "git add ."
    ]
  },
  "dependencies": {
    "@ant-design/pro-layout": "^6.6.4",
    "@umijs/preset-react": "1.x",
    "@umijs/test": "^3.3.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "typescript": "^4.1.3",
    "umi": "^3.3.2",
    "validate-commit-msg": "^2.14.0",
    "yorkie": "^2.0.0"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.11.1",
    "eslint-plugin-promise": "^4.2.1",
    "@typescript-eslint/parser": "^4.11.1",
    "babel-eslint": "^10.1.0",
    "eslint": "^7.17.0",
    "eslint-config-standard": "^16.0.2",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-react": "^7.22.0",
    "husky": "^4.3.6",
    "lint-staged": "^10.5.3",
    "prettier": "^1.19.1",
    "@typescript-eslint/parser": "^2.23.0",
    "eslint-config-airbnb-typescript": "^7.0.0",
    "eslint-import-resolver-webpack": "^0.12.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react-hooks": "^1.7.0"
  }
}

```

**注意**: 需要安装依赖

### prettier 是什么？

Prettier 作为强大的代码格式化工具，能够完全统一你和同事的代码风格

#### 如何使用

1. 安装依赖

   ```
   npm insatll -D prettier
   ```

2. 创建规则文件：在根目录创建 .prettier.js 文件
3. 在 package.json 文件的 scripts 中添加对应的代码

```json
{
  ...
  "scripts": {
    "format": "prettier --write 'src/**/*.{js,jsx,css,less}'",
    ...
  },
  ...
}

```

3. 在控制台执行 npm run format 即可自动格式化配置范围内的所有文件

示例配置：

```js
// 在跟目录下建立 .prettier.js文件
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 4,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: "none",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 换行符使用 lf
  endOfLine: "lf",
};
```

### Git Hook 是什么？

Git 能在特定的重要动作发生时触发自定义脚本。这里介绍的是提交工作流钩子。

![Git hook完整钩子](https://pic4.zhimg.com/80/v2-161c0a131454d4b24f16a9a3125d947f_720w.jpg)

在经常用的有两个：

1. pre-commit // 在 commit 之前执行
2. commit-msg // 在输入 commit msg 之后执行

#### 如何使用

Git Hooks 的实现其实非常简单，就是就.git/hooks 文件下，保存了一些 shell 脚本，然后在对应的钩子中执行这些脚本就行了。比如下图中，这是一个还没有配置 Git Hooks 的仓库，默认会有很多.sample 结尾的文件，这些都是示例文件
![git hook](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9pn2biisj312i0lnn1h.jpg)
我们可以打开一个名叫`pre-commit.sample`的文件，看看它的内容。
![pre-commit](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9poub6itj31g50u0gx3.jpg)

大致意思是说这是一个示例，做了一些格式方面的检测，这个脚本默认是不生效的，如果要生效，把文件名改为 pre-commit 即可。
我们将文件名中的 `.sample`去掉，这个钩子函数所配置的脚本就会执行了。

通过上面的介绍，我们知道了,git hook 配置是存储在.git 文件下的 git hooks 这个文件夹中的，但是我们每次进行 文件提交的时候，.git 文件并不会跟随我们修改好的文件一起提交进远程仓库，这就导致了一个问题，我们本地的 git hook 配置，并不能远程共享。

### husky 是什么？

由于直接书写 git hook 存在各种弊端，于是，`Husky`诞生了，Husky 的原理是让我们在项目根目录中写一个配置文件，然后在安装 Husky 的时候把配置文件和 Git Hook 关联起来，这样我们就能在团队中使用 Git Hook 了。

#### 如何使用

安装依赖

```
npm install husky -D
```

配置 husky

```json
// 在 package.json中
"scripts": {
    "lint": "eslint .",
},
 "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
```

解读配置文件，hooks 这个对象中，key 就是钩子名，而 value 就是需要执行的命令。上面这个配置的含义就是，在每次执行 git commit 之前，都会执行你配置的 lint 脚本(此处是进行 eslint 校验)。

在我们的 package.json 中配置 `husky`，并且在对应的 `git hook` 阶段来执行对应的命令。因此，不用繁琐的去配置 `git hook` 阶段的脚本文件了。

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test"
    }
  }
}
```

### lint-staged 是什么？

lint-staged 针对暂存的 git 文件运行 linters，不要让不符合规则的代码溜进代码库。lint-staged 总是将 所有暂存文件的列表传递给任务，忽略任何文件都应该在任务本身中配置，比如：.prettierignore / .eslintignore 。lint-stage 总是配合 husky 一起使用。

#### 如何使用

安装依赖

```
npm install lint-staged -D
```

```json
// package.json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write",
      "eslint --fix",
      "git add ."
    ]
  },
  ...
}

```

### validate-commit-msg 是什么？

好的 commit msg 应该是能让人一眼就知道，你这次的提交做了什么事情。所以，一个良好的规则来限定提交信息就显得尤为重要。

使用 `validate-commit-msg` 插件来实现

#### 如何使用

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

> `<type>(<scope>): <subject>// 空一行<body>// 空一行<footer>`

其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过 72 个字符（或 100 个字符）。这是为了避免自动换行影响美观。

##### Header

Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）。

（1）type

type 用于说明 commit 的类别，只允许使用下面 7 个标识。

feat：新功能（feature）

fix：修补 bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动

如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

（2）scope

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

（3）subject

subject 是 commit 目的的简短描述，不超过 50 个字符。

以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes

第一个字母小写

结尾不加句号（.）

##### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

More detailed explanatory text, if necessary. Wrap it to
about 72 characters or so. Further paragraphs come after blank lines.- Bullet points are okay, too- Use a hanging indent
有两个注意点。

（1）使用第一人称现在时，比如使用 change 而不是 changed 或 changes。

（2）应该说明代码变动的动机，以及与以前行为的对比。

##### Footer

Footer 部分只用于两种情况。

（1）不兼容变动

如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。

BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.

（2）关闭 Issue

如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue 。

Closes #234
也可以一次关闭多个 issue 。

Closes #123, #245, #992

##### Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 revert:开头，后面跟着被撤销 Commit 的 Header。

revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
Body 部分的格式是固定的，必须写成 This reverts commit &lt;hash>.，其中的 hash 是被撤销 commit 的 SHA 标识符。

如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的 Reverts 小标题下面。

[用法及介绍](http://www.phperz.com/article/16/0108/181569.html)

### 整合

有了上面的介绍，我们可以很容易地将它们整合到一个项目配置文件中，让我们的开发变得更加有效率。
将 `ESlint` 和 `prettier`所需的配置文件，在根目录配置好之后，我们在`package.json`中，进行如下的配置。

```json
// package.json
{
  "private": true,
  "scripts": {
    "start": "umi dev",
    "build": "umi build",
    "postinstall": "umi generate tmp",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "test": "umi-test",
    "test:coverage": "umi-test --coverage"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "validate-commit-msg"
    }
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": ["prettier --write"],
    "*.ts?(x)": [
      "prettier --parser=typescript --write",
      "eslint --fix",
      "git add ."
    ]
  },
  "dependencies": {
    "@ant-design/pro-layout": "^6.6.4",
    "@typescript-eslint/parser": "^4.11.1",
    "@umijs/preset-react": "1.x",
    "@umijs/test": "^3.3.2",
    "eslint-plugin-promise": "^4.2.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "typescript": "^4.1.3",
    "umi": "^3.3.2",
    "validate-commit-msg": "^2.14.0",
    "yorkie": "^2.0.0"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.11.1",
    "babel-eslint": "^10.1.0",
    "eslint": "^7.17.0",
    "eslint-config-standard": "^16.0.2",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-react": "^7.22.0",
    "husky": "^4.3.6",
    "lint-staged": "^10.5.3",
    "prettier": "^1.19.1"
  }
}
```

### 实现效果

当执行 eslint 报错时
![eslint报错](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9rqbysk1j31g50u0qej.jpg)

当执行 eslint 成功时
![eslint执行成功](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9s72wjj0j31g50u0155.jpg)

项目代码提交之前
![提交之前](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9ryc1eqfj31g50u0nah.jpg)

项目代码提交之后
![提交之后](https://tva1.sinaimg.cn/large/0081Kckwgy1gm9s8fdlefj31g50u0qcn.jpg)
