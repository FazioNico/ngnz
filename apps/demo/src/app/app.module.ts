import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for @ngnz/copy-to-clipboard
import { CopyToClipboardModule } from '@ngnz/copy-to-clipboard';
// import for @ngnz/dayjs
import { DayjsModule, DAYJS_LOCAL_PRESSET } from '@ngnz/dayjs';
import 'dayjs/locale/en'; // import desired language
// config for @ngnz/dayjs
const localDayjsPressetFactory = () => {
  // add logic to get user selected language
  return 'en'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CopyToClipboardModule,
    DayjsModule
  ],
  providers: [
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
