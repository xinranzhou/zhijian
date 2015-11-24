// JavaScript Document
$(function(){
	// 焦点图
    $('.bxslider,.bxslider2').bxSlider({
        auto:true,
        autoHover: true,
        pause: 5000,
        mode: 'fade'
    });
    $('.bxslider-sm').bxSlider({auto:false});
    $(".bx-wrapper").hover(function () {
        $(this).find(".bx-controls-direction a").show();
    }, function () {
        $(this).find(".bx-controls-direction a").hide();
    });
	
	
	})




