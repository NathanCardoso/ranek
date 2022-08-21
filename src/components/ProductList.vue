<template>
  <section class="container">
		<div v-for="product in products" :key="product.id">
		<img v-if="product.foto" :src="product.foto[0].src" :alt="product.foto[0].titulo">
			<p class="price">{{product.preco}}</p>
			<h2 class="title">{{product.nome}}</h2>
			<p>{{product.descricao}}</p>
		</div>
	</section>
</template>

<script>
import {api} from "@/services.js"

export default {
	name: 'ProductList',
	data() {
		return {
			products: null
		}
	},
	methods: {
		getProducts() {
			api.get('/produto')
			.then(responseJson => {
				this.products = responseJson.data		
			})
		}
	},
	created() {
		this.getProducts()
	}
}
</script>

<style>
</style>