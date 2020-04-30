/*
 * @Author: XiaoMing
 * @Date: 2020-04-29 22:54:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-30 10:38:34
 */

//左侧边栏
var sidebarLeft = document.querySelector('.sidebar_left');
var main = document.querySelector('.main');
var mainTop = main.offsetTop;   //获取main距离浏览器顶部的top值
var sidebarLeftTop = sidebarLeft.offsetTop - mainTop;//等于sidebarLeft距离main顶部的值

//页面滚动事件
document.addEventListener('scroll', function () {
    //window.pageYOffset:获取页面被卷去的高度
    if (window.pageYOffset >= mainTop) {
        sidebarLeft.style.position = 'fixed'
        sidebarLeft.style.top = sidebarLeftTop + 'px';
    } else {
        sidebarLeft.style.position = 'absolute'
        sidebarLeft.style.top = '50%';
    }
})