### Getting Started

Install the `sgds-masthead-react` package

```
npm i @govtechsg/sgds-masthead-react
```

in your App.tsx

```
import '@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css';
import { SgdsMasthead } from '@govtechsg/sgds-masthead-react';
```

In your render function

```
render(){
 return(
  <SgdsMasthead></SgdsMasthead>
  .
  .
  .
```

#### Note: If you are using CRA4 and below

You might encounter compilation warning

```
Module parse failed: Unexpected token.
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
>> var patchBrowser=function(){var r=import.meta.url;
```

To resolve this, you will need to use an addtional loader. [@open-wc/webpack-import-meta-loader](https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader/v/0.4.7)
