<template>
  <div id="app">
    <MyHeader v-if="$route.meta.isHeader"/>
    <HomeHeader  v-if="$route.meta.isHomeHeader"/>
    <router-view/>
    <Footer v-if="$route.meta.isFooter"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
  import HomeHeader from './components/HomeHeader/HomeHeader.vue'
  import Header from './components/Header/Header.vue'
export default {
  components: {
    Footer,
    HomeHeader,
    MyHeader: Header
  },
  mounted () {
    this.$store.dispatch('getHeadCateList')
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#app{
  height: 100%;
}
</style>
