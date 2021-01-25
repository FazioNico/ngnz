import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard/copy-to-clipboard.directive';

// export core function
export  { nzCopyToClipboard as copyToClipboardFunction} from '@ngnz/core';

const DIRECTIVES = [CopyToClipboardDirective];
@NgModule({
  imports: [CommonModule],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class CopyToClipboardModule {}
