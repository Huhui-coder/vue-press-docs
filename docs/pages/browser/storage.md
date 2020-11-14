# 前端存储技术

## HTTP 文件缓存

在文件重复请求的情况下，浏览器可以根据 HTTP 响应的协议头信息判断是从服务器端请求文件还是从本地读取文件。

### 协商缓存

### 强缓存

## localStorage

localStorage 是一种 html5 的本地缓存方案。
它的核心方法只有：

- localStorage.setItem(key, value)
- localStorage.getItem(key)
- localStorage.removeItem(key)
- localStorage.clear()

由于 localStorage 只支持简单数据类型的读取，为了方便读取对象等格式的内容，通常还需要封装一层再进行使用。
::: demo

```html
<template>
  封装localStorage
</template>
<script>
  let rkey = /^[0-9A-Za-z_@-]*$/;
  let store;

  // 转换对象
  function init() {
    if (typeof store === "undefined") {
      store = window["localStorage"];
    }
    return true;
  }

  // 判断localStorage 的key值是否合法
  function isVaildKey(key) {
    if (typeof key !== "string") {
      return false;
    }
    return rkey.test(key);
  }
  let exports = {
    set(key, value) {
      let success = false;
      if (isVaildKey(key) && init()) {
        try {
          value += "";
          store.setItem(key, value);
          success = true;
        } catch (e) {
          console.error(e);
        }
      }
    },
    get(key) {
      if (isVaildKey(key) && init()) {
        try {
          return store.getItem(key);
        } catch (e) {
          console.error(e);
        }
      }
      return null;
    },
    remove(key) {
      if (isVaildKey(key) && init()) {
        try {
          store.removeItem(key);
          return true;
        } catch (e) {
          console.error(e);
        }
      }
      return false;
    },
    clear() {
      if (init()) {
        try {
          for (let key in store) {
            store.removeItem(key);
          }
          return true;
        } catch (e) {
          console.error(e);
        }
        return false;
      }
    },
  };
  export default {};
</script>
```

:::

> 尽管单个域名下的 localStorage 是有限制的，但是我们可以用 iframe 的方式使用多个域名来突破单个页面下的存储限制(5MB)，另外使用浏览器多个标签页打开同个域名页面时，localStorage 内容一般是共享的(不能跨域)。

[使用 iframe 来突破单个页面存储限制](https://www.cnblogs.com/cherishSmile/p/8390754.html)

### 如何监听 localStorage 存储内容改变

在单个页面下，是无法监听到页面存储内容改变的，想要监听到内容改变有如下几个条件：

- 同一浏览器打开了两个同源页面
- 其中一个网页修改了 localStorage
- 另一网页注册了 storage 事件

::: demo

```html
<template>
  监听到页面localStorage存储内容改变
</template>
<script>
  // 一个网页修改 localStorage a.html
  //   window.onload = () => {
  //     var changeStorage = function(value) {
  //       window.localStorage.setItem("name", value);
  //       let stroe = window.localStorage.getItem("name");
  //       document.getElementById("app").innerHTML = stroe;
  //     };
  //     changeStorage("hhh22");
  //     setTimeout(() => {
  //       changeStorage("hhh33");
  //     }, 3000);
  //   };

  // 另一个同源的页面注册 storage 事件 ， b.html
  //   (() => {
  //     window.addEventListener("storage", (e) => {
  //       console.log("key", e.key); // key name
  //       console.log("oldValue", e.oldValue); // oldValue hhh33
  //       console.log("newValue", e.newValue); // newValue hhh22
  //     });
  //   })(window);

  export default {};
</script>
```

:::

## sessionStorage

与 localStorage 基本类似，并且使用的 API 完全相同，有一点不一样。

那就是 **sessionStorage 在浏览器关闭时会自动清空，无法进行客户端的持久化数据存储**

## Cookie

一般用来辨别用户身份信息，Cookie 信息一般会通过 HTTP 请求发送到服务器端。一条 Cookie 记录主要由键、值、域、过期时间和大小组成。不同的浏览器对于所支持 Cookie 存储的大小和条数都有着不同的限制。

Chrome 浏览器，对于存储的 Cookie 条数是没有限制的，大小限制在 4kb 左右。

和 localStorge 类似，不同域名之间的 Cookie 也是互相独立的，不过 Cookie 是可以设置 父域 与 子域 之间的 Cookie 信息共享。

[使用 localstorage 代替 cookie 实现跨域共享数据](https://zhuanlan.zhihu.com/p/35738376?group_id=969283251281616896)

### 前端如何获取 cookie, 何种情况下前端获取不到 cookie?

前端使用 `document.cookie` 来获取, 得到的是一串包含`key=value;key1=value1` 的字符串，所以前端在获取到 cookie 之后不是很方便进行处理，一般都会借助工具库来处理，比如`js-cookie`。

当服务器端设置了 `httpOnly: true`时，客户端将获取不到 Cookie.
服务器端设置 cookie 示例。

```js
// express
var path = require("path");
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

// 使用 cookieParser 中间件;
app.use(cookieParser());

// 如果请求中的 cookie 存在 isFirst
// 否则，设置 cookie 字段 isFirst, 并设置过期时间为10秒
app.get("/", function(req, res) {
  if (req.cookies.isFirst) {
    res.send("再次欢迎访问");
    console.log(req.cookies);
  } else {
    res.cookie("isFirst", 1, { maxAge: 60 * 1000, httpOnly: true });
    res.send("欢迎第一次访问");
  }
});

app.listen(3030, function() {
  console.log("express start on: " + 3030);
});
```
### 跨域会不会携带 cookie, 如果能，如何设置？
默认情况下，使用`axios`作为ajax请求库的话，同域是默认会带上cookie的，然而，跨域就不会默认带上cookie。
想要跨域带上cookie就必须得手动设置一下。

前端：

```js
axios.defaults.withCredentials = true;
```

后端：

```js
header("Access-Control-Allow-Origin","源地址";
header("Access-Control-Allow-Credentials", "true");
```

## webSQL

## IndexDB

## Application Cache

## cacheStorage
