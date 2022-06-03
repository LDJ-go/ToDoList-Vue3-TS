<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	import useStore from '../store';

	const { main } = useStore();
	const { clearCompleted } = main;

	const { completed, unCompleted, list } = storeToRefs(main);
</script>

<template>
	<!-- This footer should be hidden by default and shown when there are todos -->
	<footer class="footer" v-if="list.length">
		<!-- This should be `0 items left` by default -->
		<span class="todo-count">
			<strong>{{ unCompleted.length }}</strong>
			item left
		</span>
		<!-- Remove this if you don't implement routing -->
		<ul class="filters">
			<li>
				<a class="selected" href="#/">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		<button
			class="clear-completed"
			@click="clearCompleted"
			v-if="completed.length"
		>
			Clear completed
		</button>
	</footer>
</template>
