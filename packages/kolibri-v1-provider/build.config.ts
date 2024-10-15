import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/main'],
	clean: true,
	declaration: true,
	externals: [],
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
		dts: {
			respectExternal: false, // @see https://github.com/unjs/unbuild/issues/135#issuecomment-1426764411
		},
	},
});
