import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfFlipComponent } from './pdf-flip-book/pdf-flip-book.component';

@NgModule({
  declarations: [PdfFlipComponent],
  exports: [PdfFlipComponent],
  imports: [CommonModule],
})
export class PdfFlipBookModule {}
