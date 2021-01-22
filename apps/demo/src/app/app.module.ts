import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CopyToClipboardModule } from '@ngnz/copy-to-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CopyToClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
