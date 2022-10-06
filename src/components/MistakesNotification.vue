<template>
	<transition>
		<ul class="mistake" v-if="mistakes.length > 0">
			<li v-for="(mistake, index) in mistakes" :key="index" v-html="mistake"></li>
		</ul>
	</transition>
</template>

<script>
	export default {
		name: "MistakeNotification",
		props: {
			mistakes: Array
		}
	}
</script>

<style lang="scss" scoped>
	.mistake {
		margin: rem(20) auto;

		li {
			color: $orange;
			text-align: center;
		}
	}
</style>