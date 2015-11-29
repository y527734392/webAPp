window.onload = function(){
	$('#picture_list ul li').click(function(){
		var oHref = $(this).find('img').attr('src');
		$('.picture_img img').attr('src',oHref)
	});
	$('#picture_list').kxbdSuperMarquee({
		distance:55,
		time:90000,
		btnGo:{left:'#goL',right:'#goR'},
		direction:'left',
	});			
};