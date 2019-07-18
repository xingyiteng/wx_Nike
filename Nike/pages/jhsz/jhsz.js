const app = getApp();
import Notify from '../../utils/dist/notify/notify';
Page({
  data: {
    activeNames: ["1"],
    currentDate: "",
    minDate: new Date().getTime(),
    currentDateval: new Date().getTime(),
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    riqi: false,
    tian: false,
    rizi: "",
    cishu:'',
    hy:''
  },
  ftime(time) {
    if (time != "" && time != null && time != "null") {
      var datetime = new Date();
      datetime.setTime(time);
      var year = datetime.getFullYear();
      var month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      var date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var hour =
        datetime.getHours() < 10
          ? "0" + datetime.getHours()
          : datetime.getHours();
      var minute =
        datetime.getMinutes() < 10
          ? "0" + datetime.getMinutes()
          : datetime.getMinutes();
      var second =
        datetime.getSeconds() < 10
          ? "0" + datetime.getSeconds()
          : datetime.getSeconds();
      return (
        year +
        "年" +
        month +
        "月" +
        date +
        "日"
      );
    } else {
      return "";
    }
  },
  cishu() {
    this.setData({
      cishu: "： 2-3天",
      tian: true,
      tian1: false,
      tian2: false,
      tian3: false
    });
    console.log(this.data.cishu);
  },
  cishu2() {
    this.setData({
      cishu: "： 3-4天",
      tian1: true,
      tian: false,
      tian2: false,
      tian3: false
    });
    console.log(this.data.cishu);
  },
  cishu3() {
    this.setData({
      cishu: "： 4-5天",
      tian: false,
      tian1: false,
      tian3: false,
      tian2: true,
      ss: 0
    });
  },
  cishu4() {
    this.setData({
      cishu: "： 5-6天",
      tian: false,
      tian1: false,
      tian2: false,
      tian3: true
    });
  },
  hy() {
    this.setData({
      hy: "： 每周0-1小时",
      tiana: true,
      tiana1: false,
      tiana2: false,
      tiana3: false
    });
  },
  hy2() {
    this.setData({
      hy: "： 每周2-3小时",
      tiana1: true,
      tiana: false,
      tiana2: false,
      tiana3: false
    });
  },
  hy3() {
    this.setData({
      hy: "： 每周5-8小时",
      tiana: false,
      tiana1: false,
      tiana3: false,
      tiana2: true
    });
  },
  hy4() {
    this.setData({
      hy: "： 每周9+小时",
      tiana: false,
      tiana1: false,
      tiana2: false,
      tiana3: true
    });
  },
  onInput(event) {
    let temp = this.ftime(event.detail)
    this.setData({
      currentDateval: event.detail,
      currentDate: temp
    });
    console.log(event, this.data.currentDate);
  },
  oncancel() {
    this.setData({
      riqi: false
    });
  },
  onconfirm(event) {
    // let qwe = event.detail.value
    // console.log(qwe)
    let temp = this.ftime(event.detail)

    this.setData({
      currentDateval: event.detail,
      currentDate: temp,
      qq: true,
      riqi: false
      // rizi:this.event.detail.value,
    });
    console.log(this.data.currentDate);
    // console.log(rizi)
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  dianji() {
    this.setData({
      riqi: true
    });
  },
  qd() {
    this.setData({
      qq: true
    });
    // 获取当前时间年月日
    // var timestamp = Date.parse(new Date());
    // var date = new Date(timestamp);
    //获取年份
    // var Y =date.getFullYear();
    //获取月份
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期
    // var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // let newsdate = this.data.formatter.value
    // console.log(newsdate)
    this.setData({
      // Y:Y,
      // M:M,
      // D:D,
      // rizi: Y+'年'+M+'月'+D+'日'
      rizi: this.data.currentDate
      // newdata:
    });
    // console.log(this.data.formatter)
    // console.log(this.data.rizi)
  },
  tz: function() {
    if(this.data.cishu!==""&&this.data.hy!==""&&this.data.rizi!==""){
      app.globalData.showme=1,
    wx.switchTab({
      url: "../me/me"
    });
    }else{
      Notify({
        text: '请填写您的计划',
        duration: 1000,
        selector: '#custom-selector',
        backgroundColor: '#f44'
      });
    }
  },
  onLoad: function(options) {},
  onReady: function() {
    //Do some when page ready.
  },
  onShow: function() {
    this.setData({
      currentDate: this.ftime(new Date().getTime())
    })


    // 获取当前时间年月日
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份
    var Y = date.getFullYear();
    //获取月份
    var M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    //获取当日日期
    var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    this.setData({
      Y: Y,
      M: M,
      D: D
    });
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
});
