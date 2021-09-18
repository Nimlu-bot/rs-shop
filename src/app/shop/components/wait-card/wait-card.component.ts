import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IdeliveryInfo } from 'src/app/core/constants/models';
import { deleteOrder } from 'src/app/redux/actions/auth.actions';

@Component({
  selector: 'app-wait-card',
  templateUrl: './wait-card.component.html',
  styleUrls: ['./wait-card.component.scss'],
})
export class WaitCardComponent implements OnInit {
  @Input() order!: IdeliveryInfo;

  price = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.price = this.order.products.reduce(
      (acc, b) => acc + (b.amount || 1) * b.price,
      0
    );
  }

  deleteOrder() {
    this.store.dispatch(deleteOrder({ orderId: this.order.id }));
  }
}
