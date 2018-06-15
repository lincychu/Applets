// pages/mine/mine.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: './../../static/images/avatar.png',
      nickName: 'robin zhu'
    },
    notification: './../../static/images/notification.png',
    nextStep: './../../static/images/next.png',
    list: [
      [ { icon: './../../static/images/likes.png', text: '喜欢' },
        { icon: './../../static/images/note.png', text: '日记' },
        { icon: './../../static/images/album.png', text: '相册' },
        { icon: './../../static/images/report.png', text: '广播' }
      ],
      [ { icon: './../../static/images/tvs.png', text: '电视.电影' },
        { icon: './../../static/images/books.png', text: '读书' },
        { icon: './../../static/images/music.png', text: '音乐' },
        { icon: './../../static/images/events.png', text: '同城活动' }
      ],
      [ { icon: './../../static/images/topics.png', text: '豆瓣时间' },
        { icon: './../../static/images/doulist.png', text: '豆列' },
        { icon: './../../static/images/orders.png', text: '订单' },
        { icon: './../../static/images/wallet.png', text: '钱包' }
      ]
    ],
    merName: '我的',
    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo.avatarUrl){
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
    wx.setNavigationBarTitle({
      title: this.data.merName//页面标题为路由参数
    });
    setTimeout(() => {
      this.setData({
        loading: false
      });
    }, 600);
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
  onShareAppMessage() { // 点击右上角分享
    return {
      title: '我的',
      desc: '生活，除了苟且，还有诗和远方!',
      success(res) {
        wx.showToast({
          title: '分享成功',
          duration: 1500,
          icon: "success"
        });
      }
    };
  }
})