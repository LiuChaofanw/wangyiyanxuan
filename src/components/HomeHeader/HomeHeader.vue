<template>
  <header class="home_header">
    <div class="logo" :class="{close:isHeader}">
      <i class="logo_x" @click="closeSelf"></i>
      <div class="logo_yanxuan">
        <div class="logo_img"></div>
        <div class="logo_text">
          <p>网易严选</p>
          <p>立即领取APP新人专享1000元礼包</p>
        </div>
      </div>
      <div class="logo_open_app">
        <div class="btn">打开APP</div>
      </div>
    </div>
    <div class="search">
      <div class="search_input">
        <div class="wyyx"></div>
        <div>
          <div class="input" @click="$router.push()">
            <i class="iconfont icon-fangdajing"></i>
            <span>搜索商品，共10725款好物</span>
          </div>
        </div>
      </div>
      <nav class="search_nav">
        <div class="nav_inner">
          <div class="nav_item" @click="selectedGoods('/home')" :class="{border_bottom: $route.path === '/home'}">推荐</div>
          <div class="nav_item " v-for="(headCate, index) in headCates" :key="index" @click="selectedGoods('/goods',index)"
               :class="{border_bottom: currentIndex === index}">{{headCate.name}}</div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        currentIndex: -1
      }
    },
    mounted () {
      new BScroll('.search_nav',{
        scrollX: true
      })
      this.currentIndex = this.$route.path==='/goods'?0:-1
    },
    methods: {
      selectedGoods (url,index) {
        this.$router.replace(url)
        PubSub.publish('changeCurrentIndex',index)
        this.currentIndex = index ? index : (index === 0 ? 0 : -1)
      },
      closeSelf () {
        this.$store.dispatch('switchHeader')
      }
    },
    computed: {
      ...mapState(['headCates', 'isHeader'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/css/mixins";
  @rem:750/10rem;
  .home_header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #ffffff;
    .logo{
      height: 96/@rem;
      width: 100%;
      padding: 12/@rem 20/@rem 12/@rem 16/@rem;
      box-sizing: border-box;
      background-color: rgba(0,0,0,.8);
      &.close{
        display: none;
      }
      .logo_x{
        display: inline-block;
        height: 50/@rem;
        width: 50/@rem;
        background-image: url("../../common/images/logo.png");
        background-position: -28/@rem -408/@rem;
        background-repeat: no-repeat;
        float: left;
        margin: 10/@rem 10/@rem 0 0;
      }
      .logo_yanxuan{
        float: left;
        height: 72/@rem;
        width: 450/@rem;
        line-height: 30/@rem;
        .logo_img{
          height: 72/@rem;
          width: 72/@rem;
          float: left;
          background-image: url("../../common/images/logo.png");
          background-position: 0 -250/@rem;
          background-repeat: no-repeat;
          background-size: 2.3rem  5.3rem;
          border-radius: 15/@rem;
          margin-right: 10/@rem;
        }
        .logo_text{
          font-size: .3rem;
          box-sizing: border-box;
          padding-top: 10/@rem;
          color: #fffdef;
        }
      }
      .logo_open_app{
        .btn{
          float: right;
          border: 1/@rem solid #b4282d;
          height: 51/@rem;
          width: 136/@rem;
          background-color: #b4282d;
          font-size: .4rem;
          border-radius: 5/@rem;
          line-height: 51/@rem;
          margin-top: 10/@rem;
          text-align: center;
          color: #fffdef;
        }
      }
    }
    .search{
      height: 148/@rem;
      .search_input{
        box-sizing: border-box;
        width: 100%;
        height: 88/@rem;
        padding: 18/@rem 30/@rem;
        line-height: 42/@rem;
        .wyyx{
          background-image: url("../../common/images/wyyx.png");
          background-repeat: no-repeat;
          height: 40/@rem;
          width: 138/@rem;
          background-size: cover;
          float: left;
          display: inline-block;
          padding: 8/@rem 0;
          background-origin: content-box;
          margin-right: 20/@rem;
        }
        .input{
          float: left;
          font-size: .37rem;
          height: 56/@rem;
          width: 532/@rem;
          line-height: 56/@rem;
          background-color: #ededed;
          box-sizing: border-box;
          color: #333333;
          border-radius: 10/@rem;
          display: inline-block;
          text-align: center;
        }
      }
      .search_nav{
        width: 100%;
        height: 60/@rem;
        font-size: .4rem;

        .nav_inner{
          .clearFix();
          width: 215%;
          padding: 0 30/@rem;
        }
        .nav_item{
          float: left;
          box-sizing: border-box;
          line-height: 58/@rem;
          text-align: center;
          margin-left: 48/@rem;
          padding: 0 16/@rem;
          &:first-child{
            margin: 0;
          }
          &.border_bottom{
            color: #b4282d;
            border-bottom: 3px solid #b4282d;
          }
        }
      }
    }
  }
</style>
