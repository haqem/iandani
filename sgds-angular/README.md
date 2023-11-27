# SgdsAngular

This README describes the process to generate the components for Angular. To consume the components, please refer to the main README in the core SGDS Stencil library.

## Generate Angular components from Stencil

Go to core stencil library `cd ../sgds-masthead` and run `npm run build`. If the build is successful, you will see files in the `projects/sgds-angular-component/src/lib/stencil-generated` directory
Take note in this directory, there is a `components.ts` file. Make sure the path for @govtechsg/sgds-masthead is correct else you cannot proceed with the angular build

```
...
import type { Components } from '@govtechsg/sgds-masthead/dist/components';
import { defineCustomElement as defineSgdsMasthead } from '@govtechsg/sgds-masthead/dist/components/sgds-masthead.js';
...
```

## Angular Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publish

Run `npm publish --tag latest ./dist/sgds-angular-component` to publish the project.
