import jobList from '../../api/detail'
Page({
  data: {
    confirm: '取消',
    width: '',
    isConfirm: '',
    inputValue: '',
    sercherStorage: [],
    isShow: false,
    isHide: false,
    isCover: true,
    result: []
  },
  onLoad: function (options) {
    const inputValue = options.inputValue;
    if (wx.getStorageSync('searchData') == '') {
      this.setData({
        isHide: true,
        isCover: true,
      })
    } else {
      this.setData({
        inputValue: inputValue,
        confirm: '完成',
        sercherStorage: wx.getStorageSync('searchData') || [],
        isHide: false,
        isShow: true
      })
    }
  },
  changeValue(e) {
    let inputValue = e.detail.value;
    if (inputValue == '') {
      this.setData({
        confirm: '取消',
        isConfirm: false,
        isHide: false, //显示历史记录container
        width: '85%',
        isShow: true,  //显示图标以及标签栏  
        isCover: true //隐藏搜索结果的container
      })
    } else {
      this.setData({
        confirm: '完成',
        inputValue: inputValue
      })
    }
  },//监听输入

  confirmValue(e) {
    let value = this.data.inputValue;//获取输入值
    if (this.data.confirm === '完成') {
      let result = [];
      for (let i in jobList) {
        if (jobList[i].jobName.indexOf(value) >= 0) {
          result.push(jobList[i]);
          this.setData({
            result
          })
        }
        if (this.data.result.length == 0) {
          wx.showToast({
            title: '未找到数据',
          });
          this.setData({
            isConfirm: false,
            isHide: false
          })
        }
      }//搜索数据匹配

      // 第二种搜索方法 正则匹配
      // let result=[];
      // let reg=new RegExp(value);
      // for(var i=0;i<jobList.length;i++){
      //   if(jobList[i].jobName.match(reg)){
      //     result.push(jobList[i]);
      //     this.setData({
      //       result
      //     })
      //   }
      // }
      let searchData = this.data.sercherStorage;
      searchData.push({
        id: searchData.length,
        name: value
      })
      wx.setStorageSync('searchData', searchData); //设置缓存
      this.setData({
        isConfirm: true,  //隐藏搜索按钮
        width: '95%',
        inputValue: value,
        isHide: true,   //隐藏历史记录container
        isShow: false,    //隐藏图标以及标签栏
        isCover: false    //显示搜索结果
      })
    } else {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }//点击取消回到上个页面

  },
  clearStorage(e) {
    wx.clearStorageSync('searchData');
    wx.showModal({
      title: '提示',
      content: '确定删除全部历史记录？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            sercherStorage: [],
            isShow: false
          })
        } else if (res.cancel) {
          return false;
        }
      }
    })
  },

})