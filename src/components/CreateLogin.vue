<template>
  <section>
    <h2>Crie a sua conta</h2>
		<MistakesNotification :mistakes="mistakes"/>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
      <UserForm v-else>
        <button class="btn btn-form" @click.prevent="userCreate">Criar Usuário</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  name: "CreateLogin",
  data() {
    return {
      create: false,
			mistakes: []
    };
  },
  components: {
    UserForm,
  },
  methods: {
    async userCreate() {
			this.mistakes = []
			try {
				await this.$store.dispatch("userCreate", this.$store.state.user);
				await this.$store.dispatch('userLogin',this.$store.state.user)
				await this.$store.dispatch("getUser");
				this.$router.push({name: "user"})
			} catch (mistake) {
        this.mistakes.push(mistake.response.data.message)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;

  h2 {
    text-align: center;
    margin: rem(40) 0 rem(10);
  }

  .btn {
    width: 100%;
    max-width: rem(300);
    margin: 0 auto;

    &.btn-form {
      max-width: 100%;
    }
  }
}
</style>
