import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/main'],
	clean: true,
	declaration: true,
	externals: [],
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
	},
});
