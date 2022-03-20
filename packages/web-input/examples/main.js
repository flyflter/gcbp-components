import Vue from 'vue'
import App from './App.vue'
import GlInput from '../packages'

Vue.config.productionTip = false
Vue.use(GlInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
