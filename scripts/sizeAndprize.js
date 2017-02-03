/**
 * Created by Shinelon on 2017/2/2.
 */
$(function () {
    /*选择尺寸*/
    $(".jnDetails li.pro-size li").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        var sizeText =$(this).text();
        $(this).parent("ul").siblings("strong").text(sizeText);
    });
    /*数量和价格*/
    $(".pro_num #num_sort").change(function () {
            var price_value=$(this).val();
            var total_price=price_value*200;
            $(this).parents("li").siblings(".pro_price").find("strong").text(total_price);
    });




});