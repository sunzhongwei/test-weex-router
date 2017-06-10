// import Vue from 'vue'
import Router from 'vue-router'
import IndexView from './views/index.vue'
import AboutView from './views/about.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/index', component: IndexView },
    { path: '/about', component: AboutView },
    { path: '/', redirect: '/index' }
  ]
})
