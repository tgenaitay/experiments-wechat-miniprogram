// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    CTA: 'Click me please',
    userInfo: {}
  },
  // load data and log success
  onLoad: function () {
    console.log('index page loaded')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
