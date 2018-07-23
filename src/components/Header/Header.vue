<template>
  <div class="header">
      <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      <img src="../../common/images/wyyx.png"/>
      <i class="iconfont icon-fangdajing" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche1" @click="$router.push('/shoppingCart')"></i>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem: 750/10rem;
  @import "../../common/css/mixins";
.header{
  position: fixed;
  top:0;
  left:0;
  border-bottom:1px solid #dddddd ;
  height: 87/@rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24/@rem;
  font-size: 1rem;
  line-height: 87/@rem;
  text-align: center;
  background-color: #fafafa;
  z-index: 3;
  .iconfont{
    font-size: .7rem;
    color: #333333;
  }
  img{
    height: 48/@rem;
    margin: 0 1.8rem;
  }
}
</style>
