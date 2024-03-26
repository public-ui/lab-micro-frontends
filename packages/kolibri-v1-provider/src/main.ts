import {register} from '@public-ui/components';
import {defineCustomElements} from '@public-ui/components/dist/loader';
import {DEFAULT} from '@public-ui/theme-default';

export async function registerKolibri() {
    await register(DEFAULT, defineCustomElements)
}
