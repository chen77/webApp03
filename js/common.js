// 设置导航条宽度
$(function(){
	var widthAll=null;
	$("#tab-title li").each(function(){
		widthAll+=$(this).width();
	})
	$("#tab-title").width(widthAll+150);
	
})

// 导航板块切换
$(function(){
	$("#tab-title li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var index=$("#tab-title li").index(this);
		$("#tab-content>div.main-con").eq(index).show().siblings().hide();
	})
})

// 菜单列表展开收缩
$(function(){
	$("#proList .list-name").click(function(){
		$(this).parents(".name-wrapper").children(".list-name").addClass("ss");
		 $(this).parents(".name-wrapper").siblings().children(".list-name").removeClass("ss");
		$(this).parents(".name-wrapper").children("ul").show();
		 $(this).parents(".name-wrapper").siblings().children("ul").hide();
	})
})