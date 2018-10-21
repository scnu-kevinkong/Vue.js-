import Vue from 'vue'
import Router from 'vue-router'
import cookies from 'js-cookie'
Vue.use(Router)
const index = () => import('@/pages/index')
const login = () => import('@/pages/login')
const guardRoute = (to, from, next) => {
  var token = cookies.get('token')
  if (!token) {
    next('/login')
  }
  next()
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: index,
      beforeEnter: guardRoute
    },
    {
      path: '/login',
      name: 'loginPage',
      component: login
    }
  ]
})
