让网站符合W3C标准

* 为页面添加正确的DOCTYPE
(1)过渡型（Transitional ）
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
(2)严格型（Strict ）
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
(3)框架型（Frameset ）
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
对于我们初级改善来说，只要选用过渡型的声明就可以了。它依然可以兼容你的表格布局、表现标识等，不至于让你觉得变化太大，难以掌握。
Tip:你懒得输入上面过渡型代码的话，可以访问http://www.macromedia.com/网站的首页，然后查看源代码，把head区同样的代码拷贝粘贴就可以了。

* 设定一个名字空间（Namespace）
直接在DOCTYPE声明后面添加如下代码：
<html XMLns="http://www.w3.org/1999/xhtml" >
一个namespace是收集元素类型和属性名字的一个详细的DTD，namespace声明允许你通过一个在线地址指向来识别你的namespace。只要照样输入代码就可以。

* 声明你的编码语言
为了被浏览器正确解释和通过标识校验，所有的XHTML文档都必须声明它们所使用的编码语言。代码如下：
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
这里声明的编码语言是简体中文GB2312，你如果需要制作繁体内容，可以定义为BIG5。

* 用小写字母书写所有的标签 
XML对大小写是敏感的，所以，XHTML也是大小写有区别的。所有的XHTML元素和属性的名字都必须使用小写。否则你的文档将被W3C校验认为是无效的。例如下面的代码是不正确的：
<TITLE>公司简介</TITLE>
正确的写法是：
<title>公司简介</title> 同样的，<P>改成<p>，<B>改成<b>等等。这步转换很简单。

* 为图片添加 alt 属性
为所有图片添加alt属性。alt属性指定了当图片不能显示的时候就显示供替换文本，这样做对正常用户可有可无，但对纯文本浏览器和使用屏幕阅读机的用户来说是至关重要的。只有添加了alt属性，代码才会被W3C正确性校验通过。注意的是我们要添加有意义的alt属性，象下面这样的写法毫无意义：
<img src="logo_unc_120x30.gif" alt="logo_unc_120x30.gif">
正确的写法：
<img src="logo_unc_120x30.gif" alt="UNC公司标志，点击返回首页">

* 给所有属性值加引号
在HTML中，你可以不需要给属性值加引号，但是在XHTML中，它们必须被加引号。
例：height="100"，而不能是height=100。


* 关闭所有的标签
在XHTML中，每一个打开的标签都必须关闭。就象这样：
<p>每一个打开的标签都必须关闭。</p> <b>HTML可以接受不关闭的标，XHTML就不可以。</b>这个规则可以避免HTML的混乱和麻烦。举例来说：如果你不关闭图像标签，在一些浏览器中就可能出现CSS显示问题。用这种方法能确保页面和你设计的一样显示。需要说明的是：空标签也要关闭，在标签尾部使用一个正斜杠"/"来关闭它们自己。例如：<br /> <img src="webstandards.gif" />
经过上述七个规则处理后，页面就基本符合XHTML1.0的要求。但我们还需要校验一下是否真的符合标准了。我们可以利用W3C提供免费校验服务（http://validator.w3.org/）。发现错误后逐个修改。在后面的资源列表中我们也提供了其他校验服务和对校验进行指导的网址，可以作为W3C校验的补充。当最后通过了XHTML验证，恭喜你已经向网站标准迈出了一大步。不是想象中的那么难吧！


引用地址：http://www.programgo.com/article/95302927524/
