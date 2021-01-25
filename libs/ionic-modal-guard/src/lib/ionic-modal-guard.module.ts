import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModalGuard } from './guard/ionic-modal.guard';

@NgModule({
  imports: [CommonModule],
  providers: [IonicModalGuard],
  exports: [IonicModalGuard]
})
export class IonicModalGuardModule {}
