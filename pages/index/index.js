// index.js
var app = getApp()
Page({
  // load data and log success
  onLoad: function () {
    console.log('index page loaded')
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },
  vibratePhone: function (e) {
    if (wx.vibrateLong) {
      wx.vibrateLong()
    } else {
      // can't use
      wx.showModal({
        title: 'Problem',
        content: 'The Vibrate API is not available on this phone'
      })
    }
    console.log("vibrate!!")
  }
})
