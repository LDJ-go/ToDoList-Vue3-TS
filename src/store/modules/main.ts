import { defineStore } from 'pinia'

export default defineStore('main', {
	state: () => {
		return {
			list: [
				{
					id: 0,
					name: '吃饭',
					done: true,
				},
				{
					id: 1,
					name: '睡觉',
					done: false,
				},
			],
		}
	},
})
