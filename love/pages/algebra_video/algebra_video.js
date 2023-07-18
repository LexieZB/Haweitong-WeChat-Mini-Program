// pages/algebra_video/algebra_video.js
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
    bindhit:function(e){
        wx.navigateTo({
            // url: '/pages/calculus/calculus',
            url: '/pages/algebra_video_hit/algebra_video_hit',
          })

    },
    bindmit:function(e){
        wx.navigateTo({
            url: '/pages/algebra_video_mit/algebra_video_mit',
          })

    },
    bindpku:function(e){
        wx.navigateTo({
            url: '/pages/algebra_video_pku/algebra_video_pku',
          })
    },
    bindfdu:function(e){
        wx.navigateTo({
            url: '/pages/algebra_video_fdu/algebra_video_fdu',
          })
    }
})