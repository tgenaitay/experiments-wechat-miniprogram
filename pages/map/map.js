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
      callout: { content: "We're here!", color: "#000000", display:"BYCLICK", padding: 10 }
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  onLoad: function (options) {
  
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