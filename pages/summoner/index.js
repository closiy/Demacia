
var app = getApp()
Page({
  data: {
    value: 0,
    navbar: ['TOP', 'JNG', 'MID', 'BOT', 'SUP'],
    startX: 0,
    endX: 0,
    currentNavbar: '0',
    },
  onLoad: function (options) {
    var _this = this
      wx.request({
        url: 'https://funplays.top/wp-content/uploads/summoner_ranking.json',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: JSON,
        success: function (res) {
          var listdata = JSON.parse(res.data)
          //将获取到的json数据，存在名字叫list_data的这个数组中
          _this.setData({
            data_summoner_ranking: listdata
            //res代表success函数的事件对，data是固定的
          })
        }
      })
  },
  /**
   * 点击跳转详情页
   */
  // onItemClick (e) {
  //   var targetUrl = api.PAGE_WORK
  //   if (e.currentTarget.dataset.rowId != null)
  //     targetUrl = targetUrl + '?rowId=' + e.currentTarget.dataset.rowId
  //   wx.navigateTo({
  //     url: targetUrl
  //   })
  // },
 })

  
