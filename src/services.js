import axios from "axios"

const url = axios.create({
	baseURL: 'http://localhost:3000'
})

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
	}
}

export function getCep(cep) {
	return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}