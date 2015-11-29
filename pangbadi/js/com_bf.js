window.onload = function(){ 
		var container = document.getElementById('container');
		var pages = document.querySelectorAll('.page');
		var slip = Slip(container, 'y').webapp().time(300);
		
		//音乐
		(function(){
			var oMusic = document.createElement('audio');
			oMusic.loop = ' ';
			oMusic.autoplay = 'autoplay';
			oMusic.preload = 'metadata';
			oMusic.src = '1.wavs';
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
					$('.touch-1').css({'-webkit-mask': touchW0 +' '+ touchH0, });
					$('.mask_btn').eq(index).hide();
				}
					
				if(index == 1){
					touchW1 = 123 - col*(document.documentElement.clientWidth) + 'px';
					touchH1 = -100 - row*(document.documentElement.clientHeight) + 'px';	
					$('.touch-2').css({'-webkit-mask-position':''+ touchW1 +' '+ touchH1 +''});
					$('.mask_btn').eq(index).hide();
				}
				
				if(index == 2){
					touchW2 = -9 + col*33.3 + '%';
					touchH2 = 5 + row*50 + '%';	
					
					$('.touch-3').css({'-webkit-mask':''+ touchW2 +' '+ touchH2 +''});
					$('.mask_btn').eq(index).hide();
				}
				
				timerhandle.pos++;
				//setTimeout(timerhandle, 1000)
			},3000)
			
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
					
					$('.touch-4').css({'-webkit-mask':''+ touchW +' '+ touchH +'','display':'block'});
					
					timerhandle_end.pos++;
					setTimeout(timerhandle_end, 60);
				};
				
				timerhandle_end();
				},1100);
			};
			
		});
		slip.start(function(ev){ 
			//console.log(this.page);
			if(this.page == 1 && touchNum !=3 ){ 
				slip.move(function(ev){
					return false;
				})
			}else{
				
			}
		});
		})();	
		
		
	};