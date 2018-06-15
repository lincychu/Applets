// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merName: '详情',
    addressIcon: './../../static/images/address.png',
    info: {},
    menuArr: ['点菜', '评论', '商家'],
    left: '0%',
    top: '0%',
    list: [{
      name: '本店主推',
      childList: [{
        name: '渔火火锅',
        img: './../../static/images/demo.png',
        sum: 22,
        price: 120,
        laud: 22,
        num: 0,
      }, {
        name: '小龙虾火锅',
        img: './../../static/images/demo.png',
        sum: 21,
        price: 110,
        laud: 10,
        num: 0,
        }, {
          name: '进口小龙虾火锅',
          img: './../../static/images/demo.png',
          sum: 21,
          price: 180,
          laud: 8,
          num: 0,
      }, {
        name: '江火火锅',
        img: './../../static/images/demo.png',
        sum: 21,
        price: 90,
        laud: 28,
        num: 0,
      }],
    },{
        name: '新品尝鲜',
        childList: [{
          name: '热牛火锅',
          img: './../../static/images/demo.png',
          sum: 22,
          price: 120,
          laud: 86,
          num: 0,
        }],
    }, {
        name: '招牌菜品',
        childList: [{
          name: '川香火锅',
          img: './../../static/images/demo.png',
          sum: 22,
          price: 120,
          laud: 120,
          num: 0,
        }],
    }, {
        name: '经典菜品',
        childList: [{
          name: '秘制火锅',
          img: './../../static/images/demo.png',
          sum: 22,
          price: 100,
          laud: 1000,
          num: 0,
        }, {
          name: '魔鬼火锅',
          img: './../../static/images/demo.png',
          sum: 100,
          price: 100,
          laud: 999,
          num: 0,
        }],
    }],
    commentsList: [{
      userImg: './../../static/images/userImg-1.jpg',
      userName: '提拉米苏',
      starNum: 5,
      date: '2018-06-18',
      comment: '环境很好，味道很好，孩子喜欢。'
    }, {
      userImg: './../../static/images/userImg-2.png',
      userName: '爱吃的吃货',
      starNum: 4.5,
      date: '2018-06-17',
      comment: '好吃啊好吃，怪不得是第一，味道真的不错。'
    }, {
      userImg: './../../static/images/userImg-3.jpg',
      userName: '琪琪',
      starNum: 4,
      date: '2018-06-17',
      comment: '菜品很新鲜，味道超好吃，服务也很热情。'
    }],
    service: [
      { img: './../../static/images/wifi.png', name: 'WiFi' }, 
      { img: './../../static/images/onSmoking.png', name: '禁烟' }, 
      { img: './../../static/images/seat.png', name: '卡座' }, 
    ],
    addImg: './../../static/images/add.png',
    lessImg: './../../static/images/less.png',
    shoppingCartImg: './../../static/images/shoppingCart.png',
    listIndex: 0, //列表激活项
    menuActive: 0,
    total: 0, //总价
    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    setTimeout(() => {
      this.setData({
        loading: false
      });
    }, 600);
    wx.getStorage({
      key: 'shopInfo',
      success: function (res) {
        that.setData({
          info: res.data,
          merName: res.data.name
        });
        wx.setNavigationBarTitle({
          title: that.data.merName//页面标题为路由参数
        });
      },
    });
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
  toggleMenu(e){
    console.log(e.currentTarget.dataset.index);
    this.setData({
      left: e.currentTarget.dataset.index * 33.33333333333 + '%',
      menuActive: e.currentTarget.dataset.index
    });
  },
  toggleSiderMenu(e){
    console.log('toggleSiderMenu',e.currentTarget.dataset.sider);
    this.setData({
      top: e.currentTarget.dataset.sider * 2.4 + "em",
      listIndex: e.currentTarget.dataset.sider
    });
  },
  minus(e){ // 减少
    const index = e.currentTarget.dataset.min;
    const that = this;
    const newData = that.data.list;
    let theNum = newData[that.data.listIndex].childList[index].num;
    if (theNum > 0){
      newData[that.data.listIndex].childList[index].num--;
      that.setData({
        list: newData
      });
      that.getTotal();
    }
  },
  add(e){ // 添加
    const index = e.currentTarget.dataset.add;
    const that = this;
    console.log(index);
    const newData = that.data.list;
    newData[that.data.listIndex].childList[index].num++;
    that.setData({
      list: newData
    });
    that.getTotal();
  },
  getTotal(){ // 计算价格
    const list = this.data.list;
    let total = 0;
    list.forEach((item, index) => {
      item.childList.forEach((items, ind) => {
        total = total + items.num * items.price;
      });
    });
    this.setData({
      total: total
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})