window.onload = function(){
	var oNaviblockW = $(window).width(),
		oNaviblockH = oNaviblockW*320/640;
	$('.navigroup a').click(function(){
		$('.naviblock_mask').show()
		$('.naviblock_img').removeClass('naviblock_imgac');
		$('.naviblock_img').css({height:'',width:'100%',marginTop:'', marginLeft:'',top:'',left:''});
		$('.naviblock').css({height:''});
		$(this).find('.naviblock_mask').hide();
		$(this).find('.naviblock_img').addClass('naviblock_imgac');
		$(this).find('.naviblock_img').animate({height:oNaviblockH*2,width:'200%',marginTop:-oNaviblockH, marginLeft:'-100%',top:'50%',left:'50%',opacity:'0.85'},300);
		var _this = $(this);
		$(this).find('.naviblock').css({height:oNaviblockH});
		var aHref = ['../sighup/index.html','../show_newhot/index.html','../event/index.html','../design/index.html','../calendar/index.html','../news/index.html','../guide/index.html'];
		var aHrefIndex = $('.navigroup a').index(this);
		setTimeout(function(){
			window.location=aHref[aHrefIndex];	
		},300);
	});
};