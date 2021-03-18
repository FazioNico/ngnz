# ⭐ rating
> Angular customable rating component

## Installation
Install `npm` package with the following commande:

```
$ npm install @ngzn/rating
```

And add import inside app.module.ts or desired module.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import Angualr RatingModule from @ngnz
import { RatingModule } from '@ngnz/rating';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // add module inside your Angular application module
    RatingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage
Inside your template file:
```html
  <ngnz-rating
      hoverEffect="scale"
      color="gold"
      [maxPxSize]="32"
      [currentRate]="2.5"
      [maxRate]="5"
      (eventActions)="actions($event)"></ngnz-rating>
```

Inside .ts file: 
```ts
  actions({type, payload}: {type?: string, payload?} = {}) {
    switch (true) {
      case type === 'onRating':
        console.log('onRating', payload);
        break;

      default:
        break;
    }
  }
``` 


This library was generated with [Nx](https://nx.dev).


