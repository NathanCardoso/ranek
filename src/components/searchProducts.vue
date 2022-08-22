<template>
  <form>
    <input id="search" name="search" type="text" placeholder="Buscar..." v-model="search" />
    <input type="submit" id="magnifier" value="Buscar" @click.prevent="searchProduct" />
    {{ search }}
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
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  
	#search {
    width: 100%;
		padding: 20px;
    border: none;

		&:focus, &:hover {
			outline: none;
			transform: scale(1.1);
			box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
		}
  }

	#magnifier {
		width: 62px;
		height: 62px;
		background: url('../assets/icon/search.svg');
		background-repeat: no-repeat;
		background-position: center center;
		text-indent: -150px;
		border: none;
		cursor: pointer;
		position: absolute;
		top: 0px;
		right: 0px;
		box-shadow: none;
	}
}
</style>
