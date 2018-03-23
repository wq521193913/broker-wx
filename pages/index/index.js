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
  exhibitionShow:function(id){
    wx.navigateTo({
      url: '/pages/exhibition/exhibition?id='+id,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '/pages/wallet/wallet',
    // })
    
    wx.showShareMenu({
      withShareTicket: true
    })
    
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
    
    if(res.from == 'button'){
      return {
        title: '赚外快,就是这么简单',
        path: '/pages/register/register?invite=',
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
    }else{
      return {
        title: '家装,您的首选',
        path: '/pages/index/index',
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
    
  }
})