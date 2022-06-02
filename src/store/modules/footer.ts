import { defineStore } from 'pinia'

export default defineStore('footer', {
	state: () => {
		return {
			tabs: ['All', 'Active', 'Completed'],
			active: 'All',
		}
	},
})
