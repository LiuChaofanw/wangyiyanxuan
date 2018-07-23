<template>
  <div id="footer">
    <section class="home" @click="routeGo('/home')" :class="{on: isCurrent('/home')}">
      <i class="iconfont icon-home"></i>
      <p>首页</p>
    </section>
    <section class="knowledge" @click="routeGo('/knowledge')" :class="{on: isCurrent('/knowledge')}">
      <i class="iconfont icon-fangkuang"></i>
      <p>识物</p>
    </section>
    <section class="classify" @click="routeGo('/classify')" :class="{on: isCurrent('/classify')}">
      <i class="iconfont icon-iconset0499"></i>
      <p>分类</p></section>
    <section class="shoppingCart" @click="routeGo('/shoppingCart')" :class="{on: isCurrent('/shoppingCart')}">
      <i class="iconfont icon-gouwuche"></i>
      <p>购物车</p>
    </section>
    <section class="profile" @click="routeGo('/profile')" :class="{on: isCurrent('/profile')}">
      <i class="iconfont icon-geren11"></i>
      <p>个人</p>
    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      routeGo (url) {
        this.$router.replace(url)

      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  @import "../../common/css/mixins";
#footer{
  .top-border-1px(#999999);
  .bottom-border-1px(#999999);
  width: 100%;
  text-align: center;
  display: flex;
  height: 96/@rem;
  line-height: 65/@rem;
  position: fixed;
  bottom:0;
  background-color: white;
  z-index: 100;
  i{
   /* display: block;*/
    height: 0.5rem;
    width: 100%;
    font-size: 40/@rem;
    text-align: center;
  }

  section{
    font-size: 24/@rem;
    width: 20%;
    display: flex;
    flex-direction: column;
    &.on{
      color: red;
    }
  }

}
</style>
