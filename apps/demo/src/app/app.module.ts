import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PdfFlipBookModule } from '@ngnz/pdf-flip-book';
// import for @ngnz/copy-to-clipboard
import { CopyToClipboardModule } from '@ngnz/copy-to-clipboard';
// import for @ngnz/dayjs
import { DayjsModule, DAYJS_LOCAL_PRESSET } from '@ngnz/dayjs';
import 'dayjs/locale/en'; // import desired language
import { AppRoutingModule } from './app-routing.module';
import { IndexPageComponent } from './components/index-page/index-page.component';
// config for @ngnz/dayjs
const localDayjsPressetFactory = () => {
  // add logic to get user selected language
  return 'en'
};

@NgModule({
  declarations: [AppComponent, IndexPageComponent],
  imports: [
    BrowserModule,
    CopyToClipboardModule,
    DayjsModule,
    PdfFlipBookModule,
    AppRoutingModule
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
