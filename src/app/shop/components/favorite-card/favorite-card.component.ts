import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from 'src/app/core/constants/models';
import {
  setCurrentProduct,
  toCart,
} from 'src/app/redux/actions/goods.actions';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';
import { fromFavorite } from 'src/app/redux/actions/auth.actions';
import { selectFavorite } from 'src/app/redux/selectors/auth.selector';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
})
export class FavoriteCardComponent implements OnInit {
  @Input() productId!: string;

  product!: Iproduct;

  isFavorite!: boolean;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {

    this.store.select(selectFavorite).subscribe((items) => {
      // eslint-disable-next-line prefer-destructuring
      this.product = items.filter(
        (product) => product.id === this.productId
      )[0];
    });
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
