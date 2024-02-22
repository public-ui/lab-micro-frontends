import Module from "./Module.tsx";
import { setCustomTagNameTransformer } from '@public-ui/react'

const transformTagName = (tagName: string) => `${tagName}-v2`;
setCustomTagNameTransformer(transformTagName);

export { Module }
