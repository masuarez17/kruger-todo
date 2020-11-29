import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('../views/Login/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register/Register.vue')
	},
	{
		path: '/todo',
		name: 'Todo',
		component: () => import('../views/ToDo/ToDo.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
