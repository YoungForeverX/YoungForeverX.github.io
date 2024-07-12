---
layout: title
title: script中的defer和async
date: 2024-01-08 14:39:35
categories: 前端
cover: http://cdn.youngforever.fun/wallhaven-8586my.jpg
tags:
- HTML
- 前端
- js
---

## defer

`defer`特性告诉浏览器不要等待脚本。相反，浏览器将继续处理`HTML`，构建`DOM`。脚本会**在后台**下载，然后等`DOM`构建完成后，脚本才会执行。

带有`defer`特性：

```html
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 立即可见 -->
<p>...content after script...</p>
```

换句话说：

1. 具有`defer`特性的脚本不会阻塞页面。
2. 具有`defer`特性的脚本总是要等到`DOM`解析完毕，但在`DOMContentLoaded`事件之前执行。
   下面这个示例演示了上面所说的第二句话：

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...content after scripts...</p>
```

1. 页面内容立即显示。
2. `DOMContentLoaded`事件处理程序等待具有`defer`特性的脚本执行完成。它仅在脚本下载且执行结束后才会被触发。
   **具有`defer`特性的脚本保持其相对顺序，就像常规脚本一样。**

假设，我们有两个具有`defer`特性的脚本:`long.js`在前，`small.js`在后。

```html
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

浏览器扫描页面寻找脚本，然后并行下载它们，以提高性能。因此，在上面的示例中，两个脚本是并行下载的。`small.js`可能会先下载完成。

……但是，`defer`特性除了告诉浏览器**不要阻塞页面**之外，还可以确保脚本执行的相对顺序。因此，即使 `small.js`先加载完成，它也需要等到`long.js`执行结束才会被执行。

当我们需要先加载`JavaScript`库，然后再加载依赖于它的脚本时，这可能会很有用。

**`defer`特性仅适用于外部脚本**
**如果`<script>`脚本没有`src`，则会忽略`defer`特性。**

## async

`async`特性与`defer`有些类似。它也能够让脚本不阻塞页面。但是，在行为上二者有着重要的区别。

`async`特性意味着脚本是完全独立的：

1. 浏览器不会因`async`脚本而阻塞（与`defer`类似）。
2. 其他脚本不会等待`async`脚本加载完成，同样,`async`脚本也不会等待其他脚本。
3. DOMContentLoaded和异步脚本不会彼此等待：
   - `DOMContentLoaded`可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
   - `DOMContentLoaded`也可能发生在异步脚本之后（如果异步脚本很短，或者是从`HTTP`缓存中加载的）
     换句话说，`async`脚本会在后台加载，并在加载就绪时运行。`DOM`和其他脚本不会等待它们，它们也不会等待其它的东西。`async`脚本就是一个会在加载完成时执行的完全独立的脚本。就这么简单，现在明白了吧？

下面是一个类似于我们在讲`defer`时所看到的例子：`long.js`和`small.js`两个脚本，只是现在`defer`变成了`async`。

它们不会等待对方。先加载完成的（可能是`small.js`）—— 先执行：

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>
```

1. 页面内容立刻显示出来：加载写有`async`的脚本不会阻塞页面渲染。

2. `DOMContentLoaded`可能在`async`之前或之后触发，不能保证谁先谁后。

3. 较小的脚本`small.js`排在第二位，但可能会比`long.js`这个长脚本先加载完成，所以`small.js`会先执行。虽然，可能是`long.js`先加载完成，如果它被缓存了的话，那么它就会先执行。换句话说，异步脚本以**加载优先**的顺序执行。
   当我们将独立的第三方脚本集成到页面时，此时采用异步加载方式是非常棒的：**计数器**，**广告**等，因为它们不依赖于我们的脚本，我们的脚本也不应该等待它们：

   ```html
   <!-- Google Analytics 脚本通常是这样嵌入页面的 -->
   <script async src="https://google-analytics.com/analytics.js"></script>
   ```

## 原理拆解

![](https://npm.elemecdn.com/akilar-candyassets/image/deferasync.png)

可以看到，总的HTML加载时间，下载脚本的时间，执行脚本的时间是固定的。不同之处在于HTML阻塞的时间以及执行脚本的次序。

1. 不加任何`async`和`defer`的情况，页面总加载时间最长，是

   HTML加载时间+下载脚本时间+执行脚本时间

2. 加了`async`和`defer`的时间，**在加载HTML时间足够长的情况下**，所有静态资源总的加载时间都是

   HTML加载时间+执行脚本时间

然后，必须考虑到页面加载时间和脚本加载顺序，以及各个脚本直接存在的依赖关系。

从参考文档来看，

1. defer特性除了告诉浏览器不要阻塞页面之外，还可以确保脚本执行的相对顺序。

   - 这个很适合使用到Vue和jquery等js框架的js脚本，给它们添加`defer`属性以后，可以确保HTML加载完毕，且js下载完毕后，各个js脚本继续按照引入的顺序执行，从而确保不会因为依赖缺失而报错。

2. 其他脚本不会等待async脚本加载完成，同样,async脚本也不会等待其他脚本。

   - 这个适合使用**原生js**，**没有引用任何js框架**，自己**独立就能运行**，且**体量相对较小**的js脚本，随页面加载同步下载执行。

     











