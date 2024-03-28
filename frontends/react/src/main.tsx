import { bootstrap } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { setTagNameTransformer } from '@public-ui/react';
import { DEFAULT } from '@public-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const transformTagName = (tagName: string) => {
	return `${tagName}-react-v2`;
};

setTagNameTransformer(transformTagName);

bootstrap(DEFAULT, [], {
	transformTagName,
})
	.then(() => {
		void defineCustomElements(window, {
			transformTagName,
		} as any); // https://github.com/ionic-team/stencil/issues/2847

		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#react-app');
		if (htmlElement instanceof HTMLElement) {
			const root = createRoot(htmlElement);
			root.render(
				<StrictMode>
					<App />
				</StrictMode>,
			);
		}
	})
	.catch(console.warn);
