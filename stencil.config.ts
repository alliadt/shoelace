import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Shoelace',
  globalStyle: 'src/styles/shoelace.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: 'This component was built with [Stencil](https://stenciljs.com/).'
    },
    {
      type: 'www',
      serviceWorker: undefined // disable service workers
    }
  ],
  plugins: [
    sass({
      includePaths: ['./node_modules', './src/styles']
    })
  ]
};
