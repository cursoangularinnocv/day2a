import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternatecases'
})
export class AlternatecasesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value
      .split('')
      .map((l, idx) => (idx % 2 === args) ? l.toLocaleUpperCase() : l)
      .join('')
  }

}
