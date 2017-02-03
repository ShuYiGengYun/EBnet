/**
 * Created by Shinelon on 2017/2/2.
 */
$(function () {
    $(".color_change ul li").click(function () {
        /*改变颜色文字*/
       var colorText=$(this).find("img").attr("alt");
       $(this).parent().siblings("strong").text(colorText);

       /*改变图片颜色*/
       var imgSrc = $(this).find("img").attr("src");
       var i = imgSrc.lastIndexOf(".");
       var unit = imgSrc.substring(i);
            imgSrc = imgSrc.substring(0,i);
        var imgSrc_small=imgSrc+"_one_small"+unit;
        var imgSrc_big =imgSrc+"_one_big"+unit;
        $("#bigImg").attr("src",imgSrc_small);
        $("#thickImg").attr("href",imgSrc_big);

        var newImageSrc=imgSrc.replace("images/pro_img/","");
        $(".imageList li").hide();
        $(".imgList_"+newImageSrc).show();
        $(".imgList_"+newImageSrc+" a").eq(0).click();
    });
});