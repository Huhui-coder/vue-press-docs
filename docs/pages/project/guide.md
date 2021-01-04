# 概述

## 关于

该`前端代码规范`是基于 [W3C](http://www.w3.org/)、[苹果开发者](https://developer.apple.com/) 等官方文档，并结合团队日常业务需求以及团队在日常开发过程中总结提炼出的经验而制定。

旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范，

以下规范是团队基本约定的内容，必须严格遵循。

## HTML 规范

### 代码规范

#### DOCTYPE 声明

一个 DOCTYPE 必须包含以下部分，并严格按照顺序出现：

> 1. A string that is an ASCII case-insensitive match for the string "<!DOCTYPE".
> 2. One or more space characters.
> 3. A string that is an ASCII case-insensitive match for the string "html".
> 4. Optionally, a DOCTYPE legacy string or an obsolete permitted DOCTYPE string (defined below).
> 5. Zero or more space characters.
> 6. A ">" (U+003E) character.

1. 一个 ASCII 字符串 "<!DOCTYPE" ，大小写不敏感
2. 一个或多个空白字符
3. 一个 ASCII 字符串"html"，大小写不敏感
4. 一个可选的历史遗留的 DOCTYPE 字符串 （[DOCTYPE legacy string](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#doctype-legacy-string)），或者一个可选的已过时但被允许的 DOCTYPE 字符串 （[obsolete permitted DOCTYPE string](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#obsolete-permitted-doctype-string)） 字符串
5. 一个或多个空白字符
6. 一个编码为 U+003E 的字符 “&gt;”

##### 团队约定

HTML 文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

```html
<!DOCTYPE html>
```

##### 更多关于 DOCTYPE 声明

[#The DOCTYPE](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#the-doctype)

#### 页面语言 LANG

Lang 属性的取值应该遵循互联网工程任务组--IETF（The Internet Engineering Task Force）制定的关于语言标签的文档 [BCP 47 - Tags for Identifying Languages](http://tools.ietf.org/html/bcp47)

##### 团队约定

推荐使用属性值 `cmn-Hans-CN`（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 `zh-CN` 属性值

```html
<html lang="zh-CN"></html>
```

更多地区语言参考：

    zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
    zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
    zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
    zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)

###### 已废弃不推荐使用的 Languages Tags

以下写法已于 2009 年废弃，请勿使用（cmn、wuu、yue、gan 等已由 2005 年的 extlang 升级到 2009 年的 language）：

    zh-cmn, zh-cmn-Hans, zh-cmn-Hant, zh-wuu, zh-yue, zh-gan

以下写法已于 2009 年废弃，不推荐使用：

    zh-Hans, zh-Hans-CN, zh-Hans-SG, zh-Hans-HK, zh-Hans-MO, zh-Hans-TW,
    zh-Hant, zh-Hant-CN, zh-Hant-SG, zh-Hant-HK, zh-Hant-MO, zh-Hant-TW

更多已废弃 Languages Tags 参考 [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) 里面的 “Type: redundant“”

###### 更多关于 Languages Tags ：

[W3C Language tags in HTML and XML](http://www.w3.org/International/articles/language-tags/)

[网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](http://www.zhihu.com/question/20797118?utm_source=weibo&utm_medium=weibo_share&utm_content=share_question&utm_campaign=share_sidebar)

#### CHARSET

> Because the character sets in ISO-8859 was limited in size, and not compatible in multilingual environments, the Unicode Consortium developed the Unicode Standard.
>
> The Unicode Standard covers (almost) all the characters, punctuations, and symbols in the world.
>
> Unicode enables processing, storage, and transport of text independent of platform and language.
>
> The default character encoding in HTML-5 is UTF-8.

因为 ISO-8859 中字符集大小是有限的，且在多语言环境中不兼容，所以 Unicode 联盟开发了 Unicode 标准。

Unicode 标准覆盖了（几乎）所有的字符、标点符号和符号。

Unicode 使文本的处理、存储和运输，独立于平台和语言。

HTML-5 中默认的字符编码是 UTF-8

参阅 [HTML Unicode (UTF-8) Reference](http://www.w3schools.com/charsets/ref_html_utf8.asp)

##### 团队约定

一般情况下统一使用 “UTF-8” 编码

```html
<meta charset="UTF-8" />
```

由于历史原因，有些业务可能会使用 “GBK” 编码

```html
<meta charset="GBK" />
```

请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 [IETF 对 UTF-8 的定义](http://www.ietf.org/rfc/rfc3629)，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

###### 更多关于

UTF-8 写法: [UTF8 or UTF-8?](http://stackoverflow.com/questions/809620/utf8-or-utf-8)

GBK：[Application of IANA Charset Registration for GBK](http://www.ietf.org/assignments/charset-reg/GBK)

Charset ：[character-encoding-declaration](http://www.w3.org/TR/html5/document-metadata.html#character-encoding-declaration)

#### 元素及标签闭合

HTML 元素共有以下 5 种：

- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA 元素：textarea、title
- 外来元素：来自 MathML 命名空间和 SVG 命名空间的元素。
- 常规元素：其他 HTML 允许的元素都称为常规元素。

元素标签的闭合应遵循以下原则：

> Tags are used to delimit the start and end of elements in the markup. Raw text, escapable raw text, and normal elements have a start tag to indicate where they begin, and an end tag to indicate where they end. The start and end tags of certain normal elements can be omitted, as described below in the section on optional tags. Those that cannot be omitted must not be omitted. Void elements only have a start tag; end tags must not be specified for void elements. Foreign elements must either have a start tag and an end tag, or a start tag that is marked as self-closing, in which case they must not have an end tag.

- 原始文本元素、RCDATA 元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。
- [某些元素的开始和结束标签是可以省略的](http://www.w3.org/TR/html5/syntax.html#optional-tags)，如果规定标签不能被省略，那么就绝对不能省略它。
- 空元素只有一个开始标签，且不能为空元素设置结束标签。
- 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

##### 团队约定

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都不加 “/” 字符

_推荐：_

```html
<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<br />
```

_不推荐：_

```html
<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始无终，浏览器亦能正确解析</p>
</div>

<br />
```

更多关于元素及标签关闭：[#Elements](http://www.w3.org/TR/html5/syntax.html#elements-0)

#### 书写风格

##### HTML 代码大小写

HTML 标签名、类名、标签属性和大部分属性值统一用小写

_推荐：_

```html
<div class="demo"></div>
```

_不推荐：_

```html
<div class="DEMO"></div>

<div class="DEMO"></div>
```

HTML 文本、CDATA、JavaScript、meta 标签某些属性等内容可大小写混合

```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM</h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
  var demoName = 'demoName';
  ...
</script>

<!-- CDATA 内容 -->
<script type="text/javascript">
  <![CDATA[
  ...
  ]]>
</script>
```

##### 类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

_推荐：_

```html
<link rel="stylesheet" href="" />
<script src=""></script>
```

_不推荐：_

```html
<link rel="stylesheet" type="text/css" href="" />
<script type="text/javascript" src=""></script>
```

##### 元素属性

- 元素属性值使用双引号语法
- 元素属性值可以写上的都写上

_推荐：_

```html
<input type="text" />

<input type="radio" name="name" checked="checked" />
```

_不推荐：_

```html
<input type="text" />
<input type="text" />

<input type="radio" name="name" checked />
```

更多关于元素属性：[#Attributes](http://www.w3.org/TR/html5/syntax.html#attributes-0)

##### 特殊字符引用

> In certain cases described in other sections, text may be mixed with character references. These can be used to escape characters that couldn't otherwise legally be included in text.

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

在 HTML 中不能使用小于号 “&lt;” 和大于号 “&gt;”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

_推荐：_

```html
<a href="#">more&gt;&gt;</a>
```

_不推荐：_

```html
<a href="#">more>></a>
```

更多关于符号引用：[#Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

##### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```html
<div class="jdc">
  <a href="#"></a>
</div>
```

##### 纯数字输入框

使用 `type="tel"` 而不是 `type="number"`

```html
<input type="tel" />
```

##### 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

_推荐：_

```html
<div>
  <h1></h1>
  <p></p>
</div>
<p><span></span><span></span></p>
```

_不推荐：_

```html
<div>
  <h1></h1>
  <p></p>
</div>
<p>
  <span></span>
  <span></span>
</p>
```

段落元素与标题元素只能嵌套内联元素

_推荐：_

```html
<h1><span></span></h1>
<p><span></span><span></span></p>
```

_不推荐：_

```html
<h1><div></div></h1>
<p><div></div><div></div></p>
```

### 注释规范

#### 遵循标准

HTML 注释规范写法应该遵循以下标准：

> Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (&lt;!--). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single "&gt;" (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a "&gt;" (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (--), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (--&gt;).

- 必须以 4 个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS 横线 ，即 “&lt;!--”
- 在此之后是注释内容，注释的内容有以下限制：
  _ 不能以单个 "&gt;" (U+003E) 字符开始
  _ 不能以由 “-“（U+002D HYPHEN-MINUS）和 ”&gt;” (U+003E) 组合的字符开始，即 “-&gt;”
  _ 不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “--”
  _ 不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”
- 必须以 3 个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “--&gt;”

标准写法：

```html
<!--Comment Text-->
```

错误的写法：

```html
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```

参考 www.w3.org [#Comments](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments)

#### 团队约定

##### 单行注释

一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

_推荐：_

```html
<!-- Comment Text -->
<div>...</div>
```

_不推荐：_

```html
<div>...</div>
<!-- Comment Text -->

<div>
  <!-- Comment Text -->
  ...
</div>
```

##### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行

_推荐写法：_

```html
<!-- S Comment Text A -->
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">
  ...
</div>
<!-- E Comment Text B -->
```

_不推荐写法：_

```html
<!-- S Comment Text A -->
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->
<div class="mod_b">
  ...
</div>
<!-- E Comment Text B -->
```

##### 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用

```html
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用

```html
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。

```html
<!-- S Comment Text A -->
<div class="mod_a">
  <div class="mod_b">
    ...
  </div>
  <!-- /mod_b -->

  <div class="mod_c">
    ...
  </div>
  <!-- /mod_c -->
</div>
<!-- E Comment Text A -->
```

### 文件模板

HTML 模版指的是团队使用的初始化 HTML 文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 mata 标签的设置，以下是 PC 和移动端的 HTML 模版。

#### HTML5 标准模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5标准模版</title>
  </head>
  <body></body>
</html>
```

#### 团队约定

##### 移动端

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <title>移动端HTML模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="" />
    <!-- E DNS预解析 -->

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
    <link rel="stylesheet" href="css/index.css" />
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" />
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->
  </head>
  <body></body>
</html>
```

##### PC 端

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="your keywords" />
    <meta name="description" content="your description" />
    <meta name="author" content="author,email address" />
    <meta name="robots" content="index,follow" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="renderer" content="ie-stand" />
    <title>PC端HTML模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="" />
    <!-- E DNS预解析 -->

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
    <link rel="stylesheet" href="css/index.css" />
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" />
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->
  </head>
  <body></body>
</html>
```

## 图片规范

### 图片格式

#### 图片格式

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。

##### GIF

> GIF 图象是基于颜色列表的（存储的数据是该点的颜色对应于颜色列表的索引值），最多只支持 8 位（256 色）。GIF 文件内部分成许多存储块，用来存储多幅图象或者是决定图象表现行为的控制块，用以实现动画和交互式应用。GIF 文件还通过 LZW 压缩算法压缩图象数据来减少图象尺寸

###### 特性

- 优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。
- 可插入多帧，从而实现动画效果。
- 可设置透明色以产生对象浮现于背景之上的效果。
- 由于采用了 8 位压缩，最多只能处理 256 种颜色，故不宜应用于真彩色图片。

更多关于 GIF：

[维基百科 - GIF](https://zh.wikipedia.org/wiki/GIF)

[GIF 文档](http://dev.gameres.com/Program/Visual/Other/GIFDoc.htm)

##### PNG

> PNG 是 20 世纪 90 年代中期开始开发的图像文件存储格式，其目的是企图替代 GIF 和 TIFF 文件格式，同时增加一些 GIF 文件格式所不具备的特性。流式网络图形格式(Portable Network Graphic Format，PNG)名称来源于非官方的“PNG's Not GIF”，是一种位图文件(bitmap file)存储格式，读成“ping”。PNG 用来存储灰度图像时，灰度图像的深度可多到 16 位，存储彩色图像时，彩色图像的深度可多到 48 位，并且还可存储多到 16 位的 α 通道数据。PNG 使用从 LZ77 派生的无损数据压缩算法。

###### 特性

- 支持 256 色调色板技术，文件体积小。
- 无损压缩
- 最高支持 48 位真彩色图像以及 16 位灰度图像。
- 支持 Alpha 通道的透明/半透明特性。
- 支持图像亮度的 Gamma 校准信息。
- 支持存储附加文本信息，以保留图像名称、作者、版权、创作时间、注释等信息。
- 渐近显示和流式读写，适合在网络传输中快速显示预览效果后再展示全貌。
- 使用 CRC 防止文件出错。
- 最新的 PNG 标准允许在一个文件内存储多幅图像。

更多关于 PNG：

[PNG 官方站 - PNG General Information](http://www.libpng.org/pub/png/)

[PNG 格式](http://dev.gameres.com/Program/Visual/Other/PNGFormat.htm)

[维基百科 - PNG](https://zh.wikipedia.org/wiki/PNG)

##### JPEG

> JPEG 是一种针对照片视频而广泛使用的一种有损压缩标准方法。这个名称代表 Joint Photographic Experts Group（联合图像专家小组）。此团队创立于公元 1986 年，1992 年发布了 JPEG 的标准而在 1994 年获得了 ISO 10918-1 的认定

###### 特性

- 适用于储存 24 位元全采影像
- 采取的压缩方式通常为有损压缩
- 不支持透明或动画
- 压缩比越高影像耗损越大，失真越严重
- 压缩比在 10 左右肉眼无法  辨出压缩图与原图的差别

更多关于 JPEG：

[维基百科 - JPEG](https://zh.wikipedia.org/wiki/JPEG)

##### WEBP

> WebP，是一种同时提供了有损压缩与无损压缩的图片文件格式，派生自视频编码格式 VP8，是由 Google 在购买 On2 Technologies 后发展出来。WebP 最初在 2010 年发布，2011 年 11 月 8 日，Google 开始让 WebP 支持无损压缩和透明色的功能，而在 2012 年 8 月 16 日的参考实做 libwebp 0.2.0 中正式支持

###### 特性

- 同时提供有损压缩和无损压缩两种图片文件格式
- 文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小
- 浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)，[WebP 兼容性](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp)

更多关于 WebP：

[维基百科 - WEBP](https://zh.wikipedia.org/wiki/WebP)

[WEBP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)

#### 团队约定

##### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

- 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
- 尽量不使用 PNG 格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

##### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

- PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG 格式允许更多的颜色并提供更好的压缩率
- 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
- 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
- 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
- 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式

### 图片引入

测试内容图应该写上表明图片尺寸的占位图，可以用线上占位图生成服务，如：

```html
http://placeholder.qiniudn.com/300x200
```

![image](http://placeholder.qiniudn.com/300x200)

HTML 中图片引入不需添加 width、height 属性，alt 属性应该写上

_推荐：_

```html
<img src="" alt="" />
```

_不推荐：_

```html
<img src="" width="" height="" />
```

CSS 中图片引入不需要引号

```css
.jdc {
  background-image: url(icon.png);
}
```

##### CSS Sprites VS Data URIs

##### CSS Sprites 特点

- 减少请求数
- 加速图片的显示
- 维护更新成本大
- 更多的内存消耗，特别是大体积或有过多空白的 Sprites 图
- 图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上

##### Data URIs（base64 编码）

- 减少请求数
- 转换文件体积大，大约比原始的二进制大 33%
- IE6 / IE7 不支持
- 图片显示相对较慢，需要更多的 CPU 消耗

更多关于 CSS Sprites 和 Data URIs 可以阅读：

[《When to Base64 Encode Images (and When Not To)》](http://davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)

[《Data URI 最佳实践》](http://madscript.com/html5/datauri-best-practice/)

[《Data URI&MHTML: 用还是不用？》](http://www.99css.com/492/)

[CSS Sprites vs. Data URIs: Which is Faster on Mobile?](http://www.mobify.com/blog/css-sprites-vs-data-uris-which-is-faster-on-mobile/)

#### 团队约定

##### CSS Sprites 使用建议

- 适合使用频率高更新频率低的小图标
- 尽量不留太多的空白
- 体积较大的图片不合并
- 确保要合并的小图坐标数值和合并后的 Sprites 图尺寸均为偶数

##### Data URIs（base64 编码）使用建议

- 适合更新频率高的小图片，如某些具备自定义功能的标题 icon 等
- 转换成 Base64 编码的图片应小于 2KB
- 移动端不使用 Base64 编码
- 要兼容 IE6/IE7 的不使用

## CSS 规范

### 代码规范

#### 编码规范

CSS 样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译

##### 文档内嵌样式表编码

> When a style sheet is embedded in another document, such as in the STYLE element or "style" attribute of HTML, the style sheet shares the character encoding of the whole document.

当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 "style"，样式的编码由文档的决定。

##### 文档外链样式表编码

> When a style sheet resides in a separate file, user agents must observe the following priorities when determining a style sheet's character encoding (from highest priority to lowest):

> 1. An HTTP "charset" parameter in a "Content-Type" field (or similar parameters in other protocols)
> 2. BOM and/or @charset
> 3. <link charset=""> or other metadata from the linking mechanism (if any)
> 4. charset of referring style sheet or document (if any)
> 5. Assume UTF-8

文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：

1. HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
2. BOM（byte-order mark）和（或）@charset
3. Link 中的元数据设置（如果有的话）
4. 引用样式表字符集或文档编码（如果有的话）
5. 假定为 UTF-8 编码

##### 样式表编码

> Authors using an @charset rule must place the rule at the very beginning of the style sheet, preceded by no characters. (If a byte order mark is appropriate for the encoding used, it may precede the @charset rule.)

> @charset must be written literally, i.e., the 10 characters '@charset "' (lowercase, no backslash escapes), followed by the encoding name, followed by '";'.

- @charset 规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 BOM 设置生效（如果有设置 BOM 的话）而优于 @charset 作为样式表的编码
- `@charset "";` 一定要写上，并且用小写字母，不能出现转义符

##### 团队约定

- 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
- 字符 @charset ""; 都用小写字母，不能出现转义符，编码名允许大小混写
- 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。（更多关于 BOM 可参考 [BOM 的介绍](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F) 和 [「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？](http://www.zhihu.com/question/20167122) ）

_推荐：_

```css
@charset "UTF-8";

.jdc {
}
```

_不推荐：_

```css
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */

/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.jdc {
}
```

```css
@charset "UTF-8";
/* @charset规则没有用小写 */

.jdc {
}
```

```css
/* 无@charset规则 */
.jdc {
}
```

更多关于样式编码：[CSS style sheet representation](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#charset)

#### 代码风格

##### 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```css
.jdc {
  display: block;
  width: 50px;
}
```

一种是展开格式（Expanded）

```css
.jdc {
  display: block;
  width: 50px;
}
```

**团队约定**

统一使用展开格式书写样式

##### 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```css
/* 推荐 */
.jdc {
  display: block;
}

/* 不推荐 */
.JDC {
  display: BLOCK;
}
```

##### 选择器

- 尽量少用通用选择器 `*`
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.jdc {
}
.jdc li {
}
.jdc li p {
}

/* 不推荐 */
* {
}
#jdc {
}
.jdc div {
}
```

##### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```css
.jdc {
  width: 100%;
  height: 100%;
}
```

##### 分号

每个属性声明末尾都要加分号；

```css
.jdc {
  width: 100%;
  height: 100%;
}
```

##### 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

_推荐：_

```css
.jdc {
  width: 100%;
}
```

_不推荐：_

```css
.jdc {
  width: 100%;
}
```

逗号分隔的取值，逗号之后一个空格

_推荐：_

```css
.jdc {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

_不推荐：_

```css
.jdc {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

为单个 css 选择器或新申明开启新行

_推荐：_

```css
.jdc,
.jdc_logo,
.jdc_hd {
  color: #ff0;
}
.nav {
  color: #fff;
}
```

_不推荐：_

```css
.jdc,
jdc_logo,
.jdc_hd {
  color: #ff0;
}
.nav {
  color: #fff;
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中不需有空格，且取值不要带有不必要的 0

_推荐：_

```css
.jdc {
  color: rgba(255, 255, 255, 0.5);
}
```

_不推荐：_

```css
.jdc {
  color: rgba(255, 255, 255, 0.5);
}
```

属性值十六进制数值能用简写的尽量用简写

_推荐：_

```css
.jdc {
  color: #fff;
}
```

_不推荐：_

```css
.jdc {
  color: #ffffff;
}
```

不要为 `0` 指明单位

_推荐：_

```css
.jdc {
  margin: 0 10px;
}
```

_不推荐：_

```css
.jdc {
  margin: 0px 10px;
}
```

##### 属性值引号

css 属性值需要用到引号时，统一使用单引号

```css
/* 推荐 */
.jdc {
  font-family: "Hiragino Sans GB";
}

/* 不推荐 */
.jdc {
  font-family: "Hiragino Sans GB";
}
```

##### 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient ...

```css
.jdc {
  display: block;
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #333;
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

[mozilla 官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

##### CSS3 浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```css
.jdc {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

更多关于浏览器私有前辍写法：[#Vendor-specific extensions](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)

### 注释规范

> Comments begin with the characters `/*` and end with the characters `*/`. They may occur anywhere outside other tokens, and their contents have no influence on the rendering. Comments may not be nested.

- 注释以字符 `/*` 开始，以字符 `*/` 结束
- 注释不能嵌套

```css
/*Comment Text*/
```

#### 团队约定

###### 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

_推荐：_

```css
/* Comment Text */
.jdc {
}

/* Comment Text */
.jdc {
}
```

_不推荐：_

```css
/*Comment Text*/
.jdc {
  display: block;
}
.jdc {
  display: block; /*Comment Text*/
}
```

###### 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，`/*` 与 模块信息描述占一行，多个横线分隔符`-`与`*/`占一行，行与行之间相隔两行

_推荐：_

```css
/* Module A
---------------------------------------------------------------- */
.mod_a {
}

/* Module B
---------------------------------------------------------------- */
.mod_b {
}
```

_不推荐：_

```css
/* Module A ---------------------------------------------------- */
.mod_a {
}
/* Module B ---------------------------------------------------- */
.mod_b {
}
```

###### 文件信息注释

在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息

```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```

更多关于 CSS 注释：[#Comments](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#comments)

### SASS 规范

#### 语法选用

SASS 有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。

##### SCSS

SCSS 语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 .scss 作为扩展名。

##### Sass

Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html)。这种格式以 .sass 作为拓展名。

更详细的用法请阅读 SASS 官网文档：[DOCUMENTATION](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

##### 团队约定

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法

#### 编码格式

> When running on Ruby 1.9 and later, Sass is aware of the character encoding of documents. Sass follows the CSS spec to determine the encoding of a stylesheet, and falls back to the Ruby string encoding. This means that it first checks the Unicode byte order mark, then the @charset declaration, then the Ruby string encoding. If none of these are set, it will assume the document is in UTF-8.

当在 Ruby1.9 或更新的版本运行的时候，SASS 能识辨文档的字符编码。SASS 遵循 CSS 规范去确定样式文件的编码，进而转回 Ruby 字符串编码。这意味着 SASS 编译的时候会首先检测 BOM，然后到 @charset 声明，再到 Ruby 字符串编码，如果以上都没有设置，SASS 会认为文档的编码为 UTF-8

##### 团队约定

严格遵守上面 “CSS 规范” 中的 [“编码规范”](code.html)

更多关于 SASS 编码：[SASS Encodings](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

#### SASS 注释规范

SASS 支持 CSS 标准的多行注释 `/* */`，同时也支持单行注释 `//`。

- 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
- 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
- 当多行注释内容第一个字符是感叹号 “!” 的时候，即 `/*! */`，SASS 无论用哪一种编译方式编译注释都会保留
- 注释内容可以加入 SASS 变量

##### 团队约定

SCSS 文件内

- 全部遵循 CSS 注释规范
- 不使用 `/*! */` 注释方式
- 注释内不放 SASS 变量

标准的注释规范如下：

```css
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {
}

/* module A logo */
.mod_a_logo {
}

/* module A nav */
.mod_a_nav {
}

/* Module B
----------------------------------------------------------------*/
.mod_b {
}

/* module B logo */
.mod_b_logo {
}

/* module B nav */
.mod_b_nav {
}
```

#### 嵌套规范

##### 选择器嵌套

```scss
/* CSS */
.jdc {
}
body .jdc {
}

/* SCSS */
.jdc {
  body & {
  }
}
```

```scss
/* CSS */
.jdc {
}
.jdc_cover {
}
.jdc_info {
}
.jdc_info_name {
}

/* SCSS */
.jdc {
  &_cover {
  }
  &_info {
    &_name {
    }
  }
}
```

##### 属性嵌套

```scss
/* CSS */
.jdc {
  background-color: red;
  background-repeat: no-repeat;
  background-image: url(/img/icon.png);
  background-position: 0 0;
}

/* SCSS */
.jdc {
  background: {
    color: red;
    repeat: no-repeat;
    image: url(/img/icon.png);
    position: 0 0;
  }
}
```

#### 变量

可复用属性尽量抽离为页面变量，易于统一维护

```scss
// CSS
.jdc {
  color: red;
  border-color: red;
}

// SCSS
$color: red;
.jdc {
  color: $color;
  border-color: $color;
}
```

#### 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```scss
// CSS
.jdc_1 {
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.jdc_2 {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

// SCSS
@mixin radius($radius: 5px) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.jdc_1 {
  @include radius; //参数使用默认值
}
.jdc_2 {
  @include radius(10px);
}

// CSS
.jdc_1 {
  background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc_2 {
  background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x: 0, $y: 0) {
  background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc_1 {
  @include icon(-10px, 0);
}
.jdc_2 {
  @include icon(-20px, 0);
}
```

#### 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```scss
//scss
%borderbox {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.jdc {
  @extend %borderbox;
}
```

#### extend 继承

```scss
// CSS
.jdc_1 {
  font-size: 12px;
  color: red;
}
.jdc_2 {
  font-size: 12px;
  color: red;
  font-weight: bold;
}

// SCSS
.jdc_1 {
  font-size: 12px;
  color: red;
}
.jdc_2 {
  @extend .jdc_1;
  font-weight: bold;
}

// 或者
%font_red {
  font-size: 12px;
  color: red;
}
.jdc_1 {
  @extend %font_red;
}
.jdc_2 {
  @extend %font_red;
  font-weight: bold;
}
```

#### for 循环

```scss
// CSS
.jdc_1 {
  background-position: 0 -20px;
}
.jdc_2 {
  background-position: 0 -40px;
}
.jdc_3 {
  background-position: 0 -60px;
}

// SCSS
@for $i from 1 through 3 {
  .jdc_#{$i} {
    background-position: 0 (-20px) * $i;
  }
}
```

注意：`#{}` 是连接符，变量连接使用时需要依赖

#### each 循环

```scss
// CSS
.jdc_list {
  background-image: url(/img/jdc_list.png);
}
.jdc_detail {
  background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
  .jdc_#{$name} {
    background-image: url(/img/jdc_#{$name}.png);
  }
}

// CSS
.jdc_list {
  background-image: url(/img/jdc_list.png);
  background-color: red;
}
.jdc_detail {
  background-image: url(/img/jdc_detail.png);
  background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
  .jdc_#{$name} {
    background-image: url(/img/jdc_#{$name}.png);
    background-color: $color;
  }
}
```

#### function 函数

```scss
@function pxToRem($px) {
  @return $px / 10px * 1rem;
}
.jdc {
  font-size: pxToRem(12px);
}
```

#### 运算规范

运算符之间空出一个空格

```scss
.jdc {
  width: 100px - 50px;
  height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```scss
// 正确的运算格式
.jdc {
  width: 100px - 50px;
  width: 100px + 50px;
  width: 100px * 2;
  width: 100px / 2;
}
```

### 重置样式

#### 移动端

```css
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
img {
  border: 0 none;
  vertical-align: top;
}
i,
em {
  font-style: normal;
}
ol,
ul {
  list-style: none;
}
input,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #666;
}
body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 640px;
  height: 100%;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
}
input[type="text"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

#### PC 端

```css
html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
input,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
textarea,
article,
aside,
audio,
canvas,
figure,
footer,
header,
mark,
menu,
nav,
section,
time,
video {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
article,
aside,
dialog,
figure,
footer,
header,
hgroup,
nav,
section,
blockquote {
  display: block;
}
ul,
ol {
  list-style: none;
}
img {
  border: 0 none;
  vertical-align: top;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
strong,
em,
i {
  font-style: normal;
  font-weight: normal;
}
ins {
  text-decoration: underline;
}
del {
  text-decoration: line-through;
}
mark {
  background: none;
}
input::-ms-clear {
  display: none !important;
}
body {
  font: 12px/1.5 \5fae\8f6f\96c5\9ed1, \5b8b\4f53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei",
    "Droid Sans Fallback", SimSun, sans-serif;
  background: #fff;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  text-decoration: underline;
}
```

## JS 规范

### 语言规范

#### 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。

##### 类型

- 原始类型: 存取原始类型直接作用于值本身

  - 布尔类型
  - Null 类型
  - Undefined 类型
  - 数字类型
  - BigInt 类型
  - 字符串类型
  - 符号类型 Symbol

  ```js
  const foo = 1;
  let bar = foo;

  bar = 9;

  console.log(foo, bar); // 1, 9
  ```

- 复杂类型: 访问复杂类型作用于值的引用

  - object
  - array
  - function

  ```js
  const foo = [1, 2, 3];
  const bar = foo;

  bar[0] = 9;

  console.log(foo[0], bar[0]); // 9, 9
  ```

##### 引用

- 请记得 `const` 和 `let` 都是块级作用域，`var` 是函数级作用域

```js
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

- 对所有引用都使用 `const`，不要使用 `var`，eslint: [prefer-const](https://eslint.org/docs/rules/prefer-const.html), [no-const-assign](https://eslint.org/docs/rules/no-const-assign.html)

> 原因：这样做可以确保你无法重新分配引用，以避免出现错误和难以理解的代码

```js
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

- 如果引用是可变动的，使用 `let` 代替 `var`，eslint: [no-var](https://eslint.org/docs/rules/no-var.html)

> 原因：`let` 是块级作用域的，而不像 `var` 属于函数级作用域

```js
// bad
var count = 1;
if (count < 10) {
  count += 1;
}

// good
let count = 1;
if (count < 10) {
  count += 1;
}
```

##### 对象

- 请使用字面量值创建对象，eslint: [no-new-object](https://eslint.org/docs/rules/no-new-object.html)

  ```js
  // bad
  const a = new Object{}

  // good
  const a = {}
  ```

- 别使用保留字作为对象的键值，这样在 IE8 下不会运行

  ```js
  // bad
  const a = {
    default: {}, // default 是保留字
    common: {},
  };

  // good
  const a = {
    defaults: {},
    common: {},
  };
  ```

- 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建

> 原因：因为这样做就可以让你在一个地方定义所有的对象属性

```js
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: "San Francisco",
};
obj[getKey("enabled")] = true;

// good
const obj = {
  id: 5,
  name: "San Francisco",
  [getKey("enabled")]: true,
};
```

- 请使用对象方法的简写方式，eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)

  ```js
  // bad
  const item = {
    value: 1,

    addValue: function(val) {
      return item.value + val;
    },
  };

  // good
  const item = {
    value: 1,

    addValue(val) {
      return item.value + val;
    },
  };
  ```

- 请使用对象属性值的简写方式，eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)

  > 原因：这样更简短且描述更清楚

  ```js
  const job = "FrontEnd";

  // bad
  const item = {
    job: job,
  };

  // good
  const item = {
    job,
  };
  ```

- 将简写的对象属性分组后统一放到对象声明的开头

> 原因：这样更容易区分哪些属性用了简写的方式

```js
const job = "FrontEnd";
const department = "JDC";

// bad
const item = {
  sex: "male",
  job,
  age: 25,
  department,
};

// good
const item = {
  job,
  department,
  sex: "male",
  age: 25,
};
```

- 只对非法标识符的属性使用引号，eslint: [quote-props](https://eslint.org/docs/rules/quote-props.html)

> 原因：因为通常来说我们认为这样主观上会更容易阅读，这样会带来代码高亮上的提升，同时也更容易被主流 JS 引擎优化

```js
// bad
const bad = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};
```

- 不要直接使用 `Object.prototype` 的方法, 例如 `hasOwnProperty`, `propertyIsEnumerable` 和 `isPrototypeOf` 方法，eslint: [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
  > 原因：这些方法可能会被对象自身的同名属性覆盖 - 比如 `{ hasOwnProperty: false }` 或者对象可能是一个 `null` 对象(`Object.create(null)`)

```js
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from "has"; // https://www.npmjs.com/package/has
console.log(has(object, key));
```

- 优先使用对象展开运算符 `...` 来做对象浅拷贝而不是使用 `Object.assign`，使用对象剩余操作符来获得一个包含确定的剩余属性的新对象

```js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

##### 数组

- 请使用字面量值创建数组，eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)

  ```js
  // bad
  const items = new Array();

  // good
  const items = [];
  ```

- 向数组中添加元素时，请使用 `push` 方法

  ```js
  const items = [];

  // bad
  items[items.length] = "test";

  // good
  items.push("test");
  ```

- 使用展开运算符 `...` 复制数组

  ```js
  // bad
  const items = [];
  const itemsCopy = [];
  const len = items.length;
  let i;

  // bad
  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
  }

  // good
  itemsCopy = [...items];
  ```

- 把一个可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`

```js
const foo = document.querySelectorAll(".foo");

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

- 使用 `Array.from` 来将一个类数组对象转换为数组

```js
const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

- 遍历迭代器进行映射时使用 `Array.from` 代替扩展运算符 `...`, 因为这可以避免创建中间数组

```js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

- 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`

  ```js
  // good
  [1, 2, 3]
    .map((x) => {
      const y = x + 1;
      return x * y;
    })

    [
      // good
      (1, 2, 3)
    ].map((x) => x + 1);

  // bad
  const flat = {}[([0, 1], [2, 3], [4, 5])].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
  });

  // good
  const flat = {}[([0, 1], [2, 3], [4, 5])].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
    return flatten;
  });

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === "Mockingbird") {
      return author === "Harper Lee";
    } else {
      return false;
    }
  });

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === "Mockingbird") {
      return author === "Harper Lee";
    }

    return false;
  });
  ```

- 如果一个数组有多行则要在数组的开括号后和闭括号前使用新行

```js
// bad
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [1, 2];

// good
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [1, 2];
```

##### 解构赋值

- 当需要使用对象的多个属性时，请使用解构赋值，eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

> 愿意：解构可以避免创建属性的临时引用

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;

  return `${firstName} ${lastName}`;
}

// better
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

- 当需要使用数组的多个值时，请同样使用解构赋值，eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

  ```js
  const arr = [1, 2, 3, 4];

  // bad
  const first = arr[0];
  const second = arr[1];

  // good
  const [first, second] = arr;
  ```

- 函数需要回传多个值时，请使用对象的解构，而不是数组的解构

> 原因：可以非破坏性地随时增加或者改变属性顺序

```js
// bad
function doSomething() {
  return [top, right, bottom, left];
}

// 如果是数组解构，那么在调用时就需要考虑数据的顺序
const [top, xx, xxx, left] = doSomething();

// good
function doSomething() {
  return { top, right, bottom, left };
}

// 此时不需要考虑数据的顺序
const { top, left } = doSomething();
```

##### 字符串

- 字符串统一使用单引号的形式 `''`，eslint: [quotes](https://eslint.org/docs/rules/quotes.html)

  ```js
  // bad
  const department = "JDC";

  // good
  const department = "JDC";
  ```

- 字符串太长的时候，请不要使用字符串连接符换行 `\`，而是使用 `+`

  ```js
  const str =
    "凹凸实验室 凹凸实验室 凹凸实验室" +
    "凹凸实验室 凹凸实验室 凹凸实验室" +
    "凹凸实验室 凹凸实验室";
  ```

- 程序化生成字符串时，请使用模板字符串，eslint: [prefer-template](http://eslint.org/docs/rules/prefer-template.html) [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const test = "test";

  // bad
  const str = ["a", "b", test].join();

  // bad
  const str = "a" + "b" + test;

  // good
  const str = `ab${test}`;
  ```

- 不要对字符串使用 eval()，会导致太多漏洞， eslint: [no-eval](https://eslint.org/docs/rules/no-eval)

- 不要在字符串中使用不必要的转义字符， eslint: [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

```js
// bad
const foo = "'this' is \"quoted\"";

// good
const foo = "'this' is \"quoted\"";
const foo = `my name is '${name}'`;
```

##### 函数

- 不要使用 Function 构造函数创建函数， eslint: [no-new-func](https://eslint.org/docs/rules/no-new-func)

> 原因：此方式创建函数和对字符串使用 `eval()` 一样会产生漏洞

```js
// bad
const add = new Function("a", "b", "return a + b");

// still bad
const subtract = Function("a", "b", "return a - b");
```

- 在函数签名中使用空格，eslint: [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren) [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)

```js
const f = function() {};
const g = function() {};
const h = function() {};

// good
const x = function b() {};
const y = function a() {};
```

- 使用具名函数表达式而非函数声明，eslint: [func-style](http://eslint.org/docs/rules/func-style)

> 原因：这样做会导致函数声明被提升，这意味着很容易在文件中定义此函数之前引用它，不利于可读性和可维护性。如果你发现函数定义既庞大又复杂以至于不能理解文件的其他部分，或许你应该将它拆分成模块！别忘记要显式命名表达式，而不用管名字是否是从包含的变量（通常出现在现代浏览器中或者使用 Babel 编译器的时候）中推断的。这样会消除错误调用堆栈中的任何假设。 (讨论)

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function() {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

- 用圆括号包裹自执行匿名函数，eslint：[wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)

> 原因：一个立即执行匿名函数表达式是一个单一的单元，将其及其调用括号包装在括号中，能够清楚地表达这一点。注意，在到处都是模块的世界中几乎不需要 IIFE。

```js
// immediately-invoked function expression (IIFE)
(function() {
  console.log("Welcome to the Internet. Please follow me.");
})();
```

- 不要在非函数代码块（`if` , `while` 等）中声明函数，eslint：[no-loop-func](http://eslint.org/docs/rules/no-loop-func.html)

  ```js
  // bad
  if (isUse) {
    function test() {
      // do something
    }
  }

  // good
  let test;
  if (isUse) {
    test = () => {
      // do something
    };
  }
  ```

- 不要将参数命名为 `arguments`，会导致该参数的优先级高于每个函数作用域内原先存在的 `arguments` 对象

```js
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```

- 不要使用 `arguments`，使用 剩余运算符 `...`

  > `arguments` 只是一个类数组，而 `...` 是一个真正的数组

  ```js
  // bad
  function test() {
    const args = Array.prototype.slice.call(arguments);
    return args.join("");
  }

  // good
  function test(...args) {
    return args.join("");
  }
  ```

- 使用参数默认值语法而不是修改函数参数

```js
// really bad
function handleThings(opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

- 避免参数默认值的副作用

```js
let b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
```

- 将参数默认值放在最后

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

- 不要更改参数，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)

> 原因：操作作为参数传入的对象可能在原始调用中造成意想不到的变量副作用

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}
```

- 不要给参数重新赋值，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)

> 原因：参数重新赋值可能会导致无法预期的行为，尤其是当操作 `arguments` 对象时，也可能导致优化问题，尤其是在 V8 引擎中

```js
// bad
function f1(a) {
  a = 1;
}

function f2(a) {
  if (!a) {
    a = 1;
  }
}

// good
function f3(a) {
  const b = a || 1;
}

function f4(a = 1) {}
```

- 调用可变参数函数时建议使用展开运算符 `....`， eslint: [prefer-spread](http://eslint.org/docs/rules/prefer-spread)

> 原因：显然你无需使用上下文，很难结合 `new` 和 `apply`

```js
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);
```

##### 箭头函数

- 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记. eslint: [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html), [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing.html)

> 原因：它将创建在 `this` 上下文中执行的函数版本，通常是您想要的，并且语法更简洁

> 如果您有一个相当复杂的函数，则可以将该逻辑移到其自己的命名函数表达式中

```js
// bad
[1, 2, 3]
  .map(function(x) {
    const y = x + 1;
    return x * y;
  })

  [
    // good
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  });
```

- 如果函数体只包含一条没有副作用的返回表达式的语句，可以省略花括号并使用隐式的 `return`， 否则保留花括号并使用 `return` 语句，eslint: [arrow-parens](https://eslint.org/docs/rules/arrow-parens.html), [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style.html)

```js
// bad
[1, 2, 3]
  .map((number) => {
    const nextNumber = number + 1`A string containing the ${nextNumber}.`;
  })

  [
    // good
    (1, 2, 3)
  ].map((number) => `A string containing the ${number}.`)

  [
    // good
    (1, 2, 3)
  ].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  })

  [
    // good
    (1, 2, 3)
  ].map((number, index) => ({
    index: number,
  }));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => (bool = true));

// good
foo(() => {
  bool = true;
});
```

- 一旦表达式跨多行，使用圆括号包裹以便更好阅读

```js
// bad
["get", "post", "put"]
  .map((httpMethod) =>
    Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod
    )
  )

  [
    // good
    ("get", "post", "put")
  ].map((httpMethod) =>
    Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod
    )
  );
```

- 函数如果只接收一个参数并且没使用用花括号，则省略圆括号，否则为了清晰明确则使用圆括号包裹参数，注意：总是使用圆括号也是可以接受的，eslint 中的 ["always" 选项](https://eslint.org/docs/rules/arrow-parens#always)，eslint: [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)

```js
// bad
[1, 2, 3]
  .map((x) => x * x)

  [
    // good
    (1, 2, 3)
  ].map((x) => x * x)

  [
    // good
    (1, 2, 3)
  ].map(
    (number) =>
      `A long string with the ${number}. It’s so long that we’ve broken it ` +
      "over multiple lines!"
  )

  [
    // bad
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  })

  [
    // good
    (1, 2, 3)
  ].map((x) => {
    const y = x + 1;
    return x * y;
  });
```

##### 类&构造函数

- 使用 `class`，避免直接操作 `prototype`

  ```js
  // bad
  function Queue (contents = []) {
    this._queue = [..contents]
  }
  Queue.prototype.pop = function () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }

  // good
  class Queue {
    constructor (contents = []) {
      this._queue = [...contents]
    }

    pop () {
      const value = this._queue[0]
      this._queue.splice(0, 1)
      return value
    }
  }
  ```

- 使用 `extends` 来实现继承

> 原因：这是一个不会破坏 `instanceof` 的内建实现原型式继承的方式

```js
// bad
const inherits = require("inherits");
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

- 如果未声明构造函数，则类会有一个默认的构造函数，没必要用空的构造函数或者将其委托给父类，eslint: [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

```js
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = "Rey";
  }
}
```

- 避免类成员重复，eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

> 原因：重复的类成员声明会默认使用最后声明的，通常会导致 bug

```js
// bad
class Foo {
  bar() {
    return 1;
  }
  bar() {
    return 2;
  }
}

// good
class Foo {
  bar() {
    return 1;
  }
}

// good
class Foo {
  bar() {
    return 2;
  }
}
```

##### 模块

- 使用标准的 ES6 模块语法 `import` 和 `export`

> 原因：模块是未来，让我们现在开始使用未来的特性

```js
// bad
const util = require("./util");
module.exports = util;

// good
import Util from "./util";
export default Util;

// better
import { Util } from "./util";
export default Util;
```

- 不要使用 `import` 的通配符 `*`，这样可以确保你只有一个默认的 export

  ```js
  // bad
  import * as Util from "./util";

  // good
  import Util from "./util";
  ```

- 同个文件每个模块只允许 `import` 一次，有多个 `import` 请书写在一起，eslint: [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

> 原因：这样可以让代码更易于维护

```js
// bad
import foo from "foo";
// … some other imports … //
import { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";
```

- 将所有 `import` 语句放在文件最前方，eslint: [import/imports-first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

```js
// bad
import foo from "foo";
foo.init();

import bar from "bar";

// good
import foo from "foo";
import bar from "bar";

foo.init();
```

- 多行导入应该像多行数组和对象文字一样缩进

```js
// bad
import { longNameA, longNameB, longNameC, longNameD, longNameE } from "path";

// good
import { longNameA, longNameB, longNameC, longNameD, longNameE } from "path";
```

- 在模块 `import` 声明中禁止使用 `Webpack` 的 `loader` 语法，eslint: [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

```js
// bad
import fooSass from "css!sass!foo.scss";
import barCss from "style!css!bar.css";

// good
import fooSass from "foo.scss";
import barCss from "bar.css";
```

##### 迭代器

- 不要使用 `iterators`，建议使用 JS 更高优先级的函数代替 for-in 或 for-of 循环，除非迫不得已，eslint: [no-iterator](https://eslint.org/docs/rules/no-iterator.html) [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)

>

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

// good
let sum = 0;
numbers.forEach((num) => (sum += num));

// better
const sum = numbers.reduce((total, num) => total + num, 0);
```

##### 生成器

- 现阶段请不要使用生成器 `generator`

> 原因：因为不能很好地翻译成 ES5 代码

##### 对象属性

- 使用 `.` 来访问对象属性

  ```js
  const joke = {
    name: "haha",
    age: 28,
  };

  // bad
  const name = joke["name"];

  // good
  const name = joke.name;
  ```

- 当访问的属性是变量时使用 `[]`

```js
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp("jedi");
```

##### 变量声明

- 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染。eslint: [no-undef](http://eslint.org/docs/rules/no-undef) [prefer-const](http://eslint.org/docs/rules/prefer-const)

  ```js
  // bad
  demo = new Demo();

  // good
  const demo = new Demo();
  ```

- 将所有的 `const` 和 `let` 分组

  ```js
  // bad
  let a
  const b
  let c
  const d
  let e

  // good
  const b
  const d
  let a
  let c
  let e
  ```

- 变量不要进行链式赋值

> 原因：变量链式赋值会创建隐藏的全局变量

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = (b = c = 1);
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c)(
  // 1

  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  })()
);

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

- 不允许出现未被使用的变量，eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

> 原因：声明但未被使用的变量通常是不完全重构犯下的错误.这种变量在代码里浪费空间并会给读者造成困扰

```js
// bad

var some_unused_var = 42;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
  return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.
```

##### Hoisting

- `var` 存在变量提升的情况，即 `var` 声明会被提升至该作用域的顶部，但是他们的赋值并不会。而 `const` 和 `let` 并不存在这种情况，他们被赋予了 [Temporal Dead Zones, TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)， 了解 [typeof 不再安全](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15)很重要

  ```js
  function example() {
    console.log(notDefined); // => throws a ReferenceError
  }

  function example() {
    console.log(declareButNotAssigned); // => undefined
    var declaredButNotAssigned = true;
  }

  function example() {
    let declaredButNotAssigned;
    console.log(declaredButNotAssigned); // => undefined
    declaredButNotAssigned = true;
  }

  function example() {
    console.log(declaredButNotAssigned); // => throws a ReferenceError
    console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
    const declaredButNotAssigned = true;
  }
  ```

- 匿名函数的变量名会提升，但函数内容不会

  ```js
  function example() {
    console.log(anonymous); // => undefined

    anonymous();

    var anonymous = function() {
      console.log("test");
    };
  }
  ```

- 命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会

  ```js
  function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    superPower(); // => ReferenceError superPower is not defined

    var named = function superPower() {
      console.log("Flying");
    };
  }

  function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    var named = function named() {
      console.log("named");
    };
  }
  ```

##### 比较运算符&相等

- 使用 `===` 和 `!==` 而非 `==` 和 `!=`，eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)

- 条件声明例如 `if` 会用 `ToBoolean` 这个抽象方法将表达式转成布尔值并遵循如下规则
  - `Objects` 等于 `true`
  - `Undefined` 等于 `false`
  - `Null` 等于 `false`
  - `Booleans` 等于 `布尔值`
  - `Numbers` 在 `+0`, `-0`, 或者 `NaN` 的情况下等于 `false`, 其他情况是 `true`
  - `Strings` 为 `''` 时等于 `false`, 否则是 `true`
  ```js
  if ([0] && []) {
    // true
    // 数组(即使是空数组)也是对象，对象等于true
  }
  ```

##### 分号

- 我们遵循 `Standard` 的规范，不使用分号。

  > 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 `JS` 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。

  ```js
  // bad
  const test = "good";
  (function() {
    const str = "hahaha";
  })();

  // good
  const test = "good";
  (() => {
    const str = "hahaha";
  })();
  ```

##### 标准特性

为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 `string.charAt(3)` 而不是 `string[3]`

##### eval()

由于 `eval` 方法比较 `evil`，所以我们约定禁止使用该方法

##### with() {}

由于 `with` 方法会产生神奇的作用域，所以我们也是禁止使用该方法的

##### 修改内置对象的原型

不要修改内置对象，如 `Object` 和 `Array`

### 代码规范

#### 编码规范

统一团队的编码规范，有助于代码的维护。本章是传统意义上的 `Style Guideline`，目的是统一一些相对主观化的代码风格。

##### 单行代码块

在单行代码块中使用空格

_不推荐_

```js
function foo() {
  return true;
}
if (foo) {
  bar = 0;
}
```

_推荐_

```js
function foo() {
  return true;
}
if (foo) {
  bar = 0;
}
```

##### 大括号风格

在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：

- **One True Brace Style**

  ```js
  if (foo) {
    bar();
  } else {
    baz();
  }
  ```

- **Stroustrup**

  ```js
  if (foo) {
    bar();
  } else {
    baz();
  }
  ```

- **Allman**

  ```js
  if (foo) {
    bar();
  } else {
    baz();
  }
  ```

我们团队约定使用 `One True Brace Style` 风格

##### 变量命名

当命名变量时，主流分为驼峰式命名（constiableName）和下划线命名（constiable_name）两大阵营。

> 团队约定使用驼峰式命名

##### 拖尾逗号

在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。

拖尾逗号的例子：

```js
const foo = {
  name: "foo",
  age: "22",
};
```

拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。

> 因为拖尾逗号有好也有不好，所以团队约定允许在最后一个元素或属性与闭括号 `]` 或 `}` 在不同行时，可以（但不要求）使用拖尾逗号。当在同一行时，禁止使用拖尾逗号。

##### 逗号空格

逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。

_不推荐_

```js
const foo = 1,
  bar = 2;
const foo = 1,
  bar = 2;
const foo = 1,
  bar = 2;
```

_推荐_

```js
const foo = 1,
  bar = 2;
```

##### 逗号风格

逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：

- 标准风格，逗号放置在当前行的末尾
- 逗号前置风格，逗号放置在下一行的开始位置

> 团队约定使用标准风格

_不推荐_

```js
const foo = 1,
  bar = 2;

const foo = 1,
  bar = 2;

const foo = ["name", "age"];
```

_推荐_

```js
const foo = 1,
  bar = 2;

const foo = ["name", "age"];
```

##### 计算属性的空格

团队约定在对象的计算属性内，禁止使用空格

_不推荐_

```js
obj["foo"];
obj["foo"];
obj["foo"];
```

_推荐_

```js
obj["foo"];
```

##### 拖尾换行

在非空文件中，存在拖尾换行是一个常见的 `UNIX` 风格，它的好处是可以方便在串联和追加文件时不会打断 `Shell` 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。

_不推荐_

```js
function func() {
  // do something
}
```

_推荐_

```js
function func() {
  // do something
}
// 此处是新的一行
```

> 可以通过 .editorconfig 添加 EOL

##### 函数调用

为了避免语法错误，团队约定在函数调用时，禁止使用空格

_不推荐_

```js
fn();
fn();
```

_推荐_

```js
fn();
```

##### 缩进

代码保持一致的缩进，是作为工程师的职业素养。但缩进用两个空格，还是四个空格，是用 `Tab` 还是空格呢？这样的争论太多了，也得不出答案。本规范结合了市面上优秀的开源项目，姑且约定使用 `空格` 来缩进，而且缩进使用两个空格。

那是不是不能使用 `Tab` 进行缩进了？我们可以通过配置 `.editorconfig` ，将 `Tab` 自动转换为空格。

##### 对象字面量的键值缩进

团队约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格

_不推荐_

```js
const obj = { foo: "haha" };
```

_推荐_

```js
const obj = { foo: "haha" };
```

##### 构造函数首字母大写

在 JavaScript 中 `new` 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 `new` 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。

_不推荐_

```js
const fooItem = new foo();
```

_推荐_

```js
const fooItem = new Foo();
```

##### 构造函数的参数

在 JavaScript 中，通过 `new` 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号

_不推荐_

```js
const person = new Person();
```

_推荐_

```js
const person = new Person();
```

##### 链式调用

链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。所以本规范约定一行最多只能有四个链式调用，超过就要求换行。

##### 空行

空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2

_不推荐_

```js
const a = 1;

const b = 2;
```

_推荐_

```js
const a = 1;

const b = 2;
```

##### 链式赋值

链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值

_不推荐_

```js
const a = (b = c = 1);
```

_推荐_

```js
const a = 1;
const b = 1;
const c = 1;
```

##### 变量声明

JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量

_不推荐_

```js
const a, b, c
```

_推荐_

```js
const a
const b
const c
```

##### 分号

JavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 自动分号插入 (ASI)，被认为是 JavaScript 中较为有争议的特征。

团队中对于是否应该使用分号，也有许多争论，本规范推荐不使用分号，因为我们认为好的工程师应该知道什么时候该加，什么时候不该加。

相关参考 ：[semi](http://eslint.org/docs/rules/semi)

##### 代码块空格

一致性是任何风格指南的重要组成部分。虽然在哪里放置块的开括号纯属个人偏好，但在整个项目中应该保持一致。不一致的风格将会分散读者阅读代码的注意力。

> 团队约定代码块前要添加空格

_不推荐_

```js
if (a) {
  b();
}

function a() {}
```

_推荐_

```js
if (a) {
  b();
}

function a() {}
```

##### 函数声明的空格

当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间有空格，但是匿名函数要求不加空格。

> 团队约定函数括号前要加空格

_不推荐_

```js
function func(x) {
  // ...
}
```

_推荐_

```js
function func(x) {
  // ...
}
```

##### 操作符的空格

团队约定操作符前后都需要添加空格

_不推荐_

```js
const sum = 1 + 2;
```

_推荐_

```js
const sum = 1 + 2;
```

##### BOM

Unicode 字节顺序标记 (BOM) 用来指定代码单元是高字节序还是低字节序。也就是说，是高位在前还是低位在前。UTF-8 不需要 BOM 来表明字节顺序，因为单个字节并不影响字节顺序。

相信不少同学遇到过 BOM 的坑，这里不多说了，切记不要使用 windows 的记事本改代码！

## React/JSX 规范

> 本规范基本基于标准的 JavaScript 语法规范

### 基本规则

- 每个文件只包含一个 React 类组件
  - 但是多个函数式组件可以放到一个文件中，eslint: [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless)
- 一般使用 JSX 语法
- 除非是在非 JSX 文件中初始化应用，否则不要使用 `React.createElement`

### 命名规范

- 组件文件扩展名

如果使用 JavaScript，则文件扩展名为 `.js`；如果使用 `TypeScript`，则文件扩展名为 `.tsx`

- 组件文件名

如果是组件文件，则使用 PascalCase，如 `MyComponent.js`

如果组件是一个目录，则组件主入口命名为 `index`，如 `index.js`

- 引用命名

React 组件使用 PascalCase，组件实例使用 CamelCase，eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from "./ReservationCard";

// good
import ReservationCard from "./ReservationCard";

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- 组件命名

使用文件名作为组件名字，例如, `ReservationCard.js` 应该包含名为 `ReservationCard` 的引用，然而对于文件夹中的根组件, 使用 `index.js` 作为文件名，使用文件夹的名字作为组件的名字

```jsx
// bad
import Footer from "./Footer/Footer";

// bad
import Footer from "./Footer/index";

// good
import Footer from "./Footer";
```

- 组件属性名

React DOM 使用小驼峰式命名法来定义属性的名称，而不使用 HTML 属性名称的命名约定，例如

```jsx
<div onClick={this.handler} />
```

### Class Component VS Functional Component

只允许使用 `Class Component` 和 `Functional Component` 两种形态来书写组件，建议尽量使用函数式组件配合 Hooks 来进行开发

### 对齐

遵循以下 JSX 语法的对齐风格，eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo superLongParam='bar'
     anotherSuperLongParam='baz' />

// good
<Foo
  superLongParam='bar'
  anotherSuperLongParam='baz'
/>

// if props fit in one line then keep it on the same line
<Foo bar='bar' />

// children get indented normally
<Foo
  superLongParam='bar'
  anotherSuperLongParam='baz'
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}
```

### 空格

- 自闭合的标签前要加一个空格，eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces), [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- 不要在 JSX 的花括号里边加空格，eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### 引号

JSX 属性要使用单引号，与其他普通 JS 保持一致

```jsx
// bad
<Foo bar="bar" />

// good
<Foo bar='bar' />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 属性

- 属性名使用 CamelCase

```jsx
// bad
<Foo
  UserName='hello'
  phone_number={12345678}
/>

// good
<Foo
  userName='hello'
  phoneNumber={12345678}
/>
```

- 当属性值为 true 时可以省略， eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- 避免使用数组的索引作为 key 属性值, 建议使用稳定的 ID，eslint: [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> 原因：不使用稳定的 ID 会对性能产生副作用并且组件状态会出问题，是一种[反模式](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

```jsx
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
  todos.map((todo) => <Todo {...todo} key={todo.id} />);
}
```

- 为所有的非必需属性定义使用 defaultProps 明确的默认值

```jsx
// bad
function SFC({ foo, bar, children }) {
  return (
    <div>
      {foo}
      {bar}
      {children}
    </div>
  );
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
  return (
    <div>
      {foo}
      {bar}
      {children}
    </div>
  );
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};
SFC.defaultProps = {
  bar: "",
  children: null,
};
```

### Refs

避免使用字符串引用，请使用回调函数作为引用，eslint: [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```jsx
// bad
<Foo
  ref='myRef'
/>

// good
<Foo
  ref={ref => { this.myRef = ref }}
/>
```

### 圆括号

当 JSX 标签超过一行时使用圆括号包裹， eslint: [react/wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

```jsx

// bad
render () {
  return <MyComponent className='long body' foo='bar'>
           <MyChild />
         </MyComponent>
}

// good
render () {
  return (
    <MyComponent className='long body' foo='bar'>
      <MyChild />
    </MyComponent>
  )
}

// good, when single line
render () {
  const body = <div>hello</div>
  return <MyComponent>{body}</MyComponent>
}
```

### 标签

- 没有子元素的标签请自闭合，eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```jsx
// bad
<Foo className='stuff'></Foo>

// good
<Foo className='stuff' />
```

- 如果组件包含多行属性，在新的一行闭合标签，eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo
  bar='bar'
  baz='baz' />

// good
<Foo
  bar='bar'
  baz='baz'
/>
```

### 方法

- 使用箭头函数包裹本地变量

```jsx
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
```

- 类组件的内部方法不要使用下划线前缀

```jsx
// bad
class extends React.Component {
  _onClickSubmit () {
    // do stuff
  }

  // other stuff
}

// good
class extends React.Component {
  onClickSubmit () {
    // do stuff
  }

  // other stuff
}
```

- 确保在 render 方法中存在返回值，eslint: [require-render-return](https://github.com/yannickcr/eslint-plugin-react/pull/502)

```jsx
  // bad
  render () {
    (<div />)
  }

  // good
  render () {
    return (<div />)
  }
```

### Hooks 书写规范

- Hooks 只能应用于函数式组件中

- 只在 React 函数最顶层使用 Hooks

> 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们

```jsx
// bad
function a() {
  const [count, setCount] = useState(0);
  useEffect(function persistForm() {
    localStorage.setItem("formData", accountName);
  });
  const x = function() {};
  const [timer, setTimer] = useState(0);

  // main logic
}

// bad
function a() {
  const [count, setCount] = useState(0);
  useEffect(function persistForm() {
    localStorage.setItem("formData", accountName);
  });
  const [timer, setTimer] = useState(0);
  const x = function() {};
  // main logic
}
```

## Vue 规范

这里是官方的 Vue 特有代码的风格指南。如果在工程中使用 Vue，为了回避错误、小纠结和反模式，该指南是份不错的参考。不过我们也不确信风格指南的所有内容对于所有的团队或工程都是理想的。所以根据过去的经验、周围的技术栈、个人价值观做出有意义的偏差是可取的。

对于其绝大部分，我们也总体上避免就 JavaScript 或 HTML 的本身提出建议。我们不介意你是否使用分号或结尾的逗号。我们不介意你在 HTML attribute 中使用单引号还是双引号。不过当我们发现在 Vue 的情景下有帮助的特定模式时，也会存在例外。

> **不久之后，我们还会提供操作层面的技巧。**有的时候你只需要遵守规则，而我们会尽可能向你展示如何使用 ESLint 及其它自动化程序把操作层面弄得更简单。

最终，我们把所有的规则归为了四个大类：

### 规则归类

#### 优先级 A：必要的

这些规则会帮你规避错误，所以学习并接受它们带来的全部代价吧。这里面可能存在例外，但应该非常少，且只有你同时精通 JavaScript 和 Vue 才可以这样做。

#### 优先级 B：强烈推荐

这些规则能够在绝大多数工程中改善可读性和开发体验。即使你违反了，代码还是能照常运行，但例外应该尽可能少且有合理的理由。

#### 优先级 C：推荐

当存在多个同样好的选项，选任意一个都可以确保一致性。在这些规则里，我们描述了每个选项并建议一个默认的选择。也就是说只要保持一致且理由充分，你可以随意在你的代码库中做出不同的选择。请务必给出一个好的理由！通过接受社区的标准，你将会：

1. 训练你的大脑，以便更容易的处理你在社区遇到的代码；
2. 不做修改就可以直接复制粘贴社区的代码示例；
3. 能够经常招聘到和你编码习惯相同的新人，至少跟 Vue 相关的东西是这样的。

#### 优先级 D：谨慎使用

有些 Vue 特性的存在是为了照顾极端情况或帮助老代码的平稳迁移。当被过度使用时，这些特性会让你的代码难于维护甚至变成 bug 的来源。这些规则是为了给有潜在风险的特性敲个警钟，并说明它们什么时候不应该使用以及为什么。

### 优先级 A 的规则：必要的 (规避错误)

#### 组件名为多个单词<sup data-p="a">必要</sup>

**组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。**

这样做可以避免跟现有的以及未来的 HTML 元素[相冲突](http://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的。

###### 反例

```js
Vue.component("todo", {
  // ...
});
```

```js
export default {
  name: "Todo",
  // ...
};
```

###### 好例子

```js
Vue.component("todo-item", {
  // ...
});
```

```js
export default {
  name: "TodoItem",
  // ...
};
```

#### 组件数据<sup data-p="a">必要</sup>

**组件的 `data` 必须是一个函数。**

当在组件中使用 `data` property 的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。

当 `data` 的值是一个对象时，它会在这个组件的所有实例之间共享。想象一下，假如一个 `TodoList` 组件的数据是这样的：

```js
data: {
  listTitle: '',
  todos: []
}
```

我们可能希望重用这个组件，允许用户维护多个列表 (比如分为购物、心愿单、日常事务等)。这时就会产生问题。因为每个组件的实例都引用了相同的数据对象，更改其中一个列表的标题就会改变其它每一个列表的标题。增删改一个待办事项的时候也是如此。

取而代之的是，我们希望每个组件实例都管理其自己的数据。为了做到这一点，每个实例必须生成一个独立的数据对象。在 JavaScript 中，在一个函数中返回这个对象就可以了：

```js
data: function () {
  return {
    listTitle: '',
    todos: []
  }
}
```

###### 反例

```js
Vue.component("some-comp", {
  data: {
    foo: "bar",
  },
});
```

```js
export default {
  data: {
    foo: "bar",
  },
};
```

###### 好例子

```js
Vue.component("some-comp", {
  data: function() {
    return {
      foo: "bar",
    };
  },
});
```

```js
// In a .vue file
export default {
  data() {
    return {
      foo: "bar",
    };
  },
};
```

```js
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: "bar",
  },
});
```

#### Prop 定义<sup data-p="a">必要</sup>

**Prop 定义应该尽量详细。**

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

细致的 [prop 定义](../guide/components-props.html#Prop-验证)有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。

###### 反例

```js
// 这样做只有开发原型系统时可以接受
props: ["status"];
```

###### 好例子

```js
props: {
  status: String;
}
```

```js
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

#### 为 `v-for` 设置键值<sup data-p="a">必要</sup>

**总是用 `key` 配合 `v-for`。**

在组件上*总是*必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的[对象固化 (object constancy)](https://bost.ocks.org/mike/constancy/)，也是一种好的做法。

假设你有一个待办事项列表：

```js
data: function () {
  return {
    todos: [
      {
        id: 1,
        text: '学习使用 v-for'
      },
      {
        id: 2,
        text: '学习使用 key'
      }
    ]
  }
}
```

然后你把它们按照字母顺序排序。在更新 DOM 的时候，Vue 将会优化渲染把可能的 DOM 变更降到最低。即可能删掉第一个待办事项元素，然后把它重新加回到列表的最末尾。

这里的问题在于，不要删除仍然会留在 DOM 中的元素。比如你想使用 `<transition-group>` 给列表加过渡动画，或想在被渲染元素是 `<input>` 时保持聚焦。在这些情况下，为每一个项目添加一个唯一的键值 (比如 `:key="todo.id"`) 将会让 Vue 知道如何使行为更容易预测。

根据我们的经验，最好*始终*添加一个唯一的键值，以便你和你的团队永远不必担心这些极端情况。也在少数对性能有严格要求的情况下，为了避免对象固化，你可以刻意做一些非常规的处理。

###### 反例

```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

###### 好例子

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

#### 避免 `v-if` 和 `v-for` 用在一起<sup data-p="a">必要</sup>

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。

- 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)。

当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级，所以这个模板：

```html
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

将会经过如下运算：

```js
this.users.map(function(user) {
  if (user.isActive) {
    return user.name;
  }
});
```

因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。

通过将其更换为在如下的一个计算属性上遍历：

```js
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

我们将会获得如下好处：

- 过滤后的列表*只*会在 `users` 数组发生相关变化时才被重新运算，过滤更高效。
- 使用 `v-for="user in activeUsers"` 之后，我们在渲染的时候*只*遍历活跃用户，渲染更高效。
- 解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。

为了获得同样的好处，我们也可以把：

```html
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

更新为：

```html
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

通过将 `v-if` 移动到容器元素，我们不会再对列表中的*每个*用户检查 `shouldShowUsers`。取而代之的是，我们只检查它一次，且不会在 `shouldShowUsers` 为否的时候运算 `v-for`。

###### 反例

```html
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

```html
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

###### 好例子

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

```html
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

#### 为组件样式设置作用域<sup data-p="a">必要</sup>

**对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

这条规则只和[单文件组件](../guide/single-file-components.html)有关。你*不一定*要使用 [`scoped` attribute](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)。设置作用域也可以通过 [CSS Modules](https://vue-loader.vuejs.org/zh-cn/features/css-modules.html)，那是一个基于 class 的类似 [BEM](http://getbem.com/) 的策略，当然你也可以使用其它的库或约定。

**不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 `scoped` attribute。**

这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。

如果你和其他开发者一起开发一个大型工程，或有时引入三方 HTML/CSS (比如来自 Auth0)，设置一致的作用域会确保你的样式只会运用在它们想要作用的组件上。

不止要使用 `scoped` attribute，使用唯一的 class 名可以帮你确保那些三方库的 CSS 不会运用在你自己的 HTML 上。比如许多工程都使用了 `button`、`btn` 或 `icon` class 名，所以即便你不使用类似 BEM 的策略，添加一个 app 专属或组件专属的前缀 (比如 `ButtonClose-icon`) 也可以提供很多保护。

###### 反例

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
  .btn-close {
    background-color: red;
  }
</style>
```

###### 好例子

```html
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
  .button {
    border: none;
    border-radius: 2px;
  }

  .button-close {
    background-color: red;
  }
</style>
```

```html
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
  .button {
    border: none;
    border-radius: 2px;
  }

  .buttonClose {
    background-color: red;
  }
</style>
```

```html
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
  .c-Button {
    border: none;
    border-radius: 2px;
  }

  .c-Button--close {
    background-color: red;
  }
</style>
```

#### 私有 property 名<sup data-p="a">必要</sup>

**使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有 property 使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$_yourPluginName_`)。**

Vue 使用 `_` 前缀来定义其自身的私有 property，所以使用相同的前缀 (比如 `_update`) 有覆写实例 property 的风险。即便你检查确认 Vue 当前版本没有用到这个 property 名，也不能保证和将来的版本没有冲突。

对于 `$` 前缀来说，其在 Vue 生态系统中的目的是暴露给用户的一个特殊的实例 property，所以把它用于*私有* property 并不合适。

不过，我们推荐把这两个前缀结合为 `$_`，作为一个用户定义的私有 property 的约定，以确保不会和 Vue 自身相冲突。

###### 反例

```js
var myGreatMixin = {
  // ...
  methods: {
    update: function() {
      // ...
    },
  },
};
```

```js
var myGreatMixin = {
  // ...
  methods: {
    _update: function() {
      // ...
    },
  },
};
```

```js
var myGreatMixin = {
  // ...
  methods: {
    $update: function() {
      // ...
    },
  },
};
```

```js
var myGreatMixin = {
  // ...
  methods: {
    $_update: function() {
      // ...
    },
  },
};
```

###### 好例子

```js
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function() {
      // ...
    },
  },
};
```

```js
// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction();
    },
  },
};

function myPrivateFunction() {
  // ...
}

export default myGreatMixin;
```

### 优先级 B 的规则：强烈推荐 (增强可读性)

#### 组件文件<sup data-p="b">强烈推荐</sup>

**只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**

当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

###### 反例

```js
Vue.component("TodoList", {
  // ...
});

Vue.component("TodoItem", {
  // ...
});
```

###### 好例子

```
components/
|- TodoList.js
|- TodoItem.js
```

```
components/
|- TodoList.vue
|- TodoItem.vue
```

#### 单文件组件文件的大小写<sup data-p="b">强烈推荐</sup>

**[单文件组件](../guide/single-file-components.html)的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

###### 反例

```
components/
|- mycomponent.vue
```

```
components/
|- myComponent.vue
```

###### 好例子

```
components/
|- MyComponent.vue
```

```
components/
|- my-component.vue
```

#### 基础组件名<sup data-p="b">强烈推荐</sup>

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。**

这些组件为你的应用奠定了一致的基础样式和行为。它们可能**只**包括：

- HTML 元素
- 其它基础组件
- 第三方 UI 组件库

但是它们**绝不会**包括全局状态 (比如来自 Vuex store)。

它们的名字通常包含所包裹元素的名字 (比如 `BaseButton`、`BaseTable`)，除非没有现成的对应功能的元素 (比如 `BaseIcon`)。如果你为特定的上下文构建类似的组件，那它们几乎总会消费这些组件 (比如 `BaseButton` 可能会用在 `ButtonSubmit` 上)。

这样做的几个好处：

- 当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。

- 因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 `MyButton`、`VueButton`)。

- 因为这些组件会被频繁使用，所以你可能想把它们放到全局而不是在各处分别导入它们。使用相同的前缀可以让 webpack 这样工作：

  ```js
  var requireComponent = require.context(
    "./src",
    true,
    /Base[A-Z]\w+\.(vue|js)$/
  );
  requireComponent.keys().forEach(function(fileName) {
    var baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    var baseComponentName =
      baseComponentConfig.name ||
      fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
    Vue.component(baseComponentName, baseComponentConfig);
  });
  ```

###### 反例

```
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

###### 好例子

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

```
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
```

```
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

#### 单例组件名<sup data-p="b">强烈推荐</sup>

**只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，*只是目前*在每个页面里只使用一次。

###### 反例

```
components/
|- Heading.vue
|- MySidebar.vue
```

###### 好例子

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```

#### 紧密耦合的组件名<sup data-p="b">强烈推荐</sup>

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

你可以试着通过在其父组件命名的目录中嵌套子组件以解决这个问题。比如：

```
components/
|- TodoList/
   |- Item/
      |- index.vue
      |- Button.vue
   |- index.vue
```

或：

```
components/
|- TodoList/
   |- Item/
      |- Button.vue
   |- Item.vue
|- TodoList.vue
```

但是这种方式并不推荐，因为这会导致：

- 许多文件的名字相同，使得在编辑器中快速切换文件变得困难。
- 过多嵌套的子目录增加了在编辑器侧边栏中浏览组件所花的时间。

###### 反例

```
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
```

```
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

###### 好例子

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

```
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

#### 组件名中的单词顺序<sup data-p="b">强烈推荐</sup>

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**

你可能会疑惑：

> “为什么我们给组件命名时不多遵从自然语言呢？”

在自然的英文里，形容词和其它描述语通常都出现在名词之前，否则需要使用连接词。比如：

- Coffee _with_ milk
- Soup _of the_ day
- Visitor _to the_ museum

如果你愿意，你完全可以在组件名里包含这些连接词，但是单词的顺序很重要。

同样要注意**在你的应用中所谓的“高级别”是跟语境有关的**。比如对于一个带搜索表单的应用来说，它可能包含这样的组件：

```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

你可能注意到了，我们很难看出来哪些组件是针对搜索的。现在我们来根据规则给组件重新命名：

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputExcludeGlob.vue
|- SearchInputQuery.vue
|- SettingsCheckboxLaunchOnStartup.vue
|- SettingsCheckboxTerms.vue
```

因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。

你可能想换成多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为：

- 在多级目录间找来找去，要比在单个 `components` 目录下滚动查找要花费更多的精力。
- 存在组件重名 (比如存在多个 `ButtonDelete` 组件) 的时候在编辑器里更难快速定位。
- 让重构变得更难，因为为一个移动了的组件更新相关引用时，查找/替换通常并不高效。

###### 反例

```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

###### 好例子

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

#### 自闭合组件<sup data-p="b">强烈推荐</sup>

**在[单文件组件](../guide/single-file-components.html)、字符串模板和 [JSX](../guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。**

自闭合组件表示它们不仅没有内容，而且**刻意**没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有[官方的“空”元素](https://www.w3.org/TR/html/syntax.html#void-elements)。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。

###### 反例

```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>
```

```html
<!-- 在 DOM 模板中 -->
<my-component />
```

###### 好例子

```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent />
```

```html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

#### 模板中的组件名大小写<sup data-p="b">强烈推荐</sup>

**对于绝大多数项目来说，在[单文件组件](../guide/single-file-components.html)和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。**

PascalCase 相比 kebab-case 有一些优势：

- 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
- `<MyComponent>` 视觉上比 `<my-component>` 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
- 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。

不幸的是，由于 HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 kebab-case。

还请注意，如果你已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，**在所有的地方都使用 kebab-case 同样是可以接受的。**

###### 反例

```html
<!-- 在单文件组件和字符串模板中 -->
<mycomponent />
```

```html
<!-- 在单文件组件和字符串模板中 -->
<myComponent />
```

```html
<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>
```

###### 好例子

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />
```

```html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

或者

```html
<!-- 在所有地方 -->
<my-component></my-component>
```

#### JS/JSX 中的组件名大小写<sup data-p="b">强烈推荐</sup>

**JS/[JSX](../guide/render-function.html#JSX) 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 `Vue.component` 进行全局组件注册时，可以使用 kebab-case 字符串。**

在 JavaScript 中，PascalCase 是类和构造函数 (本质上任何可以产生多份不同实例的东西) 的命名约定。Vue 组件也有多份实例，所以同样使用 PascalCase 是有意义的。额外的好处是，在 JSX (和模板) 里使用 PascalCase 使得代码的读者更容易分辨 Vue 组件和 HTML 元素。

然而，对于**只**通过 `Vue.component` 定义全局组件的应用来说，我们推荐 kebab-case 作为替代。原因是：

- 全局组件很少被 JavaScript 引用，所以遵守 JavaScript 的命名约定意义不大。
- 这些应用往往包含许多 DOM 内的模板，这种情况下是[**必须**使用 kebab-case](#模板中的组件名大小写-强烈推荐) 的。

###### 反例

```js
Vue.component("myComponent", {
  // ...
});
```

```js
import myComponent from "./MyComponent.vue";
```

```js
export default {
  name: "myComponent",
  // ...
};
```

```js
export default {
  name: "my-component",
  // ...
};
```

###### 好例子

```js
Vue.component("MyComponent", {
  // ...
});
```

```js
Vue.component("my-component", {
  // ...
});
```

```js
import MyComponent from "./MyComponent.vue";
```

```js
export default {
  name: "MyComponent",
  // ...
};
```

#### 完整单词的组件名<sup data-p="b">强烈推荐</sup>

**组件名应该倾向于完整单词而不是缩写。**

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

###### 反例

```
components/
|- SdSettings.vue
|- UProfOpts.vue
```

###### 好例子

```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

#### Prop 名大小写<sup data-p="b">强烈推荐</sup>

**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 [JSX](../guide/render-function.html#JSX) 中应该始终使用 kebab-case。**

我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

###### 反例

```js
props: {
  'greeting-text': String
}
```

###### 好例子

```js
props: {
  greetingText: String;
}
```

#### 多个 attribute 的元素<sup data-p="b">强烈推荐</sup>

**多个 attribute 的元素应该分多行撰写，每个 attribute 一行。**

在 JavaScript 中，用多行分隔对象的多个 property 是很常见的最佳实践，因为这样更易读。模板和 [JSX](../guide/render-function.html#JSX) 值得我们做相同的考虑。

###### 反例

```html
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
```

```html
<MyComponent foo="a" bar="b" baz="c" />
```

###### 好例子

```html
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
```

```html
<MyComponent foo="a" bar="b" baz="c" />
```

#### 模板中简单的表达式<sup data-p="b">强烈推荐</sup>

**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**

复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的*是什么*，而非*如何*计算那个值。而且计算属性和方法使得代码可以重用。

###### 反例

```html
{{ fullName.split(' ').map(function (word) { return word[0].toUpperCase() +
word.slice(1) }).join(' ') }}
```

###### 好例子

```html
<!-- 在模板中 -->
{{ normalizedFullName }}
```

```js
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

#### 简单的计算属性<sup data-p="b">强烈推荐</sup>

**应该把复杂计算属性分割为尽可能多的更简单的 property。**

更简单、命名得当的计算属性是这样的：

- **易于测试**

  当每个计算属性都包含一个非常简单且很少依赖的表达式时，撰写测试以确保其正确工作就会更加容易。

- **易于阅读**

  简化计算属性要求你为每一个值都起一个描述性的名称，即便它不可复用。这使得其他开发者 (以及未来的你) 更容易专注在他们关心的代码上并搞清楚发生了什么。

- **更好的“拥抱变化”**

  任何能够命名的值都可能用在视图上。举个例子，我们可能打算展示一个信息，告诉用户他们存了多少钱；也可能打算计算税费，但是可能会分开展现，而不是作为总价的一部分。

  小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

###### 反例

```js
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

###### 好例子

```js
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

#### 带引号的 attribute 值<sup data-p="b">强烈推荐</sup>

**非空 HTML attribute 值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。**

在 HTML 中不带空格的 attribute 值是可以没有引号的，但这鼓励了大家在特征值里*不写*空格，导致可读性变差。

###### 反例

```html
<input type="text" />
```

```html
<AppSidebar :style={width:sidebarWidth+'px'}>
```

###### 好例子

```html
<input type="text" />
```

```html
<AppSidebar :style="{ width: sidebarWidth + 'px' }"></AppSidebar>
```

#### 指令缩写<sup data-p="b">强烈推荐</sup>

**指令缩写 (用 `:` 表示 `v-bind:`、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`) 应该要么都用要么都不用。**

###### 反例

```html
<input v-bind:value="newTodoText" :placeholder="newTodoInstructions" />
```

```html
<input v-on:input="onInput" @focus="onFocus" />
```

```html
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

###### 好例子

```html
<input :value="newTodoText" :placeholder="newTodoInstructions" />
```

```html
<input v-bind:value="newTodoText" v-bind:placeholder="newTodoInstructions" />
```

```html
<input @input="onInput" @focus="onFocus" />
```

```html
<input v-on:input="onInput" v-on:focus="onFocus" />
```

```html
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>

<template v-slot:footer>
  <p>Here's some contact info</p>
</template>
```

```html
<template #header>
  <h1>Here might be a page title</h1>
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

### 优先级 C 的规则：推荐 (将选择和认知成本最小化)

#### 组件/实例的选项的顺序<sup data-p="c">推荐</sup>

**组件/实例的选项应该有统一的顺序。**

这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新 property 应该放到哪里。

1. **副作用** (触发组件外的影响)

- `el`

2. **全局感知** (要求组件以外的知识)

- `name`
- `parent`

3. **组件类型** (更改组件的类型)

- `functional`

4. **模板修改器** (改变模板的编译方式)

- `delimiters`
- `comments`

5. **模板依赖** (模板内使用的资源)

- `components`
- `directives`
- `filters`

6. **组合** (向选项里合并 property)

- `extends`
- `mixins`

7. **接口** (组件的接口)

- `inheritAttrs`
- `model`
- `props`/`propsData`

8. **本地状态** (本地的响应式 property)

- `data`
- `computed`

9. **事件** (通过响应式事件触发的回调)

- `watch`
- 生命周期钩子 (按照它们被调用的顺序)
  - `beforeCreate`
  - `created`
  - `beforeMount`
  - `mounted`
  - `beforeUpdate`
  - `updated`
  - `activated`
  - `deactivated`
  - `beforeDestroy`
  - `destroyed`

10. **非响应式的 property** (不依赖响应系统的实例 property)

- `methods`

11. **渲染** (组件输出的声明式描述)

- `template`/`render`
- `renderError`

#### 元素 attribute 的顺序<sup data-p="c">推荐</sup>

**元素 (包括组件) 的 attribute 应该有统一的顺序。**

这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义 attribute 和指令应该放到哪里。

1. **定义** (提供组件的选项)

- `is`

2. **列表渲染** (创建多个变化的相同元素)

- `v-for`

3. **条件渲染** (元素是否渲染/显示)

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`
- `v-cloak`

4. **渲染方式** (改变元素的渲染方式)

- `v-pre`
- `v-once`

5. **全局感知** (需要超越组件的知识)

- `id`

6. **唯一的 attribute** (需要唯一值的 attribute)

- `ref`
- `key`

7. **双向绑定** (把绑定和事件结合起来)

- `v-model`

8. **其它 attribute** (所有普通的绑定或未绑定的 attribute)

9. **事件** (组件事件监听器)

- `v-on`

10. **内容** (覆写元素的内容)

- `v-html`
- `v-text`

#### 组件/实例选项中的空行<sup data-p="c">推荐</sup>

**你可能想在多个 property 之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。**

当你的组件开始觉得密集或难以阅读时，在多个 property 之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航。

###### 好例子

```js
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

```js
// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```

#### 单文件组件的顶级元素的顺序<sup data-p="c">推荐</sup>

**[单文件组件](../guide/single-file-components.html)应该总是让 `<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。**

###### 反例

```html
<style>
  /* ... */
</style>
<script>
  /* ... */
</script>
<template>...</template>
```

```html
<!-- ComponentA.vue -->
<script>
  /* ... */
</script>
<template>...</template>
<style>
  /* ... */
</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>
  /* ... */
</script>
<style>
  /* ... */
</style>
```

###### 好例子

```html
<!-- ComponentA.vue -->
<script>
  /* ... */
</script>
<template>...</template>
<style>
  /* ... */
</style>

<!-- ComponentB.vue -->
<script>
  /* ... */
</script>
<template>...</template>
<style>
  /* ... */
</style>
```

```html
<!-- ComponentA.vue -->
<template>...</template>
<script>
  /* ... */
</script>
<style>
  /* ... */
</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>
  /* ... */
</script>
<style>
  /* ... */
</style>
```

### 优先级 D 的规则：谨慎使用 (有潜在危险的模式)

#### 没有在 `v-if`/`v-else-if`/`v-else` 中使用 `key` <sup data-p="d">谨慎使用</sup>

**如果一组 `v-if` + `v-else` 的元素类型相同，最好使用 `key` (比如两个 `<div>` 元素)。**

默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现[意料之外的结果](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-priority-d-rules-unintended-consequences)。

###### 反例

```html
<div v-if="error">
  错误：{{ error }}
</div>
<div v-else>
  {{ results }}
</div>
```

###### 好例子

```html
<div v-if="error" key="search-status">
  错误：{{ error }}
</div>
<div v-else key="search-results">
  {{ results }}
</div>
```

#### `scoped` 中的元素选择器<sup data-p="d">谨慎使用</sup>

**元素选择器应该避免在 `scoped` 中出现。**

在 `scoped` 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

为了给样式设置作用域，Vue 会为元素添加一个独一无二的 attribute，例如 `data-v-f3f3eg9`。然后修改选择器，使得在匹配选择器的元素中，只有带这个 attribute 才会真正生效 (比如 `button[data-v-f3f3eg9]`)。

问题在于大量的[元素和 attribute 组合的选择器](http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=a%5Bhref%5D&body=background%3A+%23CFD&ne=1000) (比如 `button[data-v-f3f3eg9]`) 会比[类和 attribute 组合的选择器](http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=.class%5Bhref%5D&body=background%3A+%23CFD&ne=1000)慢，所以应该尽可能选用类选择器。

###### 反例

```html
<template>
  <button>X</button>
</template>

<style scoped>
  button {
    background-color: red;
  }
</style>
```

###### 好例子

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
  .btn-close {
    background-color: red;
  }
</style>
```

#### 隐性的父子组件通信<sup data-p="d">谨慎使用</sup>

**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 `this.$parent` 或变更 prop。**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 `this.$parent` 能够简化两个深度耦合的组件。

问题在于，这种做法在很多*简单*的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。

###### 反例

```js
Vue.component("TodoItem", {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  template: '<input v-model="todo.text">',
});
```

```js
Vue.component("TodoItem", {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTodo() {
      var vm = this;
      vm.$parent.todos = vm.$parent.todos.filter(function(todo) {
        return todo.id !== vm.todo.id;
      });
    },
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="removeTodo">
        X
      </button>
    </span>
  `,
});
```

###### 好例子

```js
Vue.component("TodoItem", {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  template: `
    <input
      :value="todo.text"
      @input="$emit('input', $event.target.value)"
    >
  `,
});
```

```js
Vue.component("TodoItem", {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="$emit('delete')">
        X
      </button>
    </span>
  `,
});
```

#### 非 Flux 的全局状态管理<sup data-p="d">谨慎使用</sup>

**应该优先通过 [Vuex](https://github.com/vuejs/vuex) 管理全局状态，而不是通过 `this.$root` 或一个全局事件总线。**

通过 `this.$root` 和/或[全局事件总线](../guide/migration.html#dispatch-和-broadcast-替换)管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。

Vuex 是 Vue 的[官方类 flux 实现](../guide/state-management.html#类-Flux-状态管理的官方实现)，其提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。它很好地集成在了 Vue 生态系统之中 (包括完整的 [Vue DevTools](../guide/installation.html#Vue-Devtools) 支持)。

###### 反例

```js
// main.js
new Vue({
  data: {
    todos: [],
  },
  created: function() {
    this.$on("remove-todo", this.removeTodo);
  },
  methods: {
    removeTodo: function(todo) {
      var todoIdToRemove = todo.id;
      this.todos = this.todos.filter(function(todo) {
        return todo.id !== todoIdToRemove;
      });
    },
  },
});
```

###### 好例子

```js
// store/modules/todos.js
export default {
  state: {
    list: [],
  },
  mutations: {
    REMOVE_TODO(state, todoId) {
      state.list = state.list.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    removeTodo({ commit, state }, todo) {
      commit("REMOVE_TODO", todo.id);
    },
  },
};
```

```html
<!-- TodoItem.vue -->
<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo(todo)">
      X
    </button>
  </span>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
    methods: mapActions(["removeTodo"]),
  };
</script>
```

```js
<script>
(function () {
  var enforcementTypes = {
    none: '<span title="这一规则无法强制执行">自律</span>',
    runtime: '运行时错误',
    linter: '<a href="https://github.com/vuejs/eslint-plugin-vue#eslint-plugin-vue" target="_blank" rel="noopener noreferrer">plugin:vue/recommended</a>'
  }
  Vue.component('sg-enforcement', {
    template: '\
      <span>\
        <strong>强制执行</strong>:\
        <span class="style-rule-tag" v-html="humanType"/>\
      </span>\
    ',
    props: {
      type: {
        type: String,
        required: true,
        validate: function (value) {
          Object.keys(enforcementTypes).indexOf(value) !== -1
        }
      }
    },
    computed: {
      humanType: function () {
        return enforcementTypes[this.type]
      }
    }
  })

  // new Vue({
  //  el: '#main'
  // })
})()
</script>
```
