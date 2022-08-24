<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="name" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email" />
    <label for="password">Senha</label>
    <input type="password" id="password" name="password" v-model="password" />
    <label for="zip-code">Cep</label>
    <input type="text" id="zip-code" name="zip-code" v-model="zipCode" @keyup="fillCep"/>
    <label for="road">Rua</label>
    <input type="text" id="road" name="road" v-model="road" />
    <label for="number">Numero</label>
    <input type="number" id="number" name="number" v-model="number" />
    <label for="district">Bairro</label>
    <input type="text" id="district" name="district" v-model="district" />
    <label for="city">Cidade</label>
    <input type="text" id="city" name="city" v-model="city" />
    <label for="state">Estado</label>
    <input type="text" id="state" name="state" v-model="state" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import {getCep} from "@/services.js"

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "road",
        "zipCode",
        "number",
        "district",
        "city",
        "state",
      ],
      base: "user",
      mutation: "UPDATE_USER",
    }),
  },
	methods: {
		fillCep() {
			const cep = this.zipCode.replace(/\D/g, "")
			if(cep.length === 8) {
				getCep(cep)
				.then(response => {
					this.road = response.data.logradouro
					this.district = response.data.bairro
					this.city = response.data.localidade
					this.state = response.data.uf
				})
			}
		}
	},
};
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: rem(80) 1fr;
  align-items: center;

  .button {
    grid-column: 2;
    margin-top: rem(10);
  }
}
</style>
