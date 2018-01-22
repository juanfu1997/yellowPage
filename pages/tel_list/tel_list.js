const $ = require('../../utils/common.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: getApp().globalData.img,
    class:false,
    topTitle:'',
    details:false,
    class_ground:[
                  {yellow_type:'1',userid:'390',parentid:'17',id:'103',image:'',data:''},
    ],
    tel_list:[{"typeid":103,"business_name":"真功夫","phone":"400-692-7927","address":"","email":"","intro":"","hours":"","image":"","video":"","yellow_type":null,"wxpublic":"","customjson":"","id":51,"sort":0,"status":0,"addtime":"2018-01-18T14:31:37"},],
    tel_details:[{"typeid":103,"business_name":"吉野家","phone":"400-819-7197","address":"","email":"","intro":"","hours":"","image":"","video":"","yellow_type":null,"wxpublic":"","customjson":"","id":50,"sort":0,"status":0,"addtime":"2018-01-18T14:30:15"},],
    son_ground:[],
    arrow1:'arrow2',
    arrow2:'arrow2',
    

  },
  take_call(e){
    var that = this
    var number = e.currentTarget.dataset.number
    var b = number.split(/\/+/)
      console.log(b,number)
    if(b.length > 1){
      wx.showActionSheet({
        itemList: b,
        success: function(res) {
          $.take_call(b[res.tapIndex])
          // console.log(res.tapIndex)
        }
      })
    }else if(b.length ==1){
      $.take_call('123')

    }else{
      $.alert('获取号码错误')
    }
    // console.log('11',e)
  },
  get_details(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var tel_details = that.data.tel_details
    var tel_list = that.data.tel_list

    tel_details = tel_list[index]

    if(tel_details.wxpublic){
      var wechat = ''

      // tel_details.wxpublic.split(/\//)
    }
    var a = 'a/a/a'
      var b =a.split(/\//)
      console.log('a.split',b)
    wx.setStorageSync('tel_details', tel_details)
    $.goPage(e)
    that.setData({tel_details,details:true})
    console.log(tel_details)
  },
  son_ground(e){
    var that =this
    var tel_url = 'https://www.korjo.cn/TimeApi/GetBusinessPhoneListByID'
          var tel_type = 'GET'
    var tel_dataJson = {typeid:e}
          // var aa =[]
            $.req(tel_url,tel_type,tel_dataJson,function(res){
              
            console.log('tel_url1111',res)
              that.setData({tel_list:res.data})
            })
  },
  switchType(e){
    var that = this
    var type = e.currentTarget.dataset.type
    var tel_list = that.data.tel_list
    var idArray = that.data.idArray
    console.log(idArray)
    that.son_ground(idArray[type])
  },
  query(e){
    var that = this
    console.log('e',e)
      var url = 'https://www.korjo.cn/TimeApi/GetYellowUserTypeList'
      var type = 'GET'
      var dataJson = {userid:e.userid,parentid:e.parentid}
      var tel_list = that.data.tel_list

      $.req(url,type,dataJson,function(res){
        if(res.data.length!=0){
          that.setData({class:false,class_ground:res.data})
          
          var idArray = []
          
          $.each(that.data.class_ground,(i,v) => {
            idArray.push(v.id)
            console.log('idArray',idArray)
            })
          that.setData({idArray})
          that.son_ground(idArray[0])
          // var tel_dataJson = {typeid:103}
          // for(var i = 0;i<idArray.length;i++){
          
            // console.log('tel_url1111',aa)
          // }

          }else{
            var url2 = 'https://www.korjo.cn/TimeApi/GetBusinessPhoneListByID'
            var type2 = 'GET'
            var dataJson2 = {typeid:e.parentid}
            $.req(url2,type2,dataJson2,function(res){
              // if(){}
              tel_list = res.data
              that.setData({tel_list})
              console.log('get',res)
            })
            that.setData({class:true,topTitle:e.yellow_type})

          }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if(options.userid){
      console.log('userid',options)
      that.query(options)
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