// pages/max_test/max_test.js
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
    downloadFile_7(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/max_7.pdf" //取data里面的fileID
        if(fileID!=null&&fileID.length>0){
          console.log("下载链接",fileID);
          wx.cloud.downloadFile({
            fileID: fileID,
            success: res => { 
              console.log("文件下载成功",res);
              //提示框
              wx.showToast({
                title: '文件下载成功',
                icon:"success",
                duration:2000
              })
    
              //打开文件
              const filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log('打开文档成功',res)
                }
              })
            },
          fail: err => {
              console.log("文件下载失败",err);
            }    
        })
       }else{
        wx.showToast({
          title: '下载链接为空',
          icon:"none"
        })
      }      
    },
    downloadFile_8(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/max_8.pdf" //取data里面的fileID
        if(fileID!=null&&fileID.length>0){
          console.log("下载链接",fileID);
          wx.cloud.downloadFile({
            fileID: fileID,
            success: res => { 
              console.log("文件下载成功",res);
              //提示框
              wx.showToast({
                title: '文件下载成功',
                icon:"success",
                duration:2000
              })
    
              //打开文件
              const filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log('打开文档成功',res)
                }
              })
            },
          fail: err => {
              console.log("文件下载失败",err);
            }    
        })
       }else{
        wx.showToast({
          title: '下载链接为空',
          icon:"none"
        })
      }      
    }
})