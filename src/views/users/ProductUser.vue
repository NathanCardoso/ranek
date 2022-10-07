<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProducts />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_product" name="list" tag="ul">
      <li v-for="(product, index) in user_product" :key="index">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
          <button class="delete" @click="deleteProduct(product.id)">Deletar</button>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProducts from "@/components/AddProducts.vue";
import { mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services";

export default {
  name: "ProductUser",
  components: {
    AddProducts,
    ProductItem,
  },
  computed: {
    ...mapState(["login", "user", "user_product"]),
  },
  methods: {
    ...mapActions(["getUserProduct"]),
    deleteProduct(id) {
      const confirm = window.confirm("Deseja remover esse produto?");
      if (confirm) {
        api
          .delete(`/product/${id}`)
          .then(() => {
            this.getUserProduct();
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },
  watch: {
    login() {
      this.getUserProduct();
    },
  },
  created() {
    if (this.login) {
      this.getUserProduct();
    }
		document.title = 'Usuário'
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: rem(20);
}

ul {
	max-height: rem(500);
	overflow-y: auto;
	padding: 0 20px 0 0;
	
	&::-webkit-scrollbar {
			width: rem(6);		
			position: absolute;	
			right: -10px;
		}
		&::-webkit-scrollbar-track {
			border-radius: rem(6);
			background: #ccc;
		}
		&::-webkit-scrollbar-thumb {
			background-color: $purple;
			height: rem(172);
			border-radius: rem(6);
		}

		li {
			background: $white;
			box-shadow: $shadow;
		}
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(rem(20), 0, 0);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.delete {
	position: absolute;
	top: rem(10);
	right: rem(10);
	background: url("../../assets/icon/remove.svg");
	background-repeat: no-repeat;
	background-position: center center;
	width: rem(24);
	height: rem(24);
	text-indent: rem(-140);
	overflow: hidden;
	cursor: pointer;
	border: none;
}
</style>
