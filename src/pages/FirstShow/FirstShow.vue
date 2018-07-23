<template>
  <div id="firstPages">
    <div class="header">
      <img src="../../common/images/53df1ead033706dcd7da9a91c8977b83.jpg"/>
    </div>
    <div class="center">
      <img src="../../common/images/143424244e87fb8eed45c6984c769a63.jpg"/>
    </div>
    <div class="goHome">
      <img src="../../common/images/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
      <a class="downloadApp" href="javascript:;"></a>
      <a class="linkGoHome" href="javascript:;" @click="$router.push('/home')"></a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @rem:750/10rem;
  #firstPages{
    font-size: 0;
    height: 100%;
    width: 100%;
    .header{
      width: 10rem;
      img{
        width: 100%;
      }
    }
    .center{
      width: 10rem;
      img{
        width: 100%;
      }
    }
    .goHome{
      position: relative;
      img{
        width: 100%;
      }
      .downloadApp{
        display: block;
        width: 432/@rem;
        height: 98/@rem;
        position: absolute;
        top:1.3rem;
        left:2rem;
      }
      .linkGoHome{
        display: block;
        width: 254/@rem;
        height: 30/@rem;
        position: absolute;
        top:3rem;
        left: 3rem;
      }
    }
  }
</style>

