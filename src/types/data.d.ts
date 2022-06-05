interface ListItem {
	id: number;
	name: string;
	done: boolean;
}
// 接口的变量名以I开头，这里懒得改了

type TActive = 'All' | 'Active' | 'Completed'; // type的变量以T开头

export { ListItem, TActive };
