/*
 * @Author: XiaoMing
 * @Date: 2020-04-29 22:54:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-04 23:31:24
 */

window.addEventListener('load', function () {
    //焦点图 start
    var focus = document.querySelector('.focus');
    var focusImg = document.querySelector('.focusImg');
    var focusPrev = document.querySelector('.focus_Prev');
    var focusNext = document.querySelector('.focus_next');
    var focusFlag = true;//焦点图节流阀
    var focusTimer = null;//焦点图轮播定时器
    var imgNum = 0;    //控制焦点图切换
    var IndexNum = 0;    //控制焦点图小圆点切换


    //显示和隐藏左右切图按钮
    focus.addEventListener('mouseenter', function () {
        focusPrev.style.display = 'block';
        focusNext.style.display = 'block';
        clearInterval(focusTimer);
        focusTimer = null;//清空定时器
    });
    focus.addEventListener('mouseleave', function () {
        focusPrev.style.display = 'none';
        focusNext.style.display = 'none';
        //启动定时器
        focusTimer = setInterval(function () {
            //手动调用下一张的点击事件
            focusNext.click();
        }, 3000);

    })


    //动态生成小圆点
    var focusUl = document.createElement('ol');
    for (let i = 0; i < focusImg.children.length; i++) {
        let li = document.createElement('li');
        //给li设置一个自定义属性，用于小圆圈切换图片
        li.setAttribute('data-index', i);
        let span = document.createElement('span');
        li.appendChild(span);
        li.classList.add('focus_items');
        focusUl.appendChild(li);
    }
    focusUl.children[0].children[0].style.backgroundColor = '#c81623';
    focusUl.classList.add('focus_index');
    focus.appendChild(focusUl);
    //点击小圆圈跳到指定的图片
    focusUl.addEventListener('click', function (e) {
        var index = 0;
        for (let i = 0; i < focusUl.children.length; i++) {
            focusUl.children[i].children[0].style.backgroundColor = '#fff';
        }
        if (e.target.nodeName == 'SPAN') {
            e.target.style.backgroundColor = '#c81623';
            index = e.target.parentNode.getAttribute('data-index');
        } else if (e.target.nodeName == 'LI') {
            e.target.children[0].style.backgroundColor = '#c81623';
            index = e.target.getAttribute('data-index');
        }
        //把点击当前小圆点的索引 赋值给 图片的索引  和 小圆点的索引
        imgNum = IndexNum = index;
        animation(focusImg, -index * focus.offsetWidth);
    })

    //克隆第一张焦点图
    var firstImg = focusImg.children[0].cloneNode(true);
    focusImg.appendChild(firstImg);

    //图片切换
    //上一张
    focusPrev.addEventListener('click', function () {
        if (focusFlag) {//判断节流阀是否打开
            focusFlag = false;//关闭节流阀

            if (imgNum == 0) {
                imgNum = focusImg.children.length - 1;
                focusImg.style.left = -imgNum * focus.offsetWidth + 'px';
            }
            imgNum--;
            animation(focusImg, -imgNum * focus.offsetWidth, function () {
                focusFlag = true;//回调函数。当动画结束后，打开节流阀。避免用户连续点击
            });//调用animation.js的动画函数

            IndexNum--;
            IndexNum = IndexNum < 0 ? focusUl.children.length - 1 : IndexNum;

            circleChange();//调用函数
        }
    });

    //下一张
    focusNext.addEventListener('click', function () {
        if (focusFlag) {//判断节流阀是否打开
            focusFlag = false;//关闭节流阀

            if (imgNum == focusImg.children.length - 1) {
                focusImg.style.left = 0;
                imgNum = 0;
            }

            imgNum++;
            animation(focusImg, -imgNum * focus.offsetWidth, function () {
                focusFlag = true;//回调函数。当动画结束后，打开节流阀。避免用户连续点击
            });//调用animation.js的动画函数

            IndexNum++;
            IndexNum = IndexNum == focusUl.children.length ? IndexNum = 0 : IndexNum;

            circleChange();//调用函数
        }

    });

    //自动播放下一站图片
    focusTimer = setInterval(function () {
        //手动调用下一张的点击事件
        focusNext.click();
    }, 3000)
    //焦点图模块 END


    //左侧边栏
    var sidebarLeft = document.querySelector('.sidebar_left');
    var main = document.querySelector('.main');
    var mainTop = main.offsetTop;   //获取main距离浏览器顶部的top值
    var sidebarLeftTop = sidebarLeft.offsetTop - mainTop;//等于sidebarLeft距离main顶部的值
    pageScroll()//设置电梯导航的位置
    //页面滚动事件
    document.addEventListener('scroll', pageScroll);

    //电梯导航
    $('.sidebar_left li').click(function () {
        var current = $('.floor .w').eq($(this).index()).offset().top;
        $('body, html').stop().animate({
            scrollTop: current
        });
        $('.sidebar_left li a').removeClass('current');
        $('.sidebar_left li').eq($(this).index()).children(0).addClass('current');
    });

    //小圆点改变调用函数
    function circleChange() {
        for (let i = 0; i < focusUl.children.length; i++) {
            focusUl.children[i].children[0].style.backgroundColor = '#fff';
        }
        focusUl.children[IndexNum].children[0].style.backgroundColor = '#c81623'
    }

    //页面滚动调用函数
    function pageScroll() {
        //window.pageYOffset:获取页面被卷去的高度
        if (window.pageYOffset >= mainTop) {
            sidebarLeft.style.position = 'fixed'
            sidebarLeft.style.top = sidebarLeftTop + 'px';
        } else {
            sidebarLeft.style.position = 'absolute'
            sidebarLeft.style.top = '50%';
        }
    }
})
