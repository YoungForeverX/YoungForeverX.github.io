---
title: HTML基本语法
date: 2023-11-23 16:53:22
categories: HTML
cover: http://cdn.youngforever.fun/wyEb73u8oSR4Kd2.jpg
tags:
- HTML
- 前端
---

## HTML概念

Hypertext Markup Language：超文本标记语言。是用来制作网页的一种标记语言。

HTML是一种纯文本格式的文件，内部只能书写文字内容，不能添加图片、音频、视频等，但是在网页中给用户呈现的效果却包含了文字以外的内容，这种效果就是HTML区别于其他文件的不同之处。

## HTML基本结构

HTML中的代码在书写时，需要有一个固定的基本结构。

**基本骨架**

HTML文件最基本的四个标签，组成了网页的基本骨架，包括：html、head、title、body四组标签。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```

各个标签的功能：

**html标签：**

作用:定义HTML文件的根元素，表示整个的HTML文档，所有的标签要书写在html标签内部。

**head标签：**


作用：用于存放**title,meta,base,style,script,link**。内部用于对网页的设置，除了title内部的文字，其他标签都不显示在浏览器上。

注意在**head**标签中我们必须要设置的标签是`<title>`。

**title标签：**

·让页面拥有一个属于自己的标题。

·title中的关键字可以作为搜索引擎抓取时的关键字，提高SEO搜索引擎优化。 

·内部的内容会显示在搜索结果的标题部分。

·作为浏览器收藏夹默认的网页标题。 建议网页必须添加title标签内部内容，内容尽量精简，提取网页的关键字。

**body标签：**

作用：定义网页的主体部分，用于存放所有的HTML显示内容的标签p,h,a,b,u,i,s,em,del,ins,strong,img等。**<body>**内部的元素内容会显示在浏览器的窗口中。

附：head标签内部的标签功能表

| 标签   | 描述                               |
| ------ | ---------------------------------- |
| head   | 定义了文档的信息                   |
| title  | 定义了标题                         |
| base   | 定义了页面链接标签的默认链接地址   |
| link   | 定义了一个文档和外部资源之间的关系 |
| meta   | 定义了HTML文档中的元数据           |
| script | 定义了客户端的脚本文件             |
| style  | 定义了HTML文档的样式文件           |



## HTML元素

### p(一段文字)

```html
<p>这是一段文字内容</p>
```

### div(盒子)

```html
<div>div元素内部嵌套p元素</div>
```

### 文本格式化

HTML中有部分标签是用来对文字进行格式化显示设置的，比如粗体和斜体等。

但是在HTML4.0版本规范后，结构和样式进行了分离，HTML只负责搭建结构，css负责格式化样式，所以大部分文本格式化标签被废弃，但是在HTML4.01和XHTML1.0的transitional版本中依旧可以使用。

文本格式化的标签均为双标签，且为文本级标签，内部只能书写文字。

包含以下：

| 标签   | 描述                                      |
| ------ | ----------------------------------------- |
| b      | 定义粗体文本，bold                        |
| big    | 定义大号字                                |
| em     | 定义着重文字，emphasis，自带斜体效果      |
| i      | 定义斜体字，italic                        |
| small  | 定义小号字                                |
| strong | 定义加重语气，自带加粗效果                |
| sub    | 定义下标字                                |
| sup    | 定义上标字                                |
| ins    | 定义插入字，自带下划线效果                |
| del    | 定义删除字                                |
| s      | 不赞成使用，使用del代替                   |
| strike | 不赞成使用，使用del代替                   |
| u      | 定义下划线，不赞成使用，使用css中样式代替 |



### 图像

图像（image）由img标签进行定义。

img标签是单标签，本身相当于一个特殊的文本。

img标签的作用是在指定的位置插入一张图片。

在HTML文件，常用的插入图片的类型有：jpg、png、gif。

由img为单标签，所以它只能通过属性进行相关的图像设置。

img常用属性展示：

| 属性名 | 描述                                 |
| ------ | ------------------------------------ |
| src    | 表示图片的路径；                     |
| width  | 表示图片的宽度；                     |
| height | 表示图片的高度；                     |
| border | 边框属性；它的值可以设置边框的厚度； |
| title  | 设置提示文本；                       |
| alt    | 设置图像没有找到时候的替换文本；     |

**scr和路径**

如果需要插入一张图片到HTML中，img标签必须设置src属性。

src：全称source资源，属性值是图片查找的路径。

路径：指的是寻找文件时所历经的线路，在HTML中有特殊的书写语法。

路径分为相对路径和绝对路径，不同的方式出发点和参考位置不同，这个作者就不介绍了。

### 超级链接a

HTML 使用超级链接与网络上的另一个文档相连。超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

在HTML中使用a标签可以创建链接。

a全称anchor，锚的意思。

a为双标签。

作用：在指定的位置添加超级链接，提供用户进行点击和跳转。

a标签可以实现两种跳转：跨页面跳转、页面内跳转。实现跳转的方式需要用到一些标签属性。

**href属性**

href全称hypertext reference，超文本引用，用于规定链接的目标地址。

属性值：链接目标的路径地址。可以使用相对路径或网址形式的绝对路径。

**根据href属性值不同，a标签有不同的作用。**

·url地址：绝对路径时会自动跳转到对应的链接页面，相对路径时会点击自动下载文件并发生跳转，锚点url会跳转到页面的对应位置，可以用于页面滚动。

·#：单独的一个#符号，代表跳转到页面的top顶部，可以用于制作返回顶部。

·js调用：

```html
 <!-- 调用js的某个方法，不建议使用 -->
    <a href="javascript:js_method();"></a>

    <!-- 调用js的某个方法，不发生页面跳转 -->
    <a href="javascript:void(0);" onclick="js_method()">超级链接</a>
    <!-- 不发生页面跳转，建议使用 -->
    <a href="javascript:;">超级链接</a>
