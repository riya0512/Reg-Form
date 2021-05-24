import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cusdate'
})
export class DatePipe implements PipeTransform {

  transform(date:Date|string,format:string): string {

    let dob = new Date(date);

    return new DatePipe().transform(dob,format);

  }
}
