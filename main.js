$(function(){
	var _href = "";
	var _matchPattern = "/search";
	var _detailPattern = ".html";
	var _hiddenFeaturedPost = false;
	
	_href = location.href;
	
	if(_href.match(_matchPattern) != undefined)
	{
		_hiddenFeaturedPost = true;
	}
	if(_href.match(_detailPattern) != undefined)
	{
		_hiddenFeaturedPost = true;
	}
	
	if(_hiddenFeaturedPost === true)
	{
		$("#featured_post").css("display","none");
	}
	
	//沒有縮圖的文章提供預設圖片
	$(".post-outer>.post-wrapper").each(function(){ 
		if($(this).hasClass("no-image") === true) { 
			$(this).removeClass("no-image").addClass("image");
		}; 
	});
});

