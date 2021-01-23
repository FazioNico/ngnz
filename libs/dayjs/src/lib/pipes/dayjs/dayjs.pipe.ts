import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { NzDayJSPipe } from '@ngnz/core'
import { DAYJS_LOCAL_PRESSET, DayjsPresset } from '../../token';

const DEFAULT_LOCAL_PRESSET = 'fr';

@Pipe({
  name: 'dayjs'
})
export class DayJSPipe extends NzDayJSPipe implements PipeTransform {

  constructor(@Optional() @Inject(DAYJS_LOCAL_PRESSET) localpresset?: DayjsPresset) {
    super(localpresset||DEFAULT_LOCAL_PRESSET);
  }

}
