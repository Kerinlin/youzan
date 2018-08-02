
import category from '../../api/employ'
import jobList from '../../api/detail'
Page({
  data: {
    curIndex: '',
    isActive: false,
    jobList:[],
    cur: [],
    job: [],
    isShow: true,
    status: 0,
    isMask: false,
    isSelect: false,
    city: ['全国', '杭州', '北京', '深圳', '上海', '广州', '武汉', '重庆']
  },
  changeStatus(e) {
    let status = e.currentTarget.dataset.status;
    let cur = category;
    this.setData({
      isActive: !this.data.isActive,
      status: status,
      isMask: !this.data.isMask,
      cur: cur,
    })
  },
  select(e) {
    let curIndex = e.currentTarget.dataset.index;
    this.setData({
      isSelect: " curIndex == this.data.curIndex ? '!this.data.isActive' : 'true' ",
      isActive: false,
      isMask:false,
      curIndex: curIndex,
    })
  },
  multiSelect(e){
   let  multiIndex=e.currentTarget.dataset.index;
   this.setData({
     isSelect:!this.data.isSelect,
     curIndex:multiIndex
   })
  },
  search(e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad: function (e) {
    this.setData({
      jobList:jobList
    })
  },
  click:function (e) {
    let id =e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  }
})