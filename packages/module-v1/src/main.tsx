import Module from './Module.tsx';
import { setTagNameTransformer } from '@public-ui/react';

const transformTagName = (tagName: string) => `${tagName}-v2`;
setTagNameTransformer(transformTagName);

export { Module };
