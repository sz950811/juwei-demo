
	// 下拉菜单
	$(function(){
		$(".nav-3 > li").hover(function(){
			$(this).children("ul").stop().slideToggle();
		});
	})