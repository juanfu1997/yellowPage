const $ = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: getApp().globalData.img,
    tel_details:[{"typeid":103,"business_name":"吉野家","phone":"400-819-7197","address":"","email":"","intro":"","hours":"8:00-12:00","image":"","video":"","yellow_type":null,"wxpublic":"","customjson":"","id":50,"sort":0,"status":0,"addtime":"2018-01-18T14:30:15"},],
    showTab:[
              {show:false,class:'tab'},
              {show:false,class:'tab'},
              {show:false,class:'tab'},
    ],
    tool:[
          {img:'share.png',txt:'分享'},
          {img:'error.png',txt:'报错'},
    ],
  },
  take_call(e){
    var number = e.currentTarget.dataset.phone
    $.take_call(number)
  },
  followWechat(){},
  get_wechat(e){
    var that = this
    var wechat = {name:'',http:''}
    wechat.http = e.replace(/.*?\//,'')
    wechat.name = e.split(/\//)
    wechat.name = wechat.name[0]
    that.setData({wechat})
  },
  showTab(e){
    var that = this
    var showTab = that.data.showTab
    var index = e.currentTarget.dataset.index
    $.each(showTab,(i,v) =>{
      v.show = true
      v.class = 'tab_choiced'
    })
    showTab[index].show = false
    showTab[index].class = 'tab'
    that.setData({showTab})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var RevSessionCommon={"id": 36,
    //                   "param": {"touser": "",
    //                       "msgtype": "link",
    //                           "link": {"title": "第三方名称",
    //                           "description": "关注KORJO公众号，接收推送提醒",
    //                           "url": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4NTc0OTA5NA==&scene=124&from=singlemessage",
    //                           "thumb_url": "http://p.m.fans-me.com/countdownImg/logo.jpg"
    //                           }
    //                   }
    //                   }
    var that = this
    var tel_details = that.data.tel_details
    var showTab = that.data.showTab
    var get_tel_details = wx.getStorageSync('tel_details')
    
    if(get_tel_details){
      tel_details = get_tel_details

        // var RevSessionCommon = that.data.RevSessionCommon

          // RevSessionCommon.param.link = JSON.stringify(RevSessionCommon.param.link)
          // RevSessionCommon.param = JSON.stringify(RevSessionCommon.param)
          // RevSessionCommon = JSON.stringify(RevSessionCommon)
          // console.log('RevSessionCommon1', RevSessionCommon)


          // console.log('RevSessionCommon',RevSessionCommon)
          // that.setData({RevSessionCommon})

          if(tel_details.wxpublic){
            that.get_wechat(tel_details.wxpublic)
          }
          // if(tel_details.intro||tel_details.image||tel_details.video){
            if(tel_details.intro){
              $.each(showTab,(i,v) =>{
                v.show = true
                v.class = 'tab_choiced'
              })
              showTab[0].show = false
              showTab[0].class = 'tab'
            }else if(tel_details.image){
              $.each(showTab,(i,v) =>{
                v.show = true
                v.class = 'tab_choiced'
              })
              showTab[1].show = false
              showTab[1].class = 'tab'
            }else if(tel_details.video){
              $.each(showTab,(i,v) =>{
                v.show = true
                v.class = 'tab_choiced'
              })
              showTab[2].show = false
              showTab[2].class = 'tab'
            }
            // that.setData({showTab})
          // }
          that.setData({tel_details,showTab,typeid:options.typeid})
    }else{
      var url = 'https://www.korjo.cn/TimeApi/GetBusinessPhoneListByID'
      var type = 'GET'
      var dataJson = {typeid:options.typeid}
      var index = options.index
      $.req(url,type,dataJson,(res) =>{
        tel_details = res.data[index]
        that.setData({tel_details})
        console.log('res',tel_details)
      })
    }

  console.log('11',options)
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
  onShareAppMessage: function (res) {
      return{
        title:'附近小黄页，电话我知道！',
        path:'/pages/tel_details/tel_details?typeid='+that.data.typeid+'&index='+that.data.index,
        success(res){
          console.log('res',res)
        }
      }
  }
})