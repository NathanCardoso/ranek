<template>
  <section class="container container-default">
    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="products">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link :to="{name: 'product', params: {id: product.id}}">
            <img
              v-if="product.photos"
              :src="product.photos[0].src"
              :alt="product.photos[0].title"
            />
            <p class="price">{{ product.price | priceNumber}}</p>
            <h2 class="title">{{ product.name}}</h2>
            <p>{{ product.description}}</p>
          </router-link>
        </div>
        <PageProducts :totalProducts="totalProducts" :pageProducts="pageProducts" />
      </div>
      <div v-else-if="products && products.length === 0" key="no-results">
        <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
      </div>
      <div v-else key="loading">
        <PageLoading />
      </div>
    </transition>
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
      pageProducts: 9,
      totalProducts: 0,
    };
  },
  components: {
    PageProducts,
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/product?_limit=${this.pageProducts}${query}`;
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  methods: {
    getProducts() {
			api.get(this.url).then((responseJson) => {
				this.totalProducts = +responseJson.headers["x-total-count"];
				this.products = responseJson.data;
			});
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
  justify-content: center;
  gap: rem(30);
  margin: rem(30);

  .product {
    box-shadow: $shadow;
    padding: rem(10);
    background: $white;
    border-radius: rem(4);
    transition: all 0.2s;

    &:hover {
      box-shadow: $shadow_alt;
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }

    img {
      border-radius: rem(4);
      margin-bottom: rem(20);
    }

    .title {
      margin-bottom: rem(10);
    }

    .price {
      color: $orange;
      font-weight: bold;
    }
  }

	@media screen and (max-width: rem(767)) {
		grid-template-columns: repeat(2, 1fr);
		gap: rem(10);
		margin: rem(10);
	}
	@media screen and (max-width: rem(479)) {
		grid-template-columns: 1fr;
		gap: rem(10);
		margin: rem(10);
	}
}
.no-results {
  text-align: center;
}
</style>
