// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    btn: {CTA: 'Make me swing!', hide: 'Make it disappear..'},
    poof: '',
    animationData: {}
  },
  // load data and log success
  onLoad: function () {
    console.log('index page loaded')
  },
  swingMe: function() {
    // setup the animation config
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in-out',
    })
    this.animation = animation
    console.log("make the swing");
    
    // define the animation steps
    animation.rotate3d(0, 0, 1, 15).step()
    animation.rotate3d(0, 0, 1, -10).step()
    animation.rotate3d(0, 0, 1, 5).step()
    animation.rotate3d(0, 0, 1, -5).step()
    animation.rotate3d(0, 0, 1, 0).step()
    
    // store it in local data to send to the view
    this.setData({
      animationData: {cta: animation.export()}
    })
  },
  hideIt: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in-out',
    })
    this.animation = animation
    console.log("make the button disappear");
    animation.opacity(0).step()
    this.setData({
      animationData: { cta: animation.export() },
      poof: 'poof!'
    })
  }
})

