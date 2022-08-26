<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos" v-if="product.photo">
        <li v-for="(foto, index) in product.photo" :key="index">
          <img :src="foto.src" :alt="foto.title" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price | priceNumber }}</p>
        <p class="description">{{ product.description }}</p>
        <transition mode="out-in" v-if="product.sold === 'false'">
          <button class="btn" v-if="!finish" @click="finish = true">Comprar</button>
          <FinishPurchase v-else :product="product"/>
        </transition>
        <button class="btn" v-else disabled>Produto Vendido</button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
import { api } from "@/services";
import PageLoading from "@/components/PageLoading.vue";
import FinishPurchase from "@/components/FinishPurchase.vue";

export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      product: null,
			finish: false
    };
  },
  methods: {
    getProduct() {
      api.get(`/product/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
  components: {
    PageLoading,
    FinishPurchase,
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: rem(30);
  max-width: rem(900);
  padding: rem(60) rem(20);
  margin: 0 auto;

  .info {
    .price {
      color: $orange;
      font-weight: bold;
      font-size: rem(24);
      margin-bottom: rem(40);
    }
    .description {
      font-size: rem(20);
    }
    .btn {
      margin-top: rem(60);
      width: rem(200);
    }
  }
}
</style>
