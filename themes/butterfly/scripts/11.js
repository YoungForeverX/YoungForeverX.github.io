// 'use strict';
// const { filter } = hexo.extend;

// // 替换 CDN
// filter.register('before_generate', () => {
//     const { asset } = hexo.theme.config;
//     for (const name in asset) {
//         asset[name] = asset[name].replace('//cdn.jsdelivr.net/npm/', '//npm.elemecdn.com/');
//         //asset[name] = asset[name].replace('https://cdn.jsdelivr.net/gh/Zfour/Butterfly-double-row-display@1.00/cardlistpost.min.css', 'https://haorblog.adhy.cc/blogimg/cardlistpost.min.css');
//     }
//     //const { blog_cdn } = hexo.config.butterfly_article_double_row
//     //hexo.config.butterfly_article_double_row = blog_cdn.replace('https://cdn.jsdelivr.net/gh/Zfour/Butterfly-double-row-display@1.00/cardlistpost.min.css', 'https://haorblog.adhy.cc/blogimg/cardlistpost.min.css');
// }, 11);

// //通用注入器
// //name 注入插件名称
// //item_comfig 注入插件的配置名
// //temple_html_text 注入插件的挂载html模板(带有用户自定义的html/js/css)
// //js_text 注入js
// //css_text 注入css

// function common_injector(name, item_comfig, temple_html_text, js_text, css_text) {
//     if (item_comfig.enable) {
//         if (temple_html_text !== '') {
//             var layout_name;
//             var layout_type;
//             var layout_index = 0;
//             if (item_comfig.layout_id) {
//                 layout_name = item_comfig.layout_id;
//                 layout_type = 'id';
//             } else {
//                 layout_name = item_comfig.layout.name;
//                 layout_type = item_comfig.layout.type;
//                 layout_index = item_comfig.layout.index;
//             }
//             var get_layout
//             if (layout_type === 'class') {
//                 get_layout = `document.getElementsByClassName('${layout_name}')[${layout_index}]`
//             } else if (layout_type === 'id') {
//                 get_layout = `document.getElementById('${layout_name}')`
//             } else {
//                 get_layout = `document.getElementById('${layout_name}')`
//             }
//             var user_info_js = `<script data-pjax>function ${name}_injector_config(){
//                 var parent_div_git = ${get_layout};
//                 var item_html = '${temple_html_text}';
//                 console.log('已挂载${name}')
//                 // parent_div_git.innerHTML=item_html+parent_div_git.innerHTML // 无报错，但不影响使用(支持pjax跳转)
//                 parent_div_git.insertAdjacentHTML("afterbegin",item_html) // 有报错，但不影响使用(支持pjax跳转)
//             }if( ${get_layout} && location.pathname ==='${item_comfig.enable_page}'){

//             common_injector_config()
//         } </script>`
//         }
//         hexo.extend.injector.register('body_end', user_info_js, "default");
//         if (js_text !== '') {
//             hexo.extend.injector.register('body_end', js_text, "default");
//         }
//         if (css_text !== '') {
//             hexo.extend.injector.register('head_end', css_text, "default");
//         }
//     }
// }

