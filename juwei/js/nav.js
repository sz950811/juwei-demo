	// �����˵�
$(function(){
	$(".nav-3 > li").hover(function(){
		$(this).children("ul").stop().slideToggle();
	});
});
	// tab���л�
$(function() {
      // 1.����ϲ���li����ǰli ���current�࣬�����ֵ��Ƴ���
    $(".tab_list li").hover(function() {
         // ��ʽ��̲���
        $(this).addClass("current").siblings().removeClass("current");
        // 2.�����ͬʱ���õ���ǰli ��������
        var index = $(this).index();
        console.log(index);
        // 3.���²�������Ӧ�����ŵ�item��ʾ�������item����
        $(".tab_con .item").eq(index).show().siblings().hide();
    });
});
	// ������ʾ
$(function() {
            //�������ʱ��,�����ı�ǩ͸���ȣ�0.5
    $(".tab_con-2").hover(function() {
       $(this).siblings().stop().fadeTo(400, 0.4);
    }, 
	function() {
                // ����뿪������li ͸���ȸ�Ϊ 1
        $(this).siblings().stop().fadeTo(400, 1);
    })
});
