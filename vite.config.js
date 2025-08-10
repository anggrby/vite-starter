import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				page1: resolve(__dirname, 'src/features/page-1/page-1.html'),
				page2: resolve(__dirname, 'src/features/page-2/page-2.html'),
			},
		},
	},
});
