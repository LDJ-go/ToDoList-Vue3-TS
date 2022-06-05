import { defineStore } from 'pinia';
import { TActive } from '../../types/data';

export default defineStore('footer', {
	state: () => {
		return {
			tabs: ['All', 'Active', 'Completed'] as Array<TActive>,
			active: 'All' as TActive,
		};
	},
	actions: {
		changeActive(active: TActive) {
			this.active = active;
		},
	},
});
