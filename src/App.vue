<template>
	<the-header title="Monster Slayer"></the-header>
	<main class="main-container">
		<character-card :character="monster"></character-card>
		<character-card :character="player"></character-card>
	</main>
	<section class="actions">
		<button class="actions__button">
			<img
				class="actions__button__image"
				:src="player.weapon.image"
				:alt="player.weapon.altText"
			/>
			<span class="actions__button__text">Attack</span>
		</button>
		<button class="actions__button">
			<img
				class="actions__button__image"
				:src="player.special.image"
				alt="player.special.altText"
			/>
			<span class="actions__button__text">Special</span>
		</button>
		<button class="actions__button">
			<img
				class="actions__button__image"
				src="https://monster-slayer.onrender.com/assets/potion.png"
				alt="red healing potion"
			/>
			<span class="actions__button__text">Heal</span>
		</button>
		<button class="actions__button">
			<img
				class="actions__button__image"
				src="https://monster-slayer.onrender.com/assets/peace.png"
				alt="hand holding a white flag"
			/>
			<span class="actions__button__text">Surrender</span>
		</button>
	</section>
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
			monster: {
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
			player: {
				image: 'https://monster-slayer.onrender.com/assets/swordsman.png',
				altText: 'knight hero image',
				name: 'Knight',
				health: {
					level: 1,
					currentHealth: 110,
					maxHealth: 190,
				},
				xp: 75,
				weapon: {
					image: 'https://monster-slayer.onrender.com/assets/sword.png',
					altText: 'sword',
				},
				special: {
					image: 'https://monster-slayer.onrender.com/assets/meteor.png',
					altText: 'falling meteor',
				},
			},
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
.actions {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	&__button {
		width: 100px;
		height: 100px;
		text-align: center;
		margin: 1rem;
		padding: 0.4rem;
		background: transparent;
		border: 1px solid var(--color-border);
		border-radius: 0.4rem;
		color: var(--color-text);
		cursor: pointer;
		transition: all 0.2s linear;

		&__image {
			width: 80%;
		}

		&:hover {
			border-color: var(--color-accent);
			color: var(--color-accent);
		}
	}
}

@media screen and (max-width: 550px) {
	.actions {
		&__button {
			width: 75px;
			height: 75px;
			margin: 0.2rem;
			padding: 0.4rem;
			font-size: 0.8rem;
		}
	}
}
</style>
