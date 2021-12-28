// pages/com/index.ts
const htmlShip = `<div class="div_class">
<h1>Title</h1>
<p class="p">
  Life is&nbsp;<i>like</i>&nbsp;a box of
  <b>&nbsp;chocolates</b>.
</p>
</div>`

const nodes = [{
    name: 'div',
    attrs: {
      class: 'div_class',
      style: 'line-height: 60px; color: #1AAD19;'
    },
    children: [{
      type: 'text',
      text: 'You never know what you\'re gonna get.'
    }]
  }]
Page({

    /**
     * 页面的初始数据
     */
    data: {
        htmlShip,
        nodes
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

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
    }
})