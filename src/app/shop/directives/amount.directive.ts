import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import {
  COLOR,
  FIRST_STEP,
  SECOND_STEP,
} from 'src/app/core/constants/constants';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnChanges {
  @Input() availableAmount = 0;

  private color = COLOR.GREEN;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
    this.setColor();
  }

  ngOnChanges(): void {
    if (this.availableAmount < SECOND_STEP) {
      this.color = COLOR.YELLOW;
    }
    if (this.availableAmount < FIRST_STEP) {
      this.color = COLOR.RED;
    }

    this.setColor(this.color);
  }

  public setColor(color: string = COLOR.GREEN): void {
    this.renderer2.setStyle(this.el.nativeElement, 'color', `${color}`);
  }
}
