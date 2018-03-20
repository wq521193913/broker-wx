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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '/pages/register/register',
    // })
   
    app.globalData.session_3rd = wx.getStorageSync("session_3rd");
    app.globalData.isRegister = wx.getStorageSync("isRegister");
    
    if (!app.globalData.session_3rd){
      
      app.checkLoginInfo();
    }
    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(1)
    console.log(app.globalData.isRegister)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(2)
    console.log(app.globalData.isRegister)
    this.isRegister = app.globalData.isRegister;
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
  onShareAppMessage: function () {
  
  }
})