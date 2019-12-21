import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middleware from '../src/plugins/middleware'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'
import './assets/scss/base.scss'
import './assets/scss/common.scss'
import './plugins/requestAnimationFrame'
import animated from 'animate.css'
// import Velocity from 'velocity-animate'

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.vm = new Vue()
Vue.use(middleware)
Vue.use(Button)
Vue.component(Select.name, Select)
Vue.use(animated)
// Vue.install(Velocity)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
