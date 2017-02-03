/**
 * Created by Shinelon on 2017/2/3.
 */
$(function () {
    $(".cart img").click(function () {
        var $product = $(".jnDetails");
        var pro_name = $product.find("h4").eq(0).text();
        var pro_color = $product.find(".color_change strong").text();
        var pro_price = $product.find(".pro_price strong").text();
        var pro_size = $(".pro-size").find("strong").text();
        var pro_num = $product.find("#num_sort").val();
        var dialog = "感谢您的购买。<div style='font-size: 12px;font-weight: 400;'>您购买的产品是："+pro_name+"；"
        +"尺寸是："+pro_size+"；"
        +"颜色是："+pro_color+"；"
        +"总数是："+pro_num+"；"
        +"总价是："+pro_price+"；"+"元。</div>";
        $("#jnDialogContent").html(dialog);
        $("#basic-dialog-ok").modal({
            height:200,
            width:300
        });
    });
});