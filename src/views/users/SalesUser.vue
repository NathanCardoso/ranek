<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="product-wrapper" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.product" :product="sale.product">
          <p class="seller"><span>Comprador: </span>{{ sale.buyer_id }}</p>
        </ProductItem>
				<div class="delivery">
					<h3>Entrega: </h3>
					<ul v-if="sale.address">
						<li v-for="(value, key) in sale.address" :key="key">
							{{key}}: {{value}}
						</li>
					</ul>
				</div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services";
import { mapState } from "vuex";

export default {
  name: "SalesUser",
  data() {
    return {
      sales: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  components: {
    ProductItem,
  },
  methods: {
    getSales() {
      api.get(`/transaction?seller_id=${this.user.id}`).then((response) => {
        this.sales = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getSales();
    },
  },
  created() {
    if (this.login) {
      this.getSales();
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

	.delivery {
		display: grid;
		grid-template-columns: minmax(rem(100), rem(200)) 1fr;
		gap: rem(20);
		margin-bottom: rem(60);

		h3 {
			justify-self: end;
			margin: 0px;
		}
	}
}
</style>
