
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { IonicModalGuard } from '@ngnz/ionic-modal-guard';
import { PageRatingComponent } from './page-rating/page-rating.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
    canActivate: [IonicModalGuard]
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    canActivate: [IonicModalGuard]
  },
  {
    path: 'page-rating',
    component: PageRatingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }