import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpeg}'
        ],
      },
      baseUrl: 'https://mccartney.io/',
      copy: [
        { src: '_redirects' }
      ]
    }
  ],
};
