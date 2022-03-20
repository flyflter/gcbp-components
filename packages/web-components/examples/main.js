import Vue from 'vue'
import App from './App.vue'
import GlButton from '../packages'

Vue.config.productionTip = false
Vue.use(GlButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
