
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'pdf-flip-book', 
    loadChildren: () => import(
      './features/pdf-flip-book-demo/pdf-flip-book-demo.module'
      ).then(m => m.PdfFlipBookDemoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }