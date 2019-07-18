const app = getApp();
// import Toast from '../../utils/dist/toast/toast';
import Dialog from '../../utils/dist/dialog/dialog';
Page({
    data: {
        imgUrls:[
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/.RSvQWfjfNquE13Suf0OQts7Nn43KZY1fKbvkqBTfZg!/m/dDYBAAAAAAAAnull&bo=OATHAgAAAAARB8k!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/1APuCZ6QCuPk*.nnrdKWzbUvwXqkmwDB81PHekXB02M!/m/dLYAAAAAAAAAnull&bo=OAQ9AgAAAAARBzM!&rf=photolist&t=5'
        ],
        tjxl:"添加此训练"
    },
    show(e){
        console.log(e);
        var cli=e.currentTarget.dataset.index;
        console.log(cli);
        // if(cli==0){
        //     this.setData({
        //         show:!this.data.show
        //     });
        // }
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
        app.globalData.sj = 1,
        // Toast('我是提示文案，建议不超过十五字~'),
        wx.switchTab({
            url: '../me/me'
          });
    },
    sc(){
        Dialog.confirm({
            message: '点击确定结束训练'
          }).then(() => {
            app.globalData.sj='';
            wx.switchTab({
                url: '../me/me'
              });
          }).catch(() => {
            // on cancel
          });
    },
    fenxiang(){
        let that =this;
          return {
            title: '简直走别拐弯', // 转发后 所显示的title
            path: '/pages/me_xl/me_xl', // 相对的路径
            success: (res)=>{    // 成功后要做的事情
              console.log(res.shareTickets[0])
              // console.log
             
              wx.getShareInfo({
                shareTicket: res.shareTickets[0],
                success: (res)=> { 
                  that.setData({
                    isShow:true
                  }) 
                  console.log(that.setData.isShow)
                 },
                fail: function (res) { console.log(res) },
                complete: function (res) { console.log(res) }
              })
            },
            fail: function (res) {
              // 分享失败
              console.log(res)
            }
          };
        },
    onLoad: function(options) {
        this.setData({
            index:options.index,
        });
        console.log(this.data.index);
        if(this.data.index==0){
            this.setData({
                name:'何耀辉'
            });
        }
        if(this.data.index==1){
            this.setData({
                name:'周飞'
            });
        }
        if(this.data.index==2){
            this.setData({
                name:'陈曦'
            });
        }
        if(this.data.index==3){
            this.setData({
                name:'王立鑫'
            });
        }
        if(this.data.index==4){
            this.setData({
                name:'王正军'
            });
        }
        if(this.data.index==5){
            this.setData({
                name:'宋妹妹'
            });
        }
        if(this.data.index==6){
            this.setData({
                name:'钱晟'
            });
        }
        if(this.data.index==7){
            this.setData({
                name:'于洋'
            });
        }
        const _this = this;
		wx.request({
			url: "https://ajax.quncrm.com/56fa4377ba1b82a4378b4798/api/ntc/ntc-workout/get-custom-train-drills",
			data: {},
			header: {
				'content-type': 'json'
			},
			success: function (res) {
                console.log(res.data);
				console.log(res.data[0].image);                
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
       if(app.globalData.sj==1){
           this.setData({
               tjxl:"查看此训练"
           });
       }else{
        this.setData({
            tjxl:"添加此训练"
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