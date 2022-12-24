<template>
	<the-header title="Monster Slayer"></the-header>
	<p>main</p>
	<the-footer text="Footer"></the-footer>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	components: { TheFooter, TheHeader },
};
</script>

<style scoped lang="scss"></style>
