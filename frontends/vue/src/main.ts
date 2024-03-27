import { bootstrap } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import { setTagNameTransformer } from '@public-ui/vue';
import { createApp } from 'vue';
import App from './App.vue';

const transformTagName = (tagName: string) => {
	return `${tagName}-vue-v1`;
};

setTagNameTransformer(transformTagName);

bootstrap(DEFAULT, [], {
	transformTagName,
})
	.then(() => {
		void defineCustomElements(window, {
			transformTagName,
		} as any); // https://github.com/ionic-team/stencil/issues/2847

		const app = createApp(App);
		app.mount('div#vue-app');
	})
	.catch(console.warn);
