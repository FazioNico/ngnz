import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard/copy-to-clipboard.directive';
@NgModule({
  imports: [CommonModule],
  declarations: [CopyToClipboardDirective],
})
export class CopyToClipboardModule {}
