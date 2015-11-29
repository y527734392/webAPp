if (!window.hasOwnProperty('pingmei'))
	window.pingmei = {};
if (!pingmei.hasOwnProperty('component'))
	pingmei.component = {};


	
pingmei.getVendorPrefix = function() {
	var body = document.body || document.documentElement,
			style = body.style,
			vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
			i = 0;

	while (i < vendor.length) {
		if (typeof style[vendor[i] + 'Transition'] === 'string') {
			return vendor[i];
		}
		i++;
	}
	return null;
}	
pingmei.msVendorPrefix = pingmei.getVendorPrefix();	
pingmei.cssStyleName = function(psStyleName) {
	
	var tsStyleName = psStyleName;
	if (null !== pingmei.msVendorPrefix) {
		tsStyleName = '-' + pingmei.msVendorPrefix + '-' + psStyleName;
		if (psStyleName != 'keyframes' && psStyleName != 'animationEnd' && psStyleName != 'transitionEnd') {
			if (!document.body.style.hasOwnProperty(tsStyleName)) {
				tsStyleName = psStyleName;
			}
		}
	}
	return tsStyleName;
}
pingmei.jsStyleName = function(psStyleName) {
	var tsCSSStyleName = pingmei.cssStyleName(psStyleName);
	psStyleName = tsCSSStyleName.replace(/-(\w)/g, function(){ return (arguments[2] == 0) ? arguments[1] : arguments[1].toUpperCase();});
	return psStyleName;
}	

pingmei.createDOM = function(psType, psID) {
	if (!psType)
		psType = "DIV";
	var toDOM = document.createElement(psType);
	toDOM.style.position = 'absolute';
	if (psID)
		toDOM.id = psID;
	return toDOM;
}

