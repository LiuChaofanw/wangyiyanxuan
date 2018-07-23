<template>
  <div id="class_item" :style="{marginTop: marginTop}">
    <div class="img_container" v-for="(cateList, index) in cateLists" :key="index+10" v-show="index === currentIndex">
      <img :src="cateList.bannerUrl" alt="">
    </div>
    <Blank/>
    <div class="select_goods"  v-for="(cateList, index) in cateLists" :key="index"  v-show="index === currentIndex">
      <section class="select_header">
        <span>{{cateList.name}}好物</span>
      </section>
      <section class="select_list">
        <ul class="select_ul">
          <li class="select_item" v-for="(item,index) in cateList.itemList" :key="index">
            <img :src="item.listPicUrl">
            <div class="select_detail">{{item.simpleDesc}}</div>
            <div class="select_name">{{item.name}}</div>
            <div class="select_price">￥{{item.retailPrice}}</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import Blank from '../../components/Blank/Blank.vue'
  import {mapState, mapGetters} from 'vuex'
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        currentIndex: 0,
      /*  marginTop: '3rem',*/
      }
    },
    computed: {
      ...mapState(['cateLists', 'isHeader']),
      ...mapGetters(['marginTop'])
    },
    components: {
      Blank
    },
    mounted () {
   /*   this.marginTop = this.isHeader ? '2rem' : '3rem'*/
      this.$store.dispatch('getCateList')
      PubSub.subscribe('changeCurrentIndex',(msg, currrentIndex) => {
        this.currentIndex = currrentIndex
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  @import "../../common/css/mixins";
  #class_item{
    margin-top: 2rem;
    .img_container{
      img{
        width: 100%;
        height: 420/@rem;
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
