import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/core/constants/models';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent implements OnInit {
  @Input() product!: Iproduct;

  constructor() {}

  ngOnInit(): void {}

  increaseAmount() {
    this.product.availableAmount += 1;
  }

  decreaseAmount() {
    this.product.availableAmount -= 1;
  }

  fromCart() {
    // this.store.dispatch(fromCart({ product: this.product }));
  }
}
