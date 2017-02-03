/**
 * Created by Shinelon on 2017/1/31.
 */
$(function () {
    $(".jqzoom").jqzoom({
        zoomType: 'standard',
        lens:true,
        preloadImages: false,
        alwaysOn:false,
        zoomWidth: 340,
        zoomHeight: 340,
        xOffset:10,
        yOffset:0,
        preloadText:"加载中...",
        position:'right'
    });
});