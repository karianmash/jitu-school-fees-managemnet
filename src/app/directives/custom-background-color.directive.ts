import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomBackgroundColor]',
})
export class CustomBackgroundColorDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background =
      'linear-gradient(63.1deg,rgb(0, 9, 53) 16.4%,rgb(10, 62, 165) 64.5%)';
  }
}
