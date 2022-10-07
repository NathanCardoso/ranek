<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="product-wrapper" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.product" :product="sale.product">
          <p class="seller"><span>Comprador: </span>{{ sale.buyer_name }}</p>
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
		<PageLoading v-else/>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services";
import { mapState } from "vuex";
import PageLoading from "@/components/PageLoading.vue";

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
    PageLoading
},
  methods: {
    getSales() {
      api.get(`/transaction?type=seller_id`).then((response) => {
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
		document.title = 'Usuário | Vendas'
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: rem(20);
}
.product-wrapper {
  margin-bottom: rem(40);

	.product {
		margin-bottom: rem(20);
	}

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
		background: $white;
		box-shadow: $shadow;
		padding: rem(15);

		h3 {
			justify-self: center;
			align-self: center;
			margin: 0px;
		}

		ul {
			li + li {
				margin-top: rem(8);
			}
		}
	}

	@media screen and (max-width: rem(767)) {
		.delivery {
			grid-template-columns: 1fr;
			gap: rem(10);

			h3 {
				justify-self: start;
			}
		}
	}
}
</style>
