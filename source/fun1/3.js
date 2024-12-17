// 获取所有 .item 元素
let items = document.querySelectorAll('.item');

// 设置选中态样式
function setActive(event) {
    // 如果当前项没有被展开，阻止跳转，展开该项
    if (!this.classList.contains('active')) {
        event.preventDefault();  // 阻止跳转
        // 遍历所有 .item 元素，移除 active 样式
        items.forEach((item) => {
            item.classList.remove('active');
        });
        // 为当前选中项添加 active 样式
        this.classList.add('active');
    } else {
        // 如果当前项已展开，则允许跳转
        window.location.href = this.href;
    }
}

// 为每个 .item 添加点击事件监听器
items.forEach(item => {
    item.addEventListener('click', setActive);
});

