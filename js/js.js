// 轮播图：
$(function () {
	var timer = null;
	var times = 0;
	showTime();
	$(".img-list li").on("click",function() {
		var idx = $(this).index();
		$(".imgCover li").eq(idx).fadeIn().siblings("li").fadeOut();
		$(this).css("background-color","#b31e22").siblings().css("background-color","#fff");
	})
function showTime(){
	timer = setInterval(function () {
		times++;
		if(times == $(".img-list li").length) {
			times = 0;
		}
		$(".img-list li").eq(times).trigger("click");		
	},2000);
}
	$(".imgCover li").hover(function() {
		clearInterval(timer);
	},function () {
		showTime();
	})

	// 导航栏
	$(".nav-title-l li").mouseenter(function() {
		var idx = $(this).index();
		$(".nav-title-r ul").eq(idx).stop().show().siblings().hide();
	});
	$(".nav-title-r").mouseleave(function() {
		$(".nav-title-r ul").stop().hide();
	})
	// bar
	$(".toolbar li").mouseenter(function() {
		var idx = $(this).index();
		$(".toolbar-l li").eq(idx).stop().show().animate({right:50},500).siblings().hide();
	}).mouseleave(function() {
		$(".toolbar-l li").stop().hide().animate({right:60},500);
	})

	// 卷曲
	$(window).scroll(function() {
		$(".stop").on("click",function(){
			$("html,body").stop().animate({scrollTop:0},2000);
		})
	})
})