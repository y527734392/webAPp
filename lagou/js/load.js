//预加载
function loadingsys_progress(pfProgress) {	
	
	var tdStep = parseInt((1 - pfProgress) * 10);
	var taBGColor = 'rgb(255,' + parseInt((0xFF - 0x42) / 10 * tdStep) + ',' + parseInt((0xFF - 0x54) / 10 * tdStep) + ')';
	var toDOMSTAR = document.getElementById('loadingsys_logostar');
	toDOMSTAR.style.backgroundColor = taBGColor;
	if (pfProgress >= 1) {
		toDOMSTAR.style.display = 'none';
		
	}
}

var gaImgs = (function() {
	var taResult = ['images/page1_bg.jpg','images/page2_bg.jpg','images/page3_bg.jpg','images/page4_bg.jpg','images/page5_bg.jpg','images/page6_bg.jpg','images/page5_form2_eye1.jpg'];
	var taDOMIMG = document.getElementsByTagName('IMG');
	for (var i = 0; i < taDOMIMG.length; i++) {
		taResult.push(taDOMIMG[i].src);
	}
	return taResult;
})();
setTimeout(function(){
var loader = new PxLoader();
	
	for(var i = 0;i<gaImgs.length;i++){
		var pxImg = new PxLoaderImage(gaImgs[i]);
		loader.add(pxImg);
	}
	
	var pxMp3 = new PxLoaderSound('1.mp3');
	loader.add(pxMp3);
	
	loader.addProgressListener(function(e){//调用进度事件
		var progress = e.completedCount/ e.totalCount;
		//console.log(progress);
		loadingsys_progress(progress);//调用改变方法
	});	
	 loader.addCompletionListener(function(){
		 var oLoadImg = document.getElementById('loadingsys'),
		 	oJt = document.getElementById('jt'),
			oMus = document.getElementById('music');
		 oLoadImg.style.display = 'none';
		 oJt.style.display = 'block';
		 oMus.style.display = 'block';
		 setTimeout(function(){
			var pages = document.querySelectorAll('.page');
			for(var k=0; k<pages[0].children.length;k++){ 
				pages[0].children[k].style.display = 'block';
			}
		},600);
	});	
loader.start();
},1);
