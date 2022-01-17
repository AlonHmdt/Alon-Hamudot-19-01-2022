import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'zeroPad'
})

export class ZeroPadPipe implements PipeTransform {
  transform(num: string, size: any): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
      return s;
    }
    return s;
  }
}
