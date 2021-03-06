// pages/class/class.js
const $ = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: getApp().globalData.img,
    korjoImg:getApp().globalData.korjoImg,
    current_ground:'',
    class_data:[
                {name:'热线电话',img:'1'},
                {name:'保安电话',img:'2'},
                {name:'物业电话',img:'3'},
                {name:'紧急医疗',img:'4'},
                {name:'医疗咨询',img:'5'},
                {name:'求助便民',img:'6'},
                {name:'维权投诉',img:'7'},
                {name:'便民电话',img:'8'},
                {name:'保坏修理',img:'9'},
                {name:'社区便民',img:'10'},
                {name:'周边学校',img:'11'},
                {name:'会所',img:'12'},
    ],
    ground_list:[],
  
  },
  go_tel_list(e){
    var that = this
    var parentid = e.currentTarget.dataset.parentid
    var userid = that.data.current_ground.userid
    var yellow_type = e.currentTarget.dataset.yellow_type
    console.log('userid',userid,parentid)
    // var parentid = that.class_data[index].id
    wx.navigateTo({
      url: '/pages/tel_list/tel_list?userid='+userid+'&parentid='+parentid+'&yellow_type='+yellow_type
    })

    console.log(e)
  },
  get_class(userid){
    var that = this
    var class_data = that.data.class_data
    var url = 'https://www.korjo.cn/TimeApi/GetYellowUserTypeList'
    var type = 'GET'
    var dataJson = {userid:userid,parentid:'0',}
    $.req(url,type,dataJson,function(res){
      class_data = res.data
      that.setData({class_data})
      console.log(class_data)
    },)
  },
  choice_ground(e){
    var that = this
    var ground_list = that.data.ground_list
    var current_ground = that.data.current_ground
    if(e.currentTarget!=undefined){
    var index = e.currentTarget.dataset.index
    
  }else{
    var index = e
    console.log(index)

  }
    console.log(ground_list)
     current_ground = ground_list[index]

    console.log(current_ground)

    that.setData({current_ground})

  },
  get_ground_list(userid,callback){
    var that = this
    var ground_list = that.data.ground_list
    var url = 'https://www.korjo.cn/TimeApi/GetYellowPagesList'
    var type = 'POST'

    $.req(url,type,null,function(res){
      ground_list = res.data
      that.get_class(userid)
      that.setData({ground_list})
      callback()

      console.log(ground_list)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if(options.index){
      this.get_ground_list(390,function(){
        that.choice_ground(options.index)
      // console.log(options)
      })
      

    }
    
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