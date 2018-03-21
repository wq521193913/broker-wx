// pages/home/home.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isRegister: false,
  },
  inviteFriend: function(){
    page.onShareAppMessage();
  },
  checkinCustomer: function(){
    wx.navigateTo({
      url:"/pages/checkin/checkin"
    });
  },
  brokerRegister:function(){
    wx.navigateTo({
      url: "/pages/register/register"
    });
  },
  exhibitionShow:function(id){
    wx.navigateTo({
      url: '/pages/exhibition/exhibition?id='+id,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
    
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
    // app.globalData.session_3rd = wx.getStorageSync("session_3rd");
    // app.globalData.isRegister = wx.getStorageSync("isRegister");
    
    // if (!app.globalData.session_3rd){
      
    //   app.checkLoginInfo();
    // }
    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    
    console.log(res.from);
    return {
      title: '赚外快,就是这么简单',
      path: '/image/index/index',
      imageUrl: '/image/20180314164849.png',
      success: function (res) {
        // 转发成功
        console.log(res);
      },
      fail: function (res) {
        // 转发失败
        console.log(res);
      }
    }
  }
})