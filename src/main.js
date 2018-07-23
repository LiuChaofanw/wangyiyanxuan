// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
import store from './store'
import './filters'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
