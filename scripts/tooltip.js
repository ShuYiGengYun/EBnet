/**
 * Created by Shinelon on 2017/1/30.
 */
$(function () {
    $("a.tooltip").mouseover(function (e) {
        this.myTitle=this.title;
        this.title="";
        var toolTip = "<div id='toolTip'>"+this.myTitle+"</div>";
        $("body").append(toolTip);
        $("#toolTip").css({
            left:e.pageX+20,
            top:e.pageY+10,
            position:"absolute",
            "backgroundColor":"orange"
        });

    }).mouseout(function () {
        this.title = this.myTitle;
        $("#toolTip").remove();
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY) + "px",
                "left": (e.pageX+10)  + "px"
            });
    });
});