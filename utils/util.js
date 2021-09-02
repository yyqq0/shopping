const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


const http = (url,data={},method="GET")=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      method,
      success(res){
       if(res.statusCode == 200){
         if(res.data.erron == 0){
          reject("运行错误")
           
         }else{
          resolve(res)
         }
       }
      },
      fail(err){
        wx.showToast({
          title: 'err',
        })
        reject(err)
      }
    })
  })
}

module.exports = {
  formatTime,
  http
}
