<template>
  <div id="login">
    <div class="img_container">
      <img src="../../common/images/classsify/profile.png"/>
    </div>
    <div class="login_mail"  :class="{off: isPhone}">
      <div class="content">
        <div class="user">
          <input placeholder="邮箱账号" v-model="userMail"/>
        </div>
        <div class="user">
          <input placeholder="密码" v-model="passerword"/>
        </div>
        <div class="forget_password">
          <span class="register">注册账号</span>
          <span class="forget">忘记密码</span>
        </div>
      </div>
    </div>
    <div class="login_phone" :class="{off: !isPhone}">
      <div class="user">
        <input placeholder="请输入手机号" v-model="userPhone"/>
      </div>
      <div class="user">
        <input placeholder="请输入短信验证码" v-model="code"/>
        <span>{{computedTime ? '已发送'+computedTime+'s':'获取验证码'}}</span>
      </div>
      <div class="forget_password">
        <span class="register">遇到问题？</span>
        <span class="forget">使用密码验证登陆</span>
      </div>
    </div>
    <div class="btns">
      <div class="login">
        <div class="phone" @click="submit">
          <span>登录</span>
        </div>
        <div class="phone mail" @click="isPhone = !isPhone">
          <span>其他登录方式</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        isPhone: true,//登陆方式的判断
        userPhone: '',
        code: '',
        userMail: '',
        passerword: '',
        computedTime: 0
      }
    },
    computed: {
      isRightUserMail: function () {
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.userMail)
      },
      isRightPhone: function () {
        return /^1\d{10}$/.test(this.userPhone)
      }
    },
    mounted () {
      PubSub.subscribe('loginWay',(msg,isPhone) => {
        this.isPhone = isPhone
      })
    },
    methods: {
     /* submit: () => {
        if(this.isPhone){
          alert('1111')
        }else {
          console.log(this.isPhone)
          if(!this.isRightUserMail){
            alert('您输入的邮箱有误')
          }else if(this.isRightUserMail && !this.passerword) {
            alert('请输入密码')
          }else {
            alert('正在登陆...')
          }
        }
      }*/
      submit: function () {
        if(this.isPhone){
          if(!this.isRightPhone){
            alert('您输入的手机号不正确')
          }else if (this.isRightPhone && !(/^\d{6}$/gi.test(this.code))){
            alert('您输入的验证码不正确')
          }else{
            this.computedTime = 30
            this.timer = setInterval(() => {
              this.computedTime--
              if(this.computedTime === 0){
                clearInterval(this.timer)
              }
            },1000)
            alert('正在登陆')
          }
        }else {
          if(!this.isRightUserMail){
            alert('您输入的邮箱有误')
          }else if(this.isRightUserMail && !this.passerword) {
            alert('请输入密码')
          }else {
            alert('正在登陆...')
          }
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  @import "../../common/css/mixins";
#login{
  margin-top: 1.2rem;
  padding: 0 30/@rem;
  box-sizing: border-box;
  .img_container{
    text-align: center;
    margin-bottom: 1rem;
    &>img{
      height: 62/@rem;
      width: 192/@rem;
      margin-top: 56/@rem;
    }
  }
  .off{
    display: none;
  }
  .login_mail{
    .content{
      height: 404/@rem;
      width: 100%;
      box-sizing: border-box;
      .user{
        text-align: center;
        &>input{
          font-size: .4rem;
          border-bottom:1px solid #ccc;
          padding: .4rem .1rem;
          width: 100%;
          box-sizing: border-box;
          outline: none;
        }
      }
      .forget_password{
        .clearFix;
        padding: .6rem .1rem;
        width: 100%;
        box-sizing: border-box;
        font-size: .4rem;
        color: #666;
        .register{
          float: left;
        }
        .forget{
          float: right;
        }
      }
    }
  }
  .login_phone{
    height: 404/@rem;
    width: 100%;
    box-sizing: border-box;
    .user{
      font-size: .4rem;
      white-space: nowrap;
      &>input{
        border-bottom:1px solid #ccc;
        padding: .4rem .1rem;
        width: 100%;
        box-sizing: border-box;
        outline: none;
      }
      &>span{
        border: 1px solid #ccc;
        display: inline-block;
        margin-left: -2.5rem;
        box-sizing: border-box;
        padding: 15/@rem;
        border-radius: 5/@rem;
      }
    }
    .forget_password{
      .clearFix;
      padding: .6rem .1rem;
      width: 100%;
      box-sizing: border-box;
      font-size: .4rem;
      color: #666;
      .register{
        float: left;
      }
      .forget{
        float: right;
      }
    }
  }
  .btns{
    .login{
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
        &>span{
          display: inline-block;
          font-size: .37rem;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
