/**
 * Created by Shinelon on 2017/1/28.
 */
$(function () {
    /*输入框状态开始*/
    $("#inputSearch").focus(function () {
        $(this).val("");
    }).blur(function () {
        $(this).val(this.defaultValue);
    }).keyup(function (e) {
        if(e.keyCode==13){
            alert("回车提交表单")
        }
    });
    /*输入框状态结束*/
});
