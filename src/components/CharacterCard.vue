<template>
	<img :src="character.image" :alt="character.altText" />
	<h3>{{ name }}</h3>
	<health-bar :character="character.health"></health-bar>
	<experience-bar
		v-if="character.xp"
		:character-xp="character.xp"
	></experience-bar>
</template>

<script lang="ts">
import HealthBar from '@/components/character/HealthBar.vue';
import ExperienceBar from '@/components/character/ExperienceBar.vue';

export default {
	name: 'CharacterCard',
	components: { ExperienceBar, HealthBar },
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
			xp: Number,
		},
	},
};
</script>

<style scoped></style>