```

href属性非常重要，`<a>`标签要想实现点击跳转，必须设置该属性，拥有这个属性`<a>`标签在鼠标移上时才会显示一个小手指针状态。

书写方式如下：

```html
<a href="url">链接文本</a>
```

实例：

```html
<a href="http://www.baidu.com">百度</a>
<a href="index.html">首页文件</a>
```

点击以上两个链接分别跳转到百度、本地的同级index.html文件。

注意：链接文本不仅限于文字，也可以是图片或其他内容。

**target属性**

使用target 属性，可以定义被链接的文档在何处跳转显示。

属性值有两种：

_self：默认值，表示跳转的页面在当前窗口打开，不会打开新的窗口。

_blank：空白的，表示跳转的页面在新窗口打开。

```html
<a href="http://www.baidu.com" target="_blank">百度</a>
```

### 页面锚点跳转

这种跳转方式实现的是从某个位置跳转到同页面的另一个位置。

制作方法分为两个步骤，分别是设置锚点、添加链接。

**第一步：设置锚点**，也就是设置目标位置，有两种设置方式。

①在目标位置找到任意一个标签，给它添加**id属性**，id的属性值必须是唯一的。

id的属性值定义规则：必须以字母开头，后面可以有字母、数字、下划线和横线，区分大小写。

```html
<h2 id="abc">目标位置</h2>
```

②在目标位置添加一个空的`<a>`标签，只设置一个**name属性**，name属性值设置方式与id相同，也必须是唯一的。

```html
<a name="abc"></a>
```

其中，id和name的属性值可以自定义。

**第二步：链接到锚点**，在需要点击的位置设置`<a>`标签，给a的href属性设置属性值为#id属性值或者#加a的name属性值。

```html
<a href="#abc">点击文本</a>
```

### 列表

列表用于制作HTML中的一系列项目。

通常我们会将内容相关、结构相似、样式相近的内容使用列表结构进行搭建。

根据项目的内容不同，可以有三种语义的列表结构：无序列表、有序列表、定义列表。

**无序列表**

①作用：定义一个没有顺序的列表的结构、语义。

②无序列表需要两个标签参与，分别是<ul>和<li>。

ul：unordered list，表示定义一个无序列表的大结构。

li：list item，列表项，定义的是无序列表内的某一项。

③注意：<ul>内部只能嵌套<li>，<li>标签不能脱离<ul>单独书写。

快捷键：ul>li

```html
<ul>
	<li></li>
</ul>
```

④`<li>`标签是一个经典的容器级标签，内部可以放置任意内容，甚至可以放一组ul>li无序列表结构.

实例：

```html
	<h2>中国的古典四大名著</h2>
	<ul>
		<li>
			<h3>红楼梦</h3>
			<!-- 嵌套其他的无序列表 -->
			<ul>
				<li>林黛玉</li>
				<li>薛宝钗</li>
				<li>贾元春</li>
				<li>王熙凤</li>
			</ul>
		</li>
		<li>
			<h3>西游记</h3>
			<!-- 嵌套其他的无序列表 -->
			<ul>
				<li>孙悟空</li>
				<li>猪八戒</li>
				<li>沙和尚</li>
				<li>小白龙</li>
			</ul>
		</li>
		<li>
			<h3>水浒传</h3>
			<!-- 嵌套其他的无序列表 -->
			<ul>
				<li>宋江</li>
				<li>武松</li>
				<li>林冲</li>
				<li>鲁智深</li>
			</ul>
		</li>
		<li>
			<h3>三国演义</h3>
			<!-- 嵌套其他的无序列表 -->
			<ul>
				<li>刘备</li>
				<li>孙权</li>
				<li>曹操</li>
				<li>董卓</li>
			</ul>
		</li>
	</ul>

