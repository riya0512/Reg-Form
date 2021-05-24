import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  // transform(date:string,day:number,format:string='yyyy-MM-dd'): string {
  //   let dob=new Date(date);
  //   return new DatePipe('en-US').transform(dob,format);
  // }

  transform(date:Date|string,format:string): string {

    return "";


  }


}
