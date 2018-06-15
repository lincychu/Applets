import * as bmap from './../../libs/bmap-wx.min.js';
const app = getApp();
Page({
  data: {
    weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    showday: ['今天', '明天', ''],
    locationIcon: './../../static/images/location.png',
    now: '',
    today: "",
    forecast: '', //七日天气信息
    quality: '', //天气质量
    location: '',
    county: '',
    dress: '', // 生活指数
    province: '',
    city: '',
    district: '',
    air: '',
    actived: false,
    merName: '天气',
    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.merName//页面标题为路由参数
    });
    const date = new Date();
    this.setData({
      'showday[2]': this.data.weekday[(date.getDay() + 2) % 7]
    });
    setTimeout(() => {
      this.setData({
        loading: false
      });
    }, 600);
    this.getLocation();
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
  // 定位当前城市
  getLocation(){
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'nryRP7T3TT0PiZHToQ8IILNVnajrQiNQ'
    });
    BMap.weather({
      fail: (data) => {
        console.log('百度定位失败', data);
        const that = this;
        const now = new Date();
        const weekDay = now.getDay();
        const newData = {
          currentWeather: [{
            currentCity: "深圳市",
            date: "周三 06月13日 (实时：27℃)",
            pm25: "27",
            temperature: "29 ~ 26℃",
            weatherDesc: "小雨转多云",
            wind: "无持续风向微风"
          }],
          originalData: {
            "error": 0,
            "status": "success",
            "date": "2018-06-13",
            "results": [{
              "currentCity": "深圳市",
              "pm25": "27",
              "weather_data": [{
                "date": "周三 06月13日 (实时：27℃)",
                "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
                "weather": "小雨转多云",
                "wind": "无持续风向微风",
                "temperature": "29 ~ 26℃"
              }, {
                "date": "周四",
                "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/zhenyu.png",
                "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/zhenyu.png",
                "weather": "阵雨",
                "wind": "无持续风向微风",
                "temperature": "28 ~ 25℃"
              }, {
                "date": "周五",
                "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/zhenyu.png",
                "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/zhenyu.png",
                "weather": "阵雨",
                "wind": "无持续风向微风",
                "temperature": "28 ~ 25℃"
              }, {
                "date": "周六",
                "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/zhenyu.png",
                "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/zhenyu.png",
                "weather": "阵雨",
                "wind": "无持续风向微风",
                "temperature": "29 ~ 27℃"
              }]
            }]
          }
        };
        const pm25 = newData.currentWeather[0].pm25;
        const weatherData = newData.originalData.results[0].weather_data[0];
        const date = weatherData.date.slice(0, 3) + weatherData.date.slice(10);
        this.setData({
          city: newData.originalData.results[0].currentCity,
          today: newData.originalData.date,
          now: {
            date: date,
            dayPictureUrl: weatherData.dayPictureUrl,
            nightPictureUrl: weatherData.nightPictureUrl,
            temperature: weatherData.temperature,
            pm25: pm25,
            wind: weatherData.wind
          },
          forecast: newData.originalData.results[0].weather_data.slice(1)
        });
      },
      success: (data) => {
        const pm25 = data.currentWeather[0].pm25;
        const weatherData = data.originalData.results[0].weather_data[0];
        const date = weatherData.date.slice(0, 3) + weatherData.date.slice(10);
        this.setData({
          city: data.originalData.results[0].currentCity,
          today: data.originalData.date,
          now: {
            date: date,
            dayPictureUrl: weatherData.dayPictureUrl,
            nightPictureUrl: weatherData.nightPictureUrl,
            temperature: weatherData.temperature,
            pm25: pm25,
            wind: weatherData.wind
          },
          forecast: data.originalData.results[0].weather_data.slice(1)
        });
      }
    });
    
  },
  toggleCard(e){ // 翻牌效果
    this.setData({
      actived: !this.data.actived
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() { // 点击右上角分享
    return {
      title: '天气',
      desc: '你若安好，便是晴天!',
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