---
layout: title
title: CSS三大特性
categories: 前端
date: 2023-11-25 09:01:06
cover: http://cdn.youngforever.fun/MbzdoOWUKkVIc3p.jpg
tags:
- CSS
- 前端
---

## CSS的三大特性

CSS有三个非常重要的三个特性：层叠性、继承性、优先级。

### 1. 层叠性

相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个冲突的样式。层叠性主要解决样式冲突的问题。

层叠性原则：

- 样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式

- 样式不冲突，不会层叠

  ![](http://cdn.youngforever.fun/vLgJNXGHDcUmjp6.png)

### 2. 继承性

现实中的继承：我们继承了父亲的姓。

CSS中的继承：子标签会继承父标签的某些样式，如文本颜色和字号。简单的理解就是：子承父业。

- 恰当地使用继承可以简化代码，降低CSS样式的复杂性
- 子元素可以继承父元素的样式（text-，font-，line-这些元素开头的可以继承，以及color属性）
- ![](http://cdn.youngforever.fun/uBHRbAraZvxF267.png)

### 3. 优先级

当同一个元素指定多个选择器，就会有优先级的产生。

- 选择器相同，则执行层叠性
- 选择器不同，则根据选择器权重执行

选择器权重如下表所示。

![](http://cdn.youngforever.fun/kaYsG6KnQhLjH2q.png)

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .test {
            color: red;
        }
        div {
            color: pink!important;
        }
        #demo {
            color: green;
        }
    </style>
</head>
<body>
    <div class="test" id="demo" style="color: purple;">你笑起来真好看</div>
</body>
</html>

```

![](http://cdn.youngforever.fun/TeJxqmyz1d9E5iI.png)

优先级注意点：

·权重是有4组数字组成，但是不会有进位。

·可以理解为类选择器永远大于元素选择器，id选择器永远大于类选择器，以此类推。

·等级判断从左向右，如果某一位数值相同，则判断下一位数值。

·**行内样式>id选择器个数>类选择器个数>标签选择器个数**

继承的权重是0，如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是0。

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 父亲的权重是100 */
        #father {
            color: red!important;
        }
        /* p继承的权重为0 */
        /* 所以以后我们看标签到底执行哪个样式，就先看这个标签有没有直接被选出来 */
        p {
            color: pink;
        }
        /* a链接 浏览器默认制定了一个样式 蓝色的 有下划线 相当于 a {color: blue;} */
        a {
            color: green;
        }
    </style>
</head>
<body>
    <div id="father">
        <p>你还是很好看</p>
    </div>
    <a href="#">我是单独的样式</a>
</body>
</html>

```

![](http://cdn.youngforever.fun/6LuSgjcRVrsqTGO.png)

权重叠加：如果是复合选择器，则会有权重叠加，需要计算权重。

- div ulli------>0,0,0,3
- .nav ul li------>0,0,1,2
- a:hover-----—>0,0,1,1
- .nav a------>0,0,1,1

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 复合选择器会有权重叠加的问题 */
        /* 权重虽然会有叠加 但是永远不会有进位 */
        /* ul的权重是 0,0,0,1+0,0,0,1=0,0,0,2 */
        ul li {
            color: green;
        }
        /* li的权重0,0,0,1 */
        li {
            color: red;
        }
        /* nav li 权重 0,0,0,1+0,0,0,1=0,0,1,1 */
        .nav li {
            color: pink;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <li>大猪蹄子</li>
        <li>大肘子</li>
        <li>猪尾巴</li>
    </ul>
</body>
</html>

```

![](https://s2.loli.net/2023/11/25/eydm2vcHNLExpZl.png)



