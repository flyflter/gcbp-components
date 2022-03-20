import GlButton from './button.vue'

GlButton.install = function (Vue) {
  console.log('123')
  Vue.component(GlButton.name, GlButton)
}

// 判断是否是直接引入文件，而非模块化开发引入，如果是，就不用调Vue.use()方法，而是直接全局注册
if (typeof window !== 'undefined' && window.Vue) {
  GlButton.install(window.Vue)
}

export default GlButton
