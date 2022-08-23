<template>
  <footer>
    <div class="container">
      <p>Ranek. Alguns direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
	footer {
		background: $purple;
		padding: rem(25) 0;
		text-align: center;
		font-size: rem(20);
		color: $white;
		position: relative;
		top: rem(75);
	}
</style>
