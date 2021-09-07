import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStars]',
})
export class AppStarsDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appStars(times: number) {
    for (let i = 0; i < times; i += 1) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
