<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="product.name" />
    <label for="price">Preço (R$)</label>
    <input type="number" id="price" name="price" v-model="product.price" />
    <label for="photos">Fotos</label>
    <input type="file" id="photos" name="photos" multiple ref="photos" />
    <label for="description">Descrição</label>
    <textarea
      type="text"
      id="description"
      name="description"
      v-model="product.description"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import { api } from "@/services";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        photos: null,
        sold: "false",
      },
    };
  },
  methods: {
		formatProduct() {
			const form = new FormData()

			const files = this.$refs.photos.files 
			for(let i = 0; i < files.length; i++) {
				form.append(files[i].name, files[i])
			}

			form.append('name', this.product.name)
			form.append('price', this.product.price)
			form.append('description', this.product.description)
			form.append('sold', this.product.description)
			form.append('user_id', this.$store.state.user.id)

			return form
		},
    async addProduct(event) {
			const product = this.formatProduct();

			const button = event.currentTarget
			button.value = 'Adicionando...'
			button.setAttribute('disabled', '')
			button.classList.add('btn-disabled')

      await api.post("/product", product)
			await this.$store.dispatch("getUserProduct");
			
			button.value = 'Adicionar Produto'
			button.removeAttribute('disabled')
			button.classList.remove('btn-disabled')
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  display: grid;
  grid-template-columns: rem(100) 1fr;
  align-items: center;
  margin-bottom: rem(60);
	.btn {
		grid-column: 2;

		&.btn-disabled {
			cursor: not-allowed;
		}
	}
}


@media screen and (max-width: rem(479)) {
	.add-product {
		display: flex;
		flex-direction: column;
		align-items: start;
		
		input + label {
			margin-top: rem(16);
		}
	}
}
</style>
