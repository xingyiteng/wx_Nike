//获取应用实例
const app = getApp()
Page({
    data: {
        imgUrls: [
            'http://m.qpic.cn/psb?/V12mACl60hSBap/Q0Qtfzjy7XNGqMd.l3SFZ2ht4NhnOsuNJe*EVH094CU!/b/dL4AAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
            'http://m.qpic.cn/psb?/V12mACl60hSBap/xCGg5RMOTnEgjgLAPUdq3FBkvxxswmOwmjJdCK13Cm8!/b/dL8AAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
            'http://m.qpic.cn/psb?/V12mACl60hSBap/3.munqWdVkAfyls.KchEugvuIzpJ0k745TGcR.ndjVs!/b/dL4AAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
            'http://m.qpic.cn/psb?/V12mACl60hSBap/x1jjCTOoggsm5v06KVgFjFuNfWXQJZ9.LKnw4*HzhOA!/b/dFIBAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
          ]
    },
    bindViewTap: function() {
        wx.switchTab({
          url: '../shouye/shouye'
        });
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