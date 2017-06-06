// pages/map/map.js
Page({
  data: {
    markers: [{
      iconPath: "/image/marker.png",
      id: 0,
      latitude: 31.219438,
      longitude: 121.443622,
      width: 50,
      height: 50,
      title: "Le Wagon Shanghai",
      callout: { content: "We're here!", fontSize: 15, color: "#000000", display:"BYCLICK", padding: 10 }
    }],
    location: {}
  },
  findLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude)
        console.log(longitude)
        that.setData({
          location: { latitude: latitude, longitude: longitude },
          markers: [{
            iconPath: "/image/marker.png",
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50,
            title: "You buddy",
            callout: { content: "You are here!", fontSize: 15, color: "#000000", display: "BYCLICK", padding: 10 }
          }]

        })
        console.log(that.data.location)
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  onLoad: function (options) {
    this.setData({
      location: { latitude: "31.219438", longitude:"121.443622"},
    })
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})