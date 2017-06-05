// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    brief: 'Send a brief in 1 minute',
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
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  }
})
