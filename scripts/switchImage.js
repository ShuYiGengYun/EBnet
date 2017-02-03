/**
 * Created by Shinelon on 2017/2/1.
 */
$(function () {
    $("#jnProitem ul.imageList li a").bind("click", function () {
        var imgSrc = $(this).find("img").attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(0,i);
        var img_big =unit+'_big'+'.jpg';
        $("#thickImg").attr("href",img_big);
    })
});