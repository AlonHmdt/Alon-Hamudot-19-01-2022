import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unitSign'
})

export class UnitSignPipe implements PipeTransform {
  transform(temperature: string): string {
    return temperature + '°C';
  }
}
