window.onload = function(){
(function(){	
	var scrollImg = [scrollImg0 = $.mggScrollImg('.webImgWrap0 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.webImgWrap0 .webImgList_btns li').removeClass('active');
					$('.webImgWrap0 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg1 = $.mggScrollImg('.webImgWrap1 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.webImgWrap1 .webImgList_btns li').removeClass('active');
					$('.webImgWrap1 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg2 = $.mggScrollImg('.webImgWrap2 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.webImgWrap2 .webImgList_btns li').removeClass('active');
					$('.webImgWrap2 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 ),
	 scrollImg3 = $.mggScrollImg('.webImgWrap3 .webImgbox ul',
			{	callback : function(ind){//这里传过来的是索引值
					$('.webImgWrap3 .webImgList_btns li').removeClass('active');
					$('.webImgWrap3 .webImgList_btns li').eq(ind).addClass('active');
     			}
	 		}
	 )];
	 
	 function scorll_move(obj,oClick){
		var _this = $(obj),
			_this_ = $(oClick) ;	
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
		_this.css({opacity:0,zIndex:-1,display:'none'});
		//点击每个a 触发的事件
		var  oShowPhotoResule = false;
		_this_.click(function(){
			$('.main').css({opacity:'0.1'});
			var aShowPhotoIndex = _this_.index($(this));
			_this.eq(aShowPhotoIndex).css({opacity:1,zIndex:10,display:'block'});
			_this.find('.prev').click(function(){
				scrollImg[aShowPhotoIndex].prev();
				return false;
			});
			_this.find('.next').click(function(){
				scrollImg[aShowPhotoIndex].next();
				return false;
			});
			oShowPhotoResule = true;
			_this.css({width:'100%',height:$(window).height(),lineHeight:$(window).height()+'px'});
			_this.find('.webImgbox').click(function(){
				if(oShowPhotoResule){
					_this.hide();	
					_this.css({opacity:0,zIndex:-1,display:'none'});
					$('.main').css({opacity:'1'});
					scrollImg[aShowPhotoIndex].go();
				}
			});
			_this.click(function(){
				if(oShowPhotoResule){
					_this.hide();
					_this.css({opacity:0,zIndex:-1,display:'none'});
					$('.main').css({opacity:'1'});
					scrollImg[aShowPhotoIndex].go();
				}
			});
		});
		
	}
	 scorll_move('.webImgWrap','.navigroup a');
	
})();	
};