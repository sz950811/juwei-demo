
	// 下拉菜单
	$(function(){
		$(".nav-3 > li").hover(function(){
			$(this).children("ul").stop().slideToggle();
		});
	})
	// ���⶯��Ч��
	$("#AnimatedPictures").hover(function () {
	            $("#AnimatedPictures").animation({
	                // ע��: margin-topҲ��д���շ�ʽmarginTop
	                "margin-top": "400px",
	                "opacity": "1.0",
	                "width": "300px",
	                "height": "300px",
	                "left": "100px",
					"background-color" : "blank",
	            }, 3000, function () {
	            });
	        });
	