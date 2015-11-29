window.onload = function(){ 
		var container = document.getElementById('container');
		var pages = document.querySelectorAll('.page');
		var slip = new Slip(container, 'y').webapp().time(300);
		
		//
		
		var page_list = document.getElementById('page_list');
		var pageL_pic = document.querySelectorAll('.pageL_pic');
		var slip2 = new Slip(page_list, 'x').slider(pageL_pic).time(400).height('100%');
		
		window.oPageList = document.getElementById('page_list');
		pingmei.component.album_03(oPageList);
		//oPageList.nextPhoto();
		
		//音乐
		(function(){
			var oMusic = document.createElement('audio');
			oMusic.loop = ' ';
			oMusic.autoplay = 'autoplay';
			oMusic.preload = 'metadata';
			oMusic.src = '1.mp3'
			oMusic.load();
			document.body.appendChild(oMusic);
	
			var music = document.getElementById('music');
			var result = true;
			music.onclick = function(){ 			
				if(result) { 
					oMusic.pause();
					result = false;
				}else{ 
					oMusic.play();
					result = true;
				}
			};	
		})();
		//动画效果 none---> block
		(function(){
			for(var i=0;i<pages.length;i++){
				for(var j=0; j<pages[i].children.length;j++){ 
					pages[i].children[j].style.display = 'none';
				}
			}
			for(var k=0; k<pages[0].children.length;k++){ 
				pages[0].children[k].style.display = 'block';
			}
			slip.end(function(){ 
				for(var n=0; n<this.elPages[this.page].children.length;n++){
					this.elPages[this.page].children[n].style.display = 'block';
				}
			});
		})();
		
		
		
		//撕裂效果
		(function(){
		var touchNum =0;
		var oTouch1 = document.getElementById('touch_1'),
			oTouch2 = document.getElementById('touch_2'),
			oTouch3 = document.getElementById('touch_3'),
			oTouch4 = document.getElementById('touch_4'),
			oPage2Cloud = document.getElementById('page2_cloud');
		$('.mask_btn').bind('touchstart',function(){
			var index = $(this).index();
			//console.log(index);
			//console.log($('.touch-'+(index+1)));
			touchNum++;
			
			var touchW0,touchH0,touchW1,touchH1,touchW2,touchH2;
			setInterval(
			function timerhandle() {
				if (!timerhandle.hasOwnProperty('pos'))
					timerhandle.pos = 0;
				
				var col = timerhandle.pos % 4;
				var row = Math.floor(timerhandle.pos / 4);
				if (row == 2 && col == 2)
					return;	
				
				if(index == 0){
					touchW0 = 18 + col*33.3 + '%';
					touchH0 = 8 + row*50 + '%';
					oTouch1.style.webkitMaskPosition = touchW0 +' '+ touchH0;
					$('.mask_btn').eq(index).hide();
				}
					
				if(index == 1){
					touchW1 = -12 + col*33.3 + '%';
					touchH1 = 10 + row*50 + '%';
					oTouch2.style.webkitMaskPosition = touchW1 +' '+ touchH1;
					$('.mask_btn').eq(index).hide();
				}
				
				if(index == 2){
					touchW2 = -9 + col*33.3 + '%';
					touchH2 = 5 + row*50 + '%';
					oTouch3.style.webkitMaskPosition = touchW2 +' '+ touchH2;
					$('.mask_btn').eq(index).hide();
				}
				
				timerhandle.pos++;
			},120)
			
			if(touchNum == 3){
				setTimeout(function(){
				function timerhandle_end() {
					if (!timerhandle_end.hasOwnProperty('pos'))
						timerhandle_end.pos = 0;
					
					var col = timerhandle_end.pos % 4;
					var row = Math.floor(timerhandle_end.pos / 4);
					if (row > 3)
						return;	
					
					var touchW = -0 + col*33.3 + '%';
					var touchH = 25 + row*25 + '%';	
					oTouch4.style.display = 'block';
					oTouch4.style.webkitMaskPosition = touchW +' '+ touchH;
					timerhandle_end.pos++;
					setTimeout(timerhandle_end, 60);
				};
				
				timerhandle_end();
				},1100);
				setTimeout(function(){
					oPage2Cloud.style.display = 'block';
				},1000);
				
			};
		});
		})();	
		
		
		//翻页loop
		/*slip.end(function(){
			if(this.page == 3){
				///var oPageList = document.getElementById('page_list');
				//oPageList.style.width = document.documentElement.clientWidth;
				//console.log(oPageList.offsetWidth);
				console.log(1);
			}
		})*/
		//var oPageList = document.getElementById('page_list');
		//pingmei.component.album_03(oPageList);
		//oPageList.nextPhoto();
		
	};