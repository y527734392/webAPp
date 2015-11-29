
var callback = function (json) {
//    var data = json;
//    data = eval("(" + data + ")");
    console.log(json.appId);
    wx.config({
        debug: true,
        appId: json.appId,
        timestamp: json.timestamp,
        nonceStr: json.nonceStr,
        signature: json.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
    });
    wx.ready(function () {
        var shareData = {
            title: '122121',
            //desc: datas.desc,
            //link: surl, // 分享链接
            //imgUrl: datas.imgUrl,
            success: function () {
                //alert('已分享');
                // 用户确认分享后执行的回调函数
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
    //url: "http://meishi.cjkjb.com/jssdk/do.php?",
    dataType: "jsonp",
    jsonp: "id",
    success: function (response) {
        //console.log(response)
        //callback && callback(response);
    },
    error: function (xhr, type) {
        console.log('xhr:' + xhr + "type:" + type);
        alert("网络错误请重试")
    }
})