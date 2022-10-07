import axios from "axios"

const url = 'https://ranek.api.teamdev.com.br/wp-json/'

const urlInstance = axios.create({
	baseURL: url + 'api'
})

urlInstance.interceptors.request.use(
	function(config) {
		const token = window.localStorage.token
		if(token) {
			config.headers.Authorization = token
		}
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export const api = {
	get(endpoint) {
		return urlInstance.get(endpoint)
	},
	post(endpoint, body) {
		return urlInstance.post(endpoint, body)
	},
	put(endpoint, body) {
		return urlInstance.put(endpoint, body)
	},
	delete(endpoint) {
		return urlInstance.delete(endpoint)
	},
	login(body) {
		return axios.post(
			url + 'jwt-auth/v1/token', 
			body)
	},
	validateToken() {
		return urlInstance.post(
			url + 'jwt-auth/v1/token/validate')
	}
}

export function getCep(cep) {
	return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}