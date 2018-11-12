Page({
    data: {
        src: '../../Img/other/books.png',
        src1: '../../Img/other/books1.png',
        imgr:'<image src="../../Img/other/books1.png"></image>'
    },
    onLoad: function () {
        let that = this;
        wx.request({
            url: 'http://39.105.62.49:8080/PeterEdu/front/meController/searchFavList.action?user_id=1',
            data:{},
            method:'post',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log(res);
            }
        })
    }
});