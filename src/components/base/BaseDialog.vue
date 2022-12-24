<template>
	<dialog class="dialog" open>
		<h2>{{ title }}</h2>
		<p>{{ text }}</p>
	</dialog>
</template>

<script>
export default {
	name: 'BaseDialog',
	props: {
		title: String,
		text: String,
	},
};
</script>

<style scoped lang="scss">
.dialog {
	width: 300px;
	padding: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	text-align: center;
}
</style>
