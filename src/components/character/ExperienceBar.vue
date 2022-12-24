<template>
	<div class="container">
		<div class="experience">
			<div class="experience__value" :style="xpStyle"></div>
		</div>
		<div class="infos">
			<span>Xp {{ characterXp }}</span>
			<span>100</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExperienceBar',
	props: {
		characterXp: Number,
	},
	computed: {
		xpStyle() {
			return `width: ${this.characterXp}%;`;
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
}
.experience {
	width: 100%;
	height: 1rem;
	border: 2px solid #cccccc;
	border-radius: 0.1rem;
	margin: 1rem 0;
	background: #777777;
	overflow: hidden;

	&__value {
		background-color: #3997dc;
		height: 100%;
	}
}
.infos {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
</style>
