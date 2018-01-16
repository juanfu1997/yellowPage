const $ = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'/images/',
    class_list1:['美国', '中国', '巴西', '日本'],
    class_list2:['美国', '中国', '巴西', '日本'],
    store_img:[],
    store_video:[],
    hid_img:true,
    hid_video:true,
    index1:'',
    index2:'',
    list1_menu:'请选择分类',
    list2_menu:'请选择分类',
    arrow:'arrow',
    add_list:[
    '分类*：','名称*：', '电话*：', '地址*：', '邮箱：','营业时间：', '介绍：',],
    img_list:[{name:'门店图片：',img:'btn_img'},
              {name:'门店视频：',img:'btn_video'},],
    list_data:{class1:'',class2:'',name:'',tel:'',address:'',email:'',time:'',introduce:'',},
    a:{a:[{p:'p'}]}

  },
  submit(){
    var that = this
    var list_data = that.data.list_data
    list_data.class2 = that.data.list2_menu
    list_data.name = that.data.list2_menu
    list_data.class2 = that.data.list2_menu
    list_data.class2 = that.data.list2_menu
    list_data.class2 = that.data.list2_menu

  },
  del_media(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var type = e.currentTarget.dataset.type
    var store_img = that.data.store_img
    var store_video = that.data.store_video
    if(type == 0){
      wx.showModal({
      title: '',
      content: '是否移除这张照片？',
      success: function(res) {
        if (res.confirm) {
          store_img.splice(index,1)
          that.setData({store_img})
          console.log('shanchu',store_img)
        } else if (res.cancel) {
        }
      }
    })
    }else if(type == 1){
      wx.showModal({
      title: '',
      content: '是否移除这段视频？',
      success: function(res) {
        if (res.confirm) {
          store_video.splice(index,1)
          that.setData({store_img})
          console.log('shanchu',store_img)
        } else if (res.cancel) {
        }
      }
    })
    }
    
    
  },
  preview(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var store_img = that.data.store_img
    console.log(e,store_img,index,store_img[index])
    wx.previewImage({
      urls: [store_img[index]] // 需要预览的图片http链接列表
    })

  },
  uploadMedia(e){
    var that = this 
    var type = e.currentTarget.dataset.type
    var store_img = that.data.store_img
    var store_video = that.data.store_video
    var hid_img = that.data.hid_img
    var hid_video = that.data.hid_video
    var img_count = 6 - store_img.length
    if(type==0){
      wx.chooseImage({
        count: img_count, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          $.each(tempFilePaths,(i,v) => {
            store_img.push(v)
          })
            if(store_img.length >= 6){
              hid_img = false
            }
            that.setData({store_img,hid_img})
        }
      })
    }else{
      wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
            camera: 'back',
                  success: function(res) {
                    tempFilePaths = res.tempFilePath
                    $.each(tempFilePaths,(i,v) => {
                      store_video.push(v)
                    })
                    if(store_video.length != 0){
                      hid_video = false
                    }
                      that.setData({store_video,hid_video})
                  }
              })
    }
    console.log(store_img.length)
    
    
    console.log(e)
  },

  saveInput(e){
    var that = this
    var value = e.detail.value
    var list_data = that.data.list_data
    var index = e.currentTarget.dataset.index
    switch(index)
  {
  case 1:
    list_data.name = value
    break;
  case 2:
    list_data.tel = value
    if(value){
      // var a = value.match(/\/+/g)
      var b = value.split(/\/+/)
      console.log(b,value)
    }
    break;
  case 3:
    list_data.address = value
    break;
  case 4:
    list_data.email = value
    break;
  case 5:
    list_data.introduce = value
    break;
  default:
  console.log('商家资料获取错误')
    // n 与 case 1 和 case 2 不同时执行的代码
  }
  that.setData({ list_data })
    console.log(e,list_data)
  },
    

  getPickerValue(e){
    var that = this
    var index = e.detail.value
    var list1_menu = that.data.list1_menu
    var list2_menu = that.data.list2_menu
    var class_list1 = that.data.class_list1
    var class_list2 = that.data.class_list2
    var list_data = that.data.list_data
    var type = e.currentTarget.dataset.type
    console.log(that.data.a.a[0].p)
    if(type==1){
      list_data.class1 = list1_menu = class_list1[index]
      that.setData({index1:index,list1_menu,list_data})
    }else{
      list_data.class2 =list2_menu = class_list2[index]
      that.setData({index2:index,list2_menu,list_data})

    }
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(typeof this.data.class_list1)
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})