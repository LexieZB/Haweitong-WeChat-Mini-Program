// pages/forum/forum.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    bindlife:function(e)
    {
        wx.navigateTo({
          url: '/pages/lifeblock/lifeblock',
        })
    },
    bindstudy:function(e)
    {
        wx.navigateTo({
          url: '/pages/studyblock/studyblock',
        })
    },
    bindactivity:function(e)
    {
        wx.navigateTo({
          url: '/pages/activityblock/activityblock',
        })
    },
    bindsocial:function(e)
    {
        wx.navigateTo({
          url: '/pages/socialblock/socialblock',
        })
    },
    bindpost:function(e)
    {
        wx.navigateTo({
          url: '/pages/submit/submit',
        })
    },
    bindrule:function(e)
    {
        wx.navigateTo({
          url: '/pages/blockrule/blockrule',
        })
    },
    blur:function(e){
        console.log(e.detail.value)
        this.setData({
          search:e.detail.value
        })
      },
      find:function(e){
        let search = this.data.search
        if(search==""){
          wx.showToast({
            title: '请输入内容',
          })
        }else{
          this.setData({
            search:''
          })
          wx.navigateTo({
            url: '/pages/search_show/search_show?data='+search,
          })
        }
        
      }

})