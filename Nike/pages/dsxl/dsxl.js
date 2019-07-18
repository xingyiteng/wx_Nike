const app = getApp();
Page({
    data: {
        imgUrls:[
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/2hKNd7Gv9tMV9BgO7Q3YPf1zS*tNmP40aPW8p1GnOhE!/m/dMMAAAAAAAAAnull&bo=.gDlAAAAAAADBz0!&rf=photolist&t=5',
            'http://a2.qpic.cn/psb?/V12mACl60hSBap/J0i2sL2cAasZvICE0ei.fAMsBGBA9bEbrKnDjR3vM*E!/m/dDUBAAAAAAAAnull&bo=.QDlAAAAAAADBz4!&rf=photolist&t=5',
            'http://a1.qpic.cn/psb?/V12mACl60hSBap/jDHKZeMz00zCUOZMFV8fphmqRPPtTHjaGZdKFEPW5Ko!/m/dFQBAAAAAAAAnull&bo=.QDlAAAAAAADBz4!&rf=photolist&t=5',
            'http://a2.qpic.cn/psb?/V12mACl60hSBap/1yHx9tAcmokbkwBpcnvmZ4cxys4Fsj6Hos1tQ73zDy0!/m/dDUBAAAAAAAAnull&bo=.gDmAAAAAAADBz4!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/wyLpS4oXlTnI9Pji2xB3XpJoLjU3ziE26NNpkxVlMHw!/m/dL8AAAAAAAAAnull&bo=.gDmAAAAAAADBz4!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/BFlOUNe3CgTp96fmXsE6A4UI*2Ok*ntm45XDkyJLiz4!/m/dL8AAAAAAAAAnull&bo=.gDmAAAAAAADBz4!&rf=photolist&t=5',
        ]
    },
    tc(){
        wx.showModal({
            content: '下载NTC,即可获得更多专业训练指导',
            showCancel:false
          });
    },
    onLoad: function(options) {
        //Do some initialize when page load.
        
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        if(app.globalData.aa==1&&app.globalData.check==1){
            this.setData({
                showf:true
            });
        }
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