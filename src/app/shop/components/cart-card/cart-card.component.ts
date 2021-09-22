import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ROUT } from 'src/app/core/constants/constants';
import { IcartProduct } from 'src/app/core/constants/models';
import {
  decreaseAmount,
  fromCart,
  increaseAmount,
} from 'src/app/redux/actions/auth.actions';
import { setCurrentProduct } from 'src/app/redux/actions/goods.actions';
import { selectCurrentOrder } from 'src/app/redux/selectors/auth.selector';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() productId!: string;

  product!: IcartProduct;

  price = 0;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectCurrentOrder).subscribe((products) => {
      // eslint-disable-next-line prefer-destructuring
      this.product = products.filter(
        (product) => product.id === this.productId
      )[0];
      this.price =
        Math.round(this.product.amount! * this.product.price * 100) / 100;
    });
  }

  toDetail() {
    this.store.dispatch(setCurrentProduct({ currentProduct: this.product }));
    this.router.navigate([ROUT.DETAIL]);
  }

  increaseAmount() {
    this.store.dispatch(increaseAmount({ product: this.product }));
  }

  decreaseAmount() {
    this.store.dispatch(decreaseAmount({ product: this.product }));
  }

  fromCart() {
    this.store.dispatch(fromCart({ product: this.product }));
  }
}
