<script setup lang="ts">
	import { storeToRefs } from 'pinia';

	import TodoItem from './TodoItem.vue';
	import useStore from '../store';
	import { ListItem } from '../types/data';

	const { main } = useStore();
	const { getTodos, deleteTodo, updateTodo, updateAllStatus } =
		main;

	getTodos();

	const { list, mainRadioStatus } = storeToRefs(main);

	const handleChangeAll = function (done: boolean) {
		updateAllStatus(done);
	};
</script>

<template>
	<!-- This section should be hidden by default and shown when there are todos -->
	<section class="main">
		<input
			id="toggle-all"
			class="toggle-all"
			type="checkbox"
			:checked="mainRadioStatus"
			@change="handleChangeAll(!mainRadioStatus)"
		/>
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
			<TodoItem
				v-for="item in list"
				:key="item.id"
				:item="item"
			/>
		</ul>
	</section>
</template>
