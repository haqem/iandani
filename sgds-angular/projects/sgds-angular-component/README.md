
### Getting Started

Install the `sgds-angular-component` package

```
npm i @govtechsg/sgds-angular-component
```

In your \*.module.ts you will need to import the SgdsAngularComponentModule

```
import { SgdsAngularComponentModule } from '@govtechsg/sgds-angular-component';

@NgModule({
    ...
    imports:[
        ...,
        SgdsAngularComponentModule,
        ...
    ]
    ...
})
```

In your html files, you can use the component directly, e.g. sgds-masthead

```
<sgds-masthead></sgds-masthead>
```
