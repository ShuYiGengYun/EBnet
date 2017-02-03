/**
 * Created by Shinelon on 2017/1/28.
 */
$(function () {
    $(".nav li").hover(function () {
        $(this).find(".jnNav").show();
    },function () {
        $(this).find(".jnNav").hide();
    })
});