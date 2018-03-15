//app.js
App({
  serverUrl: 'http://127.0.0.1:8762',
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        
        this.globalData.code=res.code;
        console.log(res);
        console.log(this.globalData.userInfo);
        wx.request({
          url: this.serverUrl + "/static/wxLogin",
          method:'POST',
          data:{
            code:res.code
          },
          dataType:'json',
          success: function(res){
            
          },
          fail: function(res){
            console.log(res);
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userLocation']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(222);
              console.log(this.globalData.code);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    code: null
  },
  
})