// pages/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    star: {
      type: Number,
      value: 0
    },
    showScore: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: './../../static/images/normal.png',
    selectedSrc: './../../static/images/selected.png',
    halfSrc: './../../static/images/half.png',
    key: 0,//评分
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
