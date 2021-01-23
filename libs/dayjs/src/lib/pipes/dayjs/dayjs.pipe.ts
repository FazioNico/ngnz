import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { NzDayJSPipe, DayJsPipeResponse } from '@ngnz/core'
import { DAYJS_LOCAL_PRESSET, DayjsPresset } from '../../token';
const DEFAULT_LOCAL_PRESSET = 'fr';

@Pipe({
  name: 'dayjs'
})
export class DayJSPipe extends NzDayJSPipe implements PipeTransform {

  constructor(@Optional() @Inject(DAYJS_LOCAL_PRESSET) localpresset?: DayjsPresset) {
    super(localpresset||DEFAULT_LOCAL_PRESSET);
  }

  transform(
    value: string, 
    method: 'format' | 'fromNow' | 'to' | 'isAfter', 
    ops: any, 
    bool?: boolean
  ): DayJsPipeResponse {
    const res = super.transform(value, method, ops, bool);
    return res;
  }

}
