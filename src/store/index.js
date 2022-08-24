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
		}
  },
  getters: {
  },
  mutations: {
		UPDATE_LOGIN(state, payload) {
			state.login = payload
		},
		UPDATE_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		}
  },
  actions: {
		getUser(context, payload) {
			api.get(`/usuario/${payload}`)
			.then(response => {
				context.commit("UPDATE_USER", response.data)
				console.log(response.data)
				context.commit("UPDATE_LOGIN", true)
			})
		}
  },
  modules: {
  }
})
