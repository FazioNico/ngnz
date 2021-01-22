import { Directive, HostListener, Input } from '@angular/core';
import { NzCopyToClopboardOptions, nzCopyToClipboard } from '@ngnz/nz-copy-to-clipboard'

@Directive({
  selector: '[ngnzCopyToClipboard]'
})
export class CopyToClipboardDirective {

  @Input('ngnzCopyToClipboard') text: string;
  @Input('ngnzCopyToClipboardOptions') options: NzCopyToClopboardOptions = {};
  // constructor() { }

  @HostListener('click')
  copy() {
    nzCopyToClipboard(
      this.text,
      this.options
    )
    // copy(this.text, {
    //   onCopy: (clipboardData: object) => {
    //     this.globalOnCopy?.(this.text, clipboardData);
    //   },
    //   ...this.options
    // });
  } 

}
