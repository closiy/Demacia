var heros = {
  arivia:{
    name: '艾瑞利亚',
    pic: 'https://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_140&v=1',
    tier: 2,
    position: ['top', 'mid'],
    bck: 'http://image.uc.cn/s/wemedia/s/upload/2018/21ee4d5c3cb4dea1f07d927ed27589e6x870x489x59.jpeg'
  },
  zoe:{
    name:'佐伊',
    pic:'',
    tier:2,
    position:['mid'],
    bck: 'http://image.uc.cn/s/wemedia/s/upload/2018/21ee4d5c3cb4dea1f07d927ed27589e6x870x489x59.jpeg'
  }

}
module.exports = {    //数据暴露出去
  postdata: heros
}