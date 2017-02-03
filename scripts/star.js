/**
 * Created by Shinelon on 2017/2/2.
 */
$(function () {
    $(".pro-rating .rating li a").click(function () {
        alert("您给此商品的评论是:"+this.title);
        var className=$(this).parent("li").attr("class");
        var cls = className+"star";
        $(this).parent().parent(".rating").removeClass("onestar twostar threestar fourstar fivestar").addClass(cls);
    });
});