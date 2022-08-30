import { api } from '@/services'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
  state: {
		login: false,
		user: {
			id: "",
			name: "",
			email: "",
			password: "",
			zipCode: "",
			road: "",
			district: "",
			city: "",
			state: ""
		},
		user_product: null
  },
  getters: {
  },
  mutations: {
		UPDATE_LOGIN(state, payload) {
			state.login = payload
		},
		UPDATE_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		},
		UPDATE_PRODUCT_USER(state, payload) {
			state.user_product = payload
		},
		ADD_PRODUCT_USER(state, payload) {
			state.product_user.unshift(payload)
		}
  },
  actions: {
		getUserProduct(context) {
			api.get(`/product?user_id=${context.state.user.id}`)
			.then(response => {
				console.log(response.data)
				context.commit("UPDATE_PRODUCT_USER", response.data)
			})
		},
		getUser(context) {
			return api.get(`/user`)
			.then(response => {
				context.commit("UPDATE_USER", response.data)
				context.commit("UPDATE_LOGIN", true)
			})
		},
		userCreate(context, payload) {
			context.commit("UPDATE_USER", {id: payload.email})
			api.post("/user", payload)
		},
		userLogin(context, payload) {
			return api.login({
				username: payload.email,
				password: payload.password
			})
			.then(response => {
				window.localStorage.token = `Bearer ${response.data.token}`
				console.log(response.data.token)
		})
		},
		userLogOut(context) {
			context.commit("UPDATE_USER", {
				id: "",
				name: "",
				email: "",
				password: "",
				zipCode: "",
				road: "",
				district: "",
				city: "",
				state: ""
			})
			context.commit("UPDATE_LOGIN", false)
		}
  },
  modules: {
  }
})
