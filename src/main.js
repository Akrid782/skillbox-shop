import Vue from 'vue'
import App from './App.vue'
import { massage1, massage2 } from './file1'
import getMessage from './file2'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

getMessage(massage1)
getMessage(massage2)
