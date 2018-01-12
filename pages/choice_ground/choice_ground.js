// pages/index/index.js
const $ = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  	img:'/images/',
  	ground:[
  			{img:'calender.png',name:'小伙伴1'},
  			{img:'calender.png',name:'小伙伴2'},
  			{img:'calender.png',name:'小伙伴3'},
  			{img:'calender.png',name:'小伙伴4'},
  			{img:'calender.png',name:'小伙伴5'},
  			],
    write:[
            {txt:'社区名称',content:''},
            {txt:'联系人',content:''},
            {txt:'联系号码',content:''},
            {txt:'邮箱',content:''}
            ],
    write_input:{ground_name:'',contacts:'',number:'',email:''},
    a:[{a:'a'},{a:'2'}],
    submit_index:1,
  
  },
  // write_input(e){
  //   console.log(e)
  // },
  close_submit(){
    var that = this
    that.setData({
      submit_index:0
    })
  },
  bindblur(e){
    var that = this 
    var value = e.detail.value
    var write = that.data.write
    var index = e.currentTarget.dataset.index
    $.each(write,(i,v) => {
      if(index == i){
        v.content = value
      }
    console.log(i,v)
    })
    that.setData({write})
  },
  submit(e){
    var that = this 
    var write = that.data.write
    //*******上传到后台代码


    //*******上传到后台代码
    that.setData({submit_index:3})


  },
  creat(){
    this.setData({submit_index:2})
  },
  // hidden_index(e){
  //   var that = this
  //   var index = e.currentTarget.dataset.index
  //   that.setData({submit_index:index})
  // }
  // swiperChange(e){
  // 	console.log(e)
  // },


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