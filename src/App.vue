<template>
	<the-header title="Monster Slayer"></the-header>
	<main class="main-container">
		<character-card
			v-for="(player, index) in players"
			:key="index"
			:character="player"
		></character-card>
	</main>
	<the-footer></the-footer>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import CharacterCard from '@/components/character/CharacterCard.vue';

export default {
	components: { CharacterCard, TheFooter, TheHeader },
	data() {
		return {
			players: [
				{
					image: 'https://monster-slayer.onrender.com/assets/minotaur.png',
					altText: 'minotaur monster image',
					name: 'Minotaur',
					health: {
						level: 1,
						currentHealth: 150,
						maxHealth: 200,
					},
					xp: null,
				},
				{
					image: 'https://monster-slayer.onrender.com/assets/swordsman.png',
					altText: 'knight hero image',
					name: 'Knight',
					health: {
						level: 1,
						currentHealth: 110,
						maxHealth: 190,
					},
					xp: 75,
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
.main-container {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
</style>
