<template>
  <div id="knowledge">
    <div class="swiper">
      <section class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.picUrl">
            <div class="mask">
              <p class="small">—严选推荐—</p>
              <p class="name">{{banner.title}}</p>
              <p class="detail">{{banner.desc}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="articles">
      <div class="swiper">
        <section class="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(column, index) in columns" :key="index">
              <img :src="column.picUrl">
              <p>严选推荐</p>
              <div class="mask">{{column.articleCount}}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Blank/>
    <div class="select">
      <div class="select_item">
        <div class="foryou">
          <div class="text">为你推荐</div>
          <div class="img_container">
            <div class="yxtj">严选推荐</div>
            <img :src="recommend.recommendBanner.picUrl" v-if="recommend.recommendBanner"/>
            <div class="name">
              <div class="left" v-if="recommend.recommendBanner">{{recommend.recommendBanner.title}}</div>
              <div class="right" v-if="recommend.recommendBanner">{{recommend.recommendBanner.priceInfo}}元起</div>
            </div>
            <div class="detail" v-if="recommend.recommendBanner">{{recommend.recommendBanner.subtitle}}</div>
          </div>
        </div>
        <div class="select_detail" v-for="(recommend, index) in recommend.recommends" :key="index">
          <div class="left">
            <div class="name">
              <img :src="recommend.avatar"/>
              <span>{{recommend.nickname}}</span>
            </div>
            <div class="title">{{recommend.title}}</div>
            <div class="detail">{{recommend.subtitle}}</div>
          </div>
          <div class="right">
            <img :src="recommend.picUrl"/>
            <span class="img_logo">{{recommend.nickname}}的好货推荐</span>
          </div>
        </div>
      </div>
    </div>
    <Blank/>
    <div class="ten_hour">
      <div class="header">
        十点一刻
      </div>
      <div class="swiper">
        <section class="swiper-container3">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(tenfifteen,index) in tenfifteens" :key="index">
              <div class="self">
                <div class="title">— 今日话题 —</div>
                <div class="about">{{tenfifteen.title}}</div>
                <div class="chat">{{tenfifteen.title}}</div>
                <div class="person">
                  <img :src="a" v-for="(a, index) in tenfifteen.participantAvatar" :key="index" v-if="a"/>
                  <span>{{tenfifteen.participantNum}}人参与话题</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
    <Blank/>
    <div class="select">
      <div class="select_item">
        <div class="foryou">
          <div class="text">严选甄品</div>
          <div class="img_container">
            <div class="yxtj">严选推荐</div>
            <img :src="zhenpin.zhenOne.picUrl" v-if="zhenpin.zhenOne"/>
            <div class="name">
              <div class="left" v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.title}}</div>
              <div class="right" v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.priceInfo}}元起</div>
            </div>
            <div class="detail" v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.subtitle}}</div>
          </div>
        </div>
        <div class="select_detail" v-for="(recommend, index) in zhenpin.zhenpins" :key="index">
          <div class="left">
            <div class="name" style="height: 1rem">
              <!--<img :src="recommend.avatar"/>
              <span>{{recommend.nickname}}</span>-->
            </div>
            <div class="title">{{recommend.title}}</div>
            <div class="detail">{{recommend.subtitle}}</div>
          </div>
          <div class="right">
            <img :src="recommend.picUrl"/>
            <span class="img_logo">{{index === 0 ? '严选推荐' : '挑选师推荐'}}</span>
          </div>
        </div>
      </div>
    </div>
    <Blank/>
    <div class="look">
      <div class="header">严选LOOK</div>
      <div class="img_container">
        <img :src="yxLook.picUrl"/>
      </div>
      <div class="person">
        <div class="avatar">
          <img :src="yxLook.avatar"/>
          <span>{{yxLook.nickname}}</span>
        </div>
        <div class="detail">{{yxLook.content}}</div>
      </div>
    </div>
    <div class="more_good">
      <div class="header">
        <div class="left_line"></div>

        <div class="text">更多精彩</div>
        <div class="right_line"></div>
      </div>
      <div class="content" v-for="(more, index) in findMores" :key="index">
        <div class="img" v-if="more.picList.length === 0">
          <div class="img_container">
            <img :src="more.itemPicUrl"/>
          </div>
          <div class="text_container">
            <span>{{more.subTitle}}</span>
          </div>
        </div>
        <div class="imgs"  v-if="more.picList.length">
          <div class="img_container">
            <div class="big">
              <img :src="more.picList[0]"/>
            </div>
            <div class="small">
              <img :src="more.picList[1]"/>
              <img :src="more.picList[2]"/>
            </div>
          </div>
          <div class="text_container">
            <span>{{more.subTitle}}</span>
          </div>
        </div>
        <Blank/>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import Blank from '../../components/Blank/Blank.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      Blank
    },
    mounted () {

      this.$store.dispatch('getBanner',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,
            slidesPerView: 'auto',
          })
        })
      })
      this.$store.dispatch('getColumns', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container2',{
            loop: false,
            slidesPerView: 'auto',
            freeMode: true
          })
        })
      })
      this.$store.dispatch('getRecommend')
      this.$store.dispatch('getTenfifteens', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container3',{
            loop: false,
            slidesPerView: 'auto',
            freeMode: true
          })
        })
      })
      this.$store.dispatch('getZhenpin')
      this.$store.dispatch('getYxLook')
      this.$store.dispatch('getFindMores')
    },
    computed: {
      ...mapState(['banners', 'columns', 'recommend', 'tenfifteens','zhenpin', 'yxLook','findMores'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem: 750/10rem;
  @import "../../common/css/mixins";
  #knowledge{
    margin-top: .3rem;
    margin-bottom: 1rem;
    padding-top: 90/@rem;
    .swiper{
      .swiper-container{
        height: 400/@rem;
        width: 100%;
        .swiper-wrapper{
          text-align: center;
          height: 385/@rem;
          width: 670/@rem;
          margin: 0 .5rem;
          .swiper-slide{
            img{
              height: 100%;
              width: 95%;
              border-radius: 8/@rem;
            }
            position: relative;
            .mask{
              background-color: rgba(255,255,255,.9);
              line-height: .6rem;
              padding-top: .4rem;
              box-sizing: border-box;
              height: 198/@rem;
              width: 466/@rem;
              position: absolute;
              top:50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              .small{
                font-size: .27rem;
                color: #999999;
                transform: scale(.8);
              }
              .name{
                font-size: .4rem;
                color: #333333;
              }
              .detail{
                font-size: .37rem;
                color: #333333;
              }
            }
          }

        }
      }
    }
    .articles{
      margin-top: .5rem;
      margin-bottom: .5rem;
      padding: 0 .3rem;
      .swiper-container2{
        height: 210/@rem;
        width: 100%;
        overflow: hidden;
        .swiper-wrapper{
          text-align: center;
          .swiper-slide{
            height: 210/@rem;
            width: 164/@rem;
            margin-right: 24/@rem;
            position: relative;
            img{
              height: 164/@rem;
              width: 164/@rem;
              border-radius: 5/@rem;
            }
            p{
              font-size: .3rem;
              color: #333333;
              line-height: 40/@rem;
              text-align: center;
            }
            .mask{
              height: 32/@rem;
              width: 150/@rem;
              position: absolute;
              padding-right: .1rem;
              top:0;
              right: 0;
              font-size: .3rem;
              line-height: 32/@rem;
              color: #ffffff;
              background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.2));
              text-align: right;
            }
          }

        }
      }
    }
    .select{
      padding: 0 30/@rem;
      margin-bottom: .5rem;
      .foryou{
        position: relative;
        .text{
          width: 690/@rem;
          height: 120/@rem;
          font-size: .42rem;
          line-height: 120/@rem;
          text-align: center;
          color: #333333;
        }
        .yxtj{
          position: absolute;
          top: 140/@rem;
          left: 50/@rem;
          background-color: rgba(255,255,255,.9);
          color: #333333;
          border: 1px solid #d9d9d9;
          height: .48rem;
          padding: 0 .21rem;
          line-height: .48rem;
          border-radius: .26667rem;
          font-size: .3rem;
        }
        .img_container{
          border: 1px solid #d9d9d9;
          border-radius: 8/@rem;
          &>img{
            height: 386/@rem;
            width: 688/@rem;
            border-radius: 5/@rem;
          }
          .name{
            .clearFix;
            font-size: .48rem;
            .textOver;
            padding: 0 .3rem;
            color: #333333;
            line-height: 1.5;
            padding-top: .2rem;
            .left{
              float: left;
            }
            .right{
              float: right;
            }
          }
          .detail{
            color: #7f7f7f;
            font-size: .37rem;
            line-height: 1.5;
            padding: 0 .3rem;
            margin-bottom: .7rem;
          }
        }
      }
      .select_detail{
        margin-top: .3rem;
        border: 1px solid #d9d9d9;
        .clearFix;
        .left{
          float: left;
          box-sizing: border-box;
          padding: 0 30/@rem 0 20/@rem;
          .name{
            margin-top: .2rem;
            &>img{
              height: 46/@rem;
              width: 46/@rem;
              border-radius: 50%;
            }
            &>span{
              .textOver;
              display: inline-block;
              color: #333333;
              font-size: .26rem;
              line-height: 1.2;
              width: 120/@rem;
              height: 24/rem;
              transform: scale(.9);
            }
          }
          .title{
            .textOver;
            font-size: .43rem;
            line-height: 1.2;
            color: #333333;
            width: 4.7rem;
            margin: .2rem 0;
          }
          .detail{
            .textOver;
            color: #7f7f7f;
            font-size: .32rem;
            line-height: 1.5;
            width: 4.7rem;
            margin: .2rem 0;
          }
        }
        .right{
          position: relative;
          float: right;
          .img_logo{
            padding: 0 .2rem;
            height: .48rem;
            line-height: .48rem;
            background-color: rgba(255,255,255,.9);
            border-radius: .27rem;
            border: 1px solid #d9d9d9;
            font-size: .2rem;
            position: absolute;
            top: .1rem;
            left: .1rem;
            z-index: 100;
          }
          &>img{
            height: 272/@rem;
            width: 280/@rem;
          }
        }
      }
    }
    .ten_hour{
      .header{
        text-align: center;
        font-size: .43rem;
        height: 1.6rem;
        line-height: 1.6rem;
        color: #333333;
      }
      .swiper-container3{
        width: 100%;
        box-sizing: border-box;
        padding: 0 .4rem;
        overflow: hidden;
        .swiper-wrapper{
          .swiper-slide{
            width: 7.334rem;
            margin-right: .4rem;
            .self{
              background-image: url("../../common/images/knowledge/message.png");
              background-size: 100% 100%;
              width: 7.3333rem;
              height: 5.48rem;
              padding: .507rem .5333rem 1.05rem;
              color: #333;
              background-repeat: no-repeat;
              line-height: 1.2;
              font-size: 24/@rem;
              box-sizing: border-box;
              margin-right: .4rem;
              &:last-child{
                margin: 0;
              }
              .title{
                font-size: .32rem;
                color: #7f7f7f;
                text-align: center;
                margin-bottom: .5rem;
              }
              .about{
                text-align: center;
                font-weight: bold;
                font-size: .47rem;
                margin: .2rem 0;
              }
              .chat{
                font-size: .373rem;
                line-height: 1.5;
                text-align: center;
                color: #333333;

              }
              .person{
                text-align: center;
                margin-top: .9rem;
                &>img{
                  height: 46/@rem;
                  width: 46/@rem;
                  border-radius: 50%;
                  margin-left: -0.1rem;
                }
                &>span{
                  font-size: .33rem;
                }
              }
            }
          }

        }
      }
    }
    .look{
      .header{
        height: 1.6rem;
        width: 100%;
        line-height: 1.6rem;
        background-color: #ffffff;
        text-align: center;
        font-size: .42667rem;
      }
      .img_container{
        width: 100%;
        height: 422/@rem;
        &>img{
          width: 100%;
          height: 100%;
        }
      }
      .person{
        padding: 24/@rem 30/@rem 46/@rem 30/@rem ;
        .avatar{
          font-size: .35rem;
          color: #666666;
          margin-bottom: .3rem;
          &>img{
            height: 48/@rem;
            width: 48/@rem;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        .detail{
          color: #7f7f7f;
          line-height: 1.6;
          font-size: .37rem;
        }
      }
    }
    .more_good{
      padding: 0 30/@rem 30/@rem 30/@rem;
      background-color: #f4f4f4;
      .header{
        font-size: .37rem;
        height: 140/@rem;
        width: 690/@rem;
        box-sizing: border-box;
        padding: 80/@rem;
        position: relative;
        .left_line{
          .bottom-border-1px(#000000);
          height: 1px;
          width: 35%;
          position: absolute;
          top:50%;
          left: 0;
          margin-top: 15/@rem;

        }
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
        .right_line{
          .bottom-border-1px(#000000);
          display: inline-block;
          height: 1px;
          width: 35%;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: 15/@rem;
        }
      }
      .content{
        .img{
          height: 451/@rem;
          width: 642.3/@rem;
          background-color: #ffffff;
          padding: 24/@rem;
          .img_container{
            &>img{
              width: 100%;
              height: 360/@rem;
            }
          }
          .text_container{
            font-size: .37rem;
            .textOver;
            padding-top: .386rem;
            padding-bottom: .37rem;
            color: #333;
          }
        }
        .imgs{
          height: 451/@rem;
          width: 642.3/@rem;
          background-color: #ffffff;
          padding: 24/@rem;
          .img_container{
            .clearFix;
            .big{
              float: left;
              width: 70%;

              &>img{
                width: 100%;
                height: 365/@rem;
              }
            }
            .small{
              font-size: 0;
              float: left;
              width: 25%;
              height: 360/@rem;
              margin-left: .1rem;
              &>img{
                height: 178/@rem;
                width: 178/@rem;
                &:nth-child(2){
                  margin-top: .1rem;
                }
              }
            }
          }
          .text_container{
            font-size: .37rem;
            .textOver;
            padding-top: .386rem;
            padding-bottom: .37rem;
            color: #333;
          }
        }
      }
    }

  }

</style>
