import { mergeConfig } from 'vitest/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line node/no-unpublished-import
import configShared from '../../vitest.config.js';

export default mergeConfig(configShared, {
  test: {
    name: 'common',
  },
});
