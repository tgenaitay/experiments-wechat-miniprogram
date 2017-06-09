// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    userInfo: {}
  },
  // load data and log success
  onLoad: function () {
    console.log('index page loaded');
    /// userinfo
    var that = this
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(this.data.userInfo.nickName)
  }
})

