// pages/calculus_pratice/calculus_pratice.js
Page({
    // data:{
    //   fileID :null
    // },
    //功能：下载并自动打开文件（word/excel/ppt/pdf等）
  
    
    //获取输入内容
    // getContent(e){
    //   console.log(e.detail.value);
    //   this.setData({
    //     fileID:e.detail.value
    //   })
    // },
  
    //下载文件
    downloadFile_1(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/calculus_two.pdf" //取data里面的fileID
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
    downloadFile_2(){
        let fileID = "	cloud://test-uyidi.7465-test-uyidi-1301176859/calculus_three.pdf" //取data里面的fileID
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
    downloadFile_3(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/calculus_seven.pdf" //取data里面的fileID
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
    downloadFile_4(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/calculus_eight.pdf" //取data里面的fileID
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
    downloadFile_5(){
        let fileID = "cloud://test-uyidi.7465-test-uyidi-1301176859/calculus_nine.pdf" //取data里面的fileID
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