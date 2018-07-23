<template>
  <div id="profile">
    <div class="logo">
      <img src="../../common/images/classsify/profile.png"/>
    </div>
    <div class="phone" @click="login(true)">
      <i class="iconfont icon-shouji3"></i>
      <span>手机号码登录</span>
    </div>
    <div class="phone mail"  @click="login(false)">
      <i class="iconfont icon-xinxi"></i>
      <span>&nbsp;邮箱登录</span>
    </div>
    <div class="login_fast ">手机号快捷注册<span>></span></div>
    <div class="login_alse">
      <span class="wx">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </span>
      <span class="qq">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </span>
      <span class="wb">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </span>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    methods: {
      login (isPhone) {
        PubSub.publish('loginWay',isPhone)
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  #profile{
    background-color: #F2F5F4;
    height: 100%;
    padding-top: 87/@rem;
    box-sizing: border-box;
    .logo{
      text-align: center;
      padding: 160/@rem 0;
      &>img{
        height: 90/@rem;
        width: 268/@rem;
      }
    }
    .phone{
      text-align: center;
      height: 90/@rem;
      width: 666/@rem;
      background-color: #b4282d;
      color: #ffffff;
      margin: auto;
      font-size: 0;
      line-height: 90/@rem;
      margin-bottom: 32/@rem;
      border: 1px solid #b4282d;
      &.mail{
        background-color: #F2F5F4;
        color: #b4282d;
      }
      .icon-shouji3{
        font-size: .65rem;
        vertical-align: middle;
      }
      .icon-xinxi{
        font-size: .5rem;
        vertical-align: middle;
      }
      &>span{
        display: inline-block;
        font-size: .37rem;
        vertical-align: middle;
      }
    }
    .login_fast{
      font-size: .37rem;
      color: #333;
      text-align: center;
      line-height: 1.5;
      &>span{
        font-size: .7rem;
        line-height: 1.2;
        vertical-align: sub;
        color: #999999;
        font-weight: 300;
      }
    }
    .login_alse{
      color: #7f7f7f;
      font-size: .37rem;
      text-align: center;
      position: fixed;
      bottom: 1rem;
      line-height: 1.3;
      width: 100%;
      .wx{
        display: inline-block;
        border-right: 1px solid;
        padding-right: .5rem;
        margin-right: .5rem;
      }
      .qq{
        display: inline-block;
        border-right: 1px solid;
        padding-right: .5rem;
        margin-right: .5rem;
      }
      .wb{}
      .iconfont{

      }
    }
  }

</style>
