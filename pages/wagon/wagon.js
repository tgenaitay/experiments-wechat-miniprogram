// wagon.js
Page({
  // build rough data for the page
  data: {
    logs: []
  },
  // load data and log success
  onLoad: function (option) {

    console.log('wagon page loaded')

    // display toast if form success
    if(option.brief == 1){
      wx.showToast({
      title: 'Received. Thanks!',
      icon: 'success',
      duration: 3000
      });
    }
    
  }
})
