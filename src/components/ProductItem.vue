<template>
  <div class="product" v-if="product">
    <router-link class="img-product" :to="{ name: 'product', params: { id: product.id } }">
      <img
        v-if="product.photo"
        :src="product.photo[0].src"
        :alt="product.photo[0].title"
      />
      <p>Ver Produto</p>
    </router-link>
    <div class="info">
      <p class="price">{{ product.price | priceNumber }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: minmax(rem(100), rem(200)) 1fr;
  gap: rem(20);
  margin-bottom: rem(40);
  position: relative;

	.img-product {
		border-radius: rem(4);
		overflow: hidden;
	}

	.info {
		align-self: end;
	}
}
</style>
