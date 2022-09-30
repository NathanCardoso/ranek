<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProducts />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_product" name="list" tag="ul">
      <li v-for="(product, index) in user_product" :key="index">
				<ProductItem :product="product">
					<p>{{product.description}}</p>
				</ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProducts from "@/components/AddProducts.vue";
import { mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue"

export default {
  name: "ProductUser",
  components: {
    AddProducts,
		ProductItem
  },
  computed: {
    ...mapState(["login", "user", "user_product"]),
  },
  methods: {
    ...mapActions(["getUserProduct"]),
  },
  watch: {
    login() {
      this.getUserProduct();
    },
  },
  created() {
    if (this.login) {
      this.getUserProduct();
    }
  },
};
</script>

<style lang="scss" scoped>
	h2 {
		margin-bottom: rem(20);
	}
</style>
