var innerAudioContext = wx.createInnerAudioContext();
console.log(innerAudioContext);
Page({
    // onReady: function (e){
    //     this.audioCtx = wx.createAudioContext('myAudio')
    // },
    data: {
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    onShow: function () {
        // 音频的数据连接，用于直接播放
        innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    },
    // 点击播放
    audioPlay: function () {
        innerAudioContext.play();
    },
    audioPause: function () {
        innerAudioContext.pause();
    },
    audio14: function () {
        innerAudioContext.seek(14);
    },
    audioStart: function () {
        innerAudioContext.seek(0);
    },
    takePhoto: function () {
        var ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        })
    },
    onReady: function(res) {
        this.ctx = wx.createLivePusherContext('pusher')
      },
    statechange: function(e) {
        console.log('live-pusher code:', e.detail.code)
    },
    bindStart: function() {
        this.ctx.start({
            success: res => {
            console.log('start success')
            },
            fail: res => {
            console.log('start fail')
            }
        });
    },
    bindPause: function() {
    this.ctx.pause({
        success: res => {
        console.log('pause success')
        },
        fail: res => {
        console.log('pause fail')
        }
    })
    },
    bindStop: function() {
        this.ctx.stop({
            success: res => {
            console.log('stop success')
            },
            fail: res => {
            console.log('stop fail')
            }
        });
    },
    bindResume: function() {
        this.ctx.resume({
            success: res => {
            console.log('resume success')
            },
            fail: res => {
            console.log('resume fail')
            }
        });
    },
    bindSwitchCamera: function() {
        this.ctx.switchCamera({
            success: res => {
            console.log('switchCamera success')
            },
            fail: res => {
            console.log('switchCamera fail')
            }
        })
    }
});