<template>
	<div class="container">
		<span class="copyright">¬©BenjaminChoron - 2022</span>
		<button class="rules">Rules</button>
	</div>
</template>

<script lang="ts">
export default {
	name: 'TheFooter',
};
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
.copyright {
	font-family: Roboto, sans-serif;
	font-weight: 100;
}
.rules {
	padding: 0.4rem;
	background: transparent;
	border: 1px solid var(--color-border);
	border-radius: 0.4rem;
	font-family: Roboto, sans-serif;
	color: var(--color-text);
	cursor: pointer;
	transition: all 0.2s linear;

	&:hover,
	&:focus {
		outline: none;
		background-color: var(--color-accent);
		color: var(--color-text-hover);
	}
}
</style>