```

⑤无序列表的作用只是搭建列表结构，没有添加样式前缀的功能，样式是由css负责。

### 表单

HTML 表单用于搜集不同类型的用户输入，表单元素就是网页中提供用户进行输入或点击的小控件。

在HTML中，一个完整的表单通常由表单域、提示信息和表单控件（也称为表单元素）3个部分构成。

![](http://cdn.youngforever.fun/bxgoO8Ts4FHzj6l.png)

表单域：相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

提示信息：一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

表单控件：包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

**表单域**
HTML表单域使用`<form>`标签进行定义。

form标签是一个功能性标签，填写的表单信息要想正确的提交到后台服务器，必须放在一个form标签之内。

`<form>`标签为双标签，容器级标签。

| 属性名 | 属性值     | 描述                                        |
| ------ | ---------- | ------------------------------------------- |
| action | url        | 指定接收并处理表单数据的服务器程序的url地址 |
| method | get/post   | 用于设置表单数据的提交方式                  |
| name   | 自定义名称 | 规定表单的名称                              |

实例：

```html
<form action="xxx.php" method="post/get" name="stuMSG">
  	提示信息及表单控件书写位置
</form>
```

**表单元素**
**input标签**
input标签是最重要的一个表单元素。input标签为单标签，本身相当于一个特殊的文本。input标签需要通过标签属性实现各种功能。

其中，type属性的值不同，决定了input标签的形态不同。

input标签常用属性：

***`<input>`标签的type属性值为text。***

定义提供用户输入的单行文本的输入框，不能输入多行文字。

常用value属性定义默认的输入文字。

另外，提示语用placeholder属性表示

```html
<input type="text" value="默认输入文本" placeholder="请输入文本">
```

***`<input>`标签的type属性值为password。***

定义提供用户输入的密码框。

password字段中的字符会被做掩码处理（显示为星号或实心圆）。

```html
<input type="password">
```

***`<input>`标签的type属性值为radio。***

定义提供用户点击选择的单选框。

单选框一般都是成组出现，多个单选框组成一组选择的情况。

同一组单选框之间必须是互斥的关系，通过给同一组单选框都设置相同的name属性实现。

```html
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女
```

***`<input>`标签的type属性值为checkbox。***

定义提供用户点击选择的多选框。

复选框允许用户在有限数量的选项中选择零个或多个选项。

同一组复选框最好也设置相同的name属性。

```html
<input type="checkbox" name="hobby" /> 唱歌
<input type="checkbox" name="hobby" /> 代码
<input type="checkbox" name="hobby" /> 运动
```

注意：单选框和复选框都可以提前设置默认选中项。

`<input>`标签有一个**checked**属性，如果不设置表示默认没有选中。

属性值如果设置为"checked"，表示该项默认被选中。

在h5中可以直接书写checked属性名，不书写属性值，也可以实现选中效果。

***按钮***

`<input>`标签有四种形式的按钮：

| type   | 名称     | 特点                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| button | 普通按钮 | 没有任何特殊功能                                             |
| reset  | 重置按钮 | 将同一个form中填写的表单内容清空，恢复成默认                 |
| submit | 提交按钮 | 第一个作用是能将填写数据提交到form中指定的后台服务器，第二个作用是重置清空form中填写的信息 |
| image  | 图片按钮 | 默认为提交按钮的效果，使用的图片需要利用src属性查找正确路径  |

按钮上的文字需要使用value属性进行设置。如果是图片按钮的value，表示图片查找失败时的替换文本内容。

```html
<input type="button" value="普通按钮" />
<input type="reset" value="重置按钮" />
<input type="submit" value="提交按钮" />
<input type="image" src="bd_8.png" value="pic" />
```

注意：`<button>`元素的功能类似于`<input type="submit">`将填写数据提交到`<form>`中指定的后台服务器。

```html
<form action="data.php">
        <input type="text"><br>
        <input type="button" value="普通按钮">
        <button>button</button>

