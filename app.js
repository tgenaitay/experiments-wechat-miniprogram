// set an app-level function to grab WeChat user info 
App({
  onLaunch: function() {
    console.log("app is launching")
  },
  onShow: function() {
    // Do something when show.
    console.log("app is shown")
  },
  onHide: function() {
    console.log("app is hidden")
  },
  onError: function(msg) {
    console.log(msg)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
});