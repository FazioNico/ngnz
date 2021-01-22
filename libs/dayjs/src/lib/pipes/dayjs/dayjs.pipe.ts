import { Pipe, PipeTransform } from '@angular/core';
import { NzDayJSPipe } from '@ngnz/core'

@Pipe({
  name: 'dayjs'
})
export class DayJSPipe implements PipeTransform {

  localPresset = 'fr';

  transform(
    value: string,
    method: 'format' | 'fromNow' | 'to' | 'isAfter',
    ops: any,
    bool: boolean = false
  ): unknown {
    if (!value) return;
    return new NzDayJSPipe(this.localPresset).transform(value, method, ops, bool)
  }

}
