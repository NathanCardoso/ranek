<template>
	<form>
		<input id="search" name="search" type="text" v-model="search">
		<input type="submit" id="magnifier" value="Buscar" @click.prevent="searchProduct">
		{{search}}
	</form>
</template>

<script>
	export default {
		name: 'SearchProducts',
		data() {
			return {
				search: ""
			}
		},
		methods: {
			searchProduct() {
				this.$router.push({query: {q: this.search}})
			}
		},
	}
</script>

<style>
</style>