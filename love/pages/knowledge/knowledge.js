// pages/knowledge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    },
    bindcalculus:function(e)
    {
        wx.navigateTo({
            url: '/pages/calculus_basic/calculus_basic',
          })
    },
    bindalgebra:function(e)
    {
        wx.navigateTo({
            url: '/pages/algebra_basic/algebra_basic',
          })
    },
    bindc:function(e)
    {
        wx.navigateTo({
            url: '/pages/c_basic/c_basic',
          })
    },
    bindmax:function(e)
    {
        wx.navigateTo({
            url: '/pages/max_basic/max_basic',
          })
    },
    bindhistory:function(e)
    {
        wx.navigateTo({
            url: '/pages/history_basic/history_basic',
          })
    }
})