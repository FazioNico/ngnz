
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfFlipBookDemoPageComponent } from './pdf-flip-book-demo-page/pdf-flip-book-demo-page.component';

const routes: Routes = [
  {
    path: '',
    component: PdfFlipBookDemoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfFlipBookRoutingModule { }