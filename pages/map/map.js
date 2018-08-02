import address from '../../api/address'
const app = getApp()
Page({
  data: {
    latitude: '',
    longitude:'',
    shortAddress:'',
    detailAddress:'',
    scale: 18,
    controls: [],
    markers:[],
  },
  onLoad: function (options) {
    const id = options.id;
    this.setData({
      latitude:address[id].latitude,
      longitude:address[id].longitude,
      shortAddress: address[id].shortAddress,
      detailAddress: address[id].detailAddress,
      controls: [{
        id: 0,
        iconPath: '../../youzan-image/back.png',
        position: {
          left:330,
          top:450,
          width:30,
          height:30,
        },
        clickable: true
      }],
      markers:[{
        iconPath: '../../youzan-image/position.png',
        id: 0,
        latitude: address[id].latitude,
        longitude: address[id].longitude,
        width: 20,
        height: 20
      }]
    })
  },
  backToMyposition(e){
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res.latitude, res.longitude);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 18,
        })
      }
    })
  }
})