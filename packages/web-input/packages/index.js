import GlInput from './input.vue'

GlInput.install = function (Vue) {
  console.log('this is input')
  Vue.component(GlInput.name, GlInput)
}

// 判断是否是直接引入文件，而非模块化开发引入，如果是，就不用调Vue.use()方法，而是直接全局注册
if (typeof window !== 'undefined' && window.Vue) {
  GlInput.install(window.Vue)
}

export default GlInput
