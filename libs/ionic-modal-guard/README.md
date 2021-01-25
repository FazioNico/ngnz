# 🛡 @ngnz/ionic-modal-guard
Prevent navigation back when user have modal open.

## installation 

Install `npm` package with the following commande: 
```bash
$ npm install @ngzn/ionic-modal-guard
```

And add import inside `app.module.ts` or desired module.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import for @ngnz/ionic-modal-guard
import { IonicModalGuard } from '@ngnz/ionic-modal-guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // add Ionic Modal Guard
    IonicModalGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

## Usage
import and use Angular Guard inside any routing module, exemple with `app-routing.module.ts`.
```typescript

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { IonicModalGuard } from '@ngnz/ionic-modal-guard';

const routes: Routes = [
  {
    path: '', component: PageOneComponent,
    canActivate: [IonicModalGuard] // use guard
  },
  {
    path: 'page-two', component: PageTwoComponent, 
    canActivate: [IonicModalGuard] // use guard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

This library was generated with [Nx](https://nx.dev).
