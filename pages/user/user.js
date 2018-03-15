// pages/user/user.js
const util = require('../../utils/util.js');

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    session_3rd: '',
    userInfo: {
      avatarUrl: '/image/user_icon.png',
      nickName: '昵称'
    },
    baseUrl: app.globalData.baseUrl,
    showRight: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success:function(res){
        console.log(res);
      }
    })
  }

})