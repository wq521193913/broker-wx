// pages/case/case.js
const util = require('../../utils/util.js');

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseShows:[],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLoginInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    _this.caseShowList();
  },

  /**
   * 获取案例展示列表
   */
  caseShowList: function(){
    var _this = this;
    util.wxRequest({
      url: app.serverUrl + '/caseShow/caseShowPageList',
      data: {"page":_this.data.page,"rows":10},
      success: function(res){
        var data = res.data;
        var caseShowData = data.data;
        _this.setData({
          caseShows: caseShowData.rows
        })
        console.log(caseShowData)

      }
    })
  },
  //效果图
  showExhibition: function(){
    wx.navigateTo({
      url: '/pages/exhibition/exhibition',
    })
  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {
    var _this = this;
    _this.setData({
      page:1
    })
    _this.caseShowList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})