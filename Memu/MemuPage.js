// Memu/MemuPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerImg: '/Img/HeaderImg/Chrysanthemum.jpg',
    imgUrls: [
      {

        link: '/pages/index/index',

        url: '/Img/SwiperImg/Desert.jpg'

      }, {

        link: '/pages/logs/logs',

        url: '/Img/SwiperImg/Hydrangeas.jpg'

      }, {

        link: '/pages/index/index',

        url: '/Img/SwiperImg/Jellyfish.jpg'

      }

    ],

    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间

    productMsg: [{ img: '/Img/SwiperImg/Tulips.jpg', ProductRemark: '111',link:'http://www.baidu.com',content: '图片A图片' }, 
      { img: '/Img/SwiperImg/Tulips.jpg', ProductRemark: '12', link: 'http://www.baidu.com',content: '图片B图片' }, 
      { img: '/Img/SwiperImg/Tulips.jpg', ProductRemark: '13', link: 'http://www.baidu.com',content: '图片C图片' }, 
      { img: '/Img/SwiperImg/Tulips.jpg', ProductRemark: '14', link: 'http://www.baidu.com',content: '图片D图片' }],
    
  
    },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})