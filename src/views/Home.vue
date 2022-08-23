<template>
  <section>
    <h1>&#129304;Compre ou Venda &#129304;</h1>
		<SearchProduct/>
		<ProductList/>
  </section>
</template>

<script>

import SearchProduct from "@/components/SearchProducts.vue"
import ProductList from "@/components/ProductList.vue"

export default {
	name: 'Home',
	components: {
    SearchProduct,
    ProductList
}
};
</script>

<style lang="scss" scoped>
	h1 {
		color: $purple;
		font-size: rem(32);
		text-align: center;
		margin-top: rem(40);
	}
</style>
