<template>
  <section>
    <div v-if="purchases">
      <h2>Compras</h2>
      <div class="product-wrapper" v-for="(purchase, index) in purchases" :key="index">
        <ProductItem v-if="purchase.product" :product="purchase.product">
          <p class="seller"><span>Vendedor: </span>{{ purchase.seller_name }}</p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services";
import { mapState } from "vuex";

export default {
  name: "BuyUser",
  data() {
    return {
      purchases: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  components: {
    ProductItem,
  },
  methods: {
    getPurchases() {
      api.get(`/transaction?type=buyer_id`).then((response) => {
        this.purchases = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getPurchases();
    },
  },
  created() {
    if (this.login) {
      this.getPurchases();
    }
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: rem(20);
}
.product-wrapper {
  margin-bottom: rem(40);

  .seller {
    span {
      color: $orange;
    }
  }
}
</style>
