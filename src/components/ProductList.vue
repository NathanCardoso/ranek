<template>
  <section class="container">
    <div v-if="products && products.length" class="products">
      <div v-for="(product, index) in products" :key="index" class="product">
        <router-link to="/">
          <img
            v-if="product.foto"
            :src="product.foto[0].src"
            :alt="product.foto[0].titulo"
          />
          <p class="price">{{ product.preco }}</p>
          <h2 class="title">{{ product.nome }}</h2>
          <p>{{ product.descricao }}</p>
        </router-link>
      </div>
      <PageProducts :totalProducts="totalProducts" :pageProducts="pageProducts" />
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
    </div>
    <div v-else>
      <PageLoading />
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
import PageProducts from "@/components/PageProducts.vue";

export default {
  name: "ProductList",
  data() {
    return {
      products: null,
      pageProducts: 3,
      totalProducts: 0,
    };
  },
  components: {
    PageProducts,
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.pageProducts}${query}`;
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  methods: {
    getProducts() {
			setTimeout(() => {
				api.get(this.url).then((responseJson) => {
					this.totalProducts = +responseJson.headers["x-total-count"];
					this.products = responseJson.data;
				});
			}, 1500)
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;

  .product {
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }

    img {
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .title {
      margin-bottom: 10px;
    }

    .price {
      color: #e80;
      font-weight: bold;
    }
  }
}
.no-results {
  text-align: center;
}
</style>
