Page({
    data: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      indicatorColor:'rgb(0, 0, 0, .3)',
      indicatorActiveColor:'#ffff80',
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0
    },
    onLoad: function(options) {
      this.setData({
        title: options.title
      });
    },
    changeProperty: function (e) {
      var propertyName = e.currentTarget.dataset.propertyName
      var newData = {}
      newData[propertyName] = e.detail.value
      this.setData(newData)
    },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    }
  })
  