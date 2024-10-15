import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
	plugins: [react()],
});
