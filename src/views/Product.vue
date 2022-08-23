<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos" v-if="product.foto">
        <li v-for="(foto, index) in product.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="preco">{{ product.preco | priceNumber }}</p>
        <p class="descricao">{{ product.descricao }}</p>
        <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
        <button class="btn" v-else disabled>Produto Vendido</button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
import { api } from "@/services";
import PageLoading from "@/components/PageLoading.vue";

export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
  components: { PageLoading },
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
    .preco {
      color: $orange;
      font-weight: bold;
      font-size: rem(24);
      margin-bottom: rem(40);
    }
    .descricao {
      font-size: rem(20);
    }
    .btn {
      margin-top: rem(60);
      width: rem(200);
    }
  }
}
</style>
