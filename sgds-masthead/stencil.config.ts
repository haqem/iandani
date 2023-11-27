import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sgds-masthead',
  buildEs5: 'prod',
  globalStyle: 'src/globalStyle/global.scss',
  sourceMap: false,
  plugins: [
    sass()
  ],
  outputTargets: [
    react({
      componentCorePackage: '@govtechsg/sgds-masthead',
      proxiesFile: '../sgds-masthead-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@govtechsg/sgds-masthead',
      directivesProxyFile: '../sgds-angular/projects/sgds-angular-component/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../sgds-angular/projects/sgds-angular-component/src/lib/stencil-generated/index.ts',
      includeImportCustomElements: true,
    }),
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
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
