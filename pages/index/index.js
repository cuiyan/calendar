const util = require('../../utils/util.js')

Page({
  data: {
    hidden: false,
    detail: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var self = this
    util.getDetail().then(function (data) {
      self.setData({
        detail: data,
        hidden: true
      })
    })
  }
})