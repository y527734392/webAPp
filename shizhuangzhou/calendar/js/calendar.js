window.onload = function(){
	$('.click_a_1').click(function(){
		$('.click_a_2,.click_b_2').hide();
		$('.click_a_1,.click_b_1').show();
		$(this).hide();
		$('.click_a_2').show();
		var oAImgH = $('.click_a_2 img').height();
		$('.sig_mask1').css({height:oAImgH});
	});
	$('.click_b_1').click(function(){
		$('.click_a_2,.click_b_2').hide();
		$('.click_a_1,.click_b_1').show();
		$(this).hide();
		$('.click_b_2').show();	
		var oAImgH = $('.click_b_2 img').height();
		$('.sig_mask2').css({height:oAImgH});
	});
	$('.sig_mask1 .sm,.sig_mask2 .sm').click(function(){
		if($(this).css('opacity') == 1){
			$(this).css({opacity:0});
		}else{
			$(this).css({opacity:1});	
		}	
	});
};