pingmei.component.album_03 = function(poDom, poConf) {
	poDom.maDOMPhoto = [];
	poDom.mdNowPhotoIdx = 0;
	poConf = {
		//"lurl": "image/arrow_l.png",
		//"rurl": "image/arrow_r.png",
		"imgs": [
			{"big": "images/page4_e1.jpg"},
			{"big": "images/page4_e2.jpg"},
			{"big": "images/page4_e3.jpg"},
		]	
	}
	
	
	

	
	var toDOMAlbum = pingmei.createDOM();
	poDom.appendChild(toDOMAlbum);
	toDOMAlbum.style.left = 0;
	toDOMAlbum.style.top = 0;
	toDOMAlbum.style.width = poDom.offsetWidth + 'px';
	toDOMAlbum.style.height = poDom.offsetHeight + 'px';

	var tdMargin = parseInt(toDOMAlbum.offsetWidth * 0.1);
	var tdPadding = 0;
	for (var i = 0; i < poConf.imgs.length; i++) {
		var toDOMPhoto = pingmei.createDOM();
		if (i == 0)
			toDOMAlbum.appendChild(toDOMPhoto);
		else
			toDOMAlbum.insertBefore(toDOMPhoto, toDOMAlbum.children[0]);
		
		toDOMPhoto.setAttribute('class','pageL_pic');
		toDOMPhoto.style.left = tdMargin + 'px';
		toDOMPhoto.style.top = tdMargin + 'px';
		toDOMPhoto.style.width = toDOMAlbum.offsetWidth - tdMargin * 2 + 'px';
		toDOMPhoto.style.height = toDOMAlbum.offsetHeight - tdMargin * 2 + 'px';
		toDOMPhoto.style.backgroundColor = '#FFFFFF';
		toDOMPhoto.style[pingmei.jsStyleName('transform-origin')] = '50% 50%';
        toDOMPhoto.style[pingmei.jsStyleName('transition')] = pingmei.cssStyleName('transform') + ' 0.5s, opacity 0.5s';
	
	
		var toDOMIMG = pingmei.createDOM('IMG');
		toDOMPhoto.appendChild(toDOMIMG);
		toDOMIMG.style.left = tdPadding + 'px';
		toDOMIMG.style.top = tdPadding + 'px';
		toDOMIMG.style.width = toDOMPhoto.offsetWidth - tdPadding * 2 + 'px';
		toDOMIMG.style.height = toDOMPhoto.offsetHeight - tdPadding * 2 + 'px';
		
		toDOMIMG.src = poConf.imgs[i].big;
		
		
		poDom.maDOMPhoto.push(toDOMPhoto);
	}
	pingmei.component.album_03.relayer(toDOMAlbum);
	
	
	poDom.nextPhoto = function() {
		this.gotoPhoto(this.mdNowPhotoIdx + 1);
	}
	poDom.prevPhoto = function() {
		this.gotoPhoto(this.mdNowPhotoIdx - 1);
	}
	poDom.gotoPhoto = function(pdPhotoIdx) {
		var tdLastPhotoIdx = this.mdNowPhotoIdx;
		this.mdNowPhotoIdx = pdPhotoIdx;

		if (this.mdNowPhotoIdx < 0)
			this.mdNowPhotoIdx = this.maDOMPhoto.length - 1;
		if (this.mdNowPhotoIdx > (this.maDOMPhoto.length - 1))
			this.mdNowPhotoIdx = 0;
		if (this.mdNowPhotoIdx == tdLastPhotoIdx)
			return;


		if (pdPhotoIdx > tdLastPhotoIdx) {
			var toDOMLastPhoto = this.maDOMPhoto[tdLastPhotoIdx];
			var toDOMNowPhoto = this.maDOMPhoto[this.mdNowPhotoIdx];
			
			toDOMLastPhoto.changeWay = 'next';
			toDOMLastPhoto.addEventListener(pingmei.jsStyleName('transitionEnd'), pingmei.component.album_03.onTransitionEndPhoto, false);
			toDOMLastPhoto.style[pingmei.jsStyleName('opacity')] = 0;
			toDOMLastPhoto.style[pingmei.jsStyleName('transform')] = 'rotate(0deg) translateX(' +  toDOMLastPhoto.offsetWidth + 'px)';
		}

		else {
			var toDOMLastPhoto = this.maDOMPhoto[tdLastPhotoIdx];
			var toDOMNowPhoto = this.maDOMPhoto[this.mdNowPhotoIdx];
			
			toDOMNowPhoto.changeWay = 'last';
			toDOMNowPhoto.addEventListener(pingmei.jsStyleName('transitionEnd'), pingmei.component.album_03.onTransitionEndPhoto, false);
			toDOMNowPhoto.style[pingmei.jsStyleName('opacity')] = 0;
			toDOMNowPhoto.style[pingmei.jsStyleName('transform')] = 'rotate(0deg) translateX(' +  toDOMNowPhoto.offsetWidth + 'px)';
		}
			
	}
	
	
	
	/*TouchCtrlMaker({
		bind: poDom,
		actdis_v: -1,
		actdis_h: 50,
		onaction: function(poEvent, poChange) {
			if (poChange.h_way == 'L')
				this.bind.prevPhoto();
			if (poChange.h_way == 'R')
				this.bind.nextPhoto();
				
		}
	});*/			
}



pingmei.component.album_03.relayer = function(poDom) {
	for (var i = 0; i < poDom.children.length; i++) {
		var toDOMPhoto = poDom.children[i];
		toDOMPhoto.style[pingmei.jsStyleName('opacity')] = 1;
		toDOMPhoto.style[pingmei.jsStyleName('transform')] = 'rotate(' + (2 * (poDom.children.length - i - 1)) + 'deg) translateX(0)';
	}
}


pingmei.component.album_03.onTransitionEndPhoto = function(poEvent) {
	this.removeEventListener(pingmei.jsStyleName('transitionEnd'), pingmei.component.album_03.onTransitionEndPhoto);
	var toDOM = this.parentElement;
	if (this.changeWay == 'next') {
		toDOM.insertBefore(this, toDOM.children[0]);
	}
	else {
		toDOM.appendChild(this);
	}
	
	setTimeout(function() { pingmei.component.album_03.relayer(toDOM); }, 10);
	
}