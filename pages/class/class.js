// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'/images/',
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
  
  },
  get_class(e){
    var that = this
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/tel_list/tel_list?index='+index
    })

    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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