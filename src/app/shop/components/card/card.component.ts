import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from 'src/app/core/constants/models';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';
import {
  setCurrentProduct,
  toggleFavorite,
} from 'src/app/redux/actions/goods.actions';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';
import {
  fromFavorite,
  toCart,
  toFavorite,
} from 'src/app/redux/actions/auth.actions';
import { selectFavorite } from 'src/app/redux/selectors/auth.selector';
import { selectCurrentOrder } from '../../../redux/selectors/auth.selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productId!: string;

  product!: Iproduct;

  isFavorite!: boolean;

  isInCart!: boolean;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectGoods).subscribe((products) => {
      // eslint-disable-next-line prefer-destructuring
      this.product = products.filter(
        (product) => product.id === this.productId
      )[0];
    });
    this.store.select(selectFavorite).subscribe((items) => {
      this.isFavorite = !!items.find((item) => item.id === this.productId);
    });
    this.store.select(selectCurrentOrder).subscribe((items) => {
      this.isInCart = !!items.find((item) => item.id === this.productId);
    });
  }

  toggleFeatured() {
    this.store.dispatch(toggleFavorite({ product: this.product }));
  }

  toFavorite() {
    this.store.dispatch(toFavorite({ product: this.product }));
  }

  fromFavorite() {
    this.store.dispatch(fromFavorite({ product: this.product }));
  }

  toCart() {
    this.store.dispatch(toCart({ product: this.product }));
  }

  getNumber() {
    return new Array(this.product.rating);
  }

  toDetail() {
    this.store.dispatch(setCurrentProduct({ currentProduct: this.product }));
    this.router.navigate([ROUT.DETAIL]);
  }
}
