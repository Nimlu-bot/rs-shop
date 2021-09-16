import { Component, Input, OnInit } from '@angular/core';
import { IdeliveryInfo } from 'src/app/core/constants/models';

@Component({
  selector: 'app-wait-card',
  templateUrl: './wait-card.component.html',
  styleUrls: ['./wait-card.component.scss'],
})
export class WaitCardComponent implements OnInit {
  @Input() order!: IdeliveryInfo;

  price = 0;

  constructor() {}

  ngOnInit(): void {
    this.price = this.order.products.reduce(
      (acc, b) => acc + (b.amount || 1) * b.price,
      0
    );
  }
}
