Page({
    data: {
        
    },
    onLoad: function(options) {
        const _this = this;
		wx.request({
			url: "https://ajax.quncrm.com/56fa4377ba1b82a4378b4798/api/ntc/ntc-workout/get-custom-train-drills",
			data: {},
			header: {
				'content-type': 'json'
			},
			success: function (res) {
                console.log(res.data);               
				_this.setData({
                    subjects:res.data
				});
			}
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