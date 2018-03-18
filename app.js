//app.js
App({

  serverUrl: 'http://127.0.0.1:8762',
  wxLogin: function (cb) {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code = res.code;
      }
    });
  },
  wxUserInfo: function(cb){
    this.globalData.userInfo = wx.getStorageSync("userInfo");
    if (!this.globalData.userInfo){
      console.log(this.globalData.userInfo)
      wx.getUserInfo({
        success: res => {
          wx.setStorageSync("userInfo", res.userInfo)
          this.globalData.userInfo = res.userInfo;
          this.globalData.encryptedData = res.encryptedData;
        }
      });
    }
    
  },
  userLogin: function (cb) {
    const _this = this;
    if (this.globalData.code && this.globalData.userInfo) {
      wx.request({
        url: this.serverUrl + "/static/wxLogin",
        method: 'POST',
        data: {
          code: _this.globalData.code,
          wxNickName: _this.globalData.userInfo.nickName,
          wxCity: _this.globalData.userInfo.city,
          wxProvince: _this.globalData.userInfo.province,
          wxCountry: _this.globalData.userInfo.country,
          wxAvatarUrl: _this.globalData.userInfo.avatarUrl,
          encryptedData: _this.globalData.encryptedData
        },
        dataType: 'json',
        success: function (res) {
          wx.setStorageSync("session_3rd", res.data.data);
          _this.globalData.session_3rd = res.data.data;
        },
        fail: function (res) {
          console.log(res);
        }

      });
      if (null != this.globalData.intervalId) {
        clearInterval(this.globalData.intervalId)
      }
    }

  },
  checkLoginInfo: function(cb){
    
    if (!this.globalData.code) {
      this.wxLogin();
    }
    if (!this.globalData.userInfo){
      this.wxUserInfo();
    }

    if (!this.globalData.code || !this.globalData.userInfo){
      this.globalIntervalId = setInterval(this.userLogin(), 50);
      return;
    }else{
      this.userLogin();
    }
    
  },
  onLaunch: function () {
    // 展示本地存储能力

    // 登录
    this.wxLogin();
    // 获取用户信息
    
  },

  

  globalData: {
    userInfo: null,
    code: null,
    session_3rd:null,
    encryptedData:null,
    intervalId:null

  },
  
})