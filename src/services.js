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
	}
}