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

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
	padding: 15px 0;
	box-shadow: 0 2px 4px rgab(30, 60, 90, .1);
}

.logo {
	padding: 10px 0;
}

.logo img {
	width: 90px;
}
</style>
