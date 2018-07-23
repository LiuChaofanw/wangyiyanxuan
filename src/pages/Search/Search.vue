<template>
  <div id="search">
    <div class="wrapper">
      <div class="input">
        <i class="iconfont icon-fangdajing"></i>
        <input placeholder="50元以内超高性价比好物"/>
      </div>
      <span>取消</span>
      <div class="hot_search">
        <div>热门搜索</div>
        <span class="red">鞋包热销榜</span>
        <span class="red">暑期美食满99减15</span>
        <span class="red">床垫</span>
        <span>餐厨超值88选4</span>
        <span class="red">指定服装买2免1</span>
        <span>电器</span>
        <span>收纳</span>
        <span>内裤</span>
        <span>毛巾</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem: 750/10rem;
#search{
  font-size: .40rem;
  .wrapper{
    background-color: #ffffff;
    padding: 20/@rem 30/@rem 30/@rem 30/@rem;
    .input{
      background-color: #f4f4f4;
      display: inline-block;
      height: 56/@rem;
      width: 564/@rem;
      padding: 0 20/@rem;
      line-height: 56/@rem;
      margin-right: 10/@rem;
      &>input{
        background-color: #f4f4f4;
        color: rgba(0,0,0,.8);
        border: none;
        outline: none;
      }
    }
    .hot_search{
      &>div{
        color: #999;
        margin: 30/@rem 0;
      }
      &>span{
        color: #333;
        border:1px solid #aaa;
        display: inline-block;
        margin: 10/@rem;
        padding: 10/@rem;
        font-size: .33rem;
        &.red{
          color: #b4282d;
          border-color: #b4282d;
        }
      }
    }
  }
}
</style>
