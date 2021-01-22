# ✂️ copy-to-clipboard

>Simple Angular module exposing basic Directive that'll try to use native `document.execCommand` to copy content text to clopboard and finally, display  overidable `alert` to confirme action to user.


## installation 

Install `npm` package with the following commande: 
```bash
$ npm install @ngzn/copy-to-clipboard
```

And add import inside `app.module.ts` or desired module.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import Angualr CopyToClipboardModule from @ngnz
import { CopyToClipboardModule } from '@ngnz/copy-to-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // add module inside your Angular application module
    CopyToClipboardModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

## Usage
When an element that contains `nzCopyToClipboard` directive is clicked, the value of `nzCopyToClipboard` will be copied into the clipboard.
```html
<button nzCopyToClipboard="Text to copy to clipboard">Copy</button>
<button [nzCopyToClipboard]="typescritpProperty">Copy</button>
```

## Only Function Usage 
This feature is exporetable without Angular wrapping to allow using inside other projet.

```ts
// import function
import { copyToClipboardFunction } from '@ngnz/copy-to-clipboard';

// user copy function logic
const myTextToCopy = 'See magic happen!';
copyToClipboardFunction(myTextToCopy);
```