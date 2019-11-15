import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilters from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilters)

firebase.initializeApp({
  apiKey: "AIzaSyBM1cyIMpS0d0xK1eA7bOS596TvyHd1QrA",
  authDomain: "vue-create-crm.firebaseapp.com",
  databaseURL: "https://vue-create-crm.firebaseio.com",
  projectId: "vue-create-crm",
  storageBucket: "vue-create-crm.appspot.com",
  messagingSenderId: "1034342656687",
  appId: "1:1034342656687:web:2554485b487c4ecc8ac25a",
  measurementId: "G-8R4HVY16WY"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


