window.onload = function(){
	
	 var oBannerH = $('.banner').width()*353/288;
	 $('.webImgbox ul li').css({width:$('.banner').width()});
	 $('.banner').css({height:oBannerH});
	 $('.content').css({height:oBannerH+10});
	 
	 
	 $('.nav div').click(function(){
		 $('.nav div').removeClass('subnav');
		 $('.banner .eventImgWrap').css({opacity:0,zIndex:-1});
		var index = $(this).index();
		scrollImg[index].go();
		$(this).addClass('subnav');
		$('.banner .eventImgWrap').eq(index).css({opacity:1,zIndex:1});	 
	});
	var scrollImg = [scrollImg0 = $.mggScrollImg('.eventImgWrap0 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.eventImgWrap0 .webImgList_btns li').removeClass('active');
					$('.eventImgWrap0 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg1 = $.mggScrollImg('.eventImgWrap1 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.eventImgWrap1 .webImgList_btns li').removeClass('active');
					$('.eventImgWrap1 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 )];	
	 function scorll_move(obj){
		var _this = $(obj);
		for(var imgNum=0;imgNum<_this.length;imgNum++){
			var nLength = _this.eq(imgNum).find('.webImgbox ul li').length;
			_this.find('.webImgList_btns').eq(imgNum).css({width:nLength*0.9+'rem'});	
		}
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
		
	}
	 scorll_move('.eventImgWrap');
};