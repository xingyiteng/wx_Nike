Page({
    data: {
        imgUrls:[
            'http://a1.qpic.cn/psb?/V12mACl60hSBap/rz0iftO0i50HhFiohmheG2szakQp3m*ZHZ11rwdzsq4!/m/dLgAAAAAAAAAnull&bo=OAQ8BQAAAAARBzU!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/pFKVNmSvU.919ZkurtMTkEhCVIijipBRapM765BHR1k!/m/dFIBAAAAAAAAnull&bo=OAQ8BQAAAAARBzU!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/NabgNqSnftktGewPSs.IPARy7Eb.qTArOoYD83JxXo8!/m/dL8AAAAAAAAAnull&bo=OAQ8BQAAAAARBzU!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/nM4ArwjRwyJg6TWRXgEKITCIXKs*rI9XhUC.b3N1ZvE!/m/dL8AAAAAAAAAnull&bo=OAQ8BQAAAAARBzU!&rf=photolist&t=5'
        ],
    },
    bindViewTap:function(){
        
          wx.showModal({
            content: '下载链接已成功复制.前往浏览器打开即可下载',
            showCancel:false
          });
          wx.showToast({
            title: '内容已复制',
            icon: 'success',
            duration: 2000
          });
    },
    onLoad: function(options) {
        
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        //Do some when page show.
        
    },
    onHide: function() {
        //Do some when page hide.
        
    },
    onUnload: function() {
        //Do some when page unload.
        
    },
    onPullDownRefresh: function() {
        //Do some when page pull down.
        
    }
})