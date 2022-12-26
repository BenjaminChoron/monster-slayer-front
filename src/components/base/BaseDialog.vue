<template>
	<div class="overlay"></div>
	<dialog class="dialog" open>
		<h2 class="dialog__title">{{ title }}</h2>
		<p class="dialog__text">{{ text }}</p>
		<div class="dialog__actions">
			<button
				v-if="action === 'surrender'"
				class="dialog__actions__button"
				@click="cancel"
			>
				cancel
			</button>
			<button class="dialog__actions__button" @click="clickHandler">
				{{ action }}
			</button>
		</div>
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
		cancel() {
			this.$emit('cancel');
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

	&__text {
		margin: 1rem auto;
	}

	&__actions {
		display: flex;
		justify-content: space-evenly;

		&__button {
			padding: 0.4rem;
			background: transparent;
			border: 1px solid var(--color-border);
			border-radius: 0.4rem;
			font-family: Roboto, sans-serif;
			text-transform: capitalize;
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
	}
}
</style>
