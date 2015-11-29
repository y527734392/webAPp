(function(){
	window.onscroll = function(){
		document.body.scrollTop = 0;	
	};
	var oDiv = document.createElement('div'),
		oImg = document.createElement('img'),
		aSection = document.getElementsByTagName('section');
	for(var i=0;i<aSection.length;i++){
		aSection[i].style.opacity= '0';
	}	
	oImg.src = '../images/loading.gif';
	oImg.style.width = '10%';
	oImg.style.verticalAlign = 'middle';
	oDiv.appendChild(oImg);
	oDiv.id = 'load';
	oDiv.style.width = '100%';
	oDiv.style.position = 'fixed';
	oDiv.style.top = '0';
	oDiv.style.left = '0';
	oDiv.style.height = document.documentElement.clientHeight + 'px';
	oDiv.style.lineHeight = document.documentElement.clientHeight + 'px';
	oDiv.style.textAlign = 'center';
	oDiv.style.background = '#000';
	document.body.insertBefore(oDiv,aSection[0]);	
})();
function preloadimages(arr){   
	var newimages=[], loadedimages=0;
	var postaction=function(){};
	var arr=(typeof arr!="object")? [arr] : arr;
	function imageloadpost(){
		loadedimages++;
		if (loadedimages==arr.length){
			postaction(newimages);
		}
	}
	for (var i=0; i<arr.length; i++){
		newimages[i]=new Image();
		newimages[i].src=arr[i];
		newimages[i].onload=function(){
			imageloadpost();
		}
		newimages[i].onerror=function(){
			imageloadpost();
		}
	}
	return { 
		done:function(f){
			postaction=f || postaction
		}
	}
}

var gaImgs = (function() {
	var taResult = [];
	var taDOMIMG = document.getElementsByTagName('IMG');
	for (var i = 0; i < taDOMIMG.length; i++) {
		taResult.push(taDOMIMG[i].src);
	}
	return taResult;
})();

preloadimages(gaImgs).done(function(){
	//setTimeout(function(){
		window.onscroll = null;
		var aSection = document.getElementsByTagName('section'),
			oload = document.getElementById('load');
		oload.style.display = 'none';
		for(var j=0;j<aSection.length;j++){
			aSection[j].style.opacity= '1';
		}
	//}, 3000);
});