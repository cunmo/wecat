// pages/grammar/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        message: "模板语法配置",
        isClick: false,
        // array: [{a: [1,2,3,4], b: 2}, {a: [3,4,5,6], b: 4}, {a: [3,7,8,9], b: 6}],
        array: [{
            messagelo: 'foo',
            a: [{
                s: 1,
                b: 2
            }]
          }, {
            messagelo: 'bar',
            a: [{
                s: 100,
                b: 2
            }]
          }],
        ids: 123,
        a: 1,
        b: 2
    },

    tapChangeMessage: function() {
        this.setData({
            isClick: true,
            message: '123'
        })
    },

    addHandler: function(e: any) {
        let num = e.currentTarget.dataset.number
        this.setData({
            a: num += this.data.a
        })
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