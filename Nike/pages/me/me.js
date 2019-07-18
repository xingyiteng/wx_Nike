
//获取应用实例
const app = getApp();



Page({
    data: {
        imgUrl:[
			'http://a2.qpic.cn/psb?/V12mACl60hSBap/Khw9KtmepX7HXgGFbEig*y99E*XChzJhUeat5MTdlZI!/m/dDEBAAAAAAAAnull&bo=OARwAgAAAAARB34!&rf=photolist&t=5',
			'http://a4.qpic.cn/psb?/V12mACl60hSBap/3isNv1WFb1tv0*y5VpKFDaPzeHxY1KwWebshH5wAnjo!/m/dIMAAAAAAAAAnull&bo=OARsAgAAAAARB2I!&rf=photolist&t=5',
			'http://a3.qpic.cn/psb?/V12mACl60hSBap/zKCD7xCl9fa.wJaUI3eFlB.j9vHO0w36RZEIIZHJPAM!/m/dL4AAAAAAAAAnull&bo=OARsAgAAAAARB2I!&rf=photolist&t=5',
			'http://a4.qpic.cn/psb?/V12mACl60hSBap/ItlVzOyXoF54GzCWo6LpK8ApYZv1FcaV8cx9dr61on8!/m/dL8AAAAAAAAAnull&bo=OARsAgAAAAARB2I!&rf=photolist&t=5',
			'http://a3.qpic.cn/psb?/V12mACl60hSBap/t6jl51qwm4egcrhpaC*qHuiUge4P.sGLG*0bCGMwBxs!/m/dL4AAAAAAAAAnull&bo=OARtAgAAAAARB2M!&rf=photolist&t=5'
		],
		newimg:[

		]
	},
	tc(){
		wx.showModal({
            content: "固话拨打800-820-8868486544\n手机拨打400-880-6453\n工作时间：9:00-18:00（周一至周五)",
            showCancel:false
          });
	},
	wwww(){
		// console.log(666)
		wx.navigateTo({
			url: '/pages/me_gl/me_gl'
	  	});
	},
    onLoad: function(options) {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
			console.log(userInfo)
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		});
	},
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
		if(app.globalData.showme==1){
			this.setData({
				gg:true
			});
		}else{
			this.setData({
				gg:false
			});
		}
		// console.log("onshow app.globalData.aa",app.globalData.aa);
		if(app.globalData.aa==1){
			this.setData({
				jbrz:true
			});
		}else{
			this.setData({
				jbrz:false
			});
		}
		if(app.globalData.sj==1){
			this.setData({
				sj:true
			});
		}else{
			this.setData({
				sj:false
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