<template>
	<div class="card">
		<img
			class="card__image"
			:src="character.image"
			:alt="character.altText"
		/>
		<h3 class="card__name">{{ character.name }}</h3>
		<div class="card__infos">
			<health-bar :character="character.health"></health-bar>
		</div>
	</div>
</template>

<script lang="ts">
import HealthBar from '@/components/character/HealthBar.vue';

export default {
	name: 'CharacterCard',
	components: { HealthBar },
	props: {
		character: {
			image: String,
			altText: String,
			name: String,
			health: {
				level: Number,
				currentHealth: Number,
				maxHealth: Number,
			},
		},
	},
};
</script>

<style scoped lang="scss">
.card {
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem;

	&__image {
		width: 60%;
	}
	&__name {
	}
	&__infos {
		width: 100%;
	}
}

@media screen and (max-width: 550px) {
	.card {
		width: 130px;
		margin: 1rem;
	}
}
</style>
