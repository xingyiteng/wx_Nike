const app = getApp();
import Dialog from '../../utils/dist/dialog/dialog';
Page({
    data: {
        imgUrls:[
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/iQQAlTzK*dypWhv9OD6I1aAZURgGDM3YJB.fa4szEuo!/m/dL8AAAAAAAAAnull&bo=OAQ2AgAAAAARBzg!&rf=photolist&t=5'
        ]
    },
    jieshu(){
        Dialog.confirm({
            message: '点击确定结束训练'
          }).then(() => {
            app.globalData.showme='';
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
        path: '/pages/index/index', // 相对的路径
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
    wzjh(){
      Dialog.alert({
        message: '分享到10个微信群即可解锁全部计划'
      }).then(() => {
        // on close
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