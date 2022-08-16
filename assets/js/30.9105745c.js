(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{407:function(t,_,v){"use strict";v.r(_);var a=v(25),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"描述下从浏览器输入-url-到页面展示所经过的一系列流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#描述下从浏览器输入-url-到页面展示所经过的一系列流程"}},[t._v("#")]),t._v(" 描述下从浏览器输入 URL 到页面展示所经过的一系列流程")]),t._v(" "),v("ul",[v("li",[t._v("浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址 [DNS 解析]")]),t._v(" "),v("li",[t._v("建立 TCP 连接 [三次握手]")]),t._v(" "),v("li",[t._v("浏览器发出读取文件(URL 中域名后面部分对应的文件)的 HTPP 请求,该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器。 [浏览器发送读取文件内容的 HTTP 请求到服务器]")]),t._v(" "),v("li",[t._v("服务器对浏览器请求作出响应,并把对应的 HTML 文本发送给浏览器。 [服务器发送 HTML 数据至浏览器]")]),t._v(" "),v("li",[t._v("浏览器开始渲染 HTML 内容 [浏览器渲染 HTML]")]),t._v(" "),v("li",[t._v("释放 TCP 链接 [四次挥手]")])]),t._v(" "),v("h3",{attrs:{id:"tcp-ip-协议族"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议族"}},[t._v("#")]),t._v(" TCP/IP 协议族")]),t._v(" "),v("p",[t._v("它是一个有关互联网相关联的所有协议的集合。包括常见的 "),v("code",[t._v("HTTP")]),t._v(" "),v("code",[t._v("FTP")]),t._v(" "),v("code",[t._v("UDP")]),t._v(" "),v("code",[t._v("TCP")]),t._v(" "),v("code",[t._v("IP")]),t._v(" "),v("code",[t._v("ICMP")]),t._v(" "),v("code",[t._v("PPPoE")]),t._v(" "),v("code",[t._v("DNS")]),t._v(" "),v("code",[t._v("SNMP")]),t._v("。\n它具备分层管理的特点，分为以下四层： "),v("code",[t._v("应用层")]),t._v("、"),v("code",[t._v("传输层")]),t._v("、"),v("code",[t._v("网络层")]),t._v("和"),v("code",[t._v("数据链路层")]),t._v("。\n当你的网络结构需要变动的时候，只需要将需要变动的层替换掉就可以了。")]),t._v(" "),v("ul",[v("li",[t._v("应用层\n常见的协议: FTP, DNS, HTTP")]),t._v(" "),v("li",[t._v("传输层\n常见的协议: TCP, UDP")]),t._v(" "),v("li",[t._v("网络层\n常见的协议: IP")]),t._v(" "),v("li",[t._v("数据链路层。")])]),t._v(" "),v("h3",{attrs:{id:"tcp-ip-通信传输流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-通信传输流"}},[t._v("#")]),t._v(" TCP/IP 通信传输流")]),t._v(" "),v("p",[t._v("在客户端(发送端)发出一个 "),v("code",[t._v("http")]),t._v(" 请求之后，生成 "),v("strong",[t._v("http 请求报文")]),t._v("， 该请求会依次进入 "),v("code",[t._v("传输层")]),t._v(" 由 "),v("code",[t._v("TCP")]),t._v(" 把收到的数据(HTTP 请求报文)进行"),v("strong",[t._v("分割")]),t._v("，并在各个报文上打上标记"),v("strong",[t._v("序号")]),t._v("及"),v("strong",[t._v("端口号")]),t._v("，然后转发到"),v("strong",[t._v("网络层")]),t._v("。\n在"),v("code",[t._v("网络层")]),t._v("由 "),v("code",[t._v("IP")]),t._v(" 增加作为通信目的地的 "),v("code",[t._v("MAC 地址")]),t._v("后转发给"),v("code",[t._v("链路层")]),t._v("。这样一来，发往网络的通信请求就完备了。")]),t._v(" "),v("p",[t._v("在接收端的服务器的数据链路层接收到数据后， "),v("strong",[t._v("按序往上层发送")]),t._v("，一直到"),v("code",[t._v("应用层")]),t._v("。当传输到"),v("code",[t._v("应用层")]),t._v("之后，才能算真正接收到由客户端发送过来的 HTTP 请求。")]),t._v(" "),v("p",[v("strong",[t._v("发送端")]),t._v("在发送数据的时候，在经过 "),v("strong",[t._v("应用层 =》 传输层 =》 网络层 =》 数据链路层")]),t._v(" 这样的顺序传递数据的时候，都会在每一层打上该层所属的"),v("strong",[t._v("首部信息")]),t._v("，\n"),v("strong",[t._v("接收端")]),t._v("在接收数据的时候，在经过"),v("strong",[t._v("数据链路层 =》 网络层 =》 传输层=》 应用层")]),t._v(" 时，都会将对应的"),v("strong",[t._v("首部信息")]),t._v("给去掉。")]),t._v(" "),v("h2",{attrs:{id:"ip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[t._v("#")]),t._v(" IP")]),t._v(" "),v("p",[t._v("IP(Internet Protocol) 网际协议位于网络层。\n它的作用就是将各种数据包发送给对方。 需要依靠两个地址 分别是 IP 地址 和 MAC 地址。\nIP 地址：指明了节点被分配到的地址。(可改变)\nMAC 地址：指的是网卡所属的固定地址。(不可改变)")]),t._v(" "),v("p",[t._v("ARP(Address Resolution Protocol)协议, 是一种用以地址解析的协议，根据 IP 地址查找到对应的 MAC 地址。\n为啥会用到 ARP 协议， 因为在使用 IP 协议进行数据包的转发的时候，需要通过 MAC 地址来搜索下一个中转目标。而有时仅仅知道的是 IP 地址，")]),t._v(" "),v("h2",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),v("p",[t._v("TCP() 位于传输层，提供可靠的字节流服务。")]),t._v(" "),v("ul",[v("li",[t._v("可靠的\n依靠 "),v("code",[t._v("TCP 三次握手")]),t._v("来实现可靠的连接。\n用 TCP 协议将数据包传输出去之后，TCP 不会对传送后的情况置之不理，它一定会向对方确认是否成功到达。握手过程中使用到了 TCP 的标志(flag),分别是 "),v("code",[t._v("SYN")]),t._v(" 和 "),v("code",[t._v("ACK")]),t._v("\nTCP 三次握手的全流程。")])]),t._v(" "),v("p",[t._v("发送端首先发送一个带 "),v("code",[t._v("SYN")]),t._v(" 标志的数据包给对方。接收端收到后，回传一个带有 "),v("code",[t._v("SYN/ACK")]),t._v(" 标志的数据包以示传达确认信息。最后，发送端再回传一个带 "),v("code",[t._v("ACK")]),t._v(" 标志的数据包，代表握手结束。")]),t._v(" "),v("p",[t._v("如果说，这个握手过程因为不知名的原因"),v("strong",[t._v("中断")]),t._v("了，那么 TCP 会"),v("strong",[t._v("再次")]),t._v("以相同的顺序发送相同数据包。\n"),v("img",{attrs:{src:"https://blog.jiar.me/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/tcp_hand_shake_detail.png",alt:"TCP三次握手"}}),t._v(" "),v("a",{attrs:{href:"https://blog.jiar.me/2017/08/11/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%AE%80%E4%BB%8B/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 三次握手"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[t._v("字节流\n所谓的字节流，就是将收到的 "),v("strong",[t._v("HTTP 请求报文数据")]),t._v("分割成以"),v("code",[t._v("报文段")]),t._v("作为单位的"),v("code",[t._v("数据包")]),t._v("。")])]),t._v(" "),v("h2",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),v("p",[t._v("DNS(Domain Name System) 主要负责域名解析(域名到 IP)，位于应用层。")]),t._v(" "),v("h2",{attrs:{id:"为何会出现两次请求-一次为正常的-get-或者-post-一次为-options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为何会出现两次请求-一次为正常的-get-或者-post-一次为-options"}},[t._v("#")]),t._v(" 为何会出现两次请求，一次为正常的 get 或者 post 一次为 options")]),t._v(" "),v("p",[t._v("为什么会多一次的 options 请求？\n三种情况会出现 "),v("code",[t._v("options")]),t._v("的预请求。")]),t._v(" "),v("ul",[v("li",[t._v("在 HTTP 头部添加了自定义字段，此时该 HTTP 请求变为复杂请求。")]),t._v(" "),v("li",[t._v("在前后端交互过程中出现了跨域的情况。")]),t._v(" "),v("li",[t._v("请求头的 content-type 参数：application/x-www-form-urlencoded，multipart/form-data，text/plain 之外的格式。")])]),t._v(" "),v("p",[t._v("之所以会有"),v("code",[t._v("options")]),t._v("请求,目的就是去服务器检查一下接下来要到用的方法(GET、POST、PUT、detele)在服务器上是否支持。")]),t._v(" "),v("p",[t._v("只有当预请求返回"),v("strong",[t._v("200")]),t._v(" 之后,才会进行接下来的正常请求。\n如何避免多次出现"),v("code",[t._v("options")]),t._v("请求，在服务器端我们可以在 options 返回是做一次 options 缓存，告知前端以后在此请求这个接口就不要在发 options 了，服务器响应时可设置 "),v("code",[t._v("Access-Control-Max-Age")]),t._v("的时间，默认 10 分钟;")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6855989328876617736",target:"_blank",rel:"noopener noreferrer"}},[t._v("options 请求"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"请求报文的组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文的组成"}},[t._v("#")]),t._v(" 请求报文的组成")]),t._v(" "),v("p",[t._v("请求方法、请求 URL、协议版本、可选的请求首部字段和内容实体组成。")]),t._v(" "),v("h2",{attrs:{id:"响应报文的组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应报文的组成"}},[t._v("#")]),t._v(" 响应报文的组成")]),t._v(" "),v("p",[t._v("协议版本、状态码(表示成功或者失败的数字代码)、用以解释状态码的原因短语、可选的响应首部字段以及实体主体构成。")]),t._v(" "),v("h2",{attrs:{id:"restful-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" RESTful API")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1519246",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"http-是无状态的协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-是无状态的协议"}},[t._v("#")]),t._v(" HTTP 是无状态的协议")]),t._v(" "),v("p",[t._v("无状态协议指的是无法根据之前的请求状态来处理现在这次的请求。\n使用"),v("code",[t._v("cookie")]),t._v("来让每一次的请求，都具备"),v("code",[t._v("状态")]),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"http-的持久连接和管线化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-的持久连接和管线化"}},[t._v("#")]),t._v(" HTTP 的持久连接和管线化")]),t._v(" "),v("p",[t._v("在 HTTP 的初始化版本中，每进行一次 HTTP 通信就要重新建立一次 TCP 连接，这样无疑增加了许多不必要的通信成本。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("持久化连接\n也被称为 HTTP Keep-alive. 它的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。\n所带来的结果便是，建立一次 TCP 连接后可进行多次的请求和响应的交互。\n在 HTTP/1.1 版本中，所有的连接默认都是 持久化连接。")])]),t._v(" "),v("li",[v("p",[t._v("管线化\n持久化连接使得多请求以管线化方式发送成为可能。(因为每次 htp 请求不用都建立新的 tcp 连接，只最开始建立一次就好了，那么我们就可以不用等待上一个 http 请求结束就可以直接发送下一个请求)。\n这样就可以做到同时并行发送多个请求，而不需要一个接一个地等到响应了。")])])]),t._v(" "),v("h3",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("ul",[v("li",[t._v("1XX (信息性状态码) 表示接收的请求正在处理。")]),t._v(" "),v("li",[t._v("2XX (成功状态码) 表示正常处理完毕。")]),t._v(" "),v("li",[t._v("3XX (重定向状态码) 表示需要进行附加操作以完成请求，[304 除外]")]),t._v(" "),v("li",[t._v("4XX (客户端错误状态码) 表示服务器无法处理请求")]),t._v(" "),v("li",[t._v("5XX (服务器错误状态码) 表示服务器处理请求出错")])]),t._v(" "),v("h4",{attrs:{id:"_2xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[t._v("#")]),t._v(" 2XX")]),t._v(" "),v("ul",[v("li",[t._v("200 OK 请求成功")]),t._v(" "),v("li",[t._v("204 No Content 请求成功，但返回的实体信息为 null， 适用场景：只需要客户端往服务器发送信息，而不需要服务器返回新的信息。")]),t._v(" "),v("li",[t._v("206 Partial Content 表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。响应报文中包含了由 "),v("code",[t._v("Content-Range")]),t._v("指定范围的实体内容。")])]),t._v(" "),v("h4",{attrs:{id:"_3xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3XX")]),t._v(" "),v("ul",[v("li",[t._v("301 Moved Permanently 永久性重定向。")]),t._v(" "),v("li",[t._v("302 Found 临时性重定向。")]),t._v(" "),v("li",[t._v("303 See Other 表示由于请求对应的资源存在另一个 URI,应使用 GET 方法定向获取请求的资源。")]),t._v(" "),v("li",[t._v("304 Not Modified 表示服务器端资源未改变，可直接使用客户端未过期的资源。虽然在 3XX 系列状态码中，但是和重定向没啥关系。")])]),t._v(" "),v("p",[v("strong",[t._v("注意")]),t._v(" 当 301，302，303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET,并删除请求报文内的主体，之后请求会再次发送。")]),t._v(" "),v("ul",[v("li",[t._v("307 Temporary Redirect 临时重定向，不会从 POST 变成 GET.")])]),t._v(" "),v("h4",{attrs:{id:"_4xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[t._v("#")]),t._v(" 4XX")]),t._v(" "),v("ul",[v("li",[t._v("401 Unauthorized 认证失败")]),t._v(" "),v("li",[t._v("403 Forbidden 表示对请求资源的访问被服务器拒绝了。一般表示 Token 验证失败。")]),t._v(" "),v("li",[t._v("404 Not Found 未找到。")])]),t._v(" "),v("h4",{attrs:{id:"_5xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[t._v("#")]),t._v(" 5XX")]),t._v(" "),v("ul",[v("li",[t._v("500 Internal Server Error 服务器内部错误")]),t._v(" "),v("li",[t._v("503 Service Unavailable 表示服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。")])]),t._v(" "),v("h2",{attrs:{id:"http-通信过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-通信过程"}},[t._v("#")]),t._v(" HTTP 通信过程")]),t._v(" "),v("h3",{attrs:{id:"http-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-方法"}},[t._v("#")]),t._v(" HTTP 方法")]),t._v(" "),v("h3",{attrs:{id:"协议格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协议格式"}},[t._v("#")]),t._v(" 协议格式")]),t._v(" "),v("h3",{attrs:{id:"报文结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),v("h3",{attrs:{id:"首部字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首部字段"}},[t._v("#")]),t._v(" 首部字段")]),t._v(" "),v("h3",{attrs:{id:"状态码-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码-2"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("h3",{attrs:{id:"http-通信过程中代理、网关、隧道等的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-通信过程中代理、网关、隧道等的作用"}},[t._v("#")]),t._v(" HTTP 通信过程中代理、网关、隧道等的作用")]),t._v(" "),v("h2",{attrs:{id:"http-安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-安全"}},[t._v("#")]),t._v(" HTTP 安全")]),t._v(" "),v("h3",{attrs:{id:"https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),v("h3",{attrs:{id:"ssl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl"}},[t._v("#")]),t._v(" SSL")]),t._v(" "),v("h3",{attrs:{id:"证书认证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#证书认证"}},[t._v("#")]),t._v(" 证书认证")]),t._v(" "),v("h3",{attrs:{id:"加密机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加密机制"}},[t._v("#")]),t._v(" 加密机制")]),t._v(" "),v("h3",{attrs:{id:"web-攻击手段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-攻击手段"}},[t._v("#")]),t._v(" Web 攻击手段")])])}),[],!1,null,null,null);_.default=r.exports}}]);