/*
 * @Author: XiaoMing
 * @Date: 2020-04-29 22:54:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-30 17:33:20
 */

window.addEventListener('load', function () {
    //焦点图 start
    var focus = document.querySelector('.focus');
    var focusImg = document.querySelector('.focusImg');
    var focusPrev = document.querySelector('.focus_Prev');
    var focusNext = document.querySelector('.focus_next');

    //显示和隐藏左右切图按钮
    focus.addEventListener('mouseenter', function () {
        focusPrev.style.display = 'block';
        focusNext.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function () {
        focusPrev.style.display = 'none';
        focusNext.style.display = 'none';
    })


    //动态生成小圆点
    var focusUl = document.createElement('ol');
    for (let i = 0; i < focusImg.children.length; i++) {
        let li = document.createElement('li');
        li.classList.add('focus_index_item');
        focusUl.appendChild(li);
    }
    focusUl.classList.add('focus_index');
    focus.appendChild(focusUl);
    focusUl.addEventListener('click', function (e) {
        for (let i = 0; i < focusUl.children.length; i++) {
            focusUl.children[i].className = 'focus_index_item';
        }
        e.target.classList.add('current');
    })


    //图片切换
    focusPrev.addEventListener('click', function () {

    });

    focusNext.addEventListener('click', function () {

    });
    //焦点图模块 END

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
    });
})
