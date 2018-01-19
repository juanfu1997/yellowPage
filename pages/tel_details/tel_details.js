const $ = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: getApp().globalData.img,
    tel_details:[{"typeid":103,"business_name":"吉野家","phone":"400-819-7197","address":"","email":"","intro":"","hours":"","image":"","video":"","yellow_type":null,"wxpublic":"","customjson":"","id":50,"sort":0,"status":0,"addtime":"2018-01-18T14:30:15"},],
  },
  take_call(e){
    var number = e.currentTarget.dataset.phone
    $.take_call(number)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var tel_details = that.data.tel_details
    var get_tel_details = wx.getStorageSync('tel_details')
    tel_details = get_tel_details
    that.setData({tel_details})
  console.log(options)
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