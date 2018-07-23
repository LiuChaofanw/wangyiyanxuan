<template>
  <div id="classify">
    <div class="header">
      <a href="javascript:;">
        <div class="search" @click="$router.push('/search')">
          <i class="iconfont icon-fangdajing"></i>
          <span>搜索商品，共10856款好物</span>
        </div>
      </a>
    </div>
    <div class="goodLists">
      <div class="goods_nav">
        <div class="nav_wrapper">
          <ul>
            <li class="nav_item" v-for="(category, index) in categorys" :key="index" :class="{active_item: index === activeIndex}"
                @click="switchActive(index)">{{category.name}}</li>
          </ul>
        </div>
      </div>
      <div class="bs_goods">
        <div>
          <div class="goods" v-for="(category, index) in categorys" :key="index" v-if="index === activeIndex">
            <div class="title">
              <div class="img_container">
                <img :src="category.bannerUrl"/>
              </div>
              <div class="title_container">
                <span class="gray">—</span>
                <span>{{category.name}}分类</span>
                <span class="gray">—</span>
              </div>
            </div>
            <div class="good_list">
              <div class="good" v-for="(item, index) in category.subCateList" :key="index">
                <div class="img_container">
                  <img :src="item.wapBannerUrl"/>
                </div>
                <div class="text_container">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        activeIndex: 0
      }
    },
    mounted () {
      this.$store.dispatch('getCategorys', () => {
        this.$nextTick(() => {
          new BScroll('.nav_wrapper')
          new BScroll('.bs_goods',{
            click: true
          })

        })
      })
    },
    computed: {
      ...mapState(['categorys'])
    },
    methods: {
      switchActive (index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem: 750/10rem;
  @import "../../common/css/mixins";
  #classify{
    color: #333;
    font-size: .37rem;
    height: 93%;
    overflow: hidden;

    .header{
      position: fixed;
      z-index: 10;
      top:0;
      left: 0;
      border: 1px solid #f5f5f5;
      height: 88/@rem;
      width: 100%;
      box-sizing: border-box;
      padding: 15/@rem 30/@rem;
      background: #ffffff;
      .search{
        height: 100%;
        width: 100%;
        background-color: #ededed;
        border-radius: 10/@rem;
        text-align: center;
        line-height: 1.5;
      }
    }
    .goodLists{
      display: flex;
      margin-top: 88/@rem;
      border: 1px solid #f3f3f3;
      height: 93%;

      .goods_nav{
        flex: 0 0 2.3rem;
        height: 100%;
        margin-bottom: 100/@rem;
        overflow: hidden;
        border-right: 1px solid #f3f3f3;

        .nav_wrapper{
          height: 93%;
          padding-bottom: 20%;
          &>ul{
            box-sizing: border-box;
            padding: 0 0 20/@rem 0;
            .nav_item{
              height: 50/@rem;
              width: 100%;
              margin-top: 40/@rem;
              text-align: center;
              line-height: 50/@rem;
              &.active_item{
                border-left: solid 3px #ab2b2b;
                color: #ab2b2b;
                font-size: .48rem;
              }
            }
          }

        }
      }
      .bs_goods{
        .goods{
          flex: 1;
          box-sizing: border-box;
          padding: 30/@rem 0 30/@rem 30/@rem;
          .title{
            margin: 30/@rem 30/@rem 0 30/@rem;
            .img_container{
              width: 100%;
              &>img{
                width: 100%;
              }
            }
            .title_container{
              width: 100%;
              height: 108/@rem;
              line-height: 108/@rem;
              text-align: center;
              .gray{
                color: #cccccc;
              }
            }
          }
          .good_list{
            display: flex;
            flex-wrap: wrap;
            .good{
              width: 33.33%;
              box-sizing: border-box;
              padding-top: 30/@rem;
              .img_container{
                &>img{
                  width: 80%;
                  border-radius: 50%;
                }
              }
              .text_container{
                font-size: .32rem;
              }
            }
          }
        }
      }

    }
  }
</style>

