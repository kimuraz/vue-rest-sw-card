import Vue from 'vue'
import VueRest from 'vue-rest'
import App from './App.vue'

Vue.use(VueRest, {
  axiosOptions: {
    baseURL: 'http://localhost:8000/'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
