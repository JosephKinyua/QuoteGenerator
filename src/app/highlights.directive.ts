import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='rgb(231, 168, 90)';
  }

}
