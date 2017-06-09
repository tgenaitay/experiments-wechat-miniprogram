// pages/map/map.js
Page({
  data: {
    location: {}, // used to manipulate the map in the view
    scale: '14' // used to zoom in later
  },
  findUserLocation: function (e) {
    var that = this
    wx.getLocation({
      // API to locate user
      type: 'wgs84',
      success: function (res) {
        // storing the user coordinates
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude)
        console.log(longitude)
        
        // updating the map location and the marker
        that.setData({
          location: { latitude: latitude, longitude: longitude },
          scale: '14',
          markers: [{
            iconPath: "/image/marker.png",
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50,
            title: "You buddy",
            callout: { content: "You are here!", fontSize: 15, color: "#000000", display: "ALWAYS", padding: 10 }
          }]
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  showWagonLocation: function (e) {
    var LWlatitude = "31.219438";
    var LWlongitude = "121.443622";
    this.setData({
      location: { latitude: LWlatitude, longitude: LWlongitude },
      scale: '16',
      markers: [{
        iconPath: "/image/marker.png",
        id: 0,
        latitude: LWlatitude,
        longitude: LWlongitude,
        width: 50,
        height: 50,
        title: "Le Wagon",
        callout: { content: "We are here!", fontSize: 15, color: "#000000", display: "ALWAYS", padding: 10 }
      }]
        })
  },  
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  onLoad: function (options) {
    // setting the map location on People Square on load of the page
    this.setData({
      location: { latitude: "31.232711", longitude:"121.47575499999994"},
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