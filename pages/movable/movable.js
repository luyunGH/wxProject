var initData = 'th&nbsp;is is first line\nthis is second line'
var extraLine = [];
Page({
    data: {
      x: 0,
      y: 0,
      scale: 2,
      types:'success',
      text: initData,
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'Hello&nbsp;World!'
        }]
      }],
      nodes2: [{
        name: 'h1',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: '阿云您好！'
        }]
      }]
    },
    tap: function(e) {
      this.setData({
        x: 30,
        y: 30
      })
    },
    tap2: function() {
      this.setData({
        scale: 3
      })
    },
    onChange: function(e) {
      console.log(e.detail)
    },
    onScale: function(e) {
      console.log(e.detail)
    },
    // 多选框 已选择和未选择判断事件
    checkBox: function(){
        if(this.data.types === 'success'){
            this.setData({
                types: 'circle'
            })
        }else if(this.data.types === 'circle'){
            this.setData({
                types: 'success'
            })
        }
    },
    add: function(e) {
        extraLine.push('other line')
        this.setData({
          text: initData + '\n' + extraLine.join('\n')
        })
      },
      remove: function(e) {
        if (extraLine.length > 0) {
          extraLine.pop();
          this.setData({
            text: initData + '\n' + extraLine.join('\n')
          })
        }
      }
  })