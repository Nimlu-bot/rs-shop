import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../core/constants/models';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss'],
})
export class PopularCardComponent {
  @Input() product!: Iproduct;

  toDetail() {}
}
