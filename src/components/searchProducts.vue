<template>
  <form>
    <input id="search" name="search" type="text" placeholder="Buscar..." v-model="search" />
    <input type="submit" id="magnifier" value="Buscar" @click.prevent="searchProduct" />
  </form>
</template>

<script>
export default {
  name: "SearchProducts",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchProduct() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: rem(600);
  margin: rem(30) auto rem(60) auto;
  position: relative;
	padding: 0 rem(10);
  
	#search {
    width: 100%;
		padding: rem(20);
    border: none;

		&:focus, &:hover {
			outline: none;
			transform: scale(1.1);
			box-shadow: $shadow_alt;
		}
  }

	#magnifier {
		width: rem(62);
		height: rem(62);
		background: url('../assets/icon/search.svg');
		background-repeat: no-repeat;
		background-position: center center;
		text-indent: rem(-150);
		border: none;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		box-shadow: none;
	}
}
</style>
