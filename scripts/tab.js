/**
 * Created by Shinelon on 2017/2/1.
 */
$(function () {
    $(".tab_menu li").click(function () {
       $(this).addClass("selected").siblings().removeClass("selected");
        var index =$(".tab_menu li").index(this);
        $(".tab_box>div").eq(index).css("display","block").siblings().css("display","none");
    }).eq(0).click();
});