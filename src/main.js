import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const axios = require('axios');

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
 