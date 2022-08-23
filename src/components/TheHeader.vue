<template>
  <header>
    <div class="container">
      <nav>
        <router-link to="/" class="logo">
          <img src="@/assets/icon/ranek.svg" alt="ranek-logo" />
        </router-link>
        <router-link to="/login" class="btn">Vender | Login</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
header {
	box-shadow: $shadow;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
	padding: rem(15) 0;
}

.logo {
	padding: rem(10) 0;
}

.logo img {
	width: rem(90);
}
</style>
