import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfFlipBookDemoPageComponent } from './pdf-flip-book-demo-page/pdf-flip-book-demo-page.component';
import { PdfFlipBookRoutingModule } from './pdf-flip-book-demo-routing.module'
import { PdfFlipBookModule } from '@ngnz/pdf-flip-book';


@NgModule({
  declarations: [PdfFlipBookDemoPageComponent],
  imports: [
    CommonModule,
    PdfFlipBookModule,
    PdfFlipBookRoutingModule
  ]
})
export class PdfFlipBookDemoModule { }
