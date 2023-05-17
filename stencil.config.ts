import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'components.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
