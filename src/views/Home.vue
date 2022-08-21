<template>
  <section>
    <h1>Compre ou Venda</h1>
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
		color: #87f;
		font-size: 2rem;
		text-align: center;
		margin-top: 40px;
	}
</style>
