# ⏰ @ngnz/dayjs

> Immutable Date-Time utils allow you to display Date like `1 minute ago`. 


## installation 

Install `npm` package with the following commande: 
```bash
$ npm install @ngzn/dayjs
```

And add import inside `app.module.ts` or desired module.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for @ngnz/dayjs
import { DayjsModule, DAYJS_LOCAL_PRESSET } from '@ngnz/dayjs';
import 'dayjs/locale/en'; // import desired language
// optionnal config for @ngnz/dayjs
const localDayjsPressetFactory = () => {
  // add logic to get user selected language
  return 'en'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // add module inside your Angular application module
    DayjsModuleModule 
  ],
  providers: [
    // optionnal config to change language pressets
    {
      provide: DAYJS_LOCAL_PRESSET,
      useFactory() {
        return localDayjsPressetFactory()
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

## Usage
Useing Angular Pipe inside Angular application.
```html
{{'01/01/2021'|dayjs: 'formNow'}}
```

## Only Function Usage 
This feature is exporetable without Angular wrapping to allow using inside other projet.

```ts
// import function
import { dayjsFunction } from '@ngnz/dayjs';

// user copy function logic
const value = '01/01/2021';
const result = new dayjsFunction('fr').transform(value, 'fromNow', null, true);
```
