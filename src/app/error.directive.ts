import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  @Input('appError') element:any;

  constructor(private el: ElementRef) { }

  @HostListener ('keyup') onKeyUp()
  {
    if(this.element.name==="firstname")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }

    else if(this.element.name==="lastname")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }


    else if(this.element.name==="password")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.minlength)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }

    else if(this.element.name==="email")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }

    else if(this.element.name==="country")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
        }
        else
        {
          this.el.nativeElement.style.backgroundColor='green';
        }
      }
    }

    else if(this.element.name==="mobileno")
    {
      if(this.element.errors && (this.element.dirty || this.element.touched))
      {
        if(this.element.errors.required)
        {
          this.el.nativeElement.style.backgroundColor='red';
         }
         else if(this.element.errors.pattern)
         {
          this.el.nativeElement.style.backgroundColor='yellow';
         }
      }
      else
      {
        this.el.nativeElement.style.backgroundColor='green';
      }
    }





}


}