</form>
```

***文件上传：file***

定义文件上传按钮，可以提供用户选择本地文件进行上传服务器。

```html
<input type="file">
```

使用input的**multiple**属性，可以决定是否可以选择多个文件。

```html
<input type="file" multiple="multiple" />
```

如果文件上传的input同时设置**accept**属性，可以选择文件的MIME类型，多个MIME类型用英文逗号分开。

**文本域**`<textarea>`

文本域使用**`<textarea>`**标签定义，制作可以输入多行文本的区域。

rows：行，属性值是数字，数字是几表示文本框显示的最大行数，如果超过了行数，会被隐藏并且出现滚动条。

cols：列，属性值是数字，数字是几，表示在出现滚动条之后，每一行显示的最大字节数（一个汉字按2字节计算）。

文本域可以设置默认输入的文字，在双标签之间书写默认文字。

```html
<textarea cols="30" rows="10">默认输入文字</textarea>
```

**下拉菜单**

HTML中的下拉菜单提前设置一些选项，然后可以通过点击选择其中一项。

下拉菜单需要至少两个标签完成结构：`<select>` `<option>`

两个标签都是双标签，文本级标签。

关系：select>option*4

默认情况下，选中的是第一项。

```html
<select>
	<option>广州</option>
	<option>北京</option>
	<option>重庆</option>
	<option>上海</option>
</select>
```

下拉菜单可以通过给`<option>`标签设置selected属性，更改默认选中项。

如果想选中哪一项，给对应的`<option>`设置selected属性的属性值为selected。

```html
<option selected="selected">北京</option>
```

下拉菜单中如果选项变得复杂，可以将`<option>`进行分组管理。

可以使用 `<optgroup>` 标签对选项进行分组，`<optgroup>`是一个双标签。

关系：select>optgroup>option

`<optgroup>`可以设置一个label属性，表示给这一组选项添加一个标签名，分组标签`<optgroup>`是不能被点击选择的。

```html
<select>
	<optgroup label="国内">
		<option>广州</option>
		<option selected="selected">北京</option>
		<option>重庆</option>
		<option>上海</option>
	</optgroup>
	<optgroup label="国外">
		<option>纽约</option>
		<option>伦敦</option>
		<option>巴黎</option>
	</optgroup>
</select>
```

### HTML5

它是万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改。用于取代HTML4与XHTML的新一代标准版本，所以叫HTML5。

**HTML5新增语义化标签**

目的：掌握常用的布局标签。

以前制作的网页布局，我们基本用div来做。div就是一个普通的块级标签，对于搜索引擎来说，是没有语义的。

新增语义化标签：

- `<head>`头部标签
- `<nav>`导航标签
- `<main>`主体标签
- `<article>`独立的内容标签
- `<section>`区段标签
- `<aside>`侧边栏标签

**HTML5新增多媒体标签（音频和视频标签）**

多媒体标签包含两个：

- 音频：`<audio>`
- 视频：`<video>`

使用它们可以很方便的在页面中嵌入音频和视频，而不再去使用落后的flash和其他浏览器插件。

#### 音频

`<audio>`音频标签:

```html
<!-- h5中标签属性的属性名和属性值相同，那么可以省略属性值不写。 -->
<audio src="media/snow.mp3" controls></audio>
```

![](http://cdn.youngforever.fun/faEolT4PMHG7Cez.png)

#### 视频

`<video>`视频标签:

```html
<!-- 自动播放需要加muted属性来静音自动播放 -->
<video src="media/video.mp4" controls autoplay muted></video>
```

![](http://cdn.youngforever.fun/DJ27C9NergzdHYX.png)

#### 表单

**HTML5新增表单标签**

![](http://cdn.youngforever.fun/U83sAInkXbES6Tw.png)

```html
<form action="">
        姓名:<input type="text"><br>
        邮箱:<input type="email"><br>
        个人网址:<input type="url"><br>
        日期:<input type="date"><br>
        时间:<input type="time"><br>
        月份:<input type="month"><br>
        周:<input type="week"><br>
        年龄:<input type="number" max="50" min="10" step="2" value="12"><br>
        喜欢运动程度:<input type="range" max="100" min="0" step="5" value="25"><br>
        手机号码:<input type="tel"><br>
        搜索框:<input type="search"><br>
        颜色表单:<input type="color"><br>
            <input type="submit" value="提交">
</form>

```

![](http://cdn.youngforever.fun/kK6i5GyqRYD97lo.png)

`<datalist>`标签

- `<datalist>`标签规定了`<input>`元素可能的选项列表。

- `<datalist>`元素包含了一组`<option>`元素，这些元素表示预定义可选值，在`<input>`元素输入过程中，会自动响应`<option>`元素的值。

- 绑定`<input>`标签必须设置list属性，属性值等于`<datalist>`标签的id属性值。

  ```html
  城市:<input type="text" list="city-list">
          <datalist id="city-list">
              <option value="广州">gz</option>
              <option value="上海">sh</option>
              <option value="北京">bj</option>
              <option value="太原"></option>
          </datalist>
  ```

  ![](http://cdn.youngforever.fun/QacHgpBRl7nNVob.png)

  

  



