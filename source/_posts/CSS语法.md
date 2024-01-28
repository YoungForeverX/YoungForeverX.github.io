---
layout: title
title: CSS语法
date: 2023-11-26 11:15:40
cover: http://cdn.youngforever.fun/fsIm8FGl4QnRSLr.jpg
categories: 前端
tags:
- CSS
- 前端
---

## 伪类结构选择器

**E:first-child 选择器 :** E 表示 HTML 标签类型 , 该选择器 选择 匹配的父容器 中的 第一个 E 类型标签 子元素 ;

```css
 ul li:first-child {
            /* 结构伪类选择器 选择 ul 父容器下的 第一个 li 子元素 */
            background-color: aqua;
        }
```

**E:last-child 选择器 :** 该选择器 选择 匹配的父容器 中的 最后一个 E 类型标签 子元素 ;

```css
 ul li:last-child {
            /* 结构伪类选择器 选择 ul 父容器下的 最后一个 li 子元素 */
            background-color: pink;
        }
```

**E:nth-child(n) 选择器 :** 该选择器 选择 匹配的父容器 中的 第 n 个 E 类型标签 子元素 ;

- **E:nth-child(n) 选择器 缺陷 :** 如果 父容器 中的子元素类型不同 , 那么使用 E:nth-child(n) 选择器 选择标签 , 必须精准的指出要选择的子元素的索引和类型 , 设置错误 , 则无法选择出想要的标签 ;

```css
 ul li:nth-child(2) {
            /* 结构伪类选择器 选择 ul 父容器下的 第二个 li 子元素 */
            background-color: green;
        }
```



## 伪元素选择器

**CSS3 伪元素选择器 :**

- **::before 选择符 :** 在 指定的标签元素内部的 前面 插入内容 ;
- **::after 选择符 :** 在指定的标签元素内部的 后面 插入内容 ;

**CSS3 伪元素选择器注意事项 :**

·**content 属性 :** 上述两个选择器**必须设置 content 属性** 

·**元素类型 :** 上述两个选择器添加的元素是**行内元素** ，

如果要为其配置宽高 , 需要 将显示模式 display 转为**块级元素 block** 或 **行内块元素 inline-block**

·**伪元素本质 :** 在 dom 中看不到插入的元素 ;

·**权重 :** 伪元素选择器 的权重 与 标签选择器 权重相同 , 权重为 1 ;

```css
h2::after {
  	content: url(icon.png);
	}
```

**区分 伪元素选择器 与 伪类选择器 :**

- **伪类选择器 有一个冒号** , 如 : `a:hover` 表示鼠标经过 a 标签上的样式 ;
- **伪元素选择器 有两个冒号 ;**



## 盒子模型

### 边距

·内容区域：`width & height`

·内边距：`padding`（出现在内容与盒子边缘之间，用于拉开内容与盒子边界的间距）

·边框线：`border`

·外边距：`margin`（出现在盒子外面，用来拉开盒子与盒子的间距）

其中padding和margin只要给xxpx，表示距离就行，但border需要给三个参数，例如：border: 2px solid blue;

其中第二个参数包括 `solid`（实线）、`dashed`（虚线）、`dotted`（点线）、`double`（双线）等多种样式。

当我们为盒子加padding/border后，会撑大盒子，如何解决呢，方法有两种

·**手动做减法**，减掉border/padding的尺寸

·内减模式，**box-sizing：border-box**

### 清除默认样式

```css
*{
	margin: 0;
	padding: 0;
    box-sizing: border-box;
}
```

### 元素溢出

属性名：`overflow`

| 属性值 | 效果                                   |
| ------ | -------------------------------------- |
| hidden | 溢出隐藏                               |
| scroll | 溢出滚动（无论是否溢出，都显示滚动条） |
| auto   | 溢出滚动（溢出才显示滚动条）           |

 ### 盒子塌陷问题

父子级的标签，子级的添加上外边距会产生塌陷问题，导致父级一起向下移动。

解决办法：

·取消子级margin，改用父级padding

·父级设置overflow:hidden

·父级设置border-top

### display

