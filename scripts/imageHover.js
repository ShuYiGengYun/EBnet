/**
 * Created by Shinelon on 2017/1/29.
 */


window.onload=function () {
    $("#jnBrandList li").hover(function () {
        var $img =$(this).find("img");
        var img_width=$img.width();
        var img_height=$img.height();
        var spanHtml = "<span style='position:absolute;top:0;left:5px;width:"+img_width+"px;height:"+img_height+"px;' class='imageMask'></span>";
        $(spanHtml).appendTo(this);
    },function () {
        $(this).children("span").eq(1).remove();
    })
};