import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IdeliveryInfo, DeliveryInfo } from 'src/app/core/constants/models';
import {
  clearCurrentOrder,
  confirmEditOrder,
  decreaseAmount,
  fromCart,
  increaseAmount,
} from 'src/app/redux/actions/auth.actions';
import {
  selectOrderToEdit,
  selectCurrentOrder,
} from 'src/app/redux/selectors/auth.selector';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';
import { IcartProduct } from '../../../core/constants/models';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss'],
})
export class EditOrderComponent implements OnInit {
  order: IdeliveryInfo = new DeliveryInfo();

  products: IcartProduct[] = [];

  price = 0;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectOrderToEdit).subscribe((order) => {
      this.order = order;
    });
    this.store.select(selectCurrentOrder).subscribe((products) => {
      this.products = products;

      const rawPrice = this.products.reduce(
        (acc, b) => acc + (b.amount || 1) * b.price,
        0
      );
      this.price = Math.round(rawPrice * 100) / 100;
    });
  }

  increaseAmount(product: IcartProduct) {

    this.store.dispatch(increaseAmount({ product }));
  }

  decreaseAmount(product: IcartProduct) {
    this.store.dispatch(decreaseAmount({ product }));
  }

  fromCart(product: IcartProduct) {
    this.store.dispatch(fromCart({ product }));
  }

  confirm() {
    this.store.dispatch(
      confirmEditOrder({ order: { ...this.order, products: this.products } })
    );
    this.store.dispatch(clearCurrentOrder());
    this.router.navigate([ROUT.WAIT]);
  }
}
