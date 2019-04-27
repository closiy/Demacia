// pages/summoner_page/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    champion_name: '',
    top_data: {},
    jungle_data: {},
    mid_data: {},
    bot_data: {},
    support_data: {},
    pos_list: [],
    champion_data: {},
    active: 1,
    skill_list:[],
  },
  onChange(event) {
    var that = this
    // console.log(that.data.pos_list[event.detail.index]);
    var pos_id = that.data.pos_list[event.detail.index]
    var champion_id = that.data.champion_name
    champion_id = champion_id.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "")
    var file_name = champion_id + '_' + pos_id + '.json'
    var url_header = 'https://funplays.top/wp-content/uploads/'
    var url = url_header + file_name
    wx.request({
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      dataType: JSON,
      success: function(res) {
        // success
        var listdata = JSON.parse(res.data)
        var skill_list_str = listdata.data_champion_skill_list
        var skill_arr = skill_list_str.split('')
        that.setData({
          champion_data: listdata,
          skill_list: skill_arr
        });
        console.log('submit success');
      },
      fail: function() {
        // fail
        console.log('submit fail');
      },
      complete: function() {
        // complete
        console.log('submit comlete');
      }
    });

    wx.showToast({
      title: `切换到位置 ${that.data.pos_list[event.detail.index]}`,
      icon: 'none'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var champion_id = options.id
    champion_id = champion_id.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "")
    var x = ''
    var pos = app.globalData.pos
    var file_name = ''
    var url_header = 'https://funplays.top/wp-content/uploads/'
    var url = ''
    var listdata = []
    for (x in pos) {
      if (pos[x] == 'middle')
        pos[x] = 'mid'
      if (pos[x] == 'bottom')
        pos[x] = 'bot'
    }
    file_name = champion_id + '_' + pos[0] + '.json'
    url = url_header + file_name
    wx.request({
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      dataType: JSON,
      success: function(res) {
        // success
        var listdata = JSON.parse(res.data)
        var skill_list_str = listdata.data_champion_skill_list
        var skill_arr=skill_list_str.split('')
        that.setData({
          champion_data: listdata,
          skill_list: skill_arr
        });
        console.log('submit success');
      },
      fail: function() {
        // fail
        console.log('submit fail');
      },
      complete: function() {
        // complete
        console.log('submit comlete');
      }
    });
    this.setData({
      url_data: url,
      pos_list: pos,
      champion_name: champion_id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})