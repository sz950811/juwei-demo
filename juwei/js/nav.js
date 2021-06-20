	// 下拉菜单
$(function(){
	$(".nav-3 > li").hover(function(){
		$(this).children("ul").stop().slideToggle();
	});
});
	// tab栏切换
$(function() {
      // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".tab_list li").hover(function() {
         // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
    });
});
	// 高亮显示
$(function() {
            //鼠标进入的时候,其他的标签透明度：0.5
    $(".tab_con-2").hover(function() {
       $(this).siblings().stop().fadeTo(400, 0.4);
    }, 
	function() {
                // 鼠标离开，其他li 透明度改为 1
        $(this).siblings().stop().fadeTo(400, 1);
    })
});
