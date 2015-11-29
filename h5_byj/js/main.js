'use strict'
;$(function(){
    FastClick.attach(document.body);
var h5_yt = {
    config:{
        y_test:$('#test'),
        y_body:$('body'),
        y_hsCon:$('.y_hsCon'),
        y_page_prompt:$('.page_prompt'),
        y_share:$('.y_share'),
        y_shareBtn:$('.y_shareBtn'),
        y_clickShare:$('.y_clickShare'),
        y_clickShareTime:null,
        y_btnKnow:$('.y_btnKnow'),
        y_shuTF:true,
        y_shuTFTime:null,
        y_wrap:$('.wrap'),
        y_page_load:$("#load"),
        y_page_loadP:$("#load p"),
        y_page_loadDiv:$("#load div"),
        y_page_Music:$("#music"),
        y_page_Jt:$("#jt"),
        y_pages:$('.page'),
        y_canvas:$('#guaarea'),
        y_pageCanvas:$('.page1_canvas'),
        y_prompt:$('.page_prompt'),
        y_pageLR:$('.pageLR'),
        y_pageR0L:$('#pageR0_l'),
        y_pageR0R:$('#pageR0_r'),
        y_pageR0LR:$('#pageR0_lr'),
        y_pageR1:$('.pageR_1'),
        y_pageL1:$('.pageL_1'),
        y_pageLRTime:null,
        y_canvasReady:false,
        y_tiemr : null,
        y_W:null,
        y_w:null,
        y_h:null,
        y_num:0

    },
    init: function(){
        //if 横屏竖屏
        h5_yt.y_orient();

        //加载load
        h5_yt.y_load();

        //加载backgroundSize
        h5_yt.y_backgroundSize();

        //加载 clickKnow
        h5_yt.y_clickKnow();

        //点击分享 出mask层
        h5_yt.y_clickShare();

        //music
        h5_yt.y_music();





        //加载slider
        this.config.y_tiemr = setInterval(function(){
            if(h5_yt.config.y_canvasReady){
                clearInterval(h5_yt.config.y_tiemr);
                h5_yt.y_slider();
            }
        },30);



        //test
//        var myslider=new iSlider({
//            wrap:".wrap",
//            item:".page",
//            index:0,
//            lastLocate:false,
//            onslide:function (index) {
//                if(index == 3){
//                    h5_yt.config.y_page_Jt.get(0).style.display = "none";
//                    var mysliderLevel=new iSlider({
//                        wrap: ".page_4",
//                        item: ".pageLR",
//                        index:2,
//                        isVertical:false,
//                        lastLocate:false
//                    });
//                }else{
//                    h5_yt.config.y_page_Jt.get(0).style.display = "block";
//                }
//            }
//        });

    },

    y_load:function(){
        console.log('2-load');
        function loadingsys_progress(pfProgress) {
            var y_page_loadDivW = pfProgress*100 + '%';
            h5_yt.config.y_page_loadDiv.css({width:y_page_loadDivW});
            if (pfProgress > 1) {
                h5_yt.config.y_page_loadDiv.css({display:'none'});
            }
        }

        var gaImgs = (function() {
            var taResult = ["images/page1_bg.jpg","images/page1_bg1.jpg","images/page1_bg.jpg","images/page2_bg.jpg","images/page3_bg.jpg",'images/shu_pic.png','images/load_bg.jpg','images/page_share.png','images/y_shareClosed.png','images/page1_picMask.jpg','images/page_hand.png','images/page_know.png','images/page2_e1.png','images/page3_bg.jpg','images/page3_e4.png','images/page3_e6.png','images/pageLR_bg.jpg','images/pageLR_txt.png','images/pageLR_eL.png','images/pageLR_eR.png','images/pageLR_e2.png','images/pageLR_e4.png','images/pageL1_bg.jpg','images/pageL1_e1.png','images/pageL1_e2.png','images/pageL2_bg.jpg','images/pageL2_e1.png','images/page_ClickShear.jpg','images/pageR1_e1.jpg','images/pageR1_e2.jpg','images/pageR1_e3.png','images/pageR2_e2.png','images/page_ClickShear2.jpg','images/pageLR_eL.png','images/pageLR_eR.png'];
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
//            var pxMp3 = new PxLoaderSound('1.mp3');
//            loader.add(pxMp3);
            loader.addProgressListener(function(e){//调用进度事件
                var progress = e.completedCount/ e.totalCount;
                loadingsys_progress(progress);//调用改变方法
            });
            loader.addCompletionListener(function(){
                h5_yt.config.y_page_load.get(0).style.display = 'none';
                h5_yt.config.y_page_Music.get(0).style.display = 'block';

                //初始化canvas
                h5_yt.y_canvas();

            });
            loader.start();
        },0);

    },

    y_canvas:function(){
        console.log('4-canvas');
        function calCoor(poElem) {
            if (poElem.tagName == 'BODY') {
                return {top:0, left:0};
            }

            var tdTop = poElem.offsetTop;
            var tdLeft = poElem.offsetLeft;

            //var toParentCoor = calCoor(poElem.parentNode);
            //return {top:tdTop + toParentCoor.top, left:tdLeft + toParentCoor.left};
            return {top:tdTop, left:tdLeft};
        }


        (function(bodyStyle) {
            var oYW = document.documentElement.clientWidth;
            bodyStyle.mozUserSelect = 'none';
            bodyStyle.webkitUserSelect = 'none';

            var img = new Image();
            var canvas = document.getElementById('guaarea');
            canvas.style.backgroundColor='transparent';
            canvas.style.position = 'absolute';
            img.addEventListener('load', function(e) {
                var ctx;
//            var w = img.width,
//                h = img.height;
              var w = document.body.clientWidth,
                  h = document.body.clientHeight;
                var offsetX=null;
                var offsetY = calCoor(canvas).top;
                if(oYW>640){
                    offsetX = 	(oYW-640)/2
                }else{
                    offsetX = calCoor(canvas).left;
                }
                var mousedown = false;
                var mdLastX = 0;
                var mdLastY = 0;

                function layer(ctx) {
                    // ctx.fillStyle = 'red';
                    var image = new Image();
                    image.src = "images/page1_bg1.jpg";
                    //ctx.fillStyle = "#EEEEFF";
                    image.onload = function () {
                        ctx.drawImage(image,0,0,w,h);
                        //canvas img 加载完成
                        console.log('canvas-load3');
                    }
                    ctx.fillRect(0, 0, w, h);
                }

                function eventDown(e){
                    e.preventDefault();
                    mousedown=true;

                    if(e.changedTouches){
                        e=e.changedTouches[e.changedTouches.length-1];
                    }
                    mdLastX = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                    mdLastY = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                }

                function eventUp(e){
                    //alert('aaa');
                    // e.preventDefault();
                    //mousedown=false;
                    e.preventDefault();
                    mousedown = false;
                    var data=ctx.getImageData(0,0,w,h).data;
                    for(var i=0,j=0;i<data.length;i+=4){
                        if(data[i] && data[i+1] && data[i+2] && data[i+3]){
                            j++;
                        }
                    }
                    if(j<=w*h*0.93){
                        // alert('ok,挂完了');
                        h5_yt.config.y_canvasReady = true;
                        canvas.style.display = 'none';
                        h5_yt.config.y_pageCanvas.get(0).style.display = 'none';

                    }
                }

                function eventMove(e){
                    e.preventDefault();
                    if(mousedown) {
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length - 1];
                        }
                        var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                        var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;



                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.lineWidth = 30;
                        ctx.lineCap = "round";
                        ctx.beginPath();
                        ctx.moveTo(mdLastX, mdLastY);
                        ctx.lineTo(x, y);
                        ctx.stroke();
                        canvas.style.display = 'none';
                        canvas.style.display = 'inherit';
                        ctx.fill();


                        mdLastX = x;
                        mdLastY = y;
                    }
                }

                canvas.width = canvas.parentNode.offsetWidth;
                canvas.height = canvas.parentNode.offsetHeight;

                //alert(canvas.width);
                ctx=canvas.getContext('2d');
                ctx.fillStyle='transparent';
                ctx.fillRect(0, 0,w, h);
                layer(ctx);


                canvas.addEventListener('touchstart', eventDown);
                canvas.addEventListener('touchend', eventUp);
                canvas.addEventListener('touchmove', eventMove);
                canvas.addEventListener('mousedown', eventDown);
                canvas.addEventListener('mouseup', eventUp);
                canvas.addEventListener('mousemove', eventMove);
            });
            img.src = 'images/page1_bg.jpg';

        })(document.body.style);
    },

    y_backgroundSize : function(){
        console.log('3-size');
        h5_yt.config.y_w = document.body.clientWidth,
        h5_yt.config.y_h = document.body.clientHeight;

        var aPage = h5_yt.config.y_pages,
            aPageLR = h5_yt.config.y_pageLR;
        //console.log(aPage.length);
        h5_yt.config.y_share.get(0).style.backgroundSize = h5_yt.config.y_w+'px '+h5_yt.config.y_h+'px';
        h5_yt.config.y_page_prompt.get(0).style.backgroundSize = h5_yt.config.y_w+'px '+h5_yt.config.y_h+'px';
        for(var i=0;i<aPage.length;i++){
            aPage[i].style.backgroundSize = h5_yt.config.y_w+'px '+h5_yt.config.y_h+'px';
        }
        for(var i=0;i<aPageLR.length;i++){
            aPageLR[i].style.backgroundSize = h5_yt.config.y_w+'px '+h5_yt.config.y_h+'px';
        }
    },

    y_clickKnow : function(){
        h5_yt.config.y_page_prompt.get(0).addEventListener('touchstart', ss);
        function ss(){
            $(this).css({display:'none'});
            h5_yt.config.y_canvas.get(0).style.display = 'block';
        }
    },

    y_slider : function(){
        console.log('5-slider');
        var myslider=new iSlider({
            wrap:".wrap",
            item:".page",
            index:0,
            lastLocate:false,
            onslide:function (index) {
                if(index == 3){
                    h5_yt.config.y_page_Jt.get(0).style.display = "none";
                    var mysliderLevel=new iSlider({
                        wrap: "#page_LR",
                        item: ".pageLR",
                        index:2,
                        isVertical:false,
                        lastLocate:false
                    });
                }else{
                    h5_yt.config.y_page_Jt.get(0).style.display = "block";
                }
            }
        });
        h5_yt.config.y_page_Jt.get(0).style.display = 'block';
    },

    y_music : function(){
        var music = document.getElementById('music'),
            oMusic = document.getElementById('oMusic');
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
    },

    y_clickShare:function(){
        console.log('clickShare');
        h5_yt.config.y_clickShareTime = setInterval(function(){
            if($('.pageL_2').hasClass('play') ||$('.pageR_2').hasClass('play')){
                h5_yt.config.y_clickShare.get(0).style.display = 'block';
            }else{
                h5_yt.config.y_clickShare.get(0).style.display = 'none';
            };
        },100);
        h5_yt.config.y_clickShare.click(function(){
            h5_yt.config.y_share.get(0).style.display = 'block';
            h5_yt.config.y_share.get(0).style.webkitAnimation = 'fadeInDown 0.4s 0.3s ease-out both';
        });
        h5_yt.config.y_shareBtn.click(function(){
            h5_yt.config.y_share.get(0).style.webkitAnimation = 'fadeOutUp 0.5s 0.1s ease-out both';
        });

    },

    y_orient : function(){
        console.log('1-hs');
        //判断手机横竖屏状态：
        function hengshuping(){
            //alert(window.orientation);
            if(window.orientation==180||window.orientation==0){
                //alert("竖屏状态！");
                h5_yt.config.y_wrap.get(0).style.display = 'block';
                h5_yt.config.y_hsCon.get(0).style.display = 'none';
            }
            if(window.orientation==90||window.orientation==-90){
                h5_yt.config.y_wrap.get(0).style.display = 'none';
                h5_yt.config.y_hsCon.get(0).style.display = 'block';
            }
        }
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
        hengshuping();
    },






}
h5_yt.init();
});