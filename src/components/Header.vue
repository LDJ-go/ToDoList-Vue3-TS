<script setup lang="ts">
	import { ref } from 'vue';
	import useStore from '../store';

	const name = ref('');

	const { main } = useStore();
	const { addTodo } = main;

	const handleKeyUp = function () {
		if (!name.value.trim()) {
			return alert('输入不能为空');
		}
		addTodo(name.value);
		name.value = '';
	};
</script>

<template>
	<header class="header">
		<h1>todos</h1>
		<input
			class="new-todo"
			placeholder="What needs to be done?"
			autofocus
			v-model="name"
			@keyup.enter="handleKeyUp"
		/>
	</header>
</template>
