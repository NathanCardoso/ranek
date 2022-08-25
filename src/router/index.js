import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Product from "@/views/Product.vue"
import Login from "@/views/Login.vue"
import User from "@/views/users/User.vue"
import ProductUser from "@/views/users/ProductUser.vue"
import BuyUser from "@/views/users/BuyUser.vue"
import EditUser from "@/views/users/EditUser.vue"
import SalesUser from "@/views/users/SalesUser.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/product/:id',
			name: 'product',
			component: Product,
			props: true
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/user",
			component: User,
			children: [
				{
					path: "",
					name: "user",
					component: ProductUser
				},
				{
					path: "buy-user",
					name: "buy-user",
					component: BuyUser
				},
				{
					path: "sales-user",
					name: "sales-user",
					component: SalesUser
				},
				{
					path: "edit-user",
					name: "edit-user",
					component: EditUser
				}
			]
		}
	],
	scrollBehavior() {
		return window.scrollTo({top: 0, behavior: 'smooth'})
	}
})

export default router
