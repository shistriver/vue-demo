import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
// import NavBar from '@/components/navBar/NavBar'
// import NavBar from '@/components/sideBar/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
