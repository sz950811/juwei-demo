
	// 涓嬫媺鑿滃崟
	$(function(){
		$(".nav-3 > li").hover(function(){
			$(this).children("ul").stop().slideToggle();
		});
	})
	// 主题动画效果
	$("#AnimatedPictures").hover(function () {
	            $("#AnimatedPictures").animation({
	                // 注意: margin-top也可写成驼峰式marginTop
	                "margin-top": "400px",
	                "opacity": "1.0",
	                "width": "300px",
	                "height": "300px",
	                "left": "100px",
					"background-color" : "blank",
	            }, 3000, function () {
	            });
	        });
	