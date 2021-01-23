import * as dayJS from 'dayjs';
// import 'dayjs/locale/en';
// import 'dayjs/locale/de';
// import 'dayjs/locale/it';
// import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayJS.extend(relativeTime);
// Lib Doc: https://day.js.org/en/

export type DayJsPipeResponse = string | boolean | dayJS.Dayjs;

export class NzDayJSPipe {

  private readonly _localPresset: string;

  constructor(localPresset = 'fr') {
    this._localPresset = localPresset;
  }

  transform(
    value: string,
    method: 'format' | 'fromNow' | 'to' | 'isAfter',
    ops: any,
    bool = false
  ): DayJsPipeResponse {
    if (!value) return;
    switch (true) {
      case method === 'fromNow' || method === 'to':
        return (method === 'fromNow') 
          ? dayJS(value).locale(this._localPresset).fromNow(bool)
          : dayJS(value).locale(this._localPresset).to(ops, bool);

      case method === 'format':
        return dayJS(value).locale(this._localPresset).format(ops);

      case method === 'isAfter':
        return dayJS(value).locale(this._localPresset).isAfter(ops||dayJS());

      default:
        return dayJS(value).locale(this._localPresset);
    }
  }

}