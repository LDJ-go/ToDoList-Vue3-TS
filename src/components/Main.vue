<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	import useStore from '../store';

	const { main } = useStore();
	const { getTodos, deleteTodo } = main;
	getTodos();
	const { list } = storeToRefs(main);
</script>

<template>
	<!-- This section should be hidden by default and shown when there are todos -->
	<section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox" />
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
			<li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
				<div class="view">
					<input class="toggle" type="checkbox" :checked="item.done" />
					<label>{{ item.name }}</label>
					<button class="destroy" @click="deleteTodo(item.id)"></button>
				</div>
				<input class="edit" value="Rule the web" />
			</li>
		</ul>
	</section>
</template>
