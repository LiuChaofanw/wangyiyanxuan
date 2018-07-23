<template>
  <div id="home" :style="{marginTop: marginTop}">
    <div class="home_swiper">
      <section class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focus, index) in focusLists" :key="index">
            <img v-lazy="focus.picUrl">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </section>
      <section class="carousel_list">
      <span class="icon_container">
        <i class="iconfont icon-duigou"></i>
        <span>网易自营品牌</span>
      </span>
        <span class="icon_container">
        <i class="iconfont icon-duigou"></i>
        <span>30天无忧退货</span>
      </span>
        <span class="icon_container">
        <i class="iconfont icon-duigou"></i>
        <span>48小时快速退款</span>
      </span>
      </section>
    </div>
    <Blank/>
    <div class="home_brand">
      <section class="brand_header">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-iconset0424"></i>
      </section>
      <ul class="brand_list" >
        <li class="brand_item" v-for="(tagList, index) in tagLists" :key="index" v-if="index<4">
          <img v-lazy="tagList.picUrl"/>
          <div>
            <p>{{tagList.name}}</p>
            <p>{{tagList.floorPrice}}元起</p>
          </div>
        </li>
      </ul>
    </div>
    <Blank/>
    <div class="home_new">
      <span>新品首发</span>
      <div>
        查看全部
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    <div class="new_goods_list">
      <ul class="new_goods">
        <li class="new_good" v-for="(newItem, index) in newItemLists" :key="index">
          <a href="javascript:;">
            <div>
              <img v-lazy="newItem.listPicUrl"/>
            </div>
            <div class="new_goods_name">{{newItem.name}}</div>
            <div class="new_goods_detail">{{newItem.simpleDesc}}</div>
            <div class="new_goods_price">￥{{newItem.retailPrice}}</div>
          </a>
        </li>
        <li class="last_good new_good">
          <a>
            查看全部
          </a>
        </li>
      </ul>
    </div>
    <div class="home_recommend">
      <span>人气推荐 · 好物精选</span>
      <div>
        查看全部
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    <div class="new_goods_list new_goods_list2">
      <ul class="new_goods">
        <li class="new_good" v-for="(popularItem, index) in popularItemLists" :key="index">
          <a href="javascript:;">
            <div>
              <img v-lazy="popularItem.listPicUrl"/>
            </div>
            <div class="new_goods_name">{{popularItem.name}}</div>
            <div class="new_goods_detail">{{popularItem.simpleDesc}}</div>
            <div class="new_goods_price">￥{{popularItem.retailPrice}}</div>
          </a>
        </li>
        <li class="last_good new_good">
          <a>
            查看全部
          </a>
        </li>
      </ul>
    </div>
    <Blank/>
    <div class="time_goods">
      <div class="time">
        <p>严 选 限 时 购</p>
        <div>
          <span class="hour" v-if="time._data">{{time._data.hours}}</span> :
          <span class="min" v-if="time._data">{{time._data.minutes}}</span> :
          <span class="second" v-if="time._data">{{time._data.seconds}}</span>
        </div>
        <p class="small">下一场 {{flashSaleIndexVO.nextStartTime | dateString}} 开始</p>
      </div>
      <div class="time_good">
        <div>
          <img :src="flashSaleIndexVO.primaryPicUrl"/>
        </div>
        <div class="orange">
          <p>￥{{flashSaleIndexVO.activityPrice}}</p>
          <p class="line_through">￥{{flashSaleIndexVO.originPrice}}</p>
        </div>
      </div>
    </div>
    <Blank/>
    <div class="welfare">
      <img src="../../common/images/recommend/a3ea2d1108c94c7dece05eddf95f6df5.jpg"/>
    </div>
    <Blank/>
    <div class="special">
      <section class="brand_header">
        <span>专题精选</span>
        <i class="iconfont icon-iconset0424"></i>
      </section>
      <section class="special_container">
        <ul class="special_list">
          <li class="special_item" v-for="(topic,index) in topicLists" :key="index">
            <img :src="topic.itemPicUrl"/>
            <div class="special_name">
              <span class="lefe">{{topic.title}}</span>
              <span class="right">{{topic.priceInfo}}元起</span>
            </div>
            <div class="special_detail">{{topic.subtitle}}</div>
          </li>
        </ul>
      </section>
    </div>
    <Blank/>
    <div class="select_goods"  v-for="(cateList, index) in cateLists" :key="index">
      <section class="select_header">
        <span>{{cateList.name}}好物</span>
      </section>
      <section class="select_list">
        <ul class="select_ul">
          <li class="select_item" v-for="(item,index) in cateList.itemList" :key="index">
            <img v-lazy="item.listPicUrl">
            <div class="select_detail">{{item.simpleDesc}}</div>
            <div class="select_name">{{item.name}}</div>
            <div class="select_price">￥{{item.retailPrice}}</div>
          </li>
        </ul>
      </section>
    </div>
    <div class="target">
      <a @click="toTop">
        <i class="iconfont icon-07jiantouxiangshang"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import PubSub from 'pubsub-js'
  import Blank from '../../components/Blank/Blank.vue'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'
  import moment from 'moment'

  export default {
    data () {
      return {
        /*marginTop: '3rem',*/
        time:{},
       /* oldTime:0*/
      }
    },
    components: {
      Blank
    },
    mounted () {
/*      PubSub.subscribe('changHomeMargin',function () {
        console.log(this)
        this.data.marginTop = '2rem'
        console.log(111)
      })*/
      //注意this的指向
      /*PubSub.subscribe('changHomeMargin', () => {
        this.marginTop = '2rem'
      })*/
 /*     this.marginTop = this.isHeader ? '2rem' : '3rem'*/

      this.$store.dispatch('getFocusList',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
      this.$store.dispatch('getTagList')
      this.$store.dispatch('getNewItemList', () => {
        this.$nextTick(() => {
          new BScroll('.new_goods_list',{
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        })
      })
      this.$store.dispatch('getPopularItemLists', () => {
        this.$nextTick(() => {
          new BScroll('.new_goods_list2',{
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        })
      })
      this.$store.dispatch('getFlashSaleIndexVO',() => {
        this.$nextTick(() => {
          /*this.time=(this.flashSaleIndexVO.nextStartTime | this.dateString)
          console.log(this.time)*/

          let time = this.flashSaleIndexVO.remainTime
          this.timer = setInterval(() => {
            this.time = moment.duration(time)
            if (time <= 0){
              clearInterval(this.timer)
            }
          },1000)

        })
      })
      this.$store.dispatch('getTopicList',() => {
        this.$nextTick(() => {
          new BScroll('.special_container',{
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        })
      })
      this.$store.dispatch('getCateList')
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    computed: {
      ...mapState(['focusLists','tagLists','newItemLists','popularItemLists','flashSaleIndexVO','topicLists','cateLists','isHeader']),
      ...mapGetters(['marginTop']),
    },
    methods: {
      toTop () {
        scrollTo(0,0)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  @import "../../common/css/mixins";
  #home{
    margin-bottom: 10rem;
    font-size: 0;
    margin-top: 2rem;
    .target{
      height: 1.5rem;
      width: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      position: fixed;
      bottom:1.5rem;
      right: .5rem;
      z-index: 100;
      background-color: rgba(250,250,250,.2);
      border-radius: 50%;
      &>a{
        .iconfont{
          font-size: 1.5rem;
        }
      }
    }
    .home_swiper{
      .swiper-container{
        height: 400/@rem;
        width: 750/@rem;
        .swiper-wrapper{
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
      .carousel_list{
        height: 1rem;
        line-height: 0.6rem;
        box-sizing: border-box;
        padding: 0 0.3rem;
        .icon_container{
          font-size: .33rem;
          margin: 0 0.1rem;
          .iconfont{
            color: red;
          }
        }
      }
    }
    .home_brand{
      color: #333333;
      font-size: .43rem;
      .brand_header{
        width: 750/@rem;
        height: 110/@rem;
        line-height: 110/@rem;
        text-align: center;
      }
      .brand_list{
        .clearFix;
        margin: 0 16/@rem;
        li:nth-child(2n){
          margin-bottom: 8/@rem;
        }
        li:nth-child(2n+1){
          margin: 0 8/@rem 8/@rem 0;
        }
        .brand_item{
          height: 236/@rem;
          width: 355/@rem;
          float: left;
          position: relative;
          background-color: #f4f4f4;
          &>div{
            position: absolute;
            top:0;
            left:0;
            font-size: .34rem;
            margin: 20/@rem 0 0 20/@rem;
            line-height: .5rem;
          }
          &>img{
            height: 100%;
            width: 100%;
          }
          .new{
            height: 32/@rem;
            width: 64/@rem;
            margin-top: .1rem;
          }
        }
      }
    }
    .home_new{
      height: 260/@rem;
      width: 100%;
      margin-bottom: 32/@rem;
      background-image: url("../../common/images/newBackground.png");
      background-repeat: no-repeat;
      background-size: cover;
      box-sizing: border-box;
      padding: .5rem 0;
      text-align: center;
      &>span{
        font-size: .48rem;
        color: #8BA0B6;
        margin: auto;
      }
      &>div{
        height: 56/@rem;
        width: 240/@rem;
        background-color: #D8E5F1;
        font-size: .37rem;
        line-height: 56/@rem;
        text-align: center;
        margin: auto;
        margin-top: .2rem;
        color: #8BA0B6;
      }
    }
    .new_goods_list{
      width: 100%;
      height: 480/@rem;
      overflow: hidden;
      .new_goods{
        width: 380%;
        .clearFix;
        .new_good{
          width: 280/@rem;
          height: 414/@rem;
          margin-left: 30/@rem;
          float: left;
          a{
            &>div:first-child{
              background-color: #f3f3f3;
              margin-bottom: .2rem;
              &>img{
                height: 280/@rem;
                width: 280/@rem;
              }
            }

            .new_goods_name{
              .textOver;
              font-size: .4rem;
              color: #333333;
              line-height: .6rem;
            }
            .new_goods_detail{
              .textOver;
              font-size: .35rem;
              color: #999999;
              line-height: .5rem;
            }
            .new_goods_price{
              font-size: .35rem;
              color: red;
              line-height: .5rem;
            }
          }
        }
        .last_good{
          float: left;
          height: 285/@rem;
          width: 280/@rem;
          font-size: .4rem;
          line-height: 280/@rem;
          text-align: center;
          box-sizing: border-box;
          border: 8/@rem solid #f3f3f3;
          &>a{
            color: #333333;
          }

        }

      }
    }
    .home_recommend{
      height: 260/@rem;
      width: 100%;
      margin-bottom: 32/@rem;
      background-image: url("../../common/images/recommend/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Ficon-normal%2Fbitmap2-d626e0b52a.png");
      background-repeat: no-repeat;
      background-size: cover;
      box-sizing: border-box;
      padding: .5rem 0;
      text-align: center;
      &>span{
        font-size: .48rem;
        color: #B4A078;
        margin: auto;
      }
      &>div{
        height: 56/@rem;
        width: 240/@rem;
        background-color: #F4E9CB;
        font-size: .37rem;
        line-height: 56/@rem;
        text-align: center;
        margin: auto;
        margin-top: .2rem;
        color: #B4A078;
      }
    }
    .time_goods{
      width: 100%;
      height: 400/@rem;
      .time{
        margin: 80/@rem 0 0 80/@rem;
        float: left;
        &>p{
          font-size: .48rem;
          color: #333333;
          &:first-child{
            margin-bottom: .3rem;
          }
          &.small{
            font-size: .32rem;
            margin-top: .4rem;
          }
        }
        &>div{
          font-size: .4rem;
          &>span{
            display: inline-block;
            height: 56/@rem;
            width: 62/@rem;
            background-color: #444444;
            line-height: 56/@rem;
            color: #ffffff;
            text-align: center;
          }
        }
      }
      .time_good{
        float: right;
        height: 320/@rem;
        width: 320/@rem;
        position: relative;
        margin-top: .5rem;
        margin-right: .5rem;
        & img{
          height: 320/@rem;
          width: 320/@rem;
        }
        .orange{
          background-color: orange;
          height: 96/@rem;
          width: 96/@rem;
          box-sizing: border-box;
          padding: .3rem 0;
          border-radius: 50%;
          position: absolute;
          top: 192/@rem;
          left: 204/@rem;
          &>p{
            font-size: .37rem;
            color: #ffffff;
            margin-left: .1rem;
          }
          .line_through{
            text-decoration: line-through;
          }
        }

      }
    }
    .welfare{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .special{
      color: #333333;
      font-size: .43rem;
      .brand_header{
        width: 750/@rem;
        height: 110/@rem;
        line-height: 110/@rem;
        text-align: center;
      }
      .special_container{
        .clearFix;
        width: 100%;
        overflow: hidden;
        .special_list{
          margin: 0 30/@rem 36/@rem 30/@rem;
          width: 410%;
          .clearFix;
          .special_item{
            float: left;
            height: 500/@rem;
            width: 575/@rem;
            margin-right: .3rem;
            img{
              width: 575/@rem;
              height: 390.6/@rem;
            }
            .special_name{
              font-size: .37rem;
              margin: .2rem 0;
              .clearFix;
              .left{
                float: left;
              }
              .right{
                float: right;
                color: red;
              }
            }
            .special_detail{
              font-size: .32rem;
              color: #999999;
            }
          }
        }
      }
    }
    .select_goods{
      .select_header{
        height: 120/@rem;
        width: 100%;
        background-color: #ffffff;
        font-size: .43rem;
        color: #333333;
        text-align: center;
        line-height: 120/@rem;
      }
      .select_list{
        .select_ul{
          .clearFix;
          &>li:nth-child(2n){
            margin: 0 .25rem .3rem .15rem;
          }
          &>li:nth-child(2n+1){
            margin: 0 .1rem .3rem .25rem;
          }
          .select_item{
            float: left;
            /*margin: 0 .2rem;*/
            img{
              height: 345/@rem;
              width: 345/@rem;
            }
            .select_detail{
              .textOver;
              background-color: #F1ECE2;
              font-size: .33rem;
              width: 345/@rem;
              height: 70/@rem;
              line-height: 70/@rem;
              text-align: center;
              color: #9F8A60;
            }
            .select_name{
              .textOver;
              font-size: .37rem;
              margin: .3rem 0 .2rem 0;
              width: 345/@rem;
              height: 70/@rem;
            }
            .select_price{
              font-size: .39rem;
              color: red;
            }
          }
        }
      }
    }
  }

</style>
