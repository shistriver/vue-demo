import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Axios from '@/components/Axios'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Layout',
      	component: Layout,
      	redirect: '/axios',
      	children:[
	      	{
		    	path: '/axios',
		    	name: 'Axios',
		    	component: Axios
		    },
		    {
		    	path: '/calculator',
		    	name: 'Calculator',
		    	component: Calculator
		    }
      	]
    }
    
  ]
})
