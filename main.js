$(function(){
	var _href = "";
	var _matchPattern = "/search";
	
	if(location.href.match(_matchPattern) == undefined)
	{
	}
	else
	{
		//搜尋結果不顯示最新貼文
		$("#featured_post").css("display","none");
	}
	
	//沒有縮圖的文章提供預設圖片
	$(".post-outer>.post-wrapper").each(function(){ 
		if($(this).hasClass("no-image") === true) { 
			$(this).removeClass("no-image").addClass("image");
		}; 
	});
});

