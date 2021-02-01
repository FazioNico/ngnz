import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ngnz-pdf-flip',
  templateUrl: `./pdf-flip-book.component.html`,
  styles: [``],
})
export class PdfFlipComponent {

  @Input() pdfURL: string;

}