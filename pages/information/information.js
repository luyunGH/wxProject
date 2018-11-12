var util = require('../../utils/util.js')
// pages/information/information.js
var app = getApp().globalData;
// 倒计时函数
var interval = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informationList:[
      {
        "name": "",
        "school_name": "",
        "grade_name": "",
        "sex": "",
        "tel": ""
      }
    ],
    time: '获取验证码',
    currentTime: 60,//限制时间
    isClick:false,//获取验证码按钮，默认允许点击
  },

  /**
   * 生命周期函数--监听页面加载
   */
  sqhidden: function () {
    
  },
  onLoad: function () {
    // var list = [
    //   {
    //     "name": "",
    //     "school_name": "",
    //     "grade_name": "",
    //     "sex": "",
    //     "tel": ""
    //   }
     
    // ]
    // this.setData({
    //   informationList: list
    // });
    
    // console.log(this.informationList)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 实时获取到手机号
   */
  usernameInput: function (event) {
    var tel = 'informationList[0].tel';
    this.setData({ [tel]: event.detail.value });
  },
  /**
   * 获取验证码
   */
  gainAuthCodeAction:function(){
    let that = this;
    var newTel = that.data.informationList[0].tel;
    console.log(that.data.informationList[0].tel)
    /*第一步：验证手机号码*/
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;// 判断手机号码的正则
    if (newTel.length == 0) {
      util.progressTips('手机号码不能为空')
      return;
    }
    if (newTel.length < 11) {
      util.progressTips('手机号码长度有误！')
      return;
    }

    if (!myreg.test(newTel)) {
      util.progressTips('错误的手机号码！')
      return;
    }
    /*第二步：设置计时器*/
    // 先禁止获取验证码按钮的点击
    that.setData({
      isClick: true,
    })
    // 60s倒计时 setInterval功能用于循环，常常用于播放动画，或者时间显示
    var currentTime = that.data.currentTime;
    interval = setInterval(function(){
      currentTime--;//减
      that.setData({
        time: currentTime + '秒后获取'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '获取验证码',
          currentTime: 60,
          isClick: false
        })
      }
    },1000);
    /*第三步：请求验证码接口，并记录服务器返回的验证码用于判断，这里服务器也可能不返回验证码，那验证码的判断交给后台*/
    wx.request({
      url:'',
      method: 'post',
      data: {
        'tel': newTel,
        user_id: ''
      },
      header: {

      },
      success: function (res){
        console.log(res);
      }
    })
  }
})