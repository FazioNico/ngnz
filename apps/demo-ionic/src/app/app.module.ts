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


@NgModule({
  declarations: [AppComponent, PageOneComponent, PageTwoComponent, PageModalComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    RatingModule
  ],
  providers: [
    IonicModalGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
