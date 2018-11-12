// pages/section/section.js
Page({
  data: {
    showModal: false,
    modaltext: 'a=2,b=3,m=-7;'
  },
  // 点击弹框按钮触发函数
  show: function () {
    this.setData({
      showModal: true
    });
  },
  // 点击遮罩层触发函数
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  onCancel: function () {
    this.hideModal();
  },
  // 点击OK触发的函数
  onConfirm: function () {
    var timer;
    var that = this;
    timer = setTimeout(function () {
      that.hideModal();
    }, 100);
  },
  // self: function () {
  //   wx.navigateTo({
  //     url: '../self-collect/self-collect',
  //   })
  // },
  //   right: function () {
  //     wx.navigateTo({
  //       url: '../right/right',
  //     })
  //   },
  teacher: function () {
    wx.navigateTo({
      url: '../to-teacher/to-teacher',
    })
  }


})