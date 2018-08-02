// pages/detail/detail.js
import jobList from '../../api/detail'
Page({
  data: {
    job: [],
    jobList: [],
    id: '',
    isClick: false,
    jobStorage: [],
    jobId: ''
  },

  onLoad: function (options) {
    const id = options.id;
    this.setData({
      jobList: jobList,
      job: jobList[id]
    })
  },
  deliver(){
    wx.showToast({
      title: '已投递',
    });
  },
  click(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  showMore(e) {
    let key = this.data.job.jobName
    wx.navigateTo({
      url: `../search/search?inputValue=${key}`,
    })
  },
  showMap(e) {
    let address = this.data.job.address;
    // let id=this.data.id;
    switch (address) {
      case '杭州':
        this.setData({
          id: '0',
        })
        break;
      case '深圳':
        this.setData({
          id: '1',
        })
        break;
      case '北京':
        this.setData({
          id: '3'
        })
    }
    wx.navigateTo({
      url: `../map/map?id=${this.data.id}`,
    })
  },
  haveSave(e) {
    if (!this.data.isClick == true) {
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid: jobData.length,
        id: this.data.job.id
      })
      wx.setStorageSync('jobData', jobData);
      wx.showToast({
        title: '已收藏',
      });
    } else {
      wx.showToast({
        title: '已取消收藏',
      });
    }
    this.setData({
      isClick: !this.data.isClick
    })
  }
})