import apis from "../../apis/index"
import {http} from "../../utils/util"
Page({
    data: {
        // 跳转商品搜索页面
       
        list :[]
    },
    toseach(){
        console.log(this.data.list)
    },
    async getAll(){
       const res = await http(apis.homeIndex)
       console.log(res)
       this.setData({
        list : res
       })
       console.log(this.data.list)
    },
    onLoad: function (options) {
      this.getAll()
      console.log(this.data.list)
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