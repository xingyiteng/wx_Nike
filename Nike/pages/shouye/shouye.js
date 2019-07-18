Page({
    data: {
        active: 0,
        imgUrls:[
            'http://m.qpic.cn/psb?/V12mACl60hSBap/XGmpQVhlj2V9*cy0ntjRgDHPNv3dkRH0rcscD2c5Dxw!/b/dMUAAAAAAAAA&bo=OAQAAgAAAAARBw4!&rf=viewer_4',
            'http://m.qpic.cn/psb?/V12mACl60hSBap/POmxUTOZz.79Do0Q4VUUBr4BvBJSeJIh6K9R*C0cNM8!/b/dEgBAAAAAAAA&bo=OAQEAgAAAAARFxo!&rf=viewer_4',
            'http://m.qpic.cn/psb?/V12mACl60hSBap/lmQN4U4zrOgtr8aTZuuaRhIod8I2eGeYmo*ERmH72ZY!/b/dL8AAAAAAAAA&bo=OAT.AQAAAAARF.M!&rf=viewer_4'
        ]
      },
      onChange:function(event) {
        console.log(event.detail);
        console.log(imgUrls);
        var that = this;
	    that.setData({
		  active:event.detail
	  });
      },
    onLoad: function(options) {
        //Do some initialize when page load.
        
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