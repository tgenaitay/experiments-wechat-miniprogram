// brief.js
// import Leancloud.cn library to store objects on the cloud
const AV = require('../../utils/av-weapp-min.js');
const Brief = require('../../model/brief.js');
var app = getApp()
Page({
  // build rough data for the page
  data: {
    userInfo: {},
    loading: false,
  },
  // load data and log success
  onLoad: function () {
    console.log('brief page loaded')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // handle the form submission
  bindFormSubmit: function(e) {
    // LOADING
    // 1. enable the loading animation on send button
    this.setData({
      loading: !this.data.loading
    })
    // 2. show a Loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
    // LOCAL STORAGE
    var nickName = e.detail.value.nickName
    var email = e.detail.value.email
    var phone = e.detail.value.phone
    var company = e.detail.value.company
    var description = e.detail.value.description
    var offer = e.detail.value.offer
    
    // LEANCLOUD PERMISSIONS
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    setTimeout(function(){
    // LEANCLOUD STORAGE
    new Brief({
          name: nickName,
          email: email,
          phone: phone,
          company: company,
          description: description,
          offer: offer
        }).setACL(acl).save().catch(console.error);
    
    // REDIRECT USER
    wx.reLaunch({
      url: '/pages/wagon/wagon?brief=1'
    });
    }, 2000);
     
  }  
  
})
