App({
  onLaunch: function() {
    console.log("app is launching");
    var that = this

    var key = "dc6zaTOxFJmzC"
    var endpoint = "https://api.giphy.com/v1/gifs/"
    var search = "search?q=funny+cat"

    wx.request({
      url: endpoint + search +"&api_key="+key,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // res contains all the HTTP request data
        console.log(res.statusCode);
        console.log("app is loaded with cats");
        // we can save it to the globalData storage
        that.globalData.catData = res.data
      },
      fail: function (res) {
        console.log(res.data);
        console.log(res.statusCode);
      },
      complete: function (res) {
        console.log(res.data);
        console.log(res.statusCode);
      }
    })
    
  },
  getCatData: function (cb) {
    var that = this
    typeof cb == "function"
    cb(this.globalData.catData)
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
  globalData:{
    catData:null
  }
});