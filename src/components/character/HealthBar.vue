<template>
	<div class="container">
		<div class="health">
			<div class="health__value" :style="healthStyles"></div>
		</div>
		<div class="infos">
			<span>Level {{ character.level }}</span>
			<span>
				{{ character.currentHealth }} / {{ character.maxHealth }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HealthBar',
	props: {
		character: {
			level: Number,
			currentHealth: Number,
			maxHealth: Number,
		},
	},
	computed: {
		getCurrentHealthPercentage() {
			return (
				(this.character.currentHealth * 100) / this.character.maxHealth
			);
		},
		healthStyles() {
			return `width: ${this.getCurrentHealthPercentage}%;`;
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
}
.health {
	width: 100%;
	height: 2.6rem;
	border: 2px solid #cccccc;
	border-radius: 2rem;
	margin: 1rem 0;
	background: #d54c4c;
	overflow: hidden;

	&__value {
		background-color: #00a876;
		width: 100%;
		height: 100%;
	}
}
.infos {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
</style>
