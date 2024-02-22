import {register} from '@public-ui/components';
import {defineCustomElements} from '@public-ui/components/dist/loader';
import {DEFAULT} from '@public-ui/theme-default';

export async function registerKolibri() {
    await register(DEFAULT, []).then(() => {
        void defineCustomElements(window, {
            transformTagName: (tagName: string) => `${tagName}-v2`,
        } as any); // https://github.com/ionic-team/stencil/issues/2847
    });
}


