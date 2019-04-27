
var app = getApp()
Page({
  data: {
    value: 0,
    navbar: ['TOP', 'JNG', 'MID','BOT','SUP'],
    startX: 0,
    endX: 0,
    currentNavbar: '0',
    datas:{
      arivia: {
        id:1,
        name: '艾瑞利亚',
        desc:'刀锋舞者',
        pic: 'https://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_140&v=1',
        tier: 2,
        main_pos:'top',
        position: ['top', 'mid'],
        win_num:50,
        pick_num:41,
        ban_num:13,
        bck: 'http://image.uc.cn/s/wemedia/s/upload/2018/21ee4d5c3cb4dea1f07d927ed27589e6x870x489x59.jpeg'
      },
      zoe: {
        id:2,
        name: '佐伊',
        desc:'暮光星灵',
        pic: 'https://opgg-static.akamaized.net/images/lol/champion/Zoe.png?image=w_140&v=1',
        tier: 2,
        main_pos: 'mid',
        position: ['mid'],
        win_num: 56,
        pick_num: 31,
        ban_num: 43,
        bck: 'http://image.uc.cn/s/wemedia/s/upload/2018/21ee4d5c3cb4dea1f07d927ed27589e6x870x489x59.jpeg'
      }
    }
  },

  onChange(event) {
    this.setData({
      value: event.detail
    });
  },

  onLoad: function(options){
    var _this = this
    wx.request({
      url:'https://funplays.top/wp-content/uploads/top_ranking.json',
      headers:{
        'Content-Type': 'application/json'
      },
      dataType:JSON,
      success: function (res) {
        var listdata = JSON.parse(res.data)
        //将获取到的json数据，存在名字叫list_data的这个数组中
        _this.setData({
          data_champions_ranking_top: listdata
          //res代表success函数的事件对，data是固定的
        })
      }
    }),
      wx.request({
      url: 'https://funplays.top/wp-content/uploads/mid_ranking.json',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: JSON,
        success: function (res) {
          var listdata = JSON.parse(res.data)
          //将获取到的json数据，存在名字叫list_data的这个数组中
          _this.setData({
            data_champions_ranking_mid: listdata
            //res代表success函数的事件对，data是固定的
          })
        }
      }),
      wx.request({
      url: 'https://funplays.top/wp-content/uploads/jungle_ranking.json',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: JSON,
        success: function (res) {
          var listdata = JSON.parse(res.data)
          //将获取到的json数据，存在名字叫list_data的这个数组中
          _this.setData({
            data_champions_ranking_jungle: listdata
            //res代表success函数的事件对，data是固定的
          })
        }
      }),
      wx.request({
      url: 'https://funplays.top/wp-content/uploads/adc_ranking.json',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: JSON,
        success: function (res) {
          var listdata = JSON.parse(res.data)
          //将获取到的json数据，存在名字叫list_data的这个数组中
          _this.setData({
            data_champions_ranking_adc: listdata
            //res代表success函数的事件对，data是固定的
          })
        }
      }),
      wx.request({
      url: 'https://funplays.top/wp-content/uploads/support_ranking.json',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: JSON,
        success: function (res) {
          var listdata = JSON.parse(res.data)
          //将获取到的json数据，存在名字叫list_data的这个数组中
          _this.setData({
            data_champions_ranking_support: listdata
            //res代表success函数的事件对，data是固定的
          })
        }
      })
    
  },
  pos_data(e){
    console.log(e.item)
  },

  /**
   * 点击跳转详情页
   */
  onItemClick (e) {
    var name = e.currentTarget.id
    var pos = e.currentTarget.dataset.pos
    getApp().globalData.pos = pos
    // console.log(name)
    if(name != null)
      wx.navigateTo({
        url: '../champion_page/index?id='+ name,
      })
    // if (e.currentTarget.dataset.rowId != null)
    //   targetUrl = targetUrl + '?rowId=' + e.currentTarget.dataset.rowId
    // wx.navigateTo({
    //   url: targetUrl
    // })
  },

  /**
   * 切换 navbar
   */
  swichNav (e) {
    console.log(this.currentNavbar)
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
  },

  navExchange(num){
    var champion_pos
    switch(num)
    {
      case 0:
        champion_pos == 'top';
        break;
      case 1:
        champion_pos == 'jungle';
        break;
      case 2:
        champion_pos == 'mid';
        break;
      case 3:
        champion_pos == 'bot';
        break;
      case 4:
        champion_pos == 'support';
        break;
    }
    return champion_pos
  }

})
