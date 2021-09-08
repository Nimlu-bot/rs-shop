import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from 'src/app/core/constants/models';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';
import {
  setCurrentProduct,
  toCart,
  toggleFavorite,
} from 'src/app/redux/actions/goods.actions';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productId!: string;

  product!: Iproduct;

  isFavorite!: boolean;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectGoods).subscribe((products) => {
      // eslint-disable-next-line prefer-destructuring
      this.product = products.filter(
        (product) => product.id === this.productId
      )[0];
    });
  }

  toggleFeatured() {
    this.store.dispatch(toggleFavorite({ product: this.product }));
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
