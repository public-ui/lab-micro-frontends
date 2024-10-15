import { bootstrap } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';

export * as KoliBri from '@public-ui/components';

const transformTagName = (tagName: string) => {
	return `${tagName}-v2`;
};

export async function registerKolibri() {
	await bootstrap(DEFAULT, [], {
		transformTagName,
	}).then(() => {
		void defineCustomElements(window, {
			transformTagName,
		} as any); // https://github.com/ionic-team/stencil/issues/2847
	});
}
