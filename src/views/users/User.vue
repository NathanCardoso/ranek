<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{ name: 'user' }">Produtos</router-link></li>
        <li><router-link :to="{ name: 'buy-user' }">Compras</router-link></li>
        <li><router-link :to="{ name: 'sales-user' }">Vendas</router-link></li>
        <li><router-link :to="{ name: 'edit-user' }">Editar Usuário</router-link></li>
        <li><button @click="logOut">Deslogar</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "User",
  methods: {
    logOut() {
      this.$store.dispatch("userLogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: grid;
  grid-template-columns: minmax(rem(140), rem(200)) 1fr;
  max-width: rem(900);
  margin: rem(40) auto;
  gap: rem(30);
  padding: rem(20);
  .sidenav {
    a,
    button {
      padding: rem(10);
      display: block;
      background: $white_alt;
      margin-bottom: rem(10);
      border-radius: rem(4);

      &.router-link-exact-active,
      &:hover,
      button:hover {
        background: $purple;
        color: $white;
      }
    }

    button {
      border: none;
      width: 100%;
      font-size: rem(16);
      text-align: left;
      font-family: "Avenir", Arial, Helvetica, sans-serif;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: rem(500)) {
  .user {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}
</style>
