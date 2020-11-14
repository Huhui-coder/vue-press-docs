# 前端攻击技术

## XSS 攻击(Cross Site Script,跨站脚本攻击)

> 通常是由带有页面可解析内容的数据未经过处理直接插入到页面上解析导致的。

**主要防范方法是验证输入到页面上的所有内容来源数据是否安全，如果可能含有脚本标签等内容则需要尽行必要的转义。**

### 存储型 XSS

存储型 XSS 常常是由前端提交的数据未经处理直接存储到数据库然后从数据库中读取出来又直接插入到页面中所导致的。

### 反射型 XSS

反射型 XSS 可能是网页 URL 参数中注入了可解析内容的数据所导致的，如果直接获取 URL 中不合法的并插入到页面中则可能出现页面上的 XSS 攻击。

### DOM XSS

DOM XSS 则是在渲染 DOM 属性时将攻击脚本插入到 DOM 属性中被解析所导致的。

### 如何防御

方法 1：cookie 中设置 HttpOnly 属性，这样坏人就没办法通过插入脚本来获取到 cookie 信息了。

方法 2：首先前端要对用户输入的信息进行过滤，可以用正则，通过替换标签的方式进行转码或解码，例如<> 空格 & '' ""等替换成 html 编码

```js
htmlEncodeByRegExp:function (str){
  var s = "";
  if(str.length == 0) return "";
  s = str.replace(/&/g,"&amp;");
  s = s.replace(/</g,"&lt;");
  s = s.replace(/>/g,"&gt;");
  s = s.replace(/ /g,"&nbsp;");
  s = s.replace(/\'/g,"&#39;");
  s = s.replace(/\"/g,"&quot;");
  return s;
  }
```

## SQL 注入攻击

> SQL 注入攻击主要是因为页面提交数据到服务器端后，在服务器端未进行数据验证就将数据直接拼接到 SQL 语句中执行，因此产生执行与预期不符的现象。

**主要防范措施是对前端网页提交的数据内容进行严格的检查校验。**

```js
// 服务端示例

let id = req.query("id");

let sql = `select * from user_table where id =${id}`;

let data = exce(sql);

this.body = data;
```

假如前端传递的参数是 `100 or name=%user%`,那么查询出来的结果就不只是 id=100 的用户，包含 user 字符用户名的用户内容也会被查出来，这就导致了 SQL 注入的发生。
### 如何防御
前后端都对http中的数据格式以及参数进行校验，看是否符合预期。
## CSRF 攻击(跨站请求伪造)

> CSRF 攻击是非源站点按照源站点的数据请求格式提交非法数据给源站点服务器的一种攻击方法

**非源站点在取到用户校验信息的情况下，可以直接对源站点的某个数据接口进行提交，如果源站点对该提交请求的数据来源未经验证，该请求可能会被成功执行，这其实很不合理。**

**主要反范措施是在每个请求头部都加上 Token 字段，并且在服务器端处理该请求时，进行 Token 字段的验证**

### 如何防御

1.验证 HTTP Referer 字段

在 HTTP 头中有 Referer 字段，他记录该 HTTP 请求的来源地址，如果跳转的网站与来源地址相符，那就是合法的，如果不符则可能是 csrf 攻击，拒绝该请求。
Referer 字段，还可以用来做 防盗链 的处理。如果不在白名单之内，不返回对应的资源。


2.在请求地址中添加 token 并验证

这种的话在请求的时候加一个 token，值可以是随机产生的一段数字，
token 是存入数据库之后，后台返给客户端的，如果客户端再次登录的时候，
后台发现 token 没有，或者通过查询数据库不正确，那么就拒绝该请求

如果想防止一个账号避免在不同的机器上登录，那么我们就可以通过 token 来判断，
如果 a 机器登录后，我们就将用户的 token 从数据库清除，从新生成，
那么另外一台 b 机器在执行操作的时候，token 就失效了，只能重新登录，这样就可以防止两台机器登同一账号

在 HTTP 头中自定义属性并验证

如果说通过每次请求的时候都得加 token 那么各个接口都得加很麻烦，
那么我们通过 http 的请求头来设置 token
例如：

```js
// 在 axios 封装的实例中，添加：
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000,
  withCredentials: false,
});

instance.interceptors.request.use(
  (config) => {
    const token = cookie.get("access-token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => Promise.error(error)
);
```
后端：
```js
npm install express-jwt

// 使用express-jwt 中间件来进行 token 的 验证
```