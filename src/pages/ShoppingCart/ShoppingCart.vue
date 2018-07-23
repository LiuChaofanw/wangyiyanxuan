<template>
  <div id="shopping_cart">
    <div class="header">
      <span class="black">购物车</span>
      <span class="red">领劵</span>
    </div>
    <div class="content">
      <div class="flag">
        <span class="text"><span class="gray">●</span>30天无忧退货</span>
        <span class="text"><span class="gray">●</span>48小时快速退款</span>
        <span class="text"><span class="gray">●</span>满88元免邮费</span>
      </div>
      <div class="btn_container">
        <div class="img_container">去添加点什么吧</div>
        <div class="login_btn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem: 750/10rem;
  @import "../../common/css/mixins";
  #shopping_cart{
    background-color: #f5f5f5;
    height: 100%;
    .header{
      height: 88/@rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0 60/@rem;
      background-color: #ffffff;
      font-size: .47rem;
      line-height: 88/@rem;
      text-align: center;
      .black{
        margin-right: -.8rem;
      }
      .red{
        float: right;
        color: #B4282D;
        font-size: .37rem;
      }

    }
    .content{
      .flag{
        text-align: center;
        line-height: 37/@rem;
        &>.text{
          font-size: .32rem;
          color: #666;
          text-align: center;
          display: inline-block;
          width: 31.3%;
          &>.gray{
            display: inline-block;
            font-size: .32rem;
            color: #cccccc;
          }
        }
      }
      .btn_container{
        .img_container{
          height: 300/@rem;
          width: 248/@rem;
          margin: auto;
          background-image: url("../../common/images/classsify/car.png");
          background-repeat: no-repeat;
          background-size: contain;
          font-size: .3733rem;
          text-align: center;
          color: #999;
          box-sizing: border-box;
          padding-top: 3.2rem;
          margin-top: 5.2rem;
        }
        .login_btn{
          height: 92/@rem;
          width: 480/@rem;
          background-color: #b4282d;
          font-size: .4rem;
          color: #ffffff;
          line-height: 92/@rem;
          text-align: center;
          border-radius: 5/@rem;
          margin: auto;
          margin-top: 0.2rem;
        }
      }
    }
  }
</style>

