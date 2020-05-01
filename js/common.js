/*
 * @Author: XiaoMing
 * @Date: 2020-04-30 10:38:55 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-01 16:40:21
 */

window.addEventListener('load', function () {
    //右边栏
    var sidebarright = document.querySelector('.sidebar_right');
    var like = document.querySelector('.like');
    var likeTop = like.offsetTop;

    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= likeTop) {
            sidebarright.style.display = 'block';
        } else {
            sidebarright.style.display = 'none';
        }

    })

    //返回顶部
    var goTop = document.querySelector('#goTop');
    goTop.addEventListener('click', function () {
        animation(window, 0);
    })

    //返回顶部的动画函数
    function animation(obj, target, callback) {
        //先把原来的定时器清除，保证一个元素只有一个定时器
        clearInterval(obj.timer)
        //给不同的元素添加不同名称的定时器
        obj.timer = setInterval(function () {
            if (window.pageYOffset == target) {
                clearInterval(obj.timer)
                //如果有传回调函数就执行，否则就不执行
                callback && callback();
            } else {
                var step = (target - window.pageYOffset) / 10
                //设置步长：(目标值 - 现在的值) / 10 算出来的值要去掉小数(向上取整)
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                // obj.style.left = obj.pageYOffset + step + 'px'
                window.scroll(target, window.pageYOffset + step)
            }
        }, 15)
    }
})