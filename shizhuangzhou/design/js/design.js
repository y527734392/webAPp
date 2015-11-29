window.onload = function(){
	var scrollImg = [scrollImg0 = $.mggScrollImg('.designImgWrap0 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap0 .webImgList_btns li').removeClass('active');
					$('.designImgWrap0 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg1 = $.mggScrollImg('.designImgWrap1 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap1 .webImgList_btns li').removeClass('active');
					$('.designImgWrap1 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg2 = $.mggScrollImg('.designImgWrap2 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap2 .webImgList_btns li').removeClass('active');
					$('.designImgWrap2 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg3 = $.mggScrollImg('.designImgWrap3 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap3 .webImgList_btns li').removeClass('active');
					$('.designImgWrap3 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg4 = $.mggScrollImg('.designImgWrap4 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap4 .webImgList_btns li').removeClass('active');
					$('.designImgWrap4 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg5 = $.mggScrollImg('.designImgWrap5 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.designImgWrap5 .webImgList_btns li').removeClass('active');
					$('.designImgWrap5 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 )];
	 function scorll_move(obj,oClick){
		var _this = $(obj),
			_this_ = $(oClick);
		//$('.designImgWrap').css([])	
		//获取img的宽高 判断100%
		var webImgNumArrH = [],
			webImgNumArrW = [];
		for(var webImgNum=0;webImgNum<_this.find('.webImgbox ul li img').length;webImgNum++){
			var awebImgNumHValue = _this.find('.webImgbox ul li img').eq(webImgNum).height();
			var awebImgNumWValue = _this.find('.webImgbox ul li img').eq(webImgNum).width();
			webImgNumArrH.push(awebImgNumHValue);
			webImgNumArrW.push(awebImgNumWValue);
		}
		for(var j=0;j<webImgNumArrH.length;j++){
			var oWebImgLiH = _this.find('.webImgbox ul li').height(),
				oWebImgLiW = _this.find('.webImgbox ul li').width();
				if(webImgNumArrW[j]>webImgNumArrH[j]){
					_this.find('.webImgbox ul li img').eq(j).css({width:'100%',height:''});	
				}else if(webImgNumArrW[j]<=webImgNumArrH[j]){
					_this.find('.webImgbox ul li img').eq(j).css({height:'100%',width:''});
				}	
		}
		
		//点击每个a 触发的事件
		_this_.click(function(){
			var aShowPhotoIndex = _this_.index($(this));
			/*_this.eq(aShowPhotoIndex).css({opacity:1,zIndex:10,display:'block'})||*/
			
			_this_.find(_this).css({opacity:1,zIndex:10,display:'block'})
			_this.find('.prev').click(function(){
				scrollImg[aShowPhotoIndex].prev();
				return false;
			});
			_this.find('.next').click(function(){
				scrollImg[aShowPhotoIndex].next();
				return false;
			});
			var oShowPhotoResule = true;
			_this.css({width:'100%',height:$(window).height(),lineHeight:$(window).height()+'px'});
			_this.find('.webImgbox').click(function(){
				if(oShowPhotoResule){
					_this.css({opacity:0,zIndex:-10});
					scrollImg[aShowPhotoIndex].go();
					return false;
				}
			});
			_this.click(function(){
				if(oShowPhotoResule){
					_this.css({opacity:0,zIndex:-10});
					scrollImg[aShowPhotoIndex].go();
					return false;
				}
			});
		});
		
	}
	scorll_move('.designImgWrap','.text1_ico_photo');
	var oDesingResle = false;
	$('.navigroup1 .naviblock').click(function(){
		var oDesignIndex = $('.navigroup1 .naviblock').index($(this));
		console.log(oDesignIndex);
		$('.navigroup2 .naviblock .text').css({opacity:0,zIndex:-5,});
		$('.navigroup2 .naviblock').eq(oDesignIndex).find('.text').css({opacity:1,zIndex:10});
		$('.navigroup2').css({opacity:1,zIndex:5,});
		$(this).parent().parent().hide();
		var oDocHeight = $(document).height();
		$('.text_mask').css({height:oDocHeight,zIndex:-1,opacity:1});	
		oDesingResle = true;
	});
	$('.text_mask').click(function(){
		$('.navigroup2 .naviblock .text').css({opacity:0,zIndex:-5,});
		$('.navigroup2').css({opacity:0,zIndex:0});
		$('.navigroup1').show();
		return false;	
	});
	$('.text').click(function(){
		return false;	
	});
	$('.text1_ico_photo').click(function(){
		return false;	
	});
	$('.text1_ico_video').click(function(){
		return false;	
	});
	
	
	$('.text1_ico_video').click(function(){
		$(this).find('.wrap_mask').show();	
		$(this).find('.wrap_mask').css({height:$(document).height()});
		$(this).find('.video_list').show();	
	});
	$('.wrap_mask').click(function(){
		console.log(1);
		$('.wrap_mask').hide();
		$('.text1_ico_video .video_list').hide();	
		return false;
	});
	$('.video_list a').click(function(){
		var oHref = $(this).attr('href');
		window.location= oHref;
	});
	
};