//app.js
App({
  serverUrl: 'http://127.0.0.1:8762',
  wxLogin: function (cb) {
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code = res.code;
        wx.getUserInfo({
          data: {
            withCredentials: true
          },
          success: res => {
            wx.setStorageSync("userInfo", res.userInfo)
            this.globalData.userInfo = res.userInfo;
            this.globalData.encryptedData = res.encryptedData;
            this.globalData.iv = res.iv;
            this.userLogin();
          }
        });
      }
    });
  },
  userLogin: function (cb) {
    const _this = this;
    if (this.globalData.code && this.globalData.userInfo) {
      wx.request({
        url: this.serverUrl + "/static/wxLogin",
        method: 'POST',
        header: { 'content-type':'application/x-www-form-urlencoded'},
        data: {
          code: _this.globalData.code,
          wxNickName: _this.globalData.userInfo.nickName,
          wxCity: _this.globalData.userInfo.city,
          wxProvince: _this.globalData.userInfo.province,
          wxCountry: _this.globalData.userInfo.country,
          wxAvatarUrl: _this.globalData.userInfo.avatarUrl,
          encryptedData: _this.globalData.encryptedData,
          iv: _this.globalData.iv
        },
        dataType: 'json',
        success: function (res) {
          console.log(res.data);
          wx.setStorageSync("session_3rd", res.data.data.session_3rd);
          wx.setStorageSync("isRegister", res.data.data.isRegister);
          _this.globalData.session_3rd = res.data.data.session_3rd;
          _this.globalData.isRegister = res.data.data.isRegister;
          _this.globalData.encryptedData = null;
          _this.globalData.iv = null;
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
    // if (!this.globalData.userInfo){
    //   this.wxUserInfo();
    // }
    
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
    intervalId:null,
    iv:null,
    isRegister:false
  },
  
})