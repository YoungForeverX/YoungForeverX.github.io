---
title: 为网站做了加速和评论
date: 2024-01-03 23:25:23
categories: 前端
cover: http://cdn.youngforever.fun/fj3.webp
tags:
- 博客魔改
- 前端
---

## 前言

事实上我的博客是已经做了cdn全站加速的，之前用的`vercel`，虽然服务器在日本，只需要跨个海，但速度依然不让我满意，后来搞了cdn全站加速，但cdn能加速的好像只有文字，图片等静态资源，或者说，我添加上去的元素，而系统自带的一些元素，如图标，aplayer插件等，依然无法加速。这让我很头疼。

## 正文

今天本来想把lol打到黄金的，我已经白银1了，理论上连赢三把直接上黄金，结果连输三把，差点掉到白银3。不玩游戏后，我想起了我的博客，我再去网上查的时候，竟然找到了为网站加速的方法，以及`hexo`的`butterfly`主题加载慢的本质原因。

butterfly有大量的依赖，那些依赖的源都是`jsdelivr`的，之前确实挺快的，但是现在`jsdelivr`的备案掉了，国内访问会被指向国外的节点，因为绕路的原因，所以速度缓慢。

### 解决办法

修改主题配置文件，找到cdn这一项改为 ：

```
CDN:
  # The CDN provider of internal scripts (主題內部 js 的 cdn 配置)
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # Dev version can only choose. ( dev版的主題只能設置為 local )
  internal_provider: local

  # The CDN provider of third party scripts (第三方 js 的 cdn 配置)
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # when set it to local, you need to install hexo-butterfly-extjs
  third_party_provider: cdnjs

  # Add version number to CDN, true or false
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format:

  option:
    # main_css:
    # main:
    # utils:
    # translate: https://cdn1.tianli0.top/npm/js-heo@1.0.6/translate/tw_cn.js
    # local_search:
    # algolia_js: 
    algolia_search_v4: https://cdn.staticfile.org/algoliasearch/4.14.3/algoliasearch-lite.umd.min.js
    instantsearch_v4: https://cdn.staticfile.org/instantsearch.js/4.49.2/instantsearch.production.min.js
    pjax: https://lib.baomitu.com/pjax/0.2.8/pjax.min.js
    # gitalk: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/gitalk/1.7.2/gitalk.min.js
    # gitalk_css: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/gitalk/1.7.2/gitalk.min.css
    # blueimp_md5:
    # valine: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/valine/1.4.16/Valine.min.js
    # disqusjs: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/disqusjs/1.3.0/disqus.js
    # disqusjs_css: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/disqusjs/1.3.0/disqusjs.css
    twikoo: https://cdn.staticfile.org/twikoo/1.6.8/twikoo.all.min.js
    # waline_js: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/waline/1.5.4/Waline.min.js
    # waline_css:
    sharejs: https://lib.baomitu.com/social-share.js/1.0.16/js/social-share.min.js
    sharejs_css: https://lib.baomitu.com/social-share.js/1.0.16/css/share.min.css
    # mathjax: https://cdn.staticfile.org/mathjax/3.2.2/es5/mml-chtml.min.js
    # katex: https://lib.baomitu.com/KaTeX/latest/katex.min.css
    # katex_copytex:
    # mermaid:
    # canvas_ribbon:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    lazyload: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vanilla-lazyload/17.3.1/lazyload.iife.min.js
    instantpage: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/instant.page/5.1.0/instantpage.min.js
    typed: https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/typed.js/2.0.12/typed.min.js
    # pangu:
    fancybox_css_v4: https://cdn.staticfile.org/fancyapps-ui/4.0.31/fancybox.min.css
    fancybox_v4: https://cdn.staticfile.org/fancyapps-ui/4.0.31/fancybox.umd.min.js
    # medium_zoom: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/medium-zoom/1.0.6/medium-zoom.min.js
    # snackbar_css: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/node-snackbar/0.1.16/snackbar.min.css
    # snackbar: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/node-snackbar/0.1.16/snackbar.min.js
    # activate_power_mode:
    # fireworks:
    # click_heart:
    # ClickShowText:
    fontawesomeV6: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css
    # flickr_justified_gallery_js: https://cdn.staticfile.org/flickr-justified-gallery/2.1.2/fjGallery.min.js
    # flickr_justified_gallery_css: https://cdn.staticfile.org/flickr-justified-gallery/2.1.2/fjGallery.min.css
    aplayer_css: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css
    aplayer_js: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js
    meting_js: https://cdn1.tianli0.top/npm/js-heo@1.0.12/metingjs/Meting.min.js
    # prismjs_js: https://cdn1.tianli0.top/npm/prismjs@1.1.0/prism.js
    # prismjs_lineNumber_js: https://cdn1.tianli0.top/npm/prismjs/plugins/line-numbers/prism-line-numbers.min.js
    # prismjs_autoloader: https://cdn1.tianli0.top/npm/prismjs/plugins/autoloader/prism-autoloader.min.js
```

### 评论

哦，我都忘了还要写评论，评论这个就是twikoo，我把官方文档放这吧，反正我就是照着官方文档搭的。

https://twikoo.js.org/intro.html









