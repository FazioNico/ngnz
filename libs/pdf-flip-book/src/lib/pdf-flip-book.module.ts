import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfFlipComponent } from './pdf-flip-book/pdf-flip-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PdfFlipComponent],
  exports: [PdfFlipComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class PdfFlipBookModule {}
