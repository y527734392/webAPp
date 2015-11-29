window.onload = function(){
	var container = document.getElementById('container');
	window.pages = document.querySelectorAll('.page');
	var slip = new Slip(container, 'y').webapp(pages);

};