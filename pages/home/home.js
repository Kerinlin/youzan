// pages/home/home.js
import address from '../../api/address'
Page({
  data: {
    images: [
      { url: '../../youzan-image/1.jpg' },
      { url: '../../youzan-image/2.jpg' },
      { url: '../../youzan-image/3.jpg' },
      { url: '../../youzan-image/4.jpg' },
      { url: '../../youzan-image/5.jpg' },
      { url: '../../youzan-image/6.jpg' },
      { url: '../../youzan-image/7.jpg' },
      { url: '../../youzan-image/8.jpg' },
      { url: '../../youzan-image/9.jpg' },
    ],
    isFold: true,
    productImg: [
      { url: '../../youzan-image/p1.jpg' },
      { url: '../../youzan-image/p2.jpg' },
      { url: '../../youzan-image/p3.jpg' },
    ],
    name: ['有赞零售'],
    current: 1,
    place:[],

  },
  onLoad: function (options) {
    let place=address;
    this.setData({
      place:place
    })
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  changeDec: function (e) {
    let current = e.detail.current;
    switch (current) {
      case 0:
        this.setData({
          name: '有赞零售'
        })
        break;
      case 1:
        this.setData({
          name: '有赞云'
        })
        break;
      case 2:
        this.setData({
          name: '有赞微商城'
        })
        break;
    }
    this.setData({
      current: current,
    })
  },
  showMore:function () {
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },
  openMap:function (e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/map/map?id=${index}`,
    }) 
  },
  open: function () {
    wx.showActionSheet({
      itemList: ['生成朋友圈分享图', '转发给好友或群聊', '生成长图'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  }
})