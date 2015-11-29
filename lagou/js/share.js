function share(datas){
        /*
     分享
     */
    //success: to share
    function encode(url) {
        return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
    }

    var surl = window.location.href;
    var url = "http://www.lagou.com/weixin/wx_share.json?url=" + encode(surl);
    var callback = function (json) {
        var data = json.message;
        data = eval("(" + data + ")");
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
        });
        wx.ready(function () {
            var shareData = {
                title: datas.title,
                desc: datas.desc,
                link: surl, // 分享链接
                imgUrl: datas.imgUrl,
                success: function () {
                    //alert('已分享');         
                    // 用户确认分享后执行的回调函数
                    if(datas.goToUrl)
                        window.location.href = "http://mp.weixin.qq.com/s?__biz=MzAxNzEyODA2NQ==&mid=204001564&idx=1&sn=940c1a21ef9d50dd645e6129e1a17f06#rd";
                }
            };
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
            wx.onMenuShareQQ(shareData);
            wx.onMenuShareWeibo(shareData);
            console.log('weixin support set success.');
        });
        wx.error(function (res) {
            //alert(res.errMsg);
        });
    };
    $.ajax({
        url: url,
        dataType: "jsonp",
        jsonp: "jsoncallback"
    }).done(function (response) {
        callback && callback(response);
    });
}