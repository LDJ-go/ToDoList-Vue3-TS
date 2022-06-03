<script setup lang="ts">
	import { ListItem } from '../types/data';
	import useStore from '../store';
	import { nextTick, ref } from 'vue';

	const { main } = useStore();
	const { updateTodo, deleteTodo } = main;

	const props = defineProps<{
		item: ListItem;
	}>();

	const handleChangeInput = function (item: ListItem) {
		updateTodo(item.id, 'done', !item.done);
	};

	const isEditing = ref(false);
	const inputRef = ref<HTMLInputElement>();

	const handleDoubleClick = function () {
		isEditing.value = true;
		currentName.value = props.item.name;
		nextTick(() => {
			inputRef.value?.focus();
		});
	};

	const handleBlur = () => {
		isEditing.value = false;
		currentName.value = '';
	};

	const currentName = ref();

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			// 按下esc退出选中
			handleBlur();
			return;
		}
		if (e.key === 'Enter') {
			// 更新数据
			if (!currentName.value.trim()) {
				return alert('输入不能为空');
			}
			updateTodo(props.item.id, 'name', currentName.value);
			handleBlur();
		}
	};
</script>

<template>
	<li :class="{ completed: item.done, editing: isEditing }">
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
				:checked="item.done"
				@change="handleChangeInput(item)"
			/>
			<label @dblclick="handleDoubleClick">
				{{ item.name }}
			</label>
			<button
				class="destroy"
				@click="deleteTodo(item.id)"
			></button>
		</div>
		<input
			class="edit"
			ref="inputRef"
			@blur="handleBlur"
			v-model="currentName"
			@keyup="handleKeyUp"
		/>
	</li>
</template>
