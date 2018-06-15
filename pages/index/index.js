//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    welcome: '欢迎',
    userInfo: {},
    hasUserInfo: false,
    sliderList: [
      { selected: true, imageSource: './../../static/images/banner1.jpg'},
      { selected: false, imageSource: './../../static/images/banner2.jpg'},
      { selected: false, imageSource: './../../static/images/banner3.jpg'},
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔
    duration: 600,  // 滑动动画时长 
    indicatorColor: 'white', // 指示点颜色
    indicatorActiveColor: 'deepskyblue', //选中指示点颜色
    circular: true, // 是否采用衔接滑动
    hot: {
      periods: 10,
      keyWords: '权利的背面 | 还原一个真实的汉武帝'
    },
    hotMovie: [
      './../../static/images/movie-1.png',
      './../../static/images/movie-2.png',
      './../../static/images/movie-3.png',
      './../../static/images/movie-4.png'
    ],
    merName: '首页',
    loading: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: this.data.merName//页面标题为路由参数
    });
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
    setTimeout(() => {
      this.setData({
        loading: false
      });
      wx.hideNavigationBarLoading();
    }, 600);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchTab: function (e) {
    var sliderList = this.data.sliderList;
    var i, item;
    for (i = 0; item = sliderList[i]; ++i) {
      item.selected = e.detail.current == i;
    }
    this.setData({
      sliderList: sliderList
    });
  },
  onShareAppMessage() { // 点击右上角分享
    return {
      title: '首页',
      desc: '分享生活，收获感动!',
      success(res){
        wx.showToast({
          title: '分享成功',
          duration: 1500,
          icon: "success"
        });
      }
    };
  }
})
