import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ui-ripple]'
})
export class RippleDirective {

  constructor(private el: ElementRef) { }

  /**
   * Simula el efecto ripple cuando 'el' es clickado
   */
  onRipple() {

    if (this.el.nativeElement) {
      // TODO
    }



  }

}
