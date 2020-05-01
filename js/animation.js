//缓动动画函数
function animation(obj, target, callback) {
    //先把原来的定时器清除，保证一个元素只有一个定时器
    clearInterval(obj.timer)
    //给不同的元素添加不同名称的定时器
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            //如果有传回调函数就执行，否则就不执行
            callback && callback();
        } else {
            var step = (target - obj.offsetLeft) / 10
            //设置步长：(目标值 - 现在的值) / 10 算出来的值要去掉小数(向上取整)
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 15)
}