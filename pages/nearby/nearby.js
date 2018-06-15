import * as bmap from './../../libs/bmap-wx.min.js';
var wxMarkerData = [];
Page({
    data: {
        merName: '周边',
        sliderList: [
          { selected: true, imageSource: './../../static/images/food-1.jpg' },
          { selected: false, imageSource: './../../static/images/food-2.jpg' },
          { selected: false, imageSource: './../../static/images/food-3.jpg' },
          { selected: false, imageSource: './../../static/images/food-4.jpg' },
        ],
        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        interval: 3000, // 自动切换时间间隔
        duration: 600,  // 滑动动画时长 
        indicatorColor: 'white', // 指示点颜色
        indicatorActiveColor: 'deepskyblue', //选中指示点颜色
        circular: true, // 是否采用衔接滑动
        icons: [
          [
            {
              id: 1,
              img: './../../static/images/icon_1.jpg',
              name: '美食',
              url: ''
            },
            {
              id: 2,
              img: './../../static/images/icon_2.jpg',
              name: '超市',
              url: ''
            },
            {
              id: 3,
              img: './../../static/images/icon_3.jpg',
              name: '鲜果购',
              url: ''
            },
            {
              id: 4,
              img: './../../static/images/icon_4.jpg',
              name: '下午茶',
              url: ''
            },
            {
              id: 5,
              img: './../../static/images/icon_5.jpg',
              name: '正餐优选',
              url: ''
            },
            {
              id: 6,
              img: './../../static/images/icon_6.jpg',
              name: '外卖专送',
              url: ''
            },
            {
              id: 7,
              img: './../../static/images/icon_7.jpg',
              name: '饮品站',
              url: ''
            },
            {
              id: 8,
              img: './../../static/images/icon_8.jpg',
              name: '小吃馆',
              url: ''
            }
          ],
          [
            {
              id: 9,
              img: './../../static/images/icon_9.jpg',
              name: '新商家',
              url: ''
            },
            {
              id: 10,
              img: './../../static/images/icon_10.jpg',
              name: '免配送费',
              url: ''
            },
            {
              id: 11,
              img: './../../static/images/icon_11.jpg',
              name: '鲜花蛋糕',
              url: ''
            },
            {
              id: 12,
              img: './../../static/images/icon_12.jpg',
              name: '名气餐厅',
              url: ''
            },
            {
              id: 13,
              img: './../../static/images/icon_13.jpg',
              name: '异国料理',
              url: ''
            },
            {
              id: 14,
              img: './../../static/images/icon_14.jpg',
              name: '家常菜',
              url: ''
            },
            {
              id: 15,
              img: './../../static/images/icon_15.jpg',
              name: '能量西餐',
              url: ''
            },
            {
              id: 16,
              img: './../../static/images/icon_16.jpg',
              name: '无辣不欢',
              url: ''
            }
          ]
        ],
        likeList: [{
          img: './../../static/images/shop-1.jpg',
          rank: 1,
          name: '串福居江边渔火',
          star: 4.5,
          score: 4,
          comment: 9000,
          address: '南山区常兴路常兴天虹商场西侧1楼好地方美食城（近桃园路）',
          price: 120
        }, 
        {
          img: './../../static/images/shop-3.jpg',
          rank: 2,
          name: '7分辣川湘火锅',
          star: 4.5,
          score: 4,
          comment: 8800,
          address: '盐田区东部华侨城大侠谷云中部落',
          price: 100
        }, 
        {
          img: './../../static/images/shop-4.jpg',
          rank: 3,
          name: '鼎厨川菜',
          star: 4,
          score: 4,
          comment: 7500,
          address: '宝安区西乡街道宝源路2007号宗泰未来城二楼',
          price: 90
        }, 
        {
          img: './../../static/images/shop-5.jpg',
          rank: 4,
          name: '重庆麻辣烤鱼',
          star: 3.5,
          score: 4,
          comment: 6000,
          address: '龙华区龙观东路保利悦都2楼',
          price: 78
        },
        {
          img: './../../static/images/shop-6.jpg',
          rank: 5,
          name: '麻辣一碗香',
          star: 4.5,
          score: 4,
          comment: 3000,
          address: '福田区福强路3004号益田大厦2楼',
          price: 58  
        }],
        loading: true,
    },
    makertap: function(e) {
        console.log(e);
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    onLoad: function() {
      wx.setNavigationBarTitle({
        title: this.data.merName//页面标题为路由参数
      });
      setTimeout(() => {
        this.setData({
          loading: false
        });
      }, 600);
    },
    gotoDetail(e){
      console.log(e.currentTarget.dataset.info);
      wx.setStorage({
        key: 'shopInfo',
        data: e.currentTarget.dataset.info
      })
      wx.navigateTo({
        url: "./../detail/detail",  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success: function () { },       //成功后的回调；
        fail: function() { },       //失败后的回调；
        complete:function() { }      //结束后的回调(成功，失败都会执行)
      })
    },
    switchTab(e){},
    onShareAppMessage() { // 点击右上角分享
      return {
        title: '周边',
        desc: '分享美味，收获幸福!',
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