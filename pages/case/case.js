// pages/case/case.js
const util = require('../../utils/util.js');

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
    util.wxRequest({
      url: app.serverUrl + '/caseShow/caseShowPageList',
      data: {"page":1,"rows":10},
      success: function(res){
        var data = res.data;
        var caseShowData = data.data;
        console.log(caseShowData)
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})