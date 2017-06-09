
// pages/cats/cats.js
var app = getApp()
Page({
  data: {
    catData: {}
  },
  onLoad: function (options) {
    var that = this
    // Call the application instance to get data 
    app.getCatData(function (catData) {
      // Update data
      that.setData({
        catData: catData
      })
    })
    console.log("the page is loaded with cats:");
    console.log(this.data.catData)
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  imgToPhone: function (e) {
    var gifId = e.target.id
    console.log(gifId)
    console.log(this.data.catData.data[gifId].images.fixed_height.url)
    var filepath = this.data.catData.data[gifId].images.fixed_height.url;
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success() {
        wx.downloadFile({
          url: filepath,
          success: function (res) {
            console.log(res.tempFilePath)
            wx.saveImageToPhotosAlbum({
              filepath: res.tempFilePath,
              success(res) {
                console.log(res)
              },
              fail(res) {
                console.log(res)
              }
            })
          }
        })
      }
    })
    
  },
  onHide: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})