window.onload = function(){
    var url = 'http://meishi.cjkjb.com/jssdk/do.php';
//    jsonp(
//        url,
//        {},
//        'id',
//        function(json){
//
//            var data = json;
//            console.log(data.appId);

    function callback(json) {
        //var data = json;
        console.log(data.appId);
    }
//
//        }
//    );
};
$.ajax({
    url: 'http://meishi.cjkjb.com/jssdk/do.php',
    dataType: "jsonp",
    jsonp: "id",
    success: function (response) {
        callback && callback(response);
    },
    error: function (xhr, type) {
        console.log('xhr:' + xhr + "type:" + type);
        alert("网络错误请重试")
    }
})
//function jsonp(url,data,cbName,fn){
//    //1.添加cbName
//    data[cbName] = 'jsonp'+Math.random();
//    data[cbName] = data[cbName].replace('.','');
//
//    //2. json2url
//    var arr =[];
//    for(var i in data){
//        arr.push(i+'='+data[i]);
//    }
//    var str = arr.join('&');
//
//    //3.整合cbName、fn
//    window[data[cbName]] = function(json){
//        fn(json);
//
//        //remove
//        oHead.removeChild(oS);
//        window[data[cbName]] = null;
//    }
//
//    //4. 创建、请求
//    var oS = document.createElement('script');
//    oS.src = url+'?'+str;
//
//    var oHead = document.getElementsByTagName('head')[0];
//    oHead.appendChild(oS);
//}

//wx.config({
//                debug: true,
//                appId: data.appId,
//                timestamp: data.timestamp,
//                nonceStr: data.nonceStr,
//                signature: data.signature,
//                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
//            });
//            wx.ready(function () {
//                var shareData = {
//                    title: '匆匆那年毕业季 谁来伴你同行？',
//                    desc: '匆匆那年毕业季 谁来伴你同行？',
//                    //link: surl, // 分享链接
//                    imgUrl: 'http://www.mywebs.me/item/ht5_topic/images/share_pic.jpg',
//                    success: function () {
//                        alert('已分享');
//                        // 用户确认分享后执行的回调函数
//                    }
//
//                };
//                wx.onMenuShareAppMessage(shareData);
//                wx.onMenuShareTimeline(shareData);
//                wx.onMenuShareQQ(shareData);
//                wx.onMenuShareWeibo(shareData);
//                //console.log('weixin support set success.');
//             });