<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	import useStore from '../store';
	import { TActive } from '../types/data';

	const { main, footer } = useStore();
	const { clearCompleted } = main;
	const { completed, unCompleted, list } = storeToRefs(main);

	const { changeActive } = footer;
	const { tabs, active } = storeToRefs(footer);

	const initHash = function () {
		const hash = window.location.hash;
		const res = hash.slice(2) as TActive;
		changeActive(res);
	};
	initHash();
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
			<li
				v-for="item in tabs"
				:key="item"
				@click="changeActive(item)"
			>
				<a
					:class="{
						selected: item === active,
					}"
					:href="`#/${item}`"
				>
					{{ item }}
				</a>
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
