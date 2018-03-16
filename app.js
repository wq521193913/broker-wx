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
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo;
        this.globalData.encryptedData = res.encryptedData;
      }
    })
  },
  userLogin: function(cb){
    
    if (!this.globalData.code) {
      this.wxLogin();
    }
    if (!this.globalData.userInfo){
      this.wxUserInfo();
    }

    if (!this.globalData.code || !this.globalData.userInfo){
      setInterval("wxGetUserInfo()", 50);
      return;
    }
    wx.request({
      url: this.serverUrl + "/static/wxLogin",
      method: 'POST',
      data: {
        code: this.globalData.code,
        wxNickName: this.globalData.userInfo.nickName,
        wxCity: this.globalData.userInfo.city,
        wxProvince: this.globalData.userInfo.province,
        wxCountry: this.globalData.userInfo.country,
        wxAvatarUrl: this.globalData.userInfo.nickName,
        encryptedData: encryptedData
      },
      dataType: 'json',
      success: function (res) {
        app.globalData.session_3rd = res.data;
      },
      fail: function (res) {
        console.log(res);
      }
    })
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
    encryptedData:null
  },
  
})