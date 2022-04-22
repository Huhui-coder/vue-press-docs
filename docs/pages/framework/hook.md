# 常见 hooks 分类

- useState
- useRef
- useEffect
- useMemo
- useCallback
- 自定义hooks

## useState

``` ts
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

当用户点击按钮后，我们传递一个新的值给 setCount。React 会重新渲染 Example 组件，并把最新的 count 传给它。
React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。我们可以通过调用 setCount 来更新当前的 count。
对于 useState 也可以用来存储对象和数组。但是更新 state 变量总是替换它而不是合并它。

- 记住上次的值
- 重新渲染组件
- 更新 state 变量会是替换而不是合并

useState 的使用方式

```ts
type Types = {
    name: string;
    age: number
}
const [person, setPerson] = useState<Types>({name: 'hit', age: 25})

// 大多数情况下，useState 会自动推导类型
// `val`会推导为boolean类型， toggle接收boolean类型参数
const [val, toggle] = React.useState(false)

// obj会自动推导为类型: {name: string}
const [obj] = React.useState({ name: 'sj' })

// arr会自动推导为类型: string[]
const [arr] = React.useState(['One', 'Two'])
```

使用推导类型作为接口/类型

```ts
export default function App() {

  // user会自动推导为类型: {name: string}

  const [user] = React.useState({ name: 'sj', age: 32 })

  const showUser = React.useCallback((obj: typeof user) => {

    return `My name is ${obj.name}, My age is ${obj.age}`

  }, [])

  return <div className="App">用户: {showUser(user)}</div>
}
```

但是，一些状态初始值为空时（null），需要显示地声明类型：

```ts

type User = {
  name: string
  age: number
}

const [user, setUser] = React.useState<User | null>(null)
```

## useEffect

useEffect 需要注意回调函数的返回值只能是函数或者 undefined

## useMemo

## useCallback

