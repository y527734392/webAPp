function leftmenu_c1(){
	$(".leftmenu").css({marginLeft:'-400px'}).show();
	$(".leftmenu").animate({marginLeft:'0'},200);
	leftmenu_result = true;
}
function leftmenu_c2(){
	$(".leftmenu").animate({marginLeft:'-400px'},300);
	leftmenu_result = false;
}
var leftmenu_result = false;
$('.leftmenu_ico').click(function(){
   if(leftmenu_result){
		leftmenu_c2();
	}else{
		leftmenu_c1();	
	}
	var oMenuH = $('.leftmenu').height();
	$('body').css({minHeight:oMenuH});
});