<template>
	<section>
		<UserForm>
			<button class="btn" @click.prevent="updateUser">Atualizar</button>
		</UserForm>
	</section>
</template>

<script>
import UserForm from "@/components/UserForm.vue"
import {api} from "@/services"

export default {
	name: "EditUser",
	components: {
		UserForm
	},
	methods: {
		updateUser() {
			api.put('/user', this.$store.state.user)
			.then(() => {
				this.$store.dispatch("getUser")
				this.$router.push({name: "user"})
			}).catch(error => {
				console.log(error.response)
			})
		}
	}
}
</script>

<style>
</style>