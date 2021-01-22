import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayJSPipe } from './pipes/dayjs/dayjs.pipe';

const PIPES = [
  DayJSPipe
];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES],
  imports: [CommonModule],
})
export class DayjsModule {}
