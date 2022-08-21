<template>
  <section class="container">
    <div v-for="product in products" :key="product.id">
      <img v-if="product.foto" :src="product.foto[0].src" :alt="product.foto[0].titulo" />
      <p class="price">{{ product.preco }}</p>
      <h2 class="title">{{ product.nome }}</h2>
      <p>{{ product.descricao }}</p>
    </div>
    {{ url }}
  </section>
</template>

<script>
import { api } from "@/services.js";
import {serialize} from '@/helpers.js'

export default {
  name: "ProductList",
  data() {
    return {
      products: null,
			pageProducts: 9
    };
  },
  computed: {
    url() {
			const query = serialize(this.$route.query)
      return `/produto?_limit=${this.pageProducts}${query}`;
    },
  },
	watch: {
		url() {
			this.getProducts()
		}
	},
  methods: {
    getProducts() {
      api.get(this.url).then((responseJson) => {
        this.products = responseJson.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
