import { defineStore } from 'pinia';
import { ListItem } from '../../types/data';
import request from '../../utils/request';

export default defineStore('main', {
	state: () => {
		return {
			list: [] as ListItem[],
		};
	},
	actions: {
		async getTodos() {
			// 不懂啥意思
			const { data } = await request.get<ListItem[]>('/');
			this.list = data;
		},
		/**
		 * 删除数据
		 * @param id number
		 */
		async deleteTodo(id: number) {
			await request.delete(`/${id}`);
			this.getTodos();
		},
		async updateTodo(
			id: number,
			key: string,
			value: boolean | string
		) {
			await request.patch('/' + id, {
				[key]: value,
			});
			this.getTodos();
		},
		async addTodo(name: string) {
			await request.post('/', {
				name,
				done: false,
			});
			this.getTodos();
		},
		async updateAllStatus(done: boolean) {
			const arrPromise = this.list.map((item) => {
				return this.updateTodo(item.id, 'done', done);
			});
			await Promise.all(arrPromise);
			this.getTodos();
		},
		// 清空已完成
		async clearCompleted() {
			const arrPromise = this.completed.map((item) => {
				request.delete(`/${item.id}`);
			});
			await Promise.all(arrPromise);
			this.getTodos();
		},
	},
	getters: {
		/* mainRadioStatus(): boolean {
			return this.list.every((item) => {
				return item.done;
			});
		}, */
		mainRadioStatus(state) {
			return state.list.every((item) => {
				return item.done;
			});
		},
		// 已完成的数据
		completed(state) {
			return state.list.filter((item) => item.done);
		},
		// 未完成的数据
		unCompleted(state) {
			return state.list.filter((item) => !item.done);
		},
	},
});
