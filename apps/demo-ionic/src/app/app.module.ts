import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageModalComponent } from './page-modal/page-modal.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicModalGuard } from '@ngnz/ionic-modal-guard';
import { RatingModule } from '@ngnz/rating';
import { DayjsModule, DAYJS_LOCAL_PRESSET } from '@ngnz/dayjs';
import 'dayjs/locale/en'; // import desired language
// optionnal config for @ngnz/dayjs
const localDayjsPressetFactory = () => {
  // add logic to get user selected language
  return 'en'
};

import { PageRatingComponent } from './page-rating/page-rating.component';
import { PageDayjsComponent } from './page-dayjs/page-dayjs.component';


@NgModule({
  declarations: [AppComponent, PageOneComponent, PageTwoComponent, PageModalComponent, PageRatingComponent, PageDayjsComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    RatingModule,
    DayjsModule
  ],
  providers: [
    IonicModalGuard,
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
