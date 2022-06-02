<script setup lang="ts">
	import { ref } from 'vue'
	import Header from './components/Header.vue'
	import Main from './components/Main.vue'
	import Footer from './components/Footer.vue'

	defineProps<{ msg: string }>()

	const count = ref(0)
</script>

<template>
	<section class="todoapp">
		<Header></Header>
		<Main></Main>
		<Footer></Footer>
	</section>
</template>
