import Module from './Module.tsx';
import { setTagNameTransformer } from '@public-ui/react';

const transformTagName = (tagName: string) => `${tagName}-v3`;
setTagNameTransformer(transformTagName);

export { Module };
