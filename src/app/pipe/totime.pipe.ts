import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value, ...args) {
    const time = new Date();
    time.setTime(value);
    return time;
  }

}
