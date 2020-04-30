/*
 * @Author: XiaoMing
 * @Date: 2020-04-30 10:38:55 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-30 14:51:27
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
})
