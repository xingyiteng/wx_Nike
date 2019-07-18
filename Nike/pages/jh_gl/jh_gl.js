const app = getApp();
Page({
    data: {
        imgUrls:[
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/.RSvQWfjfNquE13Suf0OQts7Nn43KZY1fKbvkqBTfZg!/m/dDYBAAAAAAAAnull&bo=OATHAgAAAAARB8k!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/1APuCZ6QCuPk*.nnrdKWzbUvwXqkmwDB81PHekXB02M!/m/dLYAAAAAAAAAnull&bo=OAQ9AgAAAAARBzM!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/ZeigC*HBbZG4WNITZZhG8DZm6vjh8nNfTzi9dWGgL60!/m/dFIBAAAAAAAAnull&bo=OATMAgAAAAARB8I!&rf=photolist&t=5'
        ],
        show: false,
        tjxl:"添加此训练"
    },
    gb(){
        this.setData({ show: false });
    },
    zs(e){
        this.setData({
            cc:e.currentTarget.dataset.index
        });
        if(this.data.cc==0){
            this.setData({
                show:true,
                box_img:this.data.subjects[0].image,
                box_id:this.data.subjects[0].estDurationSec,
                box_name:this.data.subjects[0].name,
                box_video:this.data.subjects[0].video,
            });
        }
        if(this.data.cc==1){
            this.setData({
                show:true,
                box_img:this.data.subjects[1].image,
                box_id:this.data.subjects[1].estDurationSec,
                box_name:this.data.subjects[1].name,
                box_video:this.data.subjects[1].video,
            });
        }
        if(this.data.cc==2){
            this.setData({
                show:true,
                box_img:this.data.subjects[2].image,
                box_id:this.data.subjects[2].estDurationSec,
                box_name:this.data.subjects[2].name,
                box_video:this.data.subjects[2].video,
            });
        }
        if(this.data.cc==3){
            this.setData({
                show:true,
                box_img:this.data.subjects[3].image,
                box_id:this.data.subjects[3].estDurationSec,
                box_name:this.data.subjects[3].name,
                box_video:this.data.subjects[3].video,
            });
        }
        if(this.data.cc==4){
            this.setData({
                show:true,
                box_img:this.data.subjects[4].image,
                box_id:this.data.subjects[4].estDurationSec,
                box_name:this.data.subjects[4].name,
                box_video:this.data.subjects[4].video,
            });
        }
        if(this.data.cc==5){
            this.setData({
                show:true,
                box_img:this.data.subjects[5].image,
                box_id:this.data.subjects[5].estDurationSec,
                box_name:this.data.subjects[5].name,
                box_video:this.data.subjects[5].video,
            });
        }
        if(this.data.cc==6){
            this.setData({
                show:true,
                box_img:this.data.subjects[6].image,
                box_id:this.data.subjects[6].estDurationSec,
                box_name:this.data.subjects[6].name,
                box_video:this.data.subjects[6].video,
            });
        }
        if(this.data.cc==7){
            this.setData({
                show:true,
                box_img:this.data.subjects[7].image,
                box_id:this.data.subjects[7].estDurationSec,
                box_name:this.data.subjects[7].name,
                box_video:this.data.subjects[7].video,
            });
        }
        if(this.data.cc==8){
            this.setData({
                show:true,
                box_img:this.data.subjects[8].image,
                box_id:this.data.subjects[8].estDurationSec,
                box_name:this.data.subjects[8].name,
                box_video:this.data.subjects[8].video,
            });
        }
        if(this.data.cc==9){
            this.setData({
                show:true,
                box_img:this.data.subjects[9].image,
                box_id:this.data.subjects[9].estDurationSec,
                box_name:this.data.subjects[9].name,
                box_video:this.data.subjects[9].video,
            });
        }
    },
    tz(){
        app.globalData.aa = 1,
        wx.switchTab({
            url: '../me/me'
          });
    },
    ljks(){
        wx.navigateTo({
            url: '/pages/ds_video/ds_video'
        })
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
                    subjects:res.data,
                });
			}
        });
        this.setData({
            index:options.index
        });
        app.globalData.check=_this.data.index;
        console.log(app.globalData.check);
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        if(app.globalData.aa==1){
            this.setData({
                tjxl:"查看此训练"
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