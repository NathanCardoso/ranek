<template>
	<section>
		<UserForm>
			<button class="btn" @click.prevent="updateUser">Atualizar</button>
		</UserForm>
		<MistakesNotification :mistakes="mistakes"/>
	</section>
</template>

<script>
import UserForm from "@/components/UserForm.vue"
import {api} from "@/services"
import MistakesNotification from "@/components/MistakesNotification.vue"

export default {
	name: "EditUser",
	components: {
    UserForm,
    MistakesNotification
},
	data() {
		return {
			mistakes: []
		}
	},
	methods: {
		updateUser() {
			this.mistakes = []
			api.put('/user', this.$store.state.user)
			.then(() => {
				this.$store.dispatch("getUser")
				this.$router.push({name: "user"})
			}).catch(mistake => {
				this.mistakes.push(mistake.response.data.message)
			})
		}
	}
}
</script>

<style>
</style>