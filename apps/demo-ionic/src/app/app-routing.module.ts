
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { IonicModalGuard } from '@ngnz/ionic-modal-guard';
import { PageRatingComponent } from './page-rating/page-rating.component';
import { PageDayjsComponent } from './page-dayjs/page-dayjs.component';
import { PageCopyComponent } from './page-copy/page-copy.component';

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
    component: PageRatingComponent,
    canActivate: [IonicModalGuard]
  },
  {
    path: 'page-dayjs',
    component: PageDayjsComponent,
    canActivate: [IonicModalGuard]
  },
  {
    path: 'page-copy',
    component: PageCopyComponent,
    canActivate: [IonicModalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }