'use strict'
;$(function(){
    FastClick.attach(document.body);
    var h5_yt = {
        config:{

            //view
            y_MarLeft:null,
            y_MarTop:null,
            y_WHRate:null,
            y_BodyWidth:null,
            y_BodyHeight:null,

            //load
            y_load:$('#load div'),
            y_loadReady:false,
            y_tiemr:null,

            //jt music hs isPc
            y_jt:$('#jt'),
            y_music:$('#music'),
            y_hsCon:$('.y_hsCon'),
            y_isPc:$('.y_isPc'),
            //phoneJudge
            y_IsPcJudge:true,

            //wrap
            y_wrap:$('.wrap'),

            //pageFist 
            y_pageFist:$('.pageFist'),
            y_pageFistBtn : $('.clickGo'),
            y_pageFNum:0,

        },
        init: function(){
            this.y_phone();
            this.y_orient();
            this.y_load();
            this.y_view('.contentList','yMobileView');
            this.y_clickGo();
        },
        y_load:function(){
            console.log('3-load');
            var _this = this;
            function loadingsys_progress(pfProgress) {
                var y_page_loadDivW = pfProgress*100 + '%';
                _this.config.y_load.css({width:y_page_loadDivW});
                if (pfProgress > 1) {
                    _this.config.y_load.hide();
                }
            }
            var gaImgs = (function() {
                var taResult = ["images/shu_pic.png","images/page1_e1.jpg","images/page1_e2.jpg","images/page2_e1.jpg","images/page2_e2.jpg","images/page2_e3.jpg","images/page2_e4.png","images/page2_e5.png","images/page3_e1.png",];
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
                loader.addProgressListener(function(e){
                    var progress = e.completedCount/ e.totalCount;
                    loadingsys_progress(progress);
                });
                loader.addCompletionListener(function(){
                    _this.config.y_loadReady = true;
                    _this.config.y_load.parent().hide();
                    _this.config.y_music.show();
                    
                   // _this.y_slider();
                    _this.y_music();
                    _this.config.y_pageFist.addClass('play');
                });
                loader.start();
            },100)
        },
        y_view:function(list,meatId){
            console.log('4-view');
            var y_Obj = document.querySelectorAll(list),
                y_MeatCon = document.getElementById(meatId);
            this.config.y_BodyWidth = document.documentElement.clientWidth,
                this.config.y_BodyHeight = document.documentElement.clientHeight;
            if(this.config.y_BodyWidth/this.config.y_BodyHeight >=320/504){
                this.config.y_WHRate = this.config.y_BodyHeight/504;
                this.config.y_MarLeft = (this.config.y_BodyWidth/this.config.y_WHRate-320)/2;
                for(var i=0; i<y_Obj.length;i++){
                    y_Obj && (y_Obj[i].style.marginLeft = this.config.y_MarLeft + 'px');
                }
                this.config.y_music.css({left:this.config.y_MarLeft});
            }else{
                this.config.y_WHRate = this.config.y_BodyWidth/320;
                this.config.y_MarTop = (this.config.y_BodyHeight/this.config.y_WHRate -504)/2;
                for(var i=0; i<y_Obj.length;i++){
                    y_Obj && (y_Obj[i].style.marginTop = this.config.y_MarTop + 'px');
                }
                this.config.y_music.css({top:this.config.y_MarTop});
            }
            y_MeatCon && (y_MeatCon.content = "width=320, initial-scale=" + this.config.y_WHRate + ", maximum-scale=" + this.config.y_WHRate + ", user-scalable=no");
            this.config.y_jt.css({bottom:this.config.y_MarTop});

        },
        y_clickGo:function(){
            var _this = this;
            this.config.y_pageFistBtn.click(function(){
                _this.config.y_pageFNum++;
                $(this).parent().parent().addClass('pageFistHide');
                _this.config.y_jt.show();
                if(_this.config.y_pageFNum == 1) _this.y_slider();
                
                
            });
        },
        y_slider:function(){
            console.log('5-slider');
            var myslider=new iSlider({
                wrap:".wrap",
                item:".page",
                index:0,
                lastLocate:false,
                onslide:function (index) { }
            });
        },
        y_music : function(){
            console.log('6-music');
            var music = document.getElementById('music'),
                oMusic = document.getElementById('oMusic');
            var result = true;
            music.onclick = function(){
                if(result) {
                    oMusic.pause();
                    this.className = '';
                    result = false;
                }else{
                    oMusic.play();
                    this.className = 'play';
                    result = true;
                }
            };
        },
        y_orient : function(){
            console.log('2-hs');
            var _this = this;
            //判断手机横竖屏状态：
            function hengshuping(){
                //alert(window.orientation);
                if(window.orientation==180||window.orientation==0){
                    //alert("竖屏状态！");
                    _this.config.y_wrap.get(0).style.display = 'block';
                    _this.config.y_hsCon.get(0).style.display = 'none';
                }
                if(window.orientation==90||window.orientation==-90){
                    _this.config.y_wrap.get(0).style.display = 'none';
                    _this.config.y_hsCon.get(0).style.display = 'block';
                }
            }
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
            hengshuping();
        },
        y_phone:function(){
            console.log('1-isPc');
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    this.config.y_isPc.hide();
                    break;
                }else{
                    this.config.y_isPc.show();
                }
            }
        }
    };
    h5_yt.init();
});






