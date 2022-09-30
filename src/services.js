import axios from "axios"

const url = axios.create({
	baseURL: 'http://ranek-api.local/wp-json/api'
})

url.interceptors.request.use(
	function(config) {
		const token = window.localStorage.token

		if(token) {
			config.headers.Authorization = token
		}
		return {
			config
		}
	},
	function (error) {
		return Promise.reject(error)
	}
)

export const api = {
	get(endpoint) {
		return url.get(endpoint)
	},
	post(endpoint, body) {
		return url.post(endpoint, body)
	},
	put(endpoint, body) {
		return url.put(endpoint, body)
	},
	delete(endpoint) {
		return url.delete(endpoint)
	},
	login(body) {
		return axios.post("http://ranek-api.local/wp-json/jwt-auth/v1/token", body)
	},
	validateToken() {
		return axios.post("http://ranek-api.local/wp-json/jwt-auth/v1/token/validate")
	}
}

export function getCep(cep) {
	return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}