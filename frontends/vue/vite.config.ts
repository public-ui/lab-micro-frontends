import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				inlineDynamicImports: true,
			},
		},
	},
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// treat all tags with a dash as custom elements
					isCustomElement: (tag) => tag.startsWith('kol-'),
				},
			},
		}),
	],
});
