$(function () {
    //预览图切换
    $('.previewPrev').click(function () {

    });
    $('.previewNext').click(function () {

    });
    //购买数量加减按钮
    $('.summaryadd').click(function () {
        let num = $('#choosenumber').val();
        $('#choosenumber').val(++num);
    });
    $('.summaryreduce').click(function () {
        let num = $('#choosenumber').val();
        if (num > 1) $('#choosenumber').val(--num);
    });
    //手机型号模块点击事件
    $('.summary_color dd,.summary_version dd,.summary_capacity dd,.summary_types dd').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
    });
});