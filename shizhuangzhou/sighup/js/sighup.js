window.onload = function(){
	$('.sub').click(function(){
		$('.eject').addClass('fadeInUp').show();
		$('.eject').css({'-webkit-animation': 'fadeInDown 0.5s','-moz-animation': 'fadeInDown 0.5s','-o-animation': 'fadeInDown 0.5s','-webkit-animation': 'fadeInDown 0.5s'});
	});	
	$('.click_1_a').click(function(){
		$('.click_2_a,.click_2_b').hide();
		$('.click_1_a,.click_1_b').show();
		$(this).hide();
		$('.click_2_a').show();
		var oAImgH = $('.click_2_a img').height();
		$('.sig_mask1').css({height:oAImgH});
	});
	$('.click_1_b').click(function(){
		$('.click_2_a,.click_2_b').hide();
		$('.click_1_a,.click_1_b').show();
		$(this).hide();
		$('.click_2_b').show();	
		var oAImgH = $('.click_2_b img').height();
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