import Vue from 'vue'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routerConfig'

// import Mint from 'mint-ui'

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Mint)


const router = new VueRouter({
	routes: routes.routes
})


const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

