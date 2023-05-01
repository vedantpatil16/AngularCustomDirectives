import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private eobj : ElementRef) 
  {
    this.eobj.nativeElement.style.fontWeight = "bold"
    this.eobj.nativeElement.style.background = "yellow"
  }

}
