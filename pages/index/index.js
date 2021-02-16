//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    flag:true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconType:["success","success_no_circle","warn","waiting","cancel","download","search","clear"],
    iconSize:[10,15,20,30,40],
    test: ["球","帽","曲"],
    color: ["red","pink","blue"],

    src: "../../images/1.png"
  },
  error:function(e){
    console.log(e);
  },
  load: function (e) {
    console.log(e);
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  move:function(){
    console.log(e);
    console.log(e.touches[0].x);
  },

  onLoad: function () {
    let c=wx.createCanvasContext("my");
    c.fillRect(20, 20, 150,150);






    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  test:function(e){
    console.log("e");
  },
  test1: function (e) {
    console.log("tets");
  },
  test2: function (e) {
    this.setData({
      flag:1
    });
    console.log("tets222");
  },  
  test3: function (e) {
    console.log(e);
    console.log(e.detail.value);
    return "我是返回值";
  }, 
  test4: function (e) {
    console.log(e);
  }, 
  test5: function (e) {
    console.log("123");
  }, 
  test6: function (e) {
    console.log("123");
  }, 
  radio: function(e){
    console.log(e);
  },
  box: function(e){
    console.log(e);
  },
  submit:function(e){
    console.log(e);
  }
})
