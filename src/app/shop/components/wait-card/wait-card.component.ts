import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IdeliveryInfo } from 'src/app/core/constants/models';
import {
  deleteOrder,
  editOrder,
  setCurrentOrder,
} from 'src/app/redux/actions/auth.actions';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-wait-card',
  templateUrl: './wait-card.component.html',
  styleUrls: ['./wait-card.component.scss'],
})
export class WaitCardComponent implements OnInit {
  @Input() order!: IdeliveryInfo;

  price = 0;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    const rawPrice = this.order.products.reduce(
      (acc, b) => acc + (b.amount || 1) * b.price,
      0
    );
    this.price = Math.round(rawPrice * 100) / 100;
  }

  deleteOrder() {
    this.store.dispatch(deleteOrder({ orderId: this.order.id }));
  }

  editOrder() {
    this.store.dispatch(
      editOrder({ order: JSON.parse(JSON.stringify(this.order)) })
    );
    this.store.dispatch(setCurrentOrder({ products: this.order.products }));
    this.router.navigate([ROUT.EDIT]);
  }
}
