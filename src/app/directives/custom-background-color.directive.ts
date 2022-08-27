import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CustomBackground]',
})
export class CustomBackgroundColorDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  // Add alias in order to bind custom property to this directive
  @Input('CustomBackground')
  color!: string;

  ngOnInit(): void {
    // One way
    // this.eleRef.nativeElement.style.background =
    //   'linear-gradient(63.1deg,rgb(0, 9, 53) 16.4%,rgb(10, 62, 165) 64.5%)';

    // Recommended way
    this.renderer.setStyle(this.eleRef.nativeElement, 'background', this.color);

    /*
     * NB:There is a lot you can use the Renderer2 class to do regarding
     * DOM manipulation:
     * this.renderer.setAttribute(this.eleRef.nativeElement, 'title', 'This is a title attribute')
     * this.renderer.addClass(this.eleRef.nativeElement, 'container') Set class to an element
     */
  }
}
