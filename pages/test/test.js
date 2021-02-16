Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"测试",
    flag:false,
    num1:5,
    num2:8,
    user:[
    {
      username:"小二",
      sex: "男",
      age:15
    },
    {
      username: "小三",
      sex: "男",
      age: 15
    },
    {
      username: "小四",
      sex: "男",
      age: 15
    }
    ],
    test:[
      {
        username:"wangwu",
        sex: "男",
        age: 12
      },
      {
        username: "wawu",
        sex: "女",
        age: 16
      }
    ],
  },
  test_1: function () {
    console.log("这是输出1");
  },
  test_2: function () {
    console.log("这是输出2");
    this.setData({
      content:"465"
    });
  },
  test_3: function (e) {
    console.log(e);
  },
  test_4: function (e) {
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onShareAppMessage: function () {
    
  }
})