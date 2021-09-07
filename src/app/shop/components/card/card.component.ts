import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from 'src/app/core/constants/models';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';
import { toCart, toggleFavorite } from 'src/app/redux/actions/goods.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productId!: string;

  product!: Iproduct;

  isFavorite!: boolean;

  constructor(private store: Store) {}

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
}
