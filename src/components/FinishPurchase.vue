<template>
  <section>
    <h2>Endereço de envio</h2>
		<MistakesNotification :mistakes="mistakes"/>
    <UserForm>
      <button class="btn" @click.prevent="finishPurchase">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { api } from "@/services";
import { mapState } from "vuex";

export default {
  name: "FinishPurchase",
  props: ["product"],
  components: {
    UserForm,
  },
	data() {
		return {
			mistakes: []
		}
	},
  computed: {
    ...mapState(["user"]),
    purchase() {
      return {
        buyer_id: this.user.id,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          zipCode: this.user.zipCode,
          road: this.user.road,
          number: this.user.number,
          district: this.user.district,
          city: this.user.city,
          state: this.user.state,
        },
      };
    },
  },
  methods: {
    async transactionCreate() {
      const transaction = await api.post("/transaction", this.purchase).then(() => {
				this.$router.push({ name: "buy-user" });
			})
			return transaction
    },
    async userCreate() {
      try {
        await this.$store.dispatch("userCreate", this.$store.state.user);
        await this.$store.dispatch("userLogin", this.$store.state.user);
        await this.$store.dispatch("getUser");
        await this.transactionCreate();
      } catch (mistake) {
        this.mistakes.push(mistake.response.data.message)
      }
    },
    finishPurchase() {
			this.mistakes = []
      if (this.$store.state.login) {
        this.transactionCreate();
      } else {
        this.userCreate();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: rem(40);
  margin-bottom: rem(20);
}

.btn {
  background: $orange;
}
</style>
