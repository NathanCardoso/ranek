<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="product.name" />
    <label for="price">Preço (R$)</label>
    <input type="number" id="price" name="price" v-model="product.price" />
    <label for="photos">Fotos</label>
    <input type="file" id="photo" name="photo" ref="photos" />
    <label for="description">Descrição</label>
    <textarea
      type="text"
      id="description"
      name="description"
      v-model="product.description"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import { api } from "@/services";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        photos: null,
        sold: "false",
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
    },
    addProduct() {
      this.formatProduct();
      api.post("/product", this.product).then(() => {
        this.$store.dispatch("getUserProduct");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  display: grid;
  grid-template-columns: rem(100) 1fr;
  align-items: center;
  margin-bottom: rem(60);
}

.btn {
  grid-column: 2;
}
</style>
