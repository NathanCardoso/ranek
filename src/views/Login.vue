<template>
		<section class="login">
			<h1>Login</h1>
			<form>
				<label for="email">Email</label>
				<input type="email"	name="email" id="email" v-model="login.email">
				<label for="password">Senha</label>
				<input type="password"	name="password" id="password" v-model="login.password">
				<button class="btn" @click.prevent="logInto">Logar</button>
				<MistakeNotification :mistakes="mistakes"/>
			</form>
			<p class="forget">Esqueceu sua senha? <a href="http://ranek-api.local/wp-login.php?action=lostpassword" targte="_blank">Clique aqui</a></p>
			<CreateLogin/>
		</section>
</template>

<script>
import CreateLogin from "@/components/CreateLogin.vue"

export default {
	name: "Login",
	data() {
		return {
			login: {
				email: '',
				password: ''
			},
			mistakes: []
		}
	},
	components: {
		CreateLogin
	},
	methods: {
		logInto() {
			this.mistakes = []
			this.$store.dispatch('userLogin', this.login).then(() => {
				this.$store.dispatch("getUser")
				this.$router.push({name: "user"})
			}).catch(mistake => {
				this.mistakes.push(mistake.response.data.message)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login {
	max-width: rem(500);
	margin: 0 auto;
	padding: 0 rem(20);

	h1 {
		text-align: center;
		font-size: rem(32);
		margin-top: rem(40);
		color: $purple;
	}

	form {
		display: grid;
		.btn {
			width: 100%;
			max-width: rem(300);
			margin: 0 auto;
		}
	}
	
	.forget	 {
		text-align: center;
		margin: rem(20) auto 0 auto;

		a {
			&:hover {
				color: $purple;
				text-decoration: underline;
			}
		}
	}
}
</style>