## cookie的原理

![image.png](https://i.loli.net/2020/01/22/Qlk4drjyuTCvwcg.png)

1. 客户端发送 HTTP 请求到服务器
2. 当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段
3. 浏览器收到响应后保存下 Cookie
4. 之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。

## cookie的常见属性

```dart
name:代表cookie的名字的意思，一个域名下绑定的cookie，name不能相同，相同的name的值会被覆盖掉.
value:代表cookie的值。
domain:代表的是，cookie绑定的域名，如果没有设置，就会自动绑定到执行语句的当前域，还有值得注意的点，统一个域名下的二级域名也是不可以交换使用cookie的，比如，你设置www.baidu.com和image.baidu.com,依旧是不能公用的
path：指定 cookie 影响到的路径
expires: 现在已经被max-age属性所取代，max-age用秒来设置cookie的生存期。
maxAge：指定 cookie 什么时候过期
secure：当 secure 值为 true 时，在 HTTPS 中才有效；反之，cookie 在 HTTP 中是有效。
httpOnly：浏览器不允许脚本操作 document.cookie 去更改 cookie。设置为true可以避免被 xss 攻击拿到 cookie
SameSite: SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。
```

注意： `expires`和`maxAge`

`expires`当 expires 属性缺省时，表示是会话性 Cookie， Expires 的值为 Session，表示的就是会话性 Cookie。当为会话性 Cookie 的时候，值保存在客户端内存中，并在用户关闭浏览器时失效。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。

与会话性 Cookie 相对的是持久性 Cookie，持久性 Cookies 会保存在用户的硬盘中，直至过期或者清除 Cookie。这里值得注意的是，设定的日期和时间只与客户端相关，而不是服务端。

`maxAge`用于设置在 Cookie 失效之前需要经过的秒数。比如：

```
Set-Cookie: id=a3fWa; Max-Age=604800;
```

max-age 可以为正数、负数、甚至是 0。

如果 max-Age 属性为正数时，浏览器会将其持久化，即写到对应的 Cookie 文件中。

当 max-Age 属性为负数，则表示该 Cookie 只是一个会话性 Cookie。

当 max-Age 为 0 时，则会立即删除这个 Cookie。

**假如 expires 和 max-age 都存在，max-age 优先级更高。**

注意：`domain`和`path`

dmain 指定了 Cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。

像淘宝首页设置的 Domain 就是 .taobao.com，这样无论是 a.taobao.com 还是 b.taobao.com 都可以使用 Cookie。

在这里注意的是，不能跨域设置 Cookie，比如阿里域名下的页面把 Domain 设置成百度是无效的：

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=baidu.com; Path=/; Expires=Wed, 30 Aug 2020 00:00:00 GMT
```

path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。比如设置 `Path=/docs`，`/docs/Web/` 下的资源会带 Cookie 首部，`/test` 则不会携带 Cookie 首部。

Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

如果直接设置`domain`为 主机部分地址，` path` 设置为'/'，那么该域名下的所有url都能接收到该cookie。

注意：`http-only`和`secre`

http-only 无法被网页脚本读取，不限制传输通路的安全性（document.cookie）
secure 可以被网页脚本读取，只允许通过安全通路发送给服务器(只能通过https)

## 服务端操作cookie示例：(express WEB框架)

```jsx
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser'); // 处理cookie的中间件
var app = express();

// 使用 cookieParser 中间件;
app.use(cookieParser());

// 如果请求中的 cookie 存在 isFirst
// 否则，设置 cookie 字段 isFirst, 并设置过期时间为10秒
app.get('/', function(req, res) {
    if (req.cookies.isFirst) {
        res.send("再次欢迎访问");
        console.log(req.cookies)
    } else {
      //格式为res.cookie('key',value,{options})
        res.cookie('isFirst', 1, { maxAge: 60 * 1000});
        res.send("欢迎第一次访问");
    }
});

app.listen(3030, function() {
    console.log('express start on: ' + 3030)
});
```

## 客户端操作cookie示例（js）：

推荐使用js-cookie库

cookie 的属性

`读取所有可从此位置访问的Cookie`

```
allCookies = document.cookie;  //使用该方法可以获取到所有的cookie 键值对
```

cookie 是以key = value 这样的键值对形式存在的。

`写一个新cookie`

```
document.cookie = newCookie;  // 使用该方法一次只能对一个cookie 进行生成和更新。
```

以下可选的cookie属性值可以跟在键值对后，用来具体化对cookie的设定/更新，使用分号以作分隔。

示例：

```js
document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
```

## **实际案例：单点登录**

是目前比较流行的企业业务整合的解决方案之一，用于多个应用系统间，用户只需要登录一次就可以访问所有相互信任的应用系统。

前置知识：(注意cookie默认是不支持跨域的)

1.同源策略 限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互，要求协议，端口和主机都相同。

2.HTTP 用于分布式、协作式和超媒体信息系统的应用层协议。HTTP 是无状态协议，所以服务器单从网络连接上无从知道客户身份。 那要如何才能识别客户端呢？给每个客户端颁发一个通行证，每次访问时都要求带上通行证，这样服务器就可以根据通行证识别客户了。最常见的方案就是 Cookie。

3.Cookie 是客户端保存用户信息的一种机制，保存在客户机硬盘上。可以由服务器响应报文`Set-Cookie`的首部字段信息或者客户端 `document.cookie`来设置，并随着每次请求发送到服务器。子域名可以获取父级域名 Cookie。

4.Session 其实是一个抽象概念，用于跟踪会话，识别多次 HTTP 请求来自同一个客户端。Cookie 只是通用性较好的一种实现方案，通常是设置一个名为 SessionID（名称可自定义，便于描述，本文均使用此名称）的 Cookie，每次请求时携带该 Cookie，后台服务即可依赖此 SessionID 值识别客户端。

### **单系统登录**

直接使用JWT实现登录信息检验，在生成token的时候，可以将用户id添加进去，这样用户登录之后，每次的请求都带上这个token，那么每次请求都能识别用户。

### **多系统登录**

在同域名cookie是共享的。

不同子域名登录时，可以设置父级域名，由于每个子域名是跟父级域名cookie共享的，每次去改变或者获取父级域名。这样也能间接实现子域名cookie共享。

完全不同域名，默认情况下，不同域名是无法直接共享 Cookie 的。

前端跨域带 Cookie，如果只是期望异步请求时获取当前用户的登录态，可以通过发送跨域请求到已经登录过的域名，并配置属性：（需要前后端都配置）

通过 前端配置ajax请求头'withCredentials'为true，以及后台配置('Access-Control-Allow-Origin','IP端口'）和('Access-Control-Allow-Credentials',true)，注意：Access-Control-Allow-Origin不能配置为‘*’；

```
// 原生ajax
xhrFields: {
  withCredentials: true
}

```

```
// axios 
axios.defaults.withCredentials = true
```

## 实际案例：保存客户端与服务端会话状态

因为http1.x 是无状态协议，单纯从http协议来说无法保存信息的。

假设这么一个场景，我登录一个系统，登录之后，我需要获取access-token,和用户的一些信息。这个时候单纯通过http是不可行的，所以需要借助cookie来实现。

1. 客户端发送 HTTP 请求到服务器
2. 当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段
3. 浏览器收到响应后保存下 Cookie
4. 之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。

![image-20200527113514398](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6yzszudfj31iu0h2jwc.jpg)

前端vue直接通过`js-cookie`npm 库就可以直接操作cookie了。

