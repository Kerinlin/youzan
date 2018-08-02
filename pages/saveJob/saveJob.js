import jobList from '../../api/detail'
Page({
  data: {
    id:'',
    job:[],
    savejob:[],
  },
  onLoad: function (options) {
    console.log(wx.getStorageSync('jobData'));
    let savejob = wx.getStorageSync('jobData')
    let index = savejob.length-1;
    console.log(savejob[index].id);
    let jobid = savejob[index].id
    let temp= jobList[jobid]
    let job= [];
    job.push(temp);
    this.setData({
      id:index,
      job: job,
    })
  },
})