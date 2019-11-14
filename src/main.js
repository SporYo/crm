import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilters from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.filter('date', dateFilters)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
