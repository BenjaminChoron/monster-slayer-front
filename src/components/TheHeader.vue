<template>
	<h1>{{ title }}</h1>
</template>

<script>
export default {
	name: 'TheHeader',
	props: {
		title: String,
	},
};
</script>

<style scoped lang="scss">
h1 {
	width: 100%;
	padding: 2rem 0;
	font-family: 'Press Start 2P', cursive;
	text-align: center;
}
@media screen and (max-width: 550px) {
	h1 {
		font-size: 1.3rem;
		padding: 1.3rem;
	}
}
</style>
