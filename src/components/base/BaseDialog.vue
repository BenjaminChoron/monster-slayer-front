<template>
	<div class="overlay"></div>
	<dialog class="dialog" open>
		<h2>{{ title }}</h2>
		<p>{{ text }}</p>
		<button @click="clickHandler"></button>
	</dialog>
</template>

<script>
export default {
	name: 'BaseDialog',
	props: {
		title: String,
		text: String,
		action: String,
	},
	emits: ['next', 'reset'],
	methods: {
		clickHandler() {
			this.$emit(this.action);
		},
	},
};
</script>

<style scoped lang="scss">
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--color-background);
	opacity: 0.9;
}
.dialog {
	width: 300px;
	padding: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	text-align: center;
	background-color: var(--color-background);
	border: 2px solid var(--color-border);
	color: var(--color-text);
	border-radius: 0.4rem;
}
</style>
