<template>
	<the-header title="Monster Slayer"></the-header>
	<main class="main-container">
		<character-card :character="monster"></character-card>
		<character-card :character="player"></character-card>
	</main>
	<section class="actions">
		<button class="actions__button" @click="attackMonster">
			<img
				class="actions__button__image"
				:src="player.weapon.image"
				:alt="player.weapon.altText"
			/>
			<span class="actions__button__text">Attack</span>
		</button>
		<button
			class="actions__button"
			@click="specialAttackMonster"
			:disabled="mayUseSpecialAttack"
		>
			<span class="actions__button__count">{{
				remainingSpecialAttacks
			}}</span>
			<img
				class="actions__button__image"
				:src="player.special.image"
				alt="player.special.altText"
			/>
			<span class="actions__button__text">Special</span>
		</button>
		<button
			class="actions__button"
			@click="healPlayer"
			:disabled="!mayUseHeal"
		>
			<span class="actions__button__count">{{ remainingHeals }}</span>
			<img
				class="actions__button__image"
				src="https://monster-slayer.onrender.com/assets/potion.png"
				alt="red healing potion"
			/>
			<span class="actions__button__text">Heal</span>
		</button>
		<button class="actions__button" @click="surrender">
			<img
				class="actions__button__image"
				src="https://monster-slayer.onrender.com/assets/peace.png"
				alt="hand holding a white flag"
			/>
			<span class="actions__button__text">Surrender</span>
		</button>
	</section>
	<base-dialog
		v-if="winner === 'monster'"
		title="You lose..."
		text="You are dead."
		action="reset"
		@reset="reset"
	></base-dialog>
	<base-dialog
		v-if="winner === 'player'"
		title="You won !"
		text="The monster is dead."
		action="next"
		@next="next"
	></base-dialog>
	<base-dialog
		v-if="winner === 'surrender'"
		title="You surrendered..."
		text="You dropped your weapon."
		action="surrender"
		@surrender="reset"
		@cancel="cancel"
	></base-dialog>
	<the-footer></the-footer>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import CharacterCard from '@/components/character/CharacterCard.vue';
import BaseDialog from '@/components/base/BaseDialog.vue';

export default {
	components: { BaseDialog, CharacterCard, TheFooter, TheHeader },
	data() {
		return {
			currentRound: 0,
			winner: null,
			remainingSpecialAttacks: 2,
			remainingHeals: 2,
			monster: {
				image: 'https://monster-slayer.onrender.com/assets/minotaur.png',
				altText: 'minotaur monster image',
				name: 'Minotaur',
				health: {
					level: 1,
					currentHealth: 100,
					maxHealth: 100,
				},
				strength: 1,
			},
			player: {
				image: 'https://monster-slayer.onrender.com/assets/swordsman.png',
				altText: 'knight hero image',
				name: 'Knight',
				health: {
					level: 1,
					currentHealth: 100,
					maxHealth: 100,
				},
				strength: 1,
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
	computed: {
		mayUseSpecialAttack(): boolean {
			return this.remainingSpecialAttacks === 0;
		},
		mayUseHeal(): boolean {
			return (
				this.player.health.currentHealth !==
				this.player.health.maxHealth
			);
		},
		playerHealth(): number {
			return this.player.health.currentHealth;
		},
		monsterHealth(): number {
			return this.monster.health.currentHealth;
		},
	},
	watch: {
		playerHealth(value: number) {
			if (value <= 0) {
				this.winner = 'monster';
			}
		},
		monsterHealth(value: number) {
			if (value <= 0) {
				this.winner = 'player';
			}
		},
	},
	methods: {
		getRandomValue(min: number, max: number) {
			return Math.floor(Math.random() * (max - min)) + min;
		},
		attackMonster() {
			this.currentRound++;
			const min = 10 * this.player.strength;
			const max = 20 * this.player.strength;
			const attackValue = this.getRandomValue(min, max);
			if (this.monster.health.currentHealth < attackValue) {
				this.monster.health.currentHealth = 0;
			} else {
				this.monster.health.currentHealth = Math.round(
					this.monster.health.currentHealth - attackValue
				);
			}

			if (this.monster.health.currentHealth > 0) {
				setTimeout(this.attackPlayer, 200);
			}
		},
		specialAttackMonster() {
			this.remainingSpecialAttacks--;
			this.currentRound++;
			const min = 20 * this.player.strength;
			const max = 30 * this.player.strength;
			const attackValue = this.getRandomValue(min, max);
			if (this.monster.health.currentHealth < attackValue) {
				this.monster.health.currentHealth = 0;
			} else {
				this.monster.health.currentHealth = Math.round(
					this.monster.health.currentHealth - attackValue
				);
			}

			if (this.monster.health.currentHealth > 0) {
				setTimeout(this.attackPlayer, 200);
			}
		},
		attackPlayer() {
			const min = 12 * this.monster.strength;
			const max = 22 * this.monster.strength;
			const attackValue = this.getRandomValue(min, max);
			if (this.player.health.currentHealth < attackValue) {
				this.player.health.currentHealth = 0;
			} else {
				this.player.health.currentHealth = Math.round(
					this.player.health.currentHealth - attackValue
				);
			}
		},
		healPlayer() {
			const min = 20 * this.player.strength;
			const max = 35 * this.player.strength;
			const healValue = this.getRandomValue(min, max);
			if (
				this.player.health.currentHealth + healValue >
				this.player.health.maxHealth
			) {
				this.player.health.currentHealth = this.player.health.maxHealth;
			} else {
				this.player.health.currentHealth += healValue;
			}
			this.remainingHeals--;
			this.currentRound++;
			setTimeout(this.attackPlayer, 200);
		},
		surrender() {
			this.winner = 'surrender';
		},
		reset() {
			this.winner = null;
			this.currentRound = 0;
			this.remainingSpecialAttacks = 2;
			this.remainingHeals = 3;
			// reset player stats
			this.player.health.currentHealth = 100;
			this.player.health.maxHealth = 100;
			this.player.health.level = 1;
			this.player.strength = 1;
			// reset monster stats
			this.monster.health.currentHealth = 100;
			this.monster.health.maxHealth = 100;
			this.monster.health.level = 1;
			this.monster.strength = 1;
		},
		next() {
			this.winner = null;
			this.currentRound = 0;
			this.remainingSpecialAttacks = 2;
			this.remainingHeals = 3;
			// update player stats
			this.player.health.level++;
			this.player.health.maxHealth = this.player.health.maxHealth + 20;
			this.player.health.currentHealth = this.player.health.maxHealth;
			this.player.strength = this.player.strength + 0.1;
			// update monster stats
			this.monster.health.level++;
			this.monster.health.maxHealth = this.monster.health.maxHealth + 20;
			this.monster.health.currentHealth = this.monster.health.maxHealth;
			this.monster.strength = this.monster.strength + 0.1;
		},
		cancel() {
			this.winner = null;
		},
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
		font-family: 'M PLUS Code Latin', sans-serif;
		color: var(--color-text);
		cursor: pointer;
		transition: all 0.2s linear;

		&__count {
			position: absolute;
			top: 0.2rem;
			left: 0.2rem;
			padding: 0.2rem 0.6rem;
			border-radius: 50%;
			background-color: var(--color-accent);
			color: var(--color-background);
		}

		&__image {
			width: 80%;
		}

		&:hover,
		&:focus {
			outline: none;
			background-color: var(--color-accent);
			color: var(--color-text-hover);

			& .actions__button__count {
				background-color: var(--color-background);
				color: var(--color-text);
			}
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

			&__image {
				width: 75%;
			}
		}
	}
}
</style>
