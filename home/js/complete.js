window.onload = function(){
	$.ajaxSetup ({ 
   		cache: false //关闭AJAX相应的缓存 
	});
	//load 动画
	var count=0,
		count1=0,
		result = false,
		nav_txtBgNum = 0;
	var oImg = new Image();
	oImg.src="images/mywebs_03.png";
	oImg.onerror=function(){
		alert(this.src+"加载失败请按F5刷新");
	};
	oImg.onload=function(){
		count++;
		//console.log('----->'+count);
		if(count==1){
			$('#souris').css({display:'block'});
			result = true;
		}
	};
	//加载完首页四张图片 js
	var svbf=null;
	clearInterval(svbf);
	svbf=setInterval(function(){
		if(result){
			clearInterval(svbf);
		}
		for(var i=1;i<5;i++){
			var oImg = new Image();
			oImg.onerror=function(){
				alert(this.src+"加载失败");
			};
			oImg.onload=function(){
				count1++;
				if(count1==4){
					setTimeout(function(){
						$('#b-nav').css('top','-50%').show().animate({top:'7%'},1000);
						$('#souris').animate({opacity:'0'},{duration: 1000,easing:'easeInOutExpo',complete:function(){
							$(this).css({display:'none'});	
						}});
						$('.ref0.g').css({top:'-200%'});
						$('.ref0.d').css({top:'200%'});
						$('.ref0.g').animate({top:'50%'},{duration: 1000,easing:'easeInOutExpo'});
						$('.ref0.d').animate({top:'50%'},{duration: 1000,easing:'easeInOutExpo'});
						$('.ref0').removeClass('hidden');
						$('.btn').animate({top:'95%',opacity:'1'},1000);
						$(".mywebs").fadeOut(1000);
						//$("#body").delay(1000).removeClass('home_bg');
						var home_bgTimer = null,
							home_bgNum=0;
						clearInterval(home_bgTimer)	
						home_bgTimer = setInterval(function(){
							home_bgNum+=5;
							$("#body").css({background:'rgb('+home_bgNum+','+home_bgNum+','+home_bgNum+')'});
							if(home_bgNum>=255){
								clearInterval(home_bgTimer);
								$("#body").removeClass('home_bg');	
								$("#body").css({background:''});
							}	
						},20);
					},1000);
					clearInterval(svbf);
					
				}
			};
			oImg.src="images/"+i+".jpg";
		}
	},20);

	//------------nav js 开始
	var menu_ouvert = false;
	$('#b-nav').click(function(){
		if(menu_ouvert==false){
			before_menu();
			nav_txtBgNum=0;
		}else{ 
			after_menu();
		} 
	});
	function before_menu(){		
		$('#nav').show().animate({'opacity':1, width:'100%',height:'100%'}, 1000, 'easeInOutExpo', function(){
			$('a#b-nav .barre').css('background','#e8c6c6');
			$('a#b-nav .barre:eq(0)').css('top','4px');
			$('a#b-nav .barre:eq(1)').css('top','4px');
			$('.le-menu').fadeIn('slow');
			$('a.logo-menu').css('top','20px').animate({'opacity':'1','top':0}, 400);
			$('.liens a').css('top','20px').delay(200).animate({'opacity':'1','top':0}, 500);
			$('.liens strong').css('top','20px').delay(400).animate({'opacity':'1','top':0}, 600);
			$('.le-menu a.logo-menu strong').delay(200).animate({'opacity':'1','top':'0'}, 400);
			$('#bas-nav').css('bottom','-100px').delay(400).animate({'opacity':'1','bottom':0}, 600);
			var nav_txtBgTimer = null;
			clearInterval(nav_txtBgTimer);
			nav_txtBgTimer = setInterval(function(){
				nav_txtBgNum++;
				$('.nav_txtBg').delay(500).css({transform:'rotate('+nav_txtBgNum+'deg) translate(-50%,-50%)'});
			},200);
			menu_ouvert = true;
		});
	}
	function after_menu(){
		$('a.logo-menu').delay(400).animate({'opacity':'0','top':'20px'}, 600);
		$('.liens a').delay(300).animate({'opacity':'0','top':'20px'}, 500);
		$('.liens strong').delay(200).animate({'opacity':'0','top':'20px'}, 400);
		$('.le-menu a.logo-menu strong').delay(200).animate({'opacity':'0','top':'20px'}, 400);
		$('#bas-nav').delay(0).animate({'opacity':'0','bottom':0}, 300);		
		$('#nav').delay(800).animate({width:'80%',height:'80%', 'opacity':0}, 1000, 'easeInOutExpo', function(){
			$(this).hide();
			$('.le-menu').fadeOut('slow');
			$('#b-nav .barre').css('background','#000');
			$('#b-nav .barre:eq(0)').css('top','0');
			$('#b-nav .barre:eq(1)').css('top','10px');
		});
		menu_ouvert = false;
	};	
	
	//点击mywebs
	$('.logo-menu').click(function(){
		after_menu();
		$('#home_main').load("home.html",function(){
			$(".mywebs").hide();
			$('.ref0.g').css({top:'-200%'});
			$('.ref0.d').css({top:'200%'});
			$('.ref0').removeClass('hidden');
			$('.ref0.g').delay(1200).animate({top:'50%'},{duration: 1000,easing:'easeInOutExpo'});
			$('.ref0.d').delay(1200).animate({top:'50%'},{duration: 1000,easing:'easeInOutExpo'});
			$('.btn_zz').css({display:'none'});
			$('.btn').delay(1200).animate({top:'95%',opacity:'1'},1000);
		});	
	});
	
	//点击about
	$('.about').click(function(){
		after_menu(); 
		$('html,body').stop().animate({ scrollTop: 0 }, 10);
		$('#home_main').load('about.html',function(){
			
		});	
	});
	
	//点击wrok
	$('.work').click(function(){
		after_menu(); 
		var arr=['images/work/3.jpg','images/work/3.jpg'];
		var count=0;
		for(var i=0;i<arr.length;i++){
			var oImg = new Image();
			oImg.src=arr[i];
			oImg.onload=function(){
				count++;
			};
		}
		if(count!=arr.length){
		$('html,body').stop().animate({ scrollTop: 0 }, 10);
		$('#home_main').load('work.html',function(){
			
		});	
		}
	});
	
	//点击contact
	$('.contact').click(function(){
		after_menu(); 
		$('html,body').stop().animate({ scrollTop: 0 }, 10);
		$('#home_main').load('contact.html',function(){
			
		});	
	});

	//nav js 结束 ---------------------- 
	
	
	
};
//首页比例方法
function mm(){
	var aA = $('.bloc-hp'),
		windowH = document.documentElement.clientHeight,
		windowW = document.documentElement.clientWidth,
		oAh = windowH*0.85;
		oAw = oAh*(240/385);
	for(var i=0;i<aA.length;i++){
		aA[i].style.width= oAw +'px';
		aA[i].style.height= oAh +'px';
		if(windowW<780){
			aA[i].style.backgroundSize = '780px';	
		}else{
			aA[i].style.backgroundSize ='auto '+ oAh+'px';
		}
		aA[i].style.marginTop = -oAh/2 + 'px';
		if(i%2 == 0){
			aA[i].style.marginLeft = -oAw - 50 + 'px';
		}else{
			aA[i].style.marginLeft = '50px';
		}
	}
	var myW = windowW*0.2,
		myWleft = myW/2;
		myH = myW*1,
		myHtop = myH/2;
	$('.mywebs').css({width:myW,height:myH,marginTop:-myHtop,marginLeft:-myWleft});
};
//屏幕过小 js
function smallScreen(){
	if($(window).width() <= 780){
		var homeSmall_ml = 0;
		var aA = $('.bloc-hp');
		for(var homeNum =0;homeNum<aA.length;homeNum++){
			if($(window).width()<=$(window).height()){
				aA[homeNum].style.width= $(window).width()*0.85 +'px';
				homeSmall_ml = -$(window).width()*0.85/2 +'px';
			}else if($(window).width()>=$(window).height()){
				aA[homeNum].style.width= $(window).width()*0.85*(530/660) +'px';
				homeSmall_ml = -($(window).width()*0.85*(530/660))/2 +'px';
			}
			$('.ref'+homeNum+'.g').css({marginLeft:homeSmall_ml,left:'50%'});
			$('.ref'+homeNum+'.d').css({display:'none'});
		}
	}else{
		var aA = $('.bloc-hp');
		for(var homeNum=0;homeNum<aA.length;homeNum++){
			aA[homeNum].style.width= oAw +'px';
			$('.ref'+homeNum+'.d').css({display:''});
		}	
	}
}
