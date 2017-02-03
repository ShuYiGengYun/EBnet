/**
 * Created by Shinelon on 2017/1/28.
 */
$(function () {
    $("#jnBrandTab li a").click(function () {
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx =$("#jnBrandTab li a").index(this);
        showBrandList(idx);
    }).eq(0).click();
});

function showBrandList(index) {
    var $scrollObj =$("#jnBrandList");
    var rollWidth = $scrollObj.find("li").outerWidth();
    rollWidth = rollWidth*4;
    $scrollObj.stop(true,false).animate({left:-rollWidth*index},1000);
}