在CSS中`display`属性表示"**显示框类型**"，即不同的[盒模型](https://so.csdn.net/so/search?q=盒模型&spm=1001.2101.3001.7020)。

`inline`:可以把块级盒子转成内联盒子。

`block`:可以把内联盒子转换为块级盒子。

```css
.box1{
       	display: block;
     }
.box2{
       	display: inline;
     }

```

### 行内元素垂直内外边距的修改

通过对行内元素盒子（比如`span`）的`margin/padding`修改无法垂直内外边距。

如果需要修改内外边距，可以给行内元素添加`line-height`，及设置行高来改变。

### 圆角

eg : `border-radius:10px;`

也可以写四个值，从左上开始顺时针转。。

#### 常见应用-正圆形状

给正方形的盒子设置圆角属性值为宽高的一半/50%

```css
img{
	height: 100px;
    width: 100px;
    background-color: blue;
    border-radius: 50%;
}
```

#### 常见应用-胶囊形状

给长方形盒子设置圆角属性为盒子高度的一半（这里不能写50%）

```css
img{
	height: 100px;
    width: 200px;
    background-color: blue;
    border-radius: 50px;
}
```

### 盒子模型-阴影

属性名：`box-shadow`

属性值：x轴偏移量，y轴偏移量，模糊半径，扩散半径，颜色，内外阴影

```css
box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.5);
```

### 盒子中的文字水平垂直居中

```css
.div{
		height: 100px;
		width: 100px;
		background-color: aqua;
		text-align: center;
		line-height: 100px;
     }
```

`text-align: center;`

`line-height: 100px;`(这里的100px指的是盒子高度)

## Flex布局

### 简介

Flex 是 `Flexible Box` 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。布局的传统解决方案，基于盒模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。而Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持。任何一个容器都可以指定为 Flex 布局。

### 关于flex弹性盒模型

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。对于某个元素只要声明了display: flex;，那么这个元素就成为了弹性容器，具有flex弹性布局的特性。

### flex盒模型特点：

每个弹性容器都有两根轴：主轴和交叉轴，两轴之间成90度关系。注意：水平的不一定就是主轴。
每根轴都有起点和终点，这对于元素的对齐非常重要。
弹性容器中的所有子元素称为<弹性元素>，**弹性元素永远沿主轴排列**。
弹性元素也可以通过display:flex设置为另一个弹性容器，形成嵌套关系。因此一个元素既可以是弹性容器也可以是弹性元素。

### 容器属性

#### flex-direction

`flex-direction`（控制主控方向），主轴的方向处理
flex布局是一种一维布局模型，一次只能处理一个维度（一行或者一列）上的元素布局。flex布局大部分的属性都是作用于主轴的，在交叉轴上很多时候只能被动地变化。
可以在弹性容器上通过flex-direction修改主轴的方向。如果主轴方向修改了，那么交叉轴就会相应地旋转90度，弹性元素的排列方式也会发生改变，因为弹性元素永远沿主轴排列。

flex-direction属性的取值（排列方向）
·row（默认）（水平方向）
·row-reverse（水平相反方向）
·**column（垂直方向）**,最常用，其他的基本用不上
·column-reverse（垂直相反方向）

### justify-content（主轴上的元素对齐）

·flex-start（默认，向左对齐）

·flex-end（向右对齐）

·center（居中）

·space-between（左右两端对齐，即左右两侧项目都紧贴容器，且项目之间间距相等）

·space-around（项目之间间距为左右两侧项目到容器间距的2倍）

·space-evenly（项目之间间距与项目与容器间距相等，相当于除去项目宽度，平均分配了剩余宽度作为项目左右margin）

### align-items（交叉轴的元素对齐）

用于控制项目在交叉轴排列方式，默认stretch即如果项目没设置高度，或高度为auto，则占满整个容器。

·flex-start（让项目在交叉轴紧贴容器顶部）

·flex-end（与flex-start相反）

·center（在交叉轴中心位置排列）

·baseline（让项目以第一行文字的基线为参照进行排列）

·stretch（默认）

### ***注意***
（1）常理来说justify-content与align-items默认分别处理项目主轴，交叉轴的对齐方式，但如果我们修改了flex-direction为column，它们处理的轴向会交换，也就是justify-content处理交叉轴，align-items处理主轴。
（2）通过给一个父元素设置justify-content:center;和align-items:center;可以使得其子元素垂直水平居中。

#### flex-wrap

用于控制主轴上的元素是否换行。

·`nowrap`（默认），不换行

·`wrap`，换行

## 定位

### relative(相对定位)

```css
div {
    position: relative;
	top: 100px;
	left: 200px;
}
```

`relative`的特点：

· 改变位置的参照物是自己原来的位置

· 不脱标，占位

· 标签显示模式特点不变（比如div是块级，加了relative后还是块级）

### absolute(绝对定位)

```css
.news {
	position: relative;
}
.new span {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
}
```

`absolute`的特点：

· 脱标，不占位

· 参照物，先找最近的已经定位的祖先元素，如果所有的祖先元素都没有定位，则参照浏览器可视区改位置

**子绝父相**，一般都整么用。

### 图片在页面居中

```css
img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    /*也可以用笨办法，通过改变margin外边距来调整图片位置
    margin-left: -(img的一半宽);
    margin-top: -(img的一半高);
    */
}
```

### fixed(固定定位)

```css
div{
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
}
```

特点：

· 脱标，不占位

· 参照物：浏览器窗口

· 显示模式特点：具备行内块特点

## 堆叠顺序——z-index

```css
div{
    position: absolute;
    width: 200px;
    height: 200px;
}
.box1{
    background-color: pink;
    z-index: 1;
}
.box2{
    background-color: blue;
    z-index: 2;
}
```

如果没有z-index属性，那么两个盒子谁在下面谁就在上层，如果加上了z-index属性，那么谁的z-index值大，谁就在上面。

## 字体图标(iconfont)

就是图标，但它的属性控制和文字是一样的。

## vertical-align(垂直对齐方式)

```css
vertical-align: top;		顶对齐
vertical-align: middle;		居中对齐
vertical-align: bottom;		底部对齐
```

### 解决图片和文字底部不对齐

·可以用vertical-align对图片进行底部对齐

·也可以把图片变成行内块

	## transition(过渡)

```css
img{
    width: 200px;
    height: 200px;
    transition: all 1s;
}
img:hover{
    width: 500px;
    height: 400px;
}
```







































