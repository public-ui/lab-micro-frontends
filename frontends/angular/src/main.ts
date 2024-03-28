import { bootstrapApplication } from '@angular/platform-browser';
import { setTagNameTransformer } from '@public-ui/angular-v17';
import { bootstrap } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import { AppComponent } from './app/app.component';

const transformTagName = (tagName: string) => {
	return `${tagName}-ng-v1`;
};

setTagNameTransformer(transformTagName);

bootstrap(DEFAULT, [], {
	transformTagName,
})
	.then(() => {
		void defineCustomElements(window, {
			transformTagName,
		} as any); // https://github.com/ionic-team/stencil/issues/2847

		bootstrapApplication(AppComponent);
	})
	.catch(console.warn);
