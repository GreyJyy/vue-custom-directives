import Vue from 'vue'
import App from './App.vue'
import directives from './directives'

Vue.config.productionTip = false
Vue.use(directives)

new Vue({
  render: h => h(App)
}).$mount('#app')
