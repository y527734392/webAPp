//预加载
function preloadimages(arr){   
    var newimages=[], loadedimages=0
    var postaction=function(){}  //此处增加了一个postaction函数
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //此处返回一个空白对象的done方法
        done:function(f){
            postaction=f || postaction
        }
    }
}
function arrs(){ 
	var arr = [],
		aImg = document.getElementsByTagName('IMG');
	for(var k=0; k<aImg.length;k++){
		arr.push(aImg[k].src);
	}
	console.log(arr[0]);
}

preloadimages(['images/Touch1.png','images/Touch2.png','images/Touch3.png','images/Touch1.png','images/Touch4.png']).done(function(images){
  // alert(images.length) //alerts 3
  //alert(images[0].src+" "+images[0].width) //alerts '1.gif 220'
})