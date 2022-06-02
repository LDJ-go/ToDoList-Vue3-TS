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
	},
});
