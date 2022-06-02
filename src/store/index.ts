import footer from './modules/footer'
import main from './modules/main'

export default function useStore() {
	return {
		main: main(),
		footer: footer(),
	}
